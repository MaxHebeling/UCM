import Link from "next/link";
import { FileText, ClipboardCheck, CalendarCheck, GraduationCap, Check, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { inst } from "@/data/site";
import { getPages } from "@/i18n/pages";
import { getDict } from "@/i18n/dict";
import { localePath, type Locale } from "@/i18n/config";

const icons = [FileText, ClipboardCheck, CalendarCheck, GraduationCap];

export default function Admisiones({ lang = "es" }: { lang?: Locale }) {
  const d = getPages(lang).admisiones;
  const c = getDict(lang).common;
  const stepLabel = lang === "en" ? "Step" : "Paso";
  return (
    <>
      <PageHero image="/img/estudiantes-profesionales.jpg" imageAlt={lang === "en" ? "Working professionals studying at UCM" : "Profesionistas estudiando en UCM"} eyebrow={d.eyebrow} title={<>{d.titleA}<span className="text-ucm-skyLt">{d.titleB}</span></>} desc={d.desc} />
      <section className="container-ucm py-16 sm:py-20">
        <Reveal><h2 className="title-display text-3xl text-ucm-navy sm:text-4xl">{d.pasosTitle}</h2></Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {d.pasos.map((s, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={s.t} delay={i * 0.08}>
                <div className="card h-full">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ucm-blue text-white"><Icon className="h-6 w-6" /></span>
                  <div className="mt-4 text-xs font-bold uppercase tracking-wider text-ucm-sky">{stepLabel} {i + 1}</div>
                  <h3 className="mt-1 font-display text-lg font-semibold text-ucm-navy">{s.t}</h3>
                  <p className="mt-2 text-sm text-ucm-navy/65">{s.d}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
      <section className="bg-ucm-ice/60 py-16 sm:py-20">
        <div className="container-ucm grid gap-6 lg:grid-cols-2">
          {[{ t: d.reqLicT, items: d.reqLic }, { t: d.reqPosT, items: d.reqPos }].map((b) => (
            <Reveal key={b.t}>
              <div className="rounded-3xl border border-ucm-navy/8 bg-white p-8 shadow-soft">
                <h3 className="font-display text-xl font-semibold text-ucm-navy">{b.t}</h3>
                <ul className="mt-5 space-y-3">{b.items.map((it) => (<li key={it} className="flex gap-3 text-sm text-ucm-navy/80"><Check className="mt-0.5 h-5 w-5 shrink-0 text-ucm-blue" /> {it}</li>))}</ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="container-ucm py-16 sm:py-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-ucm-gradient px-8 py-14 text-center text-white shadow-glow sm:px-16">
            <h2 className="title-display text-3xl sm:text-4xl">{d.ctaTitle}</h2>
            <p className="mx-auto mt-3 max-w-lg text-white/85">{d.ctaDesc}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={inst.whatsapp} target="_blank" rel="noopener" className="btn-white">{c.inscribeteWa}</a>
              <Link href={localePath(lang, "/costos-y-becas")} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">{c.verCostos} <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
