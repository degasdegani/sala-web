"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import Image from "next/image";

import { Button } from "@/components/ui/Button";
import styles from "./Hero.module.css";

/**
 * Hero institucional (Etapa B v2). Tela cheia (100vh), duas colunas: à esquerda
 * texto + CTAs; à direita o símbolo animado (float + rotação suave) sobre o mesh
 * gradient saturado. Entrada em stagger via delay por índice
 * (eyebrow → headline → subcopy → CTAs → imagem). Congela em reduced-motion.
 */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.1 },
  }),
};

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Mesh gradient (saturado à direita, dissolve à esquerda). */}
      <div className={styles.mesh} aria-hidden="true">
        <div className={`${styles.blob} ${styles.b1}`} />
        <div className={`${styles.blob} ${styles.b2}`} />
        <div className={`${styles.blob} ${styles.b3}`} />
        <div className={`${styles.blob} ${styles.b4}`} />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-container items-center gap-12 px-6 py-24 lg:grid-cols-2">
        {/* Esquerda — texto + CTAs. */}
        <div>
          <motion.p
            variants={fadeUp}
            custom={0}
            initial="hidden"
            animate="show"
            className="mb-6 text-label uppercase text-muted"
          >
            Estúdio de tecnologia · Brasil
          </motion.p>

          <motion.h1
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate="show"
            className="text-[clamp(2.75rem,7vw,6rem)] font-black leading-[0.98] tracking-[-0.03em] text-[#0A1628]"
          >
            A casa por trás dos seus{" "}
            <span className="bg-gradient-to-r from-blue-electric to-green-mint bg-clip-text text-transparent">
              produtos digitais.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate="show"
            className="mt-8 max-w-xl text-lg leading-relaxed text-body"
          >
            Sites, Agendamentos, Landing Pages e Automação — construídos como
            produtos: rápidos, medidos e feitos para crescer.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={3}
            initial="hidden"
            animate="show"
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button variant="primary" href="/contato">
              Iniciar projeto
            </Button>
            <Button variant="outline" href="/#solucoes">
              Ver soluções
            </Button>
          </motion.div>
        </div>

        {/* Direita — símbolo animado (float + rotação suave). */}
        <motion.div
          variants={fadeUp}
          custom={4}
          initial="hidden"
          animate="show"
          className="flex justify-center lg:justify-end"
        >
          <motion.div
            animate={reduce ? undefined : { y: [0, -16, 0], rotate: [0, 2.5, 0, -2.5, 0] }}
            transition={
              reduce ? undefined : { duration: 9, repeat: Infinity, ease: "easeInOut" }
            }
          >
            <Image
              src="/brand/symbol.png?v=2"
              alt="S.A.L.A"
              width={477}
              height={523}
              priority
              className="h-auto w-[min(400px,80vw)] drop-shadow-[0_30px_80px_rgba(0,85,255,0.35)]"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
