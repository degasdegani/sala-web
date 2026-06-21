type RoutePlaceholderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

/**
 * Shell temporário das rotas internas (Fase 0.6).
 * Substituído pelo conteúdo real de cada seção nas Fases 4–7.
 */
export function RoutePlaceholder({
  eyebrow,
  title,
  description,
}: RoutePlaceholderProps) {
  return (
    <section className="mx-auto flex min-h-screen max-w-container flex-col justify-center px-6">
      <p className="mb-6 text-label uppercase text-gray-mid">{eyebrow}</p>
      <h1 className="max-w-4xl text-h1 font-black text-white-pure">{title}</h1>
      <p className="mt-8 max-w-xl text-lg leading-relaxed text-gray-light">
        {description}
      </p>
    </section>
  );
}
