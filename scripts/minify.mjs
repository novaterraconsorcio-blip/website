import fs from 'node:fs'
import path from 'node:path'
import { minify as minifyHtml } from 'html-minifier-terser'
import * as csso from 'csso'
import { minify as minifyJs } from 'terser'

const ROOT = path.resolve(process.cwd(), 'mirror')

async function minifyFile(file){
  const ext = path.extname(file).toLowerCase()
  try{
    if(ext === '.html'){
      const html = fs.readFileSync(file, 'utf8')
      const out = await minifyHtml(html, {
        collapseWhitespace: true,
        removeComments: true,
        minifyJS: true,
        minifyCSS: true
      })
      fs.writeFileSync(file, out, 'utf8')
    } else if(ext === '.css'){
      const css = fs.readFileSync(file, 'utf8')
      const out = csso.minify(css).css
      fs.writeFileSync(file, out, 'utf8')
    } else if(ext === '.js'){
      const js = fs.readFileSync(file, 'utf8')
      const out = await minifyJs(js, { mangle: true, compress: true })
      if(out.code) fs.writeFileSync(file, out.code, 'utf8')
    }
    console.log('Minified:', path.relative(ROOT, file))
  }catch(err){
    console.warn('Skip minify:', path.relative(ROOT, file), '-', err.message)
  }
}

function walk(dir){
  for(const entry of fs.readdirSync(dir)){
    const full = path.join(dir, entry)
    const stat = fs.statSync(full)
    if(stat.isDirectory()) walk(full)
    else if(['.html','.css','.js'].includes(path.extname(full).toLowerCase())){
      // avoid minifying vite dev client and react-refresh buckets if any
      if(/@vite|@react-refresh/.test(full)) continue
      // process
      minifyFile(full)
    }
  }
}

walk(ROOT)
console.log('Minify concluído')