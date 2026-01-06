(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/modals/LoginModal.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const LoginModal = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(34);
    if ($[0] !== "5c6bf188c977fd903d66c006a89e9dd740fc621993c53be65f03fb331a93acab") {
        for(let $i = 0; $i < 34; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5c6bf188c977fd903d66c006a89e9dd740fc621993c53be65f03fb331a93acab";
    }
    const { isOpen, onClose } = t0;
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showPassword, setShowPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    if (!isOpen) {
        return null;
    }
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-6 h-6",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M6 18L18 6M6 6l12 12"
            }, void 0, false, {
                fileName: "[project]/components/modals/LoginModal.jsx",
                lineNumber: 25,
                columnNumber: 89
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/modals/LoginModal.jsx",
            lineNumber: 25,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== onClose) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onClose,
            className: "absolute top-6 right-6 text-white/70 hover:text-white transition-colors",
            "aria-label": "Close modal",
            children: t1
        }, void 0, false, {
            fileName: "[project]/components/modals/LoginModal.jsx",
            lineNumber: 32,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = onClose;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-8 y text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl font-medium text-white mb-2",
                    children: "Welcome Back"
                }, void 0, false, {
                    fileName: "[project]/components/modals/LoginModal.jsx",
                    lineNumber: 40,
                    columnNumber: 46
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-200 text-sm",
                    children: "Sign in to continue your dinner experience"
                }, void 0, false, {
                    fileName: "[project]/components/modals/LoginModal.jsx",
                    lineNumber: 40,
                    columnNumber: 116
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/modals/LoginModal.jsx",
            lineNumber: 40,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: "email",
            className: "block text-sm font-medium text-gray-400 mb-2",
            children: "Email"
        }, void 0, false, {
            fileName: "[project]/components/modals/LoginModal.jsx",
            lineNumber: 47,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = (e_0)=>setEmail(e_0.target.value);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] !== email) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "email",
                    id: "email",
                    value: email,
                    onChange: t5,
                    placeholder: "Enter your email",
                    className: "w-full px-4 py-3 bg-white border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#F97315] focus:ring-1 focus:ring-[#F97315] transition-colors"
                }, void 0, false, {
                    fileName: "[project]/components/modals/LoginModal.jsx",
                    lineNumber: 61,
                    columnNumber: 19
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/modals/LoginModal.jsx",
            lineNumber: 61,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = email;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    let t7;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: "password",
            className: "block text-sm font-medium text-gray-400 mb-2",
            children: "Password"
        }, void 0, false, {
            fileName: "[project]/components/modals/LoginModal.jsx",
            lineNumber: 69,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    const t8 = showPassword ? "text" : "password";
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = (e_1)=>setPassword(e_1.target.value);
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    let t10;
    if ($[11] !== password || $[12] !== t8) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: t8,
            id: "password",
            value: password,
            onChange: t9,
            placeholder: "Enter your password",
            className: "w-full px-4 py-3 bg-white border border-gray-700 rounded-lg  placeholder-gray-500 focus:outline-none focus:border-[#F97315] focus:ring-1 focus:ring-[#F97315] transition-colors pr-12"
        }, void 0, false, {
            fileName: "[project]/components/modals/LoginModal.jsx",
            lineNumber: 84,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = password;
        $[12] = t8;
        $[13] = t10;
    } else {
        t10 = $[13];
    }
    let t11;
    if ($[14] !== showPassword) {
        t11 = ()=>setShowPassword(!showPassword);
        $[14] = showPassword;
        $[15] = t11;
    } else {
        t11 = $[15];
    }
    let t12;
    if ($[16] !== showPassword) {
        t12 = showPassword ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-5 h-5",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
            }, void 0, false, {
                fileName: "[project]/components/modals/LoginModal.jsx",
                lineNumber: 101,
                columnNumber: 105
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/modals/LoginModal.jsx",
            lineNumber: 101,
            columnNumber: 26
        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-5 h-5",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                }, void 0, false, {
                    fileName: "[project]/components/modals/LoginModal.jsx",
                    lineNumber: 101,
                    columnNumber: 563
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                }, void 0, false, {
                    fileName: "[project]/components/modals/LoginModal.jsx",
                    lineNumber: 101,
                    columnNumber: 669
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/modals/LoginModal.jsx",
            lineNumber: 101,
            columnNumber: 484
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = showPassword;
        $[17] = t12;
    } else {
        t12 = $[17];
    }
    let t13;
    if ($[18] !== t11 || $[19] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: t11,
            className: "absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors",
            "aria-label": "Toggle password visibility",
            children: t12
        }, void 0, false, {
            fileName: "[project]/components/modals/LoginModal.jsx",
            lineNumber: 109,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[18] = t11;
        $[19] = t12;
        $[20] = t13;
    } else {
        t13 = $[20];
    }
    let t14;
    if ($[21] !== t10 || $[22] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        t10,
                        t13
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/modals/LoginModal.jsx",
                    lineNumber: 118,
                    columnNumber: 20
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/modals/LoginModal.jsx",
            lineNumber: 118,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[21] = t10;
        $[22] = t13;
        $[23] = t14;
    } else {
        t14 = $[23];
    }
    let t15;
    let t16;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-end",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: _temp2,
                className: "text-sm text-[#FFAA55] hover:underline transition-colors",
                children: "Forgot Password?"
            }, void 0, false, {
                fileName: "[project]/components/modals/LoginModal.jsx",
                lineNumber: 128,
                columnNumber: 45
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/modals/LoginModal.jsx",
            lineNumber: 128,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "submit",
            className: "w-full bg-[#F97315]  text-white py-3 rounded-lg font-bold text-sm uppercase tracking-wide hover:bg-[#EA580C] transition-colors",
            children: "Sign In"
        }, void 0, false, {
            fileName: "[project]/components/modals/LoginModal.jsx",
            lineNumber: 129,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[24] = t15;
        $[25] = t16;
    } else {
        t15 = $[24];
        t16 = $[25];
    }
    let t17;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "/terms-conditions",
            className: "hover:underline",
            children: "Terms of Service"
        }, void 0, false, {
            fileName: "[project]/components/modals/LoginModal.jsx",
            lineNumber: 138,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[26] = t17;
    } else {
        t17 = $[26];
    }
    let t18;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-[#A0A0A0] text-center",
            children: [
                "By continuing, you agree to our",
                " ",
                t17,
                " and",
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "/privacy-policy",
                    className: "hover:underline",
                    children: "Privacy Policy"
                }, void 0, false, {
                    fileName: "[project]/components/modals/LoginModal.jsx",
                    lineNumber: 145,
                    columnNumber: 111
                }, ("TURBOPACK compile-time value", void 0)),
                "."
            ]
        }, void 0, true, {
            fileName: "[project]/components/modals/LoginModal.jsx",
            lineNumber: 145,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[27] = t18;
    } else {
        t18 = $[27];
    }
    let t19;
    if ($[28] !== t14 || $[29] !== t6) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            className: "space-y-6",
            onSubmit: _temp,
            children: [
                t6,
                t14,
                t15,
                t16,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/components/modals/LoginModal.jsx",
            lineNumber: 152,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[28] = t14;
        $[29] = t6;
        $[30] = t19;
    } else {
        t19 = $[30];
    }
    let t20;
    if ($[31] !== t19 || $[32] !== t2) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#1a1f2e] rounded-2xl w-full max-w-md p-8 relative shadow-2xl",
                children: [
                    t2,
                    t3,
                    t19
                ]
            }, void 0, true, {
                fileName: "[project]/components/modals/LoginModal.jsx",
                lineNumber: 161,
                columnNumber: 113
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/modals/LoginModal.jsx",
            lineNumber: 161,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[31] = t19;
        $[32] = t2;
        $[33] = t20;
    } else {
        t20 = $[33];
    }
    return t20;
};
_s(LoginModal, "aAtMU91qNINbkRAWl1ktzwgKBdk=");
_c = LoginModal;
const __TURBOPACK__default__export__ = LoginModal;
function _temp(e) {
    return e.preventDefault();
}
function _temp2() {
    if ("TURBOPACK compile-time truthy", 1) {
        window.location.href = "/forgot-password";
    }
}
var _c;
__turbopack_context__.k.register(_c, "LoginModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Navbar.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$LoginModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/modals/LoginModal.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const Navbar = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "7466af14299b2b5de9b66372334a4ef9bed5a9a5401ffa4fbf63b998cd55cc44") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7466af14299b2b5de9b66372334a4ef9bed5a9a5401ffa4fbf63b998cd55cc44";
    }
    const [isLoginOpen, setIsLoginOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-2xl font-bold tracking-tight",
            children: "DinnerMatch"
        }, void 0, false, {
            fileName: "[project]/components/Navbar.jsx",
            lineNumber: 17,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "bg-[#101827] text-white py-4 sticky top-0 z-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 flex justify-between items-center",
                children: [
                    t0,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex items-center gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#how-it-works",
                                className: "text-sm hover:opacity-80 transition-opacity",
                                children: "How It Works"
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.jsx",
                                lineNumber: 24,
                                columnNumber: 203
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#about-us",
                                className: "text-sm  hover:opacity-80 transition-opacity",
                                children: "About Us"
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.jsx",
                                lineNumber: 24,
                                columnNumber: 299
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#faq",
                                className: "text-sm  hover:opacity-80 transition-opacity",
                                children: "FAQ's"
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.jsx",
                                lineNumber: 24,
                                columnNumber: 388
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Navbar.jsx",
                        lineNumber: 24,
                        columnNumber: 152
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setIsLoginOpen(true),
                        className: "bg-white text-nav-bg px-5 py-2 uppercase rounded font-bold text-sm hover:bg-gray-100 transition-colors",
                        children: "Sign In"
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.jsx",
                        lineNumber: 24,
                        columnNumber: 475
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/Navbar.jsx",
                lineNumber: 24,
                columnNumber: 74
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/Navbar.jsx",
            lineNumber: 24,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ()=>setIsLoginOpen(false);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== isLoginOpen) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$LoginModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    isOpen: isLoginOpen,
                    onClose: t2
                }, void 0, false, {
                    fileName: "[project]/components/Navbar.jsx",
                    lineNumber: 38,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true);
        $[4] = isLoginOpen;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    return t3;
};
_s(Navbar, "xuRy+j+s2UpUTgQtGDiHZ7cbmtw=");
_c = Navbar;
const __TURBOPACK__default__export__ = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Hero.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
"use client";
;
;
;
;
const Hero = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "11b16bebf71f7d88e3ced7e4b3b1a5843f6236fc6f8e4f8a24b006cb2ae7ea23") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "11b16bebf71f7d88e3ced7e4b3b1a5843f6236fc6f8e4f8a24b006cb2ae7ea23";
    }
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-2xl md:text-5xl font-bold leading-[0.95] tracking-tighter text-black max-w-xl",
            children: "WANT TO MEET YOUR PEOPLE?"
        }, void 0, false, {
            fileName: "[project]/components/Hero.jsx",
            lineNumber: 17,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xl md:text-[1.1rem] text-gray-800 max-w-lg font-light leading-tight",
            children: "Get matched by personality for a dinner you'll never forget."
        }, void 0, false, {
            fileName: "[project]/components/Hero.jsx",
            lineNumber: 18,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: _temp,
                    className: "bg-[#FFAA55] text-white px-6 py-3 rounded-md font-bold text-[0.8rem] tracking-wide w-fit uppercase hover:bg-[#FF9955] transition-colors cursor-pointer",
                    children: "Take the Quiz"
                }, void 0, false, {
                    fileName: "[project]/components/Hero.jsx",
                    lineNumber: 27,
                    columnNumber: 47
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-500 font-medium",
                    children: "14000+ people have taken the quiz. It only takes 2 minutes."
                }, void 0, false, {
                    fileName: "[project]/components/Hero.jsx",
                    lineNumber: 27,
                    columnNumber: 256
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/Hero.jsx",
            lineNumber: 27,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs text-gray-600",
            children: "As featured on"
        }, void 0, false, {
            fileName: "[project]/components/Hero.jsx",
            lineNumber: 34,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-1 flex flex-col gap-4",
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap items-center gap-3 md:gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/enca.png",
                            alt: "eNCA",
                            width: 120,
                            height: 40,
                            className: "h-12 w-auto object-contain"
                        }, void 0, false, {
                            fileName: "[project]/components/Hero.jsx",
                            lineNumber: 41,
                            columnNumber: 116
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/good-hope-fm.png",
                            alt: "Good Hope FM",
                            width: 120,
                            height: 40,
                            className: "h-12 w-auto object-contain"
                        }, void 0, false, {
                            fileName: "[project]/components/Hero.jsx",
                            lineNumber: 41,
                            columnNumber: 215
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/iol.png",
                            alt: "IOL",
                            width: 80,
                            height: 35,
                            className: "h-8 w-auto object-contain"
                        }, void 0, false, {
                            fileName: "[project]/components/Hero.jsx",
                            lineNumber: 41,
                            columnNumber: 330
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/capetalk.png",
                            alt: "Cape Talk",
                            width: 120,
                            height: 40,
                            className: "h-12 w-auto object-contain"
                        }, void 0, false, {
                            fileName: "[project]/components/Hero.jsx",
                            lineNumber: 41,
                            columnNumber: 425
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Hero.jsx",
                    lineNumber: 41,
                    columnNumber: 56
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/Hero.jsx",
            lineNumber: 41,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center text-[1rem]"
                }, void 0, false, {
                    fileName: "[project]/components/Hero.jsx",
                    lineNumber: 48,
                    columnNumber: 51
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-medium text-[0.8rem] text-gray-800",
                    children: "Vibe-Matched Groups"
                }, void 0, false, {
                    fileName: "[project]/components/Hero.jsx",
                    lineNumber: 48,
                    columnNumber: 148
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/Hero.jsx",
            lineNumber: 48,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-5",
            children: [
                t0,
                t1,
                t2,
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-10 mt-2",
                    children: [
                        t5,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center text-xl"
                                }, void 0, false, {
                                    fileName: "[project]/components/Hero.jsx",
                                    lineNumber: 55,
                                    columnNumber: 142
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-medium text-[0.8rem] text-gray-800",
                                    children: "Budget-Friendly"
                                }, void 0, false, {
                                    fileName: "[project]/components/Hero.jsx",
                                    lineNumber: 55,
                                    columnNumber: 235
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Hero.jsx",
                            lineNumber: 55,
                            columnNumber: 101
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Hero.jsx",
                    lineNumber: 55,
                    columnNumber: 63
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/Hero.jsx",
            lineNumber: 55,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "bg-[#F3F4F6] py-8 md:py-12 min-h-[45vh] flex items-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center",
                children: [
                    t6,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative overflow-hidden shadow-2xl duration-500 group-hover:scale-[1.01]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/3f338432d1b44b50402ec4605b83d5bf77c831e3.png",
                                        alt: "Dinner Party",
                                        width: 1900,
                                        height: 900,
                                        className: "w-full h-auto object-cover",
                                        priority: true
                                    }, void 0, false, {
                                        fileName: "[project]/components/Hero.jsx",
                                        lineNumber: 62,
                                        columnNumber: 296
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-6 right-6 bg-white text-black px-4 py-2 rounded font-black text-xs shadow-xl uppercase tracking-wider",
                                        children: "Cape Town"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Hero.jsx",
                                        lineNumber: 62,
                                        columnNumber: 457
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Hero.jsx",
                                lineNumber: 62,
                                columnNumber: 205
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -z-10 -bottom-6 -right-6 w-full h-full bg-orange-100 rounded-2xl"
                            }, void 0, false, {
                                fileName: "[project]/components/Hero.jsx",
                                lineNumber: 62,
                                columnNumber: 610
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Hero.jsx",
                        lineNumber: 62,
                        columnNumber: 173
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/Hero.jsx",
                lineNumber: 62,
                columnNumber: 89
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/Hero.jsx",
            lineNumber: 62,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    return t7;
};
_c = Hero;
const __TURBOPACK__default__export__ = Hero;
function _temp() {
    if ("TURBOPACK compile-time truthy", 1) {
        window.dispatchEvent(new CustomEvent("openQuiz"));
    }
}
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Testimonials.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
const testimonials = [
    {
        text: "The whole night was amazing. I think if we didn't have to go to work the following day, we would have stayed there all night. We couldn't stop chatting.",
        author: "L, 28, Cape Town",
        align: "left"
    },
    {
        text: "We were all such different people, but somehow it meshed really well. It was a very memorable evening — a roaring success in my opinion.",
        author: "G, 43, Cape Town",
        align: "right"
    },
    {
        text: "Thank you for creating something like this, I didn't know how much I needed it.",
        author: "L, 28, Cape Town",
        align: "left"
    },
    {
        text: "Conversing and having great chats... it mostly seemed like we knew each other 😊. So much laughter, and everyone was fully engaged.",
        author: "L, 31, Cape Town",
        align: "right"
    },
    {
        text: "My first DinnerMatch experience was great! I was a bit nervous at first, but it turned out to be such a lovely evening. The group was well-matched - good energy, interesting conversations, and an overall comfortable vibe. We were five instead of six unfortunately, but it still flowed really nicely. The restaurant was lovely too (hope we weren't too loud lol). You can tell thought and effort went into putting the group together. I'm really looking forward to the next one!",
        author: "N, 36, Cape Town",
        align: "left"
    }
];
const Testimonials = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "5d8fda0f6060d7b9cea5f3e0cf964d5d5dba17ccc8849116043d93deb24f272c") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5d8fda0f6060d7b9cea5f3e0cf964d5d5dba17ccc8849116043d93deb24f272c";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-2xl md:text-3xl font-bold text-center mb-20 tracking-tight text-black",
            children: "REAL PEOPLE. UNREAL NIGHTS."
        }, void 0, false, {
            fileName: "[project]/components/Testimonials.jsx",
            lineNumber: 34,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "bg-white py-24 px-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-5xl mx-auto",
                children: [
                    t0,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-10 md:gap-10 relative max-w-4xl mx-auto",
                        children: testimonials.map(_temp)
                    }, void 0, false, {
                        fileName: "[project]/components/Testimonials.jsx",
                        lineNumber: 41,
                        columnNumber: 90
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/Testimonials.jsx",
                lineNumber: 41,
                columnNumber: 51
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/Testimonials.jsx",
            lineNumber: 41,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    return t1;
};
_c = Testimonials;
const __TURBOPACK__default__export__ = Testimonials;
function _temp(item, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `w-full md:w-[520px] bg-white p-10 rounded-xl shadow-[0_15px_50px_rgba(0,0,0,0.05)] border border-gray-100/50 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] ${item.align === "right" ? "md:ml-auto" : "md:mr-auto"} relative`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[1.05rem] leading-[1.6] text-gray-700 mb-6 font-normal",
                children: [
                    '"',
                    item.text,
                    '"'
                ]
            }, void 0, true, {
                fileName: "[project]/components/Testimonials.jsx",
                lineNumber: 50,
                columnNumber: 287
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[0.75rem] text-gray-400 font-semibold uppercase tracking-widest",
                children: [
                    "— ",
                    item.author
                ]
            }, void 0, true, {
                fileName: "[project]/components/Testimonials.jsx",
                lineNumber: 50,
                columnNumber: 379
            }, this)
        ]
    }, index, true, {
        fileName: "[project]/components/Testimonials.jsx",
        lineNumber: 50,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "Testimonials");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/HowItWorks.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
