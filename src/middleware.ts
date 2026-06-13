import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Mientras el sitio viva en el preview de Vercel (dominio aún no conectado),
// evitamos que Google indexe la versión *.vercel.app. Cuando se conecte
// ucmac.edu.mx, el dominio real queda indexable normalmente.
export function middleware(req: NextRequest) {
  const host = req.headers.get("host") || "";
  const res = NextResponse.next();
  if (!host.includes("ucmac.edu.mx")) {
    res.headers.set("X-Robots-Tag", "noindex, nofollow");
  }
  return res;
}

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|svg|webp|pdf|xml|txt|ico)$).*)",
};
