"use client";

import { useMediaQuery } from "./useMediaQuery";

/**
 * `true` quando o usuário pediu menos movimento (prefers-reduced-motion: reduce).
 *
 * Convenção do projeto (CLAUDE.md §7): reduced-motion troca o movimento 3D por
 * um equivalente 2D estático/suave — nunca remove a experiência por completo.
 * A cena lê este flag para congelar rotação/parallax e cortar o campo de
 * partículas animado.
 */
export function useReducedMotion(): boolean {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}
