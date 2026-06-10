"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, GraduationCap, ArrowRight, Sparkles } from "lucide-react";
import { inst, stats } from "@/data/site";
import CountUp from "@/components/CountUp";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ucm-navyDk pt-32 pb-20 text-white sm:pt-40 sm:pb-28">
      {/* fondo */}
      <div className="absolute inset-0 bg-ucm-gradient opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_85%_-5%,rgba(96,180,216,0.45),transparent)]" />
      <div className="pointer-events-none absolute -right-24 top-24 hidden lg:block">
        <motion.div
          animate={{ y: [0, -18, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="grid h-72 w-72 place-items-center rounded-[3rem] bg-white/95 shadow-glow"
        >
          <Image src="/brand/ucm-logo.png" alt="" width={240} height={240} className="h-56 w-56 object-contain" />
        </motion.div>
      </div>

      <div className="container-ucm relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-ucm-skyLt ring-1 ring-white/20">
            <Sparkles className="h-3.5 w-3.5" /> {inst.years} años formando líderes en Tampico
          </span>

          <h1 className="title-display mt-6 text-4xl text-white sm:text-6xl lg:text-7xl">
            Tu futuro profesional,<br />
            <span className="bg-gradient-to-r from-ucm-skyLt to-white bg-clip-text text-transparent">con validez oficial.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-white/80">
            Preparatoria, licenciaturas, maestrías y doctorado con <strong className="font-semibold text-white">RVOE de la SEP</strong>.
            Estudia en modalidad ejecutiva, en línea o presencial — con horarios pensados para quien trabaja.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/oferta" className="btn-white">
              <GraduationCap className="h-5 w-5" /> Ver oferta educativa
            </Link>
            <a href={inst.whatsapp} target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">
              Solicitar informes <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/70">
            <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-ucm-skyLt" /> RVOE SEP {inst.rvoe}</span>
            <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-ucm-skyLt" /> Incorporada a la UAT</span>
            <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-ucm-skyLt" /> Centro Cambridge English</span>
          </div>
        </motion.div>

        {/* stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-14 grid grid-cols-2 gap-4 sm:mt-16 sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl bg-white/10 p-5 ring-1 ring-white/15 backdrop-blur">
              <div className="font-display text-3xl font-semibold text-white sm:text-4xl"><CountUp value={s.value} /></div>
              <div className="mt-1 text-xs text-white/65">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* curva inferior */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-white [clip-path:ellipse(75%_100%_at_50%_100%)]" />
    </section>
  );
}
