"use client";
import { useState } from "react";
import { Send, Check } from "lucide-react";
import { inst, programas } from "@/data/site";
import { track } from "@/lib/track";

export default function ContactForm({ defaultPrograma = "", origen = "contacto" }: { defaultPrograma?: string; origen?: string }) {
  const [sent, setSent] = useState(false);
  const [data, setData] = useState({ nombre: "", email: "", tel: "", programa: defaultPrograma, msg: "" });

  function submit(e: React.FormEvent) {
    e.preventDefault();
    // Envía la solicitud por WhatsApp con el contexto del prospecto
    const text = `Hola UCM, soy ${data.nombre}. Me interesa: ${data.programa || "informes generales"}.%0ATel: ${data.tel}%0AEmail: ${data.email}%0A${data.msg}`;
    track("generate_lead", { programa: data.programa || "Informes generales", origen });
    window.open(`https://wa.me/${inst.phoneIntl.replace("+", "")}?text=${text}`, "_blank");
    setSent(true);
  }

  const field = "w-full rounded-xl border border-ucm-navy/15 bg-white px-4 py-3 text-sm text-ucm-navy outline-none transition focus:border-ucm-blue focus:ring-2 focus:ring-ucm-blue/20";

  if (sent)
    return (
      <div className="flex flex-col items-center justify-center rounded-3xl border border-ucm-blue/20 bg-ucm-ice p-10 text-center">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-ucm-blue text-white"><Check className="h-7 w-7" /></span>
        <h3 className="mt-4 font-display text-xl font-semibold text-ucm-navy">¡Gracias, {data.nombre || "futuro UCM"}!</h3>
        <p className="mt-2 text-sm text-ucm-navy/65">Continuamos tu solicitud por WhatsApp. Si no se abrió, escríbenos al {inst.phone}.</p>
      </div>
    );

  return (
    <form onSubmit={submit} className="grid gap-4 rounded-3xl border border-ucm-navy/8 bg-white p-7 shadow-soft">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="nombre" className="mb-1.5 block text-sm font-semibold text-ucm-navy">Nombre completo</label>
          <input id="nombre" name="nombre" required value={data.nombre} onChange={(e) => setData({ ...data, nombre: e.target.value })} className={field} placeholder="Tu nombre" />
        </div>
        <div>
          <label htmlFor="tel" className="mb-1.5 block text-sm font-semibold text-ucm-navy">Teléfono / WhatsApp</label>
          <input id="tel" name="tel" type="tel" required value={data.tel} onChange={(e) => setData({ ...data, tel: e.target.value })} className={field} placeholder="833 000 0000" />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-ucm-navy">Correo electrónico</label>
        <input id="email" name="email" type="email" required value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} className={field} placeholder="tucorreo@ejemplo.com" />
      </div>
      <div>
        <label htmlFor="programa" className="mb-1.5 block text-sm font-semibold text-ucm-navy">Programa de interés</label>
        <select id="programa" name="programa" value={data.programa} onChange={(e) => setData({ ...data, programa: e.target.value })} className={field}>
          <option value="">Selecciona un programa</option>
          {programas.map((p) => <option key={p.slug} value={p.nombre}>{p.nombre}</option>)}
          <option value="Informes generales">Informes generales</option>
        </select>
      </div>
      <div>
        <label htmlFor="msg" className="mb-1.5 block text-sm font-semibold text-ucm-navy">Mensaje (opcional)</label>
        <textarea id="msg" name="msg" rows={3} value={data.msg} onChange={(e) => setData({ ...data, msg: e.target.value })} className={field} placeholder="Cuéntanos qué te gustaría saber" />
      </div>
      <button type="submit" className="btn-primary w-full"><Send className="h-4 w-4" /> Enviar solicitud</button>
      <p className="text-center text-xs text-ucm-navy/50">Al enviar aceptas nuestro aviso de privacidad. Te contactaremos por WhatsApp.</p>
    </form>
  );
}
