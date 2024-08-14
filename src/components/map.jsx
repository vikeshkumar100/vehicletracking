import React, { useState, useEffect } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "70vw",
  height: "70vh",
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBqI77dxeX1Nwmcs2Qfm2qOiYRntY4YFp0",
  });

  const [center, setCenter] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude, accuracy } = position.coords;
          console.log(`Latitude: ${latitude}, Longitude: ${longitude}, Accuracy: ${accuracy} meters`);
          setCenter({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error("Error getting location:", error);
          // Set a default location if user denies or if there's an error
          setCenter({ lat: 12.9719, lng: 79.1637 });
        },
        {
          enableHighAccuracy: true, // Request high accuracy location
          timeout: 5000, // Set a timeout to handle cases where location fetching takes too long
          maximumAge: 0, // No caching, always get fresh location data
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      // Set a default location if geolocation is not supported
      setCenter({ lat: 12.9719, lng: 79.1637 });
    }
  }, []);

  const onLoad = React.useCallback(function callback(map) {
    // Additional logic can be added here if needed
  }, []);

  return isLoaded && center ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={19}
      onLoad={onLoad}
    >
      <Marker position={center} />
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(Map);
