import React from "react";
import { GoogleMap, useJsApiLoader ,Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "70vw",
  height: "70vh",
};

const center = {
  lat: 12.9710529,
  lng: 79.1637557
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
      <Marker position={center} />
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(map);
