import { ArrowRight, Check, CircleAlert, Edit3, Plus, Search, Trash2, X } from "lucide-react";
import { useMemo, useState } from "react";

const MODULOS = {
  inventario: {
    etiqueta: "Operación", titulo: "Inventario", descripcion: "Control de existencias, movimientos y abastecimiento.", boton: "Registrar insumo",
    columnas: ["Insumo", "Categoría", "Stock", "Mínimo", "Estado"],
    campos: [{id:"nombre",label:"Nombre del insumo",type:"text"},{id:"categoria",label:"Categoría",type:"select",options:["Semillas","Sustratos","Fertilizantes","Herramientas","Envases"]},{id:"stock",label:"Existencia",type:"number"},{id:"minimo",label:"Stock mínimo",type:"number"},{id:"unidad",label:"Unidad",type:"select",options:["unidades","litros","kilogramos","sobres"]}],
    iniciales: [{id:"INV-001",nombre:"Sustrato Premium",categoria:"Sustratos",stock:18,minimo:25,unidad:"unidades"},{id:"INV-002",nombre:"Bandeja 128",categoria:"Envases",stock:146,minimo:60,unidad:"unidades"},{id:"INV-003",nombre:"Fertilizante foliar",categoria:"Fertilizantes",stock:42,minimo:15,unidad:"litros"},{id:"INV-004",nombre:"Semilla de tomate",categoria:"Semillas",stock:8,minimo:10,unidad:"sobres"}],
    estado: r => Number(r.stock) <= Number(r.minimo) ? "Bajo" : "Disponible", buscar: r => [r.nombre,r.categoria,r.unidad].join(" ")
  },
  produccion: {
    etiqueta: "Operación", titulo: "Producción", descripcion: "Gestiona lotes, etapas, cantidades y responsables.", boton: "Registrar lote",
    columnas: ["Lote", "Cultivo", "Cantidad", "Etapa", "Responsable"],
    campos: [{id:"lote",label:"Código del lote",type:"text"},{id:"cultivo",label:"Cultivo",type:"text"},{id:"cantidad",label:"Cantidad de plantas",type:"number"},{id:"etapa",label:"Etapa",type:"select",options:["Germinación","Adaptación","Desarrollo","Cosecha"]},{id:"responsable",label:"Responsable",type:"text"},{id:"fecha",label:"Fecha de inicio",type:"date"}],
    iniciales: [{id:"LT-2024-089",lote:"LT-2024-089",cultivo:"Tomate",cantidad:420,etapa:"Cosecha",responsable:"Laura M.",fecha:"2026-08-02"},{id:"LT-2024-091",lote:"LT-2024-091",cultivo:"Lechuga",cantidad:680,etapa:"Desarrollo",responsable:"Andrés R.",fecha:"2026-08-15"},{id:"LT-2024-094",lote:"LT-2024-094",cultivo:"Cilantro",cantidad:310,etapa:"Germinación",responsable:"Camila P.",fecha:"2026-09-03"},{id:"LT-2024-097",lote:"LT-2024-097",cultivo:"Pimentón",cantidad:260,etapa:"Adaptación",responsable:"Julián G.",fecha:"2026-08-28"}],
    estado: r => r.etapa === "Cosecha" ? "Listo" : r.etapa === "Adaptación" ? "En riesgo" : "En curso", buscar: r => [r.lote,r.cultivo,r.etapa,r.responsable].join(" ")
  },
  trazabilidad: {
    etiqueta: "Seguimiento", titulo: "Trazabilidad", descripcion: "Registra cada evento que construye la historia de un lote.", boton: "Registrar evento",
    columnas: ["Lote", "Evento", "Fecha", "Responsable", "Detalle"],
    campos: [{id:"lote",label:"Lote",type:"text"},{id:"evento",label:"Tipo de evento",type:"select",options:["Registro","Cambio de etapa","Riego","Inspección de calidad","Movimiento","Incidencia"]},{id:"fecha",label:"Fecha",type:"date"},{id:"responsable",label:"Responsable",type:"text"},{id:"detalle",label:"Detalle",type:"textarea"}],
    iniciales: [{id:"TRZ-001",lote:"LT-2024-089",evento:"Inspección de calidad",fecha:"2026-09-13",responsable:"Laura M.",detalle:"Revisión visual del follaje."},{id:"TRZ-002",lote:"LT-2024-091",evento:"Cambio de etapa",fecha:"2026-09-12",responsable:"Andrés R.",detalle:"Inicio de desarrollo vegetativo."},{id:"TRZ-003",lote:"LT-2024-094",evento:"Riego",fecha:"2026-09-12",responsable:"Camila P.",detalle:"Riego de mantenimiento."}],
    estado: r => r.evento === "Incidencia" ? "Atención" : "Registrado", buscar: r => [r.lote,r.evento,r.responsable,r.detalle].join(" ")
  },
  ambiental: {
    etiqueta: "Seguimiento", titulo: "Ambiental", descripcion: "Registra y consulta las condiciones de cada zona de producción.", boton: "Registrar lectura",
    columnas: ["Zona", "Temperatura", "Humedad", "Iluminación", "Estado"],
    campos: [{id:"zona",label:"Zona",type:"text"},{id:"temperatura",label:"Temperatura (°C)",type:"number",step:"0.1"},{id:"humedad",label:"Humedad (%)",type:"number"},{id:"iluminacion",label:"Iluminación (lux)",type:"number"},{id:"fecha",label:"Fecha y hora",type:"datetime-local"}],
    iniciales: [{id:"AMB-001",zona:"Invernadero 1",temperatura:23.9,humedad:65,iluminacion:8400,fecha:"2026-09-13T09:30"},{id:"AMB-002",zona:"Invernadero 2",temperatura:28.6,humedad:71,iluminacion:7900,fecha:"2026-09-13T09:25"},{id:"AMB-003",zona:"Área de germinación",temperatura:22.4,humedad:69,iluminacion:6100,fecha:"2026-09-13T09:20"}],
    estado: r => Number(r.temperatura) > 27 || Number(r.humedad) < 55 ? "Atención" : "Estable", buscar: r => [r.zona,r.temperatura,r.humedad,r.iluminacion].join(" ")
  },
  calidad: {
    etiqueta: "Seguimiento", titulo: "Calidad", descripcion: "Gestiona incidencias, revisiones y acciones correctivas.", boton: "Registrar incidencia",
    columnas: ["Incidencia", "Lote", "Prioridad", "Estado", "Responsable"],
    campos: [{id:"codigo",label:"Código",type:"text"},{id:"lote",label:"Lote",type:"text"},{id:"prioridad",label:"Prioridad",type:"select",options:["Baja","Media","Alta"]},{id:"descripcion",label:"Descripción",type:"textarea"},{id:"responsable",label:"Responsable",type:"text"}],
    iniciales: [{id:"INC-031",codigo:"INC-031",lote:"LT-2024-089",prioridad:"Alta",descripcion:"Hojas amarillas",responsable:"Laura M.",estadoManual:"Abierta"},{id:"INC-028",codigo:"INC-028",lote:"LT-2024-097",prioridad:"Media",descripcion:"Crecimiento irregular",responsable:"Andrés R.",estadoManual:"En revisión"},{id:"INC-026",codigo:"INC-026",lote:"LT-2024-091",prioridad:"Baja",descripcion:"Bandejas deterioradas",responsable:"Camila P.",estadoManual:"Cerrada"}],
    estado: r => r.estadoManual || "Abierta", buscar: r => [r.codigo,r.lote,r.prioridad,r.descripcion,r.responsable,r.estadoManual].join(" ")
  },
  costos: {
    etiqueta: "Seguimiento", titulo: "Costos", descripcion: "Registra costos por lote y analiza el comportamiento de la operación.", boton: "Registrar costo",
    columnas: ["Lote", "Concepto", "Categoría", "Valor", "Fecha"],
    campos: [{id:"lote",label:"Lote",type:"text"},{id:"concepto",label:"Concepto",type:"text"},{id:"categoria",label:"Categoría",type:"select",options:["Insumos","Mano de obra","Transporte","Servicios","Otros"]},{id:"valor",label:"Valor (COP)",type:"number"},{id:"fecha",label:"Fecha",type:"date"}],
    iniciales: [{id:"CST-001",lote:"LT-2024-089",concepto:"Sustrato y fertilización",categoria:"Insumos",valor:318000,fecha:"2026-09-03"},{id:"CST-002",lote:"LT-2024-091",concepto:"Material de siembra",categoria:"Insumos",valor:241000,fecha:"2026-09-04"},{id:"CST-003",lote:"LT-2024-094",concepto:"Jornada de adecuación",categoria:"Mano de obra",valor:184000,fecha:"2026-09-08"}],
    estado: r => Number(r.valor) >= 300000 ? "Alto" : "En rango", buscar: r => [r.lote,r.concepto,r.categoria,r.valor].join(" ")
  },
  personal: {
    etiqueta: "Sistema", titulo: "Personal", descripcion: "Administra personas, roles y responsabilidades dentro del vivero.", boton: "Registrar persona",
    columnas: ["Nombre", "Cargo", "Contacto", "Actividades", "Estado"],
    campos: [{id:"nombre",label:"Nombre completo",type:"text"},{id:"cargo",label:"Cargo",type:"select",options:["Administrador","Supervisor","Operario"]},{id:"contacto",label:"Contacto",type:"text"},{id:"actividades",label:"Actividades asignadas",type:"number"}],
    iniciales: [{id:"PER-001",nombre:"Laura M.",cargo:"Supervisor",contacto:"310 555 0142",actividades:8,estadoManual:"Activo"},{id:"PER-002",nombre:"Andrés R.",cargo:"Operario",contacto:"312 555 0188",actividades:5,estadoManual:"Activo"},{id:"PER-003",nombre:"Camila P.",cargo:"Operario",contacto:"314 555 0127",actividades:4,estadoManual:"Activo"},{id:"PER-004",nombre:"Julián G.",cargo:"Operario",contacto:"316 555 0104",actividades:3,estadoManual:"Pendiente"}],
    estado: r => r.estadoManual || "Activo", buscar: r => [r.nombre,r.cargo,r.contacto].join(" ")
  }
};

