import { NextResponse } from 'next/server'

export async function GET() {
  // 这里可以动态生成sitemap
  // 为了简化，使用静态模板
  const sitemapTemplate = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Home page (Chinese) -->
  <url>
    <loc>https://exoti.app/zh</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Quiz page (Chinese) -->
  <url>
    <loc>https://exoti.app/zh/quiz</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- Home page (Korean) -->
  <url>
    <loc>https://exoti.app/ko</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Quiz page (Korean) -->
  <url>
    <loc>https://exoti.app/ko/quiz</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- Home page (English) -->
  <url>
    <loc>https://exoti.app/en</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Quiz page (English) -->
  <url>
    <loc>https://exoti.app/en/quiz</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`

  return new NextResponse(sitemapTemplate, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 's-maxage=86400, stale-while-revalidate',
    },
  })
}