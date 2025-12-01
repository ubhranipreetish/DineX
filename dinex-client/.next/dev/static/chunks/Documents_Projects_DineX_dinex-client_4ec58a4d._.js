(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/data/menu-data.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Dummy menu data with categories and items
__turbopack_context__.s([
    "MENU_CATEGORIES",
    ()=>MENU_CATEGORIES,
    "MENU_ITEMS",
    ()=>MENU_ITEMS,
    "TAX_RATES",
    ()=>TAX_RATES,
    "getItemsByCategory",
    ()=>getItemsByCategory
]);
const MENU_CATEGORIES = [
    {
        id: 'hot-beverages',
        name: 'Hot Beverages',
        icon: '☕'
    },
    {
        id: 'appetizers',
        name: 'Appetizers',
        icon: '🥟'
    },
    {
        id: 'main-course',
        name: 'Main Course',
        icon: '🍛'
    },
    {
        id: 'desserts',
        name: 'Desserts',
        icon: '🍰'
    },
    {
        id: 'beverages',
        name: 'Beverages',
        icon: '🥤'
    }
];
const MENU_ITEMS = [
    // Hot Beverages
    {
        id: 1,
        name: 'Espresso',
        category: 'hot-beverages',
        price: 120,
        isVeg: true,
        image: '☕'
    },
    {
        id: 2,
        name: 'Cappuccino',
        category: 'hot-beverages',
        price: 150,
        isVeg: true,
        image: '☕'
    },
    {
        id: 3,
        name: 'Latte',
        category: 'hot-beverages',
        price: 160,
        isVeg: true,
        image: '☕'
    },
    {
        id: 4,
        name: 'Americano',
        category: 'hot-beverages',
        price: 130,
        isVeg: true,
        image: '☕'
    },
    {
        id: 5,
        name: 'Hot Chocolate',
        category: 'hot-beverages',
        price: 140,
        isVeg: true,
        image: '☕'
    },
    {
        id: 6,
        name: 'Masala Chai',
        category: 'hot-beverages',
        price: 80,
        isVeg: true,
        image: '☕'
    },
    {
        id: 7,
        name: 'Green Tea',
        category: 'hot-beverages',
        price: 100,
        isVeg: true,
        image: '☕'
    },
    {
        id: 8,
        name: 'Filter Coffee',
        category: 'hot-beverages',
        price: 90,
        isVeg: true,
        image: '☕'
    },
    // Appetizers
    {
        id: 9,
        name: 'Paneer Tikka',
        category: 'appetizers',
        price: 280,
        isVeg: true,
        image: '🧀'
    },
    {
        id: 10,
        name: 'Veg Spring Rolls',
        category: 'appetizers',
        price: 220,
        isVeg: true,
        image: '🥟'
    },
    {
        id: 11,
        name: 'Chicken Wings',
        category: 'appetizers',
        price: 320,
        isVeg: false,
        image: '🍗'
    },
    {
        id: 12,
        name: 'Fish Fingers',
        category: 'appetizers',
        price: 340,
        isVeg: false,
        image: '🐟'
    },
    {
        id: 13,
        name: 'Hara Bhara Kabab',
        category: 'appetizers',
        price: 240,
        isVeg: true,
        image: '🥬'
    },
    {
        id: 14,
        name: 'Cheese Balls',
        category: 'appetizers',
        price: 260,
        isVeg: true,
        image: '🧀'
    },
    {
        id: 15,
        name: 'Crispy Corn',
        category: 'appetizers',
        price: 200,
        isVeg: true,
        image: '🌽'
    },
    {
        id: 16,
        name: 'Chicken Satay',
        category: 'appetizers',
        price: 350,
        isVeg: false,
        image: '🍢'
    },
    {
        id: 17,
        name: 'Mushroom Tikka',
        category: 'appetizers',
        price: 270,
        isVeg: true,
        image: '🍄'
    },
    {
        id: 18,
        name: 'Prawn Tempura',
        category: 'appetizers',
        price: 420,
        isVeg: false,
        image: '🦐'
    },
    // Main Course
    {
        id: 19,
        name: 'Butter Chicken',
        category: 'main-course',
        price: 380,
        isVeg: false,
        image: '🍗'
    },
    {
        id: 20,
        name: 'Paneer Butter Masala',
        category: 'main-course',
        price: 320,
        isVeg: true,
        image: '🧀'
    },
    {
        id: 21,
        name: 'Dal Makhani',
        category: 'main-course',
        price: 240,
        isVeg: true,
        image: '🍲'
    },
    {
        id: 22,
        name: 'Chicken Biryani',
        category: 'main-course',
        price: 420,
        isVeg: false,
        image: '🍛'
    },
    {
        id: 23,
        name: 'Veg Biryani',
        category: 'main-course',
        price: 340,
        isVeg: true,
        image: '🍛'
    },
    {
        id: 24,
        name: 'Palak Paneer',
        category: 'main-course',
        price: 300,
        isVeg: true,
        image: '🥬'
    },
    {
        id: 25,
        name: 'Kadhai Chicken',
        category: 'main-course',
        price: 400,
        isVeg: false,
        image: '🍗'
    },
    {
        id: 26,
        name: 'Mutton Rogan Josh',
        category: 'main-course',
        price: 480,
        isVeg: false,
        image: '🍖'
    },
    {
        id: 27,
        name: 'Malai Kofta',
        category: 'main-course',
        price: 310,
        isVeg: true,
        image: '🥔'
    },
    {
        id: 28,
        name: 'Fish Curry',
        category: 'main-course',
        price: 440,
        isVeg: false,
        image: '🐟'
    },
    {
        id: 29,
        name: 'Chole Bhature',
        category: 'main-course',
        price: 220,
        isVeg: true,
        image: '🫓'
    },
    {
        id: 30,
        name: 'Chicken Korma',
        category: 'main-course',
        price: 390,
        isVeg: false,
        image: '🍗'
    },
    {
        id: 31,
        name: 'Naan (Plain)',
        category: 'main-course',
        price: 40,
        isVeg: true,
        image: '🫓'
    },
    {
        id: 32,
        name: 'Garlic Naan',
        category: 'main-course',
        price: 60,
        isVeg: true,
        image: '🫓'
    },
    {
        id: 33,
        name: 'Butter Naan',
        category: 'main-course',
        price: 50,
        isVeg: true,
        image: '🫓'
    },
    {
        id: 34,
        name: 'Jeera Rice',
        category: 'main-course',
        price: 140,
        isVeg: true,
        image: '🍚'
    },
    {
        id: 35,
        name: 'Steamed Rice',
        category: 'main-course',
        price: 100,
        isVeg: true,
        image: '🍚'
    },
    // Desserts
    {
        id: 36,
        name: 'Gulab Jamun',
        category: 'desserts',
        price: 120,
        isVeg: true,
        image: '🍡'
    },
    {
        id: 37,
        name: 'Rasmalai',
        category: 'desserts',
        price: 140,
        isVeg: true,
        image: '🥛'
    },
    {
        id: 38,
        name: 'Ice Cream (Vanilla)',
        category: 'desserts',
        price: 100,
        isVeg: true,
        image: '🍨'
    },
    {
        id: 39,
        name: 'Ice Cream (Chocolate)',
        category: 'desserts',
        price: 100,
        isVeg: true,
        image: '🍨'
    },
    {
        id: 40,
        name: 'Brownie with Ice Cream',
        category: 'desserts',
        price: 180,
        isVeg: true,
        image: '🍰'
    },
    {
        id: 41,
        name: 'Kulfi',
        category: 'desserts',
        price: 90,
        isVeg: true,
        image: '🍦'
    },
    {
        id: 42,
        name: 'Fruit Custard',
        category: 'desserts',
        price: 110,
        isVeg: true,
        image: '🍮'
    },
    {
        id: 43,
        name: 'Gajar Halwa',
        category: 'desserts',
        price: 130,
        isVeg: true,
        image: '🥕'
    },
    {
        id: 44,
        name: 'Cheesecake',
        category: 'desserts',
        price: 200,
        isVeg: true,
        image: '🍰'
    },
    // Beverages
    {
        id: 45,
        name: 'Fresh Lime Soda',
        category: 'beverages',
        price: 80,
        isVeg: true,
        image: '🍋'
    },
    {
        id: 46,
        name: 'Mango Lassi',
        category: 'beverages',
        price: 120,
        isVeg: true,
        image: '🥭'
    },
    {
        id: 47,
        name: 'Sweet Lassi',
        category: 'beverages',
        price: 100,
        isVeg: true,
        image: '🥛'
    },
    {
        id: 48,
        name: 'Fresh Orange Juice',
        category: 'beverages',
        price: 110,
        isVeg: true,
        image: '🍊'
    },
    {
        id: 49,
        name: 'Watermelon Juice',
        category: 'beverages',
        price: 100,
        isVeg: true,
        image: '🍉'
    },
    {
        id: 50,
        name: 'Cold Coffee',
        category: 'beverages',
        price: 140,
        isVeg: true,
        image: '☕'
    },
    {
        id: 51,
        name: 'Mojito (Virgin)',
        category: 'beverages',
        price: 150,
        isVeg: true,
        image: '🍹'
    },
    {
        id: 52,
        name: 'Iced Tea',
        category: 'beverages',
        price: 100,
        isVeg: true,
        image: '🧃'
    },
    {
        id: 53,
        name: 'Coca Cola',
        category: 'beverages',
        price: 60,
        isVeg: true,
        image: '🥤'
    },
    {
        id: 54,
        name: 'Sprite',
        category: 'beverages',
        price: 60,
        isVeg: true,
        image: '🥤'
    }
];
const getItemsByCategory = (categoryId)=>{
    return MENU_ITEMS.filter((item)=>item.category === categoryId);
};
const TAX_RATES = {
    CGST: 2.5,
    SGST: 2.5,
    total: 5.0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/components/CategoryTabs.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CategoryTabs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
;
;
function CategoryTabs({ categories, activeCategory, onCategoryChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-3 overflow-x-auto pb-4 scrollbar-hide",
        children: categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>onCategoryChange(category.id),
                className: `
            flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all whitespace-nowrap shadow-md hover:shadow-lg active:scale-95
            ${activeCategory === category.id ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white scale-105' : 'bg-white text-gray-700 hover:bg-orange-50'}
          `,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-2xl",
                        children: category.icon
                    }, void 0, false, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/components/CategoryTabs.js",
                        lineNumber: 18,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: category.name
                    }, void 0, false, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/components/CategoryTabs.js",
                        lineNumber: 19,
                        columnNumber: 21
                    }, this),
                    activeCategory === category.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                        className: "w-5 h-5"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/components/CategoryTabs.js",
                        lineNumber: 20,
                        columnNumber: 56
                    }, this)
                ]
            }, category.id, true, {
                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/components/CategoryTabs.js",
                lineNumber: 7,
                columnNumber: 17
            }, this))
    }, void 0, false, {
        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/components/CategoryTabs.js",
        lineNumber: 5,
        columnNumber: 9
    }, this);
}
_c = CategoryTabs;
var _c;
__turbopack_context__.k.register(_c, "CategoryTabs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/components/MenuItem.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MenuItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
;
;
function MenuItem({ item, onAdd, selectedQuantity = 0 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all border border-gray-100 group hover:border-orange-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `w-5 h-5 rounded border-2 flex items-center justify-center ${item.isVeg ? 'border-green-600' : 'border-red-600'}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `w-2.5 h-2.5 rounded-full ${item.isVeg ? 'bg-green-600' : 'bg-red-600'}`
                        }, void 0, false, {
                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/components/MenuItem.js",
                            lineNumber: 10,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/components/MenuItem.js",
                        lineNumber: 8,
                        columnNumber: 17
                    }, this),
                    selectedQuantity > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full",
                        children: [
                            selectedQuantity,
                            " added"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/components/MenuItem.js",
                        lineNumber: 14,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/components/MenuItem.js",
                lineNumber: 7,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-5xl",
                    children: item.image
                }, void 0, false, {
                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/components/MenuItem.js",
                    lineNumber: 22,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/components/MenuItem.js",
                lineNumber: 21,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "font-bold text-gray-800 text-lg mb-2 line-clamp-2 min-h-[56px]",
                children: item.name
            }, void 0, false, {
                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/components/MenuItem.js",
                lineNumber: 26,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xl font-bold text-orange-600",
                        children: [
                            "₹",
                            item.price
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/components/MenuItem.js",
                        lineNumber: 32,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onAdd(item),
                        className: "flex items-center gap-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 py-2 rounded-xl font-semibold transition-all active:scale-95 shadow-md hover:shadow-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/components/MenuItem.js",
                                lineNumber: 39,
                                columnNumber: 21
                            }, this),
                            "Add"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/components/MenuItem.js",
                        lineNumber: 35,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/components/MenuItem.js",
                lineNumber: 31,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/components/MenuItem.js",
        lineNumber: 5,
        columnNumber: 9
    }, this);
}
_c = MenuItem;
var _c;
__turbopack_context__.k.register(_c, "MenuItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/components/QuantityControl.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QuantityControl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function QuantityControl({ quantity, onIncrease, onDecrease, size = 'md' }) {
    const sizeClasses = {
        sm: 'w-6 h-6 text-sm',
        md: 'w-8 h-8 text-base',
        lg: 'w-10 h-10 text-lg'
    };
    const buttonSize = sizeClasses[size] || sizeClasses.md;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onDecrease,
                disabled: quantity <= 0,
                className: `${buttonSize} rounded-lg bg-red-500 hover:bg-red-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold transition-all active:scale-95 flex items-center justify-center shadow-md`,
                children: "−"
            }, void 0, false, {
                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/components/QuantityControl.js",
                lineNumber: 12,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `${size === 'lg' ? 'text-xl' : size === 'sm' ? 'text-sm' : 'text-base'} font-bold min-w-[2rem] text-center`,
                children: quantity
            }, void 0, false, {
                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/components/QuantityControl.js",
                lineNumber: 19,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onIncrease,
                className: `${buttonSize} rounded-lg bg-green-500 hover:bg-green-600 text-white font-bold transition-all active:scale-95 flex items-center justify-center shadow-md`,
                children: "+"
            }, void 0, false, {
                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/components/QuantityControl.js",
                lineNumber: 22,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/components/QuantityControl.js",
        lineNumber: 11,
        columnNumber: 9
    }, this);
}
_c = QuantityControl;
var _c;
__turbopack_context__.k.register(_c, "QuantityControl");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/components/OrderSummary.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OrderSummary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$src$2f$app$2f$business$2f$staff$2f$components$2f$QuantityControl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/components/QuantityControl.js [app-client] (ecmascript)");
;
;
;
function OrderSummary({ items, onQuantityChange, onRemoveItem, onPlaceOrder, isPlacingOrder = false, tableNumber }) {
    const calculateBill = ()=>{
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
    const bill = calculateBill();
    const itemCount = items.reduce((sum, item)=>sum + item.quantity, 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-3xl shadow-2xl p-6 sticky top-4 h-fit border-2 border-orange-200",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-b-2 border-gray-200 pb-4 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold text-gray-800",
                        children: "Order Summary"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/components/OrderSummary.js",
                        lineNumber: 33,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-600 mt-1",
                        children: [
                            "Table ",
                            tableNumber
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/components/OrderSummary.js",
                        lineNumber: 34,
                        columnNumber: 17
                    }, this),
                    itemCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-orange-600 font-semibold mt-1",
                        children: [
                            itemCount,
                            " ",
                            itemCount === 1 ? 'item' : 'items'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/components/OrderSummary.js",
                        lineNumber: 36,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/components/OrderSummary.js",
                lineNumber: 32,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-h-[400px] overflow-y-auto mb-4 space-y-3 scrollbar-thin scrollbar-thumb-orange-300 scrollbar-track-gray-100",
                children: items.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-400 text-lg",
                            children: "No items added yet"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/components/OrderSummary.js",
                            lineNumber: 46,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-400 text-sm mt-2",
                            children: "Start adding items from the menu"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/components/OrderSummary.js",
                            lineNumber: 47,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/components/OrderSummary.js",
                    lineNumber: 45,
                    columnNumber: 21
                }, this) : items.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gray-50 rounded-xl p-3 border border-gray-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start justify-between mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "font-semibold text-gray-800 text-sm",
                                                children: item.name
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/components/OrderSummary.js",
                                                lineNumber: 54,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-orange-600 font-bold text-sm mt-1",
                                                children: [
                                                    "₹",
                                                    item.price
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/components/OrderSummary.js",
                                                lineNumber: 55,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/components/OrderSummary.js",
                                        lineNumber: 53,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onRemoveItem(index),
                                        className: "text-red-500 hover:text-red-700 transition-colors p-1",
                                        title: "Remove item",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/components/OrderSummary.js",
                                            lineNumber: 62,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/components/OrderSummary.js",
                                        lineNumber: 57,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/components/OrderSummary.js",
                                lineNumber: 52,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$src$2f$app$2f$business$2f$staff$2f$components$2f$QuantityControl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        quantity: item.quantity,
                                        onIncrease: ()=>onQuantityChange(index, item.quantity + 1),
                                        onDecrease: ()=>onQuantityChange(index, item.quantity - 1),
                                        size: "sm"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/components/OrderSummary.js",
                                        lineNumber: 66,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-bold text-gray-700",
                                        children: [
                                            "₹",
                                            item.price * item.quantity
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/components/OrderSummary.js",
                                        lineNumber: 72,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/components/OrderSummary.js",
                                lineNumber: 65,
                                columnNumber: 29
                            }, this)
                        ]
                    }, `${item.id}-${index}`, true, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/components/OrderSummary.js",
                        lineNumber: 51,
                        columnNumber: 25
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/components/OrderSummary.js",
                lineNumber: 43,
                columnNumber: 13
            }, this),
            items.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t-2 border-gray-200 pt-4 space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-600",
                                children: "Subtotal"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/components/OrderSummary.js",
                                lineNumber: 85,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold",
                                children: [
                                    "₹",
                                    bill.subtotal
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/components/OrderSummary.js",
                                lineNumber: 86,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/components/OrderSummary.js",
                        lineNumber: 84,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-600",
                                children: "CGST (2.5%)"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/components/OrderSummary.js",
                                lineNumber: 89,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold",
                                children: [
                                    "₹",
                                    bill.cgst
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/components/OrderSummary.js",
                                lineNumber: 90,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/components/OrderSummary.js",
                        lineNumber: 88,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-600",
                                children: "SGST (2.5%)"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/components/OrderSummary.js",
                                lineNumber: 93,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold",
                                children: [
                                    "₹",
                                    bill.sgst
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/components/OrderSummary.js",
                                lineNumber: 94,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/components/OrderSummary.js",
                        lineNumber: 92,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between text-lg font-bold border-t-2 border-orange-200 pt-3 mt-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-800",
                                children: "Total"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/components/OrderSummary.js",
                                lineNumber: 97,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-orange-600",
                                children: [
                                    "₹",
                                    bill.total
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/components/OrderSummary.js",
                                lineNumber: 98,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/components/OrderSummary.js",
                        lineNumber: 96,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/components/OrderSummary.js",
                lineNumber: 83,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onPlaceOrder,
                disabled: items.length === 0 || isPlacingOrder,
                className: "w-full mt-6 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-all active:scale-95 shadow-lg hover:shadow-xl text-lg",
                children: isPlacingOrder ? 'Placing Order...' : 'Place Order'
            }, void 0, false, {
                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/components/OrderSummary.js",
                lineNumber: 104,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/components/OrderSummary.js",
        lineNumber: 30,
        columnNumber: 9
    }, this);
}
_c = OrderSummary;
var _c;
__turbopack_context__.k.register(_c, "OrderSummary");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/table/[id]/order/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CreateOrderPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$src$2f$app$2f$business$2f$staff$2f$data$2f$menu$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/data/menu-data.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$src$2f$app$2f$business$2f$staff$2f$components$2f$CategoryTabs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/components/CategoryTabs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$src$2f$app$2f$business$2f$staff$2f$components$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/components/MenuItem.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$src$2f$app$2f$business$2f$staff$2f$components$2f$OrderSummary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/components/OrderSummary.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$src$2f$app$2f$business$2f$staff$2f$context$2f$OrderContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/context/OrderContext.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function CreateOrderPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const tableId = parseInt(params.id);
    const { createOrder, tables } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$src$2f$app$2f$business$2f$staff$2f$context$2f$OrderContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOrder"])();
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('hot-beverages');
    const [selectedItems, setSelectedItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isPlacingOrder, setIsPlacingOrder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const table = tables.find((t)=>t.id === tableId);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CreateOrderPage.useEffect": ()=>{
            // Check auth
            const token = localStorage.getItem('staffToken');
            if (!token) {
                router.push('/business/staff/login');
                return;
            }
            // Check if table exists and is free
            if (!table) {
                router.push('/business/staff/home');
                return;
            }
        }
    }["CreateOrderPage.useEffect"], [
        table,
        router
    ]);
    const handleAddItem = (item)=>{
        setSelectedItems((prev)=>{
            const existingIndex = prev.findIndex((i)=>i.id === item.id);
            if (existingIndex >= 0) {
                // Increase quantity
                const updated = [
                    ...prev
                ];
                updated[existingIndex].quantity += 1;
                return updated;
            } else {
                // Add new item
                return [
                    ...prev,
                    {
                        ...item,
                        quantity: 1
                    }
                ];
            }
        });
    };
    const handleQuantityChange = (index, newQuantity)=>{
        if (newQuantity <= 0) {
            handleRemoveItem(index);
            return;
        }
        setSelectedItems((prev)=>{
            const updated = [
                ...prev
            ];
            updated[index].quantity = newQuantity;
            return updated;
        });
    };
    const handleRemoveItem = (index)=>{
        setSelectedItems((prev)=>prev.filter((_, i)=>i !== index));
    };
    const handlePlaceOrder = ()=>{
        if (selectedItems.length === 0) return;
        setIsPlacingOrder(true);
        // Simulate API call
        setTimeout(()=>{
            const orderId = createOrder(tableId, selectedItems, 0);
            router.push(`/business/staff/table/${tableId}/manage`);
        }, 500);
    };
    const filteredItems = searchQuery ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$src$2f$app$2f$business$2f$staff$2f$data$2f$menu$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MENU_ITEMS"].filter((item)=>item.name.toLowerCase().includes(searchQuery.toLowerCase())) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$src$2f$app$2f$business$2f$staff$2f$data$2f$menu$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getItemsByCategory"])(activeCategory);
    const getSelectedQuantity = (itemId)=>{
        const item = selectedItems.find((i)=>i.id === itemId);
        return item ? item.quantity : 0;
    };
    if (!table) {
        return null;
    }
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
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>router.back(),
                                        className: "p-2 hover:bg-gray-100 rounded-xl transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                            className: "w-6 h-6 text-gray-700"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/table/[id]/order/page.js",
                                            lineNumber: 108,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/table/[id]/order/page.js",
                                        lineNumber: 104,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent",
                                                children: "Create Order"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/table/[id]/order/page.js",
                                                lineNumber: 111,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-600 mt-1",
                                                children: [
                                                    "Table ",
                                                    table.tableNumber
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/table/[id]/order/page.js",
                                                lineNumber: 114,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/table/[id]/order/page.js",
                                        lineNumber: 110,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/table/[id]/order/page.js",
                                lineNumber: 103,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-right",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-600",
                                        children: "Items Selected"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/table/[id]/order/page.js",
                                        lineNumber: 118,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-2xl font-bold text-orange-600",
                                        children: selectedItems.reduce((sum, item)=>sum + item.quantity, 0)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/table/[id]/order/page.js",
                                        lineNumber: 119,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/table/[id]/order/page.js",
                                lineNumber: 117,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/table/[id]/order/page.js",
                        lineNumber: 102,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/table/[id]/order/page.js",
                    lineNumber: 101,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/table/[id]/order/page.js",
                lineNumber: 100,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-6 py-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-2 space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-2xl shadow-lg p-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/table/[id]/order/page.js",
                                                lineNumber: 134,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                placeholder: "Search menu items...",
                                                value: searchQuery,
                                                onChange: (e)=>setSearchQuery(e.target.value),
                                                className: "w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none text-gray-700"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/table/[id]/order/page.js",
                                                lineNumber: 135,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/table/[id]/order/page.js",
                                        lineNumber: 133,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/table/[id]/order/page.js",
                                    lineNumber: 132,
                                    columnNumber: 25
                                }, this),
                                !searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$src$2f$app$2f$business$2f$staff$2f$components$2f$CategoryTabs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    categories: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$src$2f$app$2f$business$2f$staff$2f$data$2f$menu$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MENU_CATEGORIES"],
                                    activeCategory: activeCategory,
                                    onCategoryChange: setActiveCategory
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/table/[id]/order/page.js",
                                    lineNumber: 147,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-3xl shadow-2xl p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl font-bold text-gray-800 mb-6",
                                            children: searchQuery ? `Search Results (${filteredItems.length})` : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$src$2f$app$2f$business$2f$staff$2f$data$2f$menu$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MENU_CATEGORIES"].find((c)=>c.id === activeCategory)?.name
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/table/[id]/order/page.js",
                                            lineNumber: 156,
                                            columnNumber: 29
                                        }, this),
                                        filteredItems.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center py-16",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-400 text-lg",
                                                children: "No items found"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/table/[id]/order/page.js",
                                                lineNumber: 164,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/table/[id]/order/page.js",
                                            lineNumber: 163,
                                            columnNumber: 33
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5",
                                            children: filteredItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$src$2f$app$2f$business$2f$staff$2f$components$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    item: item,
                                                    onAdd: handleAddItem,
                                                    selectedQuantity: getSelectedQuantity(item.id)
                                                }, item.id, false, {
                                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/table/[id]/order/page.js",
                                                    lineNumber: 169,
                                                    columnNumber: 41
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/table/[id]/order/page.js",
                                            lineNumber: 167,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/table/[id]/order/page.js",
                                    lineNumber: 155,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/table/[id]/order/page.js",
                            lineNumber: 130,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-1",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$src$2f$app$2f$business$2f$staff$2f$components$2f$OrderSummary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                items: selectedItems,
                                onQuantityChange: handleQuantityChange,
                                onRemoveItem: handleRemoveItem,
                                onPlaceOrder: handlePlaceOrder,
                                isPlacingOrder: isPlacingOrder,
                                tableNumber: table.tableNumber
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/table/[id]/order/page.js",
                                lineNumber: 183,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/table/[id]/order/page.js",
                            lineNumber: 182,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/table/[id]/order/page.js",
                    lineNumber: 128,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/table/[id]/order/page.js",
                lineNumber: 127,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/business/staff/table/[id]/order/page.js",
        lineNumber: 98,
        columnNumber: 9
    }, this);
}
_s(CreateOrderPage, "AX3EwL2uA9++gIpi+pkt1zwYMtU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$src$2f$app$2f$business$2f$staff$2f$context$2f$OrderContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOrder"]
    ];
});
_c = CreateOrderPage;
var _c;
__turbopack_context__.k.register(_c, "CreateOrderPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
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
"[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>ArrowLeft
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m12 19-7-7 7-7",
            key: "1l729n"
        }
    ],
    [
        "path",
        {
            d: "M19 12H5",
            key: "x3x0zl"
        }
    ]
];
const ArrowLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("arrow-left", __iconNode);
;
 //# sourceMappingURL=arrow-left.js.map
}),
"[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowLeft",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript)");
}),
"[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>Search
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m21 21-4.34-4.34",
            key: "14j7rj"
        }
    ],
    [
        "circle",
        {
            cx: "11",
            cy: "11",
            r: "8",
            key: "4ej97u"
        }
    ]
];
const Search = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("search", __iconNode);
;
 //# sourceMappingURL=search.js.map
}),
"[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Search",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript)");
}),
"[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>ChevronRight
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m9 18 6-6-6-6",
            key: "mthhwq"
        }
    ]
];
const ChevronRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("chevron-right", __iconNode);
;
 //# sourceMappingURL=chevron-right.js.map
}),
"[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronRight",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript)");
}),
"[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>Plus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M5 12h14",
            key: "1ays0h"
        }
    ],
    [
        "path",
        {
            d: "M12 5v14",
            key: "s699le"
        }
    ]
];
const Plus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("plus", __iconNode);
;
 //# sourceMappingURL=plus.js.map
}),
"[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Plus",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript)");
}),
"[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>Trash2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M10 11v6",
            key: "nco0om"
        }
    ],
    [
        "path",
        {
            d: "M14 11v6",
            key: "outv1u"
        }
    ],
    [
        "path",
        {
            d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",
            key: "miytrc"
        }
    ],
    [
        "path",
        {
            d: "M3 6h18",
            key: "d0wm0j"
        }
    ],
    [
        "path",
        {
            d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
            key: "e791ji"
        }
    ]
];
const Trash2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("trash-2", __iconNode);
;
 //# sourceMappingURL=trash-2.js.map
}),
"[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Trash2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=Documents_Projects_DineX_dinex-client_4ec58a4d._.js.map