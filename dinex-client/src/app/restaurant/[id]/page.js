"use client";
import { useParams } from "next/navigation";
import { use, useEffect, useState } from "react";
import { Camera, X, ChevronLeft, ChevronRight, ThumbsUp, MessageCircle } from 'lucide-react';
import { MapPin, Phone, Share, Share2, Star, Calendar, MessageSquare } from "lucide-react";
import Reviews from "@/components/Reviews";
import Overview from "@/components/Overview";
import Photos from "@/components/Photos";
import BookingFlow from "@/components/BookingFlow";
import MenuSection from "@/components/MenuSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";


export default function RestaurantDetail() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("Overview");
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);


  useEffect(() => {
    if (!id) return;

    const API = process.env.NEXT_PUBLIC_API_URL;

    fetch(`${API}/api/restaurants/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Restaurant not found");
        return res.json();
      })
      .then((data) => {
        setRestaurant(data);
        setLoading(true);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);


  const images = [
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

  const offers = [
    { title: "PRE-BOOK OFFER", desc: `Flat ${restaurant.offer}% OFF`, sub: "Booking required" },
    { title: "INSTANT OFFER", desc: "Flat 10% OFF", sub: "on bill payments" },
    { title: "SURPRISE", desc: "Get a scratch card", sub: "after every transaction" },
    { title: "EXCLUSIVE OFFER", desc: "Get 15% upto ₹1200 on RuPay CC UPI", sub: "valid on your next dining payment" },
    { title: "BANK OFFER", desc: "20% OFF up to ₹5000", sub: "on Solitaire Credit Cards and more with other banks" }
  ]


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

  const cuisinesText = Array.isArray(restaurant.cuisines)
    ? restaurant.cuisines.join(", ")
    : restaurant.cuisines || "";

  const scrollToTabs = () => {
    setTimeout(() => {
      const anchor = document.getElementById("tabs-anchor");
      if (anchor) {
        const offset = 225; // adjust this based on your header+tabs height
        const top = anchor.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }, 100);
  };

  if (loading || !restaurant)
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-[#FFF8E7] flex flex-col items-center justify-center px-6">

          {/* Glowing plate icon */}
          <div className="relative w-28 h-28 mb-8">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-400 to-red-500 blur-xl opacity-40 animate-pulse"></div>
            <div className="relative w-28 h-28 rounded-full bg-white shadow-xl flex items-center justify-center">
              <span className="text-5xl animate-[wiggle_1.2s_ease-in-out_infinite]">🍽️</span>
            </div>
          </div>

          {/* Smooth title shimmer */}
          <div className="w-64 h-6 rounded-lg bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer mb-3"></div>
          <div className="w-40 h-4 rounded-lg bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>

          {/* Mini loading dots */}
          <div className="flex gap-2 mt-8">
            <div className="w-3 h-3 bg-orange-500 rounded-full animate-[bounce_0.8s_infinite]" />
            <div className="w-3 h-3 bg-orange-500 rounded-full animate-[bounce_0.8s_infinite_0.2s]" />
            <div className="w-3 h-3 bg-orange-500 rounded-full animate-[bounce_0.8s_infinite_0.4s]" />
          </div>

          {/* Custom shimmer animation */}
          <style jsx>{`
            @keyframes shimmer {
              0% { background-position: -200px 0; }
              100% { background-position: 200px 0; }
            }
            .animate-shimmer {
              background-size: 400px 100%;
              animation: shimmer 1.5s infinite linear;
            }
            @keyframes wiggle {
              0%, 100% { transform: rotate(-3deg); }
              50% { transform: rotate(3deg); }
            }
          `}</style>
        </div>

        <Footer />
      </>
    );

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
        <div className="sticky top-0 z-40 bg-white">
          {/* --- Restaurant Header --- */}
          <div className="py-3 sm:py-4">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 sm:gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">{restaurant.name}</h1>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg mt-1">{cuisinesText}</p>
                <p className="text-gray-500 text-xs sm:text-sm mt-1 line-clamp-1">{restaurant.address}</p>

                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mt-2 sm:mt-3 text-xs sm:text-sm">
                  <span className="text-green-600 font-medium bg-green-100 px-2 sm:px-3 py-1 rounded-full">
                    Open now
                  </span>
                  <span className="text-gray-600">• 10am – 11:30pm</span>
                  <span className="text-gray-600">• ₹{restaurant.priceForTwo} for two</span>
                  <span className="text-red-500 font-medium flex items-center gap-1">
                    <Phone className="w-3 h-3 sm:w-4 sm:h-4" /> +91 {restaurant.contact}
                  </span>
                </div>
              </div>

              {/* --- Rating Section --- */}
              <div className="flex flex-col items-start md:items-end gap-1.5 sm:gap-2">
                <div className="flex items-center gap-0.5 sm:gap-1 bg-green-600 text-white px-2 sm:px-2.5 md:px-3 py-1 rounded-md text-xs sm:text-sm font-medium whitespace-nowrap">
                  <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 fill-white flex-shrink-0" /> {restaurant.rating}
                </div>
                <p className="text-xs sm:text-sm text-gray-600 whitespace-nowrap">2534 Dining Ratings</p>
              </div>
            </div>

            {/* --- Action Buttons --- */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mt-3 sm:mt-5">
              <button className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-300 text-gray-900 rounded-lg hover:bg-gray-50 transition text-xs sm:text-sm whitespace-nowrap">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-gray-900 flex-shrink-0" /> Direction
              </button>
              <button className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-300 text-gray-900 rounded-lg hover:bg-gray-50 transition text-xs sm:text-sm whitespace-nowrap">
                <Share2 className="w-3 h-3 sm:w-4 sm:h-4 text-gray-900 flex-shrink-0" /> Share
              </button>
              <button className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-300 text-gray-900 rounded-lg hover:bg-gray-50 transition text-xs sm:text-sm whitespace-nowrap">
                <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4 text-gray-900 flex-shrink-0" /> Reviews
              </button>
            </div>
          </div>
        </div>

        {/* 🖼️ Gallery Preview */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-3">
          {/* Large left image */}
          <div
            className="md:col-span-2 relative group cursor-pointer overflow-hidden rounded-xl"
            onClick={() => setSelectedImageIndex(0)}
          >
            <img
              src={images[0]}
              alt="Main"
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Right grid of smaller images */}
          <div className="md:col-span-2 grid grid-cols-2 gap-3">
            {images.slice(1, 4).map((img, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-xl"
                onClick={() => setSelectedImageIndex(index + 1)}
              >
                <img
                  src={img}
                  alt={`Gallery ${index + 2}`}
                  className="w-full h-[155px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}

            {/* “View Gallery” Box */}
            <div
              className="relative group cursor-pointer overflow-hidden rounded-xl"
              onClick={() => {
                setActiveTab("Photos");
                scrollToTabs();
              }}
            >
              {/* Background image */}
              <img
                src={images[4] || images[0]}
                alt="Gallery 5"
                className="w-full h-[155px] object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Black overlay */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                <p className="text-white font-semibold text-lg tracking-wide">View Gallery</p>
              </div>
            </div>
          </div>
        </div>

        {/* anchor for scrolling */}
        <div id="tabs-anchor" className="scroll-mt-32"></div>

        {/* ✅ Tabs - Sticky below header */}
        <div className="sticky top-[185px] sm:top-[200px] md:top-[215px] z-30 bg-white border-b border-gray-400 pt-3 sm:pt-5 overflow-x-auto scrollbar-hide" id="tabs">
          <div className="flex gap-4 sm:gap-6 md:gap-8 text-gray-600 font-medium text-sm sm:text-base md:text-lg min-w-max">
            {["Overview", "Reviews", "Photos", "Menu", "Book a Table"].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  scrollToTabs();
                }}
                className={`pb-3 sm:pb-4 transition-all whitespace-nowrap ${activeTab === tab
                  ? "text-[#C9A050] border-b-2 border-[#C9A050] font-semibold"
                  : "hover:text-[#8B6F3E]"
                  }`}
              >
                <span className="hidden sm:inline">{tab}</span>
                <span className="sm:hidden">{tab === "Book a Table" ? "Book" : tab}</span>
              </button>
            ))}
          </div>
        </div>

        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>

        {/* Fullscreen Modal */}
        {selectedImageIndex !== null && (
          <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-2 sm:p-4">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="cursor-pointer absolute top-3 right-3 sm:top-6 sm:right-6 text-white hover:text-gray-300 transition z-50 bg-black/30 rounded-full p-1.5 sm:p-2"
            >
              <X className="w-6 h-6 sm:w-10 sm:h-10" />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="cursor-pointer absolute left-2 sm:left-6 text-white hover:text-gray-300 bg-black/50 p-2 sm:p-3 rounded-full z-50"
            >
              <ChevronLeft className="w-5 h-5 sm:w-8 sm:h-8" />
            </button>

            <div className="max-w-6xl mx-auto w-full px-2 sm:px-4 flex items-center justify-center">
              <img
                src={images[selectedImageIndex]}
                alt={`Photo ${selectedImageIndex + 1}`}
                className="max-h-[70vh] sm:max-h-[80vh] w-auto rounded-lg sm:rounded-xl object-contain shadow-2xl"
              />
            </div>

            <button
              onClick={nextImage}
              className="cursor-pointer absolute right-2 sm:right-6 text-white hover:text-gray-300 bg-black/50 p-2 sm:p-3 rounded-full z-50"
            >
              <ChevronRight className="w-5 h-5 sm:w-8 sm:h-8" />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 sm:bottom-8 text-white text-xs sm:text-sm bg-black/50 px-3 py-1.5 rounded-full">
              {selectedImageIndex + 1} / {images.length}
            </div>
          </div>
        )}



        {/* ✅ Overview Section */}
        {activeTab === "Overview" && <Overview restaurant={restaurant} />}


        {/* --- Reviews Section --- */}
        {activeTab === "Reviews" && <Reviews restaurantName={restaurant.name} />}

        {/* --- Photos Section --- */}
        {activeTab === "Photos" && (
          <div id="photos-section">
            <Photos restaurant={restaurant} />
          </div>
        )}

        {activeTab === "Menu" && <MenuSection restaurant={restaurant} />}


        {activeTab === "Book a Table" && (
          <BookingFlow
            restaurantName={restaurant.name}
            restaurantId={restaurant.restaurantId}
            offers={offers}
            scrollToTop={scrollToTabs}
          />
        )}
      </div>

      <Footer />
    </>
  );
}
