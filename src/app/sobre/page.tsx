import type { Metadata } from "next";
import { RoutePlaceholder } from "@/components/layout/RoutePlaceholder";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "A história da S.A.L.A. e a trajetória de quem trocou vendas por código para construir produtos.",
};

export default function SobrePage() {
  return (
    <RoutePlaceholder
      eyebrow="Sobre"
      title="Da venda ao código — a história da S.A.L.A."
      description="A S.A.L.A. nasce de uma transição real: de account management para desenvolvimento. Entender o cliente e construir o produto, na mesma pessoa."
    />
  );
}
