import React, { useState, useEffect } from "react";
import { Map } from "ol";
import { toLonLat } from "ol/proj";

interface MousePositionProps {
  map: Map;
}

export const MousePosition: React.FC<MousePositionProps> = ({ map }) => {
  const [coordinates, setCoordinates] = useState<string>("No data");

  useEffect(() => {
    if (!map) return;

    const pointerMoveHandler = (event: any) => {
      const coords = toLonLat(event.coordinate);
      const formattedCoords = `Coordinates: ${coords[0].toFixed(6)}, ${coords[1].toFixed(6)}`;
      setCoordinates(formattedCoords);
    };

    map.on("pointermove", pointerMoveHandler);

    return () => {
      if (map) {
        map.un("pointermove", pointerMoveHandler);
      }
    };
  }, [map]);

  return <div className="mouse-position-display">{coordinates}</div>;
};
