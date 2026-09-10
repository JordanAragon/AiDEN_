import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import PlantillaPrincipal from '../plantillas/PlantillaPrincipal';
import TableroAdministrador from '../pages/DashboardAdmin';
import ForgotPassword from '../pages/ForgotPassword';
import DashboardAdmin from '../pages/DashboardAdmin';

export default function Rutas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route element={<PlantillaPrincipal />}>
          <Route path="/dashboard" element={<TableroAdministrador />} />
        </Route>
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard-admin" element={<DashboardAdmin />} />
      </Routes>
    </BrowserRouter>
  );
}