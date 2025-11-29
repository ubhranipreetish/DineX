"use client";
import { useState } from "react";
import DashboardNav from "../components/DashboardNav";
import { useBusinessData } from "../context/BusinessDataContext";
import Footer from "@/components/Footer";

export default function AnalyticsPage() {
    const { ownerData, staff, isLoading } = useBusinessData();
    const [timePeriod, setTimePeriod] = useState("today");

    if (isLoading) {
        return (
            <div className="min-h-screen bg-[#F9F9F9] flex items-center justify-center">
                <div className="animate-spin w-12 h-12 border-4 border-[#007B82] border-t-transparent rounded-full"></div>
            </div>
        );
    }

    // Mock data for charts
    const topSellingItems = [
        { name: "Classic Cheeseburger", value: 85 },
        { name: "Margherita Pizza", value: 70 },
        { name: "Caesar Salad", value: 65 },
        { name: "Fettuccine Alfredo", value: 60 },
        { name: "Truffle Fries", value: 75 },
    ];

    const recentOrders = [
        { id: "#ORD-0012", customer: "Jane Cooper", status: "Completed", amount: "$89.50" },
        { id: "#ORD-0011", customer: "Cody Fisher", status: "Completed", amount: "$72.00" },
        { id: "#ORD-0010", customer: "Esther Howard", status: "Pending", amount: "$65.25" },
        { id: "#ORD-0009", customer: "Robert Fox", status: "Cancelled", amount: "$58.90" },
    ];

    return (
        <div className="min-h-screen bg-[#F9F9F9]">
            <DashboardNav />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header with subtle gold gradient */}
                <div className="mb-8 pb-6 border-b border-gray-200">
                    <div className="flex justify-between items-start">
                        <div>
                            <h1 className="text-4xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-gray-900 via-[#C9A050] to-gray-900 bg-clip-text">
                                Analytics Dashboard
                            </h1>
                            <p className="text-gray-500">Welcome back, {ownerData?.owner.name}! Here's your restaurant's performance overview.</p>
                        </div>
                        <button className="px-6 py-3 bg-gradient-to-r from-[#C9A050] to-[#8B6F3E] hover:from-[#8B6F3E] hover:to-[#C9A050] text-white font-semibold rounded-lg flex items-center gap-2 transition-all shadow-md cursor-pointer">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            Download Report
                        </button>
                    </div>
                </div>

                {/* Time Period Filters */}
                <div className="flex gap-3 mb-8">
                    {["today", "week", "month"].map((period) => (
                        <button
                            key={period}
                            onClick={() => setTimePeriod(period)}
                            className={`px-6 py-2 rounded-lg font-medium transition-all cursor-pointer ${timePeriod === period
                                ? "bg-white text-gray-900 font-semibold shadow-md border-b-2 border-[#C9A050]"
                                : "bg-white text-gray-500 border border-gray-200 hover:border-[#C9A050] shadow-sm hover:shadow-md"
                                }`}
                        >
                            {period === "today" ? "Today" : period === "week" ? "This Week" : period === "month" ? "This Month" : "Custom Range"}
                        </button>
                    ))}
                </div>

                {/* Metric Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {/* Total Revenue */}
                    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                        <p className="text-sm text-gray-500 font-medium mb-2">Total Revenue</p>
                        <p className="text-4xl font-bold text-gray-900 mb-2">$12,845</p>
                        <p className="text-sm text-[#C9A050] flex items-center gap-1 font-semibold">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                            </svg>
                            +12.5%
                        </p>
                    </div>

                    {/* Total Orders */}
                    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                        <p className="text-sm text-gray-500 font-medium mb-2">Total Orders</p>
                        <p className="text-4xl font-bold text-gray-900 mb-2">892</p>
                        <p className="text-sm text-[#C9A050] flex items-center gap-1 font-semibold">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                            </svg>
                            +8.2%
                        </p>
                    </div>

                    {/* Average Order Value */}
                    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                        <p className="text-sm text-gray-500 font-medium mb-2">Average Order Value</p>
                        <p className="text-4xl font-bold text-gray-900 mb-2">$14.39</p>
                        <p className="text-sm text-red-600 flex items-center gap-1 font-semibold">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                            -1.1%
                        </p>
                    </div>

                    {/* New Customers */}
                    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                        <p className="text-sm text-gray-500 font-medium mb-2">New Customers</p>
                        <p className="text-4xl font-bold text-gray-900 mb-2">76</p>
                        <p className="text-sm text-[#C9A050] flex items-center gap-1 font-semibold">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                            </svg>
                            +20%
                        </p>
                    </div>
                </div>

                {/* Charts Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    {/* Sales Over Time - 2 columns */}
                    <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                        <div className="mb-6">
                            <div className="flex items-center gap-2 mb-1">
                                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#C9A050]/20 to-[#C9A050]/10 flex items-center justify-center">
                                    <svg className="w-4 h-4 text-[#C9A050]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">Sales Over Time</h3>
                            </div>
                            <p className="text-sm text-gray-500">This Month <span className="text-[#C9A050] ml-2 font-semibold">+5.4%</span></p>
                            <p className="text-3xl font-bold text-gray-900 mt-2">$8,421.50</p>
                        </div>

                        {/* Line Chart with muted teal color */}
                        <div className="h-64 flex items-end justify-between gap-2">
                            <svg className="w-full h-full" viewBox="0 0 800 250" preserveAspectRatio="none">
                                {/* Grid lines */}
                                <line x1="0" y1="50" x2="800" y2="50" stroke="#E5E7EB" strokeWidth="1" />
                                <line x1="0" y1="100" x2="800" y2="100" stroke="#E5E7EB" strokeWidth="1" />
                                <line x1="0" y1="150" x2="800" y2="150" stroke="#E5E7EB" strokeWidth="1" />
                                <line x1="0" y1="200" x2="800" y2="200" stroke="#E5E7EB" strokeWidth="1" />

                                {/* Area fill with muted teal */}
                                <path
                                    d="M 0 150 Q 100 80 200 100 T 400 80 T 600 50 T 800 100 L 800 250 L 0 250 Z"
                                    fill="url(#gradient-teal)"
                                    opacity="0.2"
                                />

                                {/* Line with muted teal */}
                                <path
                                    d="M 0 150 Q 100 80 200 100 T 400 80 T 600 50 T 800 100"
                                    fill="none"
                                    stroke="#007B82"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />

                                <defs>
                                    <linearGradient id="gradient-teal" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="#007B82" />
                                        <stop offset="100%" stopColor="#E0F2F3" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>

                        {/* Week labels */}
                        <div className="flex justify-between mt-4 text-sm text-gray-500">
                            <span>Week 1</span>
                            <span>Week 2</span>
                            <span>Week 3</span>
                            <span>Week 4</span>
                        </div>
                    </div>

                    {/* Order Source Breakdown - 1 column */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#C9A050]/20 to-[#C9A050]/10 flex items-center justify-center">
                                <svg className="w-4 h-4 text-[#C9A050]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Order Source Breakdown</h3>
                        </div>

                        {/* Donut Chart with soft blue palette */}
                        <div className="flex items-center justify-center mb-6">
                            <div className="relative w-48 h-48">
                                <svg viewBox="0 0 200 200" className="transform -rotate-90">
                                    {/* Background circle */}
                                    <circle cx="100" cy="100" r="80" fill="none" stroke="#F3F4F6" strokeWidth="40" />

                                    {/* Dine-In 60% - Muted Teal */}
                                    <circle
                                        cx="100"
                                        cy="100"
                                        r="80"
                                        fill="none"
                                        stroke="#007B82"
                                        strokeWidth="40"
                                        strokeDasharray="301.6 502.7"
                                        strokeDashoffset="0"
                                    />

                                    {/* Takeout 30% - Soft Blue */}
                                    <circle
                                        cx="100"
                                        cy="100"
                                        r="80"
                                        fill="none"
                                        stroke="#4A6CF7"
                                        strokeWidth="40"
                                        strokeDasharray="150.8 502.7"
                                        strokeDashoffset="-301.6"
                                    />

                                    {/* Delivery 10% - Slate Grey */}
                                    <circle
                                        cx="100"
                                        cy="100"
                                        r="80"
                                        fill="none"
                                        stroke="#475569"
                                        strokeWidth="40"
                                        strokeDasharray="50.3 502.7"
                                        strokeDashoffset="-452.4"
                                    />
                                </svg>

                                {/* Center text */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <p className="text-4xl font-bold text-gray-900">892</p>
                                    <p className="text-sm text-gray-500">Total Orders</p>
                                </div>
                            </div>
                        </div>

                        {/* Legend */}
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-[#007B82]"></div>
                                    <span className="text-sm text-gray-500">Dine-In</span>
                                </div>
                                <span className="text-sm font-semibold text-[#C9A050]">60%</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-[#4A6CF7]"></div>
                                    <span className="text-sm text-gray-500">Takeout</span>
                                </div>
                                <span className="text-sm font-semibold text-[#C9A050]">30%</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-[#475569]"></div>
                                    <span className="text-sm text-gray-500">Delivery</span>
                                </div>
                                <span className="text-sm font-semibold text-[#C9A050]">10%</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section - Top Selling Items and Recent Orders */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Top Selling Menu Items */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#C9A050]/20 to-[#C9A050]/10 flex items-center justify-center">
                                <svg className="w-4 h-4 text-[#C9A050]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Top Selling Menu Items</h3>
                        </div>
                        <div className="space-y-4">
                            {topSellingItems.map((item, index) => (
                                <div key={index}>
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-sm font-medium text-gray-900">{item.name}</span>
                                        <span className="text-sm font-semibold text-[#C9A050]">{item.value}%</span>
                                    </div>
                                    <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                                        <div
                                            className="bg-gradient-to-r from-[#007B82] to-[#4A6CF7] h-2 rounded-full transition-all"
                                            style={{ width: `${item.value}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Recent High-Value Orders */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#C9A050]/20 to-[#C9A050]/10 flex items-center justify-center">
                                <svg className="w-4 h-4 text-[#C9A050]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Recent High-Value Orders</h3>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-gray-200">
                                        <th className="text-left py-3 text-sm font-semibold text-gray-500">Order ID</th>
                                        <th className="text-left py-3 text-sm font-semibold text-gray-500">Customer</th>
                                        <th className="text-left py-3 text-sm font-semibold text-gray-500">Status</th>
                                        <th className="text-right py-3 text-sm font-semibold text-gray-500">Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {recentOrders.map((order, index) => (
                                        <tr key={index} className="border-b border-gray-100">
                                            <td className="py-3 text-sm text-gray-900 font-medium">{order.id}</td>
                                            <td className="py-3 text-sm text-gray-500">{order.customer}</td>
                                            <td className="py-3">
                                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${order.status === "Completed" ? "bg-green-100 text-green-700" :
                                                    order.status === "Pending" ? "bg-yellow-100 text-yellow-700" :
                                                        "bg-red-100 text-red-700"
                                                    }`}>
                                                    {order.status}
                                                </span>
                                            </td>
                                            <td className="py-3 text-sm font-bold text-[#C9A050] text-right">{order.amount}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Additional Stats */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#C9A050]/20 to-[#C9A050]/10 flex items-center justify-center">
                                <svg className="w-5 h-5 text-[#C9A050]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h4 className="font-semibold text-gray-900">Peak Hours</h4>
                        </div>
                        <p className="text-2xl font-bold text-gray-900">7-9 PM</p>
                        <p className="text-sm text-gray-500 mt-1">Dinner rush hour</p>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#C9A050]/20 to-[#C9A050]/10 flex items-center justify-center">
                                <svg className="w-5 h-5 text-[#C9A050]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <h4 className="font-semibold text-gray-900">Table Occupancy</h4>
                        </div>
                        <p className="text-2xl font-bold text-gray-900">68%</p>
                        <p className="text-sm text-gray-500 mt-1">Current utilization</p>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#C9A050]/20 to-[#C9A050]/10 flex items-center justify-center">
                                <svg className="w-5 h-5 text-[#C9A050]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                </svg>
                            </div>
                            <h4 className="font-semibold text-gray-900">Average Rating</h4>
                        </div>
                        <p className="text-2xl font-bold text-gray-900">4.5 <span className="text-yellow-500">⭐</span></p>
                        <p className="text-sm text-gray-500 mt-1">Based on 234 reviews</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
