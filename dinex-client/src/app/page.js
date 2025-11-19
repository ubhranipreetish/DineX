"use client";
import { useEffect, useState } from "react";
import RestaurantCard from "@/components/RestaurantCard";
import FilterBar from "@/components/FilterBar";

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

  // Calculate pagination
  const indexOfLastRestaurant = currentPage * restaurantsPerPage;
  const indexOfFirstRestaurant = indexOfLastRestaurant - restaurantsPerPage;
  const currentRestaurants = restaurants.slice(indexOfFirstRestaurant, indexOfLastRestaurant);
  const totalPages = Math.ceil(restaurants.length / restaurantsPerPage);

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 px-4 md:px-10 py-8">
      {/* Title */}
      <h1 className="text-3xl font-semibold text-center mb-8 text-gray-800">
        Find Your Perfect Dining Spot
      </h1>

      {/* Sticky Filter Bar */}
      <div className="max-w-6xl mx-auto sticky top-0 z-20 mt-10 mb-8 bg-gray-50 py-2">
        <div>
          <FilterBar />
        </div>
      </div>

      {/* Results Count */}
      {/* <div className="max-w-6xl mx-auto mb-4">
        <p className="text-gray-600 text-sm">
          Showing {indexOfFirstRestaurant + 1}-{Math.min(indexOfLastRestaurant, restaurants.length)} of {restaurants.length} restaurants
        </p>
      </div> */}

      {/* Restaurant Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 sm:grid-cols-2 gap-8 mb-12">
        {currentRestaurants.map((res) => (
          <RestaurantCard key={res.restaurantId} restaurant={res} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-2 pb-12">
          {/* Previous Button */}
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
              currentPage === 1
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-white text-gray-700 hover:bg-[#FFEEEF] hover:text-[#F43D4F] border-2 border-gray-200 hover:border-[#F43D4F]'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Page Numbers */}
          <div className="flex gap-2">
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
                    className={`w-10 h-10 rounded-lg font-semibold transition-all duration-200 ${
                      currentPage === pageNumber
                        ? 'bg-[#EF4F5F] text-white shadow-md'
                        : 'bg-white text-gray-700 hover:bg-[#FFEEEF] hover:text-[#F43D4F] border-2 border-gray-200 hover:border-[#F43D4F]'
                    }`}
                  >
                    {pageNumber}
                  </button>
                );
              } else if (
                pageNumber === currentPage - 2 ||
                pageNumber === currentPage + 2
              ) {
                return <span key={pageNumber} className="px-2 text-gray-400">...</span>;
              }
              return null;
            })}
          </div>

          {/* Next Button */}
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
              currentPage === totalPages
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-white text-gray-700 hover:bg-[#FFEEEF] hover:text-[#F43D4F] border-2 border-gray-200 hover:border-[#F43D4F]'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}