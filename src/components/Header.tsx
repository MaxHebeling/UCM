"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X, GraduationCap } from "lucide-react";
import { nav, inst } from "@/data/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // En el tope (sobre el hero oscuro) el header es transparente → logo y textos en blanco.
  // Al hacer scroll aparece el fondo blanco → logo a color y textos en navy.
  const onDark = !scrolled;

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 shadow-soft backdrop-blur-xl" : "bg-transparent"}`}>
      <div className="container-ucm flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={onDark ? "/brand/ucm-logo-white.png" : "/brand/ucm-logo.png"}
            alt="Universidad Cultural Metropolitana"
            width={52}
            height={52}
            className="h-12 w-12 object-contain transition-opacity duration-300"
            priority
          />
          <span className={`hidden text-sm font-bold leading-tight sm:block transition-colors ${onDark ? "text-white" : "text-ucm-navy"}`}>
            Universidad Cultural<br />
            <span className={onDark ? "text-ucm-skyLt" : "text-ucm-blue"}>Metropolitana</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`rounded-full px-3.5 py-2 text-sm font-medium transition ${
                onDark ? "text-white/85 hover:bg-white/10 hover:text-white" : "text-ucm-navy/80 hover:bg-ucm-ice hover:text-ucm-blue"
              }`}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={inst.whatsapp}
            target="_blank"
            rel="noopener"
            className={`hidden h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold shadow-soft transition md:inline-flex ${
              onDark ? "bg-white text-ucm-navy hover:bg-ucm-ice" : "bg-ucm-blue text-white hover:bg-ucm-blueDk"
            }`}
          >
            <GraduationCap className="h-4 w-4" /> Inscríbete
          </a>
          <button
            onClick={() => setOpen(!open)}
            className={`rounded-full p-2.5 transition lg:hidden ${onDark ? "text-white" : "text-ucm-navy"}`}
            aria-label="Menú"
          >
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
            <a href={inst.whatsapp} target="_blank" rel="noopener" className="btn-primary mt-3">Inscríbete por WhatsApp</a>
          </nav>
        </div>
      )}
    </header>
  );
}
