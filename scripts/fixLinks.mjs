import fs from 'node:fs'
import path from 'node:path'
import * as cheerio from 'cheerio'

const ROOT = path.resolve(process.cwd(), 'mirror')
const EXT_DIR = path.join(ROOT, '_ext')

function findLocalForExternal(u) {
  const url = new URL(u)
  const hostDir = path.join(EXT_DIR, url.hostname)
  const baseRel = url.pathname.replace(/^\/+/, '')
  const basePath = path.join(hostDir, baseRel)
  const candidates = [
    basePath + '.jpg',
    basePath + '.png',
    basePath + '.webp',
    basePath + '.gif',
    basePath + '.svg',
    basePath + '.css',
    basePath + '.js'
  ]
  for (const c of candidates) {
    if (fs.existsSync(c)) {
      const rel = path.relative(ROOT, c).replace(/\\/g, '/')
      return '/' + rel
    }
  }
  return null
}

function findLocalForMirrorPath(p) {
  try {
    const rel = p.replace(/^\/+/, '')
    let base = path.join(ROOT, rel)
    const baseNoExt = base
    const candidates = [
      base,
      baseNoExt + '.jpg',
      baseNoExt + '.png',
      baseNoExt + '.webp',
      baseNoExt + '.gif',
      baseNoExt + '.svg',
      baseNoExt + '.css',
      baseNoExt + '.js',
      path.join(baseNoExt, 'index.html')
    ]
    for (const c of candidates) {
      if (fs.existsSync(c)) {
        const relOut = path.relative(ROOT, c).replace(/\\/g, '/')
        return '/' + relOut
      }
    }
  } catch {}
  return null
}

function processFile(file){
  let html = fs.readFileSync(file, 'utf8')
  const $ = cheerio.load(html)
  // fix src/href for external URLs
  $('img,script,link,source,a').each((_, el)=>{
    const $el = $(el)
    const attrs = ['src','href']
    for(const attr of attrs){
      const val = $el.attr(attr)
      if(!val) continue
      // scheme-less URLs
      if(/^\/\//.test(val)){
        $el.attr(attr, 'https:' + val)
        continue
      }
      if(/^https?:\/\//.test(val)){
        const local = findLocalForExternal(val)
        if(local) $el.attr(attr, local)
      }
      // mirror _ext legacy: revert to external if local not resolvable
      if(/^\/mirror\/_ext\//.test(val)){
        const local = findLocalForMirrorPath(val)
        if(local && !local.endsWith('/index.html')) $el.attr(attr, local)
        else {
          const external = 'https://' + val.replace(/^\/mirror\/_ext\//,'')
          $el.attr(attr, external)
        }
      }
      if(/^\//.test(val) && attr !== 'href'){
        // root-relative asset
        $el.attr(attr, '/mirror' + val)
      }
    }
  })
  // inline style url(...)
  $('[style]').each((_, el)=>{
    const $el = $(el)
    let style = $el.attr('style')||''
    style = style.replace(/url\((['\"]?)(\/\/[^\)\"']+)(['\"]?)\)/g, (m, q1, full, q2)=>`url(${q1}https:${full}${q2})`)
    style = style.replace(/url\((['\"]?)(https?:\/\/[^\)\"']+)(['\"]?)\)/g, (m, q1, full, q2)=>{
      const local = findLocalForExternal(full)
      if(local) return `url(${q1}${local}${q2})`
      return m
    })
    style = style.replace(/url\((['\"]?)(\/mirror\/_ext\/[^\)\"']+)(['\"]?)\)/g, (m, q1, full, q2)=>{
      const local = findLocalForMirrorPath(full)
      if(local && !local.endsWith('/index.html')) return `url(${q1}${local}${q2})`
      const ext = 'https://' + full.replace(/^\/mirror\/_ext\//,'')
      return `url(${q1}${ext}${q2})`
    })
    style = style.replace(/url\((['\"]?)\/(?!\/)([^\)\"']+)(['\"]?)\)/g, (m, q1, rel, q2)=>`url(${q1}/mirror/${rel}${q2})`)
    $el.attr('style', style)
  })
  // style tags content
  $('style').each((_, el)=>{
    let css = $(el).html()||''
    css = css.replace(/url\((['\"]?)(\/\/[^\)\"']+)(['\"]?)\)/g, (m, q1, full, q2)=>`url(${q1}https:${full}${q2})`)
    css = css.replace(/url\((['\"]?)(https?:\/\/[^\)\"']+)(['\"]?)\)/g, (m, q1, full, q2)=>{
      const local = findLocalForExternal(full)
      if(local) return `url(${q1}${local}${q2})`
      return m
    })
    css = css.replace(/url\((['\"]?)(\/mirror\/_ext\/[^\)\"']+)(['\"]?)\)/g, (m, q1, full, q2)=>{
      const local = findLocalForMirrorPath(full)
      if(local && !local.endsWith('/index.html')) return `url(${q1}${local}${q2})`
      const ext = 'https://' + full.replace(/^\/mirror\/_ext\//,'')
      return `url(${q1}${ext}${q2})`
    })
    css = css.replace(/url\((['\"]?)\/(?!\/)([^\)\"']+)(['\"]?)\)/g, (m, q1, rel, q2)=>`url(${q1}/mirror/${rel}${q2})`)
    $(el).html(css)
  })
  fs.writeFileSync(file, $.html(), 'utf8')
  console.log('Fixed links:', path.relative(ROOT, file))
}

function walk(dir){
  for(const entry of fs.readdirSync(dir)){
    const full = path.join(dir, entry)
    const stat = fs.statSync(full)
    if(stat.isDirectory()) walk(full)
    else if(full.endsWith('.html')) processFile(full)
  }
}

walk(ROOT)
console.log('FixLinks concluído')