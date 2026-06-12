import { ScrollText, BookOpenCheck, BadgeCheck, Download } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { getMarketing } from "@/i18n/marketing";
import type { Locale } from "@/i18n/config";

const icons = [ScrollText, BookOpenCheck, BadgeCheck];

export default function OfertaSecundaria({ lang = "es" }: { lang?: Locale }) {
  const m = getMarketing(lang);
  return (
    <section className="container-ucm py-20 sm:py-24">
      <SectionHeading eyebrow={m.secEyebrow} title={<>{m.secTitle}</>} desc={m.secDesc} />
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {m.secItems.map((s, i) => {
          const Icon = icons[i];
          return (
            <Reveal key={s.t} delay={i * 0.08}>
              <div className="group flex h-full flex-col rounded-3xl border border-ucm-navy/10 bg-white p-8 shadow-soft transition hover:-translate-y-1 hover:shadow-glow">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ucm-ice text-ucm-blue transition group-hover:bg-ucm-blue group-hover:text-white"><Icon className="h-6 w-6" /></span>
                <h3 className="mt-5 font-display text-xl font-semibold text-ucm-navy">{s.t}</h3>
                <p className="mt-2 text-sm text-ucm-navy/65">{s.d}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
      <Reveal className="mt-8">
        <div className="flex flex-col items-start justify-between gap-4 rounded-3xl border border-ucm-navy/10 bg-ucm-ice/50 p-7 sm:flex-row sm:items-center">
          <div>
            <h3 className="font-display text-lg font-semibold text-ucm-navy">{m.brochureT}</h3>
            <p className="mt-1 text-sm text-ucm-navy/65">{m.brochureD}</p>
          </div>
          <a href="/brochure-ucm.pdf" target="_blank" rel="noopener" className="btn-primary shrink-0"><Download className="h-4 w-4" /> {m.brochureCta}</a>
        </div>
      </Reveal>
    </section>
  );
}
