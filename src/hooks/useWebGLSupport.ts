"use client";

import { useEffect, useState } from "react";

/**
 * Detecta suporte a WebGL no cliente.
 *
 * Retorna:
 *  - `null`  → ainda não determinado (servidor / primeiro render). Tratar como
 *              "não renderizar 3D ainda".
 *  - `true`  → contexto WebGL disponível.
 *  - `false` → sem WebGL; a cena deve cair no fallback 2D.
 *
 * A checagem cria um contexto descartável uma única vez, após montar.
 */
export function useWebGLSupport(): boolean | null {
  const [supported, setSupported] = useState<boolean | null>(null);

  useEffect(() => {
    setSupported(detectWebGL());
  }, []);

  return supported;
}

function detectWebGL(): boolean {
  if (typeof window === "undefined") return false;

  try {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl2") ??
      canvas.getContext("webgl") ??
      canvas.getContext("experimental-webgl");

    return gl instanceof WebGLRenderingContext || gl instanceof WebGL2RenderingContext;
  } catch {
    return false;
  }
}
