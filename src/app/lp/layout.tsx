import Image from "next/image";
import { Phone } from "lucide-react";
import { inst } from "@/data/site";

export default function LpLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="border-b border-ucm-navy/8 bg-white">
        <div className="container-ucm flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <Image src="/brand/ucm-logo.png" alt="UCM" width={44} height={44} className="object-contain" />
            <span className="font-display text-sm font-semibold leading-tight text-ucm-navy">
              Universidad Cultural<br />Metropolitana
            </span>
          </div>
          <a href={`tel:${inst.phoneIntl}`} className="flex items-center gap-2 text-sm font-semibold text-ucm-blue">
            <Phone className="h-4 w-4" /> {inst.phone}
          </a>
        </div>
      </header>
      <main>{children}</main>
      <footer className="border-t border-ucm-navy/8 bg-white py-6 text-center text-xs text-ucm-navy/50">
        <p>© {new Date().getFullYear()} {inst.legal} · RVOE SEP {inst.rvoe} · CCT {inst.cct}</p>
        <p className="mt-1"><a href="/aviso-de-privacidad" className="hover:underline">Aviso de privacidad</a></p>
      </footer>
    </>
  );
}
