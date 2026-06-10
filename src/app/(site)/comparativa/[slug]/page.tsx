import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, X, Minus, ShieldCheck, ArrowRight, Scale, Info } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { comparativas, actualizado } from "@/data/comparativas";
import { inst, programas } from "@/data/site";

export function generateStaticParams() {
  return comparativas.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = comparativas.find((x) => x.slug === slug);
  if (!c) return {};
  return { title: c.title, description: c.meta, alternates: { canonical: `/comparativa/${c.slug}` } };
}

export default async function ComparativaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = comparativas.find((x) => x.slug === slug);
  if (!c) notFound();

  const prog = c.ctaPrograma ? programas.find((p) => p.slug === c.ctaPrograma) : null;
  const otras = comparativas.filter((x) => x.slug !== c.slug);

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.ucmac.edu.mx/" },
      { "@type": "ListItem", position: 2, name: "Comparativas", item: "https://www.ucmac.edu.mx/comparativa" },
      { "@type": "ListItem", position: 3, name: c.h1, item: `https://www.ucmac.edu.mx/comparativa/${c.slug}` },
    ],
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <PageHero eyebrow="Comparativa" title={c.h1} desc={c.intro} />

      <div className="container-ucm py-16 sm:py-20">
        {/* Tabla comparativa */}
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-ucm-navy/10 shadow-soft">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-ucm-navyDk text-white">
                  <th className="p-4 font-semibold">Criterio</th>
                  <th className="p-4 font-semibold">
                    <span className="inline-flex items-center gap-1.5 text-ucm-skyLt"><ShieldCheck className="h-4 w-4" /> {c.ucmLabel}</span>
                  </th>
                  <th className="p-4 font-semibold text-white/80">{c.altLabel}</th>
                </tr>
              </thead>
              <tbody>
                {c.filas.map((f, i) => (
                  <tr key={f.criterio} className={i % 2 ? "bg-ucm-ice/40" : "bg-white"}>
                    <td className="p-4 font-medium text-ucm-navy">{f.criterio}</td>
                    <td className="p-4 text-ucm-navy/80">
                      <span className="inline-flex items-start gap-2">
                        {f.ucmGana ? <Check className="mt-0.5 h-4 w-4 shrink-0 text-ucm-blue" /> : <Minus className="mt-0.5 h-4 w-4 shrink-0 text-ucm-navy/30" />}
                        {f.ucm}
                      </span>
                    </td>
                    <td className="p-4 text-ucm-navy/55">
                      <span className="inline-flex items-start gap-2">
                        {f.ucmGana ? <X className="mt-0.5 h-4 w-4 shrink-0 text-ucm-navy/25" /> : <Minus className="mt-0.5 h-4 w-4 shrink-0 text-ucm-navy/25" />}
                        {f.alt}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 flex items-center gap-2 text-xs text-ucm-navy/50">
            <Info className="h-3.5 w-3.5" /> Comparación con fines informativos basada en criterios generales y verificables. Información de {actualizado}; verifica los datos oficiales de cada institución (RVOE en SIRVOES de la SEP).
          </p>
        </Reveal>

        {/* Veredicto */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <div className="rounded-3xl border border-ucm-navy/10 bg-white p-8 shadow-soft">
              <h2 className="flex items-center gap-2 font-display text-2xl font-semibold text-ucm-navy"><Scale className="h-6 w-6 text-ucm-blue" /> Nuestro veredicto</h2>
              <p className="mt-4 text-lg text-ucm-navy/75">{c.veredicto}</p>
              <div className="mt-6 rounded-2xl bg-ucm-ice p-5">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-ucm-blue">¿Cuándo conviene {c.altLabel}?</h3>
                <p className="mt-2 text-sm text-ucm-navy/70">{c.cuandoAlt}</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="sticky top-24 rounded-3xl bg-ucm-gradient p-8 text-white shadow-glow">
              <h3 className="font-display text-xl font-semibold">¿Te interesa {prog ? prog.nombre : "UCM"}?</h3>
              <p className="mt-2 text-white/85">Un asesor te orienta y te ayuda a elegir el programa y la beca ideal para ti.</p>
              <a href={inst.whatsapp} target="_blank" rel="noopener" className="btn-white mt-6 w-full">Solicitar informes</a>
              {prog && <Link href={`/oferta/${prog.slug}`} className="mt-3 block text-center text-sm font-semibold text-white/90 underline-offset-4 hover:underline">Ver el programa →</Link>}
            </div>
          </Reveal>
        </div>

        {/* FAQ */}
        <Reveal className="mt-12">
          <h2 className="title-display text-2xl text-ucm-navy sm:text-3xl">Preguntas frecuentes</h2>
          <div className="mt-6 space-y-3">
            {c.faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl border border-ucm-navy/10 bg-white p-5 shadow-soft">
                <summary className="cursor-pointer list-none font-semibold text-ucm-navy">{f.q}</summary>
                <p className="mt-2 text-sm text-ucm-navy/70">{f.a}</p>
              </details>
            ))}
          </div>
        </Reveal>

        {/* Otras comparativas */}
        {otras.length > 0 && (
          <Reveal className="mt-14">
            <h2 className="title-display text-2xl text-ucm-navy sm:text-3xl">Otras comparativas</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {otras.map((o) => (
                <Link key={o.slug} href={`/comparativa/${o.slug}`} className="card group">
                  <span className="text-xs font-semibold uppercase tracking-wide text-ucm-blue">Comparativa</span>
                  <h3 className="mt-2 font-display text-lg font-semibold text-ucm-navy group-hover:text-ucm-blue">{o.h1}</h3>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ucm-blue">Leer <ArrowRight className="h-4 w-4" /></span>
                </Link>
              ))}
            </div>
          </Reveal>
        )}
      </div>
    </>
  );
}
