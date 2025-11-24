"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <nav className="w-full bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo2.png"
            alt="DineX Logo"
            width={100}
            height={40}
            unoptimized
            className="object-contain w-[80px] sm:w-[100px] h-auto"
          />
        </Link>

        {/* Auth Buttons / User Profile */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
          {user ? (
            <Link href="/profile" className="flex items-center gap-2">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#FFF8E7] text-[#8B6F3E] flex items-center justify-center font-semibold text-sm sm:text-base">
                {user.name ? user.name[0].toUpperCase() : "U"}
              </div>
              <span className="hidden sm:inline font-medium text-gray-700 hover:text-[#C9A050] text-sm md:text-base">
                {user.name?.split(" ")[0] || "Profile"}
              </span>
            </Link>
          ) : (
            <>
              <Link
                href="/login"
                className="text-gray-600 hover:text-[#C9A050] text-sm md:text-base font-medium transition-colors"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="text-gray-600 hover:text-[#C9A050] text-sm md:text-base font-medium transition-colors"
              >
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
