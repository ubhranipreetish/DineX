"use client";
import { useNotification } from "@/context/NotificationContext";
import { useEffect, useState } from "react";

const typeStyles = {
    warning: {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
        ),
        iconBg: "bg-amber-100",
        iconColor: "text-amber-600",
        confirmBtn: "bg-amber-500 hover:bg-amber-600",
    },
    danger: {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
        ),
        iconBg: "bg-red-100",
        iconColor: "text-red-600",
        confirmBtn: "bg-red-500 hover:bg-red-600",
    },
    info: {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600",
        confirmBtn: "bg-blue-500 hover:bg-blue-600",
    },
    success: {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
        ),
        iconBg: "bg-green-100",
        iconColor: "text-green-600",
        confirmBtn: "bg-green-500 hover:bg-green-600",
    },
};

export default function ConfirmDialog() {
    const { dialog } = useNotification();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (dialog) {
            requestAnimationFrame(() => setIsVisible(true));
        } else {
            setIsVisible(false);
        }
    }, [dialog]);

    if (!dialog) return null;

    const type = typeStyles[dialog.type] || typeStyles.warning;

    return (
        <div
            className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 transition-all duration-200
        ${isVisible ? "bg-black/50" : "bg-transparent"}`}
            onClick={dialog.onCancel}
        >
            <div
                className={`bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 transition-all duration-300 
          ${isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Icon */}
                <div className={`w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-4 ${type.iconBg} ${type.iconColor}`}>
                    {type.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
                    {dialog.title}
                </h3>

                {/* Message */}
                <p className="text-gray-600 text-center mb-6">
                    {dialog.message}
                </p>

                {/* Buttons */}
                <div className="flex gap-3">
                    <button
                        onClick={dialog.onCancel}
                        className="flex-1 px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl transition-colors cursor-pointer"
                    >
                        {dialog.cancelText}
                    </button>
                    <button
                        onClick={dialog.onConfirm}
                        className={`flex-1 px-4 py-3 text-white font-semibold rounded-xl transition-colors cursor-pointer ${type.confirmBtn}`}
                    >
                        {dialog.confirmText}
                    </button>
                </div>
            </div>
        </div>
    );
}
