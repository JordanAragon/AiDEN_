export default function BarraSuperior() {
  return (
    <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between">
      <search className="w-96">
        <input 
          type="search" 
          placeholder="Buscar módulos, lotes, ..." 
          className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </search>

      <section className="flex items-center gap-4">
        <button aria-label="Notificaciones" className="p-2 text-slate-500 hover:text-slate-700 transition">
          🔔
        </button>
        
        <article className="flex items-center gap-3 pl-4 border-l border-slate-200">
          <span className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-sm" aria-hidden="true">
            AG
          </span>
          <section>
            <p className="text-sm font-semibold text-slate-800 leading-none">Ana García</p>
            <p className="text-xs text-slate-500">Adm</p>
          </section>
        </article>
      </section>
    </header>
  );
}