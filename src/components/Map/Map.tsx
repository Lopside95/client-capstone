import React, { useEffect, useRef, useState } from "react";
import mapboxgl, { Map, MapEvent, MapMouseEvent } from "mapbox-gl";

import "mapbox-gl/dist/mapbox-gl.css";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import { MyMap, UserMarker } from "../../utils/types/posts";
import { primary } from "../../pages/Home/Home";
import { Spinner } from "evergreen-ui";
import Button from "../ui/Button/Button";

const MapComponent = ({ userMarkers, setUserMarkers }: MyMap) => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<Map | null>(null);

  const [longitude, setLongitude] = useState<number>(-0.142297);
  const [latitude, setLatitude] = useState<number>(51.564719);
  const markersRef = useRef<mapboxgl.Marker[]>([]);

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoibG9wc2lkZSIsImEiOiJjbTQ5cHU1YW0wY3E0MnFzZHFwdTZ5aWl2In0.COQXARWCccbTSMWIDGlwGg";

    if (!mapContainerRef.current) return;

    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
      collapsed: true,
    });

    const map = (mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      center: [longitude, latitude],
      zoom: 15,
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
      "bottom-right"
    );

    map.addControl(new mapboxgl.FullscreenControl(), "bottom-left");

    const searchBar = map.addControl(geocoder, "top-left");

    map.on("geolocate", (e) => {
      setLatitude(e.coords.latitude);
      setLongitude(e.coords.latitude);
    });

    const newMarker = map.on("click", (e: MapMouseEvent) => {
      if (markersRef.current.length) {
        markersRef.current.forEach((mark) => mark.remove());
        setUserMarkers([]);
      }

      const { lng, lat } = e.lngLat;

      const addedMarker = new mapboxgl.Marker({
        color: primary,
      })
        .setLngLat([lng, lat])
        .addTo(map);
      markersRef.current.push(addedMarker);

      setUserMarkers((markers) => [...markers, { lng, lat }]);
    });

    return () => map.remove();
  }, []);

  const handleReset = () => {
    markersRef.current.forEach((marker) => marker.remove());
    markersRef.current = [];
    setUserMarkers([]);
    mapRef.current?.flyTo({
      center: [longitude, latitude],
      zoom: 15,
    });
  };

  useEffect(() => {
    console.log("userMarklkkkk", userMarkers);
  }, [mapRef.current]);

  return (
    <>
      <div
        style={{ height: "450px", width: "100%" }}
        ref={mapContainerRef}
        className="map-container"
      />
      <Button
        onClick={(e) => {
          e.preventDefault();
          handleReset();
        }}
      >
        Reset Map
      </Button>
    </>
  );
};

export default MapComponent;
