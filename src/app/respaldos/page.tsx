import type { Metadata } from "next";
import { Building2, ShieldCheck } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { respaldos, inst } from "@/data/site";

export const metadata: Metadata = {
  title: "Quiénes nos respaldan — Validez oficial y acreditaciones",
  description: "La UCM cuenta con RVOE de la SEP y la Secretaría de Educación de Tamaulipas, incorporación a la UAT, certificación Cambridge English y valoración USICAMM.",
  alternates: { canonical: "/respaldos" },
};

export default function Respaldos() {
  return (
    <>
      <PageHero
        eyebrow="Quiénes nos respaldan"
        title={<>Confianza <span className="text-ucm-skyLt">respaldada oficialmente</span></>}
        desc="Nuestra calidad académica está reconocida por las máximas autoridades educativas del país."
      />

      <section className="container-ucm py-16 sm:py-20">
        <div className="grid gap-5 md:grid-cols-2">
          {respaldos.map((r, i) => (
            <Reveal key={r.name} delay={(i % 2) * 0.08}>
              <div className="flex h-full gap-5 rounded-3xl border border-ucm-navy/8 bg-white p-7 shadow-soft">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-ucm-ice text-ucm-blue"><Building2 className="h-7 w-7" /></span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ucm-navy">{r.name}</h3>
                  <p className="mt-2 text-sm text-ucm-navy/65">{r.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <div className="rounded-3xl bg-ucm-navyDk p-8 text-white shadow-glow sm:p-10">
            <div className="flex items-center gap-3"><ShieldCheck className="h-7 w-7 text-ucm-skyLt" /><h3 className="font-display text-xl font-semibold">Acuerdos de Reconocimiento de Validez Oficial de Estudios</h3></div>
            <p className="mt-3 text-white/70">CCT {inst.cct} ante la Secretaría de Educación de Tamaulipas. Programas con los siguientes números de acuerdo:</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {inst.rvoeAll.map((a) => <span key={a} className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium ring-1 ring-white/15">{a}</span>)}
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
