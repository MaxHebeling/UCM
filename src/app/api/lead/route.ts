import { NextResponse } from "next/server";

// Recepción de leads (plan de estudios, informes, etc.).
// PREPARADO para conectar envío de correo (Resend/SMTP) + CRM/correo administrativo.
// Hoy valida, aplica antispam (honeypot) y registra; devuelve ok.
export async function POST(req: Request) {
  try {
    const data = await req.json();
    // Antispam: campo trampa oculto
    if (data.website) return NextResponse.json({ ok: true });

    const nombre = String(data.nombre ?? "").trim();
    const email = String(data.email ?? "").trim();
    const whatsapp = String(data.whatsapp ?? "").trim();
    const programa = String(data.programa ?? "").trim();
    const tipo = String(data.tipo ?? "informes").trim();

    if (!nombre || !email || !whatsapp) {
      return NextResponse.json({ ok: false, error: "Faltan campos requeridos." }, { status: 400 });
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return NextResponse.json({ ok: false, error: "Correo inválido." }, { status: 400 });
    }

    const lead = { tipo, programa, nombre, email, whatsapp, recibidoEn: new Date().toISOString() };
    // TODO (pendiente de credenciales del cliente):
    //  1) enviar al solicitante el plan de estudios del programa por correo
    //  2) guardar el lead en CRM / correo administrativo (LEADS_WEBHOOK_URL o Resend)
    const hook = process.env.LEADS_WEBHOOK_URL;
    if (hook) {
      await fetch(hook, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(lead) }).catch(() => {});
    } else {
      console.log("[LEAD]", lead);
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Solicitud inválida." }, { status: 400 });
  }
}
