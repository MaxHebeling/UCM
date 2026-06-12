import { CalendarClock, Laptop, Building2, Clock } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { getMarketing } from "@/i18n/marketing";
import type { Locale } from "@/i18n/config";

const icons = [CalendarClock, Laptop, Building2];

export default function Modalidades({ lang = "es" }: { lang?: Locale }) {
  const m = getMarketing(lang);
  return (
    <section className="container-ucm py-20 sm:py-24">
      <SectionHeading eyebrow={m.modEyebrow} title={<>{m.modTitleA}<span className="text-gradient">{m.modTitleB}</span></>} desc={m.modDesc} />
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {m.modalidades.map((mod, i) => {
          const Icon = icons[i];
          return (
            <Reveal key={mod.t} delay={i * 0.08}>
              <div className="group flex h-full flex-col rounded-3xl border border-ucm-navy/10 bg-white p-8 shadow-soft transition hover:-translate-y-1 hover:shadow-glow">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ucm-blue text-white"><Icon className="h-6 w-6" /></span>
                <h3 className="mt-5 font-display text-xl font-semibold text-ucm-navy">{mod.t}</h3>
                <p className="mt-2 flex-1 text-sm text-ucm-navy/65">{mod.d}</p>
                <div className="mt-5 inline-flex items-center gap-2 self-start rounded-full bg-ucm-ice px-4 py-2 text-sm font-semibold text-ucm-blueDk"><Clock className="h-4 w-4" /> {mod.ej}</div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
