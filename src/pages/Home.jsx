import { Leaf, Package, Sprout, GitBranch, Thermometer, ShieldCheck, CircleDollarSign, Users, FileText, BrainCircuit, ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const modulos = [
  [Package, "Inventario", "Control de existencias, movimientos y niveles de stock."],
  [Sprout, "Producción", "Gestión de lotes, etapas y responsables."],
  [Thermometer, "Ambiental", "Seguimiento de temperatura, humedad y luminosidad."],
  [ShieldCheck, "Calidad", "Control de incidencias, severidad y seguimiento."],
  [GitBranch, "Trazabilidad", "Historial de eventos y recorrido de cada lote."],
  [CircleDollarSign, "Costos", "Organización de gastos y comportamiento financiero."],
  [Users, "Personal", "Usuarios, roles, tareas y responsabilidades operativas."],
  [FileText, "Reportes", "Consulta de indicadores y resultados de la operación."],
  [BrainCircuit, "Inteligencia", "Análisis y recomendaciones para apoyar la gestión."],
];

const capacidades = [
  ["Operación visible", "Consulta el estado de los procesos desde un mismo entorno."],
  ["Información organizada", "Centraliza lotes, inventario, personal y registros operativos."],
  ["Decisiones apoyadas", "Usa indicadores y herramientas inteligentes para interpretar la información."],
];

export default function Inicio() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <main className="min-h-screen bg-white font-sans text-slate-800">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <section className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link to="/" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-700 text-white"><Leaf size={16} /></span>
            <span className="text-xl font-bold tracking-tight text-emerald-800">AiDEN</span>
          </Link>
          <nav aria-label="Navegación principal" className="hidden items-center gap-8 md:flex">
            <a href="#inicio" className="text-sm font-medium text-slate-600 hover:text-emerald-700">Inicio</a>
            <a href="#capacidades" className="text-sm font-medium text-slate-600 hover:text-emerald-700">Capacidades</a>
            <a href="#modulos" className="text-sm font-medium text-slate-600 hover:text-emerald-700">Módulos</a>
          </nav>
          <section className="hidden items-center gap-3 md:flex">
            <Link to="/login" className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">Iniciar Sesión</Link>
            <Link to="/signup" className="rounded-lg bg-emerald-700 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-800">Registrarse</Link>
          </section>
          <button type="button" className="rounded-lg p-2 hover:bg-slate-100 md:hidden" onClick={() => setMenuAbierto(!menuAbierto)} aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}>
            {menuAbierto ? <X size={20} /> : <Menu size={20} />}
          </button>
        </section>
        {menuAbierto && (
          <nav className="border-t border-slate-200 bg-white px-6 pb-5 pt-4 md:hidden">
            <section className="space-y-2">
              <a href="#inicio" onClick={() => setMenuAbierto(false)} className="block py-2 text-sm text-slate-600">Inicio</a>
              <a href="#capacidades" onClick={() => setMenuAbierto(false)} className="block py-2 text-sm text-slate-600">Capacidades</a>
              <a href="#modulos" onClick={() => setMenuAbierto(false)} className="block py-2 text-sm text-slate-600">Módulos</a>
            </section>
            <section className="mt-3 flex gap-3">
              <Link to="/login" className="flex-1 rounded-lg border border-slate-200 py-2 text-center text-sm font-semibold">Iniciar Sesión</Link>
              <Link to="/signup" className="flex-1 rounded-lg bg-emerald-700 py-2 text-center text-sm font-semibold text-white">Registrarse</Link>
            </section>
          </nav>
        )}
      </header>

      <section id="inicio" className="border-b border-slate-200 bg-slate-50">
        <section className="mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-2 lg:items-center">
          <section>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-800"><span className="h-2 w-2 rounded-full bg-emerald-600" />Plataforma de gestión</span>
            <h1 className="text-5xl font-bold leading-[1.08] text-slate-900">Una operación de vivero <span className="text-emerald-700">más organizada</span></h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">AiDEN centraliza información, seguimiento operativo e indicadores para facilitar la gestión diaria de un vivero agrícola.</p>
            <section className="mt-8 flex flex-wrap gap-3">
              <Link to="/login" className="flex items-center gap-2 rounded-lg bg-emerald-700 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-800">Iniciar Sesión <ArrowRight size={16} /></Link>
              <a href="#modulos" className="rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">Explorar módulos</a>
            </section>
            <section className="mt-12 grid max-w-lg grid-cols-3 gap-6">
              {[['3', 'Roles'], ['9', 'Módulos'], ['1', 'Entorno integrado']].map(([valor, etiqueta]) => <section key={etiqueta}><p className="text-2xl font-bold text-emerald-700">{valor}</p><p className="mt-1 text-sm text-slate-500">{etiqueta}</p></section>)}
            </section>
          </section>
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl">
            <header className="flex items-center justify-between border-b border-slate-100 pb-4"><section><p className="text-sm font-semibold text-slate-900">Resumen operativo</p><p className="mt-1 text-xs text-slate-500">Información centralizada</p></section><span className="rounded-lg bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">Activo</span></header>
            <section className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[['48', 'Lotes'], ['94%', 'Inventario'], ['25', 'Usuarios'], ['2', 'Alertas']].map(([valor, etiqueta]) => <article key={etiqueta} className="rounded-xl border border-slate-100 bg-slate-50 p-4"><p className="text-xl font-bold text-slate-800">{valor}</p><p className="mt-1 text-xs text-slate-500">{etiqueta}</p></article>)}
            </section>
            <section className="mt-5 rounded-xl border border-slate-100 p-4"><p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Actividad reciente</p><section className="mt-3 space-y-3"><p className="text-sm text-slate-600">Registro de producción actualizado</p><p className="text-sm text-slate-600">Inventario revisado</p><p className="text-sm text-slate-600">Incidencia de calidad en seguimiento</p></section></section>
          </section>
        </section>
      </section>

      <section id="capacidades" className="border-b border-slate-100 py-20">
        <section className="mx-auto max-w-7xl px-6">
          <header className="mx-auto max-w-2xl text-center"><p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">Gestión centralizada</p><h2 className="mt-3 text-3xl font-bold text-slate-900">Información clara para trabajar mejor</h2></header>
          <section className="mt-12 grid gap-6 md:grid-cols-3">{capacidades.map(([titulo, descripcion]) => <article key={titulo} className="rounded-xl border border-slate-200 p-6"><h3 className="font-semibold text-slate-900">{titulo}</h3><p className="mt-3 text-sm leading-6 text-slate-500">{descripcion}</p></article>)}</section>
        </section>
      </section>

      <section id="modulos" className="bg-slate-50 py-20">
        <section className="mx-auto max-w-7xl px-6">
          <header className="max-w-2xl"><p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">Módulos</p><h2 className="mt-3 text-3xl font-bold text-slate-900">Las áreas principales de la operación</h2><p className="mt-4 text-slate-600">Cada módulo concentra una parte específica de la gestión para mantener la información organizada.</p></header>
          <section className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{modulos.map(([Icono, nombre, descripcion]) => <article key={nombre} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700"><Icono size={20} /></span><h3 className="mt-4 font-semibold text-slate-900">{nombre}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{descripcion}</p></article>)}</section>
        </section>
      </section>

      <footer className="border-t border-slate-200 bg-white py-8"><section className="mx-auto flex max-w-7xl flex-col gap-4 px-6 sm:flex-row sm:items-center sm:justify-between"><p className="text-sm text-slate-500">AiDEN · Sistema de gestión para viveros</p><section className="flex gap-4 text-sm"><Link to="/terminos" className="text-slate-500 hover:text-emerald-700">Términos de Uso</Link><Link to="/privacidad" className="text-slate-500 hover:text-emerald-700">Política de Privacidad</Link></section></section></footer>
    </main>
  );
}
