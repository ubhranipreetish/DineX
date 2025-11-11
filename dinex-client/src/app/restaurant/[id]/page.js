"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Camera, X, ChevronLeft, ChevronRight,ThumbsUp, MessageCircle } from 'lucide-react';
import { MapPin, Phone,Share, Share2, Star, Calendar, MessageSquare } from "lucide-react";
import Reviews from "@/components/Reviews";
import Overview from "@/components/Overview";
import Photos from "@/components/Photos";
import BookingFlow from "@/components/BookingFlow";



export default function RestaurantDetail() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [activeTab, setActiveTab] = useState("Overview");
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);


  useEffect(() => {
    const dummyData = [
      {
        id: "1",
        name: "Drama",
        cuisines: "Modern Indian, Asian, Italian, Continental",
        address: "14, Second Floor, Scindia House, Kasturba Gandhi Marg, Atul Grove Road, Connaught Place, New Delhi",
        rating: 4.3,
        diningRatings: 2929,
        openNow: true,
        timing: "12noon – 1am (Today)",
        priceForTwo: 3000,
        contact: "+919560999779",
        offers: [
          { title: "PRE-BOOK OFFER", desc: "Flat 20% OFF", sub: "Booking required" },
          { title: "INSTANT OFFER", desc: "Flat 10% OFF", sub: "on bill payments" },
          { title: "SURPRISE", desc: "Get a scratch card", sub: "after every transaction" },
          { title: "EXCLUSIVE OFFER", desc: "Get 15% upto ₹1200 on RuPay CC UPI", sub: "valid on your next dining payment" },
          { title: "BANK OFFER", desc: "20% OFF up to ₹5000", sub: "on Solitaire Credit Cards\nand more with other banks" },
        ],
        knownFor: ["Fancy Place", "Best in Service", "Sanitised Service", "Best Staff", "Great Menu", "Food Tastes Great"],
        paymentInfo: ["Cash and Cards accepted", "Digital payments accepted"],
        moreInfo: [
          "Lunch", "Dinner", "Takeaway available", "Full bar available", "Artistic", "Reservation required",
          "Dress code [Formal]", "Parking available", "Valet parking", "Offers candlelit setting", "Gluten free options",
          "Vegan options", "Celebrity frequented", "Nightlife", "Garden", "Outdoor seating", "Romantic dining",
          "Family friendly", "Luxury dining", "Private dining area", "Lounge seating", "Party vibe", "Free parking", "Indoor seating"
        ],
        images: [
          "/images/cafe1.png",
          "/images/drama1.jpg",
          "/images/drama2.jpg",
          "/images/drama3.jpg",
          "/images/drama4.jpg"
        ]
      },
      {
        id: "2",
        name: "Drama",
        cuisines: "Modern Indian, Asian, Italian, Continental",
        address: "14, Second Floor, Scindia House, Kasturba Gandhi Marg, Atul Grove Road, Connaught Place, New Delhi",
        rating: 4.3,
        diningRatings: 2929,
        openNow: true,
        timing: "12noon – 1am (Today)",
        priceForTwo: 3000,
        contact: "+919560999779",
        offers: [
          { title: "PRE-BOOK OFFER", desc: "Flat 20% OFF", sub: "Booking required" },
          { title: "INSTANT OFFER", desc: "Flat 10% OFF", sub: "on bill payments" },
          { title: "SURPRISE", desc: "Get a scratch card", sub: "after every transaction" },
          { title: "EXCLUSIVE OFFER", desc: "Get 15% upto ₹1200 on RuPay CC UPI", sub: "valid on your next dining payment" },
          { title: "BANK OFFER", desc: "20% OFF up to ₹5000", sub: "on Solitaire Credit Cards\nand more with other banks" },
        ],
        knownFor: ["Fancy Place", "Best in Service", "Sanitised Service", "Best Staff", "Great Menu", "Food Tastes Great"],
        paymentInfo: ["Cash and Cards accepted", "Digital payments accepted"],
        moreInfo: [
          "Lunch", "Dinner", "Takeaway available", "Full bar available", "Artistic", "Reservation required",
          "Dress code [Formal]", "Parking available", "Valet parking", "Offers candlelit setting", "Gluten free options",
          "Vegan options", "Celebrity frequented", "Nightlife", "Garden", "Outdoor seating", "Romantic dining",
          "Family friendly", "Luxury dining", "Private dining area", "Lounge seating", "Party vibe", "Free parking", "Indoor seating"
        ],
        images: [
          "/images/cafe1.png",
          "/images/drama1.jpg",
          "/images/drama2.jpg",
          "/images/drama3.jpg",
          "/images/drama4.jpg"
        ]
      },
      {
        id: "3",
        name: "Drama",
        cuisines: "Modern Indian, Asian, Italian, Continental",
        address: "14, Second Floor, Scindia House, Kasturba Gandhi Marg, Atul Grove Road, Connaught Place, New Delhi",
        rating: 4.3,
        diningRatings: 2929,
        openNow: true,
        timing: "12noon – 1am (Today)",
        priceForTwo: 3000,
        contact: "+919560999779",
        offers: [
          { title: "PRE-BOOK OFFER", desc: "Flat 20% OFF", sub: "Booking required" },
          { title: "INSTANT OFFER", desc: "Flat 10% OFF", sub: "on bill payments" },
          { title: "SURPRISE", desc: "Get a scratch card", sub: "after every transaction" },
          { title: "EXCLUSIVE OFFER", desc: "Get 15% upto ₹1200 on RuPay CC UPI", sub: "valid on your next dining payment" },
          { title: "BANK OFFER", desc: "20% OFF up to ₹5000", sub: "on Solitaire Credit Cards\nand more with other banks" },
        ],
        knownFor: ["Fancy Place", "Best in Service", "Sanitised Service", "Best Staff", "Great Menu", "Food Tastes Great"],
        paymentInfo: ["Cash and Cards accepted", "Digital payments accepted"],
        moreInfo: [
          "Lunch", "Dinner", "Takeaway available", "Full bar available", "Artistic", "Reservation required",
          "Dress code [Formal]", "Parking available", "Valet parking", "Offers candlelit setting", "Gluten free options",
          "Vegan options", "Celebrity frequented", "Nightlife", "Garden", "Outdoor seating", "Romantic dining",
          "Family friendly", "Luxury dining", "Private dining area", "Lounge seating", "Party vibe", "Free parking", "Indoor seating"
        ],
        images: [
          "/images/cafe1.png",
          "/images/drama1.jpg",
          "/images/drama2.jpg",
          "/images/drama3.jpg",
          "/images/drama4.jpg"
        ]
      },
      {
        id: "4",
        name: "Drama",
        cuisines: "Modern Indian, Asian, Italian, Continental",
        address: "14, Second Floor, Scindia House, Kasturba Gandhi Marg, Atul Grove Road, Connaught Place, New Delhi",
        rating: 4.3,
        diningRatings: 2929,
        openNow: true,
        timing: "12noon – 1am (Today)",
        priceForTwo: 3000,
        contact: "+919560999779",
        offers: [
          { title: "PRE-BOOK OFFER", desc: "Flat 20% OFF", sub: "Booking required" },
          { title: "INSTANT OFFER", desc: "Flat 10% OFF", sub: "on bill payments" },
          { title: "SURPRISE", desc: "Get a scratch card", sub: "after every transaction" },
          { title: "EXCLUSIVE OFFER", desc: "Get 15% upto ₹1200 on RuPay CC UPI", sub: "valid on your next dining payment" },
          { title: "BANK OFFER", desc: "20% OFF up to ₹5000", sub: "on Solitaire Credit Cards\nand more with other banks" },
        ],
        knownFor: ["Fancy Place", "Best in Service", "Sanitised Service", "Best Staff", "Great Menu", "Food Tastes Great"],
        paymentInfo: ["Cash and Cards accepted", "Digital payments accepted"],
        moreInfo: [
          "Lunch", "Dinner", "Takeaway available", "Full bar available", "Artistic", "Reservation required",
          "Dress code [Formal]", "Parking available", "Valet parking", "Offers candlelit setting", "Gluten free options",
          "Vegan options", "Celebrity frequented", "Nightlife", "Garden", "Outdoor seating", "Romantic dining",
          "Family friendly", "Luxury dining", "Private dining area", "Lounge seating", "Party vibe", "Free parking", "Indoor seating"
        ],
        images: [
          "/images/cafe1.png",
          "/images/drama1.jpg",
          "/images/drama2.jpg",
          "/images/drama3.jpg",
          "/images/drama4.jpg"
        ]
      },
    ];

    const selected = dummyData.find((r) => r.id === id);
    setRestaurant(selected);
  }, [id]);

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


  if (!restaurant) return <p className="text-center mt-10 text-gray-600">Loading...</p>;
  return (
    <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
      <div className="sticky top-0 z-40 bg-white py-4">
        {/* --- Restaurant Header --- */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
          <div>
            <h1 className="text-4xl font-semibold text-gray-900">{restaurant.name}</h1>
            <p className="text-gray-600 text-lg mt-1">{restaurant.cuisines}</p>
            <p className="text-gray-500 mt-1">{restaurant.address}</p>

            <div className="flex flex-wrap items-center gap-2 mt-3">
              <span className="text-green-600 font-medium bg-green-100 px-3 py-1 rounded-full text-sm">
                {restaurant.openNow ? "Open now" : "Closed"}
              </span>
              <span className="text-gray-600 text-sm">• 10am – 11:30pm</span>
              <span className="text-gray-600 text-sm">• ₹{restaurant.priceForTwo} for two</span>
              <span className="text-red-500 text-sm font-medium flex items-center gap-1">
                <Phone className="w-4 h-4" /> {restaurant.contact}
              </span>
            </div>
          </div>

          {/* --- Rating Section --- */}
          <div className="flex flex-col items-end gap-2">
            <div className="flex items-center gap-1 bg-green-600 text-white px-3 py-1 rounded-md text-sm font-medium">
              <Star className="w-4 h-4 fill-white" /> {restaurant.rating}
            </div>
            <p className="text-sm text-gray-600">{restaurant.diningRatings.toLocaleString()} Dining Ratings</p>
          </div>
        </div>

        {/* --- Action Buttons --- */}
        <div className="flex flex-wrap gap-3 mt-5">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-900 rounded-lg hover:bg-gray-50 transition">
            <MapPin className="w-4 h-4 text-gray-900" /> Direction
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-900 rounded-lg hover:bg-gray-50 transition">
            <Share2 className="w-4 h-4 text-gray-900" /> Share
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-900 rounded-lg hover:bg-gray-50 transition">
            <MessageSquare className="w-4 h-4 text-gray-900" /> Reviews
          </button>
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
            src={restaurant.images[0]}
            alt="Main"
            className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Right grid of smaller images */}
        <div className="md:col-span-2 grid grid-cols-2 gap-3">
          {restaurant.images.slice(1, 4).map((img, index) => (
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
              setTimeout(() => {
                const tabs = document.getElementById("tabs");
                const offset = 230; // adjust this based on your header+tabs height
                const top = tabs.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: "smooth" });
              }, 150);
            }}
          >
            {/* Background image */}
            <img
              src={restaurant.images[4] || restaurant.images[0]}
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


      {/* ✅ Tabs */}
      <div className="sticky top-[234px] z-30 bg-white border-b border-gray-400 tborder-b pt-5 flex gap-8 text-gray-600 font-medium text-lg" id="tabs">
        {["Overview", "Reviews", "Photos", "Menu", "Book a Table"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-3 relative ${
              activeTab === tab
                ? "text-red-500 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-red-500"
                : "hover:text-gray-800"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

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


      <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-800">Menu</h2>
      {/* <div className="border rounded-xl p-4 bg-gray-50">
        {restaurant.menu.map((item, i) => (
          <div
            key={i}
            className="flex justify-between border-b border-gray-200 py-2 last:border-none"
          >
            <span className="text-gray-800">{item.name}</span>
            <span className="text-gray-700 font-medium">₹{item.price}</span>
          </div>
        ))}
      </div> */}
      {activeTab === "Book a Table" && (
        <BookingFlow
          restaurantName={restaurant.name}
          offers={restaurant.offers}
        />
      )}
      {/* <div className="mt-10">
        <BookingFlow restaurantName={restaurant.name} />
      </div> */}
    </div>
  );
}
