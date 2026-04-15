import {getRequestConfig} from 'next-intl/server';

const locales = ['zh', 'ko', 'en'];

export default getRequestConfig(async ({requestLocale}) => {
  let locale = await requestLocale;

  if (!locale || !locales.includes(locale as any)) {
    locale = 'zh';
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});