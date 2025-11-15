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

  const apiKey = Deno.env.get('RESEND_API_KEY')
  const defaultFrom = Deno.env.get('RESEND_FROM')
  if (!apiKey) {
    return new Response('RESEND_API_KEY not set', { status: 500, headers: corsHeaders })
  }

  let payload: Record<string, unknown>
  try {
    payload = await req.json()
  } catch {
    return new Response('Invalid JSON', { status: 400, headers: corsHeaders })
  }

  const to = payload?.to
  const subject = payload?.subject
  const html = payload?.html
  const text = payload?.text
  const from = payload?.from

  if (typeof to !== 'string' || !to.length) {
    return new Response('Missing to', { status: 400, headers: corsHeaders })
  }
  if (typeof subject !== 'string' || !subject.length) {
    return new Response('Missing subject', { status: 400, headers: corsHeaders })
  }
  const sender = typeof from === 'string' && from.length ? from : defaultFrom
  if (typeof sender !== 'string' || !sender.length) {
    return new Response('Missing from', { status: 400, headers: corsHeaders })
  }
  if ((html == null || html === '') && (text == null || text === '')) {
    return new Response('Missing html or text', { status: 400, headers: corsHeaders })
  }

  const body: Record<string, unknown> = {
    from: sender,
    to,
    subject
  }
  if (typeof html === 'string' && html.length) body.html = html
  if (typeof text === 'string' && text.length) body.text = text

  const resp = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      authorization: `Bearer ${apiKey}`,
      'content-type': 'application/json'
    },
    body: JSON.stringify(body)
  })

  const contentType = resp.headers.get('content-type') || 'application/json'
  if (!resp.ok) {
    const errText = await resp.text()
    return new Response(errText, { status: resp.status, headers: { ...corsHeaders, 'content-type': contentType } })
  }
  const data = await resp.text()
  return new Response(data, { status: 200, headers: { ...corsHeaders, 'content-type': contentType } })
})