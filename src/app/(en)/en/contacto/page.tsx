import type { Metadata } from "next";
import Contacto from "@/screens/Contacto";
import { getPages } from "@/i18n/pages";

export const metadata: Metadata = {
  title: getPages("en").contacto.metaTitle,
  description: getPages("en").contacto.metaDesc,
  alternates: { canonical: "/en/contacto", languages: { es: "/contacto", en: "/en/contacto" } },
};

export default function Page() {
  return <Contacto lang="en" />;
}
