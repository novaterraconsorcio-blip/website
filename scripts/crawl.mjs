import fs from 'node:fs'
import path from 'node:path'
import puppeteer from 'puppeteer'

const BASE = 'https://2c83d886-270e-497d-8146-81ebdb1c668c.dev26.app-preview.com'
const OUT = path.resolve(process.cwd(), 'mirror')
const MAX_PAGES = 25

function toLocalFile(url) {
  const u = new URL(url)
  let p = u.pathname
  if (!p || p === '/') return path.join(OUT, 'index.html')
  if (p.endsWith('/')) p = p.slice(0, -1)
  return path.join(OUT, p, 'index.html')
}

function ensureDirForFile(file) {
  const dir = path.dirname(file)
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
}

function postprocess(html) {
  // Rewrite assets to absolute remote domain, keep anchor href intact
  return html
    .replace(/(<script[^>]+src=")\/(?!\/)/g, `$1${BASE}/`)
    .replace(/(<link[^>]+href=")\/(?!\/)/g, (m)=>{
      // Only rewrite stylesheets and icons
      if (/rel="stylesheet"|icon/.test(m)) return m.replace('href="/', `href="${BASE}/`)
      return m
    })
    .replace(/(<img[^>]+src=")\/(?!\/)/g, `$1${BASE}/`)
    .replace(/url\(\/(?!\/)/g, `url(${BASE}/`)
}

async function crawl() {
  if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true })
  const browser = await puppeteer.launch({ headless: 'new' })
  const page = await browser.newPage()
  const saved = new Set()
  page.on('response', async (response) => {
    try {
      const url = response.url()
      const u = new URL(url)
      const isSameOrigin = u.origin === BASE
      const baseDir = isSameOrigin ? OUT : path.join(OUT, '_ext', u.hostname)
      const relPath = u.pathname.replace(/^\/+/, '')
      let filePath = path.resolve(path.join(baseDir, relPath))
      const headers = response.headers() || {}
      const ct = (headers['content-type'] || '').toLowerCase()
      const hasExt = path.extname(u.pathname).trim() !== ''
      const isDir = u.pathname.endsWith('/')
      const extFromCT = ct.includes('image/jpeg') ? '.jpg'
        : ct.includes('image/png') ? '.png'
        : ct.includes('image/webp') ? '.webp'
        : ct.includes('image/gif') ? '.gif'
        : ct.includes('image/svg') ? '.svg'
        : ct.includes('text/css') ? '.css'
        : (ct.includes('application/javascript') || ct.includes('text/javascript')) ? '.js'
        : ct.includes('font/woff2') ? '.woff2'
        : ct.includes('font/woff') ? '.woff'
        : ct.includes('font/ttf') ? '.ttf'
        : null
      if (isDir) {
        filePath = path.join(filePath, 'index.html')
      } else if (!hasExt) {
        if (ct.includes('text/html')) filePath = path.join(filePath, 'index.html')
        else if (extFromCT) filePath = filePath + extFromCT
        else filePath = path.join(filePath, 'index.html')
      }
      if (saved.has(filePath)) return
      const buf = await response.buffer()
      ensureDirForFile(filePath)
      fs.writeFileSync(filePath, buf)
      saved.add(filePath)
    } catch {}
  })
  const queue = [BASE + '/']
  const visited = new Set()
  while (queue.length && visited.size < MAX_PAGES) {
    const url = queue.shift()
    if (!url || visited.has(url)) continue
    visited.add(url)
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 120000 })
    // trigger lazy content
    await page.evaluate(async () => {
      await new Promise((resolve) => {
        let i = 0
        const tick = () => {
          window.scrollTo(0, document.documentElement.scrollHeight)
          if (++i > 10) return resolve()
          setTimeout(tick, 200)
        }
        tick()
      })
    })
    const html = await page.content()
    const file = toLocalFile(url)
    ensureDirForFile(file)
    fs.writeFileSync(file, postprocess(html), 'utf8')
    // collect internal links
    const links = await page.$$eval('a[href]', (as) => as.map(a => a.getAttribute('href')).filter(Boolean))
    for (const href of links) {
      try {
        const full = new URL(href, url).href
        if (full.startsWith(BASE)) queue.push(full)
      } catch {}
    }
    console.log(`Saved: ${file}`)
  }
  await browser.close()
  console.log(`Crawl concluído. Páginas: ${visited.size}`)
}

crawl().catch((e)=>{console.error(e);process.exit(1)})