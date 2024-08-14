import React, { useState } from "react";
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

  const [center, setCenter] = useState({ lat: 12.9719, lng: 79.1637 });

  const onLoad = React.useCallback(function callback(map) {
    // You can add additional logic here if needed
  }, []);

  return isLoaded ? (
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
