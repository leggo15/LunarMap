import React, { useEffect, useState } from "react";
import { Map } from "ol";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Feature, { FeatureLike } from "ol/Feature";
import Geometry from "ol/geom/Geometry";
import Polygon from "ol/geom/Polygon";
import { Fill, Stroke, Style } from "ol/style";
import { fromLonLat } from "ol/proj";

interface NearFarSideData {
  id: number;
  name: string;
  description: string | null;
  wiki: string | null;
  coordinates: number[][][];
}

interface NearFarSidePlotterProps {
  map: Map;
  show: boolean;
}

const getStyle = (feature: FeatureLike): Style => {
  const name = (feature as Feature<Geometry>).get("name");

  if (name === "Nearside") {
    return new Style({
      stroke: new Stroke({
        color: "rgba(255, 255, 255, 0.075)",
        width: 3,
      }),
      fill: new Fill({
        color: "rgba(255, 255, 255, 0.12)",
      }),
    });
  } else if (name === "Farside") {
    return new Style({
      stroke: new Stroke({
        color: "rgba(0, 0, 0, 0.075)",
        width: 3,
      }),
      fill: new Fill({
        color: "rgba(0, 0, 0, 0.12)",
      }),
    });
  }

  // Default style if no condition is met
  return new Style({
    stroke: new Stroke({
      color: "rgba(100, 100, 100, 0.075)",
      width: 1,
    }),
    fill: new Fill({
      color: "rgba(100, 100, 100, 0.1)",
    }),
  });
};

const NearFarSidePlotter: React.FC<NearFarSidePlotterProps> = ({
  map,
  show,
}) => {
  const [features, setFeatures] = useState<Feature[]>([]);

  useEffect(() => {
    const fetchNearFarSide = async () => {
      try {
        const response = await fetch("public/data/far-near-side.geojson");
        if (!response.ok) {
          throw new Error("Error fetching the local data.");
        }
        const geoJsonData = await response.json();
        const data = geoJsonData.features; // Access the features array from GeoJSON data

        const loadedFeatures = data.map((featureData: any) => {
          const coordinates = featureData.geometry.coordinates[0].map(
            (coord: number[]) => fromLonLat(coord),
          );
          const polygon = new Polygon([coordinates]);
          return new Feature({
            geometry: polygon,
            name: featureData.properties.name,
          });
        });

        setFeatures(loadedFeatures);
      } catch (error) {
        console.error("Failed to fetch or process moon sides data:", error);
      }
    };

    fetchNearFarSide();
  }, []);

  useEffect(() => {
    if (show && features.length > 0) {
      const nearFarSideSource = new VectorSource({
        features: features,
      });

      const nearFarSideLayer = new VectorLayer({
        source: nearFarSideSource,
        style: getStyle,
      });

      map.addLayer(nearFarSideLayer);

      return () => {
        map.removeLayer(nearFarSideLayer);
      };
    }
  }, [show, features, map]);

  return null;
};

export default NearFarSidePlotter;
