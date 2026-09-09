import { Outlet } from "react-router-dom";
import BarraLateral from "../components/navegacion/BarraLateral";
import BarraSuperior from "../components/navegacion/BarraSuperior";

export default function PlantillaPrincipal() {
  return (
    <body className="min-h-screen bg-slate-50 flex font-sans text-slate-900">
      <BarraLateral />

      <section className="flex-1 flex flex-col min-w-0">
        <BarraSuperior />

        <main className="flex-1 p-8 overflow-y-auto">
          <Outlet />
        </main>
      </section>
    </body>
  );
}