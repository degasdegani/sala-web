import { Hero } from "@/components/sections/Hero";
import { Solucoes } from "@/components/sections/Solucoes";
import { Mercado } from "@/components/sections/Mercado";
import { Transformacao } from "@/components/sections/Transformacao";
import { Sobre } from "@/components/sections/Sobre";

/**
 * Home (scroll único). As seções institucionais são montadas aqui na ordem das
 * Etapas B–G. Por ora: Hero (B) + Soluções (C) + Mercado (D) + Transformação
 * (E) + Sobre (F). Preços entra em seguida, com âncora.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Solucoes />
      <Mercado />
      <Transformacao />
      <Sobre />
    </>
  );
}
