import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://ynpragnesh.vercel.app/sitemap.xml',
    host: 'https://ynpragnesh.vercel.app',
  }
}
