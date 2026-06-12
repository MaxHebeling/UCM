import { HelpCircle } from "lucide-react";
import Reveal from "@/components/Reveal";
import { getMarketing } from "@/i18n/marketing";
import type { Locale } from "@/i18n/config";

export default function HomeFaq({ lang = "es" }: { lang?: Locale }) {
  const m = getMarketing(lang);
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: m.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <section className="bg-ucm-ice/40 py-20 sm:py-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="container-ucm grid gap-12 lg:grid-cols-[0.9fr_1.4fr]">
        <Reveal>
          <span className="eyebrow"><HelpCircle className="h-4 w-4" /> {m.faqEyebrow}</span>
          <h2 className="title-display mt-4 text-3xl text-ucm-navy sm:text-4xl">{m.faqTitle}</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="space-y-3">
            {m.faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl border border-ucm-navy/10 bg-white p-5 shadow-soft">
                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-ucm-navy">{f.q}<span className="ml-4 text-xl leading-none text-ucm-blue transition group-open:rotate-45">+</span></summary>
                <p className="mt-3 text-sm text-ucm-navy/70">{f.a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
