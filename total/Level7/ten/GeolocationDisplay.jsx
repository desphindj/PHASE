import React from "react";
import useGeolocation from "./useGeolocation";

const GeolocationDisplay = () => {
  const { location, error } = useGeolocation();

  return (
    <div style={{ fontFamily: "Poppins", padding: "20px", textAlign: "center" }}>
      <h2>Geolocation</h2>
      {error ? (
        <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>
      ) : location ? (
        <p>
          <strong>Latitude:</strong> {location.latitude} <br />
          <strong>Longitude:</strong> {location.longitude}
        </p>
      ) : (
        <p>Fetching location...</p>
      )}
    </div>
  );
};

export default GeolocationDisplay;
