import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import NetflixRow from "@/components/NetflixRow";
import { getProgramas } from "@/i18n/content";
import { getPages } from "@/i18n/pages";
import type { Locale } from "@/i18n/config";

const orden = ["Preparatoria", "Licenciatura", "Maestría", "MBA", "Doctorado"] as const;

export default function Oferta({ lang = "es" }: { lang?: Locale }) {
  const d = getPages(lang).oferta;
  const programas = getProgramas(lang);
  return (
    <>
      <PageHero
        image="/img/graduacion.jpg"
        imageAlt={lang === "en" ? "UCM graduates at their commencement" : "Egresados de la Universidad Cultural Metropolitana en su graduación"}
        eyebrow={d.eyebrow}
        title={<>{d.titleA}<span className="text-ucm-skyLt">{d.titleB}</span></>}
        desc={d.desc}
      />
      <div className="container-ucm space-y-12 py-16 sm:py-20">
        {orden.map((nivel) => {
          const items = programas.filter((p) => p.nivel === nivel);
          if (!items.length) return null;
          return (
            <Reveal key={nivel}>
              <NetflixRow title={d.rows[nivel]} items={items} lang={lang} />
            </Reveal>
          );
        })}
      </div>
    </>
  );
}
