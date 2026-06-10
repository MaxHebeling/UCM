import type { Metadata } from "next";
import ComparativaIndex from "@/screens/ComparativaIndex";
import { getPages } from "@/i18n/pages";

export const metadata: Metadata = {
  title: getPages("en").comparativa.metaTitle,
  description: getPages("en").comparativa.metaDesc,
  alternates: { canonical: "/en/comparativa", languages: { es: "/comparativa", en: "/en/comparativa" } },
};

export default function Page() {
  return <ComparativaIndex lang="en" />;
}
