"use client";
import { useState } from "react";
import { BookOpen, X, Check, Send, Loader2 } from "lucide-react";
import { track } from "@/lib/track";
import { getPages } from "@/i18n/pages";
import type { Locale } from "@/i18n/config";

const T = {
  es: {
    open: "Ver plan de estudios",
    title: "Recibe el plan de estudios",
    sub: "Déjanos tus datos y te enviamos el plan de estudios a tu correo.",
    sending: "Enviando…",
    ok: "Gracias. Te enviamos el plan de estudios a tu correo.",
    okNote: "Si no lo ves en unos minutos, revisa tu carpeta de spam.",
    err: "No pudimos enviar tu solicitud. Inténtalo de nuevo o escríbenos por WhatsApp.",
    close: "Cerrar",
  },
  en: {
    open: "View curriculum",
    title: "Get the curriculum",
    sub: "Leave your details and we'll email you the program's curriculum.",
    sending: "Sending…",
    ok: "Thank you. We've emailed you the curriculum.",
    okNote: "If you don't see it in a few minutes, check your spam folder.",
    err: "We couldn't send your request. Please try again or message us on WhatsApp.",
    close: "Close",
  },
};

export default function PlanEstudiosButton({ programa, lang = "es" }: { programa: string; lang?: Locale }) {
  const t = T[lang];
  const f = getPages(lang).form;
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [data, setData] = useState({ nombre: "", whatsapp: "", email: "", website: "" });

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...data, programa, tipo: "plan-estudios" }),
      });
      if (!res.ok) throw new Error();
      track("generate_lead", { programa, origen: "plan-estudios" });
      setStatus("ok");
    } catch {
      setStatus("error");
    }
  }

  const field = "w-full rounded-xl border border-ucm-navy/15 bg-white px-4 py-3 text-sm text-ucm-navy outline-none transition focus:border-ucm-blue focus:ring-2 focus:ring-ucm-blue/20";

  return (
    <>
      <button onClick={() => { setOpen(true); setStatus("idle"); }} className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-ucm-blue/40 bg-ucm-ice px-7 py-3.5 text-sm font-semibold text-ucm-blueDk transition hover:bg-ucm-blue hover:text-white">
        <BookOpen className="h-4 w-4" /> {t.open}
      </button>

      {open && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center bg-ucm-navyDk/60 p-0 backdrop-blur-sm sm:items-center sm:p-4" onClick={() => setOpen(false)}>
          <div className="relative w-full max-w-md rounded-t-3xl bg-white p-7 shadow-glow sm:rounded-3xl" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setOpen(false)} aria-label={t.close} className="absolute right-4 top-4 rounded-full p-1.5 text-ucm-navy/40 transition hover:bg-ucm-ice hover:text-ucm-navy"><X className="h-5 w-5" /></button>

            {status === "ok" ? (
              <div className="py-6 text-center">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-ucm-blue text-white"><Check className="h-7 w-7" /></span>
                <h3 className="mt-4 font-display text-xl font-semibold text-ucm-navy">{t.ok}</h3>
                <p className="mt-2 text-sm text-ucm-navy/60">{t.okNote}</p>
                <button onClick={() => setOpen(false)} className="btn-primary mt-6 w-full">{t.close}</button>
              </div>
            ) : (
              <form onSubmit={submit} className="grid gap-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wide text-ucm-blue">{programa}</span>
                  <h3 className="mt-1 font-display text-xl font-semibold text-ucm-navy">{t.title}</h3>
                  <p className="mt-1 text-sm text-ucm-navy/60">{t.sub}</p>
                </div>
                <input type="text" tabIndex={-1} autoComplete="off" value={data.website} onChange={(e) => setData({ ...data, website: e.target.value })} className="hidden" aria-hidden />
                <div>
                  <label htmlFor="pe-nombre" className="mb-1.5 block text-sm font-semibold text-ucm-navy">{f.nombre}</label>
                  <input id="pe-nombre" required value={data.nombre} onChange={(e) => setData({ ...data, nombre: e.target.value })} className={field} placeholder={f.nombrePh} />
                </div>
                <div>
                  <label htmlFor="pe-wa" className="mb-1.5 block text-sm font-semibold text-ucm-navy">{f.tel}</label>
                  <input id="pe-wa" type="tel" required value={data.whatsapp} onChange={(e) => setData({ ...data, whatsapp: e.target.value })} className={field} placeholder={f.telPh} />
                </div>
                <div>
                  <label htmlFor="pe-email" className="mb-1.5 block text-sm font-semibold text-ucm-navy">{f.email}</label>
                  <input id="pe-email" type="email" required value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} className={field} placeholder={f.emailPh} />
                </div>
                {status === "error" && <p className="text-sm text-[#D0021B]">{t.err}</p>}
                <button type="submit" disabled={status === "sending"} className="btn-primary w-full disabled:opacity-70">
                  {status === "sending" ? <><Loader2 className="h-4 w-4 animate-spin" /> {t.sending}</> : <><Send className="h-4 w-4" /> {t.open}</>}
                </button>
                <p className="text-center text-xs text-ucm-navy/45">{f.aviso}</p>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
