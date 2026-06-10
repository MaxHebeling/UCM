import type { MetadataRoute } from "next";
import { programas } from "@/data/site";
import { comparativas } from "@/data/comparativas";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.ucmac.edu.mx";
  const now = new Date();
  const routes = ["", "/nosotros", "/oferta", "/claustro-docente", "/admisiones", "/costos-y-becas", "/respaldos", "/contacto", "/comparativa", "/referidos", "/aviso-de-privacidad", "/preparatoria/plan-de-estudios", "/encuentra-tu-programa"];
  const progRoutes = programas.map((p) => `/oferta/${p.slug}`);
  const compRoutes = comparativas.map((c) => `/comparativa/${c.slug}`);
  const all = [...routes, ...progRoutes, ...compRoutes];

  // Cada URL en español y en inglés, con alternates hreflang
  return all.map((r) => {
    const priority = r === "" ? 1 : r.includes("/oferta/") || r.includes("/comparativa/") ? 0.7 : 0.8;
    return {
      url: `${base}${r}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority,
      alternates: { languages: { es: `${base}${r}`, en: `${base}/en${r}` } },
    };
  }).concat(
    all.map((r) => ({
      url: `${base}/en${r}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: r === "" ? 0.9 : 0.6,
      alternates: { languages: { es: `${base}${r}`, en: `${base}/en${r}` } },
    }))
  );
}
