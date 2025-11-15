"use client"
import { useMemo, useState } from "react"

export default function Page() {
  const [valor, setValor] = useState(50000)
  const [prazo, setPrazo] = useState(60)
  const parcela = useMemo(() => {
    if (!prazo || prazo <= 0) return 0
    return Math.round((valor / prazo) * 100) / 100
  }, [valor, prazo])

  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [whats, setWhats] = useState("")
  const [interesse, setInteresse] = useState("Automóvel")
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState<null | boolean>(null)

  async function sendLead() {
    setSending(true)
    setSent(null)
    try {
      const r = await fetch("https://ahnordxbhndrhfbkqvro.functions.supabase.co/create-lead", {
        method: "POST",
        headers: { "content-type": "application/json", authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ""}` },
        body: JSON.stringify({ nome, email, whatsapp: whats, interesse })
      })
      const j = await r.json()
      setSent(Boolean(j?.ok))
      setNome("")
      setEmail("")
      setWhats("")
    } catch {
      setSent(false)
    } finally {
      setSending(false)
    }
  }

  return (
    <main>
      <section className="bg-secondary text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold">Sistema de Gestão de Consórcios</h1>
            <p className="mt-4">Plataforma completa para corretores e administração.</p>
            <div className="mt-6 flex gap-4">
              <a className="bg-primary text-white px-6 py-3 rounded" href="#calculadora">Calcular parcelas</a>
              <a className="border border-white px-6 py-3 rounded" href="#lead">Falar com Corretor</a>
            </div>
          </div>
          <div className="h-48 md:h-64 bg-white/10 rounded" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12" id="tipos">
        <h2 className="text-2xl font-semibold">Tipos de Consórcio</h2>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Automóveis","Motos","Imóveis","Serviços"].map(t => (
            <div key={t} className="border rounded p-4">
              <div className="text-lg font-medium">{t}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50" id="como-funciona">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="text-2xl font-semibold">Como Funciona</h2>
          <div className="mt-6 grid md:grid-cols-5 gap-4">
            {["Escolha","Simulação","Proposta","Aprovação","Contemplação"].map(s => (
              <div key={s} className="border rounded p-4 text-center">{s}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12" id="calculadora">
        <h2 className="text-2xl font-semibold">Calculadora de Parcelas</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6 items-end">
          <div>
            <label className="block text-sm">Valor</label>
            <input type="number" value={valor} onChange={e => setValor(Number(e.target.value))} className="mt-1 w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm">Prazo (meses)</label>
            <input type="number" value={prazo} onChange={e => setPrazo(Number(e.target.value))} className="mt-1 w-full border rounded px-3 py-2" />
          </div>
          <div className="text-right">
            <div className="text-sm">Parcela estimada</div>
            <div className="text-2xl font-bold">R$ {parcela.toLocaleString('pt-BR')}</div>
            <a className="mt-4 inline-block bg-primary text-white px-6 py-3 rounded" href="#lead">Falar com Corretor</a>
          </div>
        </div>
      </section>

      <section className="bg-gray-50" id="lead">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="text-2xl font-semibold">Fale com um Corretor</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm">Nome</label>
                <input value={nome} onChange={e => setNome(e.target.value)} className="mt-1 w-full border rounded px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm">Email</label>
                <input value={email} onChange={e => setEmail(e.target.value)} className="mt-1 w-full border rounded px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm">WhatsApp</label>
                <input value={whats} onChange={e => setWhats(e.target.value)} className="mt-1 w-full border rounded px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm">Interesse</label>
                <select value={interesse} onChange={e => setInteresse(e.target.value)} className="mt-1 w-full border rounded px-3 py-2">
                  {["Automóvel","Moto","Imóvel","Serviços"].map(i => (
                    <option key={i} value={i}>{i}</option>
                  ))}
                </select>
              </div>
              <button onClick={sendLead} disabled={sending} className="bg-primary text-white px-6 py-3 rounded">
                {sending ? "Enviando..." : "Falar com Corretor"}
              </button>
              {sent === true && <div className="text-green-600">Enviado</div>}
              {sent === false && <div className="text-red-600">Falha ao enviar</div>}
            </div>
            <div className="border rounded p-6">Entre em contato no WhatsApp: +55 51 981568156</div>
          </div>
        </div>
      </section>

      <a href="https://wa.me/5551981568156" className="fixed bottom-4 right-4 bg-primary text-white px-4 py-3 rounded-full shadow">WhatsApp</a>

      <footer className="mx-auto max-w-6xl px-6 py-8 border-t mt-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>@novaterraconsorcio</div>
          <div className="text-sm">Políticas</div>
        </div>
      </footer>
    </main>
  )
}