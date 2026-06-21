"use client";

import { Bloom, EffectComposer } from "@react-three/postprocessing";

import { CentralObject } from "./objects/CentralObject";
import { Particles } from "./objects/Particles";
import { useSceneStore } from "@/store/useSceneStore";
import { tokens } from "@/styles/tokens";

/**
 * Conteúdo da cena 3D (CLAUDE.md §1 — "a câmera vive dentro de um volume preto
 * absoluto"). Lido pelo <Canvas> em Scene.tsx.
 *
 * Fase 1.4 — ambiente base:
 *  - background "void" (preto puro) + fog sutil para dar profundidade ao fundo;
 *  - rig de luz "néon contido sobre preto": ambient muito baixa + dois point
 *    lights nas cores da marca (azul/verde-água) que farão o rim do objeto
 *    metálico real (1.5).
 *
 * O objeto central (CentralObject) ainda é placeholder — a Fita-S definitiva
 * entra na Fase 2. O <Environment> (reflexos PBR) fica para quando houver
 * material metálico de fato, evitando fetch de HDR agora.
 *
 * Bloom "contido": threshold alto + intensidade baixa, pegando só o emissivo do
 * objeto (não a cena toda). Só montado em quality "high" — em "low" o passe de
 * pós-processamento full-screen é pulado inteiro.
 */
export function Experience() {
  const quality = useSceneStore((s) => s.quality);

  return (
    <>
      <color attach="background" args={[tokens.blackPure]} />
      <fog attach="fog" args={[tokens.blackPure, 8, 22]} />

      {/* Néon contido: base escura + dois acentos de cor opostos. */}
      <ambientLight intensity={0.15} />
      <pointLight position={[4, 3, 5]} intensity={45} color={tokens.blueElectric} />
      <pointLight position={[-5, -2, 2]} intensity={28} color={tokens.greenMint} />

      <CentralObject />
      <Particles />

      {quality === "high" && (
        <EffectComposer>
          <Bloom
            intensity={0.6}
            luminanceThreshold={0.6}
            luminanceSmoothing={0.2}
            mipmapBlur
          />
        </EffectComposer>
      )}
    </>
  );
}
