import type { Metadata } from "next";
import QuizScreen from "@/screens/Quiz";

export const metadata: Metadata = {
  title: "Encuentra tu programa ideal — Quiz vocacional UCM",
  description: "Responde 4 preguntas y descubre qué programa de la UCM es para ti: preparatoria, licenciaturas, maestrías o doctorado con validez oficial SEP en Tampico.",
  alternates: { canonical: "/encuentra-tu-programa", languages: { es: "/encuentra-tu-programa", en: "/en/encuentra-tu-programa" } },
};

export default function Page() {
  return <QuizScreen lang="es" />;
}
