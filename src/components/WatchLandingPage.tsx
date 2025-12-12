"use client";

import Image from "next/image";
import { useEffect } from 'react';

// Este es ahora un Componente de Cliente. Maneja la interactividad y lo visual.
export default function WatchLandingPage() {

  const affiliateLink = "https://www.amazon.com/-/es/aluminio-azabache-deportiva-pantalla-impermeable/dp/B0DGHQ2QH6?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=GN6VAX5Y7VXS&dib=eyJ2IjoiMSJ9.AKGsC2gaxL6tGExjWy0B8sinFoUhG3F_DSLExbQyUeCvJTKFo7cvJRiTtd3AJrc2OgXjsfUQPYzRRec7fmSTDY656_OlN_w8HzJcO3NwCk-w13FPUEv9g7Qjkviuz_3_e-LOM66hLopYopfKe_D_vA6q5hEmjAYxcYGoC9_94FFFjKXWH-xA9Ywo_qvjP1rVvSCjhj0Hv3yLbfFd1nc_KPWtubyIgUB_QjwAxJMuzaw.Z6GjDQ67iDYHleueIVJRjBoqYROwstx1jd5dWd7oSi8&dib_tag=se&keywords=Apple%2BReloj%2Binteligente%2Bde%2Bla%2Bserie%2B11&qid=1765568092&sprefix=apple%2Breloj%2Binteligente%2Bde%2Bla%2Bserie%2B11%2Caps%2C237&sr=8-1&th=1&linkCode=ll1&tag=applewatchsho-20&linkId=6dc8a99eb03fb9c24a9c7b28023a419b&language=es_US&ref_=as_li_ss_tl"; 
  const domain = "https://TU_DOMINIO_DE_VERCEL.com"; // ¡IMPORTANTE!

  useEffect(() => {
    const linkTop = document.getElementById('affiliate-link');
    const linkBottom = document.getElementById('affiliate-link-bottom');

    if (linkTop) linkTop.setAttribute('href', affiliateLink);
    if (linkBottom) linkBottom.setAttribute('href', affiliateLink);

    if (affiliateLink.includes("TU_ENLACE") || domain.includes("TU_DOMINIO")) {
        console.warn("¡ADVERTENCIA DE CONFIGURACIÓN! Reemplaza los placeholders en WatchLandingPage.tsx para el enlace de afiliado y el dominio.");
    }
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Apple Watch Series 11",
    "image": `${domain}/apple-watch-reloj-inteligente-de-la-serie-11.jpg`,
    "description": "El compañero indispensable con 24 horas de batería, notificaciones de hipertensión, cristal ultra resistente y conexión 5G independiente.",
    "brand": {
      "@type": "Brand",
      "name": "Apple"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Laura S."
        },
        "reviewBody": "La mejora de batería es brutal..."
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Marco P."
        },
        "reviewBody": "Lo mejor es la independencia..."
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "2"
    },
    "offers": {
      "@type": "Offer",
      "url": affiliateLink,
      "priceCurrency": "EUR",
      "price": "449.00",
      "priceValidUntil": "2024-12-31",
      "itemCondition": "https://schema.org/NewCondition",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Amazon"
      }
    }
  };

  return (
    <main className="text-gray-900 antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
        <header className="text-center bg-white p-6 sm:p-10 rounded-xl shadow-xl mb-8 border-t-8 border-gray-900">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-2">INNOVACIÓN 2024: Ya Disponible</p>
            <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight text-gray-900 mb-4">
                Tu Salud. Tu Fitness. Tu <span className="text-indigo-600">Apple Watch Series 11.</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600">
                El compañero indispensable con <strong>24 horas de batería</strong>, <strong>notificaciones de hipertensión</strong> y conexión <strong>5G</strong> independiente.
            </p>
        </header>

        <div className="bg-white rounded-xl shadow-2xl p-6 md:flex md:items-center md:space-x-8 mb-8">
            <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
                <Image 
                    src="/apple-watch-reloj-inteligente-de-la-serie-11.jpg" 
                    alt="Apple Watch Series 11 en muñeca" 
                    width={600}
                    height={600}
                    className="w-full max-w-sm rounded-lg shadow-xl transition duration-500 ease-in-out transform hover:scale-[1.02] ring-4 ring-indigo-500/50"
                    priority
                />
            </div>
            <div className="md:w-1/2 text-center md:text-left">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Las 4 Innovaciones que Cambian el Juego:</h2>
                <ul className="space-y-3 text-lg mb-8 text-gray-700 list-none pl-0">
                    <li className="flex items-start">
                        <svg className="flex-shrink-0 w-6 h-6 mr-3 text-indigo-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        <p><span className="font-semibold text-gray-900">Autonomía Extrema (24h):</span> Olvídate de la carga diaria. 38h en modo bajo consumo y 8h de uso con solo 15 min de carga rápida.</p>
                    </li>
                    <li className="flex items-start">
                        <svg className="flex-shrink-0 w-6 h-6 mr-3 text-indigo-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        <p><span className="font-semibold">Guardián Proactivo:</span> Nueva <span className="text-indigo-600">Notificación de Hipertensión</span> (alerta temprana) y detección de apnea del sueño.</p>
                    </li>
                    <li className="flex items-start">
                        <svg className="flex-shrink-0 w-6 h-6 mr-3 text-indigo-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.111a9.004 9.004 0 011.967 8.083c-.114.654-.51 1.258-1.077 1.743l-3.5 3.5a1.5 1.5 0 01-2.122 0l-3.5-3.5a1.5 1.5 0 010-2.122l3.5-3.5a1.5 1.5 0 012.122 0l1.414 1.414"></path></svg>
                        <p><span className="font-semibold">Cristal Doblemente Fuerte:</span> Pantalla 2 veces más resistente a arañazos que el Series 10. Certificación IP6X contra polvo.</p>
                    </li>
                    <li className="flex items-start">
                        <svg className="flex-shrink-0 w-6 h-6 mr-3 text-indigo-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18V6m0 0l-3 3m3-3l3 3m1-1v8m-1-8l-3 3m3-3l3 3"></path></svg>
                        <p><span className="font-semibold">Libertad 5G:</span> Conexión ultrarrápida para llamadas, streaming y pagos, sin necesidad de llevar tu iPhone contigo.</p>
                    </li>
                </ul>
                <a id="affiliate-link" href="#" target="_blank" className="cta-button inline-block w-full sm:w-auto px-12 py-4 text-xl font-bold text-white bg-gray-900 rounded-lg hover:bg-black uppercase tracking-wider text-center">
                    COMPRAR EN AMAZON (Stock 42mm)
                </a>
                <p className="text-sm text-gray-500 mt-3 font-semibold">Garantía Amazon y Envío Rápido. Haz clic antes de que se agote.</p>
            </div>
        </div>
        <section className="mb-8 p-6 bg-gray-100 rounded-xl shadow-inner">
            <h3 className="text-2xl font-bold text-center mb-6 text-gray-900">Opiniones Verificadas de Usuarios</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-5 rounded-lg shadow-md border-t-4 border-indigo-600">
                    <p className="text-xl text-gray-700 italic mb-3">"La mejora de batería es brutal. Ahora puedo monitorizar mi sueño completo sin preocuparme. Y saber que tengo el ECG y la detección de hipertensión es una tranquilidad invaluable."</p>
                    <p className="font-semibold text-gray-800">- Laura S.</p>
                    <p className="text-sm text-yellow-500 mt-1">⭐⭐⭐⭐⭐</p> 
                </div>
                <div className="bg-white p-5 rounded-lg shadow-md border-t-4 border-indigo-600">
                    <p className="text-xl text-gray-700 italic mb-3">"Lo mejor es la independencia. Salgo a correr solo con el reloj y el 5G funciona perfecto para escuchar Spotify. Además, la detección de caídas me da mucha seguridad."</p>
                    <p className="font-semibold text-gray-800">- Marco P.</p>
                    <p className="text-sm text-yellow-500 mt-1">⭐⭐⭐⭐⭐</p>
                </div>
            </div>
        </section>
        <section className="text-center p-6 bg-indigo-50 rounded-xl border-2 border-indigo-200 mb-8">
            <h3 className="text-2xl font-bold mb-2 text-indigo-800">Seguridad que te Respalda</h3>
            <p className="text-lg text-indigo-700 font-medium">Equipado con Detección de Caídas y Choques. Si sufres un accidente grave, el Series 11 llama automáticamente a emergencias. Es más que un reloj, es un <strong>guardián de vida</strong>.</p>
        </section>
        <div className="text-center pb-8">
            <a id="affiliate-link-bottom" href="#" target="_blank" className="cta-button inline-block w-full sm:w-3/4 px-12 py-4 text-xl font-bold text-white bg-gray-900 rounded-lg hover:bg-black uppercase tracking-wider text-center">
                ASEGURA EL TUYO HOY EN AMAZON
            </a>
            <p className="text-sm text-gray-500 mt-3 font-semibold">El stock de modelos exclusivos (Titanio) es limitado.</p>
        </div>
      </div>
      <footer className="bg-gray-900 text-white p-6 mt-8">
          <div className="max-w-4xl mx-auto text-center text-xs text-gray-400 space-y-3">
              <p>
                  <span className="font-bold">Aviso de Afiliación:</span> Este sitio web participa en el Programa de Afiliados de Amazon. Como Asociados de Amazon, ganamos por las compras que cumplen con los requisitos aplicables. 
                  Los precios y la disponibilidad están sujetos a cambios. Haz clic en el botón de compra para verificar el precio actual y el stock en Amazon.
              </p>
              <p>&copy; 2024 Apple Watch Series 11 Landing. Todos los derechos reservados.</p>
          </div>
      </footer>
    </main>
  );
}
