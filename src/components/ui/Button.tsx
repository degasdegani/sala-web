import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Botão / CTA da S.A.L.A. (tema claro, Etapa 0).
 *
 * `primary` = azul-elétrico sólido com texto branco e leve elevação no hover
 * (estilo Stripe). `outline` = superfície branca com borda sutil.
 *
 * Renderiza `next/link` com `href` (navegação) ou `<button>` nativo (formulários).
 */
type Variant = "primary" | "outline";
type Size = "sm" | "md";

interface ButtonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  "aria-label"?: string;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-bg";

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-blue-electric text-white hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-12px_var(--color-blue-electric)] focus-visible:ring-blue-electric",
  outline:
    "border border-subtle bg-surface text-ink hover:border-[color-mix(in_srgb,var(--color-ink)_22%,transparent)] hover:shadow-sm focus-visible:ring-[color-mix(in_srgb,var(--color-ink)_30%,transparent)]",
};

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  href,
  onClick,
  type = "button",
  disabled,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const classes = [base, sizes[size], variants[variant], className]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
