import { Outlet } from "react-router-dom";
import BarraLateral from "../components/navegacion/BarraLateral";
import BarraSuperior from "../components/navegacion/BarraSuperior";

export default function PlantillaPrincipal() {
  return (
    <section className="flex h-screen bg-aiden-bg overflow-hidden font-sans text-slate-900">
      
      <section className="flex flex-col flex-1 overflow-hidden">
        
        <main className="flex-1 overflow-y-auto p-6">
        </main>
      </section>
    </section>
  );
}