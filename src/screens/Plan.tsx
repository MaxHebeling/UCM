import Image from "next/image";
import { MessageCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import type { Locale } from "@/i18n/config";

export default function Plan({ lang = "es" }: { lang?: Locale }) {
  const isEn = lang === "en";
  return (
    <>
      <PageHero
        eyebrow={isEn ? "UCM High School · General Diploma affiliated with UAT" : "Preparatoria UCM · Bachillerato General Único incorporado a la UAT"}
        title={isEn ? <>Curriculum <span className="text-ucm-skyLt">overview</span></> : <>Plan de <span className="text-ucm-skyLt">Estudios</span></>}
        desc="#SóloFaltasTú"
      />
      <section className="container-ucm py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="text-lg text-ucm-navy/70">
              {isEn
                ? "Universidad Cultural Metropolitana has built an up-to-date curriculum aligned with the current requirements for entering higher education, covering the main fields of professional study. Its goal is to graduate students with solid knowledge, a strong humanistic sense for solving problems, and values — driving the productive development of our country."
                : "La Universidad Cultural Metropolitana ha adaptado un plan de estudios actualizado acorde a las necesidades vigentes para el ingreso a la educación superior, abarcando las principales áreas de estudio profesional; cuyo objetivo es formar egresados que cuenten con sólidos conocimientos, con gran sentido humanista en la solución de conflictos y con valores, impulsando con esto el desarrollo productivo de nuestro país."}
            </p>
          </Reveal>
          <Reveal className="mt-10">
            <div className="overflow-hidden rounded-3xl border border-ucm-navy/8 bg-white shadow-soft">
              <Image src="/brand/plan-estudios-preparatoria.jpg" alt={isEn ? "UCM High School curriculum, general diploma affiliated with UAT" : "Plan de Estudios de la Preparatoria UCM, Bachillerato General Único incorporado a la UAT"} width={852} height={950} className="h-auto w-full" />
            </div>
          </Reveal>
          <Reveal className="mt-10 text-center">
            <a href="http://wa.link/8458ne" target="_blank" rel="noopener" className="btn-primary">
              <MessageCircle className="h-4 w-4" /> {isEn ? "Request high-school info" : "Solicitar informes de Preparatoria"}
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
