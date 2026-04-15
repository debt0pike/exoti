import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // 支持的语言列表
  locales: ['zh', 'ko', 'en'],

  // 默认语言
  defaultLocale: 'zh',

  // 默认前缀：'always' - 总是显示语言前缀；'as-needed' - 只在非默认语言时显示前缀
  localePrefix: 'as-needed'
});

export const config = {
  // 匹配除了以下路径之外的所有路径
  matcher: [
    // 跳过 Next.js 内部路径和静态文件
    '/((?!api|_next|_vercel|.*\\..*).*)',
  ],
};
