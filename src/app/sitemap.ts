import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  
  // ¡IMPORTANTE! Reemplaza esto con tu dominio de Vercel
  const domain = 'https://TU_DOMINIO_DE_VERCEL.com';

  return [
    {
      url: domain,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
  ]
}
