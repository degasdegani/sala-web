/**
 * Footer — versão mínima de tema claro (Etapa 0). Colunas de links, seletor de
 * idioma e info legal (CNPJ) entram na Etapa H.
 */
export function Footer() {
  return (
    <footer className="border-t border-subtle bg-surface">
      <div className="mx-auto flex max-w-container flex-col gap-2 px-6 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <span>S.A.L.A — Sites · Agendamentos · Landing Pages · Automação</span>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
