import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-screen max-w-container flex-col justify-center px-6">
      <p className="mb-6 text-label uppercase text-gray-mid">Erro 404</p>
      <h1 className="text-h1 font-black text-white-pure">
        Essa sala não existe.
      </h1>
      <p className="mt-8 max-w-xl text-lg leading-relaxed text-gray-light">
        A página que você procura saiu do ar ou nunca esteve aqui.
      </p>
      <Link
        href="/"
        className="mt-10 text-label uppercase text-blue-electric transition-colors hover:text-green-mint"
      >
        ← Voltar para a home
      </Link>
    </section>
  );
}
