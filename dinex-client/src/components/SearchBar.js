"use client";
import { useEffect } from "react";
import { Search, MapPin } from "lucide-react";

export default function SearchBar({ searchQuery, onSearchChange, location, onLocationChange }) {
    // Fetch current location on mount
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
                        // Set location to city or area name
                        const locationName = `${data.address.amenity}, ${data.address.city}` || "Your Area";
                        onLocationChange(locationName);
                    } catch (error) {
                        console.warn("Unable to fetch location name:", error.message);
                        onLocationChange("Current location");
                    }
                },
                (error) => {
                    // Handle different geolocation error codes
                    let errorMessage = "Location unavailable";
                    switch (error.code) {
                        case error.PERMISSION_DENIED:
                            errorMessage = "Enter your location";
                            break;
                        case error.POSITION_UNAVAILABLE:
                            errorMessage = "Location unavailable";
                            break;
                        case error.TIMEOUT:
                            errorMessage = "Location timeout";
                            break;
                        default:
                            errorMessage = "Enter your location";
                    }
                    onLocationChange(errorMessage);
                }
            );
        } else {
            onLocationChange("Enter your location");
        }
    }, [onLocationChange]);
    return (
        <div className="w-full bg-white rounded-2xl shadow-md border border-[#E4D7C5] p-4 sm:p-5 mb-4 sm:mb-6">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                {/* Location Input */}
                <div className="flex items-center border-2 border-[#C9A050] rounded-xl px-4 py-3 bg-[#FFF8E7] sm:w-1/3 hover:border-[#A68545] transition-colors">
                    <MapPin className="w-5 h-5 text-[#C9A050] mr-3 flex-shrink-0" />
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => onLocationChange(e.target.value)}
                        placeholder="Enter location"
                        className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-500 text-sm sm:text-base"
                    />
                </div>

                {/* Search Input */}
                <div className="relative flex items-center border-2 border-[#C9A050] rounded-xl bg-[#FFF8E7] sm:w-2/3 px-4 py-3 hover:border-[#A68545] transition-colors">
                    <Search className="w-5 h-5 text-[#C9A050] mr-3 flex-shrink-0" />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => onSearchChange(e.target.value)}
                        placeholder="Search for restaurant, cuisine or area..."
                        className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-500 text-sm sm:text-base"
                    />
                </div>
            </div>
        </div>
    );
}
