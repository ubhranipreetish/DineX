"use client";
import { useState, useEffect } from "react";

export default function FilterModal({
  onClose,
  activeFilters,
  setActiveFilters,
  clearFilters,
}) {
  const [sortBy, setSortBy] = useState("Popularity");
  const [selectedCuisines, setSelectedCuisines] = useState([]);
  const [selectedRating, setSelectedRating] = useState("");
  const [costRange, setCostRange] = useState("");

  const cuisines = ["Italian", "Indian", "Chinese", "Mexican", "Thai"];

  // Restore previous filter states if user reopens modal
  useEffect(() => {
    activeFilters.forEach((filter) => {
      if (filter.startsWith("Sort: ")) setSortBy(filter.replace("Sort: ", ""));
      if (filter.startsWith("Rating: ")) setSelectedRating(filter.match(/\d+/)[0]);
      if (filter.startsWith("Cost: ")) setCostRange(filter.replace("Cost: ", ""));
      if (cuisines.includes(filter)) {
        setSelectedCuisines((prev) => [...prev, filter]);
      }
    });
  }, [activeFilters]);

  const toggleCuisine = (cuisine) => {
    if (selectedCuisines.includes(cuisine)) {
      setSelectedCuisines(selectedCuisines.filter((c) => c !== cuisine));
    } else {
      setSelectedCuisines([...selectedCuisines, cuisine]);
    }
  };

  const applyFilters = () => {
    const newFilters = [
      ...selectedCuisines,
      sortBy !== "Popularity" ? `Sort: ${sortBy}` : null,
      selectedRating ? `Rating: ${selectedRating}+` : null,
      costRange ? `Cost: ${costRange}` : null,
    ].filter(Boolean);

    setActiveFilters([...new Set([...activeFilters, ...newFilters])]);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-[#1E1E1E] text-gray-200 w-[90%] max-w-3xl rounded-2xl shadow-2xl p-6 relative border border-gray-700">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">
          Filters
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Sort By */}
          <div>
            <h3 className="text-red-400 font-medium mb-2">Sort By</h3>
            {["Popularity", "Rating: High to Low", "Cost: Low to High", "Cost: High to Low", "Distance"].map(
              (option) => (
                <label key={option} className="block mb-1 cursor-pointer">
                  <input
                    type="radio"
                    name="sort"
                    value={option}
                    checked={sortBy === option}
                    onChange={() => setSortBy(option)}
                    className="mr-2 accent-red-500"
                  />
                  {option}
                </label>
              )
            )}
          </div>

          {/* Cuisines */}
          <div>
            <h3 className="text-red-400 font-medium mb-2">Cuisines</h3>
            {cuisines.map((cuisine) => (
              <label key={cuisine} className="block mb-1 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedCuisines.includes(cuisine)}
                  onChange={() => toggleCuisine(cuisine)}
                  className="mr-2 accent-red-500"
                />
                {cuisine}
              </label>
            ))}
          </div>

          {/* Rating */}
          <div>
            <h3 className="text-red-400 font-medium mb-2">Rating</h3>
            {[4, 3, 2].map((rating) => (
              <label key={rating} className="block mb-1 cursor-pointer">
                <input
                  type="radio"
                  name="rating"
                  value={rating}
                  checked={selectedRating === String(rating)}
                  onChange={() => setSelectedRating(String(rating))}
                  className="mr-2 accent-red-500"
                />
                {rating}+ stars
              </label>
            ))}
          </div>

          {/* Cost */}
          <div>
            <h3 className="text-red-400 font-medium mb-2">Cost for Two</h3>
            {["Low", "Medium", "High"].map((range) => (
              <label key={range} className="block mb-1 cursor-pointer">
                <input
                  type="radio"
                  name="cost"
                  value={range}
                  checked={costRange === range}
                  onChange={() => setCostRange(range)}
                  className="mr-2 accent-red-500"
                />
                {range}
              </label>
            ))}
          </div>
        </div>

        {/* Bottom Buttons */}
        <div className="flex justify-between mt-6 border-t border-gray-700 pt-4">
          <button
            onClick={clearFilters}
            className="px-5 py-2 border border-gray-600 rounded-lg hover:bg-gray-800 transition"
          >
            Clear All
          </button>
          <button
            onClick={applyFilters}
            className="px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}
