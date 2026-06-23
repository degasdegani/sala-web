import { Hero } from "@/components/sections/Hero";
import { Solucoes } from "@/components/sections/Solucoes";

/**
 * Home (scroll único). As seções institucionais são montadas aqui na ordem das
 * Etapas B–G. Por ora: Hero (B) + Soluções (C). Mercado, Transformação, Sobre
 * e Preços entram em seguida, com âncoras.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Solucoes />
    </>
  );
}
