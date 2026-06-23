/**
 * Estrutura de navegação do header (Etapa A — mega-menu estilo Stripe).
 * Fonte única dos itens, dropdowns em colunas e CTAs. Consumido por
 * DesktopNav (dropdowns) e MobileNav (acordeão).
 */

export interface NavLeaf {
  label: string;
  description?: string;
  href: string;
}

export interface NavColumn {
  title?: string;
  items: NavLeaf[];
}

export interface NavItem {
  id: string;
  label: string;
  /** Link direto (sem dropdown), ex.: Preços. */
  href?: string;
  /** Colunas do mega-menu (quando é dropdown). */
  columns?: NavColumn[];
}

export const NAV_ITEMS: NavItem[] = [
  {
    id: "solucoes",
    label: "Soluções",
    columns: [
      {
        title: "Serviços",
        items: [
          {
            label: "Sites institucionais",
            description: "Presença digital com padrão de produto.",
            href: "/sites",
          },
          {
            label: "Landing Pages",
            description: "Páginas de conversão rápidas e medidas.",
            href: "/sites",
          },
          {
            label: "Automação",
            description: "Fluxos que eliminam trabalho manual.",
            href: "/automacao",
          },
        ],
      },
      {
        title: "Produtos",
        items: [
          {
            label: "LIVO",
            description: "SaaS de agendamento para barbearias.",
            href: "/sites",
          },
          {
            label: "Agendamentos sob demanda",
            description: "A engine de agendamento da S.A.L.A.",
            href: "/sites",
          },
        ],
      },
    ],
  },
  {
    id: "sobre",
    label: "Sobre",
    columns: [
      {
        items: [
          {
            label: "A S.A.L.A",
            description: "Quem somos e como trabalhamos.",
            href: "/sobre",
          },
          {
            label: "Trajetória",
            description: "De vendas a engenharia de produto.",
            href: "/sobre",
          },
          {
            label: "Contato",
            description: "Fale com a gente.",
            href: "/contato",
          },
        ],
      },
    ],
  },
  {
    id: "recursos",
    label: "Recursos",
    columns: [
      {
        items: [
          {
            label: "Cases",
            description: "O que já construímos.",
            href: "/sites",
          },
          {
            label: "Blog",
            description: "Notas de tecnologia e produto.",
            href: "#",
          },
          {
            label: "FAQ",
            description: "Dúvidas frequentes.",
            href: "#",
          },
        ],
      },
    ],
  },
  {
    id: "precos",
    label: "Preços",
    href: "/#precos",
  },
];

/** CTAs à direita do header. */
export const NAV_CTAS = {
  secondary: { label: "Falar com a equipe", href: "/contato" },
  primary: { label: "Iniciar projeto", href: "/contato" },
};
