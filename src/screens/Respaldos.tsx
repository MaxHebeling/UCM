import Image from "next/image";
import { ShieldCheck, ExternalLink } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { inst } from "@/data/site";
import { getRespaldos } from "@/i18n/content";
import { getPages } from "@/i18n/pages";
import type { Locale } from "@/i18n/config";

export default function Respaldos({ lang = "es" }: { lang?: Locale }) {
  const d = getPages(lang).respaldos;
  const respaldos = getRespaldos(lang);
  return (
    <>
      <PageHero eyebrow={d.eyebrow} title={<>{d.titleA}<span className="text-ucm-skyLt">{d.titleB}</span></>} desc={d.desc} />
      <section className="container-ucm py-16 sm:py-20">
        <div className="grid gap-5 md:grid-cols-2">
          {respaldos.map((r, i) => (
            <Reveal key={r.name} delay={(i % 2) * 0.08}>
              <div className="flex h-full flex-col rounded-3xl border border-ucm-navy/8 bg-white p-7 shadow-soft">
                <div className="flex h-20 items-center">
                  <Image src={r.logo} alt={r.name} width={262} height={92} className="h-16 w-auto max-w-[240px] object-contain" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-ucm-navy">{r.name}</h3>
                <p className="mt-2 flex-1 text-sm text-ucm-navy/65">{r.detail}</p>
                <a href={r.href} target="_blank" rel="noopener" className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-ucm-blue hover:underline">
                  {lang === "en" ? "Verify at the official source" : "Verificar en la fuente oficial"} <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10">
          <div className="rounded-3xl bg-ucm-navyDk p-8 text-white shadow-glow sm:p-10">
            <div className="flex items-center gap-3"><ShieldCheck className="h-7 w-7 text-ucm-skyLt" /><h3 className="font-display text-xl font-semibold">{d.acuerdosTitle}</h3></div>
            <p className="mt-3 text-white/70">CCT {inst.cct} {d.acuerdosDesc}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {inst.rvoeAll.map((a) => <span key={a} className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium ring-1 ring-white/15">{a}</span>)}
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
