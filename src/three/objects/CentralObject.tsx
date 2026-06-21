"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

import { usePointer } from "@/hooks/usePointer";
import { useSceneStore } from "@/store/useSceneStore";
import { tokens } from "@/styles/tokens";

/** Velocidade da rotação contínua (rad/s). */
const ROTATION_SPEED = 0.15;
/** Amplitude máxima da inclinação reativa ao cursor (rad). */
const PARALLAX = 0.22;
/** Suavização (lambda) do parallax ao seguir o cursor. */
const PARALLAX_DAMP = 4;

/**
 * Objeto central da cena (CLAUDE.md §1 — "no centro flutua a alma da marca").
 *
 * PLACEHOLDER: a Fita-S definitiva (geometria angulosa de 7 segmentos) entra na
 * Fase 2. Aqui um icosaedro wireframe metálico só valida o comportamento:
 *  - rotação lenta e contínua;
 *  - parallax: inclina suavemente em direção ao cursor ("olha" para o mouse);
 *  - respeita reduced-motion (congela em pose neutra estática).
 *
 * Material já emissivo para casar com o Bloom contido (próximo passo da 1.5).
 */
export function CentralObject() {
  const ref = useRef<THREE.Mesh>(null);
  const pointer = usePointer();
  const reducedMotion = useSceneStore((s) => s.reducedMotion);

  useFrame((_, delta) => {
    const mesh = ref.current;
    if (!mesh || reducedMotion) return;

    // Rotação lenta e contínua no eixo vertical.
    mesh.rotation.y += delta * ROTATION_SPEED;

    // Parallax: inclina em direção ao cursor, com damp para suavidade.
    const targetPitch = pointer.current.y * PARALLAX;
    const targetRoll = pointer.current.x * PARALLAX;
    mesh.rotation.x = THREE.MathUtils.damp(mesh.rotation.x, targetPitch, PARALLAX_DAMP, delta);
    mesh.rotation.z = THREE.MathUtils.damp(mesh.rotation.z, targetRoll, PARALLAX_DAMP, delta);
  });

  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[1.2, 1]} />
      <meshStandardMaterial
        color={tokens.whitePure}
        metalness={0.7}
        roughness={0.25}
        wireframe
        emissive={tokens.blueElectric}
        emissiveIntensity={0.2}
      />
    </mesh>
  );
}
