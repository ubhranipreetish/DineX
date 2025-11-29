"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function DashboardNav() {
    const pathname = usePathname();

    const navItems = [
        { name: "Dashboard", path: "/business/owner/dashboard" },
        { name: "Analytics", path: "/business/owner/analytics" },
        { name: "Staff", path: "/business/owner/staff" },
    ];

    return (
        <nav className="bg-white border-b border-gray-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/business/owner/dashboard" className="flex items-center">
                        <Image
                            src="/images/logo2.png"
                            alt="DineX Logo"
                            width={100}
                            height={40}
                            unoptimized
                            className="object-contain h-10"
                        />
                    </Link>

                    {/* Center Navigation Links */}
                    <div className="flex items-center gap-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={`px-4 py-2 text-sm font-medium transition-colors relative ${pathname === item.path
                                        ? "text-gray-900"
                                        : "text-gray-500 hover:text-gray-900"
                                    }`}
                            >
                                {item.name}
                                {/* Active underline indicator */}
                                {pathname === item.path && (
                                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C9A050]"></span>
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Profile Link - Right Side */}
                    <Link
                        href="/business/owner/settings"
                        className={`px-4 py-2 text-sm font-medium transition-colors relative ${pathname === "/business/owner/settings"
                                ? "text-gray-900"
                                : "text-gray-500 hover:text-gray-900"
                            }`}
                    >
                        Settings
                        {/* Active underline indicator */}
                        {pathname === "/business/owner/settings" && (
                            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C9A050]"></span>
                        )}
                    </Link>
                </div>
            </div>
        </nav>
    );
}
