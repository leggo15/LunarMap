import { Map } from "ol";
import Select from "ol/interaction/Select";
import { Style, Fill, Stroke } from "ol/style";
import VectorLayer from "ol/layer/Vector";

const lunarRadiusKm = 1737.4; // Average radius of the Moon in kilometers

export function setupCraterClick(map: Map) {
  const displayDivId = "LandingInfo"; // Ensure this div is present in your HTML/React component

  const selectInteraction = new Select({
    layers: (layer) =>
      layer instanceof VectorLayer && layer.get("id") === "Craters",
    style: new Style({
      fill: new Fill({
        color: "rgba(255, 204, 51, 0.2)",
      }),
      stroke: new Stroke({
        color: "#ffcc33",
        width: 2,
      }),
    }),
  });
  map.addInteraction(selectInteraction);

  selectInteraction.on("select", (event) => {
    const displayDiv = document.getElementById(displayDivId);
    if (!displayDiv) return;

    if (event.selected.length === 0) {
      displayDiv.innerHTML = "";
    } else {
      displayDiv.innerHTML = "Loading...";
      const selectedFeature = event.selected[0];
      const craterName = selectedFeature.get("name");
      const craterEponym = selectedFeature.get("eponym");
      const craterImage = selectedFeature.get("image_url");
      const craterWiki = selectedFeature.get("wiki");
      const craterDepth = selectedFeature.get("depth");
      const craterRadiusFraction = selectedFeature.get("radius");
      const craterRadiusKm = (
        craterRadiusFraction *
        lunarRadiusKm *
        0.17843
      ).toFixed(2); // Convert fraction to kilometers

      displayDiv.innerHTML = `
      <img src="${craterImage || "images/default-image.jpg"}" class="my-image-class" />
        <h3>${craterName}</h3>
        <p>Approximate Width: ${craterRadiusKm} km</p>
        <p>Depth: ${craterDepth || "N/A"}</p>
        <p>Eponym: ${craterEponym || "N/A"}</p>
        ${craterWiki ? `<p><a href="${craterWiki}" target="_blank">More Info</a></p>` : ""}
      `;
    }
  });

  return selectInteraction;
}
