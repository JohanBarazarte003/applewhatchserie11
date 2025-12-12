import type { Metadata } from 'next';
import WatchLandingPage from '@/components/WatchLandingPage'; // Importamos el componente de cliente

// Este es ahora un Componente de Servidor. Su única misión es el SEO.
export const metadata: Metadata = {
  title: 'Comprar Apple Watch Series 11: Innovación en Salud y 5G',
  description: 'Análisis y oferta del nuevo Apple Watch Series 11. Conoce sus 4 innovaciones clave: Batería 24h, Notificación de Hipertensión, Cristal ultra resistente y 5G.',
  keywords: ['Apple Watch Series 11', 'comprar smartwatch', 'reloj inteligente salud', 'Apple Watch 5G', 'oferta Apple Watch'],
  
  openGraph: {
    title: 'Comprar Apple Watch Series 11: Innovación en Salud y 5G',
    description: 'Análisis y oferta del nuevo Apple Watch Series 11. Batería 24h, 5G y más.',
    images: [
      {
        url: 'https://TU_DOMINIO_DE_VERCEL.com/apple-watch-reloj-inteligente-de-la-serie-11.jpg',
        width: 600,
        height: 600,
        alt: 'Apple Watch Series 11 en un fondo limpio',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Comprar Apple Watch Series 11: Innovación en Salud y 5G',
    description: 'Análisis y oferta del nuevo Apple Watch Series 11. Batería 24h, 5G y más.',
    images: ['https://TU_DOMINIO_DE_VERCEL.com/apple-watch-reloj-inteligente-de-la-serie-11.jpg'],
  },

  alternates: {
    canonical: 'https://TU_DOMINIO_DE_VERCEL.com',
  },
};

export default function Home() {
  // Renderizamos el componente que tiene toda la parte visual e interactiva
  return <WatchLandingPage />;
}