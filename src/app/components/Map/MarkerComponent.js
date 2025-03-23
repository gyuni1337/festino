import React from 'react'
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";


const createCustomIcon = (title) =>
  L.divIcon({
    html: `<div style="display: flex; flex-direction: column; align-items: center; background: none;">
              <h1 style="color: red; font-size: 16px; background: none; font-weight: bold; margin-bottom: 5px;">${title}</h1>
              <img src="/lightMarker.png" />
           </div>`,
    iconSize: [30, 42], // Adjust size if necessary
    iconAnchor: [15, 42], // Align correctly
  });

export default function MarkerComponent({key, position, iconImage, onClick }) {
  return (
    <div className='flex flex-col items-center'>
       <h1>title of the thing</h1> 
    <Marker key={key} position={position} icon={createCustomIcon("asd")} eventHandlers={{ click: onClick }}>
    </Marker>
    </div>
  )
}
