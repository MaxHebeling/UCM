import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check, Clock, Laptop, ShieldCheck, Star, BadgePercent } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import TrackLink from "@/components/TrackLink";
import Reveal from "@/components/Reveal";
import { programas, testimonios, inst } from "@/data/site";

export function generateStaticParams() {
  return programas.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = programas.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: `${p.nombre} — Inscripciones abiertas con beca`,
    description: `${p.resumen} Modalidad ${p.modalidad}. Solicita tu beca hoy.`,
    robots: { index: false, follow: false }, // landing exclusiva para campañas: no compite con la página orgánica
  };
}

export default async function LandingPrograma({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = programas.find((x) => x.slug === slug);
  if (!p) notFound();

  const becaEmpresarial = p.beneficios.some((b) => b.toLowerCase().includes("empresarial"));

  return (
    <>
      {/* HERO + FORM arriba del fold */}
      <section className="bg-ucm-navyDk text-white">
        <div className="container-ucm grid items-start gap-10 py-12 lg:grid-cols-2 lg:py-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold ring-1 ring-white/20">
              <ShieldCheck className="h-3.5 w-3.5 text-ucm-skyLt" /> Validez Oficial SEP · RVOE
            </span>
            <h1 className="title-display mt-5 text-3xl sm:text-4xl lg:text-5xl">{p.nombre}</h1>
            <p className="mt-4 text-lg text-white/75">{p.resumen}</p>

            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              <span className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2.5 ring-1 ring-white/15"><Clock className="h-4 w-4 text-ucm-skyLt" /> {p.duracion}</span>
              <span className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2.5 ring-1 ring-white/15"><Laptop className="h-4 w-4 text-ucm-skyLt" /> {p.modalidad}</span>
            </div>

            {/* Urgencia de beca */}
            <div className="mt-7 rounded-2xl bg-gold/15 p-5 ring-1 ring-gold/40">
              <p className="flex items-center gap-2 font-display text-lg font-semibold text-gold">
                <BadgePercent className="h-5 w-5" />
                {becaEmpresarial ? "Becas empresariales: -50% inscripción y -20% por materia" : "Beca de inscripción de hasta 50% este mes"}
              </p>
              <p className="mt-1 text-sm text-white/70">Lugares limitados por grupo. Reserva tu beca hoy y un asesor te confirma disponibilidad.</p>
            </div>

            <ul className="mt-7 space-y-2.5">
              {p.beneficios.slice(0, 4).map((b) => (
                <li key={b} className="flex gap-2.5 text-sm text-white/85"><Check className="mt-0.5 h-4 w-4 shrink-0 text-ucm-skyLt" /> {b}</li>
              ))}
            </ul>
          </div>

          <Reveal>
            <div className="rounded-3xl bg-white p-1 shadow-glow lg:sticky lg:top-6">
              <div className="rounded-[1.4rem] bg-ucm-ice/50 px-6 pb-2 pt-6 text-center">
                <p className="font-display text-xl font-bold text-ucm-navy">Solicita informes y tu beca</p>
                <p className="mt-1 text-sm text-ucm-navy/60">Respuesta inmediata por WhatsApp</p>
              </div>
              <ContactForm defaultPrograma={p.nombre} origen={`lp_${p.slug}`} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Prueba social */}
      <section className="container-ucm py-14">
        <h2 className="text-center font-display text-2xl font-semibold text-ucm-navy">Lo que dicen nuestros alumnos</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {testimonios.map((t) => (
            <figure key={t.name} className="rounded-2xl border border-ucm-navy/8 bg-white p-5 shadow-soft">
              <div className="flex gap-0.5">{Array.from({ length: t.stars }).map((_, k) => <Star key={k} className="h-4 w-4 fill-gold text-gold" />)}</div>
              <blockquote className="mt-2 text-sm text-ucm-navy/75">“{t.text}”</blockquote>
              <figcaption className="mt-3 text-xs font-semibold text-ucm-navy">{t.name}</figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-ucm-navy/55">
          {inst.years} años · {"+1,519"} egresados · Verifica nuestro RVOE en el SIRVOES de la SEP
        </p>
      </section>

      {/* CTA final WhatsApp */}
      <section className="container-ucm pb-16">
        <div className="rounded-3xl bg-ucm-gradient p-10 text-center text-white shadow-glow">
          <h2 className="title-display text-2xl sm:text-3xl">¿Prefieres que te atendamos ahora?</h2>
          <p className="mt-2 text-white/80">Escríbenos por WhatsApp y resuelve tus dudas en minutos. #SóloFaltasTú</p>
          <TrackLink
            event="whatsapp_click"
            params={{ programa: p.nombre, ubicacion: "lp_cta_final" }}
            href={p.whatsapp ?? inst.whatsapp}
            target="_blank"
            rel="noopener"
            className="btn-white mt-6 inline-flex"
          >
            Hablar por WhatsApp
          </TrackLink>
        </div>
      </section>
    </>
  );
}
