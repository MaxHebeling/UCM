import type { Metadata } from "next";
import Respaldos from "@/screens/Respaldos";
import { getPages } from "@/i18n/pages";

export const metadata: Metadata = {
  title: getPages("es").respaldos.metaTitle,
  description: getPages("es").respaldos.metaDesc,
  alternates: { canonical: "/respaldos", languages: { es: "/respaldos", en: "/en/respaldos" } },
};

export default function Page() {
  return <Respaldos lang="es" />;
}
