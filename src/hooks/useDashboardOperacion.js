import { useEffect, useMemo, useState } from "react";

const leer = (key, fallback = []) => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
};

const defaults = { tempMin: 18, tempMax: 27, humMin: 55, humMax: 80 };

const leerConfiguracion = () => ({
  ...defaults,
  ...leer("aiden-configuracion", {}),
});

export function useDashboardOperacion() {
  const [version, setVersion] = useState(0);

  useEffect(() => {
    const refresh = () => setVersion((value) => value + 1);

    window.addEventListener("aiden-data-change", refresh);
    window.addEventListener("aiden-config-change", refresh);
    window.addEventListener("storage", refresh);

    return () => {
      window.removeEventListener("aiden-data-change", refresh);
      window.removeEventListener("aiden-config-change", refresh);
      window.removeEventListener("storage", refresh);
    };
  }, []);

  return useMemo(() => {
    const lotes = leer("aiden-produccion");
    const inventario = leer("aiden-inventario");
    const calidad = leer("aiden-calidad");
    const tareas = leer("aiden-tareas");
    const ambiental = leer("aiden-ambiental");
    const cfg = leerConfiguracion();
    const hoy = new Date().toISOString().slice(0, 10);

    const pendientes = tareas.filter((task) => task.estado !== "Completada");
    const atrasadas = pendientes.filter((task) => task.fecha && task.fecha < hoy);
    const bajoMinimo = inventario.filter(
      (row) => Number(row.stock) <= Number(row.minimo),
    );

    const alertas = [
      ...calidad
        .filter(
          (row) =>
            (row.estado ?? row.estadoManual) !== "Cerrada" &&
            row.prioridad === "Alta",
        )
        .map((row) => ({
          text: `Calidad: ${row.codigo || row.id} · ${row.descripcion}`,
          ruta: "/calidad",
          tipo: "Calidad",
        })),
      ...bajoMinimo.map((row) => ({
        text: `Inventario: ${row.nombre} bajo mínimo`,
        ruta: "/inventario",
        tipo: "Inventario",
      })),
      ...ambiental
        .filter(
          (row) =>
            Number(row.temperatura) < Number(cfg.tempMin) ||
            Number(row.temperatura) > Number(cfg.tempMax) ||
            Number(row.humedad) < Number(cfg.humMin) ||
            Number(row.humedad) > Number(cfg.humMax),
        )
        .map((row) => ({
          text: `Ambiental: ${row.zona} fuera de rango`,
          ruta: "/ambiental",
          tipo: "Ambiental",
        })),
    ];

    const carga = [...new Set(tareas.map((task) => task.responsable).filter(Boolean))].map(
      (nombre) => ({
        nombre,
        total: tareas.filter(
          (task) =>
            task.responsable === nombre && task.estado !== "Completada",
        ).length,
      }),
    );

    return {
      lotes,
      inventario,
      calidad,
      tareas,
      ambiental,
      cfg,
      pendientes,
      atrasadas,
      alertas,
      carga,
      bajoMinimo,
      lotesActivos: lotes.filter((lot) => lot.estado !== "Inactivo"),
      lotesCosecha: lotes.filter((lot) => lot.etapa === "Cosecha"),
    };
  }, [version]);
}
