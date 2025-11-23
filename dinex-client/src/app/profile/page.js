"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  User,
  Mail,
  Utensils,
  LogOut,
  CalendarDays,
  MapPin,
  Phone,
  Edit2,
  Settings,
  History,
  Clock,
  Users as UsersIcon,
  Trash2,
  XCircle,
} from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import EditBookingModal from "@/components/EditBookingModal";
import { API } from "@/utils/api";

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [loadingBookings, setLoadingBookings] = useState(true);
  const [editingBooking, setEditingBooking] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      const userData = JSON.parse(stored);
      setUser(userData);
      fetchBookings(userData._id);

      // Set up auto-refresh every 60 seconds to update booking statuses
      const intervalId = setInterval(() => {
        fetchBookings(userData._id);
      }, 60000); // 60 seconds

      // Cleanup interval on unmount
      return () => clearInterval(intervalId);
    } else {
      router.push("/login");
    }
  }, [router]);

  const fetchBookings = async (userId) => {
    try {
      setLoadingBookings(true);
      const response = await API.get(`/api/bookings/user/${userId}`);
      setBookings(response.data.bookings || []);
    } catch (error) {
      console.error("Error fetching bookings:", error);
      setBookings([]);
    } finally {
      setLoadingBookings(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.dispatchEvent(new Event("userUpdated"));
    router.push("/");
  };

  const handleEditBooking = (booking) => {
    setEditingBooking(booking);
    setShowEditModal(true);
  };

  const handleSaveBooking = async (updateData) => {
    try {
      await API.patch(`/api/bookings/${editingBooking._id}`, updateData);
      alert("✅ Booking updated successfully!");
      setShowEditModal(false);
      setEditingBooking(null);
      fetchBookings(user._id);
    } catch (error) {
      console.error("Error updating booking:", error);
      throw error;
    }
  };

  const handleCancelBooking = async (bookingId) => {
    if (!confirm("Are you sure you want to cancel this booking?")) return;

    try {
      await API.patch(`/api/bookings/${bookingId}/cancel`);
      alert("✅ Booking cancelled successfully!");
      fetchBookings(user._id);
    } catch (error) {
      console.error("Error cancelling booking:", error);
      alert(error.response?.data?.msg || "Failed to cancel booking");
    }
  };

  const handleDeleteBooking = async (bookingId) => {
    if (!confirm("Are you sure you want to permanently delete this booking?")) return;

    try {
      await API.delete(`/api/bookings/${bookingId}`);
      alert("✅ Booking deleted successfully!");
      fetchBookings(user._id);
    } catch (error) {
      console.error("Error deleting booking:", error);
      alert(error.response?.data?.msg || "Failed to delete booking");
    }
  };

  const getStatusBadge = (status) => {
    const styles = {
      confirmed: "bg-green-100 text-green-700",
      completed: "bg-blue-100 text-blue-700",
      cancelled: "bg-red-100 text-red-700"
    };
    return styles[status] || "bg-gray-100 text-gray-700";
  };

  const canEditOrCancel = (booking) => {
    if (booking.status !== "confirmed") return false;

    const now = new Date();
    const bookingDateTime = new Date(booking.date);
    const timeParts = booking.time.match(/(\d+):(\d+)\s*(AM|PM)/i);

    if (timeParts) {
      let hours = parseInt(timeParts[1]);
      const minutes = parseInt(timeParts[2]);
      const period = timeParts[3].toUpperCase();

      if (period === "PM" && hours !== 12) hours += 12;
      if (period === "AM" && hours === 12) hours = 0;

      bookingDateTime.setHours(hours, minutes, 0, 0);
    }

    return now < bookingDateTime;
  };

  if (!user) return null;

  const confirmedBookings = bookings.filter(b => b.status === "confirmed").length;
  const completedBookings = bookings.filter(b => b.status === "completed").length;

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#FFF8E7] py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* LEFT SECTION */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-xl p-8 text-center border border-[#E8E1D5]">

                {/* Avatar */}
                <div className="relative inline-block mb-4">
                  <div className="w-32 h-32 bg-[#5E4633] rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-md">
                    {user.name?.charAt(0).toUpperCase()}
                  </div>
                  <button className="absolute bottom-0 right-0 w-10 h-10 bg-[#C9A050] rounded-full flex items-center justify-center text-white hover:bg-[#8B6F3E] transition shadow-lg">
                    <Edit2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Name + Email */}
                <h2 className="text-2xl font-bold text-[#4A3F35] mb-1">
                  {user.name}
                </h2>
                <p className="text-sm text-[#6B625A] mb-4 flex items-center justify-center gap-1">
                  <Mail className="w-4 h-4" />
                  {user.email}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6 pt-6 border-t border-[#E8E1D5]">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-[#C9A050]">{confirmedBookings}</p>
                    <p className="text-xs text-[#6B625A]">Active</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-[#C9A050]">{completedBookings}</p>
                    <p className="text-xs text-[#6B625A]">Completed</p>
                  </div>
                </div>

                {/* LOGOUT */}
                <button
                  onClick={handleLogout}
                  className="w-full bg-[#5E4633] hover:bg-[#4A372A] text-white font-semibold py-3 px-4 rounded-xl transition-all shadow-md hover:shadow-xl transform hover:scale-[1.02]"
                >
                  <LogOut className="w-5 h-5 inline-block mr-2" />
                  Logout
                </button>
              </div>

              {/* Account Details */}
              <div className="bg-white rounded-2xl shadow-xl p-6 mt-4 border border-[#E8E1D5]">
                <h3 className="font-bold text-[#4A3F35] mb-4">Account Details</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <CalendarDays className="w-4 h-4 text-[#6B625A]" />
                    <span className="text-[#6B625A]">Joined:</span>
                    <span className="font-semibold text-[#4A3F35]">
                      {new Date(user.createdAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="w-4 h-4 text-[#6B625A]" />
                    <span className="text-[#6B625A]">Phone:</span>
                    <span className="font-semibold text-[#4A3F35]">+91 98765 43210</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="w-4 h-4 text-[#6B625A]" />
                    <span className="text-[#6B625A]">Location:</span>
                    <span className="font-semibold text-[#4A3F35]">New Delhi</span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SECTION */}
            <div className="lg:col-span-2 space-y-6">

              {/* Three Action Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button className="bg-white border border-[#E8E1D5] rounded-xl shadow-md p-6 hover:shadow-xl transition-all hover:scale-[1.02] text-left">
                  <div className="w-12 h-12 bg-[#E3EFFA] rounded-lg flex items-center justify-center mb-3">
                    <History className="w-6 h-6 text-[#3C5A78]" />
                  </div>
                  <h3 className="font-bold text-[#4A3F35] mb-1">Booking History</h3>
                  <p className="text-sm text-[#6B625A]">View all bookings</p>
                </button>

                <button className="bg-white border border-[#E8E1D5] rounded-xl shadow-md p-6 hover:shadow-xl transition-all hover:scale-[1.02] text-left">
                  <div className="w-12 h-12 bg-[#EFE4F6] rounded-lg flex items-center justify-center mb-3">
                    <Settings className="w-6 h-6 text-[#684D8A]" />
                  </div>
                  <h3 className="font-bold text-[#4A3F35] mb-1">Settings</h3>
                  <p className="text-sm text-[#6B625A]">Manage preferences</p>
                </button>

                <button className="bg-white border border-[#E8E1D5] rounded-xl shadow-md p-6 hover:shadow-xl transition-all hover:scale-[1.02] text-left">
                  <div className="w-12 h-12 bg-[#E3F6EB] rounded-lg flex items-center justify-center mb-3">
                    <Utensils className="w-6 h-6 text-[#3C7A55]" />
                  </div>
                  <h3 className="font-bold text-[#4A3F35] mb-1">Favorites</h3>
                  <p className="text-sm text-[#6B625A]">Saved restaurants</p>
                </button>
              </div>

              {/* Bookings Section */}
              <div className="bg-white border border-[#E8E1D5] rounded-2xl shadow-md p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-[#4A3F35]">
                    My Bookings
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-[#6B625A]">
                      {bookings.length} total
                    </span>
                    <button
                      onClick={() => user && fetchBookings(user._id)}
                      disabled={loadingBookings}
                      className="p-2 hover:bg-[#FFF8E7] rounded-lg transition disabled:opacity-50"
                      title="Refresh bookings"
                    >
                      <svg
                        className={`w-5 h-5 text-[#8B6F3E] ${loadingBookings ? 'animate-spin' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                {loadingBookings ? (
                  <div className="text-center py-12">
                    <div className="animate-spin w-12 h-12 border-4 border-[#C9A050] border-t-transparent rounded-full mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading bookings...</p>
                  </div>
                ) : bookings.length === 0 ? (
                  <div className="text-center py-12">
                    <Utensils className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h4 className="text-lg font-semibold text-gray-700 mb-2">No bookings yet</h4>
                    <p className="text-gray-500 mb-4">Start exploring restaurants and make your first reservation!</p>
                    <button
                      onClick={() => router.push("/")}
                      className="px-6 py-2 bg-[#C9A050] text-white rounded-lg hover:bg-[#8B6F3E] transition"
                    >
                      Browse Restaurants
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {bookings.map((booking) => (
                      <div
                        key={booking._id}
                        className="flex flex-col md:flex-row md:items-center gap-4 p-4 bg-[#FAF6EF] rounded-xl hover:bg-[#F3EAD8] transition-all border border-[#E8E1D5]"
                      >
                        {/* Booking Info */}
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-bold text-[#4A3F35] text-lg">{booking.restaurantName}</h4>
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${getStatusBadge(booking.status)}`}>
                              {booking.status}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-4 text-sm text-[#6B625A]">
                            <span className="flex items-center gap-1">
                              <CalendarDays className="w-4 h-4" />
                              {new Date(booking.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {booking.time}
                            </span>
                            <span className="flex items-center gap-1">
                              <UsersIcon className="w-4 h-4" />
                              {booking.people} {booking.people === 1 ? 'Guest' : 'Guests'}
                            </span>
                            <span className="font-semibold text-[#C9A050]">
                              ₹{booking.amount}
                            </span>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-2">
                          {canEditOrCancel(booking) && (
                            <>
                              <button
                                onClick={() => handleEditBooking(booking)}
                                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition flex items-center gap-1"
                              >
                                <Edit2 className="w-4 h-4" />
                                Edit
                              </button>
                              <button
                                onClick={() => handleCancelBooking(booking._id)}
                                className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold rounded-lg transition flex items-center gap-1"
                              >
                                <XCircle className="w-4 h-4" />
                                Cancel
                              </button>
                            </>
                          )}
                          {booking.status === "cancelled" && (
                            <button
                              onClick={() => handleDeleteBooking(booking._id)}
                              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded-lg transition flex items-center gap-1"
                            >
                              <Trash2 className="w-4 h-4" />
                              Delete
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {showEditModal && editingBooking && (
        <EditBookingModal
          booking={editingBooking}
          onClose={() => {
            setShowEditModal(false);
            setEditingBooking(null);
          }}
          onSave={handleSaveBooking}
        />
      )}

      <Footer />
    </>
  );
}
