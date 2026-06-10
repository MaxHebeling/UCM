import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import NetflixRow from "@/components/NetflixRow";
import { programas } from "@/data/site";

export const metadata: Metadata = {
  title: "Oferta Educativa — Licenciaturas, Maestrías, MBA y Doctorado",
  description: "Conoce toda la oferta educativa de la UCM en Tampico: preparatoria, licenciaturas, maestrías, MBA y doctorado con RVOE. Modalidad ejecutiva, en línea y presencial.",
  alternates: { canonical: "/oferta" },
};

const filas: { nivel: string; titulo: string }[] = [
  { nivel: "Preparatoria", titulo: "Preparatoria" },
  { nivel: "Licenciatura", titulo: "Licenciaturas" },
  { nivel: "Maestría", titulo: "Maestrías" },
  { nivel: "MBA", titulo: "MBA y Alta Dirección" },
  { nivel: "Doctorado", titulo: "Doctorado" },
];

export default function OfertaPage() {
  return (
    <>
      <PageHero
        eyebrow="Oferta educativa"
        title={<>Encuentra el programa que <span className="text-ucm-skyLt">transformará tu futuro</span></>}
        desc="Todos nuestros programas cuentan con Validez Oficial de Estudios (RVOE) ante la SEP. Explora por nivel."
      />
      <div className="container-ucm space-y-12 py-16 sm:py-20">
        {filas.map((f) => {
          const items = programas.filter((p) => p.nivel === f.nivel);
          if (!items.length) return null;
          return (
            <Reveal key={f.nivel}>
              <NetflixRow title={f.titulo} items={items} />
            </Reveal>
          );
        })}
      </div>
    </>
  );
}
