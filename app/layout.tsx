import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'Methodic Ventures',
  description: 'Sell your business to the next generation of entrepreneurs dedicated to preserving your legacy and scaling what you have built.',
  icons: {
    icon: '/icon.svg',
  },
  openGraph: {
    title: 'Methodic Ventures',
    description: 'Sell your business to the next generation of entrepreneurs dedicated to preserving your legacy and scaling what you have built.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Methodic Ventures',
    description: 'Sell your business to the next generation of entrepreneurs dedicated to preserving your legacy and scaling what you have built.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}