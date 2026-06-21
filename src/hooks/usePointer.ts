"use client";

import { useEffect, useRef } from "react";

export interface PointerRef {
  x: number;
  y: number;
}

/**
 * Posição do cursor normalizada (-1..1), exposta como ref mutável.
 *
 * Vive em ref — não em state nem no Zustand — porque alimenta o parallax a cada
 * frame: guardá-la em estado React dispararia re-render a cada movimento do
 * mouse (decisão de perf registrada na Fase 1.2).
 *
 * O listener é global (window), não no canvas: o wrapper do <Canvas> tem
 * pointer-events:none, então é em window que o movimento chega — e assim o
 * parallax acompanha o cursor em toda a viewport.
 */
export function usePointer() {
  const pointer = useRef<PointerRef>({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const onMove = (event: PointerEvent) => {
      pointer.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      // y invertido: tela cresce para baixo, espaço 3D cresce para cima.
      pointer.current.y = -((event.clientY / window.innerHeight) * 2 - 1);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return pointer;
}
