"use client";
import { useEffect, useState } from "react";
import RestaurantCard from "@/components/RestaurantCard";
import FilterBar from "@/components/FilterBar";
import SearchBar from "@/components/SearchBar";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
    const [restaurants, setRestaurants] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const restaurantsPerPage = 12;

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/restaurants`)
            .then((res) => res.json())
            .then((data) => setRestaurants(data))
            .catch((err) => console.error("Error:", err));
    }, []);

    const [filters, setFilters] = useState([]);
    const [search, setSearch] = useState("");
    const [location, setLocation] = useState("");

    useEffect(() => {
        const params = new URLSearchParams();

        // 🔎 SEARCH
        if (search.trim()) params.append("search", search);


        // 🎛 Feature Filters
        const featureFilters = filters
            .filter(f => ["Offers", "Pet Friendly", "Outdoor Seating", "Serves Alcohol", "Open Now"].includes(f));
        if (featureFilters.length > 0) {
            params.append("filters", featureFilters.join(","));
        }

        // 🍽 Cuisines filters
        const cuisines = filters.filter(f =>
            ["Italian", "North Indian", "Chinese", "Mexican", "Thai", "Japanese", "American"].includes(f)
        );
        if (cuisines.length > 0) {
            params.append("cuisines", cuisines.join(","));
        }

        // ⭐ Rating
        const rating = filters.find(f => f.startsWith("Rating: "));
        if (rating) params.append("rating", rating.replace("Rating: ", "").replace("+", ""));

        // 💰 Cost
        const cost = filters.find(f => f.startsWith("Cost: "));
        if (cost) params.append("cost", cost.replace("Cost: ", ""));

        // 🔽 Sort
        const sort = filters.find(f => f.startsWith("Sort: "));
        if (sort) params.append("sort", sort.replace("Sort: ", ""));

        // Fetch
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/restaurants?${params.toString()}`)
            .then(res => res.json())
            .then(data => setRestaurants(data));

    }, [filters, search]);


    // Calculate pagination
    const indexOfLastRestaurant = currentPage * restaurantsPerPage;
    const indexOfFirstRestaurant = indexOfLastRestaurant - restaurantsPerPage;
    const currentRestaurants = restaurants.slice(indexOfFirstRestaurant, indexOfLastRestaurant);
    const totalPages = Math.ceil(restaurants.length / restaurantsPerPage);


    // Change page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        const restaurantsSection = document.getElementById('restaurants-section');
        if (restaurantsSection) {
            restaurantsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <Navbar />
            {/* Hero Section */}
            <HeroSection />

            {/* Restaurants Section */}
            <div id="restaurants-section" className="min-h-screen bg-[#FFF8E7] text-gray-900 px-3 sm:px-4 md:px-10 py-6 sm:py-8">

                {/* Search Bar */}
                <div className="max-w-6xl mx-auto">
                    <SearchBar
                        searchQuery={search}
                        onSearchChange={setSearch}
                        location={location}
                        onLocationChange={setLocation}
                    />
                </div>

                {/* Sticky Filter Bar */}
                <div className="max-w-6xl mx-auto sticky top-0 z-20 bg-[#FFF8E7] pt-2">
                    <div>
                        <FilterBar onFiltersChange={(f) => setFilters(f)} />
                    </div>
                </div>

                {/* Results Count */}
                {/* <div className="max-w-6xl mx-auto mb-4">
        <p className="text-gray-600 text-sm">
          Showing {indexOfFirstRestaurant + 1}-{Math.min(indexOfLastRestaurant, restaurants.length)} of {restaurants.length} restaurants
        </p>
      </div> */}

                {/* Restaurant Grid */}
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
                    {currentRestaurants.map((res) => (
                        <RestaurantCard key={res.restaurantId} restaurant={res} />
                    ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="max-w-6xl mx-auto flex items-center justify-center gap-1 sm:gap-2 pb-8 sm:pb-12 px-2">
                        {/* Previous Button */}
                        <button
                            onClick={() => paginate(currentPage - 1)}
                            disabled={currentPage === 1}
                            className={`px-2 sm:px-4 py-2 rounded-lg font-medium transition-all duration-200 ${currentPage === 1
                                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                : 'bg-white text-gray-700 hover:bg-[#FFF8E7] hover:text-[#8B6F3E] border-2 border-gray-200 hover:border-[#C9A050]'
                                }`}    >
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        {/* Page Numbers */}
                        <div className="flex gap-1 sm:gap-2">
                            {[...Array(totalPages)].map((_, index) => {
                                const pageNumber = index + 1;

                                // Show first page, last page, current page, and pages around current
                                if (
                                    pageNumber === 1 ||
                                    pageNumber === totalPages ||
                                    (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                                ) {
                                    return (
                                        <button
                                            key={pageNumber}
                                            onClick={() => paginate(pageNumber)}
                                            className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg font-semibold transition-all duration-200 text-sm sm:text-base ${currentPage === pageNumber
                                                ? 'bg-[#C9A050] text-white shadow-md'
                                                : 'bg-white text-gray-700 hover:bg-[#FFF8E7] hover:text-[#8B6F3E] border-2 border-gray-200 hover:border-[#C9A050]'
                                                }`}    >
                                            {pageNumber}
                                        </button>
                                    );
                                } else if (
                                    pageNumber === currentPage - 2 ||
                                    pageNumber === currentPage + 2
                                ) {
                                    return <span key={pageNumber} className="px-1 sm:px-2 text-gray-400 text-sm">...</span>;
                                }
                                return null;
                            })}
                        </div>

                        {/* Next Button */}
                        <button
                            onClick={() => paginate(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className={`px-2 sm:px-4 py-2 rounded-lg font-medium transition-all duration-200 ${currentPage === totalPages
                                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                : 'bg-white text-gray-700 hover:bg-[#FFF8E7] hover:text-[#8B6F3E] border-2 border-gray-200 hover:border-[#C9A050]'
                                }`}    >
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                )}
            </div>

            <Footer />
        </>
    );
}
