import type { Metadata } from "next";
import Referidos from "@/screens/Referidos";

export const metadata: Metadata = {
  title: "Programa de beneficios por referidos UCM",
  description: "Invita a tus amigos a unirse a UCM y obtén beneficios: mensualidades gratis, descuentos en titulación o bonificaciones directas. Participa y crece con la #FamiliaUCM.",
  alternates: { canonical: "/referidos", languages: { es: "/referidos", en: "/en/referidos" } },
};

export default function Page() {
  return <Referidos lang="es" />;
}
