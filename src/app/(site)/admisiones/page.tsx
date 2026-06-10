import type { Metadata } from "next";
import Admisiones from "@/screens/Admisiones";
import { getPages } from "@/i18n/pages";

export const metadata: Metadata = {
  title: getPages("es").admisiones.metaTitle,
  description: getPages("es").admisiones.metaDesc,
  alternates: { canonical: "/admisiones", languages: { es: "/admisiones", en: "/en/admisiones" } },
};

export default function Page() {
  return <Admisiones lang="es" />;
}
