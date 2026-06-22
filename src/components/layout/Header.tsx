"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Header — versão mínima de tema claro (Etapa 0). O mega-menu estilo Stripe
 * (dropdowns em colunas, CTAs, sombra ao rolar, menu mobile) entra na Etapa A.
 */
const NAV = [
  { href: "/sites", label: "Sites & LP" },
  { href: "/automacao", label: "Automação" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-subtle bg-surface/80 backdrop-blur">
      <div className="mx-auto flex max-w-container items-center justify-between px-6 py-4">
        <Link href="/" aria-label="S.A.L.A — início" className="inline-flex items-center gap-2">
          <Image src="/brand/symbol.png" alt="" width={534} height={467} priority className="h-7 w-auto" />
          <span className="text-base font-bold tracking-tight text-ink">S.A.L.A</span>
        </Link>

        <nav className="flex items-center gap-6">
          {NAV.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  active ? "text-ink" : "text-muted hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
