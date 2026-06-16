import Image from "next/image";
import { getClaustroMJO, getClaustroMADAN } from "@/i18n/content";
import type { Locale } from "@/i18n/config";

// Cintillo de claustro para páginas de posgrado (MBA / Juicios Orales).
export default function PonentesCintillo({ slug, lang = "es" }: { slug: string; lang?: Locale }) {
  const isMjo = slug.includes("juicios");
  const docentes = (isMjo ? getClaustroMJO(lang) : getClaustroMADAN(lang)).filter((d) => d.foto);
  if (!docentes.length) return null;
  const title = lang === "en" ? "Learn from those who practice, not just teach" : "Aprende de quienes ejercen, no solo enseñan";
  const eyebrow = lang === "en" ? "Faculty" : "Claustro docente";

  return (
    <section className="bg-ucm-navyDk py-16 text-white sm:py-20">
      <div className="container-ucm">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-ucm-skyLt ring-1 ring-white/20">{eyebrow}</span>
        <h2 className="title-display mt-4 max-w-2xl text-2xl text-white sm:text-3xl">{title}</h2>
      </div>
      <div className="mt-8 flex snap-x gap-4 overflow-x-auto px-5 pb-2 sm:px-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:mx-auto lg:max-w-7xl">
        {docentes.map((d) => (
          <figure key={d.nombre} className="group w-44 shrink-0 snap-start sm:w-52">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
              <Image src={d.foto!} alt={d.nombre} fill className="object-cover object-top grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0" sizes="208px" />
              <div className="absolute inset-0 bg-gradient-to-t from-ucm-navyDk via-ucm-navyDk/10 to-transparent" />
            </div>
            <figcaption className="mt-3">
              <p className="text-sm font-semibold leading-tight text-white">{d.nombre}</p>
              <p className="mt-1 line-clamp-2 text-xs leading-snug text-white/65">{d.puesto}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
