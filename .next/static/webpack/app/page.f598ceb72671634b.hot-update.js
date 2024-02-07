"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.js":
/*!*********************!*\
  !*** ./app/page.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Accordion */ \"(app-pages-browser)/./components/Accordion.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const [showPatternDiv, setShowPatternDiv] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [showTopicDiv, setShowTopicDiv] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [auth] = useA;\n    const question = [\n        \"1\",\n        \"2\",\n        \"3\"\n    ];\n    const topics = [\n        \"string\",\n        \"array\",\n        \"tree\"\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"pt-[10rem] w-full h-full border-2 p-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"Welcome to \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"font-semibold\",\n                        children: \"CodeBud\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\DSA\\\\projects\\\\full stack app\\\\codebud\\\\app\\\\page.js\",\n                        lineNumber: 17,\n                        columnNumber: 20\n                    }, this),\n                    \" - Your Ultimate Resource for DSA Patterns, Web Development, and Insightful Blogs! Explore a curated list of questions designed to enhance your understanding of Data Structures and Algorithms, delve into the latest trends in web development, and stay informed with our thought-provoking blogs. Let the journey towards mastering coding and staying updated on industry insights begin!\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\DSA\\\\projects\\\\full stack app\\\\codebud\\\\app\\\\page.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex rounded-lg justify-evenly gap-8 mt-12 w-[60%] m-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>{\n                            setShowTopicDiv(false);\n                            setShowPatternDiv(true);\n                        },\n                        className: \"bg-red-500 w-full px-4 py-4 rounded-lg text-white text-[1.3rem] hover:bg-red-700 duration-200 ease-in-out\",\n                        children: \"Question Pattern wise\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\DSA\\\\projects\\\\full stack app\\\\codebud\\\\app\\\\page.js\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>{\n                            setShowPatternDiv(false);\n                            setShowTopicDiv(true);\n                        },\n                        className: \"bg-yellow-500 w-full px-4 py-4 rounded-lg text-white text-[1.3rem] hover:bg-yellow-700 duration-200 ease-in-out\",\n                        children: \"Question Topic Wise\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\DSA\\\\projects\\\\full stack app\\\\codebud\\\\app\\\\page.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\DSA\\\\projects\\\\full stack app\\\\codebud\\\\app\\\\page.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            showPatternDiv ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-10 border-2 h-auto\",\n                children: topics.map((topic)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Accordion__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        name: topic,\n                        questions: question\n                    }, topic, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\DSA\\\\projects\\\\full stack app\\\\codebud\\\\app\\\\page.js\",\n                        lineNumber: 38,\n                        columnNumber: 13\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\DSA\\\\projects\\\\full stack app\\\\codebud\\\\app\\\\page.js\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-10 border-2 h-[300px]\",\n                children: \"hii topic div\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\DSA\\\\projects\\\\full stack app\\\\codebud\\\\app\\\\page.js\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\DSA\\\\projects\\\\full stack app\\\\codebud\\\\app\\\\page.js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"fMlNQ/yyRYfXVE1L0u7el3Y6oQg=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDK0M7QUFDZDtBQUVsQixTQUFTRTs7SUFDdEIsTUFBTSxDQUFDQyxnQkFBZ0JDLGtCQUFrQixHQUFHSCwrQ0FBUUEsQ0FBQztJQUNyRCxNQUFNLENBQUNJLGNBQWNDLGdCQUFnQixHQUFHTCwrQ0FBUUEsQ0FBQztJQUVqRCxNQUFNLENBQUNNLEtBQUssR0FBR0M7SUFFZixNQUFNQyxXQUFXO1FBQUM7UUFBSztRQUFLO0tBQUk7SUFDaEMsTUFBTUMsU0FBUztRQUFDO1FBQVU7UUFBUztLQUFPO0lBRTFDLHFCQUNFLDhEQUFDQztRQUFLQyxXQUFVOzswQkFDZCw4REFBQ0M7O29CQUFHO2tDQUNTLDhEQUFDQzt3QkFBS0YsV0FBVTtrQ0FBZ0I7Ozs7OztvQkFBYzs7Ozs7OzswQkFHM0QsOERBQUNHO2dCQUFJSCxXQUFVOztrQ0FDYiw4REFBQ0k7d0JBQ0NDLFNBQVM7NEJBQVFYLGdCQUFnQjs0QkFBUUYsa0JBQWtCO3dCQUFPO3dCQUNsRVEsV0FBVTtrQ0FDWDs7Ozs7O2tDQUdELDhEQUFDSTt3QkFDQ0MsU0FBUzs0QkFBUWIsa0JBQWtCOzRCQUFRRSxnQkFBZ0I7d0JBQU87d0JBQ2xFTSxXQUFVO2tDQUNYOzs7Ozs7Ozs7Ozs7WUFLRlQsK0JBQ0MsOERBQUNZO2dCQUFJSCxXQUFVOzBCQUNaRixPQUFPUSxHQUFHLENBQUMsQ0FBQ0Msc0JBQ1gsOERBQUNuQiw2REFBU0E7d0JBQWFvQixNQUFNRDt3QkFBT0UsV0FBV1o7dUJBQS9CVTs7Ozs7Ozs7O3FDQUlwQiw4REFBQ0o7Z0JBQUlILFdBQVU7MEJBQ3NCOzs7Ozs7Ozs7Ozs7QUFNN0M7R0E1Q3dCVjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS5qcz9iZTY3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IEFjY29yZGlvbiBmcm9tIFwiQC9jb21wb25lbnRzL0FjY29yZGlvblwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3Nob3dQYXR0ZXJuRGl2LCBzZXRTaG93UGF0dGVybkRpdl0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW3Nob3dUb3BpY0Rpdiwgc2V0U2hvd1RvcGljRGl2XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBbYXV0aF0gPSB1c2VBXG5cbiAgY29uc3QgcXVlc3Rpb24gPSBbJzEnLCAnMicsICczJ107XG4gIGNvbnN0IHRvcGljcyA9IFsnc3RyaW5nJywgJ2FycmF5JywgJ3RyZWUnXTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT1cInB0LVsxMHJlbV0gdy1mdWxsIGgtZnVsbCBib3JkZXItMiBwLThcIj5cbiAgICAgIDxoMT5cbiAgICAgICAgV2VsY29tZSB0byA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+Q29kZUJ1ZDwvc3Bhbj4gLSBZb3VyIFVsdGltYXRlIFJlc291cmNlIGZvciBEU0EgUGF0dGVybnMsIFdlYiBEZXZlbG9wbWVudCwgYW5kIEluc2lnaHRmdWwgQmxvZ3MhIEV4cGxvcmUgYSBjdXJhdGVkIGxpc3Qgb2YgcXVlc3Rpb25zIGRlc2lnbmVkIHRvIGVuaGFuY2UgeW91ciB1bmRlcnN0YW5kaW5nIG9mIERhdGEgU3RydWN0dXJlcyBhbmQgQWxnb3JpdGhtcywgZGVsdmUgaW50byB0aGUgbGF0ZXN0IHRyZW5kcyBpbiB3ZWIgZGV2ZWxvcG1lbnQsIGFuZCBzdGF5IGluZm9ybWVkIHdpdGggb3VyIHRob3VnaHQtcHJvdm9raW5nIGJsb2dzLiBMZXQgdGhlIGpvdXJuZXkgdG93YXJkcyBtYXN0ZXJpbmcgY29kaW5nIGFuZCBzdGF5aW5nIHVwZGF0ZWQgb24gaW5kdXN0cnkgaW5zaWdodHMgYmVnaW4hXG4gICAgICA8L2gxPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggcm91bmRlZC1sZyBqdXN0aWZ5LWV2ZW5seSBnYXAtOCBtdC0xMiB3LVs2MCVdIG0tYXV0b1wiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4geyBzZXRTaG93VG9waWNEaXYoZmFsc2UpOyBzZXRTaG93UGF0dGVybkRpdih0cnVlKTsgfX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy1yZWQtNTAwIHctZnVsbCBweC00IHB5LTQgcm91bmRlZC1sZyB0ZXh0LXdoaXRlIHRleHQtWzEuM3JlbV0gaG92ZXI6YmctcmVkLTcwMCBkdXJhdGlvbi0yMDAgZWFzZS1pbi1vdXRcIlxuICAgICAgICA+XG4gICAgICAgICAgUXVlc3Rpb24gUGF0dGVybiB3aXNlXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4geyBzZXRTaG93UGF0dGVybkRpdihmYWxzZSk7IHNldFNob3dUb3BpY0Rpdih0cnVlKTsgfX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy15ZWxsb3ctNTAwIHctZnVsbCBweC00IHB5LTQgcm91bmRlZC1sZyB0ZXh0LXdoaXRlIHRleHQtWzEuM3JlbV0gaG92ZXI6YmcteWVsbG93LTcwMCBkdXJhdGlvbi0yMDAgZWFzZS1pbi1vdXRcIlxuICAgICAgICA+XG4gICAgICAgICAgUXVlc3Rpb24gVG9waWMgV2lzZVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7c2hvd1BhdHRlcm5EaXYgPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTAgYm9yZGVyLTIgaC1hdXRvXCI+XG4gICAgICAgICAge3RvcGljcy5tYXAoKHRvcGljKSA9PiAoXG4gICAgICAgICAgICA8QWNjb3JkaW9uIGtleT17dG9waWN9IG5hbWU9e3RvcGljfSBxdWVzdGlvbnM9e3F1ZXN0aW9ufSAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTAgYm9yZGVyLTIgaC1bMzAwcHhdXCI+XG4gICAgICAgICAgey8qIEFkanVzdCB0aGUgaGVpZ2h0IGFzIG5lZWRlZCAqL31cbiAgICAgICAgICBoaWkgdG9waWMgZGl2XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L21haW4+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQWNjb3JkaW9uIiwidXNlU3RhdGUiLCJIb21lIiwic2hvd1BhdHRlcm5EaXYiLCJzZXRTaG93UGF0dGVybkRpdiIsInNob3dUb3BpY0RpdiIsInNldFNob3dUb3BpY0RpdiIsImF1dGgiLCJ1c2VBIiwicXVlc3Rpb24iLCJ0b3BpY3MiLCJtYWluIiwiY2xhc3NOYW1lIiwiaDEiLCJzcGFuIiwiZGl2IiwiYnV0dG9uIiwib25DbGljayIsIm1hcCIsInRvcGljIiwibmFtZSIsInF1ZXN0aW9ucyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});