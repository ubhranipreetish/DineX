"use client";
import { useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import FilterModal from "./FilterModal";

export default function FilterBar({ onFiltersChange }) {
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
      onFiltersChange(activeFilters);
    } else {
      setActiveFilters([...activeFilters, filter]);
      onFiltersChange(activeFilters);
    }
  };

  const removeFilter = (filter) => {
    setActiveFilters(activeFilters.filter((f) => f !== filter));
    onFiltersChange(activeFilters);
  };

  const clearFilters = () => {
    setActiveFilters([])
    onFiltersChange(activeFilters);
  };

  return (
    <div className="sticky top-16 z-30 bg-white py-4 px-4 rounded-2xl shadow-md border border-[#E4D7C5]">
      <div className="flex flex-wrap gap-3 items-center">

        {/* Filters button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 bg-[#5E4633] text-white px-5 py-2.5 rounded-full 
          hover:bg-[#4A3727] transition-all shadow-md hover:shadow-lg font-semibold 
          transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#C9A050] focus:ring-offset-2"
        >
          <SlidersHorizontal className="w-4 h-4" />
          <span className="flex items-center">
            Filters
            {activeFilters.length > 0 && (
              <span className="ml-2 bg-[#EADCC5] text-[#5E4633] px-2 py-0.5 rounded-full text-xs font-bold">
                {activeFilters.length}
              </span>
            )}
          </span>
        </button>

        {/* Active chips */}
        {activeFilters.map((filter) => (
          <div
            key={filter}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#F7EFE3] 
            border border-[#C9A050] text-[#5E4633] font-medium shadow-sm"
          >
            <span className="text-sm">{filter}</span>
            <button
              onClick={() => removeFilter(filter)}
              className="text-[#A68545] hover:text-[#5E4633] transition-colors focus:outline-none"
              aria-label={`Remove ${filter}`}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}

        {/* Remaining quick filters */}
        {allFilters
          .filter((f) => !activeFilters.includes(f))
          .map((filter) => (
            <button
              key={filter}
              onClick={() => toggleFilter(filter)}
              className="px-4 py-2 rounded-full border border-[#D7C7AD] text-[#5E4633] 
              hover:bg-[#F7EFE3] hover:border-[#C9A050] transition-all font-medium"
            >
              {filter}
            </button>
          ))}

        {/* Clear All */}
        {activeFilters.length > 0 && (
          <button
            onClick={clearFilters}
            className="ml-auto px-4 py-2 text-sm text-[#5E4633] 
            hover:text-[#C9A050] font-semibold hover:bg-[#F7EFE3] rounded-full 
            transition-all focus:outline-none"
          >
            Clear All
          </button>
        )}
      </div>

      {isModalOpen && (
        <FilterModal
          onClose={() => setIsModalOpen(false)}
          activeFilters={activeFilters}
          setActiveFilters={(updated) => {
            setActiveFilters(updated);
            onFiltersChange(updated);
          }}
          clearFilters={() => {
            setActiveFilters([]);
            onFiltersChange([]);
          }}
        />
      )}
    </div>
  );
}
