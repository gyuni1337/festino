"use client";

import React, { useState } from 'react'
import Navbar from '@/components/Navbar'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import ListModal from '@/components/ListModal';

const Map = dynamic(() => import("@/components/Map/MapComponent"), { ssr: false });
import MapMenu from '@/components/Map/MapMenu';

export default function Page() {

  return (
    <>
      <main className="relative w-full h-screen overflow-hidden">
      <Navbar shadow={"shadow-navShadow"} />
        <Map />
        <MapMenu/>
      </main>

    </>
  )
}
