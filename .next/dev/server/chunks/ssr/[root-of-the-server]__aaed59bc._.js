module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/lib/analytics/metaPixel.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Meta Pixel Tracking Utility
 * 
 * This utility provides a clean interface for Meta Pixel events.
 * Events are fired only when Meta Pixel is properly initialized.
 * 
 * Usage:
 * - PageView: Automatically tracked on page navigation
 * - Purchase: firePurchaseEvent({ value, currency, content_ids })
 * - Subscribe: fireSubscribeEvent({ value, currency, content_name })
 */ // Meta Pixel ID - should be set via environment variable
__turbopack_context__.s([
    "META_PIXEL_ID",
    ()=>META_PIXEL_ID,
    "fireCustomEvent",
    ()=>fireCustomEvent,
    "firePurchaseEvent",
    ()=>firePurchaseEvent,
    "fireSubscribeEvent",
    ()=>fireSubscribeEvent,
    "initMetaPixel",
    ()=>initMetaPixel
]);
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;
function initMetaPixel() {
    if ("TURBOPACK compile-time truthy", 1) {
        console.warn('Meta Pixel ID not configured. Set NEXT_PUBLIC_META_PIXEL_ID in environment variables.');
        return;
    }
    //TURBOPACK unreachable
    ;
}
function firePurchaseEvent({ value, currency, content_ids, content_name }) {
    if ("TURBOPACK compile-time truthy", 1) {
        console.warn('Meta Pixel not initialized. Purchase event not fired.');
        return;
    }
    //TURBOPACK unreachable
    ;
    const eventData = undefined;
}
function fireSubscribeEvent({ value, currency, content_name, predicted_ltv }) {
    if ("TURBOPACK compile-time truthy", 1) {
        console.warn('Meta Pixel not initialized. Subscribe event not fired.');
        return;
    }
    //TURBOPACK unreachable
    ;
    const eventData = undefined;
}
function fireCustomEvent(eventName, eventData = {}) {
    if ("TURBOPACK compile-time truthy", 1) {
        console.warn('Meta Pixel not initialized. Custom event not fired.');
        return;
    }
    //TURBOPACK unreachable
    ;
}
}),
"[project]/components/MetaPixel.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MetaPixel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$analytics$2f$metaPixel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/analytics/metaPixel.js [app-ssr] (ecmascript)");
"use client";
;
;
function MetaPixel() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$analytics$2f$metaPixel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initMetaPixel"])();
    }, []);
    return null;
}
}),
"[project]/lib/analytics/utmTracking.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * UTM Parameter Tracking Utility
 * 
 * This utility captures and stores UTM parameters from URL for future use.
 * Currently, we only capture and store - no reporting or attribution logic required.
 * 
 * Future-proofing: This ensures UTM data can be stored on users/purchases
 * when that functionality is needed.
 */ /**
 * Extract UTM parameters from URL
 * 
 * @param {string} [url] - Optional URL string (defaults to window.location)
 * @returns {Object} Object containing UTM parameters
 */ __turbopack_context__.s([
    "clearUTMParameters",
    ()=>clearUTMParameters,
    "extractUTMParameters",
    ()=>extractUTMParameters,
    "getStoredUTMParameters",
    ()=>getStoredUTMParameters,
    "getUTMParametersForSubmission",
    ()=>getUTMParametersForSubmission,
    "storeUTMParameters",
    ()=>storeUTMParameters
]);
function extractUTMParameters(url = null) {
    if (("TURBOPACK compile-time value", "undefined") === 'undefined' && !url) {
        return {};
    }
    const urlObj = url ? new URL(url) : window.location;
    const params = new URLSearchParams(urlObj.search);
    const utmParams = {
        utm_source: params.get('utm_source') || null,
        utm_medium: params.get('utm_medium') || null,
        utm_campaign: params.get('utm_campaign') || null,
        utm_term: params.get('utm_term') || null,
        utm_content: params.get('utm_content') || null
    };
    // Remove null values
    Object.keys(utmParams).forEach((key)=>{
        if (utmParams[key] === null) {
            delete utmParams[key];
        }
    });
    return utmParams;
}
function storeUTMParameters(utmParams = null) {
    if ("TURBOPACK compile-time truthy", 1) {
        return;
    }
    //TURBOPACK unreachable
    ;
    const params = undefined;
}
function getStoredUTMParameters() {
    if ("TURBOPACK compile-time truthy", 1) {
        return {};
    }
    //TURBOPACK unreachable
    ;
}
function clearUTMParameters() {
    if ("TURBOPACK compile-time truthy", 1) {
        return;
    }
    //TURBOPACK unreachable
    ;
}
function getUTMParametersForSubmission() {
    const currentUTMs = extractUTMParameters();
    // If current URL has UTMs, use those (they're more recent)
    if (Object.keys(currentUTMs).length > 0) {
        return currentUTMs;
    }
    // Otherwise, use stored UTMs from session
    return getStoredUTMParameters();
}
}),
"[project]/components/UTMTracker.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UTMTracker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$analytics$2f$utmTracking$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/analytics/utmTracking.js [app-ssr] (ecmascript)");
"use client";
;
;
function UTMTracker() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Extract and store UTM parameters on mount
        const utmParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$analytics$2f$utmTracking$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extractUTMParameters"])();
        if (Object.keys(utmParams).length > 0) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$analytics$2f$utmTracking$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storeUTMParameters"])(utmParams);
        }
    }, []);
    return null;
}
}),
"[project]/src/components/common/NoSSR.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
/**
 * NoSSR Component
 * Prevents hydration errors by only rendering children on the client
 * Useful for components that rely on browser APIs or have browser extension conflicts
 */ const NoSSR = ({ children, fallback = null })=>{
    const [hasMounted, setHasMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setHasMounted(true);
    }, []);
    if (!hasMounted) {
        return fallback;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
};
const __TURBOPACK__default__export__ = NoSSR;
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__aaed59bc._.js.map