(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/project-root/frontend/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
exports._ = _interop_require_default;
}),
"[project]/project-root/frontend/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
            else newObj[key] = obj[key];
        }
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
exports._ = _interop_require_wildcard;
}),
"[project]/project-root/frontend/node_modules/scheduler/cjs/scheduler.development.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/project-root/frontend/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time truthy", 1) {
    (function() {
        'use strict';
        /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */ if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === 'function') {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        }
        var enableSchedulerDebugging = false;
        var enableProfiling = false;
        var frameYieldMs = 5;
        function push(heap, node) {
            var index = heap.length;
            heap.push(node);
            siftUp(heap, node, index);
        }
        function peek(heap) {
            return heap.length === 0 ? null : heap[0];
        }
        function pop(heap) {
            if (heap.length === 0) {
                return null;
            }
            var first = heap[0];
            var last = heap.pop();
            if (last !== first) {
                heap[0] = last;
                siftDown(heap, last, 0);
            }
            return first;
        }
        function siftUp(heap, node, i) {
            var index = i;
            while(index > 0){
                var parentIndex = index - 1 >>> 1;
                var parent = heap[parentIndex];
                if (compare(parent, node) > 0) {
                    // The parent is larger. Swap positions.
                    heap[parentIndex] = node;
                    heap[index] = parent;
                    index = parentIndex;
                } else {
                    // The parent is smaller. Exit.
                    return;
                }
            }
        }
        function siftDown(heap, node, i) {
            var index = i;
            var length = heap.length;
            var halfLength = length >>> 1;
            while(index < halfLength){
                var leftIndex = (index + 1) * 2 - 1;
                var left = heap[leftIndex];
                var rightIndex = leftIndex + 1;
                var right = heap[rightIndex]; // If the left or right node is smaller, swap with the smaller of those.
                if (compare(left, node) < 0) {
                    if (rightIndex < length && compare(right, left) < 0) {
                        heap[index] = right;
                        heap[rightIndex] = node;
                        index = rightIndex;
                    } else {
                        heap[index] = left;
                        heap[leftIndex] = node;
                        index = leftIndex;
                    }
                } else if (rightIndex < length && compare(right, node) < 0) {
                    heap[index] = right;
                    heap[rightIndex] = node;
                    index = rightIndex;
                } else {
                    // Neither child is smaller. Exit.
                    return;
                }
            }
        }
        function compare(a, b) {
            // Compare sort index first, then task id.
            var diff = a.sortIndex - b.sortIndex;
            return diff !== 0 ? diff : a.id - b.id;
        }
        // TODO: Use symbols?
        var ImmediatePriority = 1;
        var UserBlockingPriority = 2;
        var NormalPriority = 3;
        var LowPriority = 4;
        var IdlePriority = 5;
        function markTaskErrored(task, ms) {}
        /* eslint-disable no-var */ var hasPerformanceNow = typeof performance === 'object' && typeof performance.now === 'function';
        if (hasPerformanceNow) {
            var localPerformance = performance;
            exports.unstable_now = function() {
                return localPerformance.now();
            };
        } else {
            var localDate = Date;
            var initialTime = localDate.now();
            exports.unstable_now = function() {
                return localDate.now() - initialTime;
            };
        } // Max 31 bit integer. The max integer size in V8 for 32-bit systems.
        // Math.pow(2, 30) - 1
        // 0b111111111111111111111111111111
        var maxSigned31BitInt = 1073741823; // Times out immediately
        var IMMEDIATE_PRIORITY_TIMEOUT = -1; // Eventually times out
        var USER_BLOCKING_PRIORITY_TIMEOUT = 250;
        var NORMAL_PRIORITY_TIMEOUT = 5000;
        var LOW_PRIORITY_TIMEOUT = 10000; // Never times out
        var IDLE_PRIORITY_TIMEOUT = maxSigned31BitInt; // Tasks are stored on a min heap
        var taskQueue = [];
        var timerQueue = []; // Incrementing id counter. Used to maintain insertion order.
        var taskIdCounter = 1; // Pausing the scheduler is useful for debugging.
        var currentTask = null;
        var currentPriorityLevel = NormalPriority; // This is set while performing work, to prevent re-entrance.
        var isPerformingWork = false;
        var isHostCallbackScheduled = false;
        var isHostTimeoutScheduled = false; // Capture local references to native APIs, in case a polyfill overrides them.
        var localSetTimeout = typeof setTimeout === 'function' ? setTimeout : null;
        var localClearTimeout = typeof clearTimeout === 'function' ? clearTimeout : null;
        var localSetImmediate = typeof setImmediate !== 'undefined' ? setImmediate : null; // IE and Node.js + jsdom
        var isInputPending = typeof navigator !== 'undefined' && navigator.scheduling !== undefined && navigator.scheduling.isInputPending !== undefined ? navigator.scheduling.isInputPending.bind(navigator.scheduling) : null;
        function advanceTimers(currentTime) {
            // Check for tasks that are no longer delayed and add them to the queue.
            var timer = peek(timerQueue);
            while(timer !== null){
                if (timer.callback === null) {
                    // Timer was cancelled.
                    pop(timerQueue);
                } else if (timer.startTime <= currentTime) {
                    // Timer fired. Transfer to the task queue.
                    pop(timerQueue);
                    timer.sortIndex = timer.expirationTime;
                    push(taskQueue, timer);
                } else {
                    // Remaining timers are pending.
                    return;
                }
                timer = peek(timerQueue);
            }
        }
        function handleTimeout(currentTime) {
            isHostTimeoutScheduled = false;
            advanceTimers(currentTime);
            if (!isHostCallbackScheduled) {
                if (peek(taskQueue) !== null) {
                    isHostCallbackScheduled = true;
                    requestHostCallback(flushWork);
                } else {
                    var firstTimer = peek(timerQueue);
                    if (firstTimer !== null) {
                        requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
                    }
                }
            }
        }
        function flushWork(hasTimeRemaining, initialTime) {
            isHostCallbackScheduled = false;
            if (isHostTimeoutScheduled) {
                // We scheduled a timeout but it's no longer needed. Cancel it.
                isHostTimeoutScheduled = false;
                cancelHostTimeout();
            }
            isPerformingWork = true;
            var previousPriorityLevel = currentPriorityLevel;
            try {
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                {
                    var currentTime;
                } else {
                    // No catch in prod code path.
                    return workLoop(hasTimeRemaining, initialTime);
                }
            } finally{
                currentTask = null;
                currentPriorityLevel = previousPriorityLevel;
                isPerformingWork = false;
            }
        }
        function workLoop(hasTimeRemaining, initialTime) {
            var currentTime = initialTime;
            advanceTimers(currentTime);
            currentTask = peek(taskQueue);
            while(currentTask !== null && !enableSchedulerDebugging){
                if (currentTask.expirationTime > currentTime && (!hasTimeRemaining || shouldYieldToHost())) {
                    break;
                }
                var callback = currentTask.callback;
                if (typeof callback === 'function') {
                    currentTask.callback = null;
                    currentPriorityLevel = currentTask.priorityLevel;
                    var didUserCallbackTimeout = currentTask.expirationTime <= currentTime;
                    var continuationCallback = callback(didUserCallbackTimeout);
                    currentTime = exports.unstable_now();
                    if (typeof continuationCallback === 'function') {
                        currentTask.callback = continuationCallback;
                    } else {
                        if (currentTask === peek(taskQueue)) {
                            pop(taskQueue);
                        }
                    }
                    advanceTimers(currentTime);
                } else {
                    pop(taskQueue);
                }
                currentTask = peek(taskQueue);
            } // Return whether there's additional work
            if (currentTask !== null) {
                return true;
            } else {
                var firstTimer = peek(timerQueue);
                if (firstTimer !== null) {
                    requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
                }
                return false;
            }
        }
        function unstable_runWithPriority(priorityLevel, eventHandler) {
            switch(priorityLevel){
                case ImmediatePriority:
                case UserBlockingPriority:
                case NormalPriority:
                case LowPriority:
                case IdlePriority:
                    break;
                default:
                    priorityLevel = NormalPriority;
            }
            var previousPriorityLevel = currentPriorityLevel;
            currentPriorityLevel = priorityLevel;
            try {
                return eventHandler();
            } finally{
                currentPriorityLevel = previousPriorityLevel;
            }
        }
        function unstable_next(eventHandler) {
            var priorityLevel;
            switch(currentPriorityLevel){
                case ImmediatePriority:
                case UserBlockingPriority:
                case NormalPriority:
                    // Shift down to normal priority
                    priorityLevel = NormalPriority;
                    break;
                default:
                    // Anything lower than normal priority should remain at the current level.
                    priorityLevel = currentPriorityLevel;
                    break;
            }
            var previousPriorityLevel = currentPriorityLevel;
            currentPriorityLevel = priorityLevel;
            try {
                return eventHandler();
            } finally{
                currentPriorityLevel = previousPriorityLevel;
            }
        }
        function unstable_wrapCallback(callback) {
            var parentPriorityLevel = currentPriorityLevel;
            return function() {
                // This is a fork of runWithPriority, inlined for performance.
                var previousPriorityLevel = currentPriorityLevel;
                currentPriorityLevel = parentPriorityLevel;
                try {
                    return callback.apply(this, arguments);
                } finally{
                    currentPriorityLevel = previousPriorityLevel;
                }
            };
        }
        function unstable_scheduleCallback(priorityLevel, callback, options) {
            var currentTime = exports.unstable_now();
            var startTime;
            if (typeof options === 'object' && options !== null) {
                var delay = options.delay;
                if (typeof delay === 'number' && delay > 0) {
                    startTime = currentTime + delay;
                } else {
                    startTime = currentTime;
                }
            } else {
                startTime = currentTime;
            }
            var timeout;
            switch(priorityLevel){
                case ImmediatePriority:
                    timeout = IMMEDIATE_PRIORITY_TIMEOUT;
                    break;
                case UserBlockingPriority:
                    timeout = USER_BLOCKING_PRIORITY_TIMEOUT;
                    break;
                case IdlePriority:
                    timeout = IDLE_PRIORITY_TIMEOUT;
                    break;
                case LowPriority:
                    timeout = LOW_PRIORITY_TIMEOUT;
                    break;
                case NormalPriority:
                default:
                    timeout = NORMAL_PRIORITY_TIMEOUT;
                    break;
            }
            var expirationTime = startTime + timeout;
            var newTask = {
                id: taskIdCounter++,
                callback: callback,
                priorityLevel: priorityLevel,
                startTime: startTime,
                expirationTime: expirationTime,
                sortIndex: -1
            };
            if (startTime > currentTime) {
                // This is a delayed task.
                newTask.sortIndex = startTime;
                push(timerQueue, newTask);
                if (peek(taskQueue) === null && newTask === peek(timerQueue)) {
                    // All tasks are delayed, and this is the task with the earliest delay.
                    if (isHostTimeoutScheduled) {
                        // Cancel an existing timeout.
                        cancelHostTimeout();
                    } else {
                        isHostTimeoutScheduled = true;
                    } // Schedule a timeout.
                    requestHostTimeout(handleTimeout, startTime - currentTime);
                }
            } else {
                newTask.sortIndex = expirationTime;
                push(taskQueue, newTask);
                // wait until the next time we yield.
                if (!isHostCallbackScheduled && !isPerformingWork) {
                    isHostCallbackScheduled = true;
                    requestHostCallback(flushWork);
                }
            }
            return newTask;
        }
        function unstable_pauseExecution() {}
        function unstable_continueExecution() {
            if (!isHostCallbackScheduled && !isPerformingWork) {
                isHostCallbackScheduled = true;
                requestHostCallback(flushWork);
            }
        }
        function unstable_getFirstCallbackNode() {
            return peek(taskQueue);
        }
        function unstable_cancelCallback(task) {
            // remove from the queue because you can't remove arbitrary nodes from an
            // array based heap, only the first one.)
            task.callback = null;
        }
        function unstable_getCurrentPriorityLevel() {
            return currentPriorityLevel;
        }
        var isMessageLoopRunning = false;
        var scheduledHostCallback = null;
        var taskTimeoutID = -1; // Scheduler periodically yields in case there is other work on the main
        // thread, like user events. By default, it yields multiple times per frame.
        // It does not attempt to align with frame boundaries, since most tasks don't
        // need to be frame aligned; for those that do, use requestAnimationFrame.
        var frameInterval = frameYieldMs;
        var startTime = -1;
        function shouldYieldToHost() {
            var timeElapsed = exports.unstable_now() - startTime;
            if (timeElapsed < frameInterval) {
                // The main thread has only been blocked for a really short amount of time;
                // smaller than a single frame. Don't yield yet.
                return false;
            } // The main thread has been blocked for a non-negligible amount of time. We
            return true;
        }
        function requestPaint() {}
        function forceFrameRate(fps) {
            if (fps < 0 || fps > 125) {
                // Using console['error'] to evade Babel and ESLint
                console['error']('forceFrameRate takes a positive int between 0 and 125, ' + 'forcing frame rates higher than 125 fps is not supported');
                return;
            }
            if (fps > 0) {
                frameInterval = Math.floor(1000 / fps);
            } else {
                // reset the framerate
                frameInterval = frameYieldMs;
            }
        }
        var performWorkUntilDeadline = function() {
            if (scheduledHostCallback !== null) {
                var currentTime = exports.unstable_now(); // Keep track of the start time so we can measure how long the main thread
                // has been blocked.
                startTime = currentTime;
                var hasTimeRemaining = true; // If a scheduler task throws, exit the current browser task so the
                // error can be observed.
                //
                // Intentionally not using a try-catch, since that makes some debugging
                // techniques harder. Instead, if `scheduledHostCallback` errors, then
                // `hasMoreWork` will remain true, and we'll continue the work loop.
                var hasMoreWork = true;
                try {
                    hasMoreWork = scheduledHostCallback(hasTimeRemaining, currentTime);
                } finally{
                    if (hasMoreWork) {
                        // If there's more work, schedule the next message event at the end
                        // of the preceding one.
                        schedulePerformWorkUntilDeadline();
                    } else {
                        isMessageLoopRunning = false;
                        scheduledHostCallback = null;
                    }
                }
            } else {
                isMessageLoopRunning = false;
            } // Yielding to the browser will give it a chance to paint, so we can
        };
        var schedulePerformWorkUntilDeadline;
        if (typeof localSetImmediate === 'function') {
            // Node.js and old IE.
            // There's a few reasons for why we prefer setImmediate.
            //
            // Unlike MessageChannel, it doesn't prevent a Node.js process from exiting.
            // (Even though this is a DOM fork of the Scheduler, you could get here
            // with a mix of Node.js 15+, which has a MessageChannel, and jsdom.)
            // https://github.com/facebook/react/issues/20756
            //
            // But also, it runs earlier which is the semantic we want.
            // If other browsers ever implement it, it's better to use it.
            // Although both of these would be inferior to native scheduling.
            schedulePerformWorkUntilDeadline = function() {
                localSetImmediate(performWorkUntilDeadline);
            };
        } else if (typeof MessageChannel !== 'undefined') {
            // DOM and Worker environments.
            // We prefer MessageChannel because of the 4ms setTimeout clamping.
            var channel = new MessageChannel();
            var port = channel.port2;
            channel.port1.onmessage = performWorkUntilDeadline;
            schedulePerformWorkUntilDeadline = function() {
                port.postMessage(null);
            };
        } else {
            // We should only fallback here in non-browser environments.
            schedulePerformWorkUntilDeadline = function() {
                localSetTimeout(performWorkUntilDeadline, 0);
            };
        }
        function requestHostCallback(callback) {
            scheduledHostCallback = callback;
            if (!isMessageLoopRunning) {
                isMessageLoopRunning = true;
                schedulePerformWorkUntilDeadline();
            }
        }
        function requestHostTimeout(callback, ms) {
            taskTimeoutID = localSetTimeout(function() {
                callback(exports.unstable_now());
            }, ms);
        }
        function cancelHostTimeout() {
            localClearTimeout(taskTimeoutID);
            taskTimeoutID = -1;
        }
        var unstable_requestPaint = requestPaint;
        var unstable_Profiling = null;
        exports.unstable_IdlePriority = IdlePriority;
        exports.unstable_ImmediatePriority = ImmediatePriority;
        exports.unstable_LowPriority = LowPriority;
        exports.unstable_NormalPriority = NormalPriority;
        exports.unstable_Profiling = unstable_Profiling;
        exports.unstable_UserBlockingPriority = UserBlockingPriority;
        exports.unstable_cancelCallback = unstable_cancelCallback;
        exports.unstable_continueExecution = unstable_continueExecution;
        exports.unstable_forceFrameRate = forceFrameRate;
        exports.unstable_getCurrentPriorityLevel = unstable_getCurrentPriorityLevel;
        exports.unstable_getFirstCallbackNode = unstable_getFirstCallbackNode;
        exports.unstable_next = unstable_next;
        exports.unstable_pauseExecution = unstable_pauseExecution;
        exports.unstable_requestPaint = unstable_requestPaint;
        exports.unstable_runWithPriority = unstable_runWithPriority;
        exports.unstable_scheduleCallback = unstable_scheduleCallback;
        exports.unstable_shouldYield = shouldYieldToHost;
        exports.unstable_wrapCallback = unstable_wrapCallback;
        /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */ if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === 'function') {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        }
    })();
}
}),
"[project]/project-root/frontend/node_modules/scheduler/index.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/project-root/frontend/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/project-root/frontend/node_modules/scheduler/cjs/scheduler.development.js [client] (ecmascript)");
}
}),
"[project]/project-root/frontend/node_modules/clsx/dist/clsx.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clsx",
    ()=>clsx,
    "default",
    ()=>__TURBOPACK__default__export__
]);
function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;
    else if ("object" == typeof e) if (Array.isArray(e)) {
        var o = e.length;
        for(t = 0; t < o; t++)e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else for(f in e)e[f] && (n && (n += " "), n += f);
    return n;
}
function clsx() {
    for(var e, t, f = 0, n = "", o = arguments.length; f < o; f++)(e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
}
const __TURBOPACK__default__export__ = clsx;
}),
"[project]/project-root/frontend/node_modules/@mui/x-data-grid/node_modules/clsx/dist/clsx.m.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clsx",
    ()=>clsx,
    "default",
    ()=>__TURBOPACK__default__export__
]);
function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;
    else if ("object" == typeof e) if (Array.isArray(e)) for(t = 0; t < e.length; t++)e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    else for(t in e)e[t] && (n && (n += " "), n += t);
    return n;
}
function clsx() {
    for(var e, t, f = 0, n = ""; f < arguments.length;)(e = arguments[f++]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
}
const __TURBOPACK__default__export__ = clsx;
}),
"[project]/project-root/frontend/node_modules/@babel/runtime/helpers/esm/extends.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_extends
]);
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", _extends.apply(null, arguments);
}
;
}),
"[project]/project-root/frontend/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_objectWithoutPropertiesLoose
]);
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (-1 !== e.indexOf(n)) continue;
        t[n] = r[n];
    }
    return t;
}
;
}),
"[project]/project-root/frontend/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_setPrototypeOf
]);
function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
        return t.__proto__ = e, t;
    }, _setPrototypeOf(t, e);
}
;
}),
"[project]/project-root/frontend/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_inheritsLoose
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$setPrototypeOf$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js [client] (ecmascript)");
;
function _inheritsLoose(t, o) {
    t.prototype = Object.create(o.prototype), t.prototype.constructor = t, (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$setPrototypeOf$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(t, o);
}
;
}),
"[project]/project-root/frontend/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_assertThisInitialized
]);
function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
;
}),
"[project]/project-root/frontend/node_modules/@babel/runtime/helpers/esm/typeof.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_typeof
]);
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
;
}),
"[project]/project-root/frontend/node_modules/@babel/runtime/helpers/esm/toPrimitive.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>toPrimitive
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@babel/runtime/helpers/esm/typeof.js [client] (ecmascript)");
;
function toPrimitive(t, r) {
    if ("object" != (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
;
}),
"[project]/project-root/frontend/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>toPropertyKey
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@babel/runtime/helpers/esm/typeof.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toPrimitive$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@babel/runtime/helpers/esm/toPrimitive.js [client] (ecmascript)");
;
;
function toPropertyKey(t) {
    var i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toPrimitive$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(t, "string");
    return "symbol" == (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(i) ? i : i + "";
}
;
}),
"[project]/project-root/frontend/node_modules/@emotion/sheet/dist/emotion-sheet.development.esm.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StyleSheet",
    ()=>StyleSheet
]);
var isDevelopment = true;
/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/ function sheetForTag(tag) {
    if (tag.sheet) {
        return tag.sheet;
    } // this weirdness brought to you by firefox
    /* istanbul ignore next */ for(var i = 0; i < document.styleSheets.length; i++){
        if (document.styleSheets[i].ownerNode === tag) {
            return document.styleSheets[i];
        }
    } // this function should always return with a value
    // TS can't understand it though so we make it stop complaining here
    return undefined;
}
function createStyleElement(options) {
    var tag = document.createElement('style');
    tag.setAttribute('data-emotion', options.key);
    if (options.nonce !== undefined) {
        tag.setAttribute('nonce', options.nonce);
    }
    tag.appendChild(document.createTextNode(''));
    tag.setAttribute('data-s', '');
    return tag;
}
var StyleSheet = /*#__PURE__*/ function() {
    // Using Node instead of HTMLElement since container may be a ShadowRoot
    function StyleSheet(options) {
        var _this = this;
        this._insertTag = function(tag) {
            var before;
            if (_this.tags.length === 0) {
                if (_this.insertionPoint) {
                    before = _this.insertionPoint.nextSibling;
                } else if (_this.prepend) {
                    before = _this.container.firstChild;
                } else {
                    before = _this.before;
                }
            } else {
                before = _this.tags[_this.tags.length - 1].nextSibling;
            }
            _this.container.insertBefore(tag, before);
            _this.tags.push(tag);
        };
        this.isSpeedy = options.speedy === undefined ? !isDevelopment : options.speedy;
        this.tags = [];
        this.ctr = 0;
        this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets
        this.key = options.key;
        this.container = options.container;
        this.prepend = options.prepend;
        this.insertionPoint = options.insertionPoint;
        this.before = null;
    }
    var _proto = StyleSheet.prototype;
    _proto.hydrate = function hydrate(nodes) {
        nodes.forEach(this._insertTag);
    };
    _proto.insert = function insert(rule) {
        // the max length is how many rules we have per style tag, it's 65000 in speedy mode
        // it's 1 in dev because we insert source maps that map a single rule to a location
        // and you can only have one source map per style tag
        if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
            this._insertTag(createStyleElement(this));
        }
        var tag = this.tags[this.tags.length - 1];
        {
            var isImportRule = rule.charCodeAt(0) === 64 && rule.charCodeAt(1) === 105;
            if (isImportRule && this._alreadyInsertedOrderInsensitiveRule) {
                // this would only cause problem in speedy mode
                // but we don't want enabling speedy to affect the observable behavior
                // so we report this error at all times
                console.error("You're attempting to insert the following rule:\n" + rule + '\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules.');
            }
            this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !isImportRule;
        }
        if (this.isSpeedy) {
            var sheet = sheetForTag(tag);
            try {
                // this is the ultrafast version, works across browsers
                // the big drawback is that the css won't be editable in devtools
                sheet.insertRule(rule, sheet.cssRules.length);
            } catch (e) {
                if (!/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(rule)) {
                    console.error("There was a problem inserting the following rule: \"" + rule + "\"", e);
                }
            }
        } else {
            tag.appendChild(document.createTextNode(rule));
        }
        this.ctr++;
    };
    _proto.flush = function flush() {
        this.tags.forEach(function(tag) {
            var _tag$parentNode;
            return (_tag$parentNode = tag.parentNode) == null ? void 0 : _tag$parentNode.removeChild(tag);
        });
        this.tags = [];
        this.ctr = 0;
        {
            this._alreadyInsertedOrderInsensitiveRule = false;
        }
    };
    return StyleSheet;
}();
;
}),
"[project]/project-root/frontend/node_modules/stylis/src/Utility.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @param {number}
 * @return {number}
 */ __turbopack_context__.s([
    "abs",
    ()=>abs,
    "append",
    ()=>append,
    "assign",
    ()=>assign,
    "charat",
    ()=>charat,
    "combine",
    ()=>combine,
    "from",
    ()=>from,
    "hash",
    ()=>hash,
    "indexof",
    ()=>indexof,
    "match",
    ()=>match,
    "replace",
    ()=>replace,
    "sizeof",
    ()=>sizeof,
    "strlen",
    ()=>strlen,
    "substr",
    ()=>substr,
    "trim",
    ()=>trim
]);
var abs = Math.abs;
var from = String.fromCharCode;
var assign = Object.assign;
function hash(value, length) {
    return charat(value, 0) ^ 45 ? (((length << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3) : 0;
}
function trim(value) {
    return value.trim();
}
function match(value, pattern) {
    return (value = pattern.exec(value)) ? value[0] : value;
}
function replace(value, pattern, replacement) {
    return value.replace(pattern, replacement);
}
function indexof(value, search) {
    return value.indexOf(search);
}
function charat(value, index) {
    return value.charCodeAt(index) | 0;
}
function substr(value, begin, end) {
    return value.slice(begin, end);
}
function strlen(value) {
    return value.length;
}
function sizeof(value) {
    return value.length;
}
function append(value, array) {
    return array.push(value), value;
}
function combine(array, callback) {
    return array.map(callback).join('');
}
}),
"[project]/project-root/frontend/node_modules/stylis/src/Tokenizer.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "alloc",
    ()=>alloc,
    "caret",
    ()=>caret,
    "char",
    ()=>char,
    "character",
    ()=>character,
    "characters",
    ()=>characters,
    "column",
    ()=>column,
    "commenter",
    ()=>commenter,
    "copy",
    ()=>copy,
    "dealloc",
    ()=>dealloc,
    "delimit",
    ()=>delimit,
    "delimiter",
    ()=>delimiter,
    "escaping",
    ()=>escaping,
    "identifier",
    ()=>identifier,
    "length",
    ()=>length,
    "line",
    ()=>line,
    "next",
    ()=>next,
    "node",
    ()=>node,
    "peek",
    ()=>peek,
    "position",
    ()=>position,
    "prev",
    ()=>prev,
    "slice",
    ()=>slice,
    "token",
    ()=>token,
    "tokenize",
    ()=>tokenize,
    "tokenizer",
    ()=>tokenizer,
    "whitespace",
    ()=>whitespace
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/stylis/src/Utility.js [client] (ecmascript)");
;
var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = '';
function node(value, root, parent, type, props, children, length) {
    return {
        value: value,
        root: root,
        parent: parent,
        type: type,
        props: props,
        children: children,
        line: line,
        column: column,
        length: length,
        return: ''
    };
}
function copy(root, props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["assign"])(node('', null, null, '', null, null, 0), root, {
        length: -root.length
    }, props);
}
function char() {
    return character;
}
function prev() {
    character = position > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["charat"])(characters, --position) : 0;
    if (column--, character === 10) column = 1, line--;
    return character;
}
function next() {
    character = position < length ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["charat"])(characters, position++) : 0;
    if (column++, character === 10) column = 1, line++;
    return character;
}
function peek() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["charat"])(characters, position);
}
function caret() {
    return position;
}
function slice(begin, end) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["substr"])(characters, begin, end);
}
function token(type) {
    switch(type){
        // \0 \t \n \r \s whitespace token
        case 0:
        case 9:
        case 10:
        case 13:
        case 32:
            return 5;
        // ! + , / > @ ~ isolate token
        case 33:
        case 43:
        case 44:
        case 47:
        case 62:
        case 64:
        case 126:
        // ; { } breakpoint token
        case 59:
        case 123:
        case 125:
            return 4;
        // : accompanied token
        case 58:
            return 3;
        // " ' ( [ opening delimit token
        case 34:
        case 39:
        case 40:
        case 91:
            return 2;
        // ) ] closing delimit token
        case 41:
        case 93:
            return 1;
    }
    return 0;
}
function alloc(value) {
    return line = column = 1, length = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["strlen"])(characters = value), position = 0, [];
}
function dealloc(value) {
    return characters = '', value;
}
function delimit(type) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["trim"])(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}
function tokenize(value) {
    return dealloc(tokenizer(alloc(value)));
}
function whitespace(type) {
    while(character = peek())if (character < 33) next();
    else break;
    return token(type) > 2 || token(character) > 3 ? '' : ' ';
}
function tokenizer(children) {
    while(next())switch(token(character)){
        case 0:
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["append"])(identifier(position - 1), children);
            break;
        case 2:
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["append"])(delimit(character), children);
            break;
        default:
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["append"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["from"])(character), children);
    }
    return children;
}
function escaping(index, count) {
    while(--count && next())// not 0-9 A-F a-f
    if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97) break;
    return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
}
function delimiter(type) {
    while(next())switch(character){
        // ] ) " '
        case type:
            return position;
        // " '
        case 34:
        case 39:
            if (type !== 34 && type !== 39) delimiter(character);
            break;
        // (
        case 40:
            if (type === 41) delimiter(type);
            break;
        // \
        case 92:
            next();
            break;
    }
    return position;
}
function commenter(type, index) {
    while(next())// //
    if (type + character === 47 + 10) break;
    else if (type + character === 42 + 42 && peek() === 47) break;
    return '/*' + slice(index, position - 1) + '*' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["from"])(type === 47 ? type : next());
}
function identifier(index) {
    while(!token(peek()))next();
    return slice(index, position);
}
}),
"[project]/project-root/frontend/node_modules/stylis/src/Enum.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CHARSET",
    ()=>CHARSET,
    "COMMENT",
    ()=>COMMENT,
    "COUNTER_STYLE",
    ()=>COUNTER_STYLE,
    "DECLARATION",
    ()=>DECLARATION,
    "DOCUMENT",
    ()=>DOCUMENT,
    "FONT_FACE",
    ()=>FONT_FACE,
    "FONT_FEATURE_VALUES",
    ()=>FONT_FEATURE_VALUES,
    "IMPORT",
    ()=>IMPORT,
    "KEYFRAMES",
    ()=>KEYFRAMES,
    "LAYER",
    ()=>LAYER,
    "MEDIA",
    ()=>MEDIA,
    "MOZ",
    ()=>MOZ,
    "MS",
    ()=>MS,
    "NAMESPACE",
    ()=>NAMESPACE,
    "PAGE",
    ()=>PAGE,
    "RULESET",
    ()=>RULESET,
    "SUPPORTS",
    ()=>SUPPORTS,
    "VIEWPORT",
    ()=>VIEWPORT,
    "WEBKIT",
    ()=>WEBKIT
]);
var MS = '-ms-';
var MOZ = '-moz-';
var WEBKIT = '-webkit-';
var COMMENT = 'comm';
var RULESET = 'rule';
var DECLARATION = 'decl';
var PAGE = '@page';
var MEDIA = '@media';
var IMPORT = '@import';
var CHARSET = '@charset';
var VIEWPORT = '@viewport';
var SUPPORTS = '@supports';
var DOCUMENT = '@document';
var NAMESPACE = '@namespace';
var KEYFRAMES = '@keyframes';
var FONT_FACE = '@font-face';
var COUNTER_STYLE = '@counter-style';
var FONT_FEATURE_VALUES = '@font-feature-values';
var LAYER = '@layer';
}),
"[project]/project-root/frontend/node_modules/stylis/src/Serializer.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "serialize",
    ()=>serialize,
    "stringify",
    ()=>stringify
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/stylis/src/Enum.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/stylis/src/Utility.js [client] (ecmascript)");
;
;
function serialize(children, callback) {
    var output = '';
    var length = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["sizeof"])(children);
    for(var i = 0; i < length; i++)output += callback(children[i], i, children, callback) || '';
    return output;
}
function stringify(element, index, children, callback) {
    switch(element.type){
        case __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["LAYER"]:
            if (element.children.length) break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["IMPORT"]:
        case __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["DECLARATION"]:
            return element.return = element.return || element.value;
        case __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["COMMENT"]:
            return '';
        case __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["KEYFRAMES"]:
            return element.return = element.value + '{' + serialize(element.children, callback) + '}';
        case __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["RULESET"]:
            element.value = element.props.join(',');
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["strlen"])(children = serialize(element.children, callback)) ? element.return = element.value + '{' + children + '}' : '';
}
}),
"[project]/project-root/frontend/node_modules/stylis/src/Prefixer.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "prefix",
    ()=>prefix
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/stylis/src/Enum.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/stylis/src/Utility.js [client] (ecmascript)");
;
;
function prefix(value, length, children) {
    switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["hash"])(value, length)){
        // color-adjust
        case 5103:
            return __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + 'print-' + value + value;
        // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
        case 5737:
        case 4201:
        case 3177:
        case 3433:
        case 1641:
        case 4457:
        case 2921:
        // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
        case 5572:
        case 6356:
        case 5844:
        case 3191:
        case 6645:
        case 3005:
        // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
        case 6391:
        case 5879:
        case 5623:
        case 6135:
        case 4599:
        case 4855:
        // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
        case 4215:
        case 6389:
        case 5109:
        case 5365:
        case 5621:
        case 3829:
            return __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + value;
        // tab-size
        case 4789:
            return __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MOZ"] + value + value;
        // appearance, user-select, transform, hyphens, text-size-adjust
        case 5349:
        case 4246:
        case 4810:
        case 6968:
        case 2756:
            return __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MOZ"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + value + value;
        // writing-mode
        case 5936:
            switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["charat"])(value, length + 11)){
                // vertical-l(r)
                case 114:
                    return __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, /[svh]\w+-[tblr]{2}/, 'tb') + value;
                // vertical-r(l)
                case 108:
                    return __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value;
                // horizontal(-)tb
                case 45:
                    return __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, /[svh]\w+-[tblr]{2}/, 'lr') + value;
            }
        // flex, flex-direction, scroll-snap-type, writing-mode
        case 6828:
        case 4268:
        case 2903:
            return __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + value + value;
        // order
        case 6165:
            return __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + 'flex-' + value + value;
        // align-items
        case 5187:
            return __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, /(\w+).+(:[^]+)/, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + 'box-$1$2' + __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + 'flex-$1$2') + value;
        // align-self
        case 5443:
            return __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + 'flex-item-' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, /flex-|-self/g, '') + (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["match"])(value, /flex-|baseline/) ? __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + 'grid-row-' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, /flex-|-self/g, '') : '') + value;
        // align-content
        case 4675:
            return __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + 'flex-line-pack' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, /align-content|flex-|-self/g, '') + value;
        // flex-shrink
        case 5548:
            return __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, 'shrink', 'negative') + value;
        // flex-basis
        case 5292:
            return __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, 'basis', 'preferred-size') + value;
        // flex-grow
        case 6060:
            return __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + 'box-' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, '-grow', '') + __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, 'grow', 'positive') + value;
        // transition
        case 4554:
            return __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, /([^-])(transform)/g, '$1' + __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + '$2') + value;
        // cursor
        case 6187:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, /(zoom-|grab)/, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + '$1'), /(image-set)/, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + '$1'), value, '') + value;
        // background, background-image
        case 5495:
        case 3959:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, /(image-set\([^]*)/, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + '$1' + '$`$1');
        // justify-content
        case 4968:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, /(.+:)(flex-)?(.*)/, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + 'box-pack:$3' + __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + value;
        // justify-self
        case 4200:
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["match"])(value, /flex-|baseline/)) return __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + 'grid-column-align' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["substr"])(value, length) + value;
            break;
        // grid-template-(columns|rows)
        case 2592:
        case 3360:
            return __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, 'template-', '') + value;
        // grid-(row|column)-start
        case 4384:
        case 3616:
            if (children && children.some(function(element, index) {
                return length = index, (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["match"])(element.props, /grid-\w+-end/);
            })) {
                return ~(0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["indexof"])(value + (children = children[length].value), 'span') ? value : __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, '-start', '') + value + __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + 'grid-row-span:' + (~(0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["indexof"])(children, 'span') ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["match"])(children, /\d+/) : +(0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["match"])(children, /\d+/) - +(0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["match"])(value, /\d+/)) + ';';
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, '-start', '') + value;
        // grid-(row|column)-end
        case 4896:
        case 4128:
            return children && children.some(function(element) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["match"])(element.props, /grid-\w+-start/);
            }) ? value : __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, '-end', '-span'), 'span ', '') + value;
        // (margin|padding)-inline-(start|end)
        case 4095:
        case 3583:
        case 4068:
        case 2532:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, /(.+)-inline(.+)/, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + '$1$2') + value;
        // (min|max)?(width|height|inline-size|block-size)
        case 8116:
        case 7059:
        case 5753:
        case 5535:
        case 5445:
        case 5701:
        case 4933:
        case 4677:
        case 5533:
        case 5789:
        case 5021:
        case 4765:
            // stretch, max-content, min-content, fill-available
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["strlen"])(value) - 1 - length > 6) switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["charat"])(value, length + 1)){
                // (m)ax-content, (m)in-content
                case 109:
                    // -
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["charat"])(value, length + 4) !== 45) break;
                // (f)ill-available, (f)it-content
                case 102:
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, /(.+:)(.+)-([^]+)/, '$1' + __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + '$2-$3' + '$1' + __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MOZ"] + ((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["charat"])(value, length + 3) == 108 ? '$3' : '$2-$3')) + value;
                // (s)tretch
                case 115:
                    return ~(0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["indexof"])(value, 'stretch') ? prefix((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, 'stretch', 'fill-available'), length, children) + value : value;
            }
            break;
        // grid-(column|row)
        case 5152:
        case 5920:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(_, a, b, c, d, e, f) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + a + ':' + b + f + (c ? __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + a + '-span:' + (d ? e : +e - +b) + f : '') + value;
            });
        // position: sticky
        case 4949:
            // stick(y)?
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["charat"])(value, length + 6) === 121) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, ':', ':' + __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"]) + value;
            break;
        // display: (flex|inline-flex|grid|inline-grid)
        case 6444:
            switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["charat"])(value, (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["charat"])(value, 14) === 45 ? 18 : 11)){
                // (inline-)?fle(x)
                case 120:
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, '$1' + __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + ((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["charat"])(value, 14) === 45 ? 'inline-' : '') + 'box$3' + '$1' + __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + '$2$3' + '$1' + __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + '$2box$3') + value;
                // (inline-)?gri(d)
                case 100:
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, ':', ':' + __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"]) + value;
            }
            break;
        // scroll-margin, scroll-margin-(top|right|bottom|left)
        case 5719:
        case 2647:
        case 2135:
        case 3927:
        case 2391:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, 'scroll-', 'scroll-snap-') + value;
    }
    return value;
}
}),
"[project]/project-root/frontend/node_modules/stylis/src/Middleware.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "middleware",
    ()=>middleware,
    "namespace",
    ()=>namespace,
    "prefixer",
    ()=>prefixer,
    "rulesheet",
    ()=>rulesheet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/stylis/src/Enum.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/stylis/src/Utility.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/stylis/src/Tokenizer.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Serializer$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/stylis/src/Serializer.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Prefixer$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/stylis/src/Prefixer.js [client] (ecmascript)");
;
;
;
;
;
function middleware(collection) {
    var length = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["sizeof"])(collection);
    return function(element, index, children, callback) {
        var output = '';
        for(var i = 0; i < length; i++)output += collection[i](element, index, children, callback) || '';
        return output;
    };
}
function rulesheet(callback) {
    return function(element) {
        if (!element.root) {
            if (element = element.return) callback(element);
        }
    };
}
function prefixer(element, index, children, callback) {
    if (element.length > -1) {
        if (!element.return) switch(element.type){
            case __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["DECLARATION"]:
                element.return = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Prefixer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["prefix"])(element.value, element.length, children);
                return;
            case __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["KEYFRAMES"]:
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Serializer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["serialize"])([
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["copy"])(element, {
                        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(element.value, '@', '@' + __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"])
                    })
                ], callback);
            case __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["RULESET"]:
                if (element.length) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["combine"])(element.props, function(value) {
                    switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["match"])(value, /(::plac\w+|:read-\w+)/)){
                        // :read-(only|write)
                        case ':read-only':
                        case ':read-write':
                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Serializer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["serialize"])([
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["copy"])(element, {
                                    props: [
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, /:(read-\w+)/, ':' + __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MOZ"] + '$1')
                                    ]
                                })
                            ], callback);
                        // :placeholder
                        case '::placeholder':
                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Serializer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["serialize"])([
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["copy"])(element, {
                                    props: [
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, /:(plac\w+)/, ':' + __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + 'input-$1')
                                    ]
                                }),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["copy"])(element, {
                                    props: [
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, /:(plac\w+)/, ':' + __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MOZ"] + '$1')
                                    ]
                                }),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["copy"])(element, {
                                    props: [
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, /:(plac\w+)/, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + 'input-$1')
                                    ]
                                })
                            ], callback);
                    }
                    return '';
                });
        }
    }
}
function namespace(element) {
    switch(element.type){
        case __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["RULESET"]:
            element.props = element.props.map(function(value) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["combine"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["tokenize"])(value), function(value, index, children) {
                    switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["charat"])(value, 0)){
                        // \f
                        case 12:
                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["substr"])(value, 1, (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["strlen"])(value));
                        // \0 ( + > ~
                        case 0:
                        case 40:
                        case 43:
                        case 62:
                        case 126:
                            return value;
                        // :
                        case 58:
                            if (children[++index] === 'global') children[index] = '', children[++index] = '\f' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["substr"])(children[index], index = 1, -1);
                        // \s
                        case 32:
                            return index === 1 ? '' : value;
                        default:
                            switch(index){
                                case 0:
                                    element = value;
                                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["sizeof"])(children) > 1 ? '' : value;
                                case index = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["sizeof"])(children) - 1:
                                case 2:
                                    return index === 2 ? value + element + element : value + element;
                                default:
                                    return value;
                            }
                    }
                });
            });
    }
}
}),
"[project]/project-root/frontend/node_modules/stylis/src/Parser.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "comment",
    ()=>comment,
    "compile",
    ()=>compile,
    "declaration",
    ()=>declaration,
    "parse",
    ()=>parse,
    "ruleset",
    ()=>ruleset
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/stylis/src/Enum.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/stylis/src/Utility.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/stylis/src/Tokenizer.js [client] (ecmascript)");
;
;
;
function compile(value) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["dealloc"])(parse('', null, null, null, [
        ''
    ], value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["alloc"])(value), 0, [
        0
    ], value));
}
function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
    var index = 0;
    var offset = 0;
    var length = pseudo;
    var atrule = 0;
    var property = 0;
    var previous = 0;
    var variable = 1;
    var scanning = 1;
    var ampersand = 1;
    var character = 0;
    var type = '';
    var props = rules;
    var children = rulesets;
    var reference = rule;
    var characters = type;
    while(scanning)switch(previous = character, character = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["next"])()){
        // (
        case 40:
            if (previous != 108 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["charat"])(characters, length - 1) == 58) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["indexof"])(characters += (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["delimit"])(character), '&', '&\f'), '&\f') != -1) ampersand = -1;
                break;
            }
        // " ' [
        case 34:
        case 39:
        case 91:
            characters += (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["delimit"])(character);
            break;
        // \t \n \r \s
        case 9:
        case 10:
        case 13:
        case 32:
            characters += (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["whitespace"])(previous);
            break;
        // \
        case 92:
            characters += (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["escaping"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["caret"])() - 1, 7);
            continue;
        // /
        case 47:
            switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["peek"])()){
                case 42:
                case 47:
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["append"])(comment((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["commenter"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["next"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["caret"])()), root, parent), declarations);
                    break;
                default:
                    characters += '/';
            }
            break;
        // {
        case 123 * variable:
            points[index++] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["strlen"])(characters) * ampersand;
        // } ; \0
        case 125 * variable:
        case 59:
        case 0:
            switch(character){
                // \0 }
                case 0:
                case 125:
                    scanning = 0;
                // ;
                case 59 + offset:
                    if (ampersand == -1) characters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(characters, /\f/g, '');
                    if (property > 0 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["strlen"])(characters) - length) (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["append"])(property > 32 ? declaration(characters + ';', rule, parent, length - 1) : declaration((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(characters, ' ', '') + ';', rule, parent, length - 2), declarations);
                    break;
                // @ ;
                case 59:
                    characters += ';';
                // { rule/at-rule
                default:
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["append"])(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length), rulesets);
                    if (character === 123) if (offset === 0) parse(characters, root, reference, reference, props, rulesets, length, points, children);
                    else switch(atrule === 99 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["charat"])(characters, 3) === 110 ? 100 : atrule){
                        // d l m s
                        case 100:
                        case 108:
                        case 109:
                        case 115:
                            parse(value, reference, reference, rule && (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["append"])(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length), children), rules, children, length, points, rule ? props : children);
                            break;
                        default:
                            parse(characters, reference, reference, reference, [
                                ''
                            ], children, 0, points, children);
                    }
            }
            index = offset = property = 0, variable = ampersand = 1, type = characters = '', length = pseudo;
            break;
        // :
        case 58:
            length = 1 + (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["strlen"])(characters), property = previous;
        default:
            if (variable < 1) {
                if (character == 123) --variable;
                else if (character == 125 && variable++ == 0 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["prev"])() == 125) continue;
            }
            switch(characters += (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["from"])(character), character * variable){
                // &
                case 38:
                    ampersand = offset > 0 ? 1 : (characters += '\f', -1);
                    break;
                // ,
                case 44:
                    points[index++] = ((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["strlen"])(characters) - 1) * ampersand, ampersand = 1;
                    break;
                // @
                case 64:
                    // -
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["peek"])() === 45) characters += (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["delimit"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["next"])());
                    atrule = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["peek"])(), offset = length = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["strlen"])(type = characters += (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["identifier"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["caret"])())), character++;
                    break;
                // -
                case 45:
                    if (previous === 45 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["strlen"])(characters) == 2) variable = 0;
            }
    }
    return rulesets;
}
function ruleset(value, root, parent, index, offset, rules, points, type, props, children, length) {
    var post = offset - 1;
    var rule = offset === 0 ? rules : [
        ''
    ];
    var size = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["sizeof"])(rule);
    for(var i = 0, j = 0, k = 0; i < index; ++i)for(var x = 0, y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["substr"])(value, post + 1, post = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["abs"])(j = points[i])), z = value; x < size; ++x)if (z = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["trim"])(j > 0 ? rule[x] + ' ' + y : (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(y, /&\f/g, rule[x]))) props[k++] = z;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["node"])(value, root, parent, offset === 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["RULESET"] : type, props, children, length);
}
function comment(value, root, parent) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["node"])(value, root, parent, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["COMMENT"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["from"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["char"])()), (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["substr"])(value, 2, -2), 0);
}
function declaration(value, root, parent, length) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["node"])(value, root, parent, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["DECLARATION"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["substr"])(value, 0, length), (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["substr"])(value, length + 1, -1), length);
}
}),
"[project]/project-root/frontend/node_modules/@emotion/weak-memoize/dist/emotion-weak-memoize.esm.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>weakMemoize
]);
var weakMemoize = function weakMemoize(func) {
    var cache = new WeakMap();
    return function(arg) {
        if (cache.has(arg)) {
            // Use non-null assertion because we just checked that the cache `has` it
            // This allows us to remove `undefined` from the return value
            return cache.get(arg);
        }
        var ret = func(arg);
        cache.set(arg, ret);
        return ret;
    };
};
;
}),
"[project]/project-root/frontend/node_modules/@emotion/memoize/dist/emotion-memoize.esm.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>memoize
]);
function memoize(fn) {
    var cache = Object.create(null);
    return function(arg) {
        if (cache[arg] === undefined) cache[arg] = fn(arg);
        return cache[arg];
    };
}
;
}),
"[project]/project-root/frontend/node_modules/@emotion/cache/dist/emotion-cache.browser.development.esm.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>createCache
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$sheet$2f$dist$2f$emotion$2d$sheet$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@emotion/sheet/dist/emotion-sheet.development.esm.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/stylis/src/Tokenizer.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/stylis/src/Utility.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/stylis/src/Enum.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Serializer$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/stylis/src/Serializer.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Middleware$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/stylis/src/Middleware.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Parser$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/stylis/src/Parser.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$weak$2d$memoize$2f$dist$2f$emotion$2d$weak$2d$memoize$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@emotion/weak-memoize/dist/emotion-weak-memoize.esm.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$memoize$2f$dist$2f$emotion$2d$memoize$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@emotion/memoize/dist/emotion-memoize.esm.js [client] (ecmascript)");
;
;
;
;
var identifierWithPointTracking = function identifierWithPointTracking(begin, points, index) {
    var previous = 0;
    var character = 0;
    while(true){
        previous = character;
        character = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["peek"])(); // &\f
        if (previous === 38 && character === 12) {
            points[index] = 1;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["token"])(character)) {
            break;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["next"])();
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["slice"])(begin, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["position"]);
};
var toRules = function toRules(parsed, points) {
    // pretend we've started with a comma
    var index = -1;
    var character = 44;
    do {
        switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["token"])(character)){
            case 0:
                // &\f
                if (character === 38 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["peek"])() === 12) {
                    // this is not 100% correct, we don't account for literal sequences here - like for example quoted strings
                    // stylis inserts \f after & to know when & where it should replace this sequence with the context selector
                    // and when it should just concatenate the outer and inner selectors
                    // it's very unlikely for this sequence to actually appear in a different context, so we just leverage this fact here
                    points[index] = 1;
                }
                parsed[index] += identifierWithPointTracking(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["position"] - 1, points, index);
                break;
            case 2:
                parsed[index] += (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["delimit"])(character);
                break;
            case 4:
                // comma
                if (character === 44) {
                    // colon
                    parsed[++index] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["peek"])() === 58 ? '&\f' : '';
                    points[index] = parsed[index].length;
                    break;
                }
            // fallthrough
            default:
                parsed[index] += (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["from"])(character);
        }
    }while (character = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["next"])())
    return parsed;
};
var getRules = function getRules(value, points) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["dealloc"])(toRules((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["alloc"])(value), points));
}; // WeakSet would be more appropriate, but only WeakMap is supported in IE11
var fixedElements = /* #__PURE__ */ new WeakMap();
var compat = function compat(element) {
    if (element.type !== 'rule' || !element.parent || // positive .length indicates that this rule contains pseudo
    // negative .length indicates that this rule has been already prefixed
    element.length < 1) {
        return;
    }
    var value = element.value;
    var parent = element.parent;
    var isImplicitRule = element.column === parent.column && element.line === parent.line;
    while(parent.type !== 'rule'){
        parent = parent.parent;
        if (!parent) return;
    } // short-circuit for the simplest case
    if (element.props.length === 1 && value.charCodeAt(0) !== 58 && !fixedElements.get(parent)) {
        return;
    } // if this is an implicitly inserted rule (the one eagerly inserted at the each new nested level)
    // then the props has already been manipulated beforehand as they that array is shared between it and its "rule parent"
    if (isImplicitRule) {
        return;
    }
    fixedElements.set(element, true);
    var points = [];
    var rules = getRules(value, points);
    var parentRules = parent.props;
    for(var i = 0, k = 0; i < rules.length; i++){
        for(var j = 0; j < parentRules.length; j++, k++){
            element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
        }
    }
};
var removeLabel = function removeLabel(element) {
    if (element.type === 'decl') {
        var value = element.value;
        if (value.charCodeAt(0) === 108 && // charcode for b
        value.charCodeAt(2) === 98) {
            // this ignores label
            element["return"] = '';
            element.value = '';
        }
    }
};
var ignoreFlag = 'emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason';
var isIgnoringComment = function isIgnoringComment(element) {
    return element.type === 'comm' && element.children.indexOf(ignoreFlag) > -1;
};
var createUnsafeSelectorsAlarm = function createUnsafeSelectorsAlarm(cache) {
    return function(element, index, children) {
        if (element.type !== 'rule' || cache.compat) return;
        var unsafePseudoClasses = element.value.match(/(:first|:nth|:nth-last)-child/g);
        if (unsafePseudoClasses) {
            var isNested = !!element.parent; // in nested rules comments become children of the "auto-inserted" rule and that's always the `element.parent`
            //
            // considering this input:
            // .a {
            //   .b /* comm */ {}
            //   color: hotpink;
            // }
            // we get output corresponding to this:
            // .a {
            //   & {
            //     /* comm */
            //     color: hotpink;
            //   }
            //   .b {}
            // }
            var commentContainer = isNested ? element.parent.children : children;
            for(var i = commentContainer.length - 1; i >= 0; i--){
                var node = commentContainer[i];
                if (node.line < element.line) {
                    break;
                } // it is quite weird but comments are *usually* put at `column: element.column - 1`
                // so we seek *from the end* for the node that is earlier than the rule's `element` and check that
                // this will also match inputs like this:
                // .a {
                //   /* comm */
                //   .b {}
                // }
                //
                // but that is fine
                //
                // it would be the easiest to change the placement of the comment to be the first child of the rule:
                // .a {
                //   .b { /* comm */ }
                // }
                // with such inputs we wouldn't have to search for the comment at all
                // TODO: consider changing this comment placement in the next major version
                if (node.column < element.column) {
                    if (isIgnoringComment(node)) {
                        return;
                    }
                    break;
                }
            }
            unsafePseudoClasses.forEach(function(unsafePseudoClass) {
                console.error("The pseudo class \"" + unsafePseudoClass + "\" is potentially unsafe when doing server-side rendering. Try changing it to \"" + unsafePseudoClass.split('-child')[0] + "-of-type\".");
            });
        }
    };
};
var isImportRule = function isImportRule(element) {
    return element.type.charCodeAt(1) === 105 && element.type.charCodeAt(0) === 64;
};
var isPrependedWithRegularRules = function isPrependedWithRegularRules(index, children) {
    for(var i = index - 1; i >= 0; i--){
        if (!isImportRule(children[i])) {
            return true;
        }
    }
    return false;
}; // use this to remove incorrect elements from further processing
// so they don't get handed to the `sheet` (or anything else)
// as that could potentially lead to additional logs which in turn could be overhelming to the user
var nullifyElement = function nullifyElement(element) {
    element.type = '';
    element.value = '';
    element["return"] = '';
    element.children = '';
    element.props = '';
};
var incorrectImportAlarm = function incorrectImportAlarm(element, index, children) {
    if (!isImportRule(element)) {
        return;
    }
    if (element.parent) {
        console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles.");
        nullifyElement(element);
    } else if (isPrependedWithRegularRules(index, children)) {
        console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules.");
        nullifyElement(element);
    }
};
/* eslint-disable no-fallthrough */ function prefix(value, length) {
    switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["hash"])(value, length)){
        // color-adjust
        case 5103:
            return __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + 'print-' + value + value;
        // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
        case 5737:
        case 4201:
        case 3177:
        case 3433:
        case 1641:
        case 4457:
        case 2921:
        case 5572:
        case 6356:
        case 5844:
        case 3191:
        case 6645:
        case 3005:
        case 6391:
        case 5879:
        case 5623:
        case 6135:
        case 4599:
        case 4855:
        case 4215:
        case 6389:
        case 5109:
        case 5365:
        case 5621:
        case 3829:
            return __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + value;
        // appearance, user-select, transform, hyphens, text-size-adjust
        case 5349:
        case 4246:
        case 4810:
        case 6968:
        case 2756:
            return __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MOZ"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + value + value;
        // flex, flex-direction
        case 6828:
        case 4268:
            return __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + value + value;
        // order
        case 6165:
            return __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + 'flex-' + value + value;
        // align-items
        case 5187:
            return __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, /(\w+).+(:[^]+)/, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + 'box-$1$2' + __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + 'flex-$1$2') + value;
        // align-self
        case 5443:
            return __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + 'flex-item-' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, /flex-|-self/, '') + value;
        // align-content
        case 4675:
            return __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + 'flex-line-pack' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, /align-content|flex-|-self/, '') + value;
        // flex-shrink
        case 5548:
            return __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, 'shrink', 'negative') + value;
        // flex-basis
        case 5292:
            return __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, 'basis', 'preferred-size') + value;
        // flex-grow
        case 6060:
            return __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + 'box-' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, '-grow', '') + __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, 'grow', 'positive') + value;
        // transition
        case 4554:
            return __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, /([^-])(transform)/g, '$1' + __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + '$2') + value;
        // cursor
        case 6187:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, /(zoom-|grab)/, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + '$1'), /(image-set)/, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + '$1'), value, '') + value;
        // background, background-image
        case 5495:
        case 3959:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, /(image-set\([^]*)/, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + '$1' + '$`$1');
        // justify-content
        case 4968:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, /(.+:)(flex-)?(.*)/, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + 'box-pack:$3' + __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + value;
        // (margin|padding)-inline-(start|end)
        case 4095:
        case 3583:
        case 4068:
        case 2532:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, /(.+)-inline(.+)/, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + '$1$2') + value;
        // (min|max)?(width|height|inline-size|block-size)
        case 8116:
        case 7059:
        case 5753:
        case 5535:
        case 5445:
        case 5701:
        case 4933:
        case 4677:
        case 5533:
        case 5789:
        case 5021:
        case 4765:
            // stretch, max-content, min-content, fill-available
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["strlen"])(value) - 1 - length > 6) switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["charat"])(value, length + 1)){
                // (m)ax-content, (m)in-content
                case 109:
                    // -
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["charat"])(value, length + 4) !== 45) break;
                // (f)ill-available, (f)it-content
                case 102:
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, /(.+:)(.+)-([^]+)/, '$1' + __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + '$2-$3' + '$1' + __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MOZ"] + ((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["charat"])(value, length + 3) == 108 ? '$3' : '$2-$3')) + value;
                // (s)tretch
                case 115:
                    return ~(0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["indexof"])(value, 'stretch') ? prefix((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, 'stretch', 'fill-available'), length) + value : value;
            }
            break;
        // position: sticky
        case 4949:
            // (s)ticky?
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["charat"])(value, length + 1) !== 115) break;
        // display: (flex|inline-flex)
        case 6444:
            switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["charat"])(value, (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["strlen"])(value) - 3 - (~(0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["indexof"])(value, '!important') && 10))){
                // stic(k)y
                case 107:
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, ':', ':' + __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"]) + value;
                // (inline-)?fl(e)x
                case 101:
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, /(.+:)([^;!]+)(;|!.+)?/, '$1' + __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + ((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["charat"])(value, 14) === 45 ? 'inline-' : '') + 'box$3' + '$1' + __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + '$2$3' + '$1' + __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + '$2box$3') + value;
            }
            break;
        // writing-mode
        case 5936:
            switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["charat"])(value, length + 11)){
                // vertical-l(r)
                case 114:
                    return __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, /[svh]\w+-[tblr]{2}/, 'tb') + value;
                // vertical-r(l)
                case 108:
                    return __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value;
                // horizontal(-)tb
                case 45:
                    return __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, /[svh]\w+-[tblr]{2}/, 'lr') + value;
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + value + value;
    }
    return value;
}
var prefixer = function prefixer(element, index, children, callback) {
    if (element.length > -1) {
        if (!element["return"]) switch(element.type){
            case __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["DECLARATION"]:
                element["return"] = prefix(element.value, element.length);
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["KEYFRAMES"]:
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Serializer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["serialize"])([
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["copy"])(element, {
                        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(element.value, '@', '@' + __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"])
                    })
                ], callback);
            case __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["RULESET"]:
                if (element.length) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["combine"])(element.props, function(value) {
                    switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["match"])(value, /(::plac\w+|:read-\w+)/)){
                        // :read-(only|write)
                        case ':read-only':
                        case ':read-write':
                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Serializer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["serialize"])([
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["copy"])(element, {
                                    props: [
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, /:(read-\w+)/, ':' + __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MOZ"] + '$1')
                                    ]
                                })
                            ], callback);
                        // :placeholder
                        case '::placeholder':
                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Serializer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["serialize"])([
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["copy"])(element, {
                                    props: [
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, /:(plac\w+)/, ':' + __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + 'input-$1')
                                    ]
                                }),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["copy"])(element, {
                                    props: [
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, /:(plac\w+)/, ':' + __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MOZ"] + '$1')
                                    ]
                                }),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["copy"])(element, {
                                    props: [
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, /:(plac\w+)/, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + 'input-$1')
                                    ]
                                })
                            ], callback);
                    }
                    return '';
                });
        }
    }
};
var defaultStylisPlugins = [
    prefixer
];
var getSourceMap;
{
    var sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;
    getSourceMap = function getSourceMap(styles) {
        var matches = styles.match(sourceMapPattern);
        if (!matches) return;
        return matches[matches.length - 1];
    };
}var createCache = function createCache(options) {
    var key = options.key;
    if (!key) {
        throw new Error("You have to configure `key` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.\n" + "If multiple caches share the same key they might \"fight\" for each other's style elements.");
    }
    if (key === 'css') {
        var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])"); // get SSRed styles out of the way of React's hydration
        // document.head is a safe place to move them to(though note document.head is not necessarily the last place they will be)
        // note this very very intentionally targets all style elements regardless of the key to ensure
        // that creating a cache works inside of render of a React component
        Array.prototype.forEach.call(ssrStyles, function(node) {
            // we want to only move elements which have a space in the data-emotion attribute value
            // because that indicates that it is an Emotion 11 server-side rendered style elements
            // while we will already ignore Emotion 11 client-side inserted styles because of the :not([data-s]) part in the selector
            // Emotion 10 client-side inserted styles did not have data-s (but importantly did not have a space in their data-emotion attributes)
            // so checking for the space ensures that loading Emotion 11 after Emotion 10 has inserted some styles
            // will not result in the Emotion 10 styles being destroyed
            var dataEmotionAttribute = node.getAttribute('data-emotion');
            if (dataEmotionAttribute.indexOf(' ') === -1) {
                return;
            }
            document.head.appendChild(node);
            node.setAttribute('data-s', '');
        });
    }
    var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;
    {
        if (/[^a-z-]/.test(key)) {
            throw new Error("Emotion key must only contain lower case alphabetical characters and - but \"" + key + "\" was passed");
        }
    }
    var inserted = {};
    var container;
    var nodesToHydrate = [];
    {
        container = options.container || document.head;
        Array.prototype.forEach.call(// means that the style elements we're looking at are only Emotion 11 server-rendered style elements
        document.querySelectorAll("style[data-emotion^=\"" + key + " \"]"), function(node) {
            var attrib = node.getAttribute("data-emotion").split(' ');
            for(var i = 1; i < attrib.length; i++){
                inserted[attrib[i]] = true;
            }
            nodesToHydrate.push(node);
        });
    }
    var _insert;
    var omnipresentPlugins = [
        compat,
        removeLabel
    ];
    {
        omnipresentPlugins.push(createUnsafeSelectorsAlarm({
            get compat () {
                return cache.compat;
            }
        }), incorrectImportAlarm);
    }
    {
        var currentSheet;
        var finalizingPlugins = [
            __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Serializer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["stringify"],
            function(element) {
                if (!element.root) {
                    if (element["return"]) {
                        currentSheet.insert(element["return"]);
                    } else if (element.value && element.type !== __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["COMMENT"]) {
                        // insert empty rule in non-production environments
                        // so @emotion/jest can grab `key` from the (JS)DOM for caches without any rules inserted yet
                        currentSheet.insert(element.value + "{}");
                    }
                }
            }
        ];
        var serializer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Middleware$2e$js__$5b$client$5d$__$28$ecmascript$29$__["middleware"])(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));
        var stylis = function stylis(styles) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Serializer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["serialize"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$stylis$2f$src$2f$Parser$2e$js__$5b$client$5d$__$28$ecmascript$29$__["compile"])(styles), serializer);
        };
        _insert = function insert(selector, serialized, sheet, shouldCache) {
            currentSheet = sheet;
            if (getSourceMap) {
                var sourceMap = getSourceMap(serialized.styles);
                if (sourceMap) {
                    currentSheet = {
                        insert: function insert(rule) {
                            sheet.insert(rule + sourceMap);
                        }
                    };
                }
            }
            stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
            if (shouldCache) {
                cache.inserted[serialized.name] = true;
            }
        };
    }
    var cache = {
        key: key,
        sheet: new __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$sheet$2f$dist$2f$emotion$2d$sheet$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["StyleSheet"]({
            key: key,
            container: container,
            nonce: options.nonce,
            speedy: options.speedy,
            prepend: options.prepend,
            insertionPoint: options.insertionPoint
        }),
        nonce: options.nonce,
        inserted: inserted,
        registered: {},
        insert: _insert
    };
    cache.sheet.hydrate(nodesToHydrate);
    return cache;
};
;
}),
"[project]/project-root/frontend/node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/project-root/frontend/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time truthy", 1) {
    (function() {
        'use strict';
        // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
        // nor polyfill, then a plain number is used for performance.
        var hasSymbol = typeof Symbol === 'function' && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
        // (unstable) APIs that have been removed. Can we remove the symbols?
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
        function isValidElementType(type) {
            return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
            type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
            if (typeof object === 'object' && object !== null) {
                var $$typeof = object.$$typeof;
                switch($$typeof){
                    case REACT_ELEMENT_TYPE:
                        var type = object.type;
                        switch(type){
                            case REACT_ASYNC_MODE_TYPE:
                            case REACT_CONCURRENT_MODE_TYPE:
                            case REACT_FRAGMENT_TYPE:
                            case REACT_PROFILER_TYPE:
                            case REACT_STRICT_MODE_TYPE:
                            case REACT_SUSPENSE_TYPE:
                                return type;
                            default:
                                var $$typeofType = type && type.$$typeof;
                                switch($$typeofType){
                                    case REACT_CONTEXT_TYPE:
                                    case REACT_FORWARD_REF_TYPE:
                                    case REACT_LAZY_TYPE:
                                    case REACT_MEMO_TYPE:
                                    case REACT_PROVIDER_TYPE:
                                        return $$typeofType;
                                    default:
                                        return $$typeof;
                                }
                        }
                    case REACT_PORTAL_TYPE:
                        return $$typeof;
                }
            }
            return undefined;
        } // AsyncMode is deprecated along with isAsyncMode
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated
        function isAsyncMode(object) {
            {
                if (!hasWarnedAboutDeprecatedIsAsyncMode) {
                    hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint
                    console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
                }
            }
            return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
            return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
            return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
            return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
            return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
            return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
            return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
            return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
            return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
            return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
            return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
            return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
            return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
    })();
}
}),
"[project]/project-root/frontend/node_modules/hoist-non-react-statics/node_modules/react-is/index.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/project-root/frontend/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/project-root/frontend/node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js [client] (ecmascript)");
}
}),
"[project]/project-root/frontend/node_modules/react-is/cjs/react-is.development.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/project-root/frontend/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function typeOf(object) {
        if ("object" === typeof object && null !== object) {
            var $$typeof = object.$$typeof;
            switch($$typeof){
                case REACT_ELEMENT_TYPE:
                    switch(object = object.type, object){
                        case REACT_FRAGMENT_TYPE:
                        case REACT_PROFILER_TYPE:
                        case REACT_STRICT_MODE_TYPE:
                        case REACT_SUSPENSE_TYPE:
                        case REACT_SUSPENSE_LIST_TYPE:
                        case REACT_VIEW_TRANSITION_TYPE:
                            return object;
                        default:
                            switch(object = object && object.$$typeof, object){
                                case REACT_CONTEXT_TYPE:
                                case REACT_FORWARD_REF_TYPE:
                                case REACT_LAZY_TYPE:
                                case REACT_MEMO_TYPE:
                                    return object;
                                case REACT_CONSUMER_TYPE:
                                    return object;
                                default:
                                    return $$typeof;
                            }
                    }
                case REACT_PORTAL_TYPE:
                    return $$typeof;
            }
        }
    }
    var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference");
    exports.ContextConsumer = REACT_CONSUMER_TYPE;
    exports.ContextProvider = REACT_CONTEXT_TYPE;
    exports.Element = REACT_ELEMENT_TYPE;
    exports.ForwardRef = REACT_FORWARD_REF_TYPE;
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.Lazy = REACT_LAZY_TYPE;
    exports.Memo = REACT_MEMO_TYPE;
    exports.Portal = REACT_PORTAL_TYPE;
    exports.Profiler = REACT_PROFILER_TYPE;
    exports.StrictMode = REACT_STRICT_MODE_TYPE;
    exports.Suspense = REACT_SUSPENSE_TYPE;
    exports.SuspenseList = REACT_SUSPENSE_LIST_TYPE;
    exports.isContextConsumer = function(object) {
        return typeOf(object) === REACT_CONSUMER_TYPE;
    };
    exports.isContextProvider = function(object) {
        return typeOf(object) === REACT_CONTEXT_TYPE;
    };
    exports.isElement = function(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    };
    exports.isForwardRef = function(object) {
        return typeOf(object) === REACT_FORWARD_REF_TYPE;
    };
    exports.isFragment = function(object) {
        return typeOf(object) === REACT_FRAGMENT_TYPE;
    };
    exports.isLazy = function(object) {
        return typeOf(object) === REACT_LAZY_TYPE;
    };
    exports.isMemo = function(object) {
        return typeOf(object) === REACT_MEMO_TYPE;
    };
    exports.isPortal = function(object) {
        return typeOf(object) === REACT_PORTAL_TYPE;
    };
    exports.isProfiler = function(object) {
        return typeOf(object) === REACT_PROFILER_TYPE;
    };
    exports.isStrictMode = function(object) {
        return typeOf(object) === REACT_STRICT_MODE_TYPE;
    };
    exports.isSuspense = function(object) {
        return typeOf(object) === REACT_SUSPENSE_TYPE;
    };
    exports.isSuspenseList = function(object) {
        return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
    };
    exports.isValidElementType = function(type) {
        return "string" === typeof type || "function" === typeof type || type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || "object" === typeof type && null !== type && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_CONSUMER_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_CLIENT_REFERENCE || void 0 !== type.getModuleId) ? !0 : !1;
    };
    exports.typeOf = typeOf;
}();
}),
"[project]/project-root/frontend/node_modules/react-is/index.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/project-root/frontend/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/project-root/frontend/node_modules/react-is/cjs/react-is.development.js [client] (ecmascript)");
}
}),
"[project]/project-root/frontend/node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/project-root/frontend/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time truthy", 1) {
    (function() {
        'use strict';
        // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
        // nor polyfill, then a plain number is used for performance.
        var hasSymbol = typeof Symbol === 'function' && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
        // (unstable) APIs that have been removed. Can we remove the symbols?
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
        function isValidElementType(type) {
            return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
            type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
            if (typeof object === 'object' && object !== null) {
                var $$typeof = object.$$typeof;
                switch($$typeof){
                    case REACT_ELEMENT_TYPE:
                        var type = object.type;
                        switch(type){
                            case REACT_ASYNC_MODE_TYPE:
                            case REACT_CONCURRENT_MODE_TYPE:
                            case REACT_FRAGMENT_TYPE:
                            case REACT_PROFILER_TYPE:
                            case REACT_STRICT_MODE_TYPE:
                            case REACT_SUSPENSE_TYPE:
                                return type;
                            default:
                                var $$typeofType = type && type.$$typeof;
                                switch($$typeofType){
                                    case REACT_CONTEXT_TYPE:
                                    case REACT_FORWARD_REF_TYPE:
                                    case REACT_LAZY_TYPE:
                                    case REACT_MEMO_TYPE:
                                    case REACT_PROVIDER_TYPE:
                                        return $$typeofType;
                                    default:
                                        return $$typeof;
                                }
                        }
                    case REACT_PORTAL_TYPE:
                        return $$typeof;
                }
            }
            return undefined;
        } // AsyncMode is deprecated along with isAsyncMode
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated
        function isAsyncMode(object) {
            {
                if (!hasWarnedAboutDeprecatedIsAsyncMode) {
                    hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint
                    console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
                }
            }
            return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
            return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
            return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
            return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
            return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
            return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
            return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
            return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
            return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
            return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
            return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
            return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
            return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
    })();
}
}),
"[project]/project-root/frontend/node_modules/prop-types/node_modules/react-is/index.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/project-root/frontend/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/project-root/frontend/node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js [client] (ecmascript)");
}
}),
"[project]/project-root/frontend/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var reactIs = __turbopack_context__.r("[project]/project-root/frontend/node_modules/hoist-non-react-statics/node_modules/react-is/index.js [client] (ecmascript)");
/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */ var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};
var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};
var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
};
var MEMO_STATICS = {
    '$$typeof': true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
function getStatics(component) {
    // React v16.11 and below
    if (reactIs.isMemo(component)) {
        return MEMO_STATICS;
    } // React v16.12 and above
    return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}
var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components
        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }
        var keys = getOwnPropertyNames(sourceComponent);
        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }
        var targetStatics = getStatics(targetComponent);
        var sourceStatics = getStatics(sourceComponent);
        for(var i = 0; i < keys.length; ++i){
            var key = keys[i];
            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }
    }
    return targetComponent;
}
module.exports = hoistNonReactStatics;
}),
"[project]/project-root/frontend/node_modules/@emotion/react/_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.development.esm.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>hoistNonReactStatics
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$hoist$2d$non$2d$react$2d$statics$2f$dist$2f$hoist$2d$non$2d$react$2d$statics$2e$cjs$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js [client] (ecmascript)");
;
// this file isolates this package that is not tree-shakeable
// and if this module doesn't actually contain any logic of its own
// then Rollup just use 'hoist-non-react-statics' directly in other chunks
var hoistNonReactStatics = function(targetComponent, sourceComponent) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$hoist$2d$non$2d$react$2d$statics$2f$dist$2f$hoist$2d$non$2d$react$2d$statics$2e$cjs$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(targetComponent, sourceComponent);
};
;
}),
"[project]/project-root/frontend/node_modules/@emotion/react/dist/emotion-element-489459f2.browser.development.esm.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "C",
    ()=>CacheProvider,
    "E",
    ()=>Emotion$1,
    "T",
    ()=>ThemeContext,
    "_",
    ()=>__unsafe_useEmotionCache,
    "a",
    ()=>ThemeProvider,
    "b",
    ()=>withTheme,
    "c",
    ()=>createEmotionProps,
    "h",
    ()=>hasOwn,
    "u",
    ()=>useTheme,
    "w",
    ()=>withEmotionCache
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$cache$2f$dist$2f$emotion$2d$cache$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@emotion/cache/dist/emotion-cache.browser.development.esm.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@babel/runtime/helpers/esm/extends.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$weak$2d$memoize$2f$dist$2f$emotion$2d$weak$2d$memoize$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@emotion/weak-memoize/dist/emotion-weak-memoize.esm.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$react$2f$_isolated$2d$hnrs$2f$dist$2f$emotion$2d$react$2d$_isolated$2d$hnrs$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@emotion/react/_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.development.esm.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$utils$2f$dist$2f$emotion$2d$utils$2e$browser$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$serialize$2f$dist$2f$emotion$2d$serialize$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@emotion/serialize/dist/emotion-serialize.development.esm.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$use$2d$insertion$2d$effect$2d$with$2d$fallbacks$2f$dist$2f$emotion$2d$use$2d$insertion$2d$effect$2d$with$2d$fallbacks$2e$browser$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js [client] (ecmascript)");
;
;
;
;
;
;
;
;
;
var EmotionCacheContext = /* #__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createContext"](// because this module is primarily intended for the browser and node
// but it's also required in react native and similar environments sometimes
// and we could have a special build just for that
// but this is much easier and the native packages
// might use a different theme context in the future anyway
typeof HTMLElement !== 'undefined' ? /* #__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$cache$2f$dist$2f$emotion$2d$cache$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({
    key: 'css'
}) : null);
{
    EmotionCacheContext.displayName = 'EmotionCacheContext';
}var CacheProvider = EmotionCacheContext.Provider;
var __unsafe_useEmotionCache = function useEmotionCache() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"])(EmotionCacheContext);
};
var withEmotionCache = function withEmotionCache(func) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(props, ref) {
        // the cache will never be null in the browser
        var cache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"])(EmotionCacheContext);
        return func(props, cache, ref);
    });
};
var ThemeContext = /* #__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createContext"]({});
{
    ThemeContext.displayName = 'EmotionThemeContext';
}var useTheme = function useTheme() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"](ThemeContext);
};
var getTheme = function getTheme(outerTheme, theme) {
    if (typeof theme === 'function') {
        var mergedTheme = theme(outerTheme);
        if (mergedTheme == null || typeof mergedTheme !== 'object' || Array.isArray(mergedTheme)) {
            throw new Error('[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!');
        }
        return mergedTheme;
    }
    if (theme == null || typeof theme !== 'object' || Array.isArray(theme)) {
        throw new Error('[ThemeProvider] Please make your theme prop a plain object');
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({}, outerTheme, theme);
};
var createCacheWithTheme = /* #__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$weak$2d$memoize$2f$dist$2f$emotion$2d$weak$2d$memoize$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(function(outerTheme) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$weak$2d$memoize$2f$dist$2f$emotion$2d$weak$2d$memoize$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(function(theme) {
        return getTheme(outerTheme, theme);
    });
});
var ThemeProvider = function ThemeProvider(props) {
    var theme = __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"](ThemeContext);
    if (props.theme !== theme) {
        theme = createCacheWithTheme(theme)(props.theme);
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](ThemeContext.Provider, {
        value: theme
    }, props.children);
};
function withTheme(Component) {
    var componentName = Component.displayName || Component.name || 'Component';
    var WithTheme = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"](function render(props, ref) {
        var theme = __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"](ThemeContext);
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](Component, (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({
            theme: theme,
            ref: ref
        }, props));
    });
    WithTheme.displayName = "WithTheme(" + componentName + ")";
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$react$2f$_isolated$2d$hnrs$2f$dist$2f$emotion$2d$react$2d$_isolated$2d$hnrs$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(WithTheme, Component);
}
var hasOwn = {}.hasOwnProperty;
var getLastPart = function getLastPart(functionName) {
    // The match may be something like 'Object.createEmotionProps' or
    // 'Loader.prototype.render'
    var parts = functionName.split('.');
    return parts[parts.length - 1];
};
var getFunctionNameFromStackTraceLine = function getFunctionNameFromStackTraceLine(line) {
    // V8
    var match = /^\s+at\s+([A-Za-z0-9$.]+)\s/.exec(line);
    if (match) return getLastPart(match[1]); // Safari / Firefox
    match = /^([A-Za-z0-9$.]+)@/.exec(line);
    if (match) return getLastPart(match[1]);
    return undefined;
};
var internalReactFunctionNames = /* #__PURE__ */ new Set([
    'renderWithHooks',
    'processChild',
    'finishClassComponent',
    'renderToString'
]); // These identifiers come from error stacks, so they have to be valid JS
// identifiers, thus we only need to replace what is a valid character for JS,
// but not for CSS.
var sanitizeIdentifier = function sanitizeIdentifier(identifier) {
    return identifier.replace(/\$/g, '-');
};
var getLabelFromStackTrace = function getLabelFromStackTrace(stackTrace) {
    if (!stackTrace) return undefined;
    var lines = stackTrace.split('\n');
    for(var i = 0; i < lines.length; i++){
        var functionName = getFunctionNameFromStackTraceLine(lines[i]); // The first line of V8 stack traces is just "Error"
        if (!functionName) continue; // If we reach one of these, we have gone too far and should quit
        if (internalReactFunctionNames.has(functionName)) break; // The component name is the first function in the stack that starts with an
        // uppercase letter
        if (/^[A-Z]/.test(functionName)) return sanitizeIdentifier(functionName);
    }
    return undefined;
};
var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
var labelPropName = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__';
var createEmotionProps = function createEmotionProps(type, props) {
    if (typeof props.css === 'string' && // check if there is a css declaration
    props.css.indexOf(':') !== -1) {
        throw new Error("Strings are not allowed as css prop values, please wrap it in a css template literal from '@emotion/react' like this: css`" + props.css + "`");
    }
    var newProps = {};
    for(var _key in props){
        if (hasOwn.call(props, _key)) {
            newProps[_key] = props[_key];
        }
    }
    newProps[typePropName] = type; // Runtime labeling is an opt-in feature because:
    // - It causes hydration warnings when using Safari and SSR
    // - It can degrade performance if there are a huge number of elements
    //
    // Even if the flag is set, we still don't compute the label if it has already
    // been determined by the Babel plugin.
    if (typeof globalThis !== 'undefined' && !!globalThis.EMOTION_RUNTIME_AUTO_LABEL && !!props.css && (typeof props.css !== 'object' || !('name' in props.css) || typeof props.css.name !== 'string' || props.css.name.indexOf('-') === -1)) {
        var label = getLabelFromStackTrace(new Error().stack);
        if (label) newProps[labelPropName] = label;
    }
    return newProps;
};
var Insertion = function Insertion(_ref) {
    var cache = _ref.cache, serialized = _ref.serialized, isStringTag = _ref.isStringTag;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$utils$2f$dist$2f$emotion$2d$utils$2e$browser$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["registerStyles"])(cache, serialized, isStringTag);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$use$2d$insertion$2d$effect$2d$with$2d$fallbacks$2f$dist$2f$emotion$2d$use$2d$insertion$2d$effect$2d$with$2d$fallbacks$2e$browser$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useInsertionEffectAlwaysWithSyncFallback"])({
        "Insertion.useInsertionEffectAlwaysWithSyncFallback": function() {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$utils$2f$dist$2f$emotion$2d$utils$2e$browser$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["insertStyles"])(cache, serialized, isStringTag);
        }
    }["Insertion.useInsertionEffectAlwaysWithSyncFallback"]);
    return null;
};
var Emotion = /* #__PURE__ */ withEmotionCache(function(props, cache, ref) {
    var cssProp = props.css; // so that using `css` from `emotion` and passing the result to the css prop works
    // not passing the registered cache to serializeStyles because it would
    // make certain babel optimisations not possible
    if (typeof cssProp === 'string' && cache.registered[cssProp] !== undefined) {
        cssProp = cache.registered[cssProp];
    }
    var WrappedComponent = props[typePropName];
    var registeredStyles = [
        cssProp
    ];
    var className = '';
    if (typeof props.className === 'string') {
        className = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$utils$2f$dist$2f$emotion$2d$utils$2e$browser$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getRegisteredStyles"])(cache.registered, registeredStyles, props.className);
    } else if (props.className != null) {
        className = props.className + " ";
    }
    var serialized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$serialize$2f$dist$2f$emotion$2d$serialize$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["serializeStyles"])(registeredStyles, undefined, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"](ThemeContext));
    if (serialized.name.indexOf('-') === -1) {
        var labelFromStack = props[labelPropName];
        if (labelFromStack) {
            serialized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$serialize$2f$dist$2f$emotion$2d$serialize$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["serializeStyles"])([
                serialized,
                'label:' + labelFromStack + ';'
            ]);
        }
    }
    className += cache.key + "-" + serialized.name;
    var newProps = {};
    for(var _key2 in props){
        if (hasOwn.call(props, _key2) && _key2 !== 'css' && _key2 !== typePropName && _key2 !== labelPropName) {
            newProps[_key2] = props[_key2];
        }
    }
    newProps.className = className;
    if (ref) {
        newProps.ref = ref;
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](Insertion, {
        cache: cache,
        serialized: serialized,
        isStringTag: typeof WrappedComponent === 'string'
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](WrappedComponent, newProps));
});
{
    Emotion.displayName = 'EmotionCssPropInternal';
}var Emotion$1 = Emotion;
;
}),
"[project]/project-root/frontend/node_modules/@emotion/react/dist/emotion-element-489459f2.browser.development.esm.js [client] (ecmascript) <export w as withEmotionCache>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "withEmotionCache",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$489459f2$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["w"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$489459f2$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@emotion/react/dist/emotion-element-489459f2.browser.development.esm.js [client] (ecmascript)");
}),
"[project]/project-root/frontend/node_modules/@emotion/react/dist/emotion-element-489459f2.browser.development.esm.js [client] (ecmascript) <export T as ThemeContext>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeContext",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$489459f2$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["T"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$489459f2$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@emotion/react/dist/emotion-element-489459f2.browser.development.esm.js [client] (ecmascript)");
}),
"[project]/project-root/frontend/node_modules/@emotion/react/dist/emotion-react.browser.development.esm.js [client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClassNames",
    ()=>ClassNames,
    "Global",
    ()=>Global,
    "createElement",
    ()=>jsx,
    "css",
    ()=>css,
    "jsx",
    ()=>jsx,
    "keyframes",
    ()=>keyframes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$489459f2$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@emotion/react/dist/emotion-element-489459f2.browser.development.esm.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$utils$2f$dist$2f$emotion$2d$utils$2e$browser$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$use$2d$insertion$2d$effect$2d$with$2d$fallbacks$2f$dist$2f$emotion$2d$use$2d$insertion$2d$effect$2d$with$2d$fallbacks$2e$browser$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$serialize$2f$dist$2f$emotion$2d$serialize$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@emotion/serialize/dist/emotion-serialize.development.esm.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$cache$2f$dist$2f$emotion$2d$cache$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@emotion/cache/dist/emotion-cache.browser.development.esm.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@babel/runtime/helpers/esm/extends.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$weak$2d$memoize$2f$dist$2f$emotion$2d$weak$2d$memoize$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@emotion/weak-memoize/dist/emotion-weak-memoize.esm.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$hoist$2d$non$2d$react$2d$statics$2f$dist$2f$hoist$2d$non$2d$react$2d$statics$2e$cjs$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js [client] (ecmascript)");
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
var isDevelopment = true;
var pkg = {
    name: "@emotion/react",
    version: "11.14.0",
    main: "dist/emotion-react.cjs.js",
    module: "dist/emotion-react.esm.js",
    types: "dist/emotion-react.cjs.d.ts",
    exports: {
        ".": {
            types: {
                "import": "./dist/emotion-react.cjs.mjs",
                "default": "./dist/emotion-react.cjs.js"
            },
            development: {
                "edge-light": {
                    module: "./dist/emotion-react.development.edge-light.esm.js",
                    "import": "./dist/emotion-react.development.edge-light.cjs.mjs",
                    "default": "./dist/emotion-react.development.edge-light.cjs.js"
                },
                worker: {
                    module: "./dist/emotion-react.development.edge-light.esm.js",
                    "import": "./dist/emotion-react.development.edge-light.cjs.mjs",
                    "default": "./dist/emotion-react.development.edge-light.cjs.js"
                },
                workerd: {
                    module: "./dist/emotion-react.development.edge-light.esm.js",
                    "import": "./dist/emotion-react.development.edge-light.cjs.mjs",
                    "default": "./dist/emotion-react.development.edge-light.cjs.js"
                },
                browser: {
                    module: "./dist/emotion-react.browser.development.esm.js",
                    "import": "./dist/emotion-react.browser.development.cjs.mjs",
                    "default": "./dist/emotion-react.browser.development.cjs.js"
                },
                module: "./dist/emotion-react.development.esm.js",
                "import": "./dist/emotion-react.development.cjs.mjs",
                "default": "./dist/emotion-react.development.cjs.js"
            },
            "edge-light": {
                module: "./dist/emotion-react.edge-light.esm.js",
                "import": "./dist/emotion-react.edge-light.cjs.mjs",
                "default": "./dist/emotion-react.edge-light.cjs.js"
            },
            worker: {
                module: "./dist/emotion-react.edge-light.esm.js",
                "import": "./dist/emotion-react.edge-light.cjs.mjs",
                "default": "./dist/emotion-react.edge-light.cjs.js"
            },
            workerd: {
                module: "./dist/emotion-react.edge-light.esm.js",
                "import": "./dist/emotion-react.edge-light.cjs.mjs",
                "default": "./dist/emotion-react.edge-light.cjs.js"
            },
            browser: {
                module: "./dist/emotion-react.browser.esm.js",
                "import": "./dist/emotion-react.browser.cjs.mjs",
                "default": "./dist/emotion-react.browser.cjs.js"
            },
            module: "./dist/emotion-react.esm.js",
            "import": "./dist/emotion-react.cjs.mjs",
            "default": "./dist/emotion-react.cjs.js"
        },
        "./jsx-runtime": {
            types: {
                "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs",
                "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"
            },
            development: {
                "edge-light": {
                    module: "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.esm.js",
                    "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.cjs.mjs",
                    "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.cjs.js"
                },
                worker: {
                    module: "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.esm.js",
                    "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.cjs.mjs",
                    "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.cjs.js"
                },
                workerd: {
                    module: "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.esm.js",
                    "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.cjs.mjs",
                    "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.cjs.js"
                },
                browser: {
                    module: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.development.esm.js",
                    "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.development.cjs.mjs",
                    "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.development.cjs.js"
                },
                module: "./jsx-runtime/dist/emotion-react-jsx-runtime.development.esm.js",
                "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.cjs.mjs",
                "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.cjs.js"
            },
            "edge-light": {
                module: "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.esm.js",
                "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.cjs.mjs",
                "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.cjs.js"
            },
            worker: {
                module: "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.esm.js",
                "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.cjs.mjs",
                "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.cjs.js"
            },
            workerd: {
                module: "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.esm.js",
                "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.cjs.mjs",
                "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.cjs.js"
            },
            browser: {
                module: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",
                "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.cjs.mjs",
                "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.cjs.js"
            },
            module: "./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js",
            "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs",
            "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"
        },
        "./_isolated-hnrs": {
            types: {
                "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs",
                "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"
            },
            development: {
                "edge-light": {
                    module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.esm.js",
                    "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.cjs.mjs",
                    "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.cjs.js"
                },
                worker: {
                    module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.esm.js",
                    "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.cjs.mjs",
                    "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.cjs.js"
                },
                workerd: {
                    module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.esm.js",
                    "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.cjs.mjs",
                    "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.cjs.js"
                },
                browser: {
                    module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.development.esm.js",
                    "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.development.cjs.mjs",
                    "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.development.cjs.js"
                },
                module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.esm.js",
                "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.cjs.mjs",
                "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.cjs.js"
            },
            "edge-light": {
                module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.esm.js",
                "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.cjs.mjs",
                "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.cjs.js"
            },
            worker: {
                module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.esm.js",
                "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.cjs.mjs",
                "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.cjs.js"
            },
            workerd: {
                module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.esm.js",
                "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.cjs.mjs",
                "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.cjs.js"
            },
            browser: {
                module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",
                "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.cjs.mjs",
                "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.cjs.js"
            },
            module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js",
            "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs",
            "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"
        },
        "./jsx-dev-runtime": {
            types: {
                "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs",
                "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"
            },
            development: {
                "edge-light": {
                    module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.esm.js",
                    "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.cjs.mjs",
                    "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.cjs.js"
                },
                worker: {
                    module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.esm.js",
                    "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.cjs.mjs",
                    "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.cjs.js"
                },
                workerd: {
                    module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.esm.js",
                    "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.cjs.mjs",
                    "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.cjs.js"
                },
                browser: {
                    module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.development.esm.js",
                    "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.development.cjs.mjs",
                    "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.development.cjs.js"
                },
                module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.esm.js",
                "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.cjs.mjs",
                "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.cjs.js"
            },
            "edge-light": {
                module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.esm.js",
                "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.cjs.mjs",
                "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.cjs.js"
            },
            worker: {
                module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.esm.js",
                "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.cjs.mjs",
                "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.cjs.js"
            },
            workerd: {
                module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.esm.js",
                "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.cjs.mjs",
                "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.cjs.js"
            },
            browser: {
                module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",
                "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.cjs.mjs",
                "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.cjs.js"
            },
            module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js",
            "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs",
            "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"
        },
        "./package.json": "./package.json",
        "./types/css-prop": "./types/css-prop.d.ts",
        "./macro": {
            types: {
                "import": "./macro.d.mts",
                "default": "./macro.d.ts"
            },
            "default": "./macro.js"
        }
    },
    imports: {
        "#is-development": {
            development: "./src/conditions/true.ts",
            "default": "./src/conditions/false.ts"
        },
        "#is-browser": {
            "edge-light": "./src/conditions/false.ts",
            workerd: "./src/conditions/false.ts",
            worker: "./src/conditions/false.ts",
            browser: "./src/conditions/true.ts",
            "default": "./src/conditions/is-browser.ts"
        }
    },
    files: [
        "src",
        "dist",
        "jsx-runtime",
        "jsx-dev-runtime",
        "_isolated-hnrs",
        "types/css-prop.d.ts",
        "macro.*"
    ],
    sideEffects: false,
    author: "Emotion Contributors",
    license: "MIT",
    scripts: {
        "test:typescript": "dtslint types"
    },
    dependencies: {
        "@babel/runtime": "^7.18.3",
        "@emotion/babel-plugin": "^11.13.5",
        "@emotion/cache": "^11.14.0",
        "@emotion/serialize": "^1.3.3",
        "@emotion/use-insertion-effect-with-fallbacks": "^1.2.0",
        "@emotion/utils": "^1.4.2",
        "@emotion/weak-memoize": "^0.4.0",
        "hoist-non-react-statics": "^3.3.1"
    },
    peerDependencies: {
        react: ">=16.8.0"
    },
    peerDependenciesMeta: {
        "@types/react": {
            optional: true
        }
    },
    devDependencies: {
        "@definitelytyped/dtslint": "0.0.112",
        "@emotion/css": "11.13.5",
        "@emotion/css-prettifier": "1.2.0",
        "@emotion/server": "11.11.0",
        "@emotion/styled": "11.14.0",
        "@types/hoist-non-react-statics": "^3.3.5",
        "html-tag-names": "^1.1.2",
        react: "16.14.0",
        "svg-tag-names": "^1.1.1",
        typescript: "^5.4.5"
    },
    repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
    publishConfig: {
        access: "public"
    },
    "umd:main": "dist/emotion-react.umd.min.js",
    preconstruct: {
        entrypoints: [
            "./index.ts",
            "./jsx-runtime.ts",
            "./jsx-dev-runtime.ts",
            "./_isolated-hnrs.ts"
        ],
        umdName: "emotionReact",
        exports: {
            extra: {
                "./types/css-prop": "./types/css-prop.d.ts",
                "./macro": {
                    types: {
                        "import": "./macro.d.mts",
                        "default": "./macro.d.ts"
                    },
                    "default": "./macro.js"
                }
            }
        }
    }
};
var jsx = function jsx(type, props) {
    // eslint-disable-next-line prefer-rest-params
    var args = arguments;
    if (props == null || !__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$489459f2$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["h"].call(props, 'css')) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"].apply(undefined, args);
    }
    var argsLength = args.length;
    var createElementArgArray = new Array(argsLength);
    createElementArgArray[0] = __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$489459f2$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["E"];
    createElementArgArray[1] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$489459f2$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["c"])(type, props);
    for(var i = 2; i < argsLength; i++){
        createElementArgArray[i] = args[i];
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"].apply(null, createElementArgArray);
};
(function(_jsx) {
    var JSX;
    (function(_JSX) {})(JSX || (JSX = _jsx.JSX || (_jsx.JSX = {})));
})(jsx || (jsx = {}));
var warnedAboutCssPropForGlobal = false; // maintain place over rerenders.
// initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
// initial client-side render from SSR, use place of hydrating tag
var Global = /* #__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$489459f2$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["w"])(function(props, cache) {
    if (!warnedAboutCssPropForGlobal && (// probably using the custom createElement which
    // means it will be turned into a className prop
    // I don't really want to add it to the type since it shouldn't be used
    'className' in props && props.className || 'css' in props && props.css)) {
        console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?");
        warnedAboutCssPropForGlobal = true;
    }
    var styles = props.styles;
    var serialized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$serialize$2f$dist$2f$emotion$2d$serialize$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["serializeStyles"])([
        styles
    ], undefined, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$489459f2$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["T"]));
    // but it is based on a constant that will never change at runtime
    // it's effectively like having two implementations and switching them out
    // so it's not actually breaking anything
    var sheetRef = __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"]();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$use$2d$insertion$2d$effect$2d$with$2d$fallbacks$2f$dist$2f$emotion$2d$use$2d$insertion$2d$effect$2d$with$2d$fallbacks$2e$browser$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useInsertionEffectWithLayoutFallback"])({
        "Global.useInsertionEffectWithLayoutFallback": function() {
            var key = cache.key + "-global"; // use case of https://github.com/emotion-js/emotion/issues/2675
            var sheet = new cache.sheet.constructor({
                key: key,
                nonce: cache.sheet.nonce,
                container: cache.sheet.container,
                speedy: cache.sheet.isSpeedy
            });
            var rehydrating = false;
            var node = document.querySelector("style[data-emotion=\"" + key + " " + serialized.name + "\"]");
            if (cache.sheet.tags.length) {
                sheet.before = cache.sheet.tags[0];
            }
            if (node !== null) {
                rehydrating = true; // clear the hash so this node won't be recognizable as rehydratable by other <Global/>s
                node.setAttribute('data-emotion', key);
                sheet.hydrate([
                    node
                ]);
            }
            sheetRef.current = [
                sheet,
                rehydrating
            ];
            return ({
                "Global.useInsertionEffectWithLayoutFallback": function() {
                    sheet.flush();
                }
            })["Global.useInsertionEffectWithLayoutFallback"];
        }
    }["Global.useInsertionEffectWithLayoutFallback"], [
        cache
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$use$2d$insertion$2d$effect$2d$with$2d$fallbacks$2f$dist$2f$emotion$2d$use$2d$insertion$2d$effect$2d$with$2d$fallbacks$2e$browser$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useInsertionEffectWithLayoutFallback"])({
        "Global.useInsertionEffectWithLayoutFallback": function() {
            var sheetRefCurrent = sheetRef.current;
            var sheet = sheetRefCurrent[0], rehydrating = sheetRefCurrent[1];
            if (rehydrating) {
                sheetRefCurrent[1] = false;
                return;
            }
            if (serialized.next !== undefined) {
                // insert keyframes
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$utils$2f$dist$2f$emotion$2d$utils$2e$browser$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["insertStyles"])(cache, serialized.next, true);
            }
            if (sheet.tags.length) {
                // if this doesn't exist then it will be null so the style element will be appended
                var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
                sheet.before = element;
                sheet.flush();
            }
            cache.insert("", serialized, sheet, false);
        }
    }["Global.useInsertionEffectWithLayoutFallback"], [
        cache,
        serialized.name
    ]);
    return null;
});
{
    Global.displayName = 'EmotionGlobal';
}function css() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
        args[_key] = arguments[_key];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$serialize$2f$dist$2f$emotion$2d$serialize$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["serializeStyles"])(args);
}
function keyframes() {
    var insertable = css.apply(void 0, arguments);
    var name = "animation-" + insertable.name;
    return {
        name: name,
        styles: "@keyframes " + name + "{" + insertable.styles + "}",
        anim: 1,
        toString: function toString() {
            return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
        }
    };
}
var classnames = function classnames(args) {
    var len = args.length;
    var i = 0;
    var cls = '';
    for(; i < len; i++){
        var arg = args[i];
        if (arg == null) continue;
        var toAdd = void 0;
        switch(typeof arg){
            case 'boolean':
                break;
            case 'object':
                {
                    if (Array.isArray(arg)) {
                        toAdd = classnames(arg);
                    } else {
                        if (arg.styles !== undefined && arg.name !== undefined) {
                            console.error('You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n' + '`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component.');
                        }
                        toAdd = '';
                        for(var k in arg){
                            if (arg[k] && k) {
                                toAdd && (toAdd += ' ');
                                toAdd += k;
                            }
                        }
                    }
                    break;
                }
            default:
                {
                    toAdd = arg;
                }
        }
        if (toAdd) {
            cls && (cls += ' ');
            cls += toAdd;
        }
    }
    return cls;
};
function merge(registered, css, className) {
    var registeredStyles = [];
    var rawClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$utils$2f$dist$2f$emotion$2d$utils$2e$browser$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getRegisteredStyles"])(registered, registeredStyles, className);
    if (registeredStyles.length < 2) {
        return className;
    }
    return rawClassName + css(registeredStyles);
}
var Insertion = function Insertion(_ref) {
    var cache = _ref.cache, serializedArr = _ref.serializedArr;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$use$2d$insertion$2d$effect$2d$with$2d$fallbacks$2f$dist$2f$emotion$2d$use$2d$insertion$2d$effect$2d$with$2d$fallbacks$2e$browser$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useInsertionEffectAlwaysWithSyncFallback"])({
        "Insertion.useInsertionEffectAlwaysWithSyncFallback": function() {
            for(var i = 0; i < serializedArr.length; i++){
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$utils$2f$dist$2f$emotion$2d$utils$2e$browser$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["insertStyles"])(cache, serializedArr[i], false);
            }
        }
    }["Insertion.useInsertionEffectAlwaysWithSyncFallback"]);
    return null;
};
var ClassNames = /* #__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$489459f2$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["w"])(function(props, cache) {
    var hasRendered = false;
    var serializedArr = [];
    var css = function css() {
        if (hasRendered && isDevelopment) {
            throw new Error('css can only be used during render');
        }
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        var serialized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$serialize$2f$dist$2f$emotion$2d$serialize$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["serializeStyles"])(args, cache.registered);
        serializedArr.push(serialized); // registration has to happen here as the result of this might get consumed by `cx`
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$utils$2f$dist$2f$emotion$2d$utils$2e$browser$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["registerStyles"])(cache, serialized, false);
        return cache.key + "-" + serialized.name;
    };
    var cx = function cx() {
        if (hasRendered && isDevelopment) {
            throw new Error('cx can only be used during render');
        }
        for(var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++){
            args[_key2] = arguments[_key2];
        }
        return merge(cache.registered, css, classnames(args));
    };
    var content = {
        css: css,
        cx: cx,
        theme: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$489459f2$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["T"])
    };
    var ele = props.children(content);
    hasRendered = true;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](Insertion, {
        cache: cache,
        serializedArr: serializedArr
    }), ele);
});
{
    ClassNames.displayName = 'EmotionClassNames';
}{
    var isBrowser = typeof document !== 'undefined'; // #1727, #2905 for some reason Jest and Vitest evaluate modules twice if some consuming module gets mocked
    var isTestEnv = typeof jest !== 'undefined' || typeof vi !== 'undefined';
    if (isBrowser && !isTestEnv) {
        // globalThis has wide browser support - https://caniuse.com/?search=globalThis, Node.js 12 and later
        var globalContext = typeof globalThis !== 'undefined' ? globalThis // eslint-disable-line no-undef
         : isBrowser ? window : /*TURBOPACK member replacement*/ __turbopack_context__.g;
        var globalKey = "__EMOTION_REACT_" + pkg.version.split('.')[0] + "__";
        if (globalContext[globalKey]) {
            console.warn('You are loading @emotion/react when it is already loaded. Running ' + 'multiple instances may cause problems. This can happen if multiple ' + 'versions are used, or if multiple builds of the same version are ' + 'used.');
        }
        globalContext[globalKey] = true;
    }
};
}),
"[project]/project-root/frontend/node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getRegisteredStyles",
    ()=>getRegisteredStyles,
    "insertStyles",
    ()=>insertStyles,
    "registerStyles",
    ()=>registerStyles
]);
var isBrowser = true;
function getRegisteredStyles(registered, registeredStyles, classNames) {
    var rawClassName = '';
    classNames.split(' ').forEach(function(className) {
        if (registered[className] !== undefined) {
            registeredStyles.push(registered[className] + ";");
        } else if (className) {
            rawClassName += className + " ";
        }
    });
    return rawClassName;
}
var registerStyles = function registerStyles(cache, serialized, isStringTag) {
    var className = cache.key + "-" + serialized.name;
    if (// class name could be used further down
    // the tree but if it's a string tag, we know it won't
    // so we don't have to add it to registered cache.
    // this improves memory usage since we can avoid storing the whole style string
    (isStringTag === false || // we need to always store it if we're in compat mode and
    // in node since emotion-server relies on whether a style is in
    // the registered cache to know whether a style is global or not
    // also, note that this check will be dead code eliminated in the browser
    isBrowser === false) && cache.registered[className] === undefined) {
        cache.registered[className] = serialized.styles;
    }
};
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
    registerStyles(cache, serialized, isStringTag);
    var className = cache.key + "-" + serialized.name;
    if (cache.inserted[serialized.name] === undefined) {
        var current = serialized;
        do {
            cache.insert(serialized === current ? "." + className : '', current, cache.sheet, true);
            current = current.next;
        }while (current !== undefined)
    }
};
;
}),
"[project]/project-root/frontend/node_modules/@emotion/hash/dist/emotion-hash.esm.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable */ // Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
__turbopack_context__.s([
    "default",
    ()=>murmur2
]);
function murmur2(str) {
    // 'm' and 'r' are mixing constants generated offline.
    // They're not really 'magic', they just happen to work well.
    // const m = 0x5bd1e995;
    // const r = 24;
    // Initialize the hash
    var h = 0; // Mix 4 bytes at a time into the hash
    var k, i = 0, len = str.length;
    for(; len >= 4; ++i, len -= 4){
        k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
        k = /* Math.imul(k, m): */ (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
        k ^= /* k >>> r: */ k >>> 24;
        h = /* Math.imul(k, m): */ (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^ /* Math.imul(h, m): */ (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
    } // Handle the last few bytes of the input array
    switch(len){
        case 3:
            h ^= (str.charCodeAt(i + 2) & 0xff) << 16;
        case 2:
            h ^= (str.charCodeAt(i + 1) & 0xff) << 8;
        case 1:
            h ^= str.charCodeAt(i) & 0xff;
            h = /* Math.imul(h, m): */ (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
    } // Do a few final mixes of the hash to ensure the last few
    // bytes are well-incorporated.
    h ^= h >>> 13;
    h = /* Math.imul(h, m): */ (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
    return ((h ^ h >>> 15) >>> 0).toString(36);
}
;
}),
"[project]/project-root/frontend/node_modules/@emotion/unitless/dist/emotion-unitless.esm.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>unitlessKeys
]);
var unitlessKeys = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    scale: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    // SVG-related properties
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
};
;
}),
"[project]/project-root/frontend/node_modules/@emotion/serialize/dist/emotion-serialize.development.esm.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "serializeStyles",
    ()=>serializeStyles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$hash$2f$dist$2f$emotion$2d$hash$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@emotion/hash/dist/emotion-hash.esm.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$unitless$2f$dist$2f$emotion$2d$unitless$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@emotion/unitless/dist/emotion-unitless.esm.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$memoize$2f$dist$2f$emotion$2d$memoize$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@emotion/memoize/dist/emotion-memoize.esm.js [client] (ecmascript)");
;
;
;
var isDevelopment = true;
var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
var isCustomProperty = function isCustomProperty(property) {
    return property.charCodeAt(1) === 45;
};
var isProcessableValue = function isProcessableValue(value) {
    return value != null && typeof value !== 'boolean';
};
var processStyleName = /* #__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$memoize$2f$dist$2f$emotion$2d$memoize$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(function(styleName) {
    return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});
var processStyleValue = function processStyleValue(key, value) {
    switch(key){
        case 'animation':
        case 'animationName':
            {
                if (typeof value === 'string') {
                    return value.replace(animationRegex, function(match, p1, p2) {
                        cursor = {
                            name: p1,
                            styles: p2,
                            next: cursor
                        };
                        return p1;
                    });
                }
            }
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$unitless$2f$dist$2f$emotion$2d$unitless$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"][key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
        return value + 'px';
    }
    return value;
};
{
    var contentValuePattern = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/;
    var contentValues = [
        'normal',
        'none',
        'initial',
        'inherit',
        'unset'
    ];
    var oldProcessStyleValue = processStyleValue;
    var msPattern = /^-ms-/;
    var hyphenPattern = /-(.)/g;
    var hyphenatedCache = {};
    processStyleValue = function processStyleValue(key, value) {
        if (key === 'content') {
            if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
                throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
            }
        }
        var processed = oldProcessStyleValue(key, value);
        if (processed !== '' && !isCustomProperty(key) && key.indexOf('-') !== -1 && hyphenatedCache[key] === undefined) {
            hyphenatedCache[key] = true;
            console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, 'ms-').replace(hyphenPattern, function(str, _char) {
                return _char.toUpperCase();
            }) + "?");
        }
        return processed;
    };
}var noComponentSelectorMessage = 'Component selectors can only be used in conjunction with ' + '@emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware ' + 'compiler transform.';
function handleInterpolation(mergedProps, registered, interpolation) {
    if (interpolation == null) {
        return '';
    }
    var componentSelector = interpolation;
    if (componentSelector.__emotion_styles !== undefined) {
        if (String(componentSelector) === 'NO_COMPONENT_SELECTOR') {
            throw new Error(noComponentSelectorMessage);
        }
        return componentSelector;
    }
    switch(typeof interpolation){
        case 'boolean':
            {
                return '';
            }
        case 'object':
            {
                var keyframes = interpolation;
                if (keyframes.anim === 1) {
                    cursor = {
                        name: keyframes.name,
                        styles: keyframes.styles,
                        next: cursor
                    };
                    return keyframes.name;
                }
                var serializedStyles = interpolation;
                if (serializedStyles.styles !== undefined) {
                    var next = serializedStyles.next;
                    if (next !== undefined) {
                        // not the most efficient thing ever but this is a pretty rare case
                        // and there will be very few iterations of this generally
                        while(next !== undefined){
                            cursor = {
                                name: next.name,
                                styles: next.styles,
                                next: cursor
                            };
                            next = next.next;
                        }
                    }
                    var styles = serializedStyles.styles + ";";
                    return styles;
                }
                return createStringFromObject(mergedProps, registered, interpolation);
            }
        case 'function':
            {
                if (mergedProps !== undefined) {
                    var previousCursor = cursor;
                    var result = interpolation(mergedProps);
                    cursor = previousCursor;
                    return handleInterpolation(mergedProps, registered, result);
                } else {
                    console.error('Functions that are interpolated in css calls will be stringified.\n' + 'If you want to have a css call based on props, create a function that returns a css call like this\n' + 'let dynamicStyle = (props) => css`color: ${props.color}`\n' + 'It can be called directly with props or interpolated in a styled call like this\n' + "let SomeComponent = styled('div')`${dynamicStyle}`");
                }
                break;
            }
        case 'string':
            {
                var matched = [];
                var replaced = interpolation.replace(animationRegex, function(_match, _p1, p2) {
                    var fakeVarName = "animation" + matched.length;
                    matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, '') + "`");
                    return "${" + fakeVarName + "}";
                });
                if (matched.length) {
                    console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(matched, [
                        "`" + replaced + "`"
                    ]).join('\n') + "\n\nYou should wrap it with `css` like this:\n\ncss`" + replaced + "`");
                }
            }
            break;
    } // finalize string values (regular strings and functions interpolated into css calls)
    var asString = interpolation;
    if (registered == null) {
        return asString;
    }
    var cached = registered[asString];
    return cached !== undefined ? cached : asString;
}
function createStringFromObject(mergedProps, registered, obj) {
    var string = '';
    if (Array.isArray(obj)) {
        for(var i = 0; i < obj.length; i++){
            string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
        }
    } else {
        for(var key in obj){
            var value = obj[key];
            if (typeof value !== 'object') {
                var asString = value;
                if (registered != null && registered[asString] !== undefined) {
                    string += key + "{" + registered[asString] + "}";
                } else if (isProcessableValue(asString)) {
                    string += processStyleName(key) + ":" + processStyleValue(key, asString) + ";";
                }
            } else {
                if (key === 'NO_COMPONENT_SELECTOR' && isDevelopment) {
                    throw new Error(noComponentSelectorMessage);
                }
                if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
                    for(var _i = 0; _i < value.length; _i++){
                        if (isProcessableValue(value[_i])) {
                            string += processStyleName(key) + ":" + processStyleValue(key, value[_i]) + ";";
                        }
                    }
                } else {
                    var interpolated = handleInterpolation(mergedProps, registered, value);
                    switch(key){
                        case 'animation':
                        case 'animationName':
                            {
                                string += processStyleName(key) + ":" + interpolated + ";";
                                break;
                            }
                        default:
                            {
                                if (key === 'undefined') {
                                    console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);
                                }
                                string += key + "{" + interpolated + "}";
                            }
                    }
                }
            }
        }
    }
    return string;
}
var labelPattern = /label:\s*([^\s;{]+)\s*(;|$)/g; // this is the cursor for keyframes
// keyframes are stored on the SerializedStyles object as a linked list
var cursor;
function serializeStyles(args, registered, mergedProps) {
    if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
        return args[0];
    }
    var stringMode = true;
    var styles = '';
    cursor = undefined;
    var strings = args[0];
    if (strings == null || strings.raw === undefined) {
        stringMode = false;
        styles += handleInterpolation(mergedProps, registered, strings);
    } else {
        var asTemplateStringsArr = strings;
        if (asTemplateStringsArr[0] === undefined) {
            console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
        }
        styles += asTemplateStringsArr[0];
    } // we start at 1 since we've already handled the first arg
    for(var i = 1; i < args.length; i++){
        styles += handleInterpolation(mergedProps, registered, args[i]);
        if (stringMode) {
            var templateStringsArr = strings;
            if (templateStringsArr[i] === undefined) {
                console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
            }
            styles += templateStringsArr[i];
        }
    } // using a global regex with .exec is stateful so lastIndex has to be reset each time
    labelPattern.lastIndex = 0;
    var identifierName = '';
    var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5
    while((match = labelPattern.exec(styles)) !== null){
        identifierName += '-' + match[1];
    }
    var name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$hash$2f$dist$2f$emotion$2d$hash$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(styles) + identifierName;
    {
        var devStyles = {
            name: name,
            styles: styles,
            next: cursor,
            toString: function toString() {
                return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
            }
        };
        return devStyles;
    }
}
;
}),
"[project]/project-root/frontend/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useInsertionEffectAlwaysWithSyncFallback",
    ()=>useInsertionEffectAlwaysWithSyncFallback,
    "useInsertionEffectWithLayoutFallback",
    ()=>useInsertionEffectWithLayoutFallback
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/react/index.js [client] (ecmascript)");
;
var syncFallback = function syncFallback(create) {
    return create();
};
var useInsertionEffect = __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__['useInsertion' + 'Effect'] ? __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__['useInsertion' + 'Effect'] : false;
var useInsertionEffectAlwaysWithSyncFallback = useInsertionEffect || syncFallback;
var useInsertionEffectWithLayoutFallback = useInsertionEffect || __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__.useLayoutEffect;
;
}),
"[project]/project-root/frontend/node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>isPropValid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$memoize$2f$dist$2f$emotion$2d$memoize$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@emotion/memoize/dist/emotion-memoize.esm.js [client] (ecmascript)");
;
// eslint-disable-next-line no-undef
var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23
var isPropValid = /* #__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$memoize$2f$dist$2f$emotion$2d$memoize$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(function(prop) {
    return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
});
;
}),
"[project]/project-root/frontend/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.development.esm.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>createStyled
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@babel/runtime/helpers/esm/extends.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$489459f2$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__w__as__withEmotionCache$3e$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@emotion/react/dist/emotion-element-489459f2.browser.development.esm.js [client] (ecmascript) <export w as withEmotionCache>");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$489459f2$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__T__as__ThemeContext$3e$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@emotion/react/dist/emotion-element-489459f2.browser.development.esm.js [client] (ecmascript) <export T as ThemeContext>");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$serialize$2f$dist$2f$emotion$2d$serialize$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@emotion/serialize/dist/emotion-serialize.development.esm.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$use$2d$insertion$2d$effect$2d$with$2d$fallbacks$2f$dist$2f$emotion$2d$use$2d$insertion$2d$effect$2d$with$2d$fallbacks$2e$browser$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$utils$2f$dist$2f$emotion$2d$utils$2e$browser$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$is$2d$prop$2d$valid$2f$dist$2f$emotion$2d$is$2d$prop$2d$valid$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js [client] (ecmascript)");
;
;
;
;
;
;
;
var isDevelopment = true;
var testOmitPropsOnStringTag = __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$is$2d$prop$2d$valid$2f$dist$2f$emotion$2d$is$2d$prop$2d$valid$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"];
var testOmitPropsOnComponent = function testOmitPropsOnComponent(key) {
    return key !== 'theme';
};
var getDefaultShouldForwardProp = function getDefaultShouldForwardProp(tag) {
    return typeof tag === 'string' && // 96 is one less than the char code
    // for "a" so this is checking that
    // it's a lowercase character
    tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
};
var composeShouldForwardProps = function composeShouldForwardProps(tag, options, isReal) {
    var shouldForwardProp;
    if (options) {
        var optionsShouldForwardProp = options.shouldForwardProp;
        shouldForwardProp = tag.__emotion_forwardProp && optionsShouldForwardProp ? function(propName) {
            return tag.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName);
        } : optionsShouldForwardProp;
    }
    if (typeof shouldForwardProp !== 'function' && isReal) {
        shouldForwardProp = tag.__emotion_forwardProp;
    }
    return shouldForwardProp;
};
var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var Insertion = function Insertion(_ref) {
    var cache = _ref.cache, serialized = _ref.serialized, isStringTag = _ref.isStringTag;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$utils$2f$dist$2f$emotion$2d$utils$2e$browser$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["registerStyles"])(cache, serialized, isStringTag);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$use$2d$insertion$2d$effect$2d$with$2d$fallbacks$2f$dist$2f$emotion$2d$use$2d$insertion$2d$effect$2d$with$2d$fallbacks$2e$browser$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useInsertionEffectAlwaysWithSyncFallback"])({
        "Insertion.useInsertionEffectAlwaysWithSyncFallback": function() {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$utils$2f$dist$2f$emotion$2d$utils$2e$browser$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["insertStyles"])(cache, serialized, isStringTag);
        }
    }["Insertion.useInsertionEffectAlwaysWithSyncFallback"]);
    return null;
};
var createStyled = function createStyled(tag, options) {
    {
        if (tag === undefined) {
            throw new Error('You are trying to create a styled element with an undefined component.\nYou may have forgotten to import it.');
        }
    }
    var isReal = tag.__emotion_real === tag;
    var baseTag = isReal && tag.__emotion_base || tag;
    var identifierName;
    var targetClassName;
    if (options !== undefined) {
        identifierName = options.label;
        targetClassName = options.target;
    }
    var shouldForwardProp = composeShouldForwardProps(tag, options, isReal);
    var defaultShouldForwardProp = shouldForwardProp || getDefaultShouldForwardProp(baseTag);
    var shouldUseAs = !defaultShouldForwardProp('as');
    return function() {
        // eslint-disable-next-line prefer-rest-params
        var args = arguments;
        var styles = isReal && tag.__emotion_styles !== undefined ? tag.__emotion_styles.slice(0) : [];
        if (identifierName !== undefined) {
            styles.push("label:" + identifierName + ";");
        }
        if (args[0] == null || args[0].raw === undefined) {
            // eslint-disable-next-line prefer-spread
            styles.push.apply(styles, args);
        } else {
            var templateStringsArr = args[0];
            if (templateStringsArr[0] === undefined) {
                console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
            }
            styles.push(templateStringsArr[0]);
            var len = args.length;
            var i = 1;
            for(; i < len; i++){
                if (templateStringsArr[i] === undefined) {
                    console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
                }
                styles.push(args[i], templateStringsArr[i]);
            }
        }
        var Styled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$489459f2$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__w__as__withEmotionCache$3e$__["withEmotionCache"])(function(props, cache, ref) {
            var FinalTag = shouldUseAs && props.as || baseTag;
            var className = '';
            var classInterpolations = [];
            var mergedProps = props;
            if (props.theme == null) {
                mergedProps = {};
                for(var key in props){
                    mergedProps[key] = props[key];
                }
                mergedProps.theme = __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$489459f2$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__T__as__ThemeContext$3e$__["ThemeContext"]);
            }
            if (typeof props.className === 'string') {
                className = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$utils$2f$dist$2f$emotion$2d$utils$2e$browser$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getRegisteredStyles"])(cache.registered, classInterpolations, props.className);
            } else if (props.className != null) {
                className = props.className + " ";
            }
            var serialized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$serialize$2f$dist$2f$emotion$2d$serialize$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["serializeStyles"])(styles.concat(classInterpolations), cache.registered, mergedProps);
            className += cache.key + "-" + serialized.name;
            if (targetClassName !== undefined) {
                className += " " + targetClassName;
            }
            var finalShouldForwardProp = shouldUseAs && shouldForwardProp === undefined ? getDefaultShouldForwardProp(FinalTag) : defaultShouldForwardProp;
            var newProps = {};
            for(var _key in props){
                if (shouldUseAs && _key === 'as') continue;
                if (finalShouldForwardProp(_key)) {
                    newProps[_key] = props[_key];
                }
            }
            newProps.className = className;
            if (ref) {
                newProps.ref = ref;
            }
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](Insertion, {
                cache: cache,
                serialized: serialized,
                isStringTag: typeof FinalTag === 'string'
            }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](FinalTag, newProps));
        });
        Styled.displayName = identifierName !== undefined ? identifierName : "Styled(" + (typeof baseTag === 'string' ? baseTag : baseTag.displayName || baseTag.name || 'Component') + ")";
        Styled.defaultProps = tag.defaultProps;
        Styled.__emotion_real = Styled;
        Styled.__emotion_base = baseTag;
        Styled.__emotion_styles = styles;
        Styled.__emotion_forwardProp = shouldForwardProp;
        Object.defineProperty(Styled, 'toString', {
            value: function value() {
                if (targetClassName === undefined && isDevelopment) {
                    return 'NO_COMPONENT_SELECTOR';
                }
                return "." + targetClassName;
            }
        });
        Styled.withComponent = function(nextTag, nextOptions) {
            var newStyled = createStyled(nextTag, (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({}, options, nextOptions, {
                shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, true)
            }));
            return newStyled.apply(void 0, styles);
        };
        return Styled;
    };
};
;
}),
"[project]/project-root/frontend/node_modules/@emotion/styled/dist/emotion-styled.browser.development.esm.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>styled
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$styled$2f$base$2f$dist$2f$emotion$2d$styled$2d$base$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.development.esm.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@babel/runtime/helpers/esm/extends.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$serialize$2f$dist$2f$emotion$2d$serialize$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@emotion/serialize/dist/emotion-serialize.development.esm.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$use$2d$insertion$2d$effect$2d$with$2d$fallbacks$2f$dist$2f$emotion$2d$use$2d$insertion$2d$effect$2d$with$2d$fallbacks$2e$browser$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$utils$2f$dist$2f$emotion$2d$utils$2e$browser$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$is$2d$prop$2d$valid$2f$dist$2f$emotion$2d$is$2d$prop$2d$valid$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js [client] (ecmascript)");
;
;
;
;
;
;
;
;
var tags = [
    'a',
    'abbr',
    'address',
    'area',
    'article',
    'aside',
    'audio',
    'b',
    'base',
    'bdi',
    'bdo',
    'big',
    'blockquote',
    'body',
    'br',
    'button',
    'canvas',
    'caption',
    'cite',
    'code',
    'col',
    'colgroup',
    'data',
    'datalist',
    'dd',
    'del',
    'details',
    'dfn',
    'dialog',
    'div',
    'dl',
    'dt',
    'em',
    'embed',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hgroup',
    'hr',
    'html',
    'i',
    'iframe',
    'img',
    'input',
    'ins',
    'kbd',
    'keygen',
    'label',
    'legend',
    'li',
    'link',
    'main',
    'map',
    'mark',
    'marquee',
    'menu',
    'menuitem',
    'meta',
    'meter',
    'nav',
    'noscript',
    'object',
    'ol',
    'optgroup',
    'option',
    'output',
    'p',
    'param',
    'picture',
    'pre',
    'progress',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'script',
    'section',
    'select',
    'small',
    'source',
    'span',
    'strong',
    'style',
    'sub',
    'summary',
    'sup',
    'table',
    'tbody',
    'td',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'title',
    'tr',
    'track',
    'u',
    'ul',
    'var',
    'video',
    'wbr',
    'circle',
    'clipPath',
    'defs',
    'ellipse',
    'foreignObject',
    'g',
    'image',
    'line',
    'linearGradient',
    'mask',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialGradient',
    'rect',
    'stop',
    'svg',
    'text',
    'tspan'
];
// bind it to avoid mutating the original function
var styled = __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$styled$2f$base$2f$dist$2f$emotion$2d$styled$2d$base$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bind(null);
tags.forEach(function(tagName) {
    styled[tagName] = styled(tagName);
});
;
}),
"[project]/project-root/frontend/node_modules/@mui/styled-engine/esm/index.js [client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/**
 * @mui/styled-engine v7.3.5
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>styled,
    "internal_mutateStyles",
    ()=>internal_mutateStyles,
    "internal_serializeStyles",
    ()=>internal_serializeStyles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/project-root/frontend/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
/* eslint-disable no-underscore-dangle */ var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@emotion/styled/dist/emotion-styled.browser.development.esm.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$serialize$2f$dist$2f$emotion$2d$serialize$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@emotion/serialize/dist/emotion-serialize.development.esm.js [client] (ecmascript)");
'use client';
;
;
function styled(tag, options) {
    const stylesFactory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(tag, options);
    if ("TURBOPACK compile-time truthy", 1) {
        return (...styles)=>{
            const component = typeof tag === 'string' ? `"${tag}"` : 'component';
            if (styles.length === 0) {
                console.error([
                    `MUI: Seems like you called \`styled(${component})()\` without a \`style\` argument.`,
                    'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'
                ].join('\n'));
            } else if (styles.some((style)=>style === undefined)) {
                console.error(`MUI: the styled(${component})(...args) API requires all its args to be defined.`);
            }
            return stylesFactory(...styles);
        };
    }
    //TURBOPACK unreachable
    ;
}
function internal_mutateStyles(tag, processor) {
    // Emotion attaches all the styles as `__emotion_styles`.
    // Ref: https://github.com/emotion-js/emotion/blob/16d971d0da229596d6bcc39d282ba9753c9ee7cf/packages/styled/src/base.js#L186
    if (Array.isArray(tag.__emotion_styles)) {
        tag.__emotion_styles = processor(tag.__emotion_styles);
    }
}
// Emotion only accepts an array, but we want to avoid allocations
const wrapper = [];
function internal_serializeStyles(styles) {
    wrapper[0] = styles;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$serialize$2f$dist$2f$emotion$2d$serialize$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["serializeStyles"])(wrapper);
}
;
;
;
}),
"[project]/project-root/frontend/node_modules/@mui/styled-engine/esm/GlobalStyles/GlobalStyles.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GlobalStyles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/project-root/frontend/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/prop-types/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@emotion/react/dist/emotion-react.browser.development.esm.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/react/jsx-runtime.js [client] (ecmascript)");
'use client';
;
;
;
function isEmpty(obj) {
    return obj === undefined || obj === null || Object.keys(obj).length === 0;
}
function GlobalStyles(props) {
    const { styles, defaultTheme = {} } = props;
    const globalStyles = typeof styles === 'function' ? (themeInput)=>styles(isEmpty(themeInput) ? defaultTheme : themeInput) : styles;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Global"], {
        styles: globalStyles
    });
}
("TURBOPACK compile-time truthy", 1) ? GlobalStyles.propTypes = {
    defaultTheme: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object,
    styles: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].array,
        __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object,
        __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].func
    ])
} : "TURBOPACK unreachable";
}),
"[project]/project-root/frontend/node_modules/@mui/styled-engine/esm/GlobalStyles/GlobalStyles.js [client] (ecmascript) <export default as GlobalStyles>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GlobalStyles",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$styled$2d$engine$2f$esm$2f$GlobalStyles$2f$GlobalStyles$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$styled$2d$engine$2f$esm$2f$GlobalStyles$2f$GlobalStyles$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/styled-engine/esm/GlobalStyles/GlobalStyles.js [client] (ecmascript)");
}),
"[project]/project-root/frontend/node_modules/@mui/utils/esm/capitalize/capitalize.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>capitalize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/project-root/frontend/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
;
function capitalize(string) {
    if (typeof string !== 'string') {
        throw new Error(("TURBOPACK compile-time truthy", 1) ? 'MUI: `capitalize(string)` expects a string argument.' : "TURBOPACK unreachable");
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
}
}),
"[project]/project-root/frontend/node_modules/@mui/utils/esm/deepmerge/deepmerge.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>deepmerge,
    "isPlainObject",
    ()=>isPlainObject
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2d$is$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/react-is/index.js [client] (ecmascript)");
;
;
function isPlainObject(item) {
    if (typeof item !== 'object' || item === null) {
        return false;
    }
    const prototype = Object.getPrototypeOf(item);
    return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in item) && !(Symbol.iterator in item);
}
function deepClone(source) {
    if (/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["isValidElement"](source) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2d$is$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["isValidElementType"])(source) || !isPlainObject(source)) {
        return source;
    }
    const output = {};
    Object.keys(source).forEach((key)=>{
        output[key] = deepClone(source[key]);
    });
    return output;
}
function deepmerge(target, source, options = {
    clone: true
}) {
    const output = options.clone ? {
        ...target
    } : target;
    if (isPlainObject(target) && isPlainObject(source)) {
        Object.keys(source).forEach((key)=>{
            if (/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["isValidElement"](source[key]) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2d$is$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["isValidElementType"])(source[key])) {
                output[key] = source[key];
            } else if (isPlainObject(source[key]) && // Avoid prototype pollution
            Object.prototype.hasOwnProperty.call(target, key) && isPlainObject(target[key])) {
                // Since `output` is a clone of `target` and we have narrowed `target` in this block we can cast to the same type.
                output[key] = deepmerge(target[key], source[key], options);
            } else if (options.clone) {
                output[key] = isPlainObject(source[key]) ? deepClone(source[key]) : source[key];
            } else {
                output[key] = source[key];
            }
        });
    }
    return output;
}
}),
"[project]/project-root/frontend/node_modules/@mui/utils/esm/ClassNameGenerator/ClassNameGenerator.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const defaultGenerator = (componentName)=>componentName;
const createClassNameGenerator = ()=>{
    let generate = defaultGenerator;
    return {
        configure (generator) {
            generate = generator;
        },
        generate (componentName) {
            return generate(componentName);
        },
        reset () {
            generate = defaultGenerator;
        }
    };
};
const ClassNameGenerator = createClassNameGenerator();
const __TURBOPACK__default__export__ = ClassNameGenerator;
}),
"[project]/project-root/frontend/node_modules/@mui/utils/esm/ClassNameGenerator/ClassNameGenerator.js [client] (ecmascript) <export default as unstable_ClassNameGenerator>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "unstable_ClassNameGenerator",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$ClassNameGenerator$2f$ClassNameGenerator$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$ClassNameGenerator$2f$ClassNameGenerator$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/utils/esm/ClassNameGenerator/ClassNameGenerator.js [client] (ecmascript)");
}),
"[project]/project-root/frontend/node_modules/@mui/utils/esm/clamp/clamp.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function clamp(val, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) {
    return Math.max(min, Math.min(val, max));
}
const __TURBOPACK__default__export__ = clamp;
}),
"[project]/project-root/frontend/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>generateUtilityClass,
    "globalStateClasses",
    ()=>globalStateClasses,
    "isGlobalState",
    ()=>isGlobalState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$ClassNameGenerator$2f$ClassNameGenerator$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/utils/esm/ClassNameGenerator/ClassNameGenerator.js [client] (ecmascript)");
;
const globalStateClasses = {
    active: 'active',
    checked: 'checked',
    completed: 'completed',
    disabled: 'disabled',
    error: 'error',
    expanded: 'expanded',
    focused: 'focused',
    focusVisible: 'focusVisible',
    open: 'open',
    readOnly: 'readOnly',
    required: 'required',
    selected: 'selected'
};
function generateUtilityClass(componentName, slot, globalStatePrefix = 'Mui') {
    const globalStateClass = globalStateClasses[slot];
    return globalStateClass ? `${globalStatePrefix}-${globalStateClass}` : `${__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$ClassNameGenerator$2f$ClassNameGenerator$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].generate(componentName)}-${slot}`;
}
function isGlobalState(slot) {
    return globalStateClasses[slot] !== undefined;
}
}),
"[project]/project-root/frontend/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>generateUtilityClasses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js [client] (ecmascript)");
;
function generateUtilityClasses(componentName, slots, globalStatePrefix = 'Mui') {
    const result = {};
    slots.forEach((slot)=>{
        result[slot] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(componentName, slot, globalStatePrefix);
    });
    return result;
}
}),
"[project]/project-root/frontend/node_modules/@mui/utils/esm/isMuiElement/isMuiElement.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>isMuiElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/react/index.js [client] (ecmascript)");
;
function isMuiElement(element, muiNames) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["isValidElement"](element) && muiNames.indexOf(// For server components `muiName` is available in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    element.type.muiName ?? element.type?._payload?.value?.muiName) !== -1;
}
}),
"[project]/project-root/frontend/node_modules/@mui/utils/esm/composeClasses/composeClasses.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint no-restricted-syntax: 0, prefer-template: 0, guard-for-in: 0
   ---
   These rules are preventing the performance optimizations below.
 */ /**
 * Compose classes from multiple sources.
 *
 * @example
 * ```tsx
 * const slots = {
 *  root: ['root', 'primary'],
 *  label: ['label'],
 * };
 *
 * const getUtilityClass = (slot) => `MuiButton-${slot}`;
 *
 * const classes = {
 *   root: 'my-root-class',
 * };
 *
 * const output = composeClasses(slots, getUtilityClass, classes);
 * // {
 * //   root: 'MuiButton-root MuiButton-primary my-root-class',
 * //   label: 'MuiButton-label',
 * // }
 * ```
 *
 * @param slots a list of classes for each possible slot
 * @param getUtilityClass a function to resolve the class based on the slot name
 * @param classes the input classes from props
 * @returns the resolved classes for all slots
 */ __turbopack_context__.s([
    "default",
    ()=>composeClasses
]);
function composeClasses(slots, getUtilityClass, classes = undefined) {
    const output = {};
    for(const slotName in slots){
        const slot = slots[slotName];
        let buffer = '';
        let start = true;
        for(let i = 0; i < slot.length; i += 1){
            const value = slot[i];
            if (value) {
                buffer += (start === true ? '' : ' ') + getUtilityClass(value);
                start = false;
                if (classes && classes[value]) {
                    buffer += ' ' + classes[value];
                }
            }
        }
        output[slotName] = buffer;
    }
    return output;
}
}),
"[project]/project-root/frontend/node_modules/@mui/utils/esm/getDisplayName/getDisplayName.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>getDisplayName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2d$is$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/react-is/index.js [client] (ecmascript)");
;
function getFunctionComponentName(Component, fallback = '') {
    return Component.displayName || Component.name || fallback;
}
function getWrappedName(outerType, innerType, wrapperName) {
    const functionName = getFunctionComponentName(innerType);
    return outerType.displayName || (functionName !== '' ? `${wrapperName}(${functionName})` : wrapperName);
}
function getDisplayName(Component) {
    if (Component == null) {
        return undefined;
    }
    if (typeof Component === 'string') {
        return Component;
    }
    if (typeof Component === 'function') {
        return getFunctionComponentName(Component, 'Component');
    }
    // TypeScript can't have components as objects but they exist in the form of `memo` or `Suspense`
    if (typeof Component === 'object') {
        switch(Component.$$typeof){
            case __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2d$is$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ForwardRef"]:
                return getWrappedName(Component, Component.render, 'ForwardRef');
            case __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2d$is$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Memo"]:
                return getWrappedName(Component, Component.type, 'memo');
            default:
                return undefined;
        }
    }
    return undefined;
}
}),
"[project]/project-root/frontend/node_modules/@mui/utils/esm/resolveProps/resolveProps.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>resolveProps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/clsx/dist/clsx.mjs [client] (ecmascript)");
;
function resolveProps(defaultProps, props, mergeClassNameAndStyle = false) {
    const output = {
        ...props
    };
    for(const key in defaultProps){
        if (Object.prototype.hasOwnProperty.call(defaultProps, key)) {
            const propName = key;
            if (propName === 'components' || propName === 'slots') {
                output[propName] = {
                    ...defaultProps[propName],
                    ...output[propName]
                };
            } else if (propName === 'componentsProps' || propName === 'slotProps') {
                const defaultSlotProps = defaultProps[propName];
                const slotProps = props[propName];
                if (!slotProps) {
                    output[propName] = defaultSlotProps || {};
                } else if (!defaultSlotProps) {
                    output[propName] = slotProps;
                } else {
                    output[propName] = {
                        ...slotProps
                    };
                    for(const slotKey in defaultSlotProps){
                        if (Object.prototype.hasOwnProperty.call(defaultSlotProps, slotKey)) {
                            const slotPropName = slotKey;
                            output[propName][slotPropName] = resolveProps(defaultSlotProps[slotPropName], slotProps[slotPropName], mergeClassNameAndStyle);
                        }
                    }
                }
            } else if (propName === 'className' && mergeClassNameAndStyle && props.className) {
                output.className = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"])(defaultProps?.className, props?.className);
            } else if (propName === 'style' && mergeClassNameAndStyle && props.style) {
                output.style = {
                    ...defaultProps?.style,
                    ...props?.style
                };
            } else if (output[propName] === undefined) {
                output[propName] = defaultProps[propName];
            }
        }
    }
    return output;
}
}),
"[project]/project-root/frontend/node_modules/@mui/utils/esm/requirePropFactory/requirePropFactory.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>requirePropFactory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/project-root/frontend/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
function requirePropFactory(componentNameInError, Component) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const prevPropTypes = Component ? {
        ...Component.propTypes
    } : null;
    const requireProp = (requiredProp)=>(props, propName, componentName, location, propFullName, ...args)=>{
            const propFullNameSafe = propFullName || propName;
            const defaultTypeChecker = prevPropTypes?.[propFullNameSafe];
            if (defaultTypeChecker) {
                const typeCheckerResult = defaultTypeChecker(props, propName, componentName, location, propFullName, ...args);
                if (typeCheckerResult) {
                    return typeCheckerResult;
                }
            }
            if (typeof props[propName] !== 'undefined' && !props[requiredProp]) {
                return new Error(`The prop \`${propFullNameSafe}\` of ` + `\`${componentNameInError}\` can only be used together with the \`${requiredProp}\` prop.`);
            }
            return null;
        };
    return requireProp;
}
}),
"[project]/project-root/frontend/node_modules/@mui/utils/esm/integerPropType/integerPropType.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getTypeByValue",
    ()=>getTypeByValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/project-root/frontend/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
function getTypeByValue(value) {
    const valueType = typeof value;
    switch(valueType){
        case 'number':
            if (Number.isNaN(value)) {
                return 'NaN';
            }
            if (!Number.isFinite(value)) {
                return 'Infinity';
            }
            if (value !== Math.floor(value)) {
                return 'float';
            }
            return 'number';
        case 'object':
            if (value === null) {
                return 'null';
            }
            return value.constructor.name;
        default:
            return valueType;
    }
}
function requiredInteger(props, propName, componentName, location) {
    const propValue = props[propName];
    if (propValue == null || !Number.isInteger(propValue)) {
        const propType = getTypeByValue(propValue);
        return new RangeError(`Invalid ${location} \`${propName}\` of type \`${propType}\` supplied to \`${componentName}\`, expected \`integer\`.`);
    }
    return null;
}
function validator(props, propName, componentName, location) {
    const propValue = props[propName];
    if (propValue === undefined) {
        return null;
    }
    return requiredInteger(props, propName, componentName, location);
}
function validatorNoop() {
    return null;
}
validator.isRequired = requiredInteger;
validatorNoop.isRequired = validatorNoop;
const integerPropType = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : validator;
const __TURBOPACK__default__export__ = integerPropType;
}),
"[project]/project-root/frontend/node_modules/@mui/utils/esm/HTMLElementType/HTMLElementType.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HTMLElementType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/project-root/frontend/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
function HTMLElementType(props, propName, componentName, location, propFullName) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const propValue = props[propName];
    const safePropName = propFullName || propName;
    if (propValue == null) {
        return null;
    }
    if (propValue && propValue.nodeType !== 1) {
        return new Error(`Invalid ${location} \`${safePropName}\` supplied to \`${componentName}\`. ` + `Expected an HTMLElement.`);
    }
    return null;
}
}),
"[project]/project-root/frontend/node_modules/@mui/utils/esm/chainPropTypes/chainPropTypes.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>chainPropTypes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/project-root/frontend/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
function chainPropTypes(propType1, propType2) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return function validate(...args) {
        return propType1(...args) || propType2(...args);
    };
}
}),
"[project]/project-root/frontend/node_modules/@mui/utils/esm/elementAcceptingRef/elementAcceptingRef.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/prop-types/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$chainPropTypes$2f$chainPropTypes$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/utils/esm/chainPropTypes/chainPropTypes.js [client] (ecmascript)");
;
;
function isClassComponent(elementType) {
    // elementType.prototype?.isReactComponent
    const { prototype = {} } = elementType;
    return Boolean(prototype.isReactComponent);
}
function acceptingRef(props, propName, componentName, location, propFullName) {
    const element = props[propName];
    const safePropName = propFullName || propName;
    if (element == null || // When server-side rendering React doesn't warn either.
    // This is not an accurate check for SSR.
    // This is only in place for Emotion compat.
    // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
    typeof window === 'undefined') {
        return null;
    }
    let warningHint;
    const elementType = element.type;
    /**
   * Blacklisting instead of whitelisting
   *
   * Blacklisting will miss some components, such as React.Fragment. Those will at least
   * trigger a warning in React.
   * We can't whitelist because there is no safe way to detect React.forwardRef
   * or class components. "Safe" means there's no public API.
   *
   */ if (typeof elementType === 'function' && !isClassComponent(elementType)) {
        warningHint = 'Did you accidentally use a plain function component for an element instead?';
    }
    if (warningHint !== undefined) {
        return new Error(`Invalid ${location} \`${safePropName}\` supplied to \`${componentName}\`. ` + `Expected an element that can hold a ref. ${warningHint} ` + 'For more information see https://mui.com/r/caveat-with-refs-guide');
    }
    return null;
}
const elementAcceptingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$chainPropTypes$2f$chainPropTypes$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].element, acceptingRef);
elementAcceptingRef.isRequired = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$chainPropTypes$2f$chainPropTypes$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].element.isRequired, acceptingRef);
const __TURBOPACK__default__export__ = elementAcceptingRef;
}),
"[project]/project-root/frontend/node_modules/@mui/utils/esm/useForkRef/useForkRef.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useForkRef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/react/index.js [client] (ecmascript)");
'use client';
;
function useForkRef(...refs) {
    const cleanupRef = __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"](undefined);
    const refEffect = __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useForkRef.useCallback[refEffect]": (instance)=>{
            const cleanups = refs.map({
                "useForkRef.useCallback[refEffect].cleanups": (ref)=>{
                    if (ref == null) {
                        return null;
                    }
                    if (typeof ref === 'function') {
                        const refCallback = ref;
                        const refCleanup = refCallback(instance);
                        return typeof refCleanup === 'function' ? refCleanup : ({
                            "useForkRef.useCallback[refEffect].cleanups": ()=>{
                                refCallback(null);
                            }
                        })["useForkRef.useCallback[refEffect].cleanups"];
                    }
                    ref.current = instance;
                    return ({
                        "useForkRef.useCallback[refEffect].cleanups": ()=>{
                            ref.current = null;
                        }
                    })["useForkRef.useCallback[refEffect].cleanups"];
                }
            }["useForkRef.useCallback[refEffect].cleanups"]);
            return ({
                "useForkRef.useCallback[refEffect]": ()=>{
                    cleanups.forEach({
                        "useForkRef.useCallback[refEffect]": (refCleanup)=>refCleanup?.()
                    }["useForkRef.useCallback[refEffect]"]);
                }
            })["useForkRef.useCallback[refEffect]"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["useForkRef.useCallback[refEffect]"], refs);
    return __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useForkRef.useMemo": ()=>{
            if (refs.every({
                "useForkRef.useMemo": (ref)=>ref == null
            }["useForkRef.useMemo"])) {
                return null;
            }
            return ({
                "useForkRef.useMemo": (value)=>{
                    if (cleanupRef.current) {
                        cleanupRef.current();
                        cleanupRef.current = undefined;
                    }
                    if (value != null) {
                        cleanupRef.current = refEffect(value);
                    }
                }
            })["useForkRef.useMemo"];
        // TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler -- intentionally ignoring that the dependency array must be an array literal
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["useForkRef.useMemo"], refs);
}
}),
"[project]/project-root/frontend/node_modules/@mui/utils/esm/ownerDocument/ownerDocument.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ownerDocument
]);
function ownerDocument(node) {
    return node && node.ownerDocument || document;
}
}),
"[project]/project-root/frontend/node_modules/@mui/utils/esm/getReactElementRef/getReactElementRef.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>getReactElementRef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/react/index.js [client] (ecmascript)");
;
function getReactElementRef(element) {
    // 'ref' is passed as prop in React 19, whereas 'ref' is directly attached to children in older versions
    if (parseInt(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["version"], 10) >= 19) {
        return element?.props?.ref || null;
    }
    // @ts-expect-error element.ref is not included in the ReactElement type
    // https://github.com/DefinitelyTyped/DefinitelyTyped/discussions/70189
    return element?.ref || null;
}
}),
"[project]/project-root/frontend/node_modules/@mui/utils/esm/exactProp/exactProp.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This module is based on https://github.com/airbnb/prop-types-exact repository.
// However, in order to reduce the number of dependencies and to remove some extra safe checks
// the module was forked.
__turbopack_context__.s([
    "default",
    ()=>exactProp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/project-root/frontend/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
const specialProperty = 'exact-prop: \u200b';
function exactProp(propTypes) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return {
        ...propTypes,
        [specialProperty]: (props)=>{
            const unsupportedProps = Object.keys(props).filter((prop)=>!propTypes.hasOwnProperty(prop));
            if (unsupportedProps.length > 0) {
                return new Error(`The following props are not supported: ${unsupportedProps.map((prop)=>`\`${prop}\``).join(', ')}. Please remove them.`);
            }
            return null;
        }
    };
}
}),
"[project]/project-root/frontend/node_modules/@mui/utils/esm/useEnhancedEffect/useEnhancedEffect.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/react/index.js [client] (ecmascript)");
'use client';
;
/**
 * A version of `React.useLayoutEffect` that does not show a warning when server-side rendering.
 * This is useful for effects that are only needed for client-side rendering but not for SSR.
 *
 * Before you use this hook, make sure to read https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
 * and confirm it doesn't apply to your use-case.
 */ const useEnhancedEffect = typeof window !== 'undefined' ? __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useLayoutEffect"] : __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"];
const __TURBOPACK__default__export__ = useEnhancedEffect;
}),
"[project]/project-root/frontend/node_modules/@mui/utils/esm/setRef/setRef.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * TODO v5: consider making it private
 *
 * passes {value} to {ref}
 *
 * WARNING: Be sure to only call this inside a callback that is passed as a ref.
 * Otherwise, make sure to cleanup the previous {ref} if it changes. See
 * https://github.com/mui/material-ui/issues/13539
 *
 * Useful if you want to expose the ref of an inner component to the public API
 * while still using it inside the component.
 * @param ref A ref callback or ref object. If anything falsy, this is a no-op.
 */ __turbopack_context__.s([
    "default",
    ()=>setRef
]);
function setRef(ref, value) {
    if (typeof ref === 'function') {
        ref(value);
    } else if (ref) {
        ref.current = value;
    }
}
}),
"[project]/project-root/frontend/node_modules/@mui/utils/esm/isHostComponent/isHostComponent.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Determines if a given element is a DOM element name (i.e. not a React component).
 */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function isHostComponent(element) {
    return typeof element === 'string';
}
const __TURBOPACK__default__export__ = isHostComponent;
}),
"[project]/project-root/frontend/node_modules/@mui/utils/esm/appendOwnerState/appendOwnerState.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$isHostComponent$2f$isHostComponent$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/utils/esm/isHostComponent/isHostComponent.js [client] (ecmascript)");
;
/**
 * Type of the ownerState based on the type of an element it applies to.
 * This resolves to the provided OwnerState for React components and `undefined` for host components.
 * Falls back to `OwnerState | undefined` when the exact type can't be determined in development time.
 */ /**
 * Appends the ownerState object to the props, merging with the existing one if necessary.
 *
 * @param elementType Type of the element that owns the `existingProps`. If the element is a DOM node or undefined, `ownerState` is not applied.
 * @param otherProps Props of the element.
 * @param ownerState
 */ function appendOwnerState(elementType, otherProps, ownerState) {
    if (elementType === undefined || (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$isHostComponent$2f$isHostComponent$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(elementType)) {
        return otherProps;
    }
    return {
        ...otherProps,
        ownerState: {
            ...otherProps.ownerState,
            ...ownerState
        }
    };
}
const __TURBOPACK__default__export__ = appendOwnerState;
}),
"[project]/project-root/frontend/node_modules/@mui/utils/esm/resolveComponentProps/resolveComponentProps.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * If `componentProps` is a function, calls it with the provided `ownerState`.
 * Otherwise, just returns `componentProps`.
 */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function resolveComponentProps(componentProps, ownerState, slotState) {
    if (typeof componentProps === 'function') {
        return componentProps(ownerState, slotState);
    }
    return componentProps;
}
const __TURBOPACK__default__export__ = resolveComponentProps;
}),
"[project]/project-root/frontend/node_modules/@mui/utils/esm/extractEventHandlers/extractEventHandlers.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Extracts event handlers from a given object.
 * A prop is considered an event handler if it is a function and its name starts with `on`.
 *
 * @param object An object to extract event handlers from.
 * @param excludeKeys An array of keys to exclude from the returned object.
 */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function extractEventHandlers(object, excludeKeys = []) {
    if (object === undefined) {
        return {};
    }
    const result = {};
    Object.keys(object).filter((prop)=>prop.match(/^on[A-Z]/) && typeof object[prop] === 'function' && !excludeKeys.includes(prop)).forEach((prop)=>{
        result[prop] = object[prop];
    });
    return result;
}
const __TURBOPACK__default__export__ = extractEventHandlers;
}),
"[project]/project-root/frontend/node_modules/@mui/utils/esm/omitEventHandlers/omitEventHandlers.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Removes event handlers from the given object.
 * A field is considered an event handler if it is a function with a name beginning with `on`.
 *
 * @param object Object to remove event handlers from.
 * @returns Object with event handlers removed.
 */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function omitEventHandlers(object) {
    if (object === undefined) {
        return {};
    }
    const result = {};
    Object.keys(object).filter((prop)=>!(prop.match(/^on[A-Z]/) && typeof object[prop] === 'function')).forEach((prop)=>{
        result[prop] = object[prop];
    });
    return result;
}
const __TURBOPACK__default__export__ = omitEventHandlers;
}),
"[project]/project-root/frontend/node_modules/@mui/utils/esm/mergeSlotProps/mergeSlotProps.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/clsx/dist/clsx.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$extractEventHandlers$2f$extractEventHandlers$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/utils/esm/extractEventHandlers/extractEventHandlers.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$omitEventHandlers$2f$omitEventHandlers$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/utils/esm/omitEventHandlers/omitEventHandlers.js [client] (ecmascript)");
;
;
;
/**
 * Merges the slot component internal props (usually coming from a hook)
 * with the externally provided ones.
 *
 * The merge order is (the latter overrides the former):
 * 1. The internal props (specified as a getter function to work with get*Props hook result)
 * 2. Additional props (specified internally on a Base UI component)
 * 3. External props specified on the owner component. These should only be used on a root slot.
 * 4. External props specified in the `slotProps.*` prop.
 * 5. The `className` prop - combined from all the above.
 * @param parameters
 * @returns
 */ function mergeSlotProps(parameters) {
    const { getSlotProps, additionalProps, externalSlotProps, externalForwardedProps, className } = parameters;
    if (!getSlotProps) {
        // The simpler case - getSlotProps is not defined, so no internal event handlers are defined,
        // so we can simply merge all the props without having to worry about extracting event handlers.
        const joinedClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"])(additionalProps?.className, className, externalForwardedProps?.className, externalSlotProps?.className);
        const mergedStyle = {
            ...additionalProps?.style,
            ...externalForwardedProps?.style,
            ...externalSlotProps?.style
        };
        const props = {
            ...additionalProps,
            ...externalForwardedProps,
            ...externalSlotProps
        };
        if (joinedClasses.length > 0) {
            props.className = joinedClasses;
        }
        if (Object.keys(mergedStyle).length > 0) {
            props.style = mergedStyle;
        }
        return {
            props,
            internalRef: undefined
        };
    }
    // In this case, getSlotProps is responsible for calling the external event handlers.
    // We don't need to include them in the merged props because of this.
    const eventHandlers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$extractEventHandlers$2f$extractEventHandlers$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({
        ...externalForwardedProps,
        ...externalSlotProps
    });
    const componentsPropsWithoutEventHandlers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$omitEventHandlers$2f$omitEventHandlers$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(externalSlotProps);
    const otherPropsWithoutEventHandlers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$omitEventHandlers$2f$omitEventHandlers$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(externalForwardedProps);
    const internalSlotProps = getSlotProps(eventHandlers);
    // The order of classes is important here.
    // Emotion (that we use in libraries consuming Base UI) depends on this order
    // to properly override style. It requires the most important classes to be last
    // (see https://github.com/mui/material-ui/pull/33205) for the related discussion.
    const joinedClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"])(internalSlotProps?.className, additionalProps?.className, className, externalForwardedProps?.className, externalSlotProps?.className);
    const mergedStyle = {
        ...internalSlotProps?.style,
        ...additionalProps?.style,
        ...externalForwardedProps?.style,
        ...externalSlotProps?.style
    };
    const props = {
        ...internalSlotProps,
        ...additionalProps,
        ...otherPropsWithoutEventHandlers,
        ...componentsPropsWithoutEventHandlers
    };
    if (joinedClasses.length > 0) {
        props.className = joinedClasses;
    }
    if (Object.keys(mergedStyle).length > 0) {
        props.style = mergedStyle;
    }
    return {
        props,
        internalRef: internalSlotProps.ref
    };
}
const __TURBOPACK__default__export__ = mergeSlotProps;
}),
"[project]/project-root/frontend/node_modules/@mui/utils/esm/useEventCallback/useEventCallback.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useEnhancedEffect$2f$useEnhancedEffect$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/utils/esm/useEnhancedEffect/useEnhancedEffect.js [client] (ecmascript)");
'use client';
;
;
/**
 * Inspired by https://github.com/facebook/react/issues/14099#issuecomment-440013892
 * See RFC in https://github.com/reactjs/rfcs/pull/220
 */ function useEventCallback(fn) {
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"](fn);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useEnhancedEffect$2f$useEnhancedEffect$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({
        "useEventCallback.useEnhancedEffect": ()=>{
            ref.current = fn;
        }
    }["useEventCallback.useEnhancedEffect"]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"]({
        "useEventCallback.useRef": (...args)=>// @ts-expect-error hide `this`
            (0, ref.current)(...args)
    }["useEventCallback.useRef"]).current;
}
const __TURBOPACK__default__export__ = useEventCallback;
}),
"[project]/project-root/frontend/node_modules/@mui/utils/esm/createChainedFunction/createChainedFunction.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Safe chained function.
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 */ __turbopack_context__.s([
    "default",
    ()=>createChainedFunction
]);
function createChainedFunction(...funcs) {
    return funcs.reduce((acc, func)=>{
        if (func == null) {
            return acc;
        }
        return function chainedFunction(...args) {
            acc.apply(this, args);
            func.apply(this, args);
        };
    }, ()=>{});
}
}),
"[project]/project-root/frontend/node_modules/@mui/utils/esm/ownerWindow/ownerWindow.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ownerWindow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$ownerDocument$2f$ownerDocument$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/utils/esm/ownerDocument/ownerDocument.js [client] (ecmascript)");
;
function ownerWindow(node) {
    const doc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$ownerDocument$2f$ownerDocument$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(node);
    return doc.defaultView || window;
}
}),
"[project]/project-root/frontend/node_modules/@mui/utils/esm/getScrollbarSize/getScrollbarSize.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// A change of the browser zoom change the scrollbar size.
// Credit https://github.com/twbs/bootstrap/blob/488fd8afc535ca3a6ad4dc581f5e89217b6a36ac/js/src/util/scrollbar.js#L14-L18
__turbopack_context__.s([
    "default",
    ()=>getScrollbarSize
]);
function getScrollbarSize(win = window) {
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
    const documentWidth = win.document.documentElement.clientWidth;
    return win.innerWidth - documentWidth;
}
}),
"[project]/project-root/frontend/node_modules/@mui/utils/esm/debounce/debounce.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Corresponds to 10 frames at 60 Hz.
// A few bytes payload overhead when lodash/debounce is ~3 kB and debounce ~300 B.
__turbopack_context__.s([
    "default",
    ()=>debounce
]);
function debounce(func, wait = 166) {
    let timeout;
    function debounced(...args) {
        const later = ()=>{
            // @ts-ignore
            func.apply(this, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    }
    debounced.clear = ()=>{
        clearTimeout(timeout);
    };
    return debounced;
}
}),
"[project]/project-root/frontend/node_modules/@mui/utils/esm/elementTypeAcceptingRef/elementTypeAcceptingRef.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/prop-types/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$chainPropTypes$2f$chainPropTypes$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/utils/esm/chainPropTypes/chainPropTypes.js [client] (ecmascript)");
;
;
function isClassComponent(elementType) {
    // elementType.prototype?.isReactComponent
    const { prototype = {} } = elementType;
    return Boolean(prototype.isReactComponent);
}
function elementTypeAcceptingRef(props, propName, componentName, location, propFullName) {
    const propValue = props[propName];
    const safePropName = propFullName || propName;
    if (propValue == null || // When server-side rendering React doesn't warn either.
    // This is not an accurate check for SSR.
    // This is only in place for emotion compat.
    // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
    typeof window === 'undefined') {
        return null;
    }
    let warningHint;
    /**
   * Blacklisting instead of whitelisting
   *
   * Blacklisting will miss some components, such as React.Fragment. Those will at least
   * trigger a warning in React.
   * We can't whitelist because there is no safe way to detect React.forwardRef
   * or class components. "Safe" means there's no public API.
   *
   */ if (typeof propValue === 'function' && !isClassComponent(propValue)) {
        warningHint = 'Did you accidentally provide a plain function component instead?';
    }
    if (warningHint !== undefined) {
        return new Error(`Invalid ${location} \`${safePropName}\` supplied to \`${componentName}\`. ` + `Expected an element type that can hold a ref. ${warningHint} ` + 'For more information see https://mui.com/r/caveat-with-refs-guide');
    }
    return null;
}
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$chainPropTypes$2f$chainPropTypes$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].elementType, elementTypeAcceptingRef);
}),
"[project]/project-root/frontend/node_modules/@mui/utils/esm/useId/useId.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/react/index.js [client] (ecmascript)");
'use client';
;
let globalId = 0;
// TODO React 17: Remove `useGlobalId` once React 17 support is removed
function useGlobalId(idOverride) {
    const [defaultId, setDefaultId] = __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__.useState(idOverride);
    const id = idOverride || defaultId;
    __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__.useEffect({
        "useGlobalId.useEffect": ()=>{
            if (defaultId == null) {
                // Fallback to this default id when possible.
                // Use the incrementing value for client-side rendering only.
                // We can't use it server-side.
                // If you want to use random values please consider the Birthday Problem: https://en.wikipedia.org/wiki/Birthday_problem
                globalId += 1;
                setDefaultId(`mui-${globalId}`);
            }
        }
    }["useGlobalId.useEffect"], [
        defaultId
    ]);
    return id;
}
// See https://github.com/mui/material-ui/issues/41190#issuecomment-2040873379 for why
const safeReact = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__
};
const maybeReactUseId = safeReact.useId;
function useId(idOverride) {
    // React.useId() is only available from React 17.0.0.
    if (maybeReactUseId !== undefined) {
        const reactId = maybeReactUseId();
        return idOverride ?? reactId;
    }
    // TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler
    // eslint-disable-next-line react-hooks/rules-of-hooks -- `React.useId` is invariant at runtime.
    return useGlobalId(idOverride);
}
}),
"[project]/project-root/frontend/node_modules/@mui/utils/esm/refType/refType.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/prop-types/index.js [client] (ecmascript)");
;
const refType = __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
    __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].func,
    __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object
]);
const __TURBOPACK__default__export__ = refType;
}),
"[project]/project-root/frontend/node_modules/@mui/utils/esm/isFocusVisible/isFocusVisible.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Returns a boolean indicating if the event's target has :focus-visible
 */ __turbopack_context__.s([
    "default",
    ()=>isFocusVisible
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/project-root/frontend/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
function isFocusVisible(element) {
    try {
        return element.matches(':focus-visible');
    } catch (error) {
        // Do not warn on jsdom tests, otherwise all tests that rely on focus have to be skipped
        // Tests that rely on `:focus-visible` will still have to be skipped in jsdom
        if (("TURBOPACK compile-time value", "development") !== 'production' && !window.navigator.userAgent.includes('jsdom')) {
            console.warn([
                'MUI: The `:focus-visible` pseudo class is not supported in this browser.',
                'Some components rely on this feature to work properly.'
            ].join('\n'));
        }
    }
    return false;
}
}),
"[project]/project-root/frontend/node_modules/@mui/utils/esm/useLazyRef/useLazyRef.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useLazyRef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/react/index.js [client] (ecmascript)");
'use client';
;
const UNINITIALIZED = {};
function useLazyRef(init, initArg) {
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"](UNINITIALIZED);
    if (ref.current === UNINITIALIZED) {
        ref.current = init(initArg);
    }
    return ref;
}
}),
"[project]/project-root/frontend/node_modules/@mui/utils/esm/useOnMount/useOnMount.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useOnMount
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/react/index.js [client] (ecmascript)");
'use client';
;
const EMPTY = [];
function useOnMount(fn) {
    // TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler -- no need to put `fn` in the dependency array
    /* eslint-disable react-hooks/exhaustive-deps */ __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"](fn, EMPTY);
/* eslint-enable react-hooks/exhaustive-deps */ }
}),
"[project]/project-root/frontend/node_modules/@mui/utils/esm/useTimeout/useTimeout.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Timeout",
    ()=>Timeout,
    "default",
    ()=>useTimeout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useLazyRef$2f$useLazyRef$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/utils/esm/useLazyRef/useLazyRef.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useOnMount$2f$useOnMount$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/utils/esm/useOnMount/useOnMount.js [client] (ecmascript)");
'use client';
;
;
class Timeout {
    static create() {
        return new Timeout();
    }
    currentId = null;
    /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */ start(delay, fn) {
        this.clear();
        this.currentId = setTimeout(()=>{
            this.currentId = null;
            fn();
        }, delay);
    }
    clear = ()=>{
        if (this.currentId !== null) {
            clearTimeout(this.currentId);
            this.currentId = null;
        }
    };
    disposeEffect = ()=>{
        return this.clear;
    };
}
function useTimeout() {
    const timeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useLazyRef$2f$useLazyRef$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(Timeout.create).current;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useOnMount$2f$useOnMount$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(timeout.disposeEffect);
    return timeout;
}
}),
"[project]/project-root/frontend/node_modules/@mui/utils/esm/usePreviousProps/usePreviousProps.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/react/index.js [client] (ecmascript)");
'use client';
;
function usePreviousProps(value) {
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"]({});
    __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "usePreviousProps.useEffect": ()=>{
            ref.current = value;
        }
    }["usePreviousProps.useEffect"]);
    return ref.current;
}
const __TURBOPACK__default__export__ = usePreviousProps;
}),
"[project]/project-root/frontend/node_modules/@mui/utils/esm/useSlotProps/useSlotProps.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useForkRef$2f$useForkRef$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/utils/esm/useForkRef/useForkRef.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$appendOwnerState$2f$appendOwnerState$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/utils/esm/appendOwnerState/appendOwnerState.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$mergeSlotProps$2f$mergeSlotProps$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/utils/esm/mergeSlotProps/mergeSlotProps.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$resolveComponentProps$2f$resolveComponentProps$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/utils/esm/resolveComponentProps/resolveComponentProps.js [client] (ecmascript)");
'use client';
;
;
;
;
/**
 * @ignore - do not document.
 * Builds the props to be passed into the slot of an unstyled component.
 * It merges the internal props of the component with the ones supplied by the user, allowing to customize the behavior.
 * If the slot component is not a host component, it also merges in the `ownerState`.
 *
 * @param parameters.getSlotProps - A function that returns the props to be passed to the slot component.
 */ function useSlotProps(parameters) {
    const { elementType, externalSlotProps, ownerState, skipResolvingSlotProps = false, ...other } = parameters;
    const resolvedComponentsProps = skipResolvingSlotProps ? {} : (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$resolveComponentProps$2f$resolveComponentProps$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(externalSlotProps, ownerState);
    const { props: mergedProps, internalRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$mergeSlotProps$2f$mergeSlotProps$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({
        ...other,
        externalSlotProps: resolvedComponentsProps
    });
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useForkRef$2f$useForkRef$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(internalRef, resolvedComponentsProps?.ref, parameters.additionalProps?.ref);
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$appendOwnerState$2f$appendOwnerState$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(elementType, {
        ...mergedProps,
        ref
    }, ownerState);
    return props;
}
const __TURBOPACK__default__export__ = useSlotProps;
}),
"[project]/project-root/frontend/node_modules/@mui/utils/esm/useControlled/useControlled.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useControlled
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/project-root/frontend/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
// TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler -- process.env never changes, dependency arrays are intentionally ignored
/* eslint-disable react-hooks/rules-of-hooks, react-hooks/exhaustive-deps */ var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/react/index.js [client] (ecmascript)");
'use client';
;
function useControlled(props) {
    const { controlled, default: defaultProp, name, state = 'value' } = props;
    // isControlled is ignored in the hook dependency lists as it should never change.
    const { current: isControlled } = __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"](controlled !== undefined);
    const [valueState, setValue] = __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](defaultProp);
    const value = isControlled ? controlled : valueState;
    if ("TURBOPACK compile-time truthy", 1) {
        __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"]({
            "useControlled.useEffect": ()=>{
                if (isControlled !== (controlled !== undefined)) {
                    console.error([
                        `MUI: A component is changing the ${isControlled ? '' : 'un'}controlled ${state} state of ${name} to be ${isControlled ? 'un' : ''}controlled.`,
                        'Elements should not switch from uncontrolled to controlled (or vice versa).',
                        `Decide between using a controlled or uncontrolled ${name} ` + 'element for the lifetime of the component.',
                        "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.",
                        'More info: https://fb.me/react-controlled-components'
                    ].join('\n'));
                }
            }
        }["useControlled.useEffect"], [
            state,
            name,
            controlled
        ]);
        const { current: defaultValue } = __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"](defaultProp);
        __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"]({
            "useControlled.useEffect": ()=>{
                if (!isControlled && JSON.stringify(defaultProp) !== JSON.stringify(defaultValue)) {
                    console.error([
                        `MUI: A component is changing the default ${state} state of an uncontrolled ${name} after being initialized. ` + `To suppress this warning opt to use a controlled ${name}.`
                    ].join('\n'));
                }
            }
        }["useControlled.useEffect"], [
            JSON.stringify(defaultProp)
        ]);
    }
    const setValueIfUncontrolled = __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useControlled.useCallback[setValueIfUncontrolled]": (newValue)=>{
            if (!isControlled) {
                setValue(newValue);
            }
        }
    }["useControlled.useCallback[setValueIfUncontrolled]"], []);
    // TODO: provide overloads for the useControlled function to account for the case where either
    // controlled or default is not undefined.
    // In that case the return type should be [T, React.Dispatch<React.SetStateAction<T>>]
    // otherwise it should be [T | undefined, React.Dispatch<React.SetStateAction<T | undefined>>]
    return [
        value,
        setValueIfUncontrolled
    ];
}
}),
"[project]/project-root/frontend/node_modules/@mui/utils/esm/visuallyHidden/visuallyHidden.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const visuallyHidden = {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: '1px'
};
const __TURBOPACK__default__export__ = visuallyHidden;
}),
"[project]/project-root/frontend/node_modules/@mui/utils/esm/unsupportedProp/unsupportedProp.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>unsupportedProp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/project-root/frontend/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
function unsupportedProp(props, propName, componentName, location, propFullName) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const propFullNameSafe = propFullName || propName;
    if (typeof props[propName] !== 'undefined') {
        return new Error(`The prop \`${propFullNameSafe}\` is not supported. Please remove it.`);
    }
    return null;
}
}),
"[project]/project-root/frontend/node_modules/@mui/x-data-grid/node_modules/@mui/utils/esm/chainPropTypes/chainPropTypes.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>chainPropTypes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/project-root/frontend/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
function chainPropTypes(propType1, propType2) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return function validate(...args) {
        return propType1(...args) || propType2(...args);
    };
}
}),
"[project]/project-root/frontend/node_modules/@mui/x-data-grid/node_modules/@mui/utils/esm/chainPropTypes/chainPropTypes.js [client] (ecmascript) <export default as chainPropTypes>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "chainPropTypes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$chainPropTypes$2f$chainPropTypes$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$chainPropTypes$2f$chainPropTypes$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/x-data-grid/node_modules/@mui/utils/esm/chainPropTypes/chainPropTypes.js [client] (ecmascript)");
}),
"[project]/project-root/frontend/node_modules/@mui/utils/esm/composeClasses/composeClasses.js [client] (ecmascript) <export default as unstable_composeClasses>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "unstable_composeClasses",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$composeClasses$2f$composeClasses$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$composeClasses$2f$composeClasses$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/utils/esm/composeClasses/composeClasses.js [client] (ecmascript)");
}),
"[project]/project-root/frontend/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js [client] (ecmascript) <export default as generateUtilityClasses>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateUtilityClasses",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js [client] (ecmascript)");
}),
"[project]/project-root/frontend/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js [client] (ecmascript) <export default as generateUtilityClass>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateUtilityClass",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js [client] (ecmascript)");
}),
"[project]/project-root/frontend/node_modules/@mui/x-data-grid/node_modules/@mui/utils/esm/HTMLElementType/HTMLElementType.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HTMLElementType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/project-root/frontend/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
function HTMLElementType(props, propName, componentName, location, propFullName) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const propValue = props[propName];
    const safePropName = propFullName || propName;
    if (propValue == null) {
        return null;
    }
    if (propValue && propValue.nodeType !== 1) {
        return new Error(`Invalid ${location} \`${safePropName}\` supplied to \`${componentName}\`. ` + `Expected an HTMLElement.`);
    }
    return null;
}
}),
"[project]/project-root/frontend/node_modules/@mui/x-data-grid/node_modules/@mui/utils/esm/HTMLElementType/HTMLElementType.js [client] (ecmascript) <export default as HTMLElementType>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HTMLElementType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$HTMLElementType$2f$HTMLElementType$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$HTMLElementType$2f$HTMLElementType$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/x-data-grid/node_modules/@mui/utils/esm/HTMLElementType/HTMLElementType.js [client] (ecmascript)");
}),
"[project]/project-root/frontend/node_modules/@mui/x-data-grid/node_modules/@mui/utils/esm/useEnhancedEffect/useEnhancedEffect.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/react/index.js [client] (ecmascript)");
'use client';
;
/**
 * A version of `React.useLayoutEffect` that does not show a warning when server-side rendering.
 * This is useful for effects that are only needed for client-side rendering but not for SSR.
 *
 * Before you use this hook, make sure to read https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
 * and confirm it doesn't apply to your use-case.
 */ const useEnhancedEffect = typeof window !== 'undefined' ? __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useLayoutEffect"] : __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"];
const __TURBOPACK__default__export__ = useEnhancedEffect;
}),
"[project]/project-root/frontend/node_modules/@mui/x-data-grid/node_modules/@mui/utils/esm/useEventCallback/useEventCallback.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useEnhancedEffect$2f$useEnhancedEffect$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/x-data-grid/node_modules/@mui/utils/esm/useEnhancedEffect/useEnhancedEffect.js [client] (ecmascript)");
'use client';
;
;
/**
 * Inspired by https://github.com/facebook/react/issues/14099#issuecomment-440013892
 * See RFC in https://github.com/reactjs/rfcs/pull/220
 */ function useEventCallback(fn) {
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"](fn);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useEnhancedEffect$2f$useEnhancedEffect$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({
        "useEventCallback.useEnhancedEffect": ()=>{
            ref.current = fn;
        }
    }["useEventCallback.useEnhancedEffect"]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"]({
        "useEventCallback.useRef": (...args)=>// @ts-expect-error hide `this`
            (0, ref.current)(...args)
    }["useEventCallback.useRef"]).current;
}
const __TURBOPACK__default__export__ = useEventCallback;
}),
"[project]/project-root/frontend/node_modules/@mui/x-data-grid/node_modules/@mui/utils/esm/useEventCallback/useEventCallback.js [client] (ecmascript) <export default as unstable_useEventCallback>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "unstable_useEventCallback",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useEventCallback$2f$useEventCallback$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useEventCallback$2f$useEventCallback$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/x-data-grid/node_modules/@mui/utils/esm/useEventCallback/useEventCallback.js [client] (ecmascript)");
}),
"[project]/project-root/frontend/node_modules/@mui/x-data-grid/node_modules/@mui/utils/esm/useId/useId.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/react/index.js [client] (ecmascript)");
'use client';
;
let globalId = 0;
function useGlobalId(idOverride) {
    const [defaultId, setDefaultId] = __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__.useState(idOverride);
    const id = idOverride || defaultId;
    __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__.useEffect({
        "useGlobalId.useEffect": ()=>{
            if (defaultId == null) {
                // Fallback to this default id when possible.
                // Use the incrementing value for client-side rendering only.
                // We can't use it server-side.
                // If you want to use random values please consider the Birthday Problem: https://en.wikipedia.org/wiki/Birthday_problem
                globalId += 1;
                setDefaultId(`mui-${globalId}`);
            }
        }
    }["useGlobalId.useEffect"], [
        defaultId
    ]);
    return id;
}
// downstream bundlers may remove unnecessary concatenation, but won't remove toString call -- Workaround for https://github.com/webpack/webpack/issues/14814
const maybeReactUseId = __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__['useId'.toString()];
function useId(idOverride) {
    if (maybeReactUseId !== undefined) {
        const reactId = maybeReactUseId();
        return idOverride != null ? idOverride : reactId;
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks -- `React.useId` is invariant at runtime.
    return useGlobalId(idOverride);
}
}),
"[project]/project-root/frontend/node_modules/@mui/x-data-grid/node_modules/@mui/utils/esm/useId/useId.js [client] (ecmascript) <export default as unstable_useId>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "unstable_useId",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useId$2f$useId$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useId$2f$useId$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/x-data-grid/node_modules/@mui/utils/esm/useId/useId.js [client] (ecmascript)");
}),
"[project]/project-root/frontend/node_modules/prop-types/lib/ReactPropTypesSecret.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
module.exports = ReactPropTypesSecret;
}),
"[project]/project-root/frontend/node_modules/prop-types/lib/has.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
}),
"[project]/project-root/frontend/node_modules/prop-types/checkPropTypes.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/project-root/frontend/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
'use strict';
var printWarning = function() {};
if ("TURBOPACK compile-time truthy", 1) {
    var ReactPropTypesSecret = __turbopack_context__.r("[project]/project-root/frontend/node_modules/prop-types/lib/ReactPropTypesSecret.js [client] (ecmascript)");
    var loggedTypeFailures = {};
    var has = __turbopack_context__.r("[project]/project-root/frontend/node_modules/prop-types/lib/has.js [client] (ecmascript)");
    printWarning = function(text) {
        var message = 'Warning: ' + text;
        if (typeof console !== 'undefined') {
            console.error(message);
        }
        try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            throw new Error(message);
        } catch (x) {}
    };
}
/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */ function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
    if ("TURBOPACK compile-time truthy", 1) {
        for(var typeSpecName in typeSpecs){
            if (has(typeSpecs, typeSpecName)) {
                var error;
                // Prop type validation may throw. In case they do, we don't want to
                // fail the render phase where it didn't fail before. So we log it.
                // After these have been cleaned up, we'll let them throw.
                try {
                    // This is intentionally an invariant that gets caught. It's the same
                    // behavior as without this statement except with a better message.
                    if (typeof typeSpecs[typeSpecName] !== 'function') {
                        var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
                        err.name = 'Invariant Violation';
                        throw err;
                    }
                    error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
                } catch (ex) {
                    error = ex;
                }
                if (error && !(error instanceof Error)) {
                    printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + typeof error + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
                }
                if (error instanceof Error && !(error.message in loggedTypeFailures)) {
                    // Only monitor this failure once because there tends to be a lot of the
                    // same error.
                    loggedTypeFailures[error.message] = true;
                    var stack = getStack ? getStack() : '';
                    printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
                }
            }
        }
    }
}
/**
 * Resets warning cache when testing.
 *
 * @private
 */ checkPropTypes.resetWarningCache = function() {
    if (("TURBOPACK compile-time value", "development") !== 'production') {
        loggedTypeFailures = {};
    }
};
module.exports = checkPropTypes;
}),
"[project]/project-root/frontend/node_modules/prop-types/factoryWithTypeCheckers.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/project-root/frontend/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
'use strict';
var ReactIs = __turbopack_context__.r("[project]/project-root/frontend/node_modules/prop-types/node_modules/react-is/index.js [client] (ecmascript)");
var assign = __turbopack_context__.r("[project]/project-root/frontend/node_modules/next/dist/build/polyfills/object-assign.js [client] (ecmascript)");
var ReactPropTypesSecret = __turbopack_context__.r("[project]/project-root/frontend/node_modules/prop-types/lib/ReactPropTypesSecret.js [client] (ecmascript)");
var has = __turbopack_context__.r("[project]/project-root/frontend/node_modules/prop-types/lib/has.js [client] (ecmascript)");
var checkPropTypes = __turbopack_context__.r("[project]/project-root/frontend/node_modules/prop-types/checkPropTypes.js [client] (ecmascript)");
var printWarning = function() {};
if ("TURBOPACK compile-time truthy", 1) {
    printWarning = function(text) {
        var message = 'Warning: ' + text;
        if (typeof console !== 'undefined') {
            console.error(message);
        }
        try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            throw new Error(message);
        } catch (x) {}
    };
}
function emptyFunctionThatReturnsNull() {
    return null;
}
module.exports = function(isValidElement, throwOnDirectAccess) {
    /* global Symbol */ var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.
    /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */ function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === 'function') {
            return iteratorFn;
        }
    }
    /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */ var ANONYMOUS = '<<anonymous>>';
    // Important!
    // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
    var ReactPropTypes = {
        array: createPrimitiveTypeChecker('array'),
        bigint: createPrimitiveTypeChecker('bigint'),
        bool: createPrimitiveTypeChecker('boolean'),
        func: createPrimitiveTypeChecker('function'),
        number: createPrimitiveTypeChecker('number'),
        object: createPrimitiveTypeChecker('object'),
        string: createPrimitiveTypeChecker('string'),
        symbol: createPrimitiveTypeChecker('symbol'),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
    };
    /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */ /*eslint-disable no-self-compare*/ function is(x, y) {
        // SameValue algorithm
        if (x === y) {
            // Steps 1-5, 7-10
            // Steps 6.b-6.e: +0 != -0
            return x !== 0 || 1 / x === 1 / y;
        } else {
            // Step 6.a: NaN == NaN
            return x !== x && y !== y;
        }
    }
    /*eslint-enable no-self-compare*/ /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */ function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === 'object' ? data : {};
        this.stack = '';
    }
    // Make `instanceof Error` still work for returned errors.
    PropTypeError.prototype = Error.prototype;
    function createChainableTypeChecker(validate) {
        if (("TURBOPACK compile-time value", "development") !== 'production') {
            var manualPropTypeCallCache = {};
            var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
            componentName = componentName || ANONYMOUS;
            propFullName = propFullName || propName;
            if (secret !== ReactPropTypesSecret) {
                if (throwOnDirectAccess) {
                    // New behavior only for users of `prop-types` package
                    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
                    err.name = 'Invariant Violation';
                    throw err;
                } else if (("TURBOPACK compile-time value", "development") !== 'production' && typeof console !== 'undefined') {
                    // Old behavior for people using React.PropTypes
                    var cacheKey = componentName + ':' + propName;
                    if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
                    manualPropTypeWarningCount < 3) {
                        printWarning('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
                        manualPropTypeCallCache[cacheKey] = true;
                        manualPropTypeWarningCount++;
                    }
                }
            }
            if (props[propName] == null) {
                if (isRequired) {
                    if (props[propName] === null) {
                        return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
                    }
                    return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
                }
                return null;
            } else {
                return validate(props, propName, componentName, location, propFullName);
            }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
    }
    function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== expectedType) {
                // `propValue` being instance of, say, date/regexp, pass the 'object'
                // check, but we can offer a more precise error message here rather than
                // 'of type `object`'.
                var preciseType = getPreciseType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'), {
                    expectedType: expectedType
                });
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
    }
    function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== 'function') {
                return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
            }
            var propValue = props[propName];
            if (!Array.isArray(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
            }
            for(var i = 0; i < propValue.length; i++){
                var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
                if (error instanceof Error) {
                    return error;
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!isValidElement(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!ReactIs.isValidElementType(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
            if (!(props[propName] instanceof expectedClass)) {
                var expectedClassName = expectedClass.name || ANONYMOUS;
                var actualClassName = getClassName(props[propName]);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (arguments.length > 1) {
                    printWarning('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
                } else {
                    printWarning('Invalid argument supplied to oneOf, expected an array.');
                }
            }
            return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            for(var i = 0; i < expectedValues.length; i++){
                if (is(propValue, expectedValues[i])) {
                    return null;
                }
            }
            var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
                var type = getPreciseType(value);
                if (type === 'symbol') {
                    return String(value);
                }
                return value;
            });
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
        }
        return createChainableTypeChecker(validate);
    }
    function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== 'function') {
                return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
            }
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
            }
            for(var key in propValue){
                if (has(propValue, key)) {
                    var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                    if (error instanceof Error) {
                        return error;
                    }
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
            ("TURBOPACK compile-time truthy", 1) ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : "TURBOPACK unreachable";
            return emptyFunctionThatReturnsNull;
        }
        for(var i = 0; i < arrayOfTypeCheckers.length; i++){
            var checker = arrayOfTypeCheckers[i];
            if (typeof checker !== 'function') {
                printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
                return emptyFunctionThatReturnsNull;
            }
        }
        function validate(props, propName, componentName, location, propFullName) {
            var expectedTypes = [];
            for(var i = 0; i < arrayOfTypeCheckers.length; i++){
                var checker = arrayOfTypeCheckers[i];
                var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
                if (checkerResult == null) {
                    return null;
                }
                if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
                    expectedTypes.push(checkerResult.data.expectedType);
                }
            }
            var expectedTypesMessage = expectedTypes.length > 0 ? ', expected one of type [' + expectedTypes.join(', ') + ']' : '';
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
        }
        return createChainableTypeChecker(validate);
    }
    function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            if (!isNode(props[propName])) {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError((componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + type + '`.');
    }
    function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
            }
            for(var key in shapeTypes){
                var checker = shapeTypes[key];
                if (typeof checker !== 'function') {
                    return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
                }
                var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                if (error) {
                    return error;
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
            }
            // We need to check all keys in case some are required but missing from props.
            var allKeys = assign({}, props[propName], shapeTypes);
            for(var key in allKeys){
                var checker = shapeTypes[key];
                if (has(shapeTypes, key) && typeof checker !== 'function') {
                    return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
                }
                if (!checker) {
                    return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
                }
                var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                if (error) {
                    return error;
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function isNode(propValue) {
        switch(typeof propValue){
            case 'number':
            case 'string':
            case 'undefined':
                return true;
            case 'boolean':
                return !propValue;
            case 'object':
                if (Array.isArray(propValue)) {
                    return propValue.every(isNode);
                }
                if (propValue === null || isValidElement(propValue)) {
                    return true;
                }
                var iteratorFn = getIteratorFn(propValue);
                if (iteratorFn) {
                    var iterator = iteratorFn.call(propValue);
                    var step;
                    if (iteratorFn !== propValue.entries) {
                        while(!(step = iterator.next()).done){
                            if (!isNode(step.value)) {
                                return false;
                            }
                        }
                    } else {
                        // Iterator will provide entry [k,v] tuples rather than values.
                        while(!(step = iterator.next()).done){
                            var entry = step.value;
                            if (entry) {
                                if (!isNode(entry[1])) {
                                    return false;
                                }
                            }
                        }
                    }
                } else {
                    return false;
                }
                return true;
            default:
                return false;
        }
    }
    function isSymbol(propType, propValue) {
        // Native Symbol.
        if (propType === 'symbol') {
            return true;
        }
        // falsy value can't be a Symbol
        if (!propValue) {
            return false;
        }
        // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
        if (propValue['@@toStringTag'] === 'Symbol') {
            return true;
        }
        // Fallback for non-spec compliant Symbols which are polyfilled.
        if (typeof Symbol === 'function' && propValue instanceof Symbol) {
            return true;
        }
        return false;
    }
    // Equivalent of `typeof` but with special handling for array and regexp.
    function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
            return 'array';
        }
        if (propValue instanceof RegExp) {
            // Old webkits (at least until Android 4.0) return 'function' rather than
            // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
            // passes PropTypes.object.
            return 'object';
        }
        if (isSymbol(propType, propValue)) {
            return 'symbol';
        }
        return propType;
    }
    // This handles more types than `getPropType`. Only used for error messages.
    // See `createPrimitiveTypeChecker`.
    function getPreciseType(propValue) {
        if (typeof propValue === 'undefined' || propValue === null) {
            return '' + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === 'object') {
            if (propValue instanceof Date) {
                return 'date';
            } else if (propValue instanceof RegExp) {
                return 'regexp';
            }
        }
        return propType;
    }
    // Returns a string that is postfixed to a warning about an invalid type.
    // For example, "undefined" or "of type array"
    function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch(type){
            case 'array':
            case 'object':
                return 'an ' + type;
            case 'boolean':
            case 'date':
            case 'regexp':
                return 'a ' + type;
            default:
                return type;
        }
    }
    // Returns class name of the object, if any.
    function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
            return ANONYMOUS;
        }
        return propValue.constructor.name;
    }
    ReactPropTypes.checkPropTypes = checkPropTypes;
    ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
};
}),
"[project]/project-root/frontend/node_modules/prop-types/index.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/project-root/frontend/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
if ("TURBOPACK compile-time truthy", 1) {
    var ReactIs = __turbopack_context__.r("[project]/project-root/frontend/node_modules/prop-types/node_modules/react-is/index.js [client] (ecmascript)");
    // By explicitly using `prop-types` you are opting into new development behavior.
    // http://fb.me/prop-types-in-prod
    var throwOnDirectAccess = true;
    module.exports = __turbopack_context__.r("[project]/project-root/frontend/node_modules/prop-types/factoryWithTypeCheckers.js [client] (ecmascript)")(ReactIs.isElement, throwOnDirectAccess);
} else //TURBOPACK unreachable
;
}),
"[project]/project-root/frontend/node_modules/react-transition-group/esm/config.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    disabled: false
};
}),
"[project]/project-root/frontend/node_modules/react-transition-group/esm/utils/PropTypes.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "classNamesShape",
    ()=>classNamesShape,
    "timeoutsShape",
    ()=>timeoutsShape
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/project-root/frontend/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/prop-types/index.js [client] (ecmascript)");
;
var timeoutsShape = ("TURBOPACK compile-time truthy", 1) ? __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
    __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].number,
    __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].shape({
        enter: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].number,
        exit: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].number,
        appear: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].number
    }).isRequired
]) : "TURBOPACK unreachable";
var classNamesShape = ("TURBOPACK compile-time truthy", 1) ? __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
    __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string,
    __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].shape({
        enter: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string,
        exit: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string,
        active: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string
    }),
    __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].shape({
        enter: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string,
        enterDone: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string,
        enterActive: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string,
        exit: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string,
        exitDone: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string,
        exitActive: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string
    })
]) : "TURBOPACK unreachable";
}),
"[project]/project-root/frontend/node_modules/react-transition-group/esm/TransitionGroupContext.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/react/index.js [client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createContext(null);
}),
"[project]/project-root/frontend/node_modules/react-transition-group/esm/utils/reflow.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "forceReflow",
    ()=>forceReflow
]);
var forceReflow = function forceReflow(node) {
    return node.scrollTop;
};
}),
"[project]/project-root/frontend/node_modules/react-transition-group/esm/Transition.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ENTERED",
    ()=>ENTERED,
    "ENTERING",
    ()=>ENTERING,
    "EXITED",
    ()=>EXITED,
    "EXITING",
    ()=>EXITING,
    "UNMOUNTED",
    ()=>UNMOUNTED,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/project-root/frontend/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inheritsLoose$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/prop-types/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2d$dom$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/react-dom/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$config$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/react-transition-group/esm/config.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$utils$2f$PropTypes$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/react-transition-group/esm/utils/PropTypes.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$TransitionGroupContext$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/react-transition-group/esm/TransitionGroupContext.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$utils$2f$reflow$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/react-transition-group/esm/utils/reflow.js [client] (ecmascript)");
;
;
;
;
;
;
;
;
;
var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */ var Transition = /*#__PURE__*/ function(_React$Component) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inheritsLoose$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(Transition, _React$Component);
    function Transition(props, context) {
        var _this;
        _this = _React$Component.call(this, props, context) || this;
        var parentGroup = context; // In the context of a TransitionGroup all enters are really appears
        var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
        var initialStatus;
        _this.appearStatus = null;
        if (props.in) {
            if (appear) {
                initialStatus = EXITED;
                _this.appearStatus = ENTERING;
            } else {
                initialStatus = ENTERED;
            }
        } else {
            if (props.unmountOnExit || props.mountOnEnter) {
                initialStatus = UNMOUNTED;
            } else {
                initialStatus = EXITED;
            }
        }
        _this.state = {
            status: initialStatus
        };
        _this.nextCallback = null;
        return _this;
    }
    Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
        var nextIn = _ref.in;
        if (nextIn && prevState.status === UNMOUNTED) {
            return {
                status: EXITED
            };
        }
        return null;
    } // getSnapshotBeforeUpdate(prevProps) {
    ;
    var _proto = Transition.prototype;
    _proto.componentDidMount = function componentDidMount() {
        this.updateStatus(true, this.appearStatus);
    };
    _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
        var nextStatus = null;
        if (prevProps !== this.props) {
            var status = this.state.status;
            if (this.props.in) {
                if (status !== ENTERING && status !== ENTERED) {
                    nextStatus = ENTERING;
                }
            } else {
                if (status === ENTERING || status === ENTERED) {
                    nextStatus = EXITING;
                }
            }
        }
        this.updateStatus(false, nextStatus);
    };
    _proto.componentWillUnmount = function componentWillUnmount() {
        this.cancelNextCallback();
    };
    _proto.getTimeouts = function getTimeouts() {
        var timeout = this.props.timeout;
        var exit, enter, appear;
        exit = enter = appear = timeout;
        if (timeout != null && typeof timeout !== 'number') {
            exit = timeout.exit;
            enter = timeout.enter; // TODO: remove fallback for next major
            appear = timeout.appear !== undefined ? timeout.appear : enter;
        }
        return {
            exit: exit,
            enter: enter,
            appear: appear
        };
    };
    _proto.updateStatus = function updateStatus(mounting, nextStatus) {
        if (mounting === void 0) {
            mounting = false;
        }
        if (nextStatus !== null) {
            // nextStatus will always be ENTERING or EXITING.
            this.cancelNextCallback();
            if (nextStatus === ENTERING) {
                if (this.props.unmountOnExit || this.props.mountOnEnter) {
                    var node = this.props.nodeRef ? this.props.nodeRef.current : __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2d$dom$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].findDOMNode(this); // https://github.com/reactjs/react-transition-group/pull/749
                    // With unmountOnExit or mountOnEnter, the enter animation should happen at the transition between `exited` and `entering`.
                    // To make the animation happen,  we have to separate each rendering and avoid being processed as batched.
                    if (node) (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$utils$2f$reflow$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forceReflow"])(node);
                }
                this.performEnter(mounting);
            } else {
                this.performExit();
            }
        } else if (this.props.unmountOnExit && this.state.status === EXITED) {
            this.setState({
                status: UNMOUNTED
            });
        }
    };
    _proto.performEnter = function performEnter(mounting) {
        var _this2 = this;
        var enter = this.props.enter;
        var appearing = this.context ? this.context.isMounting : mounting;
        var _ref2 = this.props.nodeRef ? [
            appearing
        ] : [
            __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2d$dom$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].findDOMNode(this),
            appearing
        ], maybeNode = _ref2[0], maybeAppearing = _ref2[1];
        var timeouts = this.getTimeouts();
        var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
        // if we are mounting and running this it means appear _must_ be set
        if (!mounting && !enter || __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$config$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].disabled) {
            this.safeSetState({
                status: ENTERED
            }, function() {
                _this2.props.onEntered(maybeNode);
            });
            return;
        }
        this.props.onEnter(maybeNode, maybeAppearing);
        this.safeSetState({
            status: ENTERING
        }, function() {
            _this2.props.onEntering(maybeNode, maybeAppearing);
            _this2.onTransitionEnd(enterTimeout, function() {
                _this2.safeSetState({
                    status: ENTERED
                }, function() {
                    _this2.props.onEntered(maybeNode, maybeAppearing);
                });
            });
        });
    };
    _proto.performExit = function performExit() {
        var _this3 = this;
        var exit = this.props.exit;
        var timeouts = this.getTimeouts();
        var maybeNode = this.props.nodeRef ? undefined : __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2d$dom$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].findDOMNode(this); // no exit animation skip right to EXITED
        if (!exit || __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$config$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].disabled) {
            this.safeSetState({
                status: EXITED
            }, function() {
                _this3.props.onExited(maybeNode);
            });
            return;
        }
        this.props.onExit(maybeNode);
        this.safeSetState({
            status: EXITING
        }, function() {
            _this3.props.onExiting(maybeNode);
            _this3.onTransitionEnd(timeouts.exit, function() {
                _this3.safeSetState({
                    status: EXITED
                }, function() {
                    _this3.props.onExited(maybeNode);
                });
            });
        });
    };
    _proto.cancelNextCallback = function cancelNextCallback() {
        if (this.nextCallback !== null) {
            this.nextCallback.cancel();
            this.nextCallback = null;
        }
    };
    _proto.safeSetState = function safeSetState(nextState, callback) {
        // This shouldn't be necessary, but there are weird race conditions with
        // setState callbacks and unmounting in testing, so always make sure that
        // we can cancel any pending setState callbacks after we unmount.
        callback = this.setNextCallback(callback);
        this.setState(nextState, callback);
    };
    _proto.setNextCallback = function setNextCallback(callback) {
        var _this4 = this;
        var active = true;
        this.nextCallback = function(event) {
            if (active) {
                active = false;
                _this4.nextCallback = null;
                callback(event);
            }
        };
        this.nextCallback.cancel = function() {
            active = false;
        };
        return this.nextCallback;
    };
    _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
        this.setNextCallback(handler);
        var node = this.props.nodeRef ? this.props.nodeRef.current : __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2d$dom$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].findDOMNode(this);
        var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;
        if (!node || doesNotHaveTimeoutOrListener) {
            setTimeout(this.nextCallback, 0);
            return;
        }
        if (this.props.addEndListener) {
            var _ref3 = this.props.nodeRef ? [
                this.nextCallback
            ] : [
                node,
                this.nextCallback
            ], maybeNode = _ref3[0], maybeNextCallback = _ref3[1];
            this.props.addEndListener(maybeNode, maybeNextCallback);
        }
        if (timeout != null) {
            setTimeout(this.nextCallback, timeout);
        }
    };
    _proto.render = function render() {
        var status = this.state.status;
        if (status === UNMOUNTED) {
            return null;
        }
        var _this$props = this.props, children = _this$props.children, _in = _this$props.in, _mountOnEnter = _this$props.mountOnEnter, _unmountOnExit = _this$props.unmountOnExit, _appear = _this$props.appear, _enter = _this$props.enter, _exit = _this$props.exit, _timeout = _this$props.timeout, _addEndListener = _this$props.addEndListener, _onEnter = _this$props.onEnter, _onEntering = _this$props.onEntering, _onEntered = _this$props.onEntered, _onExit = _this$props.onExit, _onExiting = _this$props.onExiting, _onExited = _this$props.onExited, _nodeRef = _this$props.nodeRef, childProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(_this$props, [
            "children",
            "in",
            "mountOnEnter",
            "unmountOnExit",
            "appear",
            "enter",
            "exit",
            "timeout",
            "addEndListener",
            "onEnter",
            "onEntering",
            "onEntered",
            "onExit",
            "onExiting",
            "onExited",
            "nodeRef"
        ]);
        return(/*#__PURE__*/ // allows for nested Transitions
        __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$TransitionGroupContext$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].Provider, {
            value: null
        }, typeof children === 'function' ? children(status, childProps) : __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].cloneElement(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].Children.only(children), childProps)));
    };
    return Transition;
}(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].Component);
Transition.contextType = __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$TransitionGroupContext$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"];
Transition.propTypes = ("TURBOPACK compile-time truthy", 1) ? {
    /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */ nodeRef: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].shape({
        current: typeof Element === 'undefined' ? __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].any : function(propValue, key, componentName, location, propFullName, secret) {
            var value = propValue[key];
            return __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].instanceOf(value && 'ownerDocument' in value ? value.ownerDocument.defaultView.Element : Element)(propValue, key, componentName, location, propFullName, secret);
        }
    }),
    /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */ children: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].func.isRequired,
        __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].element.isRequired
    ]).isRequired,
    /**
   * Show the component; triggers the enter or exit states
   */ in: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */ mountOnEnter: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */ unmountOnExit: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */ appear: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * Enable or disable enter transitions.
   */ enter: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * Enable or disable exit transitions.
   */ exit: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */ timeout: function timeout(props) {
        var pt = __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$utils$2f$PropTypes$2e$js__$5b$client$5d$__$28$ecmascript$29$__["timeoutsShape"];
        if (!props.addEndListener) pt = pt.isRequired;
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
        return pt.apply(void 0, [
            props
        ].concat(args));
    },
    /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */ addEndListener: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */ onEnter: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */ onEntering: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */ onEntered: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */ onExit: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */ onExiting: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */ onExited: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].func
} : "TURBOPACK unreachable"; // Name the function so it is clearer in the documentation
function noop() {}
Transition.defaultProps = {
    in: false,
    mountOnEnter: false,
    unmountOnExit: false,
    appear: false,
    enter: true,
    exit: true,
    onEnter: noop,
    onEntering: noop,
    onEntered: noop,
    onExit: noop,
    onExiting: noop,
    onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
const __TURBOPACK__default__export__ = Transition;
}),
"[project]/project-root/frontend/node_modules/react-transition-group/esm/Transition.js [client] (ecmascript) <export default as Transition>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Transition",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$Transition$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$Transition$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/react-transition-group/esm/Transition.js [client] (ecmascript)");
}),
"[project]/project-root/frontend/node_modules/react-transition-group/esm/utils/ChildMapping.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getChildMapping",
    ()=>getChildMapping,
    "getInitialChildMapping",
    ()=>getInitialChildMapping,
    "getNextChildMapping",
    ()=>getNextChildMapping,
    "mergeChildMappings",
    ()=>mergeChildMappings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/react/index.js [client] (ecmascript)");
;
function getChildMapping(children, mapFn) {
    var mapper = function mapper(child) {
        return mapFn && (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["isValidElement"])(child) ? mapFn(child) : child;
    };
    var result = Object.create(null);
    if (children) __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Children"].map(children, function(c) {
        return c;
    }).forEach(function(child) {
        // run the map function here instead so that the key is the computed one
        result[child.key] = mapper(child);
    });
    return result;
}
function mergeChildMappings(prev, next) {
    prev = prev || {};
    next = next || {};
    function getValueForKey(key) {
        return key in next ? next[key] : prev[key];
    } // For each key of `next`, the list of keys to insert before that key in
    // the combined list
    var nextKeysPending = Object.create(null);
    var pendingKeys = [];
    for(var prevKey in prev){
        if (prevKey in next) {
            if (pendingKeys.length) {
                nextKeysPending[prevKey] = pendingKeys;
                pendingKeys = [];
            }
        } else {
            pendingKeys.push(prevKey);
        }
    }
    var i;
    var childMapping = {};
    for(var nextKey in next){
        if (nextKeysPending[nextKey]) {
            for(i = 0; i < nextKeysPending[nextKey].length; i++){
                var pendingNextKey = nextKeysPending[nextKey][i];
                childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
            }
        }
        childMapping[nextKey] = getValueForKey(nextKey);
    } // Finally, add the keys which didn't appear before any key in `next`
    for(i = 0; i < pendingKeys.length; i++){
        childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
    }
    return childMapping;
}
function getProp(child, prop, props) {
    return props[prop] != null ? props[prop] : child.props[prop];
}
function getInitialChildMapping(props, onExited) {
    return getChildMapping(props.children, function(child) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["cloneElement"])(child, {
            onExited: onExited.bind(null, child),
            in: true,
            appear: getProp(child, 'appear', props),
            enter: getProp(child, 'enter', props),
            exit: getProp(child, 'exit', props)
        });
    });
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
    var nextChildMapping = getChildMapping(nextProps.children);
    var children = mergeChildMappings(prevChildMapping, nextChildMapping);
    Object.keys(children).forEach(function(key) {
        var child = children[key];
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["isValidElement"])(child)) return;
        var hasPrev = key in prevChildMapping;
        var hasNext = key in nextChildMapping;
        var prevChild = prevChildMapping[key];
        var isLeaving = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["isValidElement"])(prevChild) && !prevChild.props.in; // item is new (entering)
        if (hasNext && (!hasPrev || isLeaving)) {
            // console.log('entering', key)
            children[key] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["cloneElement"])(child, {
                onExited: onExited.bind(null, child),
                in: true,
                exit: getProp(child, 'exit', nextProps),
                enter: getProp(child, 'enter', nextProps)
            });
        } else if (!hasNext && hasPrev && !isLeaving) {
            // item is old (exiting)
            // console.log('leaving', key)
            children[key] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["cloneElement"])(child, {
                in: false
            });
        } else if (hasNext && hasPrev && (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["isValidElement"])(prevChild)) {
            // item hasn't changed transition states
            // copy over the last transition props;
            // console.log('unchanged', key)
            children[key] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["cloneElement"])(child, {
                onExited: onExited.bind(null, child),
                in: prevChild.props.in,
                exit: getProp(child, 'exit', nextProps),
                enter: getProp(child, 'enter', nextProps)
            });
        }
    });
    return children;
}
}),
"[project]/project-root/frontend/node_modules/react-transition-group/esm/TransitionGroup.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/project-root/frontend/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@babel/runtime/helpers/esm/extends.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inheritsLoose$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/prop-types/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$TransitionGroupContext$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/react-transition-group/esm/TransitionGroupContext.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$utils$2f$ChildMapping$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/react-transition-group/esm/utils/ChildMapping.js [client] (ecmascript)");
;
;
;
;
;
;
;
;
var values = Object.values || function(obj) {
    return Object.keys(obj).map(function(k) {
        return obj[k];
    });
};
var defaultProps = {
    component: 'div',
    childFactory: function childFactory(child) {
        return child;
    }
};
/**
 * The `<TransitionGroup>` component manages a set of transition components
 * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
 * components, `<TransitionGroup>` is a state machine for managing the mounting
 * and unmounting of components over time.
 *
 * Consider the example below. As items are removed or added to the TodoList the
 * `in` prop is toggled automatically by the `<TransitionGroup>`.
 *
 * Note that `<TransitionGroup>`  does not define any animation behavior!
 * Exactly _how_ a list item animates is up to the individual transition
 * component. This means you can mix and match animations across different list
 * items.
 */ var TransitionGroup = /*#__PURE__*/ function(_React$Component) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inheritsLoose$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(TransitionGroup, _React$Component);
    function TransitionGroup(props, context) {
        var _this;
        _this = _React$Component.call(this, props, context) || this;
        var handleExited = _this.handleExited.bind((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(_this)); // Initial children should all be entering, dependent on appear
        _this.state = {
            contextValue: {
                isMounting: true
            },
            handleExited: handleExited,
            firstRender: true
        };
        return _this;
    }
    var _proto = TransitionGroup.prototype;
    _proto.componentDidMount = function componentDidMount() {
        this.mounted = true;
        this.setState({
            contextValue: {
                isMounting: false
            }
        });
    };
    _proto.componentWillUnmount = function componentWillUnmount() {
        this.mounted = false;
    };
    TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
        var prevChildMapping = _ref.children, handleExited = _ref.handleExited, firstRender = _ref.firstRender;
        return {
            children: firstRender ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$utils$2f$ChildMapping$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getInitialChildMapping"])(nextProps, handleExited) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$utils$2f$ChildMapping$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getNextChildMapping"])(nextProps, prevChildMapping, handleExited),
            firstRender: false
        };
    } // node is `undefined` when user provided `nodeRef` prop
    ;
    _proto.handleExited = function handleExited(child, node) {
        var currentChildMapping = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$utils$2f$ChildMapping$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getChildMapping"])(this.props.children);
        if (child.key in currentChildMapping) return;
        if (child.props.onExited) {
            child.props.onExited(node);
        }
        if (this.mounted) {
            this.setState(function(state) {
                var children = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({}, state.children);
                delete children[child.key];
                return {
                    children: children
                };
            });
        }
    };
    _proto.render = function render() {
        var _this$props = this.props, Component = _this$props.component, childFactory = _this$props.childFactory, props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(_this$props, [
            "component",
            "childFactory"
        ]);
        var contextValue = this.state.contextValue;
        var children = values(this.state.children).map(childFactory);
        delete props.appear;
        delete props.enter;
        delete props.exit;
        if (Component === null) {
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$TransitionGroupContext$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].Provider, {
                value: contextValue
            }, children);
        }
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$TransitionGroupContext$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].Provider, {
            value: contextValue
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement(Component, props, children));
    };
    return TransitionGroup;
}(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].Component);
TransitionGroup.propTypes = ("TURBOPACK compile-time truthy", 1) ? {
    /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */ component: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].any,
    /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */ children: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].node,
    /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */ appear: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */ enter: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */ exit: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */ childFactory: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].func
} : "TURBOPACK unreachable";
TransitionGroup.defaultProps = defaultProps;
const __TURBOPACK__default__export__ = TransitionGroup;
}),
"[project]/project-root/frontend/node_modules/react-transition-group/esm/TransitionGroup.js [client] (ecmascript) <export default as TransitionGroup>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TransitionGroup",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$TransitionGroup$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$TransitionGroup$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/react-transition-group/esm/TransitionGroup.js [client] (ecmascript)");
}),
"[project]/project-root/frontend/node_modules/react-transition-group/esm/CSSTransition.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/project-root/frontend/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@babel/runtime/helpers/esm/extends.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inheritsLoose$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/prop-types/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$addClass$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/dom-helpers/esm/addClass.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$removeClass$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/dom-helpers/esm/removeClass.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$Transition$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/react-transition-group/esm/Transition.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$utils$2f$PropTypes$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/react-transition-group/esm/utils/PropTypes.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$utils$2f$reflow$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/react-transition-group/esm/utils/reflow.js [client] (ecmascript)");
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
var _addClass = function addClass(node, classes) {
    return node && classes && classes.split(' ').forEach(function(c) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$addClass$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(node, c);
    });
};
var removeClass = function removeClass(node, classes) {
    return node && classes && classes.split(' ').forEach(function(c) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$removeClass$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(node, c);
    });
};
/**
 * A transition component inspired by the excellent
 * [ng-animate](https://docs.angularjs.org/api/ngAnimate) library, you should
 * use it if you're using CSS transitions or animations. It's built upon the
 * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
 * component, so it inherits all of its props.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` states of the transition. The first class is applied and then a
 * second `*-active` class in order to activate the CSS transition. After the
 * transition, matching `*-done` class names are applied to persist the
 * transition state.
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
 *         <div>
 *           {"I'll receive my-node-* classes"}
 *         </div>
 *       </CSSTransition>
 *       <button type="button" onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the `in` prop is set to `true`, the child component will first receive
 * the class `example-enter`, then the `example-enter-active` will be added in
 * the next tick. `CSSTransition` [forces a
 * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * between before adding the `example-enter-active`. This is an important trick
 * because it allows us to transition between `example-enter` and
 * `example-enter-active` even though they were added immediately one after
 * another. Most notably, this is what makes it possible for us to animate
 * _appearance_.
 *
 * ```css
 * .my-node-enter {
 *   opacity: 0;
 * }
 * .my-node-enter-active {
 *   opacity: 1;
 *   transition: opacity 200ms;
 * }
 * .my-node-exit {
 *   opacity: 1;
 * }
 * .my-node-exit-active {
 *   opacity: 0;
 *   transition: opacity 200ms;
 * }
 * ```
 *
 * `*-active` classes represent which styles you want to animate **to**, so it's
 * important to add `transition` declaration only to them, otherwise transitions
 * might not behave as intended! This might not be obvious when the transitions
 * are symmetrical, i.e. when `*-enter-active` is the same as `*-exit`, like in
 * the example above (minus `transition`), but it becomes apparent in more
 * complex transitions.
 *
 * **Note**: If you're using the
 * [`appear`](http://reactcommunity.org/react-transition-group/transition#Transition-prop-appear)
 * prop, make sure to define styles for `.appear-*` classes as well.
 */ var CSSTransition = /*#__PURE__*/ function(_React$Component) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inheritsLoose$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(CSSTransition, _React$Component);
    function CSSTransition() {
        var _this;
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        _this = _React$Component.call.apply(_React$Component, [
            this
        ].concat(args)) || this;
        _this.appliedClasses = {
            appear: {},
            enter: {},
            exit: {}
        };
        _this.onEnter = function(maybeNode, maybeAppearing) {
            var _this$resolveArgument = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument[0], appearing = _this$resolveArgument[1];
            _this.removeClasses(node, 'exit');
            _this.addClass(node, appearing ? 'appear' : 'enter', 'base');
            if (_this.props.onEnter) {
                _this.props.onEnter(maybeNode, maybeAppearing);
            }
        };
        _this.onEntering = function(maybeNode, maybeAppearing) {
            var _this$resolveArgument2 = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument2[0], appearing = _this$resolveArgument2[1];
            var type = appearing ? 'appear' : 'enter';
            _this.addClass(node, type, 'active');
            if (_this.props.onEntering) {
                _this.props.onEntering(maybeNode, maybeAppearing);
            }
        };
        _this.onEntered = function(maybeNode, maybeAppearing) {
            var _this$resolveArgument3 = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument3[0], appearing = _this$resolveArgument3[1];
            var type = appearing ? 'appear' : 'enter';
            _this.removeClasses(node, type);
            _this.addClass(node, type, 'done');
            if (_this.props.onEntered) {
                _this.props.onEntered(maybeNode, maybeAppearing);
            }
        };
        _this.onExit = function(maybeNode) {
            var _this$resolveArgument4 = _this.resolveArguments(maybeNode), node = _this$resolveArgument4[0];
            _this.removeClasses(node, 'appear');
            _this.removeClasses(node, 'enter');
            _this.addClass(node, 'exit', 'base');
            if (_this.props.onExit) {
                _this.props.onExit(maybeNode);
            }
        };
        _this.onExiting = function(maybeNode) {
            var _this$resolveArgument5 = _this.resolveArguments(maybeNode), node = _this$resolveArgument5[0];
            _this.addClass(node, 'exit', 'active');
            if (_this.props.onExiting) {
                _this.props.onExiting(maybeNode);
            }
        };
        _this.onExited = function(maybeNode) {
            var _this$resolveArgument6 = _this.resolveArguments(maybeNode), node = _this$resolveArgument6[0];
            _this.removeClasses(node, 'exit');
            _this.addClass(node, 'exit', 'done');
            if (_this.props.onExited) {
                _this.props.onExited(maybeNode);
            }
        };
        _this.resolveArguments = function(maybeNode, maybeAppearing) {
            return _this.props.nodeRef ? [
                _this.props.nodeRef.current,
                maybeNode
            ] // here `maybeNode` is actually `appearing`
             : [
                maybeNode,
                maybeAppearing
            ];
        };
        _this.getClassNames = function(type) {
            var classNames = _this.props.classNames;
            var isStringClassNames = typeof classNames === 'string';
            var prefix = isStringClassNames && classNames ? classNames + "-" : '';
            var baseClassName = isStringClassNames ? "" + prefix + type : classNames[type];
            var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames[type + "Active"];
            var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames[type + "Done"];
            return {
                baseClassName: baseClassName,
                activeClassName: activeClassName,
                doneClassName: doneClassName
            };
        };
        return _this;
    }
    var _proto = CSSTransition.prototype;
    _proto.addClass = function addClass(node, type, phase) {
        var className = this.getClassNames(type)[phase + "ClassName"];
        var _this$getClassNames = this.getClassNames('enter'), doneClassName = _this$getClassNames.doneClassName;
        if (type === 'appear' && phase === 'done' && doneClassName) {
            className += " " + doneClassName;
        } // This is to force a repaint,
        // which is necessary in order to transition styles when adding a class name.
        if (phase === 'active') {
            if (node) (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$utils$2f$reflow$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forceReflow"])(node);
        }
        if (className) {
            this.appliedClasses[type][phase] = className;
            _addClass(node, className);
        }
    };
    _proto.removeClasses = function removeClasses(node, type) {
        var _this$appliedClasses$ = this.appliedClasses[type], baseClassName = _this$appliedClasses$.base, activeClassName = _this$appliedClasses$.active, doneClassName = _this$appliedClasses$.done;
        this.appliedClasses[type] = {};
        if (baseClassName) {
            removeClass(node, baseClassName);
        }
        if (activeClassName) {
            removeClass(node, activeClassName);
        }
        if (doneClassName) {
            removeClass(node, doneClassName);
        }
    };
    _proto.render = function render() {
        var _this$props = this.props, _ = _this$props.classNames, props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(_this$props, [
            "classNames"
        ]);
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$Transition$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({}, props, {
            onEnter: this.onEnter,
            onEntered: this.onEntered,
            onEntering: this.onEntering,
            onExit: this.onExit,
            onExiting: this.onExiting,
            onExited: this.onExited
        }));
    };
    return CSSTransition;
}(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].Component);
CSSTransition.defaultProps = {
    classNames: ''
};
CSSTransition.propTypes = ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({}, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$Transition$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].propTypes, {
    /**
   * The animation classNames applied to the component as it appears, enters,
   * exits or has finished the transition. A single name can be provided, which
   * will be suffixed for each stage, e.g. `classNames="fade"` applies:
   *
   * - `fade-appear`, `fade-appear-active`, `fade-appear-done`
   * - `fade-enter`, `fade-enter-active`, `fade-enter-done`
   * - `fade-exit`, `fade-exit-active`, `fade-exit-done`
   *
   * A few details to note about how these classes are applied:
   *
   * 1. They are _joined_ with the ones that are already defined on the child
   *    component, so if you want to add some base styles, you can use
   *    `className` without worrying that it will be overridden.
   *
   * 2. If the transition component mounts with `in={false}`, no classes are
   *    applied yet. You might be expecting `*-exit-done`, but if you think
   *    about it, a component cannot finish exiting if it hasn't entered yet.
   *
   * 2. `fade-appear-done` and `fade-enter-done` will _both_ be applied. This
   *    allows you to define different behavior for when appearing is done and
   *    when regular entering is done, using selectors like
   *    `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply
   *    an epic entrance animation when element first appears in the DOM using
   *    [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
   *    simply use `fade-enter-done` for defining both cases.
   *
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  appearDone: 'my-done-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply
   * spread them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  appearDone?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */ classNames: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$utils$2f$PropTypes$2e$js__$5b$client$5d$__$28$ecmascript$29$__["classNamesShape"],
    /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */ onEnter: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */ onEntering: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */ onEntered: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */ onExit: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */ onExiting: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */ onExited: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].func
}) : "TURBOPACK unreachable";
const __TURBOPACK__default__export__ = CSSTransition;
}),
"[project]/project-root/frontend/node_modules/react-transition-group/esm/CSSTransition.js [client] (ecmascript) <export default as CSSTransition>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CSSTransition",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$CSSTransition$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$CSSTransition$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/react-transition-group/esm/CSSTransition.js [client] (ecmascript)");
}),
"[project]/project-root/frontend/node_modules/@mui/icons-material/esm/Dashboard.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$createSvgIcon$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/material/esm/utils/createSvgIcon.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/react/jsx-runtime.js [client] (ecmascript)");
"use client";
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$createSvgIcon$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
    d: "M3 13h8V3H3zm0 8h8v-6H3zm10 0h8V11h-8zm0-18v6h8V3z"
}), 'Dashboard');
}),
"[project]/project-root/frontend/node_modules/@mui/icons-material/esm/BarChart.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$createSvgIcon$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/material/esm/utils/createSvgIcon.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/react/jsx-runtime.js [client] (ecmascript)");
"use client";
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$createSvgIcon$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
    d: "M4 9h4v11H4zm12 4h4v7h-4zm-6-9h4v16h-4z"
}), 'BarChart');
}),
"[project]/project-root/frontend/node_modules/@mui/icons-material/esm/People.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$createSvgIcon$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/material/esm/utils/createSvgIcon.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/react/jsx-runtime.js [client] (ecmascript)");
"use client";
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$createSvgIcon$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
    d: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3m-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3m0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5m8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5"
}), 'People');
}),
"[project]/project-root/frontend/node_modules/@mui/icons-material/esm/Settings.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$createSvgIcon$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/material/esm/utils/createSvgIcon.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/react/jsx-runtime.js [client] (ecmascript)");
"use client";
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$createSvgIcon$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
    d: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6"
}), 'Settings');
}),
"[project]/project-root/frontend/node_modules/@mui/icons-material/esm/Notifications.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$createSvgIcon$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/material/esm/utils/createSvgIcon.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/react/jsx-runtime.js [client] (ecmascript)");
"use client";
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$createSvgIcon$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
    d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2m6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1z"
}), 'Notifications');
}),
"[project]/project-root/frontend/node_modules/@mui/x-internals/esm/fastObjectShallowCompare/fastObjectShallowCompare.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fastObjectShallowCompare",
    ()=>fastObjectShallowCompare
]);
const is = Object.is;
function fastObjectShallowCompare(a, b) {
    if (a === b) {
        return true;
    }
    if (!(a instanceof Object) || !(b instanceof Object)) {
        return false;
    }
    let aLength = 0;
    let bLength = 0;
    /* eslint-disable guard-for-in */ for(const key in a){
        aLength += 1;
        if (!is(a[key], b[key])) {
            return false;
        }
        if (!(key in b)) {
            return false;
        }
    }
    /* eslint-disable-next-line @typescript-eslint/naming-convention, @typescript-eslint/no-unused-vars */ for(const _ in b){
        bLength += 1;
    }
    return aLength === bLength;
}
}),
"[project]/project-root/frontend/node_modules/@mui/x-internals/esm/fastMemo/fastMemo.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fastMemo",
    ()=>fastMemo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$internals$2f$esm$2f$fastObjectShallowCompare$2f$fastObjectShallowCompare$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/x-internals/esm/fastObjectShallowCompare/fastObjectShallowCompare.js [client] (ecmascript)");
;
;
function fastMemo(component) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["memo"](component, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$internals$2f$esm$2f$fastObjectShallowCompare$2f$fastObjectShallowCompare$2e$js__$5b$client$5d$__$28$ecmascript$29$__["fastObjectShallowCompare"]);
}
}),
"[project]/project-root/frontend/node_modules/@mui/x-internals/esm/warning/warning.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearWarningsCache",
    ()=>clearWarningsCache,
    "warnOnce",
    ()=>warnOnce
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/project-root/frontend/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
const warnedOnceCache = new Set();
function warnOnce(message, gravity = 'warning') {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const cleanMessage = Array.isArray(message) ? message.join('\n') : message;
    if (!warnedOnceCache.has(cleanMessage)) {
        warnedOnceCache.add(cleanMessage);
        if (gravity === 'error') {
            console.error(cleanMessage);
        } else {
            console.warn(cleanMessage);
        }
    }
}
function clearWarningsCache() {
    warnedOnceCache.clear();
}
}),
"[project]/project-root/frontend/node_modules/@mui/x-internals/esm/store/useStore.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* We need to import the shim because React 17 does not support the `useSyncExternalStore` API.
 * More info: https://github.com/mui/mui-x/issues/18303#issuecomment-2958392341 */ __turbopack_context__.s([
    "useStore",
    ()=>useStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$with$2d$selector$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/use-sync-external-store/shim/with-selector.js [client] (ecmascript)");
;
function useStore(store, selector, a1, a2, a3) {
    const selectorWithArgs = (state)=>selector(state, a1, a2, a3);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$with$2d$selector$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useSyncExternalStoreWithSelector"])(store.subscribe, store.getSnapshot, store.getSnapshot, selectorWithArgs);
}
}),
"[project]/project-root/frontend/node_modules/@mui/x-internals/esm/store/createSelector.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createSelector",
    ()=>createSelector,
    "createSelectorMemoized",
    ()=>createSelectorMemoized,
    "createSelectorMemoizedWithOptions",
    ()=>createSelectorMemoizedWithOptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$reselect$2f$dist$2f$reselect$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/reselect/dist/reselect.mjs [client] (ecmascript)");
;
/* eslint-disable no-underscore-dangle */ // __cacheKey__
const reselectCreateSelector = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$reselect$2f$dist$2f$reselect$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["createSelectorCreator"])({
    memoize: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$reselect$2f$dist$2f$reselect$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["lruMemoize"],
    memoizeOptions: {
        maxSize: 1,
        equalityCheck: Object.is
    }
});
const createSelector = (a, b, c, d, e, f, g, h, ...other)=>{
    if (other.length > 0) {
        throw new Error('Unsupported number of selectors');
    }
    let selector;
    if (a && b && c && d && e && f && g && h) {
        selector = (state, a1, a2, a3)=>{
            const va = a(state, a1, a2, a3);
            const vb = b(state, a1, a2, a3);
            const vc = c(state, a1, a2, a3);
            const vd = d(state, a1, a2, a3);
            const ve = e(state, a1, a2, a3);
            const vf = f(state, a1, a2, a3);
            const vg = g(state, a1, a2, a3);
            return h(va, vb, vc, vd, ve, vf, vg, a1, a2, a3);
        };
    } else if (a && b && c && d && e && f && g) {
        selector = (state, a1, a2, a3)=>{
            const va = a(state, a1, a2, a3);
            const vb = b(state, a1, a2, a3);
            const vc = c(state, a1, a2, a3);
            const vd = d(state, a1, a2, a3);
            const ve = e(state, a1, a2, a3);
            const vf = f(state, a1, a2, a3);
            return g(va, vb, vc, vd, ve, vf, a1, a2, a3);
        };
    } else if (a && b && c && d && e && f) {
        selector = (state, a1, a2, a3)=>{
            const va = a(state, a1, a2, a3);
            const vb = b(state, a1, a2, a3);
            const vc = c(state, a1, a2, a3);
            const vd = d(state, a1, a2, a3);
            const ve = e(state, a1, a2, a3);
            return f(va, vb, vc, vd, ve, a1, a2, a3);
        };
    } else if (a && b && c && d && e) {
        selector = (state, a1, a2, a3)=>{
            const va = a(state, a1, a2, a3);
            const vb = b(state, a1, a2, a3);
            const vc = c(state, a1, a2, a3);
            const vd = d(state, a1, a2, a3);
            return e(va, vb, vc, vd, a1, a2, a3);
        };
    } else if (a && b && c && d) {
        selector = (state, a1, a2, a3)=>{
            const va = a(state, a1, a2, a3);
            const vb = b(state, a1, a2, a3);
            const vc = c(state, a1, a2, a3);
            return d(va, vb, vc, a1, a2, a3);
        };
    } else if (a && b && c) {
        selector = (state, a1, a2, a3)=>{
            const va = a(state, a1, a2, a3);
            const vb = b(state, a1, a2, a3);
            return c(va, vb, a1, a2, a3);
        };
    } else if (a && b) {
        selector = (state, a1, a2, a3)=>{
            const va = a(state, a1, a2, a3);
            return b(va, a1, a2, a3);
        };
    } else if (a) {
        selector = a;
    } else {
        throw new Error('Missing arguments');
    }
    return selector;
};
const createSelectorMemoizedWithOptions = (options)=>(...inputs)=>{
        const cache = new WeakMap();
        let nextCacheId = 1;
        const combiner = inputs[inputs.length - 1];
        const nSelectors = inputs.length - 1 || 1;
        // (s1, s2, ..., sN, a1, a2, a3) => { ... }
        const argsLength = Math.max(combiner.length - nSelectors, 0);
        if (argsLength > 3) {
            throw new Error('Unsupported number of arguments');
        }
        // prettier-ignore
        const selector = (state, a1, a2, a3)=>{
            let cacheKey = state.__cacheKey__;
            if (!cacheKey) {
                cacheKey = {
                    id: nextCacheId
                };
                state.__cacheKey__ = cacheKey;
                nextCacheId += 1;
            }
            let fn = cache.get(cacheKey);
            if (!fn) {
                const selectors = inputs.length === 1 ? [
                    (x)=>x,
                    combiner
                ] : inputs;
                let reselectArgs = inputs;
                const selectorArgs = [
                    undefined,
                    undefined,
                    undefined
                ];
                switch(argsLength){
                    case 0:
                        break;
                    case 1:
                        {
                            reselectArgs = [
                                ...selectors.slice(0, -1),
                                ()=>selectorArgs[0],
                                combiner
                            ];
                            break;
                        }
                    case 2:
                        {
                            reselectArgs = [
                                ...selectors.slice(0, -1),
                                ()=>selectorArgs[0],
                                ()=>selectorArgs[1],
                                combiner
                            ];
                            break;
                        }
                    case 3:
                        {
                            reselectArgs = [
                                ...selectors.slice(0, -1),
                                ()=>selectorArgs[0],
                                ()=>selectorArgs[1],
                                ()=>selectorArgs[2],
                                combiner
                            ];
                            break;
                        }
                    default:
                        throw new Error('Unsupported number of arguments');
                }
                if (options) {
                    reselectArgs = [
                        ...reselectArgs,
                        options
                    ];
                }
                fn = reselectCreateSelector(...reselectArgs);
                fn.selectorArgs = selectorArgs;
                cache.set(cacheKey, fn);
            }
            /* eslint-disable no-fallthrough */ switch(argsLength){
                case 3:
                    fn.selectorArgs[2] = a3;
                case 2:
                    fn.selectorArgs[1] = a2;
                case 1:
                    fn.selectorArgs[0] = a1;
                case 0:
                default:
            }
            switch(argsLength){
                case 0:
                    return fn(state);
                case 1:
                    return fn(state, a1);
                case 2:
                    return fn(state, a1, a2);
                case 3:
                    return fn(state, a1, a2, a3);
                default:
                    throw new Error('unreachable');
            }
        };
        return selector;
    };
const createSelectorMemoized = createSelectorMemoizedWithOptions();
}),
"[project]/project-root/frontend/node_modules/@mui/x-internals/esm/isDeepEqual/isDeepEqual.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Based on `fast-deep-equal`
 *
 * MIT License
 *
 * Copyright (c) 2017 Evgeny Poberezkin
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */ /**
 * Check if two values are deeply equal.
 */ __turbopack_context__.s([
    "isDeepEqual",
    ()=>isDeepEqual
]);
function isDeepEqual(a, b) {
    if (a === b) {
        return true;
    }
    if (a && b && typeof a === 'object' && typeof b === 'object') {
        if (a.constructor !== b.constructor) {
            return false;
        }
        if (Array.isArray(a)) {
            const length = a.length;
            if (length !== b.length) {
                return false;
            }
            for(let i = 0; i < length; i += 1){
                if (!isDeepEqual(a[i], b[i])) {
                    return false;
                }
            }
            return true;
        }
        if (a instanceof Map && b instanceof Map) {
            if (a.size !== b.size) {
                return false;
            }
            const entriesA = Array.from(a.entries());
            for(let i = 0; i < entriesA.length; i += 1){
                if (!b.has(entriesA[i][0])) {
                    return false;
                }
            }
            for(let i = 0; i < entriesA.length; i += 1){
                const entryA = entriesA[i];
                if (!isDeepEqual(entryA[1], b.get(entryA[0]))) {
                    return false;
                }
            }
            return true;
        }
        if (a instanceof Set && b instanceof Set) {
            if (a.size !== b.size) {
                return false;
            }
            const entries = Array.from(a.entries());
            for(let i = 0; i < entries.length; i += 1){
                if (!b.has(entries[i][0])) {
                    return false;
                }
            }
            return true;
        }
        if (ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
            const length = a.length;
            if (length !== b.length) {
                return false;
            }
            for(let i = 0; i < length; i += 1){
                if (a[i] !== b[i]) {
                    return false;
                }
            }
            return true;
        }
        if (a.constructor === RegExp) {
            return a.source === b.source && a.flags === b.flags;
        }
        if (a.valueOf !== Object.prototype.valueOf) {
            return a.valueOf() === b.valueOf();
        }
        if (a.toString !== Object.prototype.toString) {
            return a.toString() === b.toString();
        }
        const keys = Object.keys(a);
        const length = keys.length;
        if (length !== Object.keys(b).length) {
            return false;
        }
        for(let i = 0; i < length; i += 1){
            if (!Object.prototype.hasOwnProperty.call(b, keys[i])) {
                return false;
            }
        }
        for(let i = 0; i < length; i += 1){
            const key = keys[i];
            if (!isDeepEqual(a[key], b[key])) {
                return false;
            }
        }
        return true;
    }
    // true if both NaN, false otherwise
    // eslint-disable-next-line no-self-compare
    return a !== a && b !== b;
}
}),
"[project]/project-root/frontend/node_modules/@mui/x-internals/esm/rafThrottle/rafThrottle.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 *  Creates a throttled function that only invokes `fn` at most once per animation frame.
 *
 * @example
 * ```ts
 * const throttled = rafThrottle((value: number) => console.log(value));
 * window.addEventListener('scroll', (e) => throttled(e.target.scrollTop));
 * ```
 *
 * @param fn Callback function
 * @return The `requestAnimationFrame` throttled function
 */ __turbopack_context__.s([
    "rafThrottle",
    ()=>rafThrottle
]);
function rafThrottle(fn) {
    let lastArgs;
    let rafRef;
    const later = ()=>{
        rafRef = null;
        fn(...lastArgs);
    };
    function throttled(...args) {
        lastArgs = args;
        if (!rafRef) {
            rafRef = requestAnimationFrame(later);
        }
    }
    throttled.clear = ()=>{
        if (rafRef) {
            cancelAnimationFrame(rafRef);
            rafRef = null;
        }
    };
    return throttled;
}
}),
"[project]/project-root/frontend/node_modules/@mui/x-internals/esm/reactMajor/index.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/react/index.js [client] (ecmascript)");
;
const __TURBOPACK__default__export__ = parseInt(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["version"], 10);
}),
"[project]/project-root/frontend/node_modules/@mui/x-internals/esm/store/useStoreEffect.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useStoreEffect",
    ()=>useStoreEffect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useLazyRef$2f$useLazyRef$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/utils/esm/useLazyRef/useLazyRef.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useOnMount$2f$useOnMount$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/utils/esm/useOnMount/useOnMount.js [client] (ecmascript)");
;
;
const noop = ()=>{};
function useStoreEffect(store, selector, effect) {
    const instance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useLazyRef$2f$useLazyRef$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(initialize, {
        store,
        selector
    }).current;
    instance.effect = effect;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useOnMount$2f$useOnMount$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(instance.onMount);
}
// `useLazyRef` typings are incorrect, `params` should not be optional
function initialize(params) {
    const { store, selector } = params;
    let previousState = selector(store.state);
    const instance = {
        effect: noop,
        dispose: null,
        // We want a single subscription done right away and cleared on unmount only,
        // but React triggers `useOnMount` multiple times in dev, so we need to manage
        // the subscription anyway.
        subscribe: ()=>{
            instance.dispose ??= store.subscribe((state)=>{
                const nextState = selector(state);
                if (!Object.is(previousState, nextState)) {
                    const prev = previousState;
                    previousState = nextState;
                    instance.effect(prev, nextState);
                }
            });
        },
        onMount: ()=>{
            instance.subscribe();
            return ()=>{
                instance.dispose?.();
                instance.dispose = null;
            };
        }
    };
    instance.subscribe();
    return instance;
}
}),
"[project]/project-root/frontend/node_modules/@mui/x-internals/esm/useAssertModelConsistency/useAssertModelConsistency.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAssertModelConsistency",
    ()=>useAssertModelConsistency
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/project-root/frontend/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$internals$2f$esm$2f$warning$2f$warning$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/x-internals/esm/warning/warning.js [client] (ecmascript)");
'use client';
;
;
/**
 * Make sure a controlled prop is used correctly.
 * Logs errors if the prop either:
 *
 * - switch between controlled and uncontrolled
 * - modify it's default value
 * @param parameters
 */ function useAssertModelConsistencyOutsideOfProduction(parameters) {
    const { componentName, propName, controlled, defaultValue, warningPrefix = 'MUI X' } = parameters;
    const [{ initialDefaultValue, isControlled }] = __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"]({
        initialDefaultValue: defaultValue,
        isControlled: controlled !== undefined
    });
    if (isControlled !== (controlled !== undefined)) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$internals$2f$esm$2f$warning$2f$warning$2e$js__$5b$client$5d$__$28$ecmascript$29$__["warnOnce"])([
            `${warningPrefix}: A component is changing the ${isControlled ? '' : 'un'}controlled ${propName} state of ${componentName} to be ${isControlled ? 'un' : ''}controlled.`,
            'Elements should not switch from uncontrolled to controlled (or vice versa).',
            `Decide between using a controlled or uncontrolled ${propName} ` + 'element for the lifetime of the component.',
            "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.",
            'More info: https://fb.me/react-controlled-components'
        ], 'error');
    }
    if (JSON.stringify(initialDefaultValue) !== JSON.stringify(defaultValue)) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$internals$2f$esm$2f$warning$2f$warning$2e$js__$5b$client$5d$__$28$ecmascript$29$__["warnOnce"])([
            `${warningPrefix}: A component is changing the default ${propName} state of an uncontrolled ${componentName} after being initialized. ` + `To suppress this warning opt to use a controlled ${componentName}.`
        ], 'error');
    }
}
const useAssertModelConsistency = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : useAssertModelConsistencyOutsideOfProduction;
}),
"[project]/project-root/frontend/node_modules/@mui/x-internals/esm/store/Store.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Store",
    ()=>Store
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@babel/runtime/helpers/esm/extends.js [client] (ecmascript)");
;
class Store {
    // HACK: `any` fixes adding listeners that accept partial state.
    // Internal state to handle recursive `setState()` calls
    static create(state) {
        return new Store(state);
    }
    constructor(state){
        this.state = state;
        this.listeners = new Set();
        this.updateTick = 0;
    }
    subscribe = (fn)=>{
        this.listeners.add(fn);
        return ()=>{
            this.listeners.delete(fn);
        };
    };
    getSnapshot = ()=>{
        return this.state;
    };
    setState(newState) {
        this.state = newState;
        this.updateTick += 1;
        const currentTick = this.updateTick;
        const it = this.listeners.values();
        let result;
        while(result = it.next(), !result.done){
            if (currentTick !== this.updateTick) {
                // If the tick has changed, a recursive `setState` call has been made,
                // and it has already notified all listeners.
                return;
            }
            const listener = result.value;
            listener(newState);
        }
    }
    update(changes) {
        for(const key in changes){
            if (!Object.is(this.state[key], changes[key])) {
                this.setState((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({}, this.state, changes));
                return;
            }
        }
    }
    set(key, value) {
        if (!Object.is(this.state[key], value)) {
            this.setState((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({}, this.state, {
                [key]: value
            }));
        }
    }
}
}),
"[project]/project-root/frontend/node_modules/@mui/x-internals/esm/useEffectAfterFirstRender/useEffectAfterFirstRender.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useEffectAfterFirstRender",
    ()=>useEffectAfterFirstRender
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/react/index.js [client] (ecmascript)");
'use client';
;
function useEffectAfterFirstRender(effect, deps) {
    const isFirstRender = __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"](true);
    __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useEffectAfterFirstRender.useEffect": ()=>{
            if (isFirstRender.current) {
                isFirstRender.current = false;
                return undefined;
            }
            return effect();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["useEffectAfterFirstRender.useEffect"], deps);
}
}),
"[project]/project-root/frontend/node_modules/@mui/x-telemetry/esm/runtime/events.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/project-root/frontend/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
const noop = ()=>null;
const muiXTelemetryEvents = {
    licenseVerification: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : (context, payload)=>({
            eventName: 'licenseVerification',
            payload,
            context
        })
};
const __TURBOPACK__default__export__ = muiXTelemetryEvents;
}),
"[project]/project-root/frontend/node_modules/@mui/x-telemetry/esm/runtime/config.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTelemetryEnvConfig",
    ()=>getTelemetryEnvConfig,
    "getTelemetryEnvConfigValue",
    ()=>getTelemetryEnvConfigValue,
    "setTelemetryEnvConfigValue",
    ()=>setTelemetryEnvConfigValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/project-root/frontend/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
const envEnabledValues = [
    '1',
    'true',
    'yes',
    'y'
];
const envDisabledValues = [
    '0',
    'false',
    'no',
    'n'
];
function getBooleanEnv(value) {
    if (!value) {
        return undefined;
    }
    if (envEnabledValues.includes(value)) {
        return true;
    }
    if (envDisabledValues.includes(value)) {
        return false;
    }
    return undefined;
}
function getBooleanEnvFromEnvObject(envKey, envObj) {
    const keys = Object.keys(envObj);
    for(let i = 0; i < keys.length; i += 1){
        const key = keys[i];
        if (!key.endsWith(envKey)) {
            continue;
        }
        const value = getBooleanEnv(envObj[key]?.toLowerCase());
        if (typeof value === 'boolean') {
            return value;
        }
    }
    return undefined;
}
function getIsTelemetryCollecting() {
    // Check global variable
    // eslint-disable-next-line no-underscore-dangle
    const globalValue = globalThis.__MUI_X_TELEMETRY_DISABLED__;
    if (typeof globalValue === 'boolean') {
        // If disabled=true, telemetry is disabled
        // If disabled=false, telemetry is enabled
        return !globalValue;
    }
    try {
        if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"] !== 'undefined' && __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env && typeof __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env === 'object') {
            const result = getBooleanEnvFromEnvObject('MUI_X_TELEMETRY_DISABLED', __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env);
            if (typeof result === 'boolean') {
                // If disabled=true, telemetry is disabled
                // If disabled=false, telemetry is enabled
                return !result;
            }
        }
    } catch (_) {
    // If there is an error, return the default value
    }
    try {
        // Some build tools replace env variables on compilation
        // e.g. Next.js, webpack EnvironmentPlugin
        const envValue = __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.MUI_X_TELEMETRY_DISABLED || __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_MUI_X_TELEMETRY_DISABLED || __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.GATSBY_MUI_X_TELEMETRY_DISABLED || __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.REACT_APP_MUI_X_TELEMETRY_DISABLED || __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.PUBLIC_MUI_X_TELEMETRY_DISABLED;
        const result = getBooleanEnv(envValue);
        if (typeof result === 'boolean') {
            // If disabled=true, telemetry is disabled
            // If disabled=false, telemetry is enabled
            return !result;
        }
    } catch (_) {
    // If there is an error, return the default value
    }
    return undefined;
}
function getIsDebugModeEnabled() {
    try {
        // Check global variable
        // eslint-disable-next-line no-underscore-dangle
        const globalValue = globalThis.__MUI_X_TELEMETRY_DEBUG__;
        if (typeof globalValue === 'boolean') {
            return globalValue;
        }
        if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"] !== 'undefined' && __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env && typeof __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env === 'object') {
            const result = getBooleanEnvFromEnvObject('MUI_X_TELEMETRY_DEBUG', __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env);
            if (typeof result === 'boolean') {
                return result;
            }
        }
        // e.g. Webpack EnvironmentPlugin
        if (__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.MUI_X_TELEMETRY_DEBUG) {
            const result = getBooleanEnv(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.MUI_X_TELEMETRY_DEBUG);
            if (typeof result === 'boolean') {
                return result;
            }
        }
    } catch (_) {
    // If there is an error, return the default value
    }
    try {
        // e.g. Next.js, webpack EnvironmentPlugin
        const envValue = __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.MUI_X_TELEMETRY_DEBUG || __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_MUI_X_TELEMETRY_DEBUG || __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.GATSBY_MUI_X_TELEMETRY_DEBUG || __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.REACT_APP_MUI_X_TELEMETRY_DEBUG || __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.PUBLIC_MUI_X_TELEMETRY_DEBUG;
        const result = getBooleanEnv(envValue);
        if (typeof result === 'boolean') {
            return result;
        }
    } catch (_) {
    // If there is an error, return the default value
    }
    return false;
}
function getNodeEnv() {
    try {
        return ("TURBOPACK compile-time value", "development") ?? '<unknown>';
    } catch (_) {
        return '<unknown>';
    }
}
let cachedEnv = null;
function getTelemetryEnvConfig(skipCache = false) {
    if (skipCache || !cachedEnv) {
        cachedEnv = {
            NODE_ENV: getNodeEnv(),
            IS_COLLECTING: getIsTelemetryCollecting(),
            DEBUG: getIsDebugModeEnabled()
        };
    }
    return cachedEnv;
}
function getTelemetryEnvConfigValue(key) {
    return getTelemetryEnvConfig()[key];
}
function setTelemetryEnvConfigValue(key, value) {
    getTelemetryEnvConfig()[key] = value;
}
}),
"[project]/project-root/frontend/node_modules/@mui/x-telemetry/esm/runtime/fetcher.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchWithRetry",
    ()=>fetchWithRetry
]);
async function fetchWithRetry(url, options, retries = 3) {
    try {
        const response = await fetch(url, options);
        if (response.ok) {
            return response;
        }
        throw new Error(`Request failed with status ${response.status}`);
    } catch (error) {
        if (retries === 0) {
            throw error;
        }
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(fetchWithRetry(url, options, retries - 1));
            }, Math.random() * 3_000);
        });
    }
}
;
}),
"[project]/project-root/frontend/node_modules/@mui/x-telemetry/esm/runtime/sender.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/project-root/frontend/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@babel/runtime/helpers/esm/extends.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$telemetry$2f$esm$2f$runtime$2f$config$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/x-telemetry/esm/runtime/config.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$telemetry$2f$esm$2f$runtime$2f$fetcher$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/x-telemetry/esm/runtime/fetcher.js [client] (ecmascript)");
;
;
;
const sendMuiXTelemetryRetries = 3;
function shouldSendTelemetry(telemetryContext) {
    // Disable reporting in SSR / Node.js
    if (typeof window === 'undefined') {
        return false;
    }
    // Priority to the config (e.g. in code, env)
    const envIsCollecting = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$telemetry$2f$esm$2f$runtime$2f$config$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getTelemetryEnvConfigValue"])('IS_COLLECTING');
    if (typeof envIsCollecting === 'boolean') {
        return envIsCollecting;
    }
    // Disable collection of the telemetry in CI builds,
    // as it not related to development process
    if (telemetryContext.traits.isCI) {
        return false;
    }
    // Disabled by default
    return false;
}
async function sendMuiXTelemetryEvent(event) {
    try {
        // Disable collection of the telemetry
        // in production environment
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const { default: getTelemetryContext } = await __turbopack_context__.A("[project]/project-root/frontend/node_modules/@mui/x-telemetry/esm/runtime/get-context.js [client] (ecmascript, async loader)");
        const telemetryContext = await getTelemetryContext();
        if (!event || !shouldSendTelemetry(telemetryContext)) {
            return;
        }
        const eventPayload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({}, event, {
            context: (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({}, telemetryContext.traits, event.context)
        });
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$telemetry$2f$esm$2f$runtime$2f$config$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getTelemetryEnvConfigValue"])('DEBUG')) {
            console.log('[mui-x-telemetry] event', JSON.stringify(eventPayload, null, 2));
            return;
        }
        // TODO: batch events and send them in a single request when there will be more
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$telemetry$2f$esm$2f$runtime$2f$fetcher$2e$js__$5b$client$5d$__$28$ecmascript$29$__["fetchWithRetry"])('https://x-telemetry.mui.com/v2/telemetry/record', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Telemetry-Client-Version': "8.19.0" ?? '<dev>',
                'X-Telemetry-Node-Env': ("TURBOPACK compile-time value", "development") ?? '<unknown>'
            },
            body: JSON.stringify([
                eventPayload
            ])
        }, sendMuiXTelemetryRetries);
    } catch (_) {
        console.log('[mui-x-telemetry] error', _);
    }
}
const __TURBOPACK__default__export__ = sendMuiXTelemetryEvent;
}),
"[project]/project-root/frontend/node_modules/@mui/x-telemetry/esm/runtime/settings.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$telemetry$2f$esm$2f$runtime$2f$config$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/x-telemetry/esm/runtime/config.js [client] (ecmascript)");
;
const muiXTelemetrySettings = {
    enableDebug: ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$telemetry$2f$esm$2f$runtime$2f$config$2e$js__$5b$client$5d$__$28$ecmascript$29$__["setTelemetryEnvConfigValue"])('DEBUG', true);
    },
    enableTelemetry: ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$telemetry$2f$esm$2f$runtime$2f$config$2e$js__$5b$client$5d$__$28$ecmascript$29$__["setTelemetryEnvConfigValue"])('IS_COLLECTING', true);
    },
    disableTelemetry: ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$telemetry$2f$esm$2f$runtime$2f$config$2e$js__$5b$client$5d$__$28$ecmascript$29$__["setTelemetryEnvConfigValue"])('IS_COLLECTING', false);
    }
};
const __TURBOPACK__default__export__ = muiXTelemetrySettings;
}),
"[project]/project-root/frontend/node_modules/@mui/x-telemetry/esm/index.js [client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/**
 * @mui/x-telemetry v8.19.0
 *
 * @license SEE LICENSE IN LICENSE
 * This source code is licensed under the SEE LICENSE IN LICENSE license found in the
 * LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "muiXTelemetrySettings",
    ()=>muiXTelemetrySettings,
    "sendMuiXTelemetryEvent",
    ()=>sendMuiXTelemetryEvent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/project-root/frontend/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$telemetry$2f$esm$2f$runtime$2f$events$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/x-telemetry/esm/runtime/events.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$telemetry$2f$esm$2f$runtime$2f$sender$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/x-telemetry/esm/runtime/sender.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$telemetry$2f$esm$2f$runtime$2f$settings$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/x-telemetry/esm/runtime/settings.js [client] (ecmascript)");
;
;
;
const noop = ()=>{};
// To cut unused imports in production as early as possible
const sendMuiXTelemetryEvent = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$telemetry$2f$esm$2f$runtime$2f$sender$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"];
// To cut unused imports in production as early as possible
const muiXTelemetrySettings = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$telemetry$2f$esm$2f$runtime$2f$settings$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"];
;
}),
"[project]/project-root/frontend/node_modules/@mui/x-telemetry/esm/runtime/events.js [client] (ecmascript) <export default as muiXTelemetryEvents>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "muiXTelemetryEvents",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$telemetry$2f$esm$2f$runtime$2f$events$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$telemetry$2f$esm$2f$runtime$2f$events$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/x-telemetry/esm/runtime/events.js [client] (ecmascript)");
}),
"[project]/project-root/frontend/node_modules/@mui/x-license/esm/encoding/base64.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable */ __turbopack_context__.s([
    "base64Decode",
    ()=>base64Decode,
    "base64Encode",
    ()=>base64Encode
]);
const _keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
function utf8Encode(str) {
    for(let n = 0; n < str.length; n++){
        const c = str.charCodeAt(n);
        if (c >= 128) {
            throw new Error('ASCII only support');
        }
    }
    return str;
}
const base64Decode = (input)=>{
    let output = '';
    let chr1, chr2, chr3;
    let enc1, enc2, enc3, enc4;
    let i = 0;
    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');
    while(i < input.length){
        enc1 = _keyStr.indexOf(input.charAt(i++));
        enc2 = _keyStr.indexOf(input.charAt(i++));
        enc3 = _keyStr.indexOf(input.charAt(i++));
        enc4 = _keyStr.indexOf(input.charAt(i++));
        chr1 = enc1 << 2 | enc2 >> 4;
        chr2 = (enc2 & 15) << 4 | enc3 >> 2;
        chr3 = (enc3 & 3) << 6 | enc4;
        output = output + String.fromCharCode(chr1);
        if (enc3 != 64) {
            output = output + String.fromCharCode(chr2);
        }
        if (enc4 != 64) {
            output = output + String.fromCharCode(chr3);
        }
    }
    return output;
};
const base64Encode = (input)=>{
    let output = '';
    let chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    let i = 0;
    input = utf8Encode(input);
    while(i < input.length){
        chr1 = input.charCodeAt(i++);
        chr2 = input.charCodeAt(i++);
        chr3 = input.charCodeAt(i++);
        enc1 = chr1 >> 2;
        enc2 = (chr1 & 3) << 4 | chr2 >> 4;
        enc3 = (chr2 & 15) << 2 | chr3 >> 6;
        enc4 = chr3 & 63;
        if (isNaN(chr2)) {
            enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
            enc4 = 64;
        }
        output = output + _keyStr.charAt(enc1) + _keyStr.charAt(enc2) + _keyStr.charAt(enc3) + _keyStr.charAt(enc4);
    }
    return output;
};
}),
"[project]/project-root/frontend/node_modules/@mui/x-license/esm/encoding/md5.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable */ // See "precomputation" in notes
__turbopack_context__.s([
    "md5",
    ()=>md5
]);
const k = [];
let i = 0;
for(; i < 64;){
    k[i] = 0 | Math.sin(++i % Math.PI) * 4294967296;
// k[i] = 0 | (Math.abs(Math.sin(++i)) * 4294967296);
}
function md5(s) {
    const words = [];
    let b, c, d, j = unescape(encodeURI(s)) + '\x80', a = j.length;
    const h = [
        b = 0x67452301,
        c = 0xefcdab89,
        ~b,
        ~c
    ];
    s = --a / 4 + 2 | 15;
    // See "Length bits" in notes
    words[--s] = a * 8;
    for(; ~a;){
        // a !== -1
        words[a >> 2] |= j.charCodeAt(a) << 8 * a--;
    }
    for(i = j = 0; i < s; i += 16){
        a = h;
        for(; j < 64; a = [
            d = a[3],
            b + ((d = a[0] + [
                b & c | ~b & d,
                d & b | ~d & c,
                b ^ c ^ d,
                c ^ (b | ~d)
            ][a = j >> 4] + k[j] + ~~words[i | [
                j,
                5 * j + 1,
                3 * j + 5,
                7 * j
            ][a] & 15]) << (a = [
                7,
                12,
                17,
                22,
                5,
                9,
                14,
                20,
                4,
                11,
                16,
                23,
                6,
                10,
                15,
                21
            ][4 * a + j++ % 4]) | d >>> -a),
            b,
            c
        ]){
            b = a[1] | 0;
            c = a[2];
        }
        // See "Integer safety" in notes
        for(j = 4; j;)h[--j] += a[j];
    // j === 0
    }
    for(s = ''; j < 32;){
        s += (h[j >> 3] >> (1 ^ j++) * 4 & 15).toString(16);
    // s += ((h[j >> 3] >> (4 ^ 4 * j++)) & 15).toString(16);
    }
    return s;
}
}),
"[project]/project-root/frontend/node_modules/@mui/x-license/esm/utils/licenseStatus.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// eslint-disable-next-line @typescript-eslint/naming-convention
__turbopack_context__.s([
    "LICENSE_STATUS",
    ()=>LICENSE_STATUS
]);
let LICENSE_STATUS = /*#__PURE__*/ function(LICENSE_STATUS) {
    LICENSE_STATUS["NotFound"] = "NotFound";
    LICENSE_STATUS["Invalid"] = "Invalid";
    LICENSE_STATUS["ExpiredAnnual"] = "ExpiredAnnual";
    LICENSE_STATUS["ExpiredAnnualGrace"] = "ExpiredAnnualGrace";
    LICENSE_STATUS["ExpiredVersion"] = "ExpiredVersion";
    LICENSE_STATUS["Valid"] = "Valid";
    LICENSE_STATUS["OutOfScope"] = "OutOfScope";
    LICENSE_STATUS["NotAvailableInInitialProPlan"] = "NotAvailableInInitialProPlan";
    return LICENSE_STATUS;
}({});
}),
"[project]/project-root/frontend/node_modules/@mui/x-license/esm/utils/plan.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PLAN_SCOPES",
    ()=>PLAN_SCOPES,
    "PLAN_VERSIONS",
    ()=>PLAN_VERSIONS
]);
const PLAN_SCOPES = [
    'pro',
    'premium'
];
const PLAN_VERSIONS = [
    'initial',
    'Q3-2024'
];
}),
"[project]/project-root/frontend/node_modules/@mui/x-license/esm/utils/licenseModel.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LICENSE_MODELS",
    ()=>LICENSE_MODELS
]);
const LICENSE_MODELS = [
    /**
 * A license is outdated if the current version of the software was released after the expiry date of the license.
 * But the license can be used indefinitely with an older version of the software.
 */ 'perpetual',
    /**
 * On development, a license is outdated if the expiry date has been reached
 * On production, a license is outdated if the current version of the software was released after the expiry date of the license (see "perpetual")
 */ 'annual',
    /**
 * Legacy. The previous name for 'annual'.
 * Can be removed once old license keys generated with 'subscription' are no longer supported.
 * To support for a while. We need more years of backward support and we sell multi year licenses.
 */ 'subscription'
];
}),
"[project]/project-root/frontend/node_modules/@mui/x-license/esm/verifyLicense/verifyLicense.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateReleaseInfo",
    ()=>generateReleaseInfo,
    "verifyLicense",
    ()=>verifyLicense
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/project-root/frontend/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$license$2f$esm$2f$encoding$2f$base64$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/x-license/esm/encoding/base64.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$license$2f$esm$2f$encoding$2f$md5$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/x-license/esm/encoding/md5.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$license$2f$esm$2f$utils$2f$licenseStatus$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/x-license/esm/utils/licenseStatus.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$license$2f$esm$2f$utils$2f$plan$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/x-license/esm/utils/plan.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$license$2f$esm$2f$utils$2f$licenseModel$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/x-license/esm/utils/licenseModel.js [client] (ecmascript)");
;
;
;
;
;
const getDefaultReleaseDate = ()=>{
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return today;
};
function generateReleaseInfo(releaseDate = getDefaultReleaseDate()) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$license$2f$esm$2f$encoding$2f$base64$2e$js__$5b$client$5d$__$28$ecmascript$29$__["base64Encode"])(releaseDate.getTime().toString());
}
function isPlanScopeSufficient(packageName, planScope) {
    let acceptedScopes;
    if (packageName.includes('-pro')) {
        acceptedScopes = [
            'pro',
            'premium'
        ];
    } else if (packageName.includes('-premium')) {
        acceptedScopes = [
            'premium'
        ];
    } else {
        acceptedScopes = [];
    }
    return acceptedScopes.includes(planScope);
}
const expiryReg = /^.*EXPIRY=([0-9]+),.*$/;
const orderReg = /^.*ORDER:([0-9]+),.*$/;
const PRO_PACKAGES_AVAILABLE_IN_INITIAL_PRO_PLAN = [
    'x-data-grid-pro',
    'x-date-pickers-pro'
];
/**
 * Format: ORDER:${orderNumber},EXPIRY=${expiryTimestamp},KEYVERSION=1
 */ function decodeLicenseVersion1(license) {
    let expiryTimestamp;
    let orderId;
    try {
        expiryTimestamp = parseInt(license.match(expiryReg)[1], 10);
        if (!expiryTimestamp || Number.isNaN(expiryTimestamp)) {
            expiryTimestamp = null;
        }
        orderId = parseInt(license.match(orderReg)[1], 10);
        if (!orderId || Number.isNaN(orderId)) {
            orderId = null;
        }
    } catch (err) {
        expiryTimestamp = null;
        orderId = null;
    }
    return {
        version: 1,
        licenseModel: 'perpetual',
        planScope: 'pro',
        planVersion: 'initial',
        expiryTimestamp,
        expiryDate: expiryTimestamp ? new Date(expiryTimestamp) : null,
        orderId
    };
}
/**
 * Format: O=${orderNumber},E=${expiryTimestamp},S=${planScope},LM=${licenseModel},PV=${planVersion},KV=2`;
 */ function decodeLicenseVersion2(license) {
    const licenseInfo = {
        version: 2,
        licenseModel: null,
        planScope: null,
        planVersion: 'initial',
        expiryTimestamp: null,
        expiryDate: null,
        orderId: null
    };
    license.split(',').map((token)=>token.split('=')).filter((el)=>el.length === 2).forEach(([key, value])=>{
        if (key === 'S') {
            licenseInfo.planScope = value;
        }
        if (key === 'LM') {
            licenseInfo.licenseModel = value;
        }
        if (key === 'E') {
            const expiryTimestamp = parseInt(value, 10);
            if (expiryTimestamp && !Number.isNaN(expiryTimestamp)) {
                licenseInfo.expiryTimestamp = expiryTimestamp;
                licenseInfo.expiryDate = new Date(expiryTimestamp);
            }
        }
        if (key === 'PV') {
            licenseInfo.planVersion = value;
        }
        if (key === 'O') {
            const orderNum = parseInt(value, 10);
            if (orderNum && !Number.isNaN(orderNum)) {
                licenseInfo.orderId = orderNum;
            }
        }
    });
    return licenseInfo;
}
/**
 * Decode the license based on its key version and return a version-agnostic `MuiLicense` object.
 */ function decodeLicense(encodedLicense) {
    const license = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$license$2f$esm$2f$encoding$2f$base64$2e$js__$5b$client$5d$__$28$ecmascript$29$__["base64Decode"])(encodedLicense);
    if (license.includes('KEYVERSION=1')) {
        return decodeLicenseVersion1(license);
    }
    if (license.includes('KV=2')) {
        return decodeLicenseVersion2(license);
    }
    return null;
}
function verifyLicense({ releaseInfo, licenseKey, packageName }) {
    // Gets replaced at build time
    // @ts-ignore
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if (!releaseInfo) {
        throw new Error('MUI X: The release information is missing. Not able to validate license.');
    }
    if (!licenseKey) {
        return {
            status: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$license$2f$esm$2f$utils$2f$licenseStatus$2e$js__$5b$client$5d$__$28$ecmascript$29$__["LICENSE_STATUS"].NotFound
        };
    }
    const hash = licenseKey.substr(0, 32);
    const encoded = licenseKey.substr(32);
    if (hash !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$license$2f$esm$2f$encoding$2f$md5$2e$js__$5b$client$5d$__$28$ecmascript$29$__["md5"])(encoded)) {
        return {
            status: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$license$2f$esm$2f$utils$2f$licenseStatus$2e$js__$5b$client$5d$__$28$ecmascript$29$__["LICENSE_STATUS"].Invalid
        };
    }
    const license = decodeLicense(encoded);
    if (license == null) {
        console.error('MUI X: Error checking license. Key version not found!');
        return {
            status: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$license$2f$esm$2f$utils$2f$licenseStatus$2e$js__$5b$client$5d$__$28$ecmascript$29$__["LICENSE_STATUS"].Invalid
        };
    }
    if (license.licenseModel == null || !__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$license$2f$esm$2f$utils$2f$licenseModel$2e$js__$5b$client$5d$__$28$ecmascript$29$__["LICENSE_MODELS"].includes(license.licenseModel)) {
        console.error('MUI X: Error checking license. License model not found or invalid!');
        return {
            status: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$license$2f$esm$2f$utils$2f$licenseStatus$2e$js__$5b$client$5d$__$28$ecmascript$29$__["LICENSE_STATUS"].Invalid
        };
    }
    if (license.expiryTimestamp == null) {
        console.error('MUI X: Error checking license. Expiry timestamp not found or invalid!');
        return {
            status: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$license$2f$esm$2f$utils$2f$licenseStatus$2e$js__$5b$client$5d$__$28$ecmascript$29$__["LICENSE_STATUS"].Invalid
        };
    }
    if (license.licenseModel === 'perpetual' || ("TURBOPACK compile-time value", "development") === 'production') {
        const pkgTimestamp = parseInt((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$license$2f$esm$2f$encoding$2f$base64$2e$js__$5b$client$5d$__$28$ecmascript$29$__["base64Decode"])(releaseInfo), 10);
        if (Number.isNaN(pkgTimestamp)) {
            throw new Error('MUI X: The release information is invalid. Not able to validate license.');
        }
        if (license.expiryTimestamp < pkgTimestamp) {
            return {
                status: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$license$2f$esm$2f$utils$2f$licenseStatus$2e$js__$5b$client$5d$__$28$ecmascript$29$__["LICENSE_STATUS"].ExpiredVersion
            };
        }
    } else if (license.licenseModel === 'subscription' || license.licenseModel === 'annual') {
        if (new Date().getTime() > license.expiryTimestamp) {
            if (// 30 days grace
            new Date().getTime() < license.expiryTimestamp + 1000 * 3600 * 24 * 30 || ("TURBOPACK compile-time value", "development") !== 'development') {
                return {
                    status: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$license$2f$esm$2f$utils$2f$licenseStatus$2e$js__$5b$client$5d$__$28$ecmascript$29$__["LICENSE_STATUS"].ExpiredAnnualGrace,
                    meta: {
                        expiryTimestamp: license.expiryTimestamp,
                        licenseKey
                    }
                };
            }
            return {
                status: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$license$2f$esm$2f$utils$2f$licenseStatus$2e$js__$5b$client$5d$__$28$ecmascript$29$__["LICENSE_STATUS"].ExpiredAnnual,
                meta: {
                    expiryTimestamp: license.expiryTimestamp,
                    licenseKey
                }
            };
        }
    }
    if (license.planScope == null || !__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$license$2f$esm$2f$utils$2f$plan$2e$js__$5b$client$5d$__$28$ecmascript$29$__["PLAN_SCOPES"].includes(license.planScope)) {
        console.error('MUI X: Error checking license. planScope not found or invalid!');
        return {
            status: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$license$2f$esm$2f$utils$2f$licenseStatus$2e$js__$5b$client$5d$__$28$ecmascript$29$__["LICENSE_STATUS"].Invalid
        };
    }
    if (!isPlanScopeSufficient(packageName, license.planScope)) {
        return {
            status: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$license$2f$esm$2f$utils$2f$licenseStatus$2e$js__$5b$client$5d$__$28$ecmascript$29$__["LICENSE_STATUS"].OutOfScope
        };
    }
    // 'charts-pro' or 'tree-view-pro' can only be used with a newer Pro license
    if (license.planVersion === 'initial' && license.planScope === 'pro' && !PRO_PACKAGES_AVAILABLE_IN_INITIAL_PRO_PLAN.includes(packageName)) {
        return {
            status: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$license$2f$esm$2f$utils$2f$licenseStatus$2e$js__$5b$client$5d$__$28$ecmascript$29$__["LICENSE_STATUS"].NotAvailableInInitialProPlan
        };
    }
    return {
        status: __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$license$2f$esm$2f$utils$2f$licenseStatus$2e$js__$5b$client$5d$__$28$ecmascript$29$__["LICENSE_STATUS"].Valid
    };
}
}),
"[project]/project-root/frontend/node_modules/@mui/x-license/esm/utils/licenseInfo.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @ignore - do not document.
 */ // Store the license information in a global, so it can be shared
// when module duplication occurs. The duplication of the modules can happen
// if using multiple version of MUI X at the same time of the bundler
// decide to duplicate to improve the size of the chunks.
// eslint-disable-next-line no-underscore-dangle
__turbopack_context__.s([
    "LicenseInfo",
    ()=>LicenseInfo
]);
globalThis.__MUI_LICENSE_INFO__ = globalThis.__MUI_LICENSE_INFO__ || {
    key: undefined
};
class LicenseInfo {
    static getLicenseInfo() {
        // eslint-disable-next-line no-underscore-dangle
        return globalThis.__MUI_LICENSE_INFO__;
    }
    static getLicenseKey() {
        return LicenseInfo.getLicenseInfo().key;
    }
    static setLicenseKey(key) {
        const licenseInfo = LicenseInfo.getLicenseInfo();
        licenseInfo.key = key;
    }
}
}),
"[project]/project-root/frontend/node_modules/@mui/x-license/esm/utils/licenseErrorMessageUtils.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Workaround for the codesadbox preview error.
 *
 * Once these issues are resolved
 * https://github.com/mui/mui-x/issues/15765
 * https://github.com/codesandbox/codesandbox-client/issues/8673
 *
 * `showError` can simply use `console.error` again.
 */ __turbopack_context__.s([
    "showExpiredAnnualGraceLicenseKeyError",
    ()=>showExpiredAnnualGraceLicenseKeyError,
    "showExpiredAnnualLicenseKeyError",
    ()=>showExpiredAnnualLicenseKeyError,
    "showExpiredPackageVersionError",
    ()=>showExpiredPackageVersionError,
    "showInvalidLicenseKeyError",
    ()=>showInvalidLicenseKeyError,
    "showLicenseKeyPlanMismatchError",
    ()=>showLicenseKeyPlanMismatchError,
    "showMissingLicenseKeyError",
    ()=>showMissingLicenseKeyError,
    "showNotAvailableInInitialProPlanError",
    ()=>showNotAvailableInInitialProPlanError
]);
const isCodeSandbox = typeof window !== 'undefined' && window.location.hostname.endsWith('.csb.app');
function showError(message) {
    // eslint-disable-next-line no-console
    const logger = isCodeSandbox ? console.log : console.error;
    logger([
        '*************************************************************',
        '',
        ...message,
        '',
        '*************************************************************'
    ].join('\n'));
}
function showInvalidLicenseKeyError() {
    showError([
        'MUI X: Invalid license key.',
        '',
        "Your MUI X license key format isn't valid. It could be because the license key is missing a character or has a typo.",
        '',
        'To solve the issue, you need to double check that `setLicenseKey()` is called with the right argument',
        'Please check the license key installation https://mui.com/r/x-license-key-installation.'
    ]);
}
function showLicenseKeyPlanMismatchError({ packageName }) {
    const rootPackageName = packageName.replace(/-(premium|pro)$/, '');
    showError([
        'MUI X: License key plan mismatch.',
        '',
        'Your use of MUI X is not compatible with the plan of your license key. The feature you are trying to use is not included in the plan of your license key. This happens if you try to use Data Grid Premium with a license key for the Pro plan.',
        '',
        'To solve the issue, you can upgrade your plan from Pro to Premium at https://mui.com/r/x-get-license?scope=premium.',
        `Or if you didn't intend to use Premium features, you can replace the import of \`${rootPackageName}-premium\` with \`${rootPackageName}-pro\`.`
    ]);
}
function showNotAvailableInInitialProPlanError() {
    showError([
        'MUI X: Component not included in your license.',
        '',
        'The component you are trying to use is not included in the Pro Plan you purchased.',
        '',
        'Your license is from an old version of the Pro Plan that is only compatible with the `@mui/x-data-grid-pro` and `@mui/x-date-pickers-pro` commercial packages.',
        '',
        'To start using another Pro package, please consider reaching to our sales team to upgrade your license or visit https://mui.com/r/x-get-license to get a new license key.'
    ]);
}
function showMissingLicenseKeyError({ plan, packageName }) {
    showError([
        'MUI X: Missing license key.',
        '',
        `The license key is missing. You might not be allowed to use \`${packageName}\` which is part of MUI X ${plan}.`,
        '',
        'To solve the issue, you can check the free trial conditions: https://mui.com/r/x-license-trial.',
        'If you are eligible no actions are required. If you are not eligible to the free trial, you need to purchase a license https://mui.com/r/x-get-license or stop using the software immediately.'
    ]);
}
function showExpiredPackageVersionError({ packageName }) {
    showError([
        'MUI X: Expired package version.',
        '',
        `You have installed a version of \`${packageName}\` that is outside of the maintenance plan of your license key. By default, commercial licenses provide access to new versions released during the first year after the purchase.`,
        '',
        'To solve the issue, you can renew your license https://mui.com/r/x-get-license or install an older version of the npm package that is compatible with your license key.'
    ]);
}
function showExpiredAnnualGraceLicenseKeyError({ plan, licenseKey, expiryTimestamp }) {
    showError([
        'MUI X: Expired license key.',
        '',
        `Your annual license key to use MUI X ${plan} in non-production environments has expired. If you are seeing this development console message, you might be close to breach the license terms by making direct or indirect changes to the frontend of an app that render a MUI X ${plan} component (more details in https://mui.com/r/x-license-annual).`,
        '',
        'To solve the problem you can either:',
        '',
        '- Renew your license https://mui.com/r/x-get-license and use the new key',
        `- Stop making changes to code depending directly or indirectly on MUI X ${plan}'s APIs`,
        '',
        'Note that your license is perpetual in production environments with any version released before your license term ends.',
        '',
        `- License key expiry timestamp: ${new Date(expiryTimestamp)}`,
        `- Installed license key: ${licenseKey}`,
        ''
    ]);
}
function showExpiredAnnualLicenseKeyError({ plan, licenseKey, expiryTimestamp }) {
    throw new Error([
        'MUI X: Expired license key.',
        '',
        `Your annual license key to use MUI X ${plan} in non-production environments has expired. If you are seeing this development console message, you might be close to breach the license terms by making direct or indirect changes to the frontend of an app that render a MUI X ${plan} component (more details in https://mui.com/r/x-license-annual).`,
        '',
        'To solve the problem you can either:',
        '',
        '- Renew your license https://mui.com/r/x-get-license and use the new key',
        `- Stop making changes to code depending directly or indirectly on MUI X ${plan}'s APIs`,
        '',
        'Note that your license is perpetual in production environments with any version released before your license term ends.',
        '',
        `- License key expiry timestamp: ${new Date(expiryTimestamp)}`,
        `- Installed license key: ${licenseKey}`,
        ''
    ].join('\n'));
}
}),
"[project]/project-root/frontend/node_modules/@mui/x-license/esm/Unstable_LicenseInfoProvider/MuiLicenseInfoContext.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/project-root/frontend/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/react/index.js [client] (ecmascript)");
'use client';
;
const MuiLicenseInfoContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createContext"]({
    key: undefined
});
if ("TURBOPACK compile-time truthy", 1) MuiLicenseInfoContext.displayName = "MuiLicenseInfoContext";
const __TURBOPACK__default__export__ = MuiLicenseInfoContext;
}),
"[project]/project-root/frontend/node_modules/@mui/x-license/esm/useLicenseVerifier/useLicenseVerifier.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearLicenseStatusCache",
    ()=>clearLicenseStatusCache,
    "sharedLicenseStatuses",
    ()=>sharedLicenseStatuses,
    "useLicenseVerifier",
    ()=>useLicenseVerifier
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/project-root/frontend/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@babel/runtime/helpers/esm/extends.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$telemetry$2f$esm$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/x-telemetry/esm/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$telemetry$2f$esm$2f$runtime$2f$events$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__muiXTelemetryEvents$3e$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/x-telemetry/esm/runtime/events.js [client] (ecmascript) <export default as muiXTelemetryEvents>");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$license$2f$esm$2f$verifyLicense$2f$verifyLicense$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/x-license/esm/verifyLicense/verifyLicense.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$license$2f$esm$2f$utils$2f$licenseInfo$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/x-license/esm/utils/licenseInfo.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$license$2f$esm$2f$utils$2f$licenseErrorMessageUtils$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/x-license/esm/utils/licenseErrorMessageUtils.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$license$2f$esm$2f$utils$2f$licenseStatus$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/x-license/esm/utils/licenseStatus.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$license$2f$esm$2f$Unstable_LicenseInfoProvider$2f$MuiLicenseInfoContext$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/x-license/esm/Unstable_LicenseInfoProvider/MuiLicenseInfoContext.js [client] (ecmascript)");
;
;
;
;
;
;
;
;
const sharedLicenseStatuses = {};
function clearLicenseStatusCache() {
    for(const packageName in sharedLicenseStatuses){
        if (Object.prototype.hasOwnProperty.call(sharedLicenseStatuses, packageName)) {
            delete sharedLicenseStatuses[packageName];
        }
    }
}
function useLicenseVerifier(packageName, releaseInfo) {
    const { key: contextKey } = __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$license$2f$esm$2f$Unstable_LicenseInfoProvider$2f$MuiLicenseInfoContext$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useLicenseVerifier.useMemo": ()=>{
            const licenseKey = contextKey ?? __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$license$2f$esm$2f$utils$2f$licenseInfo$2e$js__$5b$client$5d$__$28$ecmascript$29$__["LicenseInfo"].getLicenseKey();
            // Cache the response to not trigger the error twice.
            if (sharedLicenseStatuses[packageName] && sharedLicenseStatuses[packageName].key === licenseKey) {
                return sharedLicenseStatuses[packageName].licenseVerifier;
            }
            const plan = packageName.includes('premium') ? 'Premium' : 'Pro';
            const licenseStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$license$2f$esm$2f$verifyLicense$2f$verifyLicense$2e$js__$5b$client$5d$__$28$ecmascript$29$__["verifyLicense"])({
                releaseInfo,
                licenseKey,
                packageName
            });
            const fullPackageName = `@mui/${packageName}`;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$telemetry$2f$esm$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["sendMuiXTelemetryEvent"])(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$telemetry$2f$esm$2f$runtime$2f$events$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__muiXTelemetryEvents$3e$__["muiXTelemetryEvents"].licenseVerification({
                licenseKey
            }, {
                packageName,
                packageReleaseInfo: releaseInfo,
                licenseStatus: licenseStatus?.status
            }));
            if (licenseStatus.status === __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$license$2f$esm$2f$utils$2f$licenseStatus$2e$js__$5b$client$5d$__$28$ecmascript$29$__["LICENSE_STATUS"].Valid) {
            // Skip
            } else if (licenseStatus.status === __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$license$2f$esm$2f$utils$2f$licenseStatus$2e$js__$5b$client$5d$__$28$ecmascript$29$__["LICENSE_STATUS"].Invalid) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$license$2f$esm$2f$utils$2f$licenseErrorMessageUtils$2e$js__$5b$client$5d$__$28$ecmascript$29$__["showInvalidLicenseKeyError"])();
            } else if (licenseStatus.status === __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$license$2f$esm$2f$utils$2f$licenseStatus$2e$js__$5b$client$5d$__$28$ecmascript$29$__["LICENSE_STATUS"].NotAvailableInInitialProPlan) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$license$2f$esm$2f$utils$2f$licenseErrorMessageUtils$2e$js__$5b$client$5d$__$28$ecmascript$29$__["showNotAvailableInInitialProPlanError"])();
            } else if (licenseStatus.status === __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$license$2f$esm$2f$utils$2f$licenseStatus$2e$js__$5b$client$5d$__$28$ecmascript$29$__["LICENSE_STATUS"].OutOfScope) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$license$2f$esm$2f$utils$2f$licenseErrorMessageUtils$2e$js__$5b$client$5d$__$28$ecmascript$29$__["showLicenseKeyPlanMismatchError"])({
                    packageName: fullPackageName
                });
            } else if (licenseStatus.status === __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$license$2f$esm$2f$utils$2f$licenseStatus$2e$js__$5b$client$5d$__$28$ecmascript$29$__["LICENSE_STATUS"].NotFound) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$license$2f$esm$2f$utils$2f$licenseErrorMessageUtils$2e$js__$5b$client$5d$__$28$ecmascript$29$__["showMissingLicenseKeyError"])({
                    plan,
                    packageName: fullPackageName
                });
            } else if (licenseStatus.status === __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$license$2f$esm$2f$utils$2f$licenseStatus$2e$js__$5b$client$5d$__$28$ecmascript$29$__["LICENSE_STATUS"].ExpiredAnnualGrace) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$license$2f$esm$2f$utils$2f$licenseErrorMessageUtils$2e$js__$5b$client$5d$__$28$ecmascript$29$__["showExpiredAnnualGraceLicenseKeyError"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({
                    plan
                }, licenseStatus.meta));
            } else if (licenseStatus.status === __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$license$2f$esm$2f$utils$2f$licenseStatus$2e$js__$5b$client$5d$__$28$ecmascript$29$__["LICENSE_STATUS"].ExpiredAnnual) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$license$2f$esm$2f$utils$2f$licenseErrorMessageUtils$2e$js__$5b$client$5d$__$28$ecmascript$29$__["showExpiredAnnualLicenseKeyError"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({
                    plan
                }, licenseStatus.meta));
            } else if (licenseStatus.status === __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$license$2f$esm$2f$utils$2f$licenseStatus$2e$js__$5b$client$5d$__$28$ecmascript$29$__["LICENSE_STATUS"].ExpiredVersion) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$license$2f$esm$2f$utils$2f$licenseErrorMessageUtils$2e$js__$5b$client$5d$__$28$ecmascript$29$__["showExpiredPackageVersionError"])({
                    packageName: fullPackageName
                });
            } else if ("TURBOPACK compile-time truthy", 1) {
                throw new Error('missing status handler');
            }
            sharedLicenseStatuses[packageName] = {
                key: licenseKey,
                licenseVerifier: licenseStatus
            };
            return licenseStatus;
        }
    }["useLicenseVerifier.useMemo"], [
        packageName,
        releaseInfo,
        contextKey
    ]);
}
}),
"[project]/project-root/frontend/node_modules/@mui/x-license/esm/Watermark/Watermark.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Watermark",
    ()=>MemoizedWatermark
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$internals$2f$esm$2f$fastMemo$2f$fastMemo$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/x-internals/esm/fastMemo/fastMemo.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$license$2f$esm$2f$useLicenseVerifier$2f$useLicenseVerifier$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/x-license/esm/useLicenseVerifier/useLicenseVerifier.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$license$2f$esm$2f$utils$2f$licenseStatus$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/x-license/esm/utils/licenseStatus.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/react/jsx-runtime.js [client] (ecmascript)");
;
;
;
;
function getLicenseErrorMessage(licenseStatus) {
    switch(licenseStatus){
        case __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$license$2f$esm$2f$utils$2f$licenseStatus$2e$js__$5b$client$5d$__$28$ecmascript$29$__["LICENSE_STATUS"].ExpiredAnnualGrace:
        case __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$license$2f$esm$2f$utils$2f$licenseStatus$2e$js__$5b$client$5d$__$28$ecmascript$29$__["LICENSE_STATUS"].ExpiredAnnual:
            return 'MUI X Expired license key';
        case __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$license$2f$esm$2f$utils$2f$licenseStatus$2e$js__$5b$client$5d$__$28$ecmascript$29$__["LICENSE_STATUS"].ExpiredVersion:
            return 'MUI X Expired package version';
        case __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$license$2f$esm$2f$utils$2f$licenseStatus$2e$js__$5b$client$5d$__$28$ecmascript$29$__["LICENSE_STATUS"].Invalid:
            return 'MUI X Invalid license key';
        case __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$license$2f$esm$2f$utils$2f$licenseStatus$2e$js__$5b$client$5d$__$28$ecmascript$29$__["LICENSE_STATUS"].OutOfScope:
            return 'MUI X License key plan mismatch';
        case __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$license$2f$esm$2f$utils$2f$licenseStatus$2e$js__$5b$client$5d$__$28$ecmascript$29$__["LICENSE_STATUS"].NotAvailableInInitialProPlan:
            return 'MUI X Product not covered by plan';
        case __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$license$2f$esm$2f$utils$2f$licenseStatus$2e$js__$5b$client$5d$__$28$ecmascript$29$__["LICENSE_STATUS"].NotFound:
            return 'MUI X Missing license key';
        default:
            throw new Error('Unhandled MUI X license status.');
    }
}
function Watermark(props) {
    const { packageName, releaseInfo } = props;
    const licenseStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$license$2f$esm$2f$useLicenseVerifier$2f$useLicenseVerifier$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useLicenseVerifier"])(packageName, releaseInfo);
    if (licenseStatus.status === __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$license$2f$esm$2f$utils$2f$licenseStatus$2e$js__$5b$client$5d$__$28$ecmascript$29$__["LICENSE_STATUS"].Valid) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        style: {
            position: 'absolute',
            pointerEvents: 'none',
            color: '#8282829e',
            zIndex: 100000,
            width: '100%',
            textAlign: 'center',
            bottom: '50%',
            right: 0,
            letterSpacing: 5,
            fontSize: 24
        },
        children: getLicenseErrorMessage(licenseStatus.status)
    });
}
const MemoizedWatermark = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$internals$2f$esm$2f$fastMemo$2f$fastMemo$2e$js__$5b$client$5d$__$28$ecmascript$29$__["fastMemo"])(Watermark);
;
}),
"[project]/project-root/frontend/node_modules/dom-helpers/esm/hasClass.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Checks if a given element has a CSS class.
 * 
 * @param element the element
 * @param className the CSS class name
 */ __turbopack_context__.s([
    "default",
    ()=>hasClass
]);
function hasClass(element, className) {
    if (element.classList) return !!className && element.classList.contains(className);
    return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}
}),
"[project]/project-root/frontend/node_modules/dom-helpers/esm/addClass.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>addClass
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$hasClass$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/dom-helpers/esm/hasClass.js [client] (ecmascript)");
;
function addClass(element, className) {
    if (element.classList) element.classList.add(className);
    else if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$hasClass$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;
    else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
}
}),
"[project]/project-root/frontend/node_modules/dom-helpers/esm/removeClass.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>removeClass
]);
function replaceClassName(origClass, classToRemove) {
    return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}
function removeClass(element, className) {
    if (element.classList) {
        element.classList.remove(className);
    } else if (typeof element.className === 'string') {
        element.className = replaceClassName(element.className, className);
    } else {
        element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
    }
}
}),
"[project]/project-root/frontend/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/project-root/frontend/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function is(x, y) {
        return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
    }
    function useSyncExternalStore$2(subscribe, getSnapshot) {
        didWarnOld18Alpha || void 0 === React.startTransition || (didWarnOld18Alpha = !0, console.error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
        var value = getSnapshot();
        if (!didWarnUncachedGetSnapshot) {
            var cachedValue = getSnapshot();
            objectIs(value, cachedValue) || (console.error("The result of getSnapshot should be cached to avoid an infinite loop"), didWarnUncachedGetSnapshot = !0);
        }
        cachedValue = useState({
            inst: {
                value: value,
                getSnapshot: getSnapshot
            }
        });
        var inst = cachedValue[0].inst, forceUpdate = cachedValue[1];
        useLayoutEffect({
            "useSyncExternalStore$2.useLayoutEffect": function() {
                inst.value = value;
                inst.getSnapshot = getSnapshot;
                checkIfSnapshotChanged(inst) && forceUpdate({
                    inst: inst
                });
            }
        }["useSyncExternalStore$2.useLayoutEffect"], [
            subscribe,
            value,
            getSnapshot
        ]);
        useEffect({
            "useSyncExternalStore$2.useEffect": function() {
                checkIfSnapshotChanged(inst) && forceUpdate({
                    inst: inst
                });
                return subscribe({
                    "useSyncExternalStore$2.useEffect": function() {
                        checkIfSnapshotChanged(inst) && forceUpdate({
                            inst: inst
                        });
                    }
                }["useSyncExternalStore$2.useEffect"]);
            }
        }["useSyncExternalStore$2.useEffect"], [
            subscribe
        ]);
        useDebugValue(value);
        return value;
    }
    function checkIfSnapshotChanged(inst) {
        var latestGetSnapshot = inst.getSnapshot;
        inst = inst.value;
        try {
            var nextValue = latestGetSnapshot();
            return !objectIs(inst, nextValue);
        } catch (error) {
            return !0;
        }
    }
    function useSyncExternalStore$1(subscribe, getSnapshot) {
        return getSnapshot();
    }
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var React = __turbopack_context__.r("[project]/project-root/frontend/node_modules/react/index.js [client] (ecmascript)"), objectIs = "function" === typeof Object.is ? Object.is : is, useState = React.useState, useEffect = React.useEffect, useLayoutEffect = React.useLayoutEffect, useDebugValue = React.useDebugValue, didWarnOld18Alpha = !1, didWarnUncachedGetSnapshot = !1, shim = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1 : useSyncExternalStore$2;
    exports.useSyncExternalStore = void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim;
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
}();
}),
"[project]/project-root/frontend/node_modules/use-sync-external-store/shim/index.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/project-root/frontend/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/project-root/frontend/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js [client] (ecmascript)");
}
}),
"[project]/project-root/frontend/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/project-root/frontend/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function is(x, y) {
        return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
    }
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var React = __turbopack_context__.r("[project]/project-root/frontend/node_modules/react/index.js [client] (ecmascript)"), shim = __turbopack_context__.r("[project]/project-root/frontend/node_modules/use-sync-external-store/shim/index.js [client] (ecmascript)"), objectIs = "function" === typeof Object.is ? Object.is : is, useSyncExternalStore = shim.useSyncExternalStore, useRef = React.useRef, useEffect = React.useEffect, useMemo = React.useMemo, useDebugValue = React.useDebugValue;
    exports.useSyncExternalStoreWithSelector = function(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
        var instRef = useRef(null);
        if (null === instRef.current) {
            var inst = {
                hasValue: !1,
                value: null
            };
            instRef.current = inst;
        } else inst = instRef.current;
        instRef = useMemo(function() {
            function memoizedSelector(nextSnapshot) {
                if (!hasMemo) {
                    hasMemo = !0;
                    memoizedSnapshot = nextSnapshot;
                    nextSnapshot = selector(nextSnapshot);
                    if (void 0 !== isEqual && inst.hasValue) {
                        var currentSelection = inst.value;
                        if (isEqual(currentSelection, nextSnapshot)) return memoizedSelection = currentSelection;
                    }
                    return memoizedSelection = nextSnapshot;
                }
                currentSelection = memoizedSelection;
                if (objectIs(memoizedSnapshot, nextSnapshot)) return currentSelection;
                var nextSelection = selector(nextSnapshot);
                if (void 0 !== isEqual && isEqual(currentSelection, nextSelection)) return memoizedSnapshot = nextSnapshot, currentSelection;
                memoizedSnapshot = nextSnapshot;
                return memoizedSelection = nextSelection;
            }
            var hasMemo = !1, memoizedSnapshot, memoizedSelection, maybeGetServerSnapshot = void 0 === getServerSnapshot ? null : getServerSnapshot;
            return [
                function() {
                    return memoizedSelector(getSnapshot());
                },
                null === maybeGetServerSnapshot ? void 0 : function() {
                    return memoizedSelector(maybeGetServerSnapshot());
                }
            ];
        }, [
            getSnapshot,
            getServerSnapshot,
            selector,
            isEqual
        ]);
        var value = useSyncExternalStore(subscribe, instRef[0], instRef[1]);
        useEffect(function() {
            inst.hasValue = !0;
            inst.value = value;
        }, [
            value
        ]);
        useDebugValue(value);
        return value;
    };
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
}();
}),
"[project]/project-root/frontend/node_modules/use-sync-external-store/shim/with-selector.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/project-root/frontend/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/project-root/frontend/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js [client] (ecmascript)");
}
}),
"[project]/project-root/frontend/node_modules/reselect/dist/reselect.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/devModeChecks/identityFunctionCheck.ts
__turbopack_context__.s([
    "createSelector",
    ()=>createSelector,
    "createSelectorCreator",
    ()=>createSelectorCreator,
    "createStructuredSelector",
    ()=>createStructuredSelector,
    "lruMemoize",
    ()=>lruMemoize,
    "referenceEqualityCheck",
    ()=>referenceEqualityCheck,
    "setGlobalDevModeChecks",
    ()=>setGlobalDevModeChecks,
    "unstable_autotrackMemoize",
    ()=>autotrackMemoize,
    "weakMapMemoize",
    ()=>weakMapMemoize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/project-root/frontend/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var runIdentityFunctionCheck = (resultFunc, inputSelectorsResults, outputSelectorResult)=>{
    if (inputSelectorsResults.length === 1 && inputSelectorsResults[0] === outputSelectorResult) {
        let isInputSameAsOutput = false;
        try {
            const emptyObject = {};
            if (resultFunc(emptyObject) === emptyObject) isInputSameAsOutput = true;
        } catch  {}
        if (isInputSameAsOutput) {
            let stack = void 0;
            try {
                throw new Error();
            } catch (e) {
                ;
                ({ stack } = e);
            }
            console.warn("The result function returned its own inputs without modification. e.g\n`createSelector([state => state.todos], todos => todos)`\nThis could lead to inefficient memoization and unnecessary re-renders.\nEnsure transformation logic is in the result function, and extraction logic is in the input selectors.", {
                stack
            });
        }
    }
};
// src/devModeChecks/inputStabilityCheck.ts
var runInputStabilityCheck = (inputSelectorResultsObject, options, inputSelectorArgs)=>{
    const { memoize, memoizeOptions } = options;
    const { inputSelectorResults, inputSelectorResultsCopy } = inputSelectorResultsObject;
    const createAnEmptyObject = memoize(()=>({}), ...memoizeOptions);
    const areInputSelectorResultsEqual = createAnEmptyObject.apply(null, inputSelectorResults) === createAnEmptyObject.apply(null, inputSelectorResultsCopy);
    if (!areInputSelectorResultsEqual) {
        let stack = void 0;
        try {
            throw new Error();
        } catch (e) {
            ;
            ({ stack } = e);
        }
        console.warn("An input selector returned a different result when passed same arguments.\nThis means your output selector will likely run more frequently than intended.\nAvoid returning a new reference inside your input selector, e.g.\n`createSelector([state => state.todos.map(todo => todo.id)], todoIds => todoIds.length)`", {
            arguments: inputSelectorArgs,
            firstInputs: inputSelectorResults,
            secondInputs: inputSelectorResultsCopy,
            stack
        });
    }
};
// src/devModeChecks/setGlobalDevModeChecks.ts
var globalDevModeChecks = {
    inputStabilityCheck: "once",
    identityFunctionCheck: "once"
};
var setGlobalDevModeChecks = (devModeChecks)=>{
    Object.assign(globalDevModeChecks, devModeChecks);
};
// src/utils.ts
var NOT_FOUND = /* @__PURE__ */ Symbol("NOT_FOUND");
function assertIsFunction(func, errorMessage = `expected a function, instead received ${typeof func}`) {
    if (typeof func !== "function") {
        throw new TypeError(errorMessage);
    }
}
function assertIsObject(object, errorMessage = `expected an object, instead received ${typeof object}`) {
    if (typeof object !== "object") {
        throw new TypeError(errorMessage);
    }
}
function assertIsArrayOfFunctions(array, errorMessage = `expected all items to be functions, instead received the following types: `) {
    if (!array.every((item)=>typeof item === "function")) {
        const itemTypes = array.map((item)=>typeof item === "function" ? `function ${item.name || "unnamed"}()` : typeof item).join(", ");
        throw new TypeError(`${errorMessage}[${itemTypes}]`);
    }
}
var ensureIsArray = (item)=>{
    return Array.isArray(item) ? item : [
        item
    ];
};
function getDependencies(createSelectorArgs) {
    const dependencies = Array.isArray(createSelectorArgs[0]) ? createSelectorArgs[0] : createSelectorArgs;
    assertIsArrayOfFunctions(dependencies, `createSelector expects all input-selectors to be functions, but received the following types: `);
    return dependencies;
}
function collectInputSelectorResults(dependencies, inputSelectorArgs) {
    const inputSelectorResults = [];
    const { length } = dependencies;
    for(let i = 0; i < length; i++){
        inputSelectorResults.push(dependencies[i].apply(null, inputSelectorArgs));
    }
    return inputSelectorResults;
}
var getDevModeChecksExecutionInfo = (firstRun, devModeChecks)=>{
    const { identityFunctionCheck, inputStabilityCheck } = {
        ...globalDevModeChecks,
        ...devModeChecks
    };
    return {
        identityFunctionCheck: {
            shouldRun: identityFunctionCheck === "always" || identityFunctionCheck === "once" && firstRun,
            run: runIdentityFunctionCheck
        },
        inputStabilityCheck: {
            shouldRun: inputStabilityCheck === "always" || inputStabilityCheck === "once" && firstRun,
            run: runInputStabilityCheck
        }
    };
};
// src/autotrackMemoize/autotracking.ts
var $REVISION = 0;
var CURRENT_TRACKER = null;
var Cell = class {
    revision = $REVISION;
    _value;
    _lastValue;
    _isEqual = tripleEq;
    constructor(initialValue, isEqual = tripleEq){
        this._value = this._lastValue = initialValue;
        this._isEqual = isEqual;
    }
    // Whenever a storage value is read, it'll add itself to the current tracker if
    // one exists, entangling its state with that cache.
    get value() {
        CURRENT_TRACKER?.add(this);
        return this._value;
    }
    // Whenever a storage value is updated, we bump the global revision clock,
    // assign the revision for this storage to the new value, _and_ we schedule a
    // rerender. This is important, and it's what makes autotracking  _pull_
    // based. We don't actively tell the caches which depend on the storage that
    // anything has happened. Instead, we recompute the caches when needed.
    set value(newValue) {
        if (this.value === newValue) return;
        this._value = newValue;
        this.revision = ++$REVISION;
    }
};
function tripleEq(a, b) {
    return a === b;
}
var TrackingCache = class {
    _cachedValue;
    _cachedRevision = -1;
    _deps = [];
    hits = 0;
    fn;
    constructor(fn){
        this.fn = fn;
    }
    clear() {
        this._cachedValue = void 0;
        this._cachedRevision = -1;
        this._deps = [];
        this.hits = 0;
    }
    get value() {
        if (this.revision > this._cachedRevision) {
            const { fn } = this;
            const currentTracker = /* @__PURE__ */ new Set();
            const prevTracker = CURRENT_TRACKER;
            CURRENT_TRACKER = currentTracker;
            this._cachedValue = fn();
            CURRENT_TRACKER = prevTracker;
            this.hits++;
            this._deps = Array.from(currentTracker);
            this._cachedRevision = this.revision;
        }
        CURRENT_TRACKER?.add(this);
        return this._cachedValue;
    }
    get revision() {
        return Math.max(...this._deps.map((d)=>d.revision), 0);
    }
};
function getValue(cell) {
    if (!(cell instanceof Cell)) {
        console.warn("Not a valid cell! ", cell);
    }
    return cell.value;
}
function setValue(storage, value) {
    if (!(storage instanceof Cell)) {
        throw new TypeError("setValue must be passed a tracked store created with `createStorage`.");
    }
    storage.value = storage._lastValue = value;
}
function createCell(initialValue, isEqual = tripleEq) {
    return new Cell(initialValue, isEqual);
}
function createCache(fn) {
    assertIsFunction(fn, "the first parameter to `createCache` must be a function");
    return new TrackingCache(fn);
}
// src/autotrackMemoize/tracking.ts
var neverEq = (a, b)=>false;
function createTag() {
    return createCell(null, neverEq);
}
function dirtyTag(tag, value) {
    setValue(tag, value);
}
var consumeCollection = (node)=>{
    let tag = node.collectionTag;
    if (tag === null) {
        tag = node.collectionTag = createTag();
    }
    getValue(tag);
};
var dirtyCollection = (node)=>{
    const tag = node.collectionTag;
    if (tag !== null) {
        dirtyTag(tag, null);
    }
};
// src/autotrackMemoize/proxy.ts
var REDUX_PROXY_LABEL = Symbol();
var nextId = 0;
var proto = Object.getPrototypeOf({});
var ObjectTreeNode = class {
    constructor(value){
        this.value = value;
        this.value = value;
        this.tag.value = value;
    }
    proxy = new Proxy(this, objectProxyHandler);
    tag = createTag();
    tags = {};
    children = {};
    collectionTag = null;
    id = nextId++;
};
var objectProxyHandler = {
    get (node, key) {
        function calculateResult() {
            const { value } = node;
            const childValue = Reflect.get(value, key);
            if (typeof key === "symbol") {
                return childValue;
            }
            if (key in proto) {
                return childValue;
            }
            if (typeof childValue === "object" && childValue !== null) {
                let childNode = node.children[key];
                if (childNode === void 0) {
                    childNode = node.children[key] = createNode(childValue);
                }
                if (childNode.tag) {
                    getValue(childNode.tag);
                }
                return childNode.proxy;
            } else {
                let tag = node.tags[key];
                if (tag === void 0) {
                    tag = node.tags[key] = createTag();
                    tag.value = childValue;
                }
                getValue(tag);
                return childValue;
            }
        }
        const res = calculateResult();
        return res;
    },
    ownKeys (node) {
        consumeCollection(node);
        return Reflect.ownKeys(node.value);
    },
    getOwnPropertyDescriptor (node, prop) {
        return Reflect.getOwnPropertyDescriptor(node.value, prop);
    },
    has (node, prop) {
        return Reflect.has(node.value, prop);
    }
};
var ArrayTreeNode = class {
    constructor(value){
        this.value = value;
        this.value = value;
        this.tag.value = value;
    }
    proxy = new Proxy([
        this
    ], arrayProxyHandler);
    tag = createTag();
    tags = {};
    children = {};
    collectionTag = null;
    id = nextId++;
};
var arrayProxyHandler = {
    get ([node], key) {
        if (key === "length") {
            consumeCollection(node);
        }
        return objectProxyHandler.get(node, key);
    },
    ownKeys ([node]) {
        return objectProxyHandler.ownKeys(node);
    },
    getOwnPropertyDescriptor ([node], prop) {
        return objectProxyHandler.getOwnPropertyDescriptor(node, prop);
    },
    has ([node], prop) {
        return objectProxyHandler.has(node, prop);
    }
};
function createNode(value) {
    if (Array.isArray(value)) {
        return new ArrayTreeNode(value);
    }
    return new ObjectTreeNode(value);
}
function updateNode(node, newValue) {
    const { value, tags, children } = node;
    node.value = newValue;
    if (Array.isArray(value) && Array.isArray(newValue) && value.length !== newValue.length) {
        dirtyCollection(node);
    } else {
        if (value !== newValue) {
            let oldKeysSize = 0;
            let newKeysSize = 0;
            let anyKeysAdded = false;
            for(const _key in value){
                oldKeysSize++;
            }
            for(const key in newValue){
                newKeysSize++;
                if (!(key in value)) {
                    anyKeysAdded = true;
                    break;
                }
            }
            const isDifferent = anyKeysAdded || oldKeysSize !== newKeysSize;
            if (isDifferent) {
                dirtyCollection(node);
            }
        }
    }
    for(const key in tags){
        const childValue = value[key];
        const newChildValue = newValue[key];
        if (childValue !== newChildValue) {
            dirtyCollection(node);
            dirtyTag(tags[key], newChildValue);
        }
        if (typeof newChildValue === "object" && newChildValue !== null) {
            delete tags[key];
        }
    }
    for(const key in children){
        const childNode = children[key];
        const newChildValue = newValue[key];
        const childValue = childNode.value;
        if (childValue === newChildValue) {
            continue;
        } else if (typeof newChildValue === "object" && newChildValue !== null) {
            updateNode(childNode, newChildValue);
        } else {
            deleteNode(childNode);
            delete children[key];
        }
    }
}
function deleteNode(node) {
    if (node.tag) {
        dirtyTag(node.tag, null);
    }
    dirtyCollection(node);
    for(const key in node.tags){
        dirtyTag(node.tags[key], null);
    }
    for(const key in node.children){
        deleteNode(node.children[key]);
    }
}
// src/lruMemoize.ts
function createSingletonCache(equals) {
    let entry;
    return {
        get (key) {
            if (entry && equals(entry.key, key)) {
                return entry.value;
            }
            return NOT_FOUND;
        },
        put (key, value) {
            entry = {
                key,
                value
            };
        },
        getEntries () {
            return entry ? [
                entry
            ] : [];
        },
        clear () {
            entry = void 0;
        }
    };
}
function createLruCache(maxSize, equals) {
    let entries = [];
    function get(key) {
        const cacheIndex = entries.findIndex((entry)=>equals(key, entry.key));
        if (cacheIndex > -1) {
            const entry = entries[cacheIndex];
            if (cacheIndex > 0) {
                entries.splice(cacheIndex, 1);
                entries.unshift(entry);
            }
            return entry.value;
        }
        return NOT_FOUND;
    }
    function put(key, value) {
        if (get(key) === NOT_FOUND) {
            entries.unshift({
                key,
                value
            });
            if (entries.length > maxSize) {
                entries.pop();
            }
        }
    }
    function getEntries() {
        return entries;
    }
    function clear() {
        entries = [];
    }
    return {
        get,
        put,
        getEntries,
        clear
    };
}
var referenceEqualityCheck = (a, b)=>a === b;
function createCacheKeyComparator(equalityCheck) {
    return function areArgumentsShallowlyEqual(prev, next) {
        if (prev === null || next === null || prev.length !== next.length) {
            return false;
        }
        const { length } = prev;
        for(let i = 0; i < length; i++){
            if (!equalityCheck(prev[i], next[i])) {
                return false;
            }
        }
        return true;
    };
}
function lruMemoize(func, equalityCheckOrOptions) {
    const providedOptions = typeof equalityCheckOrOptions === "object" ? equalityCheckOrOptions : {
        equalityCheck: equalityCheckOrOptions
    };
    const { equalityCheck = referenceEqualityCheck, maxSize = 1, resultEqualityCheck } = providedOptions;
    const comparator = createCacheKeyComparator(equalityCheck);
    let resultsCount = 0;
    const cache = maxSize <= 1 ? createSingletonCache(comparator) : createLruCache(maxSize, comparator);
    function memoized() {
        let value = cache.get(arguments);
        if (value === NOT_FOUND) {
            value = func.apply(null, arguments);
            resultsCount++;
            if (resultEqualityCheck) {
                const entries = cache.getEntries();
                const matchingEntry = entries.find((entry)=>resultEqualityCheck(entry.value, value));
                if (matchingEntry) {
                    value = matchingEntry.value;
                    resultsCount !== 0 && resultsCount--;
                }
            }
            cache.put(arguments, value);
        }
        return value;
    }
    memoized.clearCache = ()=>{
        cache.clear();
        memoized.resetResultsCount();
    };
    memoized.resultsCount = ()=>resultsCount;
    memoized.resetResultsCount = ()=>{
        resultsCount = 0;
    };
    return memoized;
}
// src/autotrackMemoize/autotrackMemoize.ts
function autotrackMemoize(func) {
    const node = createNode([]);
    let lastArgs = null;
    const shallowEqual = createCacheKeyComparator(referenceEqualityCheck);
    const cache = createCache(()=>{
        const res = func.apply(null, node.proxy);
        return res;
    });
    function memoized() {
        if (!shallowEqual(lastArgs, arguments)) {
            updateNode(node, arguments);
            lastArgs = arguments;
        }
        return cache.value;
    }
    memoized.clearCache = ()=>{
        return cache.clear();
    };
    return memoized;
}
// src/weakMapMemoize.ts
var StrongRef = class {
    constructor(value){
        this.value = value;
    }
    deref() {
        return this.value;
    }
};
var Ref = typeof WeakRef !== "undefined" ? WeakRef : StrongRef;
var UNTERMINATED = 0;
var TERMINATED = 1;
function createCacheNode() {
    return {
        s: UNTERMINATED,
        v: void 0,
        o: null,
        p: null
    };
}
function weakMapMemoize(func, options = {}) {
    let fnNode = createCacheNode();
    const { resultEqualityCheck } = options;
    let lastResult;
    let resultsCount = 0;
    function memoized() {
        let cacheNode = fnNode;
        const { length } = arguments;
        for(let i = 0, l = length; i < l; i++){
            const arg = arguments[i];
            if (typeof arg === "function" || typeof arg === "object" && arg !== null) {
                let objectCache = cacheNode.o;
                if (objectCache === null) {
                    cacheNode.o = objectCache = /* @__PURE__ */ new WeakMap();
                }
                const objectNode = objectCache.get(arg);
                if (objectNode === void 0) {
                    cacheNode = createCacheNode();
                    objectCache.set(arg, cacheNode);
                } else {
                    cacheNode = objectNode;
                }
            } else {
                let primitiveCache = cacheNode.p;
                if (primitiveCache === null) {
                    cacheNode.p = primitiveCache = /* @__PURE__ */ new Map();
                }
                const primitiveNode = primitiveCache.get(arg);
                if (primitiveNode === void 0) {
                    cacheNode = createCacheNode();
                    primitiveCache.set(arg, cacheNode);
                } else {
                    cacheNode = primitiveNode;
                }
            }
        }
        const terminatedNode = cacheNode;
        let result;
        if (cacheNode.s === TERMINATED) {
            result = cacheNode.v;
        } else {
            result = func.apply(null, arguments);
            resultsCount++;
            if (resultEqualityCheck) {
                const lastResultValue = lastResult?.deref?.() ?? lastResult;
                if (lastResultValue != null && resultEqualityCheck(lastResultValue, result)) {
                    result = lastResultValue;
                    resultsCount !== 0 && resultsCount--;
                }
                const needsWeakRef = typeof result === "object" && result !== null || typeof result === "function";
                lastResult = needsWeakRef ? new Ref(result) : result;
            }
        }
        terminatedNode.s = TERMINATED;
        terminatedNode.v = result;
        return result;
    }
    memoized.clearCache = ()=>{
        fnNode = createCacheNode();
        memoized.resetResultsCount();
    };
    memoized.resultsCount = ()=>resultsCount;
    memoized.resetResultsCount = ()=>{
        resultsCount = 0;
    };
    return memoized;
}
// src/createSelectorCreator.ts
function createSelectorCreator(memoizeOrOptions, ...memoizeOptionsFromArgs) {
    const createSelectorCreatorOptions = typeof memoizeOrOptions === "function" ? {
        memoize: memoizeOrOptions,
        memoizeOptions: memoizeOptionsFromArgs
    } : memoizeOrOptions;
    const createSelector2 = (...createSelectorArgs)=>{
        let recomputations = 0;
        let dependencyRecomputations = 0;
        let lastResult;
        let directlyPassedOptions = {};
        let resultFunc = createSelectorArgs.pop();
        if (typeof resultFunc === "object") {
            directlyPassedOptions = resultFunc;
            resultFunc = createSelectorArgs.pop();
        }
        assertIsFunction(resultFunc, `createSelector expects an output function after the inputs, but received: [${typeof resultFunc}]`);
        const combinedOptions = {
            ...createSelectorCreatorOptions,
            ...directlyPassedOptions
        };
        const { memoize, memoizeOptions = [], argsMemoize = weakMapMemoize, argsMemoizeOptions = [], devModeChecks = {} } = combinedOptions;
        const finalMemoizeOptions = ensureIsArray(memoizeOptions);
        const finalArgsMemoizeOptions = ensureIsArray(argsMemoizeOptions);
        const dependencies = getDependencies(createSelectorArgs);
        const memoizedResultFunc = memoize(function recomputationWrapper() {
            recomputations++;
            return resultFunc.apply(null, arguments);
        }, ...finalMemoizeOptions);
        let firstRun = true;
        const selector = argsMemoize(function dependenciesChecker() {
            dependencyRecomputations++;
            const inputSelectorResults = collectInputSelectorResults(dependencies, arguments);
            lastResult = memoizedResultFunc.apply(null, inputSelectorResults);
            if ("TURBOPACK compile-time truthy", 1) {
                const { identityFunctionCheck, inputStabilityCheck } = getDevModeChecksExecutionInfo(firstRun, devModeChecks);
                if (identityFunctionCheck.shouldRun) {
                    identityFunctionCheck.run(resultFunc, inputSelectorResults, lastResult);
                }
                if (inputStabilityCheck.shouldRun) {
                    const inputSelectorResultsCopy = collectInputSelectorResults(dependencies, arguments);
                    inputStabilityCheck.run({
                        inputSelectorResults,
                        inputSelectorResultsCopy
                    }, {
                        memoize,
                        memoizeOptions: finalMemoizeOptions
                    }, arguments);
                }
                if (firstRun) firstRun = false;
            }
            return lastResult;
        }, ...finalArgsMemoizeOptions);
        return Object.assign(selector, {
            resultFunc,
            memoizedResultFunc,
            dependencies,
            dependencyRecomputations: ()=>dependencyRecomputations,
            resetDependencyRecomputations: ()=>{
                dependencyRecomputations = 0;
            },
            lastResult: ()=>lastResult,
            recomputations: ()=>recomputations,
            resetRecomputations: ()=>{
                recomputations = 0;
            },
            memoize,
            argsMemoize
        });
    };
    Object.assign(createSelector2, {
        withTypes: ()=>createSelector2
    });
    return createSelector2;
}
var createSelector = /* @__PURE__ */ createSelectorCreator(weakMapMemoize);
// src/createStructuredSelector.ts
var createStructuredSelector = Object.assign((inputSelectorsObject, selectorCreator = createSelector)=>{
    assertIsObject(inputSelectorsObject, `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof inputSelectorsObject}`);
    const inputSelectorKeys = Object.keys(inputSelectorsObject);
    const dependencies = inputSelectorKeys.map((key)=>inputSelectorsObject[key]);
    const structuredSelector = selectorCreator(dependencies, (...inputSelectorResults)=>{
        return inputSelectorResults.reduce((composition, value, index)=>{
            composition[inputSelectorKeys[index]] = value;
            return composition;
        }, {});
    });
    return structuredSelector;
}, {
    withTypes: ()=>createStructuredSelector
});
;
 //# sourceMappingURL=reselect.mjs.map
}),
"[project]/project-root/frontend/node_modules/@mui/x-data-grid/node_modules/reselect/es/defaultMemoize.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Cache implementation based on Erik Rasmussen's `lru-memoize`:
// https://github.com/erikras/lru-memoize
__turbopack_context__.s([
    "createCacheKeyComparator",
    ()=>createCacheKeyComparator,
    "defaultEqualityCheck",
    ()=>defaultEqualityCheck,
    "defaultMemoize",
    ()=>defaultMemoize
]);
var NOT_FOUND = 'NOT_FOUND';
function createSingletonCache(equals) {
    var entry;
    return {
        get: function get(key) {
            if (entry && equals(entry.key, key)) {
                return entry.value;
            }
            return NOT_FOUND;
        },
        put: function put(key, value) {
            entry = {
                key: key,
                value: value
            };
        },
        getEntries: function getEntries() {
            return entry ? [
                entry
            ] : [];
        },
        clear: function clear() {
            entry = undefined;
        }
    };
}
function createLruCache(maxSize, equals) {
    var entries = [];
    function get(key) {
        var cacheIndex = entries.findIndex(function(entry) {
            return equals(key, entry.key);
        }); // We found a cached entry
        if (cacheIndex > -1) {
            var entry = entries[cacheIndex]; // Cached entry not at top of cache, move it to the top
            if (cacheIndex > 0) {
                entries.splice(cacheIndex, 1);
                entries.unshift(entry);
            }
            return entry.value;
        } // No entry found in cache, return sentinel
        return NOT_FOUND;
    }
    function put(key, value) {
        if (get(key) === NOT_FOUND) {
            // TODO Is unshift slow?
            entries.unshift({
                key: key,
                value: value
            });
            if (entries.length > maxSize) {
                entries.pop();
            }
        }
    }
    function getEntries() {
        return entries;
    }
    function clear() {
        entries = [];
    }
    return {
        get: get,
        put: put,
        getEntries: getEntries,
        clear: clear
    };
}
var defaultEqualityCheck = function defaultEqualityCheck(a, b) {
    return a === b;
};
function createCacheKeyComparator(equalityCheck) {
    return function areArgumentsShallowlyEqual(prev, next) {
        if (prev === null || next === null || prev.length !== next.length) {
            return false;
        } // Do this in a for loop (and not a `forEach` or an `every`) so we can determine equality as fast as possible.
        var length = prev.length;
        for(var i = 0; i < length; i++){
            if (!equalityCheck(prev[i], next[i])) {
                return false;
            }
        }
        return true;
    };
}
function defaultMemoize(func, equalityCheckOrOptions) {
    var providedOptions = typeof equalityCheckOrOptions === 'object' ? equalityCheckOrOptions : {
        equalityCheck: equalityCheckOrOptions
    };
    var _providedOptions$equa = providedOptions.equalityCheck, equalityCheck = _providedOptions$equa === void 0 ? defaultEqualityCheck : _providedOptions$equa, _providedOptions$maxS = providedOptions.maxSize, maxSize = _providedOptions$maxS === void 0 ? 1 : _providedOptions$maxS, resultEqualityCheck = providedOptions.resultEqualityCheck;
    var comparator = createCacheKeyComparator(equalityCheck);
    var cache = maxSize === 1 ? createSingletonCache(comparator) : createLruCache(maxSize, comparator); // we reference arguments instead of spreading them for performance reasons
    function memoized() {
        var value = cache.get(arguments);
        if (value === NOT_FOUND) {
            // @ts-ignore
            value = func.apply(null, arguments);
            if (resultEqualityCheck) {
                var entries = cache.getEntries();
                var matchingEntry = entries.find(function(entry) {
                    return resultEqualityCheck(entry.value, value);
                });
                if (matchingEntry) {
                    value = matchingEntry.value;
                }
            }
            cache.put(arguments, value);
        }
        return value;
    }
    memoized.clearCache = function() {
        return cache.clear();
    };
    return memoized;
}
}),
"[project]/project-root/frontend/node_modules/@mui/x-data-grid/node_modules/reselect/es/index.js [client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createSelector",
    ()=>createSelector,
    "createSelectorCreator",
    ()=>createSelectorCreator,
    "createStructuredSelector",
    ()=>createStructuredSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$node_modules$2f$reselect$2f$es$2f$defaultMemoize$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/@mui/x-data-grid/node_modules/reselect/es/defaultMemoize.js [client] (ecmascript)");
;
;
function getDependencies(funcs) {
    var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;
    if (!dependencies.every(function(dep) {
        return typeof dep === 'function';
    })) {
        var dependencyTypes = dependencies.map(function(dep) {
            return typeof dep === 'function' ? "function " + (dep.name || 'unnamed') + "()" : typeof dep;
        }).join(', ');
        throw new Error("createSelector expects all input-selectors to be functions, but received the following types: [" + dependencyTypes + "]");
    }
    return dependencies;
}
function createSelectorCreator(memoize) {
    for(var _len = arguments.length, memoizeOptionsFromArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        memoizeOptionsFromArgs[_key - 1] = arguments[_key];
    }
    var createSelector = function createSelector() {
        for(var _len2 = arguments.length, funcs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++){
            funcs[_key2] = arguments[_key2];
        }
        var _recomputations = 0;
        var _lastResult; // Due to the intricacies of rest params, we can't do an optional arg after `...funcs`.
        // So, start by declaring the default value here.
        // (And yes, the words 'memoize' and 'options' appear too many times in this next sequence.)
        var directlyPassedOptions = {
            memoizeOptions: undefined
        }; // Normally, the result func or "output selector" is the last arg
        var resultFunc = funcs.pop(); // If the result func is actually an _object_, assume it's our options object
        if (typeof resultFunc === 'object') {
            directlyPassedOptions = resultFunc; // and pop the real result func off
            resultFunc = funcs.pop();
        }
        if (typeof resultFunc !== 'function') {
            throw new Error("createSelector expects an output function after the inputs, but received: [" + typeof resultFunc + "]");
        } // Determine which set of options we're using. Prefer options passed directly,
        // but fall back to options given to createSelectorCreator.
        var _directlyPassedOption = directlyPassedOptions, _directlyPassedOption2 = _directlyPassedOption.memoizeOptions, memoizeOptions = _directlyPassedOption2 === void 0 ? memoizeOptionsFromArgs : _directlyPassedOption2; // Simplifying assumption: it's unlikely that the first options arg of the provided memoizer
        // is an array. In most libs I've looked at, it's an equality function or options object.
        // Based on that, if `memoizeOptions` _is_ an array, we assume it's a full
        // user-provided array of options. Otherwise, it must be just the _first_ arg, and so
        // we wrap it in an array so we can apply it.
        var finalMemoizeOptions = Array.isArray(memoizeOptions) ? memoizeOptions : [
            memoizeOptions
        ];
        var dependencies = getDependencies(funcs);
        var memoizedResultFunc = memoize.apply(void 0, [
            function recomputationWrapper() {
                _recomputations++; // apply arguments instead of spreading for performance.
                return resultFunc.apply(null, arguments);
            }
        ].concat(finalMemoizeOptions)); // If a selector is called with the exact same arguments we don't need to traverse our dependencies again.
        var selector = memoize(function dependenciesChecker() {
            var params = [];
            var length = dependencies.length;
            for(var i = 0; i < length; i++){
                // apply arguments instead of spreading and mutate a local list of params for performance.
                // @ts-ignore
                params.push(dependencies[i].apply(null, arguments));
            } // apply arguments instead of spreading for performance.
            _lastResult = memoizedResultFunc.apply(null, params);
            return _lastResult;
        });
        Object.assign(selector, {
            resultFunc: resultFunc,
            memoizedResultFunc: memoizedResultFunc,
            dependencies: dependencies,
            lastResult: function lastResult() {
                return _lastResult;
            },
            recomputations: function recomputations() {
                return _recomputations;
            },
            resetRecomputations: function resetRecomputations() {
                return _recomputations = 0;
            }
        });
        return selector;
    }; // @ts-ignore
    return createSelector;
}
var createSelector = /* #__PURE__ */ createSelectorCreator(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$node_modules$2f$reselect$2f$es$2f$defaultMemoize$2e$js__$5b$client$5d$__$28$ecmascript$29$__["defaultMemoize"]);
var createStructuredSelector = function createStructuredSelector(selectors, selectorCreator) {
    if (selectorCreator === void 0) {
        selectorCreator = createSelector;
    }
    if (typeof selectors !== 'object') {
        throw new Error('createStructuredSelector expects first argument to be an object ' + ("where each property is a selector, instead received a " + typeof selectors));
    }
    var objectKeys = Object.keys(selectors);
    var resultSelector = selectorCreator(objectKeys.map(function(key) {
        return selectors[key];
    }), function() {
        for(var _len3 = arguments.length, values = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++){
            values[_key3] = arguments[_key3];
        }
        return values.reduce(function(composition, value, index) {
            composition[objectKeys[index]] = value;
            return composition;
        }, {});
    });
    return resultSelector;
};
}),
"[project]/project-root/frontend/node_modules/@mui/x-charts-vendor/es/d3-scale.mjs [client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

// `x-charts-vendor/d3-scale` (ESM)
// See upstream license: https://github.com/d3/d3-scale/blob/main/LICENSE
//
// Our ESM package uses the underlying installed dependencies of `node_modules/d3-scale`
__turbopack_context__.s([]);
;
}),
"[project]/project-root/frontend/node_modules/@mui/x-charts-vendor/es/d3-array.mjs [client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

// `x-charts-vendor/d3-array` (ESM)
// See upstream license: https://github.com/d3/d3-array/blob/main/LICENSE
//
// Our ESM package uses the underlying installed dependencies of `node_modules/d3-array`
__turbopack_context__.s([]);
;
}),
"[project]/project-root/frontend/node_modules/@mui/x-charts-vendor/es/d3-interpolate.mjs [client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

// `x-charts-vendor/d3-interpolate` (ESM)
// See upstream license: https://github.com/d3/d3-interpolate/blob/main/LICENSE
//
// Our ESM package uses the underlying installed dependencies of `node_modules/d3-interpolate`
__turbopack_context__.s([]);
;
}),
"[project]/project-root/frontend/node_modules/@mui/x-charts-vendor/es/d3-timer.mjs [client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

// `x-charts-vendor/d3-timer` (ESM)
// See upstream license: https://github.com/d3/d3-timer/blob/main/LICENSE
//
// Our ESM package uses the underlying installed dependencies of `node_modules/d3-timer`
__turbopack_context__.s([]);
;
}),
"[project]/project-root/frontend/node_modules/@mui/x-charts-vendor/es/d3-shape.mjs [client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

// `x-charts-vendor/d3-shape` (ESM)
// See upstream license: https://github.com/d3/d3-shape/blob/main/LICENSE
//
// Our ESM package uses the underlying installed dependencies of `node_modules/d3-shape`
__turbopack_context__.s([]);
;
}),
"[project]/project-root/frontend/node_modules/internmap/src/index.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InternMap",
    ()=>InternMap,
    "InternSet",
    ()=>InternSet
]);
class InternMap extends Map {
    constructor(entries, key = keyof){
        super();
        Object.defineProperties(this, {
            _intern: {
                value: new Map()
            },
            _key: {
                value: key
            }
        });
        if (entries != null) for (const [key, value] of entries)this.set(key, value);
    }
    get(key) {
        return super.get(intern_get(this, key));
    }
    has(key) {
        return super.has(intern_get(this, key));
    }
    set(key, value) {
        return super.set(intern_set(this, key), value);
    }
    delete(key) {
        return super.delete(intern_delete(this, key));
    }
}
class InternSet extends Set {
    constructor(values, key = keyof){
        super();
        Object.defineProperties(this, {
            _intern: {
                value: new Map()
            },
            _key: {
                value: key
            }
        });
        if (values != null) for (const value of values)this.add(value);
    }
    has(value) {
        return super.has(intern_get(this, value));
    }
    add(value) {
        return super.add(intern_set(this, value));
    }
    delete(value) {
        return super.delete(intern_delete(this, value));
    }
}
function intern_get({ _intern, _key }, value) {
    const key = _key(value);
    return _intern.has(key) ? _intern.get(key) : value;
}
function intern_set({ _intern, _key }, value) {
    const key = _key(value);
    if (_intern.has(key)) return _intern.get(key);
    _intern.set(key, value);
    return value;
}
function intern_delete({ _intern, _key }, value) {
    const key = _key(value);
    if (_intern.has(key)) {
        value = _intern.get(value);
        _intern.delete(key);
    }
    return value;
}
function keyof(value) {
    return value !== null && typeof value === "object" ? value.valueOf() : value;
}
}),
"[project]/project-root/frontend/node_modules/d3-scale/src/init.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "initInterpolator",
    ()=>initInterpolator,
    "initRange",
    ()=>initRange
]);
function initRange(domain, range) {
    switch(arguments.length){
        case 0:
            break;
        case 1:
            this.range(domain);
            break;
        default:
            this.range(range).domain(domain);
            break;
    }
    return this;
}
function initInterpolator(domain, interpolator) {
    switch(arguments.length){
        case 0:
            break;
        case 1:
            {
                if (typeof domain === "function") this.interpolator(domain);
                else this.range(domain);
                break;
            }
        default:
            {
                this.domain(domain);
                if (typeof interpolator === "function") this.interpolator(interpolator);
                else this.range(interpolator);
                break;
            }
    }
    return this;
}
}),
"[project]/project-root/frontend/node_modules/d3-scale/src/ordinal.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ordinal,
    "implicit",
    ()=>implicit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$internmap$2f$src$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/internmap/src/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$init$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-scale/src/init.js [client] (ecmascript)");
;
;
const implicit = Symbol("implicit");
function ordinal() {
    var index = new __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$internmap$2f$src$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["InternMap"](), domain = [], range = [], unknown = implicit;
    function scale(d) {
        let i = index.get(d);
        if (i === undefined) {
            if (unknown !== implicit) return unknown;
            index.set(d, i = domain.push(d) - 1);
        }
        return range[i % range.length];
    }
    scale.domain = function(_) {
        if (!arguments.length) return domain.slice();
        domain = [], index = new __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$internmap$2f$src$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["InternMap"]();
        for (const value of _){
            if (index.has(value)) continue;
            index.set(value, domain.push(value) - 1);
        }
        return scale;
    };
    scale.range = function(_) {
        return arguments.length ? (range = Array.from(_), scale) : range.slice();
    };
    scale.unknown = function(_) {
        return arguments.length ? (unknown = _, scale) : unknown;
    };
    scale.copy = function() {
        return ordinal(domain, range).unknown(unknown);
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$init$2e$js__$5b$client$5d$__$28$ecmascript$29$__["initRange"].apply(scale, arguments);
    return scale;
}
}),
"[project]/project-root/frontend/node_modules/d3-scale/src/ordinal.js [client] (ecmascript) <export default as scaleOrdinal>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "scaleOrdinal",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$ordinal$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$ordinal$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-scale/src/ordinal.js [client] (ecmascript)");
}),
"[project]/project-root/frontend/node_modules/d3-scale/src/threshold.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>threshold
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$array$2f$src$2f$bisect$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__bisect$3e$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-array/src/bisect.js [client] (ecmascript) <export default as bisect>");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$init$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-scale/src/init.js [client] (ecmascript)");
;
;
function threshold() {
    var domain = [
        0.5
    ], range = [
        0,
        1
    ], unknown, n = 1;
    function scale(x) {
        return x != null && x <= x ? range[(0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$array$2f$src$2f$bisect$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__bisect$3e$__["bisect"])(domain, x, 0, n)] : unknown;
    }
    scale.domain = function(_) {
        return arguments.length ? (domain = Array.from(_), n = Math.min(domain.length, range.length - 1), scale) : domain.slice();
    };
    scale.range = function(_) {
        return arguments.length ? (range = Array.from(_), n = Math.min(domain.length, range.length - 1), scale) : range.slice();
    };
    scale.invertExtent = function(y) {
        var i = range.indexOf(y);
        return [
            domain[i - 1],
            domain[i]
        ];
    };
    scale.unknown = function(_) {
        return arguments.length ? (unknown = _, scale) : unknown;
    };
    scale.copy = function() {
        return threshold().domain(domain).range(range).unknown(unknown);
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$init$2e$js__$5b$client$5d$__$28$ecmascript$29$__["initRange"].apply(scale, arguments);
}
}),
"[project]/project-root/frontend/node_modules/d3-scale/src/threshold.js [client] (ecmascript) <export default as scaleThreshold>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "scaleThreshold",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$threshold$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$threshold$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-scale/src/threshold.js [client] (ecmascript)");
}),
"[project]/project-root/frontend/node_modules/d3-scale/src/constant.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>constants
]);
function constants(x) {
    return function() {
        return x;
    };
}
}),
"[project]/project-root/frontend/node_modules/d3-scale/src/number.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>number
]);
function number(x) {
    return +x;
}
}),
"[project]/project-root/frontend/node_modules/d3-scale/src/continuous.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "copy",
    ()=>copy,
    "default",
    ()=>continuous,
    "identity",
    ()=>identity,
    "transformer",
    ()=>transformer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$array$2f$src$2f$bisect$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__bisect$3e$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-array/src/bisect.js [client] (ecmascript) <export default as bisect>");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$value$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__interpolate$3e$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-interpolate/src/value.js [client] (ecmascript) <export default as interpolate>");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$number$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__interpolateNumber$3e$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-interpolate/src/number.js [client] (ecmascript) <export default as interpolateNumber>");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$round$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__interpolateRound$3e$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-interpolate/src/round.js [client] (ecmascript) <export default as interpolateRound>");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$constant$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-scale/src/constant.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$number$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-scale/src/number.js [client] (ecmascript)");
;
;
;
;
var unit = [
    0,
    1
];
function identity(x) {
    return x;
}
function normalize(a, b) {
    return (b -= a = +a) ? function(x) {
        return (x - a) / b;
    } : (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$constant$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(isNaN(b) ? NaN : 0.5);
}
function clamper(a, b) {
    var t;
    if (a > b) t = a, a = b, b = t;
    return function(x) {
        return Math.max(a, Math.min(b, x));
    };
}
// normalize(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
// interpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding range value x in [a,b].
function bimap(domain, range, interpolate) {
    var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
    if (d1 < d0) d0 = normalize(d1, d0), r0 = interpolate(r1, r0);
    else d0 = normalize(d0, d1), r0 = interpolate(r0, r1);
    return function(x) {
        return r0(d0(x));
    };
}
function polymap(domain, range, interpolate) {
    var j = Math.min(domain.length, range.length) - 1, d = new Array(j), r = new Array(j), i = -1;
    // Reverse descending domains.
    if (domain[j] < domain[0]) {
        domain = domain.slice().reverse();
        range = range.slice().reverse();
    }
    while(++i < j){
        d[i] = normalize(domain[i], domain[i + 1]);
        r[i] = interpolate(range[i], range[i + 1]);
    }
    return function(x) {
        var i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$array$2f$src$2f$bisect$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__bisect$3e$__["bisect"])(domain, x, 1, j) - 1;
        return r[i](d[i](x));
    };
}
function copy(source, target) {
    return target.domain(source.domain()).range(source.range()).interpolate(source.interpolate()).clamp(source.clamp()).unknown(source.unknown());
}
function transformer() {
    var domain = unit, range = unit, interpolate = __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$value$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__interpolate$3e$__["interpolate"], transform, untransform, unknown, clamp = identity, piecewise, output, input;
    function rescale() {
        var n = Math.min(domain.length, range.length);
        if (clamp !== identity) clamp = clamper(domain[0], domain[n - 1]);
        piecewise = n > 2 ? polymap : bimap;
        output = input = null;
        return scale;
    }
    function scale(x) {
        return x == null || isNaN(x = +x) ? unknown : (output || (output = piecewise(domain.map(transform), range, interpolate)))(transform(clamp(x)));
    }
    scale.invert = function(y) {
        return clamp(untransform((input || (input = piecewise(range, domain.map(transform), __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$number$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__interpolateNumber$3e$__["interpolateNumber"])))(y)));
    };
    scale.domain = function(_) {
        return arguments.length ? (domain = Array.from(_, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$number$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]), rescale()) : domain.slice();
    };
    scale.range = function(_) {
        return arguments.length ? (range = Array.from(_), rescale()) : range.slice();
    };
    scale.rangeRound = function(_) {
        return range = Array.from(_), interpolate = __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$round$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__interpolateRound$3e$__["interpolateRound"], rescale();
    };
    scale.clamp = function(_) {
        return arguments.length ? (clamp = _ ? true : identity, rescale()) : clamp !== identity;
    };
    scale.interpolate = function(_) {
        return arguments.length ? (interpolate = _, rescale()) : interpolate;
    };
    scale.unknown = function(_) {
        return arguments.length ? (unknown = _, scale) : unknown;
    };
    return function(t, u) {
        transform = t, untransform = u;
        return rescale();
    };
}
function continuous() {
    return transformer()(identity, identity);
}
}),
"[project]/project-root/frontend/node_modules/d3-scale/src/tickFormat.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>tickFormat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$array$2f$src$2f$ticks$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-array/src/ticks.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$format$2f$src$2f$defaultLocale$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-format/src/defaultLocale.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$format$2f$src$2f$formatSpecifier$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__formatSpecifier$3e$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-format/src/formatSpecifier.js [client] (ecmascript) <export default as formatSpecifier>");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$format$2f$src$2f$precisionFixed$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__precisionFixed$3e$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-format/src/precisionFixed.js [client] (ecmascript) <export default as precisionFixed>");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$format$2f$src$2f$precisionPrefix$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__precisionPrefix$3e$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-format/src/precisionPrefix.js [client] (ecmascript) <export default as precisionPrefix>");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$format$2f$src$2f$precisionRound$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__precisionRound$3e$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-format/src/precisionRound.js [client] (ecmascript) <export default as precisionRound>");
;
;
function tickFormat(start, stop, count, specifier) {
    var step = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$array$2f$src$2f$ticks$2e$js__$5b$client$5d$__$28$ecmascript$29$__["tickStep"])(start, stop, count), precision;
    specifier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$format$2f$src$2f$formatSpecifier$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__formatSpecifier$3e$__["formatSpecifier"])(specifier == null ? ",f" : specifier);
    switch(specifier.type){
        case "s":
            {
                var value = Math.max(Math.abs(start), Math.abs(stop));
                if (specifier.precision == null && !isNaN(precision = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$format$2f$src$2f$precisionPrefix$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__precisionPrefix$3e$__["precisionPrefix"])(step, value))) specifier.precision = precision;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$format$2f$src$2f$defaultLocale$2e$js__$5b$client$5d$__$28$ecmascript$29$__["formatPrefix"])(specifier, value);
            }
        case "":
        case "e":
        case "g":
        case "p":
        case "r":
            {
                if (specifier.precision == null && !isNaN(precision = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$format$2f$src$2f$precisionRound$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__precisionRound$3e$__["precisionRound"])(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
                break;
            }
        case "f":
        case "%":
            {
                if (specifier.precision == null && !isNaN(precision = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$format$2f$src$2f$precisionFixed$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__precisionFixed$3e$__["precisionFixed"])(step))) specifier.precision = precision - (specifier.type === "%") * 2;
                break;
            }
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$format$2f$src$2f$defaultLocale$2e$js__$5b$client$5d$__$28$ecmascript$29$__["format"])(specifier);
}
}),
"[project]/project-root/frontend/node_modules/d3-scale/src/linear.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>linear,
    "linearish",
    ()=>linearish
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$array$2f$src$2f$ticks$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ticks$3e$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-array/src/ticks.js [client] (ecmascript) <export default as ticks>");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$array$2f$src$2f$ticks$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-array/src/ticks.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$continuous$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-scale/src/continuous.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$init$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-scale/src/init.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$tickFormat$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-scale/src/tickFormat.js [client] (ecmascript)");
;
;
;
;
function linearish(scale) {
    var domain = scale.domain;
    scale.ticks = function(count) {
        var d = domain();
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$array$2f$src$2f$ticks$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ticks$3e$__["ticks"])(d[0], d[d.length - 1], count == null ? 10 : count);
    };
    scale.tickFormat = function(count, specifier) {
        var d = domain();
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$tickFormat$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(d[0], d[d.length - 1], count == null ? 10 : count, specifier);
    };
    scale.nice = function(count) {
        if (count == null) count = 10;
        var d = domain();
        var i0 = 0;
        var i1 = d.length - 1;
        var start = d[i0];
        var stop = d[i1];
        var prestep;
        var step;
        var maxIter = 10;
        if (stop < start) {
            step = start, start = stop, stop = step;
            step = i0, i0 = i1, i1 = step;
        }
        while(maxIter-- > 0){
            step = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$array$2f$src$2f$ticks$2e$js__$5b$client$5d$__$28$ecmascript$29$__["tickIncrement"])(start, stop, count);
            if (step === prestep) {
                d[i0] = start;
                d[i1] = stop;
                return domain(d);
            } else if (step > 0) {
                start = Math.floor(start / step) * step;
                stop = Math.ceil(stop / step) * step;
            } else if (step < 0) {
                start = Math.ceil(start * step) / step;
                stop = Math.floor(stop * step) / step;
            } else {
                break;
            }
            prestep = step;
        }
        return scale;
    };
    return scale;
}
function linear() {
    var scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$continuous$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])();
    scale.copy = function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$continuous$2e$js__$5b$client$5d$__$28$ecmascript$29$__["copy"])(scale, linear());
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$init$2e$js__$5b$client$5d$__$28$ecmascript$29$__["initRange"].apply(scale, arguments);
    return linearish(scale);
}
}),
"[project]/project-root/frontend/node_modules/d3-scale/src/nice.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>nice
]);
function nice(domain, interval) {
    domain = domain.slice();
    var i0 = 0, i1 = domain.length - 1, x0 = domain[i0], x1 = domain[i1], t;
    if (x1 < x0) {
        t = i0, i0 = i1, i1 = t;
        t = x0, x0 = x1, x1 = t;
    }
    domain[i0] = interval.floor(x0);
    domain[i1] = interval.ceil(x1);
    return domain;
}
}),
"[project]/project-root/frontend/node_modules/d3-scale/src/log.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>log,
    "loggish",
    ()=>loggish
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$array$2f$src$2f$ticks$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ticks$3e$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-array/src/ticks.js [client] (ecmascript) <export default as ticks>");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$format$2f$src$2f$defaultLocale$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-format/src/defaultLocale.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$format$2f$src$2f$formatSpecifier$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__formatSpecifier$3e$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-format/src/formatSpecifier.js [client] (ecmascript) <export default as formatSpecifier>");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$nice$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-scale/src/nice.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$continuous$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-scale/src/continuous.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$init$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-scale/src/init.js [client] (ecmascript)");
;
;
;
;
;
function transformLog(x) {
    return Math.log(x);
}
function transformExp(x) {
    return Math.exp(x);
}
function transformLogn(x) {
    return -Math.log(-x);
}
function transformExpn(x) {
    return -Math.exp(-x);
}
function pow10(x) {
    return isFinite(x) ? +("1e" + x) : x < 0 ? 0 : x;
}
function powp(base) {
    return base === 10 ? pow10 : base === Math.E ? Math.exp : (x)=>Math.pow(base, x);
}
function logp(base) {
    return base === Math.E ? Math.log : base === 10 && Math.log10 || base === 2 && Math.log2 || (base = Math.log(base), (x)=>Math.log(x) / base);
}
function reflect(f) {
    return (x, k)=>-f(-x, k);
}
function loggish(transform) {
    const scale = transform(transformLog, transformExp);
    const domain = scale.domain;
    let base = 10;
    let logs;
    let pows;
    function rescale() {
        logs = logp(base), pows = powp(base);
        if (domain()[0] < 0) {
            logs = reflect(logs), pows = reflect(pows);
            transform(transformLogn, transformExpn);
        } else {
            transform(transformLog, transformExp);
        }
        return scale;
    }
    scale.base = function(_) {
        return arguments.length ? (base = +_, rescale()) : base;
    };
    scale.domain = function(_) {
        return arguments.length ? (domain(_), rescale()) : domain();
    };
    scale.ticks = (count)=>{
        const d = domain();
        let u = d[0];
        let v = d[d.length - 1];
        const r = v < u;
        if (r) [u, v] = [
            v,
            u
        ];
        let i = logs(u);
        let j = logs(v);
        let k;
        let t;
        const n = count == null ? 10 : +count;
        let z = [];
        if (!(base % 1) && j - i < n) {
            i = Math.floor(i), j = Math.ceil(j);
            if (u > 0) for(; i <= j; ++i){
                for(k = 1; k < base; ++k){
                    t = i < 0 ? k / pows(-i) : k * pows(i);
                    if (t < u) continue;
                    if (t > v) break;
                    z.push(t);
                }
            }
            else for(; i <= j; ++i){
                for(k = base - 1; k >= 1; --k){
                    t = i > 0 ? k / pows(-i) : k * pows(i);
                    if (t < u) continue;
                    if (t > v) break;
                    z.push(t);
                }
            }
            if (z.length * 2 < n) z = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$array$2f$src$2f$ticks$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ticks$3e$__["ticks"])(u, v, n);
        } else {
            z = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$array$2f$src$2f$ticks$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ticks$3e$__["ticks"])(i, j, Math.min(j - i, n)).map(pows);
        }
        return r ? z.reverse() : z;
    };
    scale.tickFormat = (count, specifier)=>{
        if (count == null) count = 10;
        if (specifier == null) specifier = base === 10 ? "s" : ",";
        if (typeof specifier !== "function") {
            if (!(base % 1) && (specifier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$format$2f$src$2f$formatSpecifier$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__formatSpecifier$3e$__["formatSpecifier"])(specifier)).precision == null) specifier.trim = true;
            specifier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$format$2f$src$2f$defaultLocale$2e$js__$5b$client$5d$__$28$ecmascript$29$__["format"])(specifier);
        }
        if (count === Infinity) return specifier;
        const k = Math.max(1, base * count / scale.ticks().length); // TODO fast estimate?
        return (d)=>{
            let i = d / pows(Math.round(logs(d)));
            if (i * base < base - 0.5) i *= base;
            return i <= k ? specifier(d) : "";
        };
    };
    scale.nice = ()=>{
        return domain((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$nice$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(domain(), {
            floor: (x)=>pows(Math.floor(logs(x))),
            ceil: (x)=>pows(Math.ceil(logs(x)))
        }));
    };
    return scale;
}
function log() {
    const scale = loggish((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$continuous$2e$js__$5b$client$5d$__$28$ecmascript$29$__["transformer"])()).domain([
        1,
        10
    ]);
    scale.copy = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$continuous$2e$js__$5b$client$5d$__$28$ecmascript$29$__["copy"])(scale, log()).base(scale.base());
    __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$init$2e$js__$5b$client$5d$__$28$ecmascript$29$__["initRange"].apply(scale, arguments);
    return scale;
}
}),
"[project]/project-root/frontend/node_modules/d3-scale/src/symlog.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>symlog,
    "symlogish",
    ()=>symlogish
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$linear$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-scale/src/linear.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$continuous$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-scale/src/continuous.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$init$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-scale/src/init.js [client] (ecmascript)");
;
;
;
function transformSymlog(c) {
    return function(x) {
        return Math.sign(x) * Math.log1p(Math.abs(x / c));
    };
}
function transformSymexp(c) {
    return function(x) {
        return Math.sign(x) * Math.expm1(Math.abs(x)) * c;
    };
}
function symlogish(transform) {
    var c = 1, scale = transform(transformSymlog(c), transformSymexp(c));
    scale.constant = function(_) {
        return arguments.length ? transform(transformSymlog(c = +_), transformSymexp(c)) : c;
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$linear$2e$js__$5b$client$5d$__$28$ecmascript$29$__["linearish"])(scale);
}
function symlog() {
    var scale = symlogish((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$continuous$2e$js__$5b$client$5d$__$28$ecmascript$29$__["transformer"])());
    scale.copy = function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$continuous$2e$js__$5b$client$5d$__$28$ecmascript$29$__["copy"])(scale, symlog()).constant(scale.constant());
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$init$2e$js__$5b$client$5d$__$28$ecmascript$29$__["initRange"].apply(scale, arguments);
}
}),
"[project]/project-root/frontend/node_modules/d3-scale/src/pow.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>pow,
    "powish",
    ()=>powish,
    "sqrt",
    ()=>sqrt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$linear$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-scale/src/linear.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$continuous$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-scale/src/continuous.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$init$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-scale/src/init.js [client] (ecmascript)");
;
;
;
function transformPow(exponent) {
    return function(x) {
        return x < 0 ? -Math.pow(-x, exponent) : Math.pow(x, exponent);
    };
}
function transformSqrt(x) {
    return x < 0 ? -Math.sqrt(-x) : Math.sqrt(x);
}
function transformSquare(x) {
    return x < 0 ? -x * x : x * x;
}
function powish(transform) {
    var scale = transform(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$continuous$2e$js__$5b$client$5d$__$28$ecmascript$29$__["identity"], __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$continuous$2e$js__$5b$client$5d$__$28$ecmascript$29$__["identity"]), exponent = 1;
    function rescale() {
        return exponent === 1 ? transform(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$continuous$2e$js__$5b$client$5d$__$28$ecmascript$29$__["identity"], __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$continuous$2e$js__$5b$client$5d$__$28$ecmascript$29$__["identity"]) : exponent === 0.5 ? transform(transformSqrt, transformSquare) : transform(transformPow(exponent), transformPow(1 / exponent));
    }
    scale.exponent = function(_) {
        return arguments.length ? (exponent = +_, rescale()) : exponent;
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$linear$2e$js__$5b$client$5d$__$28$ecmascript$29$__["linearish"])(scale);
}
function pow() {
    var scale = powish((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$continuous$2e$js__$5b$client$5d$__$28$ecmascript$29$__["transformer"])());
    scale.copy = function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$continuous$2e$js__$5b$client$5d$__$28$ecmascript$29$__["copy"])(scale, pow()).exponent(scale.exponent());
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$init$2e$js__$5b$client$5d$__$28$ecmascript$29$__["initRange"].apply(scale, arguments);
    return scale;
}
function sqrt() {
    return pow.apply(null, arguments).exponent(0.5);
}
}),
"[project]/project-root/frontend/node_modules/d3-scale/src/sequential.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "copy",
    ()=>copy,
    "default",
    ()=>sequential,
    "sequentialLog",
    ()=>sequentialLog,
    "sequentialPow",
    ()=>sequentialPow,
    "sequentialSqrt",
    ()=>sequentialSqrt,
    "sequentialSymlog",
    ()=>sequentialSymlog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$value$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__interpolate$3e$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-interpolate/src/value.js [client] (ecmascript) <export default as interpolate>");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$round$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__interpolateRound$3e$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-interpolate/src/round.js [client] (ecmascript) <export default as interpolateRound>");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$continuous$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-scale/src/continuous.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$init$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-scale/src/init.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$linear$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-scale/src/linear.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$log$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-scale/src/log.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$symlog$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-scale/src/symlog.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$pow$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-scale/src/pow.js [client] (ecmascript)");
;
;
;
;
;
;
;
function transformer() {
    var x0 = 0, x1 = 1, t0, t1, k10, transform, interpolator = __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$continuous$2e$js__$5b$client$5d$__$28$ecmascript$29$__["identity"], clamp = false, unknown;
    function scale(x) {
        return x == null || isNaN(x = +x) ? unknown : interpolator(k10 === 0 ? 0.5 : (x = (transform(x) - t0) * k10, clamp ? Math.max(0, Math.min(1, x)) : x));
    }
    scale.domain = function(_) {
        return arguments.length ? ([x0, x1] = _, t0 = transform(x0 = +x0), t1 = transform(x1 = +x1), k10 = t0 === t1 ? 0 : 1 / (t1 - t0), scale) : [
            x0,
            x1
        ];
    };
    scale.clamp = function(_) {
        return arguments.length ? (clamp = !!_, scale) : clamp;
    };
    scale.interpolator = function(_) {
        return arguments.length ? (interpolator = _, scale) : interpolator;
    };
    function range(interpolate) {
        return function(_) {
            var r0, r1;
            return arguments.length ? ([r0, r1] = _, interpolator = interpolate(r0, r1), scale) : [
                interpolator(0),
                interpolator(1)
            ];
        };
    }
    scale.range = range(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$value$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__interpolate$3e$__["interpolate"]);
    scale.rangeRound = range(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$round$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__interpolateRound$3e$__["interpolateRound"]);
    scale.unknown = function(_) {
        return arguments.length ? (unknown = _, scale) : unknown;
    };
    return function(t) {
        transform = t, t0 = t(x0), t1 = t(x1), k10 = t0 === t1 ? 0 : 1 / (t1 - t0);
        return scale;
    };
}
function copy(source, target) {
    return target.domain(source.domain()).interpolator(source.interpolator()).clamp(source.clamp()).unknown(source.unknown());
}
function sequential() {
    var scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$linear$2e$js__$5b$client$5d$__$28$ecmascript$29$__["linearish"])(transformer()(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$continuous$2e$js__$5b$client$5d$__$28$ecmascript$29$__["identity"]));
    scale.copy = function() {
        return copy(scale, sequential());
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$init$2e$js__$5b$client$5d$__$28$ecmascript$29$__["initInterpolator"].apply(scale, arguments);
}
function sequentialLog() {
    var scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$log$2e$js__$5b$client$5d$__$28$ecmascript$29$__["loggish"])(transformer()).domain([
        1,
        10
    ]);
    scale.copy = function() {
        return copy(scale, sequentialLog()).base(scale.base());
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$init$2e$js__$5b$client$5d$__$28$ecmascript$29$__["initInterpolator"].apply(scale, arguments);
}
function sequentialSymlog() {
    var scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$symlog$2e$js__$5b$client$5d$__$28$ecmascript$29$__["symlogish"])(transformer());
    scale.copy = function() {
        return copy(scale, sequentialSymlog()).constant(scale.constant());
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$init$2e$js__$5b$client$5d$__$28$ecmascript$29$__["initInterpolator"].apply(scale, arguments);
}
function sequentialPow() {
    var scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$pow$2e$js__$5b$client$5d$__$28$ecmascript$29$__["powish"])(transformer());
    scale.copy = function() {
        return copy(scale, sequentialPow()).exponent(scale.exponent());
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$init$2e$js__$5b$client$5d$__$28$ecmascript$29$__["initInterpolator"].apply(scale, arguments);
}
function sequentialSqrt() {
    return sequentialPow.apply(null, arguments).exponent(0.5);
}
}),
"[project]/project-root/frontend/node_modules/d3-scale/src/sequential.js [client] (ecmascript) <export default as scaleSequential>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "scaleSequential",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$sequential$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$sequential$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-scale/src/sequential.js [client] (ecmascript)");
}),
"[project]/project-root/frontend/node_modules/d3-scale/src/log.js [client] (ecmascript) <export default as scaleLog>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "scaleLog",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$log$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$log$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-scale/src/log.js [client] (ecmascript)");
}),
"[project]/project-root/frontend/node_modules/d3-scale/src/pow.js [client] (ecmascript) <export default as scalePow>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "scalePow",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$pow$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$pow$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-scale/src/pow.js [client] (ecmascript)");
}),
"[project]/project-root/frontend/node_modules/d3-scale/src/pow.js [client] (ecmascript) <export sqrt as scaleSqrt>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "scaleSqrt",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$pow$2e$js__$5b$client$5d$__$28$ecmascript$29$__["sqrt"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$pow$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-scale/src/pow.js [client] (ecmascript)");
}),
"[project]/project-root/frontend/node_modules/d3-scale/src/time.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calendar",
    ()=>calendar,
    "default",
    ()=>time
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$year$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-time/src/year.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$month$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-time/src/month.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$week$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__timeSunday__as__timeWeek$3e$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-time/src/week.js [client] (ecmascript) <export timeSunday as timeWeek>");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$day$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-time/src/day.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$hour$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-time/src/hour.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$minute$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-time/src/minute.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$second$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__second__as__timeSecond$3e$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-time/src/second.js [client] (ecmascript) <export second as timeSecond>");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$ticks$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-time/src/ticks.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2d$format$2f$src$2f$defaultLocale$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-time-format/src/defaultLocale.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$continuous$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-scale/src/continuous.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$init$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-scale/src/init.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$nice$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-scale/src/nice.js [client] (ecmascript)");
;
;
;
;
;
function date(t) {
    return new Date(t);
}
function number(t) {
    return t instanceof Date ? +t : +new Date(+t);
}
function calendar(ticks, tickInterval, year, month, week, day, hour, minute, second, format) {
    var scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$continuous$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(), invert = scale.invert, domain = scale.domain;
    var formatMillisecond = format(".%L"), formatSecond = format(":%S"), formatMinute = format("%I:%M"), formatHour = format("%I %p"), formatDay = format("%a %d"), formatWeek = format("%b %d"), formatMonth = format("%B"), formatYear = format("%Y");
    function tickFormat(date) {
        return (second(date) < date ? formatMillisecond : minute(date) < date ? formatSecond : hour(date) < date ? formatMinute : day(date) < date ? formatHour : month(date) < date ? week(date) < date ? formatDay : formatWeek : year(date) < date ? formatMonth : formatYear)(date);
    }
    scale.invert = function(y) {
        return new Date(invert(y));
    };
    scale.domain = function(_) {
        return arguments.length ? domain(Array.from(_, number)) : domain().map(date);
    };
    scale.ticks = function(interval) {
        var d = domain();
        return ticks(d[0], d[d.length - 1], interval == null ? 10 : interval);
    };
    scale.tickFormat = function(count, specifier) {
        return specifier == null ? tickFormat : format(specifier);
    };
    scale.nice = function(interval) {
        var d = domain();
        if (!interval || typeof interval.range !== "function") interval = tickInterval(d[0], d[d.length - 1], interval == null ? 10 : interval);
        return interval ? domain((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$nice$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(d, interval)) : scale;
    };
    scale.copy = function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$continuous$2e$js__$5b$client$5d$__$28$ecmascript$29$__["copy"])(scale, calendar(ticks, tickInterval, year, month, week, day, hour, minute, second, format));
    };
    return scale;
}
function time() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$init$2e$js__$5b$client$5d$__$28$ecmascript$29$__["initRange"].apply(calendar(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$ticks$2e$js__$5b$client$5d$__$28$ecmascript$29$__["timeTicks"], __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$ticks$2e$js__$5b$client$5d$__$28$ecmascript$29$__["timeTickInterval"], __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$year$2e$js__$5b$client$5d$__$28$ecmascript$29$__["timeYear"], __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$month$2e$js__$5b$client$5d$__$28$ecmascript$29$__["timeMonth"], __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$week$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__timeSunday__as__timeWeek$3e$__["timeWeek"], __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$day$2e$js__$5b$client$5d$__$28$ecmascript$29$__["timeDay"], __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$hour$2e$js__$5b$client$5d$__$28$ecmascript$29$__["timeHour"], __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$minute$2e$js__$5b$client$5d$__$28$ecmascript$29$__["timeMinute"], __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$second$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__second__as__timeSecond$3e$__["timeSecond"], __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2d$format$2f$src$2f$defaultLocale$2e$js__$5b$client$5d$__$28$ecmascript$29$__["timeFormat"]).domain([
        new Date(2000, 0, 1),
        new Date(2000, 0, 2)
    ]), arguments);
}
}),
"[project]/project-root/frontend/node_modules/d3-scale/src/time.js [client] (ecmascript) <export default as scaleTime>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "scaleTime",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$time$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$time$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-scale/src/time.js [client] (ecmascript)");
}),
"[project]/project-root/frontend/node_modules/d3-scale/src/utcTime.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>utcTime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$year$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-time/src/year.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$month$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-time/src/month.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$week$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__utcSunday__as__utcWeek$3e$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-time/src/week.js [client] (ecmascript) <export utcSunday as utcWeek>");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$day$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-time/src/day.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$hour$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-time/src/hour.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$minute$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-time/src/minute.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$second$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__second__as__utcSecond$3e$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-time/src/second.js [client] (ecmascript) <export second as utcSecond>");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$ticks$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-time/src/ticks.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2d$format$2f$src$2f$defaultLocale$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-time-format/src/defaultLocale.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$time$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-scale/src/time.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$init$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-scale/src/init.js [client] (ecmascript)");
;
;
;
;
function utcTime() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$init$2e$js__$5b$client$5d$__$28$ecmascript$29$__["initRange"].apply((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$time$2e$js__$5b$client$5d$__$28$ecmascript$29$__["calendar"])(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$ticks$2e$js__$5b$client$5d$__$28$ecmascript$29$__["utcTicks"], __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$ticks$2e$js__$5b$client$5d$__$28$ecmascript$29$__["utcTickInterval"], __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$year$2e$js__$5b$client$5d$__$28$ecmascript$29$__["utcYear"], __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$month$2e$js__$5b$client$5d$__$28$ecmascript$29$__["utcMonth"], __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$week$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__utcSunday__as__utcWeek$3e$__["utcWeek"], __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$day$2e$js__$5b$client$5d$__$28$ecmascript$29$__["utcDay"], __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$hour$2e$js__$5b$client$5d$__$28$ecmascript$29$__["utcHour"], __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$minute$2e$js__$5b$client$5d$__$28$ecmascript$29$__["utcMinute"], __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$second$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__second__as__utcSecond$3e$__["utcSecond"], __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2d$format$2f$src$2f$defaultLocale$2e$js__$5b$client$5d$__$28$ecmascript$29$__["utcFormat"]).domain([
        Date.UTC(2000, 0, 1),
        Date.UTC(2000, 0, 2)
    ]), arguments);
}
}),
"[project]/project-root/frontend/node_modules/d3-scale/src/utcTime.js [client] (ecmascript) <export default as scaleUtc>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "scaleUtc",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$utcTime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$utcTime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-scale/src/utcTime.js [client] (ecmascript)");
}),
"[project]/project-root/frontend/node_modules/d3-scale/src/linear.js [client] (ecmascript) <export default as scaleLinear>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "scaleLinear",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$linear$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$linear$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-scale/src/linear.js [client] (ecmascript)");
}),
"[project]/project-root/frontend/node_modules/d3-scale/src/symlog.js [client] (ecmascript) <export default as scaleSymlog>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "scaleSymlog",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$symlog$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$scale$2f$src$2f$symlog$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-scale/src/symlog.js [client] (ecmascript)");
}),
"[project]/project-root/frontend/node_modules/d3-array/src/ascending.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__(a, b) {
    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}
}),
"[project]/project-root/frontend/node_modules/d3-array/src/bisector.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$array$2f$src$2f$ascending$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-array/src/ascending.js [client] (ecmascript)");
;
function __TURBOPACK__default__export__(f) {
    let delta = f;
    let compare = f;
    if (f.length === 1) {
        delta = (d, x)=>f(d) - x;
        compare = ascendingComparator(f);
    }
    function left(a, x, lo, hi) {
        if (lo == null) lo = 0;
        if (hi == null) hi = a.length;
        while(lo < hi){
            const mid = lo + hi >>> 1;
            if (compare(a[mid], x) < 0) lo = mid + 1;
            else hi = mid;
        }
        return lo;
    }
    function right(a, x, lo, hi) {
        if (lo == null) lo = 0;
        if (hi == null) hi = a.length;
        while(lo < hi){
            const mid = lo + hi >>> 1;
            if (compare(a[mid], x) > 0) hi = mid;
            else lo = mid + 1;
        }
        return lo;
    }
    function center(a, x, lo, hi) {
        if (lo == null) lo = 0;
        if (hi == null) hi = a.length;
        const i = left(a, x, lo, hi - 1);
        return i > lo && delta(a[i - 1], x) > -delta(a[i], x) ? i - 1 : i;
    }
    return {
        left,
        center,
        right
    };
}
function ascendingComparator(f) {
    return (d, x)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$array$2f$src$2f$ascending$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(f(d), x);
}
}),
"[project]/project-root/frontend/node_modules/d3-array/src/number.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "numbers",
    ()=>numbers
]);
function __TURBOPACK__default__export__(x) {
    return x === null ? NaN : +x;
}
function* numbers(values, valueof) {
    if (valueof === undefined) {
        for (let value of values){
            if (value != null && (value = +value) >= value) {
                yield value;
            }
        }
    } else {
        let index = -1;
        for (let value of values){
            if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) {
                yield value;
            }
        }
    }
}
}),
"[project]/project-root/frontend/node_modules/d3-array/src/bisect.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "bisectCenter",
    ()=>bisectCenter,
    "bisectLeft",
    ()=>bisectLeft,
    "bisectRight",
    ()=>bisectRight,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$array$2f$src$2f$ascending$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-array/src/ascending.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$array$2f$src$2f$bisector$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-array/src/bisector.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$array$2f$src$2f$number$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-array/src/number.js [client] (ecmascript)");
;
;
;
const ascendingBisect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$array$2f$src$2f$bisector$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$array$2f$src$2f$ascending$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]);
const bisectRight = ascendingBisect.right;
const bisectLeft = ascendingBisect.left;
const bisectCenter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$array$2f$src$2f$bisector$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$array$2f$src$2f$number$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]).center;
const __TURBOPACK__default__export__ = bisectRight;
}),
"[project]/project-root/frontend/node_modules/d3-array/src/bisect.js [client] (ecmascript) <export default as bisect>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "bisect",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$array$2f$src$2f$bisect$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$array$2f$src$2f$bisect$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-array/src/bisect.js [client] (ecmascript)");
}),
"[project]/project-root/frontend/node_modules/d3-array/src/ticks.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "tickIncrement",
    ()=>tickIncrement,
    "tickStep",
    ()=>tickStep
]);
var e10 = Math.sqrt(50), e5 = Math.sqrt(10), e2 = Math.sqrt(2);
function __TURBOPACK__default__export__(start, stop, count) {
    var reverse, i = -1, n, ticks, step;
    stop = +stop, start = +start, count = +count;
    if (start === stop && count > 0) return [
        start
    ];
    if (reverse = stop < start) n = start, start = stop, stop = n;
    if ((step = tickIncrement(start, stop, count)) === 0 || !isFinite(step)) return [];
    if (step > 0) {
        let r0 = Math.round(start / step), r1 = Math.round(stop / step);
        if (r0 * step < start) ++r0;
        if (r1 * step > stop) --r1;
        ticks = new Array(n = r1 - r0 + 1);
        while(++i < n)ticks[i] = (r0 + i) * step;
    } else {
        step = -step;
        let r0 = Math.round(start * step), r1 = Math.round(stop * step);
        if (r0 / step < start) ++r0;
        if (r1 / step > stop) --r1;
        ticks = new Array(n = r1 - r0 + 1);
        while(++i < n)ticks[i] = (r0 + i) / step;
    }
    if (reverse) ticks.reverse();
    return ticks;
}
function tickIncrement(start, stop, count) {
    var step = (stop - start) / Math.max(0, count), power = Math.floor(Math.log(step) / Math.LN10), error = step / Math.pow(10, power);
    return power >= 0 ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power) : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
}
function tickStep(start, stop, count) {
    var step0 = Math.abs(stop - start) / Math.max(0, count), step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)), error = step0 / step1;
    if (error >= e10) step1 *= 10;
    else if (error >= e5) step1 *= 5;
    else if (error >= e2) step1 *= 2;
    return stop < start ? -step1 : step1;
}
}),
"[project]/project-root/frontend/node_modules/d3-array/src/ticks.js [client] (ecmascript) <export default as ticks>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ticks",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$array$2f$src$2f$ticks$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$array$2f$src$2f$ticks$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-array/src/ticks.js [client] (ecmascript)");
}),
"[project]/project-root/frontend/node_modules/d3-array/src/bisector.js [client] (ecmascript) <export default as bisector>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "bisector",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$array$2f$src$2f$bisector$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$array$2f$src$2f$bisector$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-array/src/bisector.js [client] (ecmascript)");
}),
"[project]/project-root/frontend/node_modules/d3-array/src/range.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__(start, stop, step) {
    start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;
    var i = -1, n = Math.max(0, Math.ceil((stop - start) / step)) | 0, range = new Array(n);
    while(++i < n){
        range[i] = start + i * step;
    }
    return range;
}
}),
"[project]/project-root/frontend/node_modules/d3-array/src/range.js [client] (ecmascript) <export default as range>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "range",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$array$2f$src$2f$range$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$array$2f$src$2f$range$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-array/src/range.js [client] (ecmascript)");
}),
"[project]/project-root/frontend/node_modules/d3-color/src/define.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "extend",
    ()=>extend
]);
function __TURBOPACK__default__export__(constructor, factory, prototype) {
    constructor.prototype = factory.prototype = prototype;
    prototype.constructor = constructor;
}
function extend(parent, definition) {
    var prototype = Object.create(parent.prototype);
    for(var key in definition)prototype[key] = definition[key];
    return prototype;
}
}),
"[project]/project-root/frontend/node_modules/d3-color/src/color.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Color",
    ()=>Color,
    "Rgb",
    ()=>Rgb,
    "brighter",
    ()=>brighter,
    "darker",
    ()=>darker,
    "default",
    ()=>color,
    "hsl",
    ()=>hsl,
    "hslConvert",
    ()=>hslConvert,
    "rgb",
    ()=>rgb,
    "rgbConvert",
    ()=>rgbConvert
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$color$2f$src$2f$define$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-color/src/define.js [client] (ecmascript)");
;
function Color() {}
var darker = 0.7;
var brighter = 1 / darker;
var reI = "\\s*([+-]?\\d+)\\s*", reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", reHex = /^#([0-9a-f]{3,8})$/, reRgbInteger = new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`), reRgbPercent = new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`), reRgbaInteger = new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`), reRgbaPercent = new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`), reHslPercent = new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`), reHslaPercent = new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`);
var named = {
    aliceblue: 0xf0f8ff,
    antiquewhite: 0xfaebd7,
    aqua: 0x00ffff,
    aquamarine: 0x7fffd4,
    azure: 0xf0ffff,
    beige: 0xf5f5dc,
    bisque: 0xffe4c4,
    black: 0x000000,
    blanchedalmond: 0xffebcd,
    blue: 0x0000ff,
    blueviolet: 0x8a2be2,
    brown: 0xa52a2a,
    burlywood: 0xdeb887,
    cadetblue: 0x5f9ea0,
    chartreuse: 0x7fff00,
    chocolate: 0xd2691e,
    coral: 0xff7f50,
    cornflowerblue: 0x6495ed,
    cornsilk: 0xfff8dc,
    crimson: 0xdc143c,
    cyan: 0x00ffff,
    darkblue: 0x00008b,
    darkcyan: 0x008b8b,
    darkgoldenrod: 0xb8860b,
    darkgray: 0xa9a9a9,
    darkgreen: 0x006400,
    darkgrey: 0xa9a9a9,
    darkkhaki: 0xbdb76b,
    darkmagenta: 0x8b008b,
    darkolivegreen: 0x556b2f,
    darkorange: 0xff8c00,
    darkorchid: 0x9932cc,
    darkred: 0x8b0000,
    darksalmon: 0xe9967a,
    darkseagreen: 0x8fbc8f,
    darkslateblue: 0x483d8b,
    darkslategray: 0x2f4f4f,
    darkslategrey: 0x2f4f4f,
    darkturquoise: 0x00ced1,
    darkviolet: 0x9400d3,
    deeppink: 0xff1493,
    deepskyblue: 0x00bfff,
    dimgray: 0x696969,
    dimgrey: 0x696969,
    dodgerblue: 0x1e90ff,
    firebrick: 0xb22222,
    floralwhite: 0xfffaf0,
    forestgreen: 0x228b22,
    fuchsia: 0xff00ff,
    gainsboro: 0xdcdcdc,
    ghostwhite: 0xf8f8ff,
    gold: 0xffd700,
    goldenrod: 0xdaa520,
    gray: 0x808080,
    green: 0x008000,
    greenyellow: 0xadff2f,
    grey: 0x808080,
    honeydew: 0xf0fff0,
    hotpink: 0xff69b4,
    indianred: 0xcd5c5c,
    indigo: 0x4b0082,
    ivory: 0xfffff0,
    khaki: 0xf0e68c,
    lavender: 0xe6e6fa,
    lavenderblush: 0xfff0f5,
    lawngreen: 0x7cfc00,
    lemonchiffon: 0xfffacd,
    lightblue: 0xadd8e6,
    lightcoral: 0xf08080,
    lightcyan: 0xe0ffff,
    lightgoldenrodyellow: 0xfafad2,
    lightgray: 0xd3d3d3,
    lightgreen: 0x90ee90,
    lightgrey: 0xd3d3d3,
    lightpink: 0xffb6c1,
    lightsalmon: 0xffa07a,
    lightseagreen: 0x20b2aa,
    lightskyblue: 0x87cefa,
    lightslategray: 0x778899,
    lightslategrey: 0x778899,
    lightsteelblue: 0xb0c4de,
    lightyellow: 0xffffe0,
    lime: 0x00ff00,
    limegreen: 0x32cd32,
    linen: 0xfaf0e6,
    magenta: 0xff00ff,
    maroon: 0x800000,
    mediumaquamarine: 0x66cdaa,
    mediumblue: 0x0000cd,
    mediumorchid: 0xba55d3,
    mediumpurple: 0x9370db,
    mediumseagreen: 0x3cb371,
    mediumslateblue: 0x7b68ee,
    mediumspringgreen: 0x00fa9a,
    mediumturquoise: 0x48d1cc,
    mediumvioletred: 0xc71585,
    midnightblue: 0x191970,
    mintcream: 0xf5fffa,
    mistyrose: 0xffe4e1,
    moccasin: 0xffe4b5,
    navajowhite: 0xffdead,
    navy: 0x000080,
    oldlace: 0xfdf5e6,
    olive: 0x808000,
    olivedrab: 0x6b8e23,
    orange: 0xffa500,
    orangered: 0xff4500,
    orchid: 0xda70d6,
    palegoldenrod: 0xeee8aa,
    palegreen: 0x98fb98,
    paleturquoise: 0xafeeee,
    palevioletred: 0xdb7093,
    papayawhip: 0xffefd5,
    peachpuff: 0xffdab9,
    peru: 0xcd853f,
    pink: 0xffc0cb,
    plum: 0xdda0dd,
    powderblue: 0xb0e0e6,
    purple: 0x800080,
    rebeccapurple: 0x663399,
    red: 0xff0000,
    rosybrown: 0xbc8f8f,
    royalblue: 0x4169e1,
    saddlebrown: 0x8b4513,
    salmon: 0xfa8072,
    sandybrown: 0xf4a460,
    seagreen: 0x2e8b57,
    seashell: 0xfff5ee,
    sienna: 0xa0522d,
    silver: 0xc0c0c0,
    skyblue: 0x87ceeb,
    slateblue: 0x6a5acd,
    slategray: 0x708090,
    slategrey: 0x708090,
    snow: 0xfffafa,
    springgreen: 0x00ff7f,
    steelblue: 0x4682b4,
    tan: 0xd2b48c,
    teal: 0x008080,
    thistle: 0xd8bfd8,
    tomato: 0xff6347,
    turquoise: 0x40e0d0,
    violet: 0xee82ee,
    wheat: 0xf5deb3,
    white: 0xffffff,
    whitesmoke: 0xf5f5f5,
    yellow: 0xffff00,
    yellowgreen: 0x9acd32
};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$color$2f$src$2f$define$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(Color, color, {
    copy (channels) {
        return Object.assign(new this.constructor, this, channels);
    },
    displayable () {
        return this.rgb().displayable();
    },
    hex: color_formatHex,
    formatHex: color_formatHex,
    formatHex8: color_formatHex8,
    formatHsl: color_formatHsl,
    formatRgb: color_formatRgb,
    toString: color_formatRgb
});
function color_formatHex() {
    return this.rgb().formatHex();
}
function color_formatHex8() {
    return this.rgb().formatHex8();
}
function color_formatHsl() {
    return hslConvert(this).formatHsl();
}
function color_formatRgb() {
    return this.rgb().formatRgb();
}
function color(format) {
    var m, l;
    format = (format + "").trim().toLowerCase();
    return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000
     : l === 3 ? new Rgb(m >> 8 & 0xf | m >> 4 & 0xf0, m >> 4 & 0xf | m & 0xf0, (m & 0xf) << 4 | m & 0xf, 1) // #f00
     : l === 8 ? rgba(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
     : l === 4 ? rgba(m >> 12 & 0xf | m >> 8 & 0xf0, m >> 8 & 0xf | m >> 4 & 0xf0, m >> 4 & 0xf | m & 0xf0, ((m & 0xf) << 4 | m & 0xf) / 0xff) // #f000
     : null) // invalid hex
     : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
     : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
     : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
     : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
     : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
     : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
     : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
     : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
}
function rgbn(n) {
    return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}
function rgba(r, g, b, a) {
    if (a <= 0) r = g = b = NaN;
    return new Rgb(r, g, b, a);
}
function rgbConvert(o) {
    if (!(o instanceof Color)) o = color(o);
    if (!o) return new Rgb;
    o = o.rgb();
    return new Rgb(o.r, o.g, o.b, o.opacity);
}
function rgb(r, g, b, opacity) {
    return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}
function Rgb(r, g, b, opacity) {
    this.r = +r;
    this.g = +g;
    this.b = +b;
    this.opacity = +opacity;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$color$2f$src$2f$define$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(Rgb, rgb, (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$color$2f$src$2f$define$2e$js__$5b$client$5d$__$28$ecmascript$29$__["extend"])(Color, {
    brighter (k) {
        k = k == null ? brighter : Math.pow(brighter, k);
        return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    darker (k) {
        k = k == null ? darker : Math.pow(darker, k);
        return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    rgb () {
        return this;
    },
    clamp () {
        return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
    },
    displayable () {
        return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
    },
    hex: rgb_formatHex,
    formatHex: rgb_formatHex,
    formatHex8: rgb_formatHex8,
    formatRgb: rgb_formatRgb,
    toString: rgb_formatRgb
}));
function rgb_formatHex() {
    return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
}
function rgb_formatHex8() {
    return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function rgb_formatRgb() {
    const a = clampa(this.opacity);
    return `${a === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a === 1 ? ")" : `, ${a})`}`;
}
function clampa(opacity) {
    return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
}
function clampi(value) {
    return Math.max(0, Math.min(255, Math.round(value) || 0));
}
function hex(value) {
    value = clampi(value);
    return (value < 16 ? "0" : "") + value.toString(16);
}
function hsla(h, s, l, a) {
    if (a <= 0) h = s = l = NaN;
    else if (l <= 0 || l >= 1) h = s = NaN;
    else if (s <= 0) h = NaN;
    return new Hsl(h, s, l, a);
}
function hslConvert(o) {
    if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
    if (!(o instanceof Color)) o = color(o);
    if (!o) return new Hsl;
    if (o instanceof Hsl) return o;
    o = o.rgb();
    var r = o.r / 255, g = o.g / 255, b = o.b / 255, min = Math.min(r, g, b), max = Math.max(r, g, b), h = NaN, s = max - min, l = (max + min) / 2;
    if (s) {
        if (r === max) h = (g - b) / s + (g < b) * 6;
        else if (g === max) h = (b - r) / s + 2;
        else h = (r - g) / s + 4;
        s /= l < 0.5 ? max + min : 2 - max - min;
        h *= 60;
    } else {
        s = l > 0 && l < 1 ? 0 : h;
    }
    return new Hsl(h, s, l, o.opacity);
}
function hsl(h, s, l, opacity) {
    return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}
function Hsl(h, s, l, opacity) {
    this.h = +h;
    this.s = +s;
    this.l = +l;
    this.opacity = +opacity;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$color$2f$src$2f$define$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(Hsl, hsl, (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$color$2f$src$2f$define$2e$js__$5b$client$5d$__$28$ecmascript$29$__["extend"])(Color, {
    brighter (k) {
        k = k == null ? brighter : Math.pow(brighter, k);
        return new Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    darker (k) {
        k = k == null ? darker : Math.pow(darker, k);
        return new Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    rgb () {
        var h = this.h % 360 + (this.h < 0) * 360, s = isNaN(h) || isNaN(this.s) ? 0 : this.s, l = this.l, m2 = l + (l < 0.5 ? l : 1 - l) * s, m1 = 2 * l - m2;
        return new Rgb(hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2), hsl2rgb(h, m1, m2), hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2), this.opacity);
    },
    clamp () {
        return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
    },
    displayable () {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
    },
    formatHsl () {
        const a = clampa(this.opacity);
        return `${a === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a === 1 ? ")" : `, ${a})`}`;
    }
}));
function clamph(value) {
    value = (value || 0) % 360;
    return value < 0 ? value + 360 : value;
}
function clampt(value) {
    return Math.max(0, Math.min(1, value || 0));
}
/* From FvD 13.37, CSS Color Module Level 3 */ function hsl2rgb(h, m1, m2) {
    return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
}
}),
"[project]/project-root/frontend/node_modules/d3-color/src/color.js [client] (ecmascript) <export default as color>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "color",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$color$2f$src$2f$color$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$color$2f$src$2f$color$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-color/src/color.js [client] (ecmascript)");
}),
"[project]/project-root/frontend/node_modules/d3-interpolate/src/basis.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "basis",
    ()=>basis,
    "default",
    ()=>__TURBOPACK__default__export__
]);
function basis(t1, v0, v1, v2, v3) {
    var t2 = t1 * t1, t3 = t2 * t1;
    return ((1 - 3 * t1 + 3 * t2 - t3) * v0 + (4 - 6 * t2 + 3 * t3) * v1 + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2 + t3 * v3) / 6;
}
function __TURBOPACK__default__export__(values) {
    var n = values.length - 1;
    return function(t) {
        var i = t <= 0 ? t = 0 : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n), v1 = values[i], v2 = values[i + 1], v0 = i > 0 ? values[i - 1] : 2 * v1 - v2, v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
        return basis((t - i / n) * n, v0, v1, v2, v3);
    };
}
}),
"[project]/project-root/frontend/node_modules/d3-interpolate/src/basisClosed.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$basis$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-interpolate/src/basis.js [client] (ecmascript)");
;
function __TURBOPACK__default__export__(values) {
    var n = values.length;
    return function(t) {
        var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n), v0 = values[(i + n - 1) % n], v1 = values[i % n], v2 = values[(i + 1) % n], v3 = values[(i + 2) % n];
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$basis$2e$js__$5b$client$5d$__$28$ecmascript$29$__["basis"])((t - i / n) * n, v0, v1, v2, v3);
    };
}
}),
"[project]/project-root/frontend/node_modules/d3-interpolate/src/constant.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = (x)=>()=>x;
}),
"[project]/project-root/frontend/node_modules/d3-interpolate/src/color.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>nogamma,
    "gamma",
    ()=>gamma,
    "hue",
    ()=>hue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$constant$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-interpolate/src/constant.js [client] (ecmascript)");
;
function linear(a, d) {
    return function(t) {
        return a + t * d;
    };
}
function exponential(a, b, y) {
    return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
        return Math.pow(a + t * b, y);
    };
}
function hue(a, b) {
    var d = b - a;
    return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$constant$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(isNaN(a) ? b : a);
}
function gamma(y) {
    return (y = +y) === 1 ? nogamma : function(a, b) {
        return b - a ? exponential(a, b, y) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$constant$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(isNaN(a) ? b : a);
    };
}
function nogamma(a, b) {
    var d = b - a;
    return d ? linear(a, d) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$constant$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(isNaN(a) ? b : a);
}
}),
"[project]/project-root/frontend/node_modules/d3-interpolate/src/rgb.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "rgbBasis",
    ()=>rgbBasis,
    "rgbBasisClosed",
    ()=>rgbBasisClosed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$color$2f$src$2f$color$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-color/src/color.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$basis$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-interpolate/src/basis.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$basisClosed$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-interpolate/src/basisClosed.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$color$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-interpolate/src/color.js [client] (ecmascript)");
;
;
;
;
const __TURBOPACK__default__export__ = function rgbGamma(y) {
    var color = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$color$2e$js__$5b$client$5d$__$28$ecmascript$29$__["gamma"])(y);
    function rgb(start, end) {
        var r = color((start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$color$2f$src$2f$color$2e$js__$5b$client$5d$__$28$ecmascript$29$__["rgb"])(start)).r, (end = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$color$2f$src$2f$color$2e$js__$5b$client$5d$__$28$ecmascript$29$__["rgb"])(end)).r), g = color(start.g, end.g), b = color(start.b, end.b), opacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$color$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(start.opacity, end.opacity);
        return function(t) {
            start.r = r(t);
            start.g = g(t);
            start.b = b(t);
            start.opacity = opacity(t);
            return start + "";
        };
    }
    rgb.gamma = rgbGamma;
    return rgb;
}(1);
function rgbSpline(spline) {
    return function(colors) {
        var n = colors.length, r = new Array(n), g = new Array(n), b = new Array(n), i, color;
        for(i = 0; i < n; ++i){
            color = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$color$2f$src$2f$color$2e$js__$5b$client$5d$__$28$ecmascript$29$__["rgb"])(colors[i]);
            r[i] = color.r || 0;
            g[i] = color.g || 0;
            b[i] = color.b || 0;
        }
        r = spline(r);
        g = spline(g);
        b = spline(b);
        color.opacity = 1;
        return function(t) {
            color.r = r(t);
            color.g = g(t);
            color.b = b(t);
            return color + "";
        };
    };
}
var rgbBasis = rgbSpline(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$basis$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]);
var rgbBasisClosed = rgbSpline(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$basisClosed$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]);
}),
"[project]/project-root/frontend/node_modules/d3-interpolate/src/numberArray.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "isNumberArray",
    ()=>isNumberArray
]);
function __TURBOPACK__default__export__(a, b) {
    if (!b) b = [];
    var n = a ? Math.min(b.length, a.length) : 0, c = b.slice(), i;
    return function(t) {
        for(i = 0; i < n; ++i)c[i] = a[i] * (1 - t) + b[i] * t;
        return c;
    };
}
function isNumberArray(x) {
    return ArrayBuffer.isView(x) && !(x instanceof DataView);
}
}),
"[project]/project-root/frontend/node_modules/d3-interpolate/src/array.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "genericArray",
    ()=>genericArray
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$value$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-interpolate/src/value.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$numberArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-interpolate/src/numberArray.js [client] (ecmascript)");
;
;
function __TURBOPACK__default__export__(a, b) {
    return ((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$numberArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__["isNumberArray"])(b) ? __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$numberArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"] : genericArray)(a, b);
}
function genericArray(a, b) {
    var nb = b ? b.length : 0, na = a ? Math.min(nb, a.length) : 0, x = new Array(na), c = new Array(nb), i;
    for(i = 0; i < na; ++i)x[i] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$value$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(a[i], b[i]);
    for(; i < nb; ++i)c[i] = b[i];
    return function(t) {
        for(i = 0; i < na; ++i)c[i] = x[i](t);
        return c;
    };
}
}),
"[project]/project-root/frontend/node_modules/d3-interpolate/src/date.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__(a, b) {
    var d = new Date;
    return a = +a, b = +b, function(t) {
        return d.setTime(a * (1 - t) + b * t), d;
    };
}
}),
"[project]/project-root/frontend/node_modules/d3-interpolate/src/number.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__(a, b) {
    return a = +a, b = +b, function(t) {
        return a * (1 - t) + b * t;
    };
}
}),
"[project]/project-root/frontend/node_modules/d3-interpolate/src/object.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$value$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-interpolate/src/value.js [client] (ecmascript)");
;
function __TURBOPACK__default__export__(a, b) {
    var i = {}, c = {}, k;
    if (a === null || typeof a !== "object") a = {};
    if (b === null || typeof b !== "object") b = {};
    for(k in b){
        if (k in a) {
            i[k] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$value$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(a[k], b[k]);
        } else {
            c[k] = b[k];
        }
    }
    return function(t) {
        for(k in i)c[k] = i[k](t);
        return c;
    };
}
}),
"[project]/project-root/frontend/node_modules/d3-interpolate/src/string.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$number$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-interpolate/src/number.js [client] (ecmascript)");
;
var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, reB = new RegExp(reA.source, "g");
function zero(b) {
    return function() {
        return b;
    };
}
function one(b) {
    return function(t) {
        return b(t) + "";
    };
}
function __TURBOPACK__default__export__(a, b) {
    var bi = reA.lastIndex = reB.lastIndex = 0, am, bm, bs, i = -1, s = [], q = []; // number interpolators
    // Coerce inputs to strings.
    a = a + "", b = b + "";
    // Interpolate pairs of numbers in a & b.
    while((am = reA.exec(a)) && (bm = reB.exec(b))){
        if ((bs = bm.index) > bi) {
            bs = b.slice(bi, bs);
            if (s[i]) s[i] += bs; // coalesce with previous string
            else s[++i] = bs;
        }
        if ((am = am[0]) === (bm = bm[0])) {
            if (s[i]) s[i] += bm; // coalesce with previous string
            else s[++i] = bm;
        } else {
            s[++i] = null;
            q.push({
                i: i,
                x: (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$number$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(am, bm)
            });
        }
        bi = reB.lastIndex;
    }
    // Add remains of b.
    if (bi < b.length) {
        bs = b.slice(bi);
        if (s[i]) s[i] += bs; // coalesce with previous string
        else s[++i] = bs;
    }
    // Special optimization for only a single match.
    // Otherwise, interpolate each of the numbers and rejoin the string.
    return s.length < 2 ? q[0] ? one(q[0].x) : zero(b) : (b = q.length, function(t) {
        for(var i = 0, o; i < b; ++i)s[(o = q[i]).i] = o.x(t);
        return s.join("");
    });
}
}),
"[project]/project-root/frontend/node_modules/d3-interpolate/src/value.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$color$2f$src$2f$color$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__color$3e$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-color/src/color.js [client] (ecmascript) <export default as color>");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$rgb$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-interpolate/src/rgb.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$array$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-interpolate/src/array.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$date$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-interpolate/src/date.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$number$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-interpolate/src/number.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$object$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-interpolate/src/object.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$string$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-interpolate/src/string.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$constant$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-interpolate/src/constant.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$numberArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-interpolate/src/numberArray.js [client] (ecmascript)");
;
;
;
;
;
;
;
;
;
function __TURBOPACK__default__export__(a, b) {
    var t = typeof b, c;
    return b == null || t === "boolean" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$constant$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(b) : (t === "number" ? __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$number$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"] : t === "string" ? (c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$color$2f$src$2f$color$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__color$3e$__["color"])(b)) ? (b = c, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$rgb$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]) : __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$string$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"] : b instanceof __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$color$2f$src$2f$color$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__color$3e$__["color"] ? __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$rgb$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"] : b instanceof Date ? __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$date$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$numberArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__["isNumberArray"])(b) ? __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$numberArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"] : Array.isArray(b) ? __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$array$2e$js__$5b$client$5d$__$28$ecmascript$29$__["genericArray"] : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$object$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"] : __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$number$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(a, b);
}
}),
"[project]/project-root/frontend/node_modules/d3-interpolate/src/value.js [client] (ecmascript) <export default as interpolate>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "interpolate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$value$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$value$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-interpolate/src/value.js [client] (ecmascript)");
}),
"[project]/project-root/frontend/node_modules/d3-interpolate/src/round.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__(a, b) {
    return a = +a, b = +b, function(t) {
        return Math.round(a * (1 - t) + b * t);
    };
}
}),
"[project]/project-root/frontend/node_modules/d3-interpolate/src/round.js [client] (ecmascript) <export default as interpolateRound>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "interpolateRound",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$round$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$round$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-interpolate/src/round.js [client] (ecmascript)");
}),
"[project]/project-root/frontend/node_modules/d3-interpolate/src/number.js [client] (ecmascript) <export default as interpolateNumber>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "interpolateNumber",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$number$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$number$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-interpolate/src/number.js [client] (ecmascript)");
}),
"[project]/project-root/frontend/node_modules/d3-interpolate/src/string.js [client] (ecmascript) <export default as interpolateString>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "interpolateString",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$string$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$string$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-interpolate/src/string.js [client] (ecmascript)");
}),
"[project]/project-root/frontend/node_modules/d3-interpolate/src/date.js [client] (ecmascript) <export default as interpolateDate>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "interpolateDate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$date$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$date$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-interpolate/src/date.js [client] (ecmascript)");
}),
"[project]/project-root/frontend/node_modules/d3-format/src/formatDecimal.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "formatDecimalParts",
    ()=>formatDecimalParts
]);
function __TURBOPACK__default__export__(x) {
    return Math.abs(x = Math.round(x)) >= 1e21 ? x.toLocaleString("en").replace(/,/g, "") : x.toString(10);
}
function formatDecimalParts(x, p) {
    if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity
    var i, coefficient = x.slice(0, i);
    // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
    // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
    return [
        coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
        +x.slice(i + 1)
    ];
}
}),
"[project]/project-root/frontend/node_modules/d3-format/src/exponent.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$format$2f$src$2f$formatDecimal$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-format/src/formatDecimal.js [client] (ecmascript)");
;
function __TURBOPACK__default__export__(x) {
    return x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$format$2f$src$2f$formatDecimal$2e$js__$5b$client$5d$__$28$ecmascript$29$__["formatDecimalParts"])(Math.abs(x)), x ? x[1] : NaN;
}
}),
"[project]/project-root/frontend/node_modules/d3-format/src/formatGroup.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__(grouping, thousands) {
    return function(value, width) {
        var i = value.length, t = [], j = 0, g = grouping[0], length = 0;
        while(i > 0 && g > 0){
            if (length + g + 1 > width) g = Math.max(1, width - length);
            t.push(value.substring(i -= g, i + g));
            if ((length += g + 1) > width) break;
            g = grouping[j = (j + 1) % grouping.length];
        }
        return t.reverse().join(thousands);
    };
}
}),
"[project]/project-root/frontend/node_modules/d3-format/src/formatNumerals.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__(numerals) {
    return function(value) {
        return value.replace(/[0-9]/g, function(i) {
            return numerals[+i];
        });
    };
}
}),
"[project]/project-root/frontend/node_modules/d3-format/src/formatSpecifier.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// [[fill]align][sign][symbol][0][width][,][.precision][~][type]
__turbopack_context__.s([
    "FormatSpecifier",
    ()=>FormatSpecifier,
    "default",
    ()=>formatSpecifier
]);
var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function formatSpecifier(specifier) {
    if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
    var match;
    return new FormatSpecifier({
        fill: match[1],
        align: match[2],
        sign: match[3],
        symbol: match[4],
        zero: match[5],
        width: match[6],
        comma: match[7],
        precision: match[8] && match[8].slice(1),
        trim: match[9],
        type: match[10]
    });
}
formatSpecifier.prototype = FormatSpecifier.prototype; // instanceof
function FormatSpecifier(specifier) {
    this.fill = specifier.fill === undefined ? " " : specifier.fill + "";
    this.align = specifier.align === undefined ? ">" : specifier.align + "";
    this.sign = specifier.sign === undefined ? "-" : specifier.sign + "";
    this.symbol = specifier.symbol === undefined ? "" : specifier.symbol + "";
    this.zero = !!specifier.zero;
    this.width = specifier.width === undefined ? undefined : +specifier.width;
    this.comma = !!specifier.comma;
    this.precision = specifier.precision === undefined ? undefined : +specifier.precision;
    this.trim = !!specifier.trim;
    this.type = specifier.type === undefined ? "" : specifier.type + "";
}
FormatSpecifier.prototype.toString = function() {
    return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === undefined ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === undefined ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
}),
"[project]/project-root/frontend/node_modules/d3-format/src/formatTrim.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Trims insignificant zeros, e.g., replaces 1.2000k with 1.2k.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__(s) {
    out: for(var n = s.length, i = 1, i0 = -1, i1; i < n; ++i){
        switch(s[i]){
            case ".":
                i0 = i1 = i;
                break;
            case "0":
                if (i0 === 0) i0 = i;
                i1 = i;
                break;
            default:
                if (!+s[i]) break out;
                if (i0 > 0) i0 = 0;
                break;
        }
    }
    return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
}
}),
"[project]/project-root/frontend/node_modules/d3-format/src/formatPrefixAuto.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "prefixExponent",
    ()=>prefixExponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$format$2f$src$2f$formatDecimal$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-format/src/formatDecimal.js [client] (ecmascript)");
;
var prefixExponent;
function __TURBOPACK__default__export__(x, p) {
    var d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$format$2f$src$2f$formatDecimal$2e$js__$5b$client$5d$__$28$ecmascript$29$__["formatDecimalParts"])(x, p);
    if (!d) return x + "";
    var coefficient = d[0], exponent = d[1], i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1, n = coefficient.length;
    return i === n ? coefficient : i > n ? coefficient + new Array(i - n + 1).join("0") : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i) : "0." + new Array(1 - i).join("0") + (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$format$2f$src$2f$formatDecimal$2e$js__$5b$client$5d$__$28$ecmascript$29$__["formatDecimalParts"])(x, Math.max(0, p + i - 1))[0]; // less than 1y!
}
}),
"[project]/project-root/frontend/node_modules/d3-format/src/formatRounded.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$format$2f$src$2f$formatDecimal$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-format/src/formatDecimal.js [client] (ecmascript)");
;
function __TURBOPACK__default__export__(x, p) {
    var d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$format$2f$src$2f$formatDecimal$2e$js__$5b$client$5d$__$28$ecmascript$29$__["formatDecimalParts"])(x, p);
    if (!d) return x + "";
    var coefficient = d[0], exponent = d[1];
    return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1) : coefficient + new Array(exponent - coefficient.length + 2).join("0");
}
}),
"[project]/project-root/frontend/node_modules/d3-format/src/formatTypes.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$format$2f$src$2f$formatDecimal$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-format/src/formatDecimal.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$format$2f$src$2f$formatPrefixAuto$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-format/src/formatPrefixAuto.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$format$2f$src$2f$formatRounded$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-format/src/formatRounded.js [client] (ecmascript)");
;
;
;
const __TURBOPACK__default__export__ = {
    "%": (x, p)=>(x * 100).toFixed(p),
    "b": (x)=>Math.round(x).toString(2),
    "c": (x)=>x + "",
    "d": __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$format$2f$src$2f$formatDecimal$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"],
    "e": (x, p)=>x.toExponential(p),
    "f": (x, p)=>x.toFixed(p),
    "g": (x, p)=>x.toPrecision(p),
    "o": (x)=>Math.round(x).toString(8),
    "p": (x, p)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$format$2f$src$2f$formatRounded$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(x * 100, p),
    "r": __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$format$2f$src$2f$formatRounded$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"],
    "s": __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$format$2f$src$2f$formatPrefixAuto$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"],
    "X": (x)=>Math.round(x).toString(16).toUpperCase(),
    "x": (x)=>Math.round(x).toString(16)
};
}),
"[project]/project-root/frontend/node_modules/d3-format/src/identity.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__(x) {
    return x;
}
}),
"[project]/project-root/frontend/node_modules/d3-format/src/locale.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$format$2f$src$2f$exponent$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-format/src/exponent.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$format$2f$src$2f$formatGroup$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-format/src/formatGroup.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$format$2f$src$2f$formatNumerals$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-format/src/formatNumerals.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$format$2f$src$2f$formatSpecifier$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-format/src/formatSpecifier.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$format$2f$src$2f$formatTrim$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-format/src/formatTrim.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$format$2f$src$2f$formatTypes$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-format/src/formatTypes.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$format$2f$src$2f$formatPrefixAuto$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-format/src/formatPrefixAuto.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$format$2f$src$2f$identity$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-format/src/identity.js [client] (ecmascript)");
;
;
;
;
;
;
;
;
var map = Array.prototype.map, prefixes = [
    "y",
    "z",
    "a",
    "f",
    "p",
    "n",
    "µ",
    "m",
    "",
    "k",
    "M",
    "G",
    "T",
    "P",
    "E",
    "Z",
    "Y"
];
function __TURBOPACK__default__export__(locale) {
    var group = locale.grouping === undefined || locale.thousands === undefined ? __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$format$2f$src$2f$identity$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$format$2f$src$2f$formatGroup$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(map.call(locale.grouping, Number), locale.thousands + ""), currencyPrefix = locale.currency === undefined ? "" : locale.currency[0] + "", currencySuffix = locale.currency === undefined ? "" : locale.currency[1] + "", decimal = locale.decimal === undefined ? "." : locale.decimal + "", numerals = locale.numerals === undefined ? __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$format$2f$src$2f$identity$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$format$2f$src$2f$formatNumerals$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(map.call(locale.numerals, String)), percent = locale.percent === undefined ? "%" : locale.percent + "", minus = locale.minus === undefined ? "−" : locale.minus + "", nan = locale.nan === undefined ? "NaN" : locale.nan + "";
    function newFormat(specifier) {
        specifier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$format$2f$src$2f$formatSpecifier$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(specifier);
        var fill = specifier.fill, align = specifier.align, sign = specifier.sign, symbol = specifier.symbol, zero = specifier.zero, width = specifier.width, comma = specifier.comma, precision = specifier.precision, trim = specifier.trim, type = specifier.type;
        // The "n" type is an alias for ",g".
        if (type === "n") comma = true, type = "g";
        else if (!__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$format$2f$src$2f$formatTypes$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"][type]) precision === undefined && (precision = 12), trim = true, type = "g";
        // If zero fill is specified, padding goes after sign and before digits.
        if (zero || fill === "0" && align === "=") zero = true, fill = "0", align = "=";
        // Compute the prefix and suffix.
        // For SI-prefix, the suffix is lazily computed.
        var prefix = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "", suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type) ? percent : "";
        // What format function should we use?
        // Is this an integer type?
        // Can this type generate exponential notation?
        var formatType = __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$format$2f$src$2f$formatTypes$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"][type], maybeSuffix = /[defgprs%]/.test(type);
        // Set the default precision if not specified,
        // or clamp the specified precision to the supported range.
        // For significant precision, it must be in [1, 21].
        // For fixed precision, it must be in [0, 20].
        precision = precision === undefined ? 6 : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision)) : Math.max(0, Math.min(20, precision));
        function format(value) {
            var valuePrefix = prefix, valueSuffix = suffix, i, n, c;
            if (type === "c") {
                valueSuffix = formatType(value) + valueSuffix;
                value = "";
            } else {
                value = +value;
                // Determine the sign. -0 is not less than 0, but 1 / -0 is!
                var valueNegative = value < 0 || 1 / value < 0;
                // Perform the initial formatting.
                value = isNaN(value) ? nan : formatType(Math.abs(value), precision);
                // Trim insignificant zeros.
                if (trim) value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$format$2f$src$2f$formatTrim$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(value);
                // If a negative value rounds to zero after formatting, and no explicit positive sign is requested, hide the sign.
                if (valueNegative && +value === 0 && sign !== "+") valueNegative = false;
                // Compute the prefix and suffix.
                valuePrefix = (valueNegative ? sign === "(" ? sign : minus : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
                valueSuffix = (type === "s" ? prefixes[8 + __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$format$2f$src$2f$formatPrefixAuto$2e$js__$5b$client$5d$__$28$ecmascript$29$__["prefixExponent"] / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");
                // Break the formatted value into the integer “value” part that can be
                // grouped, and fractional or exponential “suffix” part that is not.
                if (maybeSuffix) {
                    i = -1, n = value.length;
                    while(++i < n){
                        if (c = value.charCodeAt(i), 48 > c || c > 57) {
                            valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
                            value = value.slice(0, i);
                            break;
                        }
                    }
                }
            }
            // If the fill character is not "0", grouping is applied before padding.
            if (comma && !zero) value = group(value, Infinity);
            // Compute the padding.
            var length = valuePrefix.length + value.length + valueSuffix.length, padding = length < width ? new Array(width - length + 1).join(fill) : "";
            // If the fill character is "0", grouping is applied after padding.
            if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";
            // Reconstruct the final output based on the desired alignment.
            switch(align){
                case "<":
                    value = valuePrefix + value + valueSuffix + padding;
                    break;
                case "=":
                    value = valuePrefix + padding + value + valueSuffix;
                    break;
                case "^":
                    value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length);
                    break;
                default:
                    value = padding + valuePrefix + value + valueSuffix;
                    break;
            }
            return numerals(value);
        }
        format.toString = function() {
            return specifier + "";
        };
        return format;
    }
    function formatPrefix(specifier, value) {
        var f = newFormat((specifier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$format$2f$src$2f$formatSpecifier$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(specifier), specifier.type = "f", specifier)), e = Math.max(-8, Math.min(8, Math.floor((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$format$2f$src$2f$exponent$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(value) / 3))) * 3, k = Math.pow(10, -e), prefix = prefixes[8 + e / 3];
        return function(value) {
            return f(k * value) + prefix;
        };
    }
    return {
        format: newFormat,
        formatPrefix: formatPrefix
    };
}
}),
"[project]/project-root/frontend/node_modules/d3-format/src/defaultLocale.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>defaultLocale,
    "format",
    ()=>format,
    "formatPrefix",
    ()=>formatPrefix
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$format$2f$src$2f$locale$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-format/src/locale.js [client] (ecmascript)");
;
var locale;
var format;
var formatPrefix;
defaultLocale({
    thousands: ",",
    grouping: [
        3
    ],
    currency: [
        "$",
        ""
    ]
});
function defaultLocale(definition) {
    locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$format$2f$src$2f$locale$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(definition);
    format = locale.format;
    formatPrefix = locale.formatPrefix;
    return locale;
}
}),
"[project]/project-root/frontend/node_modules/d3-format/src/formatSpecifier.js [client] (ecmascript) <export default as formatSpecifier>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatSpecifier",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$format$2f$src$2f$formatSpecifier$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$format$2f$src$2f$formatSpecifier$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-format/src/formatSpecifier.js [client] (ecmascript)");
}),
"[project]/project-root/frontend/node_modules/d3-format/src/precisionFixed.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$format$2f$src$2f$exponent$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-format/src/exponent.js [client] (ecmascript)");
;
function __TURBOPACK__default__export__(step) {
    return Math.max(0, -(0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$format$2f$src$2f$exponent$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(Math.abs(step)));
}
}),
"[project]/project-root/frontend/node_modules/d3-format/src/precisionFixed.js [client] (ecmascript) <export default as precisionFixed>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "precisionFixed",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$format$2f$src$2f$precisionFixed$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$format$2f$src$2f$precisionFixed$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-format/src/precisionFixed.js [client] (ecmascript)");
}),
"[project]/project-root/frontend/node_modules/d3-format/src/precisionPrefix.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$format$2f$src$2f$exponent$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-format/src/exponent.js [client] (ecmascript)");
;
function __TURBOPACK__default__export__(step, value) {
    return Math.max(0, Math.max(-8, Math.min(8, Math.floor((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$format$2f$src$2f$exponent$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(value) / 3))) * 3 - (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$format$2f$src$2f$exponent$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(Math.abs(step)));
}
}),
"[project]/project-root/frontend/node_modules/d3-format/src/precisionPrefix.js [client] (ecmascript) <export default as precisionPrefix>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "precisionPrefix",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$format$2f$src$2f$precisionPrefix$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$format$2f$src$2f$precisionPrefix$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-format/src/precisionPrefix.js [client] (ecmascript)");
}),
"[project]/project-root/frontend/node_modules/d3-format/src/precisionRound.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$format$2f$src$2f$exponent$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-format/src/exponent.js [client] (ecmascript)");
;
function __TURBOPACK__default__export__(step, max) {
    step = Math.abs(step), max = Math.abs(max) - step;
    return Math.max(0, (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$format$2f$src$2f$exponent$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(max) - (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$format$2f$src$2f$exponent$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(step)) + 1;
}
}),
"[project]/project-root/frontend/node_modules/d3-format/src/precisionRound.js [client] (ecmascript) <export default as precisionRound>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "precisionRound",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$format$2f$src$2f$precisionRound$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$format$2f$src$2f$precisionRound$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-format/src/precisionRound.js [client] (ecmascript)");
}),
"[project]/project-root/frontend/node_modules/d3-time/src/interval.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "timeInterval",
    ()=>timeInterval
]);
const t0 = new Date, t1 = new Date;
function timeInterval(floori, offseti, count, field) {
    function interval(date) {
        return floori(date = arguments.length === 0 ? new Date : new Date(+date)), date;
    }
    interval.floor = (date)=>{
        return floori(date = new Date(+date)), date;
    };
    interval.ceil = (date)=>{
        return floori(date = new Date(date - 1)), offseti(date, 1), floori(date), date;
    };
    interval.round = (date)=>{
        const d0 = interval(date), d1 = interval.ceil(date);
        return date - d0 < d1 - date ? d0 : d1;
    };
    interval.offset = (date, step)=>{
        return offseti(date = new Date(+date), step == null ? 1 : Math.floor(step)), date;
    };
    interval.range = (start, stop, step)=>{
        const range = [];
        start = interval.ceil(start);
        step = step == null ? 1 : Math.floor(step);
        if (!(start < stop) || !(step > 0)) return range; // also handles Invalid Date
        let previous;
        do range.push(previous = new Date(+start)), offseti(start, step), floori(start);
        while (previous < start && start < stop)
        return range;
    };
    interval.filter = (test)=>{
        return timeInterval((date)=>{
            if (date >= date) while(floori(date), !test(date))date.setTime(date - 1);
        }, (date, step)=>{
            if (date >= date) {
                if (step < 0) while(++step <= 0){
                    while(offseti(date, -1), !test(date)){} // eslint-disable-line no-empty
                }
                else while(--step >= 0){
                    while(offseti(date, +1), !test(date)){} // eslint-disable-line no-empty
                }
            }
        });
    };
    if (count) {
        interval.count = (start, end)=>{
            t0.setTime(+start), t1.setTime(+end);
            floori(t0), floori(t1);
            return Math.floor(count(t0, t1));
        };
        interval.every = (step)=>{
            step = Math.floor(step);
            return !isFinite(step) || !(step > 0) ? null : !(step > 1) ? interval : interval.filter(field ? (d)=>field(d) % step === 0 : (d)=>interval.count(0, d) % step === 0);
        };
    }
    return interval;
}
}),
"[project]/project-root/frontend/node_modules/d3-time/src/year.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "timeYear",
    ()=>timeYear,
    "timeYears",
    ()=>timeYears,
    "utcYear",
    ()=>utcYear,
    "utcYears",
    ()=>utcYears
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$interval$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-time/src/interval.js [client] (ecmascript)");
;
const timeYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$interval$2e$js__$5b$client$5d$__$28$ecmascript$29$__["timeInterval"])((date)=>{
    date.setMonth(0, 1);
    date.setHours(0, 0, 0, 0);
}, (date, step)=>{
    date.setFullYear(date.getFullYear() + step);
}, (start, end)=>{
    return end.getFullYear() - start.getFullYear();
}, (date)=>{
    return date.getFullYear();
});
// An optimized implementation for this simple case.
timeYear.every = (k)=>{
    return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$interval$2e$js__$5b$client$5d$__$28$ecmascript$29$__["timeInterval"])((date)=>{
        date.setFullYear(Math.floor(date.getFullYear() / k) * k);
        date.setMonth(0, 1);
        date.setHours(0, 0, 0, 0);
    }, (date, step)=>{
        date.setFullYear(date.getFullYear() + step * k);
    });
};
const timeYears = timeYear.range;
const utcYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$interval$2e$js__$5b$client$5d$__$28$ecmascript$29$__["timeInterval"])((date)=>{
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
}, (date, step)=>{
    date.setUTCFullYear(date.getUTCFullYear() + step);
}, (start, end)=>{
    return end.getUTCFullYear() - start.getUTCFullYear();
}, (date)=>{
    return date.getUTCFullYear();
});
// An optimized implementation for this simple case.
utcYear.every = (k)=>{
    return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$interval$2e$js__$5b$client$5d$__$28$ecmascript$29$__["timeInterval"])((date)=>{
        date.setUTCFullYear(Math.floor(date.getUTCFullYear() / k) * k);
        date.setUTCMonth(0, 1);
        date.setUTCHours(0, 0, 0, 0);
    }, (date, step)=>{
        date.setUTCFullYear(date.getUTCFullYear() + step * k);
    });
};
const utcYears = utcYear.range;
}),
"[project]/project-root/frontend/node_modules/d3-time/src/month.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "timeMonth",
    ()=>timeMonth,
    "timeMonths",
    ()=>timeMonths,
    "utcMonth",
    ()=>utcMonth,
    "utcMonths",
    ()=>utcMonths
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$interval$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-time/src/interval.js [client] (ecmascript)");
;
const timeMonth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$interval$2e$js__$5b$client$5d$__$28$ecmascript$29$__["timeInterval"])((date)=>{
    date.setDate(1);
    date.setHours(0, 0, 0, 0);
}, (date, step)=>{
    date.setMonth(date.getMonth() + step);
}, (start, end)=>{
    return end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12;
}, (date)=>{
    return date.getMonth();
});
const timeMonths = timeMonth.range;
const utcMonth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$interval$2e$js__$5b$client$5d$__$28$ecmascript$29$__["timeInterval"])((date)=>{
    date.setUTCDate(1);
    date.setUTCHours(0, 0, 0, 0);
}, (date, step)=>{
    date.setUTCMonth(date.getUTCMonth() + step);
}, (start, end)=>{
    return end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
}, (date)=>{
    return date.getUTCMonth();
});
const utcMonths = utcMonth.range;
}),
"[project]/project-root/frontend/node_modules/d3-time/src/duration.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "durationDay",
    ()=>durationDay,
    "durationHour",
    ()=>durationHour,
    "durationMinute",
    ()=>durationMinute,
    "durationMonth",
    ()=>durationMonth,
    "durationSecond",
    ()=>durationSecond,
    "durationWeek",
    ()=>durationWeek,
    "durationYear",
    ()=>durationYear
]);
const durationSecond = 1000;
const durationMinute = durationSecond * 60;
const durationHour = durationMinute * 60;
const durationDay = durationHour * 24;
const durationWeek = durationDay * 7;
const durationMonth = durationDay * 30;
const durationYear = durationDay * 365;
}),
"[project]/project-root/frontend/node_modules/d3-time/src/week.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "timeFriday",
    ()=>timeFriday,
    "timeFridays",
    ()=>timeFridays,
    "timeMonday",
    ()=>timeMonday,
    "timeMondays",
    ()=>timeMondays,
    "timeSaturday",
    ()=>timeSaturday,
    "timeSaturdays",
    ()=>timeSaturdays,
    "timeSunday",
    ()=>timeSunday,
    "timeSundays",
    ()=>timeSundays,
    "timeThursday",
    ()=>timeThursday,
    "timeThursdays",
    ()=>timeThursdays,
    "timeTuesday",
    ()=>timeTuesday,
    "timeTuesdays",
    ()=>timeTuesdays,
    "timeWednesday",
    ()=>timeWednesday,
    "timeWednesdays",
    ()=>timeWednesdays,
    "utcFriday",
    ()=>utcFriday,
    "utcFridays",
    ()=>utcFridays,
    "utcMonday",
    ()=>utcMonday,
    "utcMondays",
    ()=>utcMondays,
    "utcSaturday",
    ()=>utcSaturday,
    "utcSaturdays",
    ()=>utcSaturdays,
    "utcSunday",
    ()=>utcSunday,
    "utcSundays",
    ()=>utcSundays,
    "utcThursday",
    ()=>utcThursday,
    "utcThursdays",
    ()=>utcThursdays,
    "utcTuesday",
    ()=>utcTuesday,
    "utcTuesdays",
    ()=>utcTuesdays,
    "utcWednesday",
    ()=>utcWednesday,
    "utcWednesdays",
    ()=>utcWednesdays
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$interval$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-time/src/interval.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$duration$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-time/src/duration.js [client] (ecmascript)");
;
;
function timeWeekday(i) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$interval$2e$js__$5b$client$5d$__$28$ecmascript$29$__["timeInterval"])((date)=>{
        date.setDate(date.getDate() - (date.getDay() + 7 - i) % 7);
        date.setHours(0, 0, 0, 0);
    }, (date, step)=>{
        date.setDate(date.getDate() + step * 7);
    }, (start, end)=>{
        return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$duration$2e$js__$5b$client$5d$__$28$ecmascript$29$__["durationMinute"]) / __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$duration$2e$js__$5b$client$5d$__$28$ecmascript$29$__["durationWeek"];
    });
}
const timeSunday = timeWeekday(0);
const timeMonday = timeWeekday(1);
const timeTuesday = timeWeekday(2);
const timeWednesday = timeWeekday(3);
const timeThursday = timeWeekday(4);
const timeFriday = timeWeekday(5);
const timeSaturday = timeWeekday(6);
const timeSundays = timeSunday.range;
const timeMondays = timeMonday.range;
const timeTuesdays = timeTuesday.range;
const timeWednesdays = timeWednesday.range;
const timeThursdays = timeThursday.range;
const timeFridays = timeFriday.range;
const timeSaturdays = timeSaturday.range;
function utcWeekday(i) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$interval$2e$js__$5b$client$5d$__$28$ecmascript$29$__["timeInterval"])((date)=>{
        date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i) % 7);
        date.setUTCHours(0, 0, 0, 0);
    }, (date, step)=>{
        date.setUTCDate(date.getUTCDate() + step * 7);
    }, (start, end)=>{
        return (end - start) / __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$duration$2e$js__$5b$client$5d$__$28$ecmascript$29$__["durationWeek"];
    });
}
const utcSunday = utcWeekday(0);
const utcMonday = utcWeekday(1);
const utcTuesday = utcWeekday(2);
const utcWednesday = utcWeekday(3);
const utcThursday = utcWeekday(4);
const utcFriday = utcWeekday(5);
const utcSaturday = utcWeekday(6);
const utcSundays = utcSunday.range;
const utcMondays = utcMonday.range;
const utcTuesdays = utcTuesday.range;
const utcWednesdays = utcWednesday.range;
const utcThursdays = utcThursday.range;
const utcFridays = utcFriday.range;
const utcSaturdays = utcSaturday.range;
}),
"[project]/project-root/frontend/node_modules/d3-time/src/week.js [client] (ecmascript) <export timeSunday as timeWeek>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "timeWeek",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$week$2e$js__$5b$client$5d$__$28$ecmascript$29$__["timeSunday"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$week$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-time/src/week.js [client] (ecmascript)");
}),
"[project]/project-root/frontend/node_modules/d3-time/src/day.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "timeDay",
    ()=>timeDay,
    "timeDays",
    ()=>timeDays,
    "unixDay",
    ()=>unixDay,
    "unixDays",
    ()=>unixDays,
    "utcDay",
    ()=>utcDay,
    "utcDays",
    ()=>utcDays
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$interval$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-time/src/interval.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$duration$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-time/src/duration.js [client] (ecmascript)");
;
;
const timeDay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$interval$2e$js__$5b$client$5d$__$28$ecmascript$29$__["timeInterval"])((date)=>date.setHours(0, 0, 0, 0), (date, step)=>date.setDate(date.getDate() + step), (start, end)=>(end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$duration$2e$js__$5b$client$5d$__$28$ecmascript$29$__["durationMinute"]) / __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$duration$2e$js__$5b$client$5d$__$28$ecmascript$29$__["durationDay"], (date)=>date.getDate() - 1);
const timeDays = timeDay.range;
const utcDay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$interval$2e$js__$5b$client$5d$__$28$ecmascript$29$__["timeInterval"])((date)=>{
    date.setUTCHours(0, 0, 0, 0);
}, (date, step)=>{
    date.setUTCDate(date.getUTCDate() + step);
}, (start, end)=>{
    return (end - start) / __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$duration$2e$js__$5b$client$5d$__$28$ecmascript$29$__["durationDay"];
}, (date)=>{
    return date.getUTCDate() - 1;
});
const utcDays = utcDay.range;
const unixDay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$interval$2e$js__$5b$client$5d$__$28$ecmascript$29$__["timeInterval"])((date)=>{
    date.setUTCHours(0, 0, 0, 0);
}, (date, step)=>{
    date.setUTCDate(date.getUTCDate() + step);
}, (start, end)=>{
    return (end - start) / __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$duration$2e$js__$5b$client$5d$__$28$ecmascript$29$__["durationDay"];
}, (date)=>{
    return Math.floor(date / __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$duration$2e$js__$5b$client$5d$__$28$ecmascript$29$__["durationDay"]);
});
const unixDays = unixDay.range;
}),
"[project]/project-root/frontend/node_modules/d3-time/src/hour.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "timeHour",
    ()=>timeHour,
    "timeHours",
    ()=>timeHours,
    "utcHour",
    ()=>utcHour,
    "utcHours",
    ()=>utcHours
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$interval$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-time/src/interval.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$duration$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-time/src/duration.js [client] (ecmascript)");
;
;
const timeHour = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$interval$2e$js__$5b$client$5d$__$28$ecmascript$29$__["timeInterval"])((date)=>{
    date.setTime(date - date.getMilliseconds() - date.getSeconds() * __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$duration$2e$js__$5b$client$5d$__$28$ecmascript$29$__["durationSecond"] - date.getMinutes() * __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$duration$2e$js__$5b$client$5d$__$28$ecmascript$29$__["durationMinute"]);
}, (date, step)=>{
    date.setTime(+date + step * __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$duration$2e$js__$5b$client$5d$__$28$ecmascript$29$__["durationHour"]);
}, (start, end)=>{
    return (end - start) / __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$duration$2e$js__$5b$client$5d$__$28$ecmascript$29$__["durationHour"];
}, (date)=>{
    return date.getHours();
});
const timeHours = timeHour.range;
const utcHour = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$interval$2e$js__$5b$client$5d$__$28$ecmascript$29$__["timeInterval"])((date)=>{
    date.setUTCMinutes(0, 0, 0);
}, (date, step)=>{
    date.setTime(+date + step * __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$duration$2e$js__$5b$client$5d$__$28$ecmascript$29$__["durationHour"]);
}, (start, end)=>{
    return (end - start) / __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$duration$2e$js__$5b$client$5d$__$28$ecmascript$29$__["durationHour"];
}, (date)=>{
    return date.getUTCHours();
});
const utcHours = utcHour.range;
}),
"[project]/project-root/frontend/node_modules/d3-time/src/minute.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "timeMinute",
    ()=>timeMinute,
    "timeMinutes",
    ()=>timeMinutes,
    "utcMinute",
    ()=>utcMinute,
    "utcMinutes",
    ()=>utcMinutes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$interval$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-time/src/interval.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$duration$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-time/src/duration.js [client] (ecmascript)");
;
;
const timeMinute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$interval$2e$js__$5b$client$5d$__$28$ecmascript$29$__["timeInterval"])((date)=>{
    date.setTime(date - date.getMilliseconds() - date.getSeconds() * __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$duration$2e$js__$5b$client$5d$__$28$ecmascript$29$__["durationSecond"]);
}, (date, step)=>{
    date.setTime(+date + step * __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$duration$2e$js__$5b$client$5d$__$28$ecmascript$29$__["durationMinute"]);
}, (start, end)=>{
    return (end - start) / __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$duration$2e$js__$5b$client$5d$__$28$ecmascript$29$__["durationMinute"];
}, (date)=>{
    return date.getMinutes();
});
const timeMinutes = timeMinute.range;
const utcMinute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$interval$2e$js__$5b$client$5d$__$28$ecmascript$29$__["timeInterval"])((date)=>{
    date.setUTCSeconds(0, 0);
}, (date, step)=>{
    date.setTime(+date + step * __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$duration$2e$js__$5b$client$5d$__$28$ecmascript$29$__["durationMinute"]);
}, (start, end)=>{
    return (end - start) / __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$duration$2e$js__$5b$client$5d$__$28$ecmascript$29$__["durationMinute"];
}, (date)=>{
    return date.getUTCMinutes();
});
const utcMinutes = utcMinute.range;
}),
"[project]/project-root/frontend/node_modules/d3-time/src/second.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "second",
    ()=>second,
    "seconds",
    ()=>seconds
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$interval$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-time/src/interval.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$duration$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-time/src/duration.js [client] (ecmascript)");
;
;
const second = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$interval$2e$js__$5b$client$5d$__$28$ecmascript$29$__["timeInterval"])((date)=>{
    date.setTime(date - date.getMilliseconds());
}, (date, step)=>{
    date.setTime(+date + step * __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$duration$2e$js__$5b$client$5d$__$28$ecmascript$29$__["durationSecond"]);
}, (start, end)=>{
    return (end - start) / __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$duration$2e$js__$5b$client$5d$__$28$ecmascript$29$__["durationSecond"];
}, (date)=>{
    return date.getUTCSeconds();
});
const seconds = second.range;
}),
"[project]/project-root/frontend/node_modules/d3-time/src/second.js [client] (ecmascript) <export second as timeSecond>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "timeSecond",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$second$2e$js__$5b$client$5d$__$28$ecmascript$29$__["second"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$second$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-time/src/second.js [client] (ecmascript)");
}),
"[project]/project-root/frontend/node_modules/d3-time/src/millisecond.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "millisecond",
    ()=>millisecond,
    "milliseconds",
    ()=>milliseconds
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$interval$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-time/src/interval.js [client] (ecmascript)");
;
const millisecond = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$interval$2e$js__$5b$client$5d$__$28$ecmascript$29$__["timeInterval"])(()=>{
// noop
}, (date, step)=>{
    date.setTime(+date + step);
}, (start, end)=>{
    return end - start;
});
// An optimized implementation for this simple case.
millisecond.every = (k)=>{
    k = Math.floor(k);
    if (!isFinite(k) || !(k > 0)) return null;
    if (!(k > 1)) return millisecond;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$interval$2e$js__$5b$client$5d$__$28$ecmascript$29$__["timeInterval"])((date)=>{
        date.setTime(Math.floor(date / k) * k);
    }, (date, step)=>{
        date.setTime(+date + step * k);
    }, (start, end)=>{
        return (end - start) / k;
    });
};
const milliseconds = millisecond.range;
}),
"[project]/project-root/frontend/node_modules/d3-time/src/ticks.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "timeTickInterval",
    ()=>timeTickInterval,
    "timeTicks",
    ()=>timeTicks,
    "utcTickInterval",
    ()=>utcTickInterval,
    "utcTicks",
    ()=>utcTicks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$array$2f$src$2f$bisector$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__bisector$3e$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-array/src/bisector.js [client] (ecmascript) <export default as bisector>");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$array$2f$src$2f$ticks$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-array/src/ticks.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$duration$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-time/src/duration.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$millisecond$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-time/src/millisecond.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$second$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-time/src/second.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$minute$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-time/src/minute.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$hour$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-time/src/hour.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$day$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-time/src/day.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$week$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-time/src/week.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$month$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-time/src/month.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$year$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-time/src/year.js [client] (ecmascript)");
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
function ticker(year, month, week, day, hour, minute) {
    const tickIntervals = [
        [
            __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$second$2e$js__$5b$client$5d$__$28$ecmascript$29$__["second"],
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$duration$2e$js__$5b$client$5d$__$28$ecmascript$29$__["durationSecond"]
        ],
        [
            __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$second$2e$js__$5b$client$5d$__$28$ecmascript$29$__["second"],
            5,
            5 * __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$duration$2e$js__$5b$client$5d$__$28$ecmascript$29$__["durationSecond"]
        ],
        [
            __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$second$2e$js__$5b$client$5d$__$28$ecmascript$29$__["second"],
            15,
            15 * __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$duration$2e$js__$5b$client$5d$__$28$ecmascript$29$__["durationSecond"]
        ],
        [
            __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$second$2e$js__$5b$client$5d$__$28$ecmascript$29$__["second"],
            30,
            30 * __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$duration$2e$js__$5b$client$5d$__$28$ecmascript$29$__["durationSecond"]
        ],
        [
            minute,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$duration$2e$js__$5b$client$5d$__$28$ecmascript$29$__["durationMinute"]
        ],
        [
            minute,
            5,
            5 * __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$duration$2e$js__$5b$client$5d$__$28$ecmascript$29$__["durationMinute"]
        ],
        [
            minute,
            15,
            15 * __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$duration$2e$js__$5b$client$5d$__$28$ecmascript$29$__["durationMinute"]
        ],
        [
            minute,
            30,
            30 * __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$duration$2e$js__$5b$client$5d$__$28$ecmascript$29$__["durationMinute"]
        ],
        [
            hour,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$duration$2e$js__$5b$client$5d$__$28$ecmascript$29$__["durationHour"]
        ],
        [
            hour,
            3,
            3 * __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$duration$2e$js__$5b$client$5d$__$28$ecmascript$29$__["durationHour"]
        ],
        [
            hour,
            6,
            6 * __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$duration$2e$js__$5b$client$5d$__$28$ecmascript$29$__["durationHour"]
        ],
        [
            hour,
            12,
            12 * __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$duration$2e$js__$5b$client$5d$__$28$ecmascript$29$__["durationHour"]
        ],
        [
            day,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$duration$2e$js__$5b$client$5d$__$28$ecmascript$29$__["durationDay"]
        ],
        [
            day,
            2,
            2 * __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$duration$2e$js__$5b$client$5d$__$28$ecmascript$29$__["durationDay"]
        ],
        [
            week,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$duration$2e$js__$5b$client$5d$__$28$ecmascript$29$__["durationWeek"]
        ],
        [
            month,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$duration$2e$js__$5b$client$5d$__$28$ecmascript$29$__["durationMonth"]
        ],
        [
            month,
            3,
            3 * __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$duration$2e$js__$5b$client$5d$__$28$ecmascript$29$__["durationMonth"]
        ],
        [
            year,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$duration$2e$js__$5b$client$5d$__$28$ecmascript$29$__["durationYear"]
        ]
    ];
    function ticks(start, stop, count) {
        const reverse = stop < start;
        if (reverse) [start, stop] = [
            stop,
            start
        ];
        const interval = count && typeof count.range === "function" ? count : tickInterval(start, stop, count);
        const ticks = interval ? interval.range(start, +stop + 1) : []; // inclusive stop
        return reverse ? ticks.reverse() : ticks;
    }
    function tickInterval(start, stop, count) {
        const target = Math.abs(stop - start) / count;
        const i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$array$2f$src$2f$bisector$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__bisector$3e$__["bisector"])(([, , step])=>step).right(tickIntervals, target);
        if (i === tickIntervals.length) return year.every((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$array$2f$src$2f$ticks$2e$js__$5b$client$5d$__$28$ecmascript$29$__["tickStep"])(start / __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$duration$2e$js__$5b$client$5d$__$28$ecmascript$29$__["durationYear"], stop / __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$duration$2e$js__$5b$client$5d$__$28$ecmascript$29$__["durationYear"], count));
        if (i === 0) return __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$millisecond$2e$js__$5b$client$5d$__$28$ecmascript$29$__["millisecond"].every(Math.max((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$array$2f$src$2f$ticks$2e$js__$5b$client$5d$__$28$ecmascript$29$__["tickStep"])(start, stop, count), 1));
        const [t, step] = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
        return t.every(step);
    }
    return [
        ticks,
        tickInterval
    ];
}
const [utcTicks, utcTickInterval] = ticker(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$year$2e$js__$5b$client$5d$__$28$ecmascript$29$__["utcYear"], __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$month$2e$js__$5b$client$5d$__$28$ecmascript$29$__["utcMonth"], __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$week$2e$js__$5b$client$5d$__$28$ecmascript$29$__["utcSunday"], __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$day$2e$js__$5b$client$5d$__$28$ecmascript$29$__["unixDay"], __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$hour$2e$js__$5b$client$5d$__$28$ecmascript$29$__["utcHour"], __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$minute$2e$js__$5b$client$5d$__$28$ecmascript$29$__["utcMinute"]);
const [timeTicks, timeTickInterval] = ticker(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$year$2e$js__$5b$client$5d$__$28$ecmascript$29$__["timeYear"], __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$month$2e$js__$5b$client$5d$__$28$ecmascript$29$__["timeMonth"], __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$week$2e$js__$5b$client$5d$__$28$ecmascript$29$__["timeSunday"], __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$day$2e$js__$5b$client$5d$__$28$ecmascript$29$__["timeDay"], __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$hour$2e$js__$5b$client$5d$__$28$ecmascript$29$__["timeHour"], __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$minute$2e$js__$5b$client$5d$__$28$ecmascript$29$__["timeMinute"]);
;
}),
"[project]/project-root/frontend/node_modules/d3-time/src/week.js [client] (ecmascript) <export utcSunday as utcWeek>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "utcWeek",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$week$2e$js__$5b$client$5d$__$28$ecmascript$29$__["utcSunday"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$week$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-time/src/week.js [client] (ecmascript)");
}),
"[project]/project-root/frontend/node_modules/d3-time/src/second.js [client] (ecmascript) <export second as utcSecond>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "utcSecond",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$second$2e$js__$5b$client$5d$__$28$ecmascript$29$__["second"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$second$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-time/src/second.js [client] (ecmascript)");
}),
"[project]/project-root/frontend/node_modules/d3-time-format/src/locale.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>formatLocale
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$day$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-time/src/day.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$week$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-time/src/week.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$year$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-time/src/year.js [client] (ecmascript)");
;
function localDate(d) {
    if (0 <= d.y && d.y < 100) {
        var date = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
        date.setFullYear(d.y);
        return date;
    }
    return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
}
function utcDate(d) {
    if (0 <= d.y && d.y < 100) {
        var date = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
        date.setUTCFullYear(d.y);
        return date;
    }
    return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
}
function newDate(y, m, d) {
    return {
        y: y,
        m: m,
        d: d,
        H: 0,
        M: 0,
        S: 0,
        L: 0
    };
}
function formatLocale(locale) {
    var locale_dateTime = locale.dateTime, locale_date = locale.date, locale_time = locale.time, locale_periods = locale.periods, locale_weekdays = locale.days, locale_shortWeekdays = locale.shortDays, locale_months = locale.months, locale_shortMonths = locale.shortMonths;
    var periodRe = formatRe(locale_periods), periodLookup = formatLookup(locale_periods), weekdayRe = formatRe(locale_weekdays), weekdayLookup = formatLookup(locale_weekdays), shortWeekdayRe = formatRe(locale_shortWeekdays), shortWeekdayLookup = formatLookup(locale_shortWeekdays), monthRe = formatRe(locale_months), monthLookup = formatLookup(locale_months), shortMonthRe = formatRe(locale_shortMonths), shortMonthLookup = formatLookup(locale_shortMonths);
    var formats = {
        "a": formatShortWeekday,
        "A": formatWeekday,
        "b": formatShortMonth,
        "B": formatMonth,
        "c": null,
        "d": formatDayOfMonth,
        "e": formatDayOfMonth,
        "f": formatMicroseconds,
        "g": formatYearISO,
        "G": formatFullYearISO,
        "H": formatHour24,
        "I": formatHour12,
        "j": formatDayOfYear,
        "L": formatMilliseconds,
        "m": formatMonthNumber,
        "M": formatMinutes,
        "p": formatPeriod,
        "q": formatQuarter,
        "Q": formatUnixTimestamp,
        "s": formatUnixTimestampSeconds,
        "S": formatSeconds,
        "u": formatWeekdayNumberMonday,
        "U": formatWeekNumberSunday,
        "V": formatWeekNumberISO,
        "w": formatWeekdayNumberSunday,
        "W": formatWeekNumberMonday,
        "x": null,
        "X": null,
        "y": formatYear,
        "Y": formatFullYear,
        "Z": formatZone,
        "%": formatLiteralPercent
    };
    var utcFormats = {
        "a": formatUTCShortWeekday,
        "A": formatUTCWeekday,
        "b": formatUTCShortMonth,
        "B": formatUTCMonth,
        "c": null,
        "d": formatUTCDayOfMonth,
        "e": formatUTCDayOfMonth,
        "f": formatUTCMicroseconds,
        "g": formatUTCYearISO,
        "G": formatUTCFullYearISO,
        "H": formatUTCHour24,
        "I": formatUTCHour12,
        "j": formatUTCDayOfYear,
        "L": formatUTCMilliseconds,
        "m": formatUTCMonthNumber,
        "M": formatUTCMinutes,
        "p": formatUTCPeriod,
        "q": formatUTCQuarter,
        "Q": formatUnixTimestamp,
        "s": formatUnixTimestampSeconds,
        "S": formatUTCSeconds,
        "u": formatUTCWeekdayNumberMonday,
        "U": formatUTCWeekNumberSunday,
        "V": formatUTCWeekNumberISO,
        "w": formatUTCWeekdayNumberSunday,
        "W": formatUTCWeekNumberMonday,
        "x": null,
        "X": null,
        "y": formatUTCYear,
        "Y": formatUTCFullYear,
        "Z": formatUTCZone,
        "%": formatLiteralPercent
    };
    var parses = {
        "a": parseShortWeekday,
        "A": parseWeekday,
        "b": parseShortMonth,
        "B": parseMonth,
        "c": parseLocaleDateTime,
        "d": parseDayOfMonth,
        "e": parseDayOfMonth,
        "f": parseMicroseconds,
        "g": parseYear,
        "G": parseFullYear,
        "H": parseHour24,
        "I": parseHour24,
        "j": parseDayOfYear,
        "L": parseMilliseconds,
        "m": parseMonthNumber,
        "M": parseMinutes,
        "p": parsePeriod,
        "q": parseQuarter,
        "Q": parseUnixTimestamp,
        "s": parseUnixTimestampSeconds,
        "S": parseSeconds,
        "u": parseWeekdayNumberMonday,
        "U": parseWeekNumberSunday,
        "V": parseWeekNumberISO,
        "w": parseWeekdayNumberSunday,
        "W": parseWeekNumberMonday,
        "x": parseLocaleDate,
        "X": parseLocaleTime,
        "y": parseYear,
        "Y": parseFullYear,
        "Z": parseZone,
        "%": parseLiteralPercent
    };
    // These recursive directive definitions must be deferred.
    formats.x = newFormat(locale_date, formats);
    formats.X = newFormat(locale_time, formats);
    formats.c = newFormat(locale_dateTime, formats);
    utcFormats.x = newFormat(locale_date, utcFormats);
    utcFormats.X = newFormat(locale_time, utcFormats);
    utcFormats.c = newFormat(locale_dateTime, utcFormats);
    function newFormat(specifier, formats) {
        return function(date) {
            var string = [], i = -1, j = 0, n = specifier.length, c, pad, format;
            if (!(date instanceof Date)) date = new Date(+date);
            while(++i < n){
                if (specifier.charCodeAt(i) === 37) {
                    string.push(specifier.slice(j, i));
                    if ((pad = pads[c = specifier.charAt(++i)]) != null) c = specifier.charAt(++i);
                    else pad = c === "e" ? " " : "0";
                    if (format = formats[c]) c = format(date, pad);
                    string.push(c);
                    j = i + 1;
                }
            }
            string.push(specifier.slice(j, i));
            return string.join("");
        };
    }
    function newParse(specifier, Z) {
        return function(string) {
            var d = newDate(1900, undefined, 1), i = parseSpecifier(d, specifier, string += "", 0), week, day;
            if (i != string.length) return null;
            // If a UNIX timestamp is specified, return it.
            if ("Q" in d) return new Date(d.Q);
            if ("s" in d) return new Date(d.s * 1000 + ("L" in d ? d.L : 0));
            // If this is utcParse, never use the local timezone.
            if (Z && !("Z" in d)) d.Z = 0;
            // The am-pm flag is 0 for AM, and 1 for PM.
            if ("p" in d) d.H = d.H % 12 + d.p * 12;
            // If the month was not specified, inherit from the quarter.
            if (d.m === undefined) d.m = "q" in d ? d.q : 0;
            // Convert day-of-week and week-of-year to day-of-year.
            if ("V" in d) {
                if (d.V < 1 || d.V > 53) return null;
                if (!("w" in d)) d.w = 1;
                if ("Z" in d) {
                    week = utcDate(newDate(d.y, 0, 1)), day = week.getUTCDay();
                    week = day > 4 || day === 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$week$2e$js__$5b$client$5d$__$28$ecmascript$29$__["utcMonday"].ceil(week) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$week$2e$js__$5b$client$5d$__$28$ecmascript$29$__["utcMonday"])(week);
                    week = __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$day$2e$js__$5b$client$5d$__$28$ecmascript$29$__["utcDay"].offset(week, (d.V - 1) * 7);
                    d.y = week.getUTCFullYear();
                    d.m = week.getUTCMonth();
                    d.d = week.getUTCDate() + (d.w + 6) % 7;
                } else {
                    week = localDate(newDate(d.y, 0, 1)), day = week.getDay();
                    week = day > 4 || day === 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$week$2e$js__$5b$client$5d$__$28$ecmascript$29$__["timeMonday"].ceil(week) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$week$2e$js__$5b$client$5d$__$28$ecmascript$29$__["timeMonday"])(week);
                    week = __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$day$2e$js__$5b$client$5d$__$28$ecmascript$29$__["timeDay"].offset(week, (d.V - 1) * 7);
                    d.y = week.getFullYear();
                    d.m = week.getMonth();
                    d.d = week.getDate() + (d.w + 6) % 7;
                }
            } else if ("W" in d || "U" in d) {
                if (!("w" in d)) d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0;
                day = "Z" in d ? utcDate(newDate(d.y, 0, 1)).getUTCDay() : localDate(newDate(d.y, 0, 1)).getDay();
                d.m = 0;
                d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day + 5) % 7 : d.w + d.U * 7 - (day + 6) % 7;
            }
            // If a time zone is specified, all fields are interpreted as UTC and then
            // offset according to the specified time zone.
            if ("Z" in d) {
                d.H += d.Z / 100 | 0;
                d.M += d.Z % 100;
                return utcDate(d);
            }
            // Otherwise, all fields are in local time.
            return localDate(d);
        };
    }
    function parseSpecifier(d, specifier, string, j) {
        var i = 0, n = specifier.length, m = string.length, c, parse;
        while(i < n){
            if (j >= m) return -1;
            c = specifier.charCodeAt(i++);
            if (c === 37) {
                c = specifier.charAt(i++);
                parse = parses[c in pads ? specifier.charAt(i++) : c];
                if (!parse || (j = parse(d, string, j)) < 0) return -1;
            } else if (c != string.charCodeAt(j++)) {
                return -1;
            }
        }
        return j;
    }
    function parsePeriod(d, string, i) {
        var n = periodRe.exec(string.slice(i));
        return n ? (d.p = periodLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function parseShortWeekday(d, string, i) {
        var n = shortWeekdayRe.exec(string.slice(i));
        return n ? (d.w = shortWeekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function parseWeekday(d, string, i) {
        var n = weekdayRe.exec(string.slice(i));
        return n ? (d.w = weekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function parseShortMonth(d, string, i) {
        var n = shortMonthRe.exec(string.slice(i));
        return n ? (d.m = shortMonthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function parseMonth(d, string, i) {
        var n = monthRe.exec(string.slice(i));
        return n ? (d.m = monthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function parseLocaleDateTime(d, string, i) {
        return parseSpecifier(d, locale_dateTime, string, i);
    }
    function parseLocaleDate(d, string, i) {
        return parseSpecifier(d, locale_date, string, i);
    }
    function parseLocaleTime(d, string, i) {
        return parseSpecifier(d, locale_time, string, i);
    }
    function formatShortWeekday(d) {
        return locale_shortWeekdays[d.getDay()];
    }
    function formatWeekday(d) {
        return locale_weekdays[d.getDay()];
    }
    function formatShortMonth(d) {
        return locale_shortMonths[d.getMonth()];
    }
    function formatMonth(d) {
        return locale_months[d.getMonth()];
    }
    function formatPeriod(d) {
        return locale_periods[+(d.getHours() >= 12)];
    }
    function formatQuarter(d) {
        return 1 + ~~(d.getMonth() / 3);
    }
    function formatUTCShortWeekday(d) {
        return locale_shortWeekdays[d.getUTCDay()];
    }
    function formatUTCWeekday(d) {
        return locale_weekdays[d.getUTCDay()];
    }
    function formatUTCShortMonth(d) {
        return locale_shortMonths[d.getUTCMonth()];
    }
    function formatUTCMonth(d) {
        return locale_months[d.getUTCMonth()];
    }
    function formatUTCPeriod(d) {
        return locale_periods[+(d.getUTCHours() >= 12)];
    }
    function formatUTCQuarter(d) {
        return 1 + ~~(d.getUTCMonth() / 3);
    }
    return {
        format: function(specifier) {
            var f = newFormat(specifier += "", formats);
            f.toString = function() {
                return specifier;
            };
            return f;
        },
        parse: function(specifier) {
            var p = newParse(specifier += "", false);
            p.toString = function() {
                return specifier;
            };
            return p;
        },
        utcFormat: function(specifier) {
            var f = newFormat(specifier += "", utcFormats);
            f.toString = function() {
                return specifier;
            };
            return f;
        },
        utcParse: function(specifier) {
            var p = newParse(specifier += "", true);
            p.toString = function() {
                return specifier;
            };
            return p;
        }
    };
}
var pads = {
    "-": "",
    "_": " ",
    "0": "0"
}, numberRe = /^\s*\d+/, percentRe = /^%/, requoteRe = /[\\^$*+?|[\]().{}]/g;
function pad(value, fill, width) {
    var sign = value < 0 ? "-" : "", string = (sign ? -value : value) + "", length = string.length;
    return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
}
function requote(s) {
    return s.replace(requoteRe, "\\$&");
}
function formatRe(names) {
    return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
}
function formatLookup(names) {
    return new Map(names.map((name, i)=>[
            name.toLowerCase(),
            i
        ]));
}
function parseWeekdayNumberSunday(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 1));
    return n ? (d.w = +n[0], i + n[0].length) : -1;
}
function parseWeekdayNumberMonday(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 1));
    return n ? (d.u = +n[0], i + n[0].length) : -1;
}
function parseWeekNumberSunday(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.U = +n[0], i + n[0].length) : -1;
}
function parseWeekNumberISO(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.V = +n[0], i + n[0].length) : -1;
}
function parseWeekNumberMonday(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.W = +n[0], i + n[0].length) : -1;
}
function parseFullYear(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 4));
    return n ? (d.y = +n[0], i + n[0].length) : -1;
}
function parseYear(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2000), i + n[0].length) : -1;
}
function parseZone(d, string, i) {
    var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string.slice(i, i + 6));
    return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
}
function parseQuarter(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 1));
    return n ? (d.q = n[0] * 3 - 3, i + n[0].length) : -1;
}
function parseMonthNumber(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
}
function parseDayOfMonth(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.d = +n[0], i + n[0].length) : -1;
}
function parseDayOfYear(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 3));
    return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
}
function parseHour24(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.H = +n[0], i + n[0].length) : -1;
}
function parseMinutes(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.M = +n[0], i + n[0].length) : -1;
}
function parseSeconds(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.S = +n[0], i + n[0].length) : -1;
}
function parseMilliseconds(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 3));
    return n ? (d.L = +n[0], i + n[0].length) : -1;
}
function parseMicroseconds(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 6));
    return n ? (d.L = Math.floor(n[0] / 1000), i + n[0].length) : -1;
}
function parseLiteralPercent(d, string, i) {
    var n = percentRe.exec(string.slice(i, i + 1));
    return n ? i + n[0].length : -1;
}
function parseUnixTimestamp(d, string, i) {
    var n = numberRe.exec(string.slice(i));
    return n ? (d.Q = +n[0], i + n[0].length) : -1;
}
function parseUnixTimestampSeconds(d, string, i) {
    var n = numberRe.exec(string.slice(i));
    return n ? (d.s = +n[0], i + n[0].length) : -1;
}
function formatDayOfMonth(d, p) {
    return pad(d.getDate(), p, 2);
}
function formatHour24(d, p) {
    return pad(d.getHours(), p, 2);
}
function formatHour12(d, p) {
    return pad(d.getHours() % 12 || 12, p, 2);
}
function formatDayOfYear(d, p) {
    return pad(1 + __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$day$2e$js__$5b$client$5d$__$28$ecmascript$29$__["timeDay"].count((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$year$2e$js__$5b$client$5d$__$28$ecmascript$29$__["timeYear"])(d), d), p, 3);
}
function formatMilliseconds(d, p) {
    return pad(d.getMilliseconds(), p, 3);
}
function formatMicroseconds(d, p) {
    return formatMilliseconds(d, p) + "000";
}
function formatMonthNumber(d, p) {
    return pad(d.getMonth() + 1, p, 2);
}
function formatMinutes(d, p) {
    return pad(d.getMinutes(), p, 2);
}
function formatSeconds(d, p) {
    return pad(d.getSeconds(), p, 2);
}
function formatWeekdayNumberMonday(d) {
    var day = d.getDay();
    return day === 0 ? 7 : day;
}
function formatWeekNumberSunday(d, p) {
    return pad(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$week$2e$js__$5b$client$5d$__$28$ecmascript$29$__["timeSunday"].count((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$year$2e$js__$5b$client$5d$__$28$ecmascript$29$__["timeYear"])(d) - 1, d), p, 2);
}
function dISO(d) {
    var day = d.getDay();
    return day >= 4 || day === 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$week$2e$js__$5b$client$5d$__$28$ecmascript$29$__["timeThursday"])(d) : __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$week$2e$js__$5b$client$5d$__$28$ecmascript$29$__["timeThursday"].ceil(d);
}
function formatWeekNumberISO(d, p) {
    d = dISO(d);
    return pad(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$week$2e$js__$5b$client$5d$__$28$ecmascript$29$__["timeThursday"].count((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$year$2e$js__$5b$client$5d$__$28$ecmascript$29$__["timeYear"])(d), d) + ((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$year$2e$js__$5b$client$5d$__$28$ecmascript$29$__["timeYear"])(d).getDay() === 4), p, 2);
}
function formatWeekdayNumberSunday(d) {
    return d.getDay();
}
function formatWeekNumberMonday(d, p) {
    return pad(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$week$2e$js__$5b$client$5d$__$28$ecmascript$29$__["timeMonday"].count((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$year$2e$js__$5b$client$5d$__$28$ecmascript$29$__["timeYear"])(d) - 1, d), p, 2);
}
function formatYear(d, p) {
    return pad(d.getFullYear() % 100, p, 2);
}
function formatYearISO(d, p) {
    d = dISO(d);
    return pad(d.getFullYear() % 100, p, 2);
}
function formatFullYear(d, p) {
    return pad(d.getFullYear() % 10000, p, 4);
}
function formatFullYearISO(d, p) {
    var day = d.getDay();
    d = day >= 4 || day === 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$week$2e$js__$5b$client$5d$__$28$ecmascript$29$__["timeThursday"])(d) : __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$week$2e$js__$5b$client$5d$__$28$ecmascript$29$__["timeThursday"].ceil(d);
    return pad(d.getFullYear() % 10000, p, 4);
}
function formatZone(d) {
    var z = d.getTimezoneOffset();
    return (z > 0 ? "-" : (z *= -1, "+")) + pad(z / 60 | 0, "0", 2) + pad(z % 60, "0", 2);
}
function formatUTCDayOfMonth(d, p) {
    return pad(d.getUTCDate(), p, 2);
}
function formatUTCHour24(d, p) {
    return pad(d.getUTCHours(), p, 2);
}
function formatUTCHour12(d, p) {
    return pad(d.getUTCHours() % 12 || 12, p, 2);
}
function formatUTCDayOfYear(d, p) {
    return pad(1 + __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$day$2e$js__$5b$client$5d$__$28$ecmascript$29$__["utcDay"].count((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$year$2e$js__$5b$client$5d$__$28$ecmascript$29$__["utcYear"])(d), d), p, 3);
}
function formatUTCMilliseconds(d, p) {
    return pad(d.getUTCMilliseconds(), p, 3);
}
function formatUTCMicroseconds(d, p) {
    return formatUTCMilliseconds(d, p) + "000";
}
function formatUTCMonthNumber(d, p) {
    return pad(d.getUTCMonth() + 1, p, 2);
}
function formatUTCMinutes(d, p) {
    return pad(d.getUTCMinutes(), p, 2);
}
function formatUTCSeconds(d, p) {
    return pad(d.getUTCSeconds(), p, 2);
}
function formatUTCWeekdayNumberMonday(d) {
    var dow = d.getUTCDay();
    return dow === 0 ? 7 : dow;
}
function formatUTCWeekNumberSunday(d, p) {
    return pad(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$week$2e$js__$5b$client$5d$__$28$ecmascript$29$__["utcSunday"].count((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$year$2e$js__$5b$client$5d$__$28$ecmascript$29$__["utcYear"])(d) - 1, d), p, 2);
}
function UTCdISO(d) {
    var day = d.getUTCDay();
    return day >= 4 || day === 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$week$2e$js__$5b$client$5d$__$28$ecmascript$29$__["utcThursday"])(d) : __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$week$2e$js__$5b$client$5d$__$28$ecmascript$29$__["utcThursday"].ceil(d);
}
function formatUTCWeekNumberISO(d, p) {
    d = UTCdISO(d);
    return pad(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$week$2e$js__$5b$client$5d$__$28$ecmascript$29$__["utcThursday"].count((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$year$2e$js__$5b$client$5d$__$28$ecmascript$29$__["utcYear"])(d), d) + ((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$year$2e$js__$5b$client$5d$__$28$ecmascript$29$__["utcYear"])(d).getUTCDay() === 4), p, 2);
}
function formatUTCWeekdayNumberSunday(d) {
    return d.getUTCDay();
}
function formatUTCWeekNumberMonday(d, p) {
    return pad(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$week$2e$js__$5b$client$5d$__$28$ecmascript$29$__["utcMonday"].count((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$year$2e$js__$5b$client$5d$__$28$ecmascript$29$__["utcYear"])(d) - 1, d), p, 2);
}
function formatUTCYear(d, p) {
    return pad(d.getUTCFullYear() % 100, p, 2);
}
function formatUTCYearISO(d, p) {
    d = UTCdISO(d);
    return pad(d.getUTCFullYear() % 100, p, 2);
}
function formatUTCFullYear(d, p) {
    return pad(d.getUTCFullYear() % 10000, p, 4);
}
function formatUTCFullYearISO(d, p) {
    var day = d.getUTCDay();
    d = day >= 4 || day === 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$week$2e$js__$5b$client$5d$__$28$ecmascript$29$__["utcThursday"])(d) : __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2f$src$2f$week$2e$js__$5b$client$5d$__$28$ecmascript$29$__["utcThursday"].ceil(d);
    return pad(d.getUTCFullYear() % 10000, p, 4);
}
function formatUTCZone() {
    return "+0000";
}
function formatLiteralPercent() {
    return "%";
}
function formatUnixTimestamp(d) {
    return +d;
}
function formatUnixTimestampSeconds(d) {
    return Math.floor(+d / 1000);
}
}),
"[project]/project-root/frontend/node_modules/d3-time-format/src/defaultLocale.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>defaultLocale,
    "timeFormat",
    ()=>timeFormat,
    "timeParse",
    ()=>timeParse,
    "utcFormat",
    ()=>utcFormat,
    "utcParse",
    ()=>utcParse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2d$format$2f$src$2f$locale$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-time-format/src/locale.js [client] (ecmascript)");
;
var locale;
var timeFormat;
var timeParse;
var utcFormat;
var utcParse;
defaultLocale({
    dateTime: "%x, %X",
    date: "%-m/%-d/%Y",
    time: "%-I:%M:%S %p",
    periods: [
        "AM",
        "PM"
    ],
    days: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ],
    shortDays: [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ],
    months: [
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
    ],
    shortMonths: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ]
});
function defaultLocale(definition) {
    locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$time$2d$format$2f$src$2f$locale$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(definition);
    timeFormat = locale.format;
    timeParse = locale.parse;
    utcFormat = locale.utcFormat;
    utcParse = locale.utcParse;
    return locale;
}
}),
"[project]/project-root/frontend/node_modules/flatqueue/index.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** @template T */ __turbopack_context__.s([
    "default",
    ()=>FlatQueue
]);
class FlatQueue {
    constructor(){
        /** @type T[] */ this.ids = [];
        /** @type number[] */ this.values = [];
        /** Number of items in the queue. */ this.length = 0;
    }
    /** Removes all items from the queue. */ clear() {
        this.length = 0;
    }
    /**
     * Adds `item` to the queue with the specified `priority`.
     *
     * `priority` must be a number. Items are sorted and returned from low to high priority. Multiple items
     * with the same priority value can be added to the queue, but there is no guaranteed order between these items.
     *
     * @param {T} item
     * @param {number} priority
     */ push(item, priority) {
        let pos = this.length++;
        while(pos > 0){
            const parent = pos - 1 >> 1;
            const parentValue = this.values[parent];
            if (priority >= parentValue) break;
            this.ids[pos] = this.ids[parent];
            this.values[pos] = parentValue;
            pos = parent;
        }
        this.ids[pos] = item;
        this.values[pos] = priority;
    }
    /**
     * Removes and returns the item from the head of this queue, which is one of
     * the items with the lowest priority. If this queue is empty, returns `undefined`.
     */ pop() {
        if (this.length === 0) return undefined;
        const ids = this.ids, values = this.values, top = ids[0], last = --this.length;
        if (last > 0) {
            const id = ids[last];
            const value = values[last];
            let pos = 0;
            const halfLen = last >> 1;
            while(pos < halfLen){
                const left = (pos << 1) + 1;
                const right = left + 1;
                const child = left + (+(right < last) & +(values[right] < values[left]));
                if (values[child] >= value) break;
                ids[pos] = ids[child];
                values[pos] = values[child];
                pos = child;
            }
            ids[pos] = id;
            values[pos] = value;
        }
        return top;
    }
    /** Returns the item from the head of this queue without removing it. If this queue is empty, returns `undefined`. */ peek() {
        return this.length > 0 ? this.ids[0] : undefined;
    }
    /**
     * Returns the priority value of the item at the head of this queue without
     * removing it. If this queue is empty, returns `undefined`.
     */ peekValue() {
        return this.length > 0 ? this.values[0] : undefined;
    }
    /**
     * Shrinks the internal arrays to `this.length`.
     *
     * `pop()` and `clear()` calls don't free memory automatically to avoid unnecessary resize operations.
     * This also means that items that have been added to the queue can't be garbage collected until
     * a new item is pushed in their place, or this method is called.
     */ shrink() {
        this.ids.length = this.values.length = this.length;
    }
}
}),
"[project]/project-root/frontend/node_modules/bezier-easing/src/index.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * https://github.com/gre/bezier-easing
 * BezierEasing - use bezier curve for transition easing function
 * by Gaëtan Renaudeau 2014 - 2015 – MIT License
 */ // These values are established by empiricism with tests (tradeoff: performance VS precision)
var NEWTON_ITERATIONS = 4;
var NEWTON_MIN_SLOPE = 0.001;
var SUBDIVISION_PRECISION = 0.0000001;
var SUBDIVISION_MAX_ITERATIONS = 10;
var kSplineTableSize = 11;
var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);
var float32ArraySupported = typeof Float32Array === 'function';
function A(aA1, aA2) {
    return 1.0 - 3.0 * aA2 + 3.0 * aA1;
}
function B(aA1, aA2) {
    return 3.0 * aA2 - 6.0 * aA1;
}
function C(aA1) {
    return 3.0 * aA1;
}
// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
function calcBezier(aT, aA1, aA2) {
    return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
}
// Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.
function getSlope(aT, aA1, aA2) {
    return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
}
function binarySubdivide(aX, aA, aB, mX1, mX2) {
    var currentX, currentT, i = 0;
    do {
        currentT = aA + (aB - aA) / 2.0;
        currentX = calcBezier(currentT, mX1, mX2) - aX;
        if (currentX > 0.0) {
            aB = currentT;
        } else {
            aA = currentT;
        }
    }while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS)
    return currentT;
}
function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
    for(var i = 0; i < NEWTON_ITERATIONS; ++i){
        var currentSlope = getSlope(aGuessT, mX1, mX2);
        if (currentSlope === 0.0) {
            return aGuessT;
        }
        var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
        aGuessT -= currentX / currentSlope;
    }
    return aGuessT;
}
function LinearEasing(x) {
    return x;
}
module.exports = function bezier(mX1, mY1, mX2, mY2) {
    if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
        throw new Error('bezier x values must be in [0, 1] range');
    }
    if (mX1 === mY1 && mX2 === mY2) {
        return LinearEasing;
    }
    // Precompute samples table
    var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
    for(var i = 0; i < kSplineTableSize; ++i){
        sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
    }
    function getTForX(aX) {
        var intervalStart = 0.0;
        var currentSample = 1;
        var lastSample = kSplineTableSize - 1;
        for(; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample){
            intervalStart += kSampleStepSize;
        }
        --currentSample;
        // Interpolate to provide an initial guess for t
        var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
        var guessForT = intervalStart + dist * kSampleStepSize;
        var initialSlope = getSlope(guessForT, mX1, mX2);
        if (initialSlope >= NEWTON_MIN_SLOPE) {
            return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
        } else if (initialSlope === 0.0) {
            return guessForT;
        } else {
            return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
        }
    }
    return function BezierEasing(x) {
        // Because JavaScript number are imprecise, we should guarantee the extremes are right.
        if (x === 0) {
            return 0;
        }
        if (x === 1) {
            return 1;
        }
        return calcBezier(getTForX(x), mY1, mY2);
    };
};
}),
"[project]/project-root/frontend/node_modules/d3-timer/src/timer.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Timer",
    ()=>Timer,
    "now",
    ()=>now,
    "timer",
    ()=>timer,
    "timerFlush",
    ()=>timerFlush
]);
var frame = 0, timeout = 0, interval = 0, pokeDelay = 1000, taskHead, taskTail, clockLast = 0, clockNow = 0, clockSkew = 0, clock = typeof performance === "object" && performance.now ? performance : Date, setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) {
    setTimeout(f, 17);
};
function now() {
    return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}
function clearNow() {
    clockNow = 0;
}
function Timer() {
    this._call = this._time = this._next = null;
}
Timer.prototype = timer.prototype = {
    constructor: Timer,
    restart: function(callback, delay, time) {
        if (typeof callback !== "function") throw new TypeError("callback is not a function");
        time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
        if (!this._next && taskTail !== this) {
            if (taskTail) taskTail._next = this;
            else taskHead = this;
            taskTail = this;
        }
        this._call = callback;
        this._time = time;
        sleep();
    },
    stop: function() {
        if (this._call) {
            this._call = null;
            this._time = Infinity;
            sleep();
        }
    }
};
function timer(callback, delay, time) {
    var t = new Timer;
    t.restart(callback, delay, time);
    return t;
}
function timerFlush() {
    now(); // Get the current time, if not already set.
    ++frame; // Pretend we’ve set an alarm, if we haven’t already.
    var t = taskHead, e;
    while(t){
        if ((e = clockNow - t._time) >= 0) t._call.call(undefined, e);
        t = t._next;
    }
    --frame;
}
function wake() {
    clockNow = (clockLast = clock.now()) + clockSkew;
    frame = timeout = 0;
    try {
        timerFlush();
    } finally{
        frame = 0;
        nap();
        clockNow = 0;
    }
}
function poke() {
    var now = clock.now(), delay = now - clockLast;
    if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
}
function nap() {
    var t0, t1 = taskHead, t2, time = Infinity;
    while(t1){
        if (t1._call) {
            if (time > t1._time) time = t1._time;
            t0 = t1, t1 = t1._next;
        } else {
            t2 = t1._next, t1._next = null;
            t1 = t0 ? t0._next = t2 : taskHead = t2;
        }
    }
    taskTail = t0;
    sleep(time);
}
function sleep(time) {
    if (frame) return; // Soonest alarm already set, or will be.
    if (timeout) timeout = clearTimeout(timeout);
    var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
    if (delay > 24) {
        if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
        if (interval) interval = clearInterval(interval);
    } else {
        if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
        frame = 1, setFrame(wake);
    }
}
}),
"[project]/project-root/frontend/node_modules/d3-timer/src/timeout.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$timer$2f$src$2f$timer$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-timer/src/timer.js [client] (ecmascript)");
;
function __TURBOPACK__default__export__(callback, delay, time) {
    var t = new __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$timer$2f$src$2f$timer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Timer"];
    delay = delay == null ? 0 : +delay;
    t.restart((elapsed)=>{
        t.stop();
        callback(elapsed + delay);
    }, delay, time);
    return t;
}
}),
"[project]/project-root/frontend/node_modules/d3-timer/src/timeout.js [client] (ecmascript) <export default as timeout>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "timeout",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$timer$2f$src$2f$timeout$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$timer$2f$src$2f$timeout$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-timer/src/timeout.js [client] (ecmascript)");
}),
"[project]/project-root/frontend/node_modules/d3-shape/src/array.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "slice",
    ()=>slice
]);
var slice = Array.prototype.slice;
function __TURBOPACK__default__export__(x) {
    return typeof x === "object" && "length" in x ? x // Array, TypedArray, NodeList, array-like
     : Array.from(x); // Map, Set, iterable, string, or anything else
}
}),
"[project]/project-root/frontend/node_modules/d3-shape/src/constant.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__(x) {
    return function constant() {
        return x;
    };
}
}),
"[project]/project-root/frontend/node_modules/d3-shape/src/curve/linear.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function Linear(context) {
    this._context = context;
}
Linear.prototype = {
    areaStart: function() {
        this._line = 0;
    },
    areaEnd: function() {
        this._line = NaN;
    },
    lineStart: function() {
        this._point = 0;
    },
    lineEnd: function() {
        if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
        this._line = 1 - this._line;
    },
    point: function(x, y) {
        x = +x, y = +y;
        switch(this._point){
            case 0:
                this._point = 1;
                this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
                break;
            case 1:
                this._point = 2; // falls through
            default:
                this._context.lineTo(x, y);
                break;
        }
    }
};
function __TURBOPACK__default__export__(context) {
    return new Linear(context);
}
}),
"[project]/project-root/frontend/node_modules/d3-shape/src/path.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "withPath",
    ()=>withPath
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$path$2f$src$2f$path$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-path/src/path.js [client] (ecmascript)");
;
function withPath(shape) {
    let digits = 3;
    shape.digits = function(_) {
        if (!arguments.length) return digits;
        if (_ == null) {
            digits = null;
        } else {
            const d = Math.floor(_);
            if (!(d >= 0)) throw new RangeError(`invalid digits: ${_}`);
            digits = d;
        }
        return shape;
    };
    return ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$path$2f$src$2f$path$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Path"](digits);
}
}),
"[project]/project-root/frontend/node_modules/d3-shape/src/point.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "x",
    ()=>x,
    "y",
    ()=>y
]);
function x(p) {
    return p[0];
}
function y(p) {
    return p[1];
}
}),
"[project]/project-root/frontend/node_modules/d3-shape/src/line.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$array$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/array.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$constant$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/constant.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$linear$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/curve/linear.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$path$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/path.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$point$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/point.js [client] (ecmascript)");
;
;
;
;
;
function __TURBOPACK__default__export__(x, y) {
    var defined = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$constant$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(true), context = null, curve = __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$linear$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], output = null, path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$path$2e$js__$5b$client$5d$__$28$ecmascript$29$__["withPath"])(line);
    x = typeof x === "function" ? x : x === undefined ? __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$point$2e$js__$5b$client$5d$__$28$ecmascript$29$__["x"] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$constant$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(x);
    y = typeof y === "function" ? y : y === undefined ? __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$point$2e$js__$5b$client$5d$__$28$ecmascript$29$__["y"] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$constant$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(y);
    function line(data) {
        var i, n = (data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$array$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(data)).length, d, defined0 = false, buffer;
        if (context == null) output = curve(buffer = path());
        for(i = 0; i <= n; ++i){
            if (!(i < n && defined(d = data[i], i, data)) === defined0) {
                if (defined0 = !defined0) output.lineStart();
                else output.lineEnd();
            }
            if (defined0) output.point(+x(d, i, data), +y(d, i, data));
        }
        if (buffer) return output = null, buffer + "" || null;
    }
    line.x = function(_) {
        return arguments.length ? (x = typeof _ === "function" ? _ : (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$constant$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(+_), line) : x;
    };
    line.y = function(_) {
        return arguments.length ? (y = typeof _ === "function" ? _ : (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$constant$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(+_), line) : y;
    };
    line.defined = function(_) {
        return arguments.length ? (defined = typeof _ === "function" ? _ : (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$constant$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(!!_), line) : defined;
    };
    line.curve = function(_) {
        return arguments.length ? (curve = _, context != null && (output = curve(context)), line) : curve;
    };
    line.context = function(_) {
        return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line) : context;
    };
    return line;
}
}),
"[project]/project-root/frontend/node_modules/d3-shape/src/area.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$array$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/array.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$constant$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/constant.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$linear$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/curve/linear.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$line$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/line.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$path$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/path.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$point$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/point.js [client] (ecmascript)");
;
;
;
;
;
;
function __TURBOPACK__default__export__(x0, y0, y1) {
    var x1 = null, defined = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$constant$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(true), context = null, curve = __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$linear$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], output = null, path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$path$2e$js__$5b$client$5d$__$28$ecmascript$29$__["withPath"])(area);
    x0 = typeof x0 === "function" ? x0 : x0 === undefined ? __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$point$2e$js__$5b$client$5d$__$28$ecmascript$29$__["x"] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$constant$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(+x0);
    y0 = typeof y0 === "function" ? y0 : y0 === undefined ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$constant$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(0) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$constant$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(+y0);
    y1 = typeof y1 === "function" ? y1 : y1 === undefined ? __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$point$2e$js__$5b$client$5d$__$28$ecmascript$29$__["y"] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$constant$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(+y1);
    function area(data) {
        var i, j, k, n = (data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$array$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(data)).length, d, defined0 = false, buffer, x0z = new Array(n), y0z = new Array(n);
        if (context == null) output = curve(buffer = path());
        for(i = 0; i <= n; ++i){
            if (!(i < n && defined(d = data[i], i, data)) === defined0) {
                if (defined0 = !defined0) {
                    j = i;
                    output.areaStart();
                    output.lineStart();
                } else {
                    output.lineEnd();
                    output.lineStart();
                    for(k = i - 1; k >= j; --k){
                        output.point(x0z[k], y0z[k]);
                    }
                    output.lineEnd();
                    output.areaEnd();
                }
            }
            if (defined0) {
                x0z[i] = +x0(d, i, data), y0z[i] = +y0(d, i, data);
                output.point(x1 ? +x1(d, i, data) : x0z[i], y1 ? +y1(d, i, data) : y0z[i]);
            }
        }
        if (buffer) return output = null, buffer + "" || null;
    }
    function arealine() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$line$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])().defined(defined).curve(curve).context(context);
    }
    area.x = function(_) {
        return arguments.length ? (x0 = typeof _ === "function" ? _ : (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$constant$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(+_), x1 = null, area) : x0;
    };
    area.x0 = function(_) {
        return arguments.length ? (x0 = typeof _ === "function" ? _ : (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$constant$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(+_), area) : x0;
    };
    area.x1 = function(_) {
        return arguments.length ? (x1 = _ == null ? null : typeof _ === "function" ? _ : (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$constant$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(+_), area) : x1;
    };
    area.y = function(_) {
        return arguments.length ? (y0 = typeof _ === "function" ? _ : (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$constant$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(+_), y1 = null, area) : y0;
    };
    area.y0 = function(_) {
        return arguments.length ? (y0 = typeof _ === "function" ? _ : (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$constant$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(+_), area) : y0;
    };
    area.y1 = function(_) {
        return arguments.length ? (y1 = _ == null ? null : typeof _ === "function" ? _ : (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$constant$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(+_), area) : y1;
    };
    area.lineX0 = area.lineY0 = function() {
        return arealine().x(x0).y(y0);
    };
    area.lineY1 = function() {
        return arealine().x(x0).y(y1);
    };
    area.lineX1 = function() {
        return arealine().x(x1).y(y0);
    };
    area.defined = function(_) {
        return arguments.length ? (defined = typeof _ === "function" ? _ : (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$constant$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(!!_), area) : defined;
    };
    area.curve = function(_) {
        return arguments.length ? (curve = _, context != null && (output = curve(context)), area) : curve;
    };
    area.context = function(_) {
        return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), area) : context;
    };
    return area;
}
}),
"[project]/project-root/frontend/node_modules/d3-shape/src/area.js [client] (ecmascript) <export default as area>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "area",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$area$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$area$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/area.js [client] (ecmascript)");
}),
"[project]/project-root/frontend/node_modules/d3-shape/src/math.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "abs",
    ()=>abs,
    "acos",
    ()=>acos,
    "asin",
    ()=>asin,
    "atan2",
    ()=>atan2,
    "cos",
    ()=>cos,
    "epsilon",
    ()=>epsilon,
    "halfPi",
    ()=>halfPi,
    "max",
    ()=>max,
    "min",
    ()=>min,
    "pi",
    ()=>pi,
    "sin",
    ()=>sin,
    "sqrt",
    ()=>sqrt,
    "tau",
    ()=>tau
]);
const abs = Math.abs;
const atan2 = Math.atan2;
const cos = Math.cos;
const max = Math.max;
const min = Math.min;
const sin = Math.sin;
const sqrt = Math.sqrt;
const epsilon = 1e-12;
const pi = Math.PI;
const halfPi = pi / 2;
const tau = 2 * pi;
function acos(x) {
    return x > 1 ? 0 : x < -1 ? pi : Math.acos(x);
}
function asin(x) {
    return x >= 1 ? halfPi : x <= -1 ? -halfPi : Math.asin(x);
}
}),
"[project]/project-root/frontend/node_modules/d3-shape/src/curve/cardinal.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Cardinal",
    ()=>Cardinal,
    "default",
    ()=>__TURBOPACK__default__export__,
    "point",
    ()=>point
]);
function point(that, x, y) {
    that._context.bezierCurveTo(that._x1 + that._k * (that._x2 - that._x0), that._y1 + that._k * (that._y2 - that._y0), that._x2 + that._k * (that._x1 - x), that._y2 + that._k * (that._y1 - y), that._x2, that._y2);
}
function Cardinal(context, tension) {
    this._context = context;
    this._k = (1 - tension) / 6;
}
Cardinal.prototype = {
    areaStart: function() {
        this._line = 0;
    },
    areaEnd: function() {
        this._line = NaN;
    },
    lineStart: function() {
        this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
        this._point = 0;
    },
    lineEnd: function() {
        switch(this._point){
            case 2:
                this._context.lineTo(this._x2, this._y2);
                break;
            case 3:
                point(this, this._x1, this._y1);
                break;
        }
        if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
        this._line = 1 - this._line;
    },
    point: function(x, y) {
        x = +x, y = +y;
        switch(this._point){
            case 0:
                this._point = 1;
                this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
                break;
            case 1:
                this._point = 2;
                this._x1 = x, this._y1 = y;
                break;
            case 2:
                this._point = 3; // falls through
            default:
                point(this, x, y);
                break;
        }
        this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
        this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
    }
};
const __TURBOPACK__default__export__ = function custom(tension) {
    function cardinal(context) {
        return new Cardinal(context, tension);
    }
    cardinal.tension = function(tension) {
        return custom(+tension);
    };
    return cardinal;
}(0);
}),
"[project]/project-root/frontend/node_modules/d3-shape/src/curve/catmullRom.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "point",
    ()=>point
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/math.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$cardinal$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/curve/cardinal.js [client] (ecmascript)");
;
;
function point(that, x, y) {
    var x1 = that._x1, y1 = that._y1, x2 = that._x2, y2 = that._y2;
    if (that._l01_a > __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["epsilon"]) {
        var a = 2 * that._l01_2a + 3 * that._l01_a * that._l12_a + that._l12_2a, n = 3 * that._l01_a * (that._l01_a + that._l12_a);
        x1 = (x1 * a - that._x0 * that._l12_2a + that._x2 * that._l01_2a) / n;
        y1 = (y1 * a - that._y0 * that._l12_2a + that._y2 * that._l01_2a) / n;
    }
    if (that._l23_a > __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["epsilon"]) {
        var b = 2 * that._l23_2a + 3 * that._l23_a * that._l12_a + that._l12_2a, m = 3 * that._l23_a * (that._l23_a + that._l12_a);
        x2 = (x2 * b + that._x1 * that._l23_2a - x * that._l12_2a) / m;
        y2 = (y2 * b + that._y1 * that._l23_2a - y * that._l12_2a) / m;
    }
    that._context.bezierCurveTo(x1, y1, x2, y2, that._x2, that._y2);
}
function CatmullRom(context, alpha) {
    this._context = context;
    this._alpha = alpha;
}
CatmullRom.prototype = {
    areaStart: function() {
        this._line = 0;
    },
    areaEnd: function() {
        this._line = NaN;
    },
    lineStart: function() {
        this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
        this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
    },
    lineEnd: function() {
        switch(this._point){
            case 2:
                this._context.lineTo(this._x2, this._y2);
                break;
            case 3:
                this.point(this._x2, this._y2);
                break;
        }
        if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
        this._line = 1 - this._line;
    },
    point: function(x, y) {
        x = +x, y = +y;
        if (this._point) {
            var x23 = this._x2 - x, y23 = this._y2 - y;
            this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
        }
        switch(this._point){
            case 0:
                this._point = 1;
                this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3; // falls through
            default:
                point(this, x, y);
                break;
        }
        this._l01_a = this._l12_a, this._l12_a = this._l23_a;
        this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
        this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
        this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
    }
};
const __TURBOPACK__default__export__ = function custom(alpha) {
    function catmullRom(context) {
        return alpha ? new CatmullRom(context, alpha) : new __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$cardinal$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Cardinal"](context, 0);
    }
    catmullRom.alpha = function(alpha) {
        return custom(+alpha);
    };
    return catmullRom;
}(0.5);
}),
"[project]/project-root/frontend/node_modules/d3-shape/src/curve/catmullRom.js [client] (ecmascript) <export default as curveCatmullRom>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "curveCatmullRom",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$catmullRom$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$catmullRom$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/curve/catmullRom.js [client] (ecmascript)");
}),
"[project]/project-root/frontend/node_modules/d3-shape/src/curve/linear.js [client] (ecmascript) <export default as curveLinear>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "curveLinear",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$linear$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$linear$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/curve/linear.js [client] (ecmascript)");
}),
"[project]/project-root/frontend/node_modules/d3-shape/src/curve/monotone.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "monotoneX",
    ()=>monotoneX,
    "monotoneY",
    ()=>monotoneY
]);
function sign(x) {
    return x < 0 ? -1 : 1;
}
// Calculate the slopes of the tangents (Hermite-type interpolation) based on
// the following paper: Steffen, M. 1990. A Simple Method for Monotonic
// Interpolation in One Dimension. Astronomy and Astrophysics, Vol. 239, NO.
// NOV(II), P. 443, 1990.
function slope3(that, x2, y2) {
    var h0 = that._x1 - that._x0, h1 = x2 - that._x1, s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0), s1 = (y2 - that._y1) / (h1 || h0 < 0 && -0), p = (s0 * h1 + s1 * h0) / (h0 + h1);
    return (sign(s0) + sign(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p)) || 0;
}
// Calculate a one-sided slope.
function slope2(that, t) {
    var h = that._x1 - that._x0;
    return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t;
}
// According to https://en.wikipedia.org/wiki/Cubic_Hermite_spline#Representations
// "you can express cubic Hermite interpolation in terms of cubic Bézier curves
// with respect to the four values p0, p0 + m0 / 3, p1 - m1 / 3, p1".
function point(that, t0, t1) {
    var x0 = that._x0, y0 = that._y0, x1 = that._x1, y1 = that._y1, dx = (x1 - x0) / 3;
    that._context.bezierCurveTo(x0 + dx, y0 + dx * t0, x1 - dx, y1 - dx * t1, x1, y1);
}
function MonotoneX(context) {
    this._context = context;
}
MonotoneX.prototype = {
    areaStart: function() {
        this._line = 0;
    },
    areaEnd: function() {
        this._line = NaN;
    },
    lineStart: function() {
        this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN;
        this._point = 0;
    },
    lineEnd: function() {
        switch(this._point){
            case 2:
                this._context.lineTo(this._x1, this._y1);
                break;
            case 3:
                point(this, this._t0, slope2(this, this._t0));
                break;
        }
        if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
        this._line = 1 - this._line;
    },
    point: function(x, y) {
        var t1 = NaN;
        x = +x, y = +y;
        if (x === this._x1 && y === this._y1) return; // Ignore coincident points.
        switch(this._point){
            case 0:
                this._point = 1;
                this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3;
                point(this, slope2(this, t1 = slope3(this, x, y)), t1);
                break;
            default:
                point(this, this._t0, t1 = slope3(this, x, y));
                break;
        }
        this._x0 = this._x1, this._x1 = x;
        this._y0 = this._y1, this._y1 = y;
        this._t0 = t1;
    }
};
function MonotoneY(context) {
    this._context = new ReflectContext(context);
}
(MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function(x, y) {
    MonotoneX.prototype.point.call(this, y, x);
};
function ReflectContext(context) {
    this._context = context;
}
ReflectContext.prototype = {
    moveTo: function(x, y) {
        this._context.moveTo(y, x);
    },
    closePath: function() {
        this._context.closePath();
    },
    lineTo: function(x, y) {
        this._context.lineTo(y, x);
    },
    bezierCurveTo: function(x1, y1, x2, y2, x, y) {
        this._context.bezierCurveTo(y1, x1, y2, x2, y, x);
    }
};
function monotoneX(context) {
    return new MonotoneX(context);
}
function monotoneY(context) {
    return new MonotoneY(context);
}
}),
"[project]/project-root/frontend/node_modules/d3-shape/src/curve/monotone.js [client] (ecmascript) <export monotoneX as curveMonotoneX>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "curveMonotoneX",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$monotone$2e$js__$5b$client$5d$__$28$ecmascript$29$__["monotoneX"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$monotone$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/curve/monotone.js [client] (ecmascript)");
}),
"[project]/project-root/frontend/node_modules/d3-shape/src/curve/monotone.js [client] (ecmascript) <export monotoneY as curveMonotoneY>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "curveMonotoneY",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$monotone$2e$js__$5b$client$5d$__$28$ecmascript$29$__["monotoneY"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$monotone$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/curve/monotone.js [client] (ecmascript)");
}),
"[project]/project-root/frontend/node_modules/d3-shape/src/curve/natural.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function Natural(context) {
    this._context = context;
}
Natural.prototype = {
    areaStart: function() {
        this._line = 0;
    },
    areaEnd: function() {
        this._line = NaN;
    },
    lineStart: function() {
        this._x = [];
        this._y = [];
    },
    lineEnd: function() {
        var x = this._x, y = this._y, n = x.length;
        if (n) {
            this._line ? this._context.lineTo(x[0], y[0]) : this._context.moveTo(x[0], y[0]);
            if (n === 2) {
                this._context.lineTo(x[1], y[1]);
            } else {
                var px = controlPoints(x), py = controlPoints(y);
                for(var i0 = 0, i1 = 1; i1 < n; ++i0, ++i1){
                    this._context.bezierCurveTo(px[0][i0], py[0][i0], px[1][i0], py[1][i0], x[i1], y[i1]);
                }
            }
        }
        if (this._line || this._line !== 0 && n === 1) this._context.closePath();
        this._line = 1 - this._line;
        this._x = this._y = null;
    },
    point: function(x, y) {
        this._x.push(+x);
        this._y.push(+y);
    }
};
// See https://www.particleincell.com/2012/bezier-splines/ for derivation.
function controlPoints(x) {
    var i, n = x.length - 1, m, a = new Array(n), b = new Array(n), r = new Array(n);
    a[0] = 0, b[0] = 2, r[0] = x[0] + 2 * x[1];
    for(i = 1; i < n - 1; ++i)a[i] = 1, b[i] = 4, r[i] = 4 * x[i] + 2 * x[i + 1];
    a[n - 1] = 2, b[n - 1] = 7, r[n - 1] = 8 * x[n - 1] + x[n];
    for(i = 1; i < n; ++i)m = a[i] / b[i - 1], b[i] -= m, r[i] -= m * r[i - 1];
    a[n - 1] = r[n - 1] / b[n - 1];
    for(i = n - 2; i >= 0; --i)a[i] = (r[i] - a[i + 1]) / b[i];
    b[n - 1] = (x[n] + a[n - 1]) / 2;
    for(i = 0; i < n - 1; ++i)b[i] = 2 * x[i + 1] - a[i + 1];
    return [
        a,
        b
    ];
}
function __TURBOPACK__default__export__(context) {
    return new Natural(context);
}
}),
"[project]/project-root/frontend/node_modules/d3-shape/src/curve/natural.js [client] (ecmascript) <export default as curveNatural>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "curveNatural",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$natural$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$natural$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/curve/natural.js [client] (ecmascript)");
}),
"[project]/project-root/frontend/node_modules/d3-shape/src/curve/step.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "stepAfter",
    ()=>stepAfter,
    "stepBefore",
    ()=>stepBefore
]);
function Step(context, t) {
    this._context = context;
    this._t = t;
}
Step.prototype = {
    areaStart: function() {
        this._line = 0;
    },
    areaEnd: function() {
        this._line = NaN;
    },
    lineStart: function() {
        this._x = this._y = NaN;
        this._point = 0;
    },
    lineEnd: function() {
        if (0 < this._t && this._t < 1 && this._point === 2) this._context.lineTo(this._x, this._y);
        if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
        if (this._line >= 0) this._t = 1 - this._t, this._line = 1 - this._line;
    },
    point: function(x, y) {
        x = +x, y = +y;
        switch(this._point){
            case 0:
                this._point = 1;
                this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
                break;
            case 1:
                this._point = 2; // falls through
            default:
                {
                    if (this._t <= 0) {
                        this._context.lineTo(this._x, y);
                        this._context.lineTo(x, y);
                    } else {
                        var x1 = this._x * (1 - this._t) + x * this._t;
                        this._context.lineTo(x1, this._y);
                        this._context.lineTo(x1, y);
                    }
                    break;
                }
        }
        this._x = x, this._y = y;
    }
};
function __TURBOPACK__default__export__(context) {
    return new Step(context, 0.5);
}
function stepBefore(context) {
    return new Step(context, 0);
}
function stepAfter(context) {
    return new Step(context, 1);
}
}),
"[project]/project-root/frontend/node_modules/d3-shape/src/curve/step.js [client] (ecmascript) <export default as curveStep>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "curveStep",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$step$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$step$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/curve/step.js [client] (ecmascript)");
}),
"[project]/project-root/frontend/node_modules/d3-shape/src/curve/step.js [client] (ecmascript) <export stepAfter as curveStepAfter>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "curveStepAfter",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$step$2e$js__$5b$client$5d$__$28$ecmascript$29$__["stepAfter"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$step$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/curve/step.js [client] (ecmascript)");
}),
"[project]/project-root/frontend/node_modules/d3-shape/src/curve/step.js [client] (ecmascript) <export stepBefore as curveStepBefore>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "curveStepBefore",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$step$2e$js__$5b$client$5d$__$28$ecmascript$29$__["stepBefore"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$step$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/curve/step.js [client] (ecmascript)");
}),
"[project]/project-root/frontend/node_modules/d3-shape/src/pointRadial.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__(x, y) {
    return [
        (y = +y) * Math.cos(x -= Math.PI / 2),
        y * Math.sin(x)
    ];
}
}),
"[project]/project-root/frontend/node_modules/d3-shape/src/curve/bump.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "bumpRadial",
    ()=>bumpRadial,
    "bumpX",
    ()=>bumpX,
    "bumpY",
    ()=>bumpY
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$pointRadial$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/pointRadial.js [client] (ecmascript)");
;
class Bump {
    constructor(context, x){
        this._context = context;
        this._x = x;
    }
    areaStart() {
        this._line = 0;
    }
    areaEnd() {
        this._line = NaN;
    }
    lineStart() {
        this._point = 0;
    }
    lineEnd() {
        if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
        this._line = 1 - this._line;
    }
    point(x, y) {
        x = +x, y = +y;
        switch(this._point){
            case 0:
                {
                    this._point = 1;
                    if (this._line) this._context.lineTo(x, y);
                    else this._context.moveTo(x, y);
                    break;
                }
            case 1:
                this._point = 2; // falls through
            default:
                {
                    if (this._x) this._context.bezierCurveTo(this._x0 = (this._x0 + x) / 2, this._y0, this._x0, y, x, y);
                    else this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + y) / 2, x, this._y0, x, y);
                    break;
                }
        }
        this._x0 = x, this._y0 = y;
    }
}
class BumpRadial {
    constructor(context){
        this._context = context;
    }
    lineStart() {
        this._point = 0;
    }
    lineEnd() {}
    point(x, y) {
        x = +x, y = +y;
        if (this._point === 0) {
            this._point = 1;
        } else {
            const p0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$pointRadial$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(this._x0, this._y0);
            const p1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$pointRadial$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(this._x0, this._y0 = (this._y0 + y) / 2);
            const p2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$pointRadial$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(x, this._y0);
            const p3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$pointRadial$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(x, y);
            this._context.moveTo(...p0);
            this._context.bezierCurveTo(...p1, ...p2, ...p3);
        }
        this._x0 = x, this._y0 = y;
    }
}
function bumpX(context) {
    return new Bump(context, true);
}
function bumpY(context) {
    return new Bump(context, false);
}
function bumpRadial(context) {
    return new BumpRadial(context);
}
}),
"[project]/project-root/frontend/node_modules/d3-shape/src/curve/bump.js [client] (ecmascript) <export bumpX as curveBumpX>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "curveBumpX",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$bump$2e$js__$5b$client$5d$__$28$ecmascript$29$__["bumpX"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$bump$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/curve/bump.js [client] (ecmascript)");
}),
"[project]/project-root/frontend/node_modules/d3-shape/src/curve/bump.js [client] (ecmascript) <export bumpY as curveBumpY>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "curveBumpY",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$bump$2e$js__$5b$client$5d$__$28$ecmascript$29$__["bumpY"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$bump$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/curve/bump.js [client] (ecmascript)");
}),
"[project]/project-root/frontend/node_modules/d3-shape/src/line.js [client] (ecmascript) <export default as line>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "line",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$line$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$line$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/line.js [client] (ecmascript)");
}),
"[project]/project-root/frontend/node_modules/d3-shape/src/symbol/asterisk.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/math.js [client] (ecmascript)");
;
const sqrt3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["sqrt"])(3);
const __TURBOPACK__default__export__ = {
    draw (context, size) {
        const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["sqrt"])(size + (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["min"])(size / 28, 0.75)) * 0.59436;
        const t = r / 2;
        const u = t * sqrt3;
        context.moveTo(0, r);
        context.lineTo(0, -r);
        context.moveTo(-u, -t);
        context.lineTo(u, t);
        context.moveTo(-u, t);
        context.lineTo(u, -t);
    }
};
}),
"[project]/project-root/frontend/node_modules/d3-shape/src/symbol/circle.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/math.js [client] (ecmascript)");
;
const __TURBOPACK__default__export__ = {
    draw (context, size) {
        const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["sqrt"])(size / __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["pi"]);
        context.moveTo(r, 0);
        context.arc(0, 0, r, 0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["tau"]);
    }
};
}),
"[project]/project-root/frontend/node_modules/d3-shape/src/symbol/cross.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/math.js [client] (ecmascript)");
;
const __TURBOPACK__default__export__ = {
    draw (context, size) {
        const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["sqrt"])(size / 5) / 2;
        context.moveTo(-3 * r, -r);
        context.lineTo(-r, -r);
        context.lineTo(-r, -3 * r);
        context.lineTo(r, -3 * r);
        context.lineTo(r, -r);
        context.lineTo(3 * r, -r);
        context.lineTo(3 * r, r);
        context.lineTo(r, r);
        context.lineTo(r, 3 * r);
        context.lineTo(-r, 3 * r);
        context.lineTo(-r, r);
        context.lineTo(-3 * r, r);
        context.closePath();
    }
};
}),
"[project]/project-root/frontend/node_modules/d3-shape/src/symbol/diamond.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/math.js [client] (ecmascript)");
;
const tan30 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["sqrt"])(1 / 3);
const tan30_2 = tan30 * 2;
const __TURBOPACK__default__export__ = {
    draw (context, size) {
        const y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["sqrt"])(size / tan30_2);
        const x = y * tan30;
        context.moveTo(0, -y);
        context.lineTo(x, 0);
        context.lineTo(0, y);
        context.lineTo(-x, 0);
        context.closePath();
    }
};
}),
"[project]/project-root/frontend/node_modules/d3-shape/src/symbol/diamond2.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/math.js [client] (ecmascript)");
;
const __TURBOPACK__default__export__ = {
    draw (context, size) {
        const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["sqrt"])(size) * 0.62625;
        context.moveTo(0, -r);
        context.lineTo(r, 0);
        context.lineTo(0, r);
        context.lineTo(-r, 0);
        context.closePath();
    }
};
}),
"[project]/project-root/frontend/node_modules/d3-shape/src/symbol/plus.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/math.js [client] (ecmascript)");
;
const __TURBOPACK__default__export__ = {
    draw (context, size) {
        const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["sqrt"])(size - (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["min"])(size / 7, 2)) * 0.87559;
        context.moveTo(-r, 0);
        context.lineTo(r, 0);
        context.moveTo(0, r);
        context.lineTo(0, -r);
    }
};
}),
"[project]/project-root/frontend/node_modules/d3-shape/src/symbol/square.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/math.js [client] (ecmascript)");
;
const __TURBOPACK__default__export__ = {
    draw (context, size) {
        const w = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["sqrt"])(size);
        const x = -w / 2;
        context.rect(x, x, w, w);
    }
};
}),
"[project]/project-root/frontend/node_modules/d3-shape/src/symbol/square2.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/math.js [client] (ecmascript)");
;
const __TURBOPACK__default__export__ = {
    draw (context, size) {
        const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["sqrt"])(size) * 0.4431;
        context.moveTo(r, r);
        context.lineTo(r, -r);
        context.lineTo(-r, -r);
        context.lineTo(-r, r);
        context.closePath();
    }
};
}),
"[project]/project-root/frontend/node_modules/d3-shape/src/symbol/star.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/math.js [client] (ecmascript)");
;
const ka = 0.89081309152928522810;
const kr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["sin"])(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["pi"] / 10) / (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["sin"])(7 * __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["pi"] / 10);
const kx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["sin"])(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["tau"] / 10) * kr;
const ky = -(0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["cos"])(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["tau"] / 10) * kr;
const __TURBOPACK__default__export__ = {
    draw (context, size) {
        const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["sqrt"])(size * ka);
        const x = kx * r;
        const y = ky * r;
        context.moveTo(0, -r);
        context.lineTo(x, y);
        for(let i = 1; i < 5; ++i){
            const a = __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["tau"] * i / 5;
            const c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["cos"])(a);
            const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["sin"])(a);
            context.lineTo(s * r, -c * r);
            context.lineTo(c * x - s * y, s * x + c * y);
        }
        context.closePath();
    }
};
}),
"[project]/project-root/frontend/node_modules/d3-shape/src/symbol/triangle.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/math.js [client] (ecmascript)");
;
const sqrt3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["sqrt"])(3);
const __TURBOPACK__default__export__ = {
    draw (context, size) {
        const y = -(0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["sqrt"])(size / (sqrt3 * 3));
        context.moveTo(0, y * 2);
        context.lineTo(-sqrt3 * y, -y);
        context.lineTo(sqrt3 * y, -y);
        context.closePath();
    }
};
}),
"[project]/project-root/frontend/node_modules/d3-shape/src/symbol/triangle2.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/math.js [client] (ecmascript)");
;
const sqrt3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["sqrt"])(3);
const __TURBOPACK__default__export__ = {
    draw (context, size) {
        const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["sqrt"])(size) * 0.6824;
        const t = s / 2;
        const u = s * sqrt3 / 2; // cos(Math.PI / 6)
        context.moveTo(0, -s);
        context.lineTo(u, t);
        context.lineTo(-u, t);
        context.closePath();
    }
};
}),
"[project]/project-root/frontend/node_modules/d3-shape/src/symbol/wye.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/math.js [client] (ecmascript)");
;
const c = -0.5;
const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["sqrt"])(3) / 2;
const k = 1 / (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["sqrt"])(12);
const a = (k / 2 + 1) * 3;
const __TURBOPACK__default__export__ = {
    draw (context, size) {
        const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["sqrt"])(size / a);
        const x0 = r / 2, y0 = r * k;
        const x1 = x0, y1 = r * k + r;
        const x2 = -x1, y2 = y1;
        context.moveTo(x0, y0);
        context.lineTo(x1, y1);
        context.lineTo(x2, y2);
        context.lineTo(c * x0 - s * y0, s * x0 + c * y0);
        context.lineTo(c * x1 - s * y1, s * x1 + c * y1);
        context.lineTo(c * x2 - s * y2, s * x2 + c * y2);
        context.lineTo(c * x0 + s * y0, c * y0 - s * x0);
        context.lineTo(c * x1 + s * y1, c * y1 - s * x1);
        context.lineTo(c * x2 + s * y2, c * y2 - s * x2);
        context.closePath();
    }
};
}),
"[project]/project-root/frontend/node_modules/d3-shape/src/symbol/times.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/math.js [client] (ecmascript)");
;
const __TURBOPACK__default__export__ = {
    draw (context, size) {
        const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["sqrt"])(size - (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["min"])(size / 6, 1.7)) * 0.6189;
        context.moveTo(-r, -r);
        context.lineTo(r, r);
        context.moveTo(-r, r);
        context.lineTo(r, -r);
    }
};
}),
"[project]/project-root/frontend/node_modules/d3-shape/src/symbol.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Symbol,
    "symbolsFill",
    ()=>symbolsFill,
    "symbolsStroke",
    ()=>symbolsStroke
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$constant$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/constant.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$path$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/path.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$symbol$2f$asterisk$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/symbol/asterisk.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$symbol$2f$circle$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/symbol/circle.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$symbol$2f$cross$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/symbol/cross.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$symbol$2f$diamond$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/symbol/diamond.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$symbol$2f$diamond2$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/symbol/diamond2.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$symbol$2f$plus$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/symbol/plus.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$symbol$2f$square$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/symbol/square.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$symbol$2f$square2$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/symbol/square2.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$symbol$2f$star$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/symbol/star.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$symbol$2f$triangle$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/symbol/triangle.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$symbol$2f$triangle2$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/symbol/triangle2.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$symbol$2f$wye$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/symbol/wye.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$symbol$2f$times$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/symbol/times.js [client] (ecmascript)");
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
const symbolsFill = [
    __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$symbol$2f$circle$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$symbol$2f$cross$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$symbol$2f$diamond$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$symbol$2f$square$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$symbol$2f$star$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$symbol$2f$triangle$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$symbol$2f$wye$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
];
const symbolsStroke = [
    __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$symbol$2f$circle$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$symbol$2f$plus$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$symbol$2f$times$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$symbol$2f$triangle2$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$symbol$2f$asterisk$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$symbol$2f$square2$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$symbol$2f$diamond2$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
];
function Symbol(type, size) {
    let context = null, path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$path$2e$js__$5b$client$5d$__$28$ecmascript$29$__["withPath"])(symbol);
    type = typeof type === "function" ? type : (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$constant$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(type || __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$symbol$2f$circle$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]);
    size = typeof size === "function" ? size : (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$constant$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(size === undefined ? 64 : +size);
    function symbol() {
        let buffer;
        if (!context) context = buffer = path();
        type.apply(this, arguments).draw(context, +size.apply(this, arguments));
        if (buffer) return context = null, buffer + "" || null;
    }
    symbol.type = function(_) {
        return arguments.length ? (type = typeof _ === "function" ? _ : (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$constant$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(_), symbol) : type;
    };
    symbol.size = function(_) {
        return arguments.length ? (size = typeof _ === "function" ? _ : (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$constant$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(+_), symbol) : size;
    };
    symbol.context = function(_) {
        return arguments.length ? (context = _ == null ? null : _, symbol) : context;
    };
    return symbol;
}
}),
"[project]/project-root/frontend/node_modules/d3-shape/src/symbol.js [client] (ecmascript) <export default as symbol>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "symbol",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$symbol$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$symbol$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/symbol.js [client] (ecmascript)");
}),
"[project]/project-root/frontend/node_modules/d3-shape/src/offset/none.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__(series, order) {
    if (!((n = series.length) > 1)) return;
    for(var i = 1, j, s0, s1 = series[order[0]], n, m = s1.length; i < n; ++i){
        s0 = s1, s1 = series[order[i]];
        for(j = 0; j < m; ++j){
            s1[j][1] += s1[j][0] = isNaN(s0[j][1]) ? s0[j][0] : s0[j][1];
        }
    }
}
}),
"[project]/project-root/frontend/node_modules/d3-shape/src/order/none.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__(series) {
    var n = series.length, o = new Array(n);
    while(--n >= 0)o[n] = n;
    return o;
}
}),
"[project]/project-root/frontend/node_modules/d3-shape/src/stack.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$array$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/array.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$constant$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/constant.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$offset$2f$none$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/offset/none.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$order$2f$none$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/order/none.js [client] (ecmascript)");
;
;
;
;
function stackValue(d, key) {
    return d[key];
}
function stackSeries(key) {
    const series = [];
    series.key = key;
    return series;
}
function __TURBOPACK__default__export__() {
    var keys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$constant$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])([]), order = __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$order$2f$none$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], offset = __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$offset$2f$none$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], value = stackValue;
    function stack(data) {
        var sz = Array.from(keys.apply(this, arguments), stackSeries), i, n = sz.length, j = -1, oz;
        for (const d of data){
            for(i = 0, ++j; i < n; ++i){
                (sz[i][j] = [
                    0,
                    +value(d, sz[i].key, j, data)
                ]).data = d;
            }
        }
        for(i = 0, oz = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$array$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(order(sz)); i < n; ++i){
            sz[oz[i]].index = i;
        }
        offset(sz, oz);
        return sz;
    }
    stack.keys = function(_) {
        return arguments.length ? (keys = typeof _ === "function" ? _ : (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$constant$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(Array.from(_)), stack) : keys;
    };
    stack.value = function(_) {
        return arguments.length ? (value = typeof _ === "function" ? _ : (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$constant$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(+_), stack) : value;
    };
    stack.order = function(_) {
        return arguments.length ? (order = _ == null ? __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$order$2f$none$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"] : typeof _ === "function" ? _ : (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$constant$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(Array.from(_)), stack) : order;
    };
    stack.offset = function(_) {
        return arguments.length ? (offset = _ == null ? __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$offset$2f$none$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"] : _, stack) : offset;
    };
    return stack;
}
}),
"[project]/project-root/frontend/node_modules/d3-shape/src/stack.js [client] (ecmascript) <export default as stack>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "stack",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$stack$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$stack$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/stack.js [client] (ecmascript)");
}),
"[project]/project-root/frontend/node_modules/d3-shape/src/order/appearance.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$order$2f$none$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/order/none.js [client] (ecmascript)");
;
function __TURBOPACK__default__export__(series) {
    var peaks = series.map(peak);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$order$2f$none$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(series).sort(function(a, b) {
        return peaks[a] - peaks[b];
    });
}
function peak(series) {
    var i = -1, j = 0, n = series.length, vi, vj = -Infinity;
    while(++i < n)if ((vi = +series[i][1]) > vj) vj = vi, j = i;
    return j;
}
}),
"[project]/project-root/frontend/node_modules/d3-shape/src/order/appearance.js [client] (ecmascript) <export default as stackOrderAppearance>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "stackOrderAppearance",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$order$2f$appearance$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$order$2f$appearance$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/order/appearance.js [client] (ecmascript)");
}),
"[project]/project-root/frontend/node_modules/d3-shape/src/order/ascending.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "sum",
    ()=>sum
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$order$2f$none$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/order/none.js [client] (ecmascript)");
;
function __TURBOPACK__default__export__(series) {
    var sums = series.map(sum);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$order$2f$none$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(series).sort(function(a, b) {
        return sums[a] - sums[b];
    });
}
function sum(series) {
    var s = 0, i = -1, n = series.length, v;
    while(++i < n)if (v = +series[i][1]) s += v;
    return s;
}
}),
"[project]/project-root/frontend/node_modules/d3-shape/src/order/ascending.js [client] (ecmascript) <export default as stackOrderAscending>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "stackOrderAscending",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$order$2f$ascending$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$order$2f$ascending$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/order/ascending.js [client] (ecmascript)");
}),
"[project]/project-root/frontend/node_modules/d3-shape/src/order/descending.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$order$2f$ascending$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/order/ascending.js [client] (ecmascript)");
;
function __TURBOPACK__default__export__(series) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$order$2f$ascending$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(series).reverse();
}
}),
"[project]/project-root/frontend/node_modules/d3-shape/src/order/descending.js [client] (ecmascript) <export default as stackOrderDescending>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "stackOrderDescending",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$order$2f$descending$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$order$2f$descending$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/order/descending.js [client] (ecmascript)");
}),
"[project]/project-root/frontend/node_modules/d3-shape/src/order/insideOut.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$order$2f$appearance$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/order/appearance.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$order$2f$ascending$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/order/ascending.js [client] (ecmascript)");
;
;
function __TURBOPACK__default__export__(series) {
    var n = series.length, i, j, sums = series.map(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$order$2f$ascending$2e$js__$5b$client$5d$__$28$ecmascript$29$__["sum"]), order = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$order$2f$appearance$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(series), top = 0, bottom = 0, tops = [], bottoms = [];
    for(i = 0; i < n; ++i){
        j = order[i];
        if (top < bottom) {
            top += sums[j];
            tops.push(j);
        } else {
            bottom += sums[j];
            bottoms.push(j);
        }
    }
    return bottoms.reverse().concat(tops);
}
}),
"[project]/project-root/frontend/node_modules/d3-shape/src/order/insideOut.js [client] (ecmascript) <export default as stackOrderInsideOut>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "stackOrderInsideOut",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$order$2f$insideOut$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$order$2f$insideOut$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/order/insideOut.js [client] (ecmascript)");
}),
"[project]/project-root/frontend/node_modules/d3-shape/src/order/none.js [client] (ecmascript) <export default as stackOrderNone>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "stackOrderNone",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$order$2f$none$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$order$2f$none$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/order/none.js [client] (ecmascript)");
}),
"[project]/project-root/frontend/node_modules/d3-shape/src/order/reverse.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$order$2f$none$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/order/none.js [client] (ecmascript)");
;
function __TURBOPACK__default__export__(series) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$order$2f$none$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(series).reverse();
}
}),
"[project]/project-root/frontend/node_modules/d3-shape/src/order/reverse.js [client] (ecmascript) <export default as stackOrderReverse>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "stackOrderReverse",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$order$2f$reverse$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$order$2f$reverse$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/order/reverse.js [client] (ecmascript)");
}),
"[project]/project-root/frontend/node_modules/d3-shape/src/offset/expand.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$offset$2f$none$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/offset/none.js [client] (ecmascript)");
;
function __TURBOPACK__default__export__(series, order) {
    if (!((n = series.length) > 0)) return;
    for(var i, n, j = 0, m = series[0].length, y; j < m; ++j){
        for(y = i = 0; i < n; ++i)y += series[i][j][1] || 0;
        if (y) for(i = 0; i < n; ++i)series[i][j][1] /= y;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$offset$2f$none$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(series, order);
}
}),
"[project]/project-root/frontend/node_modules/d3-shape/src/offset/expand.js [client] (ecmascript) <export default as stackOffsetExpand>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "stackOffsetExpand",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$offset$2f$expand$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$offset$2f$expand$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/offset/expand.js [client] (ecmascript)");
}),
"[project]/project-root/frontend/node_modules/d3-shape/src/offset/diverging.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__(series, order) {
    if (!((n = series.length) > 0)) return;
    for(var i, j = 0, d, dy, yp, yn, n, m = series[order[0]].length; j < m; ++j){
        for(yp = yn = 0, i = 0; i < n; ++i){
            if ((dy = (d = series[order[i]][j])[1] - d[0]) > 0) {
                d[0] = yp, d[1] = yp += dy;
            } else if (dy < 0) {
                d[1] = yn, d[0] = yn += dy;
            } else {
                d[0] = 0, d[1] = dy;
            }
        }
    }
}
}),
"[project]/project-root/frontend/node_modules/d3-shape/src/offset/diverging.js [client] (ecmascript) <export default as stackOffsetDiverging>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "stackOffsetDiverging",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$offset$2f$diverging$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$offset$2f$diverging$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/offset/diverging.js [client] (ecmascript)");
}),
"[project]/project-root/frontend/node_modules/d3-shape/src/offset/none.js [client] (ecmascript) <export default as stackOffsetNone>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "stackOffsetNone",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$offset$2f$none$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$offset$2f$none$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/offset/none.js [client] (ecmascript)");
}),
"[project]/project-root/frontend/node_modules/d3-shape/src/offset/silhouette.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$offset$2f$none$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/offset/none.js [client] (ecmascript)");
;
function __TURBOPACK__default__export__(series, order) {
    if (!((n = series.length) > 0)) return;
    for(var j = 0, s0 = series[order[0]], n, m = s0.length; j < m; ++j){
        for(var i = 0, y = 0; i < n; ++i)y += series[i][j][1] || 0;
        s0[j][1] += s0[j][0] = -y / 2;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$offset$2f$none$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(series, order);
}
}),
"[project]/project-root/frontend/node_modules/d3-shape/src/offset/silhouette.js [client] (ecmascript) <export default as stackOffsetSilhouette>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "stackOffsetSilhouette",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$offset$2f$silhouette$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$offset$2f$silhouette$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/offset/silhouette.js [client] (ecmascript)");
}),
"[project]/project-root/frontend/node_modules/d3-shape/src/offset/wiggle.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$offset$2f$none$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/offset/none.js [client] (ecmascript)");
;
function __TURBOPACK__default__export__(series, order) {
    if (!((n = series.length) > 0) || !((m = (s0 = series[order[0]]).length) > 0)) return;
    for(var y = 0, j = 1, s0, m, n; j < m; ++j){
        for(var i = 0, s1 = 0, s2 = 0; i < n; ++i){
            var si = series[order[i]], sij0 = si[j][1] || 0, sij1 = si[j - 1][1] || 0, s3 = (sij0 - sij1) / 2;
            for(var k = 0; k < i; ++k){
                var sk = series[order[k]], skj0 = sk[j][1] || 0, skj1 = sk[j - 1][1] || 0;
                s3 += skj0 - skj1;
            }
            s1 += sij0, s2 += s3 * sij0;
        }
        s0[j - 1][1] += s0[j - 1][0] = y;
        if (s1) y -= s2 / s1;
    }
    s0[j - 1][1] += s0[j - 1][0] = y;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$offset$2f$none$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(series, order);
}
}),
"[project]/project-root/frontend/node_modules/d3-shape/src/offset/wiggle.js [client] (ecmascript) <export default as stackOffsetWiggle>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "stackOffsetWiggle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$offset$2f$wiggle$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$offset$2f$wiggle$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/offset/wiggle.js [client] (ecmascript)");
}),
"[project]/project-root/frontend/node_modules/d3-shape/src/descending.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__(a, b) {
    return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
}
}),
"[project]/project-root/frontend/node_modules/d3-shape/src/identity.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__(d) {
    return d;
}
}),
"[project]/project-root/frontend/node_modules/d3-shape/src/pie.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$array$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/array.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$constant$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/constant.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$descending$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/descending.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$identity$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/identity.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/math.js [client] (ecmascript)");
;
;
;
;
;
function __TURBOPACK__default__export__() {
    var value = __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$identity$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], sortValues = __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$descending$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], sort = null, startAngle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$constant$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(0), endAngle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$constant$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["tau"]), padAngle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$constant$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(0);
    function pie(data) {
        var i, n = (data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$array$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(data)).length, j, k, sum = 0, index = new Array(n), arcs = new Array(n), a0 = +startAngle.apply(this, arguments), da = Math.min(__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["tau"], Math.max(-__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["tau"], endAngle.apply(this, arguments) - a0)), a1, p = Math.min(Math.abs(da) / n, padAngle.apply(this, arguments)), pa = p * (da < 0 ? -1 : 1), v;
        for(i = 0; i < n; ++i){
            if ((v = arcs[index[i] = i] = +value(data[i], i, data)) > 0) {
                sum += v;
            }
        }
        // Optionally sort the arcs by previously-computed values or by data.
        if (sortValues != null) index.sort(function(i, j) {
            return sortValues(arcs[i], arcs[j]);
        });
        else if (sort != null) index.sort(function(i, j) {
            return sort(data[i], data[j]);
        });
        // Compute the arcs! They are stored in the original data's order.
        for(i = 0, k = sum ? (da - n * pa) / sum : 0; i < n; ++i, a0 = a1){
            j = index[i], v = arcs[j], a1 = a0 + (v > 0 ? v * k : 0) + pa, arcs[j] = {
                data: data[j],
                index: i,
                value: v,
                startAngle: a0,
                endAngle: a1,
                padAngle: p
            };
        }
        return arcs;
    }
    pie.value = function(_) {
        return arguments.length ? (value = typeof _ === "function" ? _ : (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$constant$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(+_), pie) : value;
    };
    pie.sortValues = function(_) {
        return arguments.length ? (sortValues = _, sort = null, pie) : sortValues;
    };
    pie.sort = function(_) {
        return arguments.length ? (sort = _, sortValues = null, pie) : sort;
    };
    pie.startAngle = function(_) {
        return arguments.length ? (startAngle = typeof _ === "function" ? _ : (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$constant$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(+_), pie) : startAngle;
    };
    pie.endAngle = function(_) {
        return arguments.length ? (endAngle = typeof _ === "function" ? _ : (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$constant$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(+_), pie) : endAngle;
    };
    pie.padAngle = function(_) {
        return arguments.length ? (padAngle = typeof _ === "function" ? _ : (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$constant$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(+_), pie) : padAngle;
    };
    return pie;
}
}),
"[project]/project-root/frontend/node_modules/d3-shape/src/pie.js [client] (ecmascript) <export default as pie>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "pie",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$pie$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$pie$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/pie.js [client] (ecmascript)");
}),
"[project]/project-root/frontend/node_modules/d3-shape/src/arc.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$constant$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/constant.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/math.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$path$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/path.js [client] (ecmascript)");
;
;
;
function arcInnerRadius(d) {
    return d.innerRadius;
}
function arcOuterRadius(d) {
    return d.outerRadius;
}
function arcStartAngle(d) {
    return d.startAngle;
}
function arcEndAngle(d) {
    return d.endAngle;
}
function arcPadAngle(d) {
    return d && d.padAngle; // Note: optional!
}
function intersect(x0, y0, x1, y1, x2, y2, x3, y3) {
    var x10 = x1 - x0, y10 = y1 - y0, x32 = x3 - x2, y32 = y3 - y2, t = y32 * x10 - x32 * y10;
    if (t * t < __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["epsilon"]) return;
    t = (x32 * (y0 - y2) - y32 * (x0 - x2)) / t;
    return [
        x0 + t * x10,
        y0 + t * y10
    ];
}
// Compute perpendicular offset line of length rc.
// http://mathworld.wolfram.com/Circle-LineIntersection.html
function cornerTangents(x0, y0, x1, y1, r1, rc, cw) {
    var x01 = x0 - x1, y01 = y0 - y1, lo = (cw ? rc : -rc) / (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["sqrt"])(x01 * x01 + y01 * y01), ox = lo * y01, oy = -lo * x01, x11 = x0 + ox, y11 = y0 + oy, x10 = x1 + ox, y10 = y1 + oy, x00 = (x11 + x10) / 2, y00 = (y11 + y10) / 2, dx = x10 - x11, dy = y10 - y11, d2 = dx * dx + dy * dy, r = r1 - rc, D = x11 * y10 - x10 * y11, d = (dy < 0 ? -1 : 1) * (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["sqrt"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["max"])(0, r * r * d2 - D * D)), cx0 = (D * dy - dx * d) / d2, cy0 = (-D * dx - dy * d) / d2, cx1 = (D * dy + dx * d) / d2, cy1 = (-D * dx + dy * d) / d2, dx0 = cx0 - x00, dy0 = cy0 - y00, dx1 = cx1 - x00, dy1 = cy1 - y00;
    // Pick the closer of the two intersection points.
    // TODO Is there a faster way to determine which intersection to use?
    if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) cx0 = cx1, cy0 = cy1;
    return {
        cx: cx0,
        cy: cy0,
        x01: -ox,
        y01: -oy,
        x11: cx0 * (r1 / r - 1),
        y11: cy0 * (r1 / r - 1)
    };
}
function __TURBOPACK__default__export__() {
    var innerRadius = arcInnerRadius, outerRadius = arcOuterRadius, cornerRadius = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$constant$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(0), padRadius = null, startAngle = arcStartAngle, endAngle = arcEndAngle, padAngle = arcPadAngle, context = null, path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$path$2e$js__$5b$client$5d$__$28$ecmascript$29$__["withPath"])(arc);
    function arc() {
        var buffer, r, r0 = +innerRadius.apply(this, arguments), r1 = +outerRadius.apply(this, arguments), a0 = startAngle.apply(this, arguments) - __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["halfPi"], a1 = endAngle.apply(this, arguments) - __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["halfPi"], da = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["abs"])(a1 - a0), cw = a1 > a0;
        if (!context) context = buffer = path();
        // Ensure that the outer radius is always larger than the inner radius.
        if (r1 < r0) r = r1, r1 = r0, r0 = r;
        // Is it a point?
        if (!(r1 > __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["epsilon"])) context.moveTo(0, 0);
        else if (da > __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["tau"] - __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["epsilon"]) {
            context.moveTo(r1 * (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["cos"])(a0), r1 * (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["sin"])(a0));
            context.arc(0, 0, r1, a0, a1, !cw);
            if (r0 > __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["epsilon"]) {
                context.moveTo(r0 * (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["cos"])(a1), r0 * (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["sin"])(a1));
                context.arc(0, 0, r0, a1, a0, cw);
            }
        } else {
            var a01 = a0, a11 = a1, a00 = a0, a10 = a1, da0 = da, da1 = da, ap = padAngle.apply(this, arguments) / 2, rp = ap > __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["epsilon"] && (padRadius ? +padRadius.apply(this, arguments) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["sqrt"])(r0 * r0 + r1 * r1)), rc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["min"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["abs"])(r1 - r0) / 2, +cornerRadius.apply(this, arguments)), rc0 = rc, rc1 = rc, t0, t1;
            // Apply padding? Note that since r1 ≥ r0, da1 ≥ da0.
            if (rp > __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["epsilon"]) {
                var p0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["asin"])(rp / r0 * (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["sin"])(ap)), p1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["asin"])(rp / r1 * (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["sin"])(ap));
                if ((da0 -= p0 * 2) > __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["epsilon"]) p0 *= cw ? 1 : -1, a00 += p0, a10 -= p0;
                else da0 = 0, a00 = a10 = (a0 + a1) / 2;
                if ((da1 -= p1 * 2) > __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["epsilon"]) p1 *= cw ? 1 : -1, a01 += p1, a11 -= p1;
                else da1 = 0, a01 = a11 = (a0 + a1) / 2;
            }
            var x01 = r1 * (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["cos"])(a01), y01 = r1 * (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["sin"])(a01), x10 = r0 * (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["cos"])(a10), y10 = r0 * (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["sin"])(a10);
            // Apply rounded corners?
            if (rc > __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["epsilon"]) {
                var x11 = r1 * (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["cos"])(a11), y11 = r1 * (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["sin"])(a11), x00 = r0 * (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["cos"])(a00), y00 = r0 * (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["sin"])(a00), oc;
                // Restrict the corner radius according to the sector angle. If this
                // intersection fails, it’s probably because the arc is too small, so
                // disable the corner radius entirely.
                if (da < __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["pi"]) {
                    if (oc = intersect(x01, y01, x00, y00, x11, y11, x10, y10)) {
                        var ax = x01 - oc[0], ay = y01 - oc[1], bx = x11 - oc[0], by = y11 - oc[1], kc = 1 / (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["sin"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["acos"])((ax * bx + ay * by) / ((0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["sqrt"])(ax * ax + ay * ay) * (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["sqrt"])(bx * bx + by * by))) / 2), lc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["sqrt"])(oc[0] * oc[0] + oc[1] * oc[1]);
                        rc0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["min"])(rc, (r0 - lc) / (kc - 1));
                        rc1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["min"])(rc, (r1 - lc) / (kc + 1));
                    } else {
                        rc0 = rc1 = 0;
                    }
                }
            }
            // Is the sector collapsed to a line?
            if (!(da1 > __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["epsilon"])) context.moveTo(x01, y01);
            else if (rc1 > __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["epsilon"]) {
                t0 = cornerTangents(x00, y00, x01, y01, r1, rc1, cw);
                t1 = cornerTangents(x11, y11, x10, y10, r1, rc1, cw);
                context.moveTo(t0.cx + t0.x01, t0.cy + t0.y01);
                // Have the corners merged?
                if (rc1 < rc) context.arc(t0.cx, t0.cy, rc1, (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["atan2"])(t0.y01, t0.x01), (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["atan2"])(t1.y01, t1.x01), !cw);
                else {
                    context.arc(t0.cx, t0.cy, rc1, (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["atan2"])(t0.y01, t0.x01), (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["atan2"])(t0.y11, t0.x11), !cw);
                    context.arc(0, 0, r1, (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["atan2"])(t0.cy + t0.y11, t0.cx + t0.x11), (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["atan2"])(t1.cy + t1.y11, t1.cx + t1.x11), !cw);
                    context.arc(t1.cx, t1.cy, rc1, (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["atan2"])(t1.y11, t1.x11), (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["atan2"])(t1.y01, t1.x01), !cw);
                }
            } else context.moveTo(x01, y01), context.arc(0, 0, r1, a01, a11, !cw);
            // Is there no inner ring, and it’s a circular sector?
            // Or perhaps it’s an annular sector collapsed due to padding?
            if (!(r0 > __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["epsilon"]) || !(da0 > __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["epsilon"])) context.lineTo(x10, y10);
            else if (rc0 > __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["epsilon"]) {
                t0 = cornerTangents(x10, y10, x11, y11, r0, -rc0, cw);
                t1 = cornerTangents(x01, y01, x00, y00, r0, -rc0, cw);
                context.lineTo(t0.cx + t0.x01, t0.cy + t0.y01);
                // Have the corners merged?
                if (rc0 < rc) context.arc(t0.cx, t0.cy, rc0, (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["atan2"])(t0.y01, t0.x01), (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["atan2"])(t1.y01, t1.x01), !cw);
                else {
                    context.arc(t0.cx, t0.cy, rc0, (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["atan2"])(t0.y01, t0.x01), (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["atan2"])(t0.y11, t0.x11), !cw);
                    context.arc(0, 0, r0, (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["atan2"])(t0.cy + t0.y11, t0.cx + t0.x11), (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["atan2"])(t1.cy + t1.y11, t1.cx + t1.x11), cw);
                    context.arc(t1.cx, t1.cy, rc0, (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["atan2"])(t1.y11, t1.x11), (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["atan2"])(t1.y01, t1.x01), !cw);
                }
            } else context.arc(0, 0, r0, a10, a00, cw);
        }
        context.closePath();
        if (buffer) return context = null, buffer + "" || null;
    }
    arc.centroid = function() {
        var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2, a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["pi"] / 2;
        return [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["cos"])(a) * r,
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$math$2e$js__$5b$client$5d$__$28$ecmascript$29$__["sin"])(a) * r
        ];
    };
    arc.innerRadius = function(_) {
        return arguments.length ? (innerRadius = typeof _ === "function" ? _ : (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$constant$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(+_), arc) : innerRadius;
    };
    arc.outerRadius = function(_) {
        return arguments.length ? (outerRadius = typeof _ === "function" ? _ : (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$constant$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(+_), arc) : outerRadius;
    };
    arc.cornerRadius = function(_) {
        return arguments.length ? (cornerRadius = typeof _ === "function" ? _ : (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$constant$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(+_), arc) : cornerRadius;
    };
    arc.padRadius = function(_) {
        return arguments.length ? (padRadius = _ == null ? null : typeof _ === "function" ? _ : (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$constant$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(+_), arc) : padRadius;
    };
    arc.startAngle = function(_) {
        return arguments.length ? (startAngle = typeof _ === "function" ? _ : (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$constant$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(+_), arc) : startAngle;
    };
    arc.endAngle = function(_) {
        return arguments.length ? (endAngle = typeof _ === "function" ? _ : (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$constant$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(+_), arc) : endAngle;
    };
    arc.padAngle = function(_) {
        return arguments.length ? (padAngle = typeof _ === "function" ? _ : (0, __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$constant$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(+_), arc) : padAngle;
    };
    arc.context = function(_) {
        return arguments.length ? (context = _ == null ? null : _, arc) : context;
    };
    return arc;
}
}),
"[project]/project-root/frontend/node_modules/d3-shape/src/arc.js [client] (ecmascript) <export default as arc>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "arc",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$arc$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project$2d$root$2f$frontend$2f$node_modules$2f$d3$2d$shape$2f$src$2f$arc$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project-root/frontend/node_modules/d3-shape/src/arc.js [client] (ecmascript)");
}),
"[project]/project-root/frontend/node_modules/d3-path/src/path.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Path",
    ()=>Path,
    "path",
    ()=>path,
    "pathRound",
    ()=>pathRound
]);
const pi = Math.PI, tau = 2 * pi, epsilon = 1e-6, tauEpsilon = tau - epsilon;
function append(strings) {
    this._ += strings[0];
    for(let i = 1, n = strings.length; i < n; ++i){
        this._ += arguments[i] + strings[i];
    }
}
function appendRound(digits) {
    let d = Math.floor(digits);
    if (!(d >= 0)) throw new Error(`invalid digits: ${digits}`);
    if (d > 15) return append;
    const k = 10 ** d;
    return function(strings) {
        this._ += strings[0];
        for(let i = 1, n = strings.length; i < n; ++i){
            this._ += Math.round(arguments[i] * k) / k + strings[i];
        }
    };
}
class Path {
    constructor(digits){
        this._x0 = this._y0 = this._x1 = this._y1 = null; // end of current subpath
        this._ = "";
        this._append = digits == null ? append : appendRound(digits);
    }
    moveTo(x, y) {
        this._append`M${this._x0 = this._x1 = +x},${this._y0 = this._y1 = +y}`;
    }
    closePath() {
        if (this._x1 !== null) {
            this._x1 = this._x0, this._y1 = this._y0;
            this._append`Z`;
        }
    }
    lineTo(x, y) {
        this._append`L${this._x1 = +x},${this._y1 = +y}`;
    }
    quadraticCurveTo(x1, y1, x, y) {
        this._append`Q${+x1},${+y1},${this._x1 = +x},${this._y1 = +y}`;
    }
    bezierCurveTo(x1, y1, x2, y2, x, y) {
        this._append`C${+x1},${+y1},${+x2},${+y2},${this._x1 = +x},${this._y1 = +y}`;
    }
    arcTo(x1, y1, x2, y2, r) {
        x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
        // Is the radius negative? Error.
        if (r < 0) throw new Error(`negative radius: ${r}`);
        let x0 = this._x1, y0 = this._y1, x21 = x2 - x1, y21 = y2 - y1, x01 = x0 - x1, y01 = y0 - y1, l01_2 = x01 * x01 + y01 * y01;
        // Is this path empty? Move to (x1,y1).
        if (this._x1 === null) {
            this._append`M${this._x1 = x1},${this._y1 = y1}`;
        } else if (!(l01_2 > epsilon)) ;
        else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon) || !r) {
            this._append`L${this._x1 = x1},${this._y1 = y1}`;
        } else {
            let x20 = x2 - x0, y20 = y2 - y0, l21_2 = x21 * x21 + y21 * y21, l20_2 = x20 * x20 + y20 * y20, l21 = Math.sqrt(l21_2), l01 = Math.sqrt(l01_2), l = r * Math.tan((pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2), t01 = l / l01, t21 = l / l21;
            // If the start tangent is not coincident with (x0,y0), line to.
            if (Math.abs(t01 - 1) > epsilon) {
                this._append`L${x1 + t01 * x01},${y1 + t01 * y01}`;
            }
            this._append`A${r},${r},0,0,${+(y01 * x20 > x01 * y20)},${this._x1 = x1 + t21 * x21},${this._y1 = y1 + t21 * y21}`;
        }
    }
    arc(x, y, r, a0, a1, ccw) {
        x = +x, y = +y, r = +r, ccw = !!ccw;
        // Is the radius negative? Error.
        if (r < 0) throw new Error(`negative radius: ${r}`);
        let dx = r * Math.cos(a0), dy = r * Math.sin(a0), x0 = x + dx, y0 = y + dy, cw = 1 ^ ccw, da = ccw ? a0 - a1 : a1 - a0;
        // Is this path empty? Move to (x0,y0).
        if (this._x1 === null) {
            this._append`M${x0},${y0}`;
        } else if (Math.abs(this._x1 - x0) > epsilon || Math.abs(this._y1 - y0) > epsilon) {
            this._append`L${x0},${y0}`;
        }
        // Is this arc empty? We’re done.
        if (!r) return;
        // Does the angle go the wrong way? Flip the direction.
        if (da < 0) da = da % tau + tau;
        // Is this a complete circle? Draw two arcs to complete the circle.
        if (da > tauEpsilon) {
            this._append`A${r},${r},0,1,${cw},${x - dx},${y - dy}A${r},${r},0,1,${cw},${this._x1 = x0},${this._y1 = y0}`;
        } else if (da > epsilon) {
            this._append`A${r},${r},0,${+(da >= pi)},${cw},${this._x1 = x + r * Math.cos(a1)},${this._y1 = y + r * Math.sin(a1)}`;
        }
    }
    rect(x, y, w, h) {
        this._append`M${this._x0 = this._x1 = +x},${this._y0 = this._y1 = +y}h${w = +w}v${+h}h${-w}Z`;
    }
    toString() {
        return this._;
    }
}
function path() {
    return new Path;
}
// Allow instanceof d3.path
path.prototype = Path.prototype;
function pathRound(digits = 3) {
    return new Path(+digits);
}
}),
]);

//# sourceMappingURL=9a820_6a9490d8._.js.map