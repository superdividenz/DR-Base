module.exports = [
"[project]/Documents/DR-Base/src/app/favicon.ico.mjs { IMAGE => \"[project]/Documents/DR-Base/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/DR-Base/src/app/favicon.ico.mjs { IMAGE => \"[project]/Documents/DR-Base/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/Documents/DR-Base/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/DR-Base/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/Documents/DR-Base/src/types/doctor.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// API response shapes (from Prisma includes)
__turbopack_context__.s([
    "formatAmount",
    ()=>formatAmount,
    "totalPaymentsCents",
    ()=>totalPaymentsCents
]);
function formatAmount(cents) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(cents / 100);
}
function totalPaymentsCents(payments) {
    return payments.reduce((sum, p)=>sum + p.amountCents, 0);
}
}),
"[project]/Documents/DR-Base/src/components/DoctorCard.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DoctorCard",
    ()=>DoctorCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DR$2d$Base$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/DR-Base/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DR$2d$Base$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/DR-Base/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DR$2d$Base$2f$src$2f$types$2f$doctor$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/DR-Base/src/types/doctor.ts [app-rsc] (ecmascript)");
;
;
;
function DoctorCard({ doctor }) {
    const workplaces = doctor.employers.map((e)=>e.organization.name).join(", ");
    const totalCents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DR$2d$Base$2f$src$2f$types$2f$doctor$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["totalPaymentsCents"])(doctor.payments);
    const hasPay = totalCents > 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DR$2d$Base$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DR$2d$Base$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        href: `/doctors/${doctor.id}`,
        className: "group block rounded-xl border border-stone-200 bg-white p-6 shadow-sm transition hover:border-teal-200 hover:shadow-md",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DR$2d$Base$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DR$2d$Base$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start justify-between gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DR$2d$Base$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DR$2d$Base$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-semibold text-stone-900 group-hover:text-teal-700",
                                children: doctor.name
                            }, void 0, false, {
                                fileName: "[project]/Documents/DR-Base/src/components/DoctorCard.tsx",
                                lineNumber: 22,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/DR-Base/src/components/DoctorCard.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DR$2d$Base$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "rounded-full bg-teal-50 px-2.5 py-0.5 text-xs font-medium text-teal-700",
                            children: doctor.specialty
                        }, void 0, false, {
                            fileName: "[project]/Documents/DR-Base/src/components/DoctorCard.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/DR-Base/src/components/DoctorCard.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this),
                workplaces && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DR$2d$Base$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-stone-600",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DR$2d$Base$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-medium text-stone-500",
                            children: "Works at:"
                        }, void 0, false, {
                            fileName: "[project]/Documents/DR-Base/src/components/DoctorCard.tsx",
                            lineNumber: 32,
                            columnNumber: 13
                        }, this),
                        " ",
                        workplaces
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/DR-Base/src/components/DoctorCard.tsx",
                    lineNumber: 31,
                    columnNumber: 11
                }, this),
                hasPay && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DR$2d$Base$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm font-medium text-stone-700",
                    children: [
                        "Total tracked pay: ",
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DR$2d$Base$2f$src$2f$types$2f$doctor$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatAmount"])(totalCents)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/DR-Base/src/components/DoctorCard.tsx",
                    lineNumber: 37,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/DR-Base/src/components/DoctorCard.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/DR-Base/src/components/DoctorCard.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/DR-Base/src/lib/prisma.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "prisma",
    ()=>prisma
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$Documents$2f$DR$2d$Base$2f$node_modules$2f40$prisma$2f$client$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs, [project]/Documents/DR-Base/node_modules/@prisma/client)");
;
const globalForPrisma = globalThis;
const prisma = globalForPrisma.prisma ?? new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$Documents$2f$DR$2d$Base$2f$node_modules$2f40$prisma$2f$client$29$__["PrismaClient"]({
    log: ("TURBOPACK compile-time truthy", 1) ? [
        "query",
        "error",
        "warn"
    ] : "TURBOPACK unreachable"
});
if ("TURBOPACK compile-time truthy", 1) globalForPrisma.prisma = prisma;
}),
"[project]/Documents/DR-Base/src/lib/doctor.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toDoctor",
    ()=>toDoctor
]);
function toDoctor(d) {
    return {
        id: d.id,
        name: d.name,
        specialty: d.specialty,
        createdAt: d.createdAt.toISOString(),
        employers: d.employers.map((e)=>({
                organizationId: e.organizationId,
                organization: e.organization
            })),
        payments: d.payments.map((p)=>({
                id: p.id,
                amountCents: p.amountCents,
                period: p.period,
                year: p.year,
                payer: p.payer
            }))
    };
}
}),
"[project]/Documents/DR-Base/src/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DR$2d$Base$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/DR-Base/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DR$2d$Base$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/DR-Base/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DR$2d$Base$2f$src$2f$components$2f$DoctorCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/DR-Base/src/components/DoctorCard.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DR$2d$Base$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/DR-Base/src/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DR$2d$Base$2f$src$2f$lib$2f$doctor$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/DR-Base/src/lib/doctor.ts [app-rsc] (ecmascript)");
;
;
;
;
;
async function getSpecialties() {
    const rows = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DR$2d$Base$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].doctor.findMany({
        select: {
            specialty: true
        },
        distinct: [
            "specialty"
        ],
        orderBy: {
            specialty: "asc"
        }
    });
    return rows.map((r)=>r.specialty);
}
async function getDoctors() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DR$2d$Base$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].doctor.findMany({
        include: {
            employers: {
                include: {
                    organization: true
                }
            },
            payments: {
                include: {
                    payer: true
                }
            }
        },
        orderBy: {
            name: "asc"
        }
    });
}
async function Home() {
    let specialties = [];
    let doctors = [];
    try {
        [specialties, doctors] = await Promise.all([
            getSpecialties(),
            getDoctors()
        ]);
    } catch  {
    // DB not connected (e.g. first deploy before DATABASE_URL)
    }
    const featured = doctors.slice(0, 3);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DR$2d$Base$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-[var(--background)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DR$2d$Base$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "border-b border-stone-200 bg-white px-4 py-16 sm:px-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DR$2d$Base$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-6xl text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DR$2d$Base$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl",
                            children: "Doctor tracking"
                        }, void 0, false, {
                            fileName: "[project]/Documents/DR-Base/src/app/page.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DR$2d$Base$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mx-auto mt-4 max-w-2xl text-lg text-stone-600",
                            children: "Track physicians by specialty, where they work, who pays them, and how much they’re paid."
                        }, void 0, false, {
                            fileName: "[project]/Documents/DR-Base/src/app/page.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DR$2d$Base$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-8 flex flex-wrap justify-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DR$2d$Base$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DR$2d$Base$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/doctors",
                                    className: "rounded-lg bg-teal-600 px-5 py-2.5 font-medium text-white transition hover:bg-teal-700",
                                    children: "Browse doctors"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/DR-Base/src/app/page.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DR$2d$Base$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#specialties",
                                    className: "rounded-lg border border-stone-300 bg-white px-5 py-2.5 font-medium text-stone-700 transition hover:bg-stone-50",
                                    children: "View specialties"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/DR-Base/src/app/page.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/DR-Base/src/app/page.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/DR-Base/src/app/page.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/DR-Base/src/app/page.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            specialties.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DR$2d$Base$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "specialties",
                className: "px-4 py-12 sm:px-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DR$2d$Base$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-6xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DR$2d$Base$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-semibold text-stone-900",
                            children: "Specialties"
                        }, void 0, false, {
                            fileName: "[project]/Documents/DR-Base/src/app/page.tsx",
                            lineNumber: 69,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DR$2d$Base$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1 text-stone-600",
                            children: "Filter doctors by specialty."
                        }, void 0, false, {
                            fileName: "[project]/Documents/DR-Base/src/app/page.tsx",
                            lineNumber: 72,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DR$2d$Base$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 flex flex-wrap gap-2",
                            children: specialties.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DR$2d$Base$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DR$2d$Base$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/doctors?specialty=${encodeURIComponent(s)}`,
                                    className: "rounded-full border border-stone-200 bg-white px-4 py-2 text-sm text-stone-700 transition hover:border-teal-200 hover:bg-teal-50 hover:text-teal-800",
                                    children: s
                                }, s, false, {
                                    fileName: "[project]/Documents/DR-Base/src/app/page.tsx",
                                    lineNumber: 77,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Documents/DR-Base/src/app/page.tsx",
                            lineNumber: 75,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/DR-Base/src/app/page.tsx",
                    lineNumber: 68,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/DR-Base/src/app/page.tsx",
                lineNumber: 67,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DR$2d$Base$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "border-t border-stone-200 bg-stone-50/50 px-4 py-12 sm:px-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DR$2d$Base$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-6xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DR$2d$Base$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-semibold text-stone-900",
                            children: "Featured physicians"
                        }, void 0, false, {
                            fileName: "[project]/Documents/DR-Base/src/app/page.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DR$2d$Base$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1 text-stone-600",
                            children: "A few of the doctors in the tracking database."
                        }, void 0, false, {
                            fileName: "[project]/Documents/DR-Base/src/app/page.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this),
                        featured.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DR$2d$Base$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-6 text-stone-500",
                            children: "No doctors yet. Set up PostgreSQL, run migrations and seed, then refresh."
                        }, void 0, false, {
                            fileName: "[project]/Documents/DR-Base/src/app/page.tsx",
                            lineNumber: 99,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DR$2d$Base$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DR$2d$Base$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DR$2d$Base$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
                                    children: featured.map((doctor)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DR$2d$Base$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DR$2d$Base$2f$src$2f$components$2f$DoctorCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DoctorCard"], {
                                            doctor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DR$2d$Base$2f$src$2f$lib$2f$doctor$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toDoctor"])(doctor)
                                        }, doctor.id, false, {
                                            fileName: "[project]/Documents/DR-Base/src/app/page.tsx",
                                            lineNumber: 107,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/DR-Base/src/app/page.tsx",
                                    lineNumber: 105,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DR$2d$Base$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8 text-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DR$2d$Base$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DR$2d$Base$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/doctors",
                                        className: "text-sm font-medium text-teal-600 hover:text-teal-700",
                                        children: "View all doctors →"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/DR-Base/src/app/page.tsx",
                                        lineNumber: 111,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/DR-Base/src/app/page.tsx",
                                    lineNumber: 110,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/DR-Base/src/app/page.tsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/DR-Base/src/app/page.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/DR-Base/src/app/page.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/DR-Base/src/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/DR-Base/src/app/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__07ae6f88._.js.map