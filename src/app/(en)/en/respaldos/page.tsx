import type { Metadata } from "next";
import Respaldos from "@/screens/Respaldos";
import { getPages } from "@/i18n/pages";

export const metadata: Metadata = {
  title: getPages("en").respaldos.metaTitle,
  description: getPages("en").respaldos.metaDesc,
  alternates: { canonical: "/en/respaldos", languages: { es: "/respaldos", en: "/en/respaldos" } },
};

export default function Page() {
  return <Respaldos lang="en" />;
}
