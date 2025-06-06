import { MapContainer, ImageOverlay, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerData from "../assets/marker.json";

function Location({lang = "nl"}) {
  const center = [52.0755, 5.06];
  const delta = 0.005; // square area
  const bounds = [
    [center[0] - delta, center[1] - delta],
    [center[0] + delta, center[1] + delta],
  ];

  const createIcon = (img, size) => {
    let iconSize = [25, 25];
    if (size === "big") iconSize = [40, 40];
    else if (size === "medium") iconSize = [30, 30];
    else if (size === "entrance") iconSize = [80, 80];
    // "small" or default stays [40, 40]

    return L.icon({
      iconUrl: `/dist/imges/${img}`,
      iconSize,
      iconAnchor: [iconSize[0] / 2, iconSize[1] / 2],
      popupAnchor: [0, -iconSize[1] / 2],
      className: "",
    });
  };

  return (
    <div className="h-screen">
      <MapContainer
        center={center}
        zoom={17}
        minZoom={17}
        maxZoom={22}
        className="h-full w-full mx-auto"
        style={{ background: "#14532d" }} 
        maxBounds={bounds}
        maxBoundsViscosity={1.0}
      >
        <ImageOverlay url="/dist/imges/kaart.svg" bounds={bounds} />
        {markerData.map((marker, idx) => (
          <Marker
            key={idx}
            position={marker.position}
            icon={createIcon(marker.img, marker.size)}
          >
            <Popup>{marker.label[lang]}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Location;
