"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

import MarkerComponent from "@/components/Map/MarkerComponent";

// make marker the icon
const customIcon = new Icon({
  iconUrl: "/marker.png",
  iconSize: [100, 100],
});

const restaurants = [
  { id: 1, lat: 40.7128, lng: -74.006, name: "Joe's Pizza" },
  { id: 2, lat: 34.0522, lng: -118.2437, name: "Sushi Spot" },
];

export default function MapComponent() {
  return (
    <MapContainer center={[56.043435668784134, 12.695556265645147]} zoom={15} className="h-full w-full">
      <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png" />
        <MarkerComponent key={"x"} position={[56.04434616837272, 12.694410151848887]} icon={customIcon}  />
    </MapContainer>
  );
}
