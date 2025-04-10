import DetalleEvento from "./DetalleEvento";
import { useState } from "react";
import ExpertosListado from "./ExpertosListado";

const ProcesoRevision = ({ evento, onCerrar }) => {
    const [vistaActual, setVistaActual] = useState("detalle");
    const [vistaAnterior, setVistaAnterior] = useState("detalle");

    const cambiarVista = (nuevaVista) => {
        setVistaAnterior(vistaActual);
        setVistaActual(nuevaVista);
    };

    const manejarRegreso = () => {
        // Siempre volvemos al detalle por ahora, pero se puede hacer más flexible
        setVistaActual(vistaAnterior);
    };

    const vistas = {
        detalle: (
            <DetalleEvento
                evento={evento}
                onCerrar={onCerrar}
                onEscalarRevision={() => cambiarVista("expertos")}
            />
        ),
        expertos: (
            <ExpertosListado
                evento={evento}
                onCerrar={onCerrar}
                onSolicitar={(experto) =>
                    console.log("Se ha relevado la revisión al experto/a: " + experto.nombre)
                }
                onVolver={manejarRegreso}
            />
        ),
        // ventanaExitosa: ...
    };

    return <>{vistas[vistaActual]}</>;
};

export default ProcesoRevision;
