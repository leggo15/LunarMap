// Librarys
import React, { useState } from "react";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import { XYZ } from "ol/source";
import "ol/ol.css";

// css styling for the application
import "./application.css";

// Map View
import { MapView } from "../map/mapView";

// Data and code to add markers for the Landing Sites
import LandingSites from "../landingSites/landingSites";

// Data and code to add polygons for the Craters
import Craters from "../cratersAndMares/craters";

// Data and code to add polygons for the Mares
import Mares from "../cratersAndMares/mares";

// Data and code to add the moon sides. (Facing earth or away from earth)
import NearFarSide from "../nearSideAndFarSide/nearFarSide";

// Code implementation to add the Lat and Long and Altitude overlays
import { MousePosition } from "../mapInformation/mousePosition";
import { AltitudeP } from "../mapInformation/Altitude";

export function MapApplication() {
  const [map] = useState(
    new Map({
      layers: [
        new TileLayer({
          source: new XYZ({
            // The moon map
            // Changes from the API description is -y to get the map to loade correctly.
            // https://s3.amazonaws.com/opmbuilder/301_moon/tiles/w/hillshaded-albedo/{z}/{x}/{-y}.png
            // https://cartocdn-gusc.global.ssl.fastly.net/opmbuilder/api/v1/map/named/opm-moon-basemap-v0-1/all/{z}/{x}/{y}.png
            url: "https://s3.amazonaws.com/opmbuilder/301_moon/tiles/w/hillshaded-albedo/{z}/{x}/{-y}.png",
          }),
        }),
      ],
      view: new View({ center: [0, 0], zoom: 4, maxZoom: 15 }),
    }),
  );

  // Filtering the data based on mission in the moonLanding.tsx file.
  const [mission, setMission] = useState("all");

  // Filters to show and hide the different map overlays
  const [showMoonData, setShowMoonData] = useState(true);
  const [showMoonCraters, setShowMoonCraters] = useState(true);
  const [showMoonMares, setShowMoonMares] = useState(true);
  const [showMoonSides, setShowMoonSides] = useState(true);

  const [landingInfoContent, setLandingInfoContent] = useState(
    "Click on a feature on the map to see detailed information.",
  ); // enste endring fra rickard også nedover i diven

  function AdditionalInformation() {
    const LandingInfoDiv = document.getElementById("LandingInfo");
    if (LandingInfoDiv) {
      LandingInfoDiv.innerHTML =
        '<h3>Information about the near and far side of the moon.</h3>The <a href="https://en.wikipedia.org/wiki/Far_side_of_the_Moon">far side of the Moon</a>(Darker area) is the lunar hemisphere that always faces away from Earth, opposite to the <a href="https://en.wikipedia.org/wiki/Near_side_of_the_Moon">near side</a>(Light area), because of synchronous rotation in the Moons orbit. Compared to the near side, the far sides terrain is rugged, with a multitude of impact craters and relatively few flat and dark lunar maria (seas), giving it an appearance closer to other barren places in the Solar System such as Mercury and Callisto.<br><br><h3>Mare Information</h3>The lunar <a href="https://en.wikipedia.org/wiki/Lunar_mare">maria</a> (mares) are large, dark, basaltic plains on the Earth\'s Moon, formed by lava flowing into ancient impact basins. They were dubbed maria (Latin for \'seas\') by early astronomers who mistook them for actual seas. They are less reflective than the "highlands" as a result of their iron-rich composition, and hence appear dark to the naked eye. The maria cover about 16% of the lunar surface, mostly on the side visible from Earth.';
    }
  }

  // return statment to the root html div
  return (
    <>
      <div id="mainContainer">
        <header>
          <h1>Lunar Map</h1>
        </header>
        <div id="LandingInfo">{landingInfoContent}</div>
        <div id="selectEra">
          <label>Select Missions:</label>
          <br />
          <select onChange={(e) => setMission(e.target.value)} value={mission}>
            <option value="all">All</option>
            <option value="Apollo">Apollo</option>
            <option value="Luna">Luna</option>
            <option value="Chang-e">Chang-e</option>
            <option value="LCROSS">LCROSS</option>
          </select>
        </div>
        <div id="checkBoxlayers">
          <label>
            <input
              type="checkbox"
              checked={showMoonData}
              onChange={() => setShowMoonData(!showMoonData)}
            />
            Show Mission Data
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              checked={showMoonCraters}
              onChange={() => setShowMoonCraters(!showMoonCraters)}
            />
            Show Craters
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              checked={showMoonMares}
              onChange={() => setShowMoonMares(!showMoonMares)}
            />
            Show Mares
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              checked={showMoonSides}
              onChange={() => setShowMoonSides(!showMoonSides)}
            />
            Show Near/Far Sides
          </label>
        </div>
        <button onClick={AdditionalInformation}>Additional Information</button>
        <p>
          *All data-points featured on this web-page are proximate and not meant
          for scientific use.
        </p>
      </div>
      <MapView map={map} />

      <LandingSites map={map} mission={mission} show={showMoonData} />
      <Craters map={map} show={showMoonCraters} />
      <Mares map={map} show={showMoonMares} />
      <NearFarSide map={map} show={showMoonSides} />

      <MousePosition map={map} />
      <AltitudeP map={map} />
    </>
  );
}
