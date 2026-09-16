import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  CircleDollarSign,
  ClipboardList,
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
import DashboardHeroPreview from "../components/dashboard/DashboardHeroPreview";
import "../estilos/landing-aiden.css";
import "../estilos/landing-aiden-premium.css";

const modulos = [
  [Sprout, "Producción", "Lotes, etapas y actividades productivas.", "/produccion"],
  [Package, "Inventario", "Existencias, movimientos y niveles de stock.", "/inventario"],
  [GitBranch, "Trazabilidad", "El recorrido de cada lote, sin perder contexto.", "/trazabilidad"],
  [Thermometer, "Ambiental", "Condiciones que acompañan el crecimiento.", "/ambiental"],
  [ShieldCheck, "Calidad", "Incidencias, severidad y seguimiento.", "/calidad"],
  [CircleDollarSign, "Costos", "Gastos y comportamiento de la operación.", "/costos"],
  [Users, "Personal", "Equipo, responsabilidades y carga de trabajo.", "/personal"],
  [BarChart3, "Reportes", "Convierte registros en lectura operativa.", "/reportes"],
  [ClipboardList, "Configuración", "Ajustes que mantienen el sistema en contexto.", "/configuracion"],
];

const roles = [
  ["01", "Administrador", "Control global, configuración, usuarios y visión completa."],
  ["02", "Supervisor", "Coordinación, seguimiento, incidencias y decisiones operativas."],
  ["03", "Operario", "Ejecución diaria, registros y tareas asignadas."],
];

const signals = [
  ["Producción", "Lotes y etapas"],
  ["Ambiente", "Temperatura y humedad"],
  ["Calidad", "Incidencias abiertas"],
  ["Inventario", "Stock y mínimos"],
];

