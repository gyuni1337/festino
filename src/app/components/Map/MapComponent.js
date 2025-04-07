"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { divIcon, Icon } from "leaflet";
import axiosInstance from "@/utils/axios";

import MarkerComponent from "@/components/Map/MarkerComponent";
export default function MapComponent() {

  const [markers, setMarkers] = useState([]);

  useEffect(() => {

    const getAllMarkers = async () => {
      const clubs = await axiosInstance.get("/clubs");
      const food = await axiosInstance.get("/food");
      const pubs = await axiosInstance.get("/pubs");

      const data = [...clubs.data, ...food.data, ...pubs.data];
      setMarkers(data);
    }

    getAllMarkers();

    
  }, []); 
  
  return (
    <MapContainer center={[56.043435668784134, 12.695556265645147]} zoom={15} className="absolute top-0 left-0 h-full z-0 w-full">
      <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png" />
        {/* how to make this marker have onclick */}
        <MarkerComponent key={"x"} title="Helsingborg C" type={"food"} position={[56.04434616837272, 12.694410151848887]} />
    
          
    </MapContainer>
    
  );
}
