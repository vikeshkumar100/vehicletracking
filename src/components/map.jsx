// map.jsx
import React, { useState, useEffect } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { database, ref, onValue } from "../firebaseConfig";

const containerStyle = {
  width: "70vw",
  height: "70vh",
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBqI77dxeX1Nwmcs2Qfm2qOiYRntY4YFp0",
  });

  const [map, setMap] = useState(null);
  const [center, setCenter] = useState(null);

  useEffect(() => {
    const dataRef = ref(database); 

    onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      setCenter({ lat: data.lat, lng: data.lng });
    });

    return () => {
    };
  }, []);

  const onLoad = React.useCallback(function callback(map) {
    setMap(map);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={19}
      onLoad={onLoad}
    >
      {center && <Marker position={center} />}
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(Map);
