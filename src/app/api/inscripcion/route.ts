import { NextResponse } from "next/server";

// Solicitud de inscripción en línea (Centro de Posgrado).
// PREPARADO para: almacenamiento seguro, generación de PDF de evidencia,
// envío a correo administrativo y/o CRM. Hoy valida y registra.
export async function POST(req: Request) {
  try {
    const data = await req.json();
    if (data.website) return NextResponse.json({ ok: true }); // honeypot

    const req_ = (v: unknown) => String(v ?? "").trim();
    const nombre = req_(data.nombre);
    const email = req_(data.email);
    const whatsapp = req_(data.whatsapp);
    const programa = req_(data.programa);
    const aceptaReglamento = data.aceptaReglamento === true;
    const firma = req_(data.firma); // dataURL PNG de la firma autógrafa

    if (!nombre || !email || !whatsapp || !programa) {
      return NextResponse.json({ ok: false, error: "Faltan campos requeridos." }, { status: 400 });
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return NextResponse.json({ ok: false, error: "Correo inválido." }, { status: 400 });
    }
    if (!aceptaReglamento) {
      return NextResponse.json({ ok: false, error: "Debes aceptar el reglamento escolar." }, { status: 400 });
    }
    if (!firma || !firma.startsWith("data:image/")) {
      return NextResponse.json({ ok: false, error: "La firma autógrafa es obligatoria." }, { status: 400 });
    }

    const solicitud = {
      tipo: "inscripcion",
      nombre, email, whatsapp, programa,
      curp: req_(data.curp),
      formacion: req_(data.formacion),
      institucionPrevia: req_(data.institucionPrevia),
      aceptaReglamento,
      firmaPresente: true, // no logueamos la imagen completa por privacidad
      recibidoEn: new Date().toISOString(),
    };
    // TODO (pendiente cliente): guardar firma+datos de forma segura, generar PDF de evidencia,
    // notificar al área administrativa y/o CRM.
    const hook = process.env.LEADS_WEBHOOK_URL;
    if (hook) {
      await fetch(hook, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ ...solicitud, firma }) }).catch(() => {});
    } else {
      console.log("[INSCRIPCION]", solicitud);
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Solicitud inválida." }, { status: 400 });
  }
}
