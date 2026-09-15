import { useMemo, useState } from "react";
import { BarChart3, Download, FileText, Leaf, Package, ShieldCheck, Sprout, Users } from "lucide-react";

const leer=(key,fallback=[])=>{try{const raw=localStorage.getItem(key);return raw?JSON.parse(raw):fallback}catch{return fallback}};
const money=v=>new Intl.NumberFormat("es-CO",{style:"currency",currency:"COP",maximumFractionDigits:0}).format(Number(v)||0);

const reportes=[
 {id:"produccion",titulo:"Producción por lote",descripcion:"Estado, etapa, responsable y cantidad de plantas.",icon:Sprout},
 {id:"inventario",titulo:"Inventario y reposición",descripcion:"Existencias, mínimos y artículos que requieren atención.",icon:Package},
 {id:"calidad",titulo:"Incidencias de calidad",descripcion:"Casos abiertos, prioridad y responsables.",icon:ShieldCheck},
 {id:"ambiental",titulo:"Resumen ambiental",descripcion:"Última lectura disponible por zona y alertas.",icon:Leaf},
 {id:"personal",titulo:"Carga de trabajo",descripcion:"Tareas pendientes y completadas por colaborador.",icon:Users},
 {id:"costos",titulo:"Costos por lote",descripcion:"Gasto acumulado, costo por planta y balance registrado.",icon:BarChart3},
];

function construir(id){
 const produccion=leer("produccion"); const inventario=leer("inventario"); const calidad=leer("calidad"); const ambiental=leer("ambiental"); const personal=leer("personal"); const tareas=leer("tareas"); const costos=leer("costos");
 if(id==="produccion")return produccion.map(r=>({Lote:r.lote,Cultivo:r.cultivo,Plantas:r.cantidad,Etapa:r.etapa,Responsable:r.responsable,Ubicacion:r.ubicacion}));
 if(id==="inventario")return inventario.map(r=>({Insumo:r.nombre,Categoria:r.categoria,Stock:r.stock,Minimo:r.minimo,Unidad:r.unidad,Estado:Number(r.stock)<=Number(r.minimo)?"Bajo":"Disponible"}));
 if(id==="calidad")return calidad.map(r=>({Codigo:r.codigo||r.id,Lote:r.lote,Prioridad:r.prioridad,Estado:r.estado??r.estadoManual??"Abierta",Responsable:r.responsable,Descripcion:r.descripcion}));
 if(id==="ambiental")return ambiental.map(r=>({Zona:r.zona,Temperatura:r.temperatura,Humedad:r.humedad,Iluminacion:r.iluminacion,Fecha:r.fecha}));
 if(id==="personal")return personal.map(p=>{const own=tareas.filter(t=>t.responsable===p.nombre);return{Persona:p.nombre,Cargo:p.cargo,Departamento:p.departamento,Tareas:own.length,Pendientes:own.filter(t=>t.estado!=="Completada").length,Completadas:own.filter(t=>t.estado==="Completada").length}});
 return produccion.map(l=>{const gastos=costos.filter(c=>c.lote===l.lote&&c.tipo!=="ingreso").reduce((s,c)=>s+Number(c.valor||0),0);const ingresos=costos.filter(c=>c.lote===l.lote&&c.tipo==="ingreso").reduce((s,c)=>s+Number(c.valor||0),0);return{Lote:l.lote,Cultivo:l.cultivo,Plantas:l.cantidad,Gastos:money(gastos),CostoPorPlanta:money(l.cantidad?gastos/Number(l.cantidad):0),Ingresos:money(ingresos),Balance:money(ingresos-gastos)}}).filter(r=>Number(r.Plantas)>0);
}
function exportar(nombre,rows){if(!rows.length)return;const headers=Object.keys(rows[0]);const csv=[headers.join(","),...rows.map(r=>headers.map(h=>JSON.stringify(r[h]??"")).join(","))].join("\n");const blob=new Blob([csv],{type:"text/csv;charset=utf-8"});const url=URL.createObjectURL(blob);const a=document.createElement("a");a.href=url;a.download=`aiden-${nombre}.csv`;a.click();URL.revokeObjectURL(url)}

export default function ReportesOperativo(){
 const [selected,setSelected]=useState("produccion");
 const rows=useMemo(()=>construir(selected),[selected]);
 const selectedMeta=reportes.find(r=>r.id===selected);
 return <section className="space-y-6"><header className="flex flex-wrap items-start justify-between gap-4"><section><p className="text-[11px] font-bold uppercase tracking-[0.16em] text-emerald-700">AiDEN / sistema</p><h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-950">Reportes operativos</h1><p className="mt-1 max-w-2xl text-sm text-slate-500">Consulta información consolidada de los módulos. Cada reporte se construye con los datos actuales de AiDEN.</p></section>{rows.length>0&&<button type="button" onClick={()=>exportar(selected,rows)} className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm font-semibold text-slate-600 hover:border-emerald-200 hover:text-emerald-700"><Download size={15}/>Exportar CSV</button>}</header>
 <section className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">{reportes.map(r=>{const Icon=r.icon;return <button type="button" key={r.id} onClick={()=>setSelected(r.id)} className={`rounded-2xl border p-4 text-left transition ${selected===r.id?"border-emerald-300 bg-emerald-50/50":"border-slate-200 bg-white hover:border-emerald-200"}`}><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700"><Icon size={17}/></span><h2 className="mt-3 text-sm font-semibold text-slate-900">{r.titulo}</h2><p className="mt-1 text-xs leading-5 text-slate-500">{r.descripcion}</p></button>})}</section>
 <section className="rounded-2xl border border-slate-200 bg-white shadow-sm"><header className="flex items-center gap-3 border-b border-slate-100 p-5"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-50 text-slate-600"><FileText size={16}/></span><section><h2 className="font-semibold text-slate-900">{selectedMeta?.titulo}</h2><p className="text-xs text-slate-400">{rows.length} registros disponibles</p></section></header><section className="overflow-x-auto"><table className="w-full min-w-[760px]"><thead><tr className="bg-slate-50">{(rows[0]?Object.keys(rows[0]):[]).map(h=><th key={h} className="px-4 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-slate-400">{h}</th>)}</tr></thead><tbody>{rows.slice(0,20).map((r,i)=><tr key={i} className="border-t border-slate-100">{Object.keys(rows[0]||{}).map(h=><td key={h} className="px-4 py-3 text-sm text-slate-700">{String(r[h]??"—")}</td>)}</tr>)}{!rows.length&&<tr><td colSpan={Object.keys(rows[0]||{Reporte:1}).length} className="px-4 py-12 text-center text-sm text-slate-400">No hay datos registrados para generar este reporte.</td></tr>}</tbody></table></section></section></section>;
}
