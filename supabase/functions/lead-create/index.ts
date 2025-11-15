const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS'
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405, headers: corsHeaders })
  }

  const url = Deno.env.get('LEADS_SUPABASE_URL')
  if (!url) return new Response('LEADS_SUPABASE_URL not set', { status: 500, headers: corsHeaders })
  const sr = Deno.env.get('SERVICE_ROLE_KEY')
  if (!sr) return new Response('SERVICE_ROLE_KEY not set', { status: 500, headers: corsHeaders })
  const token = sr

  const recaptchaSecret = Deno.env.get('RECAPTCHA_SECRET')
  if (recaptchaSecret) {
    const recaptchaToken = req.headers.get('x-recaptcha-token') || ''
    if (!recaptchaToken) {
      return new Response('Missing recaptcha token', { status: 400, headers: corsHeaders })
    }
    const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ secret: recaptchaSecret, response: recaptchaToken }).toString()
    })
    const verifyJson = await verifyRes.json()
    if (!verifyJson?.success) {
      return new Response('Recaptcha failed', { status: 400, headers: corsHeaders })
    }
  }

  let payload: Record<string, unknown>
  try {
    payload = await req.json()
  } catch {
    return new Response('Invalid JSON', { status: 400, headers: corsHeaders })
  }

  const body: Record<string, unknown> = {
    email: typeof payload?.email === 'string' ? payload.email : null,
    nome: typeof payload?.name === 'string' ? payload.name : null,
    whatsapp: typeof payload?.phone === 'string' ? payload.phone : null,
    interesse: typeof payload?.message === 'string' ? payload.message : null
  }

  const resp = await fetch(`${url.replace(/\/$/, '')}/rest/v1/leads`, {
    method: 'POST',
    headers: {
      apikey: token,
      authorization: `Bearer ${token}`,
      'content-type': 'application/json',
      prefer: 'return=representation'
    },
    body: JSON.stringify(body)
  })

  const contentType = resp.headers.get('content-type') || 'application/json'
  const text = await resp.text()
  return new Response(text, { status: resp.status, headers: { ...corsHeaders, 'content-type': contentType } })
})