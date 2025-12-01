"use client";
import { useState, Suspense } from "react";
import { useRouter } from "next/navigation";
import { API } from "@/utils/api";

function StaffLoginForm() {
    const [form, setForm] = useState({
        restaurantName: "",
        phone: "",
        password: ""
    });
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const res = await API.post("/api/business/staff/login", form);
            const { staffToken, staffUser } = res.data;

            if (staffToken) localStorage.setItem("staffToken", staffToken);
            if (staffUser) {
                localStorage.setItem("staffUser", JSON.stringify(staffUser));
            }

            alert("Login successful! Welcome back.");
            router.push("/business/staff/home");
        } catch (err) {
            alert(err.response?.data?.msg || "Login failed");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#FFF8E7] to-[#F4D483] flex items-center justify-center p-4 lg:p-8">
            <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden p-8">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold mb-2">
                        <span className="bg-gradient-to-r from-[#C9A050] via-[#F4D483] to-[#C9A050] bg-clip-text text-transparent">
                            DineX
                        </span>
                    </h1>
                    <h2 className="text-2xl font-bold text-[#E6B65C]">Staff Login</h2>
                    <p className="text-gray-600 mt-2">Access your restaurant dashboard</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    {/* Restaurant Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Restaurant Name
                        </label>
                        <input
                            type="text"
                            value={form.restaurantName}
                            onChange={(e) => setForm({ ...form, restaurantName: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A050] focus:border-[#C9A050] transition-colors outline-none text-gray-700"
                            placeholder="Enter restaurant name"
                            required
                        />
                    </div>

                    {/* Phone Number */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A050] focus:border-[#C9A050] transition-colors outline-none text-gray-700"
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
                                value={form.password}
                                onChange={(e) => setForm({ ...form, password: e.target.value })}
                                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A050] focus:border-[#C9A050] transition-colors outline-none text-gray-700"
                                placeholder="Enter your password"
                                required
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
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-gradient-to-r from-[#C9A050] to-[#8B6F3E] hover:from-[#8B6F3E] hover:to-[#C9A050] disabled:opacity-50 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl"
                    >
                        {isLoading ? (
                            <>
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Logging in...
                            </>
                        ) : (
                            'Log In'
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default function StaffLoginPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-[#FFF8E7] flex items-center justify-center"><div className="animate-spin w-12 h-12 border-4 border-[#C9A050] border-t-transparent rounded-full"></div></div>}>
            <StaffLoginForm />
        </Suspense>
    );
}
