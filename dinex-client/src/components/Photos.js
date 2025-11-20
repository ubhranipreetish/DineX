"use client";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Photos({ restaurant }) {
  const allImages = [
    "/images/ambience/amb13.png",
    "/images/ambience/amb6.png",
    "/images/ambience/amb8.png",
    "/images/ambience/amb9.png",
    "/images/ambience/amb4.png",
    "/images/food/food7.png",
    "/images/ambience/amb12.png",
    "/images/food/food15.png",
    "/images/ambience/amb3.png",
    "/images/food/food1.png",
    "/images/ambience/amb9.png",
    "/images/food/food19.png",
    "/images/ambience/amb6.png",
    "/images/food/food11.png",
    "/images/ambience/amb1.png",
    "/images/food/food3.png",
    "/images/ambience/amb15.png",
    "/images/food/food9.png",
    "/images/ambience/amb4.png",
    "/images/food/food13.png",
    "/images/ambience/amb10.png",
    "/images/food/food2.png",
    "/images/ambience/amb7.png",
    "/images/food/food17.png",
    "/images/ambience/amb14.png",
    "/images/food/food5.png",
    "/images/ambience/amb2.png",
    "/images/food/food8.png",
    "/images/ambience/amb11.png",
    "/images/food/food18.png",
    "/images/ambience/amb5.png",
    "/images/food/food6.png",
    "/images/ambience/amb13.png",
    "/images/food/food10.png",
    "/images/ambience/amb8.png",
    "/images/food/food12.png",
    "/images/ambience/amb16.png",
    "/images/food/food4.png",
    "/images/food/food14.png",
    "/images/food/food16.png",
    "/images/food/food20.png"
  ]

  let ambienceImages = Array.from({ length: 16 }).map((_, i) => (
    `/images/ambience/amb${i+1}.png`
  ));

  ambienceImages = [...["/images/ambience/amb13.png",
    "/images/ambience/amb6.png",
    "/images/ambience/amb8.png",
    "/images/ambience/amb9.png",
    "/images/ambience/amb4.png"], ...ambienceImages]

  const foodImages = Array.from({ length: 20 }).map((_, i) => (
    `/images/food/food${i+1}.png`
  ));
  
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { id: "all", label: "All", count: allImages.length },
    { id: "ambience", label: "Ambience", count: ambienceImages.length },
    { id: "food", label: "Food", count: foodImages.length },
  ];

  const getImages = () => {
    switch (activeTab) {
      case "ambience":
        return ambienceImages;
      case "food":
        return foodImages;
      default:
        return allImages;
    }
  };

  const images = getImages();

  const openImage = (index) => setSelectedImageIndex(index);
  const closeModal = () => setSelectedImageIndex(null);
  const nextImage = () =>
    setSelectedImageIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  const prevImage = () =>
    setSelectedImageIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">
        {restaurant.name} Photos
      </h2>

      {/* Tabs */}
      <div className="flex gap-3 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all border
              ${
                activeTab === tab.id
                  ? "bg-[#EF4F5F] text-white border-gray-300"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }
            `}
          >
            {tab.label} ({tab.count})
          </button>
        ))}
      </div>


      {/* Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img, index) => (
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
            <X className="w-10 h-10 cursor-pointer" />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-6 text-white hover:text-gray-300 bg-black/50 p-3 rounded-full z-50"
          >
            <ChevronLeft className="w-8 h-8 cursor-pointer" />
          </button>

          <div className="max-w-6xl mx-auto w-full px-4 flex items-center justify-center">
            <img
              src={images[selectedImageIndex]}
              alt={`Photo ${selectedImageIndex + 1}`}
              className="max-h-[80vh] w-auto rounded-xl object-contain shadow-2xl"
            />
          </div>

          <button
            onClick={nextImage}
            className="absolute right-6 text-white hover:text-gray-300 bg-black/50 p-3 rounded-full z-50"
          >
            <ChevronRight className="w-8 h-8 cursor-pointer" />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-8 text-white text-sm">
            {selectedImageIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </div>
  );
}
