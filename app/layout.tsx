import './globals.css'
import type { Metadata } from 'next'
import './fonts.css'
export const metadata: Metadata = {
  title: 'Portfólio',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
