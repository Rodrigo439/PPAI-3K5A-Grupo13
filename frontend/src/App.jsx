import { useEffect, useState } from "react";
import EventosListado from "./components/EventosListado";
import { AnimatePresence } from "framer-motion";
import ProcesoRevision from "./components/ProcesoRevision";

const App = () => {
  const [eventos, setEventos] = useState([]);
  const [eventoSeleccionado, setEventoSeleccionado] = useState(null);
  const [mostrarRevision, setMostrarRevision] = useState(true);

  useEffect(() => {
    fetch('/src/data/eventos.json')
      .then((res) => res.json())
      .then((data) => {
        setEventos(data);
      })
      .catch((err) => console.error("Error al cargar eventos:", err));
  }, []);

  const manejarCerrarRevision = () => {
    // Oculta el detalle y espera a que termine para mostrar el listado
    setMostrarRevision(false);
    setEventoSeleccionado(null);
  };

  return (
    <div className="box-border w-screen min-h-screen overflow-y-auto overflow-x-hidden bg-[#e2dbcf] flex flex-col items-center justify-center">
      {/* Mostrar el listado solo cuando no hay evento seleccionado y se permite mostrar */}
      {!eventoSeleccionado && mostrarRevision && (
        <EventosListado eventos={eventos} onSeleccionar={(evento) => {
          setEventoSeleccionado(evento);
          setMostrarRevision(false); // ocultar listado mientras aparece el detalle
        }} />
      )}

      {/* Animación de entrada/salida del detalle */}
      <AnimatePresence
        mode="wait"
        onExitComplete={() => setMostrarRevision(true)} // Cuando termina de salir el detalle, mostrar el listado
      >
        {eventoSeleccionado && (
          <ProcesoRevision
            key="ProcesoRevision"
            evento={eventoSeleccionado}
            onCerrar={manejarCerrarRevision}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
