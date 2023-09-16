import './globals.css'
import type { Metadata } from 'next'
import { Josefin_Sans, Lilita_One } from 'next/font/google'


const josefin = Josefin_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600', '700'],
})

const lilita = Lilita_One({
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
        <main className='container'>{children}</main>
      </body>
    </html>
  )
}
