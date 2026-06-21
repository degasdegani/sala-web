"use client";

import { useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

import { useSceneStore } from "@/store/useSceneStore";
import { tokens } from "@/styles/tokens";

/** Contagem de partículas por nível de qualidade (mobile/baixa GPU usa low). */
const COUNT: Record<"high" | "low", number> = { high: 1200, low: 400 };
/** Aresta do cubo onde as partículas são distribuídas. */
const FIELD = 16;
/** Velocidade do drift rotacional do campo (rad/s). */
const DRIFT_SPEED = 0.02;

/**
 * Campo de partículas / poeira volumétrica sutil (CLAUDE.md §1 — "ambiente").
 *
 * - contagem dirigida por `quality` no store (rebaixável em runtime pelo
 *   PerformanceMonitor); a geometria é recriada ao mudar de nível;
 * - drift rotacional lento, congelado em reduced-motion;
 * - blending aditivo + opacidade baixa = brilho de poeira sobre o void.
 */
export function Particles() {
  const quality = useSceneStore((s) => s.quality);
  const reducedMotion = useSceneStore((s) => s.reducedMotion);
  const ref = useRef<THREE.Points>(null);

  const geometry = useMemo(() => {
    const count = COUNT[quality];
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * FIELD;
      positions[i * 3 + 1] = (Math.random() - 0.5) * FIELD;
      positions[i * 3 + 2] = (Math.random() - 0.5) * FIELD;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geo;
  }, [quality]);

  // Libera a geometria antiga ao trocar de qualidade / desmontar.
  useEffect(() => () => geometry.dispose(), [geometry]);

  useFrame((_, delta) => {
    if (reducedMotion || !ref.current) return;
    ref.current.rotation.y += delta * DRIFT_SPEED;
  });

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial
        size={0.02}
        sizeAttenuation
        color={tokens.grayLight}
        transparent
        opacity={0.5}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
