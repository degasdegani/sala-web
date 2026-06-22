/**
 * Conteúdo estruturado da Home (Fase 2.1) — fonte única de verdade da copy.
 *
 * Consumido pelo DOM da Home (hero + cards-portal, Fase 2.3) e pelo grafo 3D
 * S·A·L·A (nós luminosos, Fase 2.5). Manter o texto aqui, fora dos componentes,
 * para que a mesma narrativa alimente as duas camadas (2D e 3D) sem divergir.
 *
 * Modelo de portais: HÍBRIDO (decisão Fase 2.1) — os quatro nós são os quatro
 * serviços do acrônimo S·A·L·A (fiéis à marca), cada um com destino próprio.
 * "Sites & Landing Pages" compartilham a rota /sites via âncoras; Agendamentos
 * aponta para o case LIVO dentro de /sites; Automação tem rota própria.
 */

/** Acento luminoso de cada portal — nomes de cor da marca (§2.1 / tailwind). */
export type PortalAccent = "blue-electric" | "green-mint";

export interface HomePortal {
  /** Id estável (chave de lista e gancho do nó 3D correspondente). */
  id: "sites" | "agendamentos" | "landing" | "automacao";
  /** Letra do acrônimo S·A·L·A exibida como marcador do card/nó. */
  letter: "S" | "A" | "L";
  /** Título curto do serviço. */
  title: string;
  /** Descrição de uma linha — o que a S.A.L.A. entrega ali. */
  description: string;
  /** Destino real (rota + âncora quando a seção é compartilhada). */
  href: string;
  /** Cor de acento (glow do card / luz do nó), por serviço (§2.1). */
  accent: PortalAccent;
}

export interface HomeCta {
  label: string;
  href: string;
}

export interface HomeContent {
  hero: {
    eyebrow: string;
    /** Headline em duas partes para permitir quebra/ênfase tipográfica. */
    headline: { lead: string; emphasis: string };
    subcopy: string;
    primaryCta: HomeCta;
    secondaryCta: HomeCta;
  };
  /** Os quatro portais S·A·L·A, na ordem do acrônimo. */
  portals: HomePortal[];
}

export const home: HomeContent = {
  hero: {
    eyebrow: "Estúdio de tecnologia",
    headline: {
      lead: "A casa por trás dos seus",
      emphasis: "produtos digitais.",
    },
    subcopy:
      "Sites, Agendamentos, Landing Pages e Automação — construídos com padrão de produto, do primeiro pixel ao deploy.",
    primaryCta: { label: "Iniciar um projeto", href: "/contato" },
    secondaryCta: { label: "Ver o que construímos", href: "/sites" },
  },
  portals: [
    {
      id: "sites",
      letter: "S",
      title: "Sites",
      description:
        "Sites institucionais e plataformas sob medida, com padrão de produto.",
      href: "/sites",
      accent: "blue-electric",
    },
    {
      id: "agendamentos",
      letter: "A",
      title: "Agendamentos",
      description:
        "Sistemas de agendamento sob demanda — a engine que move o LIVO.",
      href: "/sites#livo",
      accent: "blue-electric",
    },
    {
      id: "landing",
      letter: "L",
      title: "Landing Pages",
      description:
        "Páginas de conversão rápidas, medidas e otimizadas para campanha.",
      href: "/sites#landing",
      accent: "green-mint",
    },
    {
      id: "automacao",
      letter: "A",
      title: "Automação",
      description:
        "Fluxos que eliminam trabalho manual e conectam suas ferramentas.",
      href: "/automacao",
      accent: "green-mint",
    },
  ],
};
