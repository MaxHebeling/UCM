import Link from "next/link";
import Image from "next/image";
import { Scale, Briefcase, GraduationCap, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import type { Docente } from "@/data/site";
import { getClaustroMJO, getClaustroMADAN } from "@/i18n/content";
import { localePath, type Locale } from "@/i18n/config";

function DocenteCard({ d, delay, puestoLabel }: { d: Docente; delay: number; puestoLabel: string }) {
  return (
    <Reveal delay={delay}>
      <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-ucm-navy/8 bg-white shadow-soft transition hover:shadow-glow">
        {d.foto ? (
          <div className="relative h-64 w-full overflow-hidden bg-ucm-ice">
            <Image src={d.foto} alt={d.nombre} fill className="object-cover object-top grayscale transition-all duration-500 ease-out group-hover:scale-105 group-hover:grayscale-0" sizes="(max-width: 768px) 100vw, 33vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-ucm-navyDk/45 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </div>
        ) : (
          <div className="grid h-64 w-full place-items-center bg-ucm-ice text-ucm-blue"><GraduationCap className="h-16 w-16" /></div>
        )}
        <div className="flex flex-1 flex-col p-7">
          <h3 className="font-display text-lg font-semibold text-ucm-navy">{d.nombre}</h3>
          <p className="mt-2 flex-1 text-sm text-ucm-navy/65">{d.bio}</p>
          <p className="mt-4 rounded-2xl bg-ucm-ice/60 p-3 text-xs font-medium text-ucm-navy/75"><span className="font-semibold text-ucm-blue">{puestoLabel} </span>{d.puesto}</p>
        </div>
      </div>
    </Reveal>
  );
}

export default function Claustro({ lang = "es" }: { lang?: Locale }) {
  const isEn = lang === "en";
  const mjo = getClaustroMJO(lang);
  const madan = getClaustroMADAN(lang);
  const puestoLabel = isEn ? "Current role:" : "Puesto actual:";
  const lp = (p: string) => localePath(lang, p);
  return (
    <>
      <PageHero
        eyebrow={isEn ? "Faculty" : "Claustro docente"}
        title={isEn ? <>Learn from those who <span className="text-ucm-skyLt">practice every day</span></> : <>Aprende de quienes <span className="text-ucm-skyLt">ejercen todos los días</span></>}
        desc={isEn ? "Judges of the Judiciary, business executives and active doctors make up the faculty of our graduate programs." : "Jueces del Poder Judicial, directivos empresariales y doctores en activo integran el claustro de nuestros posgrados."}
      />

      <section className="container-ucm py-16 sm:py-20">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ucm-navy text-white"><Scale className="h-6 w-6" /></span>
            <div>
              <span className="eyebrow">{isEn ? "Master's in Oral Trials" : "Maestría en Juicios Orales"}</span>
              <h2 className="title-display text-2xl text-ucm-navy sm:text-3xl">{isEn ? "Oral Trials faculty" : <>Claustro de la <span className="text-gradient">MJO</span></>}</h2>
            </div>
          </div>
        </Reveal>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {mjo.map((d, i) => <DocenteCard key={d.nombre} d={d} delay={i * 0.06} puestoLabel={puestoLabel} />)}
        </div>
        <Reveal className="mt-8">
          <Link href={lp("/oferta")} className="btn-primary">{isEn ? "Explore our graduate programs" : "Conoce la Maestría en Juicios Orales"} <ArrowRight className="h-4 w-4" /></Link>
        </Reveal>
      </section>

      <section className="bg-ucm-ice/60 py-16 sm:py-20">
        <div className="container-ucm">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ucm-navy text-white"><Briefcase className="h-6 w-6" /></span>
              <div>
                <span className="eyebrow">{isEn ? "Master's in Executive Management & Business" : "Maestría en Alta Dirección y Administración de Negocios"}</span>
                <h2 className="title-display text-2xl text-ucm-navy sm:text-3xl">{isEn ? "Executive Management faculty" : <>Claustro de la <span className="text-gradient">MADAN</span></>}</h2>
              </div>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {madan.map((d, i) => <DocenteCard key={d.nombre} d={d} delay={i * 0.06} puestoLabel={puestoLabel} />)}
          </div>
          <Reveal className="mt-8">
            <Link href={lp("/oferta/mba")} className="btn-primary">{isEn ? "Explore the MBA" : "Conoce la MADAN"} <ArrowRight className="h-4 w-4" /></Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
