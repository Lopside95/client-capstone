import { useCallback, useEffect, useRef, useState } from "react";
import Map, {
  GeolocateControl,
  MapRef,
  Marker,
  useMap,
  NavigationControl,
  LngLat,
  MarkerDragEvent,
  GeolocateResultEvent,
} from "react-map-gl";
import mapboxgl from "mapbox-gl";
import "./Map.scss";
export type LocationType = {
  latitude: number;
  longitude: number;
};

export interface MyMapProps {
  userLocation: LocationType;
}

// Initialize the geolocate control.

const MapComponent = ({ userLocation }: MyMapProps) => {
  const mapRef = useRef<MapRef | null>(null);
  //   const initialPosition = () =>
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       return position.coords.latitude, position.coords.longitude;
  //     });
  const geolocate = new mapboxgl.GeolocateControl({
    positionOptions: {
      enableHighAccuracy: true,
    },
    trackUserLocation: true,
  });

  console.log("geloac", geolocate);

  // // Add the control to the map.
  // map.addControl(geolocate);
  // map.on("load", () => {
  //   geolocate.trigger();
  // });

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

  const handleDrag = () => {};

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
    <>
      {/* <head>
        <link
          rel="stylesheet"
          href="https://api.tiles.mapbox.com/mapbox-gl-js/v1.5.1/mapbox-gl.css"
          type="text/css"
        />
      </head> */}
      <Map
        ref={mapRef}
        mapboxAccessToken={import.meta.env.VITE_MAPBOX_API_TOKEN}
        initialViewState={{
          longitude: -0.1420972,
          latitude: 51.5646965,
          // longitude: userLocation.longitude,
          // latitude: userLocation.latitude,
          zoom: 14,
        }}
        style={{ width: "90vw", height: 400 }}
        mapStyle="mapbox://styles/mapbox/streets-v12"

        //  attributionControl={false}
        //   logoPosition="bottom-left"
      >
        <Marker
          latitude={0}
          longitude={0}
          // latitude={userLocation.latitude}
          // longitude={userLocation.longitude}
          draggable
        />
        {/* <Marker latitude={-34.0656944} longitude={23.3747778} draggable /> */}
        <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
          // onGeolocate={(e: GeolocateResultEvent) => {
          //   const { coords } = e;
          //   console.log(
          //     `Longitude: ${coords.longitude}, Latitude: ${coords.latitude}`
          //   );
          //   console.log(e);
          // }}
          // onGeolocate={()=> console.log(lngLat)}
          showUserLocation={true}
          showUserHeading={true}
          position="bottom-right"
        />
        <NavigationControl
          showCompass
          position="top-left"
          style={{ background: "red" }}
          //   style={{ height: 80 }}
          showZoom
        >
          {}
        </NavigationControl>
      </Map>
    </>
  );
};

export default MapComponent;
