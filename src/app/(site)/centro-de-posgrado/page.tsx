import type { Metadata } from "next";
import CentroPosgrado from "@/screens/CentroPosgrado";

export const metadata: Metadata = {
  title: "Centro de Posgrado — Maestrías y Doctorado con RVOE",
  description: "El Centro de Posgrado de la UCM: maestrías y doctorado en modalidad ejecutiva, con validez oficial SEP, para profesionistas que buscan crecer sin pausar su carrera.",
  alternates: { canonical: "/centro-de-posgrado", languages: { es: "/centro-de-posgrado", en: "/en/centro-de-posgrado", "x-default": "/centro-de-posgrado" } },
};

export default function Page() {
  return <CentroPosgrado lang="es" />;
}
