/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.defaultOptions = {};
exports["default"] = exports.defaultOptions;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdE9wdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvY29uc3RhbnRzL2RlZmF1bHRPcHRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRWEsUUFBQSxjQUFjLEdBQXFCLEVBRS9DLENBQUM7QUFFRixxQkFBZSxzQkFBYyxDQUFDIn0=

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var elementDimensions_1 = __webpack_require__(3);
var elementPosition_1 = __webpack_require__(4);
var trapeziumArea_1 = __webpack_require__(5);
var viewPortDimensions_1 = __webpack_require__(6);
function generateTrapezia(element, options) {
    var viewport = viewPortDimensions_1["default"]();
    var position = elementPosition_1["default"](element);
    var dimensions = elementDimensions_1["default"](element);
    return {
        top: trapeziumArea_1["default"](viewport.width, dimensions.width, position.top),
        right: trapeziumArea_1["default"](viewport.height, dimensions.height, viewport.width - position.right),
        bottom: trapeziumArea_1["default"](viewport.width, dimensions.width, viewport.height - position.bottom),
        left: trapeziumArea_1["default"](viewport.height, dimensions.height, position.left)
    };
}
exports.generateTrapezia = generateTrapezia;
exports["default"] = generateTrapezia;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVUcmFwZXppYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9nZW5lcmF0ZS9nZW5lcmF0ZVRyYXBlemlhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUEseURBQW9EO0FBQ3BELHFEQUFnRDtBQUNoRCxpREFBNEM7QUFDNUMsMkRBQXNEO0FBRXRELDBCQUFpQyxPQUFvQixFQUFFLE9BQXlCO0lBQzlFLElBQU0sUUFBUSxHQUFlLCtCQUFrQixFQUFFLENBQUM7SUFDbEQsSUFBTSxRQUFRLEdBQWUsNEJBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0RCxJQUFNLFVBQVUsR0FBZSw4QkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUUxRCxNQUFNLENBQUM7UUFDTCxHQUFHLEVBQUUsMEJBQWEsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQztRQUNsRSxLQUFLLEVBQUUsMEJBQWEsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQ3pGLE1BQU0sRUFBRSwwQkFBYSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFDMUYsSUFBSSxFQUFFLDBCQUFhLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUM7S0FDdkUsQ0FBQztBQUNKLENBQUM7QUFYRCw0Q0FXQztBQUVELHFCQUFlLGdCQUFnQixDQUFDIn0=

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
function suggestionsFromTrapezia(trapezia) {
    var horizontal;
    var vertical;
    var best;
    if (trapezia.right === trapezia.left) {
        horizontal = "equal";
    }
    else {
        horizontal = trapezia.right > trapezia.left ? "right" : "left";
    }
    if (trapezia.top === trapezia.bottom) {
        vertical = "equal";
    }
    else {
        vertical = trapezia.top > trapezia.bottom ? "top" : "bottom";
    }
    if (horizontal === "equal" && vertical === "equal") {
        best = "equal";
    }
    else {
        if (horizontal === "equal") {
            best = trapezia.left > trapezia[vertical] ? "horizontal" : vertical;
        }
        else if (vertical === "equal") {
            best = trapezia[horizontal] > trapezia.top ? horizontal : "vertical";
        }
        else {
            best = trapezia[horizontal] > trapezia[vertical] ? horizontal : vertical;
        }
    }
    return {
        horizontal: horizontal,
        vertical: vertical,
        best: best
    };
}
exports.suggestionsFromTrapezia = suggestionsFromTrapezia;
exports["default"] = suggestionsFromTrapezia;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VnZ2VzdGlvbnNGcm9tVHJhcGV6aWEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvZ2VuZXJhdGUvc3VnZ2VzdGlvbnNGcm9tVHJhcGV6aWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSxpQ0FBd0MsUUFBa0I7SUFDeEQsSUFBSSxVQUFzQyxDQUFDO0lBQzNDLElBQUksUUFBb0MsQ0FBQztJQUN6QyxJQUFJLElBQWlELENBQUM7SUFFdEQsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssS0FBSyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNyQyxVQUFVLEdBQUcsT0FBTyxDQUFDO0lBQ3ZCLENBQUM7SUFBQyxJQUFJLENBQUMsQ0FBQztRQUNOLFVBQVUsR0FBRyxRQUFRLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxJQUFJLEdBQUcsT0FBTyxHQUFHLE1BQU0sQ0FBQztJQUNqRSxDQUFDO0lBRUQsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsS0FBSyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNyQyxRQUFRLEdBQUcsT0FBTyxDQUFDO0lBQ3JCLENBQUM7SUFBQyxJQUFJLENBQUMsQ0FBQztRQUNOLFFBQVEsR0FBRyxRQUFRLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxHQUFHLFFBQVEsQ0FBQztJQUMvRCxDQUFDO0lBRUQsRUFBRSxDQUFDLENBQUMsVUFBVSxLQUFLLE9BQU8sSUFBSSxRQUFRLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLEdBQUcsT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFBQyxJQUFJLENBQUMsQ0FBQztRQUNOLEVBQUUsQ0FBQyxDQUFDLFVBQVUsS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQzNCLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxRQUE0QixDQUFDLEdBQUcsWUFBWSxHQUFHLFFBQVEsQ0FBQztRQUMxRixDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLElBQUksR0FBRyxRQUFRLENBQUMsVUFBOEIsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxHQUFHLEdBQUcsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUMzRixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLEdBQUcsUUFBUSxDQUFDLFVBQThCLENBQUMsR0FBRyxRQUFRLENBQUMsUUFBNEIsQ0FBQyxHQUFHLFVBQVUsR0FBRyxRQUFRLENBQUM7UUFDbkgsQ0FBQztJQUNILENBQUM7SUFFRCxNQUFNLENBQUM7UUFDTCxVQUFVLFlBQUE7UUFDVixRQUFRLFVBQUE7UUFDUixJQUFJLE1BQUE7S0FDTCxDQUFDO0FBQ0osQ0FBQztBQWxDRCwwREFrQ0M7QUFFRCxxQkFBZSx1QkFBdUIsQ0FBQyJ9

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
function elementDimensions(element) {
    var elementWidth = 0;
    var elementHeight = 0;
    if (typeof element.offsetWidth !== "undefined") {
        elementWidth = element.offsetWidth;
        elementHeight = element.offsetHeight;
    }
    return {
        width: elementWidth,
        height: elementHeight
    };
}
exports.elementDimensions = elementDimensions;
exports["default"] = elementDimensions;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudERpbWVuc2lvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvZ2VuZXJhdGUvZWxlbWVudERpbWVuc2lvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSwyQkFBa0MsT0FBb0I7SUFDcEQsSUFBSSxZQUFZLEdBQVcsQ0FBQyxDQUFDO0lBQzdCLElBQUksYUFBYSxHQUFXLENBQUMsQ0FBQztJQUU5QixFQUFFLENBQUMsQ0FBQyxPQUFPLE9BQU8sQ0FBQyxXQUFXLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQztRQUMvQyxZQUFZLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQztRQUNuQyxhQUFhLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQztJQUN2QyxDQUFDO0lBRUQsTUFBTSxDQUFDO1FBQ0wsS0FBSyxFQUFFLFlBQVk7UUFDbkIsTUFBTSxFQUFFLGFBQWE7S0FDdEIsQ0FBQztBQUNKLENBQUM7QUFiRCw4Q0FhQztBQUVELHFCQUFlLGlCQUFpQixDQUFDIn0=

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
function elementPosition(element) {
    var rect = {
        top: 0,
        height: 0,
        right: 0,
        bottom: 0,
        left: 0,
        width: 0
    };
    if (typeof element.getBoundingClientRect !== "undefined") {
        rect = element.getBoundingClientRect();
    }
    return rect;
}
exports.elementPosition = elementPosition;
exports["default"] = elementPosition;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudFBvc2l0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2dlbmVyYXRlL2VsZW1lbnRQb3NpdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlCQUFnQyxPQUFvQjtJQUNsRCxJQUFJLElBQUksR0FBZTtRQUNyQixHQUFHLEVBQUUsQ0FBQztRQUNOLE1BQU0sRUFBRSxDQUFDO1FBQ1QsS0FBSyxFQUFFLENBQUM7UUFDUixNQUFNLEVBQUUsQ0FBQztRQUNULElBQUksRUFBRSxDQUFDO1FBQ1AsS0FBSyxFQUFFLENBQUM7S0FDVCxDQUFDO0lBRUYsRUFBRSxDQUFDLENBQUMsT0FBTyxPQUFPLENBQUMscUJBQXFCLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQztRQUN6RCxJQUFJLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFDekMsQ0FBQztJQUVELE1BQU0sQ0FBQyxJQUFJLENBQUM7QUFDZCxDQUFDO0FBZkQsMENBZUM7QUFFRCxxQkFBZSxlQUFlLENBQUMifQ==

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
function trapeziumArea(base, top, height) {
    return 0.5 * (base + top) * height;
}
exports.trapeziumArea = trapeziumArea;
exports["default"] = trapeziumArea;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhcGV6aXVtQXJlYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9nZW5lcmF0ZS90cmFwZXppdW1BcmVhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsdUJBQThCLElBQVksRUFBRSxHQUFXLEVBQUUsTUFBYztJQUNyRSxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQztBQUNyQyxDQUFDO0FBRkQsc0NBRUM7QUFFRCxxQkFBZSxhQUFhLENBQUMifQ==

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
function viewPortDimensions() {
    var viewPortWidth = 0;
    var viewPortHeight = 0;
    if (typeof window.innerWidth !== "undefined") {
        viewPortWidth = window.innerWidth;
        viewPortHeight = window.innerHeight;
    }
    return {
        width: viewPortWidth,
        height: viewPortHeight
    };
}
exports.viewPortDimensions = viewPortDimensions;
exports["default"] = viewPortDimensions;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld1BvcnREaW1lbnNpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2dlbmVyYXRlL3ZpZXdQb3J0RGltZW5zaW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBQ0UsSUFBSSxhQUFhLEdBQVcsQ0FBQyxDQUFDO0lBQzlCLElBQUksY0FBYyxHQUFXLENBQUMsQ0FBQztJQUUvQixFQUFFLENBQUMsQ0FBQyxPQUFPLE1BQU0sQ0FBQyxVQUFVLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQztRQUM3QyxhQUFhLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUNsQyxjQUFjLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztJQUN0QyxDQUFDO0lBRUQsTUFBTSxDQUFDO1FBQ0wsS0FBSyxFQUFFLGFBQWE7UUFDcEIsTUFBTSxFQUFFLGNBQWM7S0FDdkIsQ0FBQztBQUNKLENBQUM7QUFiRCxnREFhQztBQUVELHFCQUFlLGtCQUFrQixDQUFDIn0=

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
var defaultOptions_1 = __webpack_require__(0);
var generateTrapezia_1 = __webpack_require__(1);
var suggestionsFromTrapezia_1 = __webpack_require__(2);
function trapezium(element, userOptions) {
    var options = __assign({}, defaultOptions_1["default"], userOptions);
    var el;
    if ("jquery" in element) {
        el = element.get(0);
    }
    else {
        el = element;
    }
    var trapezia = generateTrapezia_1["default"](el, options);
    return suggestionsFromTrapezia_1["default"](trapezia);
}
exports.trapezium = trapezium;
exports["default"] = trapezium;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDZEQUF3RDtBQUN4RCxnRUFBMkQ7QUFDM0QsOEVBQXlFO0FBS3pFLG1CQUEwQixPQUE2QixFQUFFLFdBQThCO0lBQ3JGLElBQU0sT0FBTyxnQkFDUiwyQkFBYyxFQUNkLFdBQVcsQ0FDZixDQUFDO0lBRUYsSUFBSSxFQUFlLENBQUM7SUFFcEIsRUFBRSxDQUFDLENBQUMsUUFBUSxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDeEIsRUFBRSxHQUFJLE9BQWtCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFBQyxJQUFJLENBQUMsQ0FBQztRQUNOLEVBQUUsR0FBRyxPQUFzQixDQUFDO0lBQzlCLENBQUM7SUFFRCxJQUFNLFFBQVEsR0FBYSw2QkFBZ0IsQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDekQsTUFBTSxDQUFDLG9DQUF1QixDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzNDLENBQUM7QUFoQkQsOEJBZ0JDO0FBRUQscUJBQWUsU0FBUyxDQUFDIn0=

/***/ })
/******/ ]);