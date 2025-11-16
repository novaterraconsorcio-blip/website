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

async function readFromStorage() {
  const base = Deno.env.get('SUPABASE_URL') || 'https://ahnordxbhndrhfbkqvro.supabase.co'
  const url = `${base}/storage/v1/object/public/site-config/contact-settings.json`
  try {
    const res = await fetch(url, { method: 'GET' })
    if (!res.ok) return null
    const txt = await res.text()
    try { return JSON.parse(txt) } catch { return null }
  } catch { return null }
}

async function writeToStorage(data: any) {
  const base = Deno.env.get('SUPABASE_URL') || 'https://ahnordxbhndrhfbkqvro.supabase.co'
  const key = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || ''
  if (!key) return { ok: false, error: 'Chave de serviço ausente' }
  const url = `${base}/storage/v1/object/site-config/contact-settings.json`
  try {
    const res = await fetch(url, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${key}`,
        'Content-Type': 'application/json',
        'x-upsert': 'true'
      },
      body: JSON.stringify(data)
    })
    if (!res.ok) {
      const t = await res.text()
      return { ok: false, error: `Falha ao salvar: ${res.status} ${t.slice(0,200)}` }
    }
    return { ok: true }
  } catch (e) {
    return { ok: false, error: 'Erro de rede ao salvar' }
  }
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders })
  if (req.method === 'GET') {
    const fromStorage = await readFromStorage()
    if (fromStorage && typeof fromStorage === 'object') {
      return json({ ok: true, data: fromStorage })
    }
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
    const r = await writeToStorage(input)
    if (!r.ok) return serverError(r.error || 'Falha ao persistir')
    return json({ ok: true, updated: true, data: input })
  }
  return badRequest('Método não suportado')
})