import { create } from "zustand";

/**
 * Fonte da verdade do estado da cena 3D (CLAUDE.md §1 — "Zustand é a fonte da
 * verdade do estado da cena").
 *
 * Guarda apenas estado **discreto**: rota ativa, fase do ciclo de vida e flags
 * de qualidade/movimento. Estado contínuo de alta frequência (pointer/parallax,
 * posição de câmera por frame) NÃO vive aqui — fica em refs dentro do `useFrame`
 * para não disparar re-render do React a cada frame.
 *
 * O alvo de câmera por rota (voo coreografado) entra na Fase 3 via CameraRig;
 * por ora `activeRoute` já existe como gancho para essa orquestração.
 */

/** Seções navegáveis, alinhadas às rotas reais do App Router. */
export type SceneRoute = "home" | "sites" | "automacao" | "sobre" | "contato";

/** Ciclo de vida da cena: enquanto carrega assets vs. pronta para interagir. */
export type ScenePhase = "loading" | "ready";

/**
 * Nível de qualidade da cena. Começa em `high`; o PerformanceMonitor (Fase 1.5)
 * e a detecção de mobile (Fase 1.6) podem rebaixar para `low` em runtime,
 * reduzindo dpr, contagem de partículas e detalhe de geometria.
 */
export type QualityTier = "high" | "low";

interface SceneState {
  activeRoute: SceneRoute;
  phase: ScenePhase;
  quality: QualityTier;
  /** Espelha prefers-reduced-motion; sincronizado a partir do hook no DOM. */
  reducedMotion: boolean;

  setActiveRoute: (route: SceneRoute) => void;
  setPhase: (phase: ScenePhase) => void;
  setQuality: (quality: QualityTier) => void;
  setReducedMotion: (value: boolean) => void;
}

export const useSceneStore = create<SceneState>()((set) => ({
  activeRoute: "home",
  phase: "loading",
  quality: "high",
  reducedMotion: false,

  setActiveRoute: (activeRoute) => set({ activeRoute }),
  setPhase: (phase) => set({ phase }),
  setQuality: (quality) => set({ quality }),
  setReducedMotion: (reducedMotion) => set({ reducedMotion }),
}));
