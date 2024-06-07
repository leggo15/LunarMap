import React, { useState, useEffect } from "react";
import { Map } from "ol";

interface AltitudeProps {
  map: Map;
}

export const AltitudeP: React.FC<AltitudeProps> = ({ map }) => {
  const [altitude, setAltitude] = useState<number>(2557.94); // Store altitude as a number for the slider
  const moonRadius = 1737; // in km
  const tileSize = 256; // typical tile size in pixels
  const minAltitude = 35; // minimum altitude in km (closest zoom)
  const maxAltitude = 6500; // maximum altitude in km (farthest zoom)

  // A more precise function to calculate pseudo-altitude from zoom levels
  const getApproximateAltitude = (zoom: number) => {
    const resolution =
      (2 * Math.PI * moonRadius * 1000) / (tileSize * Math.pow(2, zoom)); // in meters
    const approximateAltitude = (resolution * window.innerWidth) / 2 / 1000; // Convert to km
    return approximateAltitude; // convert meters to kilometers
  };

  useEffect(() => {
    if (!map) return;

    const altitudeHandler = () => {
      const zoom = map.getView().getZoom();
      if (zoom) {
        const approxAltitude = getApproximateAltitude(zoom);
        setAltitude(approxAltitude);
      }
    };

    map.getView().on("change:resolution", altitudeHandler);

    return () => {
      map.getView().un("change:resolution", altitudeHandler);
    };
  }, [map]);

  return (
    <div className="altitude-container">
      <div className="altitude-display">
        Approximate Altitude: {altitude.toFixed(2)} km
      </div>
      <input
        type="range"
        min={minAltitude}
        max={maxAltitude}
        value={altitude}
        className="altitude-slider"
        readOnly
      />
    </div>
  );
};
