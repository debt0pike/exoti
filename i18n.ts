import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({requestLocale}) => {
  // This can either be defined statically at the top-level if your locale
  // can be determined from `headers()` or `cookies()`, or alternatively
  // read from the URL
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (!locale || !['zh', 'ko', 'en'].includes(locale as any)) {
    locale = 'zh';
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});