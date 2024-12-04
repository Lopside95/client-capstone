import { useEffect, useRef, useState } from "react";
import Map, { GeolocateControl, MapRef, Marker, useMap } from "react-map-gl";
import "./Map.scss";
export type LocationType = {
  latitude: number | null;
  longitude: number | null;
};

const MapComponent = () => {
  const mapRef = useRef<MapRef | null>(null);
  const [userLocation, setUserLocation] = useState<LocationType>({
    latitude: null,
    longitude: null,
  });

  // console.log(mapRef.bearing)

  const mapControl = useMap();

  console.log("map", mapControl);

  useEffect(() => {
    if (mapRef.current) {
      const map = mapRef.current.getMap();
      //   console.log("map", map);
    }
  }, []);

  return (
    <Map
      ref={mapRef}
      mapboxAccessToken={import.meta.env.VITE_MAPBOX_API_TOKEN}
      initialViewState={{
        longitude: 23.3747778,
        latitude: -34.0656944,
        zoom: 14,
      }}
      style={{ width: "90vw", maxHeight: 600 }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      logoPosition="bottom-left"
    >
      <Marker latitude={-34.0656944} longitude={23.3747778} draggable />
      <GeolocateControl
        positionOptions={{ enableHighAccuracy: true }}
        trackUserLocation={true}
        showUserLocation={true}
        showUserHeading={true}
        position="bottom-right"
      />
    </Map>
  );
};

export default MapComponent;
