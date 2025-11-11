"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Search } from "lucide-react";

export default function Navbar() {
  const [location, setLocation] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

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

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    console.log(`Searching for "${value}" in "${location}"`);
    // 👉 You can later call your API or filter logic here
  };

  return (
    <nav className="w-full bg-white shadow-sm border-b border-gray-100">
      {/* ✅ Main container (consistent with all pages) */}
      <div className="max-w-6xl mx-auto flex items-center justify-between px-2 py-4">
        
        {/* 🔴 Logo */}
        <Link href="/" className="text-2xl font-bold text-red-600 whitespace-nowrap">
          DineX
        </Link>

        {/* 🔍 Location + Search */}
        <div className="flex items-center gap-3 flex-1 mx-6">
          {/* 📍 Location */}
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-gray-50 w-1/3">
            <span className="text-red-500 mr-2">📍</span>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter location"
              className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-500"
            />
          </div>

          {/* 🍽️ Search */}
          <div className="relative flex items-center border border-gray-300 rounded-lg bg-gray-50 w-2/3 px-3 py-2">
            <Search className="w-4 h-4 text-gray-500 absolute left-4" /> {/* 👈 Search icon */}
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search for restaurant, cuisine or dish..."
              className="w-full pl-9 bg-transparent outline-none text-gray-800 placeholder-gray-500"
            />
          </div>
        </div>

        {/* 👤 Auth Links */}
        <div className="flex gap-5 text-sm font-medium">
          <Link href="/login" className="text-gray-600 hover:text-red-500">
            Login
          </Link>
          <Link href="/signup" className="text-gray-600 hover:text-red-500">
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
}
