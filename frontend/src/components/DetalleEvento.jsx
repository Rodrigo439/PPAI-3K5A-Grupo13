import { useState } from 'react';
import { motion} from 'framer-motion';
import mapImage from '../assets/map.png';


  const DetalleEvento = ({ evento, onCerrar }) => {
    if (!evento) return null;

    const [showMap, setShowMap] = useState(true);
    const mapVariants = {
        hidden: { 
          height: 0, 
          opacity: 0,
          transition: { duration: 0.3 }
        },
        visible: { 
          height: 'auto', 
          opacity: 1,
          transition: { duration: 0.3 }
        }
      };

      const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
        exit: { opacity: 0, y: 20, transition: { duration: 0.35 , ease: 'easeInOut'} }
      }; 

    return (

      <motion.div 
      className="bg-[#54767C] text-white rounded-xl max-w-3xl w-full overflow-hidden"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}>
        {/* Header */}
        <div className="bg-[#2c4a4a] px-4 py-2 flex justify-between items-center">
          <h3 className="text-sm font-semibold">
            Evento sísmico N°{evento.id} detectado automáticamente (Revisión manual)
          </h3>
          <button onClick={onCerrar} className="text-gray-300 hover:text-white">✕</button>
        </div>
  
        {/* Mapa simulado */}
      {/* Mapa con animación */}
      <div className="relative">
        <motion.div 
          className="relative bg-gray-200 overflow-hidden"
          initial="visible"
          animate={showMap ? "visible" : "hidden"}
          variants={mapVariants}
        >
          <motion.div 
            className="absolute flex items-center gap-2 bottom-2 left-2 bg-white text-sm text-black rounded-full px-2 py-1 shadow hover:bg-sky-700 hover:text-white cursor-pointer"
            onClick={() => setShowMap(!showMap)}
          >

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64" />
            </svg>

            {showMap ? 'Ocultar mapa' : ''}
          </motion.div>
          {/* Map content here */}
          <div className="h-48 sm:h-64">
            {/* Your map component */}
            <img src={mapImage} alt="Mapa" />          </div>
        </motion.div>
      </div>
  
        {/* Detalles y acciones */}
        <div className="flex flex-col sm:flex-row p-4 gap-4 bg-[#29393C]">
          {/* Datos sísmicos */}
          <div className="bg-[#E1EFEF] text-black rounded-xl px-4 py-3 flex-1 text-xs overflow-y-auto scrollbar-thin scrollbar-thumb-[#7CD5CC] scrollbar-track-transparent h-64 pr-2">
            <p><strong>Fecha/Hora inicio:</strong> {evento.inicio}</p>
            <p><strong>Frecuencia de muestreo:</strong> {evento.frecuenciaMuestreo} Hz</p>
            <p><strong>Alerta de alarma:</strong> {evento.alerta ? "True" : "False"}</p>
  
            {evento.muestras.map((muestra, index) => (
              <div key={index}>
                <hr className="my-2" />
                <p><strong>Fecha/Hora muestra {index + 1}:</strong> {muestra.fecha}</p>
                <p>Velocidad de onda: {muestra.velocidad}</p>
                <p>Frecuencia de onda: {muestra.frecuencia}</p>
                <p>Longitud: {muestra.longitud}</p>
              </div>
            ))}
          </div>
  
          {/* Acciones */}
          <div className="flex flex-col gap-2 text-sm">
          <button className="bg-[#e4f3f3] text-black py-2 px-4 rounded-full font-medium transition-all duration-200 hover:bg-[#c9e9e9] active:scale-95 shadow">
  Aceptar y notificar
</button>

<button className="bg-[#cfe0e0] text-black py-2 px-4 rounded-full font-medium transition-all duration-200 hover:bg-[#bad4d4] active:scale-95 shadow">
  Solicitar revisión a experto
</button>

<button className="bg-[#fbe4b3] text-black py-2 px-4 rounded-full font-medium transition-all duration-200 hover:bg-[#f8d99b] active:scale-95 shadow">
  Modificar datos
</button>

<button className="bg-[#f8b3b3] text-black py-2 px-4 rounded-full font-medium transition-all duration-200 hover:bg-[#f49c9c] active:scale-95 shadow">
  Rechazar evento
</button>
            {!showMap? (
                        <button 
                        className="flex items-center gap-2 bg-white text-sm text-black py-2 px-4 rounded-full font-medium transition-all duration-200  hover:bg-sky-700 hover:text-white cursor-pointer"
                        onClick={() => setShowMap(!showMap)}
                      >
            
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64" />
                        </svg>
            
                        Mostrar mapa
                      </button>
            ) : ""}
          </div>
        </div>
      </motion.div>

    );
  };
  
  export default DetalleEvento;