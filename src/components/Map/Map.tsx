import { useCallback, useEffect, useRef, useState } from "react";
import Map, {
  GeolocateControl,
  MapRef,
  Marker,
  useMap,
  NavigationControl,
  LngLat,
  MarkerDragEvent,
} from "react-map-gl";
import "./Map.scss";
export type LocationType = {
  latitude: number;
  longitude: number;
};

export interface MyMapProps {
  userLocation: LocationType;
}

const MapComponent = ({ userLocation }: MyMapProps) => {
  const mapRef = useRef<MapRef | null>(null);
  //   const initialPosition = () =>
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       return position.coords.latitude, position.coords.longitude;
  //     });

  //   useEffect(() => {
  //     initialPosition();
  //   });

  //   const [userLocation, setUserLocation] = useState<LocationType>({
  //     latitude: null,
  //     longitude: null,
  //   });

  const [marker, setMarker] = useState<LocationType>({
    latitude: 0,
    longitude: 0,
  });
  const [events, logEvents] = useState<Record<string, LngLat>>({});
  // console.log(mapRef.bearing)

  //   const onMarkerDragStart = useCallback((event: MarkerDragEvent) => {
  //     logEvents((_events) => ({ ..._events, onDragStart: event.lngLat }));
  //   }, []);

  //   const onMarkerDrag = useCallback((event: MarkerDragEvent) => {
  //     logEvents((_events) => ({ ..._events, onDrag: event.lngLat }));

  //     setMarker({
  //       longitude: event.lngLat.lng,
  //       latitude: event.lngLat.lat,
  //     });
  //   }, []);

  //   const onMarkerDragEnd = useCallback((event: MarkerDragEvent) => {
  //     logEvents((_events) => ({ ..._events, onDragEnd: event.lngLat }));
  //   }, []);

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
      <Marker
        latitude={userLocation.latitude}
        longitude={userLocation.longitude}
        draggable
      />
      {/* <Marker latitude={-34.0656944} longitude={23.3747778} draggable /> */}
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
