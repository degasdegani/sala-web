/**
 * Home (Etapa 0) — placeholder de tema claro. As seções institucionais
 * (Hero, Soluções, Mercado, Transformação, Sobre, Preços) entram nas Etapas B–G,
 * montadas aqui em scroll único com âncoras.
 */
export default function HomePage() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-container flex-col justify-center px-6 py-24">
      <p className="mb-6 text-label uppercase text-muted">Estúdio de tecnologia</p>
      <h1 className="max-w-4xl text-display font-black text-ink">
        A casa por trás dos seus produtos digitais.
      </h1>
      <p className="mt-8 max-w-xl text-lg leading-relaxed text-body">
        Sites, Agendamentos, Landing Pages e Automação — construídos com padrão de
        produto.
      </p>
    </section>
  );
}
