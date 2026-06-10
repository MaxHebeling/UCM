import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Universidad Cultural Metropolitana",
    short_name: "UCM",
    description: "Universidad con Validez Oficial SEP (RVOE) en Tampico: preparatoria, licenciaturas, maestrías y doctorado.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#002460",
    icons: [
      { src: "/web-app-manifest-192x192.png", sizes: "192x192", type: "image/png", purpose: "maskable" },
      { src: "/web-app-manifest-512x512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