const clave = tipo => `aiden-${tipo}`;
const leer = (tipo, iniciales) => { try { const guardado = localStorage.getItem(clave(tipo)); return guardado ? JSON.parse(guardado) : iniciales; } catch { return iniciales; } };
const money = valor => new Intl.NumberFormat("es-CO", { style:"currency", currency:"COP", maximumFractionDigits:0 }).format(Number(valor) || 0);
const valorCampo = (tipo, fila, columna) => {
  const mapa = {"Insumo":"nombre","Categoría":"categoria","Stock":"stock","Mínimo":"minimo","Lote":"lote","Cultivo":"cultivo","Cantidad":"cantidad","Etapa":"etapa","Responsable":"responsable","Evento":"evento","Fecha":"fecha","Detalle":"detalle","Zona":"zona","Temperatura":"temperatura","Humedad":"humedad","Iluminación":"iluminacion","Prioridad":"prioridad","Estado":"estadoManual","Incidencia":"codigo","Descripción":"descripcion","Cargo":"cargo","Contacto":"contacto","Actividades":"actividades","Concepto":"concepto","Valor":"valor"};
  if (tipo === "costos" && columna === "Valor") return money(fila.valor);
  if (tipo === "ambiental" && columna === "Temperatura") return `${fila.temperatura} °C`;
  if (tipo === "ambiental" && columna === "Humedad") return `${fila.humedad} %`;
  if (tipo === "ambiental" && columna === "Iluminación") return `${fila.iluminacion} lux`;
  return fila[mapa[columna]] ?? "";
};

