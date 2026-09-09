export default function TableroAdministrador() {
  return (
    <section className="space-y-6">
      
      {/* Encabezado del Tablero con título y acciones rápidas */}
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <section>
          <h1 className="text-2xl font-bold text-slate-800">Dashboard · Administrador</h1>
          <p className="text-sm text-slate-500">Vista general del sistema AiDEN · Agosto 2026</p>
        </section>

        <nav className="flex items-center gap-3" aria-label="Acciones del tablero">
          <button className="px-4 py-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg text-sm font-medium hover:bg-emerald-100 transition">
            ⚙️ Configuración
          </button>
          <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-medium hover:bg-emerald-500 transition shadow-sm">
            📈 Reportes
          </button>
        </nav>
      </header>

      {/* Sección de Tarjetas de Indicadores Principales */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Tarjeta 1: Usuarios Activos */}
        <article className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <header className="flex items-center justify-between mb-4">
            <span className="p-2 bg-emerald-50 text-emerald-600 rounded-lg text-lg">👤</span>
            <span className="text-xs text-slate-400 font-medium">Activos</span>
          </header>
          <section>
            <p className="text-3xl font-extrabold text-slate-800">25</p>
            <p className="text-sm text-slate-600 mt-1">Usuarios Activos</p>
          </section>
          <footer className="mt-4 pt-3 border-t border-slate-100">
            <p className="text-xs text-emerald-600 font-medium">+2 este mes</p>
          </footer>
        </article>

        {/* Tarjeta 2: Lotes en Sistema */}
        <article className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <header className="flex items-center justify-between mb-4">
            <span className="p-2 bg-emerald-50 text-emerald-600 rounded-lg text-lg">🌱</span>
            <span className="text-xs text-slate-400 font-medium">Sistema</span>
          </header>
          <section>
            <p className="text-3xl font-extrabold text-slate-800">48</p>
            <p className="text-sm text-slate-600 mt-1">Lotes en Sistema</p>
          </section>
          <footer className="mt-4 pt-3 border-t border-slate-100">
            <p className="text-xs text-slate-500">94% con trazabilidad</p>
          </footer>
        </article>

        {/* Tarjeta 3: Ingresos del Mes */}
        <article className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <header className="flex items-center justify-between mb-4">
            <span className="p-2 bg-blue-50 text-blue-600 rounded-lg text-lg">📈</span>
            <span className="text-xs text-slate-400 font-medium">Finanzas</span>
          </header>
          <section>
            <p className="text-3xl font-extrabold text-slate-800">$115K</p>
            <p className="text-sm text-slate-600 mt-1">Ingresos del Mes</p>
          </section>
          <footer className="mt-4 pt-3 border-t border-slate-100">
            <p className="text-xs text-emerald-600 font-medium">+18.5% vs. anterior</p>
          </footer>
        </article>

        {/* Tarjeta 4: Alertas del Sistema */}
        <article className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <header className="flex items-center justify-between mb-4">
            <span className="p-2 bg-amber-50 text-amber-600 rounded-lg text-lg">⚠️</span>
            <span className="text-xs text-slate-400 font-medium">Atención</span>
          </header>
          <section>
            <p className="text-3xl font-extrabold text-slate-800">2</p>
            <p className="text-sm text-slate-600 mt-1">Alertas Sistema</p>
          </section>
          <footer className="mt-4 pt-3 border-t border-slate-100">
            <p className="text-xs text-amber-600 font-medium">Revisión requerida</p>
          </footer>
        </article>

      </section>

      {/* Sección inferior: Gráficos de Ingresos/Costos y Distribución de Roles */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Contenedor del Gráfico de Ingresos vs Costos */}
        <article className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <header className="mb-4">
            <h2 className="text-lg font-bold text-slate-800">Ingresos vs. Costos</h2>
            <p className="text-xs text-slate-400">Últimos 6 meses (COP)</p>
          </header>
          <section className="h-64 flex items-center justify-center bg-slate-50 border border-dashed border-slate-200 rounded-lg text-slate-400 text-sm">
            [Espacio para componente gráfico de Ingresos y Costos]
          </section>
        </article>

        {/* Contenedor del Gráfico de Usuarios por Rol */}
        <article className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <header className="mb-4">
            <h2 className="text-lg font-bold text-slate-800">Usuarios por Rol</h2>
            <p className="text-xs text-slate-400">25 usuarios totales</p>
          </header>
          <section className="h-64 flex items-center justify-center bg-slate-50 border border-dashed border-slate-200 rounded-lg text-slate-400 text-sm">
            [Espacio para gráfico circular de Roles]
          </section>
        </article>

      </section>

    </section>
  );
}