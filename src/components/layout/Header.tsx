"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/Button";
import { NAV_CTAS } from "@/content/nav";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";

/**
 * Header institucional estilo Stripe (Etapa A). Logo + mega-menu (desktop) /
 * hamburger (mobile) + CTAs. Fundo branco translúcido com blur; ganha sombra
 * sutil ao rolar. `sticky` + `relative` (ancora os painéis absolutos da nav).
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-surface/80 backdrop-blur transition-shadow duration-300 ${
        scrolled
          ? "border-b border-transparent shadow-[0_8px_24px_-16px_rgba(10,37,64,0.45)]"
          : "border-b border-subtle"
      }`}
    >
      <div className="mx-auto flex max-w-container items-center justify-between gap-4 px-6 py-3">
        <div className="flex items-center gap-8">
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
              priority
              className="h-7 w-auto"
            />
            <span className="text-base font-bold tracking-tight text-ink">S.A.L.A</span>
          </Link>

          <DesktopNav />
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="outline" size="sm" href={NAV_CTAS.secondary.href}>
            {NAV_CTAS.secondary.label}
          </Button>
          <Button variant="primary" size="sm" href={NAV_CTAS.primary.href}>
            {NAV_CTAS.primary.label}
          </Button>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
