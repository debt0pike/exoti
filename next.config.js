const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 使用 standalone 模式支持 Vercel 部署
  output: 'standalone',
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 60,
    unoptimized: false,
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  generateBuildId: async () => {
    return 'exoti-build-' + Date.now();
  },
  // 如果需要静态导出，取消下面的注释
  // output: 'export',
  // trailingSlash: true,
  // distDir: 'out',
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
      {
        source: '/robots.txt',
        destination: '/api/robots',
      }
    ];
  },
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY || 'default-value',
  },
}

module.exports = withNextIntl(nextConfig)
