import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ProgramCard from "@/components/ProgramCard";
import { programas } from "@/data/site";

export const metadata: Metadata = {
  title: "Oferta Educativa — Licenciaturas, Maestrías, MBA y Doctorado",
  description: "Conoce toda la oferta educativa de la UCM en Tampico: preparatoria, licenciaturas, maestrías, MBA y doctorado con RVOE. Modalidad ejecutiva, en línea y presencial.",
  alternates: { canonical: "/oferta" },
};

const niveles = ["Preparatoria", "Licenciatura", "Maestría", "MBA", "Doctorado"] as const;

export default function OfertaPage() {
  return (
    <>
      <PageHero
        eyebrow="Oferta educativa"
        title={<>Encuentra el programa que <span className="text-ucm-skyLt">transformará tu futuro</span></>}
        desc="Todos nuestros programas cuentan con Validez Oficial de Estudios (RVOE) ante la SEP."
      />
      <div className="container-ucm py-16 sm:py-20">
        {niveles.map((nivel) => {
          const items = programas.filter((p) => p.nivel === nivel);
          if (!items.length) return null;
          return (
            <div key={nivel} className="mb-14">
              <Reveal>
                <h2 className="title-display mb-6 text-2xl text-ucm-navy sm:text-3xl">
                  {nivel === "MBA" ? "MBA y Alta Dirección" : `${nivel}${nivel === "Licenciatura" || nivel === "Maestría" ? "s" : ""}`}
                </h2>
              </Reveal>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((p, i) => (
                  <Reveal key={p.slug} delay={(i % 3) * 0.07}><ProgramCard p={p} /></Reveal>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
