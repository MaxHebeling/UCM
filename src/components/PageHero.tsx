import Image from "next/image";

export default function PageHero({
  eyebrow,
  title,
  desc,
  image,
  imageAlt,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  desc?: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ucm-navyDk pt-36 pb-16 text-white sm:pt-44 sm:pb-20">
      {image ? (
        <>
          <Image src={image} alt={imageAlt ?? ""} fill priority className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-ucm-navyDk/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-ucm-navyDk via-ucm-navyDk/55 to-ucm-navyDk/40" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-ucm-gradient opacity-90" />
          <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_85%_-10%,rgba(96,180,216,0.4),transparent)]" />
        </>
      )}
      <div className="container-ucm relative">
        {eyebrow && <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-ucm-skyLt ring-1 ring-white/20">{eyebrow}</span>}
        <h1 className="title-display mt-5 max-w-3xl text-4xl text-white sm:text-5xl lg:text-6xl">{title}</h1>
        {desc && <p className="mt-5 max-w-2xl text-lg text-white/85 [text-align:left]">{desc}</p>}
      </div>
      <div className="absolute inset-x-0 bottom-0 h-12 bg-white [clip-path:ellipse(75%_100%_at_50%_100%)]" />
    </section>
  );
}
