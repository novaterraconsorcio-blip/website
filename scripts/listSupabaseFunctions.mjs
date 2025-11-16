const pat = process.env.SUPABASE_ACCESS_TOKEN || process.env.SUPABASE_PAT
const ref = process.env.SUPABASE_REF || 'ahnordxbhndrhfbkqvro'

if (!pat) {
  console.error('SUPABASE_ACCESS_TOKEN não encontrada no ambiente.')
  process.exit(1)
}

;(async () => {
  try {
    const url = `https://api.supabase.com/v1/projects/${ref}/functions`
    const res = await fetch(url, {
      headers: {
        authorization: `Bearer ${pat}`,
        apikey: pat,
        accept: 'application/json'
      }
    })
    if (!res.ok) {
      const text = await res.text()
      console.error(`Falha HTTP ${res.status}: ${text.slice(0, 400)}`)
      process.exit(1)
    }
    const json = await res.json()
    const list = Array.isArray(json) ? json : (json?.functions || [])
    console.log(`Funções edge no projeto '${ref}': ${list.length}`)
    for (const f of list) {
      const name = f?.name || f?.slug || 'desconhecida'
      const status = f?.status || f?.deployment_status || 'n/d'
      const created = f?.created_at || f?.created || 'n/d'
      console.log(`- ${name} | status=${status} | created_at=${created}`)
    }
    process.exit(0)
  } catch (err) {
    const msg = typeof err?.message === 'string' ? err.message : String(err)
    console.error('Erro ao listar funções:', msg)
    process.exit(1)
  }
})()