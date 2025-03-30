import { useState, useEffect } from "react";

const useGeolocation = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    const successHandler = (position) => {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    };

    const errorHandler = (err) => {
      setError(err.message);
    };

    const geoWatcher = navigator.geolocation.watchPosition(successHandler, errorHandler);

    return () => {
      navigator.geolocation.clearWatch(geoWatcher);
    };
  }, []);

  return { location, error };
};

export default useGeolocation;
