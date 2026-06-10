import type { Metadata } from "next";
import Claustro from "@/screens/Claustro";

export const metadata: Metadata = {
  title: "Faculty — Active judges, executives and doctors",
  description: "Meet UCM's faculty: Judiciary judges in the Master's in Oral Trials and business executives in the Executive Management master's. Real-world experience in the classroom.",
  alternates: { canonical: "/en/claustro-docente", languages: { es: "/claustro-docente", en: "/en/claustro-docente" } },
};

export default function Page() {
  return <Claustro lang="en" />;
}
