type RoutePlaceholderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

/**
 * Shell temporário das rotas internas (tema claro). Substituído pelo conteúdo
 * real de cada seção quando ganharem páginas dedicadas.
 */
export function RoutePlaceholder({
  eyebrow,
  title,
  description,
}: RoutePlaceholderProps) {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-container flex-col justify-center px-6">
      <p className="mb-6 text-label uppercase text-muted">{eyebrow}</p>
      <h1 className="max-w-4xl text-h1 font-black text-ink">{title}</h1>
      <p className="mt-8 max-w-xl text-lg leading-relaxed text-body">
        {description}
      </p>
    </section>
  );
}
