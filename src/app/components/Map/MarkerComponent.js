import React, {useState, useEffect} from 'react'
import { Marker, Popup } from "react-leaflet";
import L, { icon } from "leaflet";
import MarkerModal from './MarkerModal';

const createCustomIcon = (title, type, imglink) => {

  // TODO : add pub and club image/icon bc there is none in public folder
  const iconUrl = imglink != undefined && imglink != "" ? imglink : "/" + type.toLowerCase() + ".png";
  return L.divIcon({
    className: 'custom-icon',
    html: `<div style='display:flex; flex-direction: column; align-items: center; position: relative; text-align: center;'>
      <h1 style='color: white; font-size: 20px; text-wrap: nowrap; font-weight: bold; margin-bottom: 5px;'>${title}</h1>
      <img src='${iconUrl}' style='width: 50px; height: 50px;' />
    </div>`,
    iconSize : [50, 50],
    iconAnchor: [25, 25]
  });
}

export default function MarkerComponent({position, title, type, onClick, venueData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  function handleClick() {
    setIsModalOpen(true);
    if (onClick) onClick();
  }


  return (
    <>
      <Marker 
        position={position} 
        icon={createCustomIcon(title, venueData.type, venueData.imglink)} 
        eventHandlers={{ click: handleClick }}
      />

      {isModalOpen && (
        <MarkerModal
          isOpen={true}
          onClose={() => setIsModalOpen(false)} 
          venue={venueData || {
            name: title || "Venue Name",
            type: "Club",
            address: "Helsingborg C, Sweden",
            hours: "Mon-Fri: 10:00-22:00, Sat-Sun: 12:00-00:00",
            phone: "+46 123 456 789",
            website: "https://example.com",
            image: "/mc.png"
          }}
        />
      )}
    </>
  )
}
