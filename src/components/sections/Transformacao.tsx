"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

/**
 * Seção Transformação (Etapa E) — ângulo "Antes → Depois".
 *
 * Header + dois painéis pareados: ANTES (apagado, marcadores ×) e DEPOIS
 * (vivo, marcadores ✓ + glow de acento), com um conector de seta no desktop.
 * Painéis deslizam de fora para dentro e os itens entram em stagger via Framer
 * Motion; tudo congela em prefers-reduced-motion.
 *
 * Textos são placeholders — copy real entra depois.
 */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.08 },
  }),
};

const panelLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.07,
      delayChildren: 0.15,
    },
  },
};

const panelRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
};

const itemIn: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const antes = [
  "Agenda no caderno e no WhatsApp",
  "Cliente esperando resposta para marcar",
  "Retrabalho manual e tarefas repetidas",
  "Decisões no achismo, sem dados",
];

const depois = [
  "Agenda online, aberta 24/7",
  "Autoatendimento — o cliente marca sozinho",
  "Automação cuidando do repetitivo",
  "Métricas claras para decidir",
];

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "h-3.5 w-3.5",
};

const XIcon = (
  <svg {...iconProps}>
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

const CheckIcon = (
  <svg {...iconProps}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export function Transformacao() {
  const reduce = useReducedMotion();

  return (
    <section id="transformacao" className="scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto w-full max-w-container px-6">
        {/* Header. */}
        <motion.div
          initial={reduce ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-2xl"
        >
          <motion.p
            variants={fadeUp}
            custom={0}
            className="text-label uppercase text-blue-electric"
          >
            A transformação
          </motion.p>

          <motion.h2
            variants={fadeUp}
            custom={1}
            className="mt-4 text-h1 font-black tracking-tight text-ink"
          >
            Do caos operacional ao piloto automático.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="mt-5 text-lg leading-relaxed text-body"
          >
            O mesmo negócio, antes e depois de existir como produto digital.
            (Texto placeholder.)
          </motion.p>
        </motion.div>

        {/* Painéis Antes / Depois. */}
        <div className="relative mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* ANTES — apagado. */}
          <motion.div
            initial={reduce ? false : "hidden"}
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={panelLeft}
            className="rounded-card border border-subtle bg-[color-mix(in_srgb,var(--color-ink)_4%,var(--color-bg))] p-8"
          >
            <p className="text-label uppercase text-muted">Antes</p>
            <ul className="mt-6 space-y-4">
              {antes.map((t) => (
                <motion.li
                  key={t}
                  variants={itemIn}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--color-ink)_8%,transparent)] text-muted">
                    {XIcon}
                  </span>
                  <span className="text-base leading-relaxed text-muted">
                    {t}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* DEPOIS — vivo, com glow de acento. */}
          <motion.div
            initial={reduce ? false : "hidden"}
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={panelRight}
            className="relative overflow-hidden rounded-card border border-subtle bg-surface p-8 shadow-[0_24px_60px_-30px_rgba(0,85,255,0.45)]"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full opacity-70 blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, color-mix(in srgb, var(--color-blue-electric) 30%, transparent), color-mix(in srgb, var(--color-green-mint) 22%, transparent) 55%, transparent 72%)",
              }}
            />
            <p className="relative text-label uppercase text-blue-electric">
              Depois
            </p>
            <ul className="relative mt-6 space-y-4">
              {depois.map((t) => (
                <motion.li
                  key={t}
                  variants={itemIn}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--color-green-mint)_16%,transparent)] text-green-mint">
                    {CheckIcon}
                  </span>
                  <span className="text-base font-medium leading-relaxed text-ink">
                    {t}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Conector de seta (desktop). */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 hidden h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-subtle bg-surface text-blue-electric shadow-md lg:flex"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
