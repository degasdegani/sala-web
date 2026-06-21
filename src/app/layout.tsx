import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";

export const metadata: Metadata = {
  // TODO: trocar pelo domínio real quando definido.
  metadataBase: new URL("https://sala.com.br"),
  title: {
    default: "S.A.L.A — Estúdio de tecnologia",
    template: "%s · S.A.L.A",
  },
  description:
    "S.A.L.A é o estúdio brasileiro por trás de Sites, Agendamentos, Landing Pages e Automação — experiências digitais construídas com padrão de produto.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "S.A.L.A",
    title: "S.A.L.A — Estúdio de tecnologia",
    description:
      "Sites, Agendamentos, Landing Pages e Automação, construídos com padrão de produto.",
  },
  // Favicon detectado automaticamente a partir de src/app/icon.png
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="flex min-h-screen flex-col font-sans antialiased">
        {/* Fase 1: <Scene /> (Canvas 3D persistente) será montado aqui, atrás do conteúdo */}
        <SmoothScroll>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
