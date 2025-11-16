// deno-lint-ignore-file no-explicit-any
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'content-type, x-admin-key',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
}

function json(body: any, init: ResponseInit = {}) {
  return new Response(JSON.stringify(body), { headers: { 'Content-Type': 'application/json', ...corsHeaders }, ...init })
}
function badRequest(msg: string) { return json({ error: msg }, { status: 400 }) }
function serverError(msg: string) { return json({ error: msg }, { status: 500 }) }

const defaults = {
  phone: '(11) 9999-9999',
  email: 'contato@novaterra.com.br',
  address: 'Av. Paulista, 1000\nSão Paulo, SP',
  whatsapp: '5511999999999'
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders })
  if (req.method === 'GET') {
    const cfg = {
      phone: Deno.env.get('CONTACT_PHONE') || defaults.phone,
      email: Deno.env.get('CONTACT_EMAIL') || defaults.email,
      address: Deno.env.get('CONTACT_ADDRESS') || defaults.address,
      whatsapp: Deno.env.get('CONTACT_WHATSAPP') || defaults.whatsapp,
    }
    return json({ ok: true, data: cfg })
  }
  if (req.method === 'POST') {
    let input: any
    try { input = await req.json() } catch { return badRequest('JSON inválido') }
    const adminKey = req.headers.get('x-admin-key') || ''
    const required = Deno.env.get('ADMIN_CONTACT_KEY') || ''
    if (required && adminKey !== required) return json({ ok: false, error: 'Chave de administrador inválida' }, { status: 401 })
    return json({ ok: true, updated: true, data: input })
  }
  return badRequest('Método não suportado')
})