const steps = [
    {
        title: "Create Your Profile",
        description: "Fill out a brief personality assessment and let our system do the matching work for you",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-8 h-8",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.5",
                d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            }, void 0, false, {
                fileName: "[project]/components/HowItWorks.jsx",
                lineNumber: 7,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/HowItWorks.jsx",
            lineNumber: 6,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0)),
        bgColor: "bg-[#FFF5ED]",
        textColor: "text-[#C2410C]",
        iconColor: "text-[#FB923C]"
    },
    {
        title: "Get Matched",
        description: "Our algorithm finds 5 compatible people for an engaging evening with meaningful conversations",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-8 h-8",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.5",
                d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            }, void 0, false, {
                fileName: "[project]/components/HowItWorks.jsx",
                lineNumber: 16,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/HowItWorks.jsx",
            lineNumber: 15,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0)),
        bgColor: "bg-[#F0F9FF]",
        textColor: "text-[#0369A1]",
        iconColor: "text-[#38BDF8]"
    },
    {
        title: "Restaurant Selected",
        description: "We handle all the details including venue selection, reservations, and personalized group insights",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-8 h-8",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "1.5",
                    d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                }, void 0, false, {
                    fileName: "[project]/components/HowItWorks.jsx",
                    lineNumber: 25,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "1.5",
                    d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                }, void 0, false, {
                    fileName: "[project]/components/HowItWorks.jsx",
                    lineNumber: 26,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/HowItWorks.jsx",
            lineNumber: 24,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0)),
        bgColor: "bg-[#FFF1F2]",
        textColor: "text-[#BE123C]",
        iconColor: "text-[#FB7185]"
    },
    {
        title: "Meet & Connect",
        description: "Break the ice with our conversation starters and build genuine connections with like-minded individuals",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-8 h-8",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.5",
                d: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            }, void 0, false, {
                fileName: "[project]/components/HowItWorks.jsx",
                lineNumber: 35,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/HowItWorks.jsx",
            lineNumber: 34,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0)),
        bgColor: "bg-[#F0FDF4]",
        textColor: "text-[#15803D]",
        iconColor: "text-[#4ADE80]"
    },
    {
        title: "Rate Experience",
        description: "Provide feedback on your experience and choose who to keep in touch with for future meetups",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-8 h-8",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.5",
                d: "M14 10h4.704a1 1 0 01.94 1.315l-2.288 6.537A2 2 0 0115.47 19.25h-5.72a2 2 0 01-1.992-1.699l-.866-5.417a1 1 0 01.992-1.134H12a1 1 0 001-1V4.5a1.5 1.5 0 113 0V10z"
            }, void 0, false, {
                fileName: "[project]/components/HowItWorks.jsx",
                lineNumber: 44,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/HowItWorks.jsx",
            lineNumber: 43,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0)),
        bgColor: "bg-[#FEFCE8]",
        textColor: "text-[#A16207]",
        iconColor: "text-[#FACC15]"
    }
];
const HowItWorks = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "4cc60cdde85bd332c3bf77f151151697869f10f55462c9524396fb4a1d6303b3") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4cc60cdde85bd332c3bf77f151151697869f10f55462c9524396fb4a1d6303b3";
    }
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-3xl md:text-4xl font-bold mb-4 text-black tracking-tight",
            children: "How Does It Work?"
        }, void 0, false, {
            fileName: "[project]/components/HowItWorks.jsx",
            lineNumber: 61,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-400 mb-16 text-lg font-medium",
            children: "It's dining, made simple. We handle everything, you just show up!"
        }, void 0, false, {
            fileName: "[project]/components/HowItWorks.jsx",
            lineNumber: 62,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-5 gap-4 mb-16",
            children: steps.map(_temp)
        }, void 0, false, {
            fileName: "[project]/components/HowItWorks.jsx",
            lineNumber: 71,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "how-it-works",
            className: "bg-white py-12 px-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto text-center",
                children: [
                    t0,
                    t1,
                    t2,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "bg-[#FFAA55] text-white px-8 py-3 rounded-md font-bold text-[0.85rem] tracking-wide hover:bg-[#FF9955] transition-all flex items-center gap-2 mx-auto uppercase",
                        children: [
                            "Take the Quiz ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-lg",
                                children: "→"
                            }, void 0, false, {
                                fileName: "[project]/components/HowItWorks.jsx",
                                lineNumber: 78,
                                columnNumber: 322
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/HowItWorks.jsx",
                        lineNumber: 78,
                        columnNumber: 128
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/HowItWorks.jsx",
                lineNumber: 78,
                columnNumber: 69
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/HowItWorks.jsx",
            lineNumber: 78,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    return t3;
};
_c = HowItWorks;
const __TURBOPACK__default__export__ = HowItWorks;
function _temp(step, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${step.bgColor} p-8 rounded-2xl flex flex-col items-center text-center transition-all hover:shadow-lg duration-300`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `mb-6 ${step.iconColor}`,
                children: step.icon
            }, void 0, false, {
                fileName: "[project]/components/HowItWorks.jsx",
                lineNumber: 87,
                columnNumber: 156
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: `font-bold text-lg mb-4 ${step.textColor}`,
                children: step.title
            }, void 0, false, {
                fileName: "[project]/components/HowItWorks.jsx",
                lineNumber: 87,
                columnNumber: 215
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-500 text-[0.85rem] leading-relaxed font-medium",
                children: step.description
            }, void 0, false, {
                fileName: "[project]/components/HowItWorks.jsx",
                lineNumber: 87,
                columnNumber: 291
            }, this)
        ]
    }, index, true, {
        fileName: "[project]/components/HowItWorks.jsx",
        lineNumber: 87,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "HowItWorks");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/AboutUs.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
const AboutUs = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "28e82f16ffbbc74baff46df3f593999753e3e626cdd926506d6d9b1d79259da6") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "28e82f16ffbbc74baff46df3f593999753e3e626cdd926506d6d9b1d79259da6";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-3xl md:text-4xl font-bold mb-7 text-black",
            children: "About Us"
        }, void 0, false, {
            fileName: "[project]/components/AboutUs.jsx",
            lineNumber: 13,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "about-us",
            className: "bg-white py-12 px-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto text-center",
                children: [
                    t0,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-5 text-gray-600 text-[1rem] md:text-[1rem] leading-relaxed font-medium",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "We started DinnerMatch because we believe great conversations should be as regular as great meals. In a world where real connection often takes a backseat to swipes and screens, we wanted to create something simple: a weekly dinner where you meet new people who actually get you."
                            }, void 0, false, {
                                fileName: "[project]/components/AboutUs.jsx",
                                lineNumber: 20,
                                columnNumber: 212
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "We're building a space where personality, vibe, and shared experiences come together around the table — no pressure, no expectations, just genuine connection (and good food). Cape Town is just the beginning."
                            }, void 0, false, {
                                fileName: "[project]/components/AboutUs.jsx",
                                lineNumber: 20,
                                columnNumber: 498
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/AboutUs.jsx",
                        lineNumber: 20,
                        columnNumber: 116
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/AboutUs.jsx",
                lineNumber: 20,
                columnNumber: 65
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/AboutUs.jsx",
            lineNumber: 20,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    return t1;
};
_c = AboutUs;
const __TURBOPACK__default__export__ = AboutUs;
var _c;
__turbopack_context__.k.register(_c, "AboutUs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/FAQ.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const faqData = [
    {
        question: "Is this a dating app?",
        answer: "No, DinnerMatch is not a dating app. It's a social platform designed to help people make new friends and have meaningful conversations over dinner. While people do sometimes form romantic connections, our primary focus is on platonic social matching."
    },
    {
        question: "Do I have to talk to strangers before the dinner?",
        answer: "Nope! One of the best parts of DinnerMatch is the surprise. You'll receive the restaurant details and a little bit about your group's 'vibe', but you won't chat with them until you're all sitting around the table together."
    },
    {
        question: "How much does it cost?",
        answer: "We offer different subscription tiers to suit your social life. Each tier covers the matching service and coordination. You simply pay for your own meal and drinks at the restaurant."
    },
    {
        question: "Why is DinnerMatch a subscription now?",
        answer: "Moving to a subscription model allows us to invest more in our matching algorithm and expand to more restaurants and cities, ensuring you get the best possible experience every single time."
    },
    {
        question: "What if I'm shy or introverted?",
        answer: "You're in good company! Many of our members are introverts. We match groups based on personality types to ensure a comfortable environment, and our conversation starters help break the ice naturally."
    },
    {
        question: "How do I cancel my subscription?",
        answer: "You can cancel your subscription at any time through your account settings. There are no long-term contracts or cancellation fees."
    }
];
const FAQ = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "1662a43de523068cb60bb3be43af36b7666bd355064bb0e516e9f357fbeb8e7d") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1662a43de523068cb60bb3be43af36b7666bd355064bb0e516e9f357fbeb8e7d";
    }
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t0;
    if ($[1] !== activeIndex) {
        t0 = (index)=>{
            setActiveIndex(activeIndex === index ? null : index);
        };
        $[1] = activeIndex;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const toggleFAQ = t0;
    let t1;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mb-16",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl md:text-[2.5rem] font-bold text-black mb-4 tracking-tight",
                    children: "Frequently Asked Questions"
                }, void 0, false, {
                    fileName: "[project]/components/FAQ.jsx",
                    lineNumber: 46,
                    columnNumber: 45
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-500 text-lg font-medium",
                    children: "Get answers to the most common questions about DinnerMatch"
                }, void 0, false, {
                    fileName: "[project]/components/FAQ.jsx",
                    lineNumber: 46,
                    columnNumber: 159
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/FAQ.jsx",
            lineNumber: 46,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    let t2;
    if ($[4] !== activeIndex || $[5] !== toggleFAQ) {
        t2 = faqData.map((item, index_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-md shadow-[0_1px_3px_rgba(0,0,0,0.05)] border border-gray-100/50 overflow-hidden transition-all duration-300",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>toggleFAQ(index_0),
                        className: "w-full px-8 py-4 text-left flex justify-between items-center hover:bg-gray-50/50 transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-[#111827] text-[1.05rem] tracking-tight",
                                children: item.question
                            }, void 0, false, {
                                fileName: "[project]/components/FAQ.jsx",
                                lineNumber: 53,
                                columnNumber: 352
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: `w-4 h-4 text-gray-400 transition-transform duration-300 ${activeIndex === index_0 ? "rotate-180" : ""}`,
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "2.5",
                                    d: "M19 9l-7 7-7-7"
                                }, void 0, false, {
                                    fileName: "[project]/components/FAQ.jsx",
                                    lineNumber: 53,
                                    columnNumber: 627
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/FAQ.jsx",
                                lineNumber: 53,
                                columnNumber: 451
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/FAQ.jsx",
                        lineNumber: 53,
                        columnNumber: 198
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `transition-all duration-300 ease-in-out ${activeIndex === index_0 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-8 pb-8 text-gray-600 leading-relaxed text-[1rem]",
                            children: item.answer
                        }, void 0, false, {
                            fileName: "[project]/components/FAQ.jsx",
                            lineNumber: 53,
                            columnNumber: 865
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/FAQ.jsx",
                        lineNumber: 53,
                        columnNumber: 732
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, index_0, true, {
                fileName: "[project]/components/FAQ.jsx",
                lineNumber: 53,
                columnNumber: 41
            }, ("TURBOPACK compile-time value", void 0)));
        $[4] = activeIndex;
        $[5] = toggleFAQ;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "faq",
            className: "bg-[#F9FAFB] py-24 px-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-3xl mx-auto",
                children: [
                    t1,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: t2
                    }, void 0, false, {
                        fileName: "[project]/components/FAQ.jsx",
                        lineNumber: 62,
                        columnNumber: 103
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/FAQ.jsx",
                lineNumber: 62,
                columnNumber: 64
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/FAQ.jsx",
            lineNumber: 62,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t2;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    return t3;
};
_s(FAQ, "E8kOn+IkK/htiBGEqJWkEvOqULU=");
_c = FAQ;
const __TURBOPACK__default__export__ = FAQ;
var _c;
__turbopack_context__.k.register(_c, "FAQ");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Footer.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
;
;
;
const Footer = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(20);
    if ($[0] !== "73fc5beeb95571267a92c51809406e1f20272e2ddd43fe28b28a69a7d4083470") {
        for(let $i = 0; $i < 20; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "73fc5beeb95571267a92c51809406e1f20272e2ddd43fe28b28a69a7d4083470";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "inline-block bg-[#FFF7ED] text-[#F97315] text-[0.7rem] font-bold px-4 py-1.5 rounded-full mb-8 uppercase tracking-widest",
            children: "Limited Spots Available"
        }, void 0, false, {
            fileName: "[project]/components/Footer.jsx",
            lineNumber: 14,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    let t2;
    let t3;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-3xl md:text-[2.5rem] font-bold text-[#111827] mb-6 tracking-tight",
            children: [
                "Start Your Journey ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[#F97315]",
                    children: "Today"
                }, void 0, false, {
                    fileName: "[project]/components/Footer.jsx",
                    lineNumber: 23,
                    columnNumber: 116
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/Footer.jsx",
            lineNumber: 23,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-500 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-8 font-medium",
            children: "Imagine showing up to dinner every week with 5 interesting strangers who just get you. No awkward small talk — just good vibes, shared laughs, and food that fits your budget."
        }, void 0, false, {
            fileName: "[project]/components/Footer.jsx",
            lineNumber: 24,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-bold text-[#111827] mb-10 text-lg",
            children: "Spaces are limited — take the quiz to secure your spot."
        }, void 0, false, {
            fileName: "[project]/components/Footer.jsx",
            lineNumber: 25,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = t1;
        $[3] = t2;
        $[4] = t3;
    } else {
        t1 = $[2];
        t2 = $[3];
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "w-1.5 h-1.5 rounded-full bg-[#F97315]"
                }, void 0, false, {
                    fileName: "[project]/components/Footer.jsx",
                    lineNumber: 36,
                    columnNumber: 51
                }, ("TURBOPACK compile-time value", void 0)),
                "Personality Matching"
            ]
        }, void 0, true, {
            fileName: "[project]/components/Footer.jsx",
            lineNumber: 36,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "w-1.5 h-1.5 rounded-full bg-[#F97315]"
                }, void 0, false, {
                    fileName: "[project]/components/Footer.jsx",
                    lineNumber: 43,
                    columnNumber: 51
                }, ("TURBOPACK compile-time value", void 0)),
                "Budget Considerate"
            ]
        }, void 0, true, {
            fileName: "[project]/components/Footer.jsx",
            lineNumber: 43,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap justify-center gap-6 md:gap-10 mb-12 text-sm font-semibold text-gray-500",
            children: [
                t4,
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "w-1.5 h-1.5 rounded-full bg-[#F97315]"
                        }, void 0, false, {
                            fileName: "[project]/components/Footer.jsx",
                            lineNumber: 50,
                            columnNumber: 164
                        }, ("TURBOPACK compile-time value", void 0)),
                        "Cape Town Restaurants"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Footer.jsx",
                    lineNumber: 50,
                    columnNumber: 123
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/Footer.jsx",
            lineNumber: 50,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "bg-[#F97315] text-white px-10 py-4 rounded-full font-bold text-sm tracking-wide transition-all flex items-center gap-2 mx-auto mb-6 uppercase",
            children: [
                "Take the Quiz ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-lg",
                    children: "→"
                }, void 0, false, {
                    fileName: "[project]/components/Footer.jsx",
                    lineNumber: 57,
                    columnNumber: 186
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/Footer.jsx",
            lineNumber: 57,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "/terms-conditions",
            className: "underline",
            children: "Terms"
        }, void 0, false, {
            fileName: "[project]/components/Footer.jsx",
            lineNumber: 64,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "bg-[#FFFBF7] py-20 px-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto bg-white rounded-3xl p-12 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.04)] text-center border border-[#F3F4F6]",
                children: [
                    t0,
                    t1,
                    t2,
                    t3,
                    t6,
                    t7,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[0.7rem] text-gray-400 font-medium",
                        children: [
                            "By joining, you agree to our ",
                            t8,
                            " and ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/privacy-policy",
                                className: "underline",
                                children: "Privacy Policy"
                            }, void 0, false, {
                                fileName: "[project]/components/Footer.jsx",
                                lineNumber: 71,
                                columnNumber: 315
                            }, ("TURBOPACK compile-time value", void 0)),
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Footer.jsx",
                        lineNumber: 71,
                        columnNumber: 222
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/Footer.jsx",
                lineNumber: 71,
                columnNumber: 55
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/Footer.jsx",
            lineNumber: 71,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    let t10;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-2xl font-bold text-[#111827] tracking-tight",
                    children: "DinnerMatch"
                }, void 0, false, {
                    fileName: "[project]/components/Footer.jsx",
                    lineNumber: 78,
                    columnNumber: 48
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-500 text-sm leading-relaxed max-w-xs font-medium",
                    children: "Weekly dinner experiences with like-minded people in Cape Town. Carefully matched based on personality, budget, and interests."
                }, void 0, false, {
                    fileName: "[project]/components/Footer.jsx",
                    lineNumber: 78,
                    columnNumber: 131
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/Footer.jsx",
            lineNumber: 78,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    let t11;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "font-bold text-[#111827] text-sm uppercase tracking-wider",
            children: "Get in Touch"
        }, void 0, false, {
            fileName: "[project]/components/Footer.jsx",
            lineNumber: 85,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = t11;
    } else {
        t11 = $[12];
    }
    let t12;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "mailto:hello@dinnermatch.co.za",
            className: "flex items-center gap-3 hover:text-[#F97315] transition-colors group",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "w-4 h-4 text-gray-400 group-hover:text-[#F97315] transition-colors",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    }, void 0, false, {
                        fileName: "[project]/components/Footer.jsx",
                        lineNumber: 92,
                        columnNumber: 271
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/Footer.jsx",
                    lineNumber: 92,
                    columnNumber: 133
                }, ("TURBOPACK compile-time value", void 0)),
                "hello@dinnermatch.co.za"
            ]
        }, void 0, true, {
            fileName: "[project]/components/Footer.jsx",
            lineNumber: 92,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = t12;
    } else {
        t12 = $[13];
    }
    let t13;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "#",
            className: "flex items-center gap-3 hover:text-[#F97315] transition-colors group",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "w-4 h-4 text-gray-400 group-hover:text-[#F97315] transition-colors",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            d: "M3 9a2 2 0 012-2h.93a2 2 0 011.664.89l.812 1.22A2 2 0 0010.07 10H14a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                        }, void 0, false, {
                            fileName: "[project]/components/Footer.jsx",
                            lineNumber: 99,
                            columnNumber: 242
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            d: "M15 13V9a2 2 0 00-2-2H5"
                        }, void 0, false, {
                            fileName: "[project]/components/Footer.jsx",
                            lineNumber: 99,
                            columnNumber: 428
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Footer.jsx",
                    lineNumber: 99,
                    columnNumber: 104
                }, ("TURBOPACK compile-time value", void 0)),
                "@dinnermatch"
            ]
        }, void 0, true, {
            fileName: "[project]/components/Footer.jsx",
            lineNumber: 99,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = t13;
    } else {
        t13 = $[14];
    }
    let t14;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "#",
            className: "flex items-center gap-3 hover:text-[#F97315] transition-colors group",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "w-4 h-4 text-gray-400 group-hover:text-[#F97315] transition-colors",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z"
                    }, void 0, false, {
                        fileName: "[project]/components/Footer.jsx",
                        lineNumber: 106,
                        columnNumber: 242
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/Footer.jsx",
                    lineNumber: 106,
                    columnNumber: 104
                }, ("TURBOPACK compile-time value", void 0)),
                "@dinnermatch"
            ]
        }, void 0, true, {
            fileName: "[project]/components/Footer.jsx",
            lineNumber: 106,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = t14;
    } else {
        t14 = $[15];
    }
    let t15;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-12 mb-20",
            children: [
                t10,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-6",
                    children: [
                        t11,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-5 text-sm font-medium text-gray-500",
                            children: [
                                t12,
                                t13,
                                t14,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-4 h-4 text-gray-400",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "2",
                                                    d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Footer.jsx",
                                                    lineNumber: 113,
                                                    columnNumber: 340
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "2",
                                                    d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Footer.jsx",
                                                    lineNumber: 113,
                                                    columnNumber: 496
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Footer.jsx",
                                            lineNumber: 113,
                                            columnNumber: 247
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "Cape Town, South Africa"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Footer.jsx",
                                    lineNumber: 113,
                                    columnNumber: 206
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Footer.jsx",
                            lineNumber: 113,
                            columnNumber: 120
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Footer.jsx",
                    lineNumber: 113,
                    columnNumber: 78
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/Footer.jsx",
            lineNumber: 113,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = t15;
    } else {
        t15 = $[16];
    }
    let t16;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-6 text-[0.7rem] font-medium text-gray-400",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "© 2025 DinnerMatch. All rights reserved."
                }, void 0, false, {
                    fileName: "[project]/components/Footer.jsx",
                    lineNumber: 120,
                    columnNumber: 92
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "#",
                    className: "hover:text-gray-600 transition-colors",
                    children: "Cancel Subscription"
                }, void 0, false, {
                    fileName: "[project]/components/Footer.jsx",
                    lineNumber: 120,
                    columnNumber: 145
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/Footer.jsx",
            lineNumber: 120,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = t16;
    } else {
        t16 = $[17];
    }
    let t17;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "#",
            className: "hover:text-gray-600 transition-colors",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-5 h-5 fill-currentColor",
                viewBox: "0 0 24 24",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.607.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.245-3.607 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.607-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.607-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.28.058-2.152.26-2.917.557-.79.307-1.46.717-2.128 1.385-.668.667-1.078 1.338-1.385 2.128-.297.765-.499 1.637-.557 2.917-.059 1.28-.073 1.688-.073 4.947s.014 3.667.072 4.947c.058 1.28.26 2.152.557 2.917.307.79.717 1.46 1.385 2.128.667.668 1.338 1.078 2.128 1.385.765.297 1.637.499 2.917.557 1.28.059 1.688.073 4.947.073s3.667-.014 4.947-.072c1.28-.058 2.152-.26 2.917-.557.79-.307 1.46-.717 2.128-1.385.668-.667 1.078-1.338 1.385-2.128.297-.765.499-1.637.557-2.917.059-1.28.073-1.688.073-4.947s-.014-3.667-.072-4.947c-.058-1.28-.26-2.152-.557-2.917-.307-.79-.717-1.46-1.385-2.128-.667-.668-1.338-1.078-2.128-1.385-.765-.297-1.637-.499-2.917-.557-1.28-.059-1.688-.073-4.947-.073z"
                    }, void 0, false, {
                        fileName: "[project]/components/Footer.jsx",
                        lineNumber: 127,
                        columnNumber: 136
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                    }, void 0, false, {
                        fileName: "[project]/components/Footer.jsx",
                        lineNumber: 127,
                        columnNumber: 1343
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/Footer.jsx",
                lineNumber: 127,
                columnNumber: 73
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/Footer.jsx",
            lineNumber: 127,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[18] = t17;
    } else {
        t17 = $[18];
    }
    let t18;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col",
            children: [
                t9,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                    className: "bg-white pt-20 pb-10 px-6 border-t border-gray-100",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-7xl mx-auto",
                        children: [
                            t15,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6",
                                children: [
                                    t16,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4 text-gray-400",
                                        children: [
                                            t17,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "hover:text-gray-600 transition-colors",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-5 h-5 fill-currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Footer.jsx",
                                                        lineNumber: 134,
                                                        columnNumber: 455
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Footer.jsx",
                                                    lineNumber: 134,
                                                    columnNumber: 392
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/components/Footer.jsx",
                                                lineNumber: 134,
                                                columnNumber: 330
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Footer.jsx",
                                        lineNumber: 134,
                                        columnNumber: 270
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Footer.jsx",
                                lineNumber: 134,
                                columnNumber: 157
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Footer.jsx",
                        lineNumber: 134,
                        columnNumber: 117
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/Footer.jsx",
                    lineNumber: 134,
                    columnNumber: 46
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/Footer.jsx",
            lineNumber: 134,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[19] = t18;
    } else {
        t18 = $[19];
    }
    return t18;
};
_c = Footer;
const __TURBOPACK__default__export__ = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/modals/PreferencesForm.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const PreferencesForm = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(61);
    if ($[0] !== "4b7cab4428c2a346389c00a72a34740aa049e333507987449a5f124ff663927d") {
        for(let $i = 0; $i < 61; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4b7cab4428c2a346389c00a72a34740aa049e333507987449a5f124ff663927d";
    }
    const { onContinue } = t0;
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("English");
    const [budget, setBudget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("$");
    const [hasDietaryRestrictions, setHasDietaryRestrictions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [
            "Vegetarian"
        ];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [menuOptions, setMenuOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = [
            "English",
            "Afrikaans",
            "Xhosa"
        ];
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const languages = t2;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = [
            "$",
            "$$",
            "$$$"
        ];
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    const budgets = t3;
    let t10;
    let t11;
    let t12;
    let t13;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    let t9;
    if ($[4] !== budget || $[5] !== hasDietaryRestrictions || $[6] !== language || $[7] !== menuOptions) {
        const menuChoices = [
            "Vegetarian",
            "Meat",
            "Fish",
            "Vegan",
            "Halaal"
        ];
        const toggleMenuOption = (option)=>{
            setMenuOptions((prev)=>prev.includes(option) ? prev.filter((item)=>item !== option) : [
                    ...prev,
                    option
                ]);
        };
        t12 = "bg-[#1a1f2e] rounded-2xl p-8 w-full max-w-2xl mx-auto";
        let t14;
        if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
            t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-gray-400 uppercase tracking-wide mb-2",
                children: "Preferences"
            }, void 0, false, {
                fileName: "[project]/components/modals/PreferencesForm.jsx",
                lineNumber: 61,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[18] = t14;
        } else {
            t14 = $[18];
        }
        if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
            t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8",
                children: [
                    t14,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl font-bold text-white",
                        children: [
                            "Set Your Dining ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#F97315]",
                                children: "Preferences"
                            }, void 0, false, {
                                fileName: "[project]/components/modals/PreferencesForm.jsx",
                                lineNumber: 67,
                                columnNumber: 102
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/modals/PreferencesForm.jsx",
                        lineNumber: 67,
                        columnNumber: 40
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/modals/PreferencesForm.jsx",
                lineNumber: 67,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[19] = t13;
        } else {
            t13 = $[19];
        }
        t8 = "space-y-8";
        let t15;
        if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
            t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block text-white mb-4 text-lg",
                children: "What language do you prefer to speak at dinner?"
            }, void 0, false, {
                fileName: "[project]/components/modals/PreferencesForm.jsx",
                lineNumber: 75,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[20] = t15;
        } else {
            t15 = $[20];
        }
        if ($[21] !== language) {
            t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    t15,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                        children: languages.map((lang)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setLanguage(lang),
                                className: `px-6 py-4 rounded-lg border-2 transition-all ${language === lang ? "bg-[#F97315] border-[#F97315] text-white" : "bg-[#0f1419] border-gray-700 text-gray-300 hover:border-gray-600"}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium",
                                            children: lang
                                        }, void 0, false, {
                                            fileName: "[project]/components/modals/PreferencesForm.jsx",
                                            lineNumber: 81,
                                            columnNumber: 398
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        language === lang && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-5 h-5",
                                            fill: "currentColor",
                                            viewBox: "0 0 20 20",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                fillRule: "evenodd",
                                                d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                                clipRule: "evenodd"
                                            }, void 0, false, {
                                                fileName: "[project]/components/modals/PreferencesForm.jsx",
                                                lineNumber: 81,
                                                columnNumber: 528
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/modals/PreferencesForm.jsx",
                                            lineNumber: 81,
                                            columnNumber: 463
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/modals/PreferencesForm.jsx",
                                    lineNumber: 81,
                                    columnNumber: 347
                                }, ("TURBOPACK compile-time value", void 0))
                            }, lang, false, {
                                fileName: "[project]/components/modals/PreferencesForm.jsx",
                                lineNumber: 81,
                                columnNumber: 100
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/components/modals/PreferencesForm.jsx",
                        lineNumber: 81,
                        columnNumber: 22
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/modals/PreferencesForm.jsx",
                lineNumber: 81,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[21] = language;
            $[22] = t9;
        } else {
            t9 = $[22];
        }
        let t16;
        if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
            t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block text-white mb-4 text-lg",
                children: [
                    "What are you willing to spend at dinner?",
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[#F97315]",
                        children: "(Required)"
                    }, void 0, false, {
                        fileName: "[project]/components/modals/PreferencesForm.jsx",
                        lineNumber: 89,
                        columnNumber: 107
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/modals/PreferencesForm.jsx",
                lineNumber: 89,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[23] = t16;
        } else {
            t16 = $[23];
        }
        if ($[24] !== budget) {
            t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    t16,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                        children: budgets.map((budgetLevel)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setBudget(budgetLevel),
                                className: `px-6 py-4 rounded-lg border-2 transition-all ${budget === budgetLevel ? "bg-[#F97315] border-[#F97315] text-white" : "bg-[#0f1419] border-gray-700 text-gray-300 hover:border-gray-600"}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium text-xl",
                                            children: budgetLevel
                                        }, void 0, false, {
                                            fileName: "[project]/components/modals/PreferencesForm.jsx",
                                            lineNumber: 95,
                                            columnNumber: 421
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        budget === budgetLevel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-5 h-5",
                                            fill: "currentColor",
                                            viewBox: "0 0 20 20",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                fillRule: "evenodd",
                                                d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                                clipRule: "evenodd"
                                            }, void 0, false, {
                                                fileName: "[project]/components/modals/PreferencesForm.jsx",
                                                lineNumber: 95,
                                                columnNumber: 571
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/modals/PreferencesForm.jsx",
                                            lineNumber: 95,
                                            columnNumber: 506
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/modals/PreferencesForm.jsx",
                                    lineNumber: 95,
                                    columnNumber: 370
                                }, ("TURBOPACK compile-time value", void 0))
                            }, budgetLevel, false, {
                                fileName: "[project]/components/modals/PreferencesForm.jsx",
                                lineNumber: 95,
                                columnNumber: 106
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/components/modals/PreferencesForm.jsx",
                        lineNumber: 95,
                        columnNumber: 23
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/modals/PreferencesForm.jsx",
                lineNumber: 95,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[24] = budget;
            $[25] = t10;
        } else {
            t10 = $[25];
        }
        let t17;
        if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
            t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block text-white text-lg",
                children: [
                    "I have dietary restrictions. ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-gray-400",
                        children: "(Optional)"
                    }, void 0, false, {
                        fileName: "[project]/components/modals/PreferencesForm.jsx",
                        lineNumber: 103,
                        columnNumber: 86
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/modals/PreferencesForm.jsx",
                lineNumber: 103,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[26] = t17;
        } else {
            t17 = $[26];
        }
        let t18;
        if ($[27] !== hasDietaryRestrictions) {
            t18 = ()=>setHasDietaryRestrictions(!hasDietaryRestrictions);
            $[27] = hasDietaryRestrictions;
            $[28] = t18;
        } else {
            t18 = $[28];
        }
        const t19 = `relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${hasDietaryRestrictions ? "bg-[#F97315]" : "bg-gray-700"}`;
        const t20 = `inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${hasDietaryRestrictions ? "translate-x-6" : "translate-x-1"}`;
        let t21;
        if ($[29] !== t20) {
            t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: t20
            }, void 0, false, {
                fileName: "[project]/components/modals/PreferencesForm.jsx",
                lineNumber: 120,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[29] = t20;
            $[30] = t21;
        } else {
            t21 = $[30];
        }
        if ($[31] !== t18 || $[32] !== t19 || $[33] !== t21) {
            t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        t17,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: t18,
                            className: t19,
                            children: t21
                        }, void 0, false, {
                            fileName: "[project]/components/modals/PreferencesForm.jsx",
                            lineNumber: 127,
                            columnNumber: 74
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/modals/PreferencesForm.jsx",
                    lineNumber: 127,
                    columnNumber: 18
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/modals/PreferencesForm.jsx",
                lineNumber: 127,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[31] = t18;
            $[32] = t19;
            $[33] = t21;
            $[34] = t11;
        } else {
            t11 = $[34];
        }
        if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
            t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block text-white mb-2 text-lg",
                children: [
                    "What menu options do you want to see at your dinner?",
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[#F97315]",
                        children: "(Required)"
                    }, void 0, false, {
                        fileName: "[project]/components/modals/PreferencesForm.jsx",
                        lineNumber: 136,
                        columnNumber: 118
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/modals/PreferencesForm.jsx",
                lineNumber: 136,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-400 text-sm mb-4",
                children: "We take your preferences and restrictions into account in order to ensure you'll have several options available."
            }, void 0, false, {
                fileName: "[project]/components/modals/PreferencesForm.jsx",
                lineNumber: 137,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[35] = t6;
            $[36] = t7;
        } else {
            t6 = $[35];
            t7 = $[36];
        }
        t4 = "grid grid-cols-2 md:grid-cols-3 gap-4";
        t5 = menuChoices.map((option_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>toggleMenuOption(option_0),
                className: `px-6 py-4 rounded-lg border-2 transition-all ${menuOptions.includes(option_0) ? "bg-[#F97315] border-[#F97315] text-white" : "bg-[#0f1419] border-gray-700 text-gray-300 hover:border-gray-600"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-medium",
                            children: option_0
                        }, void 0, false, {
                            fileName: "[project]/components/modals/PreferencesForm.jsx",
                            lineNumber: 145,
                            columnNumber: 362
                        }, ("TURBOPACK compile-time value", void 0)),
                        menuOptions.includes(option_0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-5 h-5",
                            fill: "currentColor",
                            viewBox: "0 0 20 20",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                fillRule: "evenodd",
                                d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                clipRule: "evenodd"
                            }, void 0, false, {
                                fileName: "[project]/components/modals/PreferencesForm.jsx",
                                lineNumber: 145,
                                columnNumber: 509
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/modals/PreferencesForm.jsx",
                            lineNumber: 145,
                            columnNumber: 444
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/modals/PreferencesForm.jsx",
                    lineNumber: 145,
                    columnNumber: 311
                }, ("TURBOPACK compile-time value", void 0))
            }, option_0, false, {
                fileName: "[project]/components/modals/PreferencesForm.jsx",
                lineNumber: 145,
                columnNumber: 38
            }, ("TURBOPACK compile-time value", void 0)));
        $[4] = budget;
        $[5] = hasDietaryRestrictions;
        $[6] = language;
        $[7] = menuOptions;
        $[8] = t10;
        $[9] = t11;
        $[10] = t12;
        $[11] = t13;
        $[12] = t4;
        $[13] = t5;
        $[14] = t6;
        $[15] = t7;
        $[16] = t8;
        $[17] = t9;
    } else {
        t10 = $[8];
        t11 = $[9];
        t12 = $[10];
        t13 = $[11];
        t4 = $[12];
        t5 = $[13];
        t6 = $[14];
        t7 = $[15];
        t8 = $[16];
        t9 = $[17];
    }
    let t14;
    if ($[37] !== t4 || $[38] !== t5) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t4,
            children: t5
        }, void 0, false, {
            fileName: "[project]/components/modals/PreferencesForm.jsx",
            lineNumber: 174,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[37] = t4;
        $[38] = t5;
        $[39] = t14;
    } else {
        t14 = $[39];
    }
    let t15;
    if ($[40] !== t14 || $[41] !== t6 || $[42] !== t7) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t6,
                t7,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/components/modals/PreferencesForm.jsx",
            lineNumber: 183,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[40] = t14;
        $[41] = t6;
        $[42] = t7;
        $[43] = t15;
    } else {
        t15 = $[43];
    }
    let t16;
    if ($[44] !== budget || $[45] !== hasDietaryRestrictions || $[46] !== language || $[47] !== menuOptions || $[48] !== onContinue) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: ()=>onContinue({
                    language,
                    budget,
                    hasDietaryRestrictions,
                    menuOptions
                }),
            className: "w-full bg-[#F97315] text-white py-4 rounded-lg font-bold text-sm uppercase tracking-wide hover:bg-[#EA580C] transition-colors",
            children: "Continue"
        }, void 0, false, {
            fileName: "[project]/components/modals/PreferencesForm.jsx",
            lineNumber: 193,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[44] = budget;
        $[45] = hasDietaryRestrictions;
        $[46] = language;
        $[47] = menuOptions;
        $[48] = onContinue;
        $[49] = t16;
    } else {
        t16 = $[49];
    }
    let t17;
    if ($[50] !== t10 || $[51] !== t11 || $[52] !== t15 || $[53] !== t16 || $[54] !== t8 || $[55] !== t9) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t8,
            children: [
                t9,
                t10,
                t11,
                t15,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/components/modals/PreferencesForm.jsx",
            lineNumber: 210,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[50] = t10;
        $[51] = t11;
        $[52] = t15;
        $[53] = t16;
        $[54] = t8;
        $[55] = t9;
        $[56] = t17;
    } else {
        t17 = $[56];
    }
    let t18;
    if ($[57] !== t12 || $[58] !== t13 || $[59] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t12,
            children: [
                t13,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/components/modals/PreferencesForm.jsx",
            lineNumber: 223,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[57] = t12;
        $[58] = t13;
        $[59] = t17;
        $[60] = t18;
    } else {
        t18 = $[60];
    }
    return t18;
};
_s(PreferencesForm, "r1mFT2TuJShWUOMc+n62da1C1dI=");
_c = PreferencesForm;
const __TURBOPACK__default__export__ = PreferencesForm;
var _c;
__turbopack_context__.k.register(_c, "PreferencesForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/modals/DinnerConfirmation.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
;
;
const DinnerConfirmation = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(30);
    if ($[0] !== "486d434819e58db0b00aef0845fd919bbe0d4be773723f9ebdc043e5f98f6024") {
        for(let $i = 0; $i < 30; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "486d434819e58db0b00aef0845fd919bbe0d4be773723f9ebdc043e5f98f6024";
    }
    const { preferences, onEdit, onConfirm } = t0;
    let t1;
    if ($[1] !== preferences) {
        t1 = preferences || {};
        $[1] = preferences;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const { language, budget, hasDietaryRestrictions, menuOptions } = t1;
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-3xl font-bold text-[#F97315] text-center",
                children: "YOUR DINNER"
            }, void 0, false, {
                fileName: "[project]/components/modals/DinnerConfirmation.jsx",
                lineNumber: 34,
                columnNumber: 32
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/modals/DinnerConfirmation.jsx",
            lineNumber: 34,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-400 text-sm mb-1",
            children: "Budget"
        }, void 0, false, {
            fileName: "[project]/components/modals/DinnerConfirmation.jsx",
            lineNumber: 41,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const t4 = budget || "$$";
    let t5;
    if ($[5] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border-b border-gray-600 pb-4",
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-white text-lg font-medium",
                    children: t4
                }, void 0, false, {
                    fileName: "[project]/components/modals/DinnerConfirmation.jsx",
                    lineNumber: 49,
                    columnNumber: 61
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/modals/DinnerConfirmation.jsx",
            lineNumber: 49,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = t4;
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-400 text-sm mb-1",
            children: "Dietary Restrictions"
        }, void 0, false, {
            fileName: "[project]/components/modals/DinnerConfirmation.jsx",
            lineNumber: 57,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] !== hasDietaryRestrictions || $[9] !== menuOptions) {
        t7 = hasDietaryRestrictions ? menuOptions?.join(", ") || "Vegetarian" : "I have no restrictions";
        $[8] = hasDietaryRestrictions;
        $[9] = menuOptions;
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    if ($[11] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border-b border-gray-600 pb-4",
            children: [
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-white text-lg font-medium",
                    children: t7
                }, void 0, false, {
                    fileName: "[project]/components/modals/DinnerConfirmation.jsx",
                    lineNumber: 73,
                    columnNumber: 61
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/modals/DinnerConfirmation.jsx",
            lineNumber: 73,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = t7;
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    let t9;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-400 text-sm mb-1",
            children: "Language"
        }, void 0, false, {
            fileName: "[project]/components/modals/DinnerConfirmation.jsx",
            lineNumber: 81,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    const t10 = language || "English";
    let t11;
    if ($[14] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t9,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-white text-lg font-medium",
                    children: t10
                }, void 0, false, {
                    fileName: "[project]/components/modals/DinnerConfirmation.jsx",
                    lineNumber: 89,
                    columnNumber: 20
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/modals/DinnerConfirmation.jsx",
            lineNumber: 89,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = t10;
        $[15] = t11;
    } else {
        t11 = $[15];
    }
    let t12;
    if ($[16] !== t11 || $[17] !== t5 || $[18] !== t8) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-[#2a3441] rounded-lg p-6 space-y-4 mb-6",
            children: [
                t5,
                t8,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/components/modals/DinnerConfirmation.jsx",
            lineNumber: 97,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = t11;
        $[17] = t5;
        $[18] = t8;
        $[19] = t12;
    } else {
        t12 = $[19];
    }
    let t13;
    if ($[20] !== onEdit) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onEdit,
            className: "w-full bg-[#2a3441] text-white py-3 rounded-lg font-bold text-sm uppercase tracking-wide hover:bg-[#3a4451] transition-colors",
            children: "Edit My Preferences"
        }, void 0, false, {
            fileName: "[project]/components/modals/DinnerConfirmation.jsx",
            lineNumber: 107,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[20] = onEdit;
        $[21] = t13;
    } else {
        t13 = $[21];
    }
    let t14;
    if ($[22] !== onConfirm) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onConfirm,
            className: "w-full bg-[#F97315] text-white py-3 rounded-lg font-bold text-sm uppercase tracking-wide hover:bg-[#EA580C] transition-colors",
            children: "Confirm"
        }, void 0, false, {
            fileName: "[project]/components/modals/DinnerConfirmation.jsx",
            lineNumber: 115,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[22] = onConfirm;
        $[23] = t14;
    } else {
        t14 = $[23];
    }
    let t15;
    if ($[24] !== t13 || $[25] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3",
            children: [
                t13,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/components/modals/DinnerConfirmation.jsx",
            lineNumber: 123,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[24] = t13;
        $[25] = t14;
        $[26] = t15;
    } else {
        t15 = $[26];
    }
    let t16;
    if ($[27] !== t12 || $[28] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-[#1a1f2e] rounded-2xl p-8 w-full max-w-md mx-auto",
            children: [
                t2,
                t12,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/components/modals/DinnerConfirmation.jsx",
            lineNumber: 132,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[27] = t12;
        $[28] = t15;
        $[29] = t16;
    } else {
        t16 = $[29];
    }
    return t16;
};
_c = DinnerConfirmation;
const __TURBOPACK__default__export__ = DinnerConfirmation;
var _c;
__turbopack_context__.k.register(_c, "DinnerConfirmation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/modals/PricingModal.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
;
;
const PricingModal = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(27);
    if ($[0] !== "c1c52395248e7203bf2f8024e1cb02405156eb06d105613e9ecfbadbed905cad") {
        for(let $i = 0; $i < 27; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c1c52395248e7203bf2f8024e1cb02405156eb06d105613e9ecfbadbed905cad";
    }
    const { isOpen, onClose, onSelectPlan } = t0;
    if (!isOpen) {
        return null;
    }
    let t1;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    if ($[1] !== onClose || $[2] !== onSelectPlan) {
        const plans = [
            {
                id: "annual",
                title: "Annual Pass",
                badge: "BEST VALUE",
                badgeColor: "bg-[#FFAA55]",
                originalPrice: "R3000",
                price: "R2000",
                priceColor: "text-[#FFAA55]",
                savings: "Save R1000",
                billing: "Billed Annually",
                features: [
                    "Unlimited DinnersMatch Dinner for 12 months.",
                    "First access to every dinner",
                    "Discount + First access to exclusive DinnersMatch parties",
                    "Community member perks"
                ],
                buttonText: "Get Annual Pass",
                buttonColor: "bg-[#FFAA55] hover:bg-[#FF9955]"
            },
            {
                id: "monthly",
                title: "Monthly Pass",
                badge: null,
                badgeColor: "",
                price: "R250",
                priceColor: "text-[#F5F5F5]",
                savings: null,
                billing: "Billed Monthly",
                features: [
                    "Access to all Dinners - build your social rhythm.",
                    "Early access to exclusive DinnersMatch parties",
                    "Cancel anytime - no question asked."
                ],
                buttonText: "Start Monthly Pass",
                buttonColor: "bg-[#FFAA55] hover:bg-[#FF9955]"
            },
            {
                id: "single",
                title: "Single Dinner",
                badge: null,
                badgeColor: "",
                price: "R200",
                priceColor: "text-[#F5F5F5]",
                savings: null,
                billing: "One Time Payment",
                features: [
                    "Limited to 1 dinner"
                ],
                buttonText: "Get Single Ticket",
                buttonColor: "bg-[#FFAA55] hover:bg-[#FF9955]"
            }
        ];
        t6 = "fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto";
        t3 = "bg-[#080814] border border-white rounded-xl w-full max-w-6xl p-8 relative shadow-2xl my-8";
        let t7;
        if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
            t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-6 h-6",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M6 18L18 6M6 6l12 12"
                }, void 0, false, {
                    fileName: "[project]/components/modals/PricingModal.jsx",
                    lineNumber: 70,
                    columnNumber: 91
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/modals/PricingModal.jsx",
                lineNumber: 70,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[9] = t7;
        } else {
            t7 = $[9];
        }
        if ($[10] !== onClose) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onClose,
                className: "absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10",
                "aria-label": "Close modal",
                children: t7
            }, void 0, false, {
                fileName: "[project]/components/modals/PricingModal.jsx",
                lineNumber: 76,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[10] = onClose;
            $[11] = t4;
        } else {
            t4 = $[11];
        }
        if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
            t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-4xl font-bold text-[#F5F5F5] mb-2",
                        children: "Choose Your DinnersMatch Pass"
                    }, void 0, false, {
                        fileName: "[project]/components/modals/PricingModal.jsx",
                        lineNumber: 83,
                        columnNumber: 46
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[#E0E0E0]",
                        children: "No more waiting for plans. Join Cape Town most exciting social community."
                    }, void 0, false, {
                        fileName: "[project]/components/modals/PricingModal.jsx",
                        lineNumber: 83,
                        columnNumber: 135
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/modals/PricingModal.jsx",
                lineNumber: 83,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[12] = t5;
        } else {
            t5 = $[12];
        }
        t1 = "grid grid-cols-1 md:grid-cols-3 gap-6 mb-8";
        t2 = plans.map((plan)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#111121] border border-white rounded-xl p-6 relative flex flex-col hover:border-[#FFAA55] transition-colors",
                children: [
                    plan.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${plan.badgeColor} text-[#F5F5F5] text-xs font-bold px-3 py-1 rounded-full w-fit mb-4`,
                        children: plan.badge
                    }, void 0, false, {
                        fileName: "[project]/components/modals/PricingModal.jsx",
                        lineNumber: 89,
                        columnNumber: 186
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold text-[#F5F5F5] mb-4",
                        children: plan.title
                    }, void 0, false, {
                        fileName: "[project]/components/modals/PricingModal.jsx",
                        lineNumber: 89,
                        columnNumber: 310
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4",
                        children: [
                            plan.originalPrice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#A0A0A0] line-through text-lg mr-2",
                                children: plan.originalPrice
                            }, void 0, false, {
                                fileName: "[project]/components/modals/PricingModal.jsx",
                                lineNumber: 89,
                                columnNumber: 426
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `text-3xl font-bold ${plan.priceColor}`,
                                children: plan.price
                            }, void 0, false, {
                                fileName: "[project]/components/modals/PricingModal.jsx",
                                lineNumber: 89,
                                columnNumber: 513
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/modals/PricingModal.jsx",
                        lineNumber: 89,
                        columnNumber: 381
                    }, ("TURBOPACK compile-time value", void 0)),
                    plan.savings && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[#FFAA55] text-sm mb-2 font-medium",
                        children: plan.savings
                    }, void 0, false, {
                        fileName: "[project]/components/modals/PricingModal.jsx",
                        lineNumber: 89,
                        columnNumber: 613
                    }, ("TURBOPACK compile-time value", void 0)),
                    plan.billing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[#E0E0E0] text-sm mb-4",
                        children: plan.billing
                    }, void 0, false, {
                        fileName: "[project]/components/modals/PricingModal.jsx",
                        lineNumber: 89,
                        columnNumber: 704
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "space-y-3 mb-6 flex-grow",
                        children: plan.features.map(_temp)
                    }, void 0, false, {
                        fileName: "[project]/components/modals/PricingModal.jsx",
                        lineNumber: 89,
                        columnNumber: 766
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onSelectPlan(plan.id),
                        className: `w-full ${plan.buttonColor} text-[#F5F5F5] py-3 rounded-lg font-bold text-sm uppercase tracking-wide transition-colors`,
                        children: plan.buttonText
                    }, void 0, false, {
                        fileName: "[project]/components/modals/PricingModal.jsx",
                        lineNumber: 89,
                        columnNumber: 838
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, plan.id, true, {
                fileName: "[project]/components/modals/PricingModal.jsx",
                lineNumber: 89,
                columnNumber: 28
            }, ("TURBOPACK compile-time value", void 0)));
        $[1] = onClose;
        $[2] = onSelectPlan;
        $[3] = t1;
        $[4] = t2;
        $[5] = t3;
        $[6] = t4;
        $[7] = t5;
        $[8] = t6;
    } else {
        t1 = $[3];
        t2 = $[4];
        t3 = $[5];
        t4 = $[6];
        t5 = $[7];
        t6 = $[8];
    }
    let t7;
    if ($[13] !== t1 || $[14] !== t2) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            children: t2
        }, void 0, false, {
            fileName: "[project]/components/modals/PricingModal.jsx",
            lineNumber: 108,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = t1;
        $[14] = t2;
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    let t8;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-[#111121] border border-white rounded-xl p-6 mb-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-xl font-bold text-[#F5F5F5] mb-3",
                    children: "Why a subscription?"
                }, void 0, false, {
                    fileName: "[project]/components/modals/PricingModal.jsx",
                    lineNumber: 117,
                    columnNumber: 80
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[#E0E0E0] leading-relaxed",
                    children: "Building a social life isn't a once-off event - it's a rhythm. DinnersMatch happens every 2 weeks, and the magic only works when people show up consistently. A subscription lets us guarantee great groups, exciting restaurants, and a reliable social rhythm you can count on."
                }, void 0, false, {
                    fileName: "[project]/components/modals/PricingModal.jsx",
                    lineNumber: 117,
                    columnNumber: 158
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/modals/PricingModal.jsx",
            lineNumber: 117,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = t8;
    } else {
        t8 = $[16];
    }
    let t9;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "/terms-conditions",
            className: "text-[#FFAA55] hover:underline",
            children: "Terms & Conditions"
        }, void 0, false, {
            fileName: "[project]/components/modals/PricingModal.jsx",
            lineNumber: 124,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = t9;
    } else {
        t9 = $[17];
    }
    let t10;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-[#A0A0A0] text-center",
            children: [
                "By continuing you agree to our",
                " ",
                t9,
                " ",
                "and",
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "/privacy-policy",
                    className: "text-[#FFAA55] hover:underline",
                    children: "Privacy Policy"
                }, void 0, false, {
                    fileName: "[project]/components/modals/PricingModal.jsx",
                    lineNumber: 131,
                    columnNumber: 113
                }, ("TURBOPACK compile-time value", void 0)),
                "."
            ]
        }, void 0, true, {
            fileName: "[project]/components/modals/PricingModal.jsx",
            lineNumber: 131,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[18] = t10;
    } else {
        t10 = $[18];
    }
    let t11;
    if ($[19] !== t3 || $[20] !== t4 || $[21] !== t5 || $[22] !== t7) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            children: [
                t4,
                t5,
                t7,
                t8,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/components/modals/PricingModal.jsx",
            lineNumber: 138,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[19] = t3;
        $[20] = t4;
        $[21] = t5;
        $[22] = t7;
        $[23] = t11;
    } else {
        t11 = $[23];
    }
    let t12;
    if ($[24] !== t11 || $[25] !== t6) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t6,
            children: t11
        }, void 0, false, {
            fileName: "[project]/components/modals/PricingModal.jsx",
            lineNumber: 149,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[24] = t11;
        $[25] = t6;
        $[26] = t12;
    } else {
        t12 = $[26];
    }
    return t12;
};
_c = PricingModal;
const __TURBOPACK__default__export__ = PricingModal;
function _temp(feature, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: "flex items-start text-[#E0E0E0] text-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-5 h-5 text-[#FFAA55] mr-2 flex-shrink-0 mt-0.5",
                fill: "currentColor",
                viewBox: "0 0 20 20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fillRule: "evenodd",
                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                    clipRule: "evenodd"
                }, void 0, false, {
                    fileName: "[project]/components/modals/PricingModal.jsx",
                    lineNumber: 160,
                    columnNumber: 184
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/modals/PricingModal.jsx",
                lineNumber: 160,
                columnNumber: 78
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: feature
            }, void 0, false, {
                fileName: "[project]/components/modals/PricingModal.jsx",
                lineNumber: 160,
                columnNumber: 374
            }, this)
        ]
    }, index, true, {
        fileName: "[project]/components/modals/PricingModal.jsx",
        lineNumber: 160,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "PricingModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/modals/CitySelectionModal.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
;
;
const CitySelectionModal = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "04e77e86ec1958875b54fb3c9d327d3b4df0245966422e9e14259bde6d09a6ab") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "04e77e86ec1958875b54fb3c9d327d3b4df0245966422e9e14259bde6d09a6ab";
    }
    const { isOpen, onClose, onSelectCity } = t0;
    if (!isOpen) {
        return null;
    }
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [
            {
                id: "cape-town",
                name: "Cape Town",
                province: "Western Cape"
            },
            {
                id: "johannesburg",
                name: "Johannesburg",
                province: "Gauteng"
            }
        ];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const cities = t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            maxHeight: "90vh",
            overflowY: "auto"
        };
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-5 h-5",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M6 18L18 6M6 6l12 12"
            }, void 0, false, {
                fileName: "[project]/components/modals/CitySelectionModal.jsx",
                lineNumber: 49,
                columnNumber: 89
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/modals/CitySelectionModal.jsx",
            lineNumber: 49,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    let t4;
    if ($[4] !== onClose) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onClose,
            className: "absolute top-10 right-10 text-[#D9D9D9] hover:text-[#F5F5F5] transition-colors",
            "aria-label": "Close modal",
            children: t3
        }, void 0, false, {
            fileName: "[project]/components/modals/CitySelectionModal.jsx",
            lineNumber: 56,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = onClose;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center  justify-center mb-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-[23px] font-medium text-[#F5F5F5]",
                        children: "Select Your City"
                    }, void 0, false, {
                        fileName: "[project]/components/modals/CitySelectionModal.jsx",
                        lineNumber: 64,
                        columnNumber: 89
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/modals/CitySelectionModal.jsx",
                    lineNumber: 64,
                    columnNumber: 33
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[14px] text-[#E0E0E0] text-center",
                    children: "Choose the city where you'd like to have dinner:"
                }, void 0, false, {
                    fileName: "[project]/components/modals/CitySelectionModal.jsx",
                    lineNumber: 64,
                    columnNumber: 171
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/modals/CitySelectionModal.jsx",
            lineNumber: 64,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] !== onSelectCity) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: cities.map((city)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>onSelectCity(city),
                    className: "w-full bg-[#111121] border border-[#111121] rounded-lg p-4 hover:border-[#FFAA55] transition-colors text-left",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-6 h-6 text-[#EEEEEE] shrink-",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                strokeWidth: 1.5,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                                    }, void 0, false, {
                                        fileName: "[project]/components/modals/CitySelectionModal.jsx",
                                        lineNumber: 71,
                                        columnNumber: 397
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                                    }, void 0, false, {
                                        fileName: "[project]/components/modals/CitySelectionModal.jsx",
                                        lineNumber: 71,
                                        columnNumber: 489
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/modals/CitySelectionModal.jsx",
                                lineNumber: 71,
                                columnNumber: 277
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[#F5F5F5]  text-base leading-tight",
                                        children: city.name
                                    }, void 0, false, {
                                        fileName: "[project]/components/modals/CitySelectionModal.jsx",
                                        lineNumber: 71,
                                        columnNumber: 634
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[#E0E0E0] text-xs font-light mt-2",
                                        children: city.province
                                    }, void 0, false, {
                                        fileName: "[project]/components/modals/CitySelectionModal.jsx",
                                        lineNumber: 71,
                                        columnNumber: 704
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/modals/CitySelectionModal.jsx",
                                lineNumber: 71,
                                columnNumber: 629
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/modals/CitySelectionModal.jsx",
                        lineNumber: 71,
                        columnNumber: 236
                    }, ("TURBOPACK compile-time value", void 0))
                }, city.id, false, {
                    fileName: "[project]/components/modals/CitySelectionModal.jsx",
                    lineNumber: 71,
                    columnNumber: 57
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false, {
            fileName: "[project]/components/modals/CitySelectionModal.jsx",
            lineNumber: 71,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = onSelectCity;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    let t7;
    if ($[9] !== t4 || $[10] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#080814] rounded-xl w-full max-w-154 p-10 relative shadow-2xl",
                style: t2,
                children: [
                    t4,
                    t5,
                    t6
                ]
            }, void 0, true, {
                fileName: "[project]/components/modals/CitySelectionModal.jsx",
                lineNumber: 79,
                columnNumber: 112
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/modals/CitySelectionModal.jsx",
            lineNumber: 79,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = t4;
        $[10] = t6;
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    return t7;
};
_c = CitySelectionModal;
const __TURBOPACK__default__export__ = CitySelectionModal;
var _c;
__turbopack_context__.k.register(_c, "CitySelectionModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/modals/AreaSelectionModal.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
;
;
const AreaSelectionModal = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(40);
    if ($[0] !== "2efd6fa389323682facfeeb687e6936cc811837255251271a0d65f8f7f48887f") {
        for(let $i = 0; $i < 40; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2efd6fa389323682facfeeb687e6936cc811837255251271a0d65f8f7f48887f";
    }
    const { isOpen, onClose, onSelectArea, city, selectedCityId } = t0;
    if (!isOpen) {
        return null;
    }
    let t1;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    if ($[1] !== city || $[2] !== onClose || $[3] !== onSelectArea || $[4] !== selectedCityId) {
        const placesByCity = {
            "cape-town": [
                {
                    id: "v-a-waterfront",
                    name: "V&A Waterfront"
                },
                {
                    id: "camps-bay",
                    name: "Camps Bay"
                },
                {
                    id: "kloof-street",
                    name: "Kloof Street"
                }
            ],
            "johannesburg": [
                {
                    id: "sandton",
                    name: "Sandton"
                },
                {
                    id: "rosebank",
                    name: "Rosebank"
                },
                {
                    id: "melrose-arch",
                    name: "Melrose Arch"
                }
            ]
        };
        const areas = placesByCity[selectedCityId] || placesByCity["cape-town"];
        t8 = "fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4";
        t3 = "bg-[#080814] rounded-xl w-full max-w-154 p-10 relative shadow-2xl";
        if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
            t4 = {
                maxHeight: "90vh",
                overflowY: "auto"
            };
            $[13] = t4;
        } else {
            t4 = $[13];
        }
        let t9;
        if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
            t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-5 h-5",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M6 18L18 6M6 6l12 12"
                }, void 0, false, {
                    fileName: "[project]/components/modals/AreaSelectionModal.jsx",
                    lineNumber: 68,
                    columnNumber: 91
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/modals/AreaSelectionModal.jsx",
                lineNumber: 68,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[14] = t9;
        } else {
            t9 = $[14];
        }
        if ($[15] !== onClose) {
            t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onClose,
                className: "absolute top-10 right-10 text-[#D9D9D9] hover:text-[#F5F5F5] transition-colors",
                "aria-label": "Close modal",
                children: t9
            }, void 0, false, {
                fileName: "[project]/components/modals/AreaSelectionModal.jsx",
                lineNumber: 74,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[15] = onClose;
            $[16] = t5;
        } else {
            t5 = $[16];
        }
        let t10;
        if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
            t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-[23px] text-center font-medium text-[#F5F5F5] mb-2",
                children: "Select Your Place"
            }, void 0, false, {
                fileName: "[project]/components/modals/AreaSelectionModal.jsx",
                lineNumber: 82,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[17] = t10;
        } else {
            t10 = $[17];
        }
        const t11 = city || "Cape Town";
        if ($[18] !== t11) {
            t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-10",
                children: [
                    t10,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[14px] text-center text-[#E0E0E0]",
                        children: [
                            "Choose the area place in ",
                            t11,
                            ":"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/modals/AreaSelectionModal.jsx",
                        lineNumber: 89,
                        columnNumber: 40
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/modals/AreaSelectionModal.jsx",
                lineNumber: 89,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[18] = t11;
            $[19] = t6;
        } else {
            t6 = $[19];
        }
        let t12;
        let t13;
        if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
            t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-5 h-5",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M15 19l-7-7 7-7"
                }, void 0, false, {
                    fileName: "[project]/components/modals/AreaSelectionModal.jsx",
                    lineNumber: 98,
                    columnNumber: 92
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/modals/AreaSelectionModal.jsx",
                lineNumber: 98,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: "Back to selection"
            }, void 0, false, {
                fileName: "[project]/components/modals/AreaSelectionModal.jsx",
                lineNumber: 99,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[20] = t12;
            $[21] = t13;
        } else {
            t12 = $[20];
            t13 = $[21];
        }
        if ($[22] !== onClose) {
            t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onClose,
                className: "flex items-center gap-2 text-orange-300 hover:text-[#F5F5F5] transition-colors mb-10",
                children: [
                    t12,
                    t13
                ]
            }, void 0, true, {
                fileName: "[project]/components/modals/AreaSelectionModal.jsx",
                lineNumber: 107,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[22] = onClose;
            $[23] = t7;
        } else {
            t7 = $[23];
        }
        t1 = "space-y-4";
        let t14;
        if ($[24] !== onSelectArea) {
            t14 = (area)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>onSelectArea(area),
                    className: "w-full bg-[#111121]  rounded-lg p-4 hover:border-[#FFAA55] transition-colors text-left",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-6 h-6 text-[#EEEEEE] shrink-0",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                strokeWidth: 1.5,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                                    }, void 0, false, {
                                        fileName: "[project]/components/modals/AreaSelectionModal.jsx",
                                        lineNumber: 116,
                                        columnNumber: 339
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                                    }, void 0, false, {
                                        fileName: "[project]/components/modals/AreaSelectionModal.jsx",
                                        lineNumber: 116,
                                        columnNumber: 431
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/modals/AreaSelectionModal.jsx",
                                lineNumber: 116,
                                columnNumber: 218
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[#F5F5F5] font-medium text-base",
                                children: area.name
                            }, void 0, false, {
                                fileName: "[project]/components/modals/AreaSelectionModal.jsx",
                                lineNumber: 116,
                                columnNumber: 571
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/modals/AreaSelectionModal.jsx",
                        lineNumber: 116,
                        columnNumber: 177
                    }, ("TURBOPACK compile-time value", void 0))
                }, area.id, false, {
                    fileName: "[project]/components/modals/AreaSelectionModal.jsx",
                    lineNumber: 116,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0));
            $[24] = onSelectArea;
            $[25] = t14;
        } else {
            t14 = $[25];
        }
        t2 = areas.map(t14);
        $[1] = city;
        $[2] = onClose;
        $[3] = onSelectArea;
        $[4] = selectedCityId;
        $[5] = t1;
        $[6] = t2;
        $[7] = t3;
        $[8] = t4;
        $[9] = t5;
        $[10] = t6;
        $[11] = t7;
        $[12] = t8;
    } else {
        t1 = $[5];
        t2 = $[6];
        t3 = $[7];
        t4 = $[8];
        t5 = $[9];
        t6 = $[10];
        t7 = $[11];
        t8 = $[12];
    }
    let t9;
    if ($[26] !== t1 || $[27] !== t2) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            children: t2
        }, void 0, false, {
            fileName: "[project]/components/modals/AreaSelectionModal.jsx",
            lineNumber: 147,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[26] = t1;
        $[27] = t2;
        $[28] = t9;
    } else {
        t9 = $[28];
    }
    let t10;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "uppercase text-center cursor-pointer text-white font-lg w-full h-12 rounded-lg mt-4 bg-orange-300",
            children: "Continue to quiz"
        }, void 0, false, {
            fileName: "[project]/components/modals/AreaSelectionModal.jsx",
            lineNumber: 156,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[29] = t10;
    } else {
        t10 = $[29];
    }
    let t11;
    if ($[30] !== t3 || $[31] !== t4 || $[32] !== t5 || $[33] !== t6 || $[34] !== t7 || $[35] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            style: t4,
            children: [
                t5,
                t6,
                t7,
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/components/modals/AreaSelectionModal.jsx",
            lineNumber: 163,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[30] = t3;
        $[31] = t4;
        $[32] = t5;
        $[33] = t6;
        $[34] = t7;
        $[35] = t9;
        $[36] = t11;
    } else {
        t11 = $[36];
    }
    let t12;
    if ($[37] !== t11 || $[38] !== t8) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t8,
            children: t11
        }, void 0, false, {
            fileName: "[project]/components/modals/AreaSelectionModal.jsx",
            lineNumber: 176,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[37] = t11;
        $[38] = t8;
        $[39] = t12;
    } else {
        t12 = $[39];
    }
    return t12;
};
_c = AreaSelectionModal;
const __TURBOPACK__default__export__ = AreaSelectionModal;
var _c;
__turbopack_context__.k.register(_c, "AreaSelectionModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/modals/PersonalityQuiz.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const PersonalityQuiz = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(81);
    if ($[0] !== "aa2f85b3c75265b3114e9dbed26952ea0ef136d843c4ed01e035b26f88f12876") {
        for(let $i = 0; $i < 81; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "aa2f85b3c75265b3114e9dbed26952ea0ef136d843c4ed01e035b26f88f12876";
    }
    const { isOpen, onClose, onComplete, onBack } = t0;
    const [currentQuestion, setCurrentQuestion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [answers, setAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    const [showResult, setShowResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t2;
    let t3;
    if ($[2] !== isOpen) {
        t2 = ()=>{
            if (!isOpen) {
                setCurrentQuestion(0);
                setAnswers([]);
                setShowResult(false);
            }
        };
        t3 = [
            isOpen
        ];
        $[2] = isOpen;
        $[3] = t2;
        $[4] = t3;
    } else {
        t2 = $[3];
        t3 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    if (!isOpen) {
        return null;
    }
    let currentAnswer;
    let currentQ;
    let handleScaleAnswer;
    let t10;
    let t11;
    let t12;
    let t13;
    let t14;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    let t9;
    let totalQuestions;
    if ($[5] !== answers || $[6] !== currentQuestion || $[7] !== onBack || $[8] !== onClose || $[9] !== onComplete || $[10] !== showResult) {
        t14 = Symbol.for("react.early_return_sentinel");
        bb0: {
            const questions = [
                {
                    id: 1,
                    type: "choice",
                    question: "Would you rather discuss big ideas or everyday life?",
                    options: [
                        {
                            id: "big-ideas",
                            label: "Big Ideas",
                            icon: "\uD83E\uDDE0"
                        },
                        {
                            id: "everyday-life",
                            label: "Everyday Life",
                            icon: "\uD83D\uDCC5"
                        }
                    ]
                },
                {
                    id: 2,
                    type: "choice",
                    question: "Would you rather explore new experiences or familiar places?",
                    options: [
                        {
                            id: "new-experiences",
                            label: "New Experiences",
                            icon: "\u2600\uFE0F"
                        },
                        {
                            id: "familiar-places",
                            label: "Familiar Places",
                            icon: "\uD83C\uDFE0"
                        }
                    ]
                },
                {
                    id: 3,
                    type: "scale",
                    question: "I am an introverted person.",
                    scaleLabels: {
                        left: "Strongly Disagree",
                        right: "Strongly Agree"
                    },
                    min: 1,
                    max: 10
                }
            ];
            totalQuestions = questions.length;
            const progress = (currentQuestion + 1) / totalQuestions * 100;
            let t15;
            if ($[26] !== answers || $[27] !== currentQuestion || $[28] !== totalQuestions) {
                t15 = (answerId)=>{
                    const newAnswers = [
                        ...answers
                    ];
                    newAnswers[currentQuestion] = answerId;
                    setAnswers(newAnswers);
                    if (currentQuestion < totalQuestions - 1) {
                        setCurrentQuestion(currentQuestion + 1);
                    } else {
                        setShowResult(true);
                    }
                };
                $[26] = answers;
                $[27] = currentQuestion;
                $[28] = totalQuestions;
                $[29] = t15;
            } else {
                t15 = $[29];
            }
            const handleAnswer = t15;
            let t16;
            if ($[30] !== handleAnswer) {
                t16 = (value)=>{
                    handleAnswer(value);
                };
                $[30] = handleAnswer;
                $[31] = t16;
            } else {
                t16 = $[31];
            }
            handleScaleAnswer = t16;
            let t17;
            if ($[32] !== answers || $[33] !== onComplete) {
                t17 = ()=>{
                    setShowResult(false);
                    if (onComplete) {
                        onComplete(answers);
                    }
                };
                $[32] = answers;
                $[33] = onComplete;
                $[34] = t17;
            } else {
                t17 = $[34];
            }
            const handleResultContinue = t17;
            currentQ = questions[currentQuestion];
            currentAnswer = answers[currentQuestion];
            if (showResult) {
                let t18;
                if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
                    t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-5 h-5",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M6 18L18 6M6 6l12 12"
                        }, void 0, false, {
                            fileName: "[project]/components/modals/PersonalityQuiz.jsx",
                            lineNumber: 159,
                            columnNumber: 96
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/modals/PersonalityQuiz.jsx",
                        lineNumber: 159,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0));
                    $[35] = t18;
                } else {
                    t18 = $[35];
                }
                let t19;
                if ($[36] !== onClose) {
                    t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        className: "absolute top-10 right-10 text-[#D9D9D9] hover:text-[#F5F5F5] transition-colors",
                        "aria-label": "Close modal",
                        children: t18
                    }, void 0, false, {
                        fileName: "[project]/components/modals/PersonalityQuiz.jsx",
                        lineNumber: 166,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0));
                    $[36] = onClose;
                    $[37] = t19;
                } else {
                    t19 = $[37];
                }
                let t20;
                if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
                    t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold text-[#F5F5F5] mb-8",
                        children: "DinnersMatch"
                    }, void 0, false, {
                        fileName: "[project]/components/modals/PersonalityQuiz.jsx",
                        lineNumber: 174,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0));
                    $[38] = t20;
                } else {
                    t20 = $[38];
                }
                let t21;
                if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
                    t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-7xl font-bold text-[#FFAA55] mb-4",
                                children: "90%"
                            }, void 0, false, {
                                fileName: "[project]/components/modals/PersonalityQuiz.jsx",
                                lineNumber: 181,
                                columnNumber: 39
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[#E0E0E0] text-sm",
                                children: "The percentage of members you're compatible with"
                            }, void 0, false, {
                                fileName: "[project]/components/modals/PersonalityQuiz.jsx",
                                lineNumber: 181,
                                columnNumber: 104
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/modals/PersonalityQuiz.jsx",
                        lineNumber: 181,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0));
                    $[39] = t21;
                } else {
                    t21 = $[39];
                }
                let t22;
                if ($[40] !== handleResultContinue) {
                    t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: [
                            t20,
                            t21,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleResultContinue,
                                className: "w-full bg-[#FFAA55] text-white py-4 rounded-lg font-bold text-sm uppercase tracking-wide hover:bg-[#FF9955] transition-colors",
                                children: "Continue"
                            }, void 0, false, {
                                fileName: "[project]/components/modals/PersonalityQuiz.jsx",
                                lineNumber: 188,
                                columnNumber: 56
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/modals/PersonalityQuiz.jsx",
                        lineNumber: 188,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0));
                    $[40] = handleResultContinue;
                    $[41] = t22;
                } else {
                    t22 = $[41];
                }
                let t23;
                if ($[42] !== t19 || $[43] !== t22) {
                    t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[#080814] rounded-xl w-full max-w-154 p-10 relative shadow-2xl",
                            children: [
                                t19,
                                t22
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/modals/PersonalityQuiz.jsx",
                            lineNumber: 196,
                            columnNumber: 119
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/modals/PersonalityQuiz.jsx",
                        lineNumber: 196,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0));
                    $[42] = t19;
                    $[43] = t22;
                    $[44] = t23;
                } else {
                    t23 = $[44];
                }
                t14 = t23;
                break bb0;
            }
            t13 = "fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4";
            t7 = "bg-[#080814] rounded-xl w-full max-w-154 p-10 relative shadow-2xl";
            if ($[45] === Symbol.for("react.memo_cache_sentinel")) {
                t8 = {
                    maxHeight: "90vh",
                    overflowY: "auto"
                };
                $[45] = t8;
            } else {
                t8 = $[45];
            }
            let t18;
            if ($[46] === Symbol.for("react.memo_cache_sentinel")) {
                t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "w-5 h-5",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M6 18L18 6M6 6l12 12"
                    }, void 0, false, {
                        fileName: "[project]/components/modals/PersonalityQuiz.jsx",
                        lineNumber: 219,
                        columnNumber: 94
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/modals/PersonalityQuiz.jsx",
                    lineNumber: 219,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0));
                $[46] = t18;
            } else {
                t18 = $[46];
            }
            if ($[47] !== onClose) {
                t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    className: "absolute top-10 right-10 text-[#D9D9D9] hover:text-[#F5F5F5] transition-colors",
                    "aria-label": "Close modal",
                    children: t18
                }, void 0, false, {
                    fileName: "[project]/components/modals/PersonalityQuiz.jsx",
                    lineNumber: 225,
                    columnNumber: 14
                }, ("TURBOPACK compile-time value", void 0));
                $[47] = onClose;
                $[48] = t9;
            } else {
                t9 = $[48];
            }
            if ($[49] !== answers || $[50] !== currentQuestion || $[51] !== onBack) {
                t10 = onBack && currentQuestion > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>{
                        setCurrentQuestion(currentQuestion - 1);
                        const newAnswers_0 = [
                            ...answers
                        ];
                        newAnswers_0.pop();
                        setAnswers(newAnswers_0);
                    },
                    className: "absolute top-10 left-10 flex items-center gap-2 text-[#E0E0E0] hover:text-[#F5F5F5] transition-colors",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-5 h-5",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M15 19l-7-7 7-7"
                            }, void 0, false, {
                                fileName: "[project]/components/modals/PersonalityQuiz.jsx",
                                lineNumber: 237,
                                columnNumber: 205
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/modals/PersonalityQuiz.jsx",
                            lineNumber: 237,
                            columnNumber: 126
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Back"
                        }, void 0, false, {
                            fileName: "[project]/components/modals/PersonalityQuiz.jsx",
                            lineNumber: 237,
                            columnNumber: 300
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/modals/PersonalityQuiz.jsx",
                    lineNumber: 232,
                    columnNumber: 48
                }, ("TURBOPACK compile-time value", void 0));
                $[49] = answers;
                $[50] = currentQuestion;
                $[51] = onBack;
                $[52] = t10;
            } else {
                t10 = $[52];
            }
            if ($[53] === Symbol.for("react.memo_cache_sentinel")) {
                t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-bold text-[#F5F5F5] mb-1 text-center",
                            children: "DinnersMatch"
                        }, void 0, false, {
                            fileName: "[project]/components/modals/PersonalityQuiz.jsx",
                            lineNumber: 246,
                            columnNumber: 37
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-[#FFAA55] uppercase tracking-wide text-center",
                            children: "Personality"
                        }, void 0, false, {
                            fileName: "[project]/components/modals/PersonalityQuiz.jsx",
                            lineNumber: 246,
                            columnNumber: 121
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/modals/PersonalityQuiz.jsx",
                    lineNumber: 246,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0));
                $[53] = t11;
            } else {
                t11 = $[53];
            }
            const t19 = `${progress}%`;
            if ($[54] !== t19) {
                t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full bg-[#2F3A51] rounded-full h-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[#FFAA55] h-1 rounded-full transition-all duration-300",
                            style: {
                                width: t19
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/modals/PersonalityQuiz.jsx",
                            lineNumber: 253,
                            columnNumber: 91
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/modals/PersonalityQuiz.jsx",
                        lineNumber: 253,
                        columnNumber: 37
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/modals/PersonalityQuiz.jsx",
                    lineNumber: 253,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0));
                $[54] = t19;
                $[55] = t12;
            } else {
                t12 = $[55];
            }
            t4 = "mb-8";
            t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-2xl md:text-3xl font-medium text-[#F5F5F5] text-center mb-8",
                children: currentQ.question
            }, void 0, false, {
                fileName: "[project]/components/modals/PersonalityQuiz.jsx",
                lineNumber: 262,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            t6 = currentQ.type === "choice" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                children: currentQ.options.map((option)=>{
                    const isSelected = currentAnswer === option.id;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>handleAnswer(option.id),
                        className: `border rounded-xl p-8 transition-all text-center group ${isSelected ? "bg-[#FFAA55] border-[#FFAA55]" : "bg-[#080814] border-white hover:border-[#FFAA55]"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-4xl mb-4",
                                children: option.icon
                            }, void 0, false, {
                                fileName: "[project]/components/modals/PersonalityQuiz.jsx",
                                lineNumber: 265,
                                columnNumber: 252
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-medium text-lg text-[#F5F5F5]",
                                children: option.label
                            }, void 0, false, {
                                fileName: "[project]/components/modals/PersonalityQuiz.jsx",
                                lineNumber: 265,
                                columnNumber: 302
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, option.id, true, {
                        fileName: "[project]/components/modals/PersonalityQuiz.jsx",
                        lineNumber: 265,
                        columnNumber: 18
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/components/modals/PersonalityQuiz.jsx",
                lineNumber: 263,
                columnNumber: 42
            }, ("TURBOPACK compile-time value", void 0));
        }
        $[5] = answers;
        $[6] = currentQuestion;
        $[7] = onBack;
        $[8] = onClose;
        $[9] = onComplete;
        $[10] = showResult;
        $[11] = currentAnswer;
        $[12] = currentQ;
        $[13] = handleScaleAnswer;
        $[14] = t10;
        $[15] = t11;
        $[16] = t12;
        $[17] = t13;
        $[18] = t14;
        $[19] = t4;
        $[20] = t5;
        $[21] = t6;
        $[22] = t7;
        $[23] = t8;
        $[24] = t9;
        $[25] = totalQuestions;
    } else {
        currentAnswer = $[11];
        currentQ = $[12];
        handleScaleAnswer = $[13];
        t10 = $[14];
        t11 = $[15];
        t12 = $[16];
        t13 = $[17];
        t14 = $[18];
        t4 = $[19];
        t5 = $[20];
        t6 = $[21];
        t7 = $[22];
        t8 = $[23];
        t9 = $[24];
        totalQuestions = $[25];
    }
    if (t14 !== Symbol.for("react.early_return_sentinel")) {
        return t14;
    }
    let t15;
    if ($[56] !== currentAnswer || $[57] !== currentQ.scaleLabels || $[58] !== currentQ.type || $[59] !== handleScaleAnswer) {
        t15 = currentQ.type === "scale" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between mb-6 text-sm text-[#E0E0E0]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[#FFAA55]",
                            children: currentQ.scaleLabels.left
                        }, void 0, false, {
                            fileName: "[project]/components/modals/PersonalityQuiz.jsx",
                            lineNumber: 311,
                            columnNumber: 111
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[#FFAA55]",
                            children: currentQ.scaleLabels.right
                        }, void 0, false, {
                            fileName: "[project]/components/modals/PersonalityQuiz.jsx",
                            lineNumber: 311,
                            columnNumber: 178
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/modals/PersonalityQuiz.jsx",
                    lineNumber: 311,
                    columnNumber: 45
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-5 gap-3",
                    children: Array.from({
                        length: 10
                    }, _temp).map((value_0)=>{
                        const isSelected_0 = currentAnswer === value_0;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>handleScaleAnswer(value_0),
                            className: `py-5 rounded-lg border transition-all font-medium ${isSelected_0 ? "bg-[#FFAA55] border-[#FFAA55] text-white" : "bg-[#080814] border-white text-[#E0E0E0] hover:border-[#FFAA55]"}`,
                            children: value_0
                        }, value_0, false, {
                            fileName: "[project]/components/modals/PersonalityQuiz.jsx",
                            lineNumber: 315,
                            columnNumber: 18
                        }, ("TURBOPACK compile-time value", void 0));
                    })
                }, void 0, false, {
                    fileName: "[project]/components/modals/PersonalityQuiz.jsx",
                    lineNumber: 311,
                    columnNumber: 252
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/modals/PersonalityQuiz.jsx",
            lineNumber: 311,
            columnNumber: 40
        }, ("TURBOPACK compile-time value", void 0));
        $[56] = currentAnswer;
        $[57] = currentQ.scaleLabels;
        $[58] = currentQ.type;
        $[59] = handleScaleAnswer;
        $[60] = t15;
    } else {
        t15 = $[60];
    }
    let t16;
    if ($[61] !== t15 || $[62] !== t4 || $[63] !== t5 || $[64] !== t6) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t4,
            children: [
                t5,
                t6,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/components/modals/PersonalityQuiz.jsx",
            lineNumber: 327,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[61] = t15;
        $[62] = t4;
        $[63] = t5;
        $[64] = t6;
        $[65] = t16;
    } else {
        t16 = $[65];
    }
    const t17 = currentQuestion + 1;
    let t18;
    if ($[66] !== t17 || $[67] !== totalQuestions) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-center text-[#E0E0E0] text-sm",
            children: [
                "Question ",
                t17,
                " of ",
                totalQuestions
            ]
        }, void 0, true, {
            fileName: "[project]/components/modals/PersonalityQuiz.jsx",
            lineNumber: 339,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[66] = t17;
        $[67] = totalQuestions;
        $[68] = t18;
    } else {
        t18 = $[68];
    }
    let t19;
    if ($[69] !== t10 || $[70] !== t11 || $[71] !== t12 || $[72] !== t16 || $[73] !== t18 || $[74] !== t7 || $[75] !== t8 || $[76] !== t9) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t7,
            style: t8,
            children: [
                t9,
                t10,
                t11,
                t12,
                t16,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/components/modals/PersonalityQuiz.jsx",
            lineNumber: 348,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[69] = t10;
        $[70] = t11;
        $[71] = t12;
        $[72] = t16;
        $[73] = t18;
        $[74] = t7;
        $[75] = t8;
        $[76] = t9;
        $[77] = t19;
    } else {
        t19 = $[77];
    }
    let t20;
    if ($[78] !== t13 || $[79] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t13,
            children: t19
        }, void 0, false, {
            fileName: "[project]/components/modals/PersonalityQuiz.jsx",
            lineNumber: 363,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[78] = t13;
        $[79] = t19;
        $[80] = t20;
    } else {
        t20 = $[80];
    }
    return t20;
};
_s(PersonalityQuiz, "TNPYBPLqQYn0uRigu/swXzCZPSI=");
_c = PersonalityQuiz;
const __TURBOPACK__default__export__ = PersonalityQuiz;
function _temp(_, i) {
    return i + 1;
}
var _c;
__turbopack_context__.k.register(_c, "PersonalityQuiz");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/modals/IdentityQuiz.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const IdentityQuiz = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(76);
    if ($[0] !== "29b3ad956e4873dd07a6c6ebec38a19770588994e38d663d44379e093747a40e") {
        for(let $i = 0; $i < 76; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "29b3ad956e4873dd07a6c6ebec38a19770588994e38d663d44379e093747a40e";
    }
    const { isOpen, onClose, onComplete, onBack } = t0;
    const [currentQuestion, setCurrentQuestion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [answers, setAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showDropdown, setShowDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    if (!isOpen) {
        return null;
    }
    let currentAnswer;
    let currentQ;
    let filteredCountries;
    let handleAnswer;
    let t10;
    let t11;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    let t9;
    let totalQuestions;
    if ($[2] !== answers || $[3] !== currentQuestion || $[4] !== onBack || $[5] !== onClose || $[6] !== onComplete || $[7] !== searchQuery) {
        const questions = [
            {
                id: 1,
                type: "single-select",
                question: "How do you define yourself?",
                options: [
                    {
                        id: "women",
                        label: "Women"
                    },
                    {
                        id: "men",
                        label: "Men"
                    },
                    {
                        id: "non-binary",
                        label: "Non-Binary"
                    }
                ]
            },
            {
                id: 2,
                type: "single-select",
                question: "What's your relationship status?",
                options: [
                    {
                        id: "flying-solo",
                        label: "Flying Solo"
                    },
                    {
                        id: "married",
                        label: "Locked in For Life (Married)"
                    },
                    {
                        id: "complicated",
                        label: "It's a rollercoaster (Complicated)"
                    },
                    {
                        id: "taken",
                        label: "Taken"
                    },
                    {
                        id: "prefer-not-to-say",
                        label: "Prefer not to say"
                    }
                ]
            },
            {
                id: 3,
                type: "single-select",
                question: "What industry do you work in?",
                options: [
                    {
                        id: "not-working",
                        label: "Not Working"
                    },
                    {
                        id: "studying",
                        label: "Studying"
                    },
                    {
                        id: "healthcare",
                        label: "Healthcare"
                    },
                    {
                        id: "technology",
                        label: "Technology"
                    },
                    {
                        id: "retail",
                        label: "Retail"
                    },
                    {
                        id: "food",
                        label: "Food"
                    },
                    {
                        id: "services",
                        label: "Services"
                    },
                    {
                        id: "arts",
                        label: "Arts"
                    },
                    {
                        id: "others",
                        label: "Others"
                    }
                ]
            },
            {
                id: 4,
                type: "searchable-select",
                question: "What is your nationality?",
                subtitle: "Select your country of origin",
                placeholder: "Search your nationality"
            }
        ];
        totalQuestions = questions.length;
        const progress = (currentQuestion + 1) / totalQuestions * 100;
        let t12;
        if ($[23] !== searchQuery) {
            const countries = [
                "South African",
                "American",
                "British",
                "Canadian",
                "Australian",
                "German",
                "French",
                "Italian",
                "Spanish",
                "Dutch",
                "Swedish",
                "Norwegian",
                "Danish",
                "Finnish",
                "Polish",
                "Portuguese",
                "Greek",
                "Irish",
                "Swiss",
                "Austrian",
                "Belgian",
                "New Zealander",
                "Japanese",
                "Chinese",
                "Indian",
                "Brazilian",
                "Mexican",
                "Argentinian",
                "Chilean",
                "Other"
            ];
            t12 = countries.filter((country)=>country.toLowerCase().includes(searchQuery.toLowerCase()));
            $[23] = searchQuery;
            $[24] = t12;
        } else {
            t12 = $[24];
        }
        filteredCountries = t12;
        let t13;
        if ($[25] !== answers || $[26] !== currentQuestion || $[27] !== onComplete || $[28] !== totalQuestions) {
            t13 = (answerId)=>{
                const newAnswers = [
                    ...answers
                ];
                newAnswers[currentQuestion] = answerId;
                setAnswers(newAnswers);
                if (currentQuestion < totalQuestions - 1) {
                    setCurrentQuestion(currentQuestion + 1);
                    setSearchQuery("");
                    setShowDropdown(false);
                } else {
                    onComplete(newAnswers);
                }
            };
            $[25] = answers;
            $[26] = currentQuestion;
            $[27] = onComplete;
            $[28] = totalQuestions;
            $[29] = t13;
        } else {
            t13 = $[29];
        }
        handleAnswer = t13;
        let t14;
        if ($[30] !== answers || $[31] !== currentQuestion || $[32] !== onBack) {
            t14 = ()=>{
                if (currentQuestion > 0) {
                    setCurrentQuestion(currentQuestion - 1);
                    const newAnswers_0 = [
                        ...answers
                    ];
                    newAnswers_0.pop();
                    setAnswers(newAnswers_0);
                    setSearchQuery("");
                    setShowDropdown(false);
                } else {
                    if (onBack) {
                        onBack();
                    }
                }
            };
            $[30] = answers;
            $[31] = currentQuestion;
            $[32] = onBack;
            $[33] = t14;
        } else {
            t14 = $[33];
        }
        const handleBack = t14;
        currentQ = questions[currentQuestion];
        currentAnswer = answers[currentQuestion];
        t11 = "fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4";
        t6 = "bg-[#080814] rounded-xl w-full max-w-154 p-10 relative shadow-2xl max-h-[90vh] overflow-y-auto";
        let t15;
        if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
            t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-5 h-5",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M6 18L18 6M6 6l12 12"
                }, void 0, false, {
                    fileName: "[project]/components/modals/IdentityQuiz.jsx",
                    lineNumber: 187,
                    columnNumber: 92
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/modals/IdentityQuiz.jsx",
                lineNumber: 187,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[34] = t15;
        } else {
            t15 = $[34];
        }
        if ($[35] !== onClose) {
            t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onClose,
                className: "absolute top-10 right-10 text-[#D9D9D9] hover:text-[#F5F5F5] transition-colors z-10",
                "aria-label": "Close modal",
                children: t15
            }, void 0, false, {
                fileName: "[project]/components/modals/IdentityQuiz.jsx",
                lineNumber: 193,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[35] = onClose;
            $[36] = t7;
        } else {
            t7 = $[36];
        }
        let t16;
        let t17;
        if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
            t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-5 h-5",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M15 19l-7-7 7-7"
                }, void 0, false, {
                    fileName: "[project]/components/modals/IdentityQuiz.jsx",
                    lineNumber: 202,
                    columnNumber: 92
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/modals/IdentityQuiz.jsx",
                lineNumber: 202,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: "Back"
            }, void 0, false, {
                fileName: "[project]/components/modals/IdentityQuiz.jsx",
                lineNumber: 203,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[37] = t16;
            $[38] = t17;
        } else {
            t16 = $[37];
            t17 = $[38];
        }
        if ($[39] !== handleBack) {
            t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleBack,
                className: "absolute top-10 left-10 flex items-center gap-2 text-[#E0E0E0] hover:text-[#F5F5F5] transition-colors z-10",
                children: [
                    t16,
                    t17
                ]
            }, void 0, true, {
                fileName: "[project]/components/modals/IdentityQuiz.jsx",
                lineNumber: 211,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[39] = handleBack;
            $[40] = t8;
        } else {
            t8 = $[40];
        }
        if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
            t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold text-[#F5F5F5] mb-1 text-center",
                        children: "DinnersMatch"
                    }, void 0, false, {
                        fileName: "[project]/components/modals/IdentityQuiz.jsx",
                        lineNumber: 218,
                        columnNumber: 34
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-[#FFAA55] uppercase tracking-wide text-center",
                        children: "Identity"
                    }, void 0, false, {
                        fileName: "[project]/components/modals/IdentityQuiz.jsx",
                        lineNumber: 218,
                        columnNumber: 118
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/modals/IdentityQuiz.jsx",
                lineNumber: 218,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[41] = t9;
        } else {
            t9 = $[41];
        }
        const t18 = `${progress}%`;
        if ($[42] !== t18) {
            t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full bg-[#2F3A51] rounded-full h-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#FFAA55] h-1 rounded-full transition-all duration-300",
                        style: {
                            width: t18
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/modals/IdentityQuiz.jsx",
                        lineNumber: 225,
                        columnNumber: 89
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/modals/IdentityQuiz.jsx",
                    lineNumber: 225,
                    columnNumber: 35
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/modals/IdentityQuiz.jsx",
                lineNumber: 225,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[42] = t18;
            $[43] = t10;
        } else {
            t10 = $[43];
        }
        t2 = "mb-8";
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-2xl md:text-3xl font-medium text-[#F5F5F5] text-center mb-4",
            children: currentQ.question
        }, void 0, false, {
            fileName: "[project]/components/modals/IdentityQuiz.jsx",
            lineNumber: 234,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t4 = currentQ.subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[#E0E0E0] text-center mb-6",
            children: currentQ.subtitle
        }, void 0, false, {
            fileName: "[project]/components/modals/IdentityQuiz.jsx",
            lineNumber: 235,
            columnNumber: 31
        }, ("TURBOPACK compile-time value", void 0));
        t5 = currentQ.type === "single-select" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4  ",
            children: currentQ.options.map((option)=>{
                const isSelected = currentAnswer === option.id;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>handleAnswer(option.id),
                    className: `w-full text-center px-6 py-4 rounded-lg border transition-all ${isSelected ? "bg-[#111121] border-[#F5F5F5] text-[#F5F5F5]" : "bg-[#111121] border-gray-900 text-[#E0E0E0] hover:border-[#FFAA55]"}`,
                    children: option.label
                }, option.id, false, {
                    fileName: "[project]/components/modals/IdentityQuiz.jsx",
                    lineNumber: 238,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            })
        }, void 0, false, {
            fileName: "[project]/components/modals/IdentityQuiz.jsx",
            lineNumber: 236,
            columnNumber: 47
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = answers;
        $[3] = currentQuestion;
        $[4] = onBack;
        $[5] = onClose;
        $[6] = onComplete;
        $[7] = searchQuery;
        $[8] = currentAnswer;
        $[9] = currentQ;
        $[10] = filteredCountries;
        $[11] = handleAnswer;
        $[12] = t10;
        $[13] = t11;
        $[14] = t2;
        $[15] = t3;
        $[16] = t4;
        $[17] = t5;
        $[18] = t6;
        $[19] = t7;
        $[20] = t8;
        $[21] = t9;
        $[22] = totalQuestions;
    } else {
        currentAnswer = $[8];
        currentQ = $[9];
        filteredCountries = $[10];
        handleAnswer = $[11];
        t10 = $[12];
        t11 = $[13];
        t2 = $[14];
        t3 = $[15];
        t4 = $[16];
        t5 = $[17];
        t6 = $[18];
        t7 = $[19];
        t8 = $[20];
        t9 = $[21];
        totalQuestions = $[22];
    }
    let t12;
    if ($[44] !== answers || $[45] !== currentAnswer || $[46] !== currentQ.placeholder || $[47] !== currentQ.type || $[48] !== currentQuestion || $[49] !== filteredCountries || $[50] !== handleAnswer || $[51] !== onComplete || $[52] !== searchQuery || $[53] !== showDropdown || $[54] !== totalQuestions) {
        t12 = currentQ.type === "searchable-select" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            value: searchQuery,
                            onChange: (e)=>{
                                setSearchQuery(e.target.value);
                                setShowDropdown(true);
                            },
                            onFocus: ()=>setShowDropdown(true),
                            placeholder: currentQ.placeholder,
                            className: "w-full px-4 py-3 bg-[#111121] border border-[#2F3A51] rounded-lg text-[#F5F5F5] placeholder-[#E0E0E0] focus:outline-none focus:border-[#FFAA55] pr-12"
                        }, void 0, false, {
                            fileName: "[project]/components/modals/IdentityQuiz.jsx",
                            lineNumber: 280,
                            columnNumber: 104
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#E0E0E0] pointer-events-none",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M19 9l-7 7-7-7"
                            }, void 0, false, {
                                fileName: "[project]/components/modals/IdentityQuiz.jsx",
                                lineNumber: 283,
                                columnNumber: 405
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/modals/IdentityQuiz.jsx",
                            lineNumber: 283,
                            columnNumber: 249
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/modals/IdentityQuiz.jsx",
                    lineNumber: 280,
                    columnNumber: 78
                }, ("TURBOPACK compile-time value", void 0)),
                showDropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute z-20 w-full mt-2 bg-[#111121] border border-[#2F3A51] rounded-lg max-h-60 overflow-y-auto",
                    children: filteredCountries.length > 0 ? filteredCountries.map((country_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                setSearchQuery(country_0);
                                setShowDropdown(false);
                                handleAnswer(country_0);
                            },
                            className: "w-full text-left px-4 py-3 text-[#E0E0E0] hover:bg-[#080814] hover:text-[#F5F5F5] transition-colors",
                            children: country_0
                        }, country_0, false, {
                            fileName: "[project]/components/modals/IdentityQuiz.jsx",
                            lineNumber: 283,
                            columnNumber: 705
                        }, ("TURBOPACK compile-time value", void 0))) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 py-3 text-[#E0E0E0]",
                        children: "No results found"
                    }, void 0, false, {
                        fileName: "[project]/components/modals/IdentityQuiz.jsx",
                        lineNumber: 287,
                        columnNumber: 148
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/modals/IdentityQuiz.jsx",
                    lineNumber: 283,
                    columnNumber: 522
                }, ("TURBOPACK compile-time value", void 0)),
                currentAnswer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>{
                        if (currentQuestion < totalQuestions - 1) {
                            setCurrentQuestion(currentQuestion + 1);
                            setSearchQuery("");
                            setShowDropdown(false);
                        } else {
                            onComplete(answers);
                        }
                    },
                    className: "w-full mt-4 bg-[#FFAA55] text-white py-4 rounded-lg font-bold text-sm uppercase tracking-wide hover:bg-[#FF9955] transition-colors",
                    children: "Continue"
                }, void 0, false, {
                    fileName: "[project]/components/modals/IdentityQuiz.jsx",
                    lineNumber: 287,
                    columnNumber: 238
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/modals/IdentityQuiz.jsx",
            lineNumber: 280,
            columnNumber: 52
        }, ("TURBOPACK compile-time value", void 0));
        $[44] = answers;
        $[45] = currentAnswer;
        $[46] = currentQ.placeholder;
        $[47] = currentQ.type;
        $[48] = currentQuestion;
        $[49] = filteredCountries;
        $[50] = handleAnswer;
        $[51] = onComplete;
        $[52] = searchQuery;
        $[53] = showDropdown;
        $[54] = totalQuestions;
        $[55] = t12;
    } else {
        t12 = $[55];
    }
    let t13;
    if ($[56] !== t12 || $[57] !== t2 || $[58] !== t3 || $[59] !== t4 || $[60] !== t5) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t2,
            children: [
                t3,
                t4,
                t5,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/components/modals/IdentityQuiz.jsx",
            lineNumber: 313,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[56] = t12;
        $[57] = t2;
        $[58] = t3;
        $[59] = t4;
        $[60] = t5;
        $[61] = t13;
    } else {
        t13 = $[61];
    }
    const t14 = currentQuestion + 1;
    let t15;
    if ($[62] !== t14 || $[63] !== totalQuestions) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center text-[#E0E0E0] text-sm",
                children: [
                    "Question ",
                    t14,
                    " of ",
                    totalQuestions
                ]
            }, void 0, true, {
                fileName: "[project]/components/modals/IdentityQuiz.jsx",
                lineNumber: 326,
                columnNumber: 16
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/modals/IdentityQuiz.jsx",
            lineNumber: 326,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[62] = t14;
        $[63] = totalQuestions;
        $[64] = t15;
    } else {
        t15 = $[64];
    }
    let t16;
    if ($[65] !== t10 || $[66] !== t13 || $[67] !== t15 || $[68] !== t6 || $[69] !== t7 || $[70] !== t8 || $[71] !== t9) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t6,
            children: [
                t7,
                t8,
                t9,
                t10,
                t13,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/components/modals/IdentityQuiz.jsx",
            lineNumber: 335,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[65] = t10;
        $[66] = t13;
        $[67] = t15;
        $[68] = t6;
        $[69] = t7;
        $[70] = t8;
        $[71] = t9;
        $[72] = t16;
    } else {
        t16 = $[72];
    }
    let t17;
    if ($[73] !== t11 || $[74] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t11,
            children: t16
        }, void 0, false, {
            fileName: "[project]/components/modals/IdentityQuiz.jsx",
            lineNumber: 349,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[73] = t11;
        $[74] = t16;
        $[75] = t17;
    } else {
        t17 = $[75];
    }
    return t17;
};
_s(IdentityQuiz, "x90EJZo+Yh2kJuBYIiTCqiKqmkg=");
_c = IdentityQuiz;
const __TURBOPACK__default__export__ = IdentityQuiz;
var _c;
__turbopack_context__.k.register(_c, "IdentityQuiz");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/modals/QuizResult.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
;
;
const QuizResult = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(18);
    if ($[0] !== "b88b1adf282acb11c652c80d00474d792845ae94dedfe5b7674c6f05e3f05707") {
        for(let $i = 0; $i < 18; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b88b1adf282acb11c652c80d00474d792845ae94dedfe5b7674c6f05e3f05707";
    }
    const { isOpen, onClose, compatibilityScore: t1, onContinue } = t0;
    const compatibilityScore = t1 === undefined ? 90 : t1;
    if (!isOpen) {
        return null;
    }
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-6 h-6",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M6 18L18 6M6 6l12 12"
            }, void 0, false, {
                fileName: "[project]/components/modals/QuizResult.jsx",
                lineNumber: 25,
                columnNumber: 89
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/modals/QuizResult.jsx",
            lineNumber: 25,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t2;
    } else {
        t2 = $[1];
    }
    let t3;
    if ($[2] !== onClose) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onClose,
            className: "absolute top-6 right-6 text-white/70 hover:text-white transition-colors",
            "aria-label": "Close modal",
            children: t2
        }, void 0, false, {
            fileName: "[project]/components/modals/QuizResult.jsx",
            lineNumber: 32,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = onClose;
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-2xl font-bold text-white mb-8",
            children: "DinnersMatch"
        }, void 0, false, {
            fileName: "[project]/components/modals/QuizResult.jsx",
            lineNumber: 40,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    let t5;
    if ($[5] !== compatibilityScore) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-7xl font-bold text-[#F97315] mb-4",
            children: [
                compatibilityScore,
                "%"
            ]
        }, void 0, true, {
            fileName: "[project]/components/modals/QuizResult.jsx",
            lineNumber: 47,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = compatibilityScore;
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-400 text-sm",
            children: "The percentage of members you're compatible with"
        }, void 0, false, {
            fileName: "[project]/components/modals/QuizResult.jsx",
            lineNumber: 55,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] !== t5) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-6",
            children: [
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/components/modals/QuizResult.jsx",
            lineNumber: 62,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = t5;
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    let t8;
    if ($[10] !== onContinue) {
        t8 = onContinue && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onContinue,
            className: "w-full bg-[#F97315] text-white py-4 rounded-lg font-bold text-sm uppercase tracking-wide hover:bg-[#EA580C] transition-colors",
            children: "Continue"
        }, void 0, false, {
            fileName: "[project]/components/modals/QuizResult.jsx",
            lineNumber: 70,
            columnNumber: 24
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = onContinue;
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    let t9;
    if ($[12] !== t7 || $[13] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center",
            children: [
                t4,
                t7,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/components/modals/QuizResult.jsx",
            lineNumber: 78,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = t7;
        $[13] = t8;
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    let t10;
    if ($[15] !== t3 || $[16] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#1a1f2e] rounded-2xl w-full max-w-md p-8 relative shadow-2xl",
                children: [
                    t3,
                    t9
                ]
            }, void 0, true, {
                fileName: "[project]/components/modals/QuizResult.jsx",
                lineNumber: 87,
                columnNumber: 113
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/modals/QuizResult.jsx",
            lineNumber: 87,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = t3;
        $[16] = t9;
        $[17] = t10;
    } else {
        t10 = $[17];
    }
    return t10;
};
_c = QuizResult;
const __TURBOPACK__default__export__ = QuizResult;
var _c;
__turbopack_context__.k.register(_c, "QuizResult");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/modals/SocialLoginModal.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
;
;
const SocialLoginModal = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(21);
    if ($[0] !== "453ddd1232e649c1b422ac9a0cecca9342a3c320bd65c178f7f8172d5c47a924") {
        for(let $i = 0; $i < 21; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "453ddd1232e649c1b422ac9a0cecca9342a3c320bd65c178f7f8172d5c47a924";
    }
    const { isOpen, onClose, onSelectMethod, onBackToOptions, onSignIn } = t0;
    if (!isOpen) {
        return null;
    }
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            id: "apple",
            label: "Continue with Apple",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-6 h-6",
                fill: "currentColor",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01.01zm-3.95-18.4c1.5-1.83 4.02-2.45 6.15-1.3-.25 2.16-1.5 3.84-3.15 4.9-1.35-.78-2.7-2.05-3-3.6z"
                }, void 0, false, {
                    fileName: "[project]/components/modals/SocialLoginModal.jsx",
                    lineNumber: 28,
                    columnNumber: 78
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/modals/SocialLoginModal.jsx",
                lineNumber: 28,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        };
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            id: "google",
            label: "Continue with Google",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-6 h-6",
                viewBox: "0 0 24 24",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        fill: "#4285F4",
                        d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    }, void 0, false, {
                        fileName: "[project]/components/modals/SocialLoginModal.jsx",
                        lineNumber: 39,
                        columnNumber: 58
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        fill: "#34A853",
                        d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    }, void 0, false, {
                        fileName: "[project]/components/modals/SocialLoginModal.jsx",
                        lineNumber: 39,
                        columnNumber: 205
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        fill: "#FBBC05",
                        d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    }, void 0, false, {
                        fileName: "[project]/components/modals/SocialLoginModal.jsx",
                        lineNumber: 39,
                        columnNumber: 366
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        fill: "#EA4335",
                        d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    }, void 0, false, {
                        fileName: "[project]/components/modals/SocialLoginModal.jsx",
                        lineNumber: 39,
                        columnNumber: 519
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/modals/SocialLoginModal.jsx",
                lineNumber: 39,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        };
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = [
            t1,
            t2,
            {
                id: "email",
                label: "Continue with Email",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "w-6 h-6",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    }, void 0, false, {
                        fileName: "[project]/components/modals/SocialLoginModal.jsx",
                        lineNumber: 50,
                        columnNumber: 92
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/modals/SocialLoginModal.jsx",
                    lineNumber: 50,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }
        ];
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    const socialOptions = t3;
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-5 h-5",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M6 18L18 6M6 6l12 12"
            }, void 0, false, {
                fileName: "[project]/components/modals/SocialLoginModal.jsx",
                lineNumber: 59,
                columnNumber: 89
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/modals/SocialLoginModal.jsx",
            lineNumber: 59,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    let t5;
    if ($[5] !== onClose) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onClose,
            className: "absolute top-10 right-10 text-[#D9D9D9] hover:text-[#F5F5F5] transition-colors",
            "aria-label": "Close modal",
            children: t4
        }, void 0, false, {
            fileName: "[project]/components/modals/SocialLoginModal.jsx",
            lineNumber: 66,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = onClose;
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-10 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl font-bold text-[#F5F5F5] mb-2",
                    children: "DinnersMatch"
                }, void 0, false, {
                    fileName: "[project]/components/modals/SocialLoginModal.jsx",
                    lineNumber: 74,
                    columnNumber: 45
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[#E0E0E0]",
                    children: "Let's get started."
                }, void 0, false, {
                    fileName: "[project]/components/modals/SocialLoginModal.jsx",
                    lineNumber: 74,
                    columnNumber: 117
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/modals/SocialLoginModal.jsx",
            lineNumber: 74,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] !== onSelectMethod) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4 flex flex-col items-center mb-10",
            children: socialOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>onSelectMethod(option.id),
                    className: " bg-[#111121] border flex justify-center\n               items-center border-gray-700  w-62.5\n                rounded-lg py-5  hover:border-[#FFAA55] transition-colors",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[#F5F5F5]",
                                children: option.icon
                            }, void 0, false, {
                                fileName: "[project]/components/modals/SocialLoginModal.jsx",
                                lineNumber: 81,
                                columnNumber: 376
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#F5F5F5] font-medium flex-1 text-left",
                                children: option.label
                            }, void 0, false, {
                                fileName: "[project]/components/modals/SocialLoginModal.jsx",
                                lineNumber: 81,
                                columnNumber: 427
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/modals/SocialLoginModal.jsx",
                        lineNumber: 81,
                        columnNumber: 348
                    }, ("TURBOPACK compile-time value", void 0))
                }, option.id, false, {
                    fileName: "[project]/components/modals/SocialLoginModal.jsx",
                    lineNumber: 81,
                    columnNumber: 99
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false, {
            fileName: "[project]/components/modals/SocialLoginModal.jsx",
            lineNumber: 81,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = onSelectMethod;
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    let t8;
    if ($[10] !== onBackToOptions) {
        t8 = onBackToOptions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onBackToOptions,
            className: "text-[#E0E0E0] hover:text-[#F5F5F5] transition-colors text-sm",
            children: "Back to Options"
        }, void 0, false, {
            fileName: "[project]/components/modals/SocialLoginModal.jsx",
            lineNumber: 89,
            columnNumber: 29
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = onBackToOptions;
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    let t9;
    if ($[12] !== onSignIn) {
        t9 = onSignIn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[#E0E0E0] text-sm",
            children: [
                "Already have an account?",
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onSignIn,
                    className: "text-[#E0E0E0] hover:underline",
                    children: "Sign in"
                }, void 0, false, {
                    fileName: "[project]/components/modals/SocialLoginModal.jsx",
                    lineNumber: 97,
                    columnNumber: 89
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/modals/SocialLoginModal.jsx",
            lineNumber: 97,
            columnNumber: 22
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = onSignIn;
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    let t10;
    if ($[14] !== t8 || $[15] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2 text-center",
            children: [
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/components/modals/SocialLoginModal.jsx",
            lineNumber: 105,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = t8;
        $[15] = t9;
        $[16] = t10;
    } else {
        t10 = $[16];
    }
    let t11;
    if ($[17] !== t10 || $[18] !== t5 || $[19] !== t7) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#080814] rounded-xl w-full max-w-154 p-10 relative shadow-2xl",
                children: [
                    t5,
                    t6,
                    t7,
                    t10
                ]
            }, void 0, true, {
                fileName: "[project]/components/modals/SocialLoginModal.jsx",
                lineNumber: 114,
                columnNumber: 113
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/modals/SocialLoginModal.jsx",
            lineNumber: 114,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = t10;
        $[18] = t5;
        $[19] = t7;
        $[20] = t11;
    } else {
        t11 = $[20];
    }
    return t11;
};
_c = SocialLoginModal;
const __TURBOPACK__default__export__ = SocialLoginModal;
var _c;
__turbopack_context__.k.register(_c, "SocialLoginModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/modals/EmailConfirmationModal.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const EmailConfirmationModal = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(38);
    if ($[0] !== "41a42373f26ce2f8c058368c885d20e99b9b38fe8ca05bb43240cfc0dff2d55d") {
        for(let $i = 0; $i < 38; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "41a42373f26ce2f8c058368c885d20e99b9b38fe8ca05bb43240cfc0dff2d55d";
    }
    const { isOpen, onClose, onContinue, onBack } = t0;
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [confirmEmail, setConfirmEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    if (!isOpen) {
        return null;
    }
    let t1;
    if ($[1] !== confirmEmail || $[2] !== email || $[3] !== onContinue) {
        t1 = (e)=>{
            e.preventDefault();
            if (email === confirmEmail && email) {
                onContinue(email);
            }
        };
        $[1] = confirmEmail;
        $[2] = email;
        $[3] = onContinue;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    const handleSubmit = t1;
    let t2;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-5 h-5",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M6 18L18 6M6 6l12 12"
            }, void 0, false, {
                fileName: "[project]/components/modals/EmailConfirmationModal.jsx",
                lineNumber: 42,
                columnNumber: 89
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/modals/EmailConfirmationModal.jsx",
            lineNumber: 42,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    let t3;
    if ($[6] !== onClose) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onClose,
            className: "absolute top-10 right-10 text-[#D9D9D9] hover:text-[#F5F5F5] transition-colors",
            "aria-label": "Close modal",
            children: t2
        }, void 0, false, {
            fileName: "[project]/components/modals/EmailConfirmationModal.jsx",
            lineNumber: 49,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = onClose;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== onBack) {
        t4 = onBack && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onBack,
            className: "absolute top-10 left-10 text-[#E0E0E0] hover:text-[#F5F5F5] transition-colors",
            "aria-label": "Go back",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-6 h-6",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M15 19l-7-7 7-7"
                }, void 0, false, {
                    fileName: "[project]/components/modals/EmailConfirmationModal.jsx",
                    lineNumber: 57,
                    columnNumber: 235
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/modals/EmailConfirmationModal.jsx",
                lineNumber: 57,
                columnNumber: 156
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/modals/EmailConfirmationModal.jsx",
            lineNumber: 57,
            columnNumber: 20
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = onBack;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-10 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl font-bold text-[#F5F5F5] mb-2",
                    children: "DinnersMatch"
                }, void 0, false, {
                    fileName: "[project]/components/modals/EmailConfirmationModal.jsx",
                    lineNumber: 65,
                    columnNumber: 45
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[#E0E0E0]",
                    children: "Let's get started."
                }, void 0, false, {
                    fileName: "[project]/components/modals/EmailConfirmationModal.jsx",
                    lineNumber: 65,
                    columnNumber: 117
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/modals/EmailConfirmationModal.jsx",
            lineNumber: 65,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = (e_0)=>setEmail(e_0.target.value);
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] !== email) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "email",
                value: email,
                onChange: t6,
                placeholder: "Enter your email",
                className: "w-full px-4 py-3\n               bg-[#111121] border\n                border-[#2F3A51] rounded-lg text-[#F5F5F5] placeholder-zinc-600 focus:outline-none focus:border-[#FFAA55] transition-colors",
                required: true
            }, void 0, false, {
                fileName: "[project]/components/modals/EmailConfirmationModal.jsx",
                lineNumber: 79,
                columnNumber: 15
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/modals/EmailConfirmationModal.jsx",
            lineNumber: 79,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = email;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    let t8;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = (e_1)=>setConfirmEmail(e_1.target.value);
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    let t9;
    if ($[15] !== confirmEmail) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "email",
                value: confirmEmail,
                onChange: t8,
                placeholder: "Confirm your email",
                className: "w-full px-4 py-3 bg-[#111121]\n               border border-[#2F3A51] rounded-lg text-[#F5F5F5] placeholder-zinc-600 focus:outline-none focus:border-[#FFAA55] transition-colors",
                required: true
            }, void 0, false, {
                fileName: "[project]/components/modals/EmailConfirmationModal.jsx",
                lineNumber: 94,
                columnNumber: 15
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/modals/EmailConfirmationModal.jsx",
            lineNumber: 94,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = confirmEmail;
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    let t10;
    if ($[17] !== confirmEmail || $[18] !== email) {
        t10 = email && confirmEmail && email !== confirmEmail && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-red-500 text-sm",
            children: "Emails do not match"
        }, void 0, false, {
            fileName: "[project]/components/modals/EmailConfirmationModal.jsx",
            lineNumber: 102,
            columnNumber: 62
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = confirmEmail;
        $[18] = email;
        $[19] = t10;
    } else {
        t10 = $[19];
    }
    let t11;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "submit",
            className: "w-full bg-[#FFAA55] text-white py-4 rounded-lg font-medium text-sm uppercase tracking-wide hover:bg-[#FF9955] transition-colors",
            children: "Continue"
        }, void 0, false, {
            fileName: "[project]/components/modals/EmailConfirmationModal.jsx",
            lineNumber: 111,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[20] = t11;
    } else {
        t11 = $[20];
    }
    let t12;
    if ($[21] !== handleSubmit || $[22] !== t10 || $[23] !== t7 || $[24] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            className: "space-y-4",
            children: [
                t7,
                t9,
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/components/modals/EmailConfirmationModal.jsx",
            lineNumber: 118,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[21] = handleSubmit;
        $[22] = t10;
        $[23] = t7;
        $[24] = t9;
        $[25] = t12;
    } else {
        t12 = $[25];
    }
    let t13;
    if ($[26] !== onBack) {
        t13 = onBack && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onBack,
            className: "text-[#E0E0E0] hover:text-[#F5F5F5] transition-colors text-sm block w-full",
            children: "Back to Options"
        }, void 0, false, {
            fileName: "[project]/components/modals/EmailConfirmationModal.jsx",
            lineNumber: 129,
            columnNumber: 21
        }, ("TURBOPACK compile-time value", void 0));
        $[26] = onBack;
        $[27] = t13;
    } else {
        t13 = $[27];
    }
    let t14;
    if ($[28] !== onBack) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[#E0E0E0] text-sm",
            children: [
                "Already have an account?",
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onBack,
                    className: "text-[#E0E0E0] hover:underline",
                    children: "Sign in"
                }, void 0, false, {
                    fileName: "[project]/components/modals/EmailConfirmationModal.jsx",
                    lineNumber: 137,
                    columnNumber: 78
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/modals/EmailConfirmationModal.jsx",
            lineNumber: 137,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[28] = onBack;
        $[29] = t14;
    } else {
        t14 = $[29];
    }
    let t15;
    if ($[30] !== t13 || $[31] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-10 space-y-2 text-center",
            children: [
                t13,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/components/modals/EmailConfirmationModal.jsx",
            lineNumber: 145,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[30] = t13;
        $[31] = t14;
        $[32] = t15;
    } else {
        t15 = $[32];
    }
    let t16;
    if ($[33] !== t12 || $[34] !== t15 || $[35] !== t3 || $[36] !== t4) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#080814] rounded-xl w-full max-w-154 p-10 relative shadow-2xl",
                children: [
                    t3,
                    t4,
                    t5,
                    t12,
                    t15
                ]
            }, void 0, true, {
                fileName: "[project]/components/modals/EmailConfirmationModal.jsx",
                lineNumber: 154,
                columnNumber: 113
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/modals/EmailConfirmationModal.jsx",
            lineNumber: 154,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[33] = t12;
        $[34] = t15;
        $[35] = t3;
        $[36] = t4;
        $[37] = t16;
    } else {
        t16 = $[37];
    }
    return t16;
};
_s(EmailConfirmationModal, "8PeUN5IMdwTFktyMvwgWzOR3oEE=");
_c = EmailConfirmationModal;
const __TURBOPACK__default__export__ = EmailConfirmationModal;
var _c;
__turbopack_context__.k.register(_c, "EmailConfirmationModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/modals/PasswordCreationModal.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const PasswordCreationModal = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(51);
    if ($[0] !== "c05bed248bcbf5f98cee4565e8ee1de00b238d3ad52e4f0c7b9cef3bbaa990a3") {
        for(let $i = 0; $i < 51; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c05bed248bcbf5f98cee4565e8ee1de00b238d3ad52e4f0c7b9cef3bbaa990a3";
    }
    const { isOpen, onClose, onContinue, onBack } = t0;
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [confirmPassword, setConfirmPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showPassword, setShowPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showConfirmPassword, setShowConfirmPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    if (!isOpen) {
        return null;
    }
    let t1;
    if ($[1] !== confirmPassword || $[2] !== onContinue || $[3] !== password) {
        t1 = (e)=>{
            e.preventDefault();
            if (password === confirmPassword && password) {
                onContinue(password);
            }
        };
        $[1] = confirmPassword;
        $[2] = onContinue;
        $[3] = password;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    const handleSubmit = t1;
    let t2;
    if ($[5] !== onClose) {
        t2 = onClose && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onClose,
            className: "absolute top-10 right-10 text-[#D9D9D9] hover:text-[#F5F5F5] transition-colors",
            "aria-label": "Close modal",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-5 h-5",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M6 18L18 6M6 6l12 12"
                }, void 0, false, {
                    fileName: "[project]/components/modals/PasswordCreationModal.jsx",
                    lineNumber: 44,
                    columnNumber: 242
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/modals/PasswordCreationModal.jsx",
                lineNumber: 44,
                columnNumber: 163
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/modals/PasswordCreationModal.jsx",
            lineNumber: 44,
            columnNumber: 21
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = onClose;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] !== onBack) {
        t3 = onBack && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onBack,
            className: "absolute top-10 left-10 text-[#E0E0E0] hover:text-[#F5F5F5] transition-colors",
            "aria-label": "Go back",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-6 h-6",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M15 19l-7-7 7-7"
                }, void 0, false, {
                    fileName: "[project]/components/modals/PasswordCreationModal.jsx",
                    lineNumber: 52,
                    columnNumber: 235
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/modals/PasswordCreationModal.jsx",
                lineNumber: 52,
                columnNumber: 156
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/modals/PasswordCreationModal.jsx",
            lineNumber: 52,
            columnNumber: 20
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = onBack;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    let t4;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-10 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl font-bold text-[#F5F5F5] mb-2",
                    children: "DinnersMatch"
                }, void 0, false, {
                    fileName: "[project]/components/modals/PasswordCreationModal.jsx",
                    lineNumber: 60,
                    columnNumber: 45
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[#E0E0E0]",
                    children: "Let's get started."
                }, void 0, false, {
                    fileName: "[project]/components/modals/PasswordCreationModal.jsx",
                    lineNumber: 60,
                    columnNumber: 117
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/modals/PasswordCreationModal.jsx",
            lineNumber: 60,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    const t5 = showPassword ? "text" : "password";
    let t6;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = (e_0)=>setPassword(e_0.target.value);
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] !== password || $[12] !== t5) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: t5,
            value: password,
            onChange: t6,
            placeholder: "Create password",
            className: "w-full px-4 py-3 bg-[#111121] border border-[#2F3A51] rounded-lg text-[#F5F5F5] placeholder-zinc-600 focus:outline-none focus:border-[#FFAA55] transition-colors pr-12",
            required: true
        }, void 0, false, {
            fileName: "[project]/components/modals/PasswordCreationModal.jsx",
            lineNumber: 75,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = password;
        $[12] = t5;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    let t8;
    if ($[14] !== showPassword) {
        t8 = ()=>setShowPassword(!showPassword);
        $[14] = showPassword;
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    let t9;
    if ($[16] !== showPassword) {
        t9 = showPassword ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-5 h-5",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
            }, void 0, false, {
                fileName: "[project]/components/modals/PasswordCreationModal.jsx",
                lineNumber: 92,
                columnNumber: 104
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/modals/PasswordCreationModal.jsx",
            lineNumber: 92,
            columnNumber: 25
        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-5 h-5",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                }, void 0, false, {
                    fileName: "[project]/components/modals/PasswordCreationModal.jsx",
                    lineNumber: 92,
                    columnNumber: 562
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                }, void 0, false, {
                    fileName: "[project]/components/modals/PasswordCreationModal.jsx",
                    lineNumber: 92,
                    columnNumber: 668
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/modals/PasswordCreationModal.jsx",
            lineNumber: 92,
            columnNumber: 483
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = showPassword;
        $[17] = t9;
    } else {
        t9 = $[17];
    }
    let t10;
    if ($[18] !== t8 || $[19] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: t8,
            className: "absolute right-4 top-1/2 -translate-y-1/2 text-[#E0E0E0] hover:text-[#F5F5F5] transition-colors",
            children: t9
        }, void 0, false, {
            fileName: "[project]/components/modals/PasswordCreationModal.jsx",
            lineNumber: 100,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[18] = t8;
        $[19] = t9;
        $[20] = t10;
    } else {
        t10 = $[20];
    }
    let t11;
    if ($[21] !== t10 || $[22] !== t7) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                t7,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/components/modals/PasswordCreationModal.jsx",
            lineNumber: 109,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[21] = t10;
        $[22] = t7;
        $[23] = t11;
    } else {
        t11 = $[23];
    }
    const t12 = showConfirmPassword ? "text" : "password";
    let t13;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = (e_1)=>setConfirmPassword(e_1.target.value);
        $[24] = t13;
    } else {
        t13 = $[24];
    }
    let t14;
    if ($[25] !== confirmPassword || $[26] !== t12) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: t12,
            value: confirmPassword,
            onChange: t13,
            placeholder: "Confirm password",
            className: "w-full px-4 py-3 bg-[#111121] border border-[#2F3A51] rounded-lg text-[#F5F5F5] placeholder-zinc-600 focus:outline-none focus:border-[#FFAA55] transition-colors pr-12",
            required: true
        }, void 0, false, {
            fileName: "[project]/components/modals/PasswordCreationModal.jsx",
            lineNumber: 126,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[25] = confirmPassword;
        $[26] = t12;
        $[27] = t14;
    } else {
        t14 = $[27];
    }
    let t15;
    if ($[28] !== showConfirmPassword) {
        t15 = ()=>setShowConfirmPassword(!showConfirmPassword);
        $[28] = showConfirmPassword;
        $[29] = t15;
    } else {
        t15 = $[29];
    }
    let t16;
    if ($[30] !== showConfirmPassword) {
        t16 = showConfirmPassword ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-5 h-5",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
            }, void 0, false, {
                fileName: "[project]/components/modals/PasswordCreationModal.jsx",
                lineNumber: 143,
                columnNumber: 112
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/modals/PasswordCreationModal.jsx",
            lineNumber: 143,
            columnNumber: 33
        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-5 h-5",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                }, void 0, false, {
                    fileName: "[project]/components/modals/PasswordCreationModal.jsx",
                    lineNumber: 143,
                    columnNumber: 570
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                }, void 0, false, {
                    fileName: "[project]/components/modals/PasswordCreationModal.jsx",
                    lineNumber: 143,
                    columnNumber: 676
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/modals/PasswordCreationModal.jsx",
            lineNumber: 143,
            columnNumber: 491
        }, ("TURBOPACK compile-time value", void 0));
        $[30] = showConfirmPassword;
        $[31] = t16;
    } else {
        t16 = $[31];
    }
    let t17;
    if ($[32] !== t15 || $[33] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: t15,
            className: "absolute right-4 top-1/2 -translate-y-1/2 text-[#E0E0E0] hover:text-[#F5F5F5] transition-colors",
            children: t16
        }, void 0, false, {
            fileName: "[project]/components/modals/PasswordCreationModal.jsx",
            lineNumber: 151,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[32] = t15;
        $[33] = t16;
        $[34] = t17;
    } else {
        t17 = $[34];
    }
    let t18;
    if ($[35] !== t14 || $[36] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                t14,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/components/modals/PasswordCreationModal.jsx",
            lineNumber: 160,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[35] = t14;
        $[36] = t17;
        $[37] = t18;
    } else {
        t18 = $[37];
    }
    let t19;
    if ($[38] !== confirmPassword || $[39] !== password) {
        t19 = password && confirmPassword && password !== confirmPassword && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-red-500 text-sm",
            children: "Passwords do not match"
        }, void 0, false, {
            fileName: "[project]/components/modals/PasswordCreationModal.jsx",
            lineNumber: 169,
            columnNumber: 74
        }, ("TURBOPACK compile-time value", void 0));
        $[38] = confirmPassword;
        $[39] = password;
        $[40] = t19;
    } else {
        t19 = $[40];
    }
    let t20;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "submit",
            className: "w-full bg-[#FFAA55] text-white py-4 rounded-lg font-medium text-sm uppercase tracking-wide hover:bg-[#FF9955] transition-colors",
            children: "Continue"
        }, void 0, false, {
            fileName: "[project]/components/modals/PasswordCreationModal.jsx",
            lineNumber: 178,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[41] = t20;
    } else {
        t20 = $[41];
    }
    let t21;
    if ($[42] !== handleSubmit || $[43] !== t11 || $[44] !== t18 || $[45] !== t19) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            className: "space-y-4",
            children: [
                t11,
                t18,
                t19,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/components/modals/PasswordCreationModal.jsx",
            lineNumber: 185,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[42] = handleSubmit;
        $[43] = t11;
        $[44] = t18;
        $[45] = t19;
        $[46] = t21;
    } else {
        t21 = $[46];
    }
    let t22;
    if ($[47] !== t2 || $[48] !== t21 || $[49] !== t3) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#080814] rounded-xl w-full max-w-154 p-10 relative shadow-2xl",
                children: [
                    t2,
                    t3,
                    t4,
                    t21
                ]
            }, void 0, true, {
                fileName: "[project]/components/modals/PasswordCreationModal.jsx",
                lineNumber: 196,
                columnNumber: 113
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/modals/PasswordCreationModal.jsx",
            lineNumber: 196,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[47] = t2;
        $[48] = t21;
        $[49] = t3;
        $[50] = t22;
    } else {
        t22 = $[50];
    }
    return t22;
};
_s(PasswordCreationModal, "1VVPTnqdKiYQisA/3JTUd+coufU=");
_c = PasswordCreationModal;
const __TURBOPACK__default__export__ = PasswordCreationModal;
var _c;
__turbopack_context__.k.register(_c, "PasswordCreationModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/modals/UserInfoModal.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const UserInfoModal = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(25);
    if ($[0] !== "1d06873af28841359552b4937fc94532dccdcc966a1b800fc08af44ad39a6610") {
        for(let $i = 0; $i < 25; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1d06873af28841359552b4937fc94532dccdcc966a1b800fc08af44ad39a6610";
    }
    const { isOpen, onClose, onContinue, onBack } = t0;
    const [firstName, setFirstName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [mobileNumber, setMobileNumber] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    if (!isOpen) {
        return null;
    }
    let t1;
    if ($[1] !== firstName || $[2] !== mobileNumber || $[3] !== onContinue) {
        t1 = (e)=>{
            e.preventDefault();
            if (firstName && mobileNumber) {
                onContinue({
                    firstName,
                    mobileNumber
                });
            }
        };
        $[1] = firstName;
        $[2] = mobileNumber;
        $[3] = onContinue;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    const handleSubmit = t1;
    let t2;
    if ($[5] !== onClose) {
        t2 = onClose && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onClose,
            className: "absolute top-10 right-10 text-[#D9D9D9] hover:text-[#F5F5F5] transition-colors",
            "aria-label": "Close modal",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-5 h-5",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M6 18L18 6M6 6l12 12"
                }, void 0, false, {
                    fileName: "[project]/components/modals/UserInfoModal.jsx",
                    lineNumber: 45,
                    columnNumber: 242
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/modals/UserInfoModal.jsx",
                lineNumber: 45,
                columnNumber: 163
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/modals/UserInfoModal.jsx",
            lineNumber: 45,
            columnNumber: 21
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = onClose;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] !== onBack) {
        t3 = onBack && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onBack,
            className: "absolute top-10 left-10 text-[#E0E0E0] hover:text-[#F5F5F5] transition-colors",
            "aria-label": "Go back",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-6 h-6",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M15 19l-7-7 7-7"
                }, void 0, false, {
                    fileName: "[project]/components/modals/UserInfoModal.jsx",
                    lineNumber: 53,
                    columnNumber: 235
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/modals/UserInfoModal.jsx",
                lineNumber: 53,
                columnNumber: 156
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/modals/UserInfoModal.jsx",
            lineNumber: 53,
            columnNumber: 20
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = onBack;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    let t4;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-10 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl font-bold text-[#F5F5F5] mb-2",
                    children: "DinnersMatch"
                }, void 0, false, {
                    fileName: "[project]/components/modals/UserInfoModal.jsx",
                    lineNumber: 61,
                    columnNumber: 45
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[#E0E0E0]",
                    children: "Tell us about yourself"
                }, void 0, false, {
                    fileName: "[project]/components/modals/UserInfoModal.jsx",
                    lineNumber: 61,
                    columnNumber: 117
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/modals/UserInfoModal.jsx",
            lineNumber: 61,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = (e_0)=>setFirstName(e_0.target.value);
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] !== firstName) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                value: firstName,
                onChange: t5,
                placeholder: "First name",
                className: "w-full px-4 py-3 bg-[#111121] border border-[#2F3A51] rounded-lg text-[#F5F5F5] placeholder-zinc-600 focus:outline-none focus:border-[#FFAA55] transition-colors",
                required: true
            }, void 0, false, {
                fileName: "[project]/components/modals/UserInfoModal.jsx",
                lineNumber: 75,
                columnNumber: 15
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/modals/UserInfoModal.jsx",
            lineNumber: 75,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = firstName;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = (e_1)=>setMobileNumber(e_1.target.value);
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    let t8;
    if ($[14] !== mobileNumber) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "tel",
                value: mobileNumber,
                onChange: t7,
                placeholder: "Mobile number",
                className: "w-full px-4 py-3 bg-[#111121] border border-[#2F3A51] rounded-lg text-[#F5F5F5] placeholder-zinc-600 focus:outline-none focus:border-[#FFAA55] transition-colors",
                required: true
            }, void 0, false, {
                fileName: "[project]/components/modals/UserInfoModal.jsx",
                lineNumber: 90,
                columnNumber: 15
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/modals/UserInfoModal.jsx",
            lineNumber: 90,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = mobileNumber;
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    let t9;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "submit",
            className: "w-full bg-[#FFAA55] text-white py-4 rounded-lg font-medium text-sm uppercase tracking-wide hover:bg-[#FF9955] transition-colors",
            children: "Continue"
        }, void 0, false, {
            fileName: "[project]/components/modals/UserInfoModal.jsx",
            lineNumber: 98,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    let t10;
    if ($[17] !== handleSubmit || $[18] !== t6 || $[19] !== t8) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            className: "space-y-4",
            children: [
                t6,
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/components/modals/UserInfoModal.jsx",
            lineNumber: 105,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = handleSubmit;
        $[18] = t6;
        $[19] = t8;
        $[20] = t10;
    } else {
        t10 = $[20];
    }
    let t11;
    if ($[21] !== t10 || $[22] !== t2 || $[23] !== t3) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#080814] rounded-xl w-full max-w-154 p-10 relative shadow-2xl",
                children: [
                    t2,
                    t3,
                    t4,
                    t10
                ]
            }, void 0, true, {
                fileName: "[project]/components/modals/UserInfoModal.jsx",
                lineNumber: 115,
                columnNumber: 113
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/modals/UserInfoModal.jsx",
            lineNumber: 115,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[21] = t10;
        $[22] = t2;
        $[23] = t3;
        $[24] = t11;
    } else {
        t11 = $[24];
    }
    return t11;
};
_s(UserInfoModal, "TDsKoXxJqQqUyvffJlsvsMwVgic=");
_c = UserInfoModal;
const __TURBOPACK__default__export__ = UserInfoModal;
var _c;
__turbopack_context__.k.register(_c, "UserInfoModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/modals/BirthdayPicker.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const BirthdayPicker = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(47);
    if ($[0] !== "6cf59b1f9e330ce87a37849807bf7cf1b087782356aa430d120ed200bbb40adc") {
        for(let $i = 0; $i < 47; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6cf59b1f9e330ce87a37849807bf7cf1b087782356aa430d120ed200bbb40adc";
    }
    const { isOpen, onClose, onConfirm, onBack } = t0;
    const [selectedDate, setSelectedDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("01/01/2000");
    const [showDatePicker, setShowDatePicker] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedMonth, setSelectedMonth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(11);
    const [selectedDay, setSelectedDay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(17);
    const [selectedYear, setSelectedYear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(2024);
    if (!isOpen) {
        return null;
    }
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const months = t1;
    const daysInMonth = _temp;
    let t2;
    if ($[2] !== selectedMonth || $[3] !== selectedYear) {
        t2 = Array.from({
            length: daysInMonth(selectedMonth, selectedYear)
        }, _temp2);
        $[2] = selectedMonth;
        $[3] = selectedYear;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const days = t2;
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = Array.from({
            length: 100
        }, _temp3);
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    const years = t3;
    let t4;
    if ($[6] !== selectedDay || $[7] !== selectedMonth || $[8] !== selectedYear) {
        t4 = ()=>{
            const monthStr = String(selectedMonth + 1).padStart(2, "0");
            const dayStr = String(selectedDay).padStart(2, "0");
            const formattedDate = `${monthStr}/${dayStr}/${selectedYear}`;
            setSelectedDate(formattedDate);
            setShowDatePicker(false);
        };
        $[6] = selectedDay;
        $[7] = selectedMonth;
        $[8] = selectedYear;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    const handleDateSelect = t4;
    let t5;
    if ($[10] !== onConfirm || $[11] !== selectedDay || $[12] !== selectedMonth || $[13] !== selectedYear) {
        t5 = ()=>{
            const monthStr_0 = String(selectedMonth + 1).padStart(2, "0");
            const dayStr_0 = String(selectedDay).padStart(2, "0");
            const formattedDate_0 = `${monthStr_0}/${dayStr_0}/${selectedYear}`;
            onConfirm(formattedDate_0);
        };
        $[10] = onConfirm;
        $[11] = selectedDay;
        $[12] = selectedMonth;
        $[13] = selectedYear;
        $[14] = t5;
    } else {
        t5 = $[14];
    }
    const handleConfirm = t5;
    let t6;
    if ($[15] !== onClose) {
        t6 = onClose && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onClose,
            className: "absolute top-10 right-10 text-[#D9D9D9] hover:text-[#F5F5F5] transition-colors",
            "aria-label": "Close modal",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-5 h-5",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M6 18L18 6M6 6l12 12"
                }, void 0, false, {
                    fileName: "[project]/components/modals/BirthdayPicker.jsx",
                    lineNumber: 94,
                    columnNumber: 242
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/modals/BirthdayPicker.jsx",
                lineNumber: 94,
                columnNumber: 163
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/modals/BirthdayPicker.jsx",
            lineNumber: 94,
            columnNumber: 21
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = onClose;
        $[16] = t6;
    } else {
        t6 = $[16];
    }
    let t7;
    if ($[17] !== onBack) {
        t7 = onBack && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onBack,
            className: "absolute top-10 left-10 text-[#E0E0E0] hover:text-[#F5F5F5] transition-colors",
            "aria-label": "Go back",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-6 h-6",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M15 19l-7-7 7-7"
                }, void 0, false, {
                    fileName: "[project]/components/modals/BirthdayPicker.jsx",
                    lineNumber: 102,
                    columnNumber: 235
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/modals/BirthdayPicker.jsx",
                lineNumber: 102,
                columnNumber: 156
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/modals/BirthdayPicker.jsx",
            lineNumber: 102,
            columnNumber: 20
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = onBack;
        $[18] = t7;
    } else {
        t7 = $[18];
    }
    let t8;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-8 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl font-bold text-[#F5F5F5] mb-1",
                    children: "DinnersMatch"
                }, void 0, false, {
                    fileName: "[project]/components/modals/BirthdayPicker.jsx",
                    lineNumber: 110,
                    columnNumber: 44
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-[#FFAA55] uppercase tracking-wide",
                    children: "Identity"
                }, void 0, false, {
                    fileName: "[project]/components/modals/BirthdayPicker.jsx",
                    lineNumber: 110,
                    columnNumber: 116
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/modals/BirthdayPicker.jsx",
            lineNumber: 110,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[19] = t8;
    } else {
        t8 = $[19];
    }
    let t9;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-2xl md:text-3xl font-bold text-white text-center mb-6",
            children: "When is your birthday?"
        }, void 0, false, {
            fileName: "[project]/components/modals/BirthdayPicker.jsx",
            lineNumber: 117,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[20] = t9;
    } else {
        t9 = $[20];
    }
    let t10;
    if ($[21] !== showDatePicker) {
        t10 = ()=>setShowDatePicker(!showDatePicker);
        $[21] = showDatePicker;
        $[22] = t10;
    } else {
        t10 = $[22];
    }
    let t11;
    if ($[23] !== selectedDate || $[24] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "text",
            value: selectedDate,
            readOnly: true,
            onClick: t10,
            className: "w-full px-4 py-3 bg-[#111121] border border-[#2F3A51] rounded-lg text-[#F5F5F5] placeholder-[#E0E0E0] focus:outline-none focus:border-[#FFAA55] transition-colors cursor-pointer"
        }, void 0, false, {
            fileName: "[project]/components/modals/BirthdayPicker.jsx",
            lineNumber: 132,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[23] = selectedDate;
        $[24] = t10;
        $[25] = t11;
    } else {
        t11 = $[25];
    }
    let t12;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M19 9l-7 7-7-7"
            }, void 0, false, {
                fileName: "[project]/components/modals/BirthdayPicker.jsx",
                lineNumber: 141,
                columnNumber: 166
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/modals/BirthdayPicker.jsx",
            lineNumber: 141,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[26] = t12;
    } else {
        t12 = $[26];
    }
    let t13;
    if ($[27] !== t11) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                t11,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/components/modals/BirthdayPicker.jsx",
            lineNumber: 148,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[27] = t11;
        $[28] = t13;
    } else {
        t13 = $[28];
    }
    let t14;
    if ($[29] !== days || $[30] !== handleDateSelect || $[31] !== selectedDay || $[32] !== selectedMonth || $[33] !== selectedYear || $[34] !== showDatePicker || $[35] !== years) {
        t14 = showDatePicker && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-4 bg-[#111121] rounded-lg p-4 border border-[#2F3A51]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-3 gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2 max-h-60 overflow-y-auto",
                            children: months.map((month_0, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setSelectedMonth(index);
                                        const maxDays = daysInMonth(index, selectedYear);
                                        if (selectedDay > maxDays) {
                                            setSelectedDay(maxDays);
                                        }
                                    },
                                    className: `w-full px-3 py-2 rounded text-sm transition-colors ${selectedMonth === index ? "bg-[#FFAA55] text-white" : "bg-[#080814] text-[#E0E0E0] hover:bg-[#111121]"}`,
                                    children: month_0
                                }, index, false, {
                                    fileName: "[project]/components/modals/BirthdayPicker.jsx",
                                    lineNumber: 156,
                                    columnNumber: 227
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/components/modals/BirthdayPicker.jsx",
                            lineNumber: 156,
                            columnNumber: 143
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2 max-h-60 overflow-y-auto",
                            children: days.map((day)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setSelectedDay(day),
                                    className: `w-full px-3 py-2 rounded text-sm transition-colors ${selectedDay === day ? "bg-[#FFAA55] text-white" : "bg-[#080814] text-[#E0E0E0] hover:bg-[#111121]"}`,
                                    children: day
                                }, day, false, {
                                    fileName: "[project]/components/modals/BirthdayPicker.jsx",
                                    lineNumber: 162,
                                    columnNumber: 280
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/components/modals/BirthdayPicker.jsx",
                            lineNumber: 162,
                            columnNumber: 211
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2 max-h-60 overflow-y-auto",
                            children: years.map((year_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setSelectedYear(year_0);
                                        const maxDays_0 = daysInMonth(selectedMonth, year_0);
                                        if (selectedDay > maxDays_0) {
                                            setSelectedDay(maxDays_0);
                                        }
                                    },
                                    className: `w-full px-3 py-2 rounded text-sm transition-colors ${selectedYear === year_0 ? "bg-[#FFAA55] text-white" : "bg-[#080814] text-[#E0E0E0] hover:bg-[#111121]"}`,
                                    children: year_0
                                }, year_0, false, {
                                    fileName: "[project]/components/modals/BirthdayPicker.jsx",
                                    lineNumber: 162,
                                    columnNumber: 596
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/components/modals/BirthdayPicker.jsx",
                            lineNumber: 162,
                            columnNumber: 523
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/modals/BirthdayPicker.jsx",
                    lineNumber: 156,
                    columnNumber: 103
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleDateSelect,
                    className: "w-full mt-4 bg-[#FFAA55] text-white py-2 rounded-lg font-medium text-sm hover:bg-[#FF9955] transition-colors",
                    children: "Select Date"
                }, void 0, false, {
                    fileName: "[project]/components/modals/BirthdayPicker.jsx",
                    lineNumber: 168,
                    columnNumber: 216
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/modals/BirthdayPicker.jsx",
            lineNumber: 156,
            columnNumber: 29
        }, ("TURBOPACK compile-time value", void 0));
        $[29] = days;
        $[30] = handleDateSelect;
        $[31] = selectedDay;
        $[32] = selectedMonth;
        $[33] = selectedYear;
        $[34] = showDatePicker;
        $[35] = years;
        $[36] = t14;
    } else {
        t14 = $[36];
    }
    let t15;
    if ($[37] !== t13 || $[38] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-6",
            children: [
                t9,
                t13,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/components/modals/BirthdayPicker.jsx",
            lineNumber: 182,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[37] = t13;
        $[38] = t14;
        $[39] = t15;
    } else {
        t15 = $[39];
    }
    let t16;
    if ($[40] !== handleConfirm) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: handleConfirm,
            className: "w-full bg-[#FFAA55] text-white py-4 rounded-lg font-bold text-sm uppercase tracking-wide hover:bg-[#FF9955] transition-colors",
            children: "Confirm"
        }, void 0, false, {
            fileName: "[project]/components/modals/BirthdayPicker.jsx",
            lineNumber: 191,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[40] = handleConfirm;
        $[41] = t16;
    } else {
        t16 = $[41];
    }
    let t17;
    if ($[42] !== t15 || $[43] !== t16 || $[44] !== t6 || $[45] !== t7) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#080814] rounded-xl w-full max-w-154 p-10 relative shadow-2xl",
                children: [
                    t6,
                    t7,
                    t8,
                    t15,
                    t16
                ]
            }, void 0, true, {
                fileName: "[project]/components/modals/BirthdayPicker.jsx",
                lineNumber: 199,
                columnNumber: 113
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/modals/BirthdayPicker.jsx",
            lineNumber: 199,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[42] = t15;
        $[43] = t16;
        $[44] = t6;
        $[45] = t7;
        $[46] = t17;
    } else {
        t17 = $[46];
    }
    return t17;
};
_s(BirthdayPicker, "kJI56/i+iTsgUOPILv5HdyBDW88=");
_c = BirthdayPicker;
const __TURBOPACK__default__export__ = BirthdayPicker;
function _temp(month, year) {
    return new Date(year, month + 1, 0).getDate();
}
function _temp2(_, i) {
    return i + 1;
}
function _temp3(__0, i_0) {
    return new Date().getFullYear() - 18 - i_0;
}
var _c;
__turbopack_context__.k.register(_c, "BirthdayPicker");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/modals/WelcomeModal.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
;
;
const WelcomeModal = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "5b78df5a4c6b2b18b702dbea46f135cb770008026358cbe354d7dcae41867552") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5b78df5a4c6b2b18b702dbea46f135cb770008026358cbe354d7dcae41867552";
    }
    const { isOpen, onClose, onNext, onBack } = t0;
    if (!isOpen) {
        return null;
    }
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            gap: "40px"
        };
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== onBack) {
        t2 = onBack && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onBack,
            className: "flex items-center gap-1 text-[#F5F5F5] hover:text-[#FFAA55] transition-colors",
            "aria-label": "Go back",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "w-4 h-4",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M15 19l-7-7 7-7"
                    }, void 0, false, {
                        fileName: "[project]/components/modals/WelcomeModal.jsx",
                        lineNumber: 33,
                        columnNumber: 235
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/modals/WelcomeModal.jsx",
                    lineNumber: 33,
                    columnNumber: 156
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm",
                    children: "Back"
                }, void 0, false, {
                    fileName: "[project]/components/modals/WelcomeModal.jsx",
                    lineNumber: 33,
                    columnNumber: 330
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/modals/WelcomeModal.jsx",
            lineNumber: 33,
            columnNumber: 20
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = onBack;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== onClose) {
        t3 = onClose && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onClose,
            className: "text-[#D9D9D9] hover:text-[#F5F5F5] transition-colors",
            "aria-label": "Close modal",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-5 h-5",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M6 18L18 6M6 6l12 12"
                }, void 0, false, {
                    fileName: "[project]/components/modals/WelcomeModal.jsx",
                    lineNumber: 41,
                    columnNumber: 217
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/modals/WelcomeModal.jsx",
                lineNumber: 41,
                columnNumber: 138
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/modals/WelcomeModal.jsx",
            lineNumber: 41,
            columnNumber: 21
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = onClose;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== t2 || $[7] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between",
            children: [
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/components/modals/WelcomeModal.jsx",
            lineNumber: 49,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = t2;
        $[7] = t3;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center flex flex-col",
            style: {
                gap: "6px"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-[23px] font-bold text-[#F5F5F5]",
                    children: "DinnersMatch"
                }, void 0, false, {
                    fileName: "[project]/components/modals/WelcomeModal.jsx",
                    lineNumber: 60,
                    columnNumber: 8
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[10px] text-[#FFAA55] uppercase tracking-wide",
                    children: "Identity"
                }, void 0, false, {
                    fileName: "[project]/components/modals/WelcomeModal.jsx",
                    lineNumber: 60,
                    columnNumber: 78
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/modals/WelcomeModal.jsx",
            lineNumber: 58,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-[#111121] border border-[#2F3A51] rounded-lg p-6 flex flex-col shadow-lg",
            style: {
                gap: "15px"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-sm font-bold text-[#FFAA55]",
                    children: "Welcome to DinnersMatch"
                }, void 0, false, {
                    fileName: "[project]/components/modals/WelcomeModal.jsx",
                    lineNumber: 69,
                    columnNumber: 8
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-[#F5F5F5] leading-relaxed",
                    children: "Life's too short to work, sleep and die. A life well lived is one filled with adventure - Meeting new people, laughing until tears are streaming down your face, taking risks, making memories."
                }, void 0, false, {
                    fileName: "[project]/components/modals/WelcomeModal.jsx",
                    lineNumber: 69,
                    columnNumber: 85
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/modals/WelcomeModal.jsx",
            lineNumber: 67,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] !== onNext) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onNext,
            className: "w-full bg-[#FFAA55] text-[#F5F5F5] py-3 rounded-lg font-medium text-sm uppercase tracking-wide hover:bg-[#FF9955] transition-colors",
            children: "Next"
        }, void 0, false, {
            fileName: "[project]/components/modals/WelcomeModal.jsx",
            lineNumber: 76,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = onNext;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] !== t4 || $[14] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#080814] rounded-xl w-full max-w-154 p-10 relative shadow-2xl flex flex-col",
                style: t1,
                children: [
                    t4,
                    t5,
                    t6,
                    t7
                ]
            }, void 0, true, {
                fileName: "[project]/components/modals/WelcomeModal.jsx",
                lineNumber: 84,
                columnNumber: 112
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/modals/WelcomeModal.jsx",
            lineNumber: 84,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = t4;
        $[14] = t7;
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    return t8;
};
_c = WelcomeModal;
const __TURBOPACK__default__export__ = WelcomeModal;
var _c;
__turbopack_context__.k.register(_c, "WelcomeModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/modals/HowItWorksModal.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
;
;
const HowItWorksModal = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "9bb67efc54823f0b776183f65c989338075f43827e2fb48b280caf8af2074fbd") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9bb67efc54823f0b776183f65c989338075f43827e2fb48b280caf8af2074fbd";
    }
    const { isOpen, onClose, onNext, onBack } = t0;
    if (!isOpen) {
        return null;
    }
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            gap: "40px"
        };
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== onBack) {
        t2 = onBack && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onBack,
            className: "flex items-center gap-1 text-[#F5F5F5] hover:text-[#FFAA55] transition-colors",
            "aria-label": "Go back",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "w-4 h-4",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M15 19l-7-7 7-7"
                    }, void 0, false, {
                        fileName: "[project]/components/modals/HowItWorksModal.jsx",
                        lineNumber: 33,
                        columnNumber: 235
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/modals/HowItWorksModal.jsx",
                    lineNumber: 33,
                    columnNumber: 156
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm",
                    children: "Back"
                }, void 0, false, {
                    fileName: "[project]/components/modals/HowItWorksModal.jsx",
                    lineNumber: 33,
                    columnNumber: 330
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/modals/HowItWorksModal.jsx",
            lineNumber: 33,
            columnNumber: 20
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = onBack;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== onClose) {
        t3 = onClose && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onClose,
            className: "text-[#D9D9D9] hover:text-[#F5F5F5] transition-colors",
            "aria-label": "Close modal",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-5 h-5",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M6 18L18 6M6 6l12 12"
                }, void 0, false, {
                    fileName: "[project]/components/modals/HowItWorksModal.jsx",
                    lineNumber: 41,
                    columnNumber: 217
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/modals/HowItWorksModal.jsx",
                lineNumber: 41,
                columnNumber: 138
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/modals/HowItWorksModal.jsx",
            lineNumber: 41,
            columnNumber: 21
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = onClose;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== t2 || $[7] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between",
            children: [
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/components/modals/HowItWorksModal.jsx",
            lineNumber: 49,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = t2;
        $[7] = t3;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center flex flex-col",
            style: {
                gap: "6px"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-[23px] font-bold text-[#F5F5F5]",
                    children: "DinnersMatch"
                }, void 0, false, {
                    fileName: "[project]/components/modals/HowItWorksModal.jsx",
                    lineNumber: 60,
                    columnNumber: 8
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[10px] text-[#FFAA55] uppercase tracking-wide",
                    children: "Identity"
                }, void 0, false, {
                    fileName: "[project]/components/modals/HowItWorksModal.jsx",
                    lineNumber: 60,
                    columnNumber: 78
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/modals/HowItWorksModal.jsx",
            lineNumber: 58,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-[#111121] border border-[#2F3A51] rounded-lg p-6 flex flex-col shadow-lg",
            style: {
                gap: "15px",
                boxShadow: "0px 0px 16px rgba(0, 0, 0, 0.12)"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-sm font-bold text-[#FFAA55]",
                    children: "How It Works"
                }, void 0, false, {
                    fileName: "[project]/components/modals/HowItWorksModal.jsx",
                    lineNumber: 70,
                    columnNumber: 8
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-[#F5F5F5] leading-relaxed",
                    children: "This isn't just dinner - it's your invitation to connect with other interesting people who say yes to life. Share unforgettable meals, conversations, and moments with strangers who won't feel like strangers for long."
                }, void 0, false, {
                    fileName: "[project]/components/modals/HowItWorksModal.jsx",
                    lineNumber: 70,
                    columnNumber: 74
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/modals/HowItWorksModal.jsx",
            lineNumber: 67,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] !== onNext) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onNext,
            className: "w-full bg-[#FFAA55] text-[#F5F5F5] py-3 rounded-lg font-medium text-sm uppercase tracking-wide hover:bg-[#FF9955] transition-colors",
            children: "Next"
        }, void 0, false, {
            fileName: "[project]/components/modals/HowItWorksModal.jsx",
            lineNumber: 77,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = onNext;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] !== t4 || $[14] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#080814] rounded-xl w-full max-w-154 p-10 relative shadow-2xl flex flex-col",
                style: t1,
                children: [
                    t4,
                    t5,
                    t6,
                    t7
                ]
            }, void 0, true, {
                fileName: "[project]/components/modals/HowItWorksModal.jsx",
                lineNumber: 85,
                columnNumber: 112
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/modals/HowItWorksModal.jsx",
            lineNumber: 85,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = t4;
        $[14] = t7;
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    return t8;
};
_c = HowItWorksModal;
const __TURBOPACK__default__export__ = HowItWorksModal;
var _c;
__turbopack_context__.k.register(_c, "HowItWorksModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/modals/BookDinnerModal.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const BookDinnerModal = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(32);
    if ($[0] !== "23e5b127e8b969d411cb0eea23a065643a09dec23b2ff5be86a8ef3c218e2b25") {
        for(let $i = 0; $i < 32; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "23e5b127e8b969d411cb0eea23a065643a09dec23b2ff5be86a8ef3c218e2b25";
    }
    const { isOpen, onClose, onSecureSpot, onBack, dinnerSlots: t1 } = t0;
    let t2;
    if ($[1] !== t1) {
        t2 = t1 === undefined ? [] : t1;
        $[1] = t1;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const dinnerSlots = t2;
    const [selectedSlot, setSelectedSlot] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    if (!isOpen) {
        return null;
    }
    let t3;
    if ($[3] !== dinnerSlots) {
        t3 = dinnerSlots.length > 0 ? dinnerSlots : [
            {
                id: "1",
                date: "December 2",
                time: "7 pm"
            },
            {
                id: "2",
                date: "December 2",
                time: "10 pm"
            }
        ];
        $[3] = dinnerSlots;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const slots = t3;
    let t4;
    if ($[5] !== onClose) {
        t4 = onClose && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onClose,
            className: "absolute top-10 right-10 text-[#D9D9D9] hover:text-[#F5F5F5] transition-colors",
            "aria-label": "Close modal",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-5 h-5",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M6 18L18 6M6 6l12 12"
                }, void 0, false, {
                    fileName: "[project]/components/modals/BookDinnerModal.jsx",
                    lineNumber: 52,
                    columnNumber: 242
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/modals/BookDinnerModal.jsx",
                lineNumber: 52,
                columnNumber: 163
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/modals/BookDinnerModal.jsx",
            lineNumber: 52,
            columnNumber: 21
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = onClose;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== onBack) {
        t5 = onBack && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onBack,
            className: "absolute top-10 left-10 text-[#E0E0E0] hover:text-[#F5F5F5] transition-colors flex items-center gap-2",
            "aria-label": "Go back",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "w-5 h-5",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M15 19l-7-7 7-7"
                    }, void 0, false, {
                        fileName: "[project]/components/modals/BookDinnerModal.jsx",
                        lineNumber: 60,
                        columnNumber: 259
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/modals/BookDinnerModal.jsx",
                    lineNumber: 60,
                    columnNumber: 180
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Back"
                }, void 0, false, {
                    fileName: "[project]/components/modals/BookDinnerModal.jsx",
                    lineNumber: 60,
                    columnNumber: 354
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/modals/BookDinnerModal.jsx",
            lineNumber: 60,
            columnNumber: 20
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = onBack;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-10 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl font-bold text-[#F5F5F5] mb-1",
                    children: "DinnersMatch"
                }, void 0, false, {
                    fileName: "[project]/components/modals/BookDinnerModal.jsx",
                    lineNumber: 68,
                    columnNumber: 45
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-[#FFAA55] uppercase tracking-wide",
                    children: "Identity"
                }, void 0, false, {
                    fileName: "[project]/components/modals/BookDinnerModal.jsx",
                    lineNumber: 68,
                    columnNumber: 117
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/modals/BookDinnerModal.jsx",
            lineNumber: 68,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-2xl",
            children: "✨"
        }, void 0, false, {
            fileName: "[project]/components/modals/BookDinnerModal.jsx",
            lineNumber: 75,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    let t9;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center gap-2 mb-2",
            children: [
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-3xl md:text-4xl font-medium text-center text-[#FFAA55]",
                    children: [
                        "Book Your Next ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-white",
                            children: " Dinner"
                        }, void 0, false, {
                            fileName: "[project]/components/modals/BookDinnerModal.jsx",
                            lineNumber: 83,
                            columnNumber: 166
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/modals/BookDinnerModal.jsx",
                    lineNumber: 83,
                    columnNumber: 75
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/modals/BookDinnerModal.jsx",
            lineNumber: 83,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[#E0E0E0] mb-6 text-center",
            children: "5 peoples can't wait to meet you."
        }, void 0, false, {
            fileName: "[project]/components/modals/BookDinnerModal.jsx",
            lineNumber: 84,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = t8;
        $[12] = t9;
    } else {
        t8 = $[11];
        t9 = $[12];
    }
    let t10;
    if ($[13] !== selectedSlot || $[14] !== slots) {
        let t11;
        if ($[16] !== selectedSlot) {
            t11 = (slot)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setSelectedSlot(slot.id),
                    className: `w-full bg-[#111121] border rounded-lg p-6 flex items-center justify-between transition-all ${selectedSlot === slot.id ? "border-[#FFAA55] bg-[#080814]" : "border-gray-700 hover:border-[#FFAA55]"}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-left",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[#F5F5F5] font-medium text-lg",
                                    children: slot.date
                                }, void 0, false, {
                                    fileName: "[project]/components/modals/BookDinnerModal.jsx",
                                    lineNumber: 95,
                                    columnNumber: 321
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[#E0E0E0]",
                                    children: slot.time
                                }, void 0, false, {
                                    fileName: "[project]/components/modals/BookDinnerModal.jsx",
                                    lineNumber: 95,
                                    columnNumber: 386
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/modals/BookDinnerModal.jsx",
                            lineNumber: 95,
                            columnNumber: 294
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `w-6 h-6 rounded-full border-2 flex items-center justify-center ${selectedSlot === slot.id ? "border-[#FFAA55] bg-[#FFAA55]" : "border-[#2F3A51]"}`,
                            children: selectedSlot === slot.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-2 h-2 rounded-full bg-white"
                            }, void 0, false, {
                                fileName: "[project]/components/modals/BookDinnerModal.jsx",
                                lineNumber: 95,
                                columnNumber: 631
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/modals/BookDinnerModal.jsx",
                            lineNumber: 95,
                            columnNumber: 437
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, slot.id, true, {
                    fileName: "[project]/components/modals/BookDinnerModal.jsx",
                    lineNumber: 95,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0));
            $[16] = selectedSlot;
            $[17] = t11;
        } else {
            t11 = $[17];
        }
        t10 = slots.map(t11);
        $[13] = selectedSlot;
        $[14] = slots;
        $[15] = t10;
    } else {
        t10 = $[15];
    }
    let t11;
    if ($[18] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-10",
            children: [
                t8,
                t9,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: t10
                }, void 0, false, {
                    fileName: "[project]/components/modals/BookDinnerModal.jsx",
                    lineNumber: 110,
                    columnNumber: 42
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/modals/BookDinnerModal.jsx",
            lineNumber: 110,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[18] = t10;
        $[19] = t11;
    } else {
        t11 = $[19];
    }
    let t12;
    if ($[20] !== onSecureSpot || $[21] !== selectedSlot) {
        t12 = ()=>selectedSlot && onSecureSpot(selectedSlot);
        $[20] = onSecureSpot;
        $[21] = selectedSlot;
        $[22] = t12;
    } else {
        t12 = $[22];
    }
    const t13 = !selectedSlot;
    const t14 = `w-full py-4 rounded-lg font-medium text-sm uppercase tracking-wide transition-colors ${selectedSlot ? "bg-[#FFAA55] text-white hover:bg-[#FF9955]" : "bg-[#2F3A51] text-[#E0E0E0] cursor-not-allowed"}`;
    let t15;
    if ($[23] !== t12 || $[24] !== t13 || $[25] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t12,
            disabled: t13,
            className: t14,
            children: "Secure My Spot"
        }, void 0, false, {
            fileName: "[project]/components/modals/BookDinnerModal.jsx",
            lineNumber: 129,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[23] = t12;
        $[24] = t13;
        $[25] = t14;
        $[26] = t15;
    } else {
        t15 = $[26];
    }
    let t16;
    if ($[27] !== t11 || $[28] !== t15 || $[29] !== t4 || $[30] !== t5) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#080814] rounded-xl w-full max-w-154 p-10 relative shadow-2xl",
                children: [
                    t4,
                    t5,
                    t6,
                    t11,
                    t15
                ]
            }, void 0, true, {
                fileName: "[project]/components/modals/BookDinnerModal.jsx",
                lineNumber: 139,
                columnNumber: 113
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/modals/BookDinnerModal.jsx",
            lineNumber: 139,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[27] = t11;
        $[28] = t15;
        $[29] = t4;
        $[30] = t5;
        $[31] = t16;
    } else {
        t16 = $[31];
    }
    return t16;
};
_s(BookDinnerModal, "Y6TO00m8GVyDZJbp/5oEMFrIagA=");
_c = BookDinnerModal;
const __TURBOPACK__default__export__ = BookDinnerModal;
var _c;
__turbopack_context__.k.register(_c, "BookDinnerModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/modals/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$LoginModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/modals/LoginModal.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$PreferencesForm$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/modals/PreferencesForm.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$DinnerConfirmation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/modals/DinnerConfirmation.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$PricingModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/modals/PricingModal.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$CitySelectionModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/modals/CitySelectionModal.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$AreaSelectionModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/modals/AreaSelectionModal.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$PersonalityQuiz$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/modals/PersonalityQuiz.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$IdentityQuiz$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/modals/IdentityQuiz.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$QuizResult$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/modals/QuizResult.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$SocialLoginModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/modals/SocialLoginModal.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$EmailConfirmationModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/modals/EmailConfirmationModal.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$PasswordCreationModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/modals/PasswordCreationModal.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$UserInfoModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/modals/UserInfoModal.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$BirthdayPicker$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/modals/BirthdayPicker.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$WelcomeModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/modals/WelcomeModal.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$HowItWorksModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/modals/HowItWorksModal.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$BookDinnerModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/modals/BookDinnerModal.jsx [app-client] (ecmascript)");
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
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/modals/PersonalityQuiz.jsx [app-client] (ecmascript) <export default as PersonalityQuiz>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PersonalityQuiz",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$PersonalityQuiz$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$PersonalityQuiz$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/modals/PersonalityQuiz.jsx [app-client] (ecmascript)");
}),
"[project]/components/modals/CitySelectionModal.jsx [app-client] (ecmascript) <export default as CitySelectionModal>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CitySelectionModal",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$CitySelectionModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$CitySelectionModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/modals/CitySelectionModal.jsx [app-client] (ecmascript)");
}),
"[project]/components/modals/AreaSelectionModal.jsx [app-client] (ecmascript) <export default as AreaSelectionModal>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AreaSelectionModal",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$AreaSelectionModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$AreaSelectionModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/modals/AreaSelectionModal.jsx [app-client] (ecmascript)");
}),
"[project]/components/modals/IdentityQuiz.jsx [app-client] (ecmascript) <export default as IdentityQuiz>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IdentityQuiz",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$IdentityQuiz$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$IdentityQuiz$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/modals/IdentityQuiz.jsx [app-client] (ecmascript)");
}),
"[project]/components/modals/BirthdayPicker.jsx [app-client] (ecmascript) <export default as BirthdayPicker>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BirthdayPicker",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$BirthdayPicker$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$BirthdayPicker$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/modals/BirthdayPicker.jsx [app-client] (ecmascript)");
}),
"[project]/components/modals/SocialLoginModal.jsx [app-client] (ecmascript) <export default as SocialLoginModal>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SocialLoginModal",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$SocialLoginModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$SocialLoginModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/modals/SocialLoginModal.jsx [app-client] (ecmascript)");
}),
"[project]/components/modals/EmailConfirmationModal.jsx [app-client] (ecmascript) <export default as EmailConfirmationModal>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EmailConfirmationModal",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$EmailConfirmationModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$EmailConfirmationModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/modals/EmailConfirmationModal.jsx [app-client] (ecmascript)");
}),
"[project]/components/modals/PasswordCreationModal.jsx [app-client] (ecmascript) <export default as PasswordCreationModal>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PasswordCreationModal",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$PasswordCreationModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$PasswordCreationModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/modals/PasswordCreationModal.jsx [app-client] (ecmascript)");
}),
"[project]/components/modals/UserInfoModal.jsx [app-client] (ecmascript) <export default as UserInfoModal>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserInfoModal",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$UserInfoModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$UserInfoModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/modals/UserInfoModal.jsx [app-client] (ecmascript)");
}),
"[project]/components/modals/WelcomeModal.jsx [app-client] (ecmascript) <export default as WelcomeModal>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WelcomeModal",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$WelcomeModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$WelcomeModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/modals/WelcomeModal.jsx [app-client] (ecmascript)");
}),
"[project]/components/modals/HowItWorksModal.jsx [app-client] (ecmascript) <export default as HowItWorksModal>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HowItWorksModal",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$HowItWorksModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$HowItWorksModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/modals/HowItWorksModal.jsx [app-client] (ecmascript)");
}),
"[project]/components/modals/BookDinnerModal.jsx [app-client] (ecmascript) <export default as BookDinnerModal>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BookDinnerModal",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$BookDinnerModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$BookDinnerModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/modals/BookDinnerModal.jsx [app-client] (ecmascript)");
}),
"[project]/src/app/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Navbar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Hero.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Testimonials$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Testimonials.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$HowItWorks$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/HowItWorks.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AboutUs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/AboutUs.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FAQ$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/FAQ.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Footer.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/components/modals/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$PersonalityQuiz$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PersonalityQuiz$3e$__ = __turbopack_context__.i("[project]/components/modals/PersonalityQuiz.jsx [app-client] (ecmascript) <export default as PersonalityQuiz>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$CitySelectionModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CitySelectionModal$3e$__ = __turbopack_context__.i("[project]/components/modals/CitySelectionModal.jsx [app-client] (ecmascript) <export default as CitySelectionModal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$AreaSelectionModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AreaSelectionModal$3e$__ = __turbopack_context__.i("[project]/components/modals/AreaSelectionModal.jsx [app-client] (ecmascript) <export default as AreaSelectionModal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$IdentityQuiz$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IdentityQuiz$3e$__ = __turbopack_context__.i("[project]/components/modals/IdentityQuiz.jsx [app-client] (ecmascript) <export default as IdentityQuiz>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$BirthdayPicker$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BirthdayPicker$3e$__ = __turbopack_context__.i("[project]/components/modals/BirthdayPicker.jsx [app-client] (ecmascript) <export default as BirthdayPicker>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$SocialLoginModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SocialLoginModal$3e$__ = __turbopack_context__.i("[project]/components/modals/SocialLoginModal.jsx [app-client] (ecmascript) <export default as SocialLoginModal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$EmailConfirmationModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EmailConfirmationModal$3e$__ = __turbopack_context__.i("[project]/components/modals/EmailConfirmationModal.jsx [app-client] (ecmascript) <export default as EmailConfirmationModal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$PasswordCreationModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PasswordCreationModal$3e$__ = __turbopack_context__.i("[project]/components/modals/PasswordCreationModal.jsx [app-client] (ecmascript) <export default as PasswordCreationModal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$UserInfoModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserInfoModal$3e$__ = __turbopack_context__.i("[project]/components/modals/UserInfoModal.jsx [app-client] (ecmascript) <export default as UserInfoModal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$WelcomeModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__WelcomeModal$3e$__ = __turbopack_context__.i("[project]/components/modals/WelcomeModal.jsx [app-client] (ecmascript) <export default as WelcomeModal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$HowItWorksModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HowItWorksModal$3e$__ = __turbopack_context__.i("[project]/components/modals/HowItWorksModal.jsx [app-client] (ecmascript) <export default as HowItWorksModal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$BookDinnerModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookDinnerModal$3e$__ = __turbopack_context__.i("[project]/components/modals/BookDinnerModal.jsx [app-client] (ecmascript) <export default as BookDinnerModal>");
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
;
;
function Home() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(85);
    if ($[0] !== "6fbda6b4c3bcbf66e83924493244852ef2fa186f599d2e175b5501ba14d534e5") {
        for(let $i = 0; $i < 85; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6fbda6b4c3bcbf66e83924493244852ef2fa186f599d2e175b5501ba14d534e5";
    }
    const [quizFlow, setQuizFlow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedCity, setSelectedCity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedPlace, setSelectedPlace] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [personalityAnswers, setPersonalityAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [identityAnswers, setIdentityAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedLoginMethod, setSelectedLoginMethod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [userEmail, setUserEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [userPassword, setUserPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [userInfo, setUserInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "Home[useEffect()]": ()=>{
                const handleOpenQuiz = {
                    "Home[useEffect() > handleOpenQuiz]": ()=>{
                        setQuizFlow("city");
                    }
                }["Home[useEffect() > handleOpenQuiz]"];
                window.addEventListener("openQuiz", handleOpenQuiz);
                return ()=>{
                    window.removeEventListener("openQuiz", handleOpenQuiz);
                };
            }
        })["Home[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "Home[handleCitySelect]": (city)=>{
                setSelectedCity(city);
                setQuizFlow("place");
            }
        })["Home[handleCitySelect]"];
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const handleCitySelect = t2;
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "Home[handlePlaceSelect]": (place)=>{
                setSelectedPlace(place);
                setQuizFlow("quiz");
            }
        })["Home[handlePlaceSelect]"];
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const handlePlaceSelect = t3;
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "Home[handlePersonalityQuizComplete]": (answers)=>{
                setPersonalityAnswers(answers);
                setQuizFlow("identity");
            }
        })["Home[handlePersonalityQuizComplete]"];
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    const handlePersonalityQuizComplete = t4;
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = ({
            "Home[handleIdentityQuizComplete]": (answers_0)=>{
                setIdentityAnswers(answers_0);
                setQuizFlow("birthday");
            }
        })["Home[handleIdentityQuizComplete]"];
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    const handleIdentityQuizComplete = t5;
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = ({
            "Home[handleBirthdayConfirm]": (birthday)=>{
                setQuizFlow("social-login");
            }
        })["Home[handleBirthdayConfirm]"];
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    const handleBirthdayConfirm = t6;
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = ({
            "Home[handleSocialLoginSelect]": (method)=>{
                setSelectedLoginMethod(method);
                if (method === "email") {
                    setQuizFlow("email");
                } else {
                    setQuizFlow("user-info");
                }
            }
        })["Home[handleSocialLoginSelect]"];
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    const handleSocialLoginSelect = t7;
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = ({
            "Home[handleEmailConfirm]": (email)=>{
                setUserEmail(email);
                setQuizFlow("password");
            }
        })["Home[handleEmailConfirm]"];
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    const handleEmailConfirm = t8;
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = ({
            "Home[handlePasswordCreate]": (password)=>{
                setUserPassword(password);
                setQuizFlow("user-info");
            }
        })["Home[handlePasswordCreate]"];
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    const handlePasswordCreate = t9;
    let t10;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = ({
            "Home[handleUserInfoSubmit]": (info)=>{
                setUserInfo(info);
                setQuizFlow("welcome");
            }
        })["Home[handleUserInfoSubmit]"];
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    const handleUserInfoSubmit = t10;
    let t11;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = ({
            "Home[handleWelcomeNext]": ()=>{
                setQuizFlow("how-it-works");
            }
        })["Home[handleWelcomeNext]"];
        $[12] = t11;
    } else {
        t11 = $[12];
    }
    const handleWelcomeNext = t11;
    let t12;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = ({
            "Home[handleHowItWorksNext]": ()=>{
                setQuizFlow("book-dinner");
            }
        })["Home[handleHowItWorksNext]"];
        $[13] = t12;
    } else {
        t12 = $[13];
    }
    const handleHowItWorksNext = t12;
    let t13;
    if ($[14] !== identityAnswers || $[15] !== personalityAnswers || $[16] !== selectedCity || $[17] !== selectedLoginMethod || $[18] !== selectedPlace || $[19] !== userEmail || $[20] !== userInfo || $[21] !== userPassword) {
        t13 = ({
            "Home[handleSecureSpot]": (slotId)=>{
                console.log("Complete flow data:", {
                    city: selectedCity,
                    place: selectedPlace,
                    personalityAnswers,
                    identityAnswers,
                    loginMethod: selectedLoginMethod,
                    email: userEmail,
                    password: userPassword,
                    userInfo,
                    selectedSlot: slotId
                });
                setQuizFlow(null);
                setSelectedCity(null);
                setSelectedPlace(null);
                setPersonalityAnswers(null);
                setIdentityAnswers(null);
                setSelectedLoginMethod(null);
                setUserEmail(null);
                setUserPassword(null);
                setUserInfo(null);
            }
        })["Home[handleSecureSpot]"];
        $[14] = identityAnswers;
        $[15] = personalityAnswers;
        $[16] = selectedCity;
        $[17] = selectedLoginMethod;
        $[18] = selectedPlace;
        $[19] = userEmail;
        $[20] = userInfo;
        $[21] = userPassword;
        $[22] = t13;
    } else {
        t13 = $[22];
    }
    const handleSecureSpot = t13;
    let t14;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = ({
            "Home[handleClose]": ()=>{
                setQuizFlow(null);
                setSelectedCity(null);
                setSelectedPlace(null);
                setPersonalityAnswers(null);
                setIdentityAnswers(null);
                setSelectedLoginMethod(null);
                setUserEmail(null);
                setUserPassword(null);
                setUserInfo(null);
            }
        })["Home[handleClose]"];
        $[23] = t14;
    } else {
        t14 = $[23];
    }
    const handleClose = t14;
    let t15;
    let t16;
    let t17;
    let t18;
    let t19;
    let t20;
    let t21;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 265,
            columnNumber: 11
        }, this);
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 266,
            columnNumber: 11
        }, this);
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Testimonials$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 267,
            columnNumber: 11
        }, this);
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$HowItWorks$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 268,
            columnNumber: 11
        }, this);
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AboutUs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 269,
            columnNumber: 11
        }, this);
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FAQ$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 270,
            columnNumber: 11
        }, this);
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 271,
            columnNumber: 11
        }, this);
        $[24] = t15;
        $[25] = t16;
        $[26] = t17;
        $[27] = t18;
        $[28] = t19;
        $[29] = t20;
        $[30] = t21;
    } else {
        t15 = $[24];
        t16 = $[25];
        t17 = $[26];
        t18 = $[27];
        t19 = $[28];
        t20 = $[29];
        t21 = $[30];
    }
    const t22 = quizFlow === "city";
    let t23;
    if ($[31] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$CitySelectionModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CitySelectionModal$3e$__["CitySelectionModal"], {
            isOpen: t22,
            onClose: handleClose,
            onSelectCity: handleCitySelect
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 291,
            columnNumber: 11
        }, this);
        $[31] = t22;
        $[32] = t23;
    } else {
        t23 = $[32];
    }
    const t24 = quizFlow === "place";
    let t25;
    if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = ({
            "Home[<AreaSelectionModal>.onClose]": ()=>setQuizFlow("city")
        })["Home[<AreaSelectionModal>.onClose]"];
        $[33] = t25;
    } else {
        t25 = $[33];
    }
    const t26 = selectedCity?.name;
    const t27 = selectedCity?.id;
    let t28;
    if ($[34] !== t24 || $[35] !== t26 || $[36] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$AreaSelectionModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AreaSelectionModal$3e$__["AreaSelectionModal"], {
            isOpen: t24,
            onClose: t25,
            onSelectArea: handlePlaceSelect,
            city: t26,
            selectedCityId: t27
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 311,
            columnNumber: 11
        }, this);
        $[34] = t24;
        $[35] = t26;
        $[36] = t27;
        $[37] = t28;
    } else {
        t28 = $[37];
    }
    const t29 = quizFlow === "quiz";
    let t30;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t30 = ({
            "Home[<PersonalityQuiz>.onBack]": ()=>setQuizFlow("place")
        })["Home[<PersonalityQuiz>.onBack]"];
        $[38] = t30;
    } else {
        t30 = $[38];
    }
    let t31;
    if ($[39] !== t29) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$PersonalityQuiz$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PersonalityQuiz$3e$__["PersonalityQuiz"], {
            isOpen: t29,
            onClose: handleClose,
            onBack: t30,
            onComplete: handlePersonalityQuizComplete
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 331,
            columnNumber: 11
        }, this);
        $[39] = t29;
        $[40] = t31;
    } else {
        t31 = $[40];
    }
    const t32 = quizFlow === "identity";
    let t33;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t33 = ({
            "Home[<IdentityQuiz>.onBack]": ()=>setQuizFlow("quiz")
        })["Home[<IdentityQuiz>.onBack]"];
        $[41] = t33;
    } else {
        t33 = $[41];
    }
    let t34;
    if ($[42] !== t32) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$IdentityQuiz$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IdentityQuiz$3e$__["IdentityQuiz"], {
            isOpen: t32,
            onClose: handleClose,
            onBack: t33,
            onComplete: handleIdentityQuizComplete
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 349,
            columnNumber: 11
        }, this);
        $[42] = t32;
        $[43] = t34;
    } else {
        t34 = $[43];
    }
    const t35 = quizFlow === "birthday";
    let t36;
    if ($[44] === Symbol.for("react.memo_cache_sentinel")) {
        t36 = ({
            "Home[<BirthdayPicker>.onBack]": ()=>setQuizFlow("identity")
        })["Home[<BirthdayPicker>.onBack]"];
        $[44] = t36;
    } else {
        t36 = $[44];
    }
    let t37;
    if ($[45] !== t35) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$BirthdayPicker$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BirthdayPicker$3e$__["BirthdayPicker"], {
            isOpen: t35,
            onClose: handleClose,
            onBack: t36,
            onConfirm: handleBirthdayConfirm
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 367,
            columnNumber: 11
        }, this);
        $[45] = t35;
        $[46] = t37;
    } else {
        t37 = $[46];
    }
    const t38 = quizFlow === "social-login";
    let t39;
    let t40;
    if ($[47] === Symbol.for("react.memo_cache_sentinel")) {
        t39 = ({
            "Home[<SocialLoginModal>.onBackToOptions]": ()=>setQuizFlow("birthday")
        })["Home[<SocialLoginModal>.onBackToOptions]"];
        t40 = ({
            "Home[<SocialLoginModal>.onSignIn]": ()=>setQuizFlow("social-login")
        })["Home[<SocialLoginModal>.onSignIn]"];
        $[47] = t39;
        $[48] = t40;
    } else {
        t39 = $[47];
        t40 = $[48];
    }
    let t41;
    if ($[49] !== t38) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$SocialLoginModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SocialLoginModal$3e$__["SocialLoginModal"], {
            isOpen: t38,
            onClose: handleClose,
            onSelectMethod: handleSocialLoginSelect,
            onBackToOptions: t39,
            onSignIn: t40
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 391,
            columnNumber: 11
        }, this);
        $[49] = t38;
        $[50] = t41;
    } else {
        t41 = $[50];
    }
    const t42 = quizFlow === "email";
    let t43;
    if ($[51] === Symbol.for("react.memo_cache_sentinel")) {
        t43 = ({
            "Home[<EmailConfirmationModal>.onBack]": ()=>setQuizFlow("social-login")
        })["Home[<EmailConfirmationModal>.onBack]"];
        $[51] = t43;
    } else {
        t43 = $[51];
    }
    let t44;
    if ($[52] !== t42) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$EmailConfirmationModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EmailConfirmationModal$3e$__["EmailConfirmationModal"], {
            isOpen: t42,
            onClose: handleClose,
            onBack: t43,
            onContinue: handleEmailConfirm
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 409,
            columnNumber: 11
        }, this);
        $[52] = t42;
        $[53] = t44;
    } else {
        t44 = $[53];
    }
    const t45 = quizFlow === "password";
    let t46;
    if ($[54] === Symbol.for("react.memo_cache_sentinel")) {
        t46 = ({
            "Home[<PasswordCreationModal>.onBack]": ()=>setQuizFlow("email")
        })["Home[<PasswordCreationModal>.onBack]"];
        $[54] = t46;
    } else {
        t46 = $[54];
    }
    let t47;
    if ($[55] !== t45) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$PasswordCreationModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PasswordCreationModal$3e$__["PasswordCreationModal"], {
            isOpen: t45,
            onClose: handleClose,
            onBack: t46,
            onContinue: handlePasswordCreate
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 427,
            columnNumber: 11
        }, this);
        $[55] = t45;
        $[56] = t47;
    } else {
        t47 = $[56];
    }
    const t48 = quizFlow === "user-info";
    let t49;
    if ($[57] !== selectedLoginMethod) {
        t49 = ({
            "Home[<UserInfoModal>.onBack]": ()=>{
                if (selectedLoginMethod === "email") {
                    setQuizFlow("password");
                } else {
                    setQuizFlow("social-login");
                }
            }
        })["Home[<UserInfoModal>.onBack]"];
        $[57] = selectedLoginMethod;
        $[58] = t49;
    } else {
        t49 = $[58];
    }
    let t50;
    if ($[59] !== t48 || $[60] !== t49) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$UserInfoModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserInfoModal$3e$__["UserInfoModal"], {
            isOpen: t48,
            onClose: handleClose,
            onBack: t49,
            onContinue: handleUserInfoSubmit
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 452,
            columnNumber: 11
        }, this);
        $[59] = t48;
        $[60] = t49;
        $[61] = t50;
    } else {
        t50 = $[61];
    }
    const t51 = quizFlow === "welcome";
    let t52;
    if ($[62] === Symbol.for("react.memo_cache_sentinel")) {
        t52 = ({
            "Home[<WelcomeModal>.onBack]": ()=>setQuizFlow("user-info")
        })["Home[<WelcomeModal>.onBack]"];
        $[62] = t52;
    } else {
        t52 = $[62];
    }
    let t53;
    if ($[63] !== t51) {
        t53 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$WelcomeModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__WelcomeModal$3e$__["WelcomeModal"], {
            isOpen: t51,
            onClose: handleClose,
            onBack: t52,
            onNext: handleWelcomeNext
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 471,
            columnNumber: 11
        }, this);
        $[63] = t51;
        $[64] = t53;
    } else {
        t53 = $[64];
    }
    const t54 = quizFlow === "how-it-works";
    let t55;
    if ($[65] === Symbol.for("react.memo_cache_sentinel")) {
        t55 = ({
            "Home[<HowItWorksModal>.onBack]": ()=>setQuizFlow("welcome")
        })["Home[<HowItWorksModal>.onBack]"];
        $[65] = t55;
    } else {
        t55 = $[65];
    }
    let t56;
    if ($[66] !== t54) {
        t56 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$HowItWorksModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HowItWorksModal$3e$__["HowItWorksModal"], {
            isOpen: t54,
            onClose: handleClose,
            onBack: t55,
            onNext: handleHowItWorksNext
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 489,
            columnNumber: 11
        }, this);
        $[66] = t54;
        $[67] = t56;
    } else {
        t56 = $[67];
    }
    const t57 = quizFlow === "book-dinner";
    let t58;
    if ($[68] === Symbol.for("react.memo_cache_sentinel")) {
        t58 = ({
            "Home[<BookDinnerModal>.onBack]": ()=>setQuizFlow("how-it-works")
        })["Home[<BookDinnerModal>.onBack]"];
        $[68] = t58;
    } else {
        t58 = $[68];
    }
    let t59;
    if ($[69] !== handleSecureSpot || $[70] !== t57) {
        t59 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$BookDinnerModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookDinnerModal$3e$__["BookDinnerModal"], {
            isOpen: t57,
            onClose: handleClose,
            onBack: t58,
            onSecureSpot: handleSecureSpot
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 507,
            columnNumber: 11
        }, this);
        $[69] = handleSecureSpot;
        $[70] = t57;
        $[71] = t59;
    } else {
        t59 = $[71];
    }
    let t60;
    if ($[72] !== t23 || $[73] !== t28 || $[74] !== t31 || $[75] !== t34 || $[76] !== t37 || $[77] !== t41 || $[78] !== t44 || $[79] !== t47 || $[80] !== t50 || $[81] !== t53 || $[82] !== t56 || $[83] !== t59) {
        t60 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            children: [
                t15,
                t16,
                t17,
                t18,
                t19,
                t20,
                t21,
                t23,
                t28,
                t31,
                t34,
                t37,
                t41,
                t44,
                t47,
                t50,
                t53,
                t56,
                t59
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 516,
            columnNumber: 11
        }, this);
        $[72] = t23;
        $[73] = t28;
        $[74] = t31;
        $[75] = t34;
        $[76] = t37;
        $[77] = t41;
        $[78] = t44;
        $[79] = t47;
        $[80] = t50;
        $[81] = t53;
        $[82] = t56;
        $[83] = t59;
        $[84] = t60;
    } else {
        t60 = $[84];
    }
    return t60;
}
_s(Home, "ZkhTTDGNVWhokQeMkeh46uH24sU=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_f641acf6._.js.map