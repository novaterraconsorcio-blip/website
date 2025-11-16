import fs from 'node:fs'
import path from 'node:path'
import puppeteer from 'puppeteer'

const SOURCE_URL = 'https://2c83d886-270e-497d-8146-81ebdb1c668c.dev26.app-preview.com/'
const OUT_DIR = path.resolve(process.cwd(), 'mirror')
const OUT_FILE = path.join(OUT_DIR, 'index.html')

async function ensureDir(dir){
  if(!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
}

async function main(){
  await ensureDir(OUT_DIR)
  const browser = await puppeteer.launch({ headless: 'new' })
  const page = await browser.newPage()
  await page.goto(SOURCE_URL, { waitUntil: 'networkidle0', timeout: 120000 })
  // Scroll to trigger lazy content
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let total = 0
      const step = () => {
        const h = document.documentElement.scrollHeight
        window.scrollTo(0, h)
        const now = document.documentElement.scrollHeight
        if (now === h || total > 10) return resolve()
        total++
        setTimeout(step, 200)
      }
      step()
    })
  })
  const html = await page.content()
  fs.writeFileSync(OUT_FILE, html, 'utf8')
  await browser.close()
  console.log(`Snapshot salvo em ${OUT_FILE}`)
}

main().catch((err)=>{console.error(err);process.exit(1)})