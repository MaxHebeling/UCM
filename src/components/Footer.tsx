import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";
import { inst } from "@/data/site";
import { getProgramas } from "@/i18n/content";
import { getDict } from "@/i18n/dict";
import { localePath, type Locale } from "@/i18n/config";

export default function Footer({ lang = "es" }: { lang?: Locale }) {
  const d = getDict(lang);
  const p = (path: string) => localePath(lang, path);
  const programas = getProgramas(lang);
  const nav = [
    { label: d.nav.inicio, href: p("/") },
    { label: d.nav.nosotros, href: p("/nosotros") },
    { label: d.nav.oferta, href: p("/oferta") },
    { label: d.nav.centroPosgrado, href: p("/centro-de-posgrado") },
    { label: d.nav.admisiones, href: p("/admisiones") },
    { label: d.nav.costos, href: p("/costos-y-becas") },
    { label: d.nav.respaldos, href: p("/respaldos") },
    { label: d.nav.contacto, href: p("/contacto") },
    { label: d.nav.comparativas, href: p("/comparativa") },
    { label: d.nav.referidos, href: p("/referidos") },
    { label: d.nav.privacidad, href: p("/aviso-de-privacidad") },
  ];

  return (
    <footer className="relative overflow-hidden bg-ucm-navyDk text-white">
      <Image src="/img/puente-tampico.jpg" alt="" fill className="object-cover object-bottom opacity-30" sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-b from-ucm-navyDk via-ucm-navyDk/90 to-ucm-navyDk/80" />
      <div className="absolute inset-0 bg-ucm-radial opacity-50" />
      <div className="container-ucm relative grid gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white">
              <Image src="/brand/ucm-logo.png" alt="UCM" width={44} height={44} className="object-contain" />
            </span>
            <span className="font-display text-lg font-semibold leading-tight">Universidad Cultural<br />Metropolitana</span>
          </div>
          <p className="mt-5 text-sm text-white/70">{inst.motto}.</p>
          <p className="mt-2 text-xs text-white/50">RVOE SEP {inst.rvoe} · CCT {inst.cct}</p>
          <div className="mt-5 flex gap-3">
            <a href={inst.facebook} target="_blank" rel="noopener" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-ucm-blue"><Facebook className="h-5 w-5" /></a>
            <a href={inst.instagram} target="_blank" rel="noopener" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-ucm-blue"><Instagram className="h-5 w-5" /></a>
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-ucm-sky">{d.common.nav}</h4>
          <ul className="space-y-2.5 text-sm text-white/70">
            {nav.map((n) => (<li key={n.href}><Link href={n.href} className="transition hover:text-white">{n.label}</Link></li>))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-ucm-sky">{d.common.ofertaEducativa}</h4>
          <ul className="space-y-2.5 text-sm text-white/70">
            {programas.slice(0, 7).map((pr) => (<li key={pr.slug}><Link href={p(`/oferta/${pr.slug}`)} className="transition hover:text-white">{pr.nombre}</Link></li>))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-ucm-sky">{d.common.contacto}</h4>
          <ul className="space-y-3.5 text-sm text-white/70">
            <li className="flex gap-3"><MapPin className="mt-0.5 h-5 w-5 shrink-0 text-ucm-sky" />{inst.address}</li>
            <li className="flex gap-3"><Phone className="h-5 w-5 shrink-0 text-ucm-sky" /><a href={`tel:${inst.phoneIntl}`} className="hover:text-white">{inst.phone}</a></li>
            <li className="flex gap-3"><Mail className="h-5 w-5 shrink-0 text-ucm-sky" /><a href={`mailto:${inst.email}`} className="hover:text-white">{inst.email}</a></li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-ucm flex flex-col items-center justify-between gap-2 py-6 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} {inst.legal}. {d.footer.rights}</p>
          <p>{d.footer.creditPrefix} <a href="https://www.ikingdom.org" target="_blank" rel="noopener" className="font-semibold text-gold hover:underline">iKingdom</a> · Digital Growth Architecture</p>
        </div>
        <p className="container-ucm pb-4 text-center text-[10px] text-white/30 sm:text-right">
          {d.footer.photoCredit} · <a href="https://creativecommons.org/licenses/by-sa/3.0" target="_blank" rel="noopener" className="hover:underline">CC BY-SA 3.0</a>
        </p>
      </div>
    </footer>
  );
}
