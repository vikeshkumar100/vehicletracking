import React, { useState } from "react";
import "./track.css";
import Map from "./map";

const Track = () => {

  const [ref, setRef] = useState(false);
  const refresh = () => {
    setRef(!ref);
  };

  return (
    <>
      <div className="container">
        <h1 className="title">Real time tracking</h1>
        <div className="map-container">
          <button className="button" onClick={refresh}>Refresh Location</button>
          <div className="map">
            <Map
              key={ref ? "1" : "0"} // Ensure key changes when ref changes
              onLoad={(map) => {
                const bounds = new window.google.maps.LatLngBounds();
                map.fitBounds(bounds);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Track;
