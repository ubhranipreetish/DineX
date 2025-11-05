"use client";
import { useEffect, useState } from "react";
import RestaurantCard from "@/components/RestaurantCard";
import FilterBar from "@/components/FilterBar";

export default function Home() {
  const [location, setLocation] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [restaurants, setRestaurants] = useState([
    { id: 1, name: "Café Mocha", cuisine: "Italian", rating: 4.5, image: "/images/cafe1.jpg" },
    { id: 2, name: "Tandoori Tales", cuisine: "Indian", rating: 4.2, image: "/images/cafe2.jpg" },
    { id: 3, name: "Sushi Zen", cuisine: "Japanese", rating: 4.7, image: "/images/cafe1.jpg" },
    { id: 4, name: "Bistro Delight", cuisine: "French", rating: 4.4, image: "/images/cafe2.jpg" },
    { id: 5, name: "Café Mocha", cuisine: "Italian", rating: 4.5, image: "/images/cafe1.jpg" },
    { id: 6, name: "Tandoori Tales", cuisine: "Indian", rating: 4.2, image: "/images/cafe2.jpg" },
    { id: 7, name: "Sushi Zen", cuisine: "Japanese", rating: 4.7, image: "/images/cafe1.jpg" },
    { id: 8, name: "Bistro Delight", cuisine: "French", rating: 4.4, image: "/images/cafe2.jpg" },
  ]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const res = await fetch(
              `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
            );
            const data = await res.json();
            setLocation(`${data.address.amenity}, ${data.address.city}` || "Your Area");
          } catch (error) {
            setLocation("Unknown Location");
          }
        },
        () => {
          setLocation("Location Access Denied");
        }
      );
    } else {
      setLocation("Location Unavailable");
    }
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(`Searching for "${searchQuery}" in "${location}"`);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 px-4 md:px-10 py-8">
      {/* Title */}
      <h1 className="text-3xl font-semibold text-center mb-8 text-gray-800">
        Find Your Perfect Dining Spot 🍽️
      </h1>

      {/* Search Bar */}
      <div className="max-w-5xl mx-auto bg-white border border-gray-200 shadow-md rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row gap-4 items-center justify-between">
        {/* 📍 Location Input */}
        <div className="flex items-center w-full sm:w-1/3 border border-gray-300 rounded-lg px-3 py-2 bg-gray-100">
          <span className="text-red-500 mr-2">📍</span>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter location"
            className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-500"
          />
        </div>

        {/* 🔎 Search Input */}
        <form
          onSubmit={handleSearch}
          className="flex items-center w-full sm:w-2/3 border border-gray-300 rounded-lg overflow-hidden"
        >
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for restaurant, cuisine or a dish"
            className="flex-1 px-3 py-2 bg-gray-100 text-gray-800 outline-none placeholder-gray-500"
          />
          <button
            type="submit"
            className="bg-red-500 text-white px-6 py-2 hover:bg-red-600 transition-all"
          >
            Search
          </button>
        </form>
      </div>

      {/* Sticky Filter Bar */}
      <div className="max-w-5xl mx-auto sticky top-0 z-20 mt-10 mb-8 bg-gray-50 py-2">
        <div>
          <FilterBar />
        </div>
      </div>

      {/* Restaurant Grid */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 sm:grid-cols-2 gap-8">
        {restaurants.map((res) => (
          <RestaurantCard key={res.id} restaurant={res} />
        ))}
      </div>
    </div>
  );
}
