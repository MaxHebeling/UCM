import type { Metadata } from "next";
import Programa from "@/screens/Programa";
import { programas } from "@/data/site";

export function generateStaticParams() {
  return programas.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = programas.find((x) => x.slug === slug);
  if (!p) return {};
  const desc = `${p.nombre}${p.rvoe ? " con RVOE" : ""} en UCM Tampico. ${p.modalidad}. Solicita informes y conoce becas.`;
  return {
    title: { absolute: `${p.nombre} | UCM Tampico` },
    description: desc.length > 158 ? desc.slice(0, 155).trimEnd() + "…" : desc,
    alternates: { canonical: `/oferta/${p.slug}`, languages: { es: `/oferta/${p.slug}`, en: `/en/oferta/${p.slug}`, "x-default": `/oferta/${p.slug}` } },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <Programa slug={slug} lang="es" />;
}
