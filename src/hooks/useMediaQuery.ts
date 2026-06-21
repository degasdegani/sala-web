"use client";

import { useEffect, useState } from "react";

/**
 * Hook genérico de media query, seguro para SSR.
 *
 * No servidor (e no primeiro render do cliente) retorna `false` para evitar
 * mismatch de hidratação; o valor real é resolvido no `useEffect` após montar
 * e mantido em sincronia via listener de `change`.
 *
 * Base para useReducedMotion e para breakpoints da cena (mobile leve).
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;

    const mql = window.matchMedia(query);
    setMatches(mql.matches);

    const onChange = (event: MediaQueryListEvent) => setMatches(event.matches);
    mql.addEventListener("change", onChange);

    return () => mql.removeEventListener("change", onChange);
  }, [query]);

  return matches;
}
