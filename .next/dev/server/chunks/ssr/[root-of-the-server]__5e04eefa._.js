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
"[project]/Documents/DR-Base/src/app/doctors/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DoctorsPage
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
async function DoctorsPage({ searchParams }) {
    const { specialty } = await searchParams;
    let doctors = [];
    try {
        doctors = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DR$2d$Base$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].doctor.findMany({
            where: specialty ? {
                specialty
            } : undefined,
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
    } catch  {
    // DB not connected
    }
    const list = doctors.map(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DR$2d$Base$2f$src$2f$lib$2f$doctor$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toDoctor"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DR$2d$Base$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "px-4 py-10 sm:px-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DR$2d$Base$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-6xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DR$2d$Base$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl font-bold tracking-tight text-stone-900",
                    children: "Doctor tracking"
                }, void 0, false, {
                    fileName: "[project]/Documents/DR-Base/src/app/doctors/page.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DR$2d$Base$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-2 text-stone-600",
                    children: specialty ? `Filtered by ${specialty}.` : "Browse physicians by specialty, workplace, and compensation."
                }, void 0, false, {
                    fileName: "[project]/Documents/DR-Base/src/app/doctors/page.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this),
                specialty && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DR$2d$Base$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DR$2d$Base$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    href: "/doctors",
                    className: "mt-2 inline-block text-sm font-medium text-teal-600 hover:text-teal-700",
                    children: "Clear filter"
                }, void 0, false, {
                    fileName: "[project]/Documents/DR-Base/src/app/doctors/page.tsx",
                    lineNumber: 39,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DR$2d$Base$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
                    children: list.map((doctor)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DR$2d$Base$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DR$2d$Base$2f$src$2f$components$2f$DoctorCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DoctorCard"], {
                            doctor: doctor
                        }, doctor.id, false, {
                            fileName: "[project]/Documents/DR-Base/src/app/doctors/page.tsx",
                            lineNumber: 48,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Documents/DR-Base/src/app/doctors/page.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this),
                list.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DR$2d$Base$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "py-12 text-center text-stone-500",
                    children: "No doctors found. Add a database, run migrations and seed, or clear the filter."
                }, void 0, false, {
                    fileName: "[project]/Documents/DR-Base/src/app/doctors/page.tsx",
                    lineNumber: 52,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/DR-Base/src/app/doctors/page.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/DR-Base/src/app/doctors/page.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/DR-Base/src/app/doctors/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/DR-Base/src/app/doctors/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5e04eefa._.js.map