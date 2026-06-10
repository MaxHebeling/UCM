import type { Metadata } from "next";
import ComparativaIndex from "@/screens/ComparativaIndex";
import { getPages } from "@/i18n/pages";

export const metadata: Metadata = {
  title: getPages("es").comparativa.metaTitle,
  description: getPages("es").comparativa.metaDesc,
  alternates: { canonical: "/comparativa", languages: { es: "/comparativa", en: "/en/comparativa" } },
};

export default function Page() {
  return <ComparativaIndex lang="es" />;
}
