import fs from 'node:fs'
import path from 'node:path'

const ORIGIN = 'https://2c83d886-270e-497d-8146-81ebdb1c668c.dev26.app-preview.com'
const ROOT = path.resolve(process.cwd(), 'mirror')

function processFile(file){
  const html = fs.readFileSync(file, 'utf8')
  let replaced = html
    // assets -> local mirror
    .replace(/(<script[^>]+src=")\/(?!\/)/g, `$1/mirror/`)
    .replace(/(<link[^>]+href=")\/(?!\/)/g, (m)=> m.replace('href="/', `href="/mirror/`))
    .replace(/(<img[^>]+src=")\/(?!\/)/g, `$1/mirror/`)
    .replace(/url\(\/(?!\/)/g, `url(/mirror/`)
    // navigation anchors -> local mirror
    .replace(/(<a[^>]+href=")\/(?!\/)/g, `$1/mirror/`)
    // keep absolute http(s) assets as-is

  // remove dev scripts (vite/client, react-refresh, horizons instrumentation)
  replaced = replaced
    .replace(/<script[^>]*>[^<]*import\s+\{\s*injectIntoGlobalHook[\s\S]*?<\/script>/g, '')
    .replace(/<script[^>]+src="[^"]*\/\@vite\/client"[^>]*><\/script>/g, '')
    .replace(/<script[^>]*>[^<]*horizons[\s\S]*?<\/script>/g, '')

  fs.writeFileSync(file, replaced, 'utf8')
  console.log('Fix:', path.relative(ROOT, file))
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
console.log('Postprocess concluído')