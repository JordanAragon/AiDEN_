import {
  ArrowRight,
  BrainCircuit,
  CircleDollarSign,
  GitBranch,
  Leaf,
  Menu,
  Package,
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
  [Package, "Inventario", "Existencias, movimientos y alertas de stock.", "/inventario"],
  [Sprout, "Producción", "Lotes, etapas y actividades de cultivo.", "/produccion"],
  [Thermometer, "Ambiental", "Temperatura, humedad y luminosidad registradas.", "/ambiental"],
  [ShieldCheck, "Calidad", "Incidencias, severidad y seguimiento.", "/calidad"],
  [GitBranch, "Trazabilidad", "Historial y recorrido de cada lote.", "/trazabilidad"],
  [CircleDollarSign, "Costos", "Gastos y comportamiento financiero de la operación.", "/costos"],
  [Users, "Personal", "Roles, tareas y responsabilidades del equipo.", "/personal"],
  [BrainCircuit, "Inteligencia", "Información analizada para apoyar la gestión.", "/ia"],
];

const roles = [
  ["Administrador", "Observa la operación completa y consulta sus resultados."],
  ["Supervisor", "Da seguimiento a lotes, actividades, incidencias y recursos."],
  ["Operario", "Registra lo que ocurre durante el trabajo diario."],
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
            <span className="marca-icono" aria-hidden="true">
              <Leaf size={17} />
            </span>
            <span>AiDEN</span>
          </Link>

          <ul className="enlaces-navegacion">
            <li><a href="#problema">Problema</a></li>
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
              <li><a href="#problema" onClick={() => setMenuAbierto(false)}>Problema</a></li>
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
            <p className="etiqueta-seccion"><span className="punto-activo" /> Gestión agrícola</p>
            <h1>Entiende lo que está pasando en tu vivero.</h1>
            <p className="hero-descripcion">
              AiDEN conecta producción, ambiente, inventario, calidad, trazabilidad y costos para que la operación tenga una historia clara de principio a fin.
            </p>
            <section className="hero-acciones">
              <Link to="/login" className="boton boton-principal boton-grande">
                Entrar a AiDEN <ArrowRight size={17} />
              </Link>
              <a href="#lote" className="boton boton-texto">Ver cómo funciona</a>
            </section>
            <p className="nota-academica">Proyecto académico · Prototipo funcional de gestión para viveros</p>
          </article>

          <figure className="panel-operativo" aria-label="Vista demostrativa de la operación de un lote">
            <figcaption className="panel-cabecera">
              <section>
                <p>Seguimiento operativo</p>
                <strong>Lote 024 · Invernadero 03</strong>
              </section>
              <span className="estado-pill">En crecimiento</span>
            </figcaption>

            <section className="panel-metricas">
              <Indicador valor="24.8°" etiqueta="Temperatura" detalle="Dentro del rango" />
              <Indicador valor="71%" etiqueta="Humedad" detalle="Estable" />
              <Indicador valor="82%" etiqueta="Luminosidad" detalle="Adecuada" />
            </section>

            <section className="panel-progreso">
              <header>
                <p>Etapa actual</p>
                <strong>Seguimiento de crecimiento</strong>
              </header>
              <progress value="68" max="100">68%</progress>
              <footer>
                <span>Siembra</span>
                <span>68% del ciclo registrado</span>
              </footer>
            </section>

            <section className="panel-alerta">
              <span className="alerta-indicador" aria-hidden="true" />
              <section>
                <strong>Actividad pendiente</strong>
                <p>Revisar incidencia de calidad asociada al lote.</p>
              </section>
            </section>
          </figure>
        </section>

        <section id="problema" className="seccion-problema seccion-estandar">
          <header className="encabezado-seccion">
            <p className="etiqueta-seccion">El problema</p>
            <h2>Cuando la información está dispersa, la operación también.</h2>
            <p>Registros, mensajes, hojas de cálculo y notas terminan separando lo que en el vivero debería estar conectado.</p>
          </header>

          <section className="comparacion-operacion">
            <article className="estado-operacion estado-antes">
              <header>
                <span className="numero-seccion">01</span>
                <h3>Sin una vista unificada</h3>
              </header>
              <ul>
                <li>Registros en diferentes lugares</li>
                <li>Seguimiento manual de actividades</li>
                <li>Información difícil de consultar</li>
                <li>Historial repartido entre personas</li>
              </ul>
            </article>

            <span className="flecha-transformacion" aria-hidden="true"><ArrowRight size={22} /></span>

            <article className="estado-operacion estado-despues">
              <header>
                <span className="numero-seccion">02</span>
                <h3>Con AiDEN conectado</h3>
              </header>
              <ul>
                <li>Producción organizada por lotes</li>
                <li>Indicadores en un mismo entorno</li>
                <li>Incidencias con seguimiento</li>
                <li>Historial disponible para consultar</li>
              </ul>
            </article>
          </section>
        </section>

        <section id="lote" className="seccion-lote seccion-estandar">
          <header className="encabezado-seccion encabezado-centrado">
            <p className="etiqueta-seccion">El protagonista</p>
            <h2>Un lote. Toda su historia.</h2>
            <p>En lugar de explicar qué es la trazabilidad, AiDEN permite entenderla siguiendo el recorrido de un lote.</p>
          </header>

          <section className="lote-presentacion">
            <article className="ficha-lote">
              <header>
                <span className="ficha-icono"><Sprout size={22} /></span>
                <section>
                  <p>Registro activo</p>
                  <h3>Lote 024</h3>
                </section>
              </header>
              <dl>
                <section><dt>Cultivo</dt><dd>Tomate</dd></section>
                <section><dt>Invernadero</dt><dd>03</dd></section>
                <section><dt>Estado</dt><dd>En crecimiento</dd></section>
              </dl>
              <footer>
                <span>Última actualización</span>
                <strong>Hoy · 10:42</strong>
              </footer>
            </article>

            <ol className="linea-lote">
              {recorridoLote.map(([numero, titulo, descripcion], indice) => (
                <li key={titulo} className={indice === 2 ? "paso-activo" : ""}>
                  <span className="paso-numero">{numero}</span>
                  <section>
                    <h3>{titulo}</h3>
                    <p>{descripcion}</p>
                  </section>
                </li>
              ))}
            </ol>
          </section>
        </section>

        <section id="operacion" className="seccion-operacion seccion-estandar">
          <header className="encabezado-seccion">
            <p className="etiqueta-seccion">La operación</p>
            <h2>El vivero completo, conectado alrededor del mismo lote.</h2>
            <p>Producción, ambiente, calidad, inventario y costos dejan de ser pantallas aisladas y empiezan a contar una misma historia.</p>
          </header>

          <section className="mapa-operacion" aria-label="Relación entre las áreas de la operación">
            <article className="nucleo-operacion">
              <span><Sprout size={25} /></span>
              <strong>Lote 024</strong>
              <small>Centro de la operación</small>
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
          <header className="encabezado-seccion">
            <p className="etiqueta-seccion">Contexto del cultivo</p>
            <h2>El ambiente también cuenta la historia.</h2>
            <p>Las condiciones ambientales dejan de ser números sueltos cuando se leen junto al lote y a su estado de producción.</p>
          </header>

          <section className="ambiente-contenido">
            <article className="ambiente-panel">
              <header>
                <span><Thermometer size={18} /></span>
                <section>
                  <p>Invernadero 03</p>
                  <strong>Condiciones registradas</strong>
                </section>
              </header>
              <section className="ambiente-medidas">
                <article><strong>24.8 °C</strong><span>Temperatura</span></article>
                <article><strong>71%</strong><span>Humedad</span></article>
                <article><strong>82%</strong><span>Luminosidad</span></article>
              </section>
              <footer>
                <span className="estado-dot" /> Datos dentro del rango esperado
              </footer>
            </article>

            <aside className="ambiente-contexto">
              <span className="numero-seccion">03</span>
              <h3>Lote 024 · Tomate</h3>
              <p>Estado: <strong>En crecimiento</strong></p>
              <p>Último registro ambiental asociado al lote hace 18 minutos.</p>
              <a href="#modulos">Conocer el módulo ambiental <ArrowRight size={16} /></a>
            </aside>
          </section>
        </section>

        <section className="seccion-roles seccion-estandar">
          <header className="encabezado-seccion encabezado-centrado">
            <p className="etiqueta-seccion">Personas</p>
            <h2>Cada rol ve una parte distinta de la misma operación.</h2>
            <p>El sistema separa responsabilidades sin romper el contexto compartido.</p>
          </header>
          <section className="roles-grid">
            {roles.map(([nombre, descripcion], indice) => (
              <article key={nombre} className="rol-card">
                <span className="rol-numero">0{indice + 1}</span>
                <Users size={20} />
                <h3>{nombre}</h3>
                <p>{descripcion}</p>
              </article>
            ))}
          </section>
        </section>

        <section className="seccion-inteligencia seccion-estandar">
          <article className="inteligencia-contenido">
            <p className="etiqueta-seccion">Información para decidir</p>
            <h2>No se trata de decir “tenemos IA”.</h2>
            <p>Se trata de usar la información que ya genera el vivero para identificar qué necesita atención y entender por qué.</p>
            <Link to="/ia" className="boton boton-secundario">Conocer Inteligencia <ArrowRight size={16} /></Link>
          </article>
          <figure className="consulta-ia">
            <figcaption>
              <span><BrainCircuit size={17} /></span>
              <section><p>Asistente de AiDEN</p><strong>Consulta operativa</strong></section>
            </figcaption>
            <blockquote>“¿Qué lotes requieren atención?”</blockquote>
            <p className="respuesta-ia"><strong>Lote 024</strong> presenta una incidencia de calidad que requiere seguimiento y condiciones ambientales registradas durante las últimas horas.</p>
          </figure>
        </section>

        <section id="modulos" className="seccion-modulos seccion-estandar">
          <header className="encabezado-seccion">
            <p className="etiqueta-seccion">El sistema</p>
            <h2>Ocho áreas. Una sola operación.</h2>
            <p>Los módulos existen para organizar el trabajo, no para convertirse en una colección de pantallas sin contexto.</p>
          </header>

          <section className="modulos-grid">
            {modulos.map(([Icono, nombre, descripcion, ruta]) => (
              <Link to={ruta} key={nombre} className="modulo-card">
                <span className="modulo-icono"><Icono size={19} /></span>
                <section>
                  <h3>{nombre}</h3>
                  <p>{descripcion}</p>
                </section>
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            ))}
          </section>
        </section>

        <section className="seccion-final seccion-estandar">
          <article>
            <p className="etiqueta-seccion">AiDEN</p>
            <h2>Empieza a ver tu operación de otra manera.</h2>
            <p>Una herramienta sencilla para entender mejor lo que ocurre en el vivero y mantener su información conectada.</p>
            <section className="hero-acciones">
              <Link to="/signup" className="boton boton-principal boton-grande">Registrarse <ArrowRight size={17} /></Link>
              <Link to="/login" className="boton boton-texto">Iniciar sesión</Link>
            </section>
          </article>
        </section>
      </main>

      <footer className="pie-sitio">
        <section>
          <Link to="/" className="marca-aiden"><span className="marca-icono"><Leaf size={16} /></span><span>AiDEN</span></Link>
          <p>Sistema académico de gestión para viveros.</p>
        </section>
        <nav aria-label="Enlaces legales">
          <Link to="/terminos">Términos de uso</Link>
          <Link to="/privacidad">Política de privacidad</Link>
        </nav>
      </footer>
    </>
  );
}
