"use client";

import React from 'react'
import Navbar from '@/components/Navbar'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";

const Map = dynamic(() => import("@/components/Map/MapComponent"), { ssr: false });


export default function Page() {

  return (
    <>
      <Navbar />
      <main className="w-screen h-screen">
        <Map />
      </main>

    </>
  )
}
