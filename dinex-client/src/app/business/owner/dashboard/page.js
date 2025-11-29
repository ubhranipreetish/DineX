"use client";
import Link from "next/link";
import DashboardNav from "../components/DashboardNav";
import { useBusinessData } from "../context/BusinessDataContext";
import Footer from "@/components/Footer";

export default function OwnerDashboard() {
    const { ownerData, staff, isLoading } = useBusinessData();

    if (isLoading) {
        return (
            <div className="min-h-screen bg-[#FFF8E7] flex items-center justify-center">
                <div className="animate-spin w-12 h-12 border-4 border-[#C9A050] border-t-transparent rounded-full"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#FFF8E7]">
            <DashboardNav />

            {/* FULLSCREEN HERO SECTION */}
            <div className="relative h-screen w-full">
                
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img 
                        src="/images/dashboard-main.png"
                        alt="Restaurant Background"
                        className="w-full h-full object-cover brightness-[0.75]"
                    />
                </div>

                {/* Overlay Dark Gradient (optional but looks premium) */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60"></div>

                {/* Centered Content */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
                    
                    {/* Restaurant Name */}
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-2xl tracking-wide">
                        {ownerData?.restaurant.name}
                    </h1>

                    {/* Subtitle Tags */}
                    <div className="flex flex-wrap items-center justify-center gap-4 mt-6">

                        {/* Location */}
                        <span className="text-white/90 text-xl font-light">
                        {ownerData?.restaurant.address.full}, {ownerData?.restaurant.address.city}, {ownerData?.restaurant.address.state}
                        </span>
                    </div>

                    {/* Optional Tagline */}
                    <p className="text-white/80 text-xl md:text-2xl font-light mt-6 italic">
                        Welcome back, {ownerData?.owner.name}
                    </p>
                </div>
            </div>

            {/* Quick Stats Overview */}
            <div className="max-w-7xl mx-auto px-4 pb-12 sm:px-6 lg:px-8 -mt-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {/* Total Tables */}
                    <div className="bg-white rounded-xl p-6 shadow-xl hover:shadow-2xl transition-shadow">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600 font-medium">Total Tables</p>
                                <p className="text-4xl font-bold text-[#C9A050] mt-2">
                                    {ownerData?.restaurant.totalTables}
                                </p>
                            </div>
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FFF8E7] to-[#F4D483] flex items-center justify-center">
                                <svg className="w-8 h-8 text-[#C9A050]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Active Staff */}
                    <div className="bg-white rounded-xl p-6 shadow-xl hover:shadow-2xl transition-shadow">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600 font-medium">Active Staff</p>
                                <p className="text-4xl font-bold text-[#C9A050] mt-2">
                                    {staff.filter(s => s.isActive).length}
                                </p>
                            </div>
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FFF8E7] to-[#F4D483] flex items-center justify-center">
                                <svg className="w-8 h-8 text-[#C9A050]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Today's Bookings */}
                    <div className="bg-white rounded-xl p-6 shadow-xl hover:shadow-2xl transition-shadow">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600 font-medium">Today's Bookings</p>
                                <p className="text-4xl font-bold text-[#C9A050] mt-2">12</p>
                            </div>
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FFF8E7] to-[#F4D483] flex items-center justify-center">
                                <svg className="w-8 h-8 text-[#C9A050]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Monthly Revenue */}
                    <div className="bg-white rounded-xl p-6 shadow-xl hover:shadow-2xl transition-shadow">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600 font-medium">Monthly Revenue</p>
                                <p className="text-4xl font-bold text-[#C9A050] mt-2">₹2.4L</p>
                            </div>
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FFF8E7] to-[#F4D483] flex items-center justify-center">
                                <svg className="w-8 h-8 text-[#C9A050]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Quick Actions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Analytics Card */}
                        <Link href="/business/owner/analytics" className="group">
                            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#FF6B35] to-[#FF8C42] flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 text-center mb-2">View Analytics</h3>
                                <p className="text-gray-600 text-center text-sm">Track performance, revenue, and customer insights</p>
                            </div>
                        </Link>

                        {/* Settings Card */}
                        <Link href="/business/owner/settings" className="group">
                            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#C9A050] to-[#8B6F3E] flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 text-center mb-2">Manage Settings</h3>
                                <p className="text-gray-600 text-center text-sm">Update restaurant details and preferences</p>
                            </div>
                        </Link>

                        {/* Staff Card */}
                        <Link href="/business/owner/staff" className="group">
                            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#4A90E2] to-[#357ABD] flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 text-center mb-2">Manage Staff</h3>
                                <p className="text-gray-600 text-center text-sm">Add, edit, or remove staff members</p>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-xl p-8 shadow-lg">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Activity</h2>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <p className="font-semibold text-gray-900">New booking received</p>
                                <p className="text-sm text-gray-600">Table for 4 - Tomorrow at 7:00 PM</p>
                            </div>
                            <span className="text-sm text-gray-500">2 hours ago</span>
                        </div>

                        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <p className="font-semibold text-gray-900">New staff member added</p>
                                <p className="text-sm text-gray-600">John Doe joined as Waiter</p>
                            </div>
                            <span className="text-sm text-gray-500">5 hours ago</span>
                        </div>

                        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                            <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                                <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <p className="font-semibold text-gray-900">New review received</p>
                                <p className="text-sm text-gray-600">5 stars - "Amazing food and service!"</p>
                            </div>
                            <span className="text-sm text-gray-500">1 day ago</span>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
