import type { Metadata } from "next";
import Oferta from "@/screens/Oferta";
import { getPages } from "@/i18n/pages";

export const metadata: Metadata = {
  title: getPages("en").oferta.metaTitle,
  description: getPages("en").oferta.metaDesc,
  alternates: { canonical: "/en/oferta", languages: { es: "/oferta", en: "/en/oferta" } },
};

export default function Page() {
  return <Oferta lang="en" />;
}
