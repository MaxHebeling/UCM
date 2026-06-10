import type { Metadata } from "next";
import Link from "next/link";
import { Mail, ShieldCheck } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { inst } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Universidad Cultural Metropolitana protects your personal data. Our privacy policy ensures the secure, responsible use of your information.",
  alternates: { canonical: "/en/aviso-de-privacidad", languages: { es: "/aviso-de-privacidad", en: "/en/aviso-de-privacidad" } },
};

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Privacy" title={<>Privacy <span className="text-ucm-skyLt">Policy</span></>} desc="How Universidad Cultural Metropolitana protects and handles your personal data." />
      <section className="container-ucm py-16 sm:py-20">
        <div className="mx-auto max-w-3xl space-y-6 text-ucm-navy/75">
          <div className="flex items-start gap-3 rounded-2xl border border-ucm-blue/20 bg-ucm-ice p-5">
            <ShieldCheck className="mt-0.5 h-6 w-6 shrink-0 text-ucm-blue" />
            <p className="text-sm">
              The full, legally-binding privacy notice is published in Spanish, in accordance with Mexico's Federal Law on the Protection of Personal Data Held by Private Parties.
              The Spanish version prevails. You can read it here:{" "}
              <Link href="/aviso-de-privacidad" className="font-semibold text-ucm-blue hover:underline">Aviso de Privacidad (Spanish)</Link>.
            </p>
          </div>
          <p>Universidad Cultural Metropolitana (UCM) collects the personal data you voluntarily provide — by electronic or written means — to deliver its educational services, keep you informed about programs and activities, and identify you as a student or employee for academic, administrative and financial purposes.</p>
          <p>Your data is handled with the required confidentiality and is not shared or transferred except with your express or tacit consent, or where strictly necessary to comply with applicable law. For minors and persons with disabilities, data is collected solely with the consent of a parent or legal guardian.</p>
          <p><strong>ARCO rights.</strong> You may exercise your rights of Access, Rectification, Cancellation or Objection (ARCO), and revoke your consent, by submitting a request with documentation proving your identity to our Personal Data Protection Department.</p>
          <div className="rounded-2xl border border-ucm-navy/10 bg-white p-6">
            <h2 className="font-display text-lg font-semibold text-ucm-navy">Data controller & contact</h2>
            <p className="mt-2 text-sm">{inst.legal} — {inst.address}.</p>
            <p className="mt-1 text-sm">Phone: {inst.phone}</p>
            <p className="mt-1 flex items-center gap-2 text-sm"><Mail className="h-4 w-4 text-ucm-blue" /> <a href="mailto:soporteucm@ucmac.edu.mx" className="text-ucm-blue hover:underline">soporteucm@ucmac.edu.mx</a></p>
          </div>
          <p className="text-sm text-ucm-navy/55">UCM uses cookies and web beacons to improve your experience; you may disable them in your browser. This policy may change at any time and updates are published at www.ucmac.edu.mx.</p>
        </div>
      </section>
    </>
  );
}
