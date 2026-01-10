"use client";
import { useNotification } from "@/context/NotificationContext";
import { useEffect, useState } from "react";

const icons = {
    success: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
    ),
    error: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
    ),
    warning: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
    ),
    info: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    ),
};

const styles = {
    success: "bg-green-50 border-green-500 text-green-800",
    error: "bg-red-50 border-red-500 text-red-800",
    warning: "bg-amber-50 border-amber-500 text-amber-800",
    info: "bg-blue-50 border-blue-500 text-blue-800",
};

const iconBg = {
    success: "bg-green-500",
    error: "bg-red-500",
    warning: "bg-amber-500",
    info: "bg-blue-500",
};

function ToastItem({ toast, onClose }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger animation after mount
        requestAnimationFrame(() => setIsVisible(true));
    }, []);

    return (
        <div
            className={`flex items-center gap-3 p-4 rounded-xl border-l-4 shadow-lg backdrop-blur-sm 
        transition-all duration-300 ease-out cursor-pointer
        ${styles[toast.type] || styles.info}
        ${isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
            onClick={() => onClose(toast.id)}
            role="alert"
        >
            <div className={`p-1.5 rounded-full text-white ${iconBg[toast.type] || iconBg.info}`}>
                {icons[toast.type] || icons.info}
            </div>
            <p className="flex-1 font-medium text-sm">{toast.message}</p>
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    onClose(toast.id);
                }}
                className="text-current opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    );
}

export default function Toast() {
    const { toasts, hideToast } = useNotification();

    if (toasts.length === 0) return null;

    return (
        <div className="fixed bottom-4 right-4 z-[9999] flex flex-col gap-2 max-w-sm w-full pointer-events-auto">
            {toasts.map((toast) => (
                <ToastItem key={toast.id} toast={toast} onClose={hideToast} />
            ))}
        </div>
    );
}
