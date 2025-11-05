"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-md bg-white">
      <Link href="/" className="text-2xl font-bold text-red-600">
        DineX
      </Link>
      <div className="flex gap-6">
        <Link href="/login" className="text-red-400 hover:text-red-600">Login</Link>
        <Link href="/signup" className="text-red-400 hover:text-red-600">Signup</Link>
      </div>
    </nav>
  );
}
