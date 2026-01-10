"use client";
import { createContext, useContext, useState, useCallback } from "react";

const NotificationContext = createContext();

export function useNotification() {
    const context = useContext(NotificationContext);
    if (!context) {
        throw new Error("useNotification must be used within NotificationProvider");
    }
    return context;
}

export function NotificationProvider({ children }) {
    const [toasts, setToasts] = useState([]);
    const [dialog, setDialog] = useState(null);

    // Toast notifications
    const showToast = useCallback((message, type = "info") => {
        const id = Date.now() + Math.random();
        setToasts((prev) => [...prev, { id, message, type }]);

        // Auto-dismiss after 4 seconds
        setTimeout(() => {
            setToasts((prev) => prev.filter((t) => t.id !== id));
        }, 4000);
    }, []);

    const hideToast = useCallback((id) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    }, []);

    // Confirmation dialog
    const showDialog = useCallback((options) => {
        return new Promise((resolve) => {
            setDialog({
                title: options.title || "Confirm",
                message: options.message || "Are you sure?",
                confirmText: options.confirmText || "Confirm",
                cancelText: options.cancelText || "Cancel",
                type: options.type || "warning", // warning, danger, info
                onConfirm: () => {
                    setDialog(null);
                    resolve(true);
                },
                onCancel: () => {
                    setDialog(null);
                    resolve(false);
                },
            });
        });
    }, []);

    const hideDialog = useCallback(() => {
        setDialog(null);
    }, []);

    return (
        <NotificationContext.Provider
            value={{ showToast, hideToast, toasts, showDialog, hideDialog, dialog }}
        >
            {children}
        </NotificationContext.Provider>
    );
}
