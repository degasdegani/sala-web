"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";

import { BrowserFrame } from "@/components/ui/BrowserFrame";

/**
 * Seção Mercado (Etapa D) — ângulo "contexto + prova (LIVO)".
 *
 * Duas colunas: à esquerda a dor do setor + CTA para o case; à direita um
 * BrowserFrame com UI fake de agenda (placeholder até haver screenshot real do
 * LIVO em public/images). Frame com glow azul/roxo e leve perspectiva 3D no
 * desktop. Entrada via Framer Motion (texto staggered, frame desliza da
 * direita); congela em prefers-reduced-motion.
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

const frameIn: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut", delay: 0.1 },
  },
};

const bullets = [
  "Agenda online 24/7, sem fricção para o cliente",
  "Menos no-show, mais cadeira ocupada",
  "Construído como produto — rápido e medido",
];

const agenda = [
  { time: "09:00", name: "Lucas Almeida", service: "Corte + barba" },
  { time: "10:30", name: "Rafael Souza", service: "Corte degradê" },
  { time: "13:00", name: "Marina Dias", service: "Coloração" },
  { time: "15:30", name: "Pedro Henrique", service: "Barba" },
];

export function Mercado() {
  const reduce = useReducedMotion();

  return (
    <section id="mercado" className="scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto grid w-full max-w-container items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        {/* Esquerda — contexto + CTA. */}
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
            O contexto
          </motion.p>

          <motion.h2
            variants={fadeUp}
            custom={1}
            className="mt-4 text-h1 font-black tracking-tight text-ink"
          >
            O mercado pediu. A gente construiu.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="mt-5 max-w-xl text-lg leading-relaxed text-body"
          >
            Barbearias e negócios de serviço perdem cliente todo dia para a
            agenda no caderno e no WhatsApp. A S.A.L.A. transformou essa dor em
            produto: o LIVO, um SaaS de agendamento já em produção. (Texto
            placeholder.)
          </motion.p>

          <motion.ul
            variants={fadeUp}
            custom={3}
            className="mt-8 space-y-3"
          >
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-body">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-green-mint"
                />
                <span className="text-base leading-relaxed">{b}</span>
              </li>
            ))}
          </motion.ul>

          <motion.div variants={fadeUp} custom={4} className="mt-8">
            <Link
              href="/sites"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-electric"
            >
              <span className="transition-transform duration-200 hover:translate-x-0.5">
                →
              </span>
              Ver o case LIVO
            </Link>
            <p className="mt-3 text-label uppercase text-muted">
              LIVO · em produção em livobarber.com.br
            </p>
          </motion.div>
        </motion.div>

        {/* Direita — frame do produto com glow + perspectiva. */}
        <motion.div
          initial={reduce ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={frameIn}
          className="relative"
        >
          {/* Glow azul/roxo atrás do frame. */}
          <div
            aria-hidden="true"
            className="absolute -inset-6 -z-10 rounded-[2.5rem] opacity-70 blur-2xl"
            style={{
              background:
                "radial-gradient(circle at 28% 22%, color-mix(in srgb, var(--color-blue-electric) 32%, transparent), transparent 60%), radial-gradient(circle at 82% 82%, color-mix(in srgb, var(--color-green-mint) 28%, transparent), transparent 62%)",
            }}
          />

          <div className="lg:[transform:perspective(1400px)_rotateY(-7deg)_rotateX(1.5deg)]">
            <motion.div
              animate={reduce ? undefined : { y: [0, -14, 0] }}
              transition={
                reduce
                  ? undefined
                  : { duration: 6.5, repeat: Infinity, ease: "easeInOut" }
              }
            >
              <BrowserFrame url="livobarber.com.br">
              {/* Placeholder: UI fake de agenda (trocar por screenshot real). */}
              <div className="absolute inset-0 flex flex-col gap-3 bg-bg p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-ink">
                      Agenda · Hoje
                    </p>
                    <p className="text-[10px] text-muted">Terça, 23 de junho</p>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-[color-mix(in_srgb,var(--color-green-mint)_14%,transparent)] px-2 py-1 text-[10px] font-medium text-green-mint">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-mint" />
                    online
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  {agenda.map((a) => (
                    <div
                      key={a.time}
                      className="flex items-center gap-3 rounded-xl border border-subtle bg-surface px-3 py-2.5"
                    >
                      <span className="rounded-lg bg-[color-mix(in_srgb,var(--color-blue-electric)_12%,transparent)] px-2 py-1 text-[10px] font-semibold text-blue-electric">
                        {a.time}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-xs font-semibold text-ink">
                          {a.name}
                        </p>
                        <p className="truncate text-[10px] text-muted">
                          {a.service}
                        </p>
                      </div>
                      <span
                        aria-hidden="true"
                        className="h-2 w-2 rounded-full bg-green-mint"
                      />
                    </div>
                  ))}
                </div>
              </div>
              </BrowserFrame>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
