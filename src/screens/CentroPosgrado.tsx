import Link from "next/link";
import Image from "next/image";
import { GraduationCap, ArrowRight, ShieldCheck, Percent, Building, Award, Target, Eye, Heart, FileSignature, MapPin } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ProgramCard from "@/components/ProgramCard";
import ProfesionistasBand from "@/components/ProfesionistasBand";
import Modalidades from "@/components/Modalidades";
import ClaustroTeaser from "@/components/ClaustroTeaser";
import HomeFaq from "@/components/HomeFaq";
import { inst } from "@/data/site";
import { getProgramas, getIdentidad } from "@/i18n/content";
import { localePath, type Locale } from "@/i18n/config";

const C = {
  es: {
    eyebrow: "Centro de Posgrado UCM",
    titleA: "Posgrados diseñados para ", titleB: "profesionistas que buscan avanzar",
    desc: "Formación ejecutiva con validez oficial. Maestrías y doctorado pensados para quien ya trabaja y quiere crecer, dirigir y especializarse — sin pausar su carrera.",
    verProgramas: "Ver posgrados", inscribirme: "Iniciar inscripción", informes: "Solicitar informes",
    ofertaEyebrow: "Oferta de posgrado", ofertaTitle: "Maestrías y doctorado", ofertaDesc: "Programas con RVOE, modalidad ejecutiva y un claustro con experiencia real en el campo.",
    becasEyebrow: "Becas del Centro de Posgrado", becasTitle: "Invierte en tu crecimiento con apoyo",
    becasDesc: "Esquema de becas pensado para profesionistas. Solicita tu plan personalizado.",
    becas: [
      { t: "Beca de inscripción", d: "Hasta 50% de descuento al reservar tu lugar dentro del mes." },
      { t: "Beca por materia", d: "Descuento aplicable durante el programa en periodo de promoción." },
      { t: "Becas empresariales", d: "Convenios con empresas e instituciones para colaboradores." },
    ],
    mvvEyebrow: "Nuestra esencia", mision: "Misión", vision: "Visión", valores: "Valores",
    valoresTxt: "Honestidad, Cultura y Calidad: los pilares que guían cada decisión académica.",
    rvoeTitle: "Validez oficial (RVOE)", rvoeDesc: "Todos nuestros posgrados cuentan con Reconocimiento de Validez Oficial de Estudios ante la SEP (CCT 28PSU0124A) y mayor valoración USICAMM.",
    ubicEyebrow: "Ubicación", ubicTitle: "Centro de Posgrado",
    ctaTitle: "Da el siguiente paso en tu carrera", ctaDesc: "Inscripciones abiertas. Solicita informes o inicia tu inscripción en línea.",
    placeholder: "Información específica del Centro de Posgrado pendiente de confirmar por la institución.",
  },
  en: {
    eyebrow: "UCM Graduate Center",
    titleA: "Graduate programs built for ", titleB: "professionals who want to advance",
    desc: "Executive education with official recognition. Master's and doctoral programs for people who already work and want to grow, lead and specialize — without pausing their career.",
    verProgramas: "View programs", inscribirme: "Start enrollment", informes: "Request info",
    ofertaEyebrow: "Graduate offering", ofertaTitle: "Master's and doctorate", ofertaDesc: "RVOE programs, an executive format and a faculty with real field experience.",
    becasEyebrow: "Graduate Center scholarships", becasTitle: "Invest in your growth with support",
    becasDesc: "A scholarship structure built for professionals. Request your personalized plan.",
    becas: [
      { t: "Enrollment scholarship", d: "Up to 50% off when you reserve your spot within the month." },
      { t: "Per-course scholarship", d: "A discount applied during the program in the promotional period." },
      { t: "Corporate scholarships", d: "Agreements with companies and institutions for employees." },
    ],
    mvvEyebrow: "Our essence", mision: "Mission", vision: "Vision", valores: "Values",
    valoresTxt: "Integrity, Culture and Quality: the pillars that guide every academic decision.",
    rvoeTitle: "Official recognition (RVOE)", rvoeDesc: "All our graduate programs hold Official Recognition of Studies from the SEP (CCT 28PSU0124A) and higher USICAMM scoring.",
    ubicEyebrow: "Location", ubicTitle: "Graduate Center",
    ctaTitle: "Take the next step in your career", ctaDesc: "Enrollment is open. Request info or start your enrollment online.",
    placeholder: "Graduate Center-specific information pending confirmation by the institution.",
  },
};

const becaIcons = [Percent, Award, Building];

