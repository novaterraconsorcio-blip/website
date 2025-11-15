import { Resend } from 'resend'

const apiKey = process.env.RESEND_API_KEY

if (!apiKey) {
  console.error('RESEND_API_KEY não encontrada no ambiente.')
  process.exit(1)
}

const resend = new Resend(apiKey)

;(async () => {
  try {
    const { data, error } = await resend.domains.list()
    if (error) throw error

    console.log(`Conexão OK. Total de domínios: ${data?.length ?? 0}`)
    for (const d of data ?? []) {
      console.log(`- ${d.name} | status=${d.status}`)
    }
    process.exit(0)
  } catch (err) {
    const msg = typeof err?.message === 'string' ? err.message : String(err)
    console.error('Erro ao conectar ao Resend:', msg)
    process.exit(1)
  }
})()