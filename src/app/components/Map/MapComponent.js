"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useVenues } from "@/Context/VenueContext";
import MarkerComponent from "@/components/Map/MarkerComponent";
export default function MapComponent() {

const { clubs, foods, pubs, loading, error, showClubs, showPubs, showFoods } = useVenues();
  
  return (
    <MapContainer center={[56.043435668784134, 12.695556265645147]} minZoom={15} maxZoom={18} zoom={17} className="absolute top-0 left-0 h-full z-0 w-full">
      <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png" />

      {showClubs && clubs.map(club => (
          <MarkerComponent
            key={club._id}
            position={[club.coordinates[0], club.coordinates[1]]}
            title={club.name}
            venueData={{
              name: club.name,
              type: "Club",
              address: club.address,
              phone: club.phone,
              website: club.website,
              image: club.images || null,
            rating: club.rating,
            openingHours: club.openhours,
            tags: club.tags,
            desc: club.description,
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
              phone: pub.phone,
              openingHours: pub.openhours,
              website: pub.website,
            tags: pub.tags,
              image: pub.images || null,
            rating: pub.rating,
            desc: pub.description,
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
              openingHours: food.openhours,
              phone: food.phone,
              website: food.website,
              tags: food.tags,
              image: food.images || null,
            rating: food.rating,
            desc: food.description,
              imglink: food.images[0]
            }}
          />
        )}
          
    </MapContainer>
    
  );
}
