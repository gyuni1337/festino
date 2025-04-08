"use client";
import React, { useState, useEffect } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { IoTimeOutline } from 'react-icons/io5';

export default function ListModal({ isOpen, onClose }) {
    const [activeTab, setActiveTab] = useState('clubs');
    const [favorites, setFavorites] = useState(() => {
        if (typeof window !== 'undefined') {
            const savedFavorites = localStorage.getItem('favorites');
            return savedFavorites ? JSON.parse(savedFavorites) : [];
        }
        return [];
    });

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    // Uppdaterad exempeldata med 6 platser per kategori
    const places = {
        clubs: [
            { 
                id: 1, 
                name: 'Trädgården', 
                address: 'Hammarby Slussväg 2',
                image: '/tradgarden.jpg',
                openHours: {
                    fre: '22:00 - 03:00',
                    lör: '22:00 - 03:00',
                }
            },
            { 
                id: 2, 
                name: 'Spy Bar', 
                address: 'Birger Jarlsgatan 20',
                image: '/spybar.jpg',
                openHours: {
                    fre: '23:00 - 03:00',
                    lör: '23:00 - 03:00',
                }
            },
            // Lägg till 4 klubbar till med samma struktur
            { 
                id: 3, 
                name: 'Club 3', 
                address: 'Address 3',
                image: '/club3.jpg',
                openHours: {
                    fre: '22:00 - 03:00',
                    lör: '22:00 - 03:00',
                }
            },
            { 
                id: 4, 
                name: 'Club 4', 
                address: 'Address 4',
                image: '/club4.jpg',
                openHours: {
                    fre: '22:00 - 03:00',
                    lör: '22:00 - 03:00',
                }
            },
            { 
                id: 5, 
                name: 'Club 5', 
                address: 'Address 5',
                image: '/club5.jpg',
                openHours: {
                    fre: '22:00 - 03:00',
                    lör: '22:00 - 03:00',
                }
            },
            { 
                id: 6, 
                name: 'Club 6', 
                address: 'Address 6',
                image: '/club6.jpg',
                openHours: {
                    fre: '22:00 - 03:00',
                    lör: '22:00 - 03:00',
                }
            },
        ],
        restaurants: [
            { id: 3, name: 'Riche', address: 'Birger Jarlsgatan 4' },
            { id: 4, name: 'Sturehof', address: 'Stureplan 2' },
        ],
        pubs: [
            { id: 5, name: 'Södra Teatern', address: 'Mosebacke Torg 1-3' },
            { id: 6, name: 'Retro', address: 'Sveavägen 120' },
        ]
    };

    const toggleFavorite = (item) => {
        setFavorites(prev => {
            const isFavorite = prev.find(fav => fav.id === item.id);
            if (isFavorite) {
                const newFavorites = prev.filter(fav => fav.id !== item.id);
                return newFavorites;
            } else {
                return [...prev, item];
            }
        });
    };

    if (!isOpen) return null;

  return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]">
            <div className="bg-black h-[70vh] w-[70%] rounded-lg p-4 border border-gray-800">
                {/* Header */}
                <div className="flex justify-between mb-3">
                    <h2 className="text-2xl font-bold text-white">Utforska Helsingborg</h2>
                    <button 
                        onClick={onClose}
                        className="text-xl text-white hover:text-gray-400"
                    >
                        ✕
                    </button>
                </div>

                {/* Tabs */}
                <div className="flex gap-3 mb-4">
                    <button 
                        onClick={() => setActiveTab('clubs')}
                        className={`px-4 py-2 rounded-lg text-base ${activeTab === 'clubs' ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-300'}`}
                    >
                        Klubbar
                    </button>
                    <button 
                        onClick={() => setActiveTab('restaurants')}
                        className={`px-4 py-2 rounded-lg text-base ${activeTab === 'restaurants' ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-300'}`}
                    >
                        Restauranger
                    </button>
                    <button 
                        onClick={() => setActiveTab('pubs')}
                        className={`px-4 py-2 rounded-lg text-base ${activeTab === 'pubs' ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-300'}`}
                    >
                        Pubar
                    </button>
                    <button 
                        onClick={() => setActiveTab('favorites')}
                        className={`px-4 py-2 rounded-lg text-base ${activeTab === 'favorites' ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-300'}`}
                    >
                        Favoriter
                    </button>
                </div>

                {/* Grid-layout för platser */}
                <div className="max-h-[calc(70vh-120px)] overflow-y-auto">
                    <div className="grid grid-cols-3 gap-3">
                        {activeTab === 'favorites' ? (
                            favorites.length === 0 ? (
                                <p className="text-gray-400 text-center py-8 col-span-3">Inga favoriter än</p>
                            ) : (
                                favorites.map(item => (
                                    <ListItem 
                                        key={item.id} 
                                        item={item} 
                                        isFavorite={true}
                                        onFavoriteToggle={() => toggleFavorite(item)}
                                    />
                                ))
                            )
                        ) : (
                            places[activeTab].map(item => (
                                <ListItem 
                                    key={item.id} 
                                    item={item} 
                                    isFavorite={favorites.some(fav => fav.id === item.id)}
                                    onFavoriteToggle={() => toggleFavorite(item)}
                                />
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

// Uppdaterad ListItem-komponent med mindre storlek
function ListItem({ item, isFavorite, onFavoriteToggle }) {
    return (
        <div className="bg-gray-900 rounded-lg overflow-hidden">
            {/* Bild */}
            <div className="w-full h-28 bg-gray-800">
                {item.image && (
                    <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover"
                    />
                )}
            </div>

            {/* Information */}
            <div className="p-2">
                <div className="flex justify-between items-start mb-1">
                    <div>
                        <h3 className="text-base font-bold text-white">{item.name}</h3>
                        <p className="text-xs text-gray-400">{item.address}</p>
                    </div>
                    <button 
                        onClick={onFavoriteToggle}
                        className="text-lg text-purple-500"
                    >
                        {isFavorite ? <AiFillHeart /> : <AiOutlineHeart />}
                    </button>
                </div>

                {/* Öppettider */}
                <div className="space-y-0.5">
                    <h4 className="text-xs text-white font-semibold flex items-center gap-1">
                        <IoTimeOutline /> Öppettider
                    </h4>
                    {item.openHours && Object.entries(item.openHours).map(([day, hours]) => (
                        <div key={day} className="flex gap-1 text-xs text-gray-400">
                            <span className="w-6 capitalize">{day}:</span>
                            <span>{hours}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
