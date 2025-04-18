"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axiosInstance from "@/utils/axios";
import { useVenues } from "@/Context/VenueContext";

import MarkerComponent from "@/components/Map/MarkerComponent";
export default function MapComponent() {

const { clubs, foods, pubs, loading, error, showClubs, showPubs, showFoods } = useVenues();

  useEffect(() => {
   console.log(clubs); 
  })
  
  return (
    <MapContainer center={[56.043435668784134, 12.695556265645147]} zoom={17} className="absolute top-0 left-0 h-full z-0 w-full">
      <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png" />

        {/* {markers.map((marker, index) => (
          <MarkerComponent key={index} title={marker.name} type={marker.type} imglink={marker.images[0]} position={[marker.coordinates[0], marker.coordinates[1]]} /> 
        ))}
     */}

      {showClubs && clubs.map(club => (
          <MarkerComponent
            key={club._id}
            position={[club.coordinates[0], club.coordinates[1]]}
            title={club.name}
            venueData={{
              name: club.name,
              type: "Club",
              address: club.address,
              hours: club.openhours[0] + " | " + club.openhours[1] + "-" + club.openhours[2],
              phone: club.phone,
              website: club.website,
              image: club.images[0] || null,
              imglink: club.images[0]
            }}
          />
        ))}

        {showPubs && pubs.map(pub => 
          <MarkerComponent
            key={pub._id}
            position={[pub.coordinates[0], pub.coordinates[1]]}
            title={pub.name}
            venueData={{
              name: pub.name,
              type: "Pub",
              address: pub.address, 
              hours: pub.openhours[0] + " | " + pub.openhours[1] + "-" + pub.openhours[2],
              phone: pub.phone,
              website: pub.website,
              image: pub.images[0] || null,
              imglink: pub.images[0]

            }}
          />
        )}
        
        {showFoods && foods.map(food =>
          <MarkerComponent
            key={food._id}
            position={[food.coordinates[0], food.coordinates[1]]}
            title={food.name}
            venueData={{
              name: food.name,
              type: "Food",
              address: food.address,
              hours: food.openhours[0] + " | " + food.openhours[1] + "-" + food.openhours[2],
              phone: food.phone,
              website: food.website,
              image: food.images[0] || null,
              imglink: food.images[0]
            }}
          />
        )}
          
    </MapContainer>
    
  );
}
