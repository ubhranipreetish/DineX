"use client";
import { useState } from "react";

export default function Overview({ restaurant }) {
  const [selectedOffer, setSelectedOffer] = useState(0);

  if (!restaurant) return null;

  const staticRestaurantData = {
  
    offers: [
      { title: "PRE-BOOK OFFER", desc: "Flat 20% OFF", sub: "Booking required" },
      { title: "INSTANT OFFER", desc: "Flat 10% OFF", sub: "on bill payments" },
      { title: "SURPRISE", desc: "Get a scratch card", sub: "after every transaction" },
      { title: "EXCLUSIVE OFFER", desc: "Get 15% upto ₹1200 on RuPay CC UPI", sub: "valid on your next dining payment" },
      { title: "BANK OFFER", desc: "20% OFF up to ₹5000", sub: "on Solitaire Credit Cards and more with other banks" }
    ],
  
    knownFor: [
      "Fancy Place",
      "Best in Service",
      "Sanitised Service",
      "Best Staff",
      "Great Menu",
      "Food Tastes Great"
    ],
  
    paymentInfo: [
      "Cash and Cards accepted",
      "Digital payments accepted"
    ],
  
    moreInfo: [
      "Lunch",
      "Dinner",
      "Takeaway available",
      "Full bar available",
      "Artistic",
      "Reservation required",
      "Dress code [Formal]",
      "Parking available",
      "Valet parking",
      "Offers candlelit setting",
      "Gluten free options",
      "Vegan options",
      "Celebrity frequented",
      "Nightlife",
      "Garden",
      "Outdoor seating",
      "Romantic dining",
      "Family friendly",
      "Luxury dining",
      "Private dining area",
      "Lounge seating",
      "Party vibe",
      "Free parking",
      "Indoor seating"
    ]
  };

  return (
    <div className="mt-8 space-y-8">
      {/* 🍽️ Dining Offers */}
      <section className="border border-gray-200 rounded-xl p-5">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Dining Offers</h2>
        <p className="text-gray-500 mb-4">Tap on any offer to know more</p>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4">
          {staticRestaurantData.offers.map((offer, i) => (
            <button
              key={i}
              onClick={() => setSelectedOffer(i)}
              className={`cursor-pointer rounded-xl p-4 text-left border shadow-sm transition-all duration-200 ${
                selectedOffer === i
                  ? "bg-blue-600 text-white border-blue-600 scale-[1.02]"
                  : "bg-white border-gray-200 text-gray-700 hover:border-blue-400 hover:shadow-md"
              }`}
            >
              <h3
                className={`font-semibold mb-1 ${
                  selectedOffer === i ? "text-white/90" : "text-blue-700 uppercase text-sm"
                }`}
              >
                {offer.title}
              </h3>
              <p
                className={`font-bold text-lg ${
                  selectedOffer === i ? "text-white" : "text-gray-900"
                }`}
              >
                {offer.desc}
              </p>
              <p
                className={`text-sm mt-1 ${
                  selectedOffer === i ? "text-blue-100" : "text-gray-500"
                }`}
              >
                {offer.sub}
              </p>
            </button>
          ))}
        </div>

        {/* Display selected offer details below */}
        {staticRestaurantData.offers[selectedOffer] && (
          <div className="mt-5 bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-800 text-lg">
              Selected Offer: {staticRestaurantData.offers[selectedOffer].title}
            </h4>
            <p className="text-gray-600 mt-1">
              {staticRestaurantData.offers[selectedOffer].desc}
            </p>
          </div>
        )}
      </section>

      {/* 💬 People Say + Cost Section */}
      <section className="border border-gray-200 rounded-xl p-5">
        <h2 className="text-xl text-gray-900 font-semibold mb-2">
          People Say This Place Is Known For
        </h2>
        <p className="text-gray-600 mb-4">
          {staticRestaurantData.knownFor?.length ? staticRestaurantData.knownFor.join(", ") : "No info available."}
        </p>

        <h2 className="text-xl text-gray-900 font-semibold mb-2">Average Cost</h2>
        <p className="text-gray-800">₹{restaurant.priceForTwo} for two</p>
        <p className="text-gray-500">₹395 for a pint of beer (approx.)</p>

        <div className="mt-3 space-y-1">
          {staticRestaurantData.paymentInfo?.length ? (
            staticRestaurantData.paymentInfo.map((info, i) => (
              <p key={i} className="text-gray-700">
                {info}
              </p>
            ))
          ) : (
            <p className="text-gray-500">Payment details not available</p>
          )}
        </div>
      </section>

      {/* 🧾 More Info */}
      <section className="border border-gray-200 rounded-xl p-5">
        <h2 className="text-xl text-gray-900 font-semibold mb-4">More Info</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
          {staticRestaurantData.moreInfo?.length ? (
            staticRestaurantData.moreInfo.map((info, i) => (
              <div key={i} className="flex items-center gap-2 text-gray-700">
                <span className="text-green-500 text-lg">✔</span> {info}
              </div>
            ))
          ) : (
            <p className="text-gray-500">No additional info available</p>
          )}
        </div>
      </section>
    </div>
  );
}
