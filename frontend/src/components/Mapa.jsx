import { GoogleMap, useJsApiLoader, Circle } from '@react-google-maps/api';

const Mapa = ({ latitud, longitud, radio }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY, 
  });
  
  const center = {
    lat: latitud,
    lng: longitud,
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={{ width: '100%', height: '100%' }} // se ajusta al tamaño del contenedor padre
      center={center}
      zoom={8}
      options={{
        disableDefaultUI: true,
        zoomControl: true,
      }}
    >
      <Circle
        center={center}
        radius={radio}
        options={{
          fillColor: '#FF0000',
          fillOpacity: 0.2,
          strokeColor: '#FF0000',
          strokeOpacity: 0.8,
          strokeWeight: 2,
        }}
      />
    </GoogleMap>
  ) : (
    <div className="text-center text-sm text-gray-500">Cargando mapa...</div>
  );
};

export default Mapa;
