"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { useRef, type CSSProperties, type MouseEvent, type ReactNode } from "react";

/**
 * Card de pilar da seção Soluções (Etapa C).
 *
 * Acento azul (Sites/Agendamentos) ou roxo (Landing Pages/Automação) na
 * borda-top, badge e sombra de hover. Entrada controlada pelo container pai
 * (stagger via `staggerChildren`). Hover eleva 4px; o spotlight segue o cursor
 * via CSS vars (`--mx`/`--my`) — sem re-render React. Tudo congela em
 * `reduce` (prefers-reduced-motion).
 */

type Accent = "blue" | "purple";

interface SolucaoCardProps {
  accent: Accent;
  icon: ReactNode;
  title: string;
  description: string;
  href: string;
  reduce: boolean;
}

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const accentMap: Record<
  Accent,
  { bar: string; badge: string; shadow: string; cta: string; cssVar: string }
> = {
  blue: {
    bar: "bg-blue-electric",
    badge:
      "bg-[color-mix(in_srgb,var(--color-blue-electric)_12%,transparent)] text-blue-electric",
    shadow: "hover:shadow-[0_18px_40px_-16px_var(--color-blue-electric)]",
    cta: "text-blue-electric",
    cssVar: "var(--color-blue-electric)",
  },
  purple: {
    bar: "bg-green-mint",
    badge:
      "bg-[color-mix(in_srgb,var(--color-green-mint)_12%,transparent)] text-green-mint",
    shadow: "hover:shadow-[0_18px_40px_-16px_var(--color-green-mint)]",
    cta: "text-green-mint",
    cssVar: "var(--color-green-mint)",
  },
};

export function SolucaoCard({
  accent,
  icon,
  title,
  description,
  href,
  reduce,
}: SolucaoCardProps) {
  const a = accentMap[accent];
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--mx", `${e.clientX - r.left}px`);
    ref.current.style.setProperty("--my", `${e.clientY - r.top}px`);
  }

  return (
    <motion.div
      ref={ref}
      variants={cardVariant}
      whileHover={reduce ? undefined : { y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      onMouseMove={handleMove}
      style={{ "--accent": a.cssVar } as CSSProperties}
      className={`group relative flex flex-col overflow-hidden rounded-card border border-subtle bg-surface transition-shadow duration-300 ${a.shadow}`}
    >
      {/* Acento de cor na borda-top. */}
      <div className={`h-1 w-full ${a.bar}`} aria-hidden="true" />

      {/* Spotlight radial seguindo o cursor (só fora de reduced-motion). */}
      {!reduce && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(240px circle at var(--mx, 50%) var(--my, 0%), color-mix(in srgb, var(--accent) 16%, transparent), transparent 72%)",
          }}
        />
      )}

      <div className="relative z-10 flex flex-1 flex-col p-6">
        <div
          className={`mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl ${a.badge}`}
        >
          {icon}
        </div>

        <h3 className="text-lg font-bold text-ink">{title}</h3>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-body">
          {description}
        </p>

        <Link
          href={href}
          className={`mt-6 inline-flex items-center gap-1.5 text-sm font-semibold ${a.cta}`}
        >
          <span className="transition-transform duration-200 group-hover:translate-x-0.5">
            →
          </span>
          Saiba mais
        </Link>
      </div>
    </motion.div>
  );
}
