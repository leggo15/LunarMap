// Open layers and react
import React, { useEffect } from "react";
import { Map } from "ol";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Point from "ol/geom/Point";
import Feature from "ol/Feature";
import { Style, Icon } from "ol/style";
import { fromLonLat } from "ol/proj";

// local module to register click on landing sites
import { setupLandingClick } from "./landingInfo";

interface landingSitesProps {
  map: Map;
  mission: string;
  show: boolean;
}

// function to filter the correct icon path for the landing sites
const getIconPath = (programName: string) => {
  if (programName.startsWith("Apollo")) {
    return "./Apollo_Lander_Icon.png";
  } else if (programName.startsWith("Chang-e")) {
    return "./Chang-e_Mission_Icon.png";
  } else if (programName.startsWith("LCROSS")) {
    return "./LCROSS_Probe_Icon.png";
  } else if (programName.startsWith("Luna")) {
    return "./Luna_Mission_Icon.png";
  }
  return "./Default_Icon.webp";
};

const fetchLandingSites = async (map: Map, mission: string) => {
  try {
    const response = await fetch("public/data/moon_landings.json");
    if (!response.ok) throw new Error("Error fetching the requested data.");

    const data = await response.json();

    // filter the data based on the mission
    const filteredData = data.filter((landing: { label: string }) => {
      if (mission === "Apollo") return landing.label.startsWith("Apollo");
      if (mission === "Luna") return landing.label.startsWith("Luna");
      if (mission === "Chang-e") return landing.label.startsWith("Chang-e");
      if (mission === "LCROSS") return landing.label.startsWith("LCROSS");
      return mission === "all";
    });

    const vectorSource = new VectorSource({
      features: filteredData.map(
        (landing: { lng: number; lat: number; label: string }) => {
          const feature = new Feature({
            geometry: new Point(fromLonLat([landing.lng, landing.lat])),
            name: landing.label,
          });

          // calling function to get correct icon
          const iconPath = getIconPath(landing.label);

          // style for the markers
          const markerStyle = new Style({
            image: new Icon({
              anchor: [0.5, 0.5],
              src: iconPath,
              scale: 0.06,
            }),
          });
          feature.setStyle(markerStyle);

          // Setting label so that clicking on the marker actualy works.
          feature.set("label", landing.label);

          return feature;
        },
      ),
    });

    const vectorLayer = new VectorLayer({
      source: vectorSource,
      properties: { id: "landingSites" },
      minZoom: 2.8,
      zIndex: 30,
    });

    // Remove existing moon landings layer before adding a new one
    map
      .getLayers()
      .getArray()
      .filter((layer) => layer.get("id") === "landingSites")
      .forEach((layer) => map.removeLayer(layer));

    map.addLayer(vectorLayer);
  } catch (error) {
    console.error("Error fetching moon data:", error);
  }
};

const landingSites: React.FC<landingSitesProps> = ({ map, mission, show }) => {
  useEffect(() => {
    if (!show) {
      map
        .getLayers()
        .getArray()
        .filter((layer) => layer.get("id") === "landingSites")
        .forEach((layer) => map.removeLayer(layer));
      const info = document.getElementById("LandingInfo");
      if (info) {
        info.innerHTML = "";
      }

      return;
    }

    async function fetchDataAndSetupInteractions() {
      await fetchLandingSites(map, mission);

      // Setting upp the interaction for landing sites
      setupLandingClick(map);
    }

    fetchDataAndSetupInteractions();
  }, [map, mission, show]);

  return null;
};

export default landingSites;
