"use client";
import Link from "next/link";
import { useRef } from "react";
import { Scale, Calculator, Briefcase, Globe, BookOpen, GraduationCap, Landmark, FlaskConical, Clock, ShieldCheck, Play, PiggyBank } from "lucide-react";
import type { Programa } from "@/data/site";
import { getDict } from "@/i18n/dict";
import { getPages } from "@/i18n/pages";
import { localePath, type Locale } from "@/i18n/config";

const grad: Record<string, string> = {
  Preparatoria: "from-ucm-blue to-ucm-sky",
  Licenciatura: "from-ucm-navy to-ucm-blue",
  Maestría: "from-ucm-navyDk to-ucm-blueDk",
  MBA: "from-[#1a1a2e] to-ucm-navy",
  Doctorado: "from-black to-ucm-navyDk",
};

function iconFor(slug: string, nivel: string) {
  if (slug.includes("derecho") || slug.includes("juicios")) return Scale;
  if (slug.includes("contaduria")) return Calculator;
  if (slug.includes("administracion")) return Briefcase;
  if (slug.includes("comercio")) return Globe;
  if (slug.includes("banca") || slug.includes("finanzas")) return PiggyBank;
  if (slug.includes("pedagogia")) return BookOpen;
  if (slug.includes("mba") || slug.includes("madan") || slug.includes("alta-direccion")) return Landmark;
  if (slug.includes("doctorado")) return FlaskConical;
  if (nivel === "Preparatoria") return GraduationCap;
  return GraduationCap;
}

export default function PosterCard({ p, lang = "es" }: { p: Programa; lang?: Locale }) {
  const Icon = iconFor(p.slug, p.nivel);
  const nivelLabel = getPages(lang).nivel[p.nivel as keyof ReturnType<typeof getPages>["nivel"]] ?? p.nivel;
  const verPrograma = getDict(lang).common.verPrograma;
  const ref = useRef<HTMLAnchorElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${(-py * 8).toFixed(2)}deg) rotateY(${(px * 10).toFixed(2)}deg) scale(1.07)`;
  };
  const onLeave = () => { if (ref.current) ref.current.style.transform = ""; };

  return (
    <Link
      ref={ref}
      href={localePath(lang, `/oferta/${p.slug}`)}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="group relative block aspect-[16/10] w-full overflow-hidden rounded-2xl shadow-soft outline-none ring-ucm-blue/40 transition-[transform,box-shadow] duration-300 ease-out [transform-style:preserve-3d] hover:z-20 hover:shadow-glow focus-visible:ring-2"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${grad[p.nivel] ?? grad.Licenciatura}`} />
      <Icon className="absolute -right-4 -top-4 h-40 w-40 text-white/10 transition-transform duration-500 group-hover:scale-110" strokeWidth={1} />
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_0%_100%,rgba(0,0,0,0.45),transparent)]" />

      <div className="absolute inset-x-0 bottom-0 p-5">
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-white ring-1 ring-white/20 backdrop-blur">{nivelLabel}</span>
          {p.rvoe && <span className="inline-flex items-center gap-1 text-[11px] font-medium text-ucm-skyLt"><ShieldCheck className="h-3.5 w-3.5" /> RVOE</span>}
        </div>
        <h3 className="mt-2.5 font-display text-lg font-semibold leading-snug text-white drop-shadow">{p.nombre}</h3>
      </div>

      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ucm-navyDk via-ucm-navyDk/85 to-ucm-navyDk/10 p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <h3 className="font-display text-lg font-semibold leading-snug text-white">{p.nombre}</h3>
        <p className="mt-2 line-clamp-3 text-sm text-white/80 [text-align:left]">{p.resumen}</p>
        <div className="mt-3 flex items-center gap-3 text-xs text-white/70">
          <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {p.duracion}</span>
        </div>
        <span className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ucm-navy">
          <Play className="h-4 w-4 fill-ucm-navy" /> {verPrograma}
        </span>
      </div>
    </Link>
  );
}
