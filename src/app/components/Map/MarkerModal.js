import React from 'react';
import { IoClose } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { IoTimeOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { IoGlobeOutline } from "react-icons/io5";

export default function MarkerModal({ isOpen, onClose, venue }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[5000] flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-darkGray w-[500px] rounded-xl shadow-menuShadow text-white p-6 relative">
        {/* Close button */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-white hover:text-purple-300 transition-all"
        >
          <IoClose size={24} />
        </button>
        
        {/* Venue image */}
        <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
          <img 
            src={venue.image || "/venue-placeholder.jpg"} 
            alt={venue.name} 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Venue name and type */}
        <div className="flex gap-3 mb-4">
          <h2 className="text-2xl font-bold">{venue.name}</h2>
          <span className="inline-block bg-purple-800 px-3 py-1 rounded-full text-sm">
            {venue.type}
          </span>
        </div>
        
        {/* Venue details */}
        <div className="space-y-3">
          <div className="flex items-center">
            <IoLocationOutline size={20} className="text-purple-400 mr-3" />
            <p>{venue.address}</p>
          </div>
          
          <div className="flex items-center">
            <IoTimeOutline size={20} className="text-purple-400 mr-3" />
            <p>{venue.hours}</p>
          </div>
          
          {venue.phone && (
            <div className="flex items-center">
              <IoCallOutline size={20} className="text-purple-400 mr-3" />
              <p>{venue.phone}</p>
            </div>
          )}
          
          {venue.website && (
            <div className="flex items-center">
              <IoGlobeOutline size={20} className="text-purple-400 mr-3" />
              <a 
                href={venue.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-300 hover:underline"
              >
                Visit Website
              </a>
            </div>
          )}
        </div>
        
        {/* Action buttons */}
        <div className="mt-6 flex gap-4">
          <button className="bg-purple-700 hover:bg-purple-600 transition-all px-4 py-2 rounded-lg flex-1">
            Add to My List
          </button>
          <button className="border border-purple-700 hover:bg-purple-900 transition-all px-4 py-2 rounded-lg flex-1">
            Get Directions
          </button>
        </div>
      </div>
    </div>
  );
}