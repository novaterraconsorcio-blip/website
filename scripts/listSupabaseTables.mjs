const url = process.env.SUPABASE_URL
const anon = process.env.SUPABASE_ANON_KEY

if (!url || !anon) {
  console.error('SUPABASE_URL ou SUPABASE_ANON_KEY não encontrada no ambiente.')
  process.exit(1)
}

function unique(arr) {
  return Array.from(new Set(arr)).sort()
}

async function tryOpenAPI() {
  const endpoint = `${url.replace(/\/$/, '')}/rest/v1/`
  const res = await fetch(endpoint, {
    headers: {
      apikey: anon,
      authorization: `Bearer ${anon}`,
      accept: 'application/openapi+json'
    }
  })
  if (!res.ok) return null
  const json = await res.json()
  const paths = json?.paths ? Object.keys(json.paths) : []
  const tables = paths
    .filter((p) => p.startsWith('/') && !p.startsWith('/rpc/'))
    .map((p) => p.replace(/^\//, '').split('/')[0])
    .filter((n) => !!n && n !== '/')
  return unique(tables)
}

async function tryGraphQL() {
  const endpoint = `${url.replace(/\/$/, '')}/graphql/v1`
  const body = {
    query:
      '{ __schema { queryType { fields { name } } mutationType { fields { name } } } }'
  }
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      apikey: anon,
      'content-type': 'application/json'
    },
    body: JSON.stringify(body)
  })
  if (!res.ok) return null
  const json = await res.json()
  const fields = json?.data?.__schema?.queryType?.fields ?? []
  const names = fields.map((f) => f.name)
  const tables = names
    .filter((n) => n.endsWith('Collection'))
    .map((n) => n.replace(/Collection$/, ''))
    .filter((n) => !!n)
  return unique(tables)
}

;(async () => {
  try {
    const viaOpenAPI = await tryOpenAPI()
    const viaGraphQL = viaOpenAPI && viaOpenAPI.length ? null : await tryGraphQL()
    const tables = viaOpenAPI && viaOpenAPI.length ? viaOpenAPI : viaGraphQL || []
    if (!tables.length) {
      console.error('Não foi possível obter a lista de tabelas.')
      process.exit(1)
    }
    console.log(`Tabelas visíveis (${tables.length}):`)
    for (const t of tables) console.log(`- ${t}`)
    process.exit(0)
  } catch (err) {
    const msg = typeof err?.message === 'string' ? err.message : String(err)
    console.error('Erro ao listar tabelas:', msg)
    process.exit(1)
  }
})()