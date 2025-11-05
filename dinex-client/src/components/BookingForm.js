"use client";
import { useState, useEffect } from "react";

export default function BookingForm({ restaurantName, onSubmit }) {
  const [people, setPeople] = useState(2);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const generateTimeSlots = () => {
    const slots = [];
    const start = new Date();
    start.setHours(10, 0, 0);
    const end = new Date();
    end.setHours(23, 30, 0);
    while (start <= end) {
      const hours = start.getHours().toString().padStart(2, "0");
      const minutes = start.getMinutes().toString().padStart(2, "0");
      slots.push(`${hours}:${minutes}`);
      start.setMinutes(start.getMinutes() + 30);
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  const formatTime = (time24) => {
    const [h, m] = time24.split(":").map(Number);
    const period = h >= 12 ? "PM" : "AM";
    const hour12 = h % 12 || 12;
    return `${hour12}:${m.toString().padStart(2, "0")} ${period}`;
  };

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setDate(today);
    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    const nextSlot = timeSlots.find((slot) => {
      const [h, m] = slot.split(":").map(Number);
      const slotMinutes = h * 60 + m;
      return slotMinutes > currentMinutes;
    });
    setTime(nextSlot || timeSlots[0]);
  }, []);

  const handlePeopleChange = (delta) => {
    setPeople((prev) => Math.min(12, Math.max(1, prev + delta)));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      restaurantName,
      people,
      date,
      time: formatTime(time),
      amount: 200,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="border border-gray-200 p-6 rounded-xl shadow-sm bg-white">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Reserve a Table</h3>

      <div className="flex flex-col gap-4">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border border-gray-300 p-2 rounded-lg text-gray-700"
          required
        />

        <div>
          <label className="block mb-2 font-medium text-gray-700">Select Time Slot</label>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 max-h-48 overflow-y-auto border border-gray-200 p-2 rounded-lg bg-gray-50">
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

        <div className="flex items-center justify-between border border-gray-200 p-2 rounded-lg w-48 bg-gray-50">
          <span className="font-medium text-gray-700">People</span>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => handlePeopleChange(-1)}
              className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300 text-gray-700"
            >
              −
            </button>
            <span className="w-6 text-center">{people}</span>
            <button
              type="button"
              onClick={() => handlePeopleChange(1)}
              className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300 text-gray-700"
            >
              +
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
        >
          Book Now
        </button>
      </div>
    </form>
  );
}
