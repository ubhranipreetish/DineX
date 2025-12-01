module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/context/OrderContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OrderProvider",
    ()=>OrderProvider,
    "useOrder",
    ()=>useOrder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const OrderContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])();
const useOrder = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(OrderContext);
    if (!context) {
        throw new Error('useOrder must be used within OrderProvider');
    }
    return context;
};
const OrderProvider = ({ children })=>{
    const [orders, setOrders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [tables, setTables] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // Initialize from localStorage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const savedOrders = localStorage.getItem('dinex_orders');
        const savedTables = localStorage.getItem('dinex_tables');
        if (savedOrders) {
            setOrders(JSON.parse(savedOrders));
        }
        if (savedTables) {
            setTables(JSON.parse(savedTables));
        } else {
            // Initialize 20 tables
            const initialTables = Array.from({
                length: 20
            }, (_, i)=>({
                    id: i + 1,
                    tableNumber: i + 1,
                    status: 'free',
                    currentBill: 0,
                    guests: 0,
                    orderId: null,
                    seatedAt: null
                }));
            setTables(initialTables);
            localStorage.setItem('dinex_tables', JSON.stringify(initialTables));
        }
    }, []);
    // Save to localStorage whenever orders change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (Object.keys(orders).length > 0) {
            localStorage.setItem('dinex_orders', JSON.stringify(orders));
        }
    }, [
        orders
    ]);
    // Save to localStorage whenever tables change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (tables.length > 0) {
            localStorage.setItem('dinex_tables', JSON.stringify(tables));
        }
    }, [
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
        setOrders((prev)=>{
            const order = prev[orderId];
            if (!order) return prev;
            // Update table to bill_pending
            setTables((tables)=>tables.map((table)=>table.id === order.tableId ? {
                        ...table,
                        status: 'bill_pending'
                    } : table));
            return {
                ...prev,
                [orderId]: {
                    ...order,
                    status: 'completed'
                }
            };
        });
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(OrderContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/context/OrderContext.js",
        lineNumber: 269,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/Documents/Projects/DineX/dinex-client/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/Documents/Projects/DineX/dinex-client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Documents/Projects/DineX/dinex-client/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/Documents/Projects/DineX/dinex-client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Documents/Projects/DineX/dinex-client/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c020e987._.js.map