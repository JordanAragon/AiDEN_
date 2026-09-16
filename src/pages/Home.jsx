import {
  ArrowDown,
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

const modulos = [
  [Package, "Inventario", "Existencias, movimientos y niveles de stock.", "/inventario"],
  [Sprout, "Producción", "Lotes, etapas y actividades productivas.", "/produccion"],
  [GitBranch, "Trazabilidad", "Historial y recorrido de cada lote.", "/trazabilidad"],
  [Thermometer, "Ambiental", "Condiciones que acompañan el crecimiento.", "/ambiental"],
  [ShieldCheck, "Calidad", "Incidencias, severidad y seguimiento.", "/calidad"],
  [CircleDollarSign, "Costos", "Gastos y comportamiento de la operación.", "/costos"],
  [Users, "Personal", "Equipo, roles y responsabilidades.", "/personal"],
  [BarChart3, "Reportes", "Lectura organizada de la operación.", "/reportes"],
  [ClipboardList, "Configuración", "Preferencias y ajustes del sistema.", "/configuracion"],
];

const roles = [
  {
    number: "01",
    name: "Administrador",
    text: "Tiene la visión completa de la operación, usuarios, configuración y resultados.",
  },
  {
    number: "02",
    name: "Supervisor",
    text: "Da seguimiento a lotes, actividades, incidencias, recursos y desempeño.",
  },
  {
    number: "03",
    name: "Operario",
    text: "Registra lo que sucede durante el trabajo diario del vivero.",
  },
];

export default function Inicio() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <div className="landing-aiden">
      <header className={`aiden-nav ${menuAbierto ? "is-open" : ""}`}>
        <nav className="aiden-shell aiden-nav-inner" aria-label="Navegación principal">
          <Link to="/" className="aiden-brand" onClick={cerrarMenu}>
            <span className="aiden-brand-mark" aria-hidden="true"><Leaf size={17} strokeWidth={2.3} /></span>
            <span>AiDEN</span>
          </Link>
          <div className="aiden-nav-links">
            <a href="#producto">Producto</a>
            <a href="#metodo">Cómo funciona</a>
            <a href="#capacidades">Capacidades</a>
            <a href="#roles">Roles</a>
          </div>
          <div className="aiden-nav-actions">
            <Link to="/login" className="aiden-btn aiden-btn-ghost">Iniciar sesión</Link>
            <Link to="/signup" className="aiden-btn aiden-btn-primary">Explorar AiDEN <ArrowRight size={15} /></Link>
          </div>
          <button type="button" className="aiden-menu-btn" aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"} aria-expanded={menuAbierto} onClick={() => setMenuAbierto((abierto) => !abierto)}>
            {menuAbierto ? <X size={21} /> : <Menu size={21} />}
          </button>
        </nav>
        <div className="aiden-mobile-menu">
          <a href="#producto" onClick={cerrarMenu}>Producto</a>
          <a href="#metodo" onClick={cerrarMenu}>Cómo funciona</a>
          <a href="#capacidades" onClick={cerrarMenu}>Capacidades</a>
          <a href="#roles" onClick={cerrarMenu}>Roles</a>
          <div className="aiden-mobile-actions">
            <Link to="/login" className="aiden-btn aiden-btn-ghost">Iniciar sesión</Link>
            <Link to="/signup" className="aiden-btn aiden-btn-primary">Explorar AiDEN <ArrowRight size={15} /></Link>
          </div>
        </div>
      </header>

      <main>
        <section className="aiden-hero" id="inicio">
          <div className="aiden-hero-glow" aria-hidden="true" />
          <div className="aiden-shell aiden-hero-grid">
            <div className="aiden-hero-copy">
              <p className="aiden-eyebrow"><span /> Gestión operativa para viveros</p>
              <h1>La operación del vivero,<em> en contexto.</em></h1>
              <p className="aiden-lead">AiDEN conecta producción, ambiente, inventario, calidad, trazabilidad y costos alrededor de una misma historia: la del lote.</p>
              <div className="aiden-hero-actions">
                <Link to="/signup" className="aiden-btn aiden-btn-primary aiden-btn-large">Explorar AiDEN <ArrowRight size={17} /></Link>
                <a href="#producto" className="aiden-text-link">Ver el producto <ArrowDown size={16} /></a>
              </div>
              <div className="aiden-hero-trust">
                <div><strong>03</strong><span>roles</span></div>
                <div><strong>09</strong><span>módulos</span></div>
                <div><strong>01</strong><span>misma operación</span></div>
              </div>
            </div>

            <div className="aiden-hero-product" id="producto">
              <DashboardHeroPreview />
              <div className="aiden-product-caption"><span>Vista de producto</span><span>Datos del dashboard real</span></div>
            </div>
          </div>
        </section>

        <section className="aiden-intro" aria-labelledby="intro-heading">
          <div className="aiden-shell aiden-intro-grid">
            <p className="aiden-section-number">01 / IDEA</p>
            <div>
              <h2 id="intro-heading">No es otra colección de pantallas. Es una vista de la operación.</h2>
              <p>La información de un vivero tiene sentido cuando está relacionada. AiDEN ordena la gestión alrededor del lote para que producción, ambiente, calidad, inventario y costos puedan leerse juntos.</p>
            </div>
          </div>
        </section>

        <section className="aiden-story" id="metodo">
          <div className="aiden-shell">
            <div className="aiden-section-head aiden-section-head-split">
              <div><p className="aiden-eyebrow"><span /> El método</p><h2>De un registro aislado a una historia trazable.</h2></div>
              <p>La interfaz sigue la lógica del trabajo real, no la lógica de una plantilla de dashboard.</p>
            </div>
            <div className="aiden-process">
              <article className="aiden-process-feature">
                <div className="aiden-process-kicker">01 — El lote como centro</div>
                <div className="aiden-process-visual">
                  <div className="aiden-orbit orbit-a" /><div className="aiden-orbit orbit-b" /><div className="aiden-orbit orbit-c" />
                  <div className="aiden-orbit-core"><Sprout size={24} /><strong>Lote 024</strong><small>Tomate · Invernadero 03</small></div>
                  <span className="aiden-orbit-node node-a">Producción</span><span className="aiden-orbit-node node-b">Ambiente</span><span className="aiden-orbit-node node-c">Calidad</span><span className="aiden-orbit-node node-d">Historial</span>
                </div>
                <p>La unidad de seguimiento no desaparece entre módulos. El lote permanece como referencia.</p>
              </article>
              <div className="aiden-process-list">
                <article><span>02</span><div><h3>Registrar</h3><p>Cada evento entra con contexto, responsable y momento.</p></div><ArrowRight size={17} /></article>
                <article><span>03</span><div><h3>Relacionar</h3><p>Las áreas dejan de comportarse como compartimentos independientes.</p></div><ArrowRight size={17} /></article>
                <article><span>04</span><div><h3>Consultar</h3><p>El historial queda disponible para entender qué ocurrió y qué sigue.</p></div><ArrowRight size={17} /></article>
              </div>
            </div>
          </div>
        </section>

        <section className="aiden-proof">
          <div className="aiden-shell aiden-proof-grid">
            <p>Diseñado para entender rápido</p><strong>03 roles</strong><strong>09 módulos</strong><strong>01 operación conectada</strong><a href="#capacidades">Ver capacidades <ArrowRight size={15} /></a>
          </div>
        </section>

        <section className="aiden-capabilities" id="capacidades">
          <div className="aiden-shell">
            <div className="aiden-section-head">
              <p className="aiden-eyebrow"><span /> Capacidades</p>
              <h2>Todo lo necesario para seguir el vivero sin perder el hilo.</h2>
              <p>Cada módulo existe porque resuelve una parte concreta de la operación. Nada está aquí para rellenar espacio.</p>
            </div>
            <div className="aiden-module-grid">
              {modulos.map(([Icon, nombre, descripcion, ruta], index) => (
                <Link to={ruta} className={`aiden-module-card module-${index + 1}`} key={nombre}>
                  <div className="aiden-module-icon"><Icon size={19} /></div>
                  <div><span className="aiden-module-number">{String(index + 1).padStart(2, "0")}</span><h3>{nombre}</h3><p>{descripcion}</p></div>
                  <ArrowUpRight size={16} className="aiden-module-arrow" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="aiden-roles" id="roles">
          <div className="aiden-shell">
            <div className="aiden-section-head aiden-section-head-split">
              <div><p className="aiden-eyebrow"><span /> Roles</p><h2>La misma operación. Diferentes responsabilidades.</h2></div>
              <p>AiDEN adapta lo que cada persona necesita ver y hacer, sin convertir la interfaz en una colección de permisos incomprensibles.</p>
            </div>
            <div className="aiden-role-list">
              {roles.map((role) => (
                <article key={role.name} className="aiden-role-row"><span className="aiden-role-number">{role.number}</span><h3>{role.name}</h3><p>{role.text}</p><span className="aiden-role-mark"><Check size={16} /></span></article>
              ))}
            </div>
          </div>
        </section>

        <section className="aiden-final-cta">
          <div className="aiden-shell aiden-final-inner">
            <p className="aiden-eyebrow"><span /> AiDEN</p>
            <h2>Cuando la operación se entiende, las decisiones también.</h2>
            <p>Explora la experiencia de una plataforma pensada para organizar la gestión de viveros desde una sola historia.</p>
            <Link to="/signup" className="aiden-btn aiden-btn-light aiden-btn-large">Explorar AiDEN <ArrowRight size={17} /></Link>
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
