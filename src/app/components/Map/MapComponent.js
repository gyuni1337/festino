"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { divIcon, Icon } from "leaflet";

import MarkerComponent from "@/components/Map/MarkerComponent";
export default function MapComponent() {

  const [markers, setMarkers] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);

  useEffect(() => {


    
  }, []); 
  
  return (
    <MapContainer center={[56.043435668784134, 12.695556265645147]} zoom={15} className="absolute top-0 left-0 h-full z-0 w-full">
      <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png" />
        {/* how to make this marker have onclick */}
        <MarkerComponent key={"x"} title="Helsingborg C" type={"food"} position={[56.04434616837272, 12.694410151848887]} />
    
          
    </MapContainer>
    
  );
}
