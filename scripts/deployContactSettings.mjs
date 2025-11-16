import fs from 'node:fs'
import path from 'node:path'

const pat = process.env.SUPABASE_ACCESS_TOKEN || process.env.SUPABASE_PAT
const ref = process.env.SUPABASE_REF || 'ahnordxbhndrhfbkqvro'
if (!pat) { console.error('SUPABASE_ACCESS_TOKEN não encontrada'); process.exit(1) }

async function deploy() {
  const funcDir = path.resolve('supabase/functions/contact-settings')
  const indexTs = path.join(funcDir, 'index.ts')
  if (!fs.existsSync(indexTs)) { console.error('index.ts não encontrado'); process.exit(1) }

  const metadata = { entrypoint_path: 'index.ts', name: 'contact-settings', verify_jwt: false }
  const form = new FormData()
  form.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }), 'metadata.json')
  form.append('file', new Blob([fs.readFileSync(indexTs)], { type: 'application/typescript' }), 'index.ts')

  const res = await fetch(`https://api.supabase.com/v1/projects/${ref}/functions/deploy?slug=contact-settings&verify_jwt=false`, {
    method: 'POST',
    headers: { authorization: `Bearer ${pat}` },
    body: form
  })
  const txt = await res.text()
  if (!res.ok) { console.error('Falha ao deploy', res.status, txt); process.exit(1) }
  console.log('Deploy OK:', txt.slice(0, 300))
}

deploy().catch((e)=>{console.error(e);process.exit(1)})