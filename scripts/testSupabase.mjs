const url = process.env.SUPABASE_URL
const anon = process.env.SUPABASE_ANON_KEY

if (!url || !anon) {
  console.error('SUPABASE_URL ou SUPABASE_ANON_KEY não encontrada no ambiente.')
  process.exit(1)
}

const endpoint = `${url.replace(/\/$/, '')}/rest/v1/`

;(async () => {
  try {
    const res = await fetch(endpoint, {
      headers: {
        apikey: anon,
        authorization: `Bearer ${anon}`,
        accept: 'application/openapi+json'
      }
    })

    const status = res.status
    if (!res.ok) {
      const text = await res.text()
      console.log(`Conexão alcançada. HTTP ${status}.`)
      console.log(text.slice(0, 400))
      process.exit(0)
    }

    let json
    try {
      json = await res.json()
    } catch {
      json = null
    }

    const pathsCount = json && json.paths ? Object.keys(json.paths).length : 0
    console.log(`Conexão OK. Endpoints visíveis: ${pathsCount}`)
    if (json && json.info && json.info.title) console.log(json.info.title)
    process.exit(0)
  } catch (err) {
    const msg = typeof err?.message === 'string' ? err.message : String(err)
    console.error('Erro ao conectar ao Supabase:', msg)
    process.exit(1)
  }
})()