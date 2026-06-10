import Link from "next/link";
import { Percent, Wallet, Award, Building, HeartHandshake, Check, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { inst } from "@/data/site";
import { getPages } from "@/i18n/pages";
import { localePath, type Locale } from "@/i18n/config";

const icons = [Percent, Wallet, Building, Award];

export default function Costos({ lang = "es" }: { lang?: Locale }) {
  const d = getPages(lang).costos;
  return (
    <>
      <PageHero eyebrow={d.eyebrow} title={<>{d.titleA}<span className="text-ucm-skyLt">{d.titleB}</span></>} desc={d.desc} />
      <section className="container-ucm py-16 sm:py-20">
        <Reveal>
          <div className="rounded-3xl border border-ucm-navy/8 bg-white p-8 shadow-soft sm:p-10">
            <span className="eyebrow"><HeartHandshake className="h-4 w-4" /> {d.filo}</span>
            <h2 className="title-display mt-4 text-2xl text-ucm-navy sm:text-3xl">{d.filoTitle}</h2>
            <p className="mt-4 max-w-3xl text-lg text-ucm-navy/65">{d.filoDesc}</p>
          </div>
        </Reveal>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {d.becas.map((b, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={b.t} delay={i * 0.08}>
                <div className="card h-full">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ucm-ice text-ucm-blue"><Icon className="h-6 w-6" /></span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-ucm-navy">{b.t}</h3>
                  <p className="mt-2 text-sm text-ucm-navy/65">{b.d}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
      <section className="bg-ucm-ice/60 py-16 sm:py-20">
        <div className="container-ucm grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <h2 className="title-display text-3xl text-ucm-navy sm:text-4xl">{d.planTitleA}<span className="text-gradient">{d.planTitleB}</span></h2>
            <p className="mt-4 text-lg text-ucm-navy/65">{d.planDesc}</p>
            <ul className="mt-6 space-y-3">{d.planItems.map((x) => (<li key={x} className="flex gap-3 text-ucm-navy/80"><Check className="mt-0.5 h-5 w-5 shrink-0 text-ucm-blue" /> {x}</li>))}</ul>
            <a href={inst.whatsapp} target="_blank" rel="noopener" className="btn-primary mt-8">{d.planCta} <ArrowRight className="h-4 w-4" /></a>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-[2.5rem] bg-ucm-gradient p-10 text-white shadow-glow">
              <div className="text-sm font-semibold uppercase tracking-widest text-ucm-skyLt">{d.promoLabel}</div>
              <div className="mt-3 font-display text-6xl font-bold">-50%</div>
              <div className="text-xl font-semibold">{d.promoOff}</div>
              <p className="mt-4 text-white/80">{d.promoDesc}</p>
              <Link href={localePath(lang, "/admisiones")} className="btn-white mt-7">{d.promoCta}</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
