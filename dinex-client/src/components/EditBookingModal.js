"use client";
import { useState, useEffect } from "react";
import { X, Calendar, Clock, Users } from "lucide-react";
import { useNotification } from "@/context/NotificationContext";

export default function EditBookingModal({ booking, onClose, onSave }) {
    const [formData, setFormData] = useState({
        people: booking.people,
        date: "",
        time: "",
        specialRequests: booking.specialRequests || ""
    });
    const [timeSlots, setTimeSlots] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { showToast } = useNotification();

    // Generate available time slots
    const generateAvailableSlots = () => {
        const slots = [];
        const start = new Date();
        start.setHours(10, 0, 0);
        const end = new Date();
        end.setHours(23, 30, 0);

        while (start <= end) {
            const hours = start.getHours().toString().padStart(2, "0");
            const minutes = start.getMinutes().toString().padStart(2, "0");
            const slot = `${hours}:${minutes}`;
            slots.push(slot);
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

    const parseTime = (time12) => {
        const match = time12.match(/(\d+):(\d+)\s*(AM|PM)/i);
        if (!match) return "10:00";

        let hours = parseInt(match[1]);
        const minutes = match[2];
        const period = match[3].toUpperCase();

        if (period === "PM" && hours !== 12) hours += 12;
        if (period === "AM" && hours === 12) hours = 0;

        return `${hours.toString().padStart(2, "0")}:${minutes}`;
    };

    useEffect(() => {
        // Initialize date and time from booking
        const bookingDate = new Date(booking.date);
        const formattedDate = bookingDate.toISOString().split("T")[0];
        setFormData(prev => ({
            ...prev,
            date: formattedDate,
            time: parseTime(booking.time)
        }));

        // Generate time slots
        const slots = generateAvailableSlots();
        setTimeSlots(slots);
    }, [booking]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const updateData = {
                people: formData.people,
                date: formData.date,
                time: formatTime(formData.time),
                specialRequests: formData.specialRequests
            };

            await onSave(updateData);
        } catch (error) {
            console.error("Error updating booking:", error);
            showToast("Failed to update booking. Please try again.", "error");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-gray-800">Edit Booking</h3>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded-lg transition"
                    >
                        <X className="w-6 h-6 text-gray-600" />
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                    {/* Restaurant Name (Read-only) */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Restaurant
                        </label>
                        <div className="px-4 py-3 bg-gray-50 rounded-lg text-gray-800 font-semibold">
                            {booking.restaurantName}
                        </div>
                    </div>

                    {/* Number of Guests */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            <Users className="w-4 h-4 inline mr-2 text-red-500" />
                            Number of Guests
                        </label>
                        <div className="flex items-center justify-between border border-gray-300 rounded-xl px-4 py-2">
                            <span className="font-medium text-gray-700">Guests</span>
                            <div className="flex items-center gap-4">
                                <button
                                    type="button"
                                    onClick={() => setFormData(prev => ({ ...prev, people: Math.max(1, prev.people - 1) }))}
                                    className="w-8 h-8 flex items-center justify-center bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition font-bold text-xl"
                                >
                                    −
                                </button>
                                <span className="w-8 text-center text-gray-800 font-bold text-xl">
                                    {formData.people}
                                </span>
                                <button
                                    type="button"
                                    onClick={() => setFormData(prev => ({ ...prev, people: Math.min(12, prev.people + 1) }))}
                                    className="w-8 h-8 flex items-center justify-center bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition font-bold text-xl"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Date */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            <Calendar className="w-4 h-4 inline mr-2 text-red-500" />
                            Select Date
                        </label>
                        <input
                            type="date"
                            value={formData.date}
                            onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                            min={new Date().toISOString().split("T")[0]}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition outline-none text-gray-700"
                            required
                        />
                    </div>

                    {/* Time */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            <Clock className="w-4 h-4 inline mr-2 text-red-500" />
                            Select Time Slot
                        </label>
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 max-h-48 overflow-y-auto border border-gray-200 p-3 rounded-xl bg-gray-50">
                            {timeSlots.map((slot) => (
                                <button
                                    key={slot}
                                    type="button"
                                    onClick={() => setFormData(prev => ({ ...prev, time: slot }))}
                                    className={`px-3 py-2 rounded-lg border text-sm transition ${formData.time === slot
                                        ? "bg-red-100 border-red-400 text-red-600 font-medium"
                                        : "hover:bg-gray-100 text-gray-700"
                                        }`}
                                >
                                    {formatTime(slot)}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Special Requests */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Special Requests (Optional)
                        </label>
                        <textarea
                            value={formData.specialRequests}
                            onChange={(e) => setFormData(prev => ({ ...prev, specialRequests: e.target.value }))}
                            placeholder="Any dietary requirements, preferences, or special occasions?"
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition outline-none resize-none text-gray-700"
                            rows="3"
                        />
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="flex-1 px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold rounded-xl transition shadow-lg disabled:cursor-not-allowed"
                        >
                            {isLoading ? "Saving..." : "Save Changes"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
