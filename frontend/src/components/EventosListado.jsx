const EventosListado = ({ eventos, onSeleccionar }) => (
  <div className="bg-[#29393C] text-white rounded-xl p-4 max-w-md w-full">
    <h2 className="font-semibold text-center mb-4">Listado de eventos sísmicos pendientes</h2>
    <div className="bg-[#E1EFEF] rounded-xl p-4">
      {eventos.map((evento) => (
        <div key={evento.id} className="flex justify-between items-center py-2 border-b border-[#b6dcdc]">
          <p className="text-sm text-[#233131]">
            Ev. detectado automáticamente N°{evento.id}
          </p>
          <button
            onClick={() => onSeleccionar(evento)}
            className="bg-[#a4d1c0] hover:bg-[#6bc1cc9f] text-sm text-[#233131] px-3 py-1 rounded-full shadow cursor-pointer"
          >
            Revisar
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default EventosListado;