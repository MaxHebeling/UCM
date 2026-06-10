import type { Metadata } from "next";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Plan de Estudios — Preparatoria UCM",
  description:
    "Descubre nuestro completo Plan de Estudios de Preparatoria en UCM. Prepárate con una educación integral que fortalece tus habilidades académicas y te impulsa hacia el éxito universitario.",
  alternates: { canonical: "/preparatoria/plan-de-estudios" },
};

/*
 * NOTA: colocar la imagen del plan de estudios descargada del sitio original
 * en /public/brand/plan-estudios-preparatoria.jpg
 * (fuente: ucmac.edu.mx/preparatoria-plandeestudios)
 */

export default function PlanDeEstudiosPreparatoria() {
  return (
    <>
      <PageHero
        eyebrow="Preparatoria UCM · Bachillerato General Único incorporado a la UAT"
        title={<>Plan de <span className="text-ucm-skyLt">Estudios</span></>}
        desc="#SóloFaltasTú"
      />

      <section className="container-ucm py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="text-lg text-ucm-navy/70">
              La Universidad Cultural Metropolitana ha adaptado un plan de estudios actualizado acorde a las
              necesidades vigentes para el ingreso a la educación superior, abarcando las principales áreas de
              estudio profesional; cuyo objetivo es formar egresados que cuenten con sólidos conocimientos, con
              gran sentido humanista en la solución de conflictos y con valores, impulsando con esto el
              desarrollo productivo de nuestro país.
            </p>
          </Reveal>

          <Reveal className="mt-10">
            <div className="overflow-hidden rounded-3xl border border-ucm-navy/8 bg-white shadow-soft">
              <Image
                src="/brand/plan-estudios-preparatoria.jpg"
                alt="Plan de Estudios de la Preparatoria UCM, Bachillerato General Único incorporado a la UAT"
                width={852}
                height={950}
                className="h-auto w-full"
              />
            </div>
          </Reveal>

          <Reveal className="mt-10 text-center">
            <a
              href="http://wa.link/8458ne"
              target="_blank"
              rel="noopener"
              className="btn-primary"
            >
              <MessageCircle className="h-4 w-4" /> Solicitar informes de Preparatoria
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
