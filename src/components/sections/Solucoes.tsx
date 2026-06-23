"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

import { SolucaoCard } from "@/components/ui/SolucaoCard";

/**
 * Seção Soluções (Etapa C). Quatro pilares (Sites · Agendamentos · Landing
 * Pages · Automação) em grid responsivo (1→2→4 cols). Header com label,
 * H2 de impacto e subtítulo. Cards entram staggered (esquerda→direita) ao
 * chegar no viewport. Âncora `#solucoes` (CTA "Ver soluções" do Hero).
 *
 * Textos e hrefs são placeholders — copy/rotas reais entram depois.
 */

const headerVariant: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.08 },
  }),
};

const gridVariant: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

type Accent = "blue" | "purple";

interface Pilar {
  accent: Accent;
  title: string;
  description: string;
  href: string;
  icon: ReactNode;
}

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "h-5 w-5",
};

const pilares: Pilar[] = [
  {
    accent: "blue",
    title: "Sites",
    href: "/sites",
    description:
      "Sites institucionais rápidos e medidos, construídos como produto — não como template.",
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18" />
        <path d="M7 6.5h.01M10 6.5h.01" />
      </svg>
    ),
  },
  {
    accent: "blue",
    title: "Agendamentos",
    href: "/sites",
    description:
      "Sistemas de agendamento sob medida, do fluxo do cliente à agenda do negócio.",
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="4" width="18" height="17" rx="2" />
        <path d="M3 9h18" />
        <path d="M8 2v4M16 2v4" />
        <path d="M8 14h.01M12 14h.01M16 14h.01" />
      </svg>
    ),
  },
  {
    accent: "purple",
    title: "Landing Pages",
    href: "/sites",
    description:
      "Páginas de conversão focadas em uma meta, com performance e copy a serviço do clique.",
    icon: (
      <svg {...iconProps}>
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      </svg>
    ),
  },
  {
    accent: "purple",
    title: "Automação",
    href: "/automacao",
    description:
      "Fluxos que conectam suas ferramentas e tiram o trabalho repetitivo das suas mãos.",
    icon: (
      <svg {...iconProps}>
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
];

export function Solucoes() {
  const reduce = useReducedMotion();

  return (
    <section id="solucoes" className="scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto w-full max-w-container px-6">
        {/* Header da seção. */}
        <motion.div
          initial={reduce ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-2xl"
        >
          <motion.p
            variants={headerVariant}
            custom={0}
            className="text-label uppercase text-blue-electric"
          >
            O que fazemos
          </motion.p>

          <motion.h2
            variants={headerVariant}
            custom={1}
            className="mt-4 text-h1 font-black tracking-tight text-ink"
          >
            Tudo o que seu negócio precisa para existir online.
          </motion.h2>

          <motion.p
            variants={headerVariant}
            custom={2}
            className="mt-5 text-lg leading-relaxed text-body"
          >
            Quatro pilares que se conversam — do primeiro acesso do cliente à
            automação dos bastidores. (Texto placeholder.)
          </motion.p>
        </motion.div>

        {/* Grid de cards (stagger esquerda→direita). */}
        <motion.div
          initial={reduce ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={gridVariant}
          className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4"
        >
          {pilares.map((p) => (
            <SolucaoCard key={p.title} {...p} reduce={!!reduce} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
