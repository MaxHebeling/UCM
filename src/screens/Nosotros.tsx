import Link from "next/link";
import { Target, Eye, Heart, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import { inst } from "@/data/site";
import Diferenciadores from "@/components/Diferenciadores";
import { getValores, getStats, getIdentidad } from "@/i18n/content";
import { getPages } from "@/i18n/pages";
import { localePath, type Locale } from "@/i18n/config";

export default function Nosotros({ lang = "es" }: { lang?: Locale }) {
  const d = getPages(lang).nosotros;
  const identidad = getIdentidad(lang);
  const valores = getValores(lang);
  const stats = getStats(lang);
  const histP2 = lang === "en"
    ? `Since ${inst.founded}, with ${inst.years} years of experience, UCM drives the region's development through its graduates, its experienced faculty and flexible study formats — on-campus, executive and online.`
    : `Desde ${inst.founded}, con ${inst.years} años de trayectoria, la UCM impulsa el desarrollo de la región a través de sus egresados, su claustro docente experimentado y modalidades de estudio flexibles —escolarizadas, ejecutivas y en línea.`;
  const valoresDesc = lang === "en"
    ? "Integrity, Culture and Quality: the three pillars that guide every academic decision and every relationship with our community."
    : "Honestidad, Cultura y Calidad: los tres pilares que guían cada decisión académica y cada relación con nuestra comunidad.";

  return (
    <>
      <PageHero eyebrow={d.eyebrow} title={<>{d.titleA}<span className="text-ucm-skyLt">{d.titleB}</span></>} desc={inst.motto + "."} />
      <section className="container-ucm py-16 sm:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">{d.histEyebrow}</span>
            <h2 className="title-display mt-4 text-3xl text-ucm-navy sm:text-4xl">{d.histTitleA}<span className="text-gradient">{d.histTitleB}</span></h2>
            <div className="mt-5 space-y-4 text-lg text-ucm-navy/65"><p>{identidad.quienesSomos}</p><p>{histP2}</p></div>
          </Reveal>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <div className="rounded-3xl border border-ucm-navy/8 bg-white p-7 text-center shadow-soft">
                  <div className="font-display text-4xl font-bold text-gradient"><CountUp value={s.value} /></div>
                  <div className="mt-2 text-sm text-ucm-navy/60">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ucm-ice/60 py-16 sm:py-20">
        <div className="container-ucm grid gap-5 md:grid-cols-3">
          {[{ icon: Target, t: d.misionT, dd: identidad.mision }, { icon: Eye, t: d.visionT, dd: identidad.vision }, { icon: Heart, t: d.valoresT, dd: valoresDesc }].map((b) => (
            <Reveal key={b.t} delay={0}>
              <div className="h-full rounded-3xl border border-ucm-navy/8 bg-white p-8 shadow-soft">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ucm-blue text-white"><b.icon className="h-6 w-6" /></span>
                <h3 className="mt-5 font-display text-xl font-semibold text-ucm-navy">{b.t}</h3>
                <p className="mt-2 text-ucm-navy/65">{b.dd}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Diferenciadores lang={lang} />

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
          <Link href={localePath(lang, "/respaldos")} className="btn-primary">{d.respaldosCta} <ArrowRight className="h-4 w-4" /></Link>
        </Reveal>
      </section>
    </>
  );
}
