import { useMemo, useState } from "react";
import { BrainCircuit, Lightbulb, Send, Sparkles } from "lucide-react";

const recomendaciones = [
  "Revisar el lote LT-2024-089 por la incidencia de calidad registrada.",
  "Verificar el inventario de Sustrato Premium antes del siguiente turno.",
  "Comparar producción y cosecha de los últimos seis meses para detectar cambios.",
];

export default function PanelInteligencia() {
  const [consulta, setConsulta] = useState("");
  const [respuesta, setRespuesta] = useState("");

  const resumen = useMemo(
    () => "El módulo analiza la información disponible en la aplicación y presenta recomendaciones para apoyar la toma de decisiones.",
    [],
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!consulta.trim()) return;
    setRespuesta(`Consulta recibida: ${consulta.trim()}. El análisis se conectará al servicio de inteligencia cuando la capa de datos esté disponible.`);
    setConsulta("");
  };

  return (
    <section className="grid gap-6 lg:grid-cols-3">
      <article className="lg:col-span-2 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <header className="flex items-start gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
            <BrainCircuit size={20} />
          </span>
          <section>
            <h2 className="font-semibold text-slate-900">Asistente inteligente</h2>
            <p className="mt-1 text-sm text-slate-500">Consulta información y recibe apoyo para interpretar la operación.</p>
          </section>
        </header>

        <form onSubmit={handleSubmit} className="mt-6 flex gap-2">
          <input value={consulta} onChange={(event) => setConsulta(event.target.value)} className="min-w-0 flex-1 rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600" placeholder="Ej. ¿Qué debería revisar hoy?" aria-label="Consulta al asistente" />
          <button type="submit" className="flex items-center gap-2 rounded-lg bg-emerald-700 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-800"><Send size={15} />Consultar</button>
        </form>

        <article className="mt-5 rounded-xl bg-slate-50 p-4 text-sm leading-6 text-slate-600">
          {respuesta || resumen}
        </article>
      </article>

      <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <header className="flex items-center gap-2">
          <Sparkles size={17} className="text-emerald-700" />
          <h2 className="font-semibold text-slate-900">Recomendaciones</h2>
        </header>
        <section className="mt-4 space-y-3">
          {recomendaciones.map((item) => (
            <article key={item} className="flex gap-3 rounded-lg border border-slate-100 p-3">
              <Lightbulb size={15} className="mt-0.5 shrink-0 text-emerald-600" />
              <p className="text-sm leading-5 text-slate-600">{item}</p>
            </article>
          ))}
        </section>
      </article>
    </section>
  );
}
