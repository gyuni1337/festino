"use client"

import { useState } from "react"
import { Calendar, Coffee, Music, Search, Utensils, X } from "lucide-react"
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

// Restructured filter categories with main categories and tags
const filterCategories = [
  {
    id: "club",
    name: "Clubs",
    icon: <Music className="h-5 w-5" />,
    tags: [
      { id: "live-music", label: "Live Music" },
      { id: "dancing", label: "Dancing" },
      { id: "dj", label: "DJ Performances" },
      { id: "electronic", label: "Electronic" },
      { id: "jazz", label: "Jazz" },
      { id: "late-night", label: "Late Night" },
      { id: "cocktails", label: "Cocktails" },
    ],
  },
  {
    id: "pub",
    name: "Pubs",
    icon: <Coffee className="h-5 w-5" />,
    tags: [
      { id: "sports", label: "Sports Viewing" },
      { id: "beer", label: "Craft Beer" },
      { id: "games", label: "Games" },
      { id: "traditional", label: "Traditional" },
      { id: "live-sports", label: "Live Sports" },
      { id: "pub-food", label: "Pub Food" },
      { id: "outdoor-seating", label: "Outdoor Seating" },
    ],
  },
  {
    id: "food",
    name: "Food Places",
    icon: <Utensils className="h-5 w-5" />,
    tags: [
      { id: "fine-dining", label: "Fine Dining" },
      { id: "casual", label: "Casual" },
      { id: "takeaway", label: "Takeaway" },
      { id: "international", label: "International" },
      { id: "romantic", label: "Romantic" },
      { id: "family-friendly", label: "Family Friendly" },
      { id: "vegetarian", label: "Vegetarian Options" },
    ],
  },
]


export function DashboardModal({ open, onOpenChange }) {
  const [mainFilters, setMainFilters] = useState({})
  const [tagFilters, setTagFilters] = useState({})
  const [searchQuery, setSearchQuery] = useState("")

  const handleMainFilterChange = (id, checked) => {
    setMainFilters((prev) => ({
      ...prev,
      [id]: checked,
    }))
  }

  const handleTagFilterChange = (id, checked) => {
    setTagFilters((prev) => ({
      ...prev,
      [id]: checked,
    }))
  }

  const showUpcomingEvents = () => {
    // This would be implemented to show upcoming events
    console.log("Show upcoming events")
  }

  const filteredVenues = venues.filter((venue) => {
    // Search by name, description, or tags
    const matchesSearch =
      searchQuery === "" ||
      venue.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      venue.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      venue.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    // Check if any main filters are selected
    const mainFiltersSelected = Object.values(mainFilters).some((value) => value)

    // If main filters are selected, check if venue matches any selected main filter
    const matchesMainFilter = !mainFiltersSelected || mainFilters[venue.type]

    // Check if any tag filters are selected
    const tagFiltersSelected = Object.values(tagFilters).some((value) => value)

    // If tag filters are selected, check if venue has any of the selected tags
    const matchesTagFilter =
      !tagFiltersSelected ||
      venue.tags.some((tag) => {
        const tagId = tag.replace(/\s+/g, "-").toLowerCase()
        return tagFilters[tagId]
      })

    return matchesSearch && matchesMainFilter && matchesTagFilter
  })

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogOverlay className="bg-black/80" />
      <DialogContent className="max-w-6xl h-[90vh] p-0 gap-0 border-none bg-transparent">
        <div className="flex h-full rounded-lg overflow-hidden bg-darkGray text-text">
          {/* Sidebar */}
          <div className="w-72 border-r border-footerbg bg-darkGray hidden md:block">
            <div className="p-4 h-full flex flex-col">
              <h2 className="text-lg font-semibold mb-4 text-text">Filters</h2>
              <ScrollArea className="flex-1 pr-4">
                <div className="space-y-6">
                  {filterCategories.map((category) => (
                    <div key={category.id} className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="relative flex items-center">
                          <input
                            type="checkbox"
                            id={`main-${category.id}`}
                            checked={mainFilters[category.id] || false}
                            onChange={(e) => handleMainFilterChange(category.id, e.target.checked)}
                            className="peer h-5 w-5 appearance-none rounded border border-graytext bg-transparent checked:border-primary checked:bg-primary focus:outline-none focus:ring-2 focus:ring-primary/25"
                          />
                          <svg
                            className="pointer-events-none absolute left-0 top-0 h-5 w-5 opacity-0 peer-checked:opacity-100 text-darkGray"
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
                          htmlFor={`main-${category.id}`}
                          className="flex items-center text-base font-bold text-text cursor-pointer"
                        >
                          <span className="text-primary mr-2">{category.icon}</span>
                          {category.name}
                        </label>
                      </div>

                      <div className="ml-8 space-y-2 border-l-2 border-primary/20 pl-3">
                        {category.tags.map((tag) => (
                          <div key={tag.id} className="flex items-center space-x-2">
                            <div className="relative flex items-center">
                              <input
                                type="checkbox"
                                id={tag.id}
                                checked={tagFilters[tag.id] || false}
                                onChange={(e) => handleTagFilterChange(tag.id, e.target.checked)}
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
                              htmlFor={tag.id}
                              className="text-sm leading-none text-graytext peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                            >
                              {tag.label}
                            </label>
                          </div>
                        ))} </div> </div>))} </div>
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
            <div className="flex flex-col border-b border-footerbg">
              <div className="flex items-center justify-between p-4">
                <h1 className="text-xl font-bold text-text">Explore Venues</h1>
                <button
                  className="p-2 rounded-full hover:bg-footerbg transition-colors"
                  onClick={() => onOpenChange(false)}
                >
                  <X className="h-4 w-4 text-text" />
                  <span className="sr-only">Close</span>
                </button>
              </div>
              <div className="px-4 pb-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Search className="h-4 w-4 text-graytext" />
                  </div>
                  <input
                    type="text"
                    className="w-full py-2 pl-10 pr-4 bg-footerbg border border-footerbg focus:border-primary/50 rounded-md text-text placeholder:text-graytext focus:outline-none focus:ring-1 focus:ring-primary/30"
                    placeholder="Search venues, tags, or descriptions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <ScrollArea className="flex-1 p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredVenues.length > 0 ? (
                  filteredVenues.map((venue) => (
                    <div key={venue.id} className="rounded-lg border border-footerbg bg-footerbg overflow-hidden">
                      <div className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-medium text-text">{venue.name}</h3>
                          <div>
                            {venue.type === "club" && <Music className="h-4 w-4 text-primary" />}
                            {venue.type === "pub" && <Coffee className="h-4 w-4 text-primary" />}
                            {venue.type === "food" && <Utensils className="h-4 w-4 text-primary" />}
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
                  ))
                ) : (
                  <div className="col-span-1 md:col-span-2 lg:col-span-3 flex flex-col items-center justify-center py-12 text-center">
                    <div className="bg-footerbg rounded-full p-4 mb-4">
                      <Search className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-medium text-text mb-2">No venues found</h3>
                    <p className="text-graytext max-w-md">
                      We couldn't find any venues matching your search. Try adjusting your search terms or filters.
                    </p>
                  </div>
                )}
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

