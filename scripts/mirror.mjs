import scrape from 'website-scraper'
import PuppeteerPlugin from 'website-scraper-puppeteer'
import fs from 'node:fs'
import path from 'node:path'

const SOURCE_URL = 'https://2c83d886-270e-497d-8146-81ebdb1c668c.dev26.app-preview.com/'
const OUT_DIR = path.resolve(process.cwd(), 'mirror')

async function removeDirIfExists(dir){
  try { if (fs.existsSync(dir)) fs.rmSync(dir, { recursive: true, force: true }) } catch {}
}

async function main(){
  await removeDirIfExists(OUT_DIR)
  const options = {
    urls: [ SOURCE_URL ],
    directory: OUT_DIR,
    recursive: true,
    maxRecursiveDepth: 3,
    requestConcurrency: 10,
    urlFilter: (url) => url.startsWith(SOURCE_URL),
    sources: [
      { selector: 'img', attr: 'src' },
      { selector: 'link[rel="stylesheet"]', attr: 'href' },
      { selector: 'script', attr: 'src' }
    ],
    subdirectories: [
      { directory: 'img', extensions: ['.jpg', '.jpeg', '.png', '.svg', '.webp'] },
      { directory: 'js', extensions: ['.js'] },
      { directory: 'css', extensions: ['.css'] }
    ],
    defaultFilename: 'index.html',
    prettifyUrls: true,
    ignoreErrors: true,
    plugins: [
      new PuppeteerPlugin({
        launchOptions: { headless: true },
        scrollToBottom: { timeout: 2000, viewportN: 10 },
        blockNavigation: true
      })
    ]
  }
  try {
    const result = await scrape(options)
    console.log(`Mirror OK -> ${OUT_DIR}`)
    console.log(`Pages: ${result?.length ?? 0}`)
    process.exit(0)
  } catch (err) {
    console.error('Falha ao espelhar site:', err?.message || String(err))
    process.exit(1)
  }
}

main()