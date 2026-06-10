import type { Metadata } from "next";
import Admisiones from "@/screens/Admisiones";
import { getPages } from "@/i18n/pages";

export const metadata: Metadata = {
  title: getPages("en").admisiones.metaTitle,
  description: getPages("en").admisiones.metaDesc,
  alternates: { canonical: "/en/admisiones", languages: { es: "/admisiones", en: "/en/admisiones" } },
};

export default function Page() {
  return <Admisiones lang="en" />;
}
