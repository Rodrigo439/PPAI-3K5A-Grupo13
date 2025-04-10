import { useState, useEffect } from "react";

const ExpertosListado = ({ onSolicitar, onCerrar }) => {
  const [expertos, setExpertos] = useState([]);

  useEffect(() => {
    fetch('./../src/data/expertos.json')
      .then(res => res.json())
      .then(data => setExpertos(data))
      .catch(err => console.error("Error al cargar expertos:", err));
  }, []);

  return (
    <div className="bg-[#29393C] text-white rounded-xl p-4 max-w-md w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-sm">Listado de expertos disponibles</h2>
        <button
          onClick={onCerrar}
          className="text-gray-300 hover:text-white text-xl leading-none"
          aria-label="Cerrar listado de expertos"
        >
          ✕
        </button>
      </div>

      <div className="bg-[#E1EFEF] rounded-xl p-4">
        {expertos.map((experto) => (
          <div
            key={experto.id}
            className="flex justify-between items-center py-2 border-b border-[#b6dcdc]"
          >
            <div className="flex items-center gap-3">
              <img
                src={experto.avatar}
                alt={experto.nombre}
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="text-sm text-[#233131]">{experto.nombre}</span>
            </div>
            <button
              onClick={() => onSolicitar(experto)}
              className="bg-[#a4d1c0] hover:bg-[#6bc1cc9f] text-sm text-[#233131] px-3 py-1 rounded-full shadow cursor-pointer"
            >
              Solicitar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertosListado;
