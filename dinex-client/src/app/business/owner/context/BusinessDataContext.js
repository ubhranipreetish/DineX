"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { API } from "@/utils/api";

const BusinessDataContext = createContext(null);

export function BusinessDataProvider({ children }) {
    const [ownerData, setOwnerData] = useState(null);
    const [staff, setStaff] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("businessToken");
        const owner = localStorage.getItem("businessOwner");

        if (!token || !owner) {
            router.push("/business/owner/login");
            return;
        }

        fetchAllData(token);
    }, []);

    const fetchAllData = async (token) => {
        try {
            // Set token in headers for API calls
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            };

            // Fetch profile and staff in parallel
            const [profileRes, staffRes] = await Promise.all([
                API.get("/api/business/profile", config),
                API.get("/api/business/staff", config)
            ]);

            setOwnerData(profileRes.data.owner);
            setStaff(staffRes.data.staff);
            setIsLoading(false);
        } catch (err) {
            console.error("Error fetching data:", err);
            // Check if error is due to invalid/expired token
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
