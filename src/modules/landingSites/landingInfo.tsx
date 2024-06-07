// landing click not working as expexted
import { Map } from "ol";
import Select from "ol/interaction/Select";
import Style from "ol/style/Style";
import Icon from "ol/style/Icon";
import VectorLayer from "ol/layer/Vector";

export function setupLandingClick(map: Map) {
  const displayDivId = "LandingInfo";

  const selectInteraction = new Select({
    layers: (layer) => {
      return layer instanceof VectorLayer && layer.get("id") === "landingSites";
    },
    style: (feature) => {
      const label = feature.get("label"); // Get label from the feature.
      const iconPath = getIconPath(label); // Call getIconPath with the correct label.
      return new Style({
        image: new Icon({
          anchor: [0.5, 0.5],
          src: iconPath,
          scale: 0.08,
        }),
      });
    },
  });
  map.addInteraction(selectInteraction);

  selectInteraction.on("select", async (event) => {
    const displayDiv = document.getElementById(displayDivId);
    if (!displayDiv) return; // Early exit if div is not found.

    if (event.selected.length === 0) {
      displayDiv.innerHTML = "";
    } else {
      displayDiv.innerHTML = "Loading..."; // Indicate loading status.
      const selectedFeature = event.selected[0];
      const label = selectedFeature.get("label"); // Ensure label is available here.

      if (label) {
        try {
          const response = await fetch("public/data/moon_landings.json");
          const data = await response.json();
          const landing = data.find(
            (item: { label: any }) => item.label === label,
          );

          if (landing) {
            displayDiv.innerHTML = `
                <img src="${landing.image || "N/A"}", class="my-image-class" />
                <h3>${landing.label}</h3>
                <div><b>Program:</b> ${landing.program || "N/A"}</div>
                <div><b>Agency:</b> ${landing.agency || "N/A"}</div>
                <div><b>Date:</b> ${new Date(landing.date).toDateString()}</div>
                </br>
                <div> ${landing.description || "N/A"}</div>
                
                <div><b>Read more:</b> <a href="${landing.url}" target="_blank">wikipedia</a></div>
            `;
          } else {
            displayDiv.innerHTML = "No data available";
          }
        } catch (error) {
          console.error("Error fetching data:", error);
          displayDiv.innerHTML = "Error fetching data";
        }
      } else {
        displayDiv.innerHTML = "Label not available";
      }
    }
  });

  return selectInteraction;
}

// url path for the icon
function getIconPath(programName: string) {
  if (programName.startsWith("Apollo")) {
    return "./Apollo_Lander_Icon_Selected.png";
  } else if (programName.startsWith("Chang-e")) {
    return "./Chang-e_Mission_Icon_Selected.png";
  } else if (programName.startsWith("LCROSS")) {
    return "./LCROSS_Probe_Icon_Selected.png";
  } else if (programName.startsWith("Luna")) {
    return "./Luna_Mission_Icon_Selected.png";
  } else {
    return "./Default_Icon.webp";
  }
}
