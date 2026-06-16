import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, Clock, Laptop, ShieldCheck, Briefcase, BookOpen, ArrowRight, GraduationCap, Target } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ProgramCard from "@/components/ProgramCard";
import { inst } from "@/data/site";
import { getProgramas } from "@/i18n/content";
import { getPages } from "@/i18n/pages";
import { getDict } from "@/i18n/dict";
import { localePath, type Locale } from "@/i18n/config";

function faqsFor(p: { nivel: string; duracion: string; modalidad: string }, lang: Locale) {
  if (lang === "en") {
    const reqDoc = p.nivel === "Preparatoria" ? "a middle-school certificate" : p.nivel === "Licenciatura" ? "a high-school certificate or equivalent" : "your bachelor's certificate, degree and professional license";
    return [
      { q: `Is ${p.nivel === "Preparatoria" ? "UCM High School" : "this program"} officially recognized?`, a: p.nivel === "Preparatoria" ? "Yes. UCM High School is affiliated with the Autonomous University of Tamaulipas (Upper Secondary No. 44) as a General High-School Diploma." : `Yes. It holds Official Recognition of Studies (RVOE) from the SEP, with school code (CCT) ${inst.cct}. You can verify it in the SEP's SIRVOES system.` },
      { q: "How long is it and in what format?", a: `It lasts ${p.duracion.toLowerCase()}, in a ${p.modalidad.toLowerCase()} format, designed so you can study without neglecting your job or activities.` },
      { q: "Are scholarships available?", a: "Yes. UCM offers an enrollment scholarship of up to 50% when you reserve your spot within the month, a monthly-tuition scholarship throughout your studies during the promotional period, and corporate scholarships through agreements. Ask about the current promotion." },
      { q: "How do I enroll?", a: `Request information via WhatsApp or the contact form; an education advisor will guide you. Basic requirements include the enrollment application, birth certificate, CURP and ${reqDoc}.` },
    ];
  }
  const reqDoc = p.nivel === "Preparatoria" ? "certificado de secundaria" : p.nivel === "Licenciatura" ? "certificado de preparatoria o equivalente" : "certificado, título y cédula de licenciatura";
  return [
    { q: `¿${p.nivel === "Preparatoria" ? "La Preparatoria UCM" : "Este programa"} tiene validez oficial?`, a: p.nivel === "Preparatoria" ? "Sí. La Preparatoria UCM está incorporada a la Universidad Autónoma de Tamaulipas (Media Superior No. 44) como Bachillerato General Único." : `Sí. Cuenta con Reconocimiento de Validez Oficial de Estudios (RVOE) ante la SEP, con CCT ${inst.cct}. Puedes verificarlo en el sistema SIRVOES de la Secretaría de Educación Pública.` },
    { q: "¿Cuánto dura y en qué modalidad se imparte?", a: `Tiene una duración de ${p.duracion.toLowerCase()}, en modalidad ${p.modalidad.toLowerCase()}, diseñada para que puedas estudiar sin descuidar tu trabajo o tus actividades.` },
    { q: "¿Hay becas disponibles?", a: "Sí. UCM ofrece beca de inscripción de hasta 50% al reservar tu lugar dentro del mes, beca en mensualidad durante toda la carrera en periodo de promoción, y becas empresariales por convenio. Pregunta por la promoción vigente." },
    { q: "¿Cómo me inscribo?", a: `Solicita informes por WhatsApp o el formulario de contacto; un asesor educativo te guía en el proceso. Los requisitos básicos incluyen solicitud de inscripción, acta de nacimiento, CURP y ${reqDoc}.` },
  ];
}

