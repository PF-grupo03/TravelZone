import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const TourMap = ({ latitude, longitude }) => {
  // Convertir las coordenadas a números
  const [viewport, setViewport] = useState({
    latitude: parseFloat(latitude),
    longitude: parseFloat(longitude),
  });

  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  // Crear un objeto con las coordenadas del centro del mapa
  const center = {
    lat: viewport.latitude,
    lng: viewport.longitude,
  };

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default TourMap;
