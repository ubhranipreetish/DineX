"use client";
import { BusinessDataProvider } from "./context/BusinessDataContext";

export default function OwnerLayout({ children }) {
    return <BusinessDataProvider className="bg-[#FFF8E7]">{children}</BusinessDataProvider>;
}
