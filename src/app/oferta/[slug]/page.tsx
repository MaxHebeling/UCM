import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, Clock, Laptop, ShieldCheck, Briefcase, BookOpen, ArrowRight, GraduationCap } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ProgramCard from "@/components/ProgramCard";
import { programas, inst } from "@/data/site";

export function generateStaticParams() {
  return programas.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = programas.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: `${p.nombre} en Tampico ${p.rvoe ? "(RVOE)" : ""}`.trim(),
    description: `${p.resumen} Modalidad: ${p.modalidad}. Duración: ${p.duracion}. Con Validez Oficial SEP en la UCM, Tampico.`,
    alternates: { canonical: `/oferta/${p.slug}` },
  };
}

export default async function ProgramaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = programas.find((x) => x.slug === slug);
  if (!p) notFound();
  const related = programas.filter((x) => x.nivel === p.nivel && x.slug !== p.slug).slice(0, 3);
  const fallback = related.length ? related : programas.filter((x) => x.slug !== p.slug).slice(0, 3);

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: p.nombre,
    description: p.resumen,
    educationalCredentialAwarded: p.nivel,
    provider: { "@type": "CollegeOrUniversity", name: inst.legal, sameAs: "https://www.ucmac.edu.mx" },
    ...(p.rvoe ? { identifier: { "@type": "PropertyValue", propertyID: "RVOE", value: inst.rvoe } } : {}),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <PageHero eyebrow={p.nivel} title={p.nombre} desc={p.resumen} />

      <div className="container-ucm grid gap-12 py-16 sm:py-20 lg:grid-cols-3">
        {/* contenido */}
        <div className="lg:col-span-2">
          {p.beneficios?.length > 0 && (
            <Reveal>
              <h2 className="title-display text-2xl text-ucm-navy sm:text-3xl">¿Por qué elegir este programa?</h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {p.beneficios.map((b) => (
                  <li key={b} className="flex gap-3 rounded-2xl border border-ucm-navy/8 bg-white p-4 shadow-soft">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-ucm-blue" /> <span className="text-sm text-ucm-navy/80">{b}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          )}

          {p.areas?.length ? (
            <Reveal className="mt-12">
              <h3 className="flex items-center gap-2 font-display text-xl font-semibold text-ucm-navy"><BookOpen className="h-5 w-5 text-ucm-blue" /> Áreas de estudio</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.areas.map((a) => <span key={a} className="rounded-full bg-ucm-ice px-4 py-2 text-sm font-medium text-ucm-blueDk">{a}</span>)}
              </div>
            </Reveal>
          ) : null}

          {p.salidas?.length ? (
            <Reveal className="mt-12">
              <h3 className="flex items-center gap-2 font-display text-xl font-semibold text-ucm-navy"><Briefcase className="h-5 w-5 text-ucm-blue" /> Campo profesional</h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {p.salidas.map((s) => (
                  <div key={s} className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-soft ring-1 ring-ucm-navy/5">
                    <span className="h-2 w-2 rounded-full bg-ucm-sky" /> <span className="text-sm font-medium text-ucm-navy">{s}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          ) : null}
        </div>

        {/* sidebar */}
        <aside className="lg:col-span-1">
          <div className="sticky top-24 rounded-3xl border border-ucm-navy/8 bg-white p-7 shadow-soft">
            <h3 className="font-display text-lg font-semibold text-ucm-navy">Detalles del programa</h3>
            <dl className="mt-5 space-y-4 text-sm">
              <div className="flex gap-3"><Clock className="h-5 w-5 shrink-0 text-ucm-blue" /><div><dt className="font-semibold text-ucm-navy">Duración</dt><dd className="text-ucm-navy/65">{p.duracion}</dd></div></div>
              <div className="flex gap-3"><Laptop className="h-5 w-5 shrink-0 text-ucm-blue" /><div><dt className="font-semibold text-ucm-navy">Modalidad</dt><dd className="text-ucm-navy/65">{p.modalidad}</dd></div></div>
              {p.rvoe && <div className="flex gap-3"><ShieldCheck className="h-5 w-5 shrink-0 text-ucm-blue" /><div><dt className="font-semibold text-ucm-navy">Validez oficial</dt><dd className="text-ucm-navy/65">RVOE SEP {inst.rvoe}</dd></div></div>}
            </dl>
            <div className="mt-6 rounded-2xl bg-ucm-ice p-4 text-center">
              <p className="text-xs font-semibold uppercase tracking-wide text-ucm-blue">Beneficio del mes</p>
              <p className="mt-1 font-display text-2xl font-bold text-ucm-navy">Beca de inscripción</p>
              <p className="text-xs text-ucm-navy/60">Reserva tu lugar este mes</p>
            </div>
            <a href={inst.whatsapp} target="_blank" rel="noopener" className="btn-primary mt-5 w-full"><GraduationCap className="h-5 w-5" /> Solicitar informes</a>
            <Link href="/admisiones" className="btn-ghost mt-3 w-full">Ver proceso de admisión</Link>
          </div>
        </aside>
      </div>

      {/* relacionados */}
      <section className="bg-ucm-ice/60 py-16 sm:py-20">
        <div className="container-ucm">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="title-display text-2xl text-ucm-navy sm:text-3xl">Otros programas</h2>
            <Link href="/oferta" className="btn-ghost">Ver toda la oferta <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {fallback.map((r, i) => <Reveal key={r.slug} delay={(i % 3) * 0.07}><ProgramCard p={r} /></Reveal>)}
          </div>
        </div>
      </section>
    </>
  );
}
