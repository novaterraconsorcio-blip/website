import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nova Terra Consórcio',
  description: 'Gestão de consórcios'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className="min-h-screen bg-white text-neutral">{children}</body>
    </html>
  )
}