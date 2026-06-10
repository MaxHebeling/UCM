import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { inst, equipo } from "@/data/site";

export const metadata: Metadata = {
  title: "Contacto — Solicita informes",
  description: "Contacta a la Universidad Cultural Metropolitana en Tampico. Dirección, teléfono, WhatsApp y formulario de informes. Inscripciones abiertas.",
  alternates: { canonical: "/contacto" },
};

export default function Contacto() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title={<>Estamos para <span className="text-ucm-skyLt">acompañarte</span></>}
        desc="Solicita informes y un asesor educativo te contactará para resolver todas tus dudas."
      />

      <section className="container-ucm py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <h2 className="title-display text-2xl text-ucm-navy sm:text-3xl">Solicita informes</h2>
            <p className="mt-2 text-ucm-navy/65">Déjanos tus datos y te contactamos por WhatsApp.</p>
            <div className="mt-6"><ContactForm /></div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-4">
              {[
                { icon: MapPin, t: "Dirección", d: inst.address },
                { icon: Phone, t: "Teléfono / WhatsApp", d: inst.phone, href: `tel:${inst.phoneIntl}` },
                { icon: Mail, t: "Correo", d: inst.email, href: `mailto:${inst.email}` },
                { icon: Clock, t: "Horario de atención", d: "Lunes a viernes 9:00–19:00 · Sábados 9:00–14:00" },
              ].map((c) => (
                <div key={c.t} className="flex gap-4 rounded-2xl border border-ucm-navy/8 bg-white p-5 shadow-soft">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-ucm-ice text-ucm-blue"><c.icon className="h-5 w-5" /></span>
                  <div>
                    <div className="text-sm font-semibold text-ucm-navy">{c.t}</div>
                    {c.href ? <a href={c.href} className="text-sm text-ucm-blue hover:underline">{c.d}</a> : <div className="text-sm text-ucm-navy/65">{c.d}</div>}
                  </div>
                </div>
              ))}
              <div className="flex gap-3">
                <a href={inst.facebook} target="_blank" rel="noopener" className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-ucm-navy p-4 text-sm font-semibold text-white transition hover:bg-ucm-blue"><Facebook className="h-5 w-5" /> Facebook</a>
                <a href={inst.instagram} target="_blank" rel="noopener" className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-ucm-navy p-4 text-sm font-semibold text-white transition hover:bg-ucm-blue"><Instagram className="h-5 w-5" /> Instagram</a>
              </div>
              <div className="overflow-hidden rounded-2xl border border-ucm-navy/8 shadow-soft">
                <iframe
                  title="Ubicación UCM Tampico"
                  src="https://www.google.com/maps?q=Dr.%20Alfonso%20G.%20Alarcon%20305%20Nte%2C%20Zona%20Centro%2C%20Tampico%2C%20Tamaulipas&output=embed"
                  className="h-64 w-full"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-16">
          <h2 className="title-display text-2xl text-ucm-navy sm:text-3xl">Atención por área</h2>
          <p className="mt-2 text-ucm-navy/65">Contacta directamente al área administrativa que necesitas.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {equipo.map((e) => (
              <a
                key={e.area}
                href={e.href}
                target={e.tipo === "whatsapp" ? "_blank" : undefined}
                rel={e.tipo === "whatsapp" ? "noopener" : undefined}
                className="flex gap-4 rounded-2xl border border-ucm-navy/8 bg-white p-5 shadow-soft transition hover:border-ucm-blue/30"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-ucm-ice text-ucm-blue">
                  {e.tipo === "whatsapp" ? <Phone className="h-5 w-5" /> : <Mail className="h-5 w-5" />}
                </span>
                <div>
                  <div className="text-sm font-semibold text-ucm-navy">{e.area}</div>
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
