import type { Metadata } from "next";
import { RoutePlaceholder } from "@/components/layout/RoutePlaceholder";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Conte seu projeto. Sites, agendamentos, landing pages ou automação — vamos construir.",
};

export default function ContatoPage() {
  return (
    <RoutePlaceholder
      eyebrow="Contato"
      title="Vamos construir algo juntos."
      description="Conte o que você precisa e retornamos com um caminho. O formulário funcional (via Resend) entra na Fase 7."
    />
  );
}
