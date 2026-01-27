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

            {/* MINIMAL DASHBOARD HEADER */}
            <div className="bg-white border-b border-gray-200 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    {/* Left: Identity */}
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">{ownerData?.restaurant.name}</h1>
                        <div className="flex items-center gap-3 mt-2 text-gray-600">
                            <span className="text-sm">{ownerData?.restaurant.address.city}, {ownerData?.restaurant.address.state}</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                            <div className="flex items-center gap-1.5 bg-green-50 text-green-700 px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wide border border-green-100">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                Open Now
                            </div>
                        </div>
                    </div>

                    {/* Right: Operations Context */}
                    <div className="text-right flex flex-col items-end">
                        <p className="text-gray-900 font-medium text-lg">
                            {new Date().toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'short' })}
                        </p>
                        <p className="text-gray-500 text-sm mt-0.5">Welcome back, {ownerData?.owner.name}</p>
                    </div>
                </div>
            </div>

            {/* Quick Stats Overview - Time Sensitive First */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

                    {/* 1. Today's Bookings (Immediate Relevance) */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500 font-medium">Bookings Today</p>
                                <p className="text-xl font-bold text-[#C9A050] mt-2">
                                    <span className="text-3xl text-gray-900">12</span> <span className="text-sm text-gray-400 font-normal">confirmed</span>
                                </p>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center">
                                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* 2. Live Tables (Immediate Relevance) */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500 font-medium">Tables Occupied</p>
                                <div className="flex items-baseline gap-1 mt-2">
                                    <span className="text-3xl font-bold text-gray-900">8</span>
                                    <span className="text-sm text-gray-400">/ {ownerData?.restaurant.totalTables}</span>
                                </div>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center">
                                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* 3. Active Staff (Shift Relevance) */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500 font-medium">Staff on Duty</p>
                                <p className="text-3xl font-bold text-gray-900 mt-2">
                                    {staff.filter(s => s.isActive).length}
                                </p>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center">
                                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* 4. Revenue (Business Relevance) */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500 font-medium">Monthly Revenue</p>
                                <p className="text-3xl font-bold text-gray-900 mt-2">₹2,34,590</p>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center">
                                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content Area: 2 Columns */}
                <div className="max-w-7xl mx-auto pb-12">
                    <div className="flex flex-col lg:flex-row gap-8">

                        {/* Left Column - Live Operations Feed (65%) */}
                        <div className="lg:w-[65%]">
                            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                                <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center">
                                    <h2 className="text-lg font-bold text-gray-900">Live Operations</h2>
                                    <span className="flex items-center gap-2 text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full animate-pulse">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                        Live Updates
                                    </span>
                                </div>

                                <div className="divide-y divide-gray-50">
                                    {/* Entry 1 */}
                                    <div className="p-4 hover:bg-gray-50 transition-colors flex items-center gap-4">
                                        <div className="text-sm font-semibold text-gray-500 w-16 text-right">7:45 PM</div>
                                        <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                                        <div className="flex-1">
                                            <p className="text-gray-900 font-medium">Table 6 <span className="text-gray-400 mx-1">·</span> Party of 2</p>
                                            <p className="text-xs text-gray-500">Pending Confirmation • Walk-in</p>
                                        </div>
                                        <button className="text-sm font-medium text-[#C9A050] hover:text-[#B08D45]">Confirm</button>
                                    </div>

                                    {/* Entry 2 */}
                                    <div className="p-4 hover:bg-gray-50 transition-colors flex items-center gap-4">
                                        <div className="text-sm font-semibold text-gray-500 w-16 text-right">7:30 PM</div>
                                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                        <div className="flex-1">
                                            <p className="text-gray-900 font-medium">Table 4 <span className="text-gray-400 mx-1">·</span> Party of 3</p>
                                            <p className="text-xs text-gray-500">Seated • Server: Rahul S.</p>
                                        </div>
                                        <span className="text-xs font-medium text-green-700 bg-green-50 px-2 py-1 rounded">Active</span>
                                    </div>

                                    {/* Entry 3 */}
                                    <div className="p-4 hover:bg-gray-50 transition-colors flex items-center gap-4">
                                        <div className="text-sm font-semibold text-gray-500 w-16 text-right">7:15 PM</div>
                                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                        <div className="flex-1">
                                            <p className="text-gray-900 font-medium">Order #305 <span className="text-gray-400 mx-1">·</span> Kitchen</p>
                                            <p className="text-xs text-gray-500">2x Butter Chicken, 4x Naan • Table 2</p>
                                        </div>
                                        <span className="text-xs font-medium text-blue-700 bg-blue-50 px-2 py-1 rounded">Cooking</span>
                                    </div>

                                    {/* Entry 4 */}
                                    <div className="p-4 hover:bg-gray-50 transition-colors flex items-center gap-4">
                                        <div className="text-sm font-semibold text-gray-500 w-16 text-right">6:50 PM</div>
                                        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                                        <div className="flex-1">
                                            <p className="text-gray-900 font-medium">Table 1 <span className="text-gray-400 mx-1">·</span> Paid</p>
                                            <p className="text-xs text-gray-500">₹2,450 via UPI • Feedback: 5/5</p>
                                        </div>
                                        <span className="text-xs font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded">Completed</span>
                                    </div>
                                </div>
                                <div className="p-3 bg-gray-50 text-center border-t border-gray-100">
                                    <p className="text-sm font-medium text-gray-600 hover:text-[#C9A050] transition-colors cursor-pointer">
                                        View Full History
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Quick Actions (35%) */}
                        <div className="lg:w-[35%] space-y-6">

                            {/* Primary Actions Card */}
                            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                                <h2 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h2>
                                <div className="grid grid-cols-2 gap-3">
                                    <button className="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-100 bg-gray-50 hover:bg-white hover:border-[#C9A050] hover:shadow-md transition-all group">
                                        <svg className="w-6 h-6 text-gray-600 group-hover:text-[#C9A050] mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                        </svg>
                                        <span className="text-xs font-semibold text-gray-700">Add Booking</span>
                                    </button>
                                    <button className="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-100 bg-gray-50 hover:bg-white hover:border-[#C9A050] hover:shadow-md transition-all group">
                                        <svg className="w-6 h-6 text-gray-600 group-hover:text-[#C9A050] mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                        <span className="text-xs font-semibold text-gray-700">Assign Staff</span>
                                    </button>
                                    <button className="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-100 bg-gray-50 hover:bg-white hover:border-[#C9A050] hover:shadow-md transition-all group">
                                        <svg className="w-6 h-6 text-gray-600 group-hover:text-[#C9A050] mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                                        </svg>
                                        <span className="text-xs font-semibold text-gray-700">Manage Tables</span>
                                    </button>
                                    <button className="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-100 bg-gray-50 hover:bg-white hover:border-[#C9A050] hover:shadow-md transition-all group">
                                        <svg className="w-6 h-6 text-gray-600 group-hover:text-[#C9A050] mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                        <span className="text-xs font-semibold text-gray-700">Today's Report</span>
                                    </button>
                                </div>
                            </div>

                            {/* Secondary Status */}
                            <div className="bg-[#FFF8E7] rounded-xl border border-[#C9A050]/20 p-6">
                                <h3 className="text-sm font-bold text-[#8B6F3E] uppercase tracking-wide mb-3">System Status</h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-gray-700">Online Orders</span>
                                        <span className="text-green-600 font-semibold">Active</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-gray-700">Kitchen Display</span>
                                        <span className="text-green-600 font-semibold">Connected</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-gray-700">Printer Status</span>
                                        <span className="text-green-600 font-semibold">Ready</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
