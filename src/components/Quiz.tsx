"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, RotateCcw, Sparkles } from "lucide-react";
import { inst } from "@/data/site";
import { getProgramas } from "@/i18n/content";
import { localePath, type Locale } from "@/i18n/config";
import { track } from "@/lib/track";
import TrackLink from "@/components/TrackLink";

type Pregunta = { q: string; opciones: { label: string; valor: string }[] };

const PREG: Record<Locale, Pregunta[]> = {
  es: [
    { q: "¿Cuál es tu último nivel de estudios terminado?", opciones: [{ label: "Secundaria", valor: "secundaria" }, { label: "Preparatoria / Bachillerato", valor: "prepa" }, { label: "Licenciatura", valor: "licenciatura" }, { label: "Maestría", valor: "maestria" }] },
    { q: "¿Qué área te llama más?", opciones: [{ label: "Leyes y justicia", valor: "leyes" }, { label: "Negocios y dirección", valor: "negocios" }, { label: "Educación y enseñanza", valor: "educacion" }, { label: "Números y finanzas", valor: "finanzas" }, { label: "Comercio internacional", valor: "comercio" }] },
    { q: "¿Cómo prefieres estudiar?", opciones: [{ label: "Fines de semana (sigo trabajando)", valor: "ejecutiva" }, { label: "En línea desde donde sea", valor: "online" }, { label: "Presencial entre semana", valor: "presencial" }] },
    { q: "¿Cuál es tu objetivo principal?", opciones: [{ label: "Conseguir mi primer título", valor: "titulo" }, { label: "Crecer en mi trabajo actual", valor: "crecer" }, { label: "Subir mi puntaje USICAMM / plaza SEP", valor: "usicamm" }, { label: "Emprender mi propio negocio", valor: "emprender" }] },
  ],
  en: [
    { q: "What's your highest completed level of study?", opciones: [{ label: "Middle school", valor: "secundaria" }, { label: "High school", valor: "prepa" }, { label: "Bachelor's", valor: "licenciatura" }, { label: "Master's", valor: "maestria" }] },
    { q: "Which field appeals to you most?", opciones: [{ label: "Law and justice", valor: "leyes" }, { label: "Business and management", valor: "negocios" }, { label: "Education and teaching", valor: "educacion" }, { label: "Numbers and finance", valor: "finanzas" }, { label: "International trade", valor: "comercio" }] },
    { q: "How do you prefer to study?", opciones: [{ label: "Weekends (I'm still working)", valor: "ejecutiva" }, { label: "Online from anywhere", valor: "online" }, { label: "On campus, weekdays", valor: "presencial" }] },
    { q: "What's your main goal?", opciones: [{ label: "Earn my first degree", valor: "titulo" }, { label: "Grow in my current job", valor: "crecer" }, { label: "Raise my USICAMM score / SEP position", valor: "usicamm" }, { label: "Start my own business", valor: "emprender" }] },
  ],
};

const UI: Record<Locale, { ideal: string; req: string; verComp: string; reiniciar: string; preg: string; de: string }> = {
  es: { ideal: "Tu programa ideal es", req: "Solicitar informes por WhatsApp", verComp: "Ver el programa completo", reiniciar: "Volver a empezar", preg: "Pregunta", de: "de" },
  en: { ideal: "Your ideal program is", req: "Request info via WhatsApp", verComp: "See the full program", reiniciar: "Start over", preg: "Question", de: "of" },
};

function recomendar(r: string[]): string {
  const [nivel, area, , objetivo] = r;
  if (nivel === "secundaria") return "preparatoria";
  if (nivel === "licenciatura" || nivel === "maestria") {
    if (objetivo === "usicamm" && nivel === "maestria") return "doctorado-en-educacion";
    if (area === "leyes") return "mba";
    if (area === "negocios" || area === "finanzas" || objetivo === "emprender") return "mba";
    if (area === "educacion") return objetivo === "usicamm" && nivel === "maestria" ? "doctorado-en-educacion" : "maestria-metodologia-formacion";
    return "mba";
  }
  if (area === "leyes") return "licenciatura-en-derecho";
  if (area === "educacion") return "licenciatura-en-pedagogia";
  if (area === "finanzas") return "licenciatura-en-comercio-exterior";
  if (area === "comercio") return "licenciatura-en-comercio-exterior";
  return "licenciatura-administracion-empresa";
}

