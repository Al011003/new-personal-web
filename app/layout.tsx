import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import '../styles/globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Alfarhad Maulana – Data Engineer',
  description: 'Data Engineer crafting robust backends and turning raw data into decisions. IEEE-published, Telkom University graduate.',
  keywords: ['Data Engineer', 'Backend Developer', 'Golang', 'Python', 'ETL', 'Jakarta'],
  openGraph: {
    title: 'Alfarhad Maulana – Data Engineer',
    description: 'Building the pipeline behind the insight.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
