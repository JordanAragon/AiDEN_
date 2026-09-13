import { Search, Bell, ChevronDown, User, LogOut, X } from "lucide-react";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getDashboardPath, getSession, logout } from "../../utilidades/autenticacion";

const MODULOS = [
  { nombre: "Dashboard", ruta: "/dashboard-admin" },
  { nombre: "Inventario", ruta: "/inventario" },
  { nombre: "Producción", ruta: "/produccion" },
  { nombre: "Trazabilidad", ruta: "/trazabilidad" },
  { nombre: "Ambiental", ruta: "/ambiental" },
  { nombre: "Calidad", ruta: "/calidad" },
  { nombre: "Costos", ruta: "/costos" },
  { nombre: "Personal", ruta: "/personal" },
  { nombre: "Inteligencia", ruta: "/ia" },
  { nombre: "Reportes", ruta: "/reportes" },
  { nombre: "Configuración", ruta: "/configuracion" },
];

const NOTIFICACIONES = [
  { id: 1, text: "Alerta de temperatura en Invernadero 2", time: "hace 5 min" },
  { id: 2, text: "Lote LT-2024-089 listo para cosecha", time: "hace 22 min" },
  { id: 3, text: "Stock bajo: Sustrato Premium", time: "hace 1 h" },
];

const roleLabel = { admin: "Administrador", supervisor: "Supervisor", operario: "Operario" };

export default function BarraSuperior() {
  const navigate = useNavigate();
  const session = getSession();
  const [showProfile, setShowProfile] = useState(false);
  const [showNotifs, setShowNotifs] = useState(false);
  const [search, setSearch] = useState("");

  const resultados = useMemo(() => {
    const value = search.trim().toLowerCase();
    if (!value) return [];
    return MODULOS.filter((item) => item.nombre.toLowerCase().includes(value)).slice(0, 5);
  }, [search]);

  const handleSearch = (event) => {
    event.preventDefault();
    const first = resultados[0];
    if (first) {
      navigate(first.nombre === "Dashboard" ? getDashboardPath(session?.role) : first.ruta);
      setSearch("");
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  const nombre = session?.name || "Usuario";
  const rol = roleLabel[session?.role] || "Usuario";

  return (
    <header className="h-16 bg-white border-b border-[#E5EDE8] flex items-center justify-between px-6 shrink-0 relative z-20">
      <section className="relative">
        <form onSubmit={handleSearch} className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input type="search" value={search} onChange={(event) => setSearch(event.target.value)} className="pl-9 pr-9 py-1.5 w-64 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-emerald-500" placeholder="Buscar módulos..." aria-label="Buscar módulos" />
          {search && <button type="button" onClick={() => setSearch("")} className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400" aria-label="Limpiar búsqueda"><X size={14} /></button>}
        </form>
        {resultados.length > 0 && (
          <section className="absolute top-11 left-0 w-64 rounded-lg border border-slate-200 bg-white p-1 shadow-lg">
            {resultados.map((item) => (
              <button key={item.ruta} type="button" onClick={() => { navigate(item.nombre === "Dashboard" ? getDashboardPath(session?.role) : item.ruta); setSearch(""); }} className="w-full rounded-md px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-50">{item.nombre}</button>
            ))}
          </section>
        )}
      </section>

      <section className="flex items-center gap-3">
        <section className="relative">
          <button type="button" onClick={() => { setShowNotifs(!showNotifs); setShowProfile(false); }} className="relative w-9 h-9 rounded-lg hover:bg-slate-100 flex items-center justify-center transition-colors" aria-label="Notificaciones">
            <Bell size={18} className="text-slate-500" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
          </button>
          {showNotifs && (
            <section className="absolute right-0 top-12 w-80 bg-white border border-slate-200 rounded-xl py-2 shadow-lg z-30">
              <header className="px-4 py-2 border-b border-slate-100"><p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Notificaciones</p></header>
              <ul className="divide-y divide-slate-100">
                {NOTIFICACIONES.map((n) => <li key={n.id} className="px-4 py-3 hover:bg-slate-50 cursor-pointer"><p className="text-sm text-slate-700 leading-snug">{n.text}</p><p className="text-xs text-slate-400 mt-1">{n.time}</p></li>)}
              </ul>
            </section>
          )}
        </section>

        <section className="relative">
          <button type="button" onClick={() => { setShowProfile(!showProfile); setShowNotifs(false); }} className="flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-lg hover:bg-slate-100 transition-colors">
            <span className="w-7 h-7 bg-emerald-600 rounded-full flex items-center justify-center text-white"><User size={14} /></span>
            <section className="text-left hidden sm:block"><p className="text-sm font-medium text-slate-800 leading-none">{nombre}</p><p className="text-xs text-slate-400 mt-0.5">{rol}</p></section>
            <ChevronDown size={14} className="text-slate-400" />
          </button>
          {showProfile && (
            <section className="absolute right-0 top-12 w-56 bg-white border border-slate-200 rounded-xl py-2 shadow-lg z-30">
              <header className="px-4 py-2 border-b border-slate-100"><p className="text-xs font-medium text-slate-500">Sesión activa</p></header>
              <section className="px-4 py-3"><p className="text-sm font-medium text-slate-800">{nombre}</p><p className="text-xs text-slate-400 mt-1">{session?.email}</p></section>
              <footer className="border-t border-slate-100 pt-1 mt-1">
                <button type="button" onClick={handleLogout} className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2 font-medium"><LogOut size={14} />Cerrar sesión</button>
              </footer>
            </section>
          )}
        </section>
      </section>
    </header>
  );
}
