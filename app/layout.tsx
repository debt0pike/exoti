import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import './globals.css';

export const metadata: Metadata = {
  title: 'EXOTI - EXO Type Indicator',
  description: '27道题，16种EXO-L人格 · 你是哪一颗星？',
}

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  // 获取翻译消息
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
