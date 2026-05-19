"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
// @ts-ignore: CSS import without type declarations
import "leaflet/dist/leaflet.css";

// Blue marker
const sinesIcon = L.icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// SINES NUST, Sector H-12, Islamabad
const sinesLocation: [number, number] = [33.6461, 72.9892];

const LeafletMap = () => {
  return (
    <div style={{ position: "relative", height: "100%", width: "100%" }}>
      {/* Blue tint overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(37, 99, 235, 0.35)",
          mixBlendMode: "multiply",
          zIndex: 400,
          pointerEvents: "none",
        }}
      />

      <MapContainer
        center={sinesLocation}
        zoom={16}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={sinesLocation} icon={sinesIcon}>
          <Popup>
            <strong>SINES NUST</strong>
            <br />
            Sector H-12, Islamabad, Pakistan
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LeafletMap;