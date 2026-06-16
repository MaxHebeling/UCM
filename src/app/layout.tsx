import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Fraunces } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { inst } from "@/data/site";

const sans = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const display = Fraunces({ subsets: ["latin"], variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ucmac.edu.mx"),
  title: {
    default: "Universidad en Tampico | Licenciaturas y Posgrados con RVOE",
    template: "%s | Universidad Cultural Metropolitana",
  },
  description:
    "Universidad Cultural Metropolitana en Tampico: preparatoria, licenciaturas, maestrías y doctorado con Validez Oficial SEP (RVOE). Modalidad ejecutiva, en línea y presencial. 18 años formando profesionales.",
  keywords: ["universidad en Tampico", "licenciaturas Tampico", "maestrías en línea", "RVOE", "preparatoria Tampico", "doctorado en educación"],
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: "Universidad Cultural Metropolitana",
    title: "Universidad en Tampico con Validez Oficial SEP — UCM",
    description: "Preparatoria, licenciaturas, maestrías y doctorado con RVOE. Modalidad ejecutiva, en línea y presencial en Tampico.",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
  },
  alternates: { canonical: "/", languages: { es: "/", en: "/en", "x-default": "/" } },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollegeOrUniversity",
    name: inst.legal,
    alternateName: ["UCM", "UCM Tampico", "UCMAC"],
    inLanguage: "es-MX",
    url: "https://www.ucmac.edu.mx",
    logo: "https://www.ucmac.edu.mx/brand/ucm-logo.png",
    slogan: inst.motto,
    description: "Institución educativa con Reconocimiento de Validez Oficial de Estudios (RVOE) en nivel medio superior, superior y posgrado.",
    foundingDate: "2009",
    email: inst.email,
    telephone: inst.phoneIntl,
    sameAs: [inst.facebook, inst.instagram],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Dr. Alfonso G. Alarcón 305 Nte, Zona Centro",
      addressLocality: "Tampico",
      addressRegion: "Tamaulipas",
      postalCode: "89000",
      addressCountry: "MX",
    },
    identifier: { "@type": "PropertyValue", propertyID: "RVOE", value: inst.rvoe },
  };
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  return (
    <html lang="es-MX" className={`${sans.variable} ${display.variable}`}>
      <body>
        {gtmId && (
          <>
            <Script id="gtm" strategy="afterInteractive">
              {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`}
            </Script>
            <noscript>
              <iframe src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`} height="0" width="0" style={{ display: "none", visibility: "hidden" }} />
            </noscript>
          </>
        )}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        {children}
      </body>
    </html>
  );
}
