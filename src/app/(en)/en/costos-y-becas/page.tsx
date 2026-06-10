import type { Metadata } from "next";
import Costos from "@/screens/Costos";
import { getPages } from "@/i18n/pages";

export const metadata: Metadata = {
  title: getPages("en").costos.metaTitle,
  description: getPages("en").costos.metaDesc,
  alternates: { canonical: "/en/costos-y-becas", languages: { es: "/costos-y-becas", en: "/en/costos-y-becas" } },
};

export default function Page() {
  return <Costos lang="en" />;
}
