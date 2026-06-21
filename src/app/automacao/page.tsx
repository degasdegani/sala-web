import type { Metadata } from "next";
import { RoutePlaceholder } from "@/components/layout/RoutePlaceholder";

export const metadata: Metadata = {
  title: "Automação",
  description:
    "Automação que conecta ferramentas, elimina trabalho manual e faz o negócio rodar sozinho.",
};

export default function AutomacaoPage() {
  return (
    <RoutePlaceholder
      eyebrow="Automação"
      title="Automação que conecta o seu negócio."
      description="Fluxos que ligam suas ferramentas, eliminam tarefas repetitivas e liberam tempo. Em breve, um grafo 3D interativo para você explorar como isso funciona."
    />
  );
}
