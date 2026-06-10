"use client";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ShieldCheck, GraduationCap, ArrowRight, Sparkles } from "lucide-react";
import { inst, stats } from "@/data/site";
import CountUp from "@/components/CountUp";
import Magnetic from "@/components/Magnetic";

const line1 = "Tu futuro profesional,".split(" ");
const line2 = "con validez oficial.".split(" ");

const wrap = { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } };
const word = {
  hidden: { opacity: 0, y: 28, rotateX: -40 },
  show: { opacity: 1, y: 0, rotateX: 0, transition: { type: "spring" as const, damping: 14, stiffness: 120 } },
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const logoY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const logoRot = useTransform(scrollYProgress, [0, 1], [0, 8]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-ucm-navyDk pt-32 pb-20 text-white sm:pt-40 sm:pb-28">
      <div className="absolute inset-0 bg-ucm-gradient opacity-90" />
      {/* Aurora animada */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="aurora-blob absolute -left-32 top-0 h-[34rem] w-[34rem] rounded-full bg-ucm-sky/30 blur-[120px]" />
        <div className="aurora-blob absolute right-0 top-20 h-[30rem] w-[30rem] rounded-full bg-ucm-blue/40 blur-[120px]" style={{ animationDelay: "-6s" }} />
        <div className="aurora-blob absolute bottom-0 left-1/3 h-[26rem] w-[26rem] rounded-full bg-ucm-skyLt/20 blur-[110px]" style={{ animationDelay: "-12s" }} />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_85%_-5%,rgba(96,180,216,0.45),transparent)]" />

      {/* Logo flotante con parallax al hacer scroll */}
      <motion.div style={{ y: logoY, rotate: logoRot }} className="pointer-events-none absolute right-6 top-28 hidden lg:block xl:right-16">
        <motion.div
          animate={{ y: [0, -16, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="grid h-72 w-72 place-items-center rounded-[3rem] bg-white/95 shadow-glow"
        >
          <Image src="/brand/ucm-logo.png" alt="" width={240} height={240} className="h-56 w-56 object-contain" />
        </motion.div>
      </motion.div>

      <motion.div style={{ y: textY, opacity: textOpacity }} className="container-ucm relative">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-ucm-skyLt ring-1 ring-white/20">
            <Sparkles className="h-3.5 w-3.5" /> {inst.years} años formando líderes en Tampico
          </span>

          {/* H1 con revelado palabra por palabra (texto íntegro para SEO/accesibilidad) */}
          <motion.h1 variants={wrap} initial="hidden" animate="show" className="title-display mt-6 text-4xl text-white [perspective:800px] sm:text-6xl lg:text-7xl">
            <span className="block">
              {line1.map((w, i) => (
                <motion.span key={i} variants={word} className="mr-[0.25em] inline-block">{w}</motion.span>
              ))}
            </span>
            <span className="block bg-gradient-to-r from-ucm-skyLt to-white bg-clip-text text-transparent">
              {line2.map((w, i) => (
                <motion.span key={i} variants={word} className="mr-[0.25em] inline-block">{w}</motion.span>
              ))}
            </span>
          </motion.h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.6 }} className="mt-6 max-w-xl text-lg text-white/80 [text-align:left]">
            Preparatoria, licenciaturas, maestrías y doctorado con <strong className="font-semibold text-white">RVOE de la SEP</strong>.
            Estudia en modalidad ejecutiva, en línea o presencial — con horarios pensados para quien trabaja.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.5 }} className="mt-9 flex flex-wrap gap-3">
            <Magnetic>
              <Link href="/oferta" className="btn-white"><GraduationCap className="h-5 w-5" /> Ver oferta educativa</Link>
            </Magnetic>
            <Magnetic>
              <a href={inst.whatsapp} target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">
                Solicitar informes <ArrowRight className="h-4 w-4" />
              </a>
            </Magnetic>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.6 }} className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/70">
            <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-ucm-skyLt" /> RVOE SEP {inst.rvoe}</span>
            <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-ucm-skyLt" /> Incorporada a la UAT</span>
            <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-ucm-skyLt" /> Centro Cambridge English</span>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.55 }} className="mt-14 grid grid-cols-2 gap-4 sm:mt-16 sm:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div key={s.label} whileHover={{ y: -4 }} className="rounded-2xl bg-white/10 p-5 ring-1 ring-white/15 backdrop-blur">
              <div className="font-display text-3xl font-semibold text-white sm:text-4xl"><CountUp value={s.value} /></div>
              <div className="mt-1 text-xs text-white/65">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <div className="absolute inset-x-0 bottom-0 h-16 bg-white [clip-path:ellipse(75%_100%_at_50%_100%)]" />
    </section>
  );
}
