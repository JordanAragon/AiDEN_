import { useMemo, useState } from "react";
import { AlertTriangle, CheckCircle2, ClipboardCheck, CircleAlert, Plus, Search, X } from "lucide-react";
import { getSession } from "../../utilidades/autenticacion";

const KEY = "aiden-calidad";
const PEOPLE = "aiden-personal";
const LOTS = "aiden-produccion";
const TRACE = "aiden-trazabilidad";
const seed = [
  { id: "INC-031", codigo: "INC-031", lote: "LT-2024-089", prioridad: "Alta", descripcion: "Hojas amarillas", responsable: "Laura M.", estado: "Abierta", accion: "", fecha: "2026-09-13" },
  { id: "INC-028", codigo: "INC-028", lote: "LT-2024-097", prioridad: "Media", descripcion: "Crecimiento irregular", responsable: "Andrés R.", estado: "En revisión", accion: "Revisar riego y sustrato", fecha: "2026-09-12" },
  { id: "INC-026", codigo: "INC-026", lote: "LT-2024-091", prioridad: "Baja", descripcion: "Bandejas deterioradas", responsable: "Camila P.", estado: "Cerrada", accion: "Reemplazar bandeja", fecha: "2026-09-10" },
];
const read = (key, fallback) => { try { const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback; } catch { return fallback; } };
const write = (key, value) => localStorage.setItem(key, JSON.stringify(value));
const uid = () => `INC-${Date.now().toString(36).toUpperCase()}`;
function Modal({ title, onClose, children }) { return <section className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/35 p-4 backdrop-blur-sm"><article className="max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-slate-200 bg-white shadow-2xl"><header className="flex items-center justify-between border-b border-slate-100 px-5 py-4"><h2 className="font-semibold text-slate-900">{title}</h2><button type="button" onClick={onClose} aria-label="Cerrar" className="rounded-lg p-2 text-slate-400 hover:bg-slate-100"><X size={16}/></button></header><section className="p-5">{children}</section></article></section>; }
function Field({ label, children }) { return <label className="block text-sm font-medium text-slate-600"><span className="mb-1.5 block">{label}</span>{children}</label>; }
function Kpi({ label, value, detail, icon: Icon, tone="green" }) { const map={green:"bg-emerald-50 text-emerald-700",amber:"bg-amber-50 text-amber-700",red:"bg-red-50 text-red-700"}; return <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"><span className={`flex h-9 w-9 items-center justify-center rounded-xl ${map[tone]}`}><Icon size={17}/></span><p className="mt-4 text-2xl font-bold text-slate-950">{value}</p><p className="text-xs font-semibold text-slate-600">{label}</p><p className="mt-1 text-[11px] text-slate-400">{detail}</p></article>; }

export default function CalidadOperativo() {
  const session = getSession();
  const role = session?.role || "operario";
  const [rows, setRows] = useState(() => read(KEY, seed));
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("Todas");
  const [modal, setModal] = useState(false);
  const [selected, setSelected] = useState(null);
  const lots = read(LOTS, []);
  const people = read(PEOPLE, []);
  const ownLotNames = new Set(lots.filter((l) => role !== "operario" || l.responsable === session?.name).map((l) => l.lote));
  const visible = role === "operario" ? rows.filter((r) => ownLotNames.has(r.lote)) : rows;
  const open = visible.filter((r) => (r.estado ?? r.estadoManual) !== "Cerrada");
  const high = open.filter((r) => r.prioridad === "Alta");
  const filtered = useMemo(() => visible.filter((r) => (filter === "Todas" || (r.estado ?? r.estadoManual) === filter) && `${r.codigo} ${r.lote} ${r.descripcion} ${r.responsable}`.toLowerCase().includes(query.toLowerCase())), [visible, filter, query]);
  const save = (data) => { setRows(data); write(KEY, data); window.dispatchEvent(new Event("aiden-data-change")); };
  const create = (f) => {
    if (!f.lote || !ownLotNames.has(f.lote) || !f.descripcion.trim() || !["Alta","Media","Baja"].includes(f.prioridad)) return;
    const codigo = uid();
    const nuevo = { ...f, id: codigo, codigo, estado: "Abierta", fecha: new Date().toISOString().slice(0,10), responsable: role === "operario" ? session?.name || f.responsable : f.responsable };
    save([nuevo, ...rows]); setModal(false);
  };
  const update = (row, field, value) => {
    if (role === "operario") return;
    if (field === "estado" && !["Abierta","En revisión","Cerrada"].includes(value)) return;
    const next = rows.map((r) => r.id === row.id ? { ...r, [field]: value } : r);
    save(next);
    if (field === "estado" && value === "Cerrada") {
      const trace = read(TRACE, []);
      write(TRACE, [{ id:`TRZ-${Date.now()}`, lote:row.lote, evento:"Cierre de calidad", fecha:new Date().toISOString().slice(0,10), responsable:session?.name || row.responsable, detalle:`Se cerró ${row.codigo}: ${row.accion || "sin acción documentada"}.` }, ...trace]);
    }
  };
  return <section className="space-y-6">
    <header className="flex flex-wrap items-start justify-between gap-4"><section><p className="text-[11px] font-bold uppercase tracking-[0.16em] text-emerald-700">AiDEN / seguimiento</p><h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-950">Calidad</h1><p className="mt-1 max-w-2xl text-sm text-slate-500">Registra desviaciones y conserva la respuesta aplicada a cada incidencia.</p></section><button type="button" onClick={()=>setModal(true)} className="inline-flex items-center gap-2 rounded-xl bg-emerald-700 px-4 py-2.5 text-sm font-semibold text-white"><Plus size={16}/>Nueva incidencia</button></section>
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"><Kpi label="Incidencias" value={visible.length} detail="Registros visibles" icon={ClipboardCheck}/><Kpi label="Abiertas" value={open.length} detail="En seguimiento" icon={CircleAlert} tone="amber"/><Kpi label="Alta prioridad" value={high.length} detail="Requieren respuesta" icon={AlertTriangle} tone="red"/><Kpi label="Resueltas" value={visible.filter((r)=>(r.estado??r.estadoManual)==="Cerrada").length} detail="Cerradas" icon={CheckCircle2}/></section>
    <section className="rounded-2xl border border-slate-200 bg-white shadow-sm"><header className="flex flex-wrap items-center gap-3 border-b border-slate-100 p-4"><section className="relative min-w-56 flex-1"><Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"/><input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Buscar incidencia, lote o responsable..." className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-9 pr-3 text-sm outline-none focus:border-emerald-500"/></section>{["Todas","Abierta","En revisión","Cerrada"].map((s)=><button key={s} type="button" onClick={()=>setFilter(s)} className={`rounded-lg px-3 py-1.5 text-xs font-semibold ${filter===s?"bg-emerald-700 text-white":"bg-slate-100 text-slate-500"}`}>{s}</button>)}</header><section className="grid gap-3 p-4">{filtered.map((r)=><article key={r.id} className="rounded-2xl border border-slate-200 p-4"><header className="flex flex-wrap items-start justify-between gap-3"><section><p className="font-mono text-[10px] text-emerald-700">{r.codigo} · {r.lote || "Sin lote"}</p><h2 className="mt-1 text-sm font-semibold text-slate-900">{r.descripcion}</h2><p className="mt-1 text-xs text-slate-400">{r.responsable || "Sin asignar"} · {r.fecha}</p></section><section className="flex gap-2"><span className={`rounded-full px-2 py-1 text-[10px] font-bold ${r.prioridad==="Alta"?"bg-red-50 text-red-700":r.prioridad==="Media"?"bg-amber-50 text-amber-700":"bg-slate-100 text-slate-500"}`}>{r.prioridad}</span>{role!=="operario"?<select value={r.estado??r.estadoManual} onChange={(e)=>update(r,"estado",e.target.value)} aria-label={`Estado de ${r.codigo}`} className="rounded-lg border border-slate-200 px-2 py-1 text-[10px] font-semibold"><option>Abierta</option><option>En revisión</option><option>Cerrada</option></select>:<span className="rounded-full bg-slate-100 px-2 py-1 text-[10px] font-semibold text-slate-500">{r.estado??r.estadoManual}</span>}</section></header><section className="mt-4">{role!=="operario"?<Field label="Acción correctiva"><input value={r.accion||""} onChange={(e)=>update(r,"accion",e.target.value)} placeholder="Qué se hará para corregir..." className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-emerald-500"/></Field>:<section className="rounded-xl bg-slate-50 p-3"><p className="text-[10px] uppercase tracking-wider text-slate-400">Acción definida</p><p className="mt-1 text-sm text-slate-700">{r.accion||"Pendiente de definir por supervisión."}</p></section>}</section></article>)}{!filtered.length&&<p className="p-10 text-center text-sm text-slate-400">No hay incidencias visibles para tu rol y filtros actuales.</p>}</section></section>
    {modal&&<Modal title="Nueva incidencia" onClose={()=>setModal(false)}><form className="space-y-4" onSubmit={(e)=>{e.preventDefault();create(Object.fromEntries(new FormData(e.currentTarget).entries()));}}><Field label="Lote"><select name="lote" required className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm">{[...ownLotNames].map((l)=><option key={l}>{l}</option>)}</select></Field><Field label="Prioridad"><select name="prioridad" className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm"><option>Media</option><option>Alta</option><option>Baja</option></select></Field><Field label="Descripción"><textarea name="descripcion" required className="mt-1 min-h-24 w-full rounded-xl border border-slate-200 p-3 text-sm" placeholder="Describe la desviación observada..."/></Field><Field label="Responsable"><select name="responsable" defaultValue={role === "operario" ? session?.name || "" : people[0]?.nombre || ""} disabled={role === "operario"} className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm">{people.map((p)=><option key={p.id}>{p.nombre}</option>)}{role === "operario" && session?.name && !people.some((p)=>p.nombre===session.name)&&<option>{session.name}</option>}</select></Field><button className="w-full rounded-xl bg-emerald-700 py-2.5 text-sm font-semibold text-white">Registrar incidencia</button></form></Modal>}
  </section>;
}
