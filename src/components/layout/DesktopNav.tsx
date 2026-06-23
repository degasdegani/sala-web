"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

import { NAV_ITEMS } from "@/content/nav";

/**
 * Navegação desktop com mega-menu (Etapa A). Cada item com `columns` abre um
 * painel em colunas ao hover/focus, com entrada suave (Framer Motion). Itens sem
 * colunas (Preços) são links diretos.
 */

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function DesktopNav() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <nav className="hidden items-center gap-1 lg:flex">
      {NAV_ITEMS.map((item) => {
        if (!item.columns) {
          return (
            <Link
              key={item.id}
              href={item.href ?? "#"}
              className="rounded-md px-3 py-2 text-sm font-medium text-body transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          );
        }

        const isOpen = open === item.id;

        return (
          <div
            key={item.id}
            className="relative"
            onMouseEnter={() => setOpen(item.id)}
            onMouseLeave={() => setOpen(null)}
          >
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={isOpen}
              onFocus={() => setOpen(item.id)}
              className={`inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                isOpen ? "text-ink" : "text-body hover:text-ink"
              }`}
            >
              {item.label}
              <Chevron open={isOpen} />
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="absolute left-0 top-full pt-3" // pt-3 = ponte de hover
                >
                  <div className="rounded-2xl border border-subtle bg-surface p-6 shadow-[0_20px_50px_-20px_rgba(10,37,64,0.25)]">
                    <div
                      className="grid gap-8"
                      style={{
                        gridTemplateColumns: `repeat(${item.columns.length}, minmax(13rem, 1fr))`,
                      }}
                    >
                      {item.columns.map((col, i) => (
                        <div key={col.title ?? i}>
                          {col.title && (
                            <p className="mb-3 text-label uppercase text-muted">{col.title}</p>
                          )}
                          <ul className="space-y-1">
                            {col.items.map((leaf) => (
                              <li key={`${leaf.href}-${leaf.label}`}>
                                <Link
                                  href={leaf.href}
                                  className="block rounded-lg p-2 transition-colors hover:bg-bg"
                                  onClick={() => setOpen(null)}
                                >
                                  <span className="block text-sm font-semibold text-ink">
                                    {leaf.label}
                                  </span>
                                  {leaf.description && (
                                    <span className="mt-0.5 block text-xs leading-snug text-muted">
                                      {leaf.description}
                                    </span>
                                  )}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </nav>
  );
}