export default function Inicio() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <div className="landing-aiden">
      <header className={`aiden-nav ${menuAbierto ? "is-open" : ""}`}>
        <nav className="aiden-shell aiden-nav-inner" aria-label="Navegación principal">
          <Link to="/" className="aiden-brand" onClick={cerrarMenu}>
            <span className="aiden-brand-mark"><Leaf size={16} strokeWidth={2.3} /></span>
            <span>AiDEN</span>
          </Link>
          <div className="aiden-nav-links">
            <a href="#producto">Producto</a>
            <a href="#sistema">Sistema</a>
            <a href="#modulos">Módulos</a>
            <a href="#roles">Roles</a>
          </div>
          <div className="aiden-nav-actions">
            <Link to="/login" className="aiden-nav-login">Iniciar sesión</Link>
            <Link to="/signup" className="aiden-btn aiden-btn-primary">Entrar a AiDEN <ArrowRight size={14} /></Link>
          </div>
          <button type="button" className="aiden-menu-btn" aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"} aria-expanded={menuAbierto} onClick={() => setMenuAbierto((abierto) => !abierto)}>
            {menuAbierto ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
        <div className="aiden-mobile-menu">
          <a href="#producto" onClick={cerrarMenu}>Producto</a>
          <a href="#sistema" onClick={cerrarMenu}>Sistema</a>
          <a href="#modulos" onClick={cerrarMenu}>Módulos</a>
          <a href="#roles" onClick={cerrarMenu}>Roles</a>
          <div className="aiden-mobile-actions">
            <Link to="/login" className="aiden-btn aiden-btn-ghost">Iniciar sesión</Link>
            <Link to="/signup" className="aiden-btn aiden-btn-primary">Entrar a AiDEN <ArrowRight size={14} /></Link>
          </div>
        </div>
      </header>

      <main>
        <section className="aiden-hero" id="inicio">
          <div className="aiden-hero-grid aiden-shell">
            <div className="aiden-hero-copy">
              <div className="aiden-hero-kicker"><span className="aiden-pulse" /> Plataforma operativa para viveros</div>
              <h1>El vivero, visto como un <em>sistema.</em></h1>
              <p className="aiden-lead">AiDEN conecta producción, ambiente, inventario, calidad, trazabilidad y costos alrededor de la unidad que realmente importa: el lote.</p>
              <div className="aiden-hero-actions">
                <Link to="/signup" className="aiden-btn aiden-btn-primary aiden-btn-large">Explorar la plataforma <ArrowRight size={16} /></Link>
                <a href="#sistema" className="aiden-hero-note"><span>01</span> Ver cómo se conecta</a>
              </div>
              <div className="aiden-hero-index">
                <span>01</span><span>Contexto</span><i /><span>02</span><span>Control</span><i /><span>03</span><span>Acción</span>
              </div>
            </div>
            <div className="aiden-hero-product" id="producto">
              <DashboardHeroPreview />
              <div className="aiden-product-caption"><span>Producto real</span><span>Datos locales del sistema</span></div>
            </div>
          </div>
          <div className="aiden-hero-marquee" aria-hidden="true"><div>PRODUCCIÓN · AMBIENTE · CALIDAD · INVENTARIO · TRAZABILIDAD · COSTOS · PERSONAL · REPORTES ·</div></div>
        </section>

        <section className="aiden-intro" id="sistema">
          <div className="aiden-shell aiden-intro-grid">
            <div className="aiden-overline">01 / SISTEMA</div>
            <div className="aiden-intro-copy">
              <h2>La información aislada no explica una operación.</h2>
              <p>Un lote cambia de etapa. Consume insumos. Vive bajo unas condiciones ambientales. Puede generar una incidencia. Todo eso forma parte de la misma historia.</p>
              <div className="aiden-signal-grid">
                {signals.map(([title, value], index) => <div key={title} className="aiden-signal"><span>0{index + 1}</span><strong>{title}</strong><small>{value}</small></div>)}
              </div>
            </div>
          </div>
        </section>

        <section className="aiden-system-showcase">
          <div className="aiden-shell">
            <div className="aiden-showcase-head">
              <div><p className="aiden-eyebrow"><span /> Una sola operación</p><h2>De los registros al contexto.</h2></div>
              <p>La interfaz se organiza según cómo funciona el vivero, no según cómo se ve una plantilla de software.</p>
            </div>
            <div className="aiden-system-grid">
              <article className="aiden-system-card aiden-system-card-large">
                <div className="aiden-card-top"><span>Centro de operación</span><span className="aiden-card-dot" /></div>
                <div className="aiden-system-visual">
                  <div className="aiden-system-ring ring-one" /><div className="aiden-system-ring ring-two" />
                  <div className="aiden-system-core"><Sprout size={21} /><strong>Lote</strong><b>024</b><small>unidad de contexto</small></div>
                  <span className="aiden-node node-one">Producción</span><span className="aiden-node node-two">Ambiente</span><span className="aiden-node node-three">Calidad</span><span className="aiden-node node-four">Inventario</span>
                </div>
                <footer><span>Todo parte del lote.</span><ArrowUpRight size={15} /></footer>
              </article>
              <article className="aiden-system-card aiden-system-card-dark"><span className="aiden-card-index">02</span><Leaf size={24} /><h3>Registrar con contexto.</h3><p>Cada evento conserva responsable, momento y relación con la operación.</p></article>
              <article className="aiden-system-card aiden-system-card-light"><span className="aiden-card-index">03</span><BarChart3 size={24} /><h3>Leer lo que está pasando.</h3><p>Los datos dejan de ser filas sueltas y pasan a formar señales útiles.</p></article>
            </div>
          </div>
        </section>

        <section className="aiden-feature-band">
          <div className="aiden-shell aiden-feature-grid">
            <div><span>UNA HISTORIA</span><strong>Para cada lote.</strong></div>
            <div><span>UNA OPERACIÓN</span><strong>Para cada rol.</strong></div>
            <div><span>UNA VISTA</span><strong>Para decidir.</strong></div>
          </div>
        </section>

        <section className="aiden-capabilities" id="modulos">
          <div className="aiden-shell">
            <div className="aiden-section-head aiden-section-head-split">
              <div><p className="aiden-eyebrow"><span /> Módulos</p><h2>Todo el sistema, sin ruido.</h2></div>
              <p>Nueve áreas conectadas para cubrir la operación sin convertirla en un laberinto de pantallas.</p>
            </div>
            <div className="aiden-module-grid">
              {modulos.map(([Icon, nombre, descripcion, ruta], index) => (
                <Link to={ruta} className={`aiden-module-card module-${index + 1}`} key={nombre}>
                  <span className="aiden-module-number">{String(index + 1).padStart(2, "0")}</span>
                  <span className="aiden-module-icon"><Icon size={18} /></span>
                  <div><h3>{nombre}</h3><p>{descripcion}</p></div>
                  <ArrowUpRight size={16} className="aiden-module-arrow" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="aiden-roles" id="roles">
          <div className="aiden-shell">
            <div className="aiden-section-head aiden-section-head-split">
              <div><p className="aiden-eyebrow"><span /> Roles</p><h2>Misma operación.<br /><em>Distinto enfoque.</em></h2></div>
              <p>Cada perfil encuentra las herramientas que necesita para hacer su trabajo, sin cargar con funciones que no le corresponden.</p>
            </div>
            <div className="aiden-role-list">
              {roles.map(([number, name, text]) => <article key={name} className="aiden-role-row"><span className="aiden-role-number">{number}</span><h3>{name}</h3><p>{text}</p><span className="aiden-role-mark"><Check size={15} /></span></article>)}
            </div>
          </div>
        </section>

        <section className="aiden-final-cta">
          <div className="aiden-final-noise" aria-hidden="true" />
          <div className="aiden-shell aiden-final-layout">
            <div className="aiden-final-copy">
              <p className="aiden-eyebrow"><span /> AiDEN</p>
              <h2>Cuando todo está conectado, <em>la operación se ve distinta.</em></h2>
              <p>Explora una plataforma diseñada para entender el vivero como un sistema vivo y trazable.</p>
              <div className="aiden-final-actions"><Link to="/signup" className="aiden-btn aiden-btn-light aiden-btn-large">Entrar a AiDEN <ArrowRight size={16} /></Link><span>03 roles · 09 módulos · 01 sistema</span></div>
            </div>
            <div className="aiden-final-product">
              <DashboardHeroPreview />
              <div className="aiden-final-float"><span className="aiden-pulse" /> Sistema conectado <strong>ahora</strong></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="aiden-footer">
        <div className="aiden-shell aiden-footer-inner">
          <div className="aiden-footer-brand"><span className="aiden-brand-mark"><Leaf size={15} /></span><span>AiDEN</span><small>Gestión operativa para viveros</small></div>
          <div className="aiden-footer-links"><Link to="/terminos">Términos</Link><Link to="/privacidad">Privacidad</Link><Link to="/login">Ingresar</Link></div>
          <span className="aiden-footer-copy">Proyecto académico · 2026</span>
        </div>
      </footer>
    </div>
  );
}
