import type { Metadata } from "next";
import Inscripcion from "@/screens/Inscripcion";

export const metadata: Metadata = {
  title: "Online enrollment — Graduate Center",
  description: "Request your enrollment to UCM's Graduate Center online, with an on-screen handwritten signature. Master's and doctorate with official SEP recognition.",
  alternates: { canonical: "/en/centro-de-posgrado/inscripcion", languages: { es: "/centro-de-posgrado/inscripcion", en: "/en/centro-de-posgrado/inscripcion" } },
  robots: { index: false },
};

export default function Page() {
  return <Inscripcion lang="en" />;
}
