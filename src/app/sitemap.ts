import type { MetadataRoute } from "next";
import { programas } from "@/data/site";
import { comparativas } from "@/data/comparativas";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.ucmac.edu.mx";
  const now = new Date();
  const routes = ["", "/nosotros", "/oferta", "/claustro-docente", "/admisiones", "/costos-y-becas", "/respaldos", "/contacto", "/comparativa", "/referidos", "/aviso-de-privacidad", "/preparatoria/plan-de-estudios", "/encuentra-tu-programa"];
  const pages = routes.map((r) => ({ url: `${base}${r}`, lastModified: now, changeFrequency: "monthly" as const, priority: r === "" ? 1 : 0.8 }));
  const progs = programas.map((p) => ({ url: `${base}/oferta/${p.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 }));
  const comps = comparativas.map((c) => ({ url: `${base}/comparativa/${c.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.6 }));
  return [...pages, ...progs, ...comps];
}
