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
import ModuloOperativo from "../components/modulos/ModuloOperativo";

function Configuracion() { return <ModuloOperativo key="configuracion" tipo="configuracion" />; }
function Reportes() { return <ModuloOperativo key="reportes" tipo="reportes" />; }
function Inventario() { return <ModuloOperativo key="inventario" tipo="inventario" />; }
function Produccion() { return <ModuloOperativo key="produccion" tipo="produccion" />; }
function Trazabilidad() { return <ModuloOperativo key="trazabilidad" tipo="trazabilidad" />; }
function Ambiental() { return <ModuloOperativo key="ambiental" tipo="ambiental" />; }
function Calidad() { return <ModuloOperativo key="calidad" tipo="calidad" />; }
function Costos() { return <ModuloOperativo key="costos" tipo="costos" />; }
function Personal() { return <ModuloOperativo key="personal" tipo="personal" />; }

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
