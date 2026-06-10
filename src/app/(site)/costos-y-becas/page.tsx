import type { Metadata } from "next";
import Costos from "@/screens/Costos";
import { getPages } from "@/i18n/pages";

export const metadata: Metadata = {
  title: getPages("es").costos.metaTitle,
  description: getPages("es").costos.metaDesc,
  alternates: { canonical: "/costos-y-becas", languages: { es: "/costos-y-becas", en: "/en/costos-y-becas" } },
};

export default function Page() {
  return <Costos lang="es" />;
}
