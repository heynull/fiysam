import type { Metadata } from 'next'
import { Syne, DM_Sans } from 'next/font/google'
import './globals.css'
import ClientLayout from '../components/ClientLayout'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['400', '600', '700', '800'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Fiysam Energy Services | Powering the Infrastructure of Tomorrow',
  description: 'Nigeria\'s premier energy services partner delivering end-to-end engineering, procurement, and construction solutions for oil, gas, and power sectors.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="bg-obsidian text-white-warm font-dm-sans">
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}