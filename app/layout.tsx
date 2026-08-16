import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import '@/app/globals.css'

const geistSans = Roboto({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'NEXUS CANADA ASSEMBLY CENTRE',
    template: '%s | NEXUS CANADA ASSEMBLY CENTRE',
  },
  description: 'Commercial trailers and modular structures assembled in Canada to Canadian standards.',
  applicationName: 'NEXUS CANADA ASSEMBLY CENTRE',
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'en-CA',
    url: 'https://www.nexusassembly.ca',
    siteName: 'NEXUS CANADA ASSEMBLY CENTRE',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
