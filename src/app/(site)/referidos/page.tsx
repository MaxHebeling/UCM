import type { Metadata } from "next";
import { Gift, Megaphone, PiggyBank, MessageCircle, Sparkles } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { inst, referidos } from "@/data/site";

export const metadata: Metadata = {
  title: "Programa de beneficios por referidos UCM",
  description:
    "Invita a tus amigos a unirse a UCM y obtén beneficios: mensualidades gratis, descuentos en titulación o bonificaciones directas. Participa y crece con la #FamiliaUCM.",
  alternates: { canonical: "/referidos" },
};

const icons = [Megaphone, Gift, PiggyBank];

export default function Referidos() {
  return (
    <>
      <PageHero
        eyebrow="Programa de beneficios por referidos"
        title={<>Comparte la experiencia UCM y <span className="text-ucm-skyLt">gana beneficios</span></>}
        desc="Mensualidades, gastos de titulación o bonificaciones directas: el límite de beneficios lo pones tú."
      />

      <section className="container-ucm py-16 sm:py-20">
        <Reveal>
          <span className="eyebrow">¿Cómo funciona?</span>
          <h2 className="title-display mt-4 max-w-3xl text-3xl text-ucm-navy sm:text-4xl">
            Por cada alumno que refieras e inscriba, <span className="text-gradient">tú eliges tu beneficio</span>
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-ucm-navy/65">{referidos.intro}</p>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {referidos.opciones.map((o, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={o.clave} delay={i * 0.08}>
                <div className="flex h-full flex-col rounded-3xl border border-ucm-navy/8 bg-white p-8 shadow-soft">
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ucm-blue text-white"><Icon className="h-6 w-6" /></span>
                    <span className="font-display text-3xl font-bold text-gradient">{o.clave}</span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-ucm-navy">{o.titulo}</h3>
                  <p className="mt-2 text-ucm-navy/65">{o.detalle}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-10">
          <div className="rounded-3xl bg-ucm-navyDk p-8 text-white shadow-glow sm:p-10">
            <div className="flex items-center gap-3">
              <Sparkles className="h-7 w-7 text-ucm-skyLt" />
              <h3 className="font-display text-xl font-semibold">Amplía tus oportunidades</h3>
            </div>
            <p className="mt-3 max-w-3xl text-white/70">{referidos.nota}</p>
            <p className="mt-2 max-w-3xl text-white/70">
              Comparte tu experiencia con tu propio estilo, energía y personalización: ésta es nuestra forma de agradecerte la confianza y el compartir la experiencia UCM.
            </p>
            <a
              href={inst.whatsapp}
              target="_blank"
              rel="noopener"
              className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-ucm-navy transition hover:bg-ucm-sky"
            >
              <MessageCircle className="h-4 w-4" /> Quiero referir a alguien
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
