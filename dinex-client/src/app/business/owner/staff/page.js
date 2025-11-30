"use client";
import { useEffect, useState } from "react";
import { API } from "@/utils/api";
import DashboardNav from "../components/DashboardNav";
import { useBusinessData } from "../context/BusinessDataContext";
import Footer from "@/components/Footer";

export default function StaffPage() {
    const { staff, isLoading, refreshStaff } = useBusinessData();
    const [showAddStaffModal, setShowAddStaffModal] = useState(false);

    const [staffForm, setStaffForm] = useState({
        name: "",
        phone: "",
        password: "",
        role: "waiter",
    });

    // Set default authorization header
    useEffect(() => {
        const token = localStorage.getItem("businessToken");
        if (token) {
            API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        }
    }, []);

    const handleAddStaff = async (e) => {
        e.preventDefault();

        try {
            await API.post("/api/business/staff", staffForm);

            alert("Staff member added successfully!");
            setShowAddStaffModal(false);
            setStaffForm({ name: "", phone: "", password: "", role: "waiter" });
            refreshStaff();
        } catch (err) {
            alert(err.response?.data?.msg || "Failed to add staff member");
        }
    };

    const handleUpdateStaff = async (staffId, updates) => {
        try {
            await API.put(`/api/business/staff/${staffId}`, updates);

            alert("Staff member updated successfully!");
            refreshStaff();
        } catch (err) {
            alert(err.response?.data?.msg || "Failed to update staff member");
        }
    };

    const handleDeleteStaff = async (staffId) => {
        if (!confirm("Are you sure you want to remove this staff member?")) {
            return;
        }

        try {
            await API.delete(`/api/business/staff/${staffId}`);

            alert("Staff member removed successfully!");
            refreshStaff();
        } catch (err) {
            alert(err.response?.data?.msg || "Failed to remove staff member");
        }
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-[#F9F9F9] flex items-center justify-center">
                <div className="animate-spin w-12 h-12 border-4 border-[#C9A050] border-t-transparent rounded-full"></div>
            </div>
        );
    }

    // Calculate stats
    const totalStaff = staff.length;
    const activeStaff = staff.filter(s => s.isActive).length;
    const inactiveStaff = staff.filter(s => !s.isActive).length;

    return (
        <div className="min-h-screen bg-[#F9F9F9]">
            <DashboardNav />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header */}
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Staff Management</h1>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                        <p className="text-sm text-gray-500 font-medium mb-2">Total Staff</p>
                        <p className="text-4xl font-bold text-gray-900">{totalStaff}</p>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                        <p className="text-sm text-gray-500 font-medium mb-2">Active</p>
                        <p className="text-4xl font-bold text-gray-900">{activeStaff}</p>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                        <p className="text-sm text-gray-500 font-medium mb-2">Inactive</p>
                        <p className="text-4xl font-bold text-gray-900">{inactiveStaff}</p>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                        <p className="text-sm text-gray-500 font-medium mb-2">Total Roles</p>
                        <p className="text-4xl font-bold text-gray-900">{new Set(staff.map(s => s.role)).size}</p>
                    </div>
                </div>

                {/* Add Staff Button */}
                <div className="flex justify-end mb-6">
                    <button
                        onClick={() => setShowAddStaffModal(true)}
                        className="px-6 py-3 bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] hover:from-[#FF5722] hover:to-[#FF6B35] text-white font-semibold rounded-lg flex items-center gap-2 transition-all shadow-md"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        Add New Staff
                    </button>
                </div>

                {/* Staff Table */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Name</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Role</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Phone</th>
                                <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {staff.length > 0 ? (
                                staff.map((member) => (
                                    <tr key={member._id} className="hover:bg-gray-50 transition-colors">
                                        {/* Name with Avatar */}
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C9A050] to-[#8B6F3E] flex items-center justify-center text-white font-semibold">
                                                    {member.name.charAt(0).toUpperCase()}
                                                </div>
                                                <span className="font-medium text-gray-900">{member.name}</span>
                                            </div>
                                        </td>

                                        {/* Role */}
                                        <td className="px-6 py-4">
                                            <span className="text-gray-700 capitalize">{member.role}</span>
                                        </td>

                                        {/* Status */}
                                        <td className="px-6 py-4">
                                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${member.isActive
                                                ? "bg-green-100 text-green-700"
                                                : "bg-gray-100 text-gray-600"
                                                }`}>
                                                {member.isActive ? "Active" : "Inactive"}
                                            </span>
                                        </td>

                                        {/* Phone */}
                                        <td className="px-6 py-4">
                                            <span className="text-gray-600">{member.phone}</span>
                                        </td>

                                        {/* Actions */}
                                        <td className="px-6 py-4">
                                            <div className="flex items-center justify-end gap-2">
                                                <button
                                                    onClick={() => handleUpdateStaff(member._id, { isActive: !member.isActive })}
                                                    className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                                                >
                                                    {member.isActive ? "Deactivate" : "Activate"}
                                                </button>
                                                <span className="text-gray-300">|</span>
                                                <button
                                                    onClick={() => handleDeleteStaff(member._id)}
                                                    className="text-sm font-medium text-red-600 hover:text-red-700 transition-colors"
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={5} className="px-6 py-12 text-center">
                                        <p className="text-gray-500 text-lg">No staff members yet. Add your first staff member!</p>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>

                </div>
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
                                    <option value="chef">Chef</option>
                                    <option value="bartender">Bartender</option>
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
                                    className="flex-1 px-4 py-3 bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] hover:from-[#FF5722] hover:to-[#FF6B35] text-white font-semibold rounded-lg transition-all duration-300"
                                >
                                    Add Staff
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            <Footer />
        </div>
    );
}
