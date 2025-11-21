"use client";
import { useState, useEffect } from "react";
import { X, Star, DollarSign, Utensils, TrendingUp } from "lucide-react";

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

  const cuisines = [
    "Italian",
    "North Indian",
    "Chinese",
    "Mexican",
    "Thai",
    "Japanese",
    "American",
  ];

  // Restore previous selections
  useEffect(() => {
    const restored = [];
    activeFilters.forEach((filter) => {
      if (filter.startsWith("Sort: ")) setSortBy(filter.replace("Sort: ", ""));
      if (filter.startsWith("Rating: ")) {
        const num = filter.match(/\d+/);
        if (num) setSelectedRating(num[0]);
      }
      if (filter.startsWith("Cost: ")) setCostRange(filter.replace("Cost: ", ""));
      if (cuisines.includes(filter)) restored.push(filter);
    });
    setSelectedCuisines(restored);
  }, []);

  const toggleCuisine = (c) => {
    if (selectedCuisines.includes(c)) {
      setSelectedCuisines(selectedCuisines.filter((x) => x !== c));
    } else {
      setSelectedCuisines([...selectedCuisines, c]);
    }
  };

  const applyFilters = () => {
    const cleaned = activeFilters.filter(
      (f) =>
        !f.startsWith("Sort: ") &&
        !f.startsWith("Rating: ") &&
        !f.startsWith("Cost: ") &&
        !cuisines.includes(f)
    );
  
    const updated = [
      ...selectedCuisines,
      sortBy !== "Popularity" ? `Sort: ${sortBy}` : null,
      selectedRating ? `Rating: ${selectedRating}+` : null,
      costRange ? `Cost: ${costRange}` : null,
    ].filter(Boolean);
  
    const finalFilters = [...cleaned, ...updated];
  
    setActiveFilters(finalFilters);
    onClose();
  };
  

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#5E4633] px-8 py-6 relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white/90 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <h2 className="text-3xl font-bold text-white">Filters</h2>
          <p className="text-white/70 text-sm mt-1">
            Customize your restaurant search
          </p>
        </div>

        {/* Content */}
        <div className="p-8 max-h-[70vh] overflow-y-auto bg-[#FFF8E7]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Sort By */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-5 h-5 text-[#C9A050]" />
                <h3 className="text-lg font-bold text-[#5E4633]">Sort By</h3>
              </div>

              {[
                "Popularity",
                "Rating: Low to High",
                "Rating: High to Low",
                "Cost: Low to High",
                "Cost: High to Low",
              ].map((option) => (
                <label
                  key={option}
                  className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-[#F7EFE3] cursor-pointer"
                >
                  <input
                    type="radio"
                    name="sort"
                    value={option}
                    checked={sortBy === option}
                    onChange={() => setSortBy(option)}
                    className="w-4 h-4 text-[#C9A050] accent-[#C9A050]"
                  />
                  <span
                    className={`text-sm ${
                      sortBy === option
                        ? "text-[#5E4633] font-semibold"
                        : "text-gray-700"
                    }`}
                  >
                    {option}
                  </span>
                </label>
              ))}
            </div>

            {/* Cuisines */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Utensils className="w-5 h-5 text-[#C9A050]" />
                <h3 className="text-lg font-bold text-[#5E4633]">Cuisines</h3>
              </div>

              {cuisines.map((cuisine) => (
                <label
                  key={cuisine}
                  className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-[#F7EFE3] cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedCuisines.includes(cuisine)}
                    onChange={() => toggleCuisine(cuisine)}
                    className="w-4 h-4 text-[#C9A050] accent-[#C9A050]"
                  />
                  <span
                    className={`text-sm ${
                      selectedCuisines.includes(cuisine)
                        ? "text-[#5E4633] font-semibold"
                        : "text-gray-700"
                    }`}
                  >
                    {cuisine}
                  </span>
                </label>
              ))}
            </div>

            {/* Rating */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-5 h-5 text-[#C9A050]" />
                <h3 className="text-lg font-bold text-[#5E4633]">Rating</h3>
              </div>

              {[4, 3, 2].map((rating) => (
                <label
                  key={rating}
                  className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-[#F7EFE3] cursor-pointer"
                >
                  <input
                    type="radio"
                    name="rating"
                    value={rating}
                    checked={selectedRating === String(rating)}
                    onChange={() => setSelectedRating(String(rating))}
                    className="w-4 h-4 text-[#C9A050] accent-[#C9A050]"
                  />
                  <span
                    className={`text-sm flex items-center gap-1 ${
                      selectedRating === String(rating)
                        ? "text-[#5E4633] font-semibold"
                        : "text-gray-700"
                    }`}
                  >
                    {rating}+{" "}
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  </span>
                </label>
              ))}
            </div>

            {/* Cost */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <DollarSign className="w-5 h-5 text-[#C9A050]" />
                <h3 className="text-lg font-bold text-[#5E4633]">Cost for Two</h3>
              </div>

              {[
                { label: "Budget Friendly", value: "Low", price: "Under ₹800" },
                { label: "Moderate", value: "Medium", price: "₹800 - ₹1600" },
                { label: "Premium", value: "High", price: "Above ₹1600" },
              ].map((range) => (
                <label
                  key={range.value}
                  className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-[#F7EFE3] cursor-pointer"
                >
                  <input
                    type="radio"
                    name="cost"
                    value={range.value}
                    checked={costRange === range.value}
                    onChange={() => setCostRange(range.value)}
                    className="w-4 h-4 text-[#C9A050] accent-[#C9A050]"
                  />
                  <div className="flex-1">
                    <span
                      className={`text-sm block ${
                        costRange === range.value
                          ? "text-[#5E4633] font-semibold"
                          : "text-gray-700"
                      }`}
                    >
                      {range.label}
                    </span>
                    <span className="text-xs text-gray-500">
                      {range.price}
                    </span>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-white px-8 py-5 flex items-center justify-between border-t border-[#E4D7C5]">
          <button
            onClick={() => {
              clearFilters();
              setSortBy("Popularity");
              setSelectedCuisines([]);
              setSelectedRating("");
              setCostRange("");
            }}
            className="px-6 py-2.5 border border-[#D7C7AD] text-[#5E4633] font-semibold 
            rounded-xl hover:bg-[#F7EFE3] transition-all"
          >
            Clear All
          </button>

          <button
            onClick={applyFilters}
            className="px-8 py-2.5 bg-[#C9A050] text-white font-bold rounded-xl 
            hover:bg-[#A68545] transition-all shadow-md hover:shadow-lg transform hover:scale-105"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
}
