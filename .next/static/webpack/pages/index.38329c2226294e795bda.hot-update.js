webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/aya/Work/test/src/pages/index.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\nvar Component = function Component(props) {\n  return __jsx(\"div\", {\n    className: props.className,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 3\n    }\n  }, props.title);\n};\n\n_c = Component;\nvar StyledComponent = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Component).withConfig({\n  displayName: \"pages__StyledComponent\",\n  componentId: \"sc-10jc9ly-0\"\n})([\"\"]);\n_c2 = StyledComponent;\n\nvar Container = function Container(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])('aaa'),\n      title = _useState[0],\n      setTitle = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    var getTitle = /*#__PURE__*/function () {\n      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n        var key, res, repos;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                key = {\n                  headers: {\n                    'X-API-KEY': '424e3496-6cb7-4ebd-8572-49b5a148e90f'\n                  }\n                };\n                _context.next = 3;\n                return fetch('https://nepota.microcms.io/api/v1/blog', key);\n\n              case 3:\n                res = _context.sent;\n                _context.next = 6;\n                return res.json();\n\n              case 6:\n                repos = _context.sent;\n                setTitle(repos.contents[1].titles);\n\n              case 8:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function getTitle() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    getTitle();\n  }, []);\n  return __jsx(StyledComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    className: \"index\",\n    title: title\n  }, props, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 10\n    }\n  }));\n};\n\n_s(Container, \"yU0QtMxrUlXAyiImDPxsQgxCQlM=\");\n\n_c3 = Container;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Container);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Component\");\n$RefreshReg$(_c2, \"StyledComponent\");\n$RefreshReg$(_c3, \"Container\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD80MWUwIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsInByb3BzIiwiY2xhc3NOYW1lIiwidGl0bGUiLCJTdHlsZWRDb21wb25lbnQiLCJzdHlsZWQiLCJDb250YWluZXIiLCJ1c2VTdGF0ZSIsInNldFRpdGxlIiwidXNlRWZmZWN0IiwiZ2V0VGl0bGUiLCJrZXkiLCJoZWFkZXJzIiwiZmV0Y2giLCJyZXMiLCJqc29uIiwicmVwb3MiLCJjb250ZW50cyIsInRpdGxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQVFBLElBQU1BLFNBQW1DLEdBQUcsU0FBdENBLFNBQXNDLENBQUFDLEtBQUs7QUFBQSxTQUMvQztBQUFLLGFBQVMsRUFBRUEsS0FBSyxDQUFDQyxTQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWtDRCxLQUFLLENBQUNFLEtBQXhDLENBRCtDO0FBQUEsQ0FBakQ7O0tBQU1ILFM7QUFJTixJQUFNSSxlQUFlLEdBQUdDLGlFQUFNLENBQUNMLFNBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSxRQUFyQjtNQUFNSSxlOztBQUVOLElBQU1FLFNBQW1DLEdBQUcsU0FBdENBLFNBQXNDLENBQUFMLEtBQUssRUFBSTtBQUFBOztBQUFBLGtCQUN6Qk0sc0RBQVEsQ0FBTSxLQUFOLENBRGlCO0FBQUEsTUFDNUNKLEtBRDRDO0FBQUEsTUFDckNLLFFBRHFDOztBQUduREMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsUUFBUTtBQUFBLGtNQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNUQyxtQkFEUyxHQUNIO0FBQ1ZDLHlCQUFPLEVBQUU7QUFBRSxpQ0FBYTtBQUFmO0FBREMsaUJBREc7QUFBQTtBQUFBLHVCQUlHQyxLQUFLLENBQUMsd0NBQUQsRUFBMkNGLEdBQTNDLENBSlI7O0FBQUE7QUFJVEcsbUJBSlM7QUFBQTtBQUFBLHVCQUtLQSxHQUFHLENBQUNDLElBQUosRUFMTDs7QUFBQTtBQUtUQyxxQkFMUztBQU1mUix3QkFBUSxDQUFDUSxLQUFLLENBQUNDLFFBQU4sQ0FBZSxDQUFmLEVBQWtCQyxNQUFuQixDQUFSOztBQU5lO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUg7O0FBQUEsc0JBQVJSLFFBQVE7QUFBQTtBQUFBO0FBQUEsT0FBZDs7QUFRQUEsWUFBUTtBQUNULEdBVlEsRUFVTixFQVZNLENBQVQ7QUFZQSxTQUFPLE1BQUMsZUFBRDtBQUFpQixhQUFTLEVBQUMsT0FBM0I7QUFBbUMsU0FBSyxFQUFFUDtBQUExQyxLQUFxREYsS0FBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFQO0FBQ0QsQ0FoQkQ7O0dBQU1LLFM7O01BQUFBLFM7QUFrQlNBLHdFQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG50eXBlIENvbnRhaW5lclByb3BzID0ge31cbnR5cGUgQ29tcG9uZW50UHJvcHMgPSB7XG4gIGNsYXNzTmFtZTogc3RyaW5nXG4gIHRpdGxlOiBhbnlcbn0gJiBDb250YWluZXJQcm9wc1xuXG5jb25zdCBDb21wb25lbnQ6IFJlYWN0LkZDPENvbXBvbmVudFByb3BzPiA9IHByb3BzID0+IChcbiAgPGRpdiBjbGFzc05hbWU9e3Byb3BzLmNsYXNzTmFtZX0+e3Byb3BzLnRpdGxlfTwvZGl2PlxuKVxuXG5jb25zdCBTdHlsZWRDb21wb25lbnQgPSBzdHlsZWQoQ29tcG9uZW50KWBgXG5cbmNvbnN0IENvbnRhaW5lcjogUmVhY3QuRkM8Q29udGFpbmVyUHJvcHM+ID0gcHJvcHMgPT4ge1xuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlPGFueT4oJ2FhYScpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBnZXRUaXRsZSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IHtcbiAgICAgICAgaGVhZGVyczogeyAnWC1BUEktS0VZJzogJzQyNGUzNDk2LTZjYjctNGViZC04NTcyLTQ5YjVhMTQ4ZTkwZicgfVxuICAgICAgfVxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vbmVwb3RhLm1pY3JvY21zLmlvL2FwaS92MS9ibG9nJywga2V5KVxuICAgICAgY29uc3QgcmVwb3MgPSBhd2FpdCByZXMuanNvbigpXG4gICAgICBzZXRUaXRsZShyZXBvcy5jb250ZW50c1sxXS50aXRsZXMpXG4gICAgfVxuICAgIGdldFRpdGxlKClcbiAgfSwgW10pXG5cbiAgcmV0dXJuIDxTdHlsZWRDb21wb25lbnQgY2xhc3NOYW1lPVwiaW5kZXhcIiB0aXRsZT17dGl0bGV9IHsuLi5wcm9wc30gLz5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

})