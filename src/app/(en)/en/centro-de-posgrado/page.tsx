import type { Metadata } from "next";
import CentroPosgrado from "@/screens/CentroPosgrado";

export const metadata: Metadata = {
  title: "Graduate Center — Master's & Doctorate with RVOE",
  description: "UCM's Graduate Center: master's and doctoral programs in an executive format, officially recognized by the SEP, for professionals who want to grow without pausing their career.",
  alternates: { canonical: "/en/centro-de-posgrado", languages: { es: "/centro-de-posgrado", en: "/en/centro-de-posgrado", "x-default": "/centro-de-posgrado" } },
};

export default function Page() {
  return <CentroPosgrado lang="en" />;
}