function Campo({ campo, valor, onChange }) {
  const props = { id:campo.id, value:valor ?? "", onChange:e=>onChange(campo.id,e.target.value), required:true, className:"mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100" };
  return <label htmlFor={campo.id} className="block text-sm font-medium text-slate-700">{campo.label}{campo.type === "textarea" ? <textarea {...props} rows={3}/> : campo.type === "select" ? <select {...props}><option value="">Seleccionar</option>{campo.options.map(o=><option key={o} value={o}>{o}</option>)}</select> : <input {...props} type={campo.type} step={campo.step}/>}</label>;
}

export default function ModuloOperativo({ tipo }) {
  const config = MODULOS[tipo];
  const [registros, setRegistros] = useState(() => leer(tipo, config?.iniciales || []));
  const [busqueda, setBusqueda] = useState("");
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [editando, setEditando] = useState(null);
  const [mensaje, setMensaje] = useState("");
  const [formulario, setFormulario] = useState({});
  if (!config) return <p className="text-sm text-slate-500">Módulo no disponible.</p>;
  const guardar = proximos => { setRegistros(proximos); localStorage.setItem(clave(tipo), JSON.stringify(proximos)); };
  const abrirNuevo = () => { setEditando(null); setFormulario(Object.fromEntries(config.campos.map(c=>[c.id,""]))); setMostrarFormulario(true); };
  const abrirEditar = registro => { setEditando(registro.id); setFormulario(Object.fromEntries(config.campos.map(c=>[c.id,registro[c.id] ?? ""]))); setMostrarFormulario(true); };
  const enviar = e => { e.preventDefault(); const dato = {...formulario,id:editando || `${tipo.slice(0,3).toUpperCase()}-${Date.now()}`}; const proximos = editando ? registros.map(r=>r.id===editando ? {...r,...dato}:r) : [dato,...registros]; guardar(proximos); setMostrarFormulario(false); setMensaje(editando ? "Registro actualizado" : "Registro creado"); window.setTimeout(()=>setMensaje(""),2200); };
  const eliminar = id => { if(!window.confirm("¿Eliminar este registro? Esta acción no se puede deshacer.")) return; guardar(registros.filter(r=>r.id!==id)); };
  const filtrados = useMemo(()=>registros.filter(r=>config.buscar(r).toLowerCase().includes(busqueda.trim().toLowerCase())),[registros,busqueda,config]);
  const estados = useMemo(()=>filtrados.reduce((acc,r)=>{const estado=config.estado(r); acc[estado]=(acc[estado]||0)+1; return acc;},{}),[filtrados,config]);
  const estadoPrincipal = Object.entries(estados).sort((a,b)=>b[1]-a[1])[0];
  return <article className="space-y-5">
    <header className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between"><section><p className="text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-700">{config.etiqueta}</p><h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-950">{config.titulo}</h1><p className="mt-1 max-w-2xl text-sm leading-6 text-slate-500">{config.descripcion}</p></section><button type="button" onClick={abrirNuevo} className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800"><Plus size={17}/>{config.boton}</button></header>
    <section aria-label="Resumen" className="grid gap-3 sm:grid-cols-3"><article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"><p className="text-2xl font-bold text-slate-950">{registros.length}</p><p className="mt-1 text-xs text-slate-500">Registros</p></article><article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"><p className="text-2xl font-bold text-slate-950">{estadoPrincipal?.[1] || 0}</p><p className="mt-1 text-xs text-slate-500">{estadoPrincipal?.[0] || "Sin estado"}</p></article><article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"><p className="text-2xl font-bold text-slate-950">{Object.keys(estados).length}</p><p className="mt-1 text-xs text-slate-500">Estados en seguimiento</p></article></section>
    <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"><header className="flex flex-col gap-3 border-b border-slate-100 p-4 md:flex-row md:items-center md:justify-between"><section><h2 className="font-semibold text-slate-900">Registros</h2><p className="mt-1 text-xs text-slate-500">Consulta y gestiona la información del vivero desde una sola vista.</p></section><label className="relative block w-full md:w-72"><Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"/><input type="search" value={busqueda} onChange={e=>setBusqueda(e.target.value)} placeholder={`Buscar en ${config.titulo.toLowerCase()}`} className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-9 pr-3 text-sm outline-none focus:border-emerald-500"/></label></header><section className="overflow-x-auto"><table className="w-full min-w-[860px] text-left text-sm"><thead className="bg-slate-50 text-[11px] uppercase tracking-wide text-slate-400"><tr>{config.columnas.map(c=><th key={c} className="px-4 py-3 font-semibold">{c}</th>)}<th className="px-4 py-3 text-right font-semibold">Acciones</th></tr></thead><tbody className="divide-y divide-slate-100">{filtrados.map(r=><tr key={r.id} className="group transition hover:bg-slate-50/70">{config.columnas.map((c,i)=>{const estado=config.estado(r); return <td key={c} className={`px-4 py-3 ${i===0 ? "font-semibold text-slate-800":"text-slate-600"}`}>{i===config.columnas.length-1 ? <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${["Atención","Bajo","En riesgo","Alto"].includes(estado)?"bg-amber-50 text-amber-700":"bg-emerald-50 text-emerald-700"}`}>{estado}</span> : valorCampo(tipo,r,c)}</td>})}<td className="px-4 py-3"><nav aria-label={`Acciones para ${r.id}`} className="flex justify-end gap-1"><button type="button" onClick={()=>abrirEditar(r)} className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700" aria-label={`Editar ${r.id}`}><Edit3 size={15}/></button><button type="button" onClick={()=>eliminar(r.id)} className="rounded-lg p-2 text-slate-400 hover:bg-red-50 hover:text-red-600" aria-label={`Eliminar ${r.id}`}><Trash2 size={15}/></button></nav></td></tr>)}</tbody></table>{filtrados.length===0&&<p className="p-10 text-center text-sm text-slate-500">No hay registros que coincidan con la búsqueda.</p>}</section></section>
    <nav aria-label="Flujo entre módulos" className="rounded-2xl border border-slate-200 bg-white p-5"><p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">Siguiente paso</p><section className="mt-3 flex flex-wrap gap-2">{({inventario:[["Producción","/produccion"],["Costos","/costos"]],produccion:[["Trazabilidad","/trazabilidad"],["Ambiental","/ambiental"],["Calidad","/calidad"],["Costos","/costos"]],trazabilidad:[["Producción","/produccion"],["Calidad","/calidad"],["Ambiental","/ambiental"]],ambiental:[["Producción","/produccion"],["Trazabilidad","/trazabilidad"],["Calidad","/calidad"]],calidad:[["Producción","/produccion"],["Trazabilidad","/trazabilidad"],["Personal","/personal"]],costos:[["Producción","/produccion"],["Inventario","/inventario"],["Reportes","/reportes"]],personal:[["Producción","/produccion"],["Calidad","/calidad"],["Reportes","/reportes"]]}[tipo] || []).map(([nombre,ruta])=><a key={ruta} href={ruta} className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-800">{nombre}<ArrowRight size={14}/></a>)}</section></nav>
    {mensaje&&<aside role="status" className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-4 py-3 text-sm font-medium text-white shadow-xl"><Check size={16} className="text-emerald-400"/>{mensaje}</aside>}
    {mostrarFormulario&&<section role="dialog" aria-modal="true" aria-label={editando?`Editar ${config.titulo}`:`Registrar en ${config.titulo}`} className="fixed inset-0 z-40 flex items-center justify-center bg-slate-950/45 p-4"><article className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl"><header className="flex items-center justify-between border-b border-slate-100 px-5 py-4"><section><h2 className="text-lg font-bold text-slate-950">{editando?"Editar registro":config.boton}</h2><p className="mt-0.5 text-xs text-slate-500">Registra la información y guarda los cambios.</p></section><button type="button" onClick={()=>setMostrarFormulario(false)} className="rounded-lg p-2 text-slate-400 hover:bg-slate-100" aria-label="Cerrar"><X size={18}/></button></header><form onSubmit={enviar} className="space-y-4 p-5"><section className="grid gap-4 sm:grid-cols-2">{config.campos.map(c=><Campo key={c.id} campo={c} valor={formulario[c.id]} onChange={(id,v)=>setFormulario(prev=>({...prev,[id]:v}))}/>)}</section><footer className="flex justify-end gap-2 border-t border-slate-100 pt-4"><button type="button" onClick={()=>setMostrarFormulario(false)} className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-50">Cancelar</button><button type="submit" className="rounded-xl bg-emerald-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-800">{editando?"Guardar cambios":"Guardar registro"}</button></footer></form></article></section>}
  </article>;
}
