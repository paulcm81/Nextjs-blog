/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blog/[slug]",{

/***/ "./pages/blog/[slug].js":
/*!******************************!*\
  !*** ./pages/blog/[slug].js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ PostPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! marked */ \"./node_modules/marked/lib/marked.js\");\n/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/alazar/Desktop/Paul 4 project/Nextjs-blog/pages/blog/[slug].js\";\n\n\nvar __N_SSG = true;\nfunction PostPage(_ref) {\n  var _ref$frontmatter = _ref.frontmatter,\n      title = _ref$frontmatter.title,\n      date = _ref$frontmatter.date,\n      cover_image = _ref$frontmatter.cover_image,\n      slug = _ref.slug,\n      content = _ref.content;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"card card-page\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        className: \"post-title\",\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"post-date\",\n        children: [\"Posted on \", date]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        src: cover_image,\n        alt: \"\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"post-body\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          dangerouslySetInnerHTML: {\n            __html: marked__WEBPACK_IMPORTED_MODULE_1___default()(content)\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, this)\n  }, void 0, false);\n}\n_c = PostPage;\n\nvar _c;\n\n$RefreshReg$(_c, \"PostPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy9bc2x1Z10uanM/MjkzNCJdLCJuYW1lcyI6WyJQb3N0UGFnZSIsImZyb250bWF0dGVyIiwidGl0bGUiLCJkYXRlIiwiY292ZXJfaW1hZ2UiLCJzbHVnIiwiY29udGVudCIsIl9faHRtbCIsIm1hcmtlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFDQTs7QUFFZSxTQUFTQSxRQUFULE9BSVo7QUFBQSw4QkFIREMsV0FHQztBQUFBLE1BSGNDLEtBR2Qsb0JBSGNBLEtBR2Q7QUFBQSxNQUhxQkMsSUFHckIsb0JBSHFCQSxJQUdyQjtBQUFBLE1BSDJCQyxXQUczQixvQkFIMkJBLFdBRzNCO0FBQUEsTUFGREMsSUFFQyxRQUZEQSxJQUVDO0FBQUEsTUFEREMsT0FDQyxRQUREQSxPQUNDO0FBQ0Qsc0JBQ0U7QUFBQSwyQkFFRTtBQUFLLGVBQVMsRUFBQyxnQkFBZjtBQUFBLDhCQUNFO0FBQUksaUJBQVMsRUFBQyxZQUFkO0FBQUEsa0JBQTRCSjtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUFBLGlDQUFzQ0MsSUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFHRTtBQUFLLFdBQUcsRUFBRUMsV0FBVjtBQUF1QixXQUFHLEVBQUM7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGLGVBSUU7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBQSwrQkFDRTtBQUFLLGlDQUF1QixFQUFFO0FBQUVHLGtCQUFNLEVBQUVDLDZDQUFNLENBQUNGLE9BQUQ7QUFBaEI7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRixtQkFERjtBQWFEO0tBbEJ1Qk4sUSIsImZpbGUiOiIuL3BhZ2VzL2Jsb2cvW3NsdWddLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gJ2ZzJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCBtYXR0ZXIgZnJvbSAnZ3JheS1tYXR0ZXInXG5pbXBvcnQgbWFya2VkIGZyb20gJ21hcmtlZCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdFBhZ2Uoe1xuICBmcm9udG1hdHRlcjogeyB0aXRsZSwgZGF0ZSwgY292ZXJfaW1hZ2UgfSxcbiAgc2x1ZyxcbiAgY29udGVudCxcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkIGNhcmQtcGFnZSc+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9J3Bvc3QtdGl0bGUnPnt0aXRsZX08L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncG9zdC1kYXRlJz5Qb3N0ZWQgb24ge2RhdGV9PC9kaXY+XG4gICAgICAgIDxpbWcgc3JjPXtjb3Zlcl9pbWFnZX0gYWx0PScnIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwb3N0LWJvZHknPlxuICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBtYXJrZWQoY29udGVudCkgfX0+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCBmaWxlcyA9IGZzLnJlYWRkaXJTeW5jKHBhdGguam9pbigncG9zdHMnKSlcblxuICBjb25zdCBwYXRocyA9IGZpbGVzLm1hcCgoZmlsZW5hbWUpID0+ICh7XG4gICAgcGFyYW1zOiB7XG4gICAgICBzbHVnOiBmaWxlbmFtZS5yZXBsYWNlKCcubWQnLCAnJyksXG4gICAgfSxcbiAgfSkpXG5cbiAgcmV0dXJuIHtcbiAgICBwYXRocyxcbiAgICBmYWxsYmFjazogZmFsc2UsXG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zOiB7IHNsdWcgfSB9KSB7XG4gIGNvbnN0IG1hcmtkb3duV2l0aE1ldGEgPSBmcy5yZWFkRmlsZVN5bmMoXG4gICAgcGF0aC5qb2luKCdwb3N0cycsIHNsdWcgKyAnLm1kJyksXG4gICAgJ3V0Zi04J1xuICApXG5cbiAgY29uc3QgeyBkYXRhOiBmcm9udG1hdHRlciwgY29udGVudCB9ID0gbWF0dGVyKG1hcmtkb3duV2l0aE1ldGEpXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgZnJvbnRtYXR0ZXIsXG4gICAgICBzbHVnLFxuICAgICAgY29udGVudCxcbiAgICB9LFxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/blog/[slug].js\n");

/***/ })

});