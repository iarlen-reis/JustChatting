import Providers from '@/components/providers'
import './globals.css'
import type { Metadata } from 'next'
import { Josefin_Sans as Jose, Lilita_One as Lilita } from 'next/font/google'

const josefin = Jose({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600', '700'],
})

const lilita = Lilita({
  subsets: ['latin'],
  variable: '--font-title',
  weight: ['400'],
})

export const metadata: Metadata = {
  title: 'Just Chatting',
  description: 'Converse em chat com outros usuários',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${josefin.variable} ${lilita.variable}`}>
        <main className="main__container">
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  )
}
