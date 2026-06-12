import { ScrollText, BookOpenCheck, BadgeCheck } from "lucide-react";
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
    </section>
  );
}
