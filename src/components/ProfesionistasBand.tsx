import { TrendingUp, DollarSign, Crown, Award, Users, Network, BadgeCheck } from "lucide-react";
import Reveal from "@/components/Reveal";
import { inst } from "@/data/site";
import { getMarketing } from "@/i18n/marketing";
import type { Locale } from "@/i18n/config";

const icons = [TrendingUp, DollarSign, Crown, Award, Users, Network, BadgeCheck];

export default function ProfesionistasBand({ lang = "es" }: { lang?: Locale }) {
  const m = getMarketing(lang);
  return (
    <section className="relative overflow-hidden bg-ucm-navyDk py-20 text-white sm:py-28">
      <div className="absolute inset-0 bg-ucm-gradient opacity-90" />
      <div className="pointer-events-none absolute inset-0">
        <div className="aurora-blob absolute -left-20 top-10 h-[28rem] w-[28rem] rounded-full bg-ucm-sky/20 blur-[120px]" />
        <div className="aurora-blob absolute -right-10 bottom-0 h-[26rem] w-[26rem] rounded-full bg-ucm-blue/30 blur-[120px]" style={{ animationDelay: "-8s" }} />
      </div>
      <div className="container-ucm relative grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-ucm-skyLt ring-1 ring-white/20">{m.proEyebrow}</span>
          <h2 className="title-display mt-6 text-3xl text-white sm:text-4xl lg:text-[2.75rem]">{m.proTitle}</h2>
          <p className="mt-5 max-w-xl text-lg text-white/80 [text-align:left]">{m.proDesc}</p>
          <a href={inst.whatsapp} target="_blank" rel="noopener" className="btn-white mt-8">{m.proCta}</a>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="grid gap-3 sm:grid-cols-2">
            {m.proMotiv.map((mo, i) => {
              const Icon = icons[i % icons.length];
              return (
                <div key={mo} className="flex items-center gap-3 rounded-2xl bg-white/8 p-4 ring-1 ring-white/12 backdrop-blur transition hover:bg-white/12">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10 text-ucm-skyLt"><Icon className="h-5 w-5" /></span>
                  <span className="text-sm font-medium text-white/90">{mo}</span>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
