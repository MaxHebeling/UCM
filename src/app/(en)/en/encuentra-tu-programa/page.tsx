import type { Metadata } from "next";
import QuizScreen from "@/screens/Quiz";

export const metadata: Metadata = {
  title: "Find your ideal program — UCM career quiz",
  description: "Answer 4 questions and discover which UCM program is for you: high school, bachelor's, master's or doctorate with official SEP recognition in Tampico.",
  alternates: { canonical: "/en/encuentra-tu-programa", languages: { es: "/encuentra-tu-programa", en: "/en/encuentra-tu-programa" } },
};

export default function Page() {
  return <QuizScreen lang="en" />;
}
