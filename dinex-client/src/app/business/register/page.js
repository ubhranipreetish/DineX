"use client";
import { useState, Suspense } from "react";
import { useRouter } from "next/navigation";
import { API } from "@/utils/api";
import Link from "next/link";

function RegisterForm() {
    const [currentStep, setCurrentStep] = useState(1);
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [form, setForm] = useState({
        ownerName: "",
        ownerEmail: "",
        ownerPhone: "",
        ownerPassword: "",
        confirmPassword: "",
        restaurantName: "",
        restaurantType: "Restaurant",
        addressFull: "",
        addressCity: "",
        addressState: "",
        addressPincode: "",
        totalTables: "",
    });

    const router = useRouter();

    const handleNext = () => {
        // Validate step 1
        if (currentStep === 1) {
            if (!form.ownerName || !form.ownerEmail || !form.ownerPhone || !form.ownerPassword) {
                alert("Please fill in all owner details");
                return;
            }
            if (form.ownerPassword !== form.confirmPassword) {
                alert("Passwords don't match!");
                return;
            }
            if (form.ownerPassword.length < 6) {
                alert("Password must be at least 6 characters long!");
                return;
            }
        }
        setCurrentStep(2);
    };

    const handleBack = () => {
        setCurrentStep(1);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate step 2
        if (!form.restaurantName || !form.addressFull || !form.addressCity || !form.addressState || !form.addressPincode || !form.totalTables) {
            alert("Please fill in all restaurant details");
            return;
        }

        setIsLoading(true);
        try {
            const res = await API.post("/api/business/register", form);

            // Save token and owner data
            if (res.data?.token) {
                localStorage.setItem("businessToken", res.data.token);
            }
            if (res.data?.owner) {
                localStorage.setItem("businessOwner", JSON.stringify(res.data.owner));
            }

            alert("Registration successful! Welcome to DineX Business.");
            router.push("/business/home");
        } catch (err) {
            const errorMessage =
                err.response?.data?.msg ||
                err.response?.data?.message ||
                err.message ||
                "Registration failed. Please try again.";
            alert(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    const restaurantTypes = ["Cafe", "Fine Dining", "Casual Dining", "Bar", "Bakery", "Restaurant"];

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#FFF8E7] to-[#F4D483] flex items-center justify-center p-4 lg:p-8">
            <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="flex flex-col lg:flex-row min-h-[700px]">
                    {/* Left Side - Full Background Image */}
                    <div className="lg:w-1/2 relative flex items-center justify-center p-12">
                        <img
                            src="/images/hero-background.jpg"
                            alt="Restaurant"
                            className="absolute inset-0 w-full h-full object-cover rounded-none"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/40"></div>

                        <div className="relative text-center text-white">
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-fade-in">
                                <span className="bg-gradient-to-r from-[#C9A050] via-[#F4D483] to-[#C9A050] bg-clip-text text-white">
                                    Dine
                                </span>
                                <span className="bg-gradient-to-r from-[#C9A050] via-[#F4D483] to-[#C9A050] bg-clip-text text-transparent">
                                    X
                                </span>
                            </h1>
                            <p className="text-xl text-white/xl drop-shadow-md mb-4">
                                For Business
                            </p>
                            <p className="text-lg text-white/90 drop-shadow-md">
                                Join thousands of restaurants managing reservations seamlessly
                            </p>
                        </div>
                    </div>

                    {/* Right Side - Registration Form */}
                    <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center overflow-y-auto">
                        <div className="max-w-md mx-auto w-full">
                            {/* Progress Indicator */}
                            <div className="flex items-center justify-center mb-8">
                                <div className="flex items-center">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${currentStep === 1 ? 'bg-[#C9A050] text-white' : 'bg-[#C9A050] text-white'}`}>
                                        1
                                    </div>
                                    <div className={`w-16 h-1 ${currentStep === 2 ? 'bg-[#C9A050]' : 'bg-gray-300'}`}></div>
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${currentStep === 2 ? 'bg-[#C9A050] text-white' : 'bg-gray-300 text-gray-500'}`}>
                                        2
                                    </div>
                                </div>
                            </div>

                            <h2 className="text-3xl font-bold text-[#E6B65C] mb-2">
                                {currentStep === 1 ? "Owner Details" : "Restaurant Details"}
                            </h2>
                            <p className="text-gray-600 mb-6">
                                {currentStep === 1 ? "Tell us about yourself" : "Tell us about your restaurant"}
                            </p>

                            {/* Step 1: Owner Details */}
                            {currentStep === 1 && (
                                <form className="space-y-5">
                                    {/* Owner Name */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            value={form.ownerName}
                                            onChange={(e) => setForm({ ...form, ownerName: e.target.value })}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A050] focus:border-[#C9A050] transition-colors outline-none placeholder-gray-500 text-gray-700"
                                            placeholder="Enter your full name"
                                            required
                                        />
                                    </div>

                                    {/* Owner Email */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            value={form.ownerEmail}
                                            onChange={(e) => setForm({ ...form, ownerEmail: e.target.value })}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A050] focus:border-[#C9A050] transition-colors outline-none placeholder-gray-500 text-gray-700"
                                            placeholder="Enter your email address"
                                            required
                                        />
                                    </div>

                                    {/* Owner Phone */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            value={form.ownerPhone}
                                            onChange={(e) => setForm({ ...form, ownerPhone: e.target.value })}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A050] focus:border-[#C9A050] transition-colors outline-none placeholder-gray-500 text-gray-700"
                                            placeholder="Enter your phone number"
                                            required
                                        />
                                    </div>

                                    {/* Password */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Password
                                        </label>
                                        <div className="relative">
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                value={form.ownerPassword}
                                                onChange={(e) => setForm({ ...form, ownerPassword: e.target.value })}
                                                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A050] focus:border-[#C9A050] transition-colors outline-none placeholder-gray-500 text-gray-700"
                                                placeholder="Create a strong password"
                                                required
                                                minLength={6}
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-[#8B6F3E]"
                                            >
                                                {showPassword ? (
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                                                    </svg>
                                                ) : (
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                    </svg>
                                                )}
                                            </button>
                                        </div>
                                        <p className="text-xs text-gray-500 mt-1">Password must be at least 6 characters long</p>
                                    </div>

                                    {/* Confirm Password */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Confirm Password
                                        </label>
                                        <input
                                            type="password"
                                            value={form.confirmPassword}
                                            onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A050] focus:border-[#C9A050] transition-colors outline-none placeholder-gray-500 text-gray-700"
                                            placeholder="Confirm your password"
                                            required
                                        />
                                    </div>

                                    {/* Next Button */}
                                    <button
                                        type="button"
                                        onClick={handleNext}
                                        className="w-full bg-gradient-to-r from-[#C9A050] to-[#8B6F3E] hover:from-[#8B6F3E] hover:to-[#C9A050] text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl"
                                    >
                                        Next
                                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </form>
                            )}

                            {/* Step 2: Restaurant Details */}
                            {currentStep === 2 && (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    {/* Restaurant Name */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Restaurant Name
                                        </label>
                                        <input
                                            type="text"
                                            value={form.restaurantName}
                                            onChange={(e) => setForm({ ...form, restaurantName: e.target.value })}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A050] focus:border-[#C9A050] transition-colors outline-none placeholder-gray-500 text-gray-700"
                                            placeholder="Enter restaurant name"
                                            required
                                        />
                                    </div>

                                    {/* Restaurant Type */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Restaurant Type
                                        </label>
                                        <select
                                            value={form.restaurantType}
                                            onChange={(e) => setForm({ ...form, restaurantType: e.target.value })}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A050] focus:border-[#C9A050] transition-colors outline-none text-gray-700"
                                            required
                                        >
                                            {restaurantTypes.map((type) => (
                                                <option key={type} value={type}>{type}</option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Full Address */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Full Address
                                        </label>
                                        <textarea
                                            value={form.addressFull}
                                            onChange={(e) => setForm({ ...form, addressFull: e.target.value })}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A050] focus:border-[#C9A050] transition-colors outline-none placeholder-gray-500 text-gray-700"
                                            placeholder="Enter complete address"
                                            rows="2"
                                            required
                                        />
                                    </div>

                                    {/* City, State, Pincode */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                City
                                            </label>
                                            <input
                                                type="text"
                                                value={form.addressCity}
                                                onChange={(e) => setForm({ ...form, addressCity: e.target.value })}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A050] focus:border-[#C9A050] transition-colors outline-none placeholder-gray-500 text-gray-700"
                                                placeholder="City"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                State
                                            </label>
                                            <input
                                                type="text"
                                                value={form.addressState}
                                                onChange={(e) => setForm({ ...form, addressState: e.target.value })}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A050] focus:border-[#C9A050] transition-colors outline-none placeholder-gray-500 text-gray-700"
                                                placeholder="State"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Pincode
                                            </label>
                                            <input
                                                type="text"
                                                value={form.addressPincode}
                                                onChange={(e) => setForm({ ...form, addressPincode: e.target.value })}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A050] focus:border-[#C9A050] transition-colors outline-none placeholder-gray-500 text-gray-700"
                                                placeholder="Pincode"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Total Tables
                                            </label>
                                            <input
                                                type="number"
                                                value={form.totalTables}
                                                onChange={(e) => setForm({ ...form, totalTables: e.target.value })}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A050] focus:border-[#C9A050] transition-colors outline-none placeholder-gray-500 text-gray-700"
                                                placeholder="Number of tables"
                                                min="1"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Buttons */}
                                    <div className="flex gap-4">
                                        <button
                                            type="button"
                                            onClick={handleBack}
                                            className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center"
                                        >
                                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                            </svg>
                                            Back
                                        </button>
                                        <button
                                            type="submit"
                                            disabled={isLoading}
                                            className="flex-1 bg-gradient-to-r from-[#C9A050] to-[#8B6F3E] hover:from-[#8B6F3E] hover:to-[#C9A050] disabled:opacity-50 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl"
                                        >
                                            {isLoading ? (
                                                <>
                                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Registering...
                                                </>
                                            ) : (
                                                'Complete Registration'
                                            )}
                                        </button>
                                    </div>
                                </form>
                            )}

                            {/* Login link */}
                            <div className="mt-5 text-center">
                                <p className="text-gray-600">
                                    Already have an account?{' '}
                                    <Link href="/business/login" className="text-[#8B6F3E] hover:text-[#C9A050] font-semibold">
                                        Log in here
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function RegisterPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-[#FFF8E7] flex items-center justify-center"><div className="animate-spin w-12 h-12 border-4 border-[#C9A050] border-t-transparent rounded-full"></div></div>}>
            <RegisterForm />
        </Suspense>
    );
}
