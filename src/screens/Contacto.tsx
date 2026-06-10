import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { inst, equipo } from "@/data/site";
import { getPages } from "@/i18n/pages";
import type { Locale } from "@/i18n/config";

const areaEN: Record<string, string> = {
  "Rectoría": "Rector's Office",
  "Marketing / Informes": "Marketing / Info",
  "Escolares": "Registrar",
  "Financiero": "Finance",
  "Coordinación Académica": "Academic Coordination",
  "Apoyo Académico": "Academic Support",
  "Posgrados Altamira": "Graduate Programs (Altamira)",
};

export default function Contacto({ lang = "es" }: { lang?: Locale }) {
  const d = getPages(lang).contacto;
  return (
    <>
      <PageHero
        image="/img/tampico.jpg"
        imageAlt={lang === "en" ? "Plaza de Armas, Tampico, Tamaulipas" : "Plaza de Armas de Tampico, Tamaulipas"}
        eyebrow={d.eyebrow}
        title={<>{d.titleA}<span className="text-ucm-skyLt">{d.titleB}</span></>}
        desc={d.desc}
      />
      <section className="container-ucm py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <h2 className="title-display text-2xl text-ucm-navy sm:text-3xl">{d.formTitle}</h2>
            <p className="mt-2 text-ucm-navy/65">{d.formSub}</p>
            <div className="mt-6"><ContactForm lang={lang} /></div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-4">
              {[
                { icon: MapPin, t: d.cDireccion, dd: inst.address },
                { icon: Phone, t: d.cTel, dd: inst.phone, href: `tel:${inst.phoneIntl}` },
                { icon: Mail, t: d.cCorreo, dd: inst.email, href: `mailto:${inst.email}` },
                { icon: Clock, t: d.cHorario, dd: d.horario },
              ].map((c) => (
                <div key={c.t} className="flex gap-4 rounded-2xl border border-ucm-navy/8 bg-white p-5 shadow-soft">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-ucm-ice text-ucm-blue"><c.icon className="h-5 w-5" /></span>
                  <div>
                    <div className="text-sm font-semibold text-ucm-navy">{c.t}</div>
                    {c.href ? <a href={c.href} className="text-sm text-ucm-blue hover:underline">{c.dd}</a> : <div className="text-sm text-ucm-navy/65">{c.dd}</div>}
                  </div>
                </div>
              ))}
              <div className="flex gap-3">
                <a href={inst.facebook} target="_blank" rel="noopener" className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-ucm-navy p-4 text-sm font-semibold text-white transition hover:bg-ucm-blue"><Facebook className="h-5 w-5" /> Facebook</a>
                <a href={inst.instagram} target="_blank" rel="noopener" className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-ucm-navy p-4 text-sm font-semibold text-white transition hover:bg-ucm-blue"><Instagram className="h-5 w-5" /> Instagram</a>
              </div>
              <div className="overflow-hidden rounded-2xl border border-ucm-navy/8 shadow-soft">
                <iframe title={d.mapTitle} src="https://www.google.com/maps?q=Dr.%20Alfonso%20G.%20Alarcon%20305%20Nte%2C%20Zona%20Centro%2C%20Tampico%2C%20Tamaulipas&output=embed" className="h-64 w-full" loading="lazy" />
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-16">
          <h2 className="title-display text-2xl text-ucm-navy sm:text-3xl">{d.areasTitle}</h2>
          <p className="mt-2 text-ucm-navy/65">{d.areasDesc}</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {equipo.map((e) => (
              <a key={e.area} href={e.href} target={e.tipo === "whatsapp" ? "_blank" : undefined} rel={e.tipo === "whatsapp" ? "noopener" : undefined} className="flex gap-4 rounded-2xl border border-ucm-navy/8 bg-white p-5 shadow-soft transition hover:border-ucm-blue/30">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-ucm-ice text-ucm-blue">{e.tipo === "whatsapp" ? <Phone className="h-5 w-5" /> : <Mail className="h-5 w-5" />}</span>
                <div>
                  <div className="text-sm font-semibold text-ucm-navy">{lang === "en" ? (areaEN[e.area] ?? e.area) : e.area}</div>
                  <div className="text-sm text-ucm-blue">{e.valor}</div>
                </div>
              </a>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}
