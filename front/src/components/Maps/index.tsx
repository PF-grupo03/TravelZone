import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const TourMap = () => {
  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: 37.7749, // Latitud de San Francisco
    lng: -122.4194, // Longitud de San Francisco
  };

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
        {/* Aquí agregamos el marcador */}
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default TourMap;
