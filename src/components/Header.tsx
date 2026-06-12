"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X, GraduationCap, Sparkles } from "lucide-react";
import { inst } from "@/data/site";
import { getDict } from "@/i18n/dict";
import { getMarketing } from "@/i18n/marketing";
import { localePath, type Locale } from "@/i18n/config";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Header({ lang = "es" }: { lang?: Locale }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [promo, setPromo] = useState(true);
  const mk = getMarketing(lang);
  const d = getDict(lang).nav;

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("ucm-promo-hidden") === "1") setPromo(false);
  }, []);
  const closePromo = () => { setPromo(false); try { localStorage.setItem("ucm-promo-hidden", "1"); } catch {} };
  const p = (path: string) => localePath(lang, path);

  const nav = [
    { label: d.inicio, href: p("/") },
    { label: d.nosotros, href: p("/nosotros") },
    { label: d.oferta, href: p("/oferta") },
    { label: d.admisiones, href: p("/admisiones") },
    { label: d.costos, href: p("/costos-y-becas") },
    { label: d.respaldos, href: p("/respaldos") },
    { label: d.contacto, href: p("/contacto") },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onDark = !scrolled;

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 shadow-soft backdrop-blur-xl" : "bg-transparent"}`}>
      {promo && (
        <div className="relative bg-ucm-gradient text-white">
          <div className="container-ucm flex items-center justify-center gap-3 py-1.5 text-center text-xs font-medium sm:text-sm">
            <Sparkles className="hidden h-3.5 w-3.5 text-ucm-skyLt sm:block" />
            <span>{mk.promo}</span>
            <Link href={p("/costos-y-becas")} className="hidden shrink-0 rounded-full bg-white/15 px-3 py-0.5 text-xs font-semibold ring-1 ring-white/25 transition hover:bg-white/25 sm:inline-block">{mk.promoCta}</Link>
          </div>
          <button onClick={closePromo} aria-label="Cerrar" className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-white/70 transition hover:text-white"><X className="h-4 w-4" /></button>
        </div>
      )}
      <div className="container-ucm flex h-20 items-center justify-between">
        <Link href={p("/")} className="flex items-center gap-3">
          <Image src={onDark ? "/brand/ucm-logo-white.png" : "/brand/ucm-logo.png"} alt="Universidad Cultural Metropolitana" width={52} height={52} className="h-12 w-12 object-contain transition-opacity duration-300" priority />
          <span className={`hidden text-sm font-bold leading-tight sm:block transition-colors ${onDark ? "text-white" : "text-ucm-navy"}`}>
            Universidad Cultural<br />
            <span className={onDark ? "text-ucm-skyLt" : "text-ucm-blue"}>Metropolitana</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className={`rounded-full px-3 py-2 text-sm font-medium transition ${onDark ? "text-white/85 hover:bg-white/10 hover:text-white" : "text-ucm-navy/80 hover:bg-ucm-ice hover:text-ucm-blue"}`}>
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block"><LanguageSwitcher lang={lang} onDark={onDark} /></div>
          <a href={inst.whatsapp} target="_blank" rel="noopener" className={`hidden h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold shadow-soft transition md:inline-flex ${onDark ? "bg-white text-ucm-navy hover:bg-ucm-ice" : "bg-ucm-blue text-white hover:bg-ucm-blueDk"}`}>
            <GraduationCap className="h-4 w-4" /> {getDict(lang).common.inscribete}
          </a>
          <button onClick={() => setOpen(!open)} className={`rounded-full p-2.5 transition lg:hidden ${onDark ? "text-white" : "text-ucm-navy"}`} aria-label="Menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-ucm-navy/5 bg-white/95 backdrop-blur-xl lg:hidden">
          <nav className="container-ucm flex flex-col py-4">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 text-base font-medium text-ucm-navy hover:bg-ucm-ice">
                {n.label}
              </Link>
            ))}
            <div className="px-4 py-3"><LanguageSwitcher lang={lang} /></div>
            <a href={inst.whatsapp} target="_blank" rel="noopener" className="btn-primary mt-1">{getDict(lang).common.inscribeteWa}</a>
          </nav>
        </div>
      )}
    </header>
  );
}
