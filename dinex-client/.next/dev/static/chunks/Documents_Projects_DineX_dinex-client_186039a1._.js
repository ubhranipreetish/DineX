(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/home/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StaffHome
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2d$crossed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UtensilsCrossed$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/utensils-crossed.js [app-client] (ecmascript) <export default as UtensilsCrossed>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/receipt.js [app-client] (ecmascript) <export default as Receipt>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
// Dummy data for tables
const DUMMY_TABLES = Array.from({
    length: 20
}, (_, i)=>({
        id: i + 1,
        tableNumber: i + 1,
        status: "free",
        currentBill: 0,
        guests: 0,
        orderId: null,
        seatedAt: null
    }));
function StaffHome() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [staff, setStaff] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "Rohan Kumar"
    });
    const [tables, setTables] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(DUMMY_TABLES);
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        free: 20,
        occupied: 0,
        billPending: 0,
        totalOrders: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StaffHome.useEffect": ()=>{
            // Check auth
            const token = localStorage.getItem("staffToken");
            if (!token) {
                router.push("/business/staff/login");
                return;
            }
            // Update stats
            updateStats();
        }
    }["StaffHome.useEffect"], [
        tables
    ]);
    const updateStats = ()=>{
        const free = tables.filter((t)=>t.status === "free").length;
        const occupied = tables.filter((t)=>t.status === "occupied").length;
        const billPending = tables.filter((t)=>t.status === "bill_pending").length;
        setStats({
            free,
            occupied,
            billPending,
            totalOrders: occupied + billPending
        });
    };
    const handleLogout = ()=>{
        localStorage.removeItem("staffToken");
        localStorage.removeItem("staffUser");
        router.push("/business/staff/login");
    };
    const getTableColor = (status)=>{
        switch(status){
            case "free":
                return "bg-gradient-to-br from-green-400 to-green-500 text-white";
            case "occupied":
                return "bg-gradient-to-br from-orange-400 to-orange-500 text-white";
            case "bill_pending":
                return "bg-gradient-to-br from-blue-400 to-blue-500 text-white";
            default:
                return "bg-gray-300 text-gray-700";
        }
    };
    const getStatusText = (status)=>{
        switch(status){
            case "free":
                return "Free";
            case "occupied":
                return "Occupied";
            case "bill_pending":
                return "Bill Pending";
            default:
                return "Unknown";
        }
    };
    const handleTableClick = (table)=>{
        if (table.status === "free") {
            router.push(`/business/staff/table/${table.id}/order`);
        } else {
            router.push(`/business/staff/table/${table.id}/manage`);
        }
    };
    const currentHour = new Date().getHours();
    const shift = currentHour < 16 ? "Morning" : currentHour < 20 ? "Evening" : "Night";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-gray-50 via-orange-50 to-gray-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "bg-white shadow-lg sticky top-0 z-50 border-b-4 border-orange-500",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-6 py-5",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent",
                                        children: [
                                            "Hello, ",
                                            staff?.name,
                                            " 👋"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/home/page.js",
                                        lineNumber: 96,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-600 mt-1 flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/home/page.js",
                                                lineNumber: 100,
                                                columnNumber: 17
                                            }, this),
                                            "Shift: ",
                                            shift,
                                            " | ",
                                            new Date().toLocaleTimeString('en-US', {
                                                hour: '2-digit',
                                                minute: '2-digit'
                                            })
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/home/page.js",
                                        lineNumber: 99,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/home/page.js",
                                lineNumber: 95,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>router.push("/business/staff/running-orders"),
                                        className: "relative p-3 hover:bg-orange-50 rounded-xl transition-colors group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__["Receipt"], {
                                                className: "w-6 h-6 text-gray-700 group-hover:text-orange-600"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/home/page.js",
                                                lineNumber: 114,
                                                columnNumber: 17
                                            }, this),
                                            stats.totalOrders > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute -top-1 -right-1 w-6 h-6 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center",
                                                children: stats.totalOrders
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/home/page.js",
                                                lineNumber: 116,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/home/page.js",
                                        lineNumber: 110,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "relative p-3 hover:bg-orange-50 rounded-xl transition-colors group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                                className: "w-6 h-6 text-gray-700 group-hover:text-orange-600"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/home/page.js",
                                                lineNumber: 122,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/home/page.js",
                                                lineNumber: 123,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/home/page.js",
                                        lineNumber: 121,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleLogout,
                                        className: "flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-xl transition-all font-semibold shadow-lg hover:shadow-xl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/home/page.js",
                                                lineNumber: 129,
                                                columnNumber: 17
                                            }, this),
                                            "Logout"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/home/page.js",
                                        lineNumber: 125,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/home/page.js",
                                lineNumber: 109,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/home/page.js",
                        lineNumber: 93,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/home/page.js",
                    lineNumber: 92,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/home/page.js",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-6 py-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-4 gap-6 mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white p-6 rounded-2xl shadow-lg border-l-4 border-green-500 hover:shadow-xl transition-shadow",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-600 text-sm font-semibold uppercase tracking-wide",
                                                    children: "Tables Free"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/home/page.js",
                                                    lineNumber: 143,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-4xl font-bold text-gray-800 mt-2",
                                                    children: stats.free
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/home/page.js",
                                                    lineNumber: 144,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/home/page.js",
                                            lineNumber: 142,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2d$crossed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UtensilsCrossed$3e$__["UtensilsCrossed"], {
                                                className: "w-8 h-8 text-green-600"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/home/page.js",
                                                lineNumber: 147,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/home/page.js",
                                            lineNumber: 146,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/home/page.js",
                                    lineNumber: 141,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/home/page.js",
                                lineNumber: 140,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white p-6 rounded-2xl shadow-lg border-l-4 border-orange-500 hover:shadow-xl transition-shadow",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-600 text-sm font-semibold uppercase tracking-wide",
                                                    children: "Occupied"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/home/page.js",
                                                    lineNumber: 155,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-4xl font-bold text-gray-800 mt-2",
                                                    children: stats.occupied
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/home/page.js",
                                                    lineNumber: 156,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/home/page.js",
                                            lineNumber: 154,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2d$crossed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UtensilsCrossed$3e$__["UtensilsCrossed"], {
                                                className: "w-8 h-8 text-orange-600"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/home/page.js",
                                                lineNumber: 159,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/home/page.js",
                                            lineNumber: 158,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/home/page.js",
                                    lineNumber: 153,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/home/page.js",
                                lineNumber: 152,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white p-6 rounded-2xl shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition-shadow",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-600 text-sm font-semibold uppercase tracking-wide",
                                                    children: "Bill Pending"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/home/page.js",
                                                    lineNumber: 167,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-4xl font-bold text-gray-800 mt-2",
                                                    children: stats.billPending
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/home/page.js",
                                                    lineNumber: 168,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/home/page.js",
                                            lineNumber: 166,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__["Receipt"], {
                                                className: "w-8 h-8 text-blue-600"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/home/page.js",
                                                lineNumber: 171,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/home/page.js",
                                            lineNumber: 170,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/home/page.js",
                                    lineNumber: 165,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/home/page.js",
                                lineNumber: 164,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white p-6 rounded-2xl shadow-lg border-l-4 border-purple-500 hover:shadow-xl transition-shadow",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-600 text-sm font-semibold uppercase tracking-wide",
                                                    children: "Active Orders"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/home/page.js",
                                                    lineNumber: 179,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-4xl font-bold text-gray-800 mt-2",
                                                    children: stats.totalOrders
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/home/page.js",
                                                    lineNumber: 180,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/home/page.js",
                                            lineNumber: 178,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__["Receipt"], {
                                                className: "w-8 h-8 text-purple-600"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/home/page.js",
                                                lineNumber: 183,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/home/page.js",
                                            lineNumber: 182,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/home/page.js",
                                    lineNumber: 177,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/home/page.js",
                                lineNumber: 176,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/home/page.js",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white p-8 rounded-3xl shadow-2xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-3xl font-bold text-gray-800",
                                        children: "Table Overview"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/home/page.js",
                                        lineNumber: 192,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-4 text-sm font-medium",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-4 h-4 bg-gradient-to-br from-green-400 to-green-500 rounded"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/home/page.js",
                                                        lineNumber: 195,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Free"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/home/page.js",
                                                        lineNumber: 196,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/home/page.js",
                                                lineNumber: 194,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-4 h-4 bg-gradient-to-br from-orange-400 to-orange-500 rounded"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/home/page.js",
                                                        lineNumber: 199,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Occupied"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/home/page.js",
                                                        lineNumber: 200,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/home/page.js",
                                                lineNumber: 198,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-4 h-4 bg-gradient-to-br from-blue-400 to-blue-500 rounded"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/home/page.js",
                                                        lineNumber: 203,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Bill Pending"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/home/page.js",
                                                        lineNumber: 204,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/home/page.js",
                                                lineNumber: 202,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/home/page.js",
                                        lineNumber: 193,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/home/page.js",
                                lineNumber: 191,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5",
                                children: tables.map((table)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleTableClick(table),
                                        className: `${getTableColor(table.status)} rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 active:scale-95`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-5xl font-bold mb-2",
                                                    children: table.tableNumber
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/home/page.js",
                                                    lineNumber: 217,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-white bg-opacity-30 backdrop-blur-sm rounded-lg py-2 px-3 mb-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-bold",
                                                        children: getStatusText(table.status)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/home/page.js",
                                                        lineNumber: 219,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/home/page.js",
                                                    lineNumber: 218,
                                                    columnNumber: 19
                                                }, this),
                                                table.currentBill > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-semibold",
                                                    children: [
                                                        "₹",
                                                        table.currentBill
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/home/page.js",
                                                    lineNumber: 222,
                                                    columnNumber: 21
                                                }, this),
                                                table.guests > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs mt-1 opacity-90",
                                                    children: [
                                                        table.guests,
                                                        " guests"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/home/page.js",
                                                    lineNumber: 225,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/home/page.js",
                                            lineNumber: 216,
                                            columnNumber: 17
                                        }, this)
                                    }, table.id, false, {
                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/home/page.js",
                                        lineNumber: 211,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/home/page.js",
                                lineNumber: 209,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/home/page.js",
                        lineNumber: 190,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/home/page.js",
                lineNumber: 137,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/home/page.js",
        lineNumber: 89,
        columnNumber: 5
    }, this);
}
_s(StaffHome, "257tzKJwRD6ttv46Lvd2Lglw+To=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = StaffHome;
var _c;
__turbopack_context__.k.register(_c, "StaffHome");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Projects/DineX/dinex-client/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/Documents/Projects/DineX/dinex-client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/Documents/Projects/DineX/dinex-client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Documents/Projects/DineX/dinex-client/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/Documents/Projects/DineX/dinex-client/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/Documents/Projects/DineX/dinex-client/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
"[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "hasA11yProp",
    ()=>hasA11yProp,
    "mergeClasses",
    ()=>mergeClasses,
    "toCamelCase",
    ()=>toCamelCase,
    "toKebabCase",
    ()=>toKebabCase,
    "toPascalCase",
    ()=>toPascalCase
]);
const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string)=>string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2)=>p2 ? p2.toUpperCase() : p1.toLowerCase());
const toPascalCase = (string)=>{
    const camelCase = toCamelCase(string);
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
const mergeClasses = (...classes)=>classes.filter((className, index, array)=>{
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
const hasA11yProp = (props)=>{
    for(const prop in props){
        if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
            return true;
        }
    }
};
;
 //# sourceMappingURL=utils.js.map
}),
"[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>defaultAttributes
]);
var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
;
 //# sourceMappingURL=defaultAttributes.js.map
}),
"[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/Icon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Icon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)");
;
;
;
const Icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("svg", {
        ref,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])("lucide", className),
        ...!children && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasA11yProp"])(rest) && {
            "aria-hidden": "true"
        },
        ...rest
    }, [
        ...iconNode.map(([tag, attrs])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(tag, attrs)),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]));
