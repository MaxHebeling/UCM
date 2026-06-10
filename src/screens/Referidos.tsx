import { Gift, Megaphone, PiggyBank, MessageCircle, Sparkles } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { inst, referidos } from "@/data/site";
import type { Locale } from "@/i18n/config";

const icons = [Megaphone, Gift, PiggyBank];

const EN = {
  eyebrow: "Referral Rewards Program",
  titleA: "Share the UCM experience and ", titleB: "earn rewards",
  desc: "Free monthly tuition, graduation savings or direct cash rewards: you set the limit on your rewards.",
  how: "How does it work?",
  htitleA: "For every student you refer who enrolls, ", htitleB: "you choose your reward",
  intro: "At UCM we believe in recognizing and rewarding our students' dedication. For every student you refer who enrolls at UCM, you receive special rewards: you set the limit.",
  opciones: [
    { titulo: "FREE monthly tuition", detalle: "Half a month's tuition for every enrolled student." },
    { titulo: "Graduation discounts", detalle: "-$1,000 for a bachelor's enrollment · -$2,000 for a graduate enrollment." },
    { titulo: "UCM cash back", detalle: "Cash reward: $800 per bachelor's, $900 per master's and $1,000 per doctorate." },
  ],
  ampl: "Expand your opportunities",
  nota: "The more you share UCM's programs, the greater your rewards and your contribution to the growth of the #UCMFamily.",
  nota2: "Share your experience in your own style, energy and way: this is our way of thanking you for your trust and for sharing the UCM experience.",
  cta: "I want to refer someone",
};

export default function Referidos({ lang = "es" }: { lang?: Locale }) {
  const isEn = lang === "en";
  return (
    <>
      <PageHero
        eyebrow={isEn ? EN.eyebrow : "Programa de beneficios por referidos"}
        title={isEn ? <>{EN.titleA}<span className="text-ucm-skyLt">{EN.titleB}</span></> : <>Comparte la experiencia UCM y <span className="text-ucm-skyLt">gana beneficios</span></>}
        desc={isEn ? EN.desc : "Mensualidades, gastos de titulación o bonificaciones directas: el límite de beneficios lo pones tú."}
      />
      <section className="container-ucm py-16 sm:py-20">
        <Reveal>
          <span className="eyebrow">{isEn ? EN.how : "¿Cómo funciona?"}</span>
          <h2 className="title-display mt-4 max-w-3xl text-3xl text-ucm-navy sm:text-4xl">
            {isEn ? <>{EN.htitleA}<span className="text-gradient">{EN.htitleB}</span></> : <>Por cada alumno que refieras e inscriba, <span className="text-gradient">tú eliges tu beneficio</span></>}
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-ucm-navy/65">{isEn ? EN.intro : referidos.intro}</p>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {referidos.opciones.map((o, i) => {
            const Icon = icons[i];
            const op = isEn ? EN.opciones[i] : { titulo: o.titulo, detalle: o.detalle };
            return (
              <Reveal key={o.clave} delay={i * 0.08}>
                <div className="flex h-full flex-col rounded-3xl border border-ucm-navy/8 bg-white p-8 shadow-soft">
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ucm-blue text-white"><Icon className="h-6 w-6" /></span>
                    <span className="font-display text-3xl font-bold text-gradient">{o.clave}</span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-ucm-navy">{op.titulo}</h3>
                  <p className="mt-2 text-ucm-navy/65">{op.detalle}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
        <Reveal className="mt-10">
          <div className="rounded-3xl bg-ucm-navyDk p-8 text-white shadow-glow sm:p-10">
            <div className="flex items-center gap-3"><Sparkles className="h-7 w-7 text-ucm-skyLt" /><h3 className="font-display text-xl font-semibold">{isEn ? EN.ampl : "Amplía tus oportunidades"}</h3></div>
            <p className="mt-3 max-w-3xl text-white/70">{isEn ? EN.nota : referidos.nota}</p>
            <p className="mt-2 max-w-3xl text-white/70">{isEn ? EN.nota2 : "Comparte tu experiencia con tu propio estilo, energía y personalización: ésta es nuestra forma de agradecerte la confianza y el compartir la experiencia UCM."}</p>
            <a href={inst.whatsapp} target="_blank" rel="noopener" className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-ucm-navy transition hover:bg-ucm-sky">
              <MessageCircle className="h-4 w-4" /> {isEn ? EN.cta : "Quiero referir a alguien"}
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
