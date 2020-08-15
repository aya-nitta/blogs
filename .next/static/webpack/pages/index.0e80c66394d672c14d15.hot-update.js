webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/aya/Work/test/src/pages/index.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\nvar Component = function Component(props) {\n  return __jsx(\"div\", {\n    className: props.className,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 3\n    }\n  }, props.title);\n};\n\n_c = Component;\nvar StyledComponent = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Component).withConfig({\n  displayName: \"pages__StyledComponent\",\n  componentId: \"sc-10jc9ly-0\"\n})([\"\"]);\n_c2 = StyledComponent;\n\nvar Container = function Container(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])('aaa'),\n      title = _useState[0],\n      setTitle = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    var getTitle = /*#__PURE__*/function () {\n      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n        var key, res, repos;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                key = {\n                  headers: {\n                    'X-API-KEY': '424e3496-6cb7-4ebd-8572-49b5a148e90f'\n                  }\n                };\n                _context.next = 3;\n                return fetch('https://nepota.microcms.io/api/v1/blog', key);\n\n              case 3:\n                res = _context.sent;\n                _context.next = 6;\n                return res.json();\n\n              case 6:\n                repos = _context.sent;\n                setTitle(repos.contents[1].titles);\n\n              case 8:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function getTitle() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n  }, []);\n  return __jsx(StyledComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    className: \"index\",\n    title: title\n  }, props, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 10\n    }\n  }));\n};\n\n_s(Container, \"yU0QtMxrUlXAyiImDPxsQgxCQlM=\");\n\n_c3 = Container;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Container);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Component\");\n$RefreshReg$(_c2, \"StyledComponent\");\n$RefreshReg$(_c3, \"Container\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD80MWUwIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsInByb3BzIiwiY2xhc3NOYW1lIiwidGl0bGUiLCJTdHlsZWRDb21wb25lbnQiLCJzdHlsZWQiLCJDb250YWluZXIiLCJ1c2VTdGF0ZSIsInNldFRpdGxlIiwidXNlRWZmZWN0IiwiZ2V0VGl0bGUiLCJrZXkiLCJoZWFkZXJzIiwiZmV0Y2giLCJyZXMiLCJqc29uIiwicmVwb3MiLCJjb250ZW50cyIsInRpdGxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQVFBLElBQU1BLFNBQW1DLEdBQUcsU0FBdENBLFNBQXNDLENBQUFDLEtBQUs7QUFBQSxTQUMvQztBQUFLLGFBQVMsRUFBRUEsS0FBSyxDQUFDQyxTQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWtDRCxLQUFLLENBQUNFLEtBQXhDLENBRCtDO0FBQUEsQ0FBakQ7O0tBQU1ILFM7QUFJTixJQUFNSSxlQUFlLEdBQUdDLGlFQUFNLENBQUNMLFNBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSxRQUFyQjtNQUFNSSxlOztBQUVOLElBQU1FLFNBQW1DLEdBQUcsU0FBdENBLFNBQXNDLENBQUFMLEtBQUssRUFBSTtBQUFBOztBQUFBLGtCQUN6Qk0sc0RBQVEsQ0FBTSxLQUFOLENBRGlCO0FBQUEsTUFDNUNKLEtBRDRDO0FBQUEsTUFDckNLLFFBRHFDOztBQUduREMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsUUFBUTtBQUFBLGtNQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNUQyxtQkFEUyxHQUNIO0FBQ1ZDLHlCQUFPLEVBQUU7QUFBRSxpQ0FBYTtBQUFmO0FBREMsaUJBREc7QUFBQTtBQUFBLHVCQUlHQyxLQUFLLENBQUMsd0NBQUQsRUFBMkNGLEdBQTNDLENBSlI7O0FBQUE7QUFJVEcsbUJBSlM7QUFBQTtBQUFBLHVCQUtLQSxHQUFHLENBQUNDLElBQUosRUFMTDs7QUFBQTtBQUtUQyxxQkFMUztBQU1mUix3QkFBUSxDQUFDUSxLQUFLLENBQUNDLFFBQU4sQ0FBZSxDQUFmLEVBQWtCQyxNQUFuQixDQUFSOztBQU5lO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUg7O0FBQUEsc0JBQVJSLFFBQVE7QUFBQTtBQUFBO0FBQUEsT0FBZDtBQVFELEdBVFEsRUFTTixFQVRNLENBQVQ7QUFXQSxTQUFPLE1BQUMsZUFBRDtBQUFpQixhQUFTLEVBQUMsT0FBM0I7QUFBbUMsU0FBSyxFQUFFUDtBQUExQyxLQUFxREYsS0FBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFQO0FBQ0QsQ0FmRDs7R0FBTUssUzs7TUFBQUEsUztBQWlCU0Esd0VBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbnR5cGUgQ29udGFpbmVyUHJvcHMgPSB7fVxudHlwZSBDb21wb25lbnRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lOiBzdHJpbmdcbiAgdGl0bGU6IGFueVxufSAmIENvbnRhaW5lclByb3BzXG5cbmNvbnN0IENvbXBvbmVudDogUmVhY3QuRkM8Q29tcG9uZW50UHJvcHM+ID0gcHJvcHMgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT17cHJvcHMuY2xhc3NOYW1lfT57cHJvcHMudGl0bGV9PC9kaXY+XG4pXG5cbmNvbnN0IFN0eWxlZENvbXBvbmVudCA9IHN0eWxlZChDb21wb25lbnQpYGBcblxuY29uc3QgQ29udGFpbmVyOiBSZWFjdC5GQzxDb250YWluZXJQcm9wcz4gPSBwcm9wcyA9PiB7XG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGU8YW55PignYWFhJylcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGdldFRpdGxlID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgICAgY29uc3Qga2V5ID0ge1xuICAgICAgICBoZWFkZXJzOiB7ICdYLUFQSS1LRVknOiAnNDI0ZTM0OTYtNmNiNy00ZWJkLTg1NzItNDliNWExNDhlOTBmJyB9XG4gICAgICB9XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9uZXBvdGEubWljcm9jbXMuaW8vYXBpL3YxL2Jsb2cnLCBrZXkpXG4gICAgICBjb25zdCByZXBvcyA9IGF3YWl0IHJlcy5qc29uKClcbiAgICAgIHNldFRpdGxlKHJlcG9zLmNvbnRlbnRzWzFdLnRpdGxlcylcbiAgICB9XG4gIH0sIFtdKVxuXG4gIHJldHVybiA8U3R5bGVkQ29tcG9uZW50IGNsYXNzTmFtZT1cImluZGV4XCIgdGl0bGU9e3RpdGxlfSB7Li4ucHJvcHN9IC8+XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

})