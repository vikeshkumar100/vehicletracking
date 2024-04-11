import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "70vw",
  height: "70vh",
};

const center = {
  lat: 12.972160,
  lng: 79.158139
};

function map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBqI77dxeX1Nwmcs2Qfm2qOiYRntY4YFp0",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
    >
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(map);
