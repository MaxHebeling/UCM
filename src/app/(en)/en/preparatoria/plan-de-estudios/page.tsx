import type { Metadata } from "next";
import Plan from "@/screens/Plan";

export const metadata: Metadata = {
  title: "Curriculum — UCM High School",
  description: "Discover UCM's complete high-school curriculum. Prepare with a well-rounded education that strengthens your academic skills and propels you toward university success.",
  alternates: { canonical: "/en/preparatoria/plan-de-estudios", languages: { es: "/preparatoria/plan-de-estudios", en: "/en/preparatoria/plan-de-estudios" } },
};

export default function Page() {
  return <Plan lang="en" />;
}
