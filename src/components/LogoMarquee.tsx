import Image from "next/image";

const logos = [
  { src: "/respaldos/sep.png", alt: "Secretaría de Educación Pública (SEP)" },
  { src: "/respaldos/cambridge.jpg", alt: "Universidad de Cambridge" },
  { src: "/respaldos/set-tamaulipas.png", alt: "Secretaría de Educación de Tamaulipas" },
  { src: "/respaldos/usicamm.png", alt: "USICAMM" },
  { src: "/respaldos/uat.jpg", alt: "Universidad Autónoma de Tamaulipas" },
  { src: "/respaldos/rvoe.png", alt: "Reconocimiento de Validez Oficial de Estudios" },
];

export default function LogoMarquee() {
  const row = [...logos, ...logos];
  return (
    <div className="marquee-pause relative overflow-hidden">
      {/* difuminado en los bordes */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
      <div className="flex w-max animate-marquee items-center gap-16 py-2" style={{ ["--marquee-duration" as string]: "34s" }}>
        {row.map((l, i) => (
          <div key={i} className="relative h-16 w-32 shrink-0 opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0">
            <Image src={l.src} alt={l.alt} fill className="object-contain" sizes="128px" />
          </div>
        ))}
      </div>
    </div>
  );
}
