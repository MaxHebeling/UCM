import Link from "next/link";
import { ArrowRight, Scale } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { getComparativas } from "@/i18n/content";
import { getPages } from "@/i18n/pages";
import { localePath, type Locale } from "@/i18n/config";

export default function ComparativaIndex({ lang = "es" }: { lang?: Locale }) {
  const d = getPages(lang).comparativa;
  const comparativas = getComparativas(lang);
  return (
    <>
      <PageHero eyebrow={d.eyebrow} title={<>{d.titleA}<span className="text-ucm-skyLt">{d.titleB}</span></>} desc={d.desc} />
      <div className="container-ucm py-16 sm:py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {comparativas.map((c, i) => (
            <Reveal key={c.slug} delay={(i % 3) * 0.08}>
              <Link href={localePath(lang, `/comparativa/${c.slug}`)} className="card group flex h-full flex-col">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ucm-ice text-ucm-blue"><Scale className="h-6 w-6" /></span>
                <h2 className="mt-5 font-display text-xl font-semibold leading-snug text-ucm-navy group-hover:text-ucm-blue">{c.h1}</h2>
                <p className="mt-2 line-clamp-3 text-sm text-ucm-navy/65">{c.intro}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-ucm-blue">{d.leer} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" /></span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
}
