import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  
  // ¡IMPORTANTE! Reemplaza esto con tu dominio de Vercel
  const domain = 'https://TU_DOMINIO_DE_VERCEL.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${domain}/sitemap.xml`,
  }
}
