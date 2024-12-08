import React, { useEffect, useRef, useState } from "react";
import mapboxgl, { Map } from "mapbox-gl";

import "mapbox-gl/dist/mapbox-gl.css";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
// import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
const MapTwo = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<Map | null>(null);

  const [longitude, setLongitude] = useState<number>(-0.142297);
  //   const [longitude, setLongitude] = useState<number>(51.564719);
  const [latitude, setLatitude] = useState<number>(51.564719);

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoibG9wc2lkZSIsImEiOiJjbTQ5cHU1YW0wY3E0MnFzZHFwdTZ5aWl2In0.COQXARWCccbTSMWIDGlwGg";

    // if (!mapContainerRef.current) {
    //   return <div>Map Loading</div>;
    // }
    if (!mapContainerRef.current) return;

    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
    });

    const map = (mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      center: [longitude, latitude],
      zoom: 9,
    }));
    // 51.564719, -0.142297
    mapRef.current = map;

    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
        showUserLocation: true,
      }),
      "top-left"
    );

    map.addControl(new mapboxgl.FullscreenControl(), "top-left");

    map.addControl(geocoder, "top-left");

    map.on("geolocate", (event) => {
      const { longitude, latitude } = event.coords;

      setLatitude(latitude);
      setLongitude(longitude);

      //   new mapboxgl.Marker().setLngLat([longitude, latitude]).addTo(map);
    });
    return () => map.remove();
  }, []);

  //   const map = mapRef.current;

  //   const myMarker = map?.addControl(new mapboxgl.Marker());

  return (
    <div
      style={{ height: "500px" }}
      ref={mapContainerRef}
      className="map-container"
    />
  );
};

export default MapTwo;
