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
  Star,
  Bell,
  Lock,
  Globe,
  Shield,
  CreditCard,
  CheckCircle2,
} from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import EditBookingModal from "@/components/EditBookingModal";
import { API } from "@/utils/api";
import { useNotification } from "@/context/NotificationContext";

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [loadingBookings, setLoadingBookings] = useState(true);
  const [editingBooking, setEditingBooking] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [activeTab, setActiveTab] = useState("bookings");
  const router = useRouter();
  const { showToast, showDialog } = useNotification();

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
      router.push("/customer/login");
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
    localStorage.removeItem("userToken");
    localStorage.removeItem("user");
    window.dispatchEvent(new Event("userUpdated"));
    router.push("/customer/home");
  };

  const handleEditBooking = (booking) => {
    setEditingBooking(booking);
    setShowEditModal(true);
  };

  const handleSaveBooking = async (updateData) => {
    try {
      await API.patch(`/api/bookings/${editingBooking._id}`, updateData);
      showToast("Booking updated successfully!", "success");
      setShowEditModal(false);
      setEditingBooking(null);
      fetchBookings(user._id);
    } catch (error) {
      console.error("Error updating booking:", error);
      throw error;
    }
  };

  const handleCancelBooking = async (bookingId) => {
    const confirmed = await showDialog({
      title: "Cancel Booking",
      message: "Are you sure you want to cancel this booking?",
      confirmText: "Yes, Cancel",
      cancelText: "Keep Booking",
      type: "warning",
    });
    if (!confirmed) return;

    try {
      await API.patch(`/api/bookings/${bookingId}/cancel`);
      showToast("Booking cancelled successfully!", "success");
      fetchBookings(user._id);
    } catch (error) {
      console.error("Error cancelling booking:", error);
      showToast(error.response?.data?.msg || "Failed to cancel booking", "error");
    }
  };

  const handleDeleteBooking = async (bookingId) => {
    const confirmed = await showDialog({
      title: "Delete Booking",
      message: "Are you sure you want to permanently delete this booking?",
      confirmText: "Delete",
      cancelText: "Cancel",
      type: "danger",
    });
    if (!confirmed) return;

    try {
      await API.delete(`/api/bookings/${bookingId}`);
      showToast("Booking deleted successfully!", "success");
      fetchBookings(user._id);
    } catch (error) {
      console.error("Error deleting booking:", error);
      showToast(error.response?.data?.msg || "Failed to delete booking", "error");
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

  // Get random restaurant image
  const getRestaurantImage = (index) => {
    const images = [
      "/images/ambience/amb1.png",
      "/images/ambience/amb2.png",
      "/images/ambience/amb3.png",
      "/images/ambience/amb4.png",
      "/images/ambience/amb5.png",
      "/images/cafe/cafe1.png",
      "/images/cafe/cafe2.png",
      "/images/cafe/cafe3.png",
      "/images/food/food1.png",
      "/images/food/food2.png",
    ];
    return images[index % images.length];
  };

  // Dummy reviews data
  const dummyReviews = [
    {
      id: 1,
      restaurantName: "The Grand Brasserie",
      image: "/images/ambience/amb1.png",
      rating: 5,
      text: "Amazing experience! The food was exceptional and the service was top-notch. Highly recommend the signature pasta.",
      date: "2023-11-15",
    },
    {
      id: 2,
      restaurantName: "Ocean's Catch",
      image: "/images/food/food1.png",
      rating: 4,
      text: "Great seafood selection. The ambiance was lovely and perfect for a romantic dinner.",
      date: "2023-11-10",
    },
    {
      id: 3,
      restaurantName: "Pasta Palace",
      image: "/images/cafe/cafe1.png",
      rating: 5,
      text: "Best Italian food in town! The carbonara was absolutely divine. Will definitely come back.",
      date: "2023-10-28",
    },
  ];

  if (!user) return null;

  const upcomingBookings = bookings.filter(b => b.status === "confirmed");
  const pastBookings = bookings.filter(b => b.status === "completed" || b.status === "cancelled");

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#FFF8E7] py-8 px-4">
        <div className="max-w-7xl mx-auto">

          {/* TOP SECTION - User Info */}
          <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 mb-6 border border-[#E8E1D5]">
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 text-center sm:text-left">
                {/* Avatar */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-[#5E4633] rounded-full flex items-center justify-center text-white text-2xl sm:text-3xl font-bold shadow-md flex-shrink-0">
                  {user.name?.charAt(0).toUpperCase()}
                </div>

                {/* User Details */}
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-[#4A3F35] mb-1">
                    {user.name}
                  </h1>
                  <p className="text-[#6B625A] flex items-center justify-center sm:justify-start gap-2 mb-2 text-sm sm:text-base">
                    <Mail className="w-4 h-4" />
                    <span className="break-all">{user.email}</span>
                  </p>
                  <p className="text-xs sm:text-sm text-[#8B7355]">
                    Member since {new Date(user.createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                  </p>
                </div>
              </div>

              {/* Edit Profile Button */}
              {/* <button className="w-full sm:w-auto bg-[#1E3A5F] hover:bg-[#2C4F7C] text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-xl transition-all shadow-md hover:shadow-xl flex items-center justify-center gap-2 text-sm sm:text-base">
                <Edit2 className="w-4 h-4" />
                Edit Profile
              </button> */}
            </div>
          </div>

          {/* MAIN CONTENT - Sidebar + Content Area */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

            {/* LEFT SIDEBAR - Tabs */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-3 sm:p-4 border border-[#E8E1D5]">
                <nav className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible gap-2 lg:space-y-2">
                  <button
                    onClick={() => setActiveTab("bookings")}
                    className={`flex items-center gap-2 lg:gap-3 px-3 lg:px-4 py-2 lg:py-3 rounded-xl transition-all whitespace-nowrap text-sm lg:text-base ${activeTab === "bookings"
                      ? "bg-[#E8F0FE] text-[#1E3A5F] font-semibold"
                      : "text-[#6B625A] hover:bg-[#FFF8E7]"
                      }`}
                  >
                    <CalendarDays className="w-4 h-4 lg:w-5 lg:h-5" />
                    <span className="hidden sm:inline">Your Bookings</span>
                    <span className="sm:hidden">Bookings</span>
                  </button>

                  <button
                    onClick={() => setActiveTab("reviews")}
                    className={`flex items-center gap-2 lg:gap-3 px-3 lg:px-4 py-2 lg:py-3 rounded-xl transition-all whitespace-nowrap text-sm lg:text-base ${activeTab === "reviews"
                      ? "bg-[#E8F0FE] text-[#1E3A5F] font-semibold"
                      : "text-[#6B625A] hover:bg-[#FFF8E7]"
                      }`}
                  >
                    <Star className="w-4 h-4 lg:w-5 lg:h-5" />
                    Reviews
                  </button>

                  <button
                    onClick={() => setActiveTab("settings")}
                    className={`flex items-center gap-2 lg:gap-3 px-3 lg:px-4 py-2 lg:py-3 rounded-xl transition-all whitespace-nowrap text-sm lg:text-base ${activeTab === "settings"
                      ? "bg-[#E8F0FE] text-[#1E3A5F] font-semibold"
                      : "text-[#6B625A] hover:bg-[#FFF8E7]"
                      }`}
                  >
                    <Settings className="w-4 h-4 lg:w-5 lg:h-5" />
                    Settings
                  </button>
                </nav>

                {/* Logout Button */}
                <div className="hidden lg:block mt-4 pt-4 border-t border-[#E8E1D5]">
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-[#5E4633] hover:bg-[#4A372A] text-white font-semibold transition-all shadow-md hover:shadow-xl"
                  >
                    <LogOut className="w-5 h-5" />
                    Logout
                  </button>
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT AREA */}
            <div className="lg:col-span-3">

              {/* YOUR BOOKINGS TAB */}
              {activeTab === "bookings" && (
                <div className="space-y-6">

                  {/* Upcoming Bookings */}
                  <div className="bg-white rounded-2xl shadow-lg p-6 border border-[#E8E1D5]">
                    <h2 className="text-2xl font-bold text-[#4A3F35] mb-6">Upcoming Bookings</h2>

                    {loadingBookings ? (
                      <div className="text-center py-12">
                        <div className="animate-spin w-12 h-12 border-4 border-[#C9A050] border-t-transparent rounded-full mx-auto mb-4"></div>
                        <p className="text-gray-600">Loading bookings...</p>
                      </div>
                    ) : upcomingBookings.length === 0 ? (
                      <div className="text-center py-12">
                        <Utensils className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                        <h4 className="text-lg font-semibold text-gray-700 mb-2">No upcoming bookings</h4>
                        <p className="text-gray-500 mb-4">Start exploring restaurants and make your first reservation!</p>
                        <button
                          onClick={() => router.push("/customer/home")}
                          className="px-6 py-2 bg-[#C9A050] text-white rounded-lg hover:bg-[#8B6F3E] transition"
                        >
                          Browse Restaurants
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {upcomingBookings.map((booking, index) => (
                          <div
                            key={booking._id}
                            className="flex flex-col sm:flex-row gap-3 sm:gap-4 p-3 sm:p-4 bg-[#FAF6EF] rounded-xl hover:bg-[#F3EAD8] transition-all border border-[#E8E1D5]">
                            {/* Restaurant Image */}
                            <img
                              src={getRestaurantImage(index)}
                              alt={booking.restaurantName}
                              className="w-full sm:w-20 md:w-24 h-32 sm:h-20 md:h-24 rounded-lg object-cover flex-shrink-0"
                            />

                            {/* Booking Details */}
                            <div className="flex-1 min-w-0">
                              <div className="flex flex-col sm:flex-row items-start justify-between mb-2 gap-2">
                                <h3 className="font-bold text-[#4A3F35] text-base sm:text-lg truncate">{booking.restaurantName}</h3>
                                <span className={`px-3 py-1 rounded-full text-xs font-semibold capitalize flex items-center gap-1 whitespace-nowrap ${getStatusBadge(booking.status)}`}>
                                  <CheckCircle2 className="w-3 h-3" />
                                  {booking.status}
                                </span>
                              </div>

                              <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-[#6B625A] mb-3">
                                <span className="flex items-center gap-1">
                                  <CalendarDays className="w-3 h-3 sm:w-4 sm:h-4" />
                                  {new Date(booking.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                                  {booking.time}
                                </span>
                                <span className="flex items-center gap-1">
                                  <UsersIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                                  {booking.people} {booking.people === 1 ? 'Guest' : 'Guests'}
                                </span>
                              </div>

                              {/* Special Requests */}
                              {booking.specialRequests && (
                                <div className="mb-3 text-xs sm:text-sm">
                                  <span className="text-[#8B7355] font-semibold">Special Requests: </span>
                                  <span className="text-[#6B625A]">{booking.specialRequests}</span>
                                </div>
                              )}

                              {/* Action Buttons */}
                              <div className="flex flex-wrap gap-2">
                                {canEditOrCancel(booking) && (
                                  <>
                                    <button
                                      onClick={() => handleEditBooking(booking)}
                                      className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold rounded-lg transition flex items-center gap-1"
                                    >
                                      <Edit2 className="w-3 h-3 sm:w-4 sm:h-4" />
                                      Edit
                                    </button>
                                    <button
                                      onClick={() => handleCancelBooking(booking._id)}
                                      className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white border-2 border-gray-300 hover:border-gray-400 text-gray-700 text-xs sm:text-sm font-semibold rounded-lg transition"
                                    >
                                      Cancel
                                    </button>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Past Bookings */}
                  <div className="bg-white rounded-2xl shadow-lg p-6 border border-[#E8E1D5]">
                    <h2 className="text-2xl font-bold text-[#4A3F35] mb-6">Past Bookings</h2>

                    {pastBookings.length === 0 ? (
                      <div className="text-center py-12">
                        <History className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                        <p className="text-gray-500">No past bookings yet</p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {pastBookings.map((booking, index) => (
                          <div
                            key={booking._id}
                            className="flex flex-col sm:flex-row gap-3 sm:gap-4 p-3 sm:p-4 bg-[#FAF6EF] rounded-xl hover:bg-[#F3EAD8] transition-all border border-[#E8E1D5]"
                          >
                            {/* Restaurant Image */}
                            <img
                              src={getRestaurantImage(index + upcomingBookings.length)}
                              alt={booking.restaurantName}
                              className="w-full sm:w-20 md:w-24 h-32 sm:h-20 md:h-24 rounded-lg object-cover flex-shrink-0"
                            />

                            {/* Booking Details */}
                            <div className="flex-1 min-w-0">
                              <div className="flex flex-col sm:flex-row items-start justify-between mb-2 gap-2">
                                <h3 className="font-bold text-[#4A3F35] text-base sm:text-lg truncate">{booking.restaurantName}</h3>
                                <span className={`px-3 py-1 rounded-full text-xs font-semibold capitalize whitespace-nowrap ${getStatusBadge(booking.status)}`}>
                                  {booking.status}
                                </span>
                              </div>

                              <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-[#6B625A] mb-3">
                                <span className="flex items-center gap-1">
                                  <CalendarDays className="w-3 h-3 sm:w-4 sm:h-4" />
                                  {new Date(booking.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                                  {booking.time}
                                </span>
                                <span className="flex items-center gap-1">
                                  <UsersIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                                  {booking.people} {booking.people === 1 ? 'Guest' : 'Guests'}
                                </span>
                              </div>

                              {/* Special Requests */}
                              {booking.specialRequests && (
                                <div className="mb-3 text-xs sm:text-sm">
                                  <span className="text-[#8B7355] font-semibold">Special Requests: </span>
                                  <span className="text-[#6B625A]">{booking.specialRequests}</span>
                                </div>
                              )}

                              {/* Action Buttons */}
                              <div className="flex flex-wrap gap-2">
                                {booking.status === "completed" && (
                                  <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#FFD700] hover:bg-[#FFC700] text-[#4A3F35] text-xs sm:text-sm font-semibold rounded-lg transition">
                                    Write a Review
                                  </button>
                                )}
                                {booking.status === "cancelled" && (
                                  <button
                                    onClick={() => handleDeleteBooking(booking._id)}
                                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-semibold rounded-lg transition flex items-center gap-1"
                                  >
                                    <Trash2 className="w-3 h-3 sm:w-4 sm:h-4" />
                                    Delete
                                  </button>
                                )}
                                {booking.status === "completed" && (
                                  <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#1E3A5F] hover:bg-[#2C4F7C] text-white text-xs sm:text-sm font-semibold rounded-lg transition">
                                    Book Again
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* REVIEWS TAB */}
              {activeTab === "reviews" && (
                <div className="bg-white rounded-2xl shadow-lg p-3 sm:p-4 md:p-6 border border-[#E8E1D5]">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#4A3F35] mb-4 sm:mb-6">Your Reviews</h2>

                  <div className="space-y-3 sm:space-y-4">
                    {dummyReviews.map((review) => (
                      <div
                        key={review.id}
                        className="flex flex-col sm:flex-row gap-3 sm:gap-4 p-3 sm:p-4 bg-[#FAF6EF] rounded-xl border border-[#E8E1D5]"
                      >
                        {/* Restaurant Image */}
                        <img
                          src={review.image}
                          alt={review.restaurantName}
                          className="w-full sm:w-20 md:w-24 h-32 sm:h-20 md:h-24 rounded-lg object-cover flex-shrink-0"
                        />

                        {/* Review Details */}
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                            <h3 className="font-bold text-[#4A3F35] text-base sm:text-lg truncate">{review.restaurantName}</h3>
                            <div className="flex items-center gap-0.5 sm:gap-1 flex-shrink-0">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0 ${i < review.rating
                                    ? "fill-[#FFD700] text-[#FFD700]"
                                    : "text-gray-300"
                                    }`}
                                />
                              ))}
                            </div>
                          </div>

                          <p className="text-[#6B625A] mb-2 text-sm sm:text-base line-clamp-2">{review.text}</p>

                          <p className="text-xs sm:text-sm text-[#8B7355]">
                            Posted on {new Date(review.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SETTINGS TAB */}
              {activeTab === "settings" && (
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-[#E8E1D5]">
                  <h2 className="text-2xl font-bold text-[#4A3F35] mb-6">Settings</h2>

                  <div className="space-y-6">

                    {/* Notification Preferences */}
                    <div className="border-b border-[#E8E1D5] pb-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-[#E8F0FE] rounded-lg flex items-center justify-center">
                          <Bell className="w-5 h-5 text-[#1E3A5F]" />
                        </div>
                        <h3 className="text-lg font-bold text-[#4A3F35]">Notification Preferences</h3>
                      </div>
                      <div className="space-y-3 ml-13">
                        <label className="flex items-center justify-between cursor-pointer">
                          <span className="text-[#6B625A]">Email notifications</span>
                          <input type="checkbox" defaultChecked className="w-5 h-5 text-[#1E3A5F] rounded" />
                        </label>
                        <label className="flex items-center justify-between cursor-pointer">
                          <span className="text-[#6B625A]">SMS notifications</span>
                          <input type="checkbox" defaultChecked className="w-5 h-5 text-[#1E3A5F] rounded" />
                        </label>
                        <label className="flex items-center justify-between cursor-pointer">
                          <span className="text-[#6B625A]">Promotional offers</span>
                          <input type="checkbox" className="w-5 h-5 text-[#1E3A5F] rounded" />
                        </label>
                      </div>
                    </div>

                    {/* Privacy Settings */}
                    <div className="border-b border-[#E8E1D5] pb-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-[#EFE4F6] rounded-lg flex items-center justify-center">
                          <Lock className="w-5 h-5 text-[#684D8A]" />
                        </div>
                        <h3 className="text-lg font-bold text-[#4A3F35]">Privacy Settings</h3>
                      </div>
                      <div className="space-y-3 ml-13">
                        <label className="flex items-center justify-between cursor-pointer">
                          <span className="text-[#6B625A]">Show profile to public</span>
                          <input type="checkbox" className="w-5 h-5 text-[#684D8A] rounded" />
                        </label>
                        <label className="flex items-center justify-between cursor-pointer">
                          <span className="text-[#6B625A]">Share dining history</span>
                          <input type="checkbox" className="w-5 h-5 text-[#684D8A] rounded" />
                        </label>
                      </div>
                    </div>

                    {/* Account Settings */}
                    <div className="border-b border-[#E8E1D5] pb-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-[#E3F6EB] rounded-lg flex items-center justify-center">
                          <Shield className="w-5 h-5 text-[#3C7A55]" />
                        </div>
                        <h3 className="text-lg font-bold text-[#4A3F35]">Account Settings</h3>
                      </div>
                      <div className="space-y-3 ml-13">
                        <button className="text-[#6B625A] hover:text-[#4A3F35] transition text-left">
                          Change password
                        </button>
                        <br />
                        <button className="text-[#6B625A] hover:text-[#4A3F35] transition text-left">
                          Update email address
                        </button>
                        <br />
                        <button className="text-red-600 hover:text-red-700 transition text-left">
                          Delete account
                        </button>
                      </div>
                    </div>

                    {/* Language Preferences */}
                    <div className="pb-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-[#FFF3E0] rounded-lg flex items-center justify-center">
                          <Globe className="w-5 h-5 text-[#C9A050]" />
                        </div>
                        <h3 className="text-lg font-bold text-[#4A3F35]">Language Preferences</h3>
                      </div>
                      <div className="ml-13">
                        <select className="w-full max-w-xs px-4 py-2 border border-[#E8E1D5] rounded-lg text-[#6B625A] focus:outline-none focus:border-[#C9A050]">
                          <option>English</option>
                          <option>Hindi</option>
                          <option>Spanish</option>
                          <option>French</option>
                        </select>
                      </div>
                    </div>

                    {/* Save Button */}
                    <div className="pt-4">
                      <button className="w-full bg-[#1E3A5F] hover:bg-[#2C4F7C] text-white font-semibold py-3 px-6 rounded-xl transition-all shadow-md hover:shadow-xl">
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Logout Button - Visible only on small screens */}
          <div className="lg:hidden mt-6">
            <button
              onClick={handleLogout}
              className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl bg-[#5E4633] hover:bg-[#4A372A] text-white font-semibold transition-all shadow-md hover:shadow-xl"
            >
              <LogOut className="w-5 h-5" />
              Logout
            </button>
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
