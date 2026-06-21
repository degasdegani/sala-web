"use client";

import "lenis/dist/lenis.css";
import { ReactLenis } from "lenis/react";

/**
 * Smooth scroll global (Lenis) montado no root.
 * Usa o wrapper oficial lenis/react, que cuida do loop rAF internamente
 * e expõe useLenis()/ref — usado para sincronizar com GSAP ScrollTrigger
 * nas Fases 3/8.
 *
 * TODO (Fase 8): desativar smoothWheel quando prefers-reduced-motion: reduce.
 */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.1, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
