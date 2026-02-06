import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
    const isProduction = process.env.NODE_ENV === 'production';
  return {
    rules: isProduction ? {
      userAgent: '*',
      allow: ['/projet/', '/projets/', '/mentions-legales'],
      disallow: ['/private/', '/_next/', '/api/'],
    } : {
      userAgent: '*',
      disallow: '/',
    },
    sitemap: isProduction ? `${process.env.NEXT_PUBLIC_SITE_URL || 'https://vincent-gillet-portfolio.netlify.app'}/sitemap.xml` 
        : undefined,
  }
}