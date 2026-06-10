import Link from "next/link";
import { ArrowRight, Star, Quote, BadgeCheck, Laptop, CalendarClock, Award } from "lucide-react";
import Image from "next/image";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ProgramCard from "@/components/ProgramCard";
import VideoBand from "@/components/VideoBand";
import LogoMarquee from "@/components/LogoMarquee";
import TestimonialMarquee from "@/components/TestimonialMarquee";
import { programas, respaldos, testimonios, valores, inst } from "@/data/site";

const ventajas = [
  { icon: BadgeCheck, t: "Validez oficial (RVOE)", d: "Todos nuestros programas cuentan con Reconocimiento de Validez Oficial de Estudios ante la SEP." },
  { icon: CalendarClock, t: "Modalidad ejecutiva", d: "Horarios en fines de semana y posgrados de corta duración, pensados para quien ya trabaja." },
  { icon: Laptop, t: "En línea o presencial", d: "Estudia desde donde estés con nuestra plataforma UCM En Línea, o vive el campus en Tampico." },
  { icon: Award, t: "Claustro con experiencia real", d: "Abogados, jueces, contadores y doctores en activo que enseñan desde la práctica profesional." },
];

export default function Home() {
  const destacados = programas.filter((p) => p.destacado);
  return (
    <>
      <Hero />

      {/* REFERIDOS BANNER */}
      <section className="container-ucm pt-10">
        <Reveal>
          <Link
            href="/referidos"
            className="flex flex-col items-start justify-between gap-3 rounded-3xl bg-ucm-navyDk p-6 text-white shadow-glow transition hover:bg-ucm-navy sm:flex-row sm:items-center sm:p-7"
          >
            <div>
              <div className="font-display text-lg font-semibold">Programa de beneficios por referidos UCM</div>
              <p className="mt-1 text-sm text-white/70">Recomienda UCM y obtén mensualidades gratis, descuentos en titulación o bonificaciones directas.</p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-ucm-navy">
              Leer más <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </Reveal>
      </section>

      {/* FRANJA DE RESPALDOS (marquee) */}
      <section className="container-ucm pt-12">
        <p className="mb-5 text-center text-xs font-semibold uppercase tracking-widest text-ucm-navy/40">Con el respaldo de instituciones de prestigio</p>
        <LogoMarquee />
      </section>

      {/* VENTAJAS */}
      <section className="container-ucm py-20 sm:py-24">
        <SectionHeading
          eyebrow="Por qué UCM"
          title={<>Una universidad hecha para <span className="text-gradient">tu vida real</span></>}
          desc="Calidad académica con la flexibilidad que necesitas para crecer sin pausar tu carrera profesional."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
          {/* Caja grande: dato destacado */}
          <Reveal className="sm:col-span-2 lg:row-span-2">
            <div className="relative flex h-full min-h-[15rem] flex-col justify-between overflow-hidden rounded-3xl bg-ucm-gradient p-8 text-white shadow-glow">
              <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
              <div className="relative">
                <span className="text-xs font-semibold uppercase tracking-widest text-ucm-skyLt">16 años de trayectoria</span>
                <div className="mt-4 font-display text-6xl font-bold leading-none sm:text-7xl">+{inst.graduates.toLocaleString("es-MX")}</div>
                <p className="mt-2 max-w-xs text-white/80">Licenciados, Masters y Doctores egresados que hoy transforman la región.</p>
              </div>
              <Link href="/nosotros" className="relative mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ucm-navy">
                Conoce UCM <ArrowRight className="h-4 w-4" />
              </Link>
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

      {/* QUIZ */}
      <section className="container-ucm pb-4">
        <Reveal>
          <Link href="/encuentra-tu-programa" className="flex flex-col items-start justify-between gap-3 rounded-3xl border-2 border-dashed border-ucm-blue/30 bg-ucm-ice/50 p-6 transition hover:border-ucm-blue sm:flex-row sm:items-center sm:p-7">
            <div>
              <div className="font-display text-lg font-semibold text-ucm-navy">¿No sabes qué estudiar? Descúbrelo en 30 segundos</div>
              <p className="mt-1 text-sm text-ucm-navy/60">Responde 4 preguntas y te recomendamos el programa exacto para tu momento de vida.</p>
            </div>
            <span className="btn-primary shrink-0">Hacer el quiz <ArrowRight className="h-4 w-4" /></span>
          </Link>
        </Reveal>
      </section>

      {/* PROGRAMAS DESTACADOS */}
      <section className="bg-ucm-ice/60 py-20 sm:py-24">
        <div className="container-ucm">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="Oferta educativa" title={<>Programas <span className="text-gradient">destacados</span></>} desc="De la preparatoria al doctorado, con validez oficial y enfoque profesional." />
            <Link href="/oferta" className="btn-ghost">Ver toda la oferta <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {destacados.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 0.08}><ProgramCard p={p} /></Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VALORES / MOTTO */}
      <section className="container-ucm py-20 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">{inst.motto}</span>
            <h2 className="title-display mt-4 text-3xl text-ucm-navy sm:text-4xl">Formamos profesionales con <span className="text-gradient">valores humanistas</span></h2>
            <p className="mt-4 text-lg text-ucm-navy/65">
              Desde {inst.founded}, la Universidad Cultural Metropolitana impulsa el desarrollo de Tampico con planes de estudio actualizados,
              un claustro docente experimentado y una formación que trasciende el aula.
            </p>
            <Link href="/nosotros" className="btn-primary mt-7">Conoce nuestra historia <ArrowRight className="h-4 w-4" /></Link>
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

      {/* FRANJA CON VIDEO — POSGRADOS */}
      <VideoBand />

      {/* RESPALDOS */}
      <section className="bg-ucm-navyDk py-20 text-white sm:py-24">
        <div className="container-ucm">
          <SectionHeading eyebrow="Quiénes nos respaldan" light center title={<>Confianza <span className="text-ucm-skyLt">respaldada por instituciones</span></>} desc="Nuestra validez oficial está reconocida por las máximas autoridades educativas." />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {respaldos.map((r, i) => (
              <Reveal key={r.name} delay={(i % 3) * 0.08}>
                <div className="h-full rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur">
                  <div className="flex h-16 items-center rounded-xl bg-white px-4">
                    <Image src={r.logo} alt={`Logotipo ${r.name}`} width={262} height={92} className="h-11 w-auto max-w-full object-contain" />
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
        <SectionHeading eyebrow="#SomosUCM" center title={<>Lo que dicen <span className="text-gradient">nuestros estudiantes</span></>} />
      </section>
      <div className="py-10">
        <TestimonialMarquee />
      </div>
      <section className="container-ucm pb-20 text-center sm:pb-24">
        <Reveal className="text-center">
          <a
            href="https://g.page/UCMTampico"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-2xl border border-ucm-navy/15 bg-white px-6 py-3.5 text-sm font-semibold text-ucm-navy shadow-soft transition hover:border-ucm-blue/40"
          >
            <Star className="h-4 w-4 fill-gold text-gold" /> Ver todas las reseñas en Google
          </a>
        </Reveal>
      </section>

      {/* CTA FINAL */}
      <section className="container-ucm pb-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-ucm-gradient px-8 py-16 text-center text-white shadow-glow sm:px-16">
            <div className="absolute inset-0 bg-[radial-gradient(700px_300px_at_50%_-20%,rgba(255,255,255,0.25),transparent)]" />
            <div className="relative">
              <h2 className="title-display text-3xl sm:text-5xl">Tu lugar te está esperando</h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-white/85">Inscripciones abiertas. Solicita informes hoy y asegura tu beca de inscripción. <strong className="text-white">#SóloFaltasTú</strong></p>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <a href={inst.whatsapp} target="_blank" rel="noopener" className="btn-white">Inscríbete por WhatsApp</a>
                <Link href="/admisiones" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">Ver proceso de admisión <ArrowRight className="h-4 w-4" /></Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
