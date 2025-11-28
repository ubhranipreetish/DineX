"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { API } from "@/utils/api";

export default function BusinessDashboard() {
    const [activeTab, setActiveTab] = useState("analytics");
    const [ownerData, setOwnerData] = useState(null);
    const [staff, setStaff] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [showAddStaffModal, setShowAddStaffModal] = useState(false);
    const [editingStaff, setEditingStaff] = useState(null);

    const [restaurantForm, setRestaurantForm] = useState({
        restaurantName: "",
        restaurantType: "",
        addressFull: "",
        addressCity: "",
        addressState: "",
        addressPincode: "",
        totalTables: "",
    });

    const [staffForm, setStaffForm] = useState({
        name: "",
        phone: "",
        password: "",
        role: "waiter",
    });

    const router = useRouter();

    useEffect(() => {
        // Check authentication
        const token = localStorage.getItem("businessToken");
        const owner = localStorage.getItem("businessOwner");

        if (!token || !owner) {
            router.push("/business/login");
            return;
        }

        fetchProfile();
        fetchStaff();
    }, []);

    const fetchProfile = async () => {
        try {
            const token = localStorage.getItem("businessToken");
            const res = await API.get("/api/business/profile", {
                headers: { Authorization: `Bearer ${token}` },
            });

            setOwnerData(res.data.owner);

            // Populate restaurant form
            setRestaurantForm({
                restaurantName: res.data.owner.restaurant.name,
                restaurantType: res.data.owner.restaurant.type,
                addressFull: res.data.owner.restaurant.address.full,
                addressCity: res.data.owner.restaurant.address.city,
                addressState: res.data.owner.restaurant.address.state,
                addressPincode: res.data.owner.restaurant.address.pincode,
                totalTables: res.data.owner.restaurant.totalTables,
            });

            setIsLoading(false);
        } catch (err) {
            console.error("Error fetching profile:", err);
            if (err.response?.status === 401) {
                router.push("/business/login");
            }
        }
    };

    const fetchStaff = async () => {
        try {
            const token = localStorage.getItem("businessToken");
            const res = await API.get("/api/business/staff", {
                headers: { Authorization: `Bearer ${token}` },
            });

            setStaff(res.data.staff);
        } catch (err) {
            console.error("Error fetching staff:", err);
        }
    };

    const handleUpdateRestaurant = async (e) => {
        e.preventDefault();

        try {
            const token = localStorage.getItem("businessToken");
            const res = await API.put("/api/business/restaurant", restaurantForm, {
                headers: { Authorization: `Bearer ${token}` },
            });

            alert("Restaurant details updated successfully!");
            setOwnerData(res.data.owner);
            localStorage.setItem("businessOwner", JSON.stringify(res.data.owner));
        } catch (err) {
            alert(err.response?.data?.msg || "Failed to update restaurant details");
        }
    };

    const handleAddStaff = async (e) => {
        e.preventDefault();

        try {
            const token = localStorage.getItem("businessToken");
            await API.post("/api/business/staff", staffForm, {
                headers: { Authorization: `Bearer ${token}` },
            });

            alert("Staff member added successfully!");
            setShowAddStaffModal(false);
            setStaffForm({ name: "", phone: "", password: "", role: "waiter" });
            fetchStaff();
        } catch (err) {
            alert(err.response?.data?.msg || "Failed to add staff member");
        }
    };

    const handleUpdateStaff = async (staffId, updates) => {
        try {
            const token = localStorage.getItem("businessToken");
            await API.put(`/api/business/staff/${staffId}`, updates, {
                headers: { Authorization: `Bearer ${token}` },
            });

            alert("Staff member updated successfully!");
            setEditingStaff(null);
            fetchStaff();
        } catch (err) {
            alert(err.response?.data?.msg || "Failed to update staff member");
        }
    };

    const handleDeleteStaff = async (staffId) => {
        if (!confirm("Are you sure you want to remove this staff member?")) {
            return;
        }

        try {
            const token = localStorage.getItem("businessToken");
            await API.delete(`/api/business/staff/${staffId}`, {
                headers: { Authorization: `Bearer ${token}` },
            });

            alert("Staff member removed successfully!");
            fetchStaff();
        } catch (err) {
            alert(err.response?.data?.msg || "Failed to remove staff member");
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("businessToken");
        localStorage.removeItem("businessOwner");
        router.push("/business/home");
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-[#FFF8E7] flex items-center justify-center">
                <div className="animate-spin w-12 h-12 border-4 border-[#C9A050] border-t-transparent rounded-full"></div>
            </div>
        );
    }

    const restaurantTypes = ["Cafe", "Fine Dining", "Casual Dining", "Bar", "Bakery", "Restaurant"];

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#FFF8E7] to-[#F4D483]">
            {/* Header */}
            <header className="bg-white shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-2xl font-bold text-[#C9A050]">
                                {ownerData?.restaurant.name}
                            </h1>
                            <p className="text-sm text-gray-600">
                                Welcome back, {ownerData?.owner.name}
                            </p>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg transition-colors"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </header>

            {/* Tab Navigation */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
                <div className="bg-white rounded-lg shadow-md p-1 flex gap-2">
                    <button
                        onClick={() => setActiveTab("analytics")}
                        className={`flex-1 py-3 px-4 rounded-md font-semibold transition-all ${activeTab === "analytics"
                                ? "bg-gradient-to-r from-[#C9A050] to-[#8B6F3E] text-white"
                                : "text-gray-600 hover:bg-gray-100"
                            }`}
                    >
                        📊 Analytics
                    </button>
                    <button
                        onClick={() => setActiveTab("settings")}
                        className={`flex-1 py-3 px-4 rounded-md font-semibold transition-all ${activeTab === "settings"
                                ? "bg-gradient-to-r from-[#C9A050] to-[#8B6F3E] text-white"
                                : "text-gray-600 hover:bg-gray-100"
                            }`}
                    >
                        ⚙️ Settings
                    </button>
                    <button
                        onClick={() => setActiveTab("staff")}
                        className={`flex-1 py-3 px-4 rounded-md font-semibold transition-all ${activeTab === "staff"
                                ? "bg-gradient-to-r from-[#C9A050] to-[#8B6F3E] text-white"
                                : "text-gray-600 hover:bg-gray-100"
                            }`}
                    >
                        👥 Staff
                    </button>
                </div>
            </div>

            {/* Tab Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Analytics Tab */}
                {activeTab === "analytics" && (
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-gray-900">Analytics Overview</h2>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="bg-white rounded-xl p-6 shadow-lg">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-gray-600">Total Tables</p>
                                        <p className="text-3xl font-bold text-[#C9A050] mt-2">
                                            {ownerData?.restaurant.totalTables}
                                        </p>
                                    </div>
                                    <svg className="w-12 h-12 text-[#C9A050]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-lg">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-gray-600">Active Staff</p>
                                        <p className="text-3xl font-bold text-[#C9A050] mt-2">
                                            {staff.filter(s => s.isActive).length}
                                        </p>
                                    </div>
                                    <svg className="w-12 h-12 text-[#C9A050]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-lg">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-gray-600">Total Bookings</p>
                                        <p className="text-3xl font-bold text-[#C9A050] mt-2">-</p>
                                        <p className="text-xs text-gray-500 mt-1">Coming soon</p>
                                    </div>
                                    <svg className="w-12 h-12 text-[#C9A050]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                    </svg>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-lg">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-gray-600">Revenue</p>
                                        <p className="text-3xl font-bold text-[#C9A050] mt-2">-</p>
                                        <p className="text-xs text-gray-500 mt-1">Coming soon</p>
                                    </div>
                                    <svg className="w-12 h-12 text-[#C9A050]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Restaurant Info */}
                        <div className="bg-white rounded-xl p-6 shadow-lg">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Restaurant Information</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm text-gray-600">Name</p>
                                    <p className="text-lg font-semibold text-gray-900">{ownerData?.restaurant.name}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Type</p>
                                    <p className="text-lg font-semibold text-gray-900">{ownerData?.restaurant.type}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Address</p>
                                    <p className="text-lg font-semibold text-gray-900">{ownerData?.restaurant.address.full}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">City, State</p>
                                    <p className="text-lg font-semibold text-gray-900">
                                        {ownerData?.restaurant.address.city}, {ownerData?.restaurant.address.state}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Settings Tab */}
                {activeTab === "settings" && (
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-gray-900">Restaurant Settings</h2>

                        <div className="bg-white rounded-xl p-8 shadow-lg">
                            <form onSubmit={handleUpdateRestaurant} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Restaurant Name */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Restaurant Name
                                        </label>
                                        <input
                                            type="text"
                                            value={restaurantForm.restaurantName}
                                            onChange={(e) => setRestaurantForm({ ...restaurantForm, restaurantName: e.target.value })}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A050] focus:border-[#C9A050] transition-colors outline-none text-gray-700"
                                            required
                                        />
                                    </div>

                                    {/* Restaurant Type */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Restaurant Type
                                        </label>
                                        <select
                                            value={restaurantForm.restaurantType}
                                            onChange={(e) => setRestaurantForm({ ...restaurantForm, restaurantType: e.target.value })}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A050] focus:border-[#C9A050] transition-colors outline-none text-gray-700"
                                            required
                                        >
                                            {restaurantTypes.map((type) => (
                                                <option key={type} value={type}>{type}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                {/* Full Address */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Full Address
                                    </label>
                                    <textarea
                                        value={restaurantForm.addressFull}
                                        onChange={(e) => setRestaurantForm({ ...restaurantForm, addressFull: e.target.value })}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A050] focus:border-[#C9A050] transition-colors outline-none text-gray-700"
                                        rows="2"
                                        required
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {/* City */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            City
                                        </label>
                                        <input
                                            type="text"
                                            value={restaurantForm.addressCity}
                                            onChange={(e) => setRestaurantForm({ ...restaurantForm, addressCity: e.target.value })}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A050] focus:border-[#C9A050] transition-colors outline-none text-gray-700"
                                            required
                                        />
                                    </div>

                                    {/* State */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            State
                                        </label>
                                        <input
                                            type="text"
                                            value={restaurantForm.addressState}
                                            onChange={(e) => setRestaurantForm({ ...restaurantForm, addressState: e.target.value })}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A050] focus:border-[#C9A050] transition-colors outline-none text-gray-700"
                                            required
                                        />
                                    </div>

                                    {/* Pincode */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Pincode
                                        </label>
                                        <input
                                            type="text"
                                            value={restaurantForm.addressPincode}
                                            onChange={(e) => setRestaurantForm({ ...restaurantForm, addressPincode: e.target.value })}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A050] focus:border-[#C9A050] transition-colors outline-none text-gray-700"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Total Tables */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Total Tables
                                    </label>
                                    <input
                                        type="number"
                                        value={restaurantForm.totalTables}
                                        onChange={(e) => setRestaurantForm({ ...restaurantForm, totalTables: e.target.value })}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A050] focus:border-[#C9A050] transition-colors outline-none text-gray-700"
                                        min="1"
                                        required
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-[#C9A050] to-[#8B6F3E] hover:from-[#8B6F3E] hover:to-[#C9A050] text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                                >
                                    Save Changes
                                </button>
                            </form>
                        </div>
                    </div>
                )}

                {/* Staff Tab */}
                {activeTab === "staff" && (
                    <div className="space-y-6">
                        <div className="flex justify-between items-center">
                            <h2 className="text-3xl font-bold text-gray-900">Staff Management</h2>
                            <button
                                onClick={() => setShowAddStaffModal(true)}
                                className="px-6 py-3 bg-gradient-to-r from-[#C9A050] to-[#8B6F3E] hover:from-[#8B6F3E] hover:to-[#C9A050] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                + Add Staff
                            </button>
                        </div>

                        {/* Staff List */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {staff.map((member) => (
                                <div key={member._id} className="bg-white rounded-xl p-6 shadow-lg">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                                            <p className="text-sm text-gray-600">{member.phone}</p>
                                        </div>
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${member.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                            }`}>
                                            {member.isActive ? 'Active' : 'Inactive'}
                                        </span>
                                    </div>

                                    <div className="mb-4">
                                        <p className="text-sm text-gray-600">Role</p>
                                        <p className="text-lg font-semibold text-gray-900 capitalize">{member.role}</p>
                                    </div>

                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => handleUpdateStaff(member._id, { isActive: !member.isActive })}
                                            className="flex-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold rounded-lg transition-colors"
                                        >
                                            {member.isActive ? 'Deactivate' : 'Activate'}
                                        </button>
                                        <button
                                            onClick={() => handleDeleteStaff(member._id)}
                                            className="flex-1 px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-sm font-semibold rounded-lg transition-colors"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            ))}

                            {staff.length === 0 && (
                                <div className="col-span-full text-center py-12">
                                    <p className="text-gray-600 text-lg">No staff members yet. Add your first staff member!</p>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>

            {/* Add Staff Modal */}
            {showAddStaffModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-2xl p-8 max-w-md w-full">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Add New Staff Member</h3>

                        <form onSubmit={handleAddStaff} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                <input
                                    type="text"
                                    value={staffForm.name}
                                    onChange={(e) => setStaffForm({ ...staffForm, name: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A050] focus:border-[#C9A050] transition-colors outline-none text-gray-700"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                                <input
                                    type="tel"
                                    value={staffForm.phone}
                                    onChange={(e) => setStaffForm({ ...staffForm, phone: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A050] focus:border-[#C9A050] transition-colors outline-none text-gray-700"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                                <input
                                    type="password"
                                    value={staffForm.password}
                                    onChange={(e) => setStaffForm({ ...staffForm, password: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A050] focus:border-[#C9A050] transition-colors outline-none text-gray-700"
                                    required
                                    minLength={6}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                                <select
                                    value={staffForm.role}
                                    onChange={(e) => setStaffForm({ ...staffForm, role: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A050] focus:border-[#C9A050] transition-colors outline-none text-gray-700"
                                >
                                    <option value="waiter">Waiter</option>
                                    <option value="manager">Manager</option>
                                </select>
                            </div>

                            <div className="flex gap-4 pt-4">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setShowAddStaffModal(false);
                                        setStaffForm({ name: "", phone: "", password: "", role: "waiter" });
                                    }}
                                    className="flex-1 px-4 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-lg transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="flex-1 px-4 py-3 bg-gradient-to-r from-[#C9A050] to-[#8B6F3E] hover:from-[#8B6F3E] hover:to-[#C9A050] text-white font-semibold rounded-lg transition-all duration-300"
                                >
                                    Add Staff
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
