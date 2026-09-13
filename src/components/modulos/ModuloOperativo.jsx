export default function ModuloOperativo({ titulo, descripcion }) {
  return (
    <article className="space-y-4">
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-600">AiDEN</p>
        <h1 className="mt-1 text-2xl font-bold text-slate-800">{titulo}</h1>
        <p className="mt-1 text-sm text-slate-500">{descripcion}</p>
      </header>
      <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <header>
          <h2 className="text-base font-semibold text-slate-800">Vista operativa</h2>
          <p className="mt-1 text-sm text-slate-500">Espacio preparado para trabajar con los datos del vivero.</p>
        </header>
        <p className="mt-5 text-sm text-slate-500">Datos de demostración. La capa de datos aún no está conectada.</p>
      </section>
    </article>
  );
}
