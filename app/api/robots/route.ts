import { NextResponse } from 'next/server'

export async function GET() {
  const robotsTxt = `# EXOTI - EXO Type Indicator
# Robot instructions

User-agent: *
Allow: /

# Sitemap location
Sitemap: https://exoti.app/sitemap.xml

# Block certain paths if needed
# Disallow: /api/
# Disallow: /_next/

# Specific bot instructions
User-agent: Googlebot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: Twitterbot
Allow: /`

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 's-maxage=86400, stale-while-revalidate',
    },
  })
}