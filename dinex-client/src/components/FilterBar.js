"use client";
import { useState } from "react";
import FilterModal from "./FilterModal";

export default function FilterBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState([]);

  const allFilters = [
    "Offers",
    "Pet Friendly",
    "Outdoor Seating",
    "Serves Alcohol",
    "Open Now",
  ];

  const toggleFilter = (filter) => {
    if (activeFilters.includes(filter)) {
      setActiveFilters(activeFilters.filter((f) => f !== filter));
    } else {
      setActiveFilters([...activeFilters, filter]);
    }
  };

  const removeFilter = (filter) => {
    setActiveFilters(activeFilters.filter((f) => f !== filter));
  };

  const clearFilters = () => setActiveFilters([]);

  return (
    <div className="sticky top-16 z-30 bg-[#121212] py-4 px-4 rounded-xl shadow border border-gray-700">
      <div className="flex flex-wrap gap-3 justify-center">
        {/* Filters button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 border border-gray-500 text-gray-200 px-4 py-2 rounded-full hover:bg-gray-800 transition"
        >
          <span>⚙️</span>
          <span>
            Filters
            {activeFilters.length > 0 && (
              <span className="ml-2 bg-red-500 text-white px-2 py-0.5 rounded-full text-xs">
                {activeFilters.length}
              </span>
            )}
          </span>
        </button>

        {/* Filter chips with ❌ */}
        {activeFilters.map((filter) => (
          <div
            key={filter}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-red-500 bg-red-600 text-white"
          >
            <span>{filter}</span>
            <button
              onClick={() => removeFilter(filter)}
              className="text-white hover:text-gray-300 transition text-sm"
            >
              ✕
            </button>
          </div>
        ))}

        {/* Default filter buttons */}
        {allFilters
          .filter((f) => !activeFilters.includes(f))
          .map((filter) => (
            <button
              key={filter}
              onClick={() => toggleFilter(filter)}
              className="px-4 py-2 rounded-full border border-gray-500 text-gray-200 hover:bg-gray-800 transition"
            >
              {filter}
            </button>
          ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <FilterModal
          onClose={() => setIsModalOpen(false)}
          activeFilters={activeFilters}
          setActiveFilters={setActiveFilters}
          clearFilters={clearFilters}
        />
      )}
    </div>
  );
}
