/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --large-heading-text: 2rem;
    --blue: #184f77;
    --light-blue: #178bad;
    --dark-blue: #0e2d44;
    --white: #ffffff;
    --transparent-white: rgba(255, 255, 255, 0.5);
    --white-svg-filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(82deg) brightness(105%) contrast(105%);
    --button-shadow: 0 0 0 2px var(--white);
    --shadow-transition: all 0.3s ease-in-out;
}
*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.loader {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    position: absolute;
    animation: rotate 1s linear infinite
}
.loader::before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 5px solid #FFF;
    animation: prixClipFix 2s linear infinite ;
}

@keyframes rotate {
    100%   {transform: rotate(360deg)}
}

@keyframes prixClipFix {
    0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}
    25%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}
    50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}
    75%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%)}
    100% {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0)}
}

img {
    filter: var(--white-svg-filter);
}

body {
    font-family: Arial, Helvetica, sans-serif;
}

.body-wrapper {
    display: grid;
    grid-template: 2fr 14fr 1fr / 1fr 6fr 1fr;
    grid-template-areas:
            ". header ."
    ". main-content ."
    ". . .";
    background-image: linear-gradient(to bottom, var(--light-blue), var(--blue) 60%, var(--dark-blue) 90%);
    background-repeat: no-repeat;
    color: var(--white);
    min-height: 100vh;
}

header {
    grid-area: header;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px;
}

.main-nav {
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
}

.search-bar-wrapper {
    display: flex;
    width: 300px;
    height: 35px;
    background-color: var(--dark-blue);
    border-radius: 9999px;
    padding: 4px 16px;
    transition: var(--shadow-transition);
}
.search-bar-wrapper:has(input:focus-visible) {
    box-shadow: var(--button-shadow);
}

.search-button {
    width: 25px;
    height: 25px;
    appearance: none;
    outline: none;
    background: transparent;
    border: none;
    cursor: pointer;
}

.search-bar {
    flex: 1;
}

.search-bar input {
    appearance: none;
    outline: none;
    border: none;
    background: none;
    color: var(--white);
    height: 100%;
    width: 100%;
}

.unit-buttons {
    font-size: 0.65rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 10px;
}

.unit-buttons input {
    appearance: none;
    outline: none;
}

.unit-buttons label {
    width: max-content;
    height: max-content;
    background-color: var(--dark-blue);
    padding: 10px;
    border-radius: 9999px;
    transition: var(--shadow-transition);
    cursor: pointer;
}
.unit-buttons label:hover {
    box-shadow: var(--button-shadow);
}

.unit-buttons label:has(input:checked) {
    box-shadow: var(--button-shadow);
}

.main-content {
    grid-area: main-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    text-align: center;
}

.large-weather-img {
    width: 75px;
    height: 75px;
}

.large-temp-text {
    font-size: 5rem;
}

.main-content h1 {
    font-size: var(--large-heading-text);
}

.weather-div {
    display: flex;
    gap: 24px;
}

.flex-column {
    display: flex;
    flex-direction: column;
    gap: 8px;
}
.main-content .light-grey {
    color: var(--transparent-white);
}

.hourly-container {
    display: flex;
    gap: 11px;
    overflow-x: auto;
    max-width: 350px;
    scroll-snap-type: x mandatory;
}

.hourly-weather-cell {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    scroll-snap-align: start;
}

::-webkit-scrollbar {
    height: 6px;
    width: 12px;
    background: transparent;
}

::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
    background: transparent;
}

::-webkit-scrollbar-track-piece {
    display: none;
}

::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5);
}

.stats-grid {
    display: grid;
    grid-template: 1fr 1fr 1fr / 1fr 1fr 1fr;
    gap: 5%;
    text-align: center;
}

.stats-grid > * {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.stats-grid .info-box-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
}

.mini-weather-container {
    display: flex;
}

.stats-grid .info-box {
    width: max-content;
    height: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
}

.medium-text {
    font-size: 1.5rem;
}
.small-text {
    font-size: 1.175rem;
}

.wind-arrow {
    width: 30px;
    height: 30px;
}

.mini-wind-arrow {
    width: 25px;
    height: 25px;
}

.mini-weather-container {
    gap: 10px;
}
.bottom-wrapper h1 {
    margin-bottom: 25px;
    text-align: center;
}

.weekly {
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-size: 1.25rem;
}

.weekly > div {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 20px;
    padding: 10px;
}

@media (max-width: 600px) {
    .weekly > div {
        grid-template-columns: 1fr 2fr 1fr 1fr;
        gap: 5px;
    }
    .weather-div {
        gap: 0;
        flex-direction: column;
    }
    .body-wrapper {
       display: block;
    }
    .stats-grid {
        grid-template: 1fr 1fr 1fr 1fr / 1fr 1fr;
    }
}

.weekly > div:not(:last-child) {
    border-bottom: 2px solid var(--transparent-white);
}


.day > div:first-child {
    font-weight: bold;
}

.mini-weather-icon {
    width: 25px;
    height: 25px;
}

.small-weather-icon {
    width: 35px;
    height: 35px;
}

.circle {
    border-radius: 100%;
}



