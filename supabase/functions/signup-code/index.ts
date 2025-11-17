// deno-lint-ignore-file no-explicit-any
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS'
}

function json(body: any, init: ResponseInit = {}) {
  return new Response(JSON.stringify(body), { headers: { 'Content-Type': 'application/json', ...corsHeaders }, ...init })
}
function bad(msg: string, status = 400) { return json({ ok: false, error: msg }, { status }) }

function isEmail(s: string) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s) }
function randCode() { return String(Math.floor(100000 + Math.random() * 900000)) }

async function putObject(path: string, payload: any) {
  const base = Deno.env.get('SUPABASE_URL') || ''
  const key = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || ''
  if (!base || !key) return { ok: false, error: 'Ambiente inválido' }
  const url = `${base}/storage/v1/object/${path}`
  const res = await fetch(url, { method: 'PUT', headers: { authorization: `Bearer ${key}`, 'content-type': 'application/json' }, body: JSON.stringify(payload) })
  if (!res.ok) {
    const upsert = `${url}?upsert=true`
    const r = await fetch(upsert, { method: 'POST', headers: { authorization: `Bearer ${key}`, 'content-type': 'application/json' }, body: JSON.stringify(payload) })
    if (!r.ok) return { ok: false, error: 'Falha ao salvar' }
  }
  return { ok: true }
}

async function getObject(path: string) {
  const base = Deno.env.get('SUPABASE_URL') || ''
  if (!base) return null
  const url = `${base}/storage/v1/object/public/${path}`
  try {
    const res = await fetch(url)
    if (!res.ok) return null
    const txt = await res.text()
    try { return JSON.parse(txt) } catch { return null }
  } catch { return null }
}

async function sendEmail(to: string, subject: string, html: string) {
  const base = Deno.env.get('SUPABASE_URL') || ''
  const url = `${base}/functions/v1/send-email`
  try {
    const res = await fetch(url, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ to, subject, html }) })
    const ok = res.ok
    return ok
  } catch {
    return false
  }
}

async function createUser(email: string, password: string, metadata: any) {
  const { createClient } = await import('npm:@supabase/supabase-js@2')
  const url = Deno.env.get('SUPABASE_URL') || ''
  const srv = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || ''
  if (!url || !srv) return { ok: false, error: 'Ambiente inválido' }
  const supabase = createClient(url, srv)
  const r = await supabase.auth.admin.createUser({ email, password, user_metadata: metadata, email_confirm: true })
  if (r.error) return { ok: false, error: r.error.message }
  return { ok: true, user: r.data.user }
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders })
  if (req.method !== 'POST') return bad('Método não suportado')

  let input: any
  try { input = await req.json() } catch { return bad('JSON inválido') }
  const action = String(input?.action || '')
  const email = String(input?.email || '').toLowerCase().trim()
  if (!isEmail(email)) return bad('Email inválido')

  const bucket = 'site-config'
  const objectPath = `${bucket}/auth-codes/${encodeURIComponent(email)}.json`

  if (action === 'start') {
    const code = randCode()
    const exp = Date.now() + 10 * 60 * 1000
    const payload = { code, exp }
    const r = await putObject(objectPath, payload)
    if (!r.ok) return bad(r.error || 'Falha ao gerar código', 500)
    const html = `<div style="font-family:Inter,Arial,sans-serif"><h2 style="color:#24352f">Código de verificação</h2><p>Seu código é <strong>${code}</strong>.</p><p>Válido por 10 minutos.</p></div>`
    const sent = await sendEmail(email, 'Código de verificação • Nova Terra Consórcio', html)
    return json({ ok: true, sent })
  }

  if (action === 'verify') {
    const code = String(input?.code || '').trim()
    const password = String(input?.password || '').trim()
    const name = String(input?.name || '').trim()
    const whatsapp = String(input?.whatsapp || '').trim()
    if (!/^[0-9]{6}$/.test(code)) return bad('Código inválido')
    if (!password || password.length < 6) return bad('Senha inválida')
    const obj = await getObject(objectPath)
    if (!obj || String(obj?.code) !== code || Number(obj?.exp) < Date.now()) return bad('Código expirado ou inválido', 401)
    const meta = { role: 'corretor', name, whatsapp }
    const r = await createUser(email, password, meta)
    if (!r.ok) return bad(r.error || 'Falha ao criar usuário', 500)
    return json({ ok: true, created: true })
  }

  return bad('Ação inválida')
})