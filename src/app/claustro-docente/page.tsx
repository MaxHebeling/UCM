import type { Metadata } from "next";
import Link from "next/link";
import { Scale, Briefcase, GraduationCap, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { claustroMJO, claustroMADAN, type Docente } from "@/data/site";

export const metadata: Metadata = {
  title: "Claustro docente — Jueces, directivos y doctores en activo",
  description:
    "Conoce al claustro docente de la UCM: jueces del Poder Judicial en la Maestría en Juicios Orales y directivos empresariales en la MADAN. Experiencia real en el aula.",
  alternates: { canonical: "/claustro-docente" },
};

function DocenteCard({ d, delay }: { d: Docente; delay: number }) {
  return (
    <Reveal delay={delay}>
      <div className="flex h-full flex-col rounded-3xl border border-ucm-navy/8 bg-white p-7 shadow-soft">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ucm-ice text-ucm-blue">
          <GraduationCap className="h-6 w-6" />
        </span>
        <h3 className="mt-5 font-display text-lg font-semibold text-ucm-navy">{d.nombre}</h3>
        <p className="mt-2 flex-1 text-sm text-ucm-navy/65">{d.bio}</p>
        <p className="mt-4 rounded-2xl bg-ucm-ice/60 p-3 text-xs font-medium text-ucm-navy/75">
          <span className="font-semibold text-ucm-blue">Puesto actual: </span>
          {d.puesto}
        </p>
      </div>
    </Reveal>
  );
}

export default function ClaustroDocente() {
  return (
    <>
      <PageHero
        eyebrow="Claustro docente"
        title={<>Aprende de quienes <span className="text-ucm-skyLt">ejercen todos los días</span></>}
        desc="Jueces del Poder Judicial, directivos empresariales y doctores en activo integran el claustro de nuestros posgrados."
      />

      <section className="container-ucm py-16 sm:py-20">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ucm-navy text-white"><Scale className="h-6 w-6" /></span>
            <div>
              <span className="eyebrow">Maestría en Juicios Orales</span>
              <h2 className="title-display text-2xl text-ucm-navy sm:text-3xl">Claustro de la <span className="text-gradient">MJO</span></h2>
            </div>
          </div>
        </Reveal>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {claustroMJO.map((d, i) => (
            <DocenteCard key={d.nombre} d={d} delay={i * 0.06} />
          ))}
        </div>
        <Reveal className="mt-8">
          <Link href="/oferta/maestria-en-juicios-orales" className="btn-primary">
            Conoce la Maestría en Juicios Orales <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>

      <section className="bg-ucm-ice/60 py-16 sm:py-20">
        <div className="container-ucm">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ucm-navy text-white"><Briefcase className="h-6 w-6" /></span>
              <div>
                <span className="eyebrow">Maestría en Alta Dirección y Administración de Negocios</span>
                <h2 className="title-display text-2xl text-ucm-navy sm:text-3xl">Claustro de la <span className="text-gradient">MADAN</span></h2>
              </div>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {claustroMADAN.map((d, i) => (
              <DocenteCard key={d.nombre} d={d} delay={i * 0.06} />
            ))}
          </div>
          <Reveal className="mt-8">
            <Link href="/oferta/mba" className="btn-primary">
              Conoce la MADAN <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
