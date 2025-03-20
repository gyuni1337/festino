"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

import MarkerComponent from "@/components/Map/MarkerComponent";

// make marker the icon
const customIcon = new Icon({
  iconUrl: "/marker.png",
  iconSize: [80, 80],
});


export default function MapComponent() {
  return (
    <MapContainer center={[56.043435668784134, 12.695556265645147]} zoom={15} className="absolute top-0 left-0 h-full z-0 w-full">
      <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png" />
        <MarkerComponent key={"x"} position={[56.04434616837272, 12.694410151848887]} icon={customIcon}  />
    </MapContainer>
  );
}
