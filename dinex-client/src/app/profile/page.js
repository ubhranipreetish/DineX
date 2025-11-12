"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { User, Mail, Utensils, LogOut, CalendarDays, MapPin, Phone, Edit2, Settings, History } from "lucide-react";

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      setUser(JSON.parse(stored));
    } else {
      router.push("/login");
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.dispatchEvent(new Event("userUpdated"));
    router.push("/");
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Section - Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              {/* Avatar */}
              <div className="relative inline-block mb-4">
                <div className="w-32 h-32 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                  {user.name?.charAt(0).toUpperCase()}
                </div>
                <button className="absolute bottom-0 right-0 w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition shadow-lg">
                  <Edit2 className="w-4 h-4" />
                </button>
              </div>

              {/* User Info */}
              <h2 className="text-2xl font-bold text-gray-800 mb-1">{user.name}</h2>
              <p className="text-sm text-gray-500 mb-4 flex items-center justify-center gap-1">
                <Mail className="w-4 h-4" />
                {user.email}
              </p>

              {/* Role Badge */}
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm mb-6 ${
                user.role === 'customer' 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'bg-purple-100 text-purple-700'
              }`}>
                {user.role === 'customer' ? <User className="w-4 h-4" /> : <Utensils className="w-4 h-4" />}
                {user.role === 'customer' ? 'Customer' : 'Restaurant Owner'}
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <p className="text-2xl font-bold text-red-600">12</p>
                  <p className="text-xs text-gray-500">Bookings</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-red-600">8</p>
                  <p className="text-xs text-gray-500">Reviews</p>
                </div>
              </div>

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <LogOut className="w-5 h-5" />
                Logout
              </button>
            </div>

            {/* Additional Info Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mt-4">
              <h3 className="font-bold text-gray-800 mb-4">Account Details</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <CalendarDays className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">Joined:</span>
                  <span className="font-semibold text-gray-800">Jan 2024</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">Phone:</span>
                  <span className="font-semibold text-gray-800">+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">Location:</span>
                  <span className="font-semibold text-gray-800">New Delhi</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Action Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all transform hover:scale-[1.02] text-left">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                  <History className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-800 mb-1">Booking History</h3>
                <p className="text-sm text-gray-500">View all bookings</p>
              </button>

              <button className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all transform hover:scale-[1.02] text-left">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                  <Settings className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-bold text-gray-800 mb-1">Settings</h3>
                <p className="text-sm text-gray-500">Manage preferences</p>
              </button>

              <button className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all transform hover:scale-[1.02] text-left">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                  <Utensils className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-bold text-gray-800 mb-1">Favorites</h3>
                <p className="text-sm text-gray-500">Saved restaurants</p>
              </button>
            </div>

            {/* Recent Bookings */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-800">Recent Bookings</h3>
                <button className="text-sm text-red-600 hover:text-red-700 font-semibold">
                  View All →
                </button>
              </div>

              <div className="space-y-4">
                {/* Booking Item 1 */}
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all cursor-pointer">
                  <img
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=100&h=100&fit=crop"
                    alt="Restaurant"
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800">The Great Kabab Factory</h4>
                    <p className="text-sm text-gray-600">Dec 28, 2024 • 8:00 PM • 4 Guests</p>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                    Confirmed
                  </span>
                </div>

                {/* Booking Item 2 */}
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all cursor-pointer">
                  <img
                    src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=100&h=100&fit=crop"
                    alt="Restaurant"
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800">Indian Accent</h4>
                    <p className="text-sm text-gray-600">Dec 25, 2024 • 7:30 PM • 2 Guests</p>
                  </div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                    Completed
                  </span>
                </div>

                {/* Booking Item 3 */}
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all cursor-pointer">
                  <img
                    src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=100&h=100&fit=crop"
                    alt="Restaurant"
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800">Bukhara</h4>
                    <p className="text-sm text-gray-600">Dec 20, 2024 • 9:00 PM • 6 Guests</p>
                  </div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                    Completed
                  </span>
                </div>
              </div>
            </div>

            {/* Preferences */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Preferences</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div>
                    <h4 className="font-semibold text-gray-800">Email Notifications</h4>
                    <p className="text-sm text-gray-500">Get booking confirmations via email</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div>
                    <h4 className="font-semibold text-gray-800">SMS Alerts</h4>
                    <p className="text-sm text-gray-500">Receive booking reminders via SMS</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div>
                    <h4 className="font-semibold text-gray-800">Promotional Offers</h4>
                    <p className="text-sm text-gray-500">Get special deals and discounts</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}