"use client";
import { useRef, useState, useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";

// Envuelve cualquier elemento (botón/CTA) para darle un sutil efecto magnético al cursor.
export default function Magnetic({ children, strength = 0.35, className = "" }: { children: React.ReactNode; strength?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const reduced = useReducedMotion();

  const onMove = useCallback((e: React.MouseEvent) => {
    if (reduced || !ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    setPos({ x: (e.clientX - left - width / 2) * strength, y: (e.clientY - top - height / 2) * strength });
  }, [reduced, strength]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={pos}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}
