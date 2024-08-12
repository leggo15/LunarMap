import React, { useEffect } from "react";
import Feature from "ol/Feature";
import { Style, Fill, Stroke, Text } from "ol/style";
import Polygon from "ol/geom/Polygon";
import { fromLonLat } from "ol/proj";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { Map } from "ol";
import { setupCraterClick } from "./CraterInfo";

interface CratersProps {
  map: Map;
  show: boolean;
}

interface CraterFeatureProperties {
  name: string;
  Wiki: string | null;
  radius: number;
  depth: number;
  eponym: string | null;
  image_url: string | null;
  numPoints?: number; // Optional property
}

interface CraterFeatureGeometry {
  type: string;
  coordinates: [number, number];
}

interface CraterFeature {
  type: string;
  properties: CraterFeatureProperties;
  geometry: CraterFeatureGeometry;
}

interface CratersGeoJSON {
  type: string;
  features: CraterFeature[];
}

async function fetchCraters(map: Map) {
  try {
    const response = await fetch("data/craters.geojson");
    if (!response.ok) throw new Error("Error fetching data");

    const geojsonData: CratersGeoJSON = await response.json();
    const data = geojsonData.features;

    const vectorSource = new VectorSource({
      features: data.map((feature: CraterFeature) => {
        const properties = feature.properties;
        const coordinates = feature.geometry.coordinates;
        const num_points = properties.numPoints || 16;
        const radius = properties.radius;
        const points = [];

        for (let i = 0; i < num_points; i++) {
          const angle = (i * 2 * Math.PI) / num_points;
          const pointLongitudeRadians =
            ((coordinates[1] + radius * Math.sin(angle)) * Math.PI) / 180;
          const pointLongitude =
            coordinates[0] +
            ((radius * Math.cos(angle)) / Math.cos(pointLongitudeRadians)) *
              4.5;
          const pointLatitude = coordinates[1] + radius * Math.sin(angle) * 4.5;
          points.push(fromLonLat([pointLongitude, pointLatitude]));
        }
        points.push(points[0]); // Complete the polygon

        const polygon = new Polygon([points]);
        const mapFeature = new Feature({
          geometry: polygon,
          name: properties.name,
          wiki: properties.Wiki,
          radius: properties.radius,
          depth: properties.depth,
          eponym: properties.eponym,
          image_url: properties.image_url,
        });
        mapFeature.setStyle(
          new Style({
            fill: new Fill({
              color: "rgba(255, 204, 51, 0.1)",
            }),
            stroke: new Stroke({
              color: "rgba(255, 204, 51, 0.5)",
              width: 2,
            }),
            text: new Text({
              font: "14px Calibri,sans-serif",
              fill: new Fill({
                color: "#000",
              }),
              stroke: new Stroke({
                color: "#fff",
                width: 2,
              }),
              text: mapFeature.get("name"),
            }),
          }),
        );
        return mapFeature;
      }),
    });

    const vectorLayer = new VectorLayer({
      source: vectorSource,
      properties: { id: "Craters" },
      minZoom: 3,
      zIndex: 20,
    });

    map
      .getLayers()
      .getArray()
      .filter(
        (layer) =>
          layer instanceof VectorLayer && layer.get("id") === "Craters",
      )
      .forEach((layer) => map.removeLayer(layer));
    map.addLayer(vectorLayer);
    setupCraterClick(map);
  } catch (error) {
    console.error("Error fetching or processing data:", error);
  }
}

const Craters: React.FC<CratersProps> = ({ map, show }) => {
  useEffect(() => {
    if (show) {
      fetchCraters(map);
    } else {
      map
        .getLayers()
        .getArray()
        .filter(
          (layer) =>
            layer instanceof VectorLayer && layer.get("id") === "Craters",
        )
        .forEach((layer) => map.removeLayer(layer));
    }
  }, [map, show]);

  return null; // This component does not render anything itself
};

export default Craters;
