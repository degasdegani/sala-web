export function Footer() {
  return (
    <footer className="border-t border-subtle">
      <div className="mx-auto flex max-w-container flex-col gap-2 px-6 py-10 text-label uppercase text-gray-mid sm:flex-row sm:items-center sm:justify-between">
        <span>S.A.L.A — Sites · Agendamentos · Landing Pages · Automação</span>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
