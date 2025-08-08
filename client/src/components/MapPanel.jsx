import { useEffect, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix default marker icon paths (common issue in bundlers)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

function FitOrFly({ centers, selected }) {
  const map = useMap();

  const bounds = useMemo(() => {
    if (!centers?.length) return null;
    return L.latLngBounds(centers.map((c) => [c.lat, c.lng]));
  }, [centers]);

  useEffect(() => {
    if (!map) return;
    if (selected) {
      map.flyTo([selected.lat, selected.lng], 15, { duration: 0.6 });
    } else if (bounds) {
      map.fitBounds(bounds, { padding: [30, 30] });
    }
  }, [map, selected, bounds]);

  return null;
}

export default function MapPanel({ centers = [], selected = null }) {
  const initial = centers[0] ?? { lat: 23.777176, lng: 90.399452 }; // Dhaka fallback

  return (
    <MapContainer
      center={[initial.lat, initial.lng]}
      zoom={13}
      className="w-full h-[430px] rounded-lg border"
      scrollWheelZoom
    >
      {/* Free OSM tiles with attribution */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {centers.map((c) => (
        <Marker key={c.id} position={[c.lat, c.lng]}>
          <Popup>
            <div className="text-sm">
              <div className="font-medium">{c.name}</div>
              <div className="text-gray-600">{c.address}</div>
              <div className="text-xs text-gray-500">{c.hours}</div>
            </div>
          </Popup>
        </Marker>
      ))}

      <FitOrFly centers={centers} selected={selected} />
    </MapContainer>
  );
}
