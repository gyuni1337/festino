"use client";

import React, { useState } from 'react'
import Navbar from '@/components/Navbar'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import ListModal from '@/components/ListModal';

const Map = dynamic(() => import("@/components/Map/MapComponent"), { ssr: false });

export default function Page() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="h-screen w-screen">
            <Navbar />
            <div className="relative w-full h-[calc(100vh-80px)]">
                <button 
                    onClick={() => {
                        setIsModalOpen(true);
                    }}
                    className="fixed top-20 right-4 z-50 bg-purple-600 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-purple-700"
                >
                    Visa Lista
                </button>

                <div className="w-full h-full">
                    <Map />
                </div>

                <ListModal 
                    isOpen={isModalOpen} 
                    onClose={() => setIsModalOpen(false)}
                />
            </div>
        </div>
    )
}
