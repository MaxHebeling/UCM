"use client";
import { useRef, useState, useEffect } from "react";
import { Check, Eraser, FileText, Loader2, Send } from "lucide-react";
import { getProgramas } from "@/i18n/content";
import type { Locale } from "@/i18n/config";

const T = {
  es: {
    secPersonal: "Datos del aspirante", secAcad: "Información académica", secFirma: "Firma y reglamento",
    nombre: "Nombre completo", curp: "CURP", email: "Correo electrónico", whatsapp: "WhatsApp",
    programa: "Programa de interés", elige: "Selecciona un programa",
    formacion: "Último grado de estudios", formacionPh: "Ej. Licenciatura en Derecho",
    institucion: "Institución de procedencia", institucionPh: "Universidad o institución",
    firmaLabel: "Firma autógrafa", firmaHint: "Firma con el dedo o el mouse dentro del recuadro.",
    limpiar: "Limpiar", regla: "He leído y acepto los términos del reglamento escolar.",
    verRegla: "Ver reglamento escolar", enviar: "Enviar solicitud de inscripción", enviando: "Enviando…",
    okTitle: "Tu solicitud de inscripción ha sido recibida correctamente.",
    okDesc: "El equipo de UCM se pondrá en contacto contigo para continuar el proceso.",
    errFirma: "La firma autógrafa es obligatoria.", errRegla: "Debes aceptar el reglamento escolar.",
    err: "No pudimos enviar tu solicitud. Inténtalo de nuevo.",
    aviso: "Tus datos se tratan conforme al aviso de privacidad. Solo personal autorizado de UCM tendrá acceso.",
  },
  en: {
    secPersonal: "Applicant details", secAcad: "Academic information", secFirma: "Signature & policy",
    nombre: "Full name", curp: "CURP", email: "Email", whatsapp: "WhatsApp",
    programa: "Program of interest", elige: "Select a program",
    formacion: "Highest level of study", formacionPh: "e.g. Bachelor's in Law",
    institucion: "Previous institution", institucionPh: "University or institution",
    firmaLabel: "Handwritten signature", firmaHint: "Sign with your finger or mouse inside the box.",
    limpiar: "Clear", regla: "I have read and accept the terms of the school regulations.",
    verRegla: "View school regulations", enviar: "Submit enrollment request", enviando: "Sending…",
    okTitle: "Your enrollment request has been received successfully.",
    okDesc: "The UCM team will get in touch with you to continue the process.",
    errFirma: "The handwritten signature is required.", errRegla: "You must accept the school regulations.",
    err: "We couldn't send your request. Please try again.",
    aviso: "Your data is handled per our privacy policy. Only authorized UCM staff will have access.",
  },
};

