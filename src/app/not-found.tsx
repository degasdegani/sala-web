import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-container flex-col justify-center px-6">
      <p className="mb-6 text-label uppercase text-muted">Erro 404</p>
      <h1 className="text-h1 font-black text-ink">Página não encontrada.</h1>
      <p className="mt-8 max-w-xl text-lg leading-relaxed text-body">
        A página que você procura saiu do ar ou nunca esteve aqui.
      </p>
      <Link
        href="/"
        className="mt-10 text-label uppercase text-blue-electric transition-colors hover:opacity-70"
      >
        ← Voltar para a home
      </Link>
    </section>
  );
}
