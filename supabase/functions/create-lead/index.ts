import { createClient } from 'npm:@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS'
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders })
  if (req.method !== 'POST') return new Response('Method Not Allowed', { status: 405, headers: corsHeaders })

  let payload: Record<string, unknown>
  try {
    payload = await req.json()
  } catch {
    return new Response('Invalid JSON', { status: 400, headers: corsHeaders })
  }

  const nome = typeof payload?.nome === 'string' ? payload.nome : null
  const email = typeof payload?.email === 'string' ? payload.email : null
  const whatsapp = typeof payload?.whatsapp === 'string' ? payload.whatsapp : null
  const interesse = typeof payload?.interesse === 'string' ? payload.interesse : null

  const supabaseUrl = Deno.env.get('PROJECT_URL')
  const serviceRole = Deno.env.get('SERVICE_ROLE_KEY')
  const anonKey = Deno.env.get('ANON_KEY')
  const resendApiKey = Deno.env.get('RESEND_API_KEY')
  const defaultFrom = Deno.env.get('RESEND_FROM') || 'no-reply@novaterraconsorcio.com.br'
  const adminEmail = 'admin@novaterraconsorcios.com.br'

  let inserted = false
  if (supabaseUrl && (serviceRole || anonKey)) {
    const supabase = createClient(supabaseUrl, serviceRole || anonKey)
    const { error } = await supabase.from('leads').insert({ nome, email, whatsapp, interesse })
    if (!error) inserted = true
  }

  if (resendApiKey) {
    const subject = `Novo lead: ${interesse ?? ''}`.trim()
    const html = `<p><strong>Nome:</strong> ${nome ?? ''}</p>
                  <p><strong>Email:</strong> ${email ?? ''}</p>
                  <p><strong>WhatsApp:</strong> ${whatsapp ?? ''}</p>
                  <p><strong>Interesse:</strong> ${interesse ?? ''}</p>
                  <p><em>Inserido no banco:</em> ${inserted}</p>`
    const body = { from: defaultFrom, to: adminEmail, subject, html }
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { authorization: `Bearer ${resendApiKey}`, 'content-type': 'application/json' },
      body: JSON.stringify(body)
    })
  }

  return new Response(JSON.stringify({ ok: true, inserted }), {
    status: 200,
    headers: { ...corsHeaders, 'content-type': 'application/json' }
  })
})