export default function InscripcionForm({ lang = "es" }: { lang?: Locale }) {
  const t = T[lang];
  const programas = getProgramas(lang).filter((p) => p.nivel === "Maestría" || p.nivel === "Doctorado");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const drawing = useRef(false);
  const hasSign = useRef(false);
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [errMsg, setErrMsg] = useState("");
  const [data, setData] = useState({ nombre: "", curp: "", email: "", whatsapp: "", programa: "", formacion: "", institucionPrevia: "", aceptaReglamento: false, website: "" });

  // Configura el canvas en alta resolución
  useEffect(() => {
    const cv = canvasRef.current; if (!cv) return;
    const ratio = window.devicePixelRatio || 1;
    const rect = cv.getBoundingClientRect();
    cv.width = rect.width * ratio; cv.height = rect.height * ratio;
    const ctx = cv.getContext("2d"); if (!ctx) return;
    ctx.scale(ratio, ratio); ctx.lineWidth = 2.2; ctx.lineCap = "round"; ctx.strokeStyle = "#002460";
  }, []);

  const pos = (e: React.PointerEvent) => {
    const cv = canvasRef.current!; const r = cv.getBoundingClientRect();
    return { x: e.clientX - r.left, y: e.clientY - r.top };
  };
  const start = (e: React.PointerEvent) => { drawing.current = true; hasSign.current = true; const ctx = canvasRef.current!.getContext("2d")!; const p = pos(e); ctx.beginPath(); ctx.moveTo(p.x, p.y); (e.target as Element).setPointerCapture?.(e.pointerId); };
  const move = (e: React.PointerEvent) => { if (!drawing.current) return; const ctx = canvasRef.current!.getContext("2d")!; const p = pos(e); ctx.lineTo(p.x, p.y); ctx.stroke(); };
  const end = () => { drawing.current = false; };
  const clearSign = () => { const cv = canvasRef.current!; cv.getContext("2d")!.clearRect(0, 0, cv.width, cv.height); hasSign.current = false; };

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setErrMsg("");
    if (!hasSign.current) { setErrMsg(t.errFirma); return; }
    if (!data.aceptaReglamento) { setErrMsg(t.errRegla); return; }
    setStatus("sending");
    try {
      const firma = canvasRef.current!.toDataURL("image/png");
      const res = await fetch("/api/inscripcion", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ ...data, firma }) });
      if (!res.ok) throw new Error();
      setStatus("ok");
    } catch { setStatus("error"); setErrMsg(t.err); }
  }

  const field = "w-full rounded-xl border border-ucm-navy/15 bg-white px-4 py-3 text-sm text-ucm-navy outline-none transition focus:border-ucm-blue focus:ring-2 focus:ring-ucm-blue/20";
  const sec = "font-display text-lg font-semibold text-ucm-navy";

  if (status === "ok")
    return (
      <div className="rounded-3xl border border-ucm-blue/20 bg-ucm-ice p-10 text-center shadow-soft">
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-ucm-blue text-white"><Check className="h-8 w-8" /></span>
        <h2 className="mt-5 font-display text-2xl font-semibold text-ucm-navy">{t.okTitle}</h2>
        <p className="mx-auto mt-3 max-w-md text-ucm-navy/65">{t.okDesc}</p>
      </div>
    );

  return (
    <form onSubmit={submit} className="space-y-8 rounded-3xl border border-ucm-navy/8 bg-white p-7 shadow-soft sm:p-9">
      <input type="text" tabIndex={-1} autoComplete="off" value={data.website} onChange={(e) => setData({ ...data, website: e.target.value })} className="hidden" aria-hidden />

      <div>
        <h2 className={sec}>{t.secPersonal}</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2"><label className="mb-1.5 block text-sm font-semibold text-ucm-navy">{t.nombre}</label><input required value={data.nombre} onChange={(e) => setData({ ...data, nombre: e.target.value })} className={field} /></div>
          <div><label className="mb-1.5 block text-sm font-semibold text-ucm-navy">{t.curp}</label><input value={data.curp} onChange={(e) => setData({ ...data, curp: e.target.value })} className={field} maxLength={18} /></div>
          <div><label className="mb-1.5 block text-sm font-semibold text-ucm-navy">{t.whatsapp}</label><input type="tel" required value={data.whatsapp} onChange={(e) => setData({ ...data, whatsapp: e.target.value })} className={field} /></div>
          <div className="sm:col-span-2"><label className="mb-1.5 block text-sm font-semibold text-ucm-navy">{t.email}</label><input type="email" required value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} className={field} /></div>
        </div>
      </div>

      <div>
        <h2 className={sec}>{t.secAcad}</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2"><label className="mb-1.5 block text-sm font-semibold text-ucm-navy">{t.programa}</label>
            <select required value={data.programa} onChange={(e) => setData({ ...data, programa: e.target.value })} className={field}>
              <option value="">{t.elige}</option>
              {programas.map((p) => <option key={p.slug} value={p.nombre}>{p.nombre}</option>)}
            </select>
          </div>
          <div><label className="mb-1.5 block text-sm font-semibold text-ucm-navy">{t.formacion}</label><input value={data.formacion} onChange={(e) => setData({ ...data, formacion: e.target.value })} className={field} placeholder={t.formacionPh} /></div>
          <div><label className="mb-1.5 block text-sm font-semibold text-ucm-navy">{t.institucion}</label><input value={data.institucionPrevia} onChange={(e) => setData({ ...data, institucionPrevia: e.target.value })} className={field} placeholder={t.institucionPh} /></div>
        </div>
      </div>

      <div>
        <h2 className={sec}>{t.secFirma}</h2>
        <p className="mt-1 text-sm text-ucm-navy/55">{t.firmaHint}</p>
        <div className="mt-3">
          <div className="relative overflow-hidden rounded-2xl border border-ucm-navy/15 bg-ucm-ice/40">
            <canvas ref={canvasRef} onPointerDown={start} onPointerMove={move} onPointerUp={end} onPointerLeave={end} className="h-44 w-full touch-none" style={{ touchAction: "none" }} />
            <span className="pointer-events-none absolute bottom-3 left-4 text-xs text-ucm-navy/30">{t.firmaLabel} ✕</span>
          </div>
          <button type="button" onClick={clearSign} className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-ucm-navy/60 transition hover:text-ucm-blue"><Eraser className="h-4 w-4" /> {t.limpiar}</button>
        </div>
        <label className="mt-5 flex items-start gap-3 text-sm text-ucm-navy/80">
          <input type="checkbox" checked={data.aceptaReglamento} onChange={(e) => setData({ ...data, aceptaReglamento: e.target.checked })} className="mt-0.5 h-5 w-5 shrink-0 rounded border-ucm-navy/30 text-ucm-blue" />
          <span>{t.regla} <a href="/reglamento-escolar.pdf" target="_blank" rel="noopener" className="inline-flex items-center gap-1 font-semibold text-ucm-blue hover:underline"><FileText className="h-3.5 w-3.5" /> {t.verRegla}</a></span>
        </label>
      </div>

      {errMsg && <p className="text-sm font-medium text-[#D0021B]">{errMsg}</p>}
      <button type="submit" disabled={status === "sending"} className="btn-primary w-full disabled:opacity-70">
        {status === "sending" ? <><Loader2 className="h-4 w-4 animate-spin" /> {t.enviando}</> : <><Send className="h-4 w-4" /> {t.enviar}</>}
      </button>
      <p className="text-center text-xs text-ucm-navy/45">{t.aviso}</p>
    </form>
  );
}
