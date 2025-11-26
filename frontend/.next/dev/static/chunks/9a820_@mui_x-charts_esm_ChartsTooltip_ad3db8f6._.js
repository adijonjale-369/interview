(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/project-root/frontend/node_modules/@mui/x-charts/esm/ChartsTooltip/chartsTooltipClasses.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "chartsTooltipClasses",
    ()=>chartsTooltipClasses,
    "getChartsTooltipUtilityClass",
    ()=>getChartsTooltipUtilityClass,
    "useUtilityClasses",
    ()=>useUtilityClasses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$composeClasses$2f$composeClasses$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/utils/esm/composeClasses/composeClasses.js [client] (ecmascript)");
;
;
;
function getChartsTooltipUtilityClass(slot) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])('MuiChartsTooltip', slot);
}
const chartsTooltipClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])('MuiChartsTooltip', [
    'root',
    'paper',
    'table',
    'row',
    'cell',
    'mark',
    'markContainer',
    'labelCell',
    'valueCell',
    'axisValueCell'
]);
const useUtilityClasses = (classes)=>{
    const slots = {
        root: [
            'root'
        ],
        paper: [
            'paper'
        ],
        table: [
            'table'
        ],
        row: [
            'row'
        ],
        cell: [
            'cell'
        ],
        mark: [
            'mark'
        ],
        markContainer: [
            'markContainer'
        ],
        labelCell: [
            'labelCell'
        ],
        valueCell: [
            'valueCell'
        ],
        axisValueCell: [
            'axisValueCell'
        ]
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$composeClasses$2f$composeClasses$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(slots, getChartsTooltipUtilityClass, classes);
};
}),
"[project]/project-root/frontend/node_modules/@mui/x-charts/esm/ChartsTooltip/useItemTooltip.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useInternalItemTooltip",
    ()=>useInternalItemTooltip,
    "useItemTooltip",
    ()=>useItemTooltip,
    "useRadarItemTooltip",
    ()=>useRadarItemTooltip
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$hooks$2f$useSeries$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/x-charts/esm/hooks/useSeries.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$internals$2f$plugins$2f$featurePlugins$2f$useChartInteraction$2f$useChartTooltip$2e$selectors$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/x-charts/esm/internals/plugins/featurePlugins/useChartInteraction/useChartTooltip.selectors.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$internals$2f$store$2f$useSelector$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/x-charts/esm/internals/store/useSelector.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$internals$2f$store$2f$useStore$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/x-charts/esm/internals/store/useStore.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$hooks$2f$useAxis$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/x-charts/esm/hooks/useAxis.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$hooks$2f$useZAxis$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/x-charts/esm/hooks/useZAxis.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$internals$2f$plugins$2f$corePlugins$2f$useChartSeries$2f$useChartSeries$2e$selectors$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/x-charts/esm/internals/plugins/corePlugins/useChartSeries/useChartSeries.selectors.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$internals$2f$isCartesian$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/x-charts/esm/internals/isCartesian.js [client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
function useInternalItemTooltip() {
    const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$internals$2f$store$2f$useStore$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useStore"])();
    const identifier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$internals$2f$store$2f$useSelector$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useSelector"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$internals$2f$plugins$2f$featurePlugins$2f$useChartInteraction$2f$useChartTooltip$2e$selectors$2e$js__$5b$client$5d$__$28$ecmascript$29$__["selectorChartsTooltipItem"]);
    const seriesConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$internals$2f$store$2f$useSelector$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useSelector"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$internals$2f$plugins$2f$corePlugins$2f$useChartSeries$2f$useChartSeries$2e$selectors$2e$js__$5b$client$5d$__$28$ecmascript$29$__["selectorChartSeriesConfig"]);
    const series = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$hooks$2f$useSeries$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useSeries"])();
    const { xAxis, xAxisIds } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$hooks$2f$useAxis$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useXAxes"])();
    const { yAxis, yAxisIds } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$hooks$2f$useAxis$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useYAxes"])();
    const { zAxis, zAxisIds } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$hooks$2f$useZAxis$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useZAxes"])();
    const { rotationAxis, rotationAxisIds } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$hooks$2f$useAxis$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRotationAxes"])();
    if (!identifier) {
        return null;
    }
    const itemSeries = series[identifier.type]?.series[identifier.seriesId];
    if (!itemSeries) {
        return null;
    }
    const xAxisId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$internals$2f$isCartesian$2e$js__$5b$client$5d$__$28$ecmascript$29$__["isCartesianSeries"])(itemSeries) ? itemSeries.xAxisId ?? xAxisIds[0] : undefined;
    const yAxisId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$internals$2f$isCartesian$2e$js__$5b$client$5d$__$28$ecmascript$29$__["isCartesianSeries"])(itemSeries) ? itemSeries.yAxisId ?? yAxisIds[0] : undefined;
    const zAxisId = 'zAxisId' in itemSeries ? itemSeries.zAxisId ?? zAxisIds[0] : zAxisIds[0];
    const rotationAxisId = rotationAxisIds[0];
    const getColor = seriesConfig[itemSeries.type].colorProcessor?.(itemSeries, xAxisId !== undefined ? xAxis[xAxisId] : undefined, yAxisId !== undefined ? yAxis[yAxisId] : undefined, zAxisId !== undefined ? zAxis[zAxisId] : undefined) ?? (()=>'');
    const axesConfig = {};
    if (xAxisId !== undefined) {
        axesConfig.x = xAxis[xAxisId];
    }
    if (yAxisId !== undefined) {
        axesConfig.y = yAxis[yAxisId];
    }
    if (rotationAxisId !== undefined) {
        axesConfig.rotation = rotationAxis[rotationAxisId];
    }
    return seriesConfig[itemSeries.type].tooltipGetter({
        series: itemSeries,
        axesConfig,
        getColor,
        identifier
    });
}
const useItemTooltip = ()=>{
    return useInternalItemTooltip();
};
const useRadarItemTooltip = ()=>{
    return useInternalItemTooltip();
};
}),
"[project]/project-root/frontend/node_modules/@mui/x-charts/esm/ChartsTooltip/ChartsTooltipTable.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChartsTooltipCell",
    ()=>ChartsTooltipCell,
    "ChartsTooltipPaper",
    ()=>ChartsTooltipPaper,
    "ChartsTooltipRow",
    ()=>ChartsTooltipRow,
    "ChartsTooltipTable",
    ()=>ChartsTooltipTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/material/esm/styles/styled.js [client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/material/esm/Typography/Typography.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$ChartsTooltip$2f$chartsTooltipClasses$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/x-charts/esm/ChartsTooltip/chartsTooltipClasses.js [client] (ecmascript)");
;
;
;
const ChartsTooltipPaper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('div', {
    name: 'MuiChartsTooltip',
    slot: 'Container',
    overridesResolver: (props, styles)=>styles.paper // FIXME: Inconsistent naming with slot
})(({ theme })=>({
        backgroundColor: (theme.vars || theme).palette.background.paper,
        color: (theme.vars || theme).palette.text.primary,
        borderRadius: (theme.vars || theme).shape?.borderRadius,
        border: `solid ${(theme.vars || theme).palette.divider} 1px`
    }));
const ChartsTooltipTable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('table', {
    name: 'MuiChartsTooltip',
    slot: 'Table'
})(({ theme })=>({
        borderSpacing: 0,
        [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$ChartsTooltip$2f$chartsTooltipClasses$2e$js__$5b$client$5d$__$28$ecmascript$29$__["chartsTooltipClasses"].markContainer}`]: {
            display: 'inline-block',
            width: `calc(20px + ${theme.spacing(1.5)})`,
            verticalAlign: 'middle'
        },
        '& caption': {
            borderBottom: `solid ${(theme.vars || theme).palette.divider} 1px`,
            padding: theme.spacing(0.5, 1.5),
            textAlign: 'start',
            whiteSpace: 'nowrap',
            '& span': {
                marginRight: theme.spacing(1.5)
            }
        }
    }));
const ChartsTooltipRow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('tr', {
    name: 'MuiChartsTooltip',
    slot: 'Row'
})(({ theme })=>({
        'tr:first-of-type& td': {
            paddingTop: theme.spacing(0.5)
        },
        'tr:last-of-type& td': {
            paddingBottom: theme.spacing(0.5)
        }
    }));
const ChartsTooltipCell = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
    name: 'MuiChartsTooltip',
    slot: 'Cell'
})(({ theme })=>({
        verticalAlign: 'middle',
        color: (theme.vars || theme).palette.text.secondary,
        textAlign: 'start',
        [`&.${__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$ChartsTooltip$2f$chartsTooltipClasses$2e$js__$5b$client$5d$__$28$ecmascript$29$__["chartsTooltipClasses"].cell}`]: {
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1)
        },
        [`&.${__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$ChartsTooltip$2f$chartsTooltipClasses$2e$js__$5b$client$5d$__$28$ecmascript$29$__["chartsTooltipClasses"].labelCell}`]: {
            whiteSpace: 'nowrap',
            fontWeight: theme.typography.fontWeightRegular
        },
        [`&.${__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$ChartsTooltip$2f$chartsTooltipClasses$2e$js__$5b$client$5d$__$28$ecmascript$29$__["chartsTooltipClasses"].valueCell}, &.${__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$ChartsTooltip$2f$chartsTooltipClasses$2e$js__$5b$client$5d$__$28$ecmascript$29$__["chartsTooltipClasses"].axisValueCell}`]: {
            color: (theme.vars || theme).palette.text.primary,
            fontWeight: theme.typography.fontWeightMedium
        },
        [`&.${__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$ChartsTooltip$2f$chartsTooltipClasses$2e$js__$5b$client$5d$__$28$ecmascript$29$__["chartsTooltipClasses"].valueCell}`]: {
            paddingLeft: theme.spacing(1.5),
            paddingRight: theme.spacing(1.5)
        },
        'td:first-of-type&, th:first-of-type&': {
            paddingLeft: theme.spacing(1.5)
        },
        'td:last-of-type&, th:last-of-type&': {
            paddingRight: theme.spacing(1.5)
        }
    }));
}),
"[project]/project-root/frontend/node_modules/@mui/x-charts/esm/ChartsTooltip/ChartsItemTooltipContent.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChartsItemTooltipContent",
    ()=>ChartsItemTooltipContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/project-root/frontend/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/prop-types/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/clsx/dist/clsx.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/material/esm/Typography/Typography.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$ChartsTooltip$2f$chartsTooltipClasses$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/x-charts/esm/ChartsTooltip/chartsTooltipClasses.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$ChartsTooltip$2f$useItemTooltip$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/x-charts/esm/ChartsTooltip/useItemTooltip.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$ChartsTooltip$2f$ChartsTooltipTable$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/x-charts/esm/ChartsTooltip/ChartsTooltipTable.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$ChartsLabel$2f$ChartsLabelMark$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/x-charts/esm/ChartsLabel/ChartsLabelMark.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/react/jsx-runtime.js [client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
function ChartsItemTooltipContent(props) {
    const { classes: propClasses, sx } = props;
    const tooltipData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$ChartsTooltip$2f$useItemTooltip$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useInternalItemTooltip"])();
    const classes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$ChartsTooltip$2f$chartsTooltipClasses$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useUtilityClasses"])(propClasses);
    if (!tooltipData) {
        return null;
    }
    if ('values' in tooltipData) {
        const { label: seriesLabel, color, markType } = tooltipData;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$ChartsTooltip$2f$ChartsTooltipTable$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ChartsTooltipPaper"], {
            sx: sx,
            className: classes.paper,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$ChartsTooltip$2f$ChartsTooltipTable$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ChartsTooltipTable"], {
                className: classes.table,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        component: "caption",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                className: classes.markContainer,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$ChartsLabel$2f$ChartsLabelMark$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ChartsLabelMark"], {
                                    type: markType,
                                    color: color,
                                    className: classes.mark
                                })
                            }),
                            seriesLabel
                        ]
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])("tbody", {
                        children: tooltipData.values.map(({ formattedValue, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$ChartsTooltip$2f$ChartsTooltipTable$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ChartsTooltipRow"], {
                                className: classes.row,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$ChartsTooltip$2f$ChartsTooltipTable$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ChartsTooltipCell"], {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"])(classes.labelCell, classes.cell),
                                        component: "th",
                                        children: label
                                    }),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$ChartsTooltip$2f$ChartsTooltipTable$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ChartsTooltipCell"], {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"])(classes.valueCell, classes.cell),
                                        component: "td",
                                        children: formattedValue
                                    })
                                ]
                            }, label))
                    })
                ]
            })
        });
    }
    const { color, label, formattedValue, markType } = tooltipData;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$ChartsTooltip$2f$ChartsTooltipTable$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ChartsTooltipPaper"], {
        sx: sx,
        className: classes.paper,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$ChartsTooltip$2f$ChartsTooltipTable$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ChartsTooltipTable"], {
            className: classes.table,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])("tbody", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$ChartsTooltip$2f$ChartsTooltipTable$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ChartsTooltipRow"], {
                    className: classes.row,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$ChartsTooltip$2f$ChartsTooltipTable$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ChartsTooltipCell"], {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"])(classes.labelCell, classes.cell),
                            component: "th",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                    className: classes.markContainer,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$ChartsLabel$2f$ChartsLabelMark$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ChartsLabelMark"], {
                                        type: markType,
                                        color: color,
                                        className: classes.mark
                                    })
                                }),
                                label
                            ]
                        }),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$ChartsTooltip$2f$ChartsTooltipTable$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ChartsTooltipCell"], {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"])(classes.valueCell, classes.cell),
                            component: "td",
                            children: formattedValue
                        })
                    ]
                })
            })
        })
    });
}
("TURBOPACK compile-time truthy", 1) ? ChartsItemTooltipContent.propTypes = {
    // ----------------------------- Warning --------------------------------
    // | These PropTypes are generated from the TypeScript type definitions |
    // | To update them edit the TypeScript types and run "pnpm proptypes"  |
    // ----------------------------------------------------------------------
    /**
   * Override or extend the styles applied to the component.
   */ classes: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object,
    sx: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
            __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].func,
            __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object,
            __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bool
        ])),
        __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].func,
        __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object
    ])
} : "TURBOPACK unreachable";
;
}),
"[project]/project-root/frontend/node_modules/@mui/x-charts/esm/ChartsTooltip/utils.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useIsFineMainPointer",
    ()=>useIsFineMainPointer,
    "useMouseTracker",
    ()=>useMouseTracker,
    "usePointerType",
    ()=>usePointerType,
    "utcFormatter",
    ()=>utcFormatter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/material/esm/useMediaQuery/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$context$2f$ChartProvider$2f$useChartContext$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/x-charts/esm/context/ChartProvider/useChartContext.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$hooks$2f$useSvgRef$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/x-charts/esm/hooks/useSvgRef.js [client] (ecmascript)");
'use client';
;
;
;
;
function useMouseTracker() {
    const { instance } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$context$2f$ChartProvider$2f$useChartContext$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useChartContext"])();
    // Use a ref to avoid rerendering on every mousemove event.
    const [mousePosition, setMousePosition] = __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useMouseTracker.useEffect": ()=>{
            const moveEndHandler = instance.addInteractionListener('moveEnd', {
                "useMouseTracker.useEffect.moveEndHandler": (event)=>{
                    if (!event.detail.activeGestures.pan) {
                        setMousePosition(null);
                    }
                }
            }["useMouseTracker.useEffect.moveEndHandler"]);
            const gestureHandler = {
                "useMouseTracker.useEffect.gestureHandler": (event)=>{
                    setMousePosition({
                        x: event.detail.centroid.x,
                        y: event.detail.centroid.y,
                        height: event.detail.srcEvent.height,
                        pointerType: event.detail.srcEvent.pointerType
                    });
                }
            }["useMouseTracker.useEffect.gestureHandler"];
            const moveHandler = instance.addInteractionListener('move', gestureHandler);
            const panHandler = instance.addInteractionListener('pan', gestureHandler);
            return ({
                "useMouseTracker.useEffect": ()=>{
                    moveHandler.cleanup();
                    panHandler.cleanup();
                    moveEndHandler.cleanup();
                }
            })["useMouseTracker.useEffect"];
        }
    }["useMouseTracker.useEffect"], [
        instance
    ]);
    return mousePosition;
}
function usePointerType() {
    const svgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$hooks$2f$useSvgRef$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useSvgRef"])();
    const [pointerType, setPointerType] = __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "usePointerType.useEffect": ()=>{
            const element = svgRef.current;
            if (element === null) {
                return ({
                    "usePointerType.useEffect": ()=>{}
                })["usePointerType.useEffect"];
            }
            const handleOut = {
                "usePointerType.useEffect.handleOut": (event)=>{
                    if (event.pointerType !== 'mouse') {
                        setPointerType(null);
                    }
                }
            }["usePointerType.useEffect.handleOut"];
            const handleEnter = {
                "usePointerType.useEffect.handleEnter": (event)=>{
                    setPointerType({
                        pointerType: event.pointerType
                    });
                }
            }["usePointerType.useEffect.handleEnter"];
            element.addEventListener('pointerenter', handleEnter);
            element.addEventListener('pointerup', handleOut);
            return ({
                "usePointerType.useEffect": ()=>{
                    element.removeEventListener('pointerenter', handleEnter);
                    element.removeEventListener('pointerup', handleOut);
                }
            })["usePointerType.useEffect"];
        }
    }["usePointerType.useEffect"], [
        svgRef
    ]);
    return pointerType;
}
function utcFormatter(v) {
    if (v instanceof Date) {
        return v.toUTCString();
    }
    return v.toLocaleString();
}
// Taken from @mui/x-date-time-pickers
const mainPointerFineMediaQuery = '@media (pointer: fine)';
const useIsFineMainPointer = ()=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(mainPointerFineMediaQuery, {
        defaultMatches: true
    });
};
}),
"[project]/project-root/frontend/node_modules/@mui/x-charts/esm/ChartsTooltip/useAxisTooltip.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAxisTooltip",
    ()=>useAxisTooltip
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$hooks$2f$useSeries$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/x-charts/esm/hooks/useSeries.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$internals$2f$plugins$2f$corePlugins$2f$useChartSeries$2f$useColorProcessor$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/x-charts/esm/internals/plugins/corePlugins/useChartSeries/useColorProcessor.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$internals$2f$store$2f$useStore$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/x-charts/esm/internals/store/useStore.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$internals$2f$store$2f$useSelector$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/x-charts/esm/internals/store/useSelector.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$internals$2f$getLabel$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/x-charts/esm/internals/getLabel.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$internals$2f$isCartesian$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/x-charts/esm/internals/isCartesian.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$ChartsTooltip$2f$utils$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/x-charts/esm/ChartsTooltip/utils.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$hooks$2f$useAxis$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/x-charts/esm/hooks/useAxis.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$hooks$2f$useZAxis$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/x-charts/esm/hooks/useZAxis.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$internals$2f$plugins$2f$featurePlugins$2f$useChartCartesianAxis$2f$useChartCartesianInteraction$2e$selectors$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/x-charts/esm/internals/plugins/featurePlugins/useChartCartesianAxis/useChartCartesianInteraction.selectors.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$internals$2f$plugins$2f$featurePlugins$2f$useChartPolarAxis$2f$useChartPolarInteraction$2e$selectors$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/x-charts/esm/internals/plugins/featurePlugins/useChartPolarAxis/useChartPolarInteraction.selectors.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$internals$2f$isPolar$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/x-charts/esm/internals/isPolar.js [client] (ecmascript)");
'use client';
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
function defaultAxisTooltipConfig(axis, dataIndex, axisDirection) {
    const axisValue = axis.data?.[dataIndex] ?? null;
    const axisFormatter = axis.valueFormatter ?? ((v)=>axis.scaleType === 'utc' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$ChartsTooltip$2f$utils$2e$js__$5b$client$5d$__$28$ecmascript$29$__["utcFormatter"])(v) : v.toLocaleString());
    const axisFormattedValue = axisFormatter(axisValue, {
        location: 'tooltip',
        scale: axis.scale
    });
    return {
        axisDirection,
        axisId: axis.id,
        mainAxis: axis,
        dataIndex,
        axisValue,
        axisFormattedValue,
        seriesItems: []
    };
}
function useAxisTooltip(params = {}) {
    const { multipleAxes, directions } = params;
    const defaultXAxis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$hooks$2f$useAxis$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useXAxis"])();
    const defaultYAxis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$hooks$2f$useAxis$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useYAxis"])();
    const defaultRotationAxis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$hooks$2f$useAxis$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRotationAxis"])();
    const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$internals$2f$store$2f$useStore$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useStore"])();
    const tooltipXAxes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$internals$2f$store$2f$useSelector$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useSelector"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$internals$2f$plugins$2f$featurePlugins$2f$useChartCartesianAxis$2f$useChartCartesianInteraction$2e$selectors$2e$js__$5b$client$5d$__$28$ecmascript$29$__["selectorChartsInteractionTooltipXAxes"]);
    const tooltipYAxes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$internals$2f$store$2f$useSelector$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useSelector"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$internals$2f$plugins$2f$featurePlugins$2f$useChartCartesianAxis$2f$useChartCartesianInteraction$2e$selectors$2e$js__$5b$client$5d$__$28$ecmascript$29$__["selectorChartsInteractionTooltipYAxes"]);
    const tooltipRotationAxes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$internals$2f$store$2f$useSelector$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useSelector"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$internals$2f$plugins$2f$featurePlugins$2f$useChartPolarAxis$2f$useChartPolarInteraction$2e$selectors$2e$js__$5b$client$5d$__$28$ecmascript$29$__["selectorChartsInteractionTooltipRotationAxes"]);
    const series = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$hooks$2f$useSeries$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useSeries"])();
    const { xAxis } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$hooks$2f$useAxis$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useXAxes"])();
    const { yAxis } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$hooks$2f$useAxis$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useYAxes"])();
    const { zAxis, zAxisIds } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$hooks$2f$useZAxis$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useZAxes"])();
    const { rotationAxis } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$hooks$2f$useAxis$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRotationAxes"])();
    const colorProcessors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$internals$2f$plugins$2f$corePlugins$2f$useChartSeries$2f$useColorProcessor$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useColorProcessor"])();
    if (tooltipXAxes.length === 0 && tooltipYAxes.length === 0 && tooltipRotationAxes.length === 0) {
        return null;
    }
    const tooltipAxes = [];
    if (directions === undefined || directions.includes('x')) {
        tooltipXAxes.forEach(({ axisId, dataIndex })=>{
            if (!multipleAxes && tooltipAxes.length > 1) {
                return;
            }
            tooltipAxes.push(defaultAxisTooltipConfig(xAxis[axisId], dataIndex, 'x'));
        });
    }
    if (directions === undefined || directions.includes('y')) {
        tooltipYAxes.forEach(({ axisId, dataIndex })=>{
            if (!multipleAxes && tooltipAxes.length > 1) {
                return;
            }
            tooltipAxes.push(defaultAxisTooltipConfig(yAxis[axisId], dataIndex, 'y'));
        });
    }
    if (directions === undefined || directions.includes('rotation')) {
        tooltipRotationAxes.forEach(({ axisId, dataIndex })=>{
            if (!multipleAxes && tooltipAxes.length > 1) {
                return;
            }
            tooltipAxes.push(defaultAxisTooltipConfig(rotationAxis[axisId], dataIndex, 'rotation'));
        });
    }
    Object.keys(series).filter(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$internals$2f$isCartesian$2e$js__$5b$client$5d$__$28$ecmascript$29$__["isCartesianSeriesType"]).forEach((seriesType)=>{
        const seriesOfType = series[seriesType];
        if (!seriesOfType) {
            return [];
        }
        return seriesOfType.seriesOrder.forEach((seriesId)=>{
            const seriesToAdd = seriesOfType.series[seriesId];
            const providedXAxisId = seriesToAdd.xAxisId ?? defaultXAxis.id;
            const providedYAxisId = seriesToAdd.yAxisId ?? defaultYAxis.id;
            const tooltipItemIndex = tooltipAxes.findIndex(({ axisDirection, axisId })=>axisDirection === 'x' && axisId === providedXAxisId || axisDirection === 'y' && axisId === providedYAxisId);
            // Test if the series uses the default axis
            if (tooltipItemIndex >= 0) {
                const zAxisId = 'zAxisId' in seriesToAdd ? seriesToAdd.zAxisId : zAxisIds[0];
                const { dataIndex } = tooltipAxes[tooltipItemIndex];
                const color = colorProcessors[seriesType]?.(seriesToAdd, xAxis[providedXAxisId], yAxis[providedYAxisId], zAxisId ? zAxis[zAxisId] : undefined)(dataIndex) ?? '';
                const value = seriesToAdd.data[dataIndex] ?? null;
                const formattedValue = seriesToAdd.valueFormatter(value, {
                    dataIndex
                });
                const formattedLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$internals$2f$getLabel$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getLabel"])(seriesToAdd.label, 'tooltip') ?? null;
                tooltipAxes[tooltipItemIndex].seriesItems.push({
                    seriesId,
                    color,
                    value,
                    formattedValue,
                    formattedLabel,
                    markType: seriesToAdd.labelMarkType
                });
            }
        });
    });
    Object.keys(series).filter(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$internals$2f$isPolar$2e$js__$5b$client$5d$__$28$ecmascript$29$__["isPolarSeriesType"]).forEach((seriesType)=>{
        const seriesOfType = series[seriesType];
        if (!seriesOfType) {
            return [];
        }
        return seriesOfType.seriesOrder.forEach((seriesId)=>{
            const seriesToAdd = seriesOfType.series[seriesId];
            const providedRotationAxisId = // @ts-expect-error Should be fixed when we introduce a polar series with a rotationAxisId
            seriesToAdd.rotationAxisId ?? defaultRotationAxis?.id;
            const tooltipItemIndex = tooltipAxes.findIndex(({ axisDirection, axisId })=>axisDirection === 'rotation' && axisId === providedRotationAxisId);
            // Test if the series uses the default axis
            if (tooltipItemIndex >= 0) {
                const { dataIndex } = tooltipAxes[tooltipItemIndex];
                const color = colorProcessors[seriesType]?.(seriesToAdd)(dataIndex) ?? '';
                const value = seriesToAdd.data[dataIndex] ?? null;
                const formattedValue = seriesToAdd.valueFormatter(value, {
                    dataIndex
                });
                const formattedLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$internals$2f$getLabel$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getLabel"])(seriesToAdd.label, 'tooltip') ?? null;
                tooltipAxes[tooltipItemIndex].seriesItems.push({
                    seriesId,
                    color,
                    value,
                    formattedValue,
                    formattedLabel,
                    markType: seriesToAdd.labelMarkType
                });
            }
        });
    });
    if (!multipleAxes) {
        return tooltipAxes.length === 0 ? tooltipAxes[0] : null;
    }
    return tooltipAxes;
}
}),
"[project]/project-root/frontend/node_modules/@mui/x-charts/esm/ChartsTooltip/useAxesTooltip.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAxesTooltip",
    ()=>useAxesTooltip
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@babel/runtime/helpers/esm/extends.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$ChartsTooltip$2f$useAxisTooltip$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/x-charts/esm/ChartsTooltip/useAxisTooltip.js [client] (ecmascript)");
'use client';
;
;
function useAxesTooltip(params) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$ChartsTooltip$2f$useAxisTooltip$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useAxisTooltip"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({}, params, {
        multipleAxes: true
    }));
}
}),
"[project]/project-root/frontend/node_modules/@mui/x-charts/esm/ChartsTooltip/ChartsAxisTooltipContent.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChartsAxisTooltipContent",
    ()=>ChartsAxisTooltipContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/project-root/frontend/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/prop-types/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/material/esm/Typography/Typography.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/clsx/dist/clsx.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$ChartsTooltip$2f$chartsTooltipClasses$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/x-charts/esm/ChartsTooltip/chartsTooltipClasses.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$ChartsTooltip$2f$ChartsTooltipTable$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/x-charts/esm/ChartsTooltip/ChartsTooltipTable.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$ChartsTooltip$2f$useAxesTooltip$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/x-charts/esm/ChartsTooltip/useAxesTooltip.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$ChartsLabel$2f$ChartsLabelMark$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/x-charts/esm/ChartsLabel/ChartsLabelMark.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/react/jsx-runtime.js [client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
function ChartsAxisTooltipContent(props) {
    const classes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$ChartsTooltip$2f$chartsTooltipClasses$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useUtilityClasses"])(props.classes);
    const tooltipData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$ChartsTooltip$2f$useAxesTooltip$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useAxesTooltip"])();
    if (tooltipData === null) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$ChartsTooltip$2f$ChartsTooltipTable$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ChartsTooltipPaper"], {
        sx: props.sx,
        className: classes.paper,
        children: tooltipData.map(({ axisId, mainAxis, axisValue, axisFormattedValue, seriesItems })=>{
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$ChartsTooltip$2f$ChartsTooltipTable$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ChartsTooltipTable"], {
                className: classes.table,
                children: [
                    axisValue != null && !mainAxis.hideTooltip && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        component: "caption",
                        children: axisFormattedValue
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])("tbody", {
                        children: seriesItems.map(({ seriesId, color, formattedValue, formattedLabel, markType })=>{
                            if (formattedValue == null) {
                                return null;
                            }
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$ChartsTooltip$2f$ChartsTooltipTable$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ChartsTooltipRow"], {
                                className: classes.row,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$ChartsTooltip$2f$ChartsTooltipTable$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ChartsTooltipCell"], {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"])(classes.labelCell, classes.cell),
                                        component: "th",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                className: classes.markContainer,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$ChartsLabel$2f$ChartsLabelMark$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ChartsLabelMark"], {
                                                    type: markType,
                                                    color: color,
                                                    className: classes.mark
                                                })
                                            }),
                                            formattedLabel || null
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$ChartsTooltip$2f$ChartsTooltipTable$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ChartsTooltipCell"], {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"])(classes.valueCell, classes.cell),
                                        component: "td",
                                        children: formattedValue
                                    })
                                ]
                            }, seriesId);
                        })
                    })
                ]
            }, axisId);
        })
    });
}
("TURBOPACK compile-time truthy", 1) ? ChartsAxisTooltipContent.propTypes = {
    // ----------------------------- Warning --------------------------------
    // | These PropTypes are generated from the TypeScript type definitions |
    // | To update them edit the TypeScript types and run "pnpm proptypes"  |
    // ----------------------------------------------------------------------
    /**
   * Override or extend the styles applied to the component.
   */ classes: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object,
    sx: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
            __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].func,
            __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object,
            __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bool
        ])),
        __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].func,
        __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object
    ])
} : "TURBOPACK unreachable";
;
}),
"[project]/project-root/frontend/node_modules/@mui/x-charts/esm/ChartsTooltip/ChartsTooltipContainer.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChartsTooltipContainer",
    ()=>ChartsTooltipContainer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/project-root/frontend/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@babel/runtime/helpers/esm/extends.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/prop-types/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$HTMLElementType$2f$HTMLElementType$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/utils/esm/HTMLElementType/HTMLElementType.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useLazyRef$2f$useLazyRef$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/utils/esm/useLazyRef/useLazyRef.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/material/esm/styles/styled.js [client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/material/esm/styles/useThemeProps.js [client] (ecmascript) <export default as useThemeProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Popper$2f$Popper$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/material/esm/Popper/Popper.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$NoSsr$2f$NoSsr$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/material/esm/NoSsr/NoSsr.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$internals$2f$esm$2f$rafThrottle$2f$rafThrottle$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/x-internals/esm/rafThrottle/rafThrottle.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$ChartsTooltip$2f$utils$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/x-charts/esm/ChartsTooltip/utils.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$ChartsTooltip$2f$chartsTooltipClasses$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/x-charts/esm/ChartsTooltip/chartsTooltipClasses.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$internals$2f$store$2f$useSelector$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/x-charts/esm/internals/store/useSelector.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$internals$2f$store$2f$useStore$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/x-charts/esm/internals/store/useStore.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$internals$2f$plugins$2f$featurePlugins$2f$useChartInteraction$2f$useChartInteraction$2e$selectors$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/x-charts/esm/internals/plugins/featurePlugins/useChartInteraction/useChartInteraction.selectors.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$internals$2f$plugins$2f$featurePlugins$2f$useChartInteraction$2f$useChartTooltip$2e$selectors$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/x-charts/esm/internals/plugins/featurePlugins/useChartInteraction/useChartTooltip.selectors.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$internals$2f$plugins$2f$featurePlugins$2f$useChartCartesianAxis$2f$useChartCartesianInteraction$2e$selectors$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/x-charts/esm/internals/plugins/featurePlugins/useChartCartesianAxis/useChartCartesianInteraction.selectors.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$internals$2f$plugins$2f$featurePlugins$2f$useChartPolarAxis$2f$useChartPolarInteraction$2e$selectors$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/x-charts/esm/internals/plugins/featurePlugins/useChartPolarAxis/useChartPolarInteraction.selectors.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$hooks$2f$useAxisSystem$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/x-charts/esm/hooks/useAxisSystem.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$hooks$2f$useSvgRef$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/x-charts/esm/hooks/useSvgRef.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$internals$2f$plugins$2f$featurePlugins$2f$useChartBrush$2f$useChartBrush$2e$selectors$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/x-charts/esm/internals/plugins/featurePlugins/useChartBrush/useChartBrush.selectors.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/react/jsx-runtime.js [client] (ecmascript)");
'use client';
;
;
const _excluded = [
    "trigger",
    "position",
    "anchor",
    "classes",
    "children"
];
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
;
;
const selectorReturnFalse = ()=>false;
function getIsOpenSelector(trigger, axisSystem, shouldPreventBecauseOfBrush) {
    if (shouldPreventBecauseOfBrush) {
        return selectorReturnFalse;
    }
    if (trigger === 'item') {
        return __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$internals$2f$plugins$2f$featurePlugins$2f$useChartInteraction$2f$useChartTooltip$2e$selectors$2e$js__$5b$client$5d$__$28$ecmascript$29$__["selectorChartsTooltipItemIsDefined"];
    }
    if (axisSystem === 'polar') {
        return __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$internals$2f$plugins$2f$featurePlugins$2f$useChartPolarAxis$2f$useChartPolarInteraction$2e$selectors$2e$js__$5b$client$5d$__$28$ecmascript$29$__["selectorChartsInteractionPolarAxisTooltip"];
    }
    if (axisSystem === 'cartesian') {
        return __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$internals$2f$plugins$2f$featurePlugins$2f$useChartCartesianAxis$2f$useChartCartesianInteraction$2e$selectors$2e$js__$5b$client$5d$__$28$ecmascript$29$__["selectorChartsInteractionAxisTooltip"];
    }
    return selectorReturnFalse;
}
const ChartsTooltipRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Popper$2f$Popper$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
    name: 'MuiChartsTooltip',
    slot: 'Root'
})(({ theme })=>({
        pointerEvents: 'none',
        zIndex: theme.zIndex.modal
    }));
/**
 * Demos:
 *
 * - [ChartsTooltip](https://mui.com/x/react-charts/tooltip/)
 *
 * API:
 *
 * - [ChartsTooltip API](https://mui.com/x/api/charts/charts-tool-tip/)
 */ function ChartsTooltipContainer(inProps) {
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__["useThemeProps"])({
        props: inProps,
        name: 'MuiChartsTooltipContainer'
    });
    const { trigger = 'axis', position, anchor = 'pointer', classes: propClasses, children } = props, other = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(props, _excluded);
    const svgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$hooks$2f$useSvgRef$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useSvgRef"])();
    const classes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$ChartsTooltip$2f$chartsTooltipClasses$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useUtilityClasses"])(propClasses);
    const pointerType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$ChartsTooltip$2f$utils$2e$js__$5b$client$5d$__$28$ecmascript$29$__["usePointerType"])();
    const isFineMainPointer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$ChartsTooltip$2f$utils$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useIsFineMainPointer"])();
    const popperRef = __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const positionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useLazyRef$2f$useLazyRef$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({
        "ChartsTooltipContainer.useLazyRef[positionRef]": ()=>({
                x: 0,
                y: 0
            })
    }["ChartsTooltipContainer.useLazyRef[positionRef]"]);
    const axisSystem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$hooks$2f$useAxisSystem$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useAxisSystem"])();
    const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$internals$2f$store$2f$useStore$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useStore"])();
    const shouldPreventBecauseOfBrush = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$internals$2f$store$2f$useSelector$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useSelector"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$internals$2f$plugins$2f$featurePlugins$2f$useChartBrush$2f$useChartBrush$2e$selectors$2e$js__$5b$client$5d$__$28$ecmascript$29$__["selectorBrushShouldPreventTooltip"]);
    const isOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$internals$2f$store$2f$useSelector$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useSelector"])(store, getIsOpenSelector(trigger, axisSystem, shouldPreventBecauseOfBrush));
    const lastInteraction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$internals$2f$store$2f$useSelector$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useSelector"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$internals$2f$plugins$2f$featurePlugins$2f$useChartInteraction$2f$useChartInteraction$2e$selectors$2e$js__$5b$client$5d$__$28$ecmascript$29$__["selectorChartsLastInteraction"]);
    const computedAnchor = lastInteraction === 'keyboard' ? 'node' : anchor;
    const itemPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$internals$2f$store$2f$useSelector$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useSelector"])(store, trigger === 'item' && computedAnchor === 'node' ? __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$internals$2f$plugins$2f$featurePlugins$2f$useChartInteraction$2f$useChartTooltip$2e$selectors$2e$js__$5b$client$5d$__$28$ecmascript$29$__["selectorChartsTooltipItemPosition"] : ({
        "ChartsTooltipContainer.useSelector[itemPosition]": ()=>null
    })["ChartsTooltipContainer.useSelector[itemPosition]"], [
        position
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "ChartsTooltipContainer.useEffect": ()=>{
            const svgElement = svgRef.current;
            if (svgElement === null) {
                return ({
                    "ChartsTooltipContainer.useEffect": ()=>{}
                })["ChartsTooltipContainer.useEffect"];
            }
            if (itemPosition !== null) {
                const positionUpdate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$internals$2f$esm$2f$rafThrottle$2f$rafThrottle$2e$js__$5b$client$5d$__$28$ecmascript$29$__["rafThrottle"])({
                    "ChartsTooltipContainer.useEffect.positionUpdate": ()=>{
                        // eslint-disable-next-line react-compiler/react-compiler
                        positionRef.current = {
                            x: svgElement.getBoundingClientRect().left + (itemPosition?.x ?? 0),
                            y: svgElement.getBoundingClientRect().top + (itemPosition?.y ?? 0)
                        };
                        popperRef.current?.update();
                    }
                }["ChartsTooltipContainer.useEffect.positionUpdate"]);
                positionUpdate();
                return ({
                    "ChartsTooltipContainer.useEffect": ()=>positionUpdate.clear()
                })["ChartsTooltipContainer.useEffect"];
            }
            const pointerUpdate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$internals$2f$esm$2f$rafThrottle$2f$rafThrottle$2e$js__$5b$client$5d$__$28$ecmascript$29$__["rafThrottle"])({
                "ChartsTooltipContainer.useEffect.pointerUpdate": (x, y)=>{
                    positionRef.current = {
                        x,
                        y
                    };
                    popperRef.current?.update();
                }
            }["ChartsTooltipContainer.useEffect.pointerUpdate"]);
            const handlePointerEvent = {
                "ChartsTooltipContainer.useEffect.handlePointerEvent": (event)=>{
                    pointerUpdate(event.clientX, event.clientY);
                }
            }["ChartsTooltipContainer.useEffect.handlePointerEvent"];
            svgElement.addEventListener('pointerdown', handlePointerEvent);
            svgElement.addEventListener('pointermove', handlePointerEvent);
            svgElement.addEventListener('pointerenter', handlePointerEvent);
            return ({
                "ChartsTooltipContainer.useEffect": ()=>{
                    svgElement.removeEventListener('pointerdown', handlePointerEvent);
                    svgElement.removeEventListener('pointermove', handlePointerEvent);
                    svgElement.removeEventListener('pointerenter', handlePointerEvent);
                    pointerUpdate.clear();
                }
            })["ChartsTooltipContainer.useEffect"];
        }
    }["ChartsTooltipContainer.useEffect"], [
        svgRef,
        positionRef,
        itemPosition
    ]);
    const anchorEl = __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "ChartsTooltipContainer.useMemo[anchorEl]": ()=>({
                getBoundingClientRect: ({
                    "ChartsTooltipContainer.useMemo[anchorEl]": ()=>({
                            x: positionRef.current.x,
                            y: positionRef.current.y,
                            top: positionRef.current.y,
                            left: positionRef.current.x,
                            right: positionRef.current.x,
                            bottom: positionRef.current.y,
                            width: 0,
                            height: 0,
                            toJSON: ({
                                "ChartsTooltipContainer.useMemo[anchorEl]": ()=>''
                            })["ChartsTooltipContainer.useMemo[anchorEl]"]
                        })
                })["ChartsTooltipContainer.useMemo[anchorEl]"]
            })
    }["ChartsTooltipContainer.useMemo[anchorEl]"], [
        positionRef
    ]);
    const isMouse = pointerType?.pointerType === 'mouse' || isFineMainPointer;
    const isTouch = pointerType?.pointerType === 'touch' || !isFineMainPointer;
    const modifiers = __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "ChartsTooltipContainer.useMemo[modifiers]": ()=>[
                {
                    name: 'offset',
                    options: {
                        offset: {
                            "ChartsTooltipContainer.useMemo[modifiers]": ()=>{
                                if (isTouch) {
                                    return [
                                        0,
                                        64
                                    ];
                                }
                                // The popper offset: [skidding, distance]
                                return [
                                    0,
                                    8
                                ];
                            }
                        }["ChartsTooltipContainer.useMemo[modifiers]"]
                    }
                },
                ...!isMouse ? [
                    {
                        name: 'flip',
                        options: {
                            fallbackPlacements: [
                                'top-end',
                                'top-start',
                                'bottom-end',
                                'bottom'
                            ]
                        }
                    }
                ] : [],
                // Keep default behavior
                {
                    name: 'preventOverflow',
                    options: {
                        altAxis: true
                    }
                }
            ]
    }["ChartsTooltipContainer.useMemo[modifiers]"], [
        isMouse,
        isTouch
    ]);
    if (trigger === 'none') {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$NoSsr$2f$NoSsr$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
        children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(ChartsTooltipRoot, (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({}, other, {
            className: classes?.root,
            open: isOpen,
            placement: other.placement ?? position ?? (isMouse ? 'right-start' : 'top'),
            popperRef: popperRef,
            anchorEl: anchorEl,
            modifiers: modifiers,
            children: children
        }))
    });
}
("TURBOPACK compile-time truthy", 1) ? ChartsTooltipContainer.propTypes = {
    // ----------------------------- Warning --------------------------------
    // | These PropTypes are generated from the TypeScript type definitions |
    // | To update them edit the TypeScript types and run "pnpm proptypes"  |
    // ----------------------------------------------------------------------
    /**
   * Determine if the tooltip should be placed on the pointer location or on the node.
   * @default 'pointer'
   */ anchor: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].oneOf([
        'node',
        'pointer'
    ]),
    /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */ anchorEl: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"] /* @typescript-to-proptypes-ignore */ .oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$HTMLElementType$2f$HTMLElementType$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object,
        __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    /**
   * Popper render function or node.
   */ children: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].node,
    /**
   * Override or extend the styles applied to the component.
   */ classes: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */ component: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].elementType,
    /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in a future major release. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   * @default {}
   */ components: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].shape({
        Root: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].elementType
    }),
    /**
   * The props used for each slot inside the Popper.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in a future major release. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   * @default {}
   */ componentsProps: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].shape({
        root: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
            __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].func,
            __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object
        ])
    }),
    /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */ container: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        (props, propName)=>{
            if (props[propName] == null) {
                return new Error(`Prop '${propName}' is required but wasn't specified`);
            }
            if (typeof props[propName] !== 'object' || props[propName].nodeType !== 1) {
                return new Error(`Expected prop '${propName}' to be of type Element`);
            }
            return null;
        },
        __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */ disablePortal: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */ keepMounted: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */ modifiers: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].shape({
        data: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object,
        effect: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].func,
        enabled: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bool,
        fn: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].func,
        name: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].any,
        options: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object,
        phase: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].oneOf([
            'afterMain',
            'afterRead',
            'afterWrite',
            'beforeMain',
            'beforeRead',
            'beforeWrite',
            'main',
            'read',
            'write'
        ]),
        requires: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string),
        requiresIfExists: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string)
    })),
    /**
   * If `true`, the component is shown.
   */ open: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * Popper placement.
   * @default 'bottom'
   */ placement: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].oneOf([
        'auto-end',
        'auto-start',
        'auto',
        'bottom-end',
        'bottom-start',
        'bottom',
        'left-end',
        'left-start',
        'left',
        'right-end',
        'right-start',
        'right',
        'top-end',
        'top-start',
        'top'
    ]),
    /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */ popperOptions: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].shape({
        modifiers: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].array,
        onFirstUpdate: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].func,
        placement: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].oneOf([
            'auto-end',
            'auto-start',
            'auto',
            'bottom-end',
            'bottom-start',
            'bottom',
            'left-end',
            'left-start',
            'left',
            'right-end',
            'right-start',
            'right',
            'top-end',
            'top-start',
            'top'
        ]),
        strategy: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].oneOf([
            'absolute',
            'fixed'
        ])
    }),
    /**
   * A ref that points to the used popper instance.
   */ popperRef: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].func,
        __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].shape({
            current: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].shape({
                destroy: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].func.isRequired,
                forceUpdate: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].func.isRequired,
                setOptions: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].func.isRequired,
                state: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].shape({
                    attributes: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object.isRequired,
                    elements: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object.isRequired,
                    modifiersData: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object.isRequired,
                    options: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object.isRequired,
                    orderedModifiers: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object).isRequired,
                    placement: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].oneOf([
                        'auto-end',
                        'auto-start',
                        'auto',
                        'bottom-end',
                        'bottom-start',
                        'bottom',
                        'left-end',
                        'left-start',
                        'left',
                        'right-end',
                        'right-start',
                        'right',
                        'top-end',
                        'top-start',
                        'top'
                    ]).isRequired,
                    rects: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object.isRequired,
                    reset: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bool.isRequired,
                    scrollParents: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object.isRequired,
                    strategy: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].oneOf([
                        'absolute',
                        'fixed'
                    ]).isRequired,
                    styles: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object.isRequired
                }).isRequired,
                update: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].func.isRequired
            })
        })
    ]),
    /**
   * Determines the tooltip position relatively to the anchor.
   */ position: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].oneOf([
        'bottom',
        'left',
        'right',
        'top'
    ]),
    /**
   * The props used for each slot inside the Popper.
   * @default {}
   */ slotProps: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */ slots: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */ sx: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
            __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].func,
            __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object,
            __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bool
        ])),
        __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].func,
        __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object
    ]),
    /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */ transition: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * Select the kind of tooltip to display
   * - 'item': Shows data about the item below the mouse;
   * - 'axis': Shows values associated with the hovered x value;
   * - 'none': Does not display tooltip.
   * @default 'axis'
   */ trigger: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].oneOf([
        'axis',
        'item',
        'none'
    ])
} : "TURBOPACK unreachable";
;
}),
"[project]/project-root/frontend/node_modules/@mui/x-charts/esm/ChartsTooltip/ChartsTooltip.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChartsTooltip",
    ()=>ChartsTooltip
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/project-root/frontend/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@babel/runtime/helpers/esm/extends.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/prop-types/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$HTMLElementType$2f$HTMLElementType$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/utils/esm/HTMLElementType/HTMLElementType.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$ChartsTooltip$2f$ChartsItemTooltipContent$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/x-charts/esm/ChartsTooltip/ChartsItemTooltipContent.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$ChartsTooltip$2f$ChartsAxisTooltipContent$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/x-charts/esm/ChartsTooltip/ChartsAxisTooltipContent.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$ChartsTooltip$2f$ChartsTooltipContainer$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/x-charts/esm/ChartsTooltip/ChartsTooltipContainer.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$ChartsTooltip$2f$chartsTooltipClasses$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/x-charts/esm/ChartsTooltip/chartsTooltipClasses.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/react/jsx-runtime.js [client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
/**
 * Demos:
 *
 * - [ChartsTooltip](https://mui.com/x/react-charts/tooltip/)
 *
 * API:
 *
 * - [ChartsTooltip API](https://mui.com/x/api/charts/charts-tool-tip/)
 */ function ChartsTooltip(props) {
    const { classes: propClasses, trigger = 'axis' } = props;
    const classes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$ChartsTooltip$2f$chartsTooltipClasses$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useUtilityClasses"])(propClasses);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$ChartsTooltip$2f$ChartsTooltipContainer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ChartsTooltipContainer"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({}, props, {
        classes: propClasses,
        children: trigger === 'axis' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$ChartsTooltip$2f$ChartsAxisTooltipContent$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ChartsAxisTooltipContent"], {
            classes: classes
        }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$ChartsTooltip$2f$ChartsItemTooltipContent$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ChartsItemTooltipContent"], {
            classes: classes
        })
    }));
}
("TURBOPACK compile-time truthy", 1) ? ChartsTooltip.propTypes = {
    // ----------------------------- Warning --------------------------------
    // | These PropTypes are generated from the TypeScript type definitions |
    // | To update them edit the TypeScript types and run "pnpm proptypes"  |
    // ----------------------------------------------------------------------
    /**
   * Determine if the tooltip should be placed on the pointer location or on the node.
   * @default 'pointer'
   */ anchor: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].oneOf([
        'node',
        'pointer'
    ]),
    /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */ anchorEl: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"] /* @typescript-to-proptypes-ignore */ .oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$HTMLElementType$2f$HTMLElementType$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object,
        __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    /**
   * Override or extend the styles applied to the component.
   */ classes: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */ component: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].elementType,
    /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in a future major release. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   * @default {}
   */ components: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].shape({
        Root: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].elementType
    }),
    /**
   * The props used for each slot inside the Popper.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in a future major release. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   * @default {}
   */ componentsProps: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].shape({
        root: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
            __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].func,
            __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object
        ])
    }),
    /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */ container: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        (props, propName)=>{
            if (props[propName] == null) {
                return new Error(`Prop '${propName}' is required but wasn't specified`);
            }
            if (typeof props[propName] !== 'object' || props[propName].nodeType !== 1) {
                return new Error(`Expected prop '${propName}' to be of type Element`);
            }
            return null;
        },
        __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */ disablePortal: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */ keepMounted: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */ modifiers: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].shape({
        data: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object,
        effect: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].func,
        enabled: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bool,
        fn: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].func,
        name: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].any,
        options: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object,
        phase: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].oneOf([
            'afterMain',
            'afterRead',
            'afterWrite',
            'beforeMain',
            'beforeRead',
            'beforeWrite',
            'main',
            'read',
            'write'
        ]),
        requires: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string),
        requiresIfExists: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string)
    })),
    /**
   * If `true`, the component is shown.
   */ open: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * Popper placement.
   * @default 'bottom'
   */ placement: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].oneOf([
        'auto-end',
        'auto-start',
        'auto',
        'bottom-end',
        'bottom-start',
        'bottom',
        'left-end',
        'left-start',
        'left',
        'right-end',
        'right-start',
        'right',
        'top-end',
        'top-start',
        'top'
    ]),
    /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */ popperOptions: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].shape({
        modifiers: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].array,
        onFirstUpdate: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].func,
        placement: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].oneOf([
            'auto-end',
            'auto-start',
            'auto',
            'bottom-end',
            'bottom-start',
            'bottom',
            'left-end',
            'left-start',
            'left',
            'right-end',
            'right-start',
            'right',
            'top-end',
            'top-start',
            'top'
        ]),
        strategy: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].oneOf([
            'absolute',
            'fixed'
        ])
    }),
    /**
   * A ref that points to the used popper instance.
   */ popperRef: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].func,
        __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].shape({
            current: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].shape({
                destroy: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].func.isRequired,
                forceUpdate: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].func.isRequired,
                setOptions: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].func.isRequired,
                state: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].shape({
                    attributes: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object.isRequired,
                    elements: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object.isRequired,
                    modifiersData: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object.isRequired,
                    options: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object.isRequired,
                    orderedModifiers: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object).isRequired,
                    placement: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].oneOf([
                        'auto-end',
                        'auto-start',
                        'auto',
                        'bottom-end',
                        'bottom-start',
                        'bottom',
                        'left-end',
                        'left-start',
                        'left',
                        'right-end',
                        'right-start',
                        'right',
                        'top-end',
                        'top-start',
                        'top'
                    ]).isRequired,
                    rects: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object.isRequired,
                    reset: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bool.isRequired,
                    scrollParents: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object.isRequired,
                    strategy: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].oneOf([
                        'absolute',
                        'fixed'
                    ]).isRequired,
                    styles: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object.isRequired
                }).isRequired,
                update: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].func.isRequired
            })
        })
    ]),
    /**
   * Determines the tooltip position relatively to the anchor.
   */ position: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].oneOf([
        'bottom',
        'left',
        'right',
        'top'
    ]),
    /**
   * The props used for each slot inside the Popper.
   * @default {}
   */ slotProps: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */ slots: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */ sx: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
            __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].func,
            __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object,
            __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bool
        ])),
        __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].func,
        __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object
    ]),
    /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */ transition: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * Select the kind of tooltip to display
   * - 'item': Shows data about the item below the mouse;
   * - 'axis': Shows values associated with the hovered x value;
   * - 'none': Does not display tooltip.
   * @default 'axis'
   */ trigger: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].oneOf([
        'axis',
        'item',
        'none'
    ])
} : "TURBOPACK unreachable";
;
}),
]);

//# sourceMappingURL=9a820_%40mui_x-charts_esm_ChartsTooltip_ad3db8f6._.js.map