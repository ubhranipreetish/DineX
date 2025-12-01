"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { API } from "@/utils/api";

const BusinessDataContext = createContext(null);

export function BusinessDataProvider({ children }) {
    const [ownerData, setOwnerData] = useState(null);
    const [staff, setStaff] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        // Don't check auth on login/register pages
        const isAuthPage = pathname?.includes("/login") || pathname?.includes("/register");

        if (isAuthPage) {
            setIsLoading(false);
            return;
        }

        const businessToken = localStorage.getItem("businessToken");
        const businessOwner = localStorage.getItem("businessOwner");

        if (!businessToken || !businessOwner) {
            router.push("/business/owner/login");
            setIsLoading(false);
            return;
        }

        fetchAllData(businessToken);
    }, [pathname]);

    const fetchAllData = async (businessToken) => {
        try {
            // Set businessToken in headers for API calls
            const config = {
                headers: {
                    Authorization: `Bearer ${businessToken}`
                }
            };

            // Fetch profile and staff in parallel
            const [profileRes, staffRes] = await Promise.all([
                API.get("/api/business/profile", config),
                API.get("/api/business/staff", config)
            ]);

            setOwnerData(profileRes.data.businessOwner);
            setStaff(staffRes.data.staff);
            setIsLoading(false);
        } catch (err) {
            console.error("Error fetching data:", err);
            // Check if error is due to invalid/expired businessToken
            if (err.response?.status === 401 || err.response?.status === 403) {
                localStorage.removeItem("businessToken");
                localStorage.removeItem("businessOwner");
                router.push("/business/owner/login");
            }
            setIsLoading(false);
        }
    };

    const updateOwnerData = (newData) => {
        setOwnerData(newData);
        localStorage.setItem("businessOwner", JSON.stringify(newData));
    };

    const refreshStaff = async () => {
        try {
            const res = await API.get("/api/business/staff");
            setStaff(res.data.staff);
        } catch (err) {
            console.error("Error refreshing staff:", err);
        }
    };

    const value = {
        ownerData,
        staff,
        isLoading,
        updateOwnerData,
        refreshStaff,
        refetchAll: fetchAllData,
    };

    return (
        <BusinessDataContext.Provider value={value}>
            {children}
        </BusinessDataContext.Provider>
    );
}

export function useBusinessData() {
    const context = useContext(BusinessDataContext);
    if (!context) {
        throw new Error("useBusinessData must be used within BusinessDataProvider");
    }
    return context;
}
