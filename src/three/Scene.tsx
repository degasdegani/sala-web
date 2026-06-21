"use client";

import { Canvas } from "@react-three/fiber";
import { PerformanceMonitor } from "@react-three/drei";
import { Suspense, useEffect } from "react";

import { Experience } from "./Experience";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useWebGLSupport } from "@/hooks/useWebGLSupport";
import { useSceneStore } from "@/store/useSceneStore";

/**
 * Raiz da cena 3D (CLAUDE.md §1 — "Canvas montado uma única vez no layout").
 *
 * Responsabilidades desta etapa (Fase 1.3):
 *  - decidir SE o Canvas monta (suporte a WebGL) e prover fallback 2D;
 *  - configurar dpr adaptativo + PerformanceMonitor (rebaixa qualidade em runtime);
 *  - bridge DOM → store de prefers-reduced-motion;
 *  - Suspense para o conteúdo da cena (Experience entra na 1.4).
 *
 * O conteúdo abaixo é um placeholder visível para confirmar a montagem; será
 * substituído por <Experience /> (1.4) e pelo objeto central + partículas (1.5).
 */
export function Scene() {
  const webgl = useWebGLSupport();

  // Bridge DOM → store: mantém o flag de reduced-motion acessível de dentro
  // do Canvas sem cada mesh assinar matchMedia por conta própria.
  const reducedMotion = useReducedMotion();
  const setReducedMotion = useSceneStore((s) => s.setReducedMotion);
  useEffect(() => {
    setReducedMotion(reducedMotion);
  }, [reducedMotion, setReducedMotion]);

  const setQuality = useSceneStore((s) => s.setQuality);

  // null = indeterminado (SSR / 1º render): não montar o Canvas — evita SSR de
  // WebGL e o flash de fallback. O fundo preto do body cobre esse intervalo.
  if (webgl === null) return null;

  // Sem WebGL: fallback 2D estático (void com leve glow da marca).
  if (webgl === false) return <SceneFallback />;

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none" aria-hidden="true">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 6], fov: 35 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <PerformanceMonitor onDecline={() => setQuality("low")}>
          <Suspense fallback={null}>
            <Experience />
          </Suspense>
        </PerformanceMonitor>
      </Canvas>
      <SceneVignette />
    </div>
  );
}

/**
 * Vinheta como overlay DOM (não pós-processamento GPU): escurece as bordas em
 * direção ao centro, reforçando o "void" sem custo de render loop. Token via
 * color-mix sobre a CSS var (fonte única em globals.css).
 */
function SceneVignette() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0"
      style={{
        backgroundImage:
          "radial-gradient(ellipse at center, transparent 55%, color-mix(in srgb, var(--color-black-pure) 65%, transparent) 100%)",
      }}
    />
  );
}

/**
 * Fallback 2D para ambientes sem WebGL: o "void" preto com um glow sutil da
 * marca, mantendo a identidade sem custo de GPU. Tokens via color-mix sobre as
 * CSS vars (fonte única em globals.css).
 */
function SceneFallback() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 bg-black-pure"
      style={{
        backgroundImage:
          "radial-gradient(60% 50% at 50% 45%, color-mix(in srgb, var(--color-blue-electric) 10%, transparent), transparent 70%)",
      }}
    />
  );
}
