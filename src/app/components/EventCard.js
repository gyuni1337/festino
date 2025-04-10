import React from 'react'
import Image from 'next/image'

export default function EventCard({ title }) {
  // Event data
  const events = [
    {
      title: "Klubb 1",
      image: "/cardinal.jpg",
      date: "March 15, 2024",
      location: "Stockholm"
    },
    {
      title: "Klubb 2",
      image: "/heat.jpg",
      date: "March 22, 2024",
      location: "Gothenburg"
    },
    {
      title: "Klubb 3",
      image: "/sirocco.jpg",
      date: "March 29, 2024",
      location: "Malmö"
    }
  ];

  // Find the event that matches the title
  const event = events.find(e => e.title === title) || {
    title: title,
    image: "/event-placeholder.jpg",
    date: "Coming Soon",
    location: "TBA"
  };

  return (
    <div className='w-96 h-96 bg-[#141313] rounded-lg shadow-lg overflow-hidden flex flex-col border-2 border-[#443C68]'>
      <div className='relative w-full h-64'>
        <Image
          src={event.image}
          alt={event.title}
          fill
          className='object-cover'
        />
      </div>
      <div className='p-4 flex flex-col flex-grow'>
        <h2 className='text-2xl font-bold text-[#635985] mb-2'>{event.title}</h2>
        <p className='text-[#635985] mb-1'>{event.date}</p>
        <p className='text-[#635985]'>{event.location}</p>
      </div>
    </div>
  )
}
