"use client"

import { useState } from "react"
import { Calendar, Coffee, Music, X } from "lucide-react"
import { Dialog, DialogContent, DialogOverlay } from "@/components/Map/Dashboard/Dialog"
import { ScrollArea } from "@/components/Map/Dashboard/ScrollArea"

// Sample data for venues
const venues = [
  {
    id: 1,
    name: "The Jazz Club",
    description: "Live jazz music every night with great cocktails",
    type: "club",
    tags: ["live music", "cocktails", "jazz"],
    rating: 4.5,
  },
  {
    id: 2,
    name: "The Local Pub",
    description: "Traditional pub with a great selection of beers",
    type: "pub",
    tags: ["beer", "traditional", "sports"],
    rating: 4.2,
  },
  {
    id: 3,
    name: "Gourmet Bistro",
    description: "Fine dining with a seasonal menu",
    type: "food",
    tags: ["fine dining", "wine", "romantic"],
    rating: 4.8,
  },
  {
    id: 4,
    name: "Techno Warehouse",
    description: "Electronic music venue with international DJs",
    type: "club",
    tags: ["electronic", "dancing", "late night"],
    rating: 4.3,
  },
  {
    id: 5,
    name: "Street Food Market",
    description: "Various food stalls with international cuisine",
    type: "food",
    tags: ["casual", "international", "takeaway"],
    rating: 4.1,
  },
  {
    id: 6,
    name: "Sports Bar",
    description: "Watch all major sports events with great atmosphere",
    type: "pub",
    tags: ["sports", "beer", "burgers"],
    rating: 4.0,
  },
]

// Filter categories
const filterCategories = [
  {
    name: "Venue Type",
    options: [
      { id: "club", label: "Clubs" },
      { id: "pub", label: "Pubs" },
      { id: "food", label: "Food Places" },
    ],
  },
  {
    name: "Features",
    options: [
      { id: "live-music", label: "Live Music" },
      { id: "dancing", label: "Dancing" },
      { id: "outdoor", label: "Outdoor Seating" },
      { id: "sports", label: "Sports Viewing" },
    ],
  },
  {
    name: "Price Range",
    options: [
      { id: "budget", label: "Budget-friendly" },
      { id: "mid-range", label: "Mid-range" },
      { id: "high-end", label: "High-end" },
    ],
  },
]


export function DashboardModal({ open, onOpenChange }) {
  const [filters, setFilters] = useState({})

  const handleFilterChange = (id, checked) => {
    setFilters((prev) => ({
      ...prev,
      [id]: checked,
    }))
  }

  const showUpcomingEvents = () => {
    // This would be implemented to show upcoming events
    console.log("Show upcoming events")
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogOverlay className="bg-black/80" />
      <DialogContent className="max-w-6xl h-[90vh] p-0 gap-0 border-none bg-transparent">
        <div className="flex h-full rounded-lg overflow-hidden bg-darkGray text-text">
          {/* Sidebar */}
          <div className="w-64 border-r border-footerbg bg-darkGray hidden md:block">
            <div className="p-4 h-full flex flex-col">
              <h2 className="text-lg font-semibold mb-4 text-text">Filters</h2>
              <ScrollArea className="flex-1 pr-4">
                {filterCategories.map((category) => (
                  <div key={category.name} className="mb-6">
                    <h3 className="text-sm font-medium mb-3 text-text">{category.name}</h3>
                    <div className="space-y-3">
                      {category.options.map((option) => (
                        <div key={option.id} className="flex items-center space-x-2">
                          <div className="relative flex items-center">
                            <input
                              type="checkbox"
                              id={option.id}
                              checked={filters[option.id] || false}
                              onChange={(e) => handleFilterChange(option.id, e.target.checked)}
                              className="peer h-4 w-4 appearance-none rounded border border-graytext bg-transparent checked:border-primary checked:bg-primary focus:outline-none focus:ring-2 focus:ring-primary/25"
                            />
                            <svg
                              className="pointer-events-none absolute left-0 top-0 h-4 w-4 opacity-0 peer-checked:opacity-100 text-darkGray"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="4"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </div>
                          <label
                            htmlFor={option.id}
                            className="text-sm leading-none text-graytext peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </ScrollArea>
              <div className="h-px w-full bg-footerbg my-4" />
              <button
                className="w-full py-2 px-4 rounded bg-footerbg hover:bg-footerbg/80 text-text border border-primary/30 flex items-center justify-center transition-colors"
                onClick={showUpcomingEvents}
              >
                <Calendar className="mr-2 h-4 w-4 text-primary" />
                Show Upcoming Events
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b border-footerbg">
              <h1 className="text-xl font-bold text-text">Explore Venues</h1>
              <button
                className="p-2 rounded-full hover:bg-footerbg transition-colors"
                onClick={() => onOpenChange(false)}
              >
                <X className="h-4 w-4 text-text" />
                <span className="sr-only">Close</span>
              </button>
            </div>

            <ScrollArea className="flex-1 p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {venues.map((venue) => (
                  <div key={venue.id} className="rounded-lg border border-footerbg bg-footerbg overflow-hidden">
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-medium text-text">{venue.name}</h3>
                        <div>
                          {venue.type === "club" && <Music className="h-4 w-4 text-primary" />}
                          {venue.type === "pub" && <Coffee className="h-4 w-4 text-primary" />}
                          {venue.type === "food" && <Coffee className="h-4 w-4 text-primary" />}
                        </div>
                      </div>
                      <p className="text-sm text-graytext mb-3">{venue.description}</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {venue.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-darkGray text-graytext border border-primary/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="text-sm text-graytext flex items-center">
                        <span className="text-primary mr-1">★</span>
                        {venue.rating}/5
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Mobile Footer with Events Button */}
            <div className="md:hidden p-4 border-t border-footerbg">
              <button
                className="w-full py-2 px-4 rounded bg-primary hover:bg-primary/90 text-darkGray font-medium flex items-center justify-center transition-colors"
                onClick={showUpcomingEvents}
              >
                <Calendar className="mr-2 h-4 w-4" />
                Show Upcoming Events
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
