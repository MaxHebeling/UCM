import Link from "next/link";
import { GraduationCap, ArrowRight } from "lucide-react";
import { inst } from "@/data/site";
import { getDict } from "@/i18n/dict";
import { localePath, type Locale } from "@/i18n/config";

export default function VideoBand({ lang = "es" }: { lang?: Locale }) {
  const d = getDict(lang).home;
  const c = getDict(lang).common;
  return (
    <section className="relative overflow-hidden">
      <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline preload="metadata" poster="/video/posgrado-poster.jpg" aria-hidden="true">
        <source src="/video/posgrado.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-ucm-navyDk/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-ucm-navyDk via-ucm-navyDk/70 to-transparent" />
      <div className="container-ucm relative py-24 sm:py-32">
        <div className="max-w-2xl text-white">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-ucm-skyLt ring-1 ring-white/20">
            <GraduationCap className="h-3.5 w-3.5" /> {d.videoBadge}
          </span>
          <h2 className="title-display mt-6 text-3xl sm:text-5xl">
            {d.videoTitleA}<br />
            <span className="bg-gradient-to-r from-ucm-skyLt to-white bg-clip-text text-transparent">{d.videoTitleB}</span>
          </h2>
          <p className="mt-5 max-w-xl text-lg text-white/80 [text-align:left]">{d.videoDesc}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={localePath(lang, "/oferta")} className="btn-white">{d.videoCta} <ArrowRight className="h-4 w-4" /></Link>
            <a href={inst.whatsapp} target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">{c.solicitarInformes}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
