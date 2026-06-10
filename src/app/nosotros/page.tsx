import type { Metadata } from "next";
import Link from "next/link";
import { Target, Eye, Heart, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { inst, valores, stats, identidad } from "@/data/site";

export const metadata: Metadata = {
  title: "¿Quién es UCM? — Nuestra historia y valores",
  description: "Conoce a la Universidad Cultural Metropolitana: 16 años formando profesionales en Tampico con validez oficial, valores humanistas y un claustro docente experimentado.",
  alternates: { canonical: "/nosotros" },
};

export default function Nosotros() {
  return (
    <>
      <PageHero
        eyebrow="¿Quién es UCM?"
        title={<>16 años impulsando el <span className="text-ucm-skyLt">talento de Tampico</span></>}
        desc={inst.motto + "."}
      />

      <section className="container-ucm py-16 sm:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">Nuestra historia</span>
            <h2 className="title-display mt-4 text-3xl text-ucm-navy sm:text-4xl">Una institución con <span className="text-gradient">propósito humanista</span></h2>
            <div className="mt-5 space-y-4 text-lg text-ucm-navy/65">
              <p>{identidad.quienesSomos}</p>
              <p>Desde {inst.founded}, con {inst.years} años de trayectoria, la UCM impulsa el desarrollo de la región a través de sus egresados, su claustro docente experimentado y modalidades de estudio flexibles —escolarizadas, ejecutivas y en línea.</p>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <div className="rounded-3xl border border-ucm-navy/8 bg-white p-7 text-center shadow-soft">
                  <div className="font-display text-4xl font-bold text-gradient">{s.value}</div>
                  <div className="mt-2 text-sm text-ucm-navy/60">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ucm-ice/60 py-16 sm:py-20">
        <div className="container-ucm grid gap-5 md:grid-cols-3">
          {[
            { icon: Target, t: "Misión", d: identidad.mision },
            { icon: Eye, t: "Visión", d: identidad.vision },
            { icon: Heart, t: "Valores", d: "Honestidad, Cultura y Calidad: los tres pilares que guían cada decisión académica y cada relación con nuestra comunidad." },
          ].map((b, i) => (
            <Reveal key={b.t} delay={i * 0.08}>
              <div className="h-full rounded-3xl border border-ucm-navy/8 bg-white p-8 shadow-soft">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ucm-blue text-white"><b.icon className="h-6 w-6" /></span>
                <h3 className="mt-5 font-display text-xl font-semibold text-ucm-navy">{b.t}</h3>
                <p className="mt-2 text-ucm-navy/65">{b.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-ucm py-16 sm:py-20">
        <div className="grid gap-4 sm:grid-cols-3">
          {valores.map((v, i) => (
            <Reveal key={v.t} delay={i * 0.08}>
              <div className="flex h-full gap-4 rounded-2xl border border-ucm-navy/8 bg-white p-6 shadow-soft">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-ucm-ice font-display text-lg font-bold text-ucm-blue">{i + 1}</span>
                <div><h3 className="font-display text-lg font-semibold text-ucm-navy">{v.t}</h3><p className="mt-1 text-sm text-ucm-navy/65">{v.d}</p></div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 text-center">
          <Link href="/respaldos" className="btn-primary">Conoce quiénes nos respaldan <ArrowRight className="h-4 w-4" /></Link>
        </Reveal>
      </section>
    </>
  );
}