;
 //# sourceMappingURL=Icon.js.map
}),
"[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>createLucideIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/Icon.js [app-client] (ecmascript)");
;
;
;
const createLucideIcon = (iconName, iconNode)=>{
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            ref,
            iconNode,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])(`lucide-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toKebabCase"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName))}`, `lucide-${iconName}`, className),
            ...props
        }));
    Component.displayName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName);
    return Component;
};
;
 //# sourceMappingURL=createLucideIcon.js.map
}),
"[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>LogOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m16 17 5-5-5-5",
            key: "1bji2h"
        }
    ],
    [
        "path",
        {
            d: "M21 12H9",
            key: "dn1m92"
        }
    ],
    [
        "path",
        {
            d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",
            key: "1uf3rs"
        }
    ]
];
const LogOut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("log-out", __iconNode);
;
 //# sourceMappingURL=log-out.js.map
}),
"[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LogOut",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript)");
}),
"[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Bell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M10.268 21a2 2 0 0 0 3.464 0",
            key: "vwvbt9"
        }
    ],
    [
        "path",
        {
            d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
            key: "11g9vi"
        }
    ]
];
const Bell = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("bell", __iconNode);
;
 //# sourceMappingURL=bell.js.map
}),
"[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript) <export default as Bell>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Bell",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript)");
}),
"[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/utensils-crossed.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>UtensilsCrossed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8",
            key: "n7qcjb"
        }
    ],
    [
        "path",
        {
            d: "M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7",
            key: "d0u48b"
        }
    ],
    [
        "path",
        {
            d: "m2.1 21.8 6.4-6.3",
            key: "yn04lh"
        }
    ],
    [
        "path",
        {
            d: "m19 5-7 7",
            key: "194lzd"
        }
    ]
];
const UtensilsCrossed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("utensils-crossed", __iconNode);
;
 //# sourceMappingURL=utensils-crossed.js.map
}),
"[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/utensils-crossed.js [app-client] (ecmascript) <export default as UtensilsCrossed>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UtensilsCrossed",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2d$crossed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2d$crossed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/utensils-crossed.js [app-client] (ecmascript)");
}),
"[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/receipt.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Receipt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",
            key: "q3az6g"
        }
    ],
    [
        "path",
        {
            d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",
            key: "1h4pet"
        }
    ],
    [
        "path",
        {
            d: "M12 17.5v-11",
            key: "1jc1ny"
        }
    ]
];
const Receipt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("receipt", __iconNode);
;
 //# sourceMappingURL=receipt.js.map
}),
"[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/receipt.js [app-client] (ecmascript) <export default as Receipt>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Receipt",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/receipt.js [app-client] (ecmascript)");
}),
"[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Clock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M12 6v6l4 2",
            key: "mmk7yg"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ]
];
const Clock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("clock", __iconNode);
;
 //# sourceMappingURL=clock.js.map
}),
"[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Clock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=Documents_Projects_DineX_dinex-client_186039a1._.js.map