export default function Programa({ slug, lang = "es" }: { slug: string; lang?: Locale }) {
  const programas = getProgramas(lang);
  const p = programas.find((x) => x.slug === slug);
  if (!p) notFound();
  const dp = getPages(lang).programa;
  const c = getDict(lang).common;
  const lp = (path: string) => localePath(lang, path);
  const related = programas.filter((x) => x.nivel === p.nivel && x.slug !== p.slug).slice(0, 3);
  const fallback = related.length ? related : programas.filter((x) => x.slug !== p.slug).slice(0, 3);
  const faqs = faqsFor(p, lang);

  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
  const courseSchema = {
    "@context": "https://schema.org", "@type": "Course", name: p.nombre, description: p.resumen, educationalCredentialAwarded: p.nivel, inLanguage: lang,
    provider: { "@type": "CollegeOrUniversity", name: inst.legal, sameAs: "https://www.ucmac.edu.mx" },
    hasCourseInstance: { "@type": "CourseInstance", courseMode: ["online", "onsite"], courseWorkload: p.duracion, location: { "@type": "Place", name: "UCM Tampico", address: { "@type": "PostalAddress", addressLocality: "Tampico", addressRegion: "Tamaulipas", addressCountry: "MX" } } },
    ...(p.rvoe ? { identifier: { "@type": "PropertyValue", propertyID: "RVOE", value: inst.rvoe } } : {}),
  };
  const base = lang === "en" ? "https://www.ucmac.edu.mx/en" : "https://www.ucmac.edu.mx";
  const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: lang === "en" ? "Home" : "Inicio", item: `${base}/` },
    { "@type": "ListItem", position: 2, name: lang === "en" ? "Programs" : "Oferta educativa", item: `${base}/oferta` },
    { "@type": "ListItem", position: 3, name: p.nombre, item: `${base}/oferta/${p.slug}` },
  ] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <PageHero eyebrow={getPages(lang).nivel[p.nivel as keyof ReturnType<typeof getPages>["nivel"]] ?? p.nivel} title={p.nombre} desc={p.resumen} />

      <div className="container-ucm grid gap-12 py-16 sm:py-20 lg:grid-cols-3">
        <div className="lg:col-span-2">
          {p.beneficios?.length > 0 && (
            <Reveal>
              <h2 className="title-display text-2xl text-ucm-navy sm:text-3xl">{dp.porQue}</h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {p.beneficios.map((b) => (<li key={b} className="flex gap-3 rounded-2xl border border-ucm-navy/8 bg-white p-4 shadow-soft"><Check className="mt-0.5 h-5 w-5 shrink-0 text-ucm-blue" /> <span className="text-sm text-ucm-navy/80">{b}</span></li>))}
              </ul>
            </Reveal>
          )}
          {p.areas?.length ? (
            <Reveal className="mt-12">
              <h3 className="flex items-center gap-2 font-display text-xl font-semibold text-ucm-navy"><BookOpen className="h-5 w-5 text-ucm-blue" /> {dp.areas}</h3>
              <div className="mt-4 flex flex-wrap gap-2">{p.areas.map((a) => <span key={a} className="rounded-full bg-ucm-ice px-4 py-2 text-sm font-medium text-ucm-blueDk">{a}</span>)}</div>
            </Reveal>
          ) : null}
          {p.competencias?.length ? (
            <Reveal className="mt-12">
              <h3 className="flex items-center gap-2 font-display text-xl font-semibold text-ucm-navy"><Target className="h-5 w-5 text-ucm-blue" /> {dp.competencias}</h3>
              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {p.competencias.map((co) => (
                  <div key={co} className="flex items-center gap-2.5 rounded-xl border border-ucm-blue/15 bg-ucm-ice/40 px-4 py-2.5 text-sm font-medium text-ucm-navy">
                    <span className="h-1.5 w-1.5 rounded-full bg-ucm-blue" /> {co}
                  </div>
                ))}
              </div>
            </Reveal>
          ) : null}

          {p.salidas?.length ? (
            <Reveal className="mt-12">
              <h3 className="flex items-center gap-2 font-display text-xl font-semibold text-ucm-navy"><Briefcase className="h-5 w-5 text-ucm-blue" /> {dp.campo}</h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">{p.salidas.map((s) => (<div key={s} className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-soft ring-1 ring-ucm-navy/5"><span className="h-2 w-2 rounded-full bg-ucm-sky" /> <span className="text-sm font-medium text-ucm-navy">{s}</span></div>))}</div>
            </Reveal>
          ) : null}
          <Reveal className="mt-12">
            <h3 className="font-display text-xl font-semibold text-ucm-navy">{dp.faqTitle}</h3>
            <div className="mt-4 space-y-3">
              {faqs.map((f) => (
                <details key={f.q} className="group rounded-2xl border border-ucm-navy/8 bg-white p-5 shadow-soft">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-ucm-navy">{f.q}<span className="ml-4 text-ucm-blue transition group-open:rotate-45">+</span></summary>
                  <p className="mt-3 text-sm text-ucm-navy/70">{f.a}</p>
                </details>
              ))}
            </div>
          </Reveal>
        </div>

        <aside className="lg:col-span-1">
          <div className="sticky top-24 rounded-3xl border border-ucm-navy/8 bg-white p-7 shadow-soft">
            <h3 className="font-display text-lg font-semibold text-ucm-navy">{dp.detalles}</h3>
            <dl className="mt-5 space-y-4 text-sm">
              <div className="flex gap-3"><Clock className="h-5 w-5 shrink-0 text-ucm-blue" /><div><dt className="font-semibold text-ucm-navy">{c.duracion}</dt><dd className="text-ucm-navy/65">{p.duracion}</dd></div></div>
              <div className="flex gap-3"><Laptop className="h-5 w-5 shrink-0 text-ucm-blue" /><div><dt className="font-semibold text-ucm-navy">{c.modalidad}</dt><dd className="text-ucm-navy/65">{p.modalidad}</dd></div></div>
              {p.rvoe && <div className="flex gap-3"><ShieldCheck className="h-5 w-5 shrink-0 text-ucm-blue" /><div><dt className="font-semibold text-ucm-navy">{c.validezOficial}</dt><dd className="text-ucm-navy/65">RVOE SEP {inst.rvoe}</dd></div></div>}
            </dl>
            <div className="mt-6 rounded-2xl bg-ucm-ice p-4 text-center">
              <p className="text-xs font-semibold uppercase tracking-wide text-ucm-blue">{dp.becaMes}</p>
              <p className="mt-1 font-display text-2xl font-bold text-ucm-navy">{dp.becaTitulo}</p>
              <p className="text-xs text-ucm-navy/60">{dp.becaSub}</p>
            </div>
            <a href={p.whatsapp ?? inst.whatsapp} target="_blank" rel="noopener" className="btn-primary mt-5 w-full"><GraduationCap className="h-5 w-5" /> {c.solicitarInformes}</a>
            <Link href={lp("/admisiones")} className="btn-ghost mt-3 w-full">{c.verProceso}</Link>
          </div>
        </aside>
      </div>

      <section className="bg-ucm-ice/60 py-16 sm:py-20">
        <div className="container-ucm">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="title-display text-2xl text-ucm-navy sm:text-3xl">{dp.otros}</h2>
            <Link href={lp("/oferta")} className="btn-ghost">{c.verTodaOferta} <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{fallback.map((r, i) => <Reveal key={r.slug} delay={(i % 3) * 0.07}><ProgramCard p={r} lang={lang} /></Reveal>)}</div>
        </div>
      </section>
    </>
  );
}
