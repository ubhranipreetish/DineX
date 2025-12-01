module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Documents/Projects/DineX/dinex-client/src/components/Reviews.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Reviews
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thumbs$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ThumbsUp$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/thumbs-up.js [app-ssr] (ecmascript) <export default as ThumbsUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-ssr] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Share$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/share.js [app-ssr] (ecmascript) <export default as Share>");
"use client";
;
;
;
// Generate random background colors for avatars
const avatarColors = [
    "#F87171",
    "#FBBF24",
    "#34D399",
    "#60A5FA",
    "#A78BFA",
    "#F472B6",
    "#F59E0B",
    "#10B981"
];
const reviews = [
    {
        id: 1,
        name: "Divya",
        followers: 0,
        reviews: 0,
        rating: 5,
        type: "DINING",
        timeAgo: "13 days ago",
        text: "Had an amazing evening at Drama! The vibe was great and the team made the experience even better. The cocktails were superb 🍸✨"
    },
    {
        id: 2,
        name: "Sannidhi",
        followers: 4,
        reviews: 0,
        rating: 1,
        type: "DINING",
        timeAgo: "28 days ago",
        text: "Food was disappointing. Service was slow, though the ambiance was nice."
    },
    {
        id: 3,
        name: "Ridhi Babbar",
        followers: 30,
        reviews: 0,
        rating: 4,
        type: "DINING",
        timeAgo: "1 month ago",
        text: "Loved the interiors! Great food and an excellent place for parties 🎉"
    },
    {
        id: 4,
        name: "Ankit Sharma",
        followers: 12,
        reviews: 3,
        rating: 4,
        type: "DINING",
        timeAgo: "5 days ago",
        text: "Fantastic food and lovely ambiance. Perfect for date nights!"
    },
    {
        id: 5,
        name: "Megha",
        followers: 6,
        reviews: 1,
        rating: 3,
        type: "DINING",
        timeAgo: "1 week ago",
        text: "Average experience. Food was okay but service can improve."
    },
    {
        id: 6,
        name: "Vivek",
        followers: 2,
        reviews: 1,
        rating: 5,
        type: "DINING",
        timeAgo: "2 weeks ago",
        text: "Loved the desserts! Definitely coming again soon 🍰"
    },
    {
        id: 7,
        name: "Aarti",
        followers: 1,
        reviews: 1,
        rating: 4,
        type: "DINING",
        timeAgo: "3 weeks ago",
        text: "Tasty food and quick service! Highly recommend the pasta."
    },
    {
        id: 8,
        name: "Nikhil",
        followers: 10,
        reviews: 5,
        rating: 2,
        type: "DINING",
        timeAgo: "2 months ago",
        text: "Expected better. Food was cold when served."
    },
    {
        id: 9,
        name: "Shivani",
        followers: 8,
        reviews: 3,
        rating: 4,
        type: "DINING",
        timeAgo: "4 weeks ago",
        text: "Good vibes and tasty food! The live music was a nice touch 🎶"
    },
    {
        id: 10,
        name: "Rahul",
        followers: 14,
        reviews: 5,
        rating: 5,
        type: "DINING",
        timeAgo: "10 days ago",
        text: "Amazing place for family dinners. Loved the butter chicken!"
    },
    {
        id: 11,
        name: "Simran",
        followers: 2,
        reviews: 2,
        rating: 4,
        type: "DINING",
        timeAgo: "3 days ago",
        text: "Everything was perfect! Service, ambiance, and food 🌟"
    },
    {
        id: 12,
        name: "Rohit",
        followers: 9,
        reviews: 3,
        rating: 2,
        type: "DINING",
        timeAgo: "1 month ago",
        text: "Too crowded and noisy. Food was decent but overpriced."
    },
    {
        id: 13,
        name: "Sneha",
        followers: 7,
        reviews: 4,
        rating: 5,
        type: "DINING",
        timeAgo: "1 week ago",
        text: "Loved the cocktails! Great presentation and service 🍹"
    },
    {
        id: 14,
        name: "Harshit",
        followers: 3,
        reviews: 1,
        rating: 3,
        type: "DINING",
        timeAgo: "2 weeks ago",
        text: "Average food but nice interiors. Worth a visit once."
    },
    {
        id: 15,
        name: "Tanya",
        followers: 5,
        reviews: 2,
        rating: 5,
        type: "DINING",
        timeAgo: "6 days ago",
        text: "Absolutely loved it! Friendly staff and delicious food 😋"
    },
    {
        id: 16,
        name: "Amit",
        followers: 12,
        reviews: 6,
        rating: 1,
        type: "DINING",
        timeAgo: "3 weeks ago",
        text: "Very slow service. Not visiting again."
    },
    {
        id: 17,
        name: "Ritika",
        followers: 9,
        reviews: 3,
        rating: 4,
        type: "DINING",
        timeAgo: "2 months ago",
        text: "Loved the pizza! Perfectly baked 🍕"
    },
    {
        id: 18,
        name: "Karan",
        followers: 1,
        reviews: 1,
        rating: 5,
        type: "DINING",
        timeAgo: "5 days ago",
        text: "Good food and great staff. Overall a good experience."
    },
    {
        id: 19,
        name: "Neha",
        followers: 10,
        reviews: 4,
        rating: 3,
        type: "DINING",
        timeAgo: "2 weeks ago",
        text: "Nice ambiance but food could be better."
    },
    {
        id: 20,
        name: "Piyush",
        followers: 0,
        reviews: 0,
        rating: 5,
        type: "DINING",
        timeAgo: "1 day ago",
        text: "Loved the vibe and taste! Must visit 🔥"
    }
];
function Reviews({ restaurantName }) {
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const perPage = 5;
    const totalPages = Math.ceil(reviews.length / perPage);
    const currentReviews = reviews.slice((page - 1) * perPage, page * perPage);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-6 sm:mt-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6",
                children: [
                    restaurantName,
                    " Dining Reviews"
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Reviews.js",
                lineNumber: 219,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4 sm:space-y-6",
                children: currentReviews.map((review)=>{
                    const bgColor = avatarColors[Math.floor(Math.random() * avatarColors.length)];
                    const initial = review.name.charAt(0).toUpperCase();
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-b border-gray-200 pb-4 sm:pb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-start gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-2 sm:gap-4 min-w-0 flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm sm:text-base flex-shrink-0",
                                                style: {
                                                    backgroundColor: bgColor
                                                },
                                                children: initial
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Reviews.js",
                                                lineNumber: 234,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "min-w-0 flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-semibold text-gray-900 text-sm sm:text-base truncate",
                                                        children: review.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Reviews.js",
                                                        lineNumber: 241,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-500 text-xs sm:text-sm",
                                                        children: [
                                                            review.reviews,
                                                            " reviews • ",
                                                            review.followers,
                                                            " Followers"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Reviews.js",
                                                        lineNumber: 242,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Reviews.js",
                                                lineNumber: 240,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Reviews.js",
                                        lineNumber: 233,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "cursor-pointer text-red-500 border border-red-400 px-2 sm:px-4 py-1 rounded-lg hover:bg-red-50 text-xs sm:text-sm whitespace-nowrap flex-shrink-0",
                                        children: "Follow"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Reviews.js",
                                        lineNumber: 247,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Reviews.js",
                                lineNumber: 232,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 sm:mt-3 pl-10 sm:pl-14",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1.5 sm:gap-2 flex-wrap",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `px-2 py-[2px] text-xs font-semibold rounded ${review.rating >= 4 ? "bg-green-600 text-white" : review.rating === 3 ? "bg-yellow-500 text-white" : "bg-red-500 text-white"}`,
                                                children: [
                                                    review.rating,
                                                    "★"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Reviews.js",
                                                lineNumber: 255,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-medium text-gray-500",
                                                children: review.type
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Reviews.js",
                                                lineNumber: 265,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-gray-400",
                                                children: review.timeAgo
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Reviews.js",
                                                lineNumber: 268,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Reviews.js",
                                        lineNumber: 254,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-700 mt-2 text-sm sm:text-base",
                                        children: review.text
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Reviews.js",
                                        lineNumber: 271,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 sm:gap-6 text-gray-500 text-xs sm:text-sm mt-2 sm:mt-3 flex-wrap",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "cursor-pointer flex items-center gap-1 hover:text-gray-700",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thumbs$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ThumbsUp$3e$__["ThumbsUp"], {
                                                        className: "w-3 h-3 sm:w-4 sm:h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Reviews.js",
                                                        lineNumber: 275,
                                                        columnNumber: 21
                                                    }, this),
                                                    " Helpful"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Reviews.js",
                                                lineNumber: 274,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "cursor-pointer flex items-center gap-1 hover:text-gray-700",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                                        className: "w-3 h-3 sm:w-4 sm:h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Reviews.js",
                                                        lineNumber: 278,
                                                        columnNumber: 21
                                                    }, this),
                                                    " Comment"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Reviews.js",
                                                lineNumber: 277,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "cursor-pointer flex items-center gap-1 hover:text-gray-700",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Share$3e$__["Share"], {
                                                        className: "w-3 h-3 sm:w-4 sm:h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Reviews.js",
                                                        lineNumber: 281,
                                                        columnNumber: 21
                                                    }, this),
                                                    " Share"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Reviews.js",
                                                lineNumber: 280,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Reviews.js",
                                        lineNumber: 273,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Reviews.js",
                                lineNumber: 253,
                                columnNumber: 15
                            }, this)
                        ]
                    }, review.id, true, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Reviews.js",
                        lineNumber: 230,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Reviews.js",
                lineNumber: 223,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center items-center gap-2 sm:gap-4 mt-6 sm:mt-8 flex-wrap",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        disabled: page === 1,
                        onClick: ()=>setPage((p)=>p - 1),
                        className: "cursor-pointer px-3 sm:px-4 py-2 border rounded-md text-xs sm:text-sm bg-white text-gray-700 hover:bg-[#FFF8E7] hover:text-[#8B6F3E] border-2 border-gray-200 hover:border-[#C9A050] disabled:opacity-50",
                        children: "Previous"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Reviews.js",
                        lineNumber: 292,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-gray-600 text-xs sm:text-sm",
                        children: [
                            "Page ",
                            page,
                            " of ",
                            totalPages
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Reviews.js",
                        lineNumber: 299,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        disabled: page === totalPages,
                        onClick: ()=>setPage((p)=>p + 1),
                        className: "cursor-pointer px-3 sm:px-4 py-2 border rounded-md text-xs sm:text-sm bg-white text-gray-700 hover:bg-[#FFF8E7] hover:text-[#8B6F3E] border-2 border-gray-200 hover:border-[#C9A050] disabled:opacity-50",
                        children: "Next"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Reviews.js",
                        lineNumber: 302,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Reviews.js",
                lineNumber: 291,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Reviews.js",
        lineNumber: 218,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/Projects/DineX/dinex-client/src/components/Overview.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Overview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function Overview({ restaurant }) {
    const [selectedOffer, setSelectedOffer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    if (!restaurant) return null;
    const staticRestaurantData = {
        offers: [
            {
                title: "PRE-BOOK OFFER",
                desc: `Flat ${restaurant.offer}% OFF`,
                sub: "Booking required"
            },
            {
                title: "INSTANT OFFER",
                desc: "Flat 10% OFF",
                sub: "on bill payments"
            },
            {
                title: "SURPRISE",
                desc: "Get a scratch card",
                sub: "after every transaction"
            },
            {
                title: "EXCLUSIVE OFFER",
                desc: "Get 15% upto ₹1200 on RuPay CC UPI",
                sub: "valid on your next dining payment"
            },
            {
                title: "BANK OFFER",
                desc: "20% OFF up to ₹5000",
                sub: "on Solitaire Credit Cards and more with other banks"
            }
        ],
        knownFor: [
            "Fancy Place",
            "Best in Service",
            "Sanitised Service",
            "Best Staff",
            "Great Menu",
            "Food Tastes Great"
        ],
        paymentInfo: [
            "Cash and Cards accepted",
            "Digital payments accepted"
        ],
        moreInfo: [
            "Lunch",
            "Dinner",
            "Takeaway available",
            "Full bar available",
            "Artistic",
            "Reservation required",
            "Dress code [Formal]",
            "Parking available",
            "Valet parking",
            "Offers candlelit setting",
            "Gluten free options",
            "Vegan options",
            "Celebrity frequented",
            "Nightlife",
            "Garden",
            "Outdoor seating",
            "Romantic dining",
            "Family friendly",
            "Luxury dining",
            "Private dining area",
            "Lounge seating",
            "Party vibe",
            "Free parking",
            "Indoor seating"
        ]
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-8 space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "border border-gray-200 rounded-xl p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-semibold text-gray-900 mb-4",
                        children: "Dining Offers"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Overview.js",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-500 mb-4",
                        children: "Tap on any offer to know more"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Overview.js",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-3 sm:grid-cols-2 gap-4",
                        children: staticRestaurantData.offers.map((offer, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSelectedOffer(i),
                                className: `cursor-pointer rounded-xl p-4 text-left border shadow-sm transition-all duration-200 ${selectedOffer === i ? "bg-blue-600 text-white border-blue-600 scale-[1.02]" : "bg-white border-gray-200 text-gray-700 hover:border-blue-400 hover:shadow-md"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: `font-semibold mb-1 ${selectedOffer === i ? "text-white/90" : "text-blue-700 uppercase text-sm"}`,
                                        children: offer.title
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Overview.js",
                                        lineNumber: 79,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `font-bold text-lg ${selectedOffer === i ? "text-white" : "text-gray-900"}`,
                                        children: offer.desc
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Overview.js",
                                        lineNumber: 86,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `text-sm mt-1 ${selectedOffer === i ? "text-blue-100" : "text-gray-500"}`,
                                        children: offer.sub
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Overview.js",
                                        lineNumber: 93,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Overview.js",
                                lineNumber: 70,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Overview.js",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    staticRestaurantData.offers[selectedOffer] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-5 bg-gray-50 border border-gray-200 rounded-lg p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "font-semibold text-gray-800 text-lg",
                                children: [
                                    "Selected Offer: ",
                                    staticRestaurantData.offers[selectedOffer].title
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Overview.js",
                                lineNumber: 107,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 mt-1",
                                children: staticRestaurantData.offers[selectedOffer].desc
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Overview.js",
                                lineNumber: 110,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Overview.js",
                        lineNumber: 106,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Overview.js",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "border border-gray-200 rounded-xl p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl text-gray-900 font-semibold mb-2",
                        children: "People Say This Place Is Known For"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Overview.js",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 mb-4",
                        children: staticRestaurantData.knownFor?.length ? staticRestaurantData.knownFor.join(", ") : "No info available."
                    }, void 0, false, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Overview.js",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl text-gray-900 font-semibold mb-2",
                        children: "Average Cost"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Overview.js",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-800",
                        children: [
                            "₹",
                            restaurant.priceForTwo,
                            " for two"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Overview.js",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-500",
                        children: "₹395 for a pint of beer (approx.)"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Overview.js",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 space-y-1",
                        children: staticRestaurantData.paymentInfo?.length ? staticRestaurantData.paymentInfo.map((info, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-700",
                                children: info
                            }, i, false, {
                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Overview.js",
                                lineNumber: 133,
                                columnNumber: 15
                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-500",
                            children: "Payment details not available"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Overview.js",
                            lineNumber: 138,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Overview.js",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Overview.js",
                lineNumber: 118,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "border border-gray-200 rounded-xl p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl text-gray-900 font-semibold mb-4",
                        children: "More Info"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Overview.js",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid sm:grid-cols-2 md:grid-cols-3 gap-2",
                        children: staticRestaurantData.moreInfo?.length ? staticRestaurantData.moreInfo.map((info, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-gray-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-green-500 text-lg",
                                        children: "✔"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Overview.js",
                                        lineNumber: 150,
                                        columnNumber: 17
                                    }, this),
                                    " ",
                                    info
                                ]
                            }, i, true, {
                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Overview.js",
                                lineNumber: 149,
                                columnNumber: 15
                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-500",
                            children: "No additional info available"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Overview.js",
                            lineNumber: 154,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Overview.js",
                        lineNumber: 146,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Overview.js",
                lineNumber: 144,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Overview.js",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/Projects/DineX/dinex-client/src/components/Photos.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Photos
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
"use client";
;
;
;
;
function Photos({ restaurant }) {
    const allImages = [
        "/images/ambience/amb13.png",
        "/images/ambience/amb6.png",
        "/images/ambience/amb8.png",
        "/images/ambience/amb9.png",
        "/images/ambience/amb4.png",
        "/images/food/food7.png",
        "/images/ambience/amb12.png",
        "/images/food/food15.png",
        "/images/ambience/amb3.png",
        "/images/food/food1.png",
        "/images/ambience/amb9.png",
        "/images/food/food19.png",
        "/images/ambience/amb6.png",
        "/images/food/food11.png",
        "/images/ambience/amb1.png",
        "/images/food/food3.png",
        "/images/ambience/amb15.png",
        "/images/food/food9.png",
        "/images/ambience/amb4.png",
        "/images/food/food13.png",
        "/images/ambience/amb10.png",
        "/images/food/food2.png",
        "/images/ambience/amb7.png",
        "/images/food/food17.png",
        "/images/ambience/amb14.png",
        "/images/food/food5.png",
        "/images/ambience/amb2.png",
        "/images/food/food8.png",
        "/images/ambience/amb11.png",
        "/images/food/food18.png",
        "/images/ambience/amb5.png",
        "/images/food/food6.png",
        "/images/ambience/amb13.png",
        "/images/food/food10.png",
        "/images/ambience/amb8.png",
        "/images/food/food12.png",
        "/images/ambience/amb16.png",
        "/images/food/food4.png",
        "/images/food/food14.png",
        "/images/food/food16.png",
        "/images/food/food20.png"
    ];
    let ambienceImages = Array.from({
        length: 16
    }).map((_, i)=>`/images/ambience/amb${i + 1}.png`);
    ambienceImages = [
        ...[
            "/images/ambience/amb13.png",
            "/images/ambience/amb6.png",
            "/images/ambience/amb8.png",
            "/images/ambience/amb9.png",
            "/images/ambience/amb4.png"
        ],
        ...ambienceImages
    ];
    const foodImages = Array.from({
        length: 20
    }).map((_, i)=>`/images/food/food${i + 1}.png`);
    const [selectedImageIndex, setSelectedImageIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const tabs = [
        {
            id: "all",
            label: "All",
            count: allImages.length
        },
        {
            id: "ambience",
            label: "Ambience",
            count: ambienceImages.length
        },
        {
            id: "food",
            label: "Food",
            count: foodImages.length
        }
    ];
    const getImages = ()=>{
        switch(activeTab){
            case "ambience":
                return ambienceImages;
            case "food":
                return foodImages;
            default:
                return allImages;
        }
    };
    const images = getImages();
    const openImage = (index)=>setSelectedImageIndex(index);
    const closeModal = ()=>setSelectedImageIndex(null);
    const nextImage = ()=>setSelectedImageIndex((prev)=>prev === images.length - 1 ? 0 : prev + 1);
    const prevImage = ()=>setSelectedImageIndex((prev)=>prev === 0 ? images.length - 1 : prev - 1);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-6639e4eac6b78d61" + " " + "mt-6 sm:mt-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "jsx-6639e4eac6b78d61" + " " + "text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6",
                children: [
                    restaurant.name,
                    " Photos"
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Photos.js",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-6639e4eac6b78d61" + " " + "flex gap-2 sm:gap-3 mb-6 sm:mb-8 overflow-x-auto scrollbar-hide",
                children: tabs.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveTab(tab.id),
                        className: "jsx-6639e4eac6b78d61" + " " + `px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all border whitespace-nowrap
              ${activeTab === tab.id ? "bg-[#C9A050] text-white border-[#A68545] shadow-sm" : "bg-white text-[#8B6F3E] border-[#D9B56E] hover:bg-[#FFF3D9]"}
            `,
                        children: [
                            tab.label,
                            " (",
                            tab.count,
                            ")"
                        ]
                    }, tab.id, true, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Photos.js",
                        lineNumber: 106,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Photos.js",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "6639e4eac6b78d61",
                children: ".scrollbar-hide.jsx-6639e4eac6b78d61::-webkit-scrollbar{display:none}.scrollbar-hide.jsx-6639e4eac6b78d61{-ms-overflow-style:none;scrollbar-width:none}"
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-6639e4eac6b78d61" + " " + "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4",
                children: images.map((img, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: ()=>openImage(index),
                        className: "jsx-6639e4eac6b78d61" + " " + "relative cursor-pointer overflow-hidden rounded-lg sm:rounded-xl group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: img,
                                alt: `Photo ${index + 1}`,
                                className: "jsx-6639e4eac6b78d61" + " " + "w-full h-32 sm:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Photos.js",
                                lineNumber: 142,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-6639e4eac6b78d61" + " " + "absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Photos.js",
                                lineNumber: 147,
                                columnNumber: 13
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Photos.js",
                        lineNumber: 137,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Photos.js",
                lineNumber: 135,
                columnNumber: 7
            }, this),
            selectedImageIndex !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-6639e4eac6b78d61" + " " + "fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-2 sm:p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: closeModal,
                        className: "jsx-6639e4eac6b78d61" + " " + "absolute top-3 right-3 sm:top-6 sm:right-6 text-white hover:text-gray-300 transition z-50 bg-black/30 rounded-full p-1.5 sm:p-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "w-6 h-6 sm:w-10 sm:h-10 cursor-pointer"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Photos.js",
                            lineNumber: 160,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Photos.js",
                        lineNumber: 156,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: prevImage,
                        className: "jsx-6639e4eac6b78d61" + " " + "absolute left-2 sm:left-6 text-white hover:text-gray-300 bg-black/50 p-2 sm:p-3 rounded-full z-50",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                            className: "w-5 h-5 sm:w-8 sm:h-8 cursor-pointer"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Photos.js",
                            lineNumber: 168,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Photos.js",
                        lineNumber: 164,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-6639e4eac6b78d61" + " " + "max-w-6xl mx-auto w-full px-2 sm:px-4 flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: images[selectedImageIndex],
                            alt: `Photo ${selectedImageIndex + 1}`,
                            className: "jsx-6639e4eac6b78d61" + " " + "max-h-[70vh] sm:max-h-[80vh] w-auto rounded-lg sm:rounded-xl object-contain shadow-2xl"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Photos.js",
                            lineNumber: 172,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Photos.js",
                        lineNumber: 171,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: nextImage,
                        className: "jsx-6639e4eac6b78d61" + " " + "absolute right-2 sm:right-6 text-white hover:text-gray-300 bg-black/50 p-2 sm:p-3 rounded-full z-50",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                            className: "w-5 h-5 sm:w-8 sm:h-8 cursor-pointer"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Photos.js",
                            lineNumber: 183,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Photos.js",
                        lineNumber: 179,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-6639e4eac6b78d61" + " " + "absolute bottom-4 sm:bottom-8 text-white text-xs sm:text-sm bg-black/50 px-3 py-1.5 rounded-full",
                        children: [
                            selectedImageIndex + 1,
                            " / ",
                            images.length
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Photos.js",
                        lineNumber: 187,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Photos.js",
                lineNumber: 154,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Photos.js",
        lineNumber: 98,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/Projects/DineX/dinex-client/src/components/BookingForm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BookingForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
"use client";
;
;
;
;
function BookingForm({ restaurantName, restaurantId, offers = [], onSubmit }) {
    const [people, setPeople] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(2);
    const [date, setDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [time, setTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedOffer, setSelectedOffer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [timeSlots, setTimeSlots] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [specialRequests, setSpecialRequests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    // 🕒 Generate available slots dynamically (only future)
    const generateAvailableSlots = ()=>{
        const slots = [];
        const now = new Date();
        const start = new Date();
        start.setHours(10, 0, 0);
        const end = new Date();
        end.setHours(23, 30, 0);
        while(start <= end){
            const hours = start.getHours().toString().padStart(2, "0");
            const minutes = start.getMinutes().toString().padStart(2, "0");
            const slot = `${hours}:${minutes}`;
            const slotTime = new Date();
            slotTime.setHours(Number(hours), Number(minutes), 0, 0);
            if (slotTime > now) slots.push(slot);
            start.setMinutes(start.getMinutes() + 30);
        }
        return slots;
    };
    const formatTime = (time24)=>{
        const [h, m] = time24.split(":").map(Number);
        const period = h >= 12 ? "PM" : "AM";
        const hour12 = h % 12 || 12;
        return `${hour12}:${m.toString().padStart(2, "0")} ${period}`;
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const today = new Date().toISOString().split("T")[0];
        setDate(today);
        const slots = generateAvailableSlots();
        setTimeSlots(slots);
        setTime(slots[0]);
    }, []);
    const handlePeopleChange = (delta)=>setPeople((prev)=>Math.min(12, Math.max(1, prev + delta)));
    const handleSubmit = (e)=>{
        e.preventDefault();
        // Check if user is logged in
        const user = localStorage.getItem("user");
        if (!user) {
            // Get current page URL and redirect to login with return URL
            const currentPath = window.location.pathname;
            router.push(`/customer/login?redirect=${encodeURIComponent(currentPath)}`);
            return;
        }
        setIsLoading(true);
        setTimeout(()=>{
            onSubmit({
                restaurantName,
                restaurantId,
                people,
                date,
                time: formatTime(time),
                offer: selectedOffer,
                specialRequests,
                offers,
                amount: 200
            });
            setIsLoading(false);
        }, 600);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "bg-white space-y-8 mt-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-xl sm:text-2xl font-semibold text-gray-900 mb-2",
                children: "Reserve a Table"
            }, void 0, false, {
                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/BookingForm.js",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            offers.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "text-base sm:text-lg font-semibold text-gray-800",
                        children: "Available Dining Offers"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/BookingForm.js",
                        lineNumber: 100,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5",
                        children: offers.map((offer, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setSelectedOffer(i),
                                className: `cursor-pointer rounded-2xl p-4 sm:p-5 text-left border shadow-sm transition-all duration-200 ${selectedOffer === i ? "bg-blue-600 text-white border-blue-600 scale-[1.02]" : "bg-white border-gray-200 text-gray-700 hover:border-blue-400 hover:shadow-md"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: `font-semibold mb-1 text-xs sm:text-sm ${selectedOffer === i ? "text-white/90" : "text-blue-700 uppercase"}`,
                                        children: offer.title
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/BookingForm.js",
                                        lineNumber: 114,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `font-bold text-base sm:text-lg ${selectedOffer === i ? "text-white" : "text-gray-900"}`,
                                        children: offer.desc
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/BookingForm.js",
                                        lineNumber: 122,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `text-xs sm:text-sm mt-1 ${selectedOffer === i ? "text-blue-100" : "text-gray-500"}`,
                                        children: offer.sub
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/BookingForm.js",
                                        lineNumber: 128,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/BookingForm.js",
                                lineNumber: 105,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/BookingForm.js",
                        lineNumber: 103,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/BookingForm.js",
                lineNumber: 99,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm font-semibold text-gray-700",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                className: "w-4 h-4 inline mr-2 text-red-500"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/BookingForm.js",
                                lineNumber: 143,
                                columnNumber: 11
                            }, this),
                            "Select Date"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/BookingForm.js",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "date",
                        value: date,
                        onChange: (e)=>setDate(e.target.value),
                        min: new Date().toISOString().split("T")[0],
                        className: "cursor-pointer w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all outline-none text-gray-700",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/BookingForm.js",
                        lineNumber: 146,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/BookingForm.js",
                lineNumber: 141,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm sm:text-base font-semibold text-gray-700",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                className: "w-4 h-4 inline mr-2 text-red-500"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/BookingForm.js",
                                lineNumber: 159,
                                columnNumber: 11
                            }, this),
                            "Select Time Slot"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/BookingForm.js",
                        lineNumber: 158,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2 sm:gap-3 max-h-48 overflow-y-auto border border-gray-200 p-2 sm:p-3 rounded-xl bg-gray-50",
                        children: timeSlots.map((slot)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setTime(slot),
                                className: `cursor-pointer px-2 sm:px-3 py-2 rounded-lg border text-xs sm:text-sm transition ${time === slot ? "bg-red-100 border-red-400 text-red-600 font-medium" : "hover:bg-gray-100 text-gray-700"}`,
                                children: formatTime(slot)
                            }, slot, false, {
                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/BookingForm.js",
                                lineNumber: 164,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/BookingForm.js",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/BookingForm.js",
                lineNumber: 157,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm font-semibold text-gray-700 mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                className: "w-4 h-4 inline mr-2 text-red-500"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/BookingForm.js",
                                lineNumber: 182,
                                columnNumber: 11
                            }, this),
                            "Number of Guests"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/BookingForm.js",
                        lineNumber: 181,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between border border-gray-300 rounded-xl px-4 py-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium text-gray-700",
                                children: "Guests"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/BookingForm.js",
                                lineNumber: 186,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>handlePeopleChange(-1),
                                        className: "cursor-pointer w-7 h-7 flex items-center justify-center bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-all font-bold text-xl shadow-sm hover:shadow active:scale-95",
                                        children: "−"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/BookingForm.js",
                                        lineNumber: 188,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-7 text-center text-gray-800 font-bold text-xl",
                                        children: people
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/BookingForm.js",
                                        lineNumber: 195,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>handlePeopleChange(1),
                                        className: "cursor-pointer w-7 h-7 flex items-center justify-center bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-all font-bold text-xl shadow-sm hover:shadow active:scale-95",
                                        children: "+"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/BookingForm.js",
                                        lineNumber: 198,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/BookingForm.js",
                                lineNumber: 187,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/BookingForm.js",
                        lineNumber: 185,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/BookingForm.js",
                lineNumber: 180,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm font-semibold text-gray-700",
                        children: "Special Requests (Optional)"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/BookingForm.js",
                        lineNumber: 211,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        value: specialRequests,
                        onChange: (e)=>setSpecialRequests(e.target.value),
                        placeholder: "Any dietary requirements, preferences, or special occasions?",
                        className: "w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all outline-none resize-none text-gray-700 placeholder-gray-400",
                        rows: "3"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/BookingForm.js",
                        lineNumber: 214,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/BookingForm.js",
                lineNumber: 210,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pt-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "submit",
                    disabled: isLoading,
                    className: "cursor-pointer w-full bg-[#EF4F5F] hover:bg-red-600 disabled:bg-gray-400 text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg transform hover:scale-[1.02] active:scale-[0.98] disabled:cursor-not-allowed text-sm sm:text-base",
                    children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "animate-spin h-5 w-5 text-white",
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        className: "opacity-25",
                                        cx: "12",
                                        cy: "12",
                                        r: "10",
                                        stroke: "currentColor",
                                        strokeWidth: "4"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/BookingForm.js",
                                        lineNumber: 238,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        className: "opacity-75",
                                        fill: "currentColor",
                                        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/BookingForm.js",
                                        lineNumber: 246,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/BookingForm.js",
                                lineNumber: 232,
                                columnNumber: 15
                            }, this),
                            "Processing..."
                        ]
                    }, void 0, true) : "Proceed to Cart"
                }, void 0, false, {
                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/BookingForm.js",
                    lineNumber: 225,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/BookingForm.js",
                lineNumber: 224,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/BookingForm.js",
        lineNumber: 88,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReviewBooking
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$indian$2d$rupee$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IndianRupee$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/indian-rupee.js [app-ssr] (ecmascript) <export default as IndianRupee>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/tag.js [app-ssr] (ecmascript) <export default as Tag>");
;
;
function ReviewBooking({ data, onProceed }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen py-2",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-2 space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-2xl shadow-lg p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-12 h-12 bg-red-100 rounded-full flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                    className: "w-6 h-6 text-red-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                                    lineNumber: 14,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                                lineNumber: 13,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-2xl font-bold text-gray-800",
                                                        children: "Review Your Booking"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                                        lineNumber: 17,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-500",
                                                        children: "Please verify your reservation details"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                                        lineNumber: 18,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                                lineNumber: 16,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                        lineNumber: 12,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gradient-to-r from-red-50 to-orange-50 p-4 rounded-xl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-600 mb-1",
                                                children: "Dining at"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                                lineNumber: 24,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-xl font-bold text-gray-800",
                                                children: data.restaurantName
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                                lineNumber: 25,
                                                columnNumber: 17
                                            }, this),
                                            data.restaurantAddress && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-600 mt-1",
                                                children: data.restaurantAddress
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                                lineNumber: 27,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                        lineNumber: 23,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                lineNumber: 11,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-2xl shadow-lg p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-lg font-bold text-gray-800 mb-4",
                                        children: "Reservation Details"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                        lineNumber: 34,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                            className: "w-5 h-5 text-red-600"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                                            lineNumber: 38,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                                        lineNumber: 37,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-gray-500 font-medium",
                                                                children: "Date"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                                                lineNumber: 41,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-base font-semibold text-gray-800",
                                                                children: new Date(data.date).toLocaleDateString('en-US', {
                                                                    weekday: 'short',
                                                                    month: 'short',
                                                                    day: 'numeric',
                                                                    year: 'numeric'
                                                                })
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                                                lineNumber: 42,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                                        lineNumber: 40,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                                lineNumber: 36,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                            className: "w-5 h-5 text-red-600"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                                            lineNumber: 55,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                                        lineNumber: 54,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-gray-500 font-medium",
                                                                children: "Time"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                                                lineNumber: 58,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-base font-semibold text-gray-800",
                                                                children: data.time
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                                                lineNumber: 59,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                                        lineNumber: 57,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                                lineNumber: 53,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                            className: "w-5 h-5 text-red-600"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                                            lineNumber: 65,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                                        lineNumber: 64,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-gray-500 font-medium",
                                                                children: "Guests"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                                                lineNumber: 68,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-base font-semibold text-gray-800",
                                                                children: [
                                                                    data.people,
                                                                    " ",
                                                                    data.people === 1 ? 'Person' : 'People'
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                                                lineNumber: 69,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                                        lineNumber: 67,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                                lineNumber: 63,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border-2 border-green-200",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$indian$2d$rupee$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IndianRupee$3e$__["IndianRupee"], {
                                                            className: "w-5 h-5 text-green-600"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                                            lineNumber: 77,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                                        lineNumber: 76,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-green-700 font-medium",
                                                                children: "Booking Amount"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                                                lineNumber: 80,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xl font-bold text-green-800",
                                                                children: [
                                                                    "₹",
                                                                    data.amount
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                                                lineNumber: 81,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                                        lineNumber: 79,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                                lineNumber: 75,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                        lineNumber: 35,
                                        columnNumber: 15
                                    }, this),
                                    data.offer !== null && typeof data.offer === "number" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-6 p-4 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl border-2 border-amber-200",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm flex-shrink-0",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                                                        className: "w-5 h-5 text-amber-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                                        lineNumber: 91,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                                    lineNumber: 90,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-amber-700 font-medium mb-1",
                                                            children: "Applied Offer"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                                            lineNumber: 94,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                            className: "font-bold text-amber-900 mb-1",
                                                            children: data.offers?.[data.offer]?.title || "Selected Offer"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                                            lineNumber: 95,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-semibold text-amber-800",
                                                            children: data.offers?.[data.offer]?.desc
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                                            lineNumber: 98,
                                                            columnNumber: 23
                                                        }, this),
                                                        data.offers?.[data.offer]?.sub && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-amber-600 mt-1",
                                                            children: data.offers[data.offer].sub
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                                            lineNumber: 102,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                                    lineNumber: 93,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                            lineNumber: 89,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                        lineNumber: 88,
                                        columnNumber: 17
                                    }, this),
                                    data.specialRequests && data.specialRequests.trim() !== "" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-6 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm flex-shrink-0",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                        className: "w-5 h-5 text-gray-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                                        lineNumber: 115,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                                    lineNumber: 114,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-gray-600 font-medium mb-1",
                                                            children: "Special Request"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                                            lineNumber: 118,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-semibold text-gray-800 leading-relaxed",
                                                            children: [
                                                                "“",
                                                                data.specialRequests,
                                                                "”"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                                            lineNumber: 121,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                                    lineNumber: 117,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                            lineNumber: 113,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                        lineNumber: 112,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                lineNumber: 33,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-2xl shadow-lg p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-3 mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                className: "w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                                lineNumber: 135,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "font-bold text-gray-800 mb-2",
                                                    children: "Important Information"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                                    lineNumber: 137,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                                lineNumber: 136,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                        lineNumber: 134,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex gap-3 text-sm text-gray-700",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-red-600 font-bold",
                                                        children: "•"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                                        lineNumber: 142,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "Booking amount of ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: [
                                                                    "₹",
                                                                    data.amount
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                                                lineNumber: 143,
                                                                columnNumber: 43
                                                            }, this),
                                                            " is fully redeemable on your final bill"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                                        lineNumber: 143,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                                lineNumber: 141,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex gap-3 text-sm text-gray-700",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-red-600 font-bold",
                                                        children: "•"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                                        lineNumber: 146,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "Please arrive within ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: "15 minutes"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                                                lineNumber: 147,
                                                                columnNumber: 46
                                                            }, this),
                                                            " of your reservation time"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                                        lineNumber: 147,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                                lineNumber: 145,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex gap-3 text-sm text-gray-700",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-red-600 font-bold",
                                                        children: "•"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                                        lineNumber: 150,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "Cancellation within ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: "1 hour"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                                                lineNumber: 151,
                                                                columnNumber: 45
                                                            }, this),
                                                            " before booking time will forfeit the amount"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                                        lineNumber: 151,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                                lineNumber: 149,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex gap-3 text-sm text-gray-700",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-red-600 font-bold",
                                                        children: "•"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                                        lineNumber: 154,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "You will receive a confirmation via email and SMS"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                                        lineNumber: 155,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                                lineNumber: 153,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                        lineNumber: 140,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                lineNumber: 133,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                        lineNumber: 9,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sticky top-8 space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-2xl shadow-lg p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-lg font-bold text-gray-800 mb-4",
                                            children: "Payment Summary"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                            lineNumber: 166,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3 mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-center pb-3 border-b border-gray-200",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm text-gray-600",
                                                            children: "Booking Amount"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                                            lineNumber: 170,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-semibold text-gray-800",
                                                            children: [
                                                                "₹",
                                                                data.amount
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                                            lineNumber: 171,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                                    lineNumber: 169,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-center pb-3 border-b border-gray-200",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm text-gray-600",
                                                            children: "Platform Fee"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                                            lineNumber: 175,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-semibold text-gray-800",
                                                            children: "₹0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                                            lineNumber: 176,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                                    lineNumber: 174,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-center pt-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-base font-bold text-gray-800",
                                                            children: "Total Amount"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                                            lineNumber: 180,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xl font-bold text-red-600",
                                                            children: [
                                                                "₹",
                                                                data.amount
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                                            lineNumber: 181,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                                    lineNumber: 179,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                            lineNumber: 168,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-green-50 p-3 rounded-lg mb-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-green-700 flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                                        lineNumber: 187,
                                                        columnNumber: 21
                                                    }, this),
                                                    "Full amount redeemable on your bill"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                                lineNumber: 186,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                            lineNumber: 185,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: onProceed,
                                            className: "cursor-pointer w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$indian$2d$rupee$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IndianRupee$3e$__["IndianRupee"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                                    lineNumber: 197,
                                                    columnNumber: 19
                                                }, this),
                                                "Proceed to Payment"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                            lineNumber: 193,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 text-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-500 flex items-center justify-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-4 h-4",
                                                        fill: "currentColor",
                                                        viewBox: "0 0 20 20",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            fillRule: "evenodd",
                                                            d: "M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                                            clipRule: "evenodd"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                                            lineNumber: 205,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                                        lineNumber: 204,
                                                        columnNumber: 21
                                                    }, this),
                                                    "Secure payment"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                                lineNumber: 203,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                            lineNumber: 202,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                    lineNumber: 165,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-blue-50 rounded-2xl p-6 border border-blue-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-bold text-blue-900 mb-2",
                                            children: "Need Help?"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                            lineNumber: 214,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-blue-800 mb-3",
                                            children: "Our support team is available 24/7 to assist you with your booking."
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                            lineNumber: 215,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "cursor-pointer text-sm text-blue-600 hover:text-blue-700 font-semibold",
                                            children: "Contact Support →"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                            lineNumber: 218,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                                    lineNumber: 213,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                            lineNumber: 163,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                        lineNumber: 162,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
                lineNumber: 7,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
            lineNumber: 6,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/Documents/Projects/DineX/dinex-client/src/utils/api.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/utils/api.js
