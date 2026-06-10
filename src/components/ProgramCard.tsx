import Link from "next/link";
import { ArrowUpRight, Clock, ShieldCheck } from "lucide-react";
import type { Programa } from "@/data/site";
import { getDict } from "@/i18n/dict";
import { localePath, type Locale } from "@/i18n/config";

const nivelColor: Record<string, string> = {
  Preparatoria: "bg-ucm-sky/15 text-ucm-blueDk",
  Licenciatura: "bg-ucm-blue/12 text-ucm-blue",
  Maestría: "bg-ucm-navy/10 text-ucm-navy",
  MBA: "bg-gold/15 text-[#8a6d1a]",
  Doctorado: "bg-ucm-navy/90 text-white",
};

export default function ProgramCard({ p, lang = "es" }: { p: Programa; lang?: Locale }) {
  return (
    <Link href={localePath(lang, `/oferta/${p.slug}`)} className="group card flex flex-col">
      <div className="flex items-center justify-between">
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${nivelColor[p.nivel]}`}>{p.nivel}</span>
        {p.rvoe && (
          <span className="inline-flex items-center gap-1 text-xs font-medium text-ucm-blue">
            <ShieldCheck className="h-4 w-4" /> RVOE
          </span>
        )}
      </div>
      <h3 className="mt-4 font-display text-xl font-semibold leading-snug text-ucm-navy group-hover:text-ucm-blue">{p.nombre}</h3>
      <p className="mt-2 line-clamp-3 text-sm text-ucm-navy/65">{p.resumen}</p>
      <div className="mt-auto">
        <div className="mt-5 flex items-center gap-2 text-xs text-ucm-navy/55">
          <Clock className="h-4 w-4 text-ucm-sky" /> {p.duracion}
        </div>
        <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ucm-blue">
          {getDict(lang).common.verPrograma} <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </Link>
  );
}
