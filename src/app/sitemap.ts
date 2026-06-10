import type { MetadataRoute } from "next";
import { programas } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.ucmac.edu.mx";
  const routes = ["", "/nosotros", "/oferta", "/admisiones", "/costos-y-becas", "/respaldos", "/contacto"];
  const pages = routes.map((r) => ({ url: `${base}${r}`, changeFrequency: "monthly" as const, priority: r === "" ? 1 : 0.8 }));
  const progs = programas.map((p) => ({ url: `${base}/oferta/${p.slug}`, changeFrequency: "monthly" as const, priority: 0.7 }));
  return [...pages, ...progs];
}
