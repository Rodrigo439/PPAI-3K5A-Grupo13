import { useState, useEffect } from "react";

const ExpertosListado = ({ onSolicitar, onVolver }) => {
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
          onClick={onVolver}
          className="text-gray-300 hover:text-white text-xl leading-none"
          aria-label="Cerrar listado de expertos"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
</svg>
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
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" />
                </svg>
                <span>Solicitar</span>
              </div>
            </button>

          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertosListado;
