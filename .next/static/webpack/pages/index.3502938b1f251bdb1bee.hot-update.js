webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/aya/Work/test/src/pages/index.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\nvar Component = function Component(props) {\n  return __jsx(\"div\", {\n    className: props.className,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 3\n    }\n  }, \"test\");\n};\n\n_c = Component;\nvar StyledComponent = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Component).withConfig({\n  displayName: \"pages__StyledComponent\",\n  componentId: \"sc-10jc9ly-0\"\n})([\"\"]);\n_c2 = StyledComponent;\n\nvar Container = function Container(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(null),\n      contents = _useState[0],\n      setContents = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    var f = /*#__PURE__*/function () {\n      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n        var key, res, repos;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                key = {\n                  headers: {\n                    'X-API-KEY': '424e3496-6cb7-4ebd-8572-49b5a148e90f'\n                  }\n                };\n                _context.next = 3;\n                return fetch('https://nepota.microcms.io/api/v1/blog', key);\n\n              case 3:\n                res = _context.sent;\n                _context.next = 6;\n                return res.json();\n\n              case 6:\n                repos = _context.sent;\n                setContents(repos.contents);\n                console.log({\n                  contents: repos.contents\n                });\n\n              case 9:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function f() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    f();\n  }, []);\n  return __jsx(StyledComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    className: \"index\",\n    contents: contents\n  }, props, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 10\n    }\n  }));\n};\n\n_s(Container, \"OG/+PV/rYFg0etrgV6BRNkT2hag=\");\n\n_c3 = Container;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Container);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Component\");\n$RefreshReg$(_c2, \"StyledComponent\");\n$RefreshReg$(_c3, \"Container\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD80MWUwIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsInByb3BzIiwiY2xhc3NOYW1lIiwiU3R5bGVkQ29tcG9uZW50Iiwic3R5bGVkIiwiQ29udGFpbmVyIiwidXNlU3RhdGUiLCJjb250ZW50cyIsInNldENvbnRlbnRzIiwidXNlRWZmZWN0IiwiZiIsImtleSIsImhlYWRlcnMiLCJmZXRjaCIsInJlcyIsImpzb24iLCJyZXBvcyIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFRQSxJQUFNQSxTQUFtQyxHQUFHLFNBQXRDQSxTQUFzQyxDQUFBQyxLQUFLO0FBQUEsU0FDL0M7QUFBSyxhQUFTLEVBQUVBLEtBQUssQ0FBQ0MsU0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUQrQztBQUFBLENBQWpEOztLQUFNRixTO0FBSU4sSUFBTUcsZUFBZSxHQUFHQyxpRUFBTSxDQUFDSixTQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsUUFBckI7TUFBTUcsZTs7QUFFTixJQUFNRSxTQUFtQyxHQUFHLFNBQXRDQSxTQUFzQyxDQUFBSixLQUFLLEVBQUk7QUFBQTs7QUFBQSxrQkFDbkJLLHNEQUFRLENBQU0sSUFBTixDQURXO0FBQUEsTUFDNUNDLFFBRDRDO0FBQUEsTUFDbENDLFdBRGtDOztBQUduREMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsQ0FBQztBQUFBLGtNQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNGQyxtQkFERSxHQUNJO0FBQ1ZDLHlCQUFPLEVBQUU7QUFBRSxpQ0FBYTtBQUFmO0FBREMsaUJBREo7QUFBQTtBQUFBLHVCQUlVQyxLQUFLLENBQUMsd0NBQUQsRUFBMkNGLEdBQTNDLENBSmY7O0FBQUE7QUFJRkcsbUJBSkU7QUFBQTtBQUFBLHVCQUtZQSxHQUFHLENBQUNDLElBQUosRUFMWjs7QUFBQTtBQUtGQyxxQkFMRTtBQU1SUiwyQkFBVyxDQUFDUSxLQUFLLENBQUNULFFBQVAsQ0FBWDtBQUNBVSx1QkFBTyxDQUFDQyxHQUFSLENBQVk7QUFBRVgsMEJBQVEsRUFBRVMsS0FBSyxDQUFDVDtBQUFsQixpQkFBWjs7QUFQUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFIOztBQUFBLHNCQUFERyxDQUFDO0FBQUE7QUFBQTtBQUFBLE9BQVA7O0FBU0FBLEtBQUM7QUFDRixHQVhRLEVBV04sRUFYTSxDQUFUO0FBYUEsU0FBTyxNQUFDLGVBQUQ7QUFBaUIsYUFBUyxFQUFDLE9BQTNCO0FBQW1DLFlBQVEsRUFBRUg7QUFBN0MsS0FBMkROLEtBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUDtBQUNELENBakJEOztHQUFNSSxTOztNQUFBQSxTO0FBbUJTQSx3RUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxudHlwZSBDb250YWluZXJQcm9wcyA9IHt9XG50eXBlIENvbXBvbmVudFByb3BzID0ge1xuICBjbGFzc05hbWU6IHN0cmluZ1xuICBjb250ZW50czogYW55XG59ICYgQ29udGFpbmVyUHJvcHNcblxuY29uc3QgQ29tcG9uZW50OiBSZWFjdC5GQzxDb21wb25lbnRQcm9wcz4gPSBwcm9wcyA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXtwcm9wcy5jbGFzc05hbWV9PnRlc3Q8L2Rpdj5cbilcblxuY29uc3QgU3R5bGVkQ29tcG9uZW50ID0gc3R5bGVkKENvbXBvbmVudClgYFxuXG5jb25zdCBDb250YWluZXI6IFJlYWN0LkZDPENvbnRhaW5lclByb3BzPiA9IHByb3BzID0+IHtcbiAgY29uc3QgW2NvbnRlbnRzLCBzZXRDb250ZW50c10gPSB1c2VTdGF0ZTxhbnk+KG51bGwpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgICAgY29uc3Qga2V5ID0ge1xuICAgICAgICBoZWFkZXJzOiB7ICdYLUFQSS1LRVknOiAnNDI0ZTM0OTYtNmNiNy00ZWJkLTg1NzItNDliNWExNDhlOTBmJyB9XG4gICAgICB9XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9uZXBvdGEubWljcm9jbXMuaW8vYXBpL3YxL2Jsb2cnLCBrZXkpXG4gICAgICBjb25zdCByZXBvcyA9IGF3YWl0IHJlcy5qc29uKClcbiAgICAgIHNldENvbnRlbnRzKHJlcG9zLmNvbnRlbnRzKVxuICAgICAgY29uc29sZS5sb2coeyBjb250ZW50czogcmVwb3MuY29udGVudHMgfSlcbiAgICB9XG4gICAgZigpXG4gIH0sIFtdKVxuXG4gIHJldHVybiA8U3R5bGVkQ29tcG9uZW50IGNsYXNzTmFtZT1cImluZGV4XCIgY29udGVudHM9e2NvbnRlbnRzfSB7Li4ucHJvcHN9IC8+XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

})