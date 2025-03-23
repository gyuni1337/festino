"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { divIcon, Icon } from "leaflet";

import MarkerComponent from "@/components/Map/MarkerComponent";

// make marker the icon
const customIcon = new Icon({
  iconUrl: "/lightMarker.png",
  iconSize: [80, 80],
});

const createCustomIcon = (title) =>
  L.divIcon({
    className: "custom-marker",
    html: `<div style="text-align: center;">
              <h1 style="color: red; font-size: 16px; font-weight: bold; margin-bottom: 5px;">${title}</h1>
              <img 
           </div>`,
    iconSize: [30, 42], // Adjust size if necessary
    iconAnchor: [15, 42], // Align correctly
  });

export default function MapComponent() {
  return (
    <MapContainer center={[56.043435668784134, 12.695556265645147]} zoom={15} className="absolute top-0 left-0 h-full z-0 w-full">
      <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png" />
        {/* how to make this marker have onclick */}
        <MarkerComponent key={"x"} position={[56.04434616837272, 12.694410151848887]}   onClick={() => console.log("Marker clicked!")}  icon={customIcon}  />
    
          
    </MapContainer>
    
  );
}
