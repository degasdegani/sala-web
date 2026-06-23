"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

import { Button } from "@/components/ui/Button";

/**
 * Seção Preços (Etapa G) — modelo "por projeto / sob medida".
 *
 * Header + card destacado com faixas indicativas por pilar e CTA para
 * orçamento (/contato). Sem tabela de planos: cada projeto é orçado sob medida.
 * Header em stagger; card sobe e suas linhas entram em stagger via Framer
 * Motion; congela em prefers-reduced-motion.
 *
 * Preços são placeholders ("a partir de R$ X") — valores reais entram depois.
 */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.08 },
  }),
};

const cardIn: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const rowIn: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const faixas = [
  {
    title: "Sites",
    desc: "Site institucional rápido e medido",
    price: "a partir de R$ X",
  },
  {
    title: "Agendamentos",
    desc: "Sistema de agendamento sob medida",
    price: "a partir de R$ Y",
  },
  {
    title: "Landing Pages",
    desc: "Página de conversão única",
    price: "a partir de R$ Z",
  },
  {
    title: "Automação",
    desc: "Fluxos e integrações entre ferramentas",
    price: "sob consulta",
  },
];

const garantias = [
  "Sem mensalidade surpresa",
  "Escopo combinado antes",
  "Você é dono do código",
];

export function Precos() {
  const reduce = useReducedMotion();

  return (
    <section id="precos" className="scroll-mt-24 py-24 sm:py-28">
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
            Investimento
          </motion.p>

          <motion.h2
            variants={fadeUp}
            custom={1}
            className="mt-4 text-h1 font-black tracking-tight text-ink"
          >
            Cada projeto é único. O orçamento também.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="mt-5 text-lg leading-relaxed text-body"
          >
            Nada de pacote engessado: o valor sai do escopo do seu projeto. Veja
            faixas indicativas e peça um orçamento sem compromisso. (Texto
            placeholder.)
          </motion.p>
        </motion.div>

        {/* Card de faixas + CTA. */}
        <motion.div
          initial={reduce ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardIn}
          className="relative mt-12 overflow-hidden rounded-card border border-subtle bg-surface p-8 shadow-[0_30px_80px_-40px_rgba(0,85,255,0.45)] sm:p-10"
        >
          {/* Glow de acento. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-60 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, color-mix(in srgb, var(--color-blue-electric) 30%, transparent), color-mix(in srgb, var(--color-green-mint) 22%, transparent) 55%, transparent 72%)",
            }}
          />

          <div className="relative grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            {/* Faixas. */}
            <div className="divide-y divide-subtle">
              {faixas.map((f) => (
                <motion.div
                  key={f.title}
                  variants={rowIn}
                  className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0"
                >
                  <div className="min-w-0">
                    <p className="font-semibold text-ink">{f.title}</p>
                    <p className="text-sm text-muted">{f.desc}</p>
                  </div>
                  <p className="shrink-0 text-right font-semibold text-blue-electric">
                    {f.price}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA + garantias. */}
            <motion.div variants={rowIn} className="lg:border-l lg:border-subtle lg:pl-10">
              <ul className="space-y-3">
                {garantias.map((g) => (
                  <li key={g} className="flex items-start gap-3 text-body">
                    <span
                      aria-hidden="true"
                      className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--color-green-mint)_16%,transparent)] text-green-mint"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-3 w-3"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    <span className="text-sm leading-relaxed">{g}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7">
                <Button variant="primary" href="/contato" className="w-full sm:w-auto">
                  Pedir orçamento →
                </Button>
                <p className="mt-3 text-label uppercase text-muted">
                  Resposta em até 1 dia útil
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
