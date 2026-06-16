import type { Metadata } from "next";
import Claustro from "@/screens/Claustro";

export const metadata: Metadata = {
  title: "Claustro docente — Jueces, directivos y doctores en activo",
  description: "Conoce al claustro docente de la UCM: jueces del Poder Judicial en la Maestría en Juicios Orales y directivos empresariales en la Maestría en Alta Dirección. Experiencia real en el aula.",
  alternates: { canonical: "/claustro-docente", languages: { es: "/claustro-docente", en: "/en/claustro-docente" } },
};

export default function Page() {
  return <Claustro lang="es" />;
}
