"use client";
import { useState, useEffect } from "react";
import { Calendar, Clock, Users } from 'lucide-react';

export default function BookingForm({ restaurantName, offers = [], onSubmit }) {
  const [people, setPeople] = useState(2);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [timeSlots, setTimeSlots] = useState([]);
  const [specialRequests, setSpecialRequests] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // 🕒 Generate available slots dynamically (only future)
  const generateAvailableSlots = () => {
    const slots = [];
    const now = new Date();
    const start = new Date();
    start.setHours(10, 0, 0);
    const end = new Date();
    end.setHours(23, 30, 0);
    
    while (start <= end) {
      const hours = start.getHours().toString().padStart(2, "0");
      const minutes = start.getMinutes().toString().padStart(2, "0");
      const slot = `${hours}:${minutes}`;
      const slotTime = new Date();
      slotTime.setHours(Number(hours), Number(minutes), 0, 0);
      
      if (slotTime > now) slots.push(slot);
      
      start.setMinutes(start.getMinutes() + 30);
    }
    
    return slots;
  };
  const formatTime = (time24) => {
    const [h, m] = time24.split(":").map(Number);
    const period = h >= 12 ? "PM" : "AM";
    const hour12 = h % 12 || 12;
    return `${hour12}:${m.toString().padStart(2, "0")} ${period}`;
  };

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setDate(today);
    const slots = generateAvailableSlots();
    setTimeSlots(slots);
    setTime(slots[0]);
  }, []);

  const handlePeopleChange = (delta) =>
    setPeople((prev) => Math.min(12, Math.max(1, prev + delta)));

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      onSubmit({
        restaurantName,
        people,
        date,
        time: formatTime(time),
        offer: selectedOffer,
        specialRequests,
        offers, 
        amount: 200,
      });
      
      setIsLoading(false);
    }, 600);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-gray-200 p-8 rounded-2xl shadow-sm bg-white space-y-8"
    >
      {/* 🔖 Heading */}
      <h3 className="text-2xl font-semibold text-gray-900 mb-2">
        Reserve a Table
      </h3>

      {/* 🏷️ Dining Offers */}
      {offers.length > 0 && (
        <div className="space-y-3">
          <h4 className="text-lg font-semibold text-gray-800">
            Available Dining Offers
          </h4>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-5">
            {offers.map((offer, i) => (
              <button
                type="button"
                key={i}
                onClick={() => setSelectedOffer(i)}
                className={`rounded-2xl p-5 text-left border shadow-sm transition-all duration-200 ${
                  selectedOffer === i
                    ? "bg-blue-600 text-white border-blue-600 scale-[1.02]"
                    : "bg-white border-gray-200 text-gray-700 hover:border-blue-400 hover:shadow-md"
                }`}
              >
                <h3
                  className={`font-semibold mb-1 ${
                    selectedOffer === i
                      ? "text-white/90"
                      : "text-blue-700 uppercase text-sm"
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
        </div>
      )}

      {/* 📅 Date Picker */}
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700">
          <Calendar className="w-4 h-4 inline mr-2 text-red-500" />
          Select Date
        </label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          min={new Date().toISOString().split("T")[0]}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all outline-none text-gray-700"
          required
        />
      </div>

      {/* 🕒 Time Slots */}
      <div className="space-y-2">
        <label className="block font-semibold text-gray-700">
          <Clock className="w-4 h-4 inline mr-2 text-red-500" />
          Select Time Slot
        </label>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 max-h-48 overflow-y-auto border border-gray-200 p-3 rounded-xl bg-gray-50">
          {timeSlots.map((slot) => (
            <button
              key={slot}
              type="button"
              onClick={() => setTime(slot)}
              className={`px-3 py-2 rounded-lg border text-sm transition ${
                time === slot
                  ? "bg-red-100 border-red-400 text-red-600 font-medium"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              {formatTime(slot)}
            </button>
          ))}
        </div>
      </div>

      {/* 👥 People Count */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          <Users className="w-4 h-4 inline mr-2 text-red-500" />
          Number of Guests
        </label>
        <div className="flex items-center justify-between border border-gray-300 rounded-xl px-4 py-2">
          <span className="font-medium text-gray-700">Guests</span>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => handlePeopleChange(-1)}
              className="w-7 h-7 flex items-center justify-center bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-all font-bold text-xl shadow-sm hover:shadow active:scale-95"
            >
              −
            </button>
            <span className="w-7 text-center text-gray-800 font-bold text-xl">
              {people}
            </span>
            <button
              type="button"
              onClick={() => handlePeopleChange(1)}
              className="w-7 h-7 flex items-center justify-center bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-all font-bold text-xl shadow-sm hover:shadow active:scale-95"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* 📝 Special Requests */}
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700">
          Special Requests (Optional)
        </label>
        <textarea
          value={specialRequests}
          onChange={(e) => setSpecialRequests(e.target.value)}
          placeholder="Any dietary requirements, preferences, or special occasions?"
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all outline-none resize-none text-gray-700 placeholder-gray-400"
          rows="3"
        />
      </div>

      {/* ✅ Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-[#EF4F5F] hover:bg-red-600 disabled:bg-gray-400 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg transform hover:scale-[1.02] active:scale-[0.98] disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Processing...
            </>
          ) : (
            "Proceed to Cart"
          )}
        </button>
      </div>
    </form>
  );
}
