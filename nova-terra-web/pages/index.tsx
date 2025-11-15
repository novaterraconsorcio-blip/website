import { useMemo, useState } from 'react'
import Head from 'next/head'

function currency(n: number) {
  return n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

export default function Home() {
  const [valor, setValor] = useState(100000)
  const [prazo, setPrazo] = useState(120)
  const [taxaAdm, setTaxaAdm] = useState(15)
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [status, setStatus] = useState<string | null>(null)

  const parcela = useMemo(() => {
    const base = valor / Math.max(1, prazo)
    const adm = (taxaAdm / 100) * valor / Math.max(1, prazo)
    return base + adm
  }, [valor, prazo, taxaAdm])

  function validate() {
    const errs: Record<string, string> = {}
    if (!nome || nome.trim().length < 2) errs.nome = 'Informe seu nome'
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) errs.email = 'Email inválido'
    const digits = (telefone || '').replace(/\D/g, '')
    if (digits.length < 10) errs.telefone = 'Telefone inválido'
    return errs
  }

  async function submitLead() {
    setStatus('enviando')
    const errs = validate()
    if (Object.keys(errs).length) {
      setStatus('erro: validação')
      ;(window as any).toast = { type: 'error', message: Object.values(errs)[0] }
      return
    }
    try {
      const url = `https://ahnordxbhndrhfbkqvro.functions.supabase.co/lead-create`
      const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
      const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
      let recaptchaToken: string | null = null
      if (siteKey && (window as any).grecaptcha) {
        await new Promise<void>((resolve) => (window as any).grecaptcha.ready(resolve))
        recaptchaToken = await (window as any).grecaptcha.execute(siteKey, { action: 'submit' })
      }
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${anon ?? ''}`,
          ...(recaptchaToken ? { 'x-recaptcha-token': recaptchaToken } : {})
        },
        body: JSON.stringify({ name: nome, email, phone: telefone })
      })
      if (!res.ok) {
        const txt = await res.text()
        setStatus(`erro: ${txt}`)
        ;(window as any).toast = { type: 'error', message: 'Falha ao enviar. Tente novamente.' }
        return
      }
      setStatus('ok')
      ;(window as any).toast = { type: 'success', message: 'Lead enviado com sucesso.' }
    } catch (e) {
      setStatus('erro')
      ;(window as any).toast = { type: 'error', message: 'Erro inesperado.' }
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        {process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ? (
          <script src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`} />
        ) : null}
      </Head>
      <div className="mx-auto max-w-5xl p-6">
        <header className="py-10 text-center">
          <h1 className="text-3xl font-bold">Nova Terra Consórcio</h1>
          <p className="text-gray-600">Simule e receba uma proposta</p>
        </header>

        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-4">Calculadora</h2>
            <label className="block mb-2">Valor do bem</label>
            <input type="number" className="w-full border p-2 rounded mb-4" value={valor} onChange={(e) => setValor(Number(e.target.value))} />
            <label className="block mb-2">Prazo (meses)</label>
            <input type="number" className="w-full border p-2 rounded mb-4" value={prazo} onChange={(e) => setPrazo(Number(e.target.value))} />
            <label className="block mb-2">Taxa administrativa (%)</label>
            <input type="number" className="w-full border p-2 rounded mb-4" value={taxaAdm} onChange={(e) => setTaxaAdm(Number(e.target.value))} />
            <div className="mt-6 text-lg">Parcela estimada: <span className="font-semibold">{currency(parcela)}</span></div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-4">Receba uma proposta</h2>
            <input placeholder="Nome" className="w-full border p-2 rounded mb-3" value={nome} onChange={(e) => setNome(e.target.value)} />
            <input placeholder="Email" className="w-full border p-2 rounded mb-3" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input placeholder="Telefone" className="w-full border p-2 rounded mb-3" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
            <button onClick={submitLead} className="w-full bg-blue-600 text-white p-3 rounded">Enviar</button>
            {status && <p className="mt-3 text-sm text-gray-600">Status: {status}</p>}
          </div>
        </section>
      </div>
      {typeof window !== 'undefined' && (window as any).toast && (
        <div className={`fixed bottom-6 right-6 px-4 py-3 rounded shadow text-white ${
          (window as any).toast?.type === 'success' ? 'bg-green-600' : 'bg-red-600'
        }`}>{(window as any).toast?.message || ''}</div>
      )}
    </div>
  )
}