import type { Metadata } from "next";
import { RoutePlaceholder } from "@/components/layout/RoutePlaceholder";

export const metadata: Metadata = {
  title: "Sites & Landing Pages",
  description:
    "Sites e landing pages de alta performance, construídos com padrão de produto. Case: LIVO.",
};

export default function SitesPage() {
  return (
    <RoutePlaceholder
      eyebrow="Sites & Landing Pages"
      title="Sites e landing pages com padrão de produto."
      description="Da estrutura à conversão — construímos experiências rápidas, acessíveis e memoráveis. O LIVO é a prova viva dessa capacidade."
    />
  );
}
