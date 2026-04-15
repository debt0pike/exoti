import type { Metadata } from 'next'
import { notFound } from 'next/navigation';

const locales = ['zh', 'ko', 'en'];

export const metadata: Metadata = {
  title: {
    default: 'EXOTI - EXO Type Indicator | EXO-L Personality Test',
    template: '%s | EXOTI'
  },
  description: '27道题，16种EXO-L人格 · 你是哪一颗星？ Discover your EXO-L personality type with our 27-question personality test. Which star are you? 27개 문항으로 찾아내는 나의 EXO-L 유형. 당신은 어떤 별인가요?',
  keywords: ['EXO', 'EXO-L', 'EXOTI', 'personality test', 'EXO Type Indicator', '人格测试', 'personality quiz', '인성 테스트', '유형 테스트', 'EXO fandom'],
  authors: [{ name: 'EXO-L' }],
  creator: 'EXO-L',
  publisher: 'EXO-L',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://exoti.app'),
  openGraph: {
    type: 'website',
    siteName: 'EXOTI - EXO Type Indicator',
    title: 'EXOTI - EXO Type Indicator | 你是哪一颗星？',
    description: '27道题，16种EXO-L人格 · 你是哪一颗星？',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'EXOTI - EXO Type Indicator'
      }
    ],
    locale: 'zh_CN',
    alternateLocale: ['ko_KR', 'en_US']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EXOTI - EXO Type Indicator | 你是哪一颗星？',
    description: '27道题，16种EXO-L人格 · 你是哪一颗星？',
    images: ['/og-image.png'],
    creator: '@EXO',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
  alternates: {
    canonical: 'https://exoti.app',
    languages: {
      'zh-CN': 'https://exoti.app/zh',
      'ko-KR': 'https://exoti.app/ko',
      'en-US': 'https://exoti.app/en',
    },
  },
}

export default function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  // 验证 locale 是否有效
  if (!locales.includes(locale)) {
    notFound();
  }

  return children;
}
