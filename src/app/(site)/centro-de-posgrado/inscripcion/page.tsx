import type { Metadata } from "next";
import Inscripcion from "@/screens/Inscripcion";

export const metadata: Metadata = {
  title: "Inscripción en línea — Centro de Posgrado",
  description: "Solicita tu inscripción al Centro de Posgrado de la UCM en línea, con firma autógrafa en pantalla. Maestrías y doctorado con validez oficial SEP.",
  alternates: { canonical: "/centro-de-posgrado/inscripcion", languages: { es: "/centro-de-posgrado/inscripcion", en: "/en/centro-de-posgrado/inscripcion" } },
  robots: { index: false },
};

export default function Page() {
  return <Inscripcion lang="es" />;
}
