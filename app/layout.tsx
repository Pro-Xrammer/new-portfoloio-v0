import type { Metadata } from 'next'
import './globals.css'
import { Poppins } from 'next/font/google'
export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // Choose weights you need
  display: 'swap',
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>{children}</body>
    </html>
  )
}
