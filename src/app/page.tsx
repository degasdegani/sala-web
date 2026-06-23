import { Hero } from "@/components/sections/Hero";
import { Solucoes } from "@/components/sections/Solucoes";
import { Mercado } from "@/components/sections/Mercado";
import { Transformacao } from "@/components/sections/Transformacao";
import { Sobre } from "@/components/sections/Sobre";
import { Precos } from "@/components/sections/Precos";

/**
 * Home (scroll único). As seções institucionais são montadas aqui na ordem das
 * Etapas B–G: Hero (B) + Soluções (C) + Mercado (D) + Transformação (E) +
 * Sobre (F) + Preços (G).
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Solucoes />
      <Mercado />
      <Transformacao />
      <Sobre />
      <Precos />
    </>
  );
}
