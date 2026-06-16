import type { Metadata } from "next";
import Home from "@/screens/Home";

export const metadata: Metadata = {
  title: { absolute: "University in Tampico with RVOE | UCM" },
  description:
    "Universidad Cultural Metropolitana in Tampico: high school, bachelor's, master's and doctoral programs with official SEP recognition (RVOE). Executive, online and on-campus formats. 18 years shaping professionals.",
  alternates: {
    canonical: "/en",
    languages: { es: "/", en: "/en", "x-default": "/" },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Universidad Cultural Metropolitana",
    title: "University in Tampico with official SEP recognition — UCM",
    description: "High school, bachelor's, master's and doctoral programs with RVOE. Executive, online and on-campus in Tampico.",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <Home lang="en" />;
}