export default function Quiz({ lang = "es" }: { lang?: Locale }) {
  const preguntas = PREG[lang];
  const ui = UI[lang];
  const programas = getProgramas(lang);
  const find = (slug: string) => programas.find((p) => p.slug === slug) ?? programas[0];
  const [paso, setPaso] = useState(0);
  const [respuestas, setRespuestas] = useState<string[]>([]);

  const responder = (valor: string) => {
    const nuevas = [...respuestas, valor];
    setRespuestas(nuevas);
    if (nuevas.length === preguntas.length) track("quiz_complete", { programa_recomendado: find(recomendar(nuevas)).nombre });
    setPaso(paso + 1);
  };
  const reiniciar = () => { setPaso(0); setRespuestas([]); };

  if (paso >= preguntas.length) {
    const prog = find(recomendar(respuestas));
    return (
      <div className="rounded-3xl border border-ucm-navy/8 bg-white p-8 text-center shadow-soft sm:p-10">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-ucm-blue text-white"><Sparkles className="h-7 w-7" /></span>
        <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-ucm-blue">{ui.ideal}</p>
        <h3 className="title-display mt-2 text-2xl text-ucm-navy sm:text-3xl">{prog.nombre}</h3>
        <p className="mx-auto mt-3 max-w-xl text-ucm-navy/65">{prog.resumen}</p>
        <p className="mt-2 text-sm text-ucm-navy/55">{prog.modalidad} · {prog.duracion}</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <TrackLink event="whatsapp_click" params={{ programa: prog.nombre, ubicacion: "quiz_resultado" }} href={prog.whatsapp ?? inst.whatsapp} target="_blank" rel="noopener" className="btn-primary">
            {ui.req} <ArrowRight className="h-4 w-4" />
          </TrackLink>
          <Link href={localePath(lang, `/oferta/${prog.slug}`)} className="inline-flex items-center gap-2 rounded-2xl border border-ucm-navy/15 px-6 py-3.5 text-sm font-semibold text-ucm-navy transition hover:border-ucm-blue/40">{ui.verComp}</Link>
        </div>
        <button onClick={reiniciar} className="mx-auto mt-5 flex items-center gap-1.5 text-sm text-ucm-navy/50 hover:text-ucm-blue"><RotateCcw className="h-3.5 w-3.5" /> {ui.reiniciar}</button>
      </div>
    );
  }

  const pregunta = preguntas[paso];
  return (
    <div className="rounded-3xl border border-ucm-navy/8 bg-white p-8 shadow-soft sm:p-10">
      <div className="flex items-center justify-between text-xs font-semibold text-ucm-navy/50">
        <span>{ui.preg} {paso + 1} {ui.de} {preguntas.length}</span>
        <span>{Math.round((paso / preguntas.length) * 100)}%</span>
      </div>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-ucm-ice"><div className="h-full rounded-full bg-ucm-blue transition-all duration-500" style={{ width: `${(paso / preguntas.length) * 100}%` }} /></div>
      <h3 className="title-display mt-6 text-xl text-ucm-navy sm:text-2xl">{pregunta.q}</h3>
      <div className="mt-6 grid gap-3">
        {pregunta.opciones.map((o) => (
          <button key={o.valor} onClick={() => responder(o.valor)} className="rounded-2xl border border-ucm-navy/10 bg-white p-4 text-left text-sm font-medium text-ucm-navy transition hover:border-ucm-blue hover:bg-ucm-ice/50">{o.label}</button>
        ))}
      </div>
    </div>
  );
}
