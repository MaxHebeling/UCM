import type { Metadata } from "next";
import ComparativaDetail from "@/screens/ComparativaDetail";
import { comparativasEN } from "@/data/comparativas-en";

export function generateStaticParams() {
  return comparativasEN.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = comparativasEN.find((x) => x.slug === slug);
  if (!c) return {};
  return { title: c.title, description: c.meta, alternates: { canonical: `/en/comparativa/${c.slug}`, languages: { es: `/comparativa/${c.slug}`, en: `/en/comparativa/${c.slug}` } } };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ComparativaDetail slug={slug} lang="en" />;
}
