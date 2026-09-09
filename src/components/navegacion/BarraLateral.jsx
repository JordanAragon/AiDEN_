import { Link } from 'react-router-dom';

export default function BarraLateral() {
  return (
    <aside className="w-64 bg-white border-r border-slate-200 flex flex-col justify-between p-4 min-h-screen">
      <section>
        {/* Logo */}
        <header className="flex items-center gap-2 mb-8 px-2">
          <span className="text-emerald-600 text-xl" aria-hidden="true">🍃</span>
          <span className="font-bold text-lg text-slate-800">AiDEN</span>
        </header>

        {/* Navegación principal */}
        <nav aria-label="Menú principal del sistema">
          <ul className="space-y-1">
            <li>
              <Link to="/dashboard" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-emerald-50 text-emerald-700 font-medium text-sm">
                <span>📊</span> Dashboard
              </Link>
            </li>
            <li>
              <Link to="/inventario" className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition text-sm">
                <span>📦</span> Inventario
              </Link>
            </li>
            <li>
              <Link to="/produccion" className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition text-sm">
                <span>🌱</span> Producción
              </Link>
            </li>
            <li>
              <Link to="/trazabilidad" className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition text-sm">
                <span>🔄</span> Trazabilidad
              </Link>
            </li>
            <li>
              <Link to="/ambiental" className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition text-sm">
                <span>🌡️</span> Ambiental
              </Link>
            </li>
            <li>
              <Link to="/calidad" className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition text-sm">
                <span>⚠️</span> Calidad
              </Link>
            </li>
            <li>
              <Link to="/costos" className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition text-sm">
                <span>💰</span> Costos
              </Link>
            </li>
            <li>
              <Link to="/personal" className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition text-sm">
                <span>👥</span> Personal
              </Link>
            </li>
            <li>
              <Link to="/reportes" className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition text-sm">
                <span>📈</span> Reportes
              </Link>
            </li>
            <li>
              <Link to="/configuracion" className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition text-sm">
                <span>⚙️</span> Configuración
              </Link>
            </li>
          </ul>
        </nav>
      </section>

      {/* Pie de navegación */}
      <footer>
        <section className="p-3 bg-emerald-50/50 rounded-lg border border-emerald-100">
          <p className="text-xs text-slate-500">Rol activo</p>
          <p className="text-sm font-semibold text-slate-700">Admin</p>
        </section>
      </footer>
    </aside>
  );
}