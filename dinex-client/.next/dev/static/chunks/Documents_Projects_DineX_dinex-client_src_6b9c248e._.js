(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Projects/DineX/dinex-client/src/utils/api.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/utils/api.js
__turbopack_context__.s([
    "API",
    ()=>API
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const API = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: ("TURBOPACK compile-time value", "http://localhost:8080")
});
API.interceptors.request.use((config)=>{
    let token = null;
    const url = config.url || "";
    // Staff endpoints (orders + staff routes)
    if (url.startsWith("/api/orders") || url.startsWith("/api/business/staff")) {
        token = localStorage.getItem("staffToken");
    } else if (url.startsWith("/api/business")) {
        token = localStorage.getItem("businessToken");
    } else {
        token = localStorage.getItem("userToken");
    }
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error)=>Promise.reject(error));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/context/OrderContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OrderProvider",
    ()=>OrderProvider,
    "useOrder",
    ()=>useOrder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$src$2f$utils$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/src/utils/api.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const OrderContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])();
const useOrder = ()=>{
    _s();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(OrderContext);
    if (!context) {
        throw new Error('useOrder must be used within OrderProvider');
    }
    return context;
};
_s(useOrder, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
const OrderProvider = ({ children })=>{
    _s1();
    const [orders, setOrders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [tables, setTables] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [restaurant, setRestaurant] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [cancelledOrders, setCancelledOrders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Initialize from localStorage and fetch restaurant data
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrderProvider.useEffect": ()=>{
            const savedOrders = localStorage.getItem('dinex_orders');
            const savedTables = localStorage.getItem('dinex_tables');
            if (savedOrders) {
                setOrders(JSON.parse(savedOrders));
            }
            // Fetch restaurant profile to get table count
            // Fetch restaurant profile to get table count
            const fetchRestaurantData = {
                "OrderProvider.useEffect.fetchRestaurantData": async ()=>{
                    try {
                        const token = localStorage.getItem('staffToken');
                        if (!token) return;
                        const headers = {
                            Authorization: `Bearer ${token}`
                        };
                        // 1. Fetch Restaurant Profile (includes tables)
                        const profileRes = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$src$2f$utils$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].get('/api/business/staff/profile', {
                            headers
                        });
                        const restaurantData = profileRes.data;
                        setRestaurant(restaurantData);
                        // 2. Fetch Ongoing Orders (to map to local state for quick access)
                        const ordersRes = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$src$2f$utils$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].get('/api/orders/ongoing', {
                            headers
                        });
                        const activeOrders = ordersRes.data.orders;
                        // 3. Set Tables directly from backend
                        if (restaurantData.tables && Array.isArray(restaurantData.tables)) {
                            const backendTables = restaurantData.tables.map({
                                "OrderProvider.useEffect.fetchRestaurantData.backendTables": (t)=>({
                                        id: t.tableNumber,
                                        tableNumber: t.tableNumber,
                                        status: t.status,
                                        currentBill: t.currentBill,
                                        guests: 0,
                                        orderId: activeOrders.find({
                                            "OrderProvider.useEffect.fetchRestaurantData.backendTables": (o)=>o.tableNo === t.tableNumber
                                        }["OrderProvider.useEffect.fetchRestaurantData.backendTables"])?.orderId || null,
                                        seatedAt: null
                                    })
                            }["OrderProvider.useEffect.fetchRestaurantData.backendTables"]);
                            setTables(backendTables);
                            localStorage.setItem('dinex_tables', JSON.stringify(backendTables));
                        } else {
                            // Fallback if tables are missing (shouldn't happen with migration)
                            console.warn("No tables found in profile, using default");
                            const defaultTables = Array.from({
                                length: 20
                            }, {
                                "OrderProvider.useEffect.fetchRestaurantData.defaultTables": (_, i)=>({
                                        id: i + 1,
                                        tableNumber: i + 1,
                                        status: 'free',
                                        currentBill: 0,
                                        guests: 0,
                                        orderId: null,
                                        seatedAt: null
                                    })
                            }["OrderProvider.useEffect.fetchRestaurantData.defaultTables"]);
                            setTables(defaultTables);
                        }
                        // Map orders to state object
                        const ordersMap = {};
                        activeOrders.forEach({
                            "OrderProvider.useEffect.fetchRestaurantData": (o)=>{
                                ordersMap[o.orderId] = {
                                    ...o,
                                    items: o.items.map({
                                        "OrderProvider.useEffect.fetchRestaurantData": (i)=>({
                                                ...i,
                                                status: i.status || "preparing"
                                            })
                                    }["OrderProvider.useEffect.fetchRestaurantData"])
                                };
                            }
                        }["OrderProvider.useEffect.fetchRestaurantData"]);
                        setOrders(ordersMap);
                    } catch (error) {
                        console.error('Error fetching restaurant data:', error);
                    }
                }
            }["OrderProvider.useEffect.fetchRestaurantData"];
            fetchRestaurantData();
        }
    }["OrderProvider.useEffect"], []);
    // Save to localStorage whenever orders change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrderProvider.useEffect": ()=>{
            if (Object.keys(orders).length > 0) {
                localStorage.setItem('dinex_orders', JSON.stringify(orders));
            }
        }
    }["OrderProvider.useEffect"], [
        orders
    ]);
    // Save to localStorage whenever tables change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrderProvider.useEffect": ()=>{
            if (tables.length > 0) {
                localStorage.setItem('dinex_tables', JSON.stringify(tables));
            }
        }
    }["OrderProvider.useEffect"], [
        tables
    ]);
    const createOrder = async (tableId, items, guests = 0)=>{
        try {
            const token = localStorage.getItem('staffToken');
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$src$2f$utils$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].post('/api/orders', {
                tableNo: tableId,
                items: items.map((i)=>({
                        itemId: i.id,
                        name: i.name,
                        price: i.price,
                        quantity: i.quantity
                    }))
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const newOrder = res.data.order;
            // Update local state
            setOrders((prev)=>({
                    ...prev,
                    [newOrder.orderId]: newOrder
                }));
            // Update table state (optimistic or based on response)
            setTables((prev)=>prev.map((t)=>t.id === tableId ? {
                        ...t,
                        status: 'occupied',
                        orderId: newOrder.orderId,
                        currentBill: newOrder.totalAmount,
                        seatedAt: newOrder.createdAt,
                        guests: guests
                    } : t));
            return newOrder.orderId;
        } catch (error) {
            console.error('Error creating order:', error);
            throw error;
        }
    };
    const addItemsToOrder = async (orderId, newItems)=>{
        try {
            const token = localStorage.getItem('staffToken');
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$src$2f$utils$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].post(`/api/orders/${orderId}/items`, {
                items: newItems.map((i)=>({
                        itemId: i.id,
                        name: i.name,
                        price: i.price,
                        quantity: i.quantity
                    }))
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const updatedOrder = res.data.order;
            setOrders((prev)=>({
                    ...prev,
                    [orderId]: updatedOrder
                }));
            // Update table bill
            setTables((prev)=>prev.map((t)=>t.orderId === orderId ? {
                        ...t,
                        currentBill: updatedOrder.totalAmount
                    } : t));
        } catch (error) {
            console.error('Error adding items:', error);
        }
    };
    const updateItemStatus = (orderId, itemId, status)=>{
        // Placeholder for item status update if backend supports it
        // For now, update local state
        setOrders((prev)=>{
            const order = prev[orderId];
            if (!order) return prev;
            const updatedItems = order.items.map((item)=>item.id === itemId || item.itemId === itemId ? {
                    ...item,
                    status
                } : item);
            return {
                ...prev,
                [orderId]: {
                    ...order,
                    items: updatedItems
                }
            };
        });
    };
    const removeItemFromOrder = async (orderId, itemIndex)=>{
        try {
            const token = localStorage.getItem('staffToken');
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$src$2f$utils$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].delete(`/api/orders/${orderId}/items/${itemIndex}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const updatedOrder = res.data.order;
            setOrders((prev)=>({
                    ...prev,
                    [orderId]: updatedOrder
                }));
            // Update table bill
            setTables((prev)=>prev.map((t)=>t.orderId === orderId ? {
                        ...t,
                        currentBill: updatedOrder.totalAmount
                    } : t));
        } catch (error) {
            console.error('Error removing item:', error);
        }
    };
    const completeOrder = (orderId)=>{
        return orderId;
    };
    const markAsPaid = async (orderId)=>{
        try {
            const token = localStorage.getItem('staffToken');
            await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$src$2f$utils$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].patch(`/api/orders/${orderId}/complete`, {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            // Remove from active orders
            setOrders((prev)=>{
                const updated = {
                    ...prev
                };
                delete updated[orderId];
                return updated;
            });
            // Reset table
            const order = orders[orderId];
            if (order) {
                setTables((prev)=>prev.map((t)=>t.id === order.tableNo // Use tableNo from order
                         ? {
                            ...t,
                            status: 'free',
                            orderId: null,
                            currentBill: 0,
                            seatedAt: null,
                            guests: 0
                        } : t));
            }
        } catch (error) {
            console.error('Error completing order:', error);
        }
    };
    const cancelOrder = async (orderId)=>{
        try {
            const token = localStorage.getItem('staffToken');
            await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$src$2f$utils$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].patch(`/api/orders/${orderId}/cancel`, {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            // Remove from active orders
            setOrders((prev)=>{
                const updated = {
                    ...prev
                };
                delete updated[orderId];
                return updated;
            });
            // Reset table
            const order = orders[orderId];
            if (order) {
                setTables((prev)=>prev.map((t)=>t.id === order.tableNo ? {
                            ...t,
                            status: 'free',
                            orderId: null,
                            currentBill: 0,
                            seatedAt: null,
                            guests: 0
                        } : t));
            }
        } catch (error) {
            console.error('Error cancelling order:', error);
        }
    };
    const calculateBill = (items)=>{
        const subtotal = items.reduce((sum, item)=>sum + item.price * item.quantity, 0);
        const cgst = subtotal * 0.025;
        const sgst = subtotal * 0.025;
        const total = subtotal + cgst + sgst;
        return {
            subtotal: Math.round(subtotal * 100) / 100,
            cgst: Math.round(cgst * 100) / 100,
            sgst: Math.round(sgst * 100) / 100,
            total: Math.round(total * 100) / 100
        };
    };
    const getOrderByTableId = (tableId)=>{
        const table = tables.find((t)=>t.id === tableId);
        if (!table || !table.orderId) return null;
        return orders[table.orderId];
    };
    const getActiveOrders = ()=>{
        return Object.values(orders).filter((order)=>order.status === "ongoing");
    };
    const getCancelledOrders = async ()=>{
        try {
            const token = localStorage.getItem('staffToken');
            if (!token) return;
            const headers = {
                Authorization: `Bearer ${token}`
            };
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$src$2f$utils$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].get('/api/orders?status=cancelled', {
                headers
            });
            setCancelledOrders(res.data.orders || []);
        } catch (error) {
            console.error('Error fetching cancelled orders:', error);
        }
    };
    const deleteOrder = async (orderId)=>{
        try {
            const token = localStorage.getItem('staffToken');
            await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$src$2f$utils$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].delete(`/api/orders/${orderId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            // Remove from cancelled orders list
            setCancelledOrders((prev)=>prev.filter((o)=>o.orderId !== orderId));
        } catch (error) {
            console.error('Error deleting order:', error);
            throw error;
        }
    };
    const value = {
        orders,
        tables,
        restaurant,
        cancelledOrders,
        createOrder,
        addItemsToOrder,
        updateItemStatus,
        removeItemFromOrder,
        completeOrder,
        markAsPaid,
        cancelOrder,
        calculateBill,
        getOrderByTableId,
        getActiveOrders,
        getCancelledOrders,
        deleteOrder
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OrderContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/context/OrderContext.js",
        lineNumber: 354,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(OrderProvider, "T4wcXWx7tjxElRLT+/YoATouJTM=");
_c = OrderProvider;
var _c;
__turbopack_context__.k.register(_c, "OrderProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_Projects_DineX_dinex-client_src_6b9c248e._.js.map