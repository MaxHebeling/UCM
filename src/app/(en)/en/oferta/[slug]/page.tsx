import type { Metadata } from "next";
import Programa from "@/screens/Programa";
import { programasEN } from "@/data/en";

export function generateStaticParams() {
  return programasEN.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = programasEN.find((x) => x.slug === slug);
  if (!p) return {};
  const desc = `${p.nombre}${p.rvoe ? " with RVOE" : ""} at UCM Tampico. ${p.modalidad}. Request info and learn about scholarships.`;
  return {
    title: { absolute: `${p.nombre} | UCM Tampico` },
    description: desc.length > 158 ? desc.slice(0, 155).trimEnd() + "…" : desc,
    alternates: { canonical: `/en/oferta/${p.slug}`, languages: { es: `/oferta/${p.slug}`, en: `/en/oferta/${p.slug}`, "x-default": `/oferta/${p.slug}` } },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <Programa slug={slug} lang="en" />;
}
