import type { Metadata } from 'next'
import './globals.css';

export const metadata: Metadata = {
  title: 'EXOTI - EXO Type Indicator',
  description: '27道题，16种EXO-L人格 · 你是哪一颗星？',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
