import {
  ArrowDownRight,
  ArrowRight,
  CircleDollarSign,
  FileText,
  GitBranch,
  Leaf,
  Menu,
  Package,
  Settings,
  ShieldCheck,
  Sprout,
  Thermometer,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

// Rediseño premium AiDEN: narrativa centrada en el lote, producto visible y motion progresivo.

const recorridoLote = [
  ["01", "Registro", "El lote entra al sistema con su información básica."],
  ["02", "Producción", "Se registran etapas, actividades y responsables."],
  ["03", "Ambiente", "Se consultan las condiciones que acompañan su crecimiento."],
  ["04", "Calidad", "Las incidencias quedan asociadas al lote y a su seguimiento."],
  ["05", "Historial", "Cada evento queda disponible para revisar y tomar decisiones."],
];

const modulos = [
  [Package, "Inventario", "Existencias, movimientos y niveles de stock.", "/inventario"],
  [Sprout, "Producción", "Lotes, etapas y actividades productivas.", "/produccion"],
  [GitBranch, "Trazabilidad", "Recorrido e historial completo por lote.", "/trazabilidad"],
  [Thermometer, "Ambiental", "Temperatura, humedad y luminosidad registradas.", "/ambiental"],
  [ShieldCheck, "Calidad", "Incidencias, severidad y seguimiento.", "/calidad"],
  [CircleDollarSign, "Costos", "Gastos y comportamiento financiero de la operación.", "/costos"],
  [Users, "Personal", "Equipo, roles y responsabilidades operativas.", "/personal"],
  [FileText, "Reportes", "Información operativa organizada para consulta.", "/reportes"],
  [Settings, "Configuración", "Preferencias generales y ajustes del sistema.", "/configuracion"],
];

const roles = [
  ["01", "Administrador", "Observa la operación completa, gestiona accesos y consulta resultados."],
  ["02", "Supervisor", "Da seguimiento a lotes, actividades, incidencias y recursos."],
  ["03", "Operario", "Registra lo que ocurre durante el trabajo diario del vivero."],
];

function Indicador({ valor, etiqueta, detalle }) {
  return (
    <article className="indicador">
      <strong>{valor}</strong>
      <p>{etiqueta}</p>
      <small>{detalle}</small>
    </article>
  );
}

export default function Inicio() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <>
      <header className="encabezado-sitio">
        <nav className="navegacion-principal" aria-label="Navegación principal">
          <Link to="/" className="marca-aiden"><span className="marca-icono" aria-hidden="true"><Leaf size={17} /></span><span>AiDEN</span></Link>
          <ul className="enlaces-navegacion"><li><a href="#producto">Producto</a></li><li><a href="#lote">Cómo funciona</a></li><li><a href="#capacidades">Capacidades</a></li><li><a href="#roles">Roles</a></li></ul>
          <section className="acciones-navegacion"><Link to="/login" className="boton boton-secundario">Iniciar sesión</Link><Link to="/signup" className="boton boton-principal">Explorar AiDEN</Link></section>
          <button type="button" className="boton-menu" onClick={() => setMenuAbierto(!menuAbierto)} aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}>{menuAbierto ? <X size={21} /> : <Menu size={21} />}</button>
        </nav>
      </header>
      <main>
        <section className="seccion-hero" id="inicio">
          <article className="hero-contenido"><p className="etiqueta-seccion"><span className="punto-activo" /> Gestión para viveros</p><h1>La operación de tu vivero, entendida de principio a fin.</h1><p className="hero-descripcion">AiDEN conecta producción, ambiente, inventario, calidad, trazabilidad y costos alrededor de una misma historia: la del lote.</p><section className="hero-acciones"><Link to="/signup" className="boton boton-principal boton-grande">Explorar AiDEN <ArrowRight size={17} /></Link><a href="#lote" className="boton boton-texto">Ver cómo funciona <ArrowDownRight size={17} /></a></section><section className="hero-datos"><article><strong>03</strong><span>roles</span></article><article><strong>09</strong><span>módulos</span></article><article><strong>01</strong><span>misma operación</span></article></section></article>
          <figure className="hero-visual hero-producto"><div className="hero-producto-barra"><span className="mini-logo"><Leaf size={12} /></span><span>AiDEN</span><span className="hero-producto-contexto">Operación · Lote 024</span><span className="hero-punto" /></div><div className="hero-producto-cuerpo"><aside><span className="barra-activa" /><span /><span /><span /><span /></aside><section><header className="hero-dashboard-header"><div><small>Resumen de operación</small><h2>Buenos días, Supervisor.</h2></div><span className="mockup-chip">● En línea</span></header><div className="hero-dashboard-grid"><article><small>Lotes activos</small><strong>24</strong><span>+3 esta semana</span></article><article><small>Incidencias</small><strong>02</strong><span>1 requiere atención</span></article><article><small>Actividades</small><strong>18</strong><span>8 pendientes</span></article></div><div className="hero-dashboard-panel"><header><span>Seguimiento de Lote 024</span><b>68%</b></header><div className="barra-progreso"><span /></div><div className="hero-dashboard-meta"><span>Tomate</span><span>Invernadero 03</span><span>En crecimiento</span></div></div></section></div></figure>
        </section>

        <section className="seccion-manifiesto seccion-estandar" id="producto"><header className="sobre-intro"><p className="etiqueta-seccion">La idea central</p><h2>No es otra colección de pantallas. Es una vista de la operación.</h2></header><section className="sobre-contenido"><article><p className="sobre-destacado">AiDEN organiza la gestión de un vivero alrededor del contexto que más importa: qué lote es, qué le ha ocurrido y qué necesita atención.</p><p>El proyecto nace como una propuesta académica para resolver una problemática concreta con software. La interfaz no intenta esconder esa complejidad. La ordena.</p></article><ol className="sobre-pilares"><li><strong>01</strong><span>Centralizar</span><p>La información deja de estar repartida.</p></li><li><strong>02</strong><span>Relacionar</span><p>Producción, ambiente y calidad se leen juntas.</p></li><li><strong>03</strong><span>Decidir</span><p>Los datos sirven para actuar, no solo para almacenar.</p></li></ol></section></section>

        <section className="seccion-problema seccion-estandar seccion-oscura"><header className="encabezado-seccion"><p className="etiqueta-seccion">El problema</p><h2>Cuando la información está dispersa, la operación también.</h2><p>Registros, mensajes, hojas de cálculo y notas terminan separando lo que en el vivero debería estar conectado.</p></header><section className="comparacion-operacion"><article className="estado-operacion estado-antes"><header><span className="numero-seccion">01</span><h3>Sin una vista unificada</h3></header><ul><li>Registros en diferentes lugares</li><li>Seguimiento manual de actividades</li><li>Información difícil de consultar</li><li>Historial repartido entre personas</li></ul></article><span className="flecha-transformacion"><ArrowRight size={22} /></span><article className="estado-operacion estado-despues"><header><span className="numero-seccion">02</span><h3>Con AiDEN conectado</h3></header><ul><li>Producción organizada por lotes</li><li>Indicadores en un mismo entorno</li><li>Incidencias con seguimiento</li><li>Historial disponible para consultar</li></ul></article></section></section>

        <section className="seccion-lote seccion-estandar" id="lote"><header className="encabezado-seccion encabezado-centrado"><p className="etiqueta-seccion">El protagonista</p><h2>Un lote. Toda su historia.</h2><p>La trazabilidad se entiende mejor cuando se sigue la historia de algo real dentro de la operación.</p></header><section className="lote-presentacion"><article className="ficha-lote"><header><span className="ficha-icono"><Sprout size={22} /></span><section><p>Registro activo</p><h3>Lote 024</h3></section></header><dl><section><dt>Cultivo</dt><dd>Tomate</dd></section><section><dt>Invernadero</dt><dd>03</dd></section><section><dt>Estado</dt><dd>En crecimiento</dd></section></dl><footer><span>Última actualización</span><strong>Hoy · 10:42</strong></footer></article><ol className="linea-lote">{recorridoLote.map(([numero, titulo, descripcion], indice) => <li key={titulo} className={indice === 2 ? "paso-activo" : ""}><span className="paso-numero">{numero}</span><section><h3>{titulo}</h3><p>{descripcion}</p></section></li>)}</ol></section></section>

        <section className="seccion-operacion seccion-estandar"><header className="encabezado-seccion"><p className="etiqueta-seccion">El contexto</p><h2>Todo gira alrededor del mismo lote.</h2><p>Producción, ambiente, calidad, inventario, costos e historial dejan de ser islas.</p></header><section className="mapa-operacion" aria-label="Relación entre las áreas de la operación"><article className="nucleo-operacion"><span><Sprout size={25} /></span><strong>Lote 024</strong><small>Centro de la operación</small></article><ul><li className="nodo nodo-produccion"><Sprout size={17} /><span>Producción</span></li><li className="nodo nodo-ambiente"><Thermometer size={17} /><span>Ambiente</span></li><li className="nodo nodo-calidad"><ShieldCheck size={17} /><span>Calidad</span></li><li className="nodo nodo-inventario"><Package size={17} /><span>Inventario</span></li><li className="nodo nodo-costos"><CircleDollarSign size={17} /><span>Costos</span></li><li className="nodo nodo-trazabilidad"><GitBranch size={17} /><span>Historial</span></li></ul></section></section>

        <section className="seccion-producto seccion-estandar"><header className="encabezado-seccion"><p className="etiqueta-seccion">Experiencia de producto</p><h2>La interfaz también explica cómo funciona.</h2><p>AiDEN deja ver la experiencia que propone en lugar de limitarse a describirla.</p></header><section className="producto-feature"><article className="producto-copy"><span>01</span><h3>Una operación, una vista.</h3><p>El resumen reúne lo que necesita saber un supervisor sin obligarlo a recorrer nueve pantallas para entender el estado general.</p><Link to="/login" className="texto-link">Explorar el sistema <ArrowRight size={15} /></Link></article><div className="producto-mockup producto-dashboard"><header className="mockup-barra"><span>Resumen de operación</span><span className="mockup-chip">● En línea</span></header><div className="mockup-metricas"><article><small>Lotes activos</small><strong>24</strong><span>+3 esta semana</span></article><article><small>Incidencias</small><strong>02</strong><span>1 requiere atención</span></article><article><small>Actividades</small><strong>18</strong><span>8 pendientes</span></article></div><div className="mockup-grafica"><span /><span /><span /><span /><span /><span /><span /></div><footer><span>Actividad reciente</span><b>Ver historial <ArrowRight size={13} /></b></footer></div></section><section className="producto-feature producto-feature-invertido"><article className="producto-copy"><span>02</span><h3>La historia queda registrada.</h3><p>Cada cambio importante puede leerse como parte del recorrido de un lote, desde su registro hasta su seguimiento.</p><a href="#capacidades" className="texto-link">Ver capacidades <ArrowRight size={15} /></a></article><div className="producto-mockup producto-trazabilidad"><header className="mockup-barra"><span>Trazabilidad</span><span className="mockup-search">Lote 024</span></header><div className="timeline-producto"><div><i /><section><small>Hoy · 10:42</small><strong>Condiciones ambientales registradas</strong><span>24.8 °C · 71% · 82%</span></section></div><div><i /><section><small>Ayer · 16:20</small><strong>Etapa actualizada</strong><span>Crecimiento · Supervisor</span></section></div><div><i /><section><small>12 Sep · 08:15</small><strong>Lote registrado</strong><span>Tomate · Invernadero 03</span></section></div></div></div></section></section>

        <section className="seccion-capacidades seccion-oscura seccion-estandar" id="capacidades"><header className="encabezado-seccion"><p className="etiqueta-seccion">Capacidades</p><h2>Lo que AiDEN conecta.</h2><p>El sistema completo reúne nueve módulos alrededor de una misma operación.</p></header><div className="modulos-grid">{modulos.map(([Icono, nombre, descripcion, ruta], indice) => <Link to={ruta} className="modulo-item" key={nombre}><span>{String(indice + 1).padStart(2, "0")}</span><Icono size={17} /><div><strong>{nombre}</strong><p>{descripcion}</p></div><ArrowRight size={15} /></Link>)}</div></section>

        <section className="seccion-ambiente seccion-estandar"><section className="ambiente-imagen"><div className="ambiente-fondo"><span className="ambiente-hoja hoja-uno" /><span className="ambiente-hoja hoja-dos" /><span className="ambiente-hoja hoja-tres" /></div><p>El ambiente también forma parte del historial.</p></section><article className="ambiente-contenido"><p className="etiqueta-seccion">Contexto del cultivo</p><h2>Los números tienen sentido cuando tienen contexto.</h2><p>Temperatura, humedad y luminosidad pueden consultarse junto al estado del lote y sus registros productivos.</p><section className="ambiente-panel"><header><span><Thermometer size={18} /></span><section><p>Invernadero 03</p><strong>Condiciones registradas</strong></section></header><section className="ambiente-medidas"><article><strong>24.8 °C</strong><span>Temperatura</span></article><article><strong>71%</strong><span>Humedad</span></article><article><strong>82%</strong><span>Luminosidad</span></article></section><footer><span className="estado-dot" /> Datos dentro del rango esperado</footer></section></article></section>

        <section className="seccion-roles seccion-estandar" id="roles"><header className="encabezado-seccion encabezado-centrado"><p className="etiqueta-seccion">Personas</p><h2>Cada rol ve una parte distinta de la misma operación.</h2><p>El sistema separa responsabilidades sin romper el contexto compartido.</p></header><section className="roles-grid">{roles.map(([numero, nombre, descripcion]) => <article key={nombre} className="rol-card"><span className="rol-numero">{numero}</span><Users size={20} /><h3>{nombre}</h3><p>{descripcion}</p></article>)}</section></section>

        <section className="seccion-flujo seccion-estandar"><header className="encabezado-seccion"><p className="etiqueta-seccion">Cómo funciona</p><h2>Registrar. Conectar. Consultar. Decidir.</h2><p>Una experiencia sencilla para una operación que no lo es.</p></header><section className="flujo-grid">{[["01", "Registrar", "Captura lo que ocurre."], ["02", "Conectar", "Relaciona cada dato con su contexto."], ["03", "Consultar", "Encuentra la historia completa."], ["04", "Decidir", "Actúa con información disponible."]].map(([numero, titulo, texto]) => <article key={numero}><span>{numero}</span><div><h3>{titulo}</h3><p>{texto}</p></div></article>)}</section></section>

        <section className="seccion-final seccion-estandar"><article><p className="etiqueta-seccion">Proyecto AiDEN</p><h2>Una operación. Una historia. Un solo lugar.</h2><p>Explora el prototipo y recorre la propuesta de gestión para viveros.</p><section className="hero-acciones"><Link to="/signup" className="boton boton-principal boton-grande">Explorar AiDEN <ArrowRight size={17} /></Link><Link to="/login" className="boton boton-texto">Iniciar sesión</Link></section></article></section>
      </main>
    </>
  );
}
