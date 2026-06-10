"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Anima un valor numérico de 0 a su cifra final cuando entra al viewport.
 * Acepta formatos como "234", "+1,519", "16", "+5,840" — conserva prefijo,
 * separador de miles y sufijo.
 */
export default function CountUp({ value, duration = 1800 }: { value: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  const started = useRef(false);

  useEffect(() => {
    const match = value.match(/^([^\d]*)([\d,\.]+)(.*)$/);
    if (!match) return; // valor no numérico (ej. "RVOE"): se muestra tal cual

    const [, prefix, numStr, suffix] = match;
    const target = parseInt(numStr.replace(/[,\.]/g, ""), 10);
    if (isNaN(target)) return;
    const useThousands = numStr.includes(",");

    setDisplay(`${prefix}0${suffix}`);

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || started.current) return;
        started.current = true;
        const t0 = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - t0) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
          const current = Math.round(target * eased);
          const formatted = useThousands ? current.toLocaleString("en-US") : String(current);
          setDisplay(`${prefix}${formatted}${suffix}`);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  return <span ref={ref}>{display}</span>;
}
