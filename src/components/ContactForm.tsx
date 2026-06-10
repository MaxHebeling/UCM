"use client";
import { useState } from "react";
import { Send, Check } from "lucide-react";
import { inst } from "@/data/site";
import { track } from "@/lib/track";
import { getProgramas } from "@/i18n/content";
import { getPages } from "@/i18n/pages";
import type { Locale } from "@/i18n/config";

export default function ContactForm({ defaultPrograma = "", origen = "contacto", lang = "es" }: { defaultPrograma?: string; origen?: string; lang?: Locale }) {
  const f = getPages(lang).form;
  const programas = getProgramas(lang);
  const [sent, setSent] = useState(false);
  const [data, setData] = useState({ nombre: "", email: "", tel: "", programa: defaultPrograma, msg: "" });

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const intro = lang === "en" ? `Hi UCM, I'm ${data.nombre}. I'm interested in` : `Hola UCM, soy ${data.nombre}. Me interesa`;
    const text = `${intro}: ${data.programa || f.infoGeneral}.%0ATel: ${data.tel}%0AEmail: ${data.email}%0A${data.msg}`;
    track("generate_lead", { programa: data.programa || f.infoGeneral, origen });
    window.open(`https://wa.me/${inst.phoneIntl.replace("+", "")}?text=${text}`, "_blank");
    setSent(true);
  }

  const field = "w-full rounded-xl border border-ucm-navy/15 bg-white px-4 py-3 text-sm text-ucm-navy outline-none transition focus:border-ucm-blue focus:ring-2 focus:ring-ucm-blue/20";

  if (sent)
    return (
      <div className="flex flex-col items-center justify-center rounded-3xl border border-ucm-blue/20 bg-ucm-ice p-10 text-center">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-ucm-blue text-white"><Check className="h-7 w-7" /></span>
        <h3 className="mt-4 font-display text-xl font-semibold text-ucm-navy">{f.graciasA}{data.nombre || f.graciasB}!</h3>
        <p className="mt-2 text-sm text-ucm-navy/65">{f.graciasMsg}{inst.phone}.</p>
      </div>
    );

  return (
    <form onSubmit={submit} className="grid gap-4 rounded-3xl border border-ucm-navy/8 bg-white p-7 shadow-soft">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="nombre" className="mb-1.5 block text-sm font-semibold text-ucm-navy">{f.nombre}</label>
          <input id="nombre" name="nombre" required value={data.nombre} onChange={(e) => setData({ ...data, nombre: e.target.value })} className={field} placeholder={f.nombrePh} />
        </div>
        <div>
          <label htmlFor="tel" className="mb-1.5 block text-sm font-semibold text-ucm-navy">{f.tel}</label>
          <input id="tel" name="tel" type="tel" required value={data.tel} onChange={(e) => setData({ ...data, tel: e.target.value })} className={field} placeholder={f.telPh} />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-ucm-navy">{f.email}</label>
        <input id="email" name="email" type="email" required value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} className={field} placeholder={f.emailPh} />
      </div>
      <div>
        <label htmlFor="programa" className="mb-1.5 block text-sm font-semibold text-ucm-navy">{f.programa}</label>
        <select id="programa" name="programa" value={data.programa} onChange={(e) => setData({ ...data, programa: e.target.value })} className={field}>
          <option value="">{f.programaPh}</option>
          {programas.map((p) => <option key={p.slug} value={p.nombre}>{p.nombre}</option>)}
          <option value={f.infoGeneral}>{f.infoGeneral}</option>
        </select>
      </div>
      <div>
        <label htmlFor="msg" className="mb-1.5 block text-sm font-semibold text-ucm-navy">{f.mensaje}</label>
        <textarea id="msg" name="msg" rows={3} value={data.msg} onChange={(e) => setData({ ...data, msg: e.target.value })} className={field} placeholder={f.mensajePh} />
      </div>
      <button type="submit" className="btn-primary w-full"><Send className="h-4 w-4" /> {f.enviar}</button>
      <p className="text-center text-xs text-ucm-navy/50">{f.aviso}</p>
    </form>
  );
}
