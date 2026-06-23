"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";

import { Button } from "@/components/ui/Button";

/**
 * Seção Sobre (Etapa F) — ângulo "retrato + narrativa".
 *
 * À esquerda, retrato do fundador (placeholder em CSS: tile gradiente +
 * monograma; trocar por foto real em public/images/edu.* depois). À direita, a
 * narrativa S.A.L.A. + trajetória do Edu (vendas → backend) e assinatura.
 * Retrato desliza da esquerda, texto entra em stagger; congela em
 * prefers-reduced-motion.
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

const portraitIn: Variants = {
  hidden: { opacity: 0, x: -30 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export function Sobre() {
  const reduce = useReducedMotion();

  return (
    <section id="sobre" className="scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto grid w-full max-w-container items-center gap-12 px-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
        {/* Esquerda — retrato (placeholder). */}
        <motion.div
          initial={reduce ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={portraitIn}
          className="relative mx-auto w-full max-w-sm lg:mx-0"
        >
          {/* Glow azul/roxo atrás. */}
          <div
            aria-hidden="true"
            className="absolute -inset-5 -z-10 rounded-[2.5rem] opacity-70 blur-2xl"
            style={{
              background:
                "radial-gradient(circle at 30% 20%, color-mix(in srgb, var(--color-blue-electric) 32%, transparent), transparent 60%), radial-gradient(circle at 80% 85%, color-mix(in srgb, var(--color-green-mint) 28%, transparent), transparent 62%)",
            }}
          />

          <div className="relative aspect-[4/5] overflow-hidden rounded-card border border-subtle shadow-[0_30px_80px_-30px_rgba(10,37,64,0.4)]">
            {/* Tile gradiente (placeholder até haver foto real). */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(150deg, var(--color-blue-electric), var(--color-green-mint))",
              }}
            />
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(120% 80% at 50% 0%, rgba(255,255,255,0.28), transparent 55%), radial-gradient(100% 80% at 50% 120%, rgba(10,37,64,0.45), transparent 60%)",
              }}
            />

            {/* Marca d'água do símbolo. */}
            <Image
              src="/brand/symbol.png?v=2"
              alt=""
              aria-hidden="true"
              width={300}
              height={329}
              className="absolute -bottom-6 -right-6 h-auto w-44 opacity-15"
            />

            {/* Monograma. */}
            <span className="absolute inset-0 flex items-center justify-center text-[5rem] font-black tracking-tighter text-white/90">
              ED
            </span>

            {/* Selo. */}
            <span className="absolute left-4 top-4 rounded-full bg-white/15 px-3 py-1 text-label uppercase text-white backdrop-blur-sm">
              Fundador
            </span>

            {/* Caption placeholder. */}
            <span className="absolute bottom-4 left-4 text-label uppercase text-white/70">
              Foto em breve
            </span>
          </div>
        </motion.div>

        {/* Direita — narrativa. */}
        <motion.div
          initial={reduce ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p
            variants={fadeUp}
            custom={0}
            className="text-label uppercase text-blue-electric"
          >
            Sobre
          </motion.p>

          <motion.h2
            variants={fadeUp}
            custom={1}
            className="mt-4 text-h1 font-black tracking-tight text-ink"
          >
            Da mesa de vendas ao terminal.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="mt-6 max-w-xl text-lg leading-relaxed text-body"
          >
            A S.A.L.A. nasceu de uma inquietação: por que tão poucos negócios
            têm tecnologia feita sob medida? Antes de escrever código, o Edu
            passou anos em vendas e account management — aprendeu a ouvir o
            cliente antes de aprender a servi-lo. (Texto placeholder.)
          </motion.p>

          <motion.p
            variants={fadeUp}
            custom={3}
            className="mt-4 max-w-xl text-lg leading-relaxed text-body"
          >
            Hoje, como dev backend, ele constrói com os dois lados na cabeça: a
            régua técnica de quem entrega produto e a empatia de quem já esteve
            do outro lado da mesa. A S.A.L.A. é a casa onde essas duas naturezas
            se encontram. (Texto placeholder.)
          </motion.p>

          <motion.p
            variants={fadeUp}
            custom={4}
            className="mt-8 text-base font-semibold text-ink"
          >
            — Edu · fundador da S.A.L.A.
          </motion.p>

          <motion.div variants={fadeUp} custom={5} className="mt-8">
            <Button variant="outline" href="/sobre">
              Conhecer a história
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
