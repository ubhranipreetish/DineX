"use client";
import { useState, useEffect, useMemo } from "react";
import DashboardNav from "../components/DashboardNav";
import { useBusinessData } from "../context/BusinessDataContext";
import Footer from "@/components/Footer";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    BarChart,
    Bar
} from "recharts";

// Mock Data Generators for different time periods
const generateData = (period) => {
    // Top Selling Items (Indian Context)
    const topItems = {
        today: [
            { name: "Butter Chicken", value: 12 },
            { name: "Paneer Tikka", value: 10 },
            { name: "Garlic Naan", value: 25 },
            { name: "Masala Chai", value: 18 },
            { name: "Gulab Jamun", value: 8 },
        ],
        week: [
            { name: "Butter Chicken", value: 85 },
            { name: "Dal Makhani", value: 72 },
            { name: "Paneer Tikka", value: 68 },
            { name: "Chicken Biryani", value: 65 },
            { name: "Garlic Naan", value: 140 },
        ],
        month: [
            { name: "Chicken Biryani", value: 320 },
            { name: "Butter Chicken", value: 290 },
            { name: "Paneer Butter Masala", value: 245 },
            { name: "Tandoori Roti", value: 850 },
            { name: "Jeera Rice", value: 210 },
        ]
    };

    // Sales Data for Chart
    const salesData = {
        today: Array.from({ length: 12 }, (_, i) => ({
            name: `${i * 2}h`,
            sales: Math.floor(Math.random() * 5000) + 1000
        })),
        week: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(day => ({
            name: day,
            sales: Math.floor(Math.random() * 25000) + 10000
        })),
        month: Array.from({ length: 4 }, (_, i) => ({
            name: `Week ${i + 1}`,
            sales: Math.floor(Math.random() * 150000) + 80000
        }))
    };

    // Stats
    const stats = {
        today: { revenue: "12,845", orders: "42", avg: "305", newCust: "8" },
        week: { revenue: "84,210", orders: "892", avg: "450", newCust: "76" },
        month: { revenue: "345,920", orders: "3,120", avg: "480", newCust: "245" }
    };

    return {
        items: topItems[period],
        chart: salesData[period],
        stats: stats[period]
    };
};

const recentOrders = [
    { id: "#ORD-0012", customer: "Rahul Sharma", status: "Completed", amount: "₹850.00" },
    { id: "#ORD-0011", customer: "Priya Patel", status: "Completed", amount: "₹1,240.00" },
    { id: "#ORD-0010", customer: "Amit Singh", status: "Pending", amount: "₹650.00" },
    { id: "#ORD-0009", customer: "Sneha Gupta", status: "Cancelled", amount: "₹420.00" },
];

const COLORS = ['#007B82', '#4A6CF7', '#475569']; // Teal, Blue, Slate

// Custom Tooltip for Recharts
const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white p-3 border border-gray-100 shadow-lg rounded-lg">
                <p className="text-sm font-semibold text-gray-900">{label}</p>
                <p className="text-sm text-[#007B82]">
                    Sales: ₹{payload[0].value.toLocaleString()}
                </p>
            </div>
        );
    }
    return null;
};

