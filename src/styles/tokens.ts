/**
 * Espelho TS dos design tokens (CLAUDE.md §2.1 / globals.css).
 *
 * three.js não lê CSS custom properties, então cores usadas em materiais,
 * luzes e backgrounds da cena 3D vêm daqui. A fonte canônica para o DOM
 * continua sendo `:root` em globals.css — manter os dois em sincronia.
 */
export const tokens = {
  blackPure: "#000000",
  blackSoft: "#0A0A0A",
  blackElevated: "#111111",
  whitePure: "#FFFFFF",
  grayLight: "#E5E3E5",
  grayMid: "#B3B3B3",
  blueElectric: "#00A3FF",
  greenMint: "#00FFB2",
} as const;

export type Tokens = typeof tokens;
