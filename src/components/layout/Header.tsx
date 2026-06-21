"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/sites", label: "Sites & LP" },
  { href: "/automacao", label: "Automação" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-container items-center justify-between px-6 py-5">
        {/* Símbolo raster (alta-res). Vetor de alta-fidelidade chega na Fase 1. */}
        <Link href="/" aria-label="S.A.L.A — início" className="inline-flex">
          <Image
            src="/brand/symbol.png"
            alt="S.A.L.A"
            width={534}
            height={467}
            priority
            className="h-8 w-auto"
          />
        </Link>

        <nav className="flex items-center gap-6">
          {NAV.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-label uppercase transition-colors ${
                  active
                    ? "text-white-pure"
                    : "text-gray-mid hover:text-white-pure"
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
