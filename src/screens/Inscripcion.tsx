import PageHero from "@/components/PageHero";
import InscripcionForm from "@/components/InscripcionForm";
import type { Locale } from "@/i18n/config";

export default function Inscripcion({ lang = "es" }: { lang?: Locale }) {
  const isEn = lang === "en";
  return (
    <>
      <PageHero
        eyebrow={isEn ? "UCM Graduate Center" : "Centro de Posgrado UCM"}
        title={isEn ? <>Online <span className="text-ucm-skyLt">enrollment request</span></> : <>Solicitud de <span className="text-ucm-skyLt">inscripción en línea</span></>}
        desc={isEn ? "Complete your enrollment request from anywhere — sign on screen and submit. The team will contact you to finish the process." : "Haz tu solicitud de inscripción desde donde estés: firma en pantalla y envíala. El equipo te contactará para concluir el proceso."}
      />
      <section className="container-ucm py-16 sm:py-20">
        <div className="mx-auto max-w-2xl"><InscripcionForm lang={lang} /></div>
      </section>
    </>
  );
}
