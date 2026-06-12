import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { getMarketing } from "@/i18n/marketing";
import type { Locale } from "@/i18n/config";

export default function Diferenciadores({ lang = "es" }: { lang?: Locale }) {
  const m = getMarketing(lang);
  return (
    <section className="bg-ucm-ice/40 py-20 sm:py-24">
      <div className="container-ucm">
        <SectionHeading
          eyebrow={m.difEyebrow}
          title={<>{m.difTitleA}<span className="text-gradient">{m.difTitleB}</span></>}
          desc={m.difDesc}
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-ucm-navy/10 bg-ucm-navy/10 shadow-soft md:grid-cols-2 lg:grid-cols-3">
          {m.diferenciadores.map((d, i) => (
            <Reveal key={d.t} delay={(i % 3) * 0.06}>
              <div className="group flex h-full flex-col bg-white p-8 transition hover:bg-ucm-ice/40">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-3xl font-semibold text-ucm-blue/25 transition group-hover:text-ucm-blue/40">{String(i + 1).padStart(2, "0")}</span>
                  <span className="h-px flex-1 bg-gradient-to-r from-gold/60 to-transparent" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-ucm-navy">{d.t}</h3>
                <p className="mt-2 flex-1 text-sm text-ucm-navy/65">{d.d}</p>
                <p className="mt-5 border-l-2 border-gold pl-3 font-display text-sm italic text-ucm-navy/80">{d.tag}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
