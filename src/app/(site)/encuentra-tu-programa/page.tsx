import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Quiz from "@/components/Quiz";

export const metadata: Metadata = {
  title: "Encuentra tu programa ideal — Quiz vocacional UCM",
  description:
    "Responde 4 preguntas y descubre qué programa de la UCM es para ti: preparatoria, licenciaturas, maestrías o doctorado con validez oficial SEP en Tampico.",
  alternates: { canonical: "/encuentra-tu-programa" },
};

export default function EncuentraTuPrograma() {
  return (
    <>
      <PageHero
        eyebrow="Quiz vocacional"
        title={<>Descubre qué programa <span className="text-ucm-skyLt">es para ti</span></>}
        desc="4 preguntas, 30 segundos, y te decimos exactamente por dónde empezar."
      />
      <section className="container-ucm py-16 sm:py-20">
        <div className="mx-auto max-w-2xl">
          <Quiz />
        </div>
      </section>
    </>
  );
}
