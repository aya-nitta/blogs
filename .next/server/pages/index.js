module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/aya/Work/test/src/pages/index.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\nconst Component = props => __jsx(\"div\", {\n  className: props.className,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 3\n  }\n}, props.contents.map(content => {\n  return __jsx(\"p\", {\n    key: content.id,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 14\n    }\n  }, content.title);\n}));\n\nconst StyledComponent = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(Component).withConfig({\n  displayName: \"pages__StyledComponent\",\n  componentId: \"sc-10jc9ly-0\"\n})([\"\"]);\n\nconst Container = props => {\n  const {\n    0: contents,\n    1: setContents\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    const f = async () => {\n      const key = {\n        headers: {\n          'X-API-KEY': '424e3496-6cb7-4ebd-8572-49b5a148e90f'\n        }\n      };\n      const res = await fetch('https://nepota.microcms.io/api/v1/blog', key);\n      const repos = await res.json();\n      setContents(repos.contents);\n      console.log({\n        contents: repos.contents\n      });\n    };\n\n    f();\n  }, []);\n  return __jsx(StyledComponent, _extends({\n    className: \"index\",\n    contents: contents\n  }, props, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 10\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Container);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXgudHN4PzQxZTAiXSwibmFtZXMiOlsiQ29tcG9uZW50IiwicHJvcHMiLCJjbGFzc05hbWUiLCJjb250ZW50cyIsIm1hcCIsImNvbnRlbnQiLCJpZCIsInRpdGxlIiwiU3R5bGVkQ29tcG9uZW50Iiwic3R5bGVkIiwiQ29udGFpbmVyIiwic2V0Q29udGVudHMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImYiLCJrZXkiLCJoZWFkZXJzIiwicmVzIiwiZmV0Y2giLCJyZXBvcyIsImpzb24iLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFRQSxNQUFNQSxTQUFtQyxHQUFHQyxLQUFLLElBQy9DO0FBQUssV0FBUyxFQUFFQSxLQUFLLENBQUNDLFNBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDR0QsS0FBSyxDQUFDRSxRQUFOLENBQWVDLEdBQWYsQ0FBbUJDLE9BQU8sSUFBSTtBQUM3QixTQUFPO0FBQUcsT0FBRyxFQUFFQSxPQUFPLENBQUNDLEVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBcUJELE9BQU8sQ0FBQ0UsS0FBN0IsQ0FBUDtBQUNELENBRkEsQ0FESCxDQURGOztBQVFBLE1BQU1DLGVBQWUsR0FBR0Msd0RBQU0sQ0FBQ1QsU0FBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLFFBQXJCOztBQUVBLE1BQU1VLFNBQW1DLEdBQUdULEtBQUssSUFBSTtBQUNuRCxRQUFNO0FBQUEsT0FBQ0UsUUFBRDtBQUFBLE9BQVdRO0FBQVgsTUFBMEJDLHNEQUFRLENBQVEsRUFBUixDQUF4QztBQUVBQyx5REFBUyxDQUFDLE1BQU07QUFDZCxVQUFNQyxDQUFDLEdBQUcsWUFBMkI7QUFDbkMsWUFBTUMsR0FBRyxHQUFHO0FBQ1ZDLGVBQU8sRUFBRTtBQUFFLHVCQUFhO0FBQWY7QUFEQyxPQUFaO0FBR0EsWUFBTUMsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBQyx3Q0FBRCxFQUEyQ0gsR0FBM0MsQ0FBdkI7QUFDQSxZQUFNSSxLQUFLLEdBQUcsTUFBTUYsR0FBRyxDQUFDRyxJQUFKLEVBQXBCO0FBQ0FULGlCQUFXLENBQUNRLEtBQUssQ0FBQ2hCLFFBQVAsQ0FBWDtBQUNBa0IsYUFBTyxDQUFDQyxHQUFSLENBQVk7QUFBRW5CLGdCQUFRLEVBQUVnQixLQUFLLENBQUNoQjtBQUFsQixPQUFaO0FBQ0QsS0FSRDs7QUFTQVcsS0FBQztBQUNGLEdBWFEsRUFXTixFQVhNLENBQVQ7QUFhQSxTQUFPLE1BQUMsZUFBRDtBQUFpQixhQUFTLEVBQUMsT0FBM0I7QUFBbUMsWUFBUSxFQUFFWDtBQUE3QyxLQUEyREYsS0FBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFQO0FBQ0QsQ0FqQkQ7O0FBbUJlUyx3RUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxudHlwZSBDb250YWluZXJQcm9wcyA9IHt9XG50eXBlIENvbXBvbmVudFByb3BzID0ge1xuICBjbGFzc05hbWU6IHN0cmluZ1xuICBjb250ZW50czogYW55W11cbn0gJiBDb250YWluZXJQcm9wc1xuXG5jb25zdCBDb21wb25lbnQ6IFJlYWN0LkZDPENvbXBvbmVudFByb3BzPiA9IHByb3BzID0+IChcbiAgPGRpdiBjbGFzc05hbWU9e3Byb3BzLmNsYXNzTmFtZX0+XG4gICAge3Byb3BzLmNvbnRlbnRzLm1hcChjb250ZW50ID0+IHtcbiAgICAgIHJldHVybiA8cCBrZXk9e2NvbnRlbnQuaWR9Pntjb250ZW50LnRpdGxlfTwvcD5cbiAgICB9KX1cbiAgPC9kaXY+XG4pXG5cbmNvbnN0IFN0eWxlZENvbXBvbmVudCA9IHN0eWxlZChDb21wb25lbnQpYGBcblxuY29uc3QgQ29udGFpbmVyOiBSZWFjdC5GQzxDb250YWluZXJQcm9wcz4gPSBwcm9wcyA9PiB7XG4gIGNvbnN0IFtjb250ZW50cywgc2V0Q29udGVudHNdID0gdXNlU3RhdGU8YW55W10+KFtdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZiA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IHtcbiAgICAgICAgaGVhZGVyczogeyAnWC1BUEktS0VZJzogJzQyNGUzNDk2LTZjYjctNGViZC04NTcyLTQ5YjVhMTQ4ZTkwZicgfVxuICAgICAgfVxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vbmVwb3RhLm1pY3JvY21zLmlvL2FwaS92MS9ibG9nJywga2V5KVxuICAgICAgY29uc3QgcmVwb3MgPSBhd2FpdCByZXMuanNvbigpXG4gICAgICBzZXRDb250ZW50cyhyZXBvcy5jb250ZW50cylcbiAgICAgIGNvbnNvbGUubG9nKHsgY29udGVudHM6IHJlcG9zLmNvbnRlbnRzIH0pXG4gICAgfVxuICAgIGYoKVxuICB9LCBbXSlcblxuICByZXR1cm4gPFN0eWxlZENvbXBvbmVudCBjbGFzc05hbWU9XCJpbmRleFwiIGNvbnRlbnRzPXtjb250ZW50c30gey4uLnByb3BzfSAvPlxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250YWluZXJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });