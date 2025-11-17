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

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders })
  if (req.method !== 'POST') return bad('Método não suportado')
  let input: any
  try { input = await req.json() } catch { return bad('JSON inválido') }
  const email = String(input?.email || '').toLowerCase().trim()
  const password = String(input?.password || '').trim()
  if (!isEmail(email)) return bad('Email inválido')
  if (!password || password.length < 6) return bad('Senha inválida')

  const base = Deno.env.get('SUPABASE_URL') || ''
  const key = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || ''
  if (!base || !key) return bad('Ambiente inválido', 500)
  const url = `${base}/auth/v1/token?grant_type=password`
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json', apikey: key, authorization: `Bearer ${key}` },
      body: JSON.stringify({ email, password })
    })
    const body = await res.json().catch(() => ({}))
    if (!res.ok) return bad(typeof body?.error_description === 'string' ? body.error_description : 'Falha ao autenticar', res.status)
    const token = body?.access_token || null
    const expires = body?.expires_in || null
    return json({ ok: true, access_token: token, expires_in: expires, token_type: body?.token_type || 'bearer' })
  } catch (e) {
    return bad('Erro de rede', 500)
  }
})