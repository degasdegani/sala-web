"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/Button";
import { NAV_CTAS, NAV_ITEMS } from "@/content/nav";

/**
 * Navegação mobile (Etapa A). Hamburger abre um painel abaixo do header com os
 * itens (dropdowns achatados em grupos) e os CTAs. Fecha ao clicar num link.
 */
export function MobileNav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-ink transition-colors hover:bg-bg"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          {open ? (
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          )}
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute inset-x-0 top-full max-h-[80vh] overflow-y-auto border-b border-subtle bg-surface px-6 py-6 shadow-xl"
          >
            <nav className="flex flex-col gap-6">
              {NAV_ITEMS.map((item) => {
                if (!item.columns) {
                  return (
                    <Link
                      key={item.id}
                      href={item.href ?? "#"}
                      onClick={close}
                      className="text-base font-semibold text-ink"
                    >
                      {item.label}
                    </Link>
                  );
                }
                return (
                  <div key={item.id}>
                    <p className="mb-2 text-label uppercase text-muted">{item.label}</p>
                    <ul className="space-y-1">
                      {item.columns.flatMap((col) => col.items).map((leaf) => (
                        <li key={`${leaf.href}-${leaf.label}`}>
                          <Link
                            href={leaf.href}
                            onClick={close}
                            className="block py-1.5 text-sm font-medium text-body transition-colors hover:text-ink"
                          >
                            {leaf.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}

              <div className="mt-2 flex flex-col gap-3 border-t border-subtle pt-6">
                <Button variant="outline" href={NAV_CTAS.secondary.href}>
                  {NAV_CTAS.secondary.label}
                </Button>
                <Button variant="primary" href={NAV_CTAS.primary.href}>
                  {NAV_CTAS.primary.label}
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
