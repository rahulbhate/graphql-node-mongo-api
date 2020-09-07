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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sass/main.scss */ \"./sass/main.scss\");\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sass_main_scss__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/rahulbhate/pluralsight-projects/graphql-node-mongo-api/FRONT-END/react-nextjs-web/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction Index() {\n  return __jsx(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 5\n    }\n  }, \"Hello & Welcome to NextJS...\");\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTs7QUFDQSxTQUFTQSxLQUFULEdBQWlCO0FBQ2YsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9DQURGO0FBTUQ7O0FBQ2NBLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNzcyBmcm9tIFwiLi4vc2Fzcy9tYWluLnNjc3NcIjtcbmZ1bmN0aW9uIEluZGV4KCkge1xuICByZXR1cm4gKFxuICAgIDxoMT5cbiAgICAgIEhlbGxvICYgV2VsY29tZSB0byBOZXh0SlMuLi5cbiAgICAgXG4gICAgPC9oMT5cbiAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./sass/main.scss":
/*!************************!*\
  !*** ./sass/main.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n\t\"list\": \"_3ZSIWmJHeKqMTQD12YCnDU\",\n\t\"overflow-hidden\": \"vt-4dXt4F-f2syisluxRb\",\n\t\"container\": \"_2ObeQqDoMGUeyNWzcKuwnU\",\n\t\"product-cards\": \"SqqGnvm0Amf5NVXPRNCDa\",\n\t\"features-area\": \"_3SKOQSyaNlju3wfVJyqqs3\",\n\t\"brand-area\": \"_3l06L7vfV5A_1um8Gu0E7I\",\n\t\"item5\": \"_35GGYDmKWC_zvy9DPzqFnv\",\n\t\"item1\": \"_2qdmlzjM8IqE9JxpcRkkY5\",\n\t\"single-related-product\": \"_2F4Lpao9VkHJ0hY2ohK5T_\",\n\t\"nested-inner\": \"_1rniGSTmYlIDPeedSlT9EX\",\n\t\"footer-area\": \"dj_g11V6toyqoMqM9x5m7\",\n\t\"footer-area__nesting\": \"EXv2AhDMc2tQBP_Hny1Ip\",\n\t\"footer-area__\": \"_1FxxTkpqPzP6OAd4qsL6k\",\n\t\"footer-area__nesting-row\": \"_1Xj0k66VQFKRq4-K0_TnMM\",\n\t\"footer-area__h6\": \"_34fEaiiJASqmqER-rUi_M9\"\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zYXNzL21haW4uc2Nzcz9iN2E0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zYXNzL21haW4uc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImxpc3RcIjogXCJfM1pTSVdtSkhlS3FNVFFEMTJZQ25EVVwiLFxuXHRcIm92ZXJmbG93LWhpZGRlblwiOiBcInZ0LTRkWHQ0Ri1mMnN5aXNsdXhSYlwiLFxuXHRcImNvbnRhaW5lclwiOiBcIl8yT2JlUXFEb01HVWV5Tld6Y0t1d25VXCIsXG5cdFwicHJvZHVjdC1jYXJkc1wiOiBcIlNxcUdudm0wQW1mNU5WWFBSTkNEYVwiLFxuXHRcImZlYXR1cmVzLWFyZWFcIjogXCJfM1NLT1FTeWFObGp1M3dmVkp5cXFzM1wiLFxuXHRcImJyYW5kLWFyZWFcIjogXCJfM2wwNkw3dmZWNUFfMXVtOEd1MEU3SVwiLFxuXHRcIml0ZW01XCI6IFwiXzM1R0dZRG1LV0NfenZ5OURQenFGbnZcIixcblx0XCJpdGVtMVwiOiBcIl8ycWRtbHpqTThJcUU5SnhwY1Jra1k1XCIsXG5cdFwic2luZ2xlLXJlbGF0ZWQtcHJvZHVjdFwiOiBcIl8yRjRMcGFvOVZrSEowaFkyb2hLNVRfXCIsXG5cdFwibmVzdGVkLWlubmVyXCI6IFwiXzFybmlHU1RtWWxJRFBlZWRTbFQ5RVhcIixcblx0XCJmb290ZXItYXJlYVwiOiBcImRqX2cxMVY2dG95cW9NcU05eDVtN1wiLFxuXHRcImZvb3Rlci1hcmVhX19uZXN0aW5nXCI6IFwiRVh2MkFoRE1jMnRRQlBfSG55MUlwXCIsXG5cdFwiZm9vdGVyLWFyZWFfX1wiOiBcIl8xRnh4VGtwcVB6UDZPQWQ0cXNMNmtcIixcblx0XCJmb290ZXItYXJlYV9fbmVzdGluZy1yb3dcIjogXCJfMVhqMGs2NlZRRktScTQtSzBfVG5NTVwiLFxuXHRcImZvb3Rlci1hcmVhX19oNlwiOiBcIl8zNGZFYWlpSkFTcW1xRVItclVpX005XCJcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./sass/main.scss\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });