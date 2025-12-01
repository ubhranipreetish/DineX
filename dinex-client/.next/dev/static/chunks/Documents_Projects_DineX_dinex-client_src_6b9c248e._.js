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
    baseURL: ("TURBOPACK compile-time value", "https://dinex-24s9.onrender.com")
});
// Add request interceptor to attach the correct token based on the endpoint
API.interceptors.request.use((config)=>{
    let token = null;
    // Determine which token to use based on the request URL
    if (config.url?.includes('/api/business/staff/login') || config.url?.includes('/api/business/staff/profile')) {
        // Staff member authentication endpoints
        token = localStorage.getItem("staffToken");
    } else if (config.url?.includes('/api/business')) {
        // Business owner endpoints (including staff management)
        token = localStorage.getItem("businessToken");
    } else {
        // Customer endpoints (default)
        token = localStorage.getItem("userToken");
    }
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error)=>{
    return Promise.reject(error);
});
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
    // Initialize from localStorage and fetch restaurant data
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrderProvider.useEffect": ()=>{
            const savedOrders = localStorage.getItem('dinex_orders');
            const savedTables = localStorage.getItem('dinex_tables');
            if (savedOrders) {
                setOrders(JSON.parse(savedOrders));
            }
            // Fetch restaurant profile to get table count
            const fetchRestaurantData = {
                "OrderProvider.useEffect.fetchRestaurantData": async ()=>{
                    try {
                        const token = localStorage.getItem('staffToken');
                        if (!token) return;
                        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$src$2f$utils$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].get('/api/business/staff/profile', {
                            headers: {
                                Authorization: `Bearer ${token}`
                            }
                        });
                        const restaurantData = res.data;
                        console.log('Restaurant Data from API:', restaurantData);
                        setRestaurant(restaurantData);
                        // Ensure tables count is a number
                        const totalTables = parseInt(restaurantData.tables) || 20;
                        // Check if we have saved tables with correct count
                        if (savedTables) {
                            const parsedTables = JSON.parse(savedTables);
                            if (parsedTables.length === totalTables) {
                                setTables(parsedTables);
                                return;
                            }
                        }
                        // Initialize tables based on restaurant data
                        const initialTables = Array.from({
                            length: totalTables
                        }, {
                            "OrderProvider.useEffect.fetchRestaurantData.initialTables": (_, i)=>({
                                    id: i + 1,
                                    tableNumber: i + 1,
                                    status: 'free',
                                    currentBill: 0,
                                    guests: 0,
                                    orderId: null,
                                    seatedAt: null
                                })
                        }["OrderProvider.useEffect.fetchRestaurantData.initialTables"]);
                        setTables(initialTables);
                        localStorage.setItem('dinex_tables', JSON.stringify(initialTables));
                    } catch (error) {
                        console.error('Error fetching restaurant data:', error);
                        // Fallback to saved tables or default 20 tables
                        if (savedTables) {
                            setTables(JSON.parse(savedTables));
                        } else {
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
                            localStorage.setItem('dinex_tables', JSON.stringify(defaultTables));
                        }
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
    const createOrder = (tableId, items, guests = 0)=>{
        const orderId = `ORD_${Date.now()}`;
        const newOrder = {
            id: orderId,
            tableId,
            items: items.map((item)=>({
                    ...item,
                    status: 'preparing',
                    addedAt: new Date().toISOString()
                })),
            createdAt: new Date().toISOString(),
            status: 'active'
        };
        setOrders((prev)=>({
                ...prev,
                [orderId]: newOrder
            }));
        // Update table status
        setTables((prev)=>prev.map((table)=>table.id === tableId ? {
                    ...table,
                    status: 'occupied',
                    orderId,
                    guests,
                    seatedAt: new Date().toISOString(),
                    currentBill: calculateBill(items).total
                } : table));
        return orderId;
    };
    const addItemsToOrder = (orderId, newItems)=>{
        setOrders((prev)=>{
            const order = prev[orderId];
            if (!order) return prev;
            const updatedItems = [
                ...order.items,
                ...newItems.map((item)=>({
                        ...item,
                        status: 'preparing',
                        addedAt: new Date().toISOString()
                    }))
            ];
            const updatedOrder = {
                ...order,
                items: updatedItems
            };
            // Update table bill
            const tableId = order.tableId;
            setTables((tables)=>tables.map((table)=>table.id === tableId ? {
                        ...table,
                        currentBill: calculateBill(updatedItems).total
                    } : table));
            return {
                ...prev,
                [orderId]: updatedOrder
            };
        });
    };
    const updateItemStatus = (orderId, itemId, status)=>{
        setOrders((prev)=>{
            const order = prev[orderId];
            if (!order) return prev;
            const updatedItems = order.items.map((item)=>item.id === itemId && item.addedAt === itemId.split('_')[1] ? {
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
    const removeItemFromOrder = (orderId, itemIndex)=>{
        setOrders((prev)=>{
            const order = prev[orderId];
            if (!order) return prev;
            const updatedItems = order.items.filter((_, index)=>index !== itemIndex);
            const updatedOrder = {
                ...order,
                items: updatedItems
            };
            // Update table bill
            const tableId = order.tableId;
            setTables((tables)=>tables.map((table)=>table.id === tableId ? {
                        ...table,
                        currentBill: calculateBill(updatedItems).total
                    } : table));
            return {
                ...prev,
                [orderId]: updatedOrder
            };
        });
    };
    const completeOrder = (orderId)=>{
        // This function now goes directly to marking as paid
        // No intermediate "bill_pending" state
        return orderId;
    };
    const markAsPaid = (orderId)=>{
        const order = orders[orderId];
        if (!order) return;
        // Archive the order
        setOrders((prev)=>{
            const updated = {
                ...prev
            };
            delete updated[orderId];
            return updated;
        });
        // Reset table to free
        setTables((prev)=>prev.map((table)=>table.id === order.tableId ? {
                    ...table,
                    status: 'free',
                    currentBill: 0,
                    guests: 0,
                    orderId: null,
                    seatedAt: null
                } : table));
    };
    const cancelOrder = (orderId)=>{
        const order = orders[orderId];
        if (!order) return;
        // Remove the order
        setOrders((prev)=>{
            const updated = {
                ...prev
            };
            delete updated[orderId];
            return updated;
        });
        // Reset table to free
        setTables((prev)=>prev.map((table)=>table.id === order.tableId ? {
                    ...table,
                    status: 'free',
                    currentBill: 0,
                    guests: 0,
                    orderId: null,
                    seatedAt: null
                } : table));
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
        return Object.values(orders).filter((order)=>order.status === 'active');
    };
    const value = {
        orders,
        tables,
        restaurant,
        createOrder,
        addItemsToOrder,
        updateItemStatus,
        removeItemFromOrder,
        completeOrder,
        markAsPaid,
        cancelOrder,
        calculateBill,
        getOrderByTableId,
        getActiveOrders
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OrderContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/context/OrderContext.js",
        lineNumber: 303,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(OrderProvider, "D0Rqr1v7I60flrY5LN9E6MRvcmk=");
_c = OrderProvider;
var _c;
__turbopack_context__.k.register(_c, "OrderProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_Projects_DineX_dinex-client_src_6b9c248e._.js.map