export default function CentroPosgrado({ lang = "es" }: { lang?: Locale }) {
  const t = C[lang];
  const lp = (p: string) => localePath(lang, p);
  const identidad = getIdentidad(lang);
  const posgrados = getProgramas(lang).filter((p) => p.nivel === "Maestría" || p.nivel === "Doctorado");

  return (
    <>
      {/* HERO premium */}
      <section className="relative overflow-hidden bg-ucm-navyDk pt-36 pb-20 text-white sm:pt-44 sm:pb-28">
        <Image src="/img/estudiantes-profesionales.jpg" alt="" fill priority className="object-cover opacity-25" sizes="100vw" />
        <div className="absolute inset-0 bg-ucm-gradient opacity-85" />
        <div className="pointer-events-none absolute inset-0">
          <div className="aurora-blob absolute -left-24 top-10 h-[30rem] w-[30rem] rounded-full bg-ucm-sky/20 blur-[120px]" />
          <div className="aurora-blob absolute right-0 bottom-0 h-[26rem] w-[26rem] rounded-full bg-ucm-blue/30 blur-[120px]" style={{ animationDelay: "-7s" }} />
        </div>
        <div className="container-ucm relative max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-ucm-skyLt ring-1 ring-white/20"><GraduationCap className="h-3.5 w-3.5" /> {t.eyebrow}</span>
          <h1 className="title-display mt-6 text-4xl text-white sm:text-5xl lg:text-6xl">{t.titleA}<span className="bg-gradient-to-r from-ucm-skyLt to-white bg-clip-text text-transparent">{t.titleB}</span></h1>
          <p className="mt-5 max-w-xl text-lg text-white/85 [text-align:left]">{t.desc}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={lp("/centro-de-posgrado/inscripcion")} className="btn-white"><FileSignature className="h-5 w-5" /> {t.inscribirme}</Link>
            <a href={inst.whatsapp} target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">{t.informes} <ArrowRight className="h-4 w-4" /></a>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-12 bg-white [clip-path:ellipse(75%_100%_at_50%_100%)]" />
      </section>

      {/* OFERTA POSGRADO */}
      <section className="container-ucm py-20 sm:py-24">
        <SectionHeading eyebrow={t.ofertaEyebrow} title={<>{t.ofertaTitle}</>} desc={t.ofertaDesc} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posgrados.map((p, i) => <Reveal key={p.slug} delay={(i % 3) * 0.07}><ProgramCard p={p} lang={lang} /></Reveal>)}
        </div>
      </section>

      {/* PROFESIONISTAS + MODALIDAD (reuso) */}
      <ProfesionistasBand lang={lang} />
      <Modalidades lang={lang} />

      {/* CLAUSTRO exclusivo (reuso teaser) */}
      <ClaustroTeaser lang={lang} />

      {/* MISIÓN / VISIÓN / VALORES */}
      <section className="bg-ucm-ice/50 py-20 sm:py-24">
        <div className="container-ucm">
          <SectionHeading eyebrow={t.mvvEyebrow} center title={<>{t.mision} · {t.vision} · {t.valores}</>} />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[{ icon: Target, h: t.mision, d: identidad.mision }, { icon: Eye, h: t.vision, d: identidad.vision }, { icon: Heart, h: t.valores, d: t.valoresTxt }].map((b) => (
              <Reveal key={b.h}><div className="h-full rounded-3xl border border-ucm-navy/8 bg-white p-8 shadow-soft"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-ucm-blue text-white"><b.icon className="h-6 w-6" /></span><h3 className="mt-5 font-display text-xl font-semibold text-ucm-navy">{b.h}</h3><p className="mt-2 text-ucm-navy/65">{b.d}</p></div></Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BECAS + RVOE */}
      <section className="container-ucm py-20 sm:py-24">
        <SectionHeading eyebrow={t.becasEyebrow} title={<>{t.becasTitle}</>} desc={t.becasDesc} />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {t.becas.map((b, i) => { const Icon = becaIcons[i]; return (
            <Reveal key={b.t} delay={i * 0.08}><div className="card h-full"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-ucm-ice text-ucm-blue"><Icon className="h-6 w-6" /></span><h3 className="mt-5 font-display text-lg font-semibold text-ucm-navy">{b.t}</h3><p className="mt-2 text-sm text-ucm-navy/65">{b.d}</p></div></Reveal>
          ); })}
        </div>
        <Reveal className="mt-8">
          <div className="flex flex-col items-start gap-4 rounded-3xl bg-ucm-navyDk p-8 text-white shadow-glow sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4"><ShieldCheck className="mt-0.5 h-8 w-8 shrink-0 text-ucm-skyLt" /><div><h3 className="font-display text-lg font-semibold">{t.rvoeTitle}</h3><p className="mt-1 max-w-2xl text-sm text-white/70">{t.rvoeDesc}</p></div></div>
            <Link href={lp("/respaldos")} className="btn-white shrink-0">{lang === "en" ? "See accreditation" : "Ver respaldos"}</Link>
          </div>
        </Reveal>
      </section>

      {/* FAQ (reuso) */}
      <HomeFaq lang={lang} />

      {/* UBICACIÓN + CTA */}
      <section className="container-ucm py-20 sm:py-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-ucm-gradient px-8 py-16 text-center text-white shadow-glow sm:px-16">
            <h2 className="title-display text-3xl sm:text-4xl">{t.ctaTitle}</h2>
            <p className="mx-auto mt-3 max-w-xl text-white/85">{t.ctaDesc}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href={lp("/centro-de-posgrado/inscripcion")} className="btn-white"><FileSignature className="h-5 w-5" /> {t.inscribirme}</Link>
              <a href={inst.whatsapp} target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">{t.informes}</a>
            </div>
            <p className="mt-6 inline-flex items-center gap-2 text-sm text-white/70"><MapPin className="h-4 w-4" /> {inst.address}</p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
