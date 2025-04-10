import React from 'react'
import EventCard from './EventCard'

export default function EventsModal({ isOpen, onClose }) {
  // Additional events data
  const moreEvents = [
    {
      title: "Klubb 4",
      image: "/pulse.jpg",
      date: "April 5, 2024",
      location: "Stockholm"
    },
    {
      title: "Klubb 5",
      image: "/nova.jpg",
      date: "April 12, 2024",
      location: "Gothenburg"
    },
    {
      title: "Klubb 6",
      image: "/eclipse.jpg",
      date: "April 19, 2024",
      location: "Malmö"
    },
    {
      title: "Klubb 7",
      image: "/aurora.jpg",
      date: "April 26, 2024",
      location: "Stockholm"
    },
    {
      title: "Klubb 8",
      image: "/zenith.jpg",
      date: "May 3, 2024",
      location: "Gothenburg"
    },
    {
      title: "Klubb 9",
      image: "/vortex.jpg",
      date: "May 10, 2024",
      location: "Malmö"
    }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
      <div className="bg-[#141313] rounded-[37px] p-8 max-w-6xl w-full max-h-[90vh] overflow-y-auto relative border-4 border-[#443C68] shadow-[0_5px_9.2px_#635985]">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white text-3xl hover:text-[#635985] transition-colors duration-300"
        >
          ×
        </button>
        
        <h2 className="text-3xl font-normal text-transparent bg-clip-text bg-gradient-to-r from-white to-[#635985] mb-12">
          All Events
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {moreEvents.map((event, index) => (
            <div key={index} className="w-full flex justify-center">
              <EventCard title={event.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 