__turbopack_context__.s([
    "API",
    ()=>API
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
;
const API = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: ("TURBOPACK compile-time value", "https://dinex-24s9.onrender.com")
});
// Add request interceptor to attach token
API.interceptors.request.use((config)=>{
    const token = localStorage.getItem("userToken");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error)=>{
    return Promise.reject(error);
});
}),
"[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Payment
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-ssr] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/smartphone.js [app-ssr] (ecmascript) <export default as Smartphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/wallet.js [app-ssr] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/building-2.js [app-ssr] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/lock.js [app-ssr] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$src$2f$utils$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/src/utils/api.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Payment({ data, onComplete }) {
    const [method, setMethod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("card");
    const [isProcessing, setIsProcessing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const paymentMethods = [
        {
            id: "upi",
            name: "UPI",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__["Smartphone"], {
                className: "w-6 h-6"
            }, void 0, false, {
                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                lineNumber: 14,
                columnNumber: 13
            }, this),
            description: "Pay via Google Pay, PhonePe, Paytm & more",
            recommended: true
        },
        {
            id: "card",
            name: "Credit/Debit Card",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"], {
                className: "w-6 h-6"
            }, void 0, false, {
                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                lineNumber: 21,
                columnNumber: 13
            }, this),
            description: "Visa, Mastercard, RuPay, Amex"
        },
        {
            id: "wallet",
            name: "Wallets",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"], {
                className: "w-6 h-6"
            }, void 0, false, {
                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                lineNumber: 27,
                columnNumber: 13
            }, this),
            description: "Paytm, PhonePe, Amazon Pay & more"
        },
        {
            id: "netbanking",
            name: "Net Banking",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                className: "w-6 h-6"
            }, void 0, false, {
                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                lineNumber: 33,
                columnNumber: 13
            }, this),
            description: "All major banks supported"
        }
    ];
    const handlePayment = async ()=>{
        setIsProcessing(true);
        // Simulate payment processing
        setTimeout(async ()=>{
            try {
                // Save booking to database
                const bookingData = {
                    restaurantId: data.restaurantId,
                    restaurantName: data.restaurantName,
                    date: data.date,
                    time: data.time,
                    people: data.people,
                    amount: data.amount,
                    offer: data.offer !== null && data.offers?.[data.offer] ? data.offers[data.offer] : undefined,
                    specialRequests: data.specialRequests || "",
                    paymentMethod: method
                };
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$src$2f$utils$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API"].post("/api/bookings", bookingData);
                if (response.data.booking) {
                    // alert(`✅ Payment successful! Booking ID: ${response.data.booking._id}`);
                    onComplete();
                }
            } catch (error) {
                console.error("Error saving booking:", error);
                alert("Payment successful but failed to save booking. Please contact support.");
                setIsProcessing(false);
            }
        }, 2000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen pt-4 pb-8 px-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-2xl shadow-lg p-6 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-12 h-12 bg-green-100 rounded-full flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                                    className: "w-6 h-6 text-green-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                                    lineNumber: 81,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                                lineNumber: 80,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-2xl font-bold text-gray-800",
                                                        children: "Complete Payment"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                                        lineNumber: 84,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-500",
                                                        children: "Choose your preferred payment method"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                                        lineNumber: 85,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                                lineNumber: 83,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                        lineNumber: 79,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: paymentMethods.map((pm)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onClick: ()=>setMethod(pm.id),
                                                className: `relative flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${method === pm.id ? 'border-red-500 bg-red-50 shadow-md' : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'}`,
                                                children: [
                                                    pm.recommended && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full",
                                                        children: "Recommended"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                                        lineNumber: 102,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `w-12 h-12 rounded-lg flex items-center justify-center ${method === pm.id ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600'}`,
                                                        children: pm.icon
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                                        lineNumber: 108,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "font-bold text-gray-800",
                                                                children: pm.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                                                lineNumber: 115,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-gray-600",
                                                                children: pm.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                                                lineNumber: 116,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                                        lineNumber: 114,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `w-6 h-6 rounded-full border-2 flex items-center justify-center ${method === pm.id ? 'border-red-500 bg-red-500' : 'border-gray-300'}`,
                                                        children: method === pm.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                            className: "w-4 h-4 text-white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                                            lineNumber: 124,
                                                            columnNumber: 44
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                                        lineNumber: 120,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                        className: `w-5 h-5 ${method === pm.id ? 'text-red-600' : 'text-gray-400'}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                                        lineNumber: 127,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, pm.id, true, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                                lineNumber: 92,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                        lineNumber: 90,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this),
                            method === "card" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-2xl shadow-lg p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-bold text-gray-800 mb-4",
                                        children: "Enter Card Details"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                        lineNumber: 137,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                                        children: "Card Number"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                                        lineNumber: 140,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        placeholder: "1234 5678 9012 3456",
                                                        className: "w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none",
                                                        maxLength: "19"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                                        lineNumber: 141,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                                lineNumber: 139,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-medium text-gray-700 mb-2",
                                                                children: "Expiry Date"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                                                lineNumber: 150,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                placeholder: "MM/YY",
                                                                className: "w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none",
                                                                maxLength: "5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                                                lineNumber: 151,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                                        lineNumber: 149,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-medium text-gray-700 mb-2",
                                                                children: "CVV"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                                                lineNumber: 159,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "password",
                                                                placeholder: "123",
                                                                className: "w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none",
                                                                maxLength: "3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                                                lineNumber: 160,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                                        lineNumber: 158,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                                lineNumber: 148,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                                        children: "Cardholder Name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                                        lineNumber: 169,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        placeholder: "Name on card",
                                                        className: "w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                                        lineNumber: 170,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                                lineNumber: 168,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                        lineNumber: 138,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                lineNumber: 136,
                                columnNumber: 15
                            }, this),
                            method === "upi" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-2xl shadow-lg p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-bold text-gray-800 mb-4",
                                        children: "Enter UPI ID"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                        lineNumber: 182,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "yourname@upi",
                                        className: "w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                        lineNumber: 183,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-500 mt-2",
                                        children: "Or scan QR code with any UPI app"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                        lineNumber: 188,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                lineNumber: 181,
                                columnNumber: 15
                            }, this),
                            method === "wallet" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-2xl shadow-lg p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-bold text-gray-800 mb-4",
                                        children: "Select Wallet"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                        lineNumber: 194,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-3",
                                        children: [
                                            "Paytm",
                                            "PhonePe",
                                            "Amazon Pay",
                                            "Mobikwik"
                                        ].map((wallet)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "p-4 text-gray-800 border-2 border-gray-200 rounded-lg hover:border-red-500 hover:bg-red-50 transition-all font-medium",
                                                children: wallet
                                            }, wallet, false, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                                lineNumber: 197,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                        lineNumber: 195,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                lineNumber: 193,
                                columnNumber: 15
                            }, this),
                            method === "netbanking" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-2xl shadow-lg p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-bold text-gray-800 mb-4",
                                        children: "Select Bank"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                        lineNumber: 210,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Select your bank"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                                lineNumber: 212,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "State Bank of India"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                                lineNumber: 213,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "HDFC Bank"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                                lineNumber: 214,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "ICICI Bank"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                                lineNumber: 215,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Axis Bank"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                                lineNumber: 216,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Kotak Mahindra Bank"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                                lineNumber: 217,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Punjab National Bank"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                                lineNumber: 218,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                        lineNumber: 211,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                lineNumber: 209,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-blue-50 rounded-2xl p-4 mt-4 border border-blue-200",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                            className: "w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                            lineNumber: 226,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                    className: "font-bold text-blue-900 text-sm mb-1",
                                                    children: "100% Secure Payment"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                                    lineNumber: 228,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-blue-800",
                                                    children: "Your payment information is encrypted and secure. We never store your card details."
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                                    lineNumber: 229,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                            lineNumber: 227,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                    lineNumber: 225,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                lineNumber: 224,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                        lineNumber: 76,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sticky top-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-2xl shadow-lg p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-lg font-bold text-gray-800 mb-4",
                                        children: "Booking Summary"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                        lineNumber: 241,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gradient-to-r from-red-50 to-orange-50 p-4 rounded-xl mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                className: "font-bold text-gray-800 mb-1",
                                                children: data.restaurantName
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                                lineNumber: 245,
                                                columnNumber: 19
                                            }, this),
                                            data.restaurantAddress && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-600",
                                                children: data.restaurantAddress
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                                lineNumber: 247,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                        lineNumber: 244,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3 mb-4 pb-4 border-b border-gray-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-600",
                                                        children: "Date"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                                        lineNumber: 254,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold text-gray-800",
                                                        children: new Date(data.date).toLocaleDateString('en-US', {
                                                            month: 'short',
                                                            day: 'numeric',
                                                            year: 'numeric'
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                                        lineNumber: 255,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                                lineNumber: 253,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-600",
                                                        children: "Time"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                                        lineNumber: 264,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold text-gray-800",
                                                        children: data.time
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                                        lineNumber: 265,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                                lineNumber: 263,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-600",
                                                        children: "Guests"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                                        lineNumber: 268,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold text-gray-800",
                                                        children: [
                                                            data.people,
                                                            " ",
                                                            data.people === 1 ? 'Person' : 'People'
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                                        lineNumber: 269,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                                lineNumber: 267,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                        lineNumber: 252,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3 mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-600",
                                                        children: "Booking Amount"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                                        lineNumber: 276,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold text-gray-800",
                                                        children: [
                                                            "₹",
                                                            data.amount
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                                        lineNumber: 277,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                                lineNumber: 275,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-600",
                                                        children: "Convenience Fee"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                                        lineNumber: 280,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold text-gray-800",
                                                        children: "₹0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                                        lineNumber: 281,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                                lineNumber: 279,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center pt-3 border-t border-gray-200",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold text-gray-800",
                                                        children: "Total Amount"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                                        lineNumber: 284,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-2xl font-bold text-red-600",
                                                        children: [
                                                            "₹",
                                                            data.amount
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                                        lineNumber: 285,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                                lineNumber: 283,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                        lineNumber: 274,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-green-50 p-3 rounded-lg mb-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-green-700 flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                                    lineNumber: 292,
                                                    columnNumber: 21
                                                }, this),
                                                "Full amount redeemable on your bill"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                            lineNumber: 291,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                        lineNumber: 290,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handlePayment,
                                        disabled: isProcessing,
                                        className: "cursor-pointer w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] disabled:cursor-not-allowed",
                                        children: isProcessing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "animate-spin h-5 w-5 text-white",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                            className: "opacity-25",
                                                            cx: "12",
                                                            cy: "12",
                                                            r: "10",
                                                            stroke: "currentColor",
                                                            strokeWidth: "4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                                            lineNumber: 306,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            className: "opacity-75",
                                                            fill: "currentColor",
                                                            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                                            lineNumber: 307,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                                    lineNumber: 305,
                                                    columnNumber: 23
                                                }, this),
                                                "Processing..."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                            lineNumber: 304,
                                            columnNumber: 21
                                        }, this) : `Pay ₹${data.amount}`
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                        lineNumber: 298,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-center text-gray-500 mt-3",
                                        children: "By proceeding, you agree to our Terms & Conditions"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                        lineNumber: 316,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                                lineNumber: 240,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                            lineNumber: 239,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                        lineNumber: 238,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
                lineNumber: 74,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
            lineNumber: 73,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/Projects/DineX/dinex-client/src/components/BookingFlow.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BookingFlow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$src$2f$components$2f$BookingForm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/src/components/BookingForm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$src$2f$components$2f$ReviewBooking$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/src/components/ReviewBooking.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$src$2f$components$2f$Payment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/src/components/Payment.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function BookingFlow({ restaurantName, restaurantId, offers = [] }) {
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [bookingData, setBookingData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleBookingSubmit = (data)=>{
        setBookingData(data);
        setStep(2);
    };
    const handleProceedToPayment = ()=>setStep(3);
    const handlePaymentComplete = ()=>{
        alert("✅ Payment successful! Your table has been reserved.");
        setStep(1);
        setBookingData(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-4",
        children: [
            step === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$src$2f$components$2f$BookingForm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                restaurantName: restaurantName,
                restaurantId: restaurantId,
                offers: offers,
                onSubmit: handleBookingSubmit
            }, void 0, false, {
                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/BookingFlow.js",
                lineNumber: 26,
                columnNumber: 9
            }, this),
            step === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$src$2f$components$2f$ReviewBooking$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                data: bookingData,
                onProceed: handleProceedToPayment
            }, void 0, false, {
                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/BookingFlow.js",
                lineNumber: 34,
                columnNumber: 9
            }, this),
            step === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$src$2f$components$2f$Payment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                data: bookingData,
                onComplete: handlePaymentComplete
            }, void 0, false, {
                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/BookingFlow.js",
                lineNumber: 37,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/BookingFlow.js",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/Projects/DineX/dinex-client/src/components/MenuSection.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MenuSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Utensils$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/utensils.js [app-ssr] (ecmascript) <export default as Utensils>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/coffee.js [app-ssr] (ecmascript) <export default as Coffee>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/eye.js [app-ssr] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
"use client";
;
;
;
function MenuSection({ restaurant }) {
    const [showMenuViewer, setShowMenuViewer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeMenu, setActiveMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Menu data
    const menus = [
        {
            id: "food",
            title: "Food Menu",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Utensils$3e$__["Utensils"], {
                className: "w-6 h-6"
            }, void 0, false, {
                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/MenuSection.js",
                lineNumber: 21,
                columnNumber: 13
            }, this),
            thumbnail: "/menus/food-thumbnail.png",
            pdf: "/menus/food-menu.pdf",
            color: "bg-[#FFF8E7]",
            borderColor: "border-[#E8E1D5]",
            iconBg: "bg-[#5E4633]",
            iconColor: "text-white"
        },
        {
            id: "beverages",
            title: "Beverages Menu",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__["Coffee"], {
                className: "w-6 h-6"
            }, void 0, false, {
                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/MenuSection.js",
                lineNumber: 32,
                columnNumber: 13
            }, this),
            thumbnail: "/menus/beverage-thumbnail.png",
            pdf: "/menus/beverages-menu.pdf",
            color: "bg-[#F3EAD8]",
            borderColor: "border-[#D4C5A9]",
            iconBg: "bg-[#C9A050]",
            iconColor: "text-white"
        },
        {
            id: "bar",
            title: "Bar Menu",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__["Coffee"], {
                className: "w-6 h-6"
            }, void 0, false, {
                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/MenuSection.js",
                lineNumber: 43,
                columnNumber: 13
            }, this),
            thumbnail: "/menus/bar-thumbnail.png",
            pdf: "/menus/bar-menu.pdf",
            color: "bg-[#F3EAD8]",
            borderColor: "border-[#D4C5A9]",
            iconBg: "bg-[#C9A050]",
            iconColor: "text-white"
        }
    ];
    const knownFor = [
        "Fancy Place",
        "Best in Service",
        "Sanitised Service",
        "Best Staff",
        "Great Menu",
        "Food Tastes Great"
    ];
    const paymentInfo = [
        "Cash and Cards accepted",
        "Digital payments accepted"
    ];
    const handleOpenMenu = (menu)=>{
        setActiveMenu(menu);
        setShowMenuViewer(true);
    };
    const handleCloseMenu = ()=>{
        setShowMenuViewer(false);
        setActiveMenu(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-8 space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6",
                children: [
                    restaurant.name,
                    " Menu"
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/MenuSection.js",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6",
                children: menus.map((menu)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "group relative overflow-hidden rounded-2xl border border-[#E8E1D5] bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer",
                        onClick: ()=>handleOpenMenu(menu),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative h-48 sm:h-56 md:h-64 overflow-hidden bg-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: menu.thumbnail,
                                        alt: menu.title,
                                        className: "w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/MenuSection.js",
                                        lineNumber: 94,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "bg-white text-[#4A3F35] px-3 sm:px-4 py-2 rounded-lg font-semibold flex items-center gap-2 hover:bg-[#F3EAD8] transition-colors cursor-pointer text-sm sm:text-base",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/MenuSection.js",
                                                    lineNumber: 103,
                                                    columnNumber: 19
                                                }, this),
                                                "View Menu"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/MenuSection.js",
                                            lineNumber: 102,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/MenuSection.js",
                                        lineNumber: 101,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/MenuSection.js",
                                lineNumber: 93,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 sm:p-4 text-center bg-[#FFF8E7]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-base sm:text-lg font-bold text-[#4A3F35]",
                                    children: menu.title
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/MenuSection.js",
                                    lineNumber: 111,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/MenuSection.js",
                                lineNumber: 110,
                                columnNumber: 13
                            }, this)
                        ]
                    }, menu.id, true, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/MenuSection.js",
                        lineNumber: 87,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/MenuSection.js",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            showMenuViewer && activeMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white w-full max-w-5xl h-[90vh] sm:h-[85vh] rounded-xl sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between p-3 sm:p-4 border-b border-gray-100 bg-white",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 sm:gap-3 min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `w-8 h-8 sm:w-10 sm:h-10 rounded-lg ${activeMenu.iconBg} ${activeMenu.iconColor} flex items-center justify-center flex-shrink-0`,
                                            children: activeMenu.icon
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/MenuSection.js",
                                            lineNumber: 125,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-bold text-base sm:text-lg text-[#4A3F35] truncate",
                                                    children: activeMenu.title
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/MenuSection.js",
                                                    lineNumber: 129,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-[#6B625A] hidden sm:block",
                                                    children: "Viewing PDF"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/MenuSection.js",
                                                    lineNumber: 130,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/MenuSection.js",
                                            lineNumber: 128,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/MenuSection.js",
                                    lineNumber: 124,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1 sm:gap-2 flex-shrink-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: activeMenu.pdf,
                                            download: true,
                                            className: "p-2 text-[#6B625A] hover:bg-[#FFF8E7] hover:text-[#C9A050] rounded-lg transition-colors cursor-pointer",
                                            title: "Download PDF",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                className: "w-4 h-4 sm:w-5 sm:h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/MenuSection.js",
                                                lineNumber: 141,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/MenuSection.js",
                                            lineNumber: 135,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleCloseMenu,
                                            className: "p-2 text-[#6B625A] hover:bg-red-50 hover:text-red-500 rounded-lg transition-colors cursor-pointer",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                className: "w-5 h-5 sm:w-6 sm:h-6"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/MenuSection.js",
                                                lineNumber: 147,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/MenuSection.js",
                                            lineNumber: 143,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/MenuSection.js",
                                    lineNumber: 134,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/MenuSection.js",
                            lineNumber: 123,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 bg-gray-100 relative",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                src: `${activeMenu.pdf}#toolbar=0&navpanes=0&scrollbar=0`,
                                className: "w-full h-full",
                                title: activeMenu.title
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/MenuSection.js",
                                lineNumber: 154,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/MenuSection.js",
                            lineNumber: 153,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3 sm:p-4 border-t border-gray-100 bg-white flex flex-col sm:flex-row justify-between items-center gap-2 text-xs sm:text-sm text-[#6B625A]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-center sm:text-left",
                                    children: "Use browser controls to zoom"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/MenuSection.js",
                                    lineNumber: 163,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: activeMenu.pdf,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "text-[#C9A050] hover:underline font-medium flex items-center gap-1",
                                    children: [
                                        "Open in new tab ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                            className: "w-3 h-3"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/MenuSection.js",
                                            lineNumber: 170,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/MenuSection.js",
                                    lineNumber: 164,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/MenuSection.js",
                            lineNumber: 162,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/MenuSection.js",
                    lineNumber: 120,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/MenuSection.js",
                lineNumber: 119,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "border border-gray-200 rounded-xl p-4 sm:p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg sm:text-xl text-gray-900 font-semibold mb-2",
                        children: "People Say This Place Is Known For"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/MenuSection.js",
                        lineNumber: 179,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm sm:text-base text-gray-600 mb-4",
                        children: knownFor?.length ? knownFor.join(", ") : "No info available."
                    }, void 0, false, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/MenuSection.js",
                        lineNumber: 182,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg sm:text-xl text-gray-900 font-semibold mb-2",
                        children: "Average Cost"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/MenuSection.js",
                        lineNumber: 186,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm sm:text-base text-gray-800",
                        children: [
                            "₹",
                            restaurant.priceForTwo,
                            " for two"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/MenuSection.js",
                        lineNumber: 187,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm sm:text-base text-gray-500",
                        children: "₹395 for a pint of beer (approx.)"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/MenuSection.js",
                        lineNumber: 188,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 space-y-1",
                        children: paymentInfo?.length ? paymentInfo.map((info, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm sm:text-base text-gray-700",
                                children: info
                            }, i, false, {
                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/MenuSection.js",
                                lineNumber: 193,
                                columnNumber: 15
                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm sm:text-base text-gray-500",
                            children: "Payment details not available"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/MenuSection.js",
                            lineNumber: 198,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/MenuSection.js",
                        lineNumber: 190,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/MenuSection.js",
                lineNumber: 178,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/MenuSection.js",
        lineNumber: 78,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/facebook.js [app-ssr] (ecmascript) <export default as Facebook>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/instagram.js [app-ssr] (ecmascript) <export default as Instagram>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-ssr] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/twitter.js [app-ssr] (ecmascript) <export default as Twitter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/next/image.js [app-ssr] (ecmascript)");
;
;
;
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-gradient-to-b from-[#FFF8E7] to-[#F4D483] border-t border-gray-800",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-4 lg:px-6 pt-6 pb-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "inline-block",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: "/images/logo2.png",
                                alt: "DineX Logo",
                                width: 120,
                                height: 40,
                                className: "mx-auto"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                                lineNumber: 13,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                            lineNumber: 12,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[#8B6F3E] text-sm mt-3 font-medium",
                            children: "Discover. Dine. Delight. Your favorite restaurants, all in one place."
                        }, void 0, false, {
                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                    lineNumber: 11,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 md:grid-cols-4 gap-8 text-sm mb-5 text-[#8B6F3E]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "mb-4 text-base font-semibold text-gray-800 uppercase",
                                    children: "Company"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/",
                                                className: "hover:text-gray-800 transition-colors",
                                                children: "About DineX"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                                                lineNumber: 35,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                                            lineNumber: 35,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/",
                                                className: "hover:text-gray-800 transition-colors",
                                                children: "Careers"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                                                lineNumber: 36,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                                            lineNumber: 36,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/",
                                                className: "hover:text-gray-800 transition-colors",
                                                children: "Press & Media"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                                                lineNumber: 37,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                                            lineNumber: 37,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/",
                                                className: "hover:text-gray-800 transition-colors",
                                                children: "Partnerships"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                                                lineNumber: 38,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                                            lineNumber: 38,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/",
                                                className: "hover:text-gray-800 transition-colors",
                                                children: "Contact Us"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                                                lineNumber: 39,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                                            lineNumber: 39,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                                    lineNumber: 34,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "mb-4 text-base font-semibold text-gray-800 uppercase",
                                    children: "Explore"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/",
                                                className: "hover:text-gray-800 transition-colors",
                                                children: "Top Restaurants"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                                                lineNumber: 49,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                                            lineNumber: 49,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/",
                                                className: "hover:text-gray-800 transition-colors",
                                                children: "Cuisines Near You"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                                                lineNumber: 50,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                                            lineNumber: 50,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/",
                                                className: "hover:text-gray-800 transition-colors",
                                                children: "Offers & Deals"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                                                lineNumber: 51,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                                            lineNumber: 51,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/",
                                                className: "hover:text-gray-800 transition-colors",
                                                children: "Book a Table"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                                                lineNumber: 52,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                                            lineNumber: 52,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/",
                                                className: "hover:text-gray-800 transition-colors",
                                                children: "DineX Rewards"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                                                lineNumber: 53,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                                            lineNumber: 53,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "mb-4 text-base font-semibold text-gray-800 uppercase",
                                    children: "Support"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/",
                                                className: "hover:text-gray-800 transition-colors",
                                                children: "Help Center"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                                                lineNumber: 63,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                                            lineNumber: 63,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/",
                                                className: "hover:text-gray-800 transition-colors",
                                                children: "FAQs"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                                                lineNumber: 64,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                                            lineNumber: 64,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/",
                                                className: "hover:text-gray-800 transition-colors",
                                                children: "Cancellation Policy"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                                                lineNumber: 65,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                                            lineNumber: 65,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/",
                                                className: "hover:text-gray-800 transition-colors",
                                                children: "Report an Issue"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                                                lineNumber: 66,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                                            lineNumber: 66,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/",
                                                className: "hover:text-gray-800 transition-colors",
                                                children: "Feedback"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                                                lineNumber: 67,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                                            lineNumber: 67,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "mb-4 text-base font-semibold text-gray-800 uppercase",
                                    children: "Legal"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/",
                                                className: "hover:text-gray-800 transition-colors",
                                                children: "Terms & Conditions"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                                                lineNumber: 77,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                                            lineNumber: 77,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/",
                                                className: "hover:text-gray-800 transition-colors",
                                                children: "Privacy Policy"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                                                lineNumber: 78,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                                            lineNumber: 78,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/",
                                                className: "hover:text-gray-800 transition-colors",
                                                children: "Cookie Policy"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                                                lineNumber: 79,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                                            lineNumber: 79,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/",
                                                className: "hover:text-gray-800 transition-colors",
                                                children: "Security"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                                                lineNumber: 80,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                                            lineNumber: 80,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/",
                                                className: "hover:text-gray-800 transition-colors",
                                                children: "Accessibility"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                                                lineNumber: 81,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                                            lineNumber: 81,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                    lineNumber: 27,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-px bg-gray-800/30"
                }, void 0, false, {
                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                    lineNumber: 86,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap items-center justify-between mt-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3",
                            children: [
                                {
                                    Icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__["Facebook"],
                                    label: "Facebook"
                                },
                                {
                                    Icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"],
                                    label: "Instagram"
                                },
                                {
                                    Icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"],
                                    label: "LinkedIn"
                                },
                                {
                                    Icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__["Twitter"],
                                    label: "Twitter"
                                }
                            ].map(({ Icon, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "flex items-center justify-center h-10 w-10 rounded-full border border-gray-800 text-[#8B6F3E] hover:bg-gray-800 hover:text-white transition-colors",
                                    "aria-label": label,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                                        lineNumber: 104,
                                        columnNumber: 17
                                    }, this)
                                }, label, false, {
                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                                    lineNumber: 98,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-4 mt-4 md:mt-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "flex items-center gap-2 bg-black text-white px-4 pt-2 pb-3 rounded-lg hover:bg-gray-800 transition shadow-md hover:shadow-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            viewBox: "0 0 24 24",
                                            fill: "currentColor",
                                            className: "w-5 h-5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M15.535,3.847C16.429,2.773,16.87,1.393,16.763,0c-1.366,0.144-2.629,0.797-3.535,1.829c-0.895,1.019-1.349,2.351-1.261,3.705C13.352,5.548,14.667,4.926,15.535,3.847z"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                                                    lineNumber: 113,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M18.546,12.763c0.024-1.87,1.004-3.597,2.597-4.576c-1.009-1.442-2.64-2.323-4.399-2.378c-1.851-0.194-3.645,1.107-4.588,1.107c-0.961,0-2.413-1.088-3.977-1.056C6.122,5.927,4.25,7.068,3.249,8.867c-2.131,3.69-0.542,9.114,1.5,12.097c1.022,1.461,2.215,3.092,3.778,3.035c1.529-0.063,2.1-0.975,3.945-0.975c1.828,0,2.364,0.975,3.958,0.938c1.64-0.027,2.674-1.467,3.66-2.942c0.734-1.041,1.299-2.191,1.673-3.408C19.815,16.788,18.548,14.879,18.546,12.763z"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                                                    lineNumber: 114,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                                            lineNumber: 112,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-left",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] leading-none tracking-tighter",
                                                    children: "Download on the"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                                                    lineNumber: 117,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-semibold leading-none",
                                                    children: "App Store"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                                                    lineNumber: 118,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                                            lineNumber: 116,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                                    lineNumber: 111,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "flex items-center gap-2 bg-black text-white px-4 pt-2 pb-3 rounded-lg hover:bg-gray-800 transition",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            viewBox: "0 0 24 24",
                                            fill: "currentColor",
                                            className: "w-5 h-5",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "m21.762,9.942L4.67.378c-.721-.466-1.635-.504-2.393-.099-.768.411-1.246,1.208-1.246,2.08v19.282c0,.872.477,1.668,1.246,2.079.755.404,1.668.37,2.393-.098l17.092-9.564c.756-.423,1.207-1.192,1.207-2.058s-.451-1.635-1.207-2.058Z"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                                                lineNumber: 124,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                                            lineNumber: 123,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-left",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] leading-none font-light tracking-tighter",
                                                    children: "GET IT ON"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                                                    lineNumber: 127,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-semibold leading-none",
                                                    children: "Google Play"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                                                    lineNumber: 128,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                                            lineNumber: 126,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                                    lineNumber: 122,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                            lineNumber: 110,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                    lineNumber: 89,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-px bg-gray-800/30 mt-4"
                }, void 0, false, {
                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                    lineNumber: 134,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center text-xs text-[#8B6F3E] pt-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "© 2025 ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-[#8B6F3E]",
                                children: "DineX"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                                lineNumber: 139,
                                columnNumber: 20
                            }, this),
                            ". All rights reserved."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                        lineNumber: 138,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
                    lineNumber: 137,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/Projects/DineX/dinex-client/src/components/Navbar.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/next/image.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Navbar() {
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const loadUser = ()=>{
            const storedUser = localStorage.getItem("user");
            if (storedUser) {
                setUser(JSON.parse(storedUser));
            } else {
                setUser(null);
            }
        };
        // Load user on mount
        loadUser();
        // Listen for user updates
        window.addEventListener("userUpdated", loadUser);
        return ()=>{
            window.removeEventListener("userUpdated", loadUser);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "w-full bg-white shadow-sm border-b border-gray-100",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/customer/home",
                    className: "flex items-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: "/images/logo2.png",
                        alt: "DineX Logo",
                        width: 100,
                        height: 40,
                        unoptimized: true,
                        className: "object-contain w-[80px] sm:w-[100px] h-auto"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Navbar.js",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Navbar.js",
                    lineNumber: 34,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 sm:gap-3 md:gap-4",
                    children: user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/customer/profile",
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#FFF8E7] text-[#8B6F3E] flex items-center justify-center font-semibold text-sm sm:text-base",
                                children: user.name ? user.name[0].toUpperCase() : "U"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Navbar.js",
                                lineNumber: 49,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden sm:inline font-medium text-gray-700 hover:text-[#C9A050] text-sm md:text-base",
                                children: user.name?.split(" ")[0] || "Profile"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Navbar.js",
                                lineNumber: 52,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Navbar.js",
                        lineNumber: 48,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/customer/login",
                                className: "text-gray-600 hover:text-[#C9A050] text-sm md:text-base font-medium transition-colors",
                                children: "Login"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Navbar.js",
                                lineNumber: 58,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/customer/signup",
                                className: "text-gray-600 hover:text-[#C9A050] text-sm md:text-base font-medium transition-colors",
                                children: "Signup"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Navbar.js",
                                lineNumber: 64,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true)
                }, void 0, false, {
                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Navbar.js",
                    lineNumber: 46,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Navbar.js",
            lineNumber: 32,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/components/Navbar.js",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/Projects/DineX/dinex-client/src/app/restaurant/[id]/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RestaurantDetail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/phone.js [app-ssr] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/share-2.js [app-ssr] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/node_modules/lucide-react/dist/esm/icons/message-square.js [app-ssr] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$src$2f$components$2f$Reviews$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/src/components/Reviews.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$src$2f$components$2f$Overview$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/src/components/Overview.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$src$2f$components$2f$Photos$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/src/components/Photos.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$src$2f$components$2f$BookingFlow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/src/components/BookingFlow.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$src$2f$components$2f$MenuSection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/src/components/MenuSection.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$src$2f$components$2f$Footer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/src/components/Footer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$src$2f$components$2f$Navbar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/DineX/dinex-client/src/components/Navbar.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
function RestaurantDetail() {
    const { id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const [restaurant, setRestaurant] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Overview");
    const [selectedImageIndex, setSelectedImageIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!id) return;
        const API = ("TURBOPACK compile-time value", "https://dinex-24s9.onrender.com");
        fetch(`${API}/api/restaurants/${id}`).then((res)=>{
            if (!res.ok) throw new Error("Restaurant not found");
            return res.json();
        }).then((data)=>{
            setRestaurant(data);
            setLoading(true);
        }).catch((err)=>console.error(err)).finally(()=>setLoading(false));
    }, [
        id
    ]);
    const images = [
        "/images/ambience/amb13.png",
        "/images/ambience/amb6.png",
        "/images/ambience/amb8.png",
        "/images/ambience/amb9.png",
        "/images/ambience/amb4.png",
        "/images/food/food7.png",
        "/images/ambience/amb12.png",
        "/images/food/food15.png",
        "/images/ambience/amb3.png",
        "/images/food/food1.png",
        "/images/ambience/amb9.png",
        "/images/food/food19.png",
        "/images/ambience/amb6.png",
        "/images/food/food11.png",
        "/images/ambience/amb1.png",
        "/images/food/food3.png",
        "/images/ambience/amb15.png",
        "/images/food/food9.png",
        "/images/ambience/amb4.png",
        "/images/food/food13.png",
        "/images/ambience/amb10.png",
        "/images/food/food2.png",
        "/images/ambience/amb7.png",
        "/images/food/food17.png",
        "/images/ambience/amb14.png",
        "/images/food/food5.png",
        "/images/ambience/amb2.png",
        "/images/food/food8.png",
        "/images/ambience/amb11.png",
        "/images/food/food18.png",
        "/images/ambience/amb5.png",
        "/images/food/food6.png",
        "/images/ambience/amb13.png",
        "/images/food/food10.png",
        "/images/ambience/amb8.png",
        "/images/food/food12.png",
        "/images/ambience/amb16.png",
        "/images/food/food4.png",
        "/images/food/food14.png",
        "/images/food/food16.png",
        "/images/food/food20.png"
    ];
    const offers = [
        {
            title: "PRE-BOOK OFFER",
            desc: `Flat ${restaurant.offer}% OFF`,
            sub: "Booking required"
        },
        {
            title: "INSTANT OFFER",
            desc: "Flat 10% OFF",
            sub: "on bill payments"
        },
        {
            title: "SURPRISE",
            desc: "Get a scratch card",
            sub: "after every transaction"
        },
        {
            title: "EXCLUSIVE OFFER",
            desc: "Get 15% upto ₹1200 on RuPay CC UPI",
            sub: "valid on your next dining payment"
        },
        {
            title: "BANK OFFER",
            desc: "20% OFF up to ₹5000",
            sub: "on Solitaire Credit Cards and more with other banks"
        }
    ];
    const openImage = (index)=>setSelectedImageIndex(index);
    const closeModal = ()=>setSelectedImageIndex(null);
    const nextImage = ()=>setSelectedImageIndex((prev)=>prev === images.length - 1 ? 0 : prev + 1);
    const prevImage = ()=>setSelectedImageIndex((prev)=>prev === 0 ? images.length - 1 : prev - 1);
    const cuisinesText = Array.isArray(restaurant.cuisines) ? restaurant.cuisines.join(", ") : restaurant.cuisines || "";
    if (loading || !restaurant) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$src$2f$components$2f$Navbar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/restaurant/[id]/page.js",
                lineNumber: 113,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-9122394874bcaca8" + " " + "min-h-screen bg-[#FFF8E7] flex flex-col items-center justify-center px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-9122394874bcaca8" + " " + "relative w-28 h-28 mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-9122394874bcaca8" + " " + "absolute inset-0 rounded-full bg-gradient-to-tr from-orange-400 to-red-500 blur-xl opacity-40 animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/restaurant/[id]/page.js",
                                lineNumber: 118,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-9122394874bcaca8" + " " + "relative w-28 h-28 rounded-full bg-white shadow-xl flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-9122394874bcaca8" + " " + "text-5xl animate-[wiggle_1.2s_ease-in-out_infinite]",
                                    children: "🍽️"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/restaurant/[id]/page.js",
                                    lineNumber: 120,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/restaurant/[id]/page.js",
                                lineNumber: 119,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/restaurant/[id]/page.js",
                        lineNumber: 117,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-9122394874bcaca8" + " " + "w-64 h-6 rounded-lg bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer mb-3"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/restaurant/[id]/page.js",
                        lineNumber: 125,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-9122394874bcaca8" + " " + "w-40 h-4 rounded-lg bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/restaurant/[id]/page.js",
                        lineNumber: 126,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-9122394874bcaca8" + " " + "flex gap-2 mt-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-9122394874bcaca8" + " " + "w-3 h-3 bg-orange-500 rounded-full animate-[bounce_0.8s_infinite]"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/restaurant/[id]/page.js",
                                lineNumber: 130,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-9122394874bcaca8" + " " + "w-3 h-3 bg-orange-500 rounded-full animate-[bounce_0.8s_infinite_0.2s]"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/restaurant/[id]/page.js",
                                lineNumber: 131,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-9122394874bcaca8" + " " + "w-3 h-3 bg-orange-500 rounded-full animate-[bounce_0.8s_infinite_0.4s]"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/restaurant/[id]/page.js",
                                lineNumber: 132,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/restaurant/[id]/page.js",
                        lineNumber: 129,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        id: "9122394874bcaca8",
                        children: "@keyframes shimmer{0%{background-position:-200px 0}to{background-position:200px 0}}.animate-shimmer.jsx-9122394874bcaca8{background-size:400px 100%;animation:1.5s linear infinite shimmer}@keyframes wiggle{0%,to{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}"
                    }, void 0, false, void 0, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/restaurant/[id]/page.js",
                lineNumber: 114,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$src$2f$components$2f$Footer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/restaurant/[id]/page.js",
                lineNumber: 152,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$src$2f$components$2f$Navbar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/restaurant/[id]/page.js",
                lineNumber: 158,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-4c56ce8df251bc41" + " " + "max-w-6xl mx-auto bg-white rounded-2xl shadow-sm p-6 border border-gray-100",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-4c56ce8df251bc41" + " " + "sticky top-0 z-40 bg-white",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-4c56ce8df251bc41" + " " + "py-3 sm:py-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-4c56ce8df251bc41" + " " + "flex flex-col md:flex-row md:items-start justify-between gap-3 sm:gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-4c56ce8df251bc41",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "jsx-4c56ce8df251bc41" + " " + "text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900",
                                                    children: restaurant.name
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/restaurant/[id]/page.js",
                                                    lineNumber: 165,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "jsx-4c56ce8df251bc41" + " " + "text-gray-600 text-sm sm:text-base md:text-lg mt-1",
                                                    children: cuisinesText
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/restaurant/[id]/page.js",
                                                    lineNumber: 166,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "jsx-4c56ce8df251bc41" + " " + "text-gray-500 text-xs sm:text-sm mt-1 line-clamp-1",
                                                    children: restaurant.address
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/restaurant/[id]/page.js",
                                                    lineNumber: 167,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-4c56ce8df251bc41" + " " + "flex flex-wrap items-center gap-1.5 sm:gap-2 mt-2 sm:mt-3 text-xs sm:text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-4c56ce8df251bc41" + " " + "text-green-600 font-medium bg-green-100 px-2 sm:px-3 py-1 rounded-full",
                                                            children: "Open now"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/restaurant/[id]/page.js",
                                                            lineNumber: 170,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-4c56ce8df251bc41" + " " + "text-gray-600",
                                                            children: "• 10am – 11:30pm"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/restaurant/[id]/page.js",
                                                            lineNumber: 173,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-4c56ce8df251bc41" + " " + "text-gray-600",
                                                            children: [
                                                                "• ₹",
                                                                restaurant.priceForTwo,
                                                                " for two"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/restaurant/[id]/page.js",
                                                            lineNumber: 174,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-4c56ce8df251bc41" + " " + "text-red-500 font-medium flex items-center gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                                    className: "w-3 h-3 sm:w-4 sm:h-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/restaurant/[id]/page.js",
                                                                    lineNumber: 176,
                                                                    columnNumber: 21
                                                                }, this),
                                                                " +91 ",
                                                                restaurant.contact
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/restaurant/[id]/page.js",
                                                            lineNumber: 175,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/restaurant/[id]/page.js",
                                                    lineNumber: 169,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/restaurant/[id]/page.js",
                                            lineNumber: 164,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-4c56ce8df251bc41" + " " + "flex flex-col items-start md:items-end gap-1.5 sm:gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-4c56ce8df251bc41" + " " + "flex items-center gap-0.5 sm:gap-1 bg-green-600 text-white px-2 sm:px-2.5 md:px-3 py-1 rounded-md text-xs sm:text-sm font-medium whitespace-nowrap",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                            className: "w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 fill-white flex-shrink-0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/restaurant/[id]/page.js",
                                                            lineNumber: 184,
                                                            columnNumber: 19
                                                        }, this),
                                                        " ",
                                                        restaurant.rating
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/restaurant/[id]/page.js",
                                                    lineNumber: 183,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "jsx-4c56ce8df251bc41" + " " + "text-xs sm:text-sm text-gray-600 whitespace-nowrap",
                                                    children: "2534 Dining Ratings"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/restaurant/[id]/page.js",
                                                    lineNumber: 186,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/restaurant/[id]/page.js",
                                            lineNumber: 182,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/restaurant/[id]/page.js",
                                    lineNumber: 163,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-4c56ce8df251bc41" + " " + "flex flex-wrap gap-2 sm:gap-3 mt-3 sm:mt-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "jsx-4c56ce8df251bc41" + " " + "flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-300 text-gray-900 rounded-lg hover:bg-gray-50 transition text-xs sm:text-sm whitespace-nowrap",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                    className: "w-3 h-3 sm:w-4 sm:h-4 text-gray-900 flex-shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/restaurant/[id]/page.js",
                                                    lineNumber: 193,
                                                    columnNumber: 17
                                                }, this),
                                                " Direction"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/restaurant/[id]/page.js",
                                            lineNumber: 192,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "jsx-4c56ce8df251bc41" + " " + "flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-300 text-gray-900 rounded-lg hover:bg-gray-50 transition text-xs sm:text-sm whitespace-nowrap",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                                                    className: "w-3 h-3 sm:w-4 sm:h-4 text-gray-900 flex-shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/restaurant/[id]/page.js",
                                                    lineNumber: 196,
                                                    columnNumber: 17
                                                }, this),
                                                " Share"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/restaurant/[id]/page.js",
                                            lineNumber: 195,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "jsx-4c56ce8df251bc41" + " " + "flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-300 text-gray-900 rounded-lg hover:bg-gray-50 transition text-xs sm:text-sm whitespace-nowrap",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                                    className: "w-3 h-3 sm:w-4 sm:h-4 text-gray-900 flex-shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/restaurant/[id]/page.js",
                                                    lineNumber: 199,
                                                    columnNumber: 17
                                                }, this),
                                                " Reviews"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/restaurant/[id]/page.js",
                                            lineNumber: 198,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/restaurant/[id]/page.js",
                                    lineNumber: 191,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/restaurant/[id]/page.js",
                            lineNumber: 162,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/restaurant/[id]/page.js",
                        lineNumber: 160,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-4c56ce8df251bc41" + " " + "mt-8 grid grid-cols-1 md:grid-cols-4 gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>setSelectedImageIndex(0),
                                className: "jsx-4c56ce8df251bc41" + " " + "md:col-span-2 relative group cursor-pointer overflow-hidden rounded-xl",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: images[0],
                                    alt: "Main",
                                    className: "jsx-4c56ce8df251bc41" + " " + "w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/restaurant/[id]/page.js",
                                    lineNumber: 212,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/restaurant/[id]/page.js",
                                lineNumber: 208,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-4c56ce8df251bc41" + " " + "md:col-span-2 grid grid-cols-2 gap-3",
                                children: [
                                    images.slice(1, 4).map((img, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onClick: ()=>setSelectedImageIndex(index + 1),
                                            className: "jsx-4c56ce8df251bc41" + " " + "relative group cursor-pointer overflow-hidden rounded-xl",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: img,
                                                alt: `Gallery ${index + 2}`,
                                                className: "jsx-4c56ce8df251bc41" + " " + "w-full h-[155px] object-cover transition-transform duration-500 group-hover:scale-110"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/restaurant/[id]/page.js",
                                                lineNumber: 227,
                                                columnNumber: 17
                                            }, this)
                                        }, index, false, {
                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/restaurant/[id]/page.js",
                                            lineNumber: 222,
                                            columnNumber: 15
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: ()=>{
                                            setActiveTab("Photos");
                                            setTimeout(()=>{
                                                const tabs = document.getElementById("tabs");
                                                const offset = 230; // adjust this based on your header+tabs height
                                                const top = tabs.getBoundingClientRect().top + window.scrollY - offset;
                                                window.scrollTo({
                                                    top,
                                                    behavior: "smooth"
                                                });
                                            }, 150);
                                        },
                                        className: "jsx-4c56ce8df251bc41" + " " + "relative group cursor-pointer overflow-hidden rounded-xl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: images[4] || images[0],
                                                alt: "Gallery 5",
                                                className: "jsx-4c56ce8df251bc41" + " " + "w-full h-[155px] object-cover transition-transform duration-500 group-hover:scale-105"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/restaurant/[id]/page.js",
                                                lineNumber: 249,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-4c56ce8df251bc41" + " " + "absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "jsx-4c56ce8df251bc41" + " " + "text-white font-semibold text-lg tracking-wide",
                                                    children: "View Gallery"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/restaurant/[id]/page.js",
                                                    lineNumber: 257,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/restaurant/[id]/page.js",
                                                lineNumber: 256,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/restaurant/[id]/page.js",
                                        lineNumber: 236,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/restaurant/[id]/page.js",
                                lineNumber: 220,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/restaurant/[id]/page.js",
                        lineNumber: 206,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        id: "tabs",
                        className: "jsx-4c56ce8df251bc41" + " " + "sticky top-[185px] sm:top-[200px] md:top-[215px] z-30 bg-white border-b border-gray-400 pt-3 sm:pt-5 overflow-x-auto scrollbar-hide",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-4c56ce8df251bc41" + " " + "flex gap-4 sm:gap-6 md:gap-8 text-gray-600 font-medium text-sm sm:text-base md:text-lg min-w-max",
                            children: [
                                "Overview",
                                "Reviews",
                                "Photos",
                                "Menu",
                                "Book a Table"
                            ].map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveTab(tab),
                                    className: "jsx-4c56ce8df251bc41" + " " + `pb-3 sm:pb-4 transition-all whitespace-nowrap ${activeTab === tab ? "text-[#C9A050] border-b-2 border-[#C9A050] font-semibold" : "hover:text-[#8B6F3E]"}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-4c56ce8df251bc41" + " " + "hidden sm:inline",
                                            children: tab
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/restaurant/[id]/page.js",
                                            lineNumber: 275,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-4c56ce8df251bc41" + " " + "sm:hidden",
                                            children: tab === "Book a Table" ? "Book" : tab
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/restaurant/[id]/page.js",
                                            lineNumber: 276,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, tab, true, {
                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/restaurant/[id]/page.js",
                                    lineNumber: 267,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/restaurant/[id]/page.js",
                            lineNumber: 265,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/restaurant/[id]/page.js",
                        lineNumber: 264,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        id: "4c56ce8df251bc41",
                        children: ".scrollbar-hide.jsx-4c56ce8df251bc41::-webkit-scrollbar{display:none}.scrollbar-hide.jsx-4c56ce8df251bc41{-ms-overflow-style:none;scrollbar-width:none}"
                    }, void 0, false, void 0, this),
                    selectedImageIndex !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-4c56ce8df251bc41" + " " + "fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-2 sm:p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: closeModal,
                                className: "jsx-4c56ce8df251bc41" + " " + "cursor-pointer absolute top-3 right-3 sm:top-6 sm:right-6 text-white hover:text-gray-300 transition z-50 bg-black/30 rounded-full p-1.5 sm:p-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-6 h-6 sm:w-10 sm:h-10"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/restaurant/[id]/page.js",
                                    lineNumber: 300,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/restaurant/[id]/page.js",
                                lineNumber: 296,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: prevImage,
                                className: "jsx-4c56ce8df251bc41" + " " + "cursor-pointer absolute left-2 sm:left-6 text-white hover:text-gray-300 bg-black/50 p-2 sm:p-3 rounded-full z-50",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                    className: "w-5 h-5 sm:w-8 sm:h-8"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/restaurant/[id]/page.js",
                                    lineNumber: 308,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/restaurant/[id]/page.js",
                                lineNumber: 304,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-4c56ce8df251bc41" + " " + "max-w-6xl mx-auto w-full px-2 sm:px-4 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: images[selectedImageIndex],
                                    alt: `Photo ${selectedImageIndex + 1}`,
                                    className: "jsx-4c56ce8df251bc41" + " " + "max-h-[70vh] sm:max-h-[80vh] w-auto rounded-lg sm:rounded-xl object-contain shadow-2xl"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/restaurant/[id]/page.js",
                                    lineNumber: 312,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/restaurant/[id]/page.js",
                                lineNumber: 311,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: nextImage,
                                className: "jsx-4c56ce8df251bc41" + " " + "cursor-pointer absolute right-2 sm:right-6 text-white hover:text-gray-300 bg-black/50 p-2 sm:p-3 rounded-full z-50",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                    className: "w-5 h-5 sm:w-8 sm:h-8"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/restaurant/[id]/page.js",
                                    lineNumber: 323,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/restaurant/[id]/page.js",
                                lineNumber: 319,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-4c56ce8df251bc41" + " " + "absolute bottom-4 sm:bottom-8 text-white text-xs sm:text-sm bg-black/50 px-3 py-1.5 rounded-full",
                                children: [
                                    selectedImageIndex + 1,
                                    " / ",
                                    images.length
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/restaurant/[id]/page.js",
                                lineNumber: 327,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/restaurant/[id]/page.js",
                        lineNumber: 294,
                        columnNumber: 11
                    }, this),
                    activeTab === "Overview" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$src$2f$components$2f$Overview$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        restaurant: restaurant
                    }, void 0, false, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/restaurant/[id]/page.js",
                        lineNumber: 336,
                        columnNumber: 38
                    }, this),
                    activeTab === "Reviews" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$src$2f$components$2f$Reviews$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        restaurantName: restaurant.name
                    }, void 0, false, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/restaurant/[id]/page.js",
                        lineNumber: 340,
                        columnNumber: 37
                    }, this),
                    activeTab === "Photos" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        id: "photos-section",
                        className: "jsx-4c56ce8df251bc41",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$src$2f$components$2f$Photos$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            restaurant: restaurant
                        }, void 0, false, {
                            fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/restaurant/[id]/page.js",
                            lineNumber: 345,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/restaurant/[id]/page.js",
                        lineNumber: 344,
                        columnNumber: 11
                    }, this),
                    activeTab === "Menu" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$src$2f$components$2f$MenuSection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        restaurant: restaurant
                    }, void 0, false, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/restaurant/[id]/page.js",
                        lineNumber: 349,
                        columnNumber: 34
                    }, this),
                    activeTab === "Book a Table" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$src$2f$components$2f$BookingFlow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        restaurantName: restaurant.name,
                        restaurantId: restaurant.restaurantId,
                        offers: offers
                    }, void 0, false, {
                        fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/restaurant/[id]/page.js",
                        lineNumber: 353,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/restaurant/[id]/page.js",
                lineNumber: 159,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$DineX$2f$dinex$2d$client$2f$src$2f$components$2f$Footer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Documents/Projects/DineX/dinex-client/src/app/restaurant/[id]/page.js",
                lineNumber: 361,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__9ca0ffd9._.js.map