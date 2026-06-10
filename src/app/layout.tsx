import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Fraunces } from "next/font/google";
import "./globals.css";
import { inst } from "@/data/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

const sans = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const display = Fraunces({ subsets: ["latin"], variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ucmac.edu.mx"),
  title: {
    default: "Universidad en Tampico | Licenciaturas, Maestrías y Prepa con RVOE — UCM",
    template: "%s | Universidad Cultural Metropolitana",
  },
  description:
    "Universidad Cultural Metropolitana en Tampico: preparatoria, licenciaturas, maestrías y doctorado con Validez Oficial SEP (RVOE). Modalidad ejecutiva, en línea y presencial. 16 años formando profesionales.",
  keywords: ["universidad en Tampico", "licenciaturas Tampico", "maestrías en línea", "RVOE", "preparatoria Tampico", "doctorado en educación"],
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: "Universidad Cultural Metropolitana",
    title: "Universidad en Tampico con Validez Oficial SEP — UCM",
    description: "Preparatoria, licenciaturas, maestrías y doctorado con RVOE. Modalidad ejecutiva, en línea y presencial en Tampico.",
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollegeOrUniversity",
    name: inst.legal,
    alternateName: ["UCM", "UCM Tampico", "UCMAC"],
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
  return (
    <html lang="es-MX" className={`${sans.variable} ${display.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
