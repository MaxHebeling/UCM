import type { Metadata } from "next";
import Link from "next/link";
import { Percent, Wallet, Award, Building, HeartHandshake, Check, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { inst } from "@/data/site";

export const metadata: Metadata = {
  title: "Costos y Becas — Inversión accesible",
  description: "Conoce los planes de inversión y becas de la UCM Tampico: beca de inscripción, beca en mensualidad, becas empresariales y valoración USICAMM. Inscripciones abiertas.",
  alternates: { canonical: "/costos-y-becas" },
};

const becas = [
  { icon: Percent, t: "Beca de inscripción", d: "Hasta 50% de descuento en tu inscripción al reservar tu lugar dentro del mes." },
  { icon: Wallet, t: "Beca en mensualidad", d: "Beca aplicable durante toda la carrera al inscribirte en el periodo de promoción." },
  { icon: Building, t: "Becas empresariales", d: "Convenios con empresas y aliados para colaboradores y sus familias." },
  { icon: Award, t: "Valoración USICAMM", d: "Los posgrados otorgan mayor puntaje para plaza federal y promoción docente ante la SEP." },
];

export default function Costos() {
  return (
    <>
      <PageHero
        eyebrow="Costos y becas"
        title={<>Educación de calidad, <span className="text-ucm-skyLt">a tu alcance</span></>}
        desc="Planes de inversión flexibles y un esquema de becas pensado para que nada te detenga."
      />

      <section className="container-ucm py-16 sm:py-20">
        <Reveal>
          <div className="rounded-3xl border border-ucm-navy/8 bg-white p-8 shadow-soft sm:p-10">
            <span className="eyebrow"><HeartHandshake className="h-4 w-4" /> Nuestra filosofía</span>
            <h2 className="title-display mt-4 text-2xl text-ucm-navy sm:text-3xl">Pagas por avanzar, no por permanecer</h2>
            <p className="mt-4 max-w-3xl text-lg text-ucm-navy/65">
              En la UCM la inversión se adapta al nivel, la modalidad y tu situación. Por eso cada plan se arma de forma personalizada:
              te entregamos una cotización clara con el esquema de becas que te corresponde, sin letras chicas.
            </p>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {becas.map((b, i) => (
            <Reveal key={b.t} delay={i * 0.08}>
              <div className="card h-full">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ucm-ice text-ucm-blue"><b.icon className="h-6 w-6" /></span>
                <h3 className="mt-5 font-display text-lg font-semibold text-ucm-navy">{b.t}</h3>
                <p className="mt-2 text-sm text-ucm-navy/65">{b.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-ucm-ice/60 py-16 sm:py-20">
        <div className="container-ucm grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <h2 className="title-display text-3xl text-ucm-navy sm:text-4xl">Tu plan de inversión <span className="text-gradient">personalizado</span></h2>
            <p className="mt-4 text-lg text-ucm-navy/65">Solicita una cotización sin compromiso. En minutos sabrás:</p>
            <ul className="mt-6 space-y-3">
              {["El costo de inscripción y mensualidad de tu programa", "Las becas a las que aplicas este mes", "Las facilidades y planes de pago disponibles", "El calendario de tu generación"].map((x) => (
                <li key={x} className="flex gap-3 text-ucm-navy/80"><Check className="mt-0.5 h-5 w-5 shrink-0 text-ucm-blue" /> {x}</li>
              ))}
            </ul>
            <a href={inst.whatsapp} target="_blank" rel="noopener" className="btn-primary mt-8">Solicitar mi cotización <ArrowRight className="h-4 w-4" /></a>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-[2.5rem] bg-ucm-gradient p-10 text-white shadow-glow">
              <div className="text-sm font-semibold uppercase tracking-widest text-ucm-skyLt">Promoción del mes</div>
              <div className="mt-3 font-display text-6xl font-bold">-50%</div>
              <div className="text-xl font-semibold">en tu inscripción</div>
              <p className="mt-4 text-white/80">+ beca del 15% en mensualidad durante toda la carrera al reservar tu lugar hoy.</p>
              <Link href="/admisiones" className="btn-white mt-7">Reservar mi lugar</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
