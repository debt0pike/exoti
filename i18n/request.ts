import { getRequestConfig } from 'next-intl/server';

// 支持的语言
export const locales = ['zh', 'ko', 'en'] as const;
export type Locale = (typeof locales)[number];

// 默认语言
export const defaultLocale: Locale = 'zh';

export default getRequestConfig(async ({ locale }) => {
  // 验证 locale 是否有效
  if (!locales.includes(locale as any)) {
    throw new Error(`Invalid locale: ${locale}`);
  }

  return {
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
