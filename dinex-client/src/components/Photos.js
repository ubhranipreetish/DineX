"use client";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Photos({ restaurant }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  if (!restaurant?.images || restaurant.images.length === 0)
    return <p className="text-gray-600 mt-8">No photos available</p>;

  const openImage = (index) => setSelectedImageIndex(index);
  const closeModal = () => setSelectedImageIndex(null);
  const nextImage = () =>
    setSelectedImageIndex((prev) =>
      prev === restaurant.images.length - 1 ? 0 : prev + 1
    );
  const prevImage = () =>
    setSelectedImageIndex((prev) =>
      prev === 0 ? restaurant.images.length - 1 : prev - 1
    );

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">
        {restaurant.name} Photos
      </h2>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {restaurant.images.map((img, index) => (
          <div
            key={index}
            onClick={() => openImage(index)}
            className="relative cursor-pointer overflow-hidden rounded-xl group"
          >
            <img
              src={img}
              alt={`Photo ${index + 1}`}
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all" />
          </div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition z-50"
          >
            <X className="w-10 h-10" />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-6 text-white hover:text-gray-300 bg-black/50 p-3 rounded-full z-50"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <div className="max-w-6xl mx-auto w-full px-4 flex items-center justify-center">
            <img
              src={restaurant.images[selectedImageIndex]}
              alt={`Photo ${selectedImageIndex + 1}`}
              className="max-h-[80vh] w-auto rounded-xl object-contain shadow-2xl"
            />
          </div>

          <button
            onClick={nextImage}
            className="absolute right-6 text-white hover:text-gray-300 bg-black/50 p-3 rounded-full z-50"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-8 text-white text-sm">
            {selectedImageIndex + 1} / {restaurant.images.length}
          </div>
        </div>
      )}
    </div>
  );
}
