"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // ✅ Add this
import { Search } from "lucide-react";

export default function Navbar() {
  const [location, setLocation] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [user, setUser] = useState(null);
  const router = useRouter();

  // 🧠 Detect login status (Next.js client)
  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) setUser(JSON.parse(stored));
  
    const handleUserChange = () => {
      const updatedUser = localStorage.getItem("user");
      setUser(updatedUser ? JSON.parse(updatedUser) : null);
    };
  
    window.addEventListener("userUpdated", handleUserChange);
    return () => window.removeEventListener("userUpdated", handleUserChange);
  }, []);


  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    console.log(`Searching for "${value}" in "${location}"`);
  };

  return (
    <nav className="w-full bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-2 py-4">
        {/* 🔴 Logo */}
        <Link href="/" className="text-2xl font-bold text-red-600 whitespace-nowrap">
          DineX
        </Link>

        {/* 🔍 Search + Location */}
        <div className="flex items-center gap-3 flex-1 mx-6">
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-gray-50 w-1/3">
            <span className="text-red-500 mr-2">📍</span>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter location"
              className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-500"
            />
          </div>

          <div className="relative flex items-center border border-gray-300 rounded-lg bg-gray-50 w-2/3 px-3 py-2">
            <Search className="w-4 h-4 text-gray-500 absolute left-4" />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search for restaurant, cuisine or dish..."
              className="w-full pl-9 bg-transparent outline-none text-gray-800 placeholder-gray-500"
            />
          </div>
        </div>

        {/* 👤 Auth/Profile Section */}
        <div className="flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-3">
              <Link href="/profile" className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-semibold">
                  {user.name ? user.name[0].toUpperCase() : "U"}
                </div>
                <span className="font-medium text-gray-700 hover:text-red-500">
                  {user.name?.split(" ")[0] || "Profile"}
                </span>
              </Link>
            </div>
          ) : (
            <>
              <Link href="/login" className="text-gray-600 hover:text-red-500">
                Login
              </Link>
              <Link href="/signup" className="text-gray-600 hover:text-red-500">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
