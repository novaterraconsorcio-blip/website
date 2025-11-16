// deno-lint-ignore-file no-explicit-any
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'content-type, x-admin-key',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
}

function json(body: any, init: ResponseInit = {}) {
  return new Response(JSON.stringify(body), { headers: { 'Content-Type': 'application/json', ...corsHeaders }, ...init })
}
function bad(msg: string, status = 400) { return json({ ok: false, error: msg }, { status }) }

const DEFAULT_ITEMS = [
  { title: 'Pergunta 1', content: 'Resposta 1' },
  { title: 'Pergunta 2', content: 'Resposta 2' },
  { title: 'Pergunta 3', content: 'Resposta 3' },
  { title: 'Pergunta 4', content: 'Resposta 4' },
  { title: 'Pergunta 5', content: 'Resposta 5' },
  { title: 'Pergunta 6', content: 'Resposta 6' }
]

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders })

  const ref = Deno.env.get('SUPABASE_REF') || 'ahnordxbhndrhfbkqvro'
  const bucket = Deno.env.get('CF_BUCKET') || 'site-config'
  const objectPath = Deno.env.get('CF_PATH') || 'cf-accordions.json'
  const publicUrl = `https://${ref}.supabase.co/storage/v1/object/public/${bucket}/${objectPath}`

  if (req.method === 'GET') {
    try {
      const res = await fetch(publicUrl, { method: 'GET' })
      if (res.ok) {
        const txt = await res.text();
        try { const j = JSON.parse(txt); return json({ ok: true, items: Array.isArray(j.items) ? j.items : j }) } catch {
          return json({ ok: true, items: DEFAULT_ITEMS })
        }
      }
      // Try service-role read if public failed
      const serviceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || ''
      if (serviceKey) {
        const privUrl = `https://${ref}.supabase.co/storage/v1/object/${bucket}/${objectPath}`
        const r2 = await fetch(privUrl, { headers: { authorization: `Bearer ${serviceKey}` } })
        if (r2.ok) {
          const txt = await r2.text();
          try { const j = JSON.parse(txt); return json({ ok: true, items: Array.isArray(j.items) ? j.items : j }) } catch {}
        }
      }
    } catch {}
    return json({ ok: true, items: DEFAULT_ITEMS })
  }

  if (req.method === 'POST') {
    let body: any
    try { body = await req.json() } catch { return bad('JSON inválido') }
    const items = Array.isArray(body.items) ? body.items : body
    if (!Array.isArray(items)) return bad('Formato inválido')
    if (items.length > 6) return bad('Máximo de 6 itens')
    const payload = JSON.stringify({ items })
    const headerKey = req.headers.get('x-admin-key') || ''
    const serviceKey = headerKey || Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || ''
    if (!serviceKey) return bad('Persistência indisponível', 501)
    const putUrl = `https://${ref}.supabase.co/storage/v1/object/${bucket}/${objectPath}`
    let r = await fetch(putUrl, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', authorization: `Bearer ${serviceKey}` },
      body: payload
    })
    if (!r.ok) {
      // Fallback para criação com POST upsert
      const upsertUrl = `https://${ref}.supabase.co/storage/v1/object/${bucket}/${objectPath}?upsert=true`
      r = await fetch(upsertUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', authorization: `Bearer ${serviceKey}` },
        body: payload
      })
      if (!r.ok) {
        const t = await r.text();
        return bad(`Falha ao salvar: ${t}`, r.status)
      }
    }
    return json({ ok: true, saved: true, items })
  }

  return bad('Método não suportado')
})