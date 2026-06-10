import type { Metadata } from "next";
import Plan from "@/screens/Plan";

export const metadata: Metadata = {
  title: "Plan de Estudios — Preparatoria UCM",
  description: "Descubre nuestro completo Plan de Estudios de Preparatoria en UCM. Prepárate con una educación integral que fortalece tus habilidades académicas y te impulsa hacia el éxito universitario.",
  alternates: { canonical: "/preparatoria/plan-de-estudios", languages: { es: "/preparatoria/plan-de-estudios", en: "/en/preparatoria/plan-de-estudios" } },
};

export default function Page() {
  return <Plan lang="es" />;
}
