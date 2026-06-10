import type { Metadata } from "next";
import Contacto from "@/screens/Contacto";
import { getPages } from "@/i18n/pages";

export const metadata: Metadata = {
  title: getPages("es").contacto.metaTitle,
  description: getPages("es").contacto.metaDesc,
  alternates: { canonical: "/contacto", languages: { es: "/contacto", en: "/en/contacto" } },
};

export default function Page() {
  return <Contacto lang="es" />;
}
