import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from '../pages/inicio';
import Login from '../pages/Login';
import Signup from '../pages/Singup';
import PlantillaPrincipal from '../plantillas/PlantillaPrincipal';
import TableroAdministrador from '../pages/DashboardAdmin';

export default function Rutas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route element={<PlantillaPrincipal />}>
          <Route path="/dashboard" element={<TableroAdministrador />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}