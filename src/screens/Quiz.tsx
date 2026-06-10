import PageHero from "@/components/PageHero";
import QuizComponent from "@/components/Quiz";
import type { Locale } from "@/i18n/config";

export default function QuizScreen({ lang = "es" }: { lang?: Locale }) {
  const isEn = lang === "en";
  return (
    <>
      <PageHero
        eyebrow={isEn ? "Career quiz" : "Quiz vocacional"}
        title={isEn ? <>Discover which program <span className="text-ucm-skyLt">is right for you</span></> : <>Descubre qué programa <span className="text-ucm-skyLt">es para ti</span></>}
        desc={isEn ? "4 questions, 30 seconds, and we'll tell you exactly where to start." : "4 preguntas, 30 segundos, y te decimos exactamente por dónde empezar."}
      />
      <section className="container-ucm py-16 sm:py-20">
        <div className="mx-auto max-w-2xl"><QuizComponent lang={lang} /></div>
      </section>
    </>
  );
}
