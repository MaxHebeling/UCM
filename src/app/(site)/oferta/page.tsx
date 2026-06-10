import type { Metadata } from "next";
import Oferta from "@/screens/Oferta";
import { getPages } from "@/i18n/pages";

export const metadata: Metadata = {
  title: getPages("es").oferta.metaTitle,
  description: getPages("es").oferta.metaDesc,
  alternates: { canonical: "/oferta", languages: { es: "/oferta", en: "/en/oferta" } },
};

export default function Page() {
  return <Oferta lang="es" />;
}
