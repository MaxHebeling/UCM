import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, BadgeCheck, Laptop, CalendarClock, Award } from "lucide-react";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ProgramCard from "@/components/ProgramCard";
import VideoBand from "@/components/VideoBand";
import LogoMarquee from "@/components/LogoMarquee";
import TestimonialMarquee from "@/components/TestimonialMarquee";
import Diferenciadores from "@/components/Diferenciadores";
import ProfesionistasBand from "@/components/ProfesionistasBand";
import OfertaSecundaria from "@/components/OfertaSecundaria";
import ClaustroTeaser from "@/components/ClaustroTeaser";
import Modalidades from "@/components/Modalidades";
import HomeFaq from "@/components/HomeFaq";
import { inst } from "@/data/site";
import { getProgramas, getRespaldos, getValores } from "@/i18n/content";
import { getDict } from "@/i18n/dict";
import { getMarketing } from "@/i18n/marketing";
import { localePath, type Locale } from "@/i18n/config";

export default function Home({ lang = "es" }: { lang?: Locale }) {
  const t = getDict(lang);
  const d = t.home;
  const c = t.common;
  const m = getMarketing(lang);
  const p = (path: string) => localePath(lang, path);
  const programas = getProgramas(lang);
  const respaldos = getRespaldos(lang);
  const valores = getValores(lang);
  const destacados = programas.filter((x) => x.destacado);

  const ventajas = [
    { icon: BadgeCheck, t: d.v1t, d: d.v1d },
    { icon: CalendarClock, t: d.v2t, d: d.v2d },
    { icon: Laptop, t: d.v3t, d: d.v3d },
    { icon: Award, t: d.v4t, d: d.v4d },
  ];

  return (
    <>
      <Hero lang={lang} />

      {/* REFERIDOS BANNER */}
      <section className="container-ucm pt-10">
        <Reveal>
          <Link href={p("/referidos")} className="flex flex-col items-start justify-between gap-3 rounded-3xl bg-ucm-navyDk p-6 text-white shadow-glow transition hover:bg-ucm-navy sm:flex-row sm:items-center sm:p-7">
            <div>
              <div className="font-display text-lg font-semibold">{d.referidosT}</div>
              <p className="mt-1 text-sm text-white/70">{d.referidosD}</p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-ucm-navy">{c.leerMas} <ArrowRight className="h-4 w-4" /></span>
          </Link>
        </Reveal>
      </section>

      {/* FRANJA DE RESPALDOS (marquee) */}
      <section className="container-ucm pt-12">
        <p className="mb-5 text-center text-xs font-semibold uppercase tracking-widest text-ucm-navy/40">{d.trust}</p>
        <LogoMarquee />
      </section>

      {/* TAGLINE — media kit */}
      <section className="container-ucm pt-16">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="mx-auto block h-px w-16 bg-gold" />
          <p className="mt-6 font-display text-2xl italic leading-snug text-ucm-navy sm:text-3xl">{m.tagline}</p>
          <span className="mx-auto mt-6 block h-px w-16 bg-gold" />
        </Reveal>
      </section>

      {/* VENTAJAS (bento) */}
      <section className="container-ucm py-20 sm:py-24">
        <SectionHeading eyebrow={d.whyEyebrow} title={<>{d.whyTitleA}<span className="text-gradient">{d.whyTitleB}</span></>} desc={d.whyDesc} />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
          <Reveal className="sm:col-span-2 lg:row-span-2">
            <div className="relative flex h-full min-h-[15rem] flex-col justify-between overflow-hidden rounded-3xl bg-ucm-gradient p-8 text-white shadow-glow">
              <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
              <div className="relative">
                <span className="text-xs font-semibold uppercase tracking-widest text-ucm-skyLt">{d.bentoYears}</span>
                <div className="mt-4 font-display text-6xl font-bold leading-none sm:text-7xl">+{inst.graduates.toLocaleString("en-US")}</div>
                <p className="mt-2 max-w-xs text-white/80">{d.bentoLabel}</p>
              </div>
              <Link href={p("/nosotros")} className="relative mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ucm-navy">{c.conoceUCM} <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </Reveal>
          {ventajas.map((v, i) => (
            <Reveal key={v.t} delay={i * 0.06}>
              <div className="card h-full">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ucm-ice text-ucm-blue"><v.icon className="h-6 w-6" /></span>
                <h3 className="mt-5 font-display text-lg font-semibold text-ucm-navy">{v.t}</h3>
                <p className="mt-2 text-sm text-ucm-navy/65">{v.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* DIFERENCIADORES */}
      <Diferenciadores lang={lang} />

      {/* CLAUSTRO TEASER — caras reales */}
      <ClaustroTeaser lang={lang} />

      {/* QUIZ */}
      <section className="container-ucm pb-4 pt-20 sm:pt-24">
        <Reveal>
          <Link href={p("/encuentra-tu-programa")} className="flex flex-col items-start justify-between gap-3 rounded-3xl border-2 border-dashed border-ucm-blue/30 bg-ucm-ice/50 p-6 transition hover:border-ucm-blue sm:flex-row sm:items-center sm:p-7">
            <div>
              <div className="font-display text-lg font-semibold text-ucm-navy">{d.quizT}</div>
              <p className="mt-1 text-sm text-ucm-navy/60">{d.quizD}</p>
            </div>
            <span className="btn-primary shrink-0">{d.quizCta} <ArrowRight className="h-4 w-4" /></span>
          </Link>
        </Reveal>
      </section>

      {/* PROGRAMAS DESTACADOS */}
      <section className="bg-ucm-ice/60 py-20 sm:py-24">
        <div className="container-ucm">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow={d.progEyebrow} title={<>{d.progTitleA}<span className="text-gradient">{d.progTitleB}</span></>} desc={d.progDesc} />
            <Link href={p("/oferta")} className="btn-ghost">{c.verTodaOferta} <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {destacados.map((pr, i) => (<Reveal key={pr.slug} delay={(i % 3) * 0.08}><ProgramCard p={pr} lang={lang} /></Reveal>))}
          </div>
        </div>
      </section>

      {/* PROFESIONISTAS EN ACTIVO — motivaciones de compra */}
      <ProfesionistasBand lang={lang} />

      {/* MODALIDADES */}
      <Modalidades lang={lang} />

      {/* VALORES / MOTTO */}
      <section className="container-ucm py-20 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">{inst.motto}</span>
            <h2 className="title-display mt-4 text-3xl text-ucm-navy sm:text-4xl">{d.valoresTitleA}<span className="text-gradient">{d.valoresTitleB}</span></h2>
            <p className="mt-4 text-lg text-ucm-navy/65">{d.valoresDesc}</p>
            <Link href={p("/nosotros")} className="btn-primary mt-7">{c.conoceHistoria} <ArrowRight className="h-4 w-4" /></Link>
          </Reveal>
          <div className="grid gap-4">
            {valores.map((v, i) => (
              <Reveal key={v.t} delay={i * 0.1}>
                <div className="flex gap-4 rounded-2xl border border-ucm-navy/8 bg-white p-6 shadow-soft">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-ucm-blue font-display text-lg font-bold text-white">{i + 1}</span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ucm-navy">{v.t}</h3>
                    <p className="mt-1 text-sm text-ucm-navy/65">{v.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <VideoBand lang={lang} />

      {/* OFERTA SECUNDARIA — diplomados, cursos, certificaciones */}
      <OfertaSecundaria lang={lang} />

      {/* RESPALDOS */}
      <section className="bg-ucm-navyDk py-20 text-white sm:py-24">
        <div className="container-ucm">
          <SectionHeading eyebrow={d.respaldosEyebrow} light center title={<>{d.respaldosTitleA}<span className="text-ucm-skyLt">{d.respaldosTitleB}</span></>} desc={d.respaldosDesc} />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {respaldos.map((r, i) => (
              <Reveal key={r.name} delay={(i % 3) * 0.08}>
                <div className="h-full rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur">
                  <div className="flex h-16 items-center rounded-xl bg-white px-4">
                    <Image src={r.logo} alt={r.name} width={262} height={92} className="h-11 w-auto max-w-full object-contain" />
                  </div>
                  <h3 className="mt-4 font-semibold text-white">{r.name}</h3>
                  <p className="mt-2 text-sm text-white/65">{r.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="container-ucm pt-20 sm:pt-24">
        <SectionHeading eyebrow="#SomosUCM" center title={<>{d.testiTitleA}<span className="text-gradient">{d.testiTitleB}</span></>} />
      </section>
      <div className="py-10"><TestimonialMarquee lang={lang} /></div>
      <section className="container-ucm pb-20 text-center sm:pb-24">
        <Reveal className="text-center">
          <a href="https://g.page/UCMTampico" target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-2xl border border-ucm-navy/15 bg-white px-6 py-3.5 text-sm font-semibold text-ucm-navy shadow-soft transition hover:border-ucm-blue/40">
            <Star className="h-4 w-4 fill-gold text-gold" /> {d.testiCta}
          </a>
        </Reveal>
      </section>

      {/* FAQ */}
      <HomeFaq lang={lang} />

      {/* CTA FINAL */}
      <section className="container-ucm pt-20 pb-24 sm:pt-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-ucm-gradient px-8 py-16 text-center text-white shadow-glow sm:px-16">
            <div className="absolute inset-0 bg-[radial-gradient(700px_300px_at_50%_-20%,rgba(255,255,255,0.25),transparent)]" />
            <div className="relative">
              <h2 className="title-display text-3xl sm:text-5xl">{d.ctaTitle}</h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-white/85">{d.ctaDesc} <strong className="text-white">#SóloFaltasTú</strong></p>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <a href={inst.whatsapp} target="_blank" rel="noopener" className="btn-white">{c.inscribeteWa}</a>
                <Link href={p("/admisiones")} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">{c.verProceso} <ArrowRight className="h-4 w-4" /></Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
