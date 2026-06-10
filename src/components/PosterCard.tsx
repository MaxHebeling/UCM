import Link from "next/link";
import { Scale, Calculator, Briefcase, Globe, BookOpen, GraduationCap, Landmark, FlaskConical, Clock, ShieldCheck, Play, PiggyBank } from "lucide-react";
import type { Programa } from "@/data/site";

// Gradiente por nivel (estilo "poster")
const grad: Record<string, string> = {
  Preparatoria: "from-ucm-blue to-ucm-sky",
  Licenciatura: "from-ucm-navy to-ucm-blue",
  Maestría: "from-ucm-navyDk to-ucm-blueDk",
  MBA: "from-[#1a1a2e] to-ucm-navy",
  Doctorado: "from-black to-ucm-navyDk",
};

// Icono por programa (según slug)
function iconFor(slug: string, nivel: string) {
  if (slug.includes("derecho")) return Scale;
  if (slug.includes("contaduria")) return Calculator;
  if (slug.includes("administracion")) return Briefcase;
  if (slug.includes("comercio")) return Globe;
  if (slug.includes("banca") || slug.includes("finanzas")) return PiggyBank;
  if (slug.includes("pedagogia")) return BookOpen;
  if (slug.includes("mba")) return Landmark;
  if (slug.includes("doctorado")) return FlaskConical;
  if (nivel === "Preparatoria") return GraduationCap;
  return GraduationCap;
}

export default function PosterCard({ p }: { p: Programa }) {
  const Icon = iconFor(p.slug, p.nivel);
  return (
    <Link
      href={`/oferta/${p.slug}`}
      className="group relative block aspect-[16/10] w-full overflow-hidden rounded-2xl shadow-soft outline-none ring-ucm-blue/40 transition-all duration-300 ease-out hover:z-20 hover:scale-[1.07] hover:shadow-glow focus-visible:ring-2"
    >
      {/* Poster: gradiente + icono grande difuminado */}
      <div className={`absolute inset-0 bg-gradient-to-br ${grad[p.nivel] ?? grad.Licenciatura}`} />
      <Icon className="absolute -right-4 -top-4 h-40 w-40 text-white/10 transition-transform duration-500 group-hover:scale-110" strokeWidth={1} />
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_0%_100%,rgba(0,0,0,0.45),transparent)]" />

      {/* Texto base (siempre visible) */}
      <div className="absolute inset-x-0 bottom-0 p-5">
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-white ring-1 ring-white/20 backdrop-blur">{p.nivel}</span>
          {p.rvoe && <span className="inline-flex items-center gap-1 text-[11px] font-medium text-ucm-skyLt"><ShieldCheck className="h-3.5 w-3.5" /> RVOE</span>}
        </div>
        <h3 className="mt-2.5 font-display text-lg font-semibold leading-snug text-white drop-shadow">{p.nombre}</h3>
      </div>

      {/* Overlay al hover: info + CTA (estilo Netflix) */}
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ucm-navyDk via-ucm-navyDk/85 to-ucm-navyDk/10 p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <h3 className="font-display text-lg font-semibold leading-snug text-white">{p.nombre}</h3>
        <p className="mt-2 line-clamp-3 text-sm text-white/80 [text-align:left]">{p.resumen}</p>
        <div className="mt-3 flex items-center gap-3 text-xs text-white/70">
          <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {p.duracion}</span>
        </div>
        <span className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ucm-navy">
          <Play className="h-4 w-4 fill-ucm-navy" /> Ver programa
        </span>
      </div>
    </Link>
  );
}
