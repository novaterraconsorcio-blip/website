import fs from 'node:fs'
import path from 'node:path'

const ROOT = path.resolve(process.cwd())
const SRC = path.join(ROOT, 'mirror')

function rewriteHtml(html){
  return html
    .replace(/href=\"\/mirror\//g, 'href="/')
    .replace(/src=\"\/mirror\//g, 'src="/')
    .replace(/url\(\/mirror\//g, 'url(/')
    .replace(/href=\"\/mirror\/_ext\//g, 'href="/_ext/')
    .replace(/src=\"\/mirror\/_ext\//g, 'src="/_ext/')
    .replace(/url\(\/mirror\/_ext\//g, 'url(/_ext/')
    .replace(/<meta[^>]*http-equiv=\"refresh\"[^>]*>/gi, '')
}

function ensureDirForFile(file){
  const dir = path.dirname(file)
  if(!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
}

function promote(){
  if(!fs.existsSync(SRC)){
    console.error('Diretório mirror não encontrado')
    process.exit(1)
  }
  const entries = []
  function walk(dir){
    for(const entry of fs.readdirSync(dir)){
      const full = path.join(dir, entry)
      const stat = fs.statSync(full)
      if(stat.isDirectory()) walk(full)
      else entries.push(full)
    }
  }
  walk(SRC)

  for(const srcFile of entries){
    const rel = path.relative(SRC, srcFile)
    const dest = path.join(ROOT, rel)
    ensureDirForFile(dest)
    if(srcFile.endsWith('.html')){
      const html = fs.readFileSync(srcFile, 'utf8')
      const out = rewriteHtml(html)
      fs.writeFileSync(dest, out, 'utf8')
    } else {
      fs.copyFileSync(srcFile, dest)
    }
    console.log('Promoted:', rel)
  }
  // ensure root index.html equals promoted mirror/index.html
  const idxSrc = path.join(SRC, 'index.html')
  const idxDest = path.join(ROOT, 'index.html')
  if(fs.existsSync(idxSrc)){
    const html = fs.readFileSync(idxSrc, 'utf8')
    fs.writeFileSync(idxDest, rewriteHtml(html), 'utf8')
    console.log('Root index.html atualizado')
  }
}

promote()
console.log('Promote concluído')