import {
  ArrowDownRight,
  ArrowRight,
  BrainCircuit,
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
          <Link to="/" className="marca-aiden">
            <span className="marca-icono" aria-hidden="true"><Leaf size={17} /></span>
            <span>AiDEN</span>
          </Link>
          <ul className="enlaces-navegacion">
            <li><a href="#que-es">¿Qué es?</a></li>
            <li><a href="#lote">Lote</a></li>
            <li><a href="#operacion">Operación</a></li>
            <li><a href="#modulos">Módulos</a></li>
          </ul>
          <section className="acciones-navegacion">
            <Link to="/login" className="boton boton-secundario">Iniciar sesión</Link>
            <Link to="/signup" className="boton boton-principal">Registrarse</Link>
          </section>
          <button
            type="button"
            className="boton-menu"
            onClick={() => setMenuAbierto(!menuAbierto)}
            aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
          >
            {menuAbierto ? <X size={21} /> : <Menu size={21} />}
          </button>
        </nav>
        {menuAbierto && (
          <nav className="menu-movil" aria-label="Navegación móvil">
            <ul>
              <li><a href="#que-es" onClick={() => setMenuAbierto(false)}>¿Qué es?</a></li>
              <li><a href="#lote" onClick={() => setMenuAbierto(false)}>Lote</a></li>
              <li><a href="#operacion" onClick={() => setMenuAbierto(false)}>Operación</a></li>
              <li><a href="#modulos" onClick={() => setMenuAbierto(false)}>Módulos</a></li>
            </ul>
            <section className="menu-movil-acciones">
              <Link to="/login" className="boton boton-secundario">Iniciar sesión</Link>
              <Link to="/signup" className="boton boton-principal">Registrarse</Link>
            </section>
          </nav>
        )}
      </header>

      <main>
        <section id="inicio" className="seccion-hero">
          <article className="hero-contenido">
            <p className="etiqueta-seccion"><span className="punto-activo" /> Gestión para viveros</p>
            <h1>Entiende lo que está pasando en tu vivero.</h1>
            <p className="hero-descripcion">
              AiDEN conecta producción, ambiente, inventario, calidad, trazabilidad y costos para que la operación tenga una historia clara de principio a fin.
            </p>
            <section className="hero-acciones">
              <Link to="/signup" className="boton boton-principal boton-grande">Comenzar en AiDEN <ArrowRight size={17} /></Link>
              <a href="#que-es" className="boton boton-texto">Conocer el proyecto <ArrowDownRight size={17} /></a>
            </section>
            <section className="hero-datos" aria-label="Datos del proyecto">
              <article><strong>3</strong><span>roles</span></article>
              <article><strong>9</strong><span>módulos operativos</span></article>
              <article><strong>1</strong><span>misma operación</span></article>
            </section>
          </article>

          <figure className="hero-visual" aria-label="Vista conceptual de la operación AiDEN">
            <img
              src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&h=900&fit=crop&auto=format"
              alt="Cultivo y vegetación representando la operación de un vivero"
            />
            <figcaption className="hero-visual-capa">
              <header>
                <section>
                  <p>Seguimiento operativo</p>
                  <strong>Lote 024 · Invernadero 03</strong>
                </section>
                <span className="estado-pill">Activo</span>
              </header>
              <section className="hero-panel">
                <section className="hero-panel-metricas">
                  <Indicador valor="24.8°" etiqueta="Temperatura" detalle="Dentro del rango" />
                  <Indicador valor="71%" etiqueta="Humedad" detalle="Estable" />
                  <Indicador valor="82%" etiqueta="Luz" detalle="Adecuada" />
                </section>
                <section className="hero-panel-progreso">
                  <p>Seguimiento de crecimiento</p>
                  <strong>68%</strong>
                  <progress value="68" max="100">68%</progress>
                </section>
              </section>
            </figcaption>
          </figure>
        </section>

        <section id="que-es" className="seccion-sobre seccion-estandar">
          <header className="sobre-intro">
            <p className="etiqueta-seccion">Sobre el proyecto</p>
            <h2>Una vista del vivero, no otra colección de pantallas.</h2>
          </header>
          <section className="sobre-contenido">
            <article>
              <p className="sobre-destacado">AiDEN es una plataforma web para organizar y centralizar la gestión operativa de viveros agrícolas.</p>
              <p>El proyecto nace como una propuesta académica para llevar una problemática concreta a un sistema de software claro: reunir la información de la operación y hacerla más sencilla de consultar.</p>
              <p>Su idea central es conectar los datos alrededor del lote para entender qué pasó, qué está ocurriendo y qué necesita atención.</p>
            </article>
            <ol className="sobre-pilares">
              <li><strong>01</strong><span>Centralizar</span><p>La información deja de estar repartida.</p></li>
              <li><strong>02</strong><span>Relacionar</span><p>Producción, ambiente y calidad se leen juntas.</p></li>
              <li><strong>03</strong><span>Decidir</span><p>Los datos sirven para actuar, no solo para almacenar.</p></li>
            </ol>
          </section>
        </section>

        <section id="problema" className="seccion-problema seccion-estandar seccion-oscura">
          <header className="encabezado-seccion">
            <p className="etiqueta-seccion">El problema</p>
            <h2>Cuando la información está dispersa, la operación también.</h2>
            <p>Registros, mensajes, hojas de cálculo y notas terminan separando lo que en el vivero debería estar conectado.</p>
          </header>
          <section className="comparacion-operacion">
            <article className="estado-operacion estado-antes">
              <header><span className="numero-seccion">01</span><h3>Sin una vista unificada</h3></header>
              <ul><li>Registros en diferentes lugares</li><li>Seguimiento manual de actividades</li><li>Información difícil de consultar</li><li>Historial repartido entre personas</li></ul>
            </article>
            <span className="flecha-transformacion" aria-hidden="true"><ArrowRight size={22} /></span>
            <article className="estado-operacion estado-despues">
              <header><span className="numero-seccion">02</span><h3>Con AiDEN conectado</h3></header>
              <ul><li>Producción organizada por lotes</li><li>Indicadores en un mismo entorno</li><li>Incidencias con seguimiento</li><li>Historial disponible para consultar</li></ul>
            </article>
          </section>
        </section>

        <section id="lote" className="seccion-lote seccion-estandar">
          <header className="encabezado-seccion encabezado-centrado">
            <p className="etiqueta-seccion">El protagonista</p>
            <h2>Un lote. Toda su historia.</h2>
            <p>La trazabilidad se entiende mejor cuando se sigue la historia de algo real dentro de la operación.</p>
          </header>
          <section className="lote-presentacion">
            <article className="ficha-lote">
              <header>
                <span className="ficha-icono"><Sprout size={22} /></span>
                <section><p>Registro activo</p><h3>Lote 024</h3></section>
              </header>
              <dl>
                <section><dt>Cultivo</dt><dd>Tomate</dd></section>
                <section><dt>Invernadero</dt><dd>03</dd></section>
                <section><dt>Estado</dt><dd>En crecimiento</dd></section>
              </dl>
              <footer><span>Última actualización</span><strong>Hoy · 10:42</strong></footer>
            </article>
            <ol className="linea-lote">
              {recorridoLote.map(([numero, titulo, descripcion], indice) => (
                <li key={titulo} className={indice === 2 ? "paso-activo" : ""}>
                  <span className="paso-numero">{numero}</span>
                  <section><h3>{titulo}</h3><p>{descripcion}</p></section>
                </li>
              ))}
            </ol>
          </section>
        </section>

        <section id="operacion" className="seccion-operacion seccion-estandar">
          <header className="encabezado-seccion">
            <p className="etiqueta-seccion">La operación</p>
            <h2>Todo gira alrededor del mismo contexto.</h2>
            <p>El lote funciona como punto de encuentro entre las distintas áreas de la operación.</p>
          </header>
          <section className="mapa-operacion" aria-label="Relación entre las áreas de la operación">
            <article className="nucleo-operacion">
              <span><Sprout size={25} /></span><strong>Lote 024</strong><small>Centro de la operación</small>
            </article>
            <ul>
              <li className="nodo nodo-produccion"><Sprout size={17} /><span>Producción</span></li>
              <li className="nodo nodo-ambiente"><Thermometer size={17} /><span>Ambiente</span></li>
              <li className="nodo nodo-calidad"><ShieldCheck size={17} /><span>Calidad</span></li>
              <li className="nodo nodo-inventario"><Package size={17} /><span>Inventario</span></li>
              <li className="nodo nodo-costos"><CircleDollarSign size={17} /><span>Costos</span></li>
              <li className="nodo nodo-trazabilidad"><GitBranch size={17} /><span>Historial</span></li>
            </ul>
          </section>
        </section>

        <section className="seccion-ambiente seccion-estandar">
          <section className="ambiente-imagen">
            <img src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1200&h=1000&fit=crop&auto=format" alt="Vegetación dentro de un vivero" />
            <p>El ambiente también forma parte del historial.</p>
          </section>
          <article className="ambiente-contenido">
            <p className="etiqueta-seccion">Contexto del cultivo</p>
            <h2>Los números tienen sentido cuando tienen contexto.</h2>
            <p>Temperatura, humedad y luminosidad pueden consultarse junto al estado del lote y sus registros productivos.</p>
            <section className="ambiente-panel">
              <header><span><Thermometer size={18} /></span><section><p>Invernadero 03</p><strong>Condiciones registradas</strong></section></header>
              <section className="ambiente-medidas">
                <article><strong>24.8 °C</strong><span>Temperatura</span></article>
                <article><strong>71%</strong><span>Humedad</span></article>
                <article><strong>82%</strong><span>Luminosidad</span></article>
              </section>
              <footer><span className="estado-dot" /> Datos dentro del rango esperado</footer>
            </section>
          </article>
        </section>

        <section className="seccion-roles seccion-estandar">
          <header className="encabezado-seccion encabezado-centrado">
            <p className="etiqueta-seccion">Personas</p>
            <h2>Cada rol ve una parte distinta de la misma operación.</h2>
            <p>El sistema separa responsabilidades sin romper el contexto compartido.</p>
          </header>
          <section className="roles-grid">
            {roles.map(([numero, nombre, descripcion]) => (
              <article key={nombre} className="rol-card"><span className="rol-numero">{numero}</span><Users size={20} /><h3>{nombre}</h3><p>{descripcion}</p></article>
            ))}
          </section>
        </section>

        <section className="seccion-inteligencia seccion-estandar seccion-verde">
          <article className="inteligencia-contenido">
            <p className="etiqueta-seccion">Información para decidir</p>
            <h2>La inteligencia aparece cuando los datos dejan de estar aislados.</h2>
            <p>El módulo de IA del prototipo plantea una forma de consultar la información operativa con lenguaje natural, sin venderla como magia.</p>
            <Link to="/ia" className="boton boton-claro">Conocer Inteligencia <ArrowRight size={16} /></Link>
          </article>
          <figure className="consulta-ia">
            <figcaption><span><BrainCircuit size={17} /></span><section><p>Asistente de AiDEN</p><strong>Consulta operativa</strong></section></figcaption>
            <blockquote>“¿Qué lotes requieren atención?”</blockquote>
            <p className="respuesta-ia"><strong>Lote 024</strong> presenta una incidencia de calidad que requiere seguimiento y condiciones ambientales registradas durante las últimas horas.</p>
          </figure>
        </section>

        <section id="modulos" className="seccion-modulos seccion-estandar">
          <header className="encabezado-seccion">
            <p className="etiqueta-seccion">El sistema</p>
            <h2>Nueve módulos. Una sola operación.</h2>
            <p>Las áreas del sistema organizan el trabajo sin perder de vista el conjunto.</p>
          </header>
          <section className="modulos-grid">
            {modulos.map(([Icono, nombre, descripcion, ruta], indice) => (
              <Link to={ruta} key={nombre} className="modulo-card">
                <span className="modulo-numero">0{indice + 1}</span>
                <span className="modulo-icono"><Icono size={19} /></span>
                <section><h3>{nombre}</h3><p>{descripcion}</p></section>
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            ))}
          </section>
        </section>

        <section className="seccion-final seccion-estandar">
          <article>
            <p className="etiqueta-seccion">Proyecto AiDEN</p>
            <h2>Ver mejor la operación también es una forma de gestionarla.</h2>
            <p>Explora el prototipo y recorre la propuesta de gestión para viveros.</p>
            <section className="hero-acciones">
              <Link to="/signup" className="boton boton-principal boton-grande">Registrarse <ArrowRight size={17} /></Link>
              <Link to="/login" className="boton boton-texto">Iniciar sesión</Link>
            </section>
          </article>
        </section>
      </main>

      <footer className="pie-sitio">
        <section className="pie-superior">
          <article className="pie-marca">
            <Link to="/" className="marca-aiden"><span className="marca-icono"><Leaf size={16} /></span><span>AiDEN</span></Link>
            <p>Gestión operativa para viveros agrícolas.</p>
          </article>
          <nav aria-label="Enlaces del proyecto">
            <p>Explorar</p>
            <a href="#que-es">Sobre AiDEN</a>
            <a href="#lote">Seguimiento de lote</a>
            <a href="#modulos">Módulos</a>
          </nav>
          <nav aria-label="Acceso al sistema">
            <p>Acceso</p>
            <Link to="/login">Iniciar sesión</Link>
            <Link to="/signup">Registrarse</Link>
            <Link to="/ia">Inteligencia</Link>
          </nav>
          <nav aria-label="Información legal">
            <p>Información</p>
            <Link to="/terminos">Términos de uso</Link>
            <Link to="/privacidad">Política de privacidad</Link>
          </nav>
        </section>
        <section className="pie-gigante" aria-hidden="true">AiDEN</section>
        <section className="pie-inferior">
          <span>Proyecto académico · Frontend React + Vite</span>
          <span>© {new Date().getFullYear()} AiDEN</span>
        </section>
      </footer>
    </>
  );
}
