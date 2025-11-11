"use client";
import { useEffect, useState } from "react";
import RestaurantCard from "@/components/RestaurantCard";
import FilterBar from "@/components/FilterBar";

export default function Home() {
  const [restaurants, setRestaurants] = useState([
    {
      id: 1,
      name: "38 Barracks",
      cuisine: "North Indian, Biryani, Chinese",
      rating: 4.5,
      price: "₹2,000 for two",
      distance: "1.5 km",
      location: "Connaught Place, New Delhi",
      image: "/images/cafe1.png",
      offer: "Flat 25% OFF",
    },
    {
      id: 2,
      name: "48 Barracks",
      cuisine: "North Indian, Biryani, Chinese",
      rating: 4.5,
      price: "₹2,000 for two",
      distance: "1.5 km",
      location: "Connaught Place, New Delhi",
      image: "/images/cafe1.png",
      offer: "Flat 10% OFF",
    },
    {
      id: 3,
      name: "58 Barracks",
      cuisine: "North Indian, Biryani, Chinese",
      rating: 4.5,
      price: "₹2,000 for two",
      distance: "1.5 km",
      location: "Connaught Place, New Delhi",
      image: "/images/cafe1.png",
      offer: "Flat 40% OFF",
    },
    {
      id: 4,
      name: "68 Barracks",
      cuisine: "North Indian, Biryani, Chinese",
      rating: 4.5,
      price: "₹2,000 for two",
      distance: "1.5 km",
      location: "Connaught Place, New Delhi",
      image: "/images/cafe1.png",
      offer: "Flat 15% OFF",
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 px-4 md:px-10 py-8">
      {/* Title */}
      <h1 className="text-3xl font-semibold text-center mb-8 text-gray-800">
        Find Your Perfect Dining Spot 🍽️
      </h1>

      {/* Sticky Filter Bar */}
      <div className="max-w-6xl mx-auto sticky top-0 z-20 mt-10 mb-8 bg-gray-50 py-2">
        <div>
          <FilterBar />
        </div>
      </div>

      {/* <h1 className="text-3xl font-semibold text-center mb-8 text-gray-800">
        Restaurants Near You
      </h1> */}

      {/* Restaurant Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 sm:grid-cols-2 gap-8">
        {restaurants.map((res) => (
          <RestaurantCard key={res.id} restaurant={res} />
        ))}
      </div>
    </div>
  );
}
