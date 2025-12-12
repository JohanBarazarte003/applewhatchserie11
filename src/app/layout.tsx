import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // Plantilla de título para que todas las páginas terminen con el nombre del sitio
  title: {
    template: '%s | Apple Watch Series 11',
    default: 'Apple Watch Series 11 - El Guardián de Salud Más Avanzado',
  },
  description: "La página de venta oficial para el nuevo Apple Watch Series 11. Descubre sus innovaciones en salud, batería de 24h, conexión 5G y notificaciones de hipertensión.",
  // Metadatos base para redes sociales
  openGraph: {
    title: 'Apple Watch Series 11 - El Guardián de Salud Más Avanzado',
    description: "Descubre el compañero indispensable con 24h de batería y conexión 5G.",
    url: 'https://TU_DOMINIO_DE_VERCEL.com', // ¡IMPORTANTE: Reemplazar!
    siteName: 'Apple Watch Series 11 Landing',
    locale: 'es_ES',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} text-gray-900 antialiased`}>{children}</body>
    </html>
  );
}