"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Star, StarHalf, Music, Beer, Utensils } from "lucide-react"

export default function MarkerModal({ venue, onClose, isOpen = false }) {

  // Function to render rating stars
  const renderRating = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.5

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="fill-yellow-400 text-yellow-400" />)
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="fill-yellow-400 text-yellow-400" />)
    }

    const emptyStars = 5 - stars.length
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-star-${i}`} className="text-[#ABABAB]" />)
    }

    return stars
  }

  // Get venue type icon and color
  const getVenueTypeInfo = (type) => {
    switch (type) {
      case "club":
        return {
          icon: <Music className="h-5 w-5 text-[#A491FF]" />,
          color: "bg-[#A491FF]",
        }
      case "pub":
        return {
          icon: <Beer className="h-5 w-5 text-[#A491FF]" />,
          color: "bg-[#A491FF]",
        }
      case "restaurant":
        return {
          icon: <Utensils className="h-5 w-5 text-[#A491FF]" />,
          color: "bg-[#A491FF]",
        }
      default:
        return {
          icon: <Utensils className="h-5 w-5 text-[#A491FF]" />,
          color: "bg-[#A491FF]",
        }
    }
  }

  const venueTypeInfo = getVenueTypeInfo(venue.type)

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[500] flex items-center justify-center bg-black/50"
      onClick={() => {
        if (onClose) onClose()
      }}
    >
      <div
        className="relative w-full max-w-[550px] rounded-lg border border-[#A491FF] bg-[#141313] p-6 text-white shadow-[0px_0px_15px_#A491FF]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center gap-4 pb-4">
          <div className="relative h-16 w-16 overflow-hidden rounded-md border border-[#A491FF]/30">
            <img
              src={venue.imglink || "/heat.jpg"}
              alt={`${venue.name} logo`}
              fill="true"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold text-white">{venue.name}</h2>
            <div className="flex items-center gap-2 pt-1">
              <span className={`rounded-full px-2 py-0.5 text-xs capitalize text-white ${venueTypeInfo.color}`}>
                {venue.type}
              </span>
              <div className="flex items-center gap-0.5">
                <div className="flex">{renderRating(venue.rating)}</div>
                <span className="ml-1 text-sm text-[#ABABAB]">{venue.rating.toFixed(1)}</span>
              </div>
            </div>
          </div>
          <div className="ml-auto">{venueTypeInfo.icon}</div>

          {/* Close button */}
          <button
            className="absolute right-4 top-4 rounded-full p-1 text-[#ABABAB] hover:bg-[#161616] hover:text-white"
            onClick={() => {
              if (onClose) onClose()
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Images */}
<div className="grid grid-cols-2 gap-3 py-2">
  {(Array.isArray(venue.image) ? venue.image : []).map((image, index) => (
    <div
      key={index}
      className="relative aspect-video overflow-hidden rounded-md border border-[#A491FF]/30"
    >

      <img
        src={image || `/food.png`}
        alt={`${venue.name || 'Venue'} showcase ${index + 1}`}
        fill="true"
        className="object-cover transition-transform hover:scale-105"
      />
    </div>
  ))}
</div>

        {/* Content */}
        <div className="space-y-3 pt-2">
          <p className="text-sm text-[#ABABAB]">{venue.desc}</p>

          <div className="flex flex-wrap gap-2">
            {venue.tags &&
              venue.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#A491FF]/30 bg-[#161616] px-3 py-1 text-xs text-[#ABABAB]"
                >
                  {tag}
                </span>
              ))}

            {!venue.tags && venue.type === "club" && (
              <>
                <span className="rounded-full border border-[#A491FF]/30 bg-[#161616] px-3 py-1 text-xs text-[#ABABAB]">
                  live music
                </span>
                <span className="rounded-full border border-[#A491FF]/30 bg-[#161616] px-3 py-1 text-xs text-[#ABABAB]">
                  cocktails
                </span>
              </>
            )}
            {!venue.tags && venue.type === "pub" && (
              <>
                <span className="rounded-full border border-[#A491FF]/30 bg-[#161616] px-3 py-1 text-xs text-[#ABABAB]">
                  beer
                </span>
                <span className="rounded-full border border-[#A491FF]/30 bg-[#161616] px-3 py-1 text-xs text-[#ABABAB]">
                  traditional
                </span>
              </>
            )}
            {!venue.tags && venue.type === "restaurant" && (
              <>
                <span className="rounded-full border border-[#A491FF]/30 bg-[#161616] px-3 py-1 text-xs text-[#ABABAB]">
                  fine dining
                </span>
                <span className="rounded-full border border-[#A491FF]/30 bg-[#161616] px-3 py-1 text-xs text-[#ABABAB]">
                  wine
                </span>
              </>
            )}
          </div>

          {venue.address && (
            <div className="text-sm">
              <span className="font-medium text-[#E5E5E5]">Address:</span>{" "}
              <span className="text-[#ABABAB]">{venue.address}</span>
            </div>
          )}

          {venue.openingHours && (
            <div className="text-sm">
              <span className="font-medium text-[#E5E5E5]">Hours:</span>{" "}
              <span className="text-[#ABABAB]">{venue.openingHours[0] + " " + venue.openingHours[1] + "-" + venue.openingHours[2] }</span>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-6 flex justify-end space-x-2">
          <button
            className="rounded-md bg-[#161616] px-4 py-2 text-sm text-white hover:bg-[#1c1c1c]"
            onClick={() => {
              if (onClose) onClose()
            }}
          >
            Close
          </button>
          <button className="rounded-md bg-[#A491FF] px-4 py-2 text-sm text-white hover:bg-[#A491FF]/90">
            Visit Website
          </button>
        </div>
      </div>
    </div>
  )
}


