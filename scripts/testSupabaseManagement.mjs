const pat = process.env.SUPABASE_ACCESS_TOKEN || process.env.SUPABASE_PAT

if (!pat) {
  console.error('SUPABASE_ACCESS_TOKEN não encontrada no ambiente.')
  process.exit(1)
}

;(async () => {
  try {
    const res = await fetch('https://api.supabase.com/v1/projects', {
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

    const projects = await res.json()
    console.log(`Conexão OK. Total de projetos: ${projects.length}`)
    for (const p of projects) {
      console.log(`- ${p.name} | status=${p.status} | ref=${p.ref}`)
    }
    process.exit(0)
  } catch (err) {
    const msg = typeof err?.message === 'string' ? err.message : String(err)
    console.error('Erro ao conectar ao Management API do Supabase:', msg)
    process.exit(1)
  }
})()