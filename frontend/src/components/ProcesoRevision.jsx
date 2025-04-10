import DetalleEvento from "./DetalleEvento";
import { useState } from "react";
import ExpertosListado from "./ExpertosListado";

const ProcesoRevision = ({ evento, onCerrar }) => {
    const [escalarRevision, setEscalarRevision] = useState(false);
    const [vistaActual, setVistaActual] = useState("detalle");

    const vistas = {
        detalle: <DetalleEvento evento={evento} onCerrar={onCerrar} onEscalarRevision={() => {setEscalarRevision(true); cambiarVista("expertos")}} />,
        expertos: <ExpertosListado evento={evento} onCerrar={onCerrar} onSolicitar={(experto) => console.log("se a relevado la revision al experto/a: " + experto)}/>,
        // ventanaExitosa: <VentanaExitosa evento={evento} onCerrar={onCerrar} />,
    };

    const cambiarVista = (nuevaVista) => {
        setVistaActual(nuevaVista);
    };

    return (
    <>
       {vistaActual === "detalle" && vistas.detalle}
       {vistaActual === "expertos" && vistas.expertos}
       {/* {vistaActual === "ventanaExitosa" && vistas.ventanaExitosa} */}
    </>
    );
};
        
export default ProcesoRevision;
