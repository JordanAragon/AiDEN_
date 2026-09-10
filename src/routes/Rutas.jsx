import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import PlantillaPrincipal from '../plantillas/PlantillaPrincipal';
import DashboardAdmin from '../pages/DashboardAdmin';
import DashboardOperario from '../pages/DashboardOperario';
import DashboardSupervisor from '../pages/DashboardSupervisor';
import ForgotPassword from '../pages/ForgotPassword';

export default function Rutas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route element={<PlantillaPrincipal />}>
        <Route path="/dashboard-admin" element={<DashboardAdmin />} />
        <Route path="/dashboard-operario" element={<DashboardOperario />} />
        <Route path="/dashboard-supervisor" element={<DashboardSupervisor />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}