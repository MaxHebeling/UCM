import type { Metadata } from "next";
import Nosotros from "@/screens/Nosotros";
import { getPages } from "@/i18n/pages";

export const metadata: Metadata = {
  title: getPages("es").nosotros.metaTitle,
  description: getPages("es").nosotros.metaDesc,
  alternates: { canonical: "/nosotros", languages: { es: "/nosotros", en: "/en/nosotros" } },
};

export default function Page() {
  return <Nosotros lang="es" />;
}
