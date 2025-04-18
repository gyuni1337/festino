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

  const value = {
    clubs,
    showClubs,
    setShowClubs,
    showFoods,
    setShowFoods,
    showPubs,
    setShowPubs,
    pubs,
    foods,
    loading,
    error,
    refreshData: async () => {
      setLoading(true);
      try {
        const [clubsResponse, pubsResponse, foodsResponse] = await Promise.all([
          axios.get('/clubs'),
          axios.get('/pubs'),
          axios.get('/foods')
        ]);
        
        setClubs(clubsResponse.data);
        setFoods(foodsResponse.data); 
        setPubs(pubsResponse.data);
        setError(null);
      } catch (err) {
        setError('Failed to refresh venue data');
      } finally {
        setLoading(false);
      }
    }
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