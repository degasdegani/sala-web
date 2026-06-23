import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/Button";

/**
 * Footer institucional (Etapa H). Coluna de marca + CTA, colunas de links
 * (alinhadas às rotas do header) e barra inferior com copyright, CNPJ e links
 * legais. Redes sociais com hrefs placeholder ("#"). Server component.
 *
 * CNPJ e URLs sociais são placeholders — dados reais entram depois.
 */

interface FooterLink {
  label: string;
  href: string;
}

const colunas: { title: string; links: FooterLink[] }[] = [
  {
    title: "Soluções",
    links: [
      { label: "Sites institucionais", href: "/sites" },
      { label: "Landing Pages", href: "/sites" },
      { label: "Agendamentos", href: "/sites" },
      { label: "Automação", href: "/automacao" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Sobre", href: "/sobre" },
      { label: "Trajetória", href: "/sobre" },
      { label: "Preços", href: "/#precos" },
      { label: "Contato", href: "/contato" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { label: "Cases", href: "/sites" },
      { label: "Blog", href: "#" },
      { label: "FAQ", href: "#" },
    ],
  },
];

const sociais: { label: string; href: string; icon: React.ReactNode }[] = [
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0 0-5zM3 9h4v12H3zM9 9h3.8v1.64h.05c.53-1 1.83-2.05 3.77-2.05C20.5 8.59 22 10.6 22 14.07V21h-4v-6.13c0-1.46-.03-3.34-2.04-3.34-2.04 0-2.35 1.59-2.35 3.23V21H9z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <path d="M17.5 6.5h.01" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.22-3.37-1.22-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.12 2.91.85.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.36 9.36 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9v2.82c0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2z" />
      </svg>
    ),
  },
];

const legais: FooterLink[] = [
  { label: "Privacidade", href: "#" },
  { label: "Termos", href: "#" },
];

export function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer className="border-t border-subtle bg-surface">
      <div className="mx-auto max-w-container px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Marca + CTA. */}
          <div>
            <Link
              href="/"
              aria-label="S.A.L.A — início"
              className="inline-flex items-center gap-2"
            >
              <Image
                src="/brand/symbol.png?v=2"
                alt=""
                width={477}
                height={523}
                className="h-7 w-auto"
              />
              <span className="text-base font-bold tracking-tight text-ink">
                S.A.L.A
              </span>
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              A casa por trás dos seus produtos digitais. Sites, Agendamentos,
              Landing Pages e Automação.
            </p>

            <div className="mt-6">
              <Button variant="primary" size="sm" href="/contato">
                Iniciar projeto
              </Button>
            </div>

            <div className="mt-6 flex items-center gap-3">
              {sociais.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-subtle text-muted transition-colors hover:border-[color-mix(in_srgb,var(--color-ink)_22%,transparent)] hover:text-ink"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Colunas de links. */}
          {colunas.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <p className="text-label uppercase text-muted">{col.title}</p>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-body transition-colors hover:text-ink"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Barra inferior. */}
        <div className="mt-14 flex flex-col gap-4 border-t border-subtle pt-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {ano} S.A.L.A · CNPJ 00.000.000/0001-00{" "}
            <span className="text-muted/70">(placeholder)</span>
          </p>
          <div className="flex items-center gap-6">
            {legais.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="transition-colors hover:text-ink"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
