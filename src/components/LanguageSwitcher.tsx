"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { switchPath, type Locale } from "@/i18n/config";

export default function LanguageSwitcher({ lang, onDark = false }: { lang: Locale; onDark?: boolean }) {
  const pathname = usePathname() || "/";
  const base = onDark ? "text-white/60" : "text-ucm-navy/55";
  const active = onDark ? "text-white" : "text-ucm-blue";
  return (
    <div className={`flex items-center gap-1 text-xs font-semibold ${base}`}>
      <Link href={switchPath(pathname, "es")} hrefLang="es" className={lang === "es" ? active : "transition hover:opacity-80"} aria-current={lang === "es" ? "true" : undefined}>ES</Link>
      <span className="opacity-40">/</span>
      <Link href={switchPath(pathname, "en")} hrefLang="en" className={lang === "en" ? active : "transition hover:opacity-80"} aria-current={lang === "en" ? "true" : undefined}>EN</Link>
    </div>
  );
}
