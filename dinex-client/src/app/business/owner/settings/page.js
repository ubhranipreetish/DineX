"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { API } from "@/utils/api";
import DashboardNav from "../components/DashboardNav";
import { useBusinessData } from "../context/BusinessDataContext";
import Footer from "@/components/Footer";
import { useNotification } from "@/context/NotificationContext";

export default function SettingsPage() {
    const { ownerData, isLoading, updateOwnerData } = useBusinessData();
    const [activeTab, setActiveTab] = useState("restaurant");
    const router = useRouter();
    const { showToast } = useNotification();

    const [restaurantForm, setRestaurantForm] = useState({
        restaurantName: "",
        restaurantType: "",
        addressFull: "",
        addressCity: "",
        addressState: "",
        addressPincode: "",
        totalTables: "",
    });

    useEffect(() => {
        if (ownerData) {
            // Populate restaurant form when ownerData is available
            setRestaurantForm({
                restaurantName: ownerData.restaurant.name,
                restaurantType: ownerData.restaurant.type,
                addressFull: ownerData.restaurant.address.full,
                addressCity: ownerData.restaurant.address.city,
                addressState: ownerData.restaurant.address.state,
                addressPincode: ownerData.restaurant.address.pincode,
                totalTables: ownerData.restaurant.totalTables,
            });
        }
    }, [ownerData]);

    const handleUpdateRestaurant = async (e) => {
        e.preventDefault();

        try {
            const res = await API.put("/api/business/restaurant", restaurantForm);

            showToast("Restaurant details updated successfully!", "success");
            updateOwnerData(res.data.businessOwner);
        } catch (err) {
            showToast(err.response?.data?.msg || "Failed to update restaurant details", "error");
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("businessToken");
        localStorage.removeItem("businessOwner");
        router.push("/business/home");
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-[#F9F9F9] flex items-center justify-center">
                <div className="animate-spin w-12 h-12 border-4 border-[#C9A050] border-t-transparent rounded-full"></div>
            </div>
        );
    }

    const restaurantTypes = ["Cafe", "Fine Dining", "Casual Dining", "Bar", "Bakery", "Restaurant"];

    const tabs = [
        { id: "restaurant", name: "Restaurant Details", icon: "🏪" },
        { id: "reviews", name: "Reviews", icon: "⭐" },
        { id: "general", name: "General Settings", icon: "⚙️" },
    ];

    return (
        <div className="min-h-screen bg-[#F9F9F9]">
            <DashboardNav />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header */}
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Settings</h1>

                {/* Tabs */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-6">
                    <div className="border-b border-gray-200">
                        <div className="flex gap-8 px-6">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`py-4 px-2 font-semibold transition-colors relative cursor-pointer ${activeTab === tab.id
                                        ? "text-gray-900"
                                        : "text-gray-500 hover:text-gray-900"
                                        }`}
                                >
                                    {tab.name}
                                    {activeTab === tab.id && (
                                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C9A050]"></span>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Tab Content */}
                    <div className="p-6">
                        {/* Restaurant Details Tab */}
                        {activeTab === "restaurant" && (
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Update Restaurant Details</h2>
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
                                        className="px-6 py-3 bg-gradient-to-r from-[#C9A050] to-[#8B6F3E] hover:from-[#8B6F3E] hover:to-[#C9A050] text-white font-semibold rounded-lg transition-all duration-300 shadow-md cursor-pointer"
                                    >
                                        Save Restaurant Details
                                    </button>
                                </form>
                            </div>
                        )}

                        {/* Reviews Tab */}
                        {activeTab === "reviews" && (
                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-2xl font-bold text-gray-900">Customer Reviews</h2>
                                    <div className="flex items-center gap-2">
                                        <span className="text-3xl font-bold text-gray-900">4.5</span>
                                        <div>
                                            <div className="flex text-yellow-400">
                                                {"★★★★★".split("").map((star, i) => (
                                                    <span key={i} className={i < 4 ? "text-yellow-400" : "text-gray-300"}>{star}</span>
                                                ))}
                                            </div>
                                            <p className="text-sm text-gray-500">Based on 5 reviews</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    {/* Review 1 */}
                                    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                                        <div className="flex items-start justify-between mb-3">
                                            <div className="flex items-center gap-3">
                                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C9A050] to-[#8B6F3E] flex items-center justify-center text-white font-semibold text-lg">
                                                    S
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-gray-900">Sarah Johnson</h4>
                                                    <p className="text-sm text-gray-500">2 days ago</p>
                                                </div>
                                            </div>
                                            <div className="flex text-yellow-400 text-lg">
                                                ★★★★★
                                            </div>
                                        </div>
                                        <p className="text-gray-700 leading-relaxed">
                                            Absolutely amazing experience! The ambiance was perfect, the service was impeccable, and the food was outstanding. The pasta was cooked to perfection and the desserts were divine. Will definitely be coming back!
                                        </p>
                                    </div>

                                    {/* Review 2 */}
                                    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                                        <div className="flex items-start justify-between mb-3">
                                            <div className="flex items-center gap-3">
                                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4A6CF7] to-[#357ABD] flex items-center justify-center text-white font-semibold text-lg">
                                                    M
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-gray-900">Michael Chen</h4>
                                                    <p className="text-sm text-gray-500">5 days ago</p>
                                                </div>
                                            </div>
                                            <div className="flex text-yellow-400 text-lg">
                                                ★★★★☆
                                            </div>
                                        </div>
                                        <p className="text-gray-700 leading-relaxed">
                                            Great food and excellent service! The menu has a wonderful variety. The only minor issue was the wait time during peak hours, but the quality of the meal made it worth it. Highly recommend the chef's special!
                                        </p>
                                    </div>

                                    {/* Review 3 */}
                                    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                                        <div className="flex items-start justify-between mb-3">
                                            <div className="flex items-center gap-3">
                                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF6B35] to-[#FF8C42] flex items-center justify-center text-white font-semibold text-lg">
                                                    E
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-gray-900">Emily Rodriguez</h4>
                                                    <p className="text-sm text-gray-500">1 week ago</p>
                                                </div>
                                            </div>
                                            <div className="flex text-yellow-400 text-lg">
                                                ★★★★★
                                            </div>
                                        </div>
                                        <p className="text-gray-700 leading-relaxed">
                                            One of the best dining experiences I've had in this city. The attention to detail in every dish was remarkable. The staff was friendly and knowledgeable about the menu. Perfect for special occasions!
                                        </p>
                                    </div>

                                    {/* Review 4 */}
                                    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                                        <div className="flex items-start justify-between mb-3">
                                            <div className="flex items-center gap-3">
                                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#007B82] to-[#005F65] flex items-center justify-center text-white font-semibold text-lg">
                                                    D
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-gray-900">David Thompson</h4>
                                                    <p className="text-sm text-gray-500">2 weeks ago</p>
                                                </div>
                                            </div>
                                            <div className="flex text-yellow-400 text-lg">
                                                ★★★★☆
                                            </div>
                                        </div>
                                        <p className="text-gray-700 leading-relaxed">
                                            Solid restaurant with consistently good food. The portions are generous and the prices are reasonable. Love the cozy atmosphere. Would give 5 stars if they expanded their vegetarian options a bit more.
                                        </p>
                                    </div>

                                    {/* Review 5 */}
                                    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                                        <div className="flex items-start justify-between mb-3">
                                            <div className="flex items-center gap-3">
                                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#475569] to-[#334155] flex items-center justify-center text-white font-semibold text-lg">
                                                    A
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-gray-900">Amanda Williams</h4>
                                                    <p className="text-sm text-gray-500">3 weeks ago</p>
                                                </div>
                                            </div>
                                            <div className="flex text-yellow-400 text-lg">
                                                ★★★★★
                                            </div>
                                        </div>
                                        <p className="text-gray-700 leading-relaxed">
                                            Fantastic restaurant! From the moment we walked in, we were treated like VIPs. The wine selection is impressive, and our server gave excellent recommendations. The filet mignon was cooked perfectly. Can't wait to return!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* General Settings Tab */}
                        {activeTab === "general" && (
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">General Settings</h2>

                                {/* Account Information */}
                                <div className="space-y-6 mb-8">
                                    <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Information</h3>
                                        <div className="space-y-3">
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Owner Name:</span>
                                                <span className="font-medium text-gray-900">{ownerData?.owner.name}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Email:</span>
                                                <span className="font-medium text-gray-900">{ownerData?.owner.email}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Phone:</span>
                                                <span className="font-medium text-gray-900">{ownerData?.owner.phone}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Restaurant:</span>
                                                <span className="font-medium text-gray-900">{ownerData?.restaurant.name}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Notifications */}
                                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 mb-8">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Notification Preferences</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="font-medium text-gray-900">Email Notifications</p>
                                                <p className="text-sm text-gray-600">Receive updates about bookings and reviews</p>
                                            </div>
                                            <label className="relative inline-flex items-center cursor-pointer">
                                                <input type="checkbox" className="sr-only peer" defaultChecked />
                                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#C9A050]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#C9A050]"></div>
                                            </label>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="font-medium text-gray-900">SMS Notifications</p>
                                                <p className="text-sm text-gray-600">Get text alerts for urgent matters</p>
                                            </div>
                                            <label className="relative inline-flex items-center cursor-pointer">
                                                <input type="checkbox" className="sr-only peer" />
                                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#C9A050]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#C9A050]"></div>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                {/* Logout Section */}
                                <div className="pt-6 border-t border-gray-200">
                                    <button
                                        onClick={handleLogout}
                                        className="px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white font-semibold rounded-lg transition-colors cursor-pointer"
                                    >
                                        Logout
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
