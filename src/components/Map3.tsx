import React, { useEffect, useRef } from "react";
import mapboxgl, { Map } from "mapbox-gl";

import "mapbox-gl/dist/mapbox-gl.css";

const MapTwo = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<Map | null>(null);

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoibG9wc2lkZSIsImEiOiJjbTQ5cHU1YW0wY3E0MnFzZHFwdTZ5aWl2In0.COQXARWCccbTSMWIDGlwGg";

    const map = (mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    }));
    mapRef.current = map;

    map.addControl(new mapboxgl.NavigationControl(), "top-right");
  }, []);

  //   const map = mapRef.current;

  //   const myMarker = map?.addControl(new mapboxgl.Marker());

  return (
    <div
      style={{ height: "90%" }}
      ref={mapContainerRef}
      className="map-container"
    />
  );
};

export default MapTwo;
