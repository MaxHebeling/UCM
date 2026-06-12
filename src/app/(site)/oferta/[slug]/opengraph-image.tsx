import { ImageResponse } from "next/og";
import { programas } from "@/data/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return programas.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: { slug: string } }) {
  const p = programas.find((x) => x.slug === params.slug);
  const nombre = p?.nombre ?? "Universidad Cultural Metropolitana";
  const nivel = p?.nivel ?? "";
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "70px", background: "linear-gradient(135deg,#002460 0%,#0C78B4 60%,#0A6299 100%)", color: "white", fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div style={{ fontSize: 26, fontWeight: 700, letterSpacing: 4, color: "#A9D6EC" }}>U C M</div>
          <div style={{ fontSize: 22, color: "rgba(255,255,255,0.7)" }}>Universidad Cultural Metropolitana</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {nivel ? <div style={{ display: "flex" }}><div style={{ fontSize: 24, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#0A2A4A", background: "#A9D6EC", padding: "8px 20px", borderRadius: 999 }}>{nivel}</div></div> : null}
          <div style={{ fontSize: nombre.length > 45 ? 56 : 68, fontWeight: 800, lineHeight: 1.05, marginTop: 24, maxWidth: 1000 }}>{nombre}</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "20px", fontSize: 26 }}>
          <div style={{ width: 60, height: 5, background: "#D4AF37" }} />
          <div style={{ color: "rgba(255,255,255,0.9)" }}>Validez Oficial SEP (RVOE) · Tampico, Tamaulipas</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