export default function AnalyticsPage() {
    const { ownerData, isLoading } = useBusinessData();
    const [timePeriod, setTimePeriod] = useState("week");
    const [data, setData] = useState(generateData("week"));

    useEffect(() => {
        setData(generateData(timePeriod));
    }, [timePeriod]);

    // Order Source Data (Static for now, but could be dynamic)
    const sourceData = [
        { name: 'Dine-In', value: 535 }, // approx 60%
        { name: 'Takeout', value: 267 }, // approx 30%
        { name: 'Delivery', value: 90 }, // approx 10%
    ];

    if (isLoading) {
        return (
            <div className="min-h-screen bg-[#F9F9F9] flex items-center justify-center">
                <div className="animate-spin w-12 h-12 border-4 border-[#007B82] border-t-transparent rounded-full"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#F9F9F9]">
            <DashboardNav />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header */}
                <div className="mb-8 pb-6 border-b border-gray-200">
                    <div className="flex justify-between items-start">
                        <div>
                            <h1 className="text-4xl font-bold text-gray-900 mb-2">
                                Analytics Dashboard
                            </h1>
                            <p className="text-gray-500">Welcome back, {ownerData?.owner.name || "Restaurant Owner"}! Here's your performance overview.</p>
                        </div>
                        <button className="px-6 py-3 bg-[#C9A050] hover:bg-[#B08D45] text-white font-semibold rounded-lg flex items-center gap-2 transition-all shadow-md cursor-pointer">
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
                            className={`px-6 py-2 rounded-lg font-medium transition-all cursor-pointer capitalize ${timePeriod === period
                                ? "bg-white text-gray-900 font-bold shadow-md border-b-2 border-[#C9A050]"
                                : "bg-white text-gray-500 border border-gray-200 hover:border-[#C9A050] shadow-sm hover:shadow-md"
                                }`}
                        >
                            {period === "today" ? "Today" : period === "week" ? "This Week" : "This Month"}
                        </button>
                    ))}
                </div>

                {/* Metric Cards - Interactive based on state */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <MetricCard
                        title="Total Revenue"
                        value={`₹${data.stats.revenue}`}
                        change="+12.5%"
                        isPositive={true}
                    />
                    <MetricCard
                        title="Total Orders"
                        value={data.stats.orders}
                        change="+8.2%"
                        isPositive={true}
                    />
                    <MetricCard
                        title="Avg Order Value"
                        value={`₹${data.stats.avg}`}
                        change="-1.1%"
                        isPositive={false}
                    />
                    <MetricCard
                        title="New Customers"
                        value={data.stats.newCust}
                        change="+20%"
                        isPositive={true}
                    />
                </div>

                {/* Charts Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    {/* Sales Over Time (Area Chart) */}
                    <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                        <div className="mb-6 flex items-center justify-between">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900">Sales Over Time</h3>
                                <p className="text-sm text-gray-500">Revenue trend for {timePeriod}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-2xl font-bold text-gray-900">₹{data.stats.revenue}</p>
                            </div>
                        </div>

                        <div className="h-72 w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={data.chart} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                                    <defs>
                                        <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#007B82" stopOpacity={0.1} />
                                            <stop offset="95%" stopColor="#007B82" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                                    <XAxis
                                        dataKey="name"
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: '#6B7280', fontSize: 12 }}
                                        dy={10}
                                    />
                                    <YAxis
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: '#6B7280', fontSize: 12 }}
                                        tickFormatter={(value) => `₹${value / 1000}k`}
                                    />
                                    <Tooltip content={<CustomTooltip />} />
                                    <Area
                                        type="monotone"
                                        dataKey="sales"
                                        stroke="#007B82"
                                        strokeWidth={3}
                                        fillOpacity={1}
                                        fill="url(#colorSales)"
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Order Source Breakdown (Pie Chart) */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col">
                        <h3 className="text-xl font-bold text-gray-900 mb-6">Order Source</h3>

                        <div className="flex-1 min-h-[200px] relative">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={sourceData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={80}
                                        paddingAngle={5}
                                        dataKey="value"
                                    >
                                        {sourceData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                            {/* Center Text Overly */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                                <p className="text-3xl font-bold text-gray-900">{data.stats.orders}</p>
                                <p className="text-xs text-gray-500">Orders</p>
                            </div>
                        </div>

                        {/* Custom Legend */}
                        <div className="mt-4 space-y-3">
                            {sourceData.map((entry, index) => (
                                <div key={entry.name} className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index] }}></div>
                                        <span className="text-sm text-gray-600">{entry.name}</span>
                                    </div>
                                    <span className="text-sm font-semibold text-[#C9A050]">
                                        {Math.round((entry.value / 892) * 100)}%
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Top Selling Items (Bar Chart) */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                        <h3 className="text-xl font-bold text-gray-900 mb-6">Top Selling Items</h3>
                        <div className="space-y-5">
                            {data.items.map((item, index) => (
                                <div key={index}>
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-sm font-medium text-gray-900">{item.name}</span>
                                        <span className="text-sm font-semibold text-[#C9A050]">{item.value} sold</span>
                                    </div>
                                    <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                                        <div
                                            className="bg-gradient-to-r from-[#007B82] to-[#4A6CF7] h-2.5 rounded-full transition-all duration-1000 ease-out"
                                            style={{ width: `${(item.value / Math.max(...data.items.map(i => i.value))) * 100}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Recent Orders Table */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-bold text-gray-900">Recent Transactions</h3>
                            <button className="text-sm text-[#C9A050] hover:text-[#8B6F3E] font-medium">View All</button>
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
                                        <tr key={index} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                                            <td className="py-3 text-sm text-gray-900 font-medium">{order.id}</td>
                                            <td className="py-3 text-sm text-gray-600">{order.customer}</td>
                                            <td className="py-3">
                                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${order.status === "Completed" ? "bg-green-100 text-green-700" :
                                                    order.status === "Pending" ? "bg-yellow-100 text-yellow-700" :
                                                        "bg-red-100 text-red-700"
                                                    }`}>
                                                    {order.status}
                                                </span>
                                            </td>
                                            <td className="py-3 text-sm font-bold text-gray-900 text-right">{order.amount}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

// Sub-component for simple metric cards
function MetricCard({ title, value, change, isPositive }) {
    return (
        <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
            <p className="text-sm text-gray-500 font-medium mb-2">{title}</p>
            <p className="text-4xl font-bold text-gray-900 mb-2">{value}</p>
            <p className={`text-sm flex items-center gap-1 font-semibold ${isPositive ? 'text-[#C9A050]' : 'text-red-500'}`}>
                {isPositive ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                )}
                {change}
            </p>
        </div>
    );
}
