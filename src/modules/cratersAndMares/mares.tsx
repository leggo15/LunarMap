import React, { useEffect } from "react";
import { Map } from "ol";
import Feature from "ol/Feature";
import Polygon from "ol/geom/Polygon";
import { fromLonLat } from "ol/proj";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { Style, Fill, Stroke, Text } from "ol/style";

interface MaresProps {
  map: Map;
  show: boolean;
}

async function fetchMares(map: Map) {
  try {
    // Assuming the file is located in the public directory and accessible via a static path
    const response = await fetch("public/data/mare.geojson");
    if (!response.ok)
      throw new Error("Error fetching data from the local file");

    const geojsonData = await response.json();

    const features = geojsonData.features.map((feature) => {
      const coordinates = feature.geometry.coordinates;
      const transformedCoordinates = coordinates.map((ring) =>
        ring.map((coord) => fromLonLat(coord)),
      );

      const geometry = new Polygon(transformedCoordinates);
      return new Feature({
        geometry: geometry,
        name: feature.properties.name,
      });
    });

    const mareSource = new VectorSource({
      features: features,
    });

    const mareLayer = new VectorLayer({
      source: mareSource,
      properties: { id: "mares" },
      maxZoom: 6,
      zIndex: 10,
      style: (feature) => {
        const featureName = feature.get("name");
        return new Style({
          stroke: new Stroke({
            color: "rgba(30, 80, 155, 0.5)",
            width: 2,
          }),
          fill: new Fill({
            color: "rgba(30, 80, 155, 0.1)",
          }),
          text: new Text({
            font: "14px Calibri,sans-serif",
            fill: new Fill({
              color: "#ffffff",
            }),
            stroke: new Stroke({
              color: "#000000",
              width: 3,
            }),
            text: featureName ? featureName : "", // Ensuring that text is always a string
          }),
        });
      },
    });

    map
      .getLayers()
      .getArray()
      .filter(
        (layer) => layer instanceof VectorLayer && layer.get("id") === "mares",
      )
      .forEach((layer) => map.removeLayer(layer));

    map.addLayer(mareLayer); // Add the layer to the map
  } catch (error) {
    console.error("Failed to load local moon mares:", error);
  }
}

const MoonMares: React.FC<MaresProps> = ({ map, show }) => {
  useEffect(() => {
    if (show) {
      fetchMares(map);
    } else {
      const layersToRemove = map
        .getLayers()
        .getArray()
        .filter(
          (layer) =>
            layer instanceof VectorLayer && layer.get("id") === "mares",
        );
      layersToRemove.forEach((layer) => map.removeLayer(layer));
    }

    return () => {
      // Cleanup function to remove layers when the component is unmounted or hidden
      const layersToRemove = map
        .getLayers()
        .getArray()
        .filter(
          (layer) =>
            layer instanceof VectorLayer && layer.get("id") === "mares",
        );
      layersToRemove.forEach((layer) => map.removeLayer(layer));
    };
  }, [map, show]);

  return null; // This component does not render anything itself
};

export default MoonMares;
