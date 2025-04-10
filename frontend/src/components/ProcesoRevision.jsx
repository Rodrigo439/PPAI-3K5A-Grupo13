import DetalleEvento from "./DetalleEvento";

const ProcesoRevision = ({ evento, onCerrar }) => {
    return (
    <>

    <DetalleEvento evento={evento} onCerrar={onCerrar} />
    </>
        
    );
};

export default ProcesoRevision;
