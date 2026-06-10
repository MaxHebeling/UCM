"use client";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Programa } from "@/data/site";
import type { Locale } from "@/i18n/config";
import PosterCard from "./PosterCard";

export default function NetflixRow({ title, items, lang = "es" }: { title: string; items: Programa[]; lang?: Locale }) {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.85, 720), behavior: "smooth" });
  };

  return (
    <div className="group/row relative">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="title-display text-2xl text-ucm-navy sm:text-3xl">{title}</h2>
        <div className="hidden gap-2 sm:flex">
          <button onClick={() => scroll(-1)} aria-label="Anterior" className="grid h-10 w-10 place-items-center rounded-full border border-ucm-navy/15 text-ucm-navy transition hover:bg-ucm-ice">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button onClick={() => scroll(1)} aria-label="Siguiente" className="grid h-10 w-10 place-items-center rounded-full border border-ucm-navy/15 text-ucm-navy transition hover:bg-ucm-ice">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div
        ref={ref}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-1 px-1 py-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((p) => (
          <div key={p.slug} className="w-[78%] shrink-0 snap-start sm:w-[20rem]">
            <PosterCard p={p} lang={lang} />
          </div>
        ))}
      </div>
    </div>
  );
}
