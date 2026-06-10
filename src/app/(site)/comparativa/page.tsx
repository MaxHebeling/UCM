import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Scale } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { comparativas } from "@/data/comparativas";

export const metadata: Metadata = {
  title: "Comparativas: cómo elegir universidad, prepa y posgrado",
  description: "Guías de decisión honestas para elegir bien: Preparatoria UCM vs Prepa Abierta, estudiar con RVOE vs sin validez oficial, y cómo elegir una maestría en línea en Tampico.",
  alternates: { canonical: "/comparativa" },
};

export default function ComparativasIndex() {
  return (
    <>
      <PageHero
        eyebrow="Comparativas"
        title={<>Compara y elige con <span className="text-ucm-skyLt">información clara</span></>}
        desc="Guías honestas para tomar la mejor decisión sobre tu preparatoria, licenciatura o posgrado."
      />
      <div className="container-ucm py-16 sm:py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {comparativas.map((c, i) => (
            <Reveal key={c.slug} delay={(i % 3) * 0.08}>
              <Link href={`/comparativa/${c.slug}`} className="card group flex h-full flex-col">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ucm-ice text-ucm-blue"><Scale className="h-6 w-6" /></span>
                <h2 className="mt-5 font-display text-xl font-semibold leading-snug text-ucm-navy group-hover:text-ucm-blue">{c.h1}</h2>
                <p className="mt-2 line-clamp-3 text-sm text-ucm-navy/65">{c.intro}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-ucm-blue">Leer comparativa <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" /></span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
}
