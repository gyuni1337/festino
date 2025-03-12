import React from 'react'
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";


export default function MarkerComponent({key, position, icon, popup}) {
  return (
    <Marker key={key} position={position} icon={icon}>
      <Popup>
        {popup}
        </Popup>
    </Marker>
  )
}
