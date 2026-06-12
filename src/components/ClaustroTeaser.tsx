import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { getClaustroMJO, getClaustroMADAN } from "@/i18n/content";
import { getMarketing } from "@/i18n/marketing";
import { localePath, type Locale } from "@/i18n/config";

export default function ClaustroTeaser({ lang = "es" }: { lang?: Locale }) {
  const m = getMarketing(lang);
  // Selección de rostros con foto (jueces + directivos)
  const docentes = [...getClaustroMJO(lang).slice(0, 3), ...getClaustroMADAN(lang).slice(0, 3)].filter((d) => d.foto);
  return (
    <section className="container-ucm py-20 sm:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
        <Reveal>
          <span className="eyebrow">{m.clEyebrow}</span>
          <h2 className="title-display mt-4 text-3xl text-ucm-navy sm:text-4xl">{m.clTitleA}<span className="text-gradient">{m.clTitleB}</span></h2>
          <p className="mt-4 max-w-md text-lg text-ucm-navy/65">{m.clDesc}</p>
          <Link href={localePath(lang, "/claustro-docente")} className="btn-primary mt-7">{m.clCta} <ArrowRight className="h-4 w-4" /></Link>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {docentes.map((d) => (
              <div key={d.nombre} className="group relative aspect-[3/4] overflow-hidden rounded-2xl shadow-soft">
                <Image src={d.foto!} alt={d.nombre} fill className="object-cover object-top grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0" sizes="(max-width:640px) 50vw, 200px" />
                <div className="absolute inset-0 bg-gradient-to-t from-ucm-navyDk/90 via-ucm-navyDk/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-3">
                  <p className="text-xs font-semibold leading-tight text-white">{d.nombre}</p>
                  <p className="mt-0.5 line-clamp-2 text-[10px] leading-tight text-white/75">{d.puesto}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
