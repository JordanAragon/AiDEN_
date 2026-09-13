import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import PlantillaPrincipal from "../plantillas/PlantillaPrincipal";
import DashboardAdmin from "../pages/DashboardAdmin";
import DashboardOperario from "../pages/DashboardOperario";
import DashboardSupervisor from "../pages/DashboardSupervisor";
import ForgotPassword from "../pages/ForgotPassword";
import InteligenciaArtificial from "../pages/InteligenciaArtificial";
import InformacionLegal from "../pages/InformacionLegal";
import RutaProtegida from "../components/autenticacion/RutaProtegida";

function ModuloVacio({ titulo, descripcion }) {
  return (
    <article className="space-y-3">
      <header><h1 className="text-2xl font-bold text-slate-800">{titulo}</h1><p className="text-sm text-slate-500 mt-1">{descripcion}</p></header>
      <section className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm"><p className="text-sm text-slate-500">Módulo preparado para integrar sus datos y operaciones.</p></section>
    </article>
  );
}

function Configuracion() { return <ModuloVacio titulo="Configuración" descripcion="Administra las preferencias generales del sistema." />; }
function Reportes() { return <ModuloVacio titulo="Reportes" descripcion="Consulta y organiza la información operativa del vivero." />; }
function Inventario() { return <ModuloVacio titulo="Inventario" descripcion="Controla existencias, movimientos y niveles de stock." />; }
function Produccion() { return <ModuloVacio titulo="Producción" descripcion="Consulta lotes, etapas y actividades productivas." />; }
function Trazabilidad() { return <ModuloVacio titulo="Trazabilidad" descripcion="Da seguimiento al recorrido y estado de cada lote." />; }
function Ambiental() { return <ModuloVacio titulo="Ambiental" descripcion="Consulta las condiciones ambientales registradas." />; }
function Calidad() { return <ModuloVacio titulo="Calidad" descripcion="Gestiona incidencias y controles de calidad." />; }
function Costos() { return <ModuloVacio titulo="Costos" descripcion="Organiza costos y comportamiento financiero de la operación." />; }
function Personal() { return <ModuloVacio titulo="Personal" descripcion="Administra la información del equipo y sus roles." />; }

export default function Rutas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/terminos" element={<InformacionLegal />} />
        <Route path="/privacidad" element={<InformacionLegal />} />

        <Route element={<RutaProtegida />}>
          <Route element={<PlantillaPrincipal />}>
            <Route path="/dashboard-admin" element={<RutaProtegida roles={["admin"]} />}>
              <Route index element={<DashboardAdmin />} />
            </Route>
            <Route path="/dashboard-supervisor" element={<RutaProtegida roles={["admin", "supervisor"]} />}>
              <Route index element={<DashboardSupervisor />} />
            </Route>
            <Route path="/dashboard-operario" element={<RutaProtegida roles={["admin", "supervisor", "operario"]} />}>
              <Route index element={<DashboardOperario />} />
            </Route>
            <Route path="/inventario" element={<Inventario />} />
            <Route path="/produccion" element={<Produccion />} />
            <Route path="/trazabilidad" element={<Trazabilidad />} />
            <Route path="/ambiental" element={<Ambiental />} />
            <Route path="/calidad" element={<Calidad />} />
            <Route path="/costos" element={<Costos />} />
            <Route path="/personal" element={<Personal />} />
            <Route path="/reportes" element={<Reportes />} />
            <Route path="/configuracion" element={<Configuracion />} />
            <Route path="/ia" element={<InteligenciaArtificial />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
