"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function StaffHomePage() {
    const [staffUser, setStaffUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("staffToken");
        const user = localStorage.getItem("staffUser");

        if (!token || !user) {
            router.push("/business/staff/login");
            return;
        }

        setStaffUser(JSON.parse(user));
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("staffToken");
        localStorage.removeItem("staffUser");
        router.push("/business/staff/login");
    };

    if (!staffUser) return null;

    return (
        <div className="min-h-screen bg-[#FFF8E7] p-8">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-3xl shadow-xl p-8 mb-8 flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-bold text-[#E6B65C]">Welcome, {staffUser.name}</h1>
                        <p className="text-gray-600">Staff Dashboard</p>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                    >
                        Logout
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Placeholder cards for staff features */}
                    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                        <div className="w-12 h-12 bg-[#FFF8E7] rounded-full flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-[#C9A050]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Orders</h3>
                        <p className="text-gray-500">View and manage active orders</p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                        <div className="w-12 h-12 bg-[#FFF8E7] rounded-full flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-[#C9A050]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Reservations</h3>
                        <p className="text-gray-500">Check upcoming bookings</p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                        <div className="w-12 h-12 bg-[#FFF8E7] rounded-full flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-[#C9A050]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Profile</h3>
                        <p className="text-gray-500">Update your information</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
