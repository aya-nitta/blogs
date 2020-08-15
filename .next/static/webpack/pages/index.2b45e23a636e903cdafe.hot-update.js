webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/aya/Work/test/src/pages/index.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\nvar Component = function Component(props) {\n  return __jsx(\"div\", {\n    className: props.className,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 3\n    }\n  }, props.contents.map(function (content) {\n    console.log(content);\n  }));\n};\n\n_c = Component;\nvar StyledComponent = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Component).withConfig({\n  displayName: \"pages__StyledComponent\",\n  componentId: \"sc-10jc9ly-0\"\n})([\"\"]);\n_c2 = StyledComponent;\n\nvar Container = function Container(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      contents = _useState[0],\n      setContents = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    var f = /*#__PURE__*/function () {\n      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n        var key, res, repos;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                key = {\n                  headers: {\n                    'X-API-KEY': '424e3496-6cb7-4ebd-8572-49b5a148e90f'\n                  }\n                };\n                _context.next = 3;\n                return fetch('https://nepota.microcms.io/api/v1/blog', key);\n\n              case 3:\n                res = _context.sent;\n                _context.next = 6;\n                return res.json();\n\n              case 6:\n                repos = _context.sent;\n                setContents(repos.contents);\n                console.log({\n                  contents: repos.contents\n                });\n\n              case 9:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function f() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    f();\n  }, []);\n  return __jsx(StyledComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    className: \"index\",\n    contents: contents\n  }, props, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 10\n    }\n  }));\n};\n\n_s(Container, \"E8frQy1I3Fj/NnZSCQPEyi7PheM=\");\n\n_c3 = Container;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Container);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Component\");\n$RefreshReg$(_c2, \"StyledComponent\");\n$RefreshReg$(_c3, \"Container\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD80MWUwIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsInByb3BzIiwiY2xhc3NOYW1lIiwiY29udGVudHMiLCJtYXAiLCJjb250ZW50IiwiY29uc29sZSIsImxvZyIsIlN0eWxlZENvbXBvbmVudCIsInN0eWxlZCIsIkNvbnRhaW5lciIsInVzZVN0YXRlIiwic2V0Q29udGVudHMiLCJ1c2VFZmZlY3QiLCJmIiwia2V5IiwiaGVhZGVycyIsImZldGNoIiwicmVzIiwianNvbiIsInJlcG9zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBUUEsSUFBTUEsU0FBbUMsR0FBRyxTQUF0Q0EsU0FBc0MsQ0FBQUMsS0FBSztBQUFBLFNBQy9DO0FBQUssYUFBUyxFQUFFQSxLQUFLLENBQUNDLFNBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0QsS0FBSyxDQUFDRSxRQUFOLENBQWVDLEdBQWYsQ0FBbUIsVUFBQUMsT0FBTyxFQUFJO0FBQzdCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsT0FBWjtBQUNELEdBRkEsQ0FESCxDQUQrQztBQUFBLENBQWpEOztLQUFNTCxTO0FBUU4sSUFBTVEsZUFBZSxHQUFHQyxpRUFBTSxDQUFDVCxTQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsUUFBckI7TUFBTVEsZTs7QUFFTixJQUFNRSxTQUFtQyxHQUFHLFNBQXRDQSxTQUFzQyxDQUFBVCxLQUFLLEVBQUk7QUFBQTs7QUFBQSxrQkFDbkJVLHNEQUFRLENBQVEsRUFBUixDQURXO0FBQUEsTUFDNUNSLFFBRDRDO0FBQUEsTUFDbENTLFdBRGtDOztBQUduREMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsQ0FBQztBQUFBLGtNQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNGQyxtQkFERSxHQUNJO0FBQ1ZDLHlCQUFPLEVBQUU7QUFBRSxpQ0FBYTtBQUFmO0FBREMsaUJBREo7QUFBQTtBQUFBLHVCQUlVQyxLQUFLLENBQUMsd0NBQUQsRUFBMkNGLEdBQTNDLENBSmY7O0FBQUE7QUFJRkcsbUJBSkU7QUFBQTtBQUFBLHVCQUtZQSxHQUFHLENBQUNDLElBQUosRUFMWjs7QUFBQTtBQUtGQyxxQkFMRTtBQU1SUiwyQkFBVyxDQUFDUSxLQUFLLENBQUNqQixRQUFQLENBQVg7QUFDQUcsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUVKLDBCQUFRLEVBQUVpQixLQUFLLENBQUNqQjtBQUFsQixpQkFBWjs7QUFQUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFIOztBQUFBLHNCQUFEVyxDQUFDO0FBQUE7QUFBQTtBQUFBLE9BQVA7O0FBU0FBLEtBQUM7QUFDRixHQVhRLEVBV04sRUFYTSxDQUFUO0FBYUEsU0FBTyxNQUFDLGVBQUQ7QUFBaUIsYUFBUyxFQUFDLE9BQTNCO0FBQW1DLFlBQVEsRUFBRVg7QUFBN0MsS0FBMkRGLEtBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUDtBQUNELENBakJEOztHQUFNUyxTOztNQUFBQSxTO0FBbUJTQSx3RUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxudHlwZSBDb250YWluZXJQcm9wcyA9IHt9XG50eXBlIENvbXBvbmVudFByb3BzID0ge1xuICBjbGFzc05hbWU6IHN0cmluZ1xuICBjb250ZW50czogYW55W11cbn0gJiBDb250YWluZXJQcm9wc1xuXG5jb25zdCBDb21wb25lbnQ6IFJlYWN0LkZDPENvbXBvbmVudFByb3BzPiA9IHByb3BzID0+IChcbiAgPGRpdiBjbGFzc05hbWU9e3Byb3BzLmNsYXNzTmFtZX0+XG4gICAge3Byb3BzLmNvbnRlbnRzLm1hcChjb250ZW50ID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGNvbnRlbnQpXG4gICAgfSl9XG4gIDwvZGl2PlxuKVxuXG5jb25zdCBTdHlsZWRDb21wb25lbnQgPSBzdHlsZWQoQ29tcG9uZW50KWBgXG5cbmNvbnN0IENvbnRhaW5lcjogUmVhY3QuRkM8Q29udGFpbmVyUHJvcHM+ID0gcHJvcHMgPT4ge1xuICBjb25zdCBbY29udGVudHMsIHNldENvbnRlbnRzXSA9IHVzZVN0YXRlPGFueVtdPihbXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGYgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgICBjb25zdCBrZXkgPSB7XG4gICAgICAgIGhlYWRlcnM6IHsgJ1gtQVBJLUtFWSc6ICc0MjRlMzQ5Ni02Y2I3LTRlYmQtODU3Mi00OWI1YTE0OGU5MGYnIH1cbiAgICAgIH1cbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL25lcG90YS5taWNyb2Ntcy5pby9hcGkvdjEvYmxvZycsIGtleSlcbiAgICAgIGNvbnN0IHJlcG9zID0gYXdhaXQgcmVzLmpzb24oKVxuICAgICAgc2V0Q29udGVudHMocmVwb3MuY29udGVudHMpXG4gICAgICBjb25zb2xlLmxvZyh7IGNvbnRlbnRzOiByZXBvcy5jb250ZW50cyB9KVxuICAgIH1cbiAgICBmKClcbiAgfSwgW10pXG5cbiAgcmV0dXJuIDxTdHlsZWRDb21wb25lbnQgY2xhc3NOYW1lPVwiaW5kZXhcIiBjb250ZW50cz17Y29udGVudHN9IHsuLi5wcm9wc30gLz5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

})