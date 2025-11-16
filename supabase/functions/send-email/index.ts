// deno-lint-ignore-file no-explicit-any
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-api-key, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS'
}

function json(body: any, init: ResponseInit = {}) {
  return new Response(JSON.stringify(body), { headers: { 'Content-Type': 'application/json', ...corsHeaders }, ...init })
}

function badRequest(msg: string) { return json({ error: msg }, { status: 400 }) }
function unauthorized(msg: string) { return json({ error: msg }, { status: 401 }) }
function serverError(msg: string) { return json({ error: msg }, { status: 500 }) }

async function sendWithResend(payload: { from: string, to: string | string[], subject: string, html?: string, text?: string }) {
  const apiKey = Deno.env.get('RESEND_API_KEY')
  if (!apiKey) throw new Error('RESEND_API_KEY ausente')
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })
  const body = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(typeof body?.message === 'string' ? body.message : `Falha Resend ${res.status}`)
  return body
}

function isEmail(str: string) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str) }

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders })
  if (req.method !== 'POST') return badRequest('Método não suportado')

  const apiKeyHeader = req.headers.get('x-api-key')
  const requiredKey = Deno.env.get('FUNCTION_API_KEY')
  if (requiredKey && apiKeyHeader !== requiredKey) return unauthorized('Chave inválida')

  let input: any
  try { input = await req.json() } catch { return badRequest('JSON inválido') }

  const fromDefault = Deno.env.get('FROM_EMAIL') || 'no-reply@novaterraconsorcio.com.br'
  const from = typeof input?.from === 'string' ? input.from : fromDefault
  const to = Array.isArray(input?.to) ? input.to : [String(input?.to || '')]
  const subject = String(input?.subject || '')
  const html = typeof input?.html === 'string' ? input.html : undefined
  const text = typeof input?.text === 'string' ? input.text : undefined

  if (!isEmail(from)) return badRequest('Remetente inválido')
  if (!to.length || !to.every((t) => isEmail(String(t)))) return badRequest('Destinatário(s) inválido(s)')
  if (!subject) return badRequest('Assunto obrigatório')
  if (!html && !text) return badRequest('Conteúdo obrigatório (html ou text)')

  try {
    const data = await sendWithResend({ from, to, subject, html, text })
    return json({ ok: true, id: data?.id || data?.data?.id || null })
  } catch (err) {
    return serverError(typeof err?.message === 'string' ? err.message : 'Falha ao enviar email')
  }
})