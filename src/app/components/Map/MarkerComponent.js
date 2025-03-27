import React from 'react'
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";


const createCustomIcon = (title) => {
  return L.divIcon({
    className: 'custom-icon',
    html: `<div style='display:flex; flex-direction: column; align-items: center; position: relative; text-align: center;'>
      <h1 style='color: white; font-size: 20px; font-weight: bold; margin-bottom: 5px;'>${title}</h1>
      <img src='/lightMarker.png' style='width: 50px; height: 50px;' />
    </div>`,
    iconSize : [50, 50],
    iconAnchor: [25, 25]
  });
}

export default function MarkerComponent({key, position, title, onClick }) {
  return (
    <Marker key={key} position={position} icon={createCustomIcon(title)} eventHandlers={{ click: onClick }}>
    </Marker>
  )
}