`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --large-heading-text: 2rem;\n    --blue: #184f77;\n    --light-blue: #178bad;\n    --dark-blue: #0e2d44;\n    --white: #ffffff;\n    --transparent-white: rgba(255, 255, 255, 0.5);\n    --white-svg-filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(82deg) brightness(105%) contrast(105%);\n    --button-shadow: 0 0 0 2px var(--white);\n    --shadow-transition: all 0.3s ease-in-out;\n}\n*, *::before, *::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n.loader {\n    width: 48px;\n    height: 48px;\n    border-radius: 50%;\n    position: absolute;\n    animation: rotate 1s linear infinite\n}\n.loader::before {\n    content: \"\";\n    box-sizing: border-box;\n    position: absolute;\n    inset: 0;\n    border-radius: 50%;\n    border: 5px solid #FFF;\n    animation: prixClipFix 2s linear infinite ;\n}\n\n@keyframes rotate {\n    100%   {transform: rotate(360deg)}\n}\n\n@keyframes prixClipFix {\n    0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}\n    25%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}\n    50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}\n    75%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%)}\n    100% {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0)}\n}\n\nimg {\n    filter: var(--white-svg-filter);\n}\n\nbody {\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n.body-wrapper {\n    display: grid;\n    grid-template: 2fr 14fr 1fr / 1fr 6fr 1fr;\n    grid-template-areas:\n            \". header .\"\n    \". main-content .\"\n    \". . .\";\n    background-image: linear-gradient(to bottom, var(--light-blue), var(--blue) 60%, var(--dark-blue) 90%);\n    background-repeat: no-repeat;\n    color: var(--white);\n    min-height: 100vh;\n}\n\nheader {\n    grid-area: header;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 50px;\n}\n\n.main-nav {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    justify-content: center;\n    align-items: center;\n}\n\n.search-bar-wrapper {\n    display: flex;\n    width: 300px;\n    height: 35px;\n    background-color: var(--dark-blue);\n    border-radius: 9999px;\n    padding: 4px 16px;\n    transition: var(--shadow-transition);\n}\n.search-bar-wrapper:has(input:focus-visible) {\n    box-shadow: var(--button-shadow);\n}\n\n.search-button {\n    width: 25px;\n    height: 25px;\n    appearance: none;\n    outline: none;\n    background: transparent;\n    border: none;\n    cursor: pointer;\n}\n\n.search-bar {\n    flex: 1;\n}\n\n.search-bar input {\n    appearance: none;\n    outline: none;\n    border: none;\n    background: none;\n    color: var(--white);\n    height: 100%;\n    width: 100%;\n}\n\n.unit-buttons {\n    font-size: 0.65rem;\n    font-weight: bold;\n    display: flex;\n    align-items: center;\n    gap: 10px;\n}\n\n.unit-buttons input {\n    appearance: none;\n    outline: none;\n}\n\n.unit-buttons label {\n    width: max-content;\n    height: max-content;\n    background-color: var(--dark-blue);\n    padding: 10px;\n    border-radius: 9999px;\n    transition: var(--shadow-transition);\n    cursor: pointer;\n}\n.unit-buttons label:hover {\n    box-shadow: var(--button-shadow);\n}\n\n.unit-buttons label:has(input:checked) {\n    box-shadow: var(--button-shadow);\n}\n\n.main-content {\n    grid-area: main-content;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 2rem;\n    text-align: center;\n}\n\n.large-weather-img {\n    width: 75px;\n    height: 75px;\n}\n\n.large-temp-text {\n    font-size: 5rem;\n}\n\n.main-content h1 {\n    font-size: var(--large-heading-text);\n}\n\n.weather-div {\n    display: flex;\n    gap: 24px;\n}\n\n.flex-column {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n}\n.main-content .light-grey {\n    color: var(--transparent-white);\n}\n\n.hourly-container {\n    display: flex;\n    gap: 11px;\n    overflow-x: auto;\n    max-width: 350px;\n    scroll-snap-type: x mandatory;\n}\n\n.hourly-weather-cell {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 5px;\n    scroll-snap-align: start;\n}\n\n::-webkit-scrollbar {\n    height: 6px;\n    width: 12px;\n    background: transparent;\n}\n\n::-webkit-scrollbar-track {\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\n    border-radius: 10px;\n    background: transparent;\n}\n\n::-webkit-scrollbar-track-piece {\n    display: none;\n}\n\n::-webkit-scrollbar-thumb {\n    border-radius: 10px;\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5);\n}\n\n.stats-grid {\n    display: grid;\n    grid-template: 1fr 1fr 1fr / 1fr 1fr 1fr;\n    gap: 5%;\n    text-align: center;\n}\n\n.stats-grid > * {\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n}\n\n.stats-grid .info-box-wrapper {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.mini-weather-container {\n    display: flex;\n}\n\n.stats-grid .info-box {\n    width: max-content;\n    height: max-content;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.medium-text {\n    font-size: 1.5rem;\n}\n.small-text {\n    font-size: 1.175rem;\n}\n\n.wind-arrow {\n    width: 30px;\n    height: 30px;\n}\n\n.mini-wind-arrow {\n    width: 25px;\n    height: 25px;\n}\n\n.mini-weather-container {\n    gap: 10px;\n}\n.bottom-wrapper h1 {\n    margin-bottom: 25px;\n    text-align: center;\n}\n\n.weekly {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    font-size: 1.25rem;\n}\n\n.weekly > div {\n    display: grid;\n    grid-template-columns: 2fr 1fr 1fr 1fr;\n    gap: 20px;\n    padding: 10px;\n}\n\n@media (max-width: 600px) {\n    .weekly > div {\n        grid-template-columns: 1fr 2fr 1fr 1fr;\n        gap: 5px;\n    }\n    .weather-div {\n        gap: 0;\n        flex-direction: column;\n    }\n    .body-wrapper {\n       display: block;\n    }\n    .stats-grid {\n        grid-template: 1fr 1fr 1fr 1fr / 1fr 1fr;\n    }\n}\n\n.weekly > div:not(:last-child) {\n    border-bottom: 2px solid var(--transparent-white);\n}\n\n\n.day > div:first-child {\n    font-weight: bold;\n}\n\n.mini-weather-icon {\n    width: 25px;\n    height: 25px;\n}\n\n.small-weather-icon {\n    width: 35px;\n    height: 35px;\n}\n\n.circle {\n    border-radius: 100%;\n}\n\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const api = (locales => {
    const apiKey = 'JSN83SWW77989S6ZE43SESMX2';
    let currentLocation;

    async function getLocationData(options, unit = 'metric') {
        if ('latitude' in options && 'longitude' in options) {
            const locationRequest = new Request(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${options.latitude}&longitude=${options.longitude}&localityLanguage=en`);
            try {
                const locationResponse = await fetch(locationRequest);
                const locationData = await locationResponse.json();
                options.location = `${locationData.city}, ${locationData.countryCode}`;
            } catch (error) {
                return {code: error.name, message: error.message};
            }
        }
        currentLocation = options.location;
        const request = new Request(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${options.location}?unitGroup=${unit}&key=${apiKey}&contentType=json&lang=en`, {
            method: 'GET',
            headers: {},
        });
        try {
            const response = await fetch(request);
            if (response.status >= 400) {
                const text = await response.text();
                return {
                    error: text
                }
            } else {
                const data = await response.json();
                return processData(data);
            }
        } catch (error) {
            return {code: error.name, message: error.message};
        }
    }

    function processData(data) {
        const currentTime = new Date(new Date().toLocaleString("en-US", {timeZone: `${data.timezone}`}));
        const location = data.resolvedAddress;
        const description = data.description;

        const daysData = data.days;

        const days = [];

        const todayData = daysData[0];
        days[0] = {
            conditions: todayData.conditions,
            temp: Math.round(todayData.temp),
            winddir: Math.round(todayData.winddir),
            feelslike: Math.round(todayData.feelslike),
            icon: todayData.icon,
            stats: {
                windspeed: Math.round(todayData.windspeed),
                humidity: Math.round(todayData.humidity),
                uvindex: todayData.uvindex,
                visibility: Math.round(todayData.visibility),
                cloudcover: Math.round(todayData.cloudcover),
                precipprob: Math.round(todayData.precipprob),
                sunrise: todayData.sunrise.slice(0, -3),
                sunset: todayData.sunset.slice(0, -3),
            },
            hours: todayData.hours,
        };

        for (let i = 1; i <= 7; i++) {
            const dayData = daysData[i];
            days[i] = {
                datetime: new Date(dayData.datetime),
                icon: dayData.icon,
                tempMin: Math.round(dayData.tempmin),
                tempMax: Math.round(dayData.tempmax),
                windspeed: Math.round(dayData.windspeed),
                winddir: Math.round(dayData.winddir),
            };
            if (i === 1) {
                days[i].hours = dayData.hours;
            }
        }
        return {
            currentTime,
            location,
            description,
            days,
        };
    }

    function getCurrentLocation() {
        return currentLocation;
    }

    return {
        getLocationData,
        getCurrentLocation
    }
})();


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images */ "./src/images.js");


const dom = (() => {
    const container = document.querySelector('.main-content');
    let units;

    function renderToday(today, currentTime, location, description) {
        const headingDiv = document.createElement('div');
        const heading = document.createElement('h1');
        heading.textContent = location;
        const dateHeading = document.createElement('h3');
        dateHeading.className = 'light-grey small-text';
        dateHeading.textContent = `${currentTime.toDateString()} | ${currentTime.getHours() < 10 ? '0' + currentTime.getHours() : currentTime.getHours()}:${currentTime.getMinutes() < 10 ? '0' + currentTime.getMinutes() : currentTime.getMinutes()}`;
        headingDiv.appendChild(heading);
        headingDiv.appendChild(dateHeading);

        const weatherDiv = document.createElement('div');

        weatherDiv.className = 'weather-div';
        const tempContainer = document.createElement('div');
        const weatherImage = new Image();
        weatherImage.src = _images__WEBPACK_IMPORTED_MODULE_0__["default"].get(today.icon);
        weatherImage.alt = today.icon;
        weatherImage.className = 'large-weather-img';
        const text = document.createElement('span');
        text.className = 'large-temp-text';
        text.textContent = `${today.temp}\xB0${formatTempUnits()}`;
        tempContainer.appendChild(weatherImage);
        tempContainer.appendChild(text);

        const descriptionDiv = document.createElement('div');
        descriptionDiv.className = 'flex-column';
        const smallHeader = document.createElement('h3');
        smallHeader.className = 'medium-text';
        smallHeader.textContent = `${today.conditions}`;
        const feelsLikeText = document.createElement('span');
        feelsLikeText.className = 'light-grey small-text';
        feelsLikeText.textContent = `Feels like ${today.feelslike}\xB0${formatTempUnits()}`;
        descriptionDiv.appendChild(smallHeader);
        descriptionDiv.appendChild(feelsLikeText);

        weatherDiv.appendChild(tempContainer);
        weatherDiv.appendChild(descriptionDiv);

        const statsGrid = document.createElement('div');
        statsGrid.className = 'stats-grid';

        for (let [key, val] of Object.entries(today.stats)) {
            const name = formatDataName(key);

            const wrapper = document.createElement("div");

            const nameTag = document.createElement('span');
            nameTag.className = 'light-grey small-text';
            nameTag.textContent = name;

            wrapper.appendChild(nameTag);

            const infoBoxWrapper = document.createElement('div');
            infoBoxWrapper.className = 'info-box-wrapper';

            const infoBox = document.createElement('span');
            infoBox.className = 'medium-text info-box';
            infoBox.textContent = `${val}${getUnits(key) ? getUnits(key) : ''}`;

            if (key === 'uvindex') {
                infoBox.classList.add('circle');
                infoBox.style.backgroundColor = `${getUvColour(val)}`;
                infoBox.style.width = '35px';
                infoBox.style.height = '35px';
                infoBox.style.fontWeight = 'bold';
            }

            if (key === 'windspeed') {
                const windArrow = new Image();
                windArrow.src = _images__WEBPACK_IMPORTED_MODULE_0__["default"].get('arrow-up-thin');
                windArrow.alt = 'wind direction';
                windArrow.style.transform = `rotate(${today.winddir}deg)`;
                windArrow.className = 'wind-arrow';

                infoBoxWrapper.appendChild(windArrow);
            }

            infoBoxWrapper.appendChild(infoBox);
            wrapper.appendChild(infoBoxWrapper);

            statsGrid.appendChild(wrapper);
        }

        container.appendChild(headingDiv);
        container.appendChild(weatherDiv);
        container.appendChild(statsGrid);
    }


    function renderHourly(todayHours, tomorrowHours, currentTime) {
        const currentHour = currentTime.getHours();

        const weatherContainer = document.createElement('div');
        weatherContainer.className = 'hourly-container';

        let count = 0;

        for (const hour of todayHours) {
            const time = parseInt(hour.datetime.slice(0, 2));
            if (currentHour > time) {
                continue;
            }
            addCell(hour);
            count++;
        }

        let i = 0;
        while (count < 24) {
            const hour = tomorrowHours[i++];
            addCell(hour);
            count++;
        }

        function addCell(hour) {
            const weatherCell = document.createElement('div');
            weatherCell.className = 'hourly-weather-cell';

            const formattedTime = hour.datetime.slice(0, 5);
            const timeSpan = document.createElement('span');
            timeSpan.textContent = formattedTime;
            timeSpan.className = 'light-grey';
            timeSpan.style.marginBottom = '20px';

            const weatherImage = new Image();
            weatherImage.className = 'small-weather-icon';
            weatherImage.src = _images__WEBPACK_IMPORTED_MODULE_0__["default"].get(hour.icon);
            weatherImage.alt = 'weather-image';

            const degreeSpan = document.createElement('span');
            degreeSpan.textContent = `${Math.round(hour.temp)}\xB0${formatTempUnits()}`;

            weatherCell.appendChild(timeSpan);
            weatherCell.appendChild(weatherImage);
            weatherCell.appendChild(degreeSpan);

            weatherContainer.appendChild(weatherCell)
        }

        container.appendChild(weatherContainer);
    }

    function formatTempUnits() {
        switch (units) {
            case 'metric':
            case 'uk':
                return 'C';
            case 'us':
                return 'F';
        }
    }

    function getUnits(name) {
        let result;
        switch (name) {
            case 'windspeed':
                result = units === 'metric' ? 'km/h' : 'mph';
                break;
            case 'humidity':
            case 'cloudcover':
            case 'precipprob':
                result = '%';
                break;
            case 'visibility':
                result = units === 'metric' ? 'km' : 'mi';
                break;
        }
        return result;
    }

    function formatDataName(name) {
        let result;
        switch (name) {
            case 'windspeed':
                result = 'Wind';
                break;
            case 'humidity':
                result = 'Humidity';
                break;
            case 'uvindex':
                result = 'UV Index';
                break;
            case 'visibility':
                result = 'Visibility';
                break;
            case 'cloudcover':
                result = 'Cloudcover';
                break;
            case 'precipprob':
                result = 'Chance of rain';
                break;
            case 'sunrise':
                result = 'Sunrise';
                break;
            case 'sunset':
                result = 'Sunset';
                break;
        }
        return result;
    }

    function renderWeekly(days) {
        const wrapper = document.createElement('div');
        wrapper.className = 'bottom-wrapper';
        const heading = document.createElement('h1');
        heading.textContent = 'Weekly Forecast';

        const weekly = document.createElement('div');
        weekly.className = 'weekly';

        for (const day of days) {
            const dayContainer = document.createElement('div');
            dayContainer.className = 'day';

            const dayName = document.createElement('div');

            let mediaQueryList = window.matchMedia("(max-width: 600px)");

            if (mediaQueryList.matches) {
                dayName.textContent = getDayOfWeek(day.datetime, false);
            } else {
                dayName.textContent = getDayOfWeek(day.datetime, true);
            }

            mediaQueryList.addEventListener('change', () => {
                dayName.textContent = dayName.textContent.length > 3 ? getDayOfWeek(day.datetime, false) : getDayOfWeek(day.datetime, true);
            });

            const miniWeatherContainer = document.createElement('div');
            miniWeatherContainer.className = 'mini-weather-container';

            const weatherImage = new Image();
            weatherImage.src = _images__WEBPACK_IMPORTED_MODULE_0__["default"].get(day.icon);
            weatherImage.alt = 'weather-image';
            weatherImage.className = 'mini-weather-icon';
            const tempText = document.createElement('span');
            tempText.textContent = `${day.tempMax}\xB0${formatTempUnits()}`;

            miniWeatherContainer.appendChild(weatherImage);
            miniWeatherContainer.appendChild(tempText);

            const minTemp = document.createElement('span');
            minTemp.textContent = `${day.tempMin}\xB0${formatTempUnits()}`;
            minTemp.className = 'light-grey';

            const windContainer = document.createElement('div');
            windContainer.className = 'wind-container';

            const windArrow = new Image();
            windArrow.src = _images__WEBPACK_IMPORTED_MODULE_0__["default"].get('arrow-up-thin');
            windArrow.alt = 'wind direction';
            windArrow.style.transform = `rotate(${day.winddir}deg)`;
            windArrow.className = 'mini-wind-arrow';

            const windSpeed = document.createElement('span');
            windSpeed.textContent = `${day.windspeed}`;

            windContainer.appendChild(windArrow);
            windContainer.appendChild(windSpeed);

            dayContainer.appendChild(dayName);
            dayContainer.appendChild(miniWeatherContainer);
            dayContainer.appendChild(minTemp);
            dayContainer.appendChild(windContainer);

            weekly.appendChild(dayContainer);
        }

        wrapper.appendChild(heading);
        wrapper.appendChild(weekly);
        container.appendChild(wrapper);
    }

    function getUvColour(uvindex) {
        if (uvindex >= 11) {
            return 'violet';
        } else if (uvindex >= 8) {
            return 'red';
        } else if (uvindex >= 6) {
            return 'orange';
        } else if (uvindex >= 3) {
            return 'gold';
        } else {
            return 'green';
        }
    }

    function getDayOfWeek(date, long) {
        switch (date.getDay()) {
            case 0:
                return long ? 'Sunday' : 'Sun';
            case 1:
                return long ? 'Monday' : 'Mon';
            case 2:
                return long ? 'Tuesday' : 'Tue';
            case 3:
                return long ? 'Wednesday' : 'Wed';
            case 4:
                return long ? 'Thursday' : 'Thu';
            case 5:
                return long ? 'Friday' : 'Fri';
            case 6:
                return long ? 'Saturday' : 'Sat';
        }
    }

    function renderContent(data, unit) {
        while (container.firstChild) {
            container.removeChild(container.lastChild);
        }
        if (data.error) {
            alert(data.error);
        } else {
            units = unit;
            renderToday(data.days[0], data.currentTime, data.location, data.description);
            renderHourly(data.days[0].hours, data.days[1].hours, data.currentTime);
            renderWeekly(data.days.splice(1), data.days.length - 1);
        }
    }

    function load() {
        while (container.firstChild) {
            container.removeChild(container.lastChild);
        }
        const loadingWheel = document.createElement('span');
        loadingWheel.className = 'loader';
        container.appendChild(loadingWheel);
    }

    return {
        renderContent,
        load,
    }
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dom);

/***/ }),

/***/ "./src/handlers.js":
/*!*************************!*\
  !*** ./src/handlers.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./src/api.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");



const handlers = (() => {
    const searchInput = document.querySelector('.search-bar input');
    const topNav = document.querySelector('.main-nav');
    let currentLocation = 'Edinburgh';

    async function load(options = {location: 'Edinburgh'}, units = "metric") {
        _dom__WEBPACK_IMPORTED_MODULE_1__["default"].load();
        const data = await _api__WEBPACK_IMPORTED_MODULE_0__["default"].getLocationData(options, units);
        currentLocation = _api__WEBPACK_IMPORTED_MODULE_0__["default"].getCurrentLocation();
        _dom__WEBPACK_IMPORTED_MODULE_1__["default"].renderContent(data, units);
    }

    function navHandler() {
        let units = 'metric';
        topNav.addEventListener('click', async (e) => {
            const target = e.target;
            switch (target.id) {
                case 'search':
                    currentLocation = searchInput.value;
                    searchInput.value = '';
                    await load({location: currentLocation}, units);
                    break;
            }
        });
        document.querySelectorAll('input[name="unit"]').forEach((element) => {
            element.addEventListener('change', async (e) => {
                units = e.target.value;
                await load({location: currentLocation}, units);
            });
        });
    }

    function keyHandler() {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                document.querySelector('#search').click();
            }
        });
    }

    function loadHandler() {
        window.addEventListener('load', async () => {
            navigator.geolocation.getCurrentPosition( (position) => {
                load({latitude: `${position.coords.latitude}`, longitude: `${position.coords.longitude}`});
            }, () => {
                load();
            });
        });
    }

    function registerHandlers() {
        navHandler();
        keyHandler();
        loadHandler();
    }

    return {
        registerHandlers,
    };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handlers);

/***/ }),

/***/ "./src/images.js":
/*!***********************!*\
  !*** ./src/images.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_clear_day_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/clear-day.svg */ "./src/images/clear-day.svg");
/* harmony import */ var _images_clear_night_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/clear-night.svg */ "./src/images/clear-night.svg");
/* harmony import */ var _images_cloudy_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/cloudy.svg */ "./src/images/cloudy.svg");
/* harmony import */ var _images_fog_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/fog.svg */ "./src/images/fog.svg");
/* harmony import */ var _images_arrow_up_thin_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/arrow-up-thin.svg */ "./src/images/arrow-up-thin.svg");
/* harmony import */ var _images_partly_cloudy_day_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/partly-cloudy-day.svg */ "./src/images/partly-cloudy-day.svg");
/* harmony import */ var _images_partly_cloudy_night_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/partly-cloudy-night.svg */ "./src/images/partly-cloudy-night.svg");
/* harmony import */ var _images_rain_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/rain.svg */ "./src/images/rain.svg");
/* harmony import */ var _images_snow_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/snow.svg */ "./src/images/snow.svg");
/* harmony import */ var _images_wind_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/wind.svg */ "./src/images/wind.svg");











const obj = {
    clearDay: _images_clear_day_svg__WEBPACK_IMPORTED_MODULE_0__,
    clearNight: _images_clear_night_svg__WEBPACK_IMPORTED_MODULE_1__,
    cloudy: _images_cloudy_svg__WEBPACK_IMPORTED_MODULE_2__,
    fog: _images_fog_svg__WEBPACK_IMPORTED_MODULE_3__,
    arrowUpThin: _images_arrow_up_thin_svg__WEBPACK_IMPORTED_MODULE_4__,
    partlyCloudyDay: _images_partly_cloudy_day_svg__WEBPACK_IMPORTED_MODULE_5__,
    partlyCloudyNight: _images_partly_cloudy_night_svg__WEBPACK_IMPORTED_MODULE_6__,
    rain: _images_rain_svg__WEBPACK_IMPORTED_MODULE_7__,
    snow: _images_snow_svg__WEBPACK_IMPORTED_MODULE_8__,
    wind: _images_wind_svg__WEBPACK_IMPORTED_MODULE_9__,
}

const kebabize = (str) => str.replace(/[A-Z]+(?![a-z])|[A-Z]/g, ($, ofs) => (ofs ? "-" : "") + $.toLowerCase())
const images = new Map();

for (let [key, val] of Object.entries(obj)) {
    images.set(kebabize(key), val);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (images);

/***/ }),

/***/ "./src/images/arrow-up-thin.svg":
/*!**************************************!*\
  !*** ./src/images/arrow-up-thin.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ec731006305b94590fd6.svg";

/***/ }),

/***/ "./src/images/clear-day.svg":
/*!**********************************!*\
  !*** ./src/images/clear-day.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "307faf5a25c67541fef3.svg";

/***/ }),

/***/ "./src/images/clear-night.svg":
/*!************************************!*\
  !*** ./src/images/clear-night.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "988f5a0ddca358c3b0f6.svg";

/***/ }),

/***/ "./src/images/cloudy.svg":
/*!*******************************!*\
  !*** ./src/images/cloudy.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b473d83f0b1d9a1e6275.svg";

/***/ }),

/***/ "./src/images/fog.svg":
/*!****************************!*\
  !*** ./src/images/fog.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1713156323a44fabdbea.svg";

/***/ }),

/***/ "./src/images/partly-cloudy-day.svg":
/*!******************************************!*\
  !*** ./src/images/partly-cloudy-day.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f4b26560ad0262b9c741.svg";

/***/ }),

/***/ "./src/images/partly-cloudy-night.svg":
/*!********************************************!*\
  !*** ./src/images/partly-cloudy-night.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "028e48cb6e062a0252c3.svg";

/***/ }),

/***/ "./src/images/rain.svg":
/*!*****************************!*\
  !*** ./src/images/rain.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d365ae49bcc9d20d48c7.svg";

/***/ }),

/***/ "./src/images/snow.svg":
/*!*****************************!*\
  !*** ./src/images/snow.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7084a517bd436592de9a.svg";

/***/ }),

/***/ "./src/images/wind.svg":
/*!*****************************!*\
  !*** ./src/images/wind.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "49e5d49966cee04973d6.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers */ "./src/handlers.js");



_handlers__WEBPACK_IMPORTED_MODULE_1__["default"].registerHandlers();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0EsVUFBVTtBQUNWLFVBQVU7QUFDVixVQUFVO0FBQ1YsVUFBVTtBQUNWLFVBQVU7QUFDVjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQSxPQUFPLGdGQUFnRixZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssaUJBQWlCLE9BQU8sS0FBSyxpQkFBaUIsa0JBQWtCLGtCQUFrQixrQkFBa0Isa0JBQWtCLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksUUFBUSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFB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eUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7QUNBcUI7QUFDYTs7QUFFbEMsaURBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc193ZWF0aGVyX2FwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vanNfd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2pzX3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vanNfd2VhdGhlcl9hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vanNfd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vanNfd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2pzX3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2pzX3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2pzX3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vanNfd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9qc193ZWF0aGVyX2FwcC8uL3NyYy9hcGkuanMiLCJ3ZWJwYWNrOi8vanNfd2VhdGhlcl9hcHAvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL2pzX3dlYXRoZXJfYXBwLy4vc3JjL2hhbmRsZXJzLmpzIiwid2VicGFjazovL2pzX3dlYXRoZXJfYXBwLy4vc3JjL2ltYWdlcy5qcyIsIndlYnBhY2s6Ly9qc193ZWF0aGVyX2FwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qc193ZWF0aGVyX2FwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9qc193ZWF0aGVyX2FwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vanNfd2VhdGhlcl9hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9qc193ZWF0aGVyX2FwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pzX3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vanNfd2VhdGhlcl9hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vanNfd2VhdGhlcl9hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2pzX3dlYXRoZXJfYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgLS1sYXJnZS1oZWFkaW5nLXRleHQ6IDJyZW07XG4gICAgLS1ibHVlOiAjMTg0Zjc3O1xuICAgIC0tbGlnaHQtYmx1ZTogIzE3OGJhZDtcbiAgICAtLWRhcmstYmx1ZTogIzBlMmQ0NDtcbiAgICAtLXdoaXRlOiAjZmZmZmZmO1xuICAgIC0tdHJhbnNwYXJlbnQtd2hpdGU6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgICAtLXdoaXRlLXN2Zy1maWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoMCUpIGh1ZS1yb3RhdGUoODJkZWcpIGJyaWdodG5lc3MoMTA1JSkgY29udHJhc3QoMTA1JSk7XG4gICAgLS1idXR0b24tc2hhZG93OiAwIDAgMCAycHggdmFyKC0td2hpdGUpO1xuICAgIC0tc2hhZG93LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuLmxvYWRlciB7XG4gICAgd2lkdGg6IDQ4cHg7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYW5pbWF0aW9uOiByb3RhdGUgMXMgbGluZWFyIGluZmluaXRlXG59XG4ubG9hZGVyOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaW5zZXQ6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlcjogNXB4IHNvbGlkICNGRkY7XG4gICAgYW5pbWF0aW9uOiBwcml4Q2xpcEZpeCAycyBsaW5lYXIgaW5maW5pdGUgO1xufVxuXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XG4gICAgMTAwJSAgIHt0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpfVxufVxuXG5Aa2V5ZnJhbWVzIHByaXhDbGlwRml4IHtcbiAgICAwJSAgIHtjbGlwLXBhdGg6cG9seWdvbig1MCUgNTAlLDAgMCwwIDAsMCAwLDAgMCwwIDApfVxuICAgIDI1JSAge2NsaXAtcGF0aDpwb2x5Z29uKDUwJSA1MCUsMCAwLDEwMCUgMCwxMDAlIDAsMTAwJSAwLDEwMCUgMCl9XG4gICAgNTAlICB7Y2xpcC1wYXRoOnBvbHlnb24oNTAlIDUwJSwwIDAsMTAwJSAwLDEwMCUgMTAwJSwxMDAlIDEwMCUsMTAwJSAxMDAlKX1cbiAgICA3NSUgIHtjbGlwLXBhdGg6cG9seWdvbig1MCUgNTAlLDAgMCwxMDAlIDAsMTAwJSAxMDAlLDAgMTAwJSwwIDEwMCUpfVxuICAgIDEwMCUge2NsaXAtcGF0aDpwb2x5Z29uKDUwJSA1MCUsMCAwLDEwMCUgMCwxMDAlIDEwMCUsMCAxMDAlLDAgMCl9XG59XG5cbmltZyB7XG4gICAgZmlsdGVyOiB2YXIoLS13aGl0ZS1zdmctZmlsdGVyKTtcbn1cblxuYm9keSB7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbi5ib2R5LXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZTogMmZyIDE0ZnIgMWZyIC8gMWZyIDZmciAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgICAgICAgIFwiLiBoZWFkZXIgLlwiXG4gICAgXCIuIG1haW4tY29udGVudCAuXCJcbiAgICBcIi4gLiAuXCI7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgdmFyKC0tbGlnaHQtYmx1ZSksIHZhcigtLWJsdWUpIDYwJSwgdmFyKC0tZGFyay1ibHVlKSA5MCUpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuaGVhZGVyIHtcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA1MHB4O1xufVxuXG4ubWFpbi1uYXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDIwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNlYXJjaC1iYXItd3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XG4gICAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xuICAgIHBhZGRpbmc6IDRweCAxNnB4O1xuICAgIHRyYW5zaXRpb246IHZhcigtLXNoYWRvdy10cmFuc2l0aW9uKTtcbn1cbi5zZWFyY2gtYmFyLXdyYXBwZXI6aGFzKGlucHV0OmZvY3VzLXZpc2libGUpIHtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1idXR0b24tc2hhZG93KTtcbn1cblxuLnNlYXJjaC1idXR0b24ge1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNlYXJjaC1iYXIge1xuICAgIGZsZXg6IDE7XG59XG5cbi5zZWFyY2gtYmFyIGlucHV0IHtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi51bml0LWJ1dHRvbnMge1xuICAgIGZvbnQtc2l6ZTogMC42NXJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xufVxuXG4udW5pdC1idXR0b25zIGlucHV0IHtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbi51bml0LWJ1dHRvbnMgbGFiZWwge1xuICAgIHdpZHRoOiBtYXgtY29udGVudDtcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG4gICAgdHJhbnNpdGlvbjogdmFyKC0tc2hhZG93LXRyYW5zaXRpb24pO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi51bml0LWJ1dHRvbnMgbGFiZWw6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IHZhcigtLWJ1dHRvbi1zaGFkb3cpO1xufVxuXG4udW5pdC1idXR0b25zIGxhYmVsOmhhcyhpbnB1dDpjaGVja2VkKSB7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tYnV0dG9uLXNoYWRvdyk7XG59XG5cbi5tYWluLWNvbnRlbnQge1xuICAgIGdyaWQtYXJlYTogbWFpbi1jb250ZW50O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMnJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sYXJnZS13ZWF0aGVyLWltZyB7XG4gICAgd2lkdGg6IDc1cHg7XG4gICAgaGVpZ2h0OiA3NXB4O1xufVxuXG4ubGFyZ2UtdGVtcC10ZXh0IHtcbiAgICBmb250LXNpemU6IDVyZW07XG59XG5cbi5tYWluLWNvbnRlbnQgaDEge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tbGFyZ2UtaGVhZGluZy10ZXh0KTtcbn1cblxuLndlYXRoZXItZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMjRweDtcbn1cblxuLmZsZXgtY29sdW1uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiA4cHg7XG59XG4ubWFpbi1jb250ZW50IC5saWdodC1ncmV5IHtcbiAgICBjb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQtd2hpdGUpO1xufVxuXG4uaG91cmx5LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDExcHg7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICBtYXgtd2lkdGg6IDM1MHB4O1xuICAgIHNjcm9sbC1zbmFwLXR5cGU6IHggbWFuZGF0b3J5O1xufVxuXG4uaG91cmx5LXdlYXRoZXItY2VsbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiA1cHg7XG4gICAgc2Nyb2xsLXNuYXAtYWxpZ246IHN0YXJ0O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBoZWlnaHQ6IDZweDtcbiAgICB3aWR0aDogMTJweDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwwLDAsMC4zKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrLXBpZWNlIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsMCwwLDAuNSk7XG59XG5cbi5zdGF0cy1ncmlkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGU6IDFmciAxZnIgMWZyIC8gMWZyIDFmciAxZnI7XG4gICAgZ2FwOiA1JTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zdGF0cy1ncmlkID4gKiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogNHB4O1xufVxuXG4uc3RhdHMtZ3JpZCAuaW5mby1ib3gtd3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubWluaS13ZWF0aGVyLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLnN0YXRzLWdyaWQgLmluZm8tYm94IHtcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5tZWRpdW0tdGV4dCB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG59XG4uc21hbGwtdGV4dCB7XG4gICAgZm9udC1zaXplOiAxLjE3NXJlbTtcbn1cblxuLndpbmQtYXJyb3cge1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbn1cblxuLm1pbmktd2luZC1hcnJvdyB7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xufVxuXG4ubWluaS13ZWF0aGVyLWNvbnRhaW5lciB7XG4gICAgZ2FwOiAxMHB4O1xufVxuLmJvdHRvbS13cmFwcGVyIGgxIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLndlZWtseSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMjBweDtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG59XG5cbi53ZWVrbHkgPiBkaXYge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyIDFmciAxZnI7XG4gICAgZ2FwOiAyMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC53ZWVrbHkgPiBkaXYge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMWZyIDFmcjtcbiAgICAgICAgZ2FwOiA1cHg7XG4gICAgfVxuICAgIC53ZWF0aGVyLWRpdiB7XG4gICAgICAgIGdhcDogMDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG4gICAgLmJvZHktd3JhcHBlciB7XG4gICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIC5zdGF0cy1ncmlkIHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZTogMWZyIDFmciAxZnIgMWZyIC8gMWZyIDFmcjtcbiAgICB9XG59XG5cbi53ZWVrbHkgPiBkaXY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXRyYW5zcGFyZW50LXdoaXRlKTtcbn1cblxuXG4uZGF5ID4gZGl2OmZpcnN0LWNoaWxkIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm1pbmktd2VhdGhlci1pY29uIHtcbiAgICB3aWR0aDogMjVweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG59XG5cbi5zbWFsbC13ZWF0aGVyLWljb24ge1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGhlaWdodDogMzVweDtcbn1cblxuLmNpcmNsZSB7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbn1cblxuXG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsNkNBQTZDO0lBQzdDLHlHQUF5RztJQUN6Ryx1Q0FBdUM7SUFDdkMseUNBQXlDO0FBQzdDO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQjtBQUNKO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1Is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QUNuQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFNBQVM7QUFDYjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsU0FBUztJQUNULGFBQWE7QUFDakI7O0FBRUE7SUFDSTtRQUNJLHNDQUFzQztRQUN0QyxRQUFRO0lBQ1o7SUFDQTtRQUNJLE1BQU07UUFDTixzQkFBc0I7SUFDMUI7SUFDQTtPQUNHLGNBQWM7SUFDakI7SUFDQTtRQUNJLHdDQUF3QztJQUM1QztBQUNKOztBQUVBO0lBQ0ksaURBQWlEO0FBQ3JEOzs7QUFHQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLWxhcmdlLWhlYWRpbmctdGV4dDogMnJlbTtcXG4gICAgLS1ibHVlOiAjMTg0Zjc3O1xcbiAgICAtLWxpZ2h0LWJsdWU6ICMxNzhiYWQ7XFxuICAgIC0tZGFyay1ibHVlOiAjMGUyZDQ0O1xcbiAgICAtLXdoaXRlOiAjZmZmZmZmO1xcbiAgICAtLXRyYW5zcGFyZW50LXdoaXRlOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxuICAgIC0td2hpdGUtc3ZnLWZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgwJSkgaHVlLXJvdGF0ZSg4MmRlZykgYnJpZ2h0bmVzcygxMDUlKSBjb250cmFzdCgxMDUlKTtcXG4gICAgLS1idXR0b24tc2hhZG93OiAwIDAgMCAycHggdmFyKC0td2hpdGUpO1xcbiAgICAtLXNoYWRvdy10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG59XFxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLmxvYWRlciB7XFxuICAgIHdpZHRoOiA0OHB4O1xcbiAgICBoZWlnaHQ6IDQ4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBhbmltYXRpb246IHJvdGF0ZSAxcyBsaW5lYXIgaW5maW5pdGVcXG59XFxuLmxvYWRlcjo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaW5zZXQ6IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgI0ZGRjtcXG4gICAgYW5pbWF0aW9uOiBwcml4Q2xpcEZpeCAycyBsaW5lYXIgaW5maW5pdGUgO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XFxuICAgIDEwMCUgICB7dHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKX1cXG59XFxuXFxuQGtleWZyYW1lcyBwcml4Q2xpcEZpeCB7XFxuICAgIDAlICAge2NsaXAtcGF0aDpwb2x5Z29uKDUwJSA1MCUsMCAwLDAgMCwwIDAsMCAwLDAgMCl9XFxuICAgIDI1JSAge2NsaXAtcGF0aDpwb2x5Z29uKDUwJSA1MCUsMCAwLDEwMCUgMCwxMDAlIDAsMTAwJSAwLDEwMCUgMCl9XFxuICAgIDUwJSAge2NsaXAtcGF0aDpwb2x5Z29uKDUwJSA1MCUsMCAwLDEwMCUgMCwxMDAlIDEwMCUsMTAwJSAxMDAlLDEwMCUgMTAwJSl9XFxuICAgIDc1JSAge2NsaXAtcGF0aDpwb2x5Z29uKDUwJSA1MCUsMCAwLDEwMCUgMCwxMDAlIDEwMCUsMCAxMDAlLDAgMTAwJSl9XFxuICAgIDEwMCUge2NsaXAtcGF0aDpwb2x5Z29uKDUwJSA1MCUsMCAwLDEwMCUgMCwxMDAlIDEwMCUsMCAxMDAlLDAgMCl9XFxufVxcblxcbmltZyB7XFxuICAgIGZpbHRlcjogdmFyKC0td2hpdGUtc3ZnLWZpbHRlcik7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmJvZHktd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IDJmciAxNGZyIDFmciAvIDFmciA2ZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgICAgIFxcXCIuIGhlYWRlciAuXFxcIlxcbiAgICBcXFwiLiBtYWluLWNvbnRlbnQgLlxcXCJcXG4gICAgXFxcIi4gLiAuXFxcIjtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgdmFyKC0tbGlnaHQtYmx1ZSksIHZhcigtLWJsdWUpIDYwJSwgdmFyKC0tZGFyay1ibHVlKSA5MCUpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA1MHB4O1xcbn1cXG5cXG4ubWFpbi1uYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc2VhcmNoLWJhci13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcXG4gICAgcGFkZGluZzogNHB4IDE2cHg7XFxuICAgIHRyYW5zaXRpb246IHZhcigtLXNoYWRvdy10cmFuc2l0aW9uKTtcXG59XFxuLnNlYXJjaC1iYXItd3JhcHBlcjpoYXMoaW5wdXQ6Zm9jdXMtdmlzaWJsZSkge1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1idXR0b24tc2hhZG93KTtcXG59XFxuXFxuLnNlYXJjaC1idXR0b24ge1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zZWFyY2gtYmFyIHtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLnNlYXJjaC1iYXIgaW5wdXQge1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi51bml0LWJ1dHRvbnMge1xcbiAgICBmb250LXNpemU6IDAuNjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi51bml0LWJ1dHRvbnMgaW5wdXQge1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4udW5pdC1idXR0b25zIGxhYmVsIHtcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XFxuICAgIHRyYW5zaXRpb246IHZhcigtLXNoYWRvdy10cmFuc2l0aW9uKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4udW5pdC1idXR0b25zIGxhYmVsOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYnV0dG9uLXNoYWRvdyk7XFxufVxcblxcbi51bml0LWJ1dHRvbnMgbGFiZWw6aGFzKGlucHV0OmNoZWNrZWQpIHtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYnV0dG9uLXNoYWRvdyk7XFxufVxcblxcbi5tYWluLWNvbnRlbnQge1xcbiAgICBncmlkLWFyZWE6IG1haW4tY29udGVudDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAycmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5sYXJnZS13ZWF0aGVyLWltZyB7XFxuICAgIHdpZHRoOiA3NXB4O1xcbiAgICBoZWlnaHQ6IDc1cHg7XFxufVxcblxcbi5sYXJnZS10ZW1wLXRleHQge1xcbiAgICBmb250LXNpemU6IDVyZW07XFxufVxcblxcbi5tYWluLWNvbnRlbnQgaDEge1xcbiAgICBmb250LXNpemU6IHZhcigtLWxhcmdlLWhlYWRpbmctdGV4dCk7XFxufVxcblxcbi53ZWF0aGVyLWRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjRweDtcXG59XFxuXFxuLmZsZXgtY29sdW1uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA4cHg7XFxufVxcbi5tYWluLWNvbnRlbnQgLmxpZ2h0LWdyZXkge1xcbiAgICBjb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQtd2hpdGUpO1xcbn1cXG5cXG4uaG91cmx5LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTFweDtcXG4gICAgb3ZlcmZsb3cteDogYXV0bztcXG4gICAgbWF4LXdpZHRoOiAzNTBweDtcXG4gICAgc2Nyb2xsLXNuYXAtdHlwZTogeCBtYW5kYXRvcnk7XFxufVxcblxcbi5ob3VybHktd2VhdGhlci1jZWxsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbiAgICBzY3JvbGwtc25hcC1hbGlnbjogc3RhcnQ7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICBoZWlnaHQ6IDZweDtcXG4gICAgd2lkdGg6IDEycHg7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwwLDAsMC4zKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2stcGllY2Uge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwwLDAsMC41KTtcXG59XFxuXFxuLnN0YXRzLWdyaWQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgMWZyIDFmciAvIDFmciAxZnIgMWZyO1xcbiAgICBnYXA6IDUlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5zdGF0cy1ncmlkID4gKiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNHB4O1xcbn1cXG5cXG4uc3RhdHMtZ3JpZCAuaW5mby1ib3gtd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWluaS13ZWF0aGVyLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5zdGF0cy1ncmlkIC5pbmZvLWJveCB7XFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tZWRpdW0tdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG4uc21hbGwtdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMS4xNzVyZW07XFxufVxcblxcbi53aW5kLWFycm93IHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG59XFxuXFxuLm1pbmktd2luZC1hcnJvdyB7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxufVxcblxcbi5taW5pLXdlYXRoZXItY29udGFpbmVyIHtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG4uYm90dG9tLXdyYXBwZXIgaDEge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi53ZWVrbHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG59XFxuXFxuLndlZWtseSA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmciAxZnIgMWZyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICAud2Vla2x5ID4gZGl2IHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmciAxZnIgMWZyO1xcbiAgICAgICAgZ2FwOiA1cHg7XFxuICAgIH1cXG4gICAgLndlYXRoZXItZGl2IHtcXG4gICAgICAgIGdhcDogMDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG4gICAgLmJvZHktd3JhcHBlciB7XFxuICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB9XFxuICAgIC5zdGF0cy1ncmlkIHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGU6IDFmciAxZnIgMWZyIDFmciAvIDFmciAxZnI7XFxuICAgIH1cXG59XFxuXFxuLndlZWtseSA+IGRpdjpub3QoOmxhc3QtY2hpbGQpIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXRyYW5zcGFyZW50LXdoaXRlKTtcXG59XFxuXFxuXFxuLmRheSA+IGRpdjpmaXJzdC1jaGlsZCB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubWluaS13ZWF0aGVyLWljb24ge1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbn1cXG5cXG4uc21hbGwtd2VhdGhlci1pY29uIHtcXG4gICAgd2lkdGg6IDM1cHg7XFxuICAgIGhlaWdodDogMzVweDtcXG59XFxuXFxuLmNpcmNsZSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxufVxcblxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgYXBpID0gKGxvY2FsZXMgPT4ge1xuICAgIGNvbnN0IGFwaUtleSA9ICdKU044M1NXVzc3OTg5UzZaRTQzU0VTTVgyJztcbiAgICBsZXQgY3VycmVudExvY2F0aW9uO1xuXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0TG9jYXRpb25EYXRhKG9wdGlvbnMsIHVuaXQgPSAnbWV0cmljJykge1xuICAgICAgICBpZiAoJ2xhdGl0dWRlJyBpbiBvcHRpb25zICYmICdsb25naXR1ZGUnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2F0aW9uUmVxdWVzdCA9IG5ldyBSZXF1ZXN0KGBodHRwczovL2FwaS5iaWdkYXRhY2xvdWQubmV0L2RhdGEvcmV2ZXJzZS1nZW9jb2RlLWNsaWVudD9sYXRpdHVkZT0ke29wdGlvbnMubGF0aXR1ZGV9JmxvbmdpdHVkZT0ke29wdGlvbnMubG9uZ2l0dWRlfSZsb2NhbGl0eUxhbmd1YWdlPWVuYCk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2F0aW9uUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChsb2NhdGlvblJlcXVlc3QpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2F0aW9uRGF0YSA9IGF3YWl0IGxvY2F0aW9uUmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgIG9wdGlvbnMubG9jYXRpb24gPSBgJHtsb2NhdGlvbkRhdGEuY2l0eX0sICR7bG9jYXRpb25EYXRhLmNvdW50cnlDb2RlfWA7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHJldHVybiB7Y29kZTogZXJyb3IubmFtZSwgbWVzc2FnZTogZXJyb3IubWVzc2FnZX07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudExvY2F0aW9uID0gb3B0aW9ucy5sb2NhdGlvbjtcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KGBodHRwczovL3dlYXRoZXIudmlzdWFsY3Jvc3NpbmcuY29tL1Zpc3VhbENyb3NzaW5nV2ViU2VydmljZXMvcmVzdC9zZXJ2aWNlcy90aW1lbGluZS8ke29wdGlvbnMubG9jYXRpb259P3VuaXRHcm91cD0ke3VuaXR9JmtleT0ke2FwaUtleX0mY29udGVudFR5cGU9anNvbiZsYW5nPWVuYCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHt9LFxuICAgICAgICB9KTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocmVxdWVzdCk7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID49IDQwMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IHRleHRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb2Nlc3NEYXRhKGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIHtjb2RlOiBlcnJvci5uYW1lLCBtZXNzYWdlOiBlcnJvci5tZXNzYWdlfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByb2Nlc3NEYXRhKGRhdGEpIHtcbiAgICAgICAgY29uc3QgY3VycmVudFRpbWUgPSBuZXcgRGF0ZShuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIiwge3RpbWVab25lOiBgJHtkYXRhLnRpbWV6b25lfWB9KSk7XG4gICAgICAgIGNvbnN0IGxvY2F0aW9uID0gZGF0YS5yZXNvbHZlZEFkZHJlc3M7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZGF0YS5kZXNjcmlwdGlvbjtcblxuICAgICAgICBjb25zdCBkYXlzRGF0YSA9IGRhdGEuZGF5cztcblxuICAgICAgICBjb25zdCBkYXlzID0gW107XG5cbiAgICAgICAgY29uc3QgdG9kYXlEYXRhID0gZGF5c0RhdGFbMF07XG4gICAgICAgIGRheXNbMF0gPSB7XG4gICAgICAgICAgICBjb25kaXRpb25zOiB0b2RheURhdGEuY29uZGl0aW9ucyxcbiAgICAgICAgICAgIHRlbXA6IE1hdGgucm91bmQodG9kYXlEYXRhLnRlbXApLFxuICAgICAgICAgICAgd2luZGRpcjogTWF0aC5yb3VuZCh0b2RheURhdGEud2luZGRpciksXG4gICAgICAgICAgICBmZWVsc2xpa2U6IE1hdGgucm91bmQodG9kYXlEYXRhLmZlZWxzbGlrZSksXG4gICAgICAgICAgICBpY29uOiB0b2RheURhdGEuaWNvbixcbiAgICAgICAgICAgIHN0YXRzOiB7XG4gICAgICAgICAgICAgICAgd2luZHNwZWVkOiBNYXRoLnJvdW5kKHRvZGF5RGF0YS53aW5kc3BlZWQpLFxuICAgICAgICAgICAgICAgIGh1bWlkaXR5OiBNYXRoLnJvdW5kKHRvZGF5RGF0YS5odW1pZGl0eSksXG4gICAgICAgICAgICAgICAgdXZpbmRleDogdG9kYXlEYXRhLnV2aW5kZXgsXG4gICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogTWF0aC5yb3VuZCh0b2RheURhdGEudmlzaWJpbGl0eSksXG4gICAgICAgICAgICAgICAgY2xvdWRjb3ZlcjogTWF0aC5yb3VuZCh0b2RheURhdGEuY2xvdWRjb3ZlciksXG4gICAgICAgICAgICAgICAgcHJlY2lwcHJvYjogTWF0aC5yb3VuZCh0b2RheURhdGEucHJlY2lwcHJvYiksXG4gICAgICAgICAgICAgICAgc3VucmlzZTogdG9kYXlEYXRhLnN1bnJpc2Uuc2xpY2UoMCwgLTMpLFxuICAgICAgICAgICAgICAgIHN1bnNldDogdG9kYXlEYXRhLnN1bnNldC5zbGljZSgwLCAtMyksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaG91cnM6IHRvZGF5RGF0YS5ob3VycyxcbiAgICAgICAgfTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA3OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGRheURhdGEgPSBkYXlzRGF0YVtpXTtcbiAgICAgICAgICAgIGRheXNbaV0gPSB7XG4gICAgICAgICAgICAgICAgZGF0ZXRpbWU6IG5ldyBEYXRlKGRheURhdGEuZGF0ZXRpbWUpLFxuICAgICAgICAgICAgICAgIGljb246IGRheURhdGEuaWNvbixcbiAgICAgICAgICAgICAgICB0ZW1wTWluOiBNYXRoLnJvdW5kKGRheURhdGEudGVtcG1pbiksXG4gICAgICAgICAgICAgICAgdGVtcE1heDogTWF0aC5yb3VuZChkYXlEYXRhLnRlbXBtYXgpLFxuICAgICAgICAgICAgICAgIHdpbmRzcGVlZDogTWF0aC5yb3VuZChkYXlEYXRhLndpbmRzcGVlZCksXG4gICAgICAgICAgICAgICAgd2luZGRpcjogTWF0aC5yb3VuZChkYXlEYXRhLndpbmRkaXIpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChpID09PSAxKSB7XG4gICAgICAgICAgICAgICAgZGF5c1tpXS5ob3VycyA9IGRheURhdGEuaG91cnM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGN1cnJlbnRUaW1lLFxuICAgICAgICAgICAgbG9jYXRpb24sXG4gICAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGRheXMsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Q3VycmVudExvY2F0aW9uKCkge1xuICAgICAgICByZXR1cm4gY3VycmVudExvY2F0aW9uO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldExvY2F0aW9uRGF0YSxcbiAgICAgICAgZ2V0Q3VycmVudExvY2F0aW9uXG4gICAgfVxufSkoKTtcblxuXG5leHBvcnQgZGVmYXVsdCBhcGkiLCJpbXBvcnQgaW1hZ2VzIGZyb20gJy4vaW1hZ2VzJ1xuXG5jb25zdCBkb20gPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRlbnQnKTtcbiAgICBsZXQgdW5pdHM7XG5cbiAgICBmdW5jdGlvbiByZW5kZXJUb2RheSh0b2RheSwgY3VycmVudFRpbWUsIGxvY2F0aW9uLCBkZXNjcmlwdGlvbikge1xuICAgICAgICBjb25zdCBoZWFkaW5nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gbG9jYXRpb247XG4gICAgICAgIGNvbnN0IGRhdGVIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgZGF0ZUhlYWRpbmcuY2xhc3NOYW1lID0gJ2xpZ2h0LWdyZXkgc21hbGwtdGV4dCc7XG4gICAgICAgIGRhdGVIZWFkaW5nLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFRpbWUudG9EYXRlU3RyaW5nKCl9IHwgJHtjdXJyZW50VGltZS5nZXRIb3VycygpIDwgMTAgPyAnMCcgKyBjdXJyZW50VGltZS5nZXRIb3VycygpIDogY3VycmVudFRpbWUuZ2V0SG91cnMoKX06JHtjdXJyZW50VGltZS5nZXRNaW51dGVzKCkgPCAxMCA/ICcwJyArIGN1cnJlbnRUaW1lLmdldE1pbnV0ZXMoKSA6IGN1cnJlbnRUaW1lLmdldE1pbnV0ZXMoKX1gO1xuICAgICAgICBoZWFkaW5nRGl2LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgICAgICBoZWFkaW5nRGl2LmFwcGVuZENoaWxkKGRhdGVIZWFkaW5nKTtcblxuICAgICAgICBjb25zdCB3ZWF0aGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgd2VhdGhlckRpdi5jbGFzc05hbWUgPSAnd2VhdGhlci1kaXYnO1xuICAgICAgICBjb25zdCB0ZW1wQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHdlYXRoZXJJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB3ZWF0aGVySW1hZ2Uuc3JjID0gaW1hZ2VzLmdldCh0b2RheS5pY29uKTtcbiAgICAgICAgd2VhdGhlckltYWdlLmFsdCA9IHRvZGF5Lmljb247XG4gICAgICAgIHdlYXRoZXJJbWFnZS5jbGFzc05hbWUgPSAnbGFyZ2Utd2VhdGhlci1pbWcnO1xuICAgICAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICB0ZXh0LmNsYXNzTmFtZSA9ICdsYXJnZS10ZW1wLXRleHQnO1xuICAgICAgICB0ZXh0LnRleHRDb250ZW50ID0gYCR7dG9kYXkudGVtcH1cXHhCMCR7Zm9ybWF0VGVtcFVuaXRzKCl9YDtcbiAgICAgICAgdGVtcENvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWF0aGVySW1hZ2UpO1xuICAgICAgICB0ZW1wQ29udGFpbmVyLmFwcGVuZENoaWxkKHRleHQpO1xuXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRlc2NyaXB0aW9uRGl2LmNsYXNzTmFtZSA9ICdmbGV4LWNvbHVtbic7XG4gICAgICAgIGNvbnN0IHNtYWxsSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgc21hbGxIZWFkZXIuY2xhc3NOYW1lID0gJ21lZGl1bS10ZXh0JztcbiAgICAgICAgc21hbGxIZWFkZXIudGV4dENvbnRlbnQgPSBgJHt0b2RheS5jb25kaXRpb25zfWA7XG4gICAgICAgIGNvbnN0IGZlZWxzTGlrZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGZlZWxzTGlrZVRleHQuY2xhc3NOYW1lID0gJ2xpZ2h0LWdyZXkgc21hbGwtdGV4dCc7XG4gICAgICAgIGZlZWxzTGlrZVRleHQudGV4dENvbnRlbnQgPSBgRmVlbHMgbGlrZSAke3RvZGF5LmZlZWxzbGlrZX1cXHhCMCR7Zm9ybWF0VGVtcFVuaXRzKCl9YDtcbiAgICAgICAgZGVzY3JpcHRpb25EaXYuYXBwZW5kQ2hpbGQoc21hbGxIZWFkZXIpO1xuICAgICAgICBkZXNjcmlwdGlvbkRpdi5hcHBlbmRDaGlsZChmZWVsc0xpa2VUZXh0KTtcblxuICAgICAgICB3ZWF0aGVyRGl2LmFwcGVuZENoaWxkKHRlbXBDb250YWluZXIpO1xuICAgICAgICB3ZWF0aGVyRGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRGl2KTtcblxuICAgICAgICBjb25zdCBzdGF0c0dyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc3RhdHNHcmlkLmNsYXNzTmFtZSA9ICdzdGF0cy1ncmlkJztcblxuICAgICAgICBmb3IgKGxldCBba2V5LCB2YWxdIG9mIE9iamVjdC5lbnRyaWVzKHRvZGF5LnN0YXRzKSkge1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGZvcm1hdERhdGFOYW1lKGtleSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgICAgICAgICBjb25zdCBuYW1lVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgbmFtZVRhZy5jbGFzc05hbWUgPSAnbGlnaHQtZ3JleSBzbWFsbC10ZXh0JztcbiAgICAgICAgICAgIG5hbWVUYWcudGV4dENvbnRlbnQgPSBuYW1lO1xuXG4gICAgICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKG5hbWVUYWcpO1xuXG4gICAgICAgICAgICBjb25zdCBpbmZvQm94V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgaW5mb0JveFdyYXBwZXIuY2xhc3NOYW1lID0gJ2luZm8tYm94LXdyYXBwZXInO1xuXG4gICAgICAgICAgICBjb25zdCBpbmZvQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgaW5mb0JveC5jbGFzc05hbWUgPSAnbWVkaXVtLXRleHQgaW5mby1ib3gnO1xuICAgICAgICAgICAgaW5mb0JveC50ZXh0Q29udGVudCA9IGAke3ZhbH0ke2dldFVuaXRzKGtleSkgPyBnZXRVbml0cyhrZXkpIDogJyd9YDtcblxuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ3V2aW5kZXgnKSB7XG4gICAgICAgICAgICAgICAgaW5mb0JveC5jbGFzc0xpc3QuYWRkKCdjaXJjbGUnKTtcbiAgICAgICAgICAgICAgICBpbmZvQm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGAke2dldFV2Q29sb3VyKHZhbCl9YDtcbiAgICAgICAgICAgICAgICBpbmZvQm94LnN0eWxlLndpZHRoID0gJzM1cHgnO1xuICAgICAgICAgICAgICAgIGluZm9Cb3guc3R5bGUuaGVpZ2h0ID0gJzM1cHgnO1xuICAgICAgICAgICAgICAgIGluZm9Cb3guc3R5bGUuZm9udFdlaWdodCA9ICdib2xkJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ3dpbmRzcGVlZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB3aW5kQXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgICAgICB3aW5kQXJyb3cuc3JjID0gaW1hZ2VzLmdldCgnYXJyb3ctdXAtdGhpbicpO1xuICAgICAgICAgICAgICAgIHdpbmRBcnJvdy5hbHQgPSAnd2luZCBkaXJlY3Rpb24nO1xuICAgICAgICAgICAgICAgIHdpbmRBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlKCR7dG9kYXkud2luZGRpcn1kZWcpYDtcbiAgICAgICAgICAgICAgICB3aW5kQXJyb3cuY2xhc3NOYW1lID0gJ3dpbmQtYXJyb3cnO1xuXG4gICAgICAgICAgICAgICAgaW5mb0JveFdyYXBwZXIuYXBwZW5kQ2hpbGQod2luZEFycm93KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW5mb0JveFdyYXBwZXIuYXBwZW5kQ2hpbGQoaW5mb0JveCk7XG4gICAgICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGluZm9Cb3hXcmFwcGVyKTtcblxuICAgICAgICAgICAgc3RhdHNHcmlkLmFwcGVuZENoaWxkKHdyYXBwZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRpbmdEaXYpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQod2VhdGhlckRpdik7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzdGF0c0dyaWQpO1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gcmVuZGVySG91cmx5KHRvZGF5SG91cnMsIHRvbW9ycm93SG91cnMsIGN1cnJlbnRUaW1lKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRIb3VyID0gY3VycmVudFRpbWUuZ2V0SG91cnMoKTtcblxuICAgICAgICBjb25zdCB3ZWF0aGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHdlYXRoZXJDb250YWluZXIuY2xhc3NOYW1lID0gJ2hvdXJseS1jb250YWluZXInO1xuXG4gICAgICAgIGxldCBjb3VudCA9IDA7XG5cbiAgICAgICAgZm9yIChjb25zdCBob3VyIG9mIHRvZGF5SG91cnMpIHtcbiAgICAgICAgICAgIGNvbnN0IHRpbWUgPSBwYXJzZUludChob3VyLmRhdGV0aW1lLnNsaWNlKDAsIDIpKTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50SG91ciA+IHRpbWUpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFkZENlbGwoaG91cik7XG4gICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICB3aGlsZSAoY291bnQgPCAyNCkge1xuICAgICAgICAgICAgY29uc3QgaG91ciA9IHRvbW9ycm93SG91cnNbaSsrXTtcbiAgICAgICAgICAgIGFkZENlbGwoaG91cik7XG4gICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gYWRkQ2VsbChob3VyKSB7XG4gICAgICAgICAgICBjb25zdCB3ZWF0aGVyQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgd2VhdGhlckNlbGwuY2xhc3NOYW1lID0gJ2hvdXJseS13ZWF0aGVyLWNlbGwnO1xuXG4gICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWRUaW1lID0gaG91ci5kYXRldGltZS5zbGljZSgwLCA1KTtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgdGltZVNwYW4udGV4dENvbnRlbnQgPSBmb3JtYXR0ZWRUaW1lO1xuICAgICAgICAgICAgdGltZVNwYW4uY2xhc3NOYW1lID0gJ2xpZ2h0LWdyZXknO1xuICAgICAgICAgICAgdGltZVNwYW4uc3R5bGUubWFyZ2luQm90dG9tID0gJzIwcHgnO1xuXG4gICAgICAgICAgICBjb25zdCB3ZWF0aGVySW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIHdlYXRoZXJJbWFnZS5jbGFzc05hbWUgPSAnc21hbGwtd2VhdGhlci1pY29uJztcbiAgICAgICAgICAgIHdlYXRoZXJJbWFnZS5zcmMgPSBpbWFnZXMuZ2V0KGhvdXIuaWNvbik7XG4gICAgICAgICAgICB3ZWF0aGVySW1hZ2UuYWx0ID0gJ3dlYXRoZXItaW1hZ2UnO1xuXG4gICAgICAgICAgICBjb25zdCBkZWdyZWVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgZGVncmVlU3Bhbi50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoaG91ci50ZW1wKX1cXHhCMCR7Zm9ybWF0VGVtcFVuaXRzKCl9YDtcblxuICAgICAgICAgICAgd2VhdGhlckNlbGwuYXBwZW5kQ2hpbGQodGltZVNwYW4pO1xuICAgICAgICAgICAgd2VhdGhlckNlbGwuYXBwZW5kQ2hpbGQod2VhdGhlckltYWdlKTtcbiAgICAgICAgICAgIHdlYXRoZXJDZWxsLmFwcGVuZENoaWxkKGRlZ3JlZVNwYW4pO1xuXG4gICAgICAgICAgICB3ZWF0aGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHdlYXRoZXJDZWxsKVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHdlYXRoZXJDb250YWluZXIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZvcm1hdFRlbXBVbml0cygpIHtcbiAgICAgICAgc3dpdGNoICh1bml0cykge1xuICAgICAgICAgICAgY2FzZSAnbWV0cmljJzpcbiAgICAgICAgICAgIGNhc2UgJ3VrJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0MnO1xuICAgICAgICAgICAgY2FzZSAndXMnOlxuICAgICAgICAgICAgICAgIHJldHVybiAnRic7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRVbml0cyhuYW1lKSB7XG4gICAgICAgIGxldCByZXN1bHQ7XG4gICAgICAgIHN3aXRjaCAobmFtZSkge1xuICAgICAgICAgICAgY2FzZSAnd2luZHNwZWVkJzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB1bml0cyA9PT0gJ21ldHJpYycgPyAna20vaCcgOiAnbXBoJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2h1bWlkaXR5JzpcbiAgICAgICAgICAgIGNhc2UgJ2Nsb3VkY292ZXInOlxuICAgICAgICAgICAgY2FzZSAncHJlY2lwcHJvYic6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gJyUnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndmlzaWJpbGl0eSc6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdW5pdHMgPT09ICdtZXRyaWMnID8gJ2ttJyA6ICdtaSc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmb3JtYXREYXRhTmFtZShuYW1lKSB7XG4gICAgICAgIGxldCByZXN1bHQ7XG4gICAgICAgIHN3aXRjaCAobmFtZSkge1xuICAgICAgICAgICAgY2FzZSAnd2luZHNwZWVkJzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSAnV2luZCc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdodW1pZGl0eSc6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gJ0h1bWlkaXR5JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3V2aW5kZXgnOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9ICdVViBJbmRleCc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd2aXNpYmlsaXR5JzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSAnVmlzaWJpbGl0eSc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjbG91ZGNvdmVyJzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSAnQ2xvdWRjb3Zlcic7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdwcmVjaXBwcm9iJzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSAnQ2hhbmNlIG9mIHJhaW4nO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc3VucmlzZSc6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gJ1N1bnJpc2UnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc3Vuc2V0JzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSAnU3Vuc2V0JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlcldlZWtseShkYXlzKSB7XG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgd3JhcHBlci5jbGFzc05hbWUgPSAnYm90dG9tLXdyYXBwZXInO1xuICAgICAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgaGVhZGluZy50ZXh0Q29udGVudCA9ICdXZWVrbHkgRm9yZWNhc3QnO1xuXG4gICAgICAgIGNvbnN0IHdlZWtseSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB3ZWVrbHkuY2xhc3NOYW1lID0gJ3dlZWtseSc7XG5cbiAgICAgICAgZm9yIChjb25zdCBkYXkgb2YgZGF5cykge1xuICAgICAgICAgICAgY29uc3QgZGF5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkYXlDb250YWluZXIuY2xhc3NOYW1lID0gJ2RheSc7XG5cbiAgICAgICAgICAgIGNvbnN0IGRheU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgbGV0IG1lZGlhUXVlcnlMaXN0ID0gd2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiA2MDBweClcIik7XG5cbiAgICAgICAgICAgIGlmIChtZWRpYVF1ZXJ5TGlzdC5tYXRjaGVzKSB7XG4gICAgICAgICAgICAgICAgZGF5TmFtZS50ZXh0Q29udGVudCA9IGdldERheU9mV2VlayhkYXkuZGF0ZXRpbWUsIGZhbHNlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGF5TmFtZS50ZXh0Q29udGVudCA9IGdldERheU9mV2VlayhkYXkuZGF0ZXRpbWUsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtZWRpYVF1ZXJ5TGlzdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZGF5TmFtZS50ZXh0Q29udGVudCA9IGRheU5hbWUudGV4dENvbnRlbnQubGVuZ3RoID4gMyA/IGdldERheU9mV2VlayhkYXkuZGF0ZXRpbWUsIGZhbHNlKSA6IGdldERheU9mV2VlayhkYXkuZGF0ZXRpbWUsIHRydWUpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IG1pbmlXZWF0aGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBtaW5pV2VhdGhlckNvbnRhaW5lci5jbGFzc05hbWUgPSAnbWluaS13ZWF0aGVyLWNvbnRhaW5lcic7XG5cbiAgICAgICAgICAgIGNvbnN0IHdlYXRoZXJJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgd2VhdGhlckltYWdlLnNyYyA9IGltYWdlcy5nZXQoZGF5Lmljb24pO1xuICAgICAgICAgICAgd2VhdGhlckltYWdlLmFsdCA9ICd3ZWF0aGVyLWltYWdlJztcbiAgICAgICAgICAgIHdlYXRoZXJJbWFnZS5jbGFzc05hbWUgPSAnbWluaS13ZWF0aGVyLWljb24nO1xuICAgICAgICAgICAgY29uc3QgdGVtcFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICB0ZW1wVGV4dC50ZXh0Q29udGVudCA9IGAke2RheS50ZW1wTWF4fVxceEIwJHtmb3JtYXRUZW1wVW5pdHMoKX1gO1xuXG4gICAgICAgICAgICBtaW5pV2VhdGhlckNvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWF0aGVySW1hZ2UpO1xuICAgICAgICAgICAgbWluaVdlYXRoZXJDb250YWluZXIuYXBwZW5kQ2hpbGQodGVtcFRleHQpO1xuXG4gICAgICAgICAgICBjb25zdCBtaW5UZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgbWluVGVtcC50ZXh0Q29udGVudCA9IGAke2RheS50ZW1wTWlufVxceEIwJHtmb3JtYXRUZW1wVW5pdHMoKX1gO1xuICAgICAgICAgICAgbWluVGVtcC5jbGFzc05hbWUgPSAnbGlnaHQtZ3JleSc7XG5cbiAgICAgICAgICAgIGNvbnN0IHdpbmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHdpbmRDb250YWluZXIuY2xhc3NOYW1lID0gJ3dpbmQtY29udGFpbmVyJztcblxuICAgICAgICAgICAgY29uc3Qgd2luZEFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICB3aW5kQXJyb3cuc3JjID0gaW1hZ2VzLmdldCgnYXJyb3ctdXAtdGhpbicpO1xuICAgICAgICAgICAgd2luZEFycm93LmFsdCA9ICd3aW5kIGRpcmVjdGlvbic7XG4gICAgICAgICAgICB3aW5kQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZSgke2RheS53aW5kZGlyfWRlZylgO1xuICAgICAgICAgICAgd2luZEFycm93LmNsYXNzTmFtZSA9ICdtaW5pLXdpbmQtYXJyb3cnO1xuXG4gICAgICAgICAgICBjb25zdCB3aW5kU3BlZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICB3aW5kU3BlZWQudGV4dENvbnRlbnQgPSBgJHtkYXkud2luZHNwZWVkfWA7XG5cbiAgICAgICAgICAgIHdpbmRDb250YWluZXIuYXBwZW5kQ2hpbGQod2luZEFycm93KTtcbiAgICAgICAgICAgIHdpbmRDb250YWluZXIuYXBwZW5kQ2hpbGQod2luZFNwZWVkKTtcblxuICAgICAgICAgICAgZGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKGRheU5hbWUpO1xuICAgICAgICAgICAgZGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKG1pbmlXZWF0aGVyQ29udGFpbmVyKTtcbiAgICAgICAgICAgIGRheUNvbnRhaW5lci5hcHBlbmRDaGlsZChtaW5UZW1wKTtcbiAgICAgICAgICAgIGRheUNvbnRhaW5lci5hcHBlbmRDaGlsZCh3aW5kQ29udGFpbmVyKTtcblxuICAgICAgICAgICAgd2Vla2x5LmFwcGVuZENoaWxkKGRheUNvbnRhaW5lcik7XG4gICAgICAgIH1cblxuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHdlZWtseSk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRVdkNvbG91cih1dmluZGV4KSB7XG4gICAgICAgIGlmICh1dmluZGV4ID49IDExKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3Zpb2xldCc7XG4gICAgICAgIH0gZWxzZSBpZiAodXZpbmRleCA+PSA4KSB7XG4gICAgICAgICAgICByZXR1cm4gJ3JlZCc7XG4gICAgICAgIH0gZWxzZSBpZiAodXZpbmRleCA+PSA2KSB7XG4gICAgICAgICAgICByZXR1cm4gJ29yYW5nZSc7XG4gICAgICAgIH0gZWxzZSBpZiAodXZpbmRleCA+PSAzKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2dvbGQnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICdncmVlbic7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXREYXlPZldlZWsoZGF0ZSwgbG9uZykge1xuICAgICAgICBzd2l0Y2ggKGRhdGUuZ2V0RGF5KCkpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gbG9uZyA/ICdTdW5kYXknIDogJ1N1bic7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxvbmcgPyAnTW9uZGF5JyA6ICdNb24nO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHJldHVybiBsb25nID8gJ1R1ZXNkYXknIDogJ1R1ZSc7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxvbmcgPyAnV2VkbmVzZGF5JyA6ICdXZWQnO1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIHJldHVybiBsb25nID8gJ1RodXJzZGF5JyA6ICdUaHUnO1xuICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgIHJldHVybiBsb25nID8gJ0ZyaWRheScgOiAnRnJpJztcbiAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbG9uZyA/ICdTYXR1cmRheScgOiAnU2F0JztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlckNvbnRlbnQoZGF0YSwgdW5pdCkge1xuICAgICAgICB3aGlsZSAoY29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIubGFzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0YS5lcnJvcikge1xuICAgICAgICAgICAgYWxlcnQoZGF0YS5lcnJvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB1bml0cyA9IHVuaXQ7XG4gICAgICAgICAgICByZW5kZXJUb2RheShkYXRhLmRheXNbMF0sIGRhdGEuY3VycmVudFRpbWUsIGRhdGEubG9jYXRpb24sIGRhdGEuZGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgcmVuZGVySG91cmx5KGRhdGEuZGF5c1swXS5ob3VycywgZGF0YS5kYXlzWzFdLmhvdXJzLCBkYXRhLmN1cnJlbnRUaW1lKTtcbiAgICAgICAgICAgIHJlbmRlcldlZWtseShkYXRhLmRheXMuc3BsaWNlKDEpLCBkYXRhLmRheXMubGVuZ3RoIC0gMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkKCkge1xuICAgICAgICB3aGlsZSAoY29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIubGFzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBsb2FkaW5nV2hlZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGxvYWRpbmdXaGVlbC5jbGFzc05hbWUgPSAnbG9hZGVyJztcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxvYWRpbmdXaGVlbCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVuZGVyQ29udGVudCxcbiAgICAgICAgbG9hZCxcbiAgICB9XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBkb207IiwiaW1wb3J0IGFwaSBmcm9tICcuL2FwaSc7XG5pbXBvcnQgZG9tIGZyb20gJy4vZG9tJztcblxuY29uc3QgaGFuZGxlcnMgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1iYXIgaW5wdXQnKTtcbiAgICBjb25zdCB0b3BOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1uYXYnKTtcbiAgICBsZXQgY3VycmVudExvY2F0aW9uID0gJ0VkaW5idXJnaCc7XG5cbiAgICBhc3luYyBmdW5jdGlvbiBsb2FkKG9wdGlvbnMgPSB7bG9jYXRpb246ICdFZGluYnVyZ2gnfSwgdW5pdHMgPSBcIm1ldHJpY1wiKSB7XG4gICAgICAgIGRvbS5sb2FkKCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBhcGkuZ2V0TG9jYXRpb25EYXRhKG9wdGlvbnMsIHVuaXRzKTtcbiAgICAgICAgY3VycmVudExvY2F0aW9uID0gYXBpLmdldEN1cnJlbnRMb2NhdGlvbigpO1xuICAgICAgICBkb20ucmVuZGVyQ29udGVudChkYXRhLCB1bml0cyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbmF2SGFuZGxlcigpIHtcbiAgICAgICAgbGV0IHVuaXRzID0gJ21ldHJpYyc7XG4gICAgICAgIHRvcE5hdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgICAgIHN3aXRjaCAodGFyZ2V0LmlkKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnc2VhcmNoJzpcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudExvY2F0aW9uID0gc2VhcmNoSW5wdXQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaElucHV0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IGxvYWQoe2xvY2F0aW9uOiBjdXJyZW50TG9jYXRpb259LCB1bml0cyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbbmFtZT1cInVuaXRcIl0nKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGFzeW5jIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgdW5pdHMgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgICAgICBhd2FpdCBsb2FkKHtsb2NhdGlvbjogY3VycmVudExvY2F0aW9ufSwgdW5pdHMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGtleUhhbmRsZXIoKSB7XG4gICAgICAgIHNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGUpID0+IHtcbiAgICAgICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gnKS5jbGljaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkSGFuZGxlcigpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKCAocG9zaXRpb24pID0+IHtcbiAgICAgICAgICAgICAgICBsb2FkKHtsYXRpdHVkZTogYCR7cG9zaXRpb24uY29vcmRzLmxhdGl0dWRlfWAsIGxvbmdpdHVkZTogYCR7cG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZX1gfSk7XG4gICAgICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbG9hZCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlZ2lzdGVySGFuZGxlcnMoKSB7XG4gICAgICAgIG5hdkhhbmRsZXIoKTtcbiAgICAgICAga2V5SGFuZGxlcigpO1xuICAgICAgICBsb2FkSGFuZGxlcigpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHJlZ2lzdGVySGFuZGxlcnMsXG4gICAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJzOyIsImltcG9ydCBjbGVhckRheSBmcm9tICcuL2ltYWdlcy9jbGVhci1kYXkuc3ZnJ1xuaW1wb3J0IGNsZWFyTmlnaHQgZnJvbSAnLi9pbWFnZXMvY2xlYXItbmlnaHQuc3ZnJ1xuaW1wb3J0IGNsb3VkeSBmcm9tICcuL2ltYWdlcy9jbG91ZHkuc3ZnJ1xuaW1wb3J0IGZvZyBmcm9tICcuL2ltYWdlcy9mb2cuc3ZnJ1xuaW1wb3J0IGFycm93VXBUaGluIGZyb20gJy4vaW1hZ2VzL2Fycm93LXVwLXRoaW4uc3ZnJ1xuaW1wb3J0IHBhcnRseUNsb3VkeURheSBmcm9tICcuL2ltYWdlcy9wYXJ0bHktY2xvdWR5LWRheS5zdmcnXG5pbXBvcnQgcGFydGx5Q2xvdWR5TmlnaHQgZnJvbSAnLi9pbWFnZXMvcGFydGx5LWNsb3VkeS1uaWdodC5zdmcnXG5pbXBvcnQgcmFpbiBmcm9tICcuL2ltYWdlcy9yYWluLnN2ZydcbmltcG9ydCBzbm93IGZyb20gJy4vaW1hZ2VzL3Nub3cuc3ZnJ1xuaW1wb3J0IHdpbmQgZnJvbSAnLi9pbWFnZXMvd2luZC5zdmcnXG5cbmNvbnN0IG9iaiA9IHtcbiAgICBjbGVhckRheSxcbiAgICBjbGVhck5pZ2h0LFxuICAgIGNsb3VkeSxcbiAgICBmb2csXG4gICAgYXJyb3dVcFRoaW4sXG4gICAgcGFydGx5Q2xvdWR5RGF5LFxuICAgIHBhcnRseUNsb3VkeU5pZ2h0LFxuICAgIHJhaW4sXG4gICAgc25vdyxcbiAgICB3aW5kLFxufVxuXG5jb25zdCBrZWJhYml6ZSA9IChzdHIpID0+IHN0ci5yZXBsYWNlKC9bQS1aXSsoPyFbYS16XSl8W0EtWl0vZywgKCQsIG9mcykgPT4gKG9mcyA/IFwiLVwiIDogXCJcIikgKyAkLnRvTG93ZXJDYXNlKCkpXG5jb25zdCBpbWFnZXMgPSBuZXcgTWFwKCk7XG5cbmZvciAobGV0IFtrZXksIHZhbF0gb2YgT2JqZWN0LmVudHJpZXMob2JqKSkge1xuICAgIGltYWdlcy5zZXQoa2ViYWJpemUoa2V5KSwgdmFsKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW1hZ2VzOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBoYW5kbGVycyBmcm9tIFwiLi9oYW5kbGVyc1wiO1xuXG5oYW5kbGVycy5yZWdpc3RlckhhbmRsZXJzKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=