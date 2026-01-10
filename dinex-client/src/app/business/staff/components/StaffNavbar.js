"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { LogOut, User } from "lucide-react";
import { useOrder } from '../context/OrderContext';
import { useNotification } from "@/context/NotificationContext";

export default function StaffNavbar() {
    const [staff, setStaff] = useState(null);
    const router = useRouter();
    const { restaurant } = useOrder();
    const { showDialog } = useNotification();

    useEffect(() => {
        const loadStaff = () => {
            const storedStaff = localStorage.getItem("staffUser");
            if (storedStaff) {
                try {
                    setStaff(JSON.parse(storedStaff));
                } catch (e) {
                    setStaff(null);
                }
            } else {
                setStaff(null);
            }
        };

        // Load staff on mount
        loadStaff();

        // Listen for staff updates
        window.addEventListener("staffUpdated", loadStaff);

        return () => {
            window.removeEventListener("staffUpdated", loadStaff);
        };
    }, []);

    const handleLogout = async () => {
        const confirmed = await showDialog({
            title: "Logout",
            message: "Are you sure you want to logout?",
            confirmText: "Logout",
            cancelText: "Cancel",
            type: "warning",
        });
        if (confirmed) {
            localStorage.removeItem("staffToken");
            localStorage.removeItem("staffUser");
            window.dispatchEvent(new Event("staffUpdated"));
            router.push("/business/staff/login");
        }
    };

    return (
        <nav className="w-full bg-white shadow-md border-b-2 border-[#D4C5B0] sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
                {/* Logo and Restaurant Name */}
                <div className="flex items-center gap-4">
                    <Link href="/business/staff/home" className="flex items-center">
                        <Image
                            src="/images/logo2.png"
                            alt="DineX Logo"
                            width={100}
                            height={40}
                            unoptimized
                            className="object-contain w-[80px] sm:w-[100px] h-auto"
                        />
                    </Link>
                </div>

                {/* Staff Profile Section */}
                <div className="flex items-center gap-3 sm:gap-4">
                    {staff ? (
                        <>
                            {/* Profile Info */}
                            <div className="flex items-center gap-2 sm:gap-3">
                                {/* Avatar */}
                                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#C9A050] text-white flex items-center justify-center font-bold text-base sm:text-lg shadow-md">
                                    {staff.name ? staff.name[0].toUpperCase() : "S"}
                                </div>
                                {/* Name */}
                                <div className="hidden sm:block">
                                    <p className="font-semibold text-[#4A3F35] text-sm">
                                        {staff.name || "Staff Member"}
                                    </p>
                                    <p className="text-xs text-[#6B5B4A]">
                                        {staff.role || "Staff"}
                                    </p>
                                </div>
                            </div>

                            {/* Logout Button */}
                            <button
                                onClick={handleLogout}
                                className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-[#8B6F47] hover:from-[#7A5F3C] hover:to-[#5A4A39] text-white rounded-xl transition-all font-semibold shadow-md hover:shadow-lg active:scale-95 text-sm cursor-pointer"
                                title="Logout"
                            >
                                <LogOut className="w-4 h-4" />
                                <span className="hidden sm:inline">Logout</span>
                            </button>
                        </>
                    ) : (
                        <Link
                            href="/business/staff/login"
                            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#C9A050] to-[#F4D483] hover:from-[#B8903D] hover:to-[#E8C670] text-white rounded-xl transition-all font-semibold shadow-md hover:shadow-lg text-sm"
                        >
                            <User className="w-4 h-4" />
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
}
