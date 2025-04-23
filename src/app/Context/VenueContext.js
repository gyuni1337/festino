"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from '@/utils/axios';

const VenueContext = createContext();

export function VenueProvider({ children }) {
  const [clubs, setClubs] = useState([]);
  const [foods, setFoods] = useState([]);
  const [pubs, setPubs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [showFoods, setShowFoods] = useState(false);
  const [showClubs, setShowClubs] = useState(true);
  const [showPubs, setShowPubs] = useState(true);
  const [searchQuery, setSearchQuery ] = useState("");

  useEffect(() => {
    const fetchVenues = async () => {
      try {
        setLoading(true);
        
        const [clubsResponse, pubsResponse, foodsResponse] = await Promise.all([
          axios.get('/clubs'),
          axios.get('/pubs'),
          axios.get('/food')
        ]);
        
        setClubs(clubsResponse.data);
        setFoods(foodsResponse.data);
        setPubs(pubsResponse.data);
        setError(null);
      } catch (err) {
        console.error('Error fetching venue data:', err);
        setError('Failed to load venue data');
      } finally {
        setLoading(false);
      }
    };

    fetchVenues();
  }, []);

const filteredClubs = clubs.filter((club) =>
  club.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
  club.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
  club.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
);

const filteredPubs = pubs.filter((pub) =>
  pub.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
  pub.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
  pub.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
);

const filteredFoods = foods.filter((food) =>
  food.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
  food.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
  food.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
);

  function resetSearch() {
    setSearchQuery("");
  }

  const value = {
    clubs: filteredClubs,
    showClubs,
    setShowClubs,
    showFoods,
    setShowFoods,
    showPubs,
    setShowPubs,
    searchQuery,
    setSearchQuery,
    pubs: filteredPubs,
    foods: filteredFoods,
    loading,
    resetSearch,
    error,
  };

  return (
    <VenueContext.Provider value={value}>
      {children}
    </VenueContext.Provider>
  );
}

// Custom hook to use the venue context
export function useVenues() {
  const context = useContext(VenueContext);
  if (context === undefined) {
    throw new Error('no venueprovider');
  }
  return context;
}
