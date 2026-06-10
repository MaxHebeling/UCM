import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  desc,
  center,
  light,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  desc?: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <Reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className={`title-display mt-4 text-3xl sm:text-4xl lg:text-[2.75rem] ${light ? "text-white" : "text-ucm-navy"}`}>{title}</h2>
      {desc && <p className={`mt-4 text-lg ${light ? "text-white/75" : "text-ucm-navy/65"}`}>{desc}</p>}
    </Reveal>
  );
}
