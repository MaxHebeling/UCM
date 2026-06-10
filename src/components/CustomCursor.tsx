"use client";
import { useEffect, useRef, useState } from "react";

// Cursor personalizado: un anillo que sigue al puntero (con inercia) y un punto exacto.
// Crece sobre elementos interactivos. Solo en desktop con puntero fino; respeta reduced-motion.
export default function CustomCursor() {
  const ring = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);
    document.body.classList.add("has-custom-cursor");

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ringPos = { ...pos };
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      pos.x = e.clientX; pos.y = e.clientY;
      if (dot.current) dot.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%,-50%)`;
      const t = e.target as HTMLElement;
      const interactive = !!t.closest("a, button, [role='button'], input, textarea, select, summary, .group");
      ring.current?.classList.toggle("cursor-active", interactive);
    };
    const loop = () => {
      ringPos.x += (pos.x - ringPos.x) * 0.18;
      ringPos.y += (pos.y - ringPos.y) * 0.18;
      if (ring.current) ring.current.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0) translate(-50%,-50%)`;
      raf = requestAnimationFrame(loop);
    };
    const onLeave = () => { if (ring.current) ring.current.style.opacity = "0"; if (dot.current) dot.current.style.opacity = "0"; };
    const onEnter = () => { if (ring.current) ring.current.style.opacity = "1"; if (dot.current) dot.current.style.opacity = "1"; };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(raf);
      document.body.classList.remove("has-custom-cursor");
    };
  }, []);

  if (!enabled) return null;
  return (
    <>
      <div ref={ring} className="cursor-ring pointer-events-none fixed left-0 top-0 z-[9999] h-9 w-9 rounded-full border border-ucm-blue/70 transition-[width,height,background-color,border-color] duration-200 mix-blend-difference" />
      <div ref={dot} className="pointer-events-none fixed left-0 top-0 z-[9999] h-1.5 w-1.5 rounded-full bg-ucm-blue mix-blend-difference" />
      <style>{`.cursor-ring.cursor-active{width:3.25rem;height:3.25rem;background:rgba(96,180,216,0.18);border-color:#60B4D8}`}</style>
    </>
  );
}
