import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      {/* Navbar Flotante Glassmorphism */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-emerald-100 shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between" aria-label="Navegación principal">
          <a href="#inicio" className="inline-flex items-center gap-2 font-display font-bold text-xl text-emerald-900">
            <span className="grid place-items-center w-8 h-8 rounded-lg bg-emerald-900 text-white shadow-md">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
            </span>
            AiDEN
          </a>

          <nav aria-label="Secciones del sitio" className="hidden lg:flex items-center gap-6">
            <a href="#inicio" className="text-sm font-medium text-slate-600 hover:text-emerald-900 transition">Inicio</a>
            <a href="#que-es" className="text-sm font-medium text-slate-600 hover:text-emerald-900 transition">¿Qué es?</a>
            <a href="#modulos" className="text-sm font-medium text-slate-600 hover:text-emerald-900 transition">Módulos</a>
            <a href="#roles" className="text-sm font-medium text-slate-600 hover:text-emerald-900 transition">Acceso</a>
          </nav>

          <aside className="flex items-center gap-3">
            <Link to="/login" className="px-4 py-2 bg-emerald-50 text-emerald-900 border border-emerald-200 rounded-lg text-sm font-medium hover:bg-emerald-100 transition shadow-sm">
              Iniciar Sesión
            </Link>
            <Link to="/signup" className="px-4 py-2 bg-emerald-900 text-white rounded-lg text-sm font-medium hover:bg-emerald-800 transition shadow-md">
              Registrarse
            </Link>
          </aside>
        </nav>
      </header>

      <main id="inicio">
        {/* Hero Section */}
        <section className="bg-emerald-50/40 py-20 lg:py-28 border-b border-emerald-100 relative overflow-hidden">
          <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <section className="space-y-6">
              <aside className="inline-flex items-center gap-2 bg-emerald-100/70 border border-emerald-200 px-3.5 py-1.5 rounded-full text-xs font-semibold text-emerald-900">
                <span className="w-2 h-2 bg-emerald-700 rounded-full animate-pulse"></span>
              </aside>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 tracking-tight leading-tight">
                AiDEN organiza la <span className="text-emerald-900">operación diaria</span> del vivero
              </h1>

              <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                Control integral de lotes, inventario, costos, alertas, personal y trazabilidad. Toda la gestión de tu vivero agrícola en una plataforma moderna e inteligente.
              </p>

              <nav aria-label="Acciones principales" className="flex flex-wrap items-center gap-4 pt-2">
                <Link to="/login" className="px-5 py-3 bg-emerald-900 hover:bg-emerald-800 text-white font-medium rounded-xl shadow-lg hover:shadow-emerald-900/20 transition flex items-center gap-2 text-sm">
                  Iniciar Sesión
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </Link>
                <Link to="/dashboard" className="px-5 py-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-200 font-medium rounded-xl transition text-sm">
                  Ver Panel Demo
                </Link>
                <a href="#modulos" className="px-4 py-3 text-slate-600 hover:text-emerald-900 font-medium text-sm transition">
                  Explorar Módulos &darr;
                </a>
              </nav>

              <footer className="grid grid-cols-3 gap-6 pt-8 border-t border-emerald-100">
                <article>
                  <strong className="block font-display text-3xl font-bold text-emerald-900">3</strong>
                  <small className="text-slate-600 text-xs">Roles Demo</small>
                </article>
                <article>
                  <strong className="block font-display text-3xl font-bold text-emerald-900">9</strong>
                  <small className="text-slate-600 text-xs">Módulos Operativos</small>
                </article>
                <article>
                  <strong className="block font-display text-3xl font-bold text-emerald-900">ERP</strong>
                  <small className="text-slate-600 text-xs">Vivero Inteligente</small>
                </article>
              </footer>
            </section>

            {/* Visual Preview / Mockup */}
            <aside className="relative">
              <article className="bg-white border border-emerald-100 rounded-2xl shadow-2xl overflow-hidden relative z-10">
                <img src="/imagenes/imagen.png" alt="Panel de gestión de vivero AiDEN" className="w-full h-72 object-cover" />
                <footer className="grid grid-cols-3 gap-3 p-4 bg-white border-t border-slate-100">
                  <section className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                    <small className="text-[11px] text-slate-500 block">Lotes Activos</small>
                    <strong className="font-display text-xl font-bold text-slate-800">48</strong>
                    <span className="text-[11px] font-semibold text-emerald-700 ml-1">&uarr; 3</span>
                  </section>
                  <section className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                    <small className="text-[11px] text-slate-500 block">Inventario</small>
                    <strong className="font-display text-xl font-bold text-slate-800">94%</strong>
                    <span className="text-[11px] font-semibold text-emerald-900 ml-1">OK</span>
                  </section>
                  <section className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                    <small className="text-[11px] text-slate-500 block">Alertas</small>
                    <strong className="font-display text-xl font-bold text-slate-800">2</strong>
                    <span className="text-[11px] font-semibold text-amber-600 ml-1">&darr;</span>
                  </section>
                </footer>
              </article>
            </aside>

          </article>
        </section>

        {/* Gestión Centralizada */}
        <section id="que-es" className="py-24">
          <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <header className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700 mb-2">Gestión Centralizada</p>
              <h2 className="font-display text-3xl font-bold text-slate-900">Todo lo que necesita tu vivero, en un solo lugar</h2>
            </header>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <article className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
                <span className="grid place-items-center w-12 h-12 rounded-xl bg-emerald-50 text-emerald-900 mb-6 text-xl">👁️</span>
                <h3 className="font-display text-lg font-semibold text-slate-900 mb-3">Operación Visible</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Monitorea en tiempo real el estado de lotes, inventarios, personal y condiciones ambientales desde un dashboard unificado.</p>
              </article>

              <article className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
                <span className="grid place-items-center w-12 h-12 rounded-xl bg-emerald-50 text-emerald-900 mb-6 text-xl">📦</span>
                <h3 className="font-display text-lg font-semibold text-slate-900 mb-3">Recursos Controlados</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Gestiona materiales, herramientas, insumos y presupuestos con alertas automáticas de stock mínimo y desvíos de costo.</p>
              </article>

              <article className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
                <span className="grid place-items-center w-12 h-12 rounded-xl bg-emerald-50 text-emerald-900 mb-6 text-xl">📜</span>
                <h3 className="font-display text-lg font-semibold text-slate-900 mb-3">Historial Consultable</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Trazabilidad completa de cada lote: desde la siembra hasta la venta, con registros de inspecciones, incidencias y actividades.</p>
              </article>
            </section>
          </article>
        </section>

        {/* Módulos Operativos */}
        <section id="modulos" className="py-24 bg-emerald-50/30 border-y border-emerald-100">
          <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <header className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700 mb-2">Módulos Operativos</p>
              <h2 className="font-display text-3xl font-bold text-slate-900">9 módulos diseñados para el vivero</h2>
            </header>

            <nav aria-label="Módulos de AiDEN" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link to="/inventario" className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-emerald-300 transition group">
                <span className="grid place-items-center w-10 h-10 rounded-lg bg-emerald-50 text-emerald-900 mb-4 group-hover:bg-emerald-900 group-hover:text-white transition">📊</span>
                <h3 className="font-semibold text-slate-900 mb-1">Inventario</h3>
                <p className="text-xs text-slate-600">Control de stock, entradas y salidas con alertas de mínimos.</p>
              </Link>
              <Link to="/produccion" className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-emerald-300 transition group">
                <span className="grid place-items-center w-10 h-10 rounded-lg bg-emerald-50 text-emerald-900 mb-4 group-hover:bg-emerald-900 group-hover:text-white transition">🌱</span>
                <h3 className="font-semibold text-slate-900 mb-1">Producción</h3>
                <p className="text-xs text-slate-600">Gestión de lotes, etapas de crecimiento y responsables.</p>
              </Link>
              <Link to="/ambiental" className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-emerald-300 transition group">
                <span className="grid place-items-center w-10 h-10 rounded-lg bg-emerald-50 text-emerald-900 mb-4 group-hover:bg-emerald-900 group-hover:text-white transition">🌡️</span>
                <h3 className="font-semibold text-slate-900 mb-1">Ambiental</h3>
                <p className="text-xs text-slate-600">Monitoreo de sensores, temperatura, humedad y luminosidad.</p>
              </Link>
              <Link to="/calidad" className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-emerald-300 transition group">
                <span className="grid place-items-center w-10 h-10 rounded-lg bg-emerald-50 text-emerald-900 mb-4 group-hover:bg-emerald-900 group-hover:text-white transition">⚠️</span>
                <h3 className="font-semibold text-slate-900 mb-1">Calidad</h3>
                <p className="text-xs text-slate-600">Sistema de incidencias con severidad, estado y seguimiento.</p>
              </Link>
              <Link to="/trazabilidad" className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-emerald-300 transition group">
                <span className="grid place-items-center w-10 h-10 rounded-lg bg-emerald-50 text-emerald-900 mb-4 group-hover:bg-emerald-900 group-hover:text-white transition">🔄</span>
                <h3 className="font-semibold text-slate-900 mb-1">Trazabilidad</h3>
                <p className="text-xs text-slate-600">Timeline completo de eventos e historial por lote.</p>
              </Link>
              <Link to="/costos" className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-emerald-300 transition group">
                <span className="grid place-items-center w-10 h-10 rounded-lg bg-emerald-50 text-emerald-900 mb-4 group-hover:bg-emerald-900 group-hover:text-white transition">💰</span>
                <h3 className="font-semibold text-slate-900 mb-1">Costos</h3>
                <p className="text-xs text-slate-600">Dashboard financiero con centros de costo y gastos por lote.</p>
              </Link>
              <Link to="/personal" className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-emerald-300 transition group">
                <span className="grid place-items-center w-10 h-10 rounded-lg bg-emerald-50 text-emerald-900 mb-4 group-hover:bg-emerald-900 group-hover:text-white transition">👥</span>
                <h3 className="font-semibold text-slate-900 mb-1">Personal</h3>
                <p className="text-xs text-slate-600">Empleados, roles, tareas asignadas y desempeño operativo.</p>
              </Link>
              <Link to="/reportes" className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-emerald-300 transition group">
                <span className="grid place-items-center w-10 h-10 rounded-lg bg-emerald-50 text-emerald-900 mb-4 group-hover:bg-emerald-900 group-hover:text-white transition">📈</span>
                <h3 className="font-semibold text-slate-900 mb-1">Reportes</h3>
                <p className="text-xs text-slate-600">Biblioteca de reportes con exportación PDF/Excel y KPIs.</p>
              </Link>
            </nav>
          </article>
        </section>

        {/* Acceso por Rol */}
        <section id="roles" className="py-24">
          <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <header className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700 mb-2">Acceso por rol</p>
              <h2 className="font-display text-3xl font-bold text-slate-900">Cada usuario ve lo que necesita</h2>
            </header>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Administrador */}
              <article className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm flex flex-col justify-between">
                <section>
                  <span className="grid place-items-center w-12 h-12 rounded-xl bg-emerald-50 text-emerald-900 mb-6 text-xl">🛡️</span>
                  <h3 className="font-display text-xl font-bold text-emerald-900 mb-6">Administrador</h3>
                  <ul className="space-y-3 mb-8 text-sm text-slate-600">
                    <li className="flex items-center gap-2">✓ Gestión de usuarios y roles</li>
                    <li className="flex items-center gap-2">✓ Auditoría completa del sistema</li>
                    <li className="flex items-center gap-2">✓ Configuración avanzada</li>
                    <li className="flex items-center gap-2">✓ Acceso a todos los módulos</li>
                    <li className="flex items-center gap-2">✓ Reportes estratégicos</li>
                  </ul>
                </section>
                <Link to="/dashboard" className="w-full py-2.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 font-medium rounded-xl text-center text-sm transition border border-emerald-200">
                  Ver demo como Administrador
                </Link>
              </article>

              {/* Supervisor */}
              <article className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm flex flex-col justify-between">
                <section>
                  <span className="grid place-items-center w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 mb-6 text-xl">🌿</span>
                  <h3 className="font-display text-xl font-bold text-emerald-800 mb-6">Supervisor</h3>
                  <ul className="space-y-3 mb-8 text-sm text-slate-600">
                    <li className="flex items-center gap-2">✓ Dashboard operativo completo</li>
                    <li className="flex items-center gap-2">✓ Gestión de lotes y producción</li>
                    <li className="flex items-center gap-2">✓ Control de inventario</li>
                    <li className="flex items-center gap-2">✓ Monitoreo ambiental</li>
                    <li className="flex items-center gap-2">✓ Incidencias de calidad</li>
                  </ul>
                </section>
                <Link to="/dashboard" className="w-full py-2.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-medium rounded-xl text-center text-sm transition border border-emerald-200">
                  Ver demo como Supervisor
                </Link>
              </article>

              {/* Operario */}
              <article className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm flex flex-col justify-between">
                <section>
                  <span className="grid place-items-center w-12 h-12 rounded-xl bg-blue-50 text-blue-600 mb-6 text-xl">👷</span>
                  <h3 className="font-display text-xl font-bold text-blue-600 mb-6">Operario</h3>
                  <ul className="space-y-3 mb-8 text-sm text-slate-600">
                    <li className="flex items-center gap-2">✓ Tareas del día asignadas</li>
                    <li className="flex items-center gap-2">✓ Registro de actividades</li>
                    <li className="flex items-center gap-2">✓ Lotes a cargo</li>
                    <li className="flex items-center gap-2">✓ Incidencias propias</li>
                    <li className="flex items-center gap-2">✓ Producción personal</li>
                  </ul>
                </section>
                <Link to="/dashboard" className="w-full py-2.5 bg-blue-50 hover:bg-blue-100 text-blue-600 font-medium rounded-xl text-center text-sm transition border border-blue-200">
                  Ver demo como Operario
                </Link>
              </article>

            </section>
          </article>
        </section>
      </main>

      {/* Footer Corporativo */}
      <footer className="bg-emerald-950 text-white py-16 border-t border-emerald-900">
        <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <section className="space-y-4 md:col-span-1">
            <a href="#inicio" className="inline-flex items-center gap-2 font-display font-bold text-xl text-white">
              <span className="grid place-items-center w-8 h-8 rounded-lg bg-white/20 text-white">🍃</span>
              AiDEN
            </a>
            <p className="text-emerald-200/70 text-sm leading-relaxed">
              Sistema ERP para gestión integral de viveros agrícolas. Inteligente, moderno y preparado para producción.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-sm font-semibold text-white">Plataforma</h3>
            <ul className="space-y-2 text-sm text-emerald-200/70">
              <li><a href="#inicio" className="hover:text-white transition">Inicio</a></li>
              <li><a href="#que-es" className="hover:text-white transition">¿Qué es AiDEN?</a></li>
              <li><a href="#modulos" className="hover:text-white transition">Módulos</a></li>
              <li><a href="#roles" className="hover:text-white transition">Acceso Demo</a></li>
            </ul>
          </section>

          <section className="space-y-3">
            <h3 className="text-sm font-semibold text-white">Módulos</h3>
            <ul className="space-y-2 text-sm text-emerald-200/70">
              <li><Link to="/inventario" className="hover:text-white transition">Inventario</Link></li>
              <li><Link to="/produccion" className="hover:text-white transition">Producción</Link></li>
              <li><Link to="/trazabilidad" className="hover:text-white transition">Trazabilidad</Link></li>
              <li><Link to="/ambiental" className="hover:text-white transition">Ambiental</Link></li>
              <li><Link to="/calidad" className="hover:text-white transition">Calidad</Link></li>
            </ul>
          </section>

          <section className="space-y-3">
            <h3 className="text-sm font-semibold text-white">Acceso</h3>
            <ul className="space-y-2 text-sm text-emerald-200/70">
              <li><Link to="/login" className="hover:text-white transition">Iniciar Sesión</Link></li>
              <li><Link to="/signup" className="hover:text-white transition">Registrarse</Link></li>
              <li><Link to="/dashboard" className="hover:text-white transition">Demo Supervisor</Link></li>
            </ul>
          </section>
        </article>

        <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-emerald-900/60 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-emerald-200/60">
          <p>© 2026 AiDEN · Artificial Intelligence for Nursery Management. Todos los derechos reservados.</p>
          <Link to="/login" className="px-3 py-1 bg-white/10 hover:bg-white/20 text-white rounded-full transition">
            Acceso al Sistema
          </Link>
        </footer>
      </footer>
    </>
  );
}