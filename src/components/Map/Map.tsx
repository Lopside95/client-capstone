import { useEffect, useRef } from "react";
import Map, { GeolocateControl, MapRef, Marker } from "react-map-gl";
import "./Map.scss";

const MapComponent = () => {
  const mapRef = useRef<MapRef | null>(null);

  useEffect(() => {
    if (mapRef.current) {
      const map = mapRef.current.getMap();
    }
  }, []);

  return (
    <div className="map">
      <Map
        ref={mapRef}
        mapboxAccessToken={import.meta.env.VITE_MAPBOX_API_TOKEN}
        initialViewState={{
          longitude: 23.3747778,
          latitude: -34.0656944,
          zoom: 14,
        }}
        style={{ width: "80%", height: 400 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <Marker latitude={-34.0656944} longitude={23.3747778} draggable />
        <GeolocateControl
          trackUserLocation={true}
          showUserLocation={true}
          position="top-right"
        />
      </Map>
    </div>
  );
};

export default MapComponent;
