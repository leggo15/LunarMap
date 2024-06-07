// mapView.tsx
import React, { MutableRefObject, useEffect, useRef } from "react";
import { Map } from "ol";

export function MapView({ map }: { map: Map }) {
  const mapRef = useRef() as MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    map.setTarget(mapRef.current);
    return () => {
      map.setTarget(undefined);
    };
  }, [map]);

  return <main ref={mapRef} className="map-container"></main>;
}
