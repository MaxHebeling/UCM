import type { Metadata } from "next";
import Link from "next/link";
import { FileText, ClipboardCheck, CalendarCheck, GraduationCap, Check, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { inst } from "@/data/site";

export const metadata: Metadata = {
  title: "Admisiones — Proceso de inscripción",
  description: "Inscríbete en la UCM Tampico. Conoce el proceso de admisión, requisitos de ingreso y fechas para preparatoria, licenciaturas, maestrías y doctorado con RVOE.",
  alternates: { canonical: "/admisiones" },
};

const pasos = [
  { icon: FileText, t: "Solicita informes", d: "Contáctanos por WhatsApp o el formulario. Un asesor educativo te guía según el programa que te interesa." },
  { icon: ClipboardCheck, t: "Entrega tu documentación", d: "Reúne los documentos de ingreso y completa tu solicitud de inscripción." },
  { icon: CalendarCheck, t: "Reserva tu lugar", d: "Asegura tu beca de inscripción del mes y elige el horario que mejor se adapte a ti." },
  { icon: GraduationCap, t: "¡Comienza a estudiar!", d: "Recibe tus accesos a la Plataforma UCM y arranca tu formación con validez oficial." },
];

const reqLic = ["Solicitud de inscripción", "Acta de nacimiento (original y copia)", "CURP (dos copias)", "Certificado de bachillerato (dos copias)", "6 fotografías tamaño infantil B/N de frente"];
const reqPos = ["Solicitud de inscripción", "Acta de nacimiento (original y copia)", "CURP (dos copias)", "Certificado, título y cédula de licenciatura (dos copias)", "6 fotografías tamaño infantil B/N de frente"];

export default function Admisiones() {
  return (
    <>
      <PageHero
        eyebrow="Admisiones"
        title={<>Inscríbete y comienza tu <span className="text-ucm-skyLt">camino profesional</span></>}
        desc="Un proceso simple y acompañado. Inscripciones abiertas todo el año en modalidad ejecutiva, en línea y presencial."
      />

      <section className="container-ucm py-16 sm:py-20">
        <Reveal><h2 className="title-display text-3xl text-ucm-navy sm:text-4xl">Tu proceso en 4 pasos</h2></Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pasos.map((s, i) => (
            <Reveal key={s.t} delay={i * 0.08}>
              <div className="card h-full">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ucm-blue text-white"><s.icon className="h-6 w-6" /></span>
                <div className="mt-4 text-xs font-bold uppercase tracking-wider text-ucm-sky">Paso {i + 1}</div>
                <h3 className="mt-1 font-display text-lg font-semibold text-ucm-navy">{s.t}</h3>
                <p className="mt-2 text-sm text-ucm-navy/65">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-ucm-ice/60 py-16 sm:py-20">
        <div className="container-ucm grid gap-6 lg:grid-cols-2">
          {[{ t: "Requisitos — Licenciatura y Preparatoria", items: reqLic }, { t: "Requisitos — Maestría y Doctorado", items: reqPos }].map((b) => (
            <Reveal key={b.t}>
              <div className="rounded-3xl border border-ucm-navy/8 bg-white p-8 shadow-soft">
                <h3 className="font-display text-xl font-semibold text-ucm-navy">{b.t}</h3>
                <ul className="mt-5 space-y-3">
                  {b.items.map((it) => (
                    <li key={it} className="flex gap-3 text-sm text-ucm-navy/80"><Check className="mt-0.5 h-5 w-5 shrink-0 text-ucm-blue" /> {it}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-ucm py-16 sm:py-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-ucm-gradient px-8 py-14 text-center text-white shadow-glow sm:px-16">
            <h2 className="title-display text-3xl sm:text-4xl">¿Listo para inscribirte?</h2>
            <p className="mx-auto mt-3 max-w-lg text-white/85">Un asesor te ayuda a elegir el programa y la beca ideal para ti.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={inst.whatsapp} target="_blank" rel="noopener" className="btn-white">Inscríbete por WhatsApp</a>
              <Link href="/costos-y-becas" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">Ver costos y becas <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
