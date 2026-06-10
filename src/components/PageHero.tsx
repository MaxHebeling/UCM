export default function PageHero({
  eyebrow,
  title,
  desc,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  desc?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ucm-navyDk pt-36 pb-16 text-white sm:pt-44 sm:pb-20">
      <div className="absolute inset-0 bg-ucm-gradient opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_85%_-10%,rgba(96,180,216,0.4),transparent)]" />
      <div className="container-ucm relative">
        {eyebrow && <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-ucm-skyLt ring-1 ring-white/20">{eyebrow}</span>}
        <h1 className="title-display mt-5 max-w-3xl text-4xl text-white sm:text-5xl lg:text-6xl">{title}</h1>
        {desc && <p className="mt-5 max-w-2xl text-lg text-white/80">{desc}</p>}
      </div>
      <div className="absolute inset-x-0 bottom-0 h-12 bg-white [clip-path:ellipse(75%_100%_at_50%_100%)]" />
    </section>
  );
}
