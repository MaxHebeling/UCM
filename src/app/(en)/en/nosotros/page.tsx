import type { Metadata } from "next";
import Nosotros from "@/screens/Nosotros";
import { getPages } from "@/i18n/pages";

export const metadata: Metadata = {
  title: getPages("en").nosotros.metaTitle,
  description: getPages("en").nosotros.metaDesc,
  alternates: { canonical: "/en/nosotros", languages: { es: "/nosotros", en: "/en/nosotros" } },
};

export default function Page() {
  return <Nosotros lang="en" />;
}
