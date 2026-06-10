import { Star, Quote } from "lucide-react";
import { getTestimonios } from "@/i18n/content";
import type { Locale } from "@/i18n/config";

type Testimonio = { name: string; text: string; stars: number };

function Card({ t }: { t: Testimonio }) {
  return (
    <figure className="w-80 shrink-0 rounded-3xl border border-ucm-navy/10 bg-white p-7 shadow-soft">
      <div className="flex items-center justify-between">
        <Quote className="h-7 w-7 text-ucm-sky" />
        <div className="flex gap-0.5">{Array.from({ length: t.stars }).map((_, k) => <Star key={k} className="h-4 w-4 fill-gold text-gold" />)}</div>
      </div>
      <blockquote className="mt-3 text-sm text-ucm-navy/75 [text-align:left]">“{t.text}”</blockquote>
      <figcaption className="mt-4 flex items-center gap-3">
        <span className="grid h-9 w-9 place-items-center rounded-full bg-ucm-blue text-sm font-bold text-white">{t.name.charAt(0)}</span>
        <span className="text-sm font-semibold text-ucm-navy">{t.name}</span>
      </figcaption>
    </figure>
  );
}

export default function TestimonialMarquee({ lang = "es" }: { lang?: Locale }) {
  const testimonios = getTestimonios(lang);
  const row = [...testimonios, ...testimonios];
  return (
    <div className="marquee-pause relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
      <div className="flex w-max animate-marquee gap-5 py-2" style={{ ["--marquee-duration" as string]: "40s" }}>
        {row.map((t, i) => <Card key={i} t={t} />)}
      </div>
    </div>
  );
}
