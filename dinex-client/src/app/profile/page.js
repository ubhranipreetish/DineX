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
} from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

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

                {/* Role Badge */}
                <div
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm mb-6 ${
                    user.role === "customer"
                      ? "bg-[#E3EFFA] text-[#3C5A78]"
                      : "bg-[#EFE4F6] text-[#684D8A]"
                  }`}
                >
                  {user.role === "customer" ? (
                    <User className="w-4 h-4" />
                  ) : (
                    <Utensils className="w-4 h-4" />
                  )}
                  {user.role === "customer" ? "Customer" : "Restaurant Owner"}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6 pt-6 border-t border-[#E8E1D5]">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-[#C9A050]">12</p>
                    <p className="text-xs text-[#6B625A]">Bookings</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-[#C9A050]">8</p>
                    <p className="text-xs text-[#6B625A]">Reviews</p>
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
                    <span className="font-semibold text-[#4A3F35]">Jan 2024</span>
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

              {/* Recent Bookings */}
              <div className="bg-white border border-[#E8E1D5] rounded-2xl shadow-md p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-[#4A3F35]">
                    Recent Bookings
                  </h3>
                  <button className="text-sm text-[#C9A050] hover:text-[#8B6F3E] font-semibold">
                    View All →
                  </button>
                </div>
                <div className="space-y-4">
                  {/* Booking Item 1 */}
                  <div className="flex items-center gap-4 p-4 bg-[#FAF6EF] rounded-xl hover:bg-[#F3EAD8] transition-all cursor-pointer">
                    <img
                      src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=100&h=100&fit=crop"
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-bold text-[#4A3F35]">The Great Kabab Factory</h4>
                      <p className="text-sm text-[#6B625A]">
                        Dec 28, 2024 • 8:00 PM • 4 Guests
                      </p>
                    </div>
                    <span className="px-3 py-1 bg-[#E3F6EB] text-[#3C7A55] rounded-full text-xs font-semibold">
                      Confirmed
                    </span>
                  </div>

                  {/* Booking 2 */}
                  <div className="flex items-center gap-4 p-4 bg-[#FAF6EF] rounded-xl hover:bg-[#F3EAD8] transition-all cursor-pointer">
                    <img
                      src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=100&h=100&fit=crop"
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-bold text-[#4A3F35]">Indian Accent</h4>
                      <p className="text-sm text-[#6B625A]">
                        Dec 25, 2024 • 7:30 PM • 2 Guests
                      </p>
                    </div>
                    <span className="px-3 py-1 bg-[#E3EFFA] text-[#3C5A78] rounded-full text-xs font-semibold">
                      Completed
                    </span>
                  </div>

                  {/* Booking 3 */}
                  <div className="flex items-center gap-4 p-4 bg-[#FAF6EF] rounded-xl hover:bg-[#F3EAD8] transition-all cursor-pointer">
                    <img
                      src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=100&h=100&fit=crop"
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-bold text-[#4A3F35]">Bukhara</h4>
                      <p className="text-sm text-[#6B625A]">
                        Dec 20, 2024 • 9:00 PM • 6 Guests
                      </p>
                    </div>
                    <span className="px-3 py-1 bg-[#E3EFFA] text-[#3C5A78] rounded-full text-xs font-semibold">
                      Completed
                    </span>
                  </div>
                </div>
              </div>

              {/* Preferences */}
              <div className="bg-white border border-[#E8E1D5] rounded-2xl shadow-md p-6">
                <h3 className="text-xl font-bold text-[#4A3F35] mb-6">
                  Preferences
                </h3>

                <div className="space-y-4">

                  {/* Email Notifications */}
                  <div className="flex items-center justify-between p-4 bg-[#FAF6EF] rounded-xl">
                    <div>
                      <h4 className="font-semibold text-[#4A3F35]">
                        Email Notifications
                      </h4>
                      <p className="text-sm text-[#6B625A]">
                        Get booking confirmations via email
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#C9A050]"></div>
                    </label>
                  </div>

                  {/* SMS */}
                  <div className="flex items-center justify-between p-4 bg-[#FAF6EF] rounded-xl">
                    <div>
                      <h4 className="font-semibold text-[#4A3F35]">SMS Alerts</h4>
                      <p className="text-sm text-[#6B625A]">
                        Receive booking reminders via SMS
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#C9A050]"></div>
                    </label>
                  </div>

                  {/* Promotions */}
                  <div className="flex items-center justify-between p-4 bg-[#FAF6EF] rounded-xl">
                    <div>
                      <h4 className="font-semibold text-[#4A3F35]">
                        Promotional Offers
                      </h4>
                      <p className="text-sm text-[#6B625A]">
                        Get special deals and discounts
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#C9A050]"></div>
                    </label>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
