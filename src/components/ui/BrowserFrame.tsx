import Image from "next/image";
import type { ReactNode } from "react";

/**
 * Frame de browser (chrome estilo mac) para emoldurar produto — usado na seção
 * Mercado (case LIVO) e reaproveitável na página /sites (Etapa 4).
 *
 * Passe `src` para renderizar um screenshot real (`public/images/...`) ou
 * `children` para um placeholder construído em CSS. Server component.
 */
interface BrowserFrameProps {
  url?: string;
  src?: string;
  alt?: string;
  children?: ReactNode;
  className?: string;
}

export function BrowserFrame({
  url,
  src,
  alt = "",
  children,
  className = "",
}: BrowserFrameProps) {
  return (
    <div
      className={`overflow-hidden rounded-card border border-subtle bg-surface shadow-[0_30px_80px_-30px_rgba(10,37,64,0.4)] ${className}`}
    >
      {/* Chrome (semáforo + barra de URL). */}
      <div className="flex items-center gap-2 border-b border-subtle bg-[color-mix(in_srgb,var(--color-ink)_3%,var(--color-surface))] px-4 py-3">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </span>
        {url && (
          <span className="ml-3 flex-1 truncate rounded-md bg-bg px-3 py-1 text-center text-xs text-muted">
            {url}
          </span>
        )}
      </div>

      {/* Tela. */}
      <div className="relative aspect-[4/3] w-full">
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        ) : (
          children
        )}
      </div>
    </div>
  );
}
