import { MapContainer, ImageOverlay, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerData from "../assets/marker.json";

function Location() {
  const center = [52.0755, 5.06];
  const delta = 0.005; // square area
  const bounds = [
    [center[0] - delta, center[1] - delta],
    [center[0] + delta, center[1] + delta],
  ];

  
  const createIcon = (img) =>
    L.icon({
      iconUrl: `/imges/${img}`,
      iconSize: [40, 40], 
      iconAnchor: [20, 20],
      popupAnchor: [0, -40],
      className: "",
    });

  return (
    <MapContainer
      center={center}
      zoom={17}
      minZoom={17}
      maxZoom={22}
      className="h-150 w-full mx-auto"
      style={{ background: "#14532d" }} // Tailwind's bg-green-700 hex
      maxBounds={bounds}
      maxBoundsViscosity={1.0}
    >
      <ImageOverlay url="/imges/kaart.svg" bounds={bounds} />
      {markerData.map((marker, idx) => (
        <Marker
          key={idx}
          position={marker.position}
          icon={createIcon(marker.img)}
        >
          <Popup>{marker.label}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default Location;