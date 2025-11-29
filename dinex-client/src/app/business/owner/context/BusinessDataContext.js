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
            router.push("/business/login");
            return;
        }

        fetchAllData();
    }, []);

    const fetchAllData = async () => {
        try {
            const token = localStorage.getItem("businessToken");

            // Fetch profile and staff in parallel
            const [profileRes, staffRes] = await Promise.all([
                API.get("/api/business/profile", {
                    headers: { Authorization: `Bearer ${token}` },
                }),
                API.get("/api/business/staff", {
                    headers: { Authorization: `Bearer ${token}` },
                })
            ]);

            setOwnerData(profileRes.data.owner);
            setStaff(staffRes.data.staff);
            setIsLoading(false);
        } catch (err) {
            console.error("Error fetching data:", err);
            setIsLoading(false);

            if (err.response?.status === 401) {
                alert("Session expired. Please login again.");
                router.push("/business/login");
            } else {
                alert("Failed to load data. Please try again.");
            }
        }
    };

    const updateOwnerData = (newData) => {
        setOwnerData(newData);
        localStorage.setItem("businessOwner", JSON.stringify(newData));
    };

    const refreshStaff = async () => {
        try {
            const token = localStorage.getItem("businessToken");
            const res = await API.get("/api/business/staff", {
                headers: { Authorization: `Bearer ${token}` },
            });
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
