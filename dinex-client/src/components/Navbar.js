"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; 
import { Search } from "lucide-react";

export default function Navbar({ onSearch }) {
  const [location, setLocation] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const res = await fetch(
              `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
            );
            const data = await res.json();
            setLocation(`${data.address.amenity}, ${data.address.city}` || "Your Area");
          } catch (error) {
            setLocation("Unknown Location");
          }
        },
        () => {
          setLocation("Location Access Denied");
        }
      );
    } else {
      setLocation("Location Unavailable");
    }
  }, []);

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
    onSearch(value);    // ⬅ send search to parent
  };
  

  return (
    <nav className="w-full bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-2 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center whitespace-nowrap">
          <Image
            src="/images/logo2.png"
            alt="DineX Logo"
            width={100}
            height={40}
            unoptimized
            className="object-contain"
          />
        </Link>

        {/* 🔍 Search + Location */}
        <div className="flex items-center gap-3 flex-1 mx-6">
          <div className="flex items-center border border-[#C9A050] rounded-lg px-3 py-2 bg-[#FFF8E7] w-1/3">
            <span className="text-[#C9A050] mr-2">📍</span>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter location"
              className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-500"
            />
          </div>

          <div className="relative flex items-center border border-[#C9A050] rounded-lg bg-[#FFF8E7] w-2/3 px-3 py-2">
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
                <div className="w-9 h-9 rounded-full bg-[#FFF8E7] text-[#8B6F3E] flex items-center justify-center font-semibold">
                  {user.name ? user.name[0].toUpperCase() : "U"}
                </div>
                <span className="font-medium text-gray-700 hover:text-[#C9A050]">
                  {user.name?.split(" ")[0] || "Profile"}
                </span>
              </Link>
            </div>
          ) : (
            <>
              <Link href="/login" className="text-gray-600 hover:text-[#C9A050]">
                Login
              </Link>
              <Link href="/signup" className="text-gray-600 hover:text-[#C9A050]">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
