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

.circle {
    border-radius: 100%;
}



`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --large-heading-text: 2rem;\n    --blue: #184f77;\n    --light-blue: #178bad;\n    --dark-blue: #0e2d44;\n    --white: #ffffff;\n    --transparent-white: rgba(255, 255, 255, 0.5);\n    --white-svg-filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(82deg) brightness(105%) contrast(105%);\n    --button-shadow: 0 0 0 2px var(--white);\n    --shadow-transition: all 0.3s ease-in-out;\n}\n*, *::before, *::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n.loader {\n    width: 48px;\n    height: 48px;\n    border-radius: 50%;\n    position: absolute;\n    animation: rotate 1s linear infinite\n}\n.loader::before {\n    content: \"\";\n    box-sizing: border-box;\n    position: absolute;\n    inset: 0;\n    border-radius: 50%;\n    border: 5px solid #FFF;\n    animation: prixClipFix 2s linear infinite ;\n}\n\n@keyframes rotate {\n    100%   {transform: rotate(360deg)}\n}\n\n@keyframes prixClipFix {\n    0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}\n    25%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}\n    50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}\n    75%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%)}\n    100% {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0)}\n}\n\nimg {\n    filter: var(--white-svg-filter);\n}\n\nbody {\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n.body-wrapper {\n    display: grid;\n    grid-template: 2fr 14fr 1fr / 1fr 6fr 1fr;\n    grid-template-areas:\n            \". header .\"\n    \". main-content .\"\n    \". . .\";\n    background-image: linear-gradient(to bottom, var(--light-blue), var(--blue) 60%, var(--dark-blue) 90%);\n    background-repeat: no-repeat;\n    color: var(--white);\n    min-height: 100vh;\n}\n\nheader {\n    grid-area: header;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 50px;\n}\n\n.main-nav {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    justify-content: center;\n    align-items: center;\n}\n\n.search-bar-wrapper {\n    display: flex;\n    width: 300px;\n    height: 35px;\n    background-color: var(--dark-blue);\n    border-radius: 9999px;\n    padding: 4px 16px;\n    transition: var(--shadow-transition);\n}\n.search-bar-wrapper:has(input:focus-visible) {\n    box-shadow: var(--button-shadow);\n}\n\n.search-button {\n    width: 25px;\n    height: 25px;\n    appearance: none;\n    outline: none;\n    background: transparent;\n    border: none;\n    cursor: pointer;\n}\n\n.search-bar {\n    flex: 1;\n}\n\n.search-bar input {\n    appearance: none;\n    outline: none;\n    border: none;\n    background: none;\n    color: var(--white);\n    height: 100%;\n    width: 100%;\n}\n\n.unit-buttons {\n    font-size: 0.65rem;\n    font-weight: bold;\n    display: flex;\n    align-items: center;\n    gap: 10px;\n}\n\n.unit-buttons input {\n    appearance: none;\n    outline: none;\n}\n\n.unit-buttons label {\n    width: max-content;\n    height: max-content;\n    background-color: var(--dark-blue);\n    padding: 10px;\n    border-radius: 9999px;\n    transition: var(--shadow-transition);\n    cursor: pointer;\n}\n.unit-buttons label:hover {\n    box-shadow: var(--button-shadow);\n}\n\n.unit-buttons label:has(input:checked) {\n    box-shadow: var(--button-shadow);\n}\n\n.main-content {\n    grid-area: main-content;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 2rem;\n    text-align: center;\n}\n\n.large-weather-img {\n    width: 75px;\n    height: 75px;\n}\n\n.large-temp-text {\n    font-size: 5rem;\n}\n\n.main-content h1 {\n    font-size: var(--large-heading-text);\n}\n\n.weather-div {\n    display: flex;\n    gap: 24px;\n}\n\n.flex-column {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n}\n.main-content .light-grey {\n    color: var(--transparent-white);\n}\n\n.stats-grid {\n    display: grid;\n    grid-template: 1fr 1fr 1fr / 1fr 1fr 1fr;\n    gap: 5%;\n    text-align: center;\n}\n\n.stats-grid > * {\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n}\n\n.stats-grid .info-box-wrapper {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.mini-weather-container {\n    display: flex;\n}\n\n.stats-grid .info-box {\n    width: max-content;\n    height: max-content;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.medium-text {\n    font-size: 1.5rem;\n}\n.small-text {\n    font-size: 1.175rem;\n}\n\n.wind-arrow {\n    width: 30px;\n    height: 30px;\n}\n\n.mini-wind-arrow {\n    width: 25px;\n    height: 25px;\n}\n\n.mini-weather-container {\n    gap: 10px;\n}\n.bottom-wrapper h1 {\n    margin-bottom: 25px;\n    text-align: center;\n}\n\n.weekly {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    font-size: 1.25rem;\n}\n\n.weekly > div {\n    display: grid;\n    grid-template-columns: 2fr 1fr 1fr 1fr;\n    gap: 20px;\n    padding: 10px;\n}\n\n@media (max-width: 600px) {\n    .weekly > div {\n        grid-template-columns: 1fr 2fr 1fr 1fr;\n        gap: 5px;\n    }\n    .weather-div {\n        gap: 0;\n        flex-direction: column;\n    }\n    .body-wrapper {\n       display: block;\n    }\n    .stats-grid {\n        grid-template: 1fr 1fr 1fr 1fr / 1fr 1fr;\n    }\n}\n\n.weekly > div:not(:last-child) {\n    border-bottom: 2px solid var(--transparent-white);\n}\n\n\n.day > div:first-child {\n    font-weight: bold;\n}\n\n.mini-weather-icon {\n    width: 25px;\n    height: 25px;\n}\n\n.circle {\n    border-radius: 100%;\n}\n\n\n\n"],"sourceRoot":""}]);
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

    async function getLocationData(latitude, longitude, location, unit = 'metric') {
        if (latitude && longitude) {
            const locationRequest = new Request(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`);
            try {
                const locationResponse = await fetch(locationRequest);
                const locationData = await locationResponse.json();
                location = `${locationData.city}, ${locationData.countryCode}`;
            } catch (error) {
                return {code: error.name, message: error.message};
            }
        }
        currentLocation = location;
        const request = new Request(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=${unit}&key=${apiKey}&contentType=json&lang=en`, {
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

    /*
    function renderHourly(todayHours, tomorrowHours, currentTime) {
        const currentHour = currentTime.getHours();
        let count = 0;
        while (count < 24) {
            for (const hour of todayHours) {
                const time = parseInt(hour.dateTime.slice(0, 2));
            }
        }
    }
    */
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
            // renderHourly(data.days[0].hours, data.days[1].hours, data.currentTime);
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

    async function load(latitude, longitude, input = 'Edinburgh', units = "metric") {
        _dom__WEBPACK_IMPORTED_MODULE_1__["default"].load();
        const data = await _api__WEBPACK_IMPORTED_MODULE_0__["default"].getLocationData(latitude, longitude, input, units);
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
                    await load(undefined, undefined, currentLocation, units);
                    break;
            }
        });
        document.querySelectorAll('input[name="unit"]').forEach((element) => {
            element.addEventListener('change', async (e) => {
                units = e.target.value;
                await load(undefined, undefined, currentLocation, units);
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

    function registerHandlers() {
        navHandler();
        keyHandler();
    }

    return {
        registerHandlers,
        load,
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
navigator.geolocation.getCurrentPosition( (position) => {
    _handlers__WEBPACK_IMPORTED_MODULE_1__["default"].load(`${position.coords.latitude}`, `${position.coords.longitude}`);
}, () => {
    _handlers__WEBPACK_IMPORTED_MODULE_1__["default"].load();
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksUUFBUSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxpQ0FBaUMsaUNBQWlDLHNCQUFzQiw0QkFBNEIsMkJBQTJCLHVCQUF1QixvREFBb0QsZ0hBQWdILDhDQUE4QyxnREFBZ0QsR0FBRywwQkFBMEIsNkJBQTZCLGdCQUFnQixpQkFBaUIsR0FBRyxhQUFhLGtCQUFrQixtQkFBbUIseUJBQXlCLHlCQUF5Qiw2Q0FBNkMsbUJBQW1CLG9CQUFvQiw2QkFBNkIseUJBQXlCLGVBQWUseUJBQXlCLDZCQUE2QixpREFBaUQsR0FBRyx1QkFBdUIsY0FBYywwQkFBMEIsR0FBRyw0QkFBNEIsWUFBWSwrQ0FBK0MsWUFBWSwyREFBMkQsWUFBWSxvRUFBb0UsWUFBWSw4REFBOEQsWUFBWSwyREFBMkQsR0FBRyxTQUFTLHNDQUFzQyxHQUFHLFVBQVUsZ0RBQWdELEdBQUcsbUJBQW1CLG9CQUFvQixnREFBZ0QsZ0dBQWdHLDZHQUE2RyxtQ0FBbUMsMEJBQTBCLHdCQUF3QixHQUFHLFlBQVksd0JBQXdCLG9CQUFvQiw2QkFBNkIsOEJBQThCLDBCQUEwQixvQkFBb0IsR0FBRyxlQUFlLG9CQUFvQiw2QkFBNkIsZ0JBQWdCLDhCQUE4QiwwQkFBMEIsR0FBRyx5QkFBeUIsb0JBQW9CLG1CQUFtQixtQkFBbUIseUNBQXlDLDRCQUE0Qix3QkFBd0IsMkNBQTJDLEdBQUcsZ0RBQWdELHVDQUF1QyxHQUFHLG9CQUFvQixrQkFBa0IsbUJBQW1CLHVCQUF1QixvQkFBb0IsOEJBQThCLG1CQUFtQixzQkFBc0IsR0FBRyxpQkFBaUIsY0FBYyxHQUFHLHVCQUF1Qix1QkFBdUIsb0JBQW9CLG1CQUFtQix1QkFBdUIsMEJBQTBCLG1CQUFtQixrQkFBa0IsR0FBRyxtQkFBbUIseUJBQXlCLHdCQUF3QixvQkFBb0IsMEJBQTBCLGdCQUFnQixHQUFHLHlCQUF5Qix1QkFBdUIsb0JBQW9CLEdBQUcseUJBQXlCLHlCQUF5QiwwQkFBMEIseUNBQXlDLG9CQUFvQiw0QkFBNEIsMkNBQTJDLHNCQUFzQixHQUFHLDZCQUE2Qix1Q0FBdUMsR0FBRyw0Q0FBNEMsdUNBQXVDLEdBQUcsbUJBQW1CLDhCQUE4QixvQkFBb0IsNkJBQTZCLDBCQUEwQixnQkFBZ0IseUJBQXlCLEdBQUcsd0JBQXdCLGtCQUFrQixtQkFBbUIsR0FBRyxzQkFBc0Isc0JBQXNCLEdBQUcsc0JBQXNCLDJDQUEyQyxHQUFHLGtCQUFrQixvQkFBb0IsZ0JBQWdCLEdBQUcsa0JBQWtCLG9CQUFvQiw2QkFBNkIsZUFBZSxHQUFHLDZCQUE2QixzQ0FBc0MsR0FBRyxpQkFBaUIsb0JBQW9CLCtDQUErQyxjQUFjLHlCQUF5QixHQUFHLHFCQUFxQixvQkFBb0IsNkJBQTZCLGVBQWUsR0FBRyxtQ0FBbUMsb0JBQW9CLDhCQUE4QiwwQkFBMEIsR0FBRyw2QkFBNkIsb0JBQW9CLEdBQUcsMkJBQTJCLHlCQUF5QiwwQkFBMEIsb0JBQW9CLDhCQUE4QiwwQkFBMEIsR0FBRyxrQkFBa0Isd0JBQXdCLEdBQUcsZUFBZSwwQkFBMEIsR0FBRyxpQkFBaUIsa0JBQWtCLG1CQUFtQixHQUFHLHNCQUFzQixrQkFBa0IsbUJBQW1CLEdBQUcsNkJBQTZCLGdCQUFnQixHQUFHLHNCQUFzQiwwQkFBMEIseUJBQXlCLEdBQUcsYUFBYSxvQkFBb0IsNkJBQTZCLGdCQUFnQix5QkFBeUIsR0FBRyxtQkFBbUIsb0JBQW9CLDZDQUE2QyxnQkFBZ0Isb0JBQW9CLEdBQUcsK0JBQStCLHFCQUFxQixpREFBaUQsbUJBQW1CLE9BQU8sb0JBQW9CLGlCQUFpQixpQ0FBaUMsT0FBTyxxQkFBcUIsd0JBQXdCLE9BQU8sbUJBQW1CLG1EQUFtRCxPQUFPLEdBQUcsb0NBQW9DLHdEQUF3RCxHQUFHLDhCQUE4Qix3QkFBd0IsR0FBRyx3QkFBd0Isa0JBQWtCLG1CQUFtQixHQUFHLGFBQWEsMEJBQTBCLEdBQUcsMkJBQTJCO0FBQzM1UDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQzdTMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7QUFDckMsaUJBQWlCLHVHQUFhO0FBQzlCLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLHNGQUFPLFVBQVUsc0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDeEJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxSEFBcUgsU0FBUyxhQUFhLFVBQVU7QUFDcko7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGtCQUFrQixJQUFJLHlCQUF5QjtBQUM3RSxjQUFjO0FBQ2Qsd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLDJIQUEySCxTQUFTLGFBQWEsS0FBSyxPQUFPLE9BQU87QUFDcEs7QUFDQSx1QkFBdUI7QUFDdkIsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixvQkFBb0I7QUFDcEI7QUFDQTs7QUFFQTtBQUNBLHlFQUF5RSxhQUFhLGNBQWMsRUFBRTtBQUN0RztBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUEsd0JBQXdCLFFBQVE7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRCxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7O0FDbEdjOztBQUU3QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLDRCQUE0QixJQUFJLG9GQUFvRixHQUFHLDBGQUEwRjtBQUN0UDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiwrQ0FBTTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixXQUFXLE1BQU0sa0JBQWtCO0FBQ2pFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsaUJBQWlCO0FBQ3REO0FBQ0E7QUFDQSxrREFBa0QsZ0JBQWdCLE1BQU0sa0JBQWtCO0FBQzFGO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFDQUFxQyxJQUFJLEVBQUUsbUNBQW1DOztBQUU5RTtBQUNBO0FBQ0EsbURBQW1ELGlCQUFpQjtBQUNwRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0NBQWdDLCtDQUFNO0FBQ3RDO0FBQ0Esc0RBQXNELGNBQWM7QUFDcEU7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0EsK0JBQStCLCtDQUFNO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxZQUFZLE1BQU0sa0JBQWtCOztBQUUxRTtBQUNBOztBQUVBO0FBQ0EscUNBQXFDLFlBQVksTUFBTSxrQkFBa0I7QUFDekU7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QiwrQ0FBTTtBQUNsQztBQUNBLGtEQUFrRCxZQUFZO0FBQzlEOztBQUVBO0FBQ0EsdUNBQXVDLGNBQWM7O0FBRXJEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELGlFQUFlLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxU007QUFDQTs7QUFFeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLDRDQUFHO0FBQ1gsMkJBQTJCLDRDQUFHO0FBQzlCLDBCQUEwQiw0Q0FBRztBQUM3QixRQUFRLDRDQUFHO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdERzQjtBQUNJO0FBQ1Q7QUFDTjtBQUNrQjtBQUNRO0FBQ0k7QUFDNUI7QUFDQTtBQUNBOztBQUVwQztBQUNBLFlBQVk7QUFDWixjQUFjO0FBQ2QsVUFBVTtBQUNWLE9BQU87QUFDUCxlQUFlO0FBQ2YsbUJBQW1CO0FBQ25CLHFCQUFxQjtBQUNyQixRQUFRO0FBQ1IsUUFBUTtBQUNSLFFBQVE7QUFDUjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0JyQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2E7O0FBRWxDLGlEQUFRO0FBQ1I7QUFDQSxJQUFJLGlEQUFRLFNBQVMseUJBQXlCLE1BQU0sMEJBQTBCO0FBQzlFLENBQUM7QUFDRCxJQUFJLGlEQUFRO0FBQ1osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2pzX3dlYXRoZXJfYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9qc193ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vanNfd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9qc193ZWF0aGVyX2FwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9qc193ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9qc193ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vanNfd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vanNfd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vanNfd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9qc193ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2pzX3dlYXRoZXJfYXBwLy4vc3JjL2FwaS5qcyIsIndlYnBhY2s6Ly9qc193ZWF0aGVyX2FwcC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vanNfd2VhdGhlcl9hcHAvLi9zcmMvaGFuZGxlcnMuanMiLCJ3ZWJwYWNrOi8vanNfd2VhdGhlcl9hcHAvLi9zcmMvaW1hZ2VzLmpzIiwid2VicGFjazovL2pzX3dlYXRoZXJfYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pzX3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2pzX3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qc193ZWF0aGVyX2FwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2pzX3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vanNfd2VhdGhlcl9hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qc193ZWF0aGVyX2FwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9qc193ZWF0aGVyX2FwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vanNfd2VhdGhlcl9hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgICAtLWxhcmdlLWhlYWRpbmctdGV4dDogMnJlbTtcbiAgICAtLWJsdWU6ICMxODRmNzc7XG4gICAgLS1saWdodC1ibHVlOiAjMTc4YmFkO1xuICAgIC0tZGFyay1ibHVlOiAjMGUyZDQ0O1xuICAgIC0td2hpdGU6ICNmZmZmZmY7XG4gICAgLS10cmFuc3BhcmVudC13aGl0ZTogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICAgIC0td2hpdGUtc3ZnLWZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgwJSkgaHVlLXJvdGF0ZSg4MmRlZykgYnJpZ2h0bmVzcygxMDUlKSBjb250cmFzdCgxMDUlKTtcbiAgICAtLWJ1dHRvbi1zaGFkb3c6IDAgMCAwIDJweCB2YXIoLS13aGl0ZSk7XG4gICAgLS1zaGFkb3ctdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG4ubG9hZGVyIHtcbiAgICB3aWR0aDogNDhweDtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBhbmltYXRpb246IHJvdGF0ZSAxcyBsaW5lYXIgaW5maW5pdGVcbn1cbi5sb2FkZXI6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBpbnNldDogMDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyOiA1cHggc29saWQgI0ZGRjtcbiAgICBhbmltYXRpb246IHByaXhDbGlwRml4IDJzIGxpbmVhciBpbmZpbml0ZSA7XG59XG5cbkBrZXlmcmFtZXMgcm90YXRlIHtcbiAgICAxMDAlICAge3RyYW5zZm9ybTogcm90YXRlKDM2MGRlZyl9XG59XG5cbkBrZXlmcmFtZXMgcHJpeENsaXBGaXgge1xuICAgIDAlICAge2NsaXAtcGF0aDpwb2x5Z29uKDUwJSA1MCUsMCAwLDAgMCwwIDAsMCAwLDAgMCl9XG4gICAgMjUlICB7Y2xpcC1wYXRoOnBvbHlnb24oNTAlIDUwJSwwIDAsMTAwJSAwLDEwMCUgMCwxMDAlIDAsMTAwJSAwKX1cbiAgICA1MCUgIHtjbGlwLXBhdGg6cG9seWdvbig1MCUgNTAlLDAgMCwxMDAlIDAsMTAwJSAxMDAlLDEwMCUgMTAwJSwxMDAlIDEwMCUpfVxuICAgIDc1JSAge2NsaXAtcGF0aDpwb2x5Z29uKDUwJSA1MCUsMCAwLDEwMCUgMCwxMDAlIDEwMCUsMCAxMDAlLDAgMTAwJSl9XG4gICAgMTAwJSB7Y2xpcC1wYXRoOnBvbHlnb24oNTAlIDUwJSwwIDAsMTAwJSAwLDEwMCUgMTAwJSwwIDEwMCUsMCAwKX1cbn1cblxuaW1nIHtcbiAgICBmaWx0ZXI6IHZhcigtLXdoaXRlLXN2Zy1maWx0ZXIpO1xufVxuXG5ib2R5IHtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuLmJvZHktd3JhcHBlciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlOiAyZnIgMTRmciAxZnIgLyAxZnIgNmZyIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgICAgICAgXCIuIGhlYWRlciAuXCJcbiAgICBcIi4gbWFpbi1jb250ZW50IC5cIlxuICAgIFwiLiAuIC5cIjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB2YXIoLS1saWdodC1ibHVlKSwgdmFyKC0tYmx1ZSkgNjAlLCB2YXIoLS1kYXJrLWJsdWUpIDkwJSk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG5oZWFkZXIge1xuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDUwcHg7XG59XG5cbi5tYWluLW5hdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMjBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2VhcmNoLWJhci13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcbiAgICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG4gICAgcGFkZGluZzogNHB4IDE2cHg7XG4gICAgdHJhbnNpdGlvbjogdmFyKC0tc2hhZG93LXRyYW5zaXRpb24pO1xufVxuLnNlYXJjaC1iYXItd3JhcHBlcjpoYXMoaW5wdXQ6Zm9jdXMtdmlzaWJsZSkge1xuICAgIGJveC1zaGFkb3c6IHZhcigtLWJ1dHRvbi1zaGFkb3cpO1xufVxuXG4uc2VhcmNoLWJ1dHRvbiB7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2VhcmNoLWJhciB7XG4gICAgZmxleDogMTtcbn1cblxuLnNlYXJjaC1iYXIgaW5wdXQge1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLnVuaXQtYnV0dG9ucyB7XG4gICAgZm9udC1zaXplOiAwLjY1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG59XG5cbi51bml0LWJ1dHRvbnMgaW5wdXQge1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuLnVuaXQtYnV0dG9ucyBsYWJlbCB7XG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS1zaGFkb3ctdHJhbnNpdGlvbik7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnVuaXQtYnV0dG9ucyBsYWJlbDpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tYnV0dG9uLXNoYWRvdyk7XG59XG5cbi51bml0LWJ1dHRvbnMgbGFiZWw6aGFzKGlucHV0OmNoZWNrZWQpIHtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1idXR0b24tc2hhZG93KTtcbn1cblxuLm1haW4tY29udGVudCB7XG4gICAgZ3JpZC1hcmVhOiBtYWluLWNvbnRlbnQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAycmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxhcmdlLXdlYXRoZXItaW1nIHtcbiAgICB3aWR0aDogNzVweDtcbiAgICBoZWlnaHQ6IDc1cHg7XG59XG5cbi5sYXJnZS10ZW1wLXRleHQge1xuICAgIGZvbnQtc2l6ZTogNXJlbTtcbn1cblxuLm1haW4tY29udGVudCBoMSB7XG4gICAgZm9udC1zaXplOiB2YXIoLS1sYXJnZS1oZWFkaW5nLXRleHQpO1xufVxuXG4ud2VhdGhlci1kaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAyNHB4O1xufVxuXG4uZmxleC1jb2x1bW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDhweDtcbn1cbi5tYWluLWNvbnRlbnQgLmxpZ2h0LWdyZXkge1xuICAgIGNvbG9yOiB2YXIoLS10cmFuc3BhcmVudC13aGl0ZSk7XG59XG5cbi5zdGF0cy1ncmlkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGU6IDFmciAxZnIgMWZyIC8gMWZyIDFmciAxZnI7XG4gICAgZ2FwOiA1JTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zdGF0cy1ncmlkID4gKiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogNHB4O1xufVxuXG4uc3RhdHMtZ3JpZCAuaW5mby1ib3gtd3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubWluaS13ZWF0aGVyLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLnN0YXRzLWdyaWQgLmluZm8tYm94IHtcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5tZWRpdW0tdGV4dCB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG59XG4uc21hbGwtdGV4dCB7XG4gICAgZm9udC1zaXplOiAxLjE3NXJlbTtcbn1cblxuLndpbmQtYXJyb3cge1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbn1cblxuLm1pbmktd2luZC1hcnJvdyB7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xufVxuXG4ubWluaS13ZWF0aGVyLWNvbnRhaW5lciB7XG4gICAgZ2FwOiAxMHB4O1xufVxuLmJvdHRvbS13cmFwcGVyIGgxIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLndlZWtseSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMjBweDtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG59XG5cbi53ZWVrbHkgPiBkaXYge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyIDFmciAxZnI7XG4gICAgZ2FwOiAyMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC53ZWVrbHkgPiBkaXYge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMWZyIDFmcjtcbiAgICAgICAgZ2FwOiA1cHg7XG4gICAgfVxuICAgIC53ZWF0aGVyLWRpdiB7XG4gICAgICAgIGdhcDogMDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG4gICAgLmJvZHktd3JhcHBlciB7XG4gICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIC5zdGF0cy1ncmlkIHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZTogMWZyIDFmciAxZnIgMWZyIC8gMWZyIDFmcjtcbiAgICB9XG59XG5cbi53ZWVrbHkgPiBkaXY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXRyYW5zcGFyZW50LXdoaXRlKTtcbn1cblxuXG4uZGF5ID4gZGl2OmZpcnN0LWNoaWxkIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm1pbmktd2VhdGhlci1pY29uIHtcbiAgICB3aWR0aDogMjVweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG59XG5cbi5jaXJjbGUge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG5cblxuXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLDZDQUE2QztJQUM3Qyx5R0FBeUc7SUFDekcsdUNBQXVDO0lBQ3ZDLHlDQUF5QztBQUM3QztBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEI7QUFDSjtBQUNBO0lBQ0ksV0FBVztJQUNYLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksUUFBUSx5QkFBeUI7QUFDckM7O0FBRUE7SUFDSSxNQUFNLDhDQUE4QztJQUNwRCxNQUFNLDBEQUEwRDtJQUNoRSxNQUFNLG1FQUFtRTtJQUN6RSxNQUFNLDZEQUE2RDtJQUNuRSxNQUFNLDBEQUEwRDtBQUNwRTs7QUFFQTtJQUNJLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYix5Q0FBeUM7SUFDekM7OztXQUdPO0lBQ1Asc0dBQXNHO0lBQ3RHLDRCQUE0QjtJQUM1QixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osWUFBWTtJQUNaLGtDQUFrQztJQUNsQyxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLG9DQUFvQztBQUN4QztBQUNBO0lBQ0ksZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLE9BQU87QUFDWDs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0NBQWtDO0lBQ2xDLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsb0NBQW9DO0lBQ3BDLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsUUFBUTtBQUNaO0FBQ0E7SUFDSSwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isd0NBQXdDO0lBQ3hDLE9BQU87SUFDUCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLFNBQVM7SUFDVCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0k7UUFDSSxzQ0FBc0M7UUFDdEMsUUFBUTtJQUNaO0lBQ0E7UUFDSSxNQUFNO1FBQ04sc0JBQXNCO0lBQzFCO0lBQ0E7T0FDRyxjQUFjO0lBQ2pCO0lBQ0E7UUFDSSx3Q0FBd0M7SUFDNUM7QUFDSjs7QUFFQTtJQUNJLGlEQUFpRDtBQUNyRDs7O0FBR0E7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tbGFyZ2UtaGVhZGluZy10ZXh0OiAycmVtO1xcbiAgICAtLWJsdWU6ICMxODRmNzc7XFxuICAgIC0tbGlnaHQtYmx1ZTogIzE3OGJhZDtcXG4gICAgLS1kYXJrLWJsdWU6ICMwZTJkNDQ7XFxuICAgIC0td2hpdGU6ICNmZmZmZmY7XFxuICAgIC0tdHJhbnNwYXJlbnQtd2hpdGU6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gICAgLS13aGl0ZS1zdmctZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDAlKSBodWUtcm90YXRlKDgyZGVnKSBicmlnaHRuZXNzKDEwNSUpIGNvbnRyYXN0KDEwNSUpO1xcbiAgICAtLWJ1dHRvbi1zaGFkb3c6IDAgMCAwIDJweCB2YXIoLS13aGl0ZSk7XFxuICAgIC0tc2hhZG93LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4ubG9hZGVyIHtcXG4gICAgd2lkdGg6IDQ4cHg7XFxuICAgIGhlaWdodDogNDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGFuaW1hdGlvbjogcm90YXRlIDFzIGxpbmVhciBpbmZpbml0ZVxcbn1cXG4ubG9hZGVyOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBpbnNldDogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjRkZGO1xcbiAgICBhbmltYXRpb246IHByaXhDbGlwRml4IDJzIGxpbmVhciBpbmZpbml0ZSA7XFxufVxcblxcbkBrZXlmcmFtZXMgcm90YXRlIHtcXG4gICAgMTAwJSAgIHt0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHByaXhDbGlwRml4IHtcXG4gICAgMCUgICB7Y2xpcC1wYXRoOnBvbHlnb24oNTAlIDUwJSwwIDAsMCAwLDAgMCwwIDAsMCAwKX1cXG4gICAgMjUlICB7Y2xpcC1wYXRoOnBvbHlnb24oNTAlIDUwJSwwIDAsMTAwJSAwLDEwMCUgMCwxMDAlIDAsMTAwJSAwKX1cXG4gICAgNTAlICB7Y2xpcC1wYXRoOnBvbHlnb24oNTAlIDUwJSwwIDAsMTAwJSAwLDEwMCUgMTAwJSwxMDAlIDEwMCUsMTAwJSAxMDAlKX1cXG4gICAgNzUlICB7Y2xpcC1wYXRoOnBvbHlnb24oNTAlIDUwJSwwIDAsMTAwJSAwLDEwMCUgMTAwJSwwIDEwMCUsMCAxMDAlKX1cXG4gICAgMTAwJSB7Y2xpcC1wYXRoOnBvbHlnb24oNTAlIDUwJSwwIDAsMTAwJSAwLDEwMCUgMTAwJSwwIDEwMCUsMCAwKX1cXG59XFxuXFxuaW1nIHtcXG4gICAgZmlsdGVyOiB2YXIoLS13aGl0ZS1zdmctZmlsdGVyKTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uYm9keS13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMmZyIDE0ZnIgMWZyIC8gMWZyIDZmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICAgICAgXFxcIi4gaGVhZGVyIC5cXFwiXFxuICAgIFxcXCIuIG1haW4tY29udGVudCAuXFxcIlxcbiAgICBcXFwiLiAuIC5cXFwiO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB2YXIoLS1saWdodC1ibHVlKSwgdmFyKC0tYmx1ZSkgNjAlLCB2YXIoLS1kYXJrLWJsdWUpIDkwJSk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDUwcHg7XFxufVxcblxcbi5tYWluLW5hdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zZWFyY2gtYmFyLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xcbiAgICBwYWRkaW5nOiA0cHggMTZweDtcXG4gICAgdHJhbnNpdGlvbjogdmFyKC0tc2hhZG93LXRyYW5zaXRpb24pO1xcbn1cXG4uc2VhcmNoLWJhci13cmFwcGVyOmhhcyhpbnB1dDpmb2N1cy12aXNpYmxlKSB7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWJ1dHRvbi1zaGFkb3cpO1xcbn1cXG5cXG4uc2VhcmNoLWJ1dHRvbiB7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNlYXJjaC1iYXIge1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4uc2VhcmNoLWJhciBpbnB1dCB7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnVuaXQtYnV0dG9ucyB7XFxuICAgIGZvbnQtc2l6ZTogMC42NXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnVuaXQtYnV0dG9ucyBpbnB1dCB7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi51bml0LWJ1dHRvbnMgbGFiZWwge1xcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcXG4gICAgdHJhbnNpdGlvbjogdmFyKC0tc2hhZG93LXRyYW5zaXRpb24pO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi51bml0LWJ1dHRvbnMgbGFiZWw6aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1idXR0b24tc2hhZG93KTtcXG59XFxuXFxuLnVuaXQtYnV0dG9ucyBsYWJlbDpoYXMoaW5wdXQ6Y2hlY2tlZCkge1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1idXR0b24tc2hhZG93KTtcXG59XFxuXFxuLm1haW4tY29udGVudCB7XFxuICAgIGdyaWQtYXJlYTogbWFpbi1jb250ZW50O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDJyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmxhcmdlLXdlYXRoZXItaW1nIHtcXG4gICAgd2lkdGg6IDc1cHg7XFxuICAgIGhlaWdodDogNzVweDtcXG59XFxuXFxuLmxhcmdlLXRlbXAtdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogNXJlbTtcXG59XFxuXFxuLm1haW4tY29udGVudCBoMSB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tbGFyZ2UtaGVhZGluZy10ZXh0KTtcXG59XFxuXFxuLndlYXRoZXItZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyNHB4O1xcbn1cXG5cXG4uZmxleC1jb2x1bW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDhweDtcXG59XFxuLm1haW4tY29udGVudCAubGlnaHQtZ3JleSB7XFxuICAgIGNvbG9yOiB2YXIoLS10cmFuc3BhcmVudC13aGl0ZSk7XFxufVxcblxcbi5zdGF0cy1ncmlkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIDFmciAxZnIgLyAxZnIgMWZyIDFmcjtcXG4gICAgZ2FwOiA1JTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uc3RhdHMtZ3JpZCA+ICoge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDRweDtcXG59XFxuXFxuLnN0YXRzLWdyaWQgLmluZm8tYm94LXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1pbmktd2VhdGhlci1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uc3RhdHMtZ3JpZCAuaW5mby1ib3gge1xcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWVkaXVtLXRleHQge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuLnNtYWxsLXRleHQge1xcbiAgICBmb250LXNpemU6IDEuMTc1cmVtO1xcbn1cXG5cXG4ud2luZC1hcnJvdyB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbi5taW5pLXdpbmQtYXJyb3cge1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbn1cXG5cXG4ubWluaS13ZWF0aGVyLWNvbnRhaW5lciB7XFxuICAgIGdhcDogMTBweDtcXG59XFxuLmJvdHRvbS13cmFwcGVyIGgxIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ud2Vla2x5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxufVxcblxcbi53ZWVrbHkgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnIgMWZyIDFmcjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgLndlZWtseSA+IGRpdiB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMWZyIDFmcjtcXG4gICAgICAgIGdhcDogNXB4O1xcbiAgICB9XFxuICAgIC53ZWF0aGVyLWRpdiB7XFxuICAgICAgICBnYXA6IDA7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuICAgIC5ib2R5LXdyYXBwZXIge1xcbiAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgfVxcbiAgICAuc3RhdHMtZ3JpZCB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlOiAxZnIgMWZyIDFmciAxZnIgLyAxZnIgMWZyO1xcbiAgICB9XFxufVxcblxcbi53ZWVrbHkgPiBkaXY6bm90KDpsYXN0LWNoaWxkKSB7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS10cmFuc3BhcmVudC13aGl0ZSk7XFxufVxcblxcblxcbi5kYXkgPiBkaXY6Zmlyc3QtY2hpbGQge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLm1pbmktd2VhdGhlci1pY29uIHtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGhlaWdodDogMjVweDtcXG59XFxuXFxuLmNpcmNsZSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxufVxcblxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgYXBpID0gKGxvY2FsZXMgPT4ge1xuICAgIGNvbnN0IGFwaUtleSA9ICdKU044M1NXVzc3OTg5UzZaRTQzU0VTTVgyJztcbiAgICBsZXQgY3VycmVudExvY2F0aW9uO1xuXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0TG9jYXRpb25EYXRhKGxhdGl0dWRlLCBsb25naXR1ZGUsIGxvY2F0aW9uLCB1bml0ID0gJ21ldHJpYycpIHtcbiAgICAgICAgaWYgKGxhdGl0dWRlICYmIGxvbmdpdHVkZSkge1xuICAgICAgICAgICAgY29uc3QgbG9jYXRpb25SZXF1ZXN0ID0gbmV3IFJlcXVlc3QoYGh0dHBzOi8vYXBpLmJpZ2RhdGFjbG91ZC5uZXQvZGF0YS9yZXZlcnNlLWdlb2NvZGUtY2xpZW50P2xhdGl0dWRlPSR7bGF0aXR1ZGV9JmxvbmdpdHVkZT0ke2xvbmdpdHVkZX0mbG9jYWxpdHlMYW5ndWFnZT1lbmApO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhdGlvblJlc3BvbnNlID0gYXdhaXQgZmV0Y2gobG9jYXRpb25SZXF1ZXN0KTtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhdGlvbkRhdGEgPSBhd2FpdCBsb2NhdGlvblJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgICBsb2NhdGlvbiA9IGAke2xvY2F0aW9uRGF0YS5jaXR5fSwgJHtsb2NhdGlvbkRhdGEuY291bnRyeUNvZGV9YDtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtjb2RlOiBlcnJvci5uYW1lLCBtZXNzYWdlOiBlcnJvci5tZXNzYWdlfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50TG9jYXRpb24gPSBsb2NhdGlvbjtcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KGBodHRwczovL3dlYXRoZXIudmlzdWFsY3Jvc3NpbmcuY29tL1Zpc3VhbENyb3NzaW5nV2ViU2VydmljZXMvcmVzdC9zZXJ2aWNlcy90aW1lbGluZS8ke2xvY2F0aW9ufT91bml0R3JvdXA9JHt1bml0fSZrZXk9JHthcGlLZXl9JmNvbnRlbnRUeXBlPWpzb24mbGFuZz1lbmAsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7fSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHJlcXVlc3QpO1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA+PSA0MDApIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiB0ZXh0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9jZXNzRGF0YShkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiB7Y29kZTogZXJyb3IubmFtZSwgbWVzc2FnZTogZXJyb3IubWVzc2FnZX07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcm9jZXNzRGF0YShkYXRhKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUobmV3IERhdGUoKS50b0xvY2FsZVN0cmluZyhcImVuLVVTXCIsIHt0aW1lWm9uZTogYCR7ZGF0YS50aW1lem9uZX1gfSkpO1xuICAgICAgICBjb25zdCBsb2NhdGlvbiA9IGRhdGEucmVzb2x2ZWRBZGRyZXNzO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRhdGEuZGVzY3JpcHRpb247XG5cbiAgICAgICAgY29uc3QgZGF5c0RhdGEgPSBkYXRhLmRheXM7XG5cbiAgICAgICAgY29uc3QgZGF5cyA9IFtdO1xuXG4gICAgICAgIGNvbnN0IHRvZGF5RGF0YSA9IGRheXNEYXRhWzBdO1xuICAgICAgICBkYXlzWzBdID0ge1xuICAgICAgICAgICAgY29uZGl0aW9uczogdG9kYXlEYXRhLmNvbmRpdGlvbnMsXG4gICAgICAgICAgICB0ZW1wOiBNYXRoLnJvdW5kKHRvZGF5RGF0YS50ZW1wKSxcbiAgICAgICAgICAgIHdpbmRkaXI6IE1hdGgucm91bmQodG9kYXlEYXRhLndpbmRkaXIpLFxuICAgICAgICAgICAgZmVlbHNsaWtlOiBNYXRoLnJvdW5kKHRvZGF5RGF0YS5mZWVsc2xpa2UpLFxuICAgICAgICAgICAgaWNvbjogdG9kYXlEYXRhLmljb24sXG4gICAgICAgICAgICBzdGF0czoge1xuICAgICAgICAgICAgICAgIHdpbmRzcGVlZDogTWF0aC5yb3VuZCh0b2RheURhdGEud2luZHNwZWVkKSxcbiAgICAgICAgICAgICAgICBodW1pZGl0eTogTWF0aC5yb3VuZCh0b2RheURhdGEuaHVtaWRpdHkpLFxuICAgICAgICAgICAgICAgIHV2aW5kZXg6IHRvZGF5RGF0YS51dmluZGV4LFxuICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IE1hdGgucm91bmQodG9kYXlEYXRhLnZpc2liaWxpdHkpLFxuICAgICAgICAgICAgICAgIGNsb3VkY292ZXI6IE1hdGgucm91bmQodG9kYXlEYXRhLmNsb3VkY292ZXIpLFxuICAgICAgICAgICAgICAgIHByZWNpcHByb2I6IE1hdGgucm91bmQodG9kYXlEYXRhLnByZWNpcHByb2IpLFxuICAgICAgICAgICAgICAgIHN1bnJpc2U6IHRvZGF5RGF0YS5zdW5yaXNlLnNsaWNlKDAsIC0zKSxcbiAgICAgICAgICAgICAgICBzdW5zZXQ6IHRvZGF5RGF0YS5zdW5zZXQuc2xpY2UoMCwgLTMpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhvdXJzOiB0b2RheURhdGEuaG91cnMsXG4gICAgICAgIH07XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNzsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBkYXlEYXRhID0gZGF5c0RhdGFbaV07XG4gICAgICAgICAgICBkYXlzW2ldID0ge1xuICAgICAgICAgICAgICAgIGRhdGV0aW1lOiBuZXcgRGF0ZShkYXlEYXRhLmRhdGV0aW1lKSxcbiAgICAgICAgICAgICAgICBpY29uOiBkYXlEYXRhLmljb24sXG4gICAgICAgICAgICAgICAgdGVtcE1pbjogTWF0aC5yb3VuZChkYXlEYXRhLnRlbXBtaW4pLFxuICAgICAgICAgICAgICAgIHRlbXBNYXg6IE1hdGgucm91bmQoZGF5RGF0YS50ZW1wbWF4KSxcbiAgICAgICAgICAgICAgICB3aW5kc3BlZWQ6IE1hdGgucm91bmQoZGF5RGF0YS53aW5kc3BlZWQpLFxuICAgICAgICAgICAgICAgIHdpbmRkaXI6IE1hdGgucm91bmQoZGF5RGF0YS53aW5kZGlyKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoaSA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGRheXNbaV0uaG91cnMgPSBkYXlEYXRhLmhvdXJzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjdXJyZW50VGltZSxcbiAgICAgICAgICAgIGxvY2F0aW9uLFxuICAgICAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBkYXlzLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEN1cnJlbnRMb2NhdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRMb2NhdGlvbjtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRMb2NhdGlvbkRhdGEsXG4gICAgICAgIGdldEN1cnJlbnRMb2NhdGlvblxuICAgIH1cbn0pKCk7XG5cblxuZXhwb3J0IGRlZmF1bHQgYXBpIiwiaW1wb3J0IGltYWdlcyBmcm9tICcuL2ltYWdlcydcblxuY29uc3QgZG9tID0gKCgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250ZW50Jyk7XG4gICAgbGV0IHVuaXRzO1xuXG4gICAgZnVuY3Rpb24gcmVuZGVyVG9kYXkodG9kYXksIGN1cnJlbnRUaW1lLCBsb2NhdGlvbiwgZGVzY3JpcHRpb24pIHtcbiAgICAgICAgY29uc3QgaGVhZGluZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgaGVhZGluZy50ZXh0Q29udGVudCA9IGxvY2F0aW9uO1xuICAgICAgICBjb25zdCBkYXRlSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIGRhdGVIZWFkaW5nLmNsYXNzTmFtZSA9ICdsaWdodC1ncmV5IHNtYWxsLXRleHQnO1xuICAgICAgICBkYXRlSGVhZGluZy50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRUaW1lLnRvRGF0ZVN0cmluZygpfSB8ICR7Y3VycmVudFRpbWUuZ2V0SG91cnMoKSA8IDEwID8gJzAnICsgY3VycmVudFRpbWUuZ2V0SG91cnMoKSA6IGN1cnJlbnRUaW1lLmdldEhvdXJzKCl9OiR7Y3VycmVudFRpbWUuZ2V0TWludXRlcygpIDwgMTAgPyAnMCcgKyBjdXJyZW50VGltZS5nZXRNaW51dGVzKCkgOiBjdXJyZW50VGltZS5nZXRNaW51dGVzKCl9YDtcbiAgICAgICAgaGVhZGluZ0Rpdi5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgICAgICAgaGVhZGluZ0Rpdi5hcHBlbmRDaGlsZChkYXRlSGVhZGluZyk7XG5cbiAgICAgICAgY29uc3Qgd2VhdGhlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIHdlYXRoZXJEaXYuY2xhc3NOYW1lID0gJ3dlYXRoZXItZGl2JztcbiAgICAgICAgY29uc3QgdGVtcENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCB3ZWF0aGVySW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgd2VhdGhlckltYWdlLnNyYyA9IGltYWdlcy5nZXQodG9kYXkuaWNvbik7XG4gICAgICAgIHdlYXRoZXJJbWFnZS5hbHQgPSB0b2RheS5pY29uO1xuICAgICAgICB3ZWF0aGVySW1hZ2UuY2xhc3NOYW1lID0gJ2xhcmdlLXdlYXRoZXItaW1nJztcbiAgICAgICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgdGV4dC5jbGFzc05hbWUgPSAnbGFyZ2UtdGVtcC10ZXh0JztcbiAgICAgICAgdGV4dC50ZXh0Q29udGVudCA9IGAke3RvZGF5LnRlbXB9XFx4QjAke2Zvcm1hdFRlbXBVbml0cygpfWA7XG4gICAgICAgIHRlbXBDb250YWluZXIuYXBwZW5kQ2hpbGQod2VhdGhlckltYWdlKTtcbiAgICAgICAgdGVtcENvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0KTtcblxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkZXNjcmlwdGlvbkRpdi5jbGFzc05hbWUgPSAnZmxleC1jb2x1bW4nO1xuICAgICAgICBjb25zdCBzbWFsbEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIHNtYWxsSGVhZGVyLmNsYXNzTmFtZSA9ICdtZWRpdW0tdGV4dCc7XG4gICAgICAgIHNtYWxsSGVhZGVyLnRleHRDb250ZW50ID0gYCR7dG9kYXkuY29uZGl0aW9uc31gO1xuICAgICAgICBjb25zdCBmZWVsc0xpa2VUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBmZWVsc0xpa2VUZXh0LmNsYXNzTmFtZSA9ICdsaWdodC1ncmV5IHNtYWxsLXRleHQnO1xuICAgICAgICBmZWVsc0xpa2VUZXh0LnRleHRDb250ZW50ID0gYEZlZWxzIGxpa2UgJHt0b2RheS5mZWVsc2xpa2V9XFx4QjAke2Zvcm1hdFRlbXBVbml0cygpfWA7XG4gICAgICAgIGRlc2NyaXB0aW9uRGl2LmFwcGVuZENoaWxkKHNtYWxsSGVhZGVyKTtcbiAgICAgICAgZGVzY3JpcHRpb25EaXYuYXBwZW5kQ2hpbGQoZmVlbHNMaWtlVGV4dCk7XG5cbiAgICAgICAgd2VhdGhlckRpdi5hcHBlbmRDaGlsZCh0ZW1wQ29udGFpbmVyKTtcbiAgICAgICAgd2VhdGhlckRpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkRpdik7XG5cbiAgICAgICAgY29uc3Qgc3RhdHNHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHN0YXRzR3JpZC5jbGFzc05hbWUgPSAnc3RhdHMtZ3JpZCc7XG5cbiAgICAgICAgZm9yIChsZXQgW2tleSwgdmFsXSBvZiBPYmplY3QuZW50cmllcyh0b2RheS5zdGF0cykpIHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBmb3JtYXREYXRhTmFtZShrZXkpO1xuXG4gICAgICAgICAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgICAgICAgICAgY29uc3QgbmFtZVRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIG5hbWVUYWcuY2xhc3NOYW1lID0gJ2xpZ2h0LWdyZXkgc21hbGwtdGV4dCc7XG4gICAgICAgICAgICBuYW1lVGFnLnRleHRDb250ZW50ID0gbmFtZTtcblxuICAgICAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChuYW1lVGFnKTtcblxuICAgICAgICAgICAgY29uc3QgaW5mb0JveFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGluZm9Cb3hXcmFwcGVyLmNsYXNzTmFtZSA9ICdpbmZvLWJveC13cmFwcGVyJztcblxuICAgICAgICAgICAgY29uc3QgaW5mb0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIGluZm9Cb3guY2xhc3NOYW1lID0gJ21lZGl1bS10ZXh0IGluZm8tYm94JztcbiAgICAgICAgICAgIGluZm9Cb3gudGV4dENvbnRlbnQgPSBgJHt2YWx9JHtnZXRVbml0cyhrZXkpID8gZ2V0VW5pdHMoa2V5KSA6ICcnfWA7XG5cbiAgICAgICAgICAgIGlmIChrZXkgPT09ICd1dmluZGV4Jykge1xuICAgICAgICAgICAgICAgIGluZm9Cb3guY2xhc3NMaXN0LmFkZCgnY2lyY2xlJyk7XG4gICAgICAgICAgICAgICAgaW5mb0JveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBgJHtnZXRVdkNvbG91cih2YWwpfWA7XG4gICAgICAgICAgICAgICAgaW5mb0JveC5zdHlsZS53aWR0aCA9ICczNXB4JztcbiAgICAgICAgICAgICAgICBpbmZvQm94LnN0eWxlLmhlaWdodCA9ICczNXB4JztcbiAgICAgICAgICAgICAgICBpbmZvQm94LnN0eWxlLmZvbnRXZWlnaHQgPSAnYm9sZCc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChrZXkgPT09ICd3aW5kc3BlZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgd2luZEFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICAgICAgd2luZEFycm93LnNyYyA9IGltYWdlcy5nZXQoJ2Fycm93LXVwLXRoaW4nKTtcbiAgICAgICAgICAgICAgICB3aW5kQXJyb3cuYWx0ID0gJ3dpbmQgZGlyZWN0aW9uJztcbiAgICAgICAgICAgICAgICB3aW5kQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZSgke3RvZGF5LndpbmRkaXJ9ZGVnKWA7XG4gICAgICAgICAgICAgICAgd2luZEFycm93LmNsYXNzTmFtZSA9ICd3aW5kLWFycm93JztcblxuICAgICAgICAgICAgICAgIGluZm9Cb3hXcmFwcGVyLmFwcGVuZENoaWxkKHdpbmRBcnJvdyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGluZm9Cb3hXcmFwcGVyLmFwcGVuZENoaWxkKGluZm9Cb3gpO1xuICAgICAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChpbmZvQm94V3JhcHBlcik7XG5cbiAgICAgICAgICAgIHN0YXRzR3JpZC5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkaW5nRGl2KTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHdlYXRoZXJEaXYpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc3RhdHNHcmlkKTtcbiAgICB9XG5cbiAgICAvKlxuICAgIGZ1bmN0aW9uIHJlbmRlckhvdXJseSh0b2RheUhvdXJzLCB0b21vcnJvd0hvdXJzLCBjdXJyZW50VGltZSkge1xuICAgICAgICBjb25zdCBjdXJyZW50SG91ciA9IGN1cnJlbnRUaW1lLmdldEhvdXJzKCk7XG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIHdoaWxlIChjb3VudCA8IDI0KSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGhvdXIgb2YgdG9kYXlIb3Vycykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpbWUgPSBwYXJzZUludChob3VyLmRhdGVUaW1lLnNsaWNlKDAsIDIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAqL1xuICAgIGZ1bmN0aW9uIGZvcm1hdFRlbXBVbml0cygpIHtcbiAgICAgICAgc3dpdGNoICh1bml0cykge1xuICAgICAgICAgICAgY2FzZSAnbWV0cmljJzpcbiAgICAgICAgICAgIGNhc2UgJ3VrJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0MnO1xuICAgICAgICAgICAgY2FzZSAndXMnOlxuICAgICAgICAgICAgICAgIHJldHVybiAnRic7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRVbml0cyhuYW1lKSB7XG4gICAgICAgIGxldCByZXN1bHQ7XG4gICAgICAgIHN3aXRjaCAobmFtZSkge1xuICAgICAgICAgICAgY2FzZSAnd2luZHNwZWVkJzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB1bml0cyA9PT0gJ21ldHJpYycgPyAna20vaCcgOiAnbXBoJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2h1bWlkaXR5JzpcbiAgICAgICAgICAgIGNhc2UgJ2Nsb3VkY292ZXInOlxuICAgICAgICAgICAgY2FzZSAncHJlY2lwcHJvYic6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gJyUnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndmlzaWJpbGl0eSc6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdW5pdHMgPT09ICdtZXRyaWMnID8gJ2ttJyA6ICdtaSc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmb3JtYXREYXRhTmFtZShuYW1lKSB7XG4gICAgICAgIGxldCByZXN1bHQ7XG4gICAgICAgIHN3aXRjaCAobmFtZSkge1xuICAgICAgICAgICAgY2FzZSAnd2luZHNwZWVkJzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSAnV2luZCc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdodW1pZGl0eSc6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gJ0h1bWlkaXR5JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3V2aW5kZXgnOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9ICdVViBJbmRleCc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd2aXNpYmlsaXR5JzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSAnVmlzaWJpbGl0eSc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjbG91ZGNvdmVyJzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSAnQ2xvdWRjb3Zlcic7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdwcmVjaXBwcm9iJzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSAnQ2hhbmNlIG9mIHJhaW4nO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc3VucmlzZSc6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gJ1N1bnJpc2UnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc3Vuc2V0JzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSAnU3Vuc2V0JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlcldlZWtseShkYXlzKSB7XG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgd3JhcHBlci5jbGFzc05hbWUgPSAnYm90dG9tLXdyYXBwZXInO1xuICAgICAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgaGVhZGluZy50ZXh0Q29udGVudCA9ICdXZWVrbHkgRm9yZWNhc3QnO1xuXG4gICAgICAgIGNvbnN0IHdlZWtseSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB3ZWVrbHkuY2xhc3NOYW1lID0gJ3dlZWtseSc7XG5cbiAgICAgICAgZm9yIChjb25zdCBkYXkgb2YgZGF5cykge1xuICAgICAgICAgICAgY29uc3QgZGF5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkYXlDb250YWluZXIuY2xhc3NOYW1lID0gJ2RheSc7XG5cbiAgICAgICAgICAgIGNvbnN0IGRheU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgbGV0IG1lZGlhUXVlcnlMaXN0ID0gd2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiA2MDBweClcIik7XG5cbiAgICAgICAgICAgIGlmIChtZWRpYVF1ZXJ5TGlzdC5tYXRjaGVzKSB7XG4gICAgICAgICAgICAgICAgZGF5TmFtZS50ZXh0Q29udGVudCA9IGdldERheU9mV2VlayhkYXkuZGF0ZXRpbWUsIGZhbHNlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGF5TmFtZS50ZXh0Q29udGVudCA9IGdldERheU9mV2VlayhkYXkuZGF0ZXRpbWUsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtZWRpYVF1ZXJ5TGlzdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZGF5TmFtZS50ZXh0Q29udGVudCA9IGRheU5hbWUudGV4dENvbnRlbnQubGVuZ3RoID4gMyA/IGdldERheU9mV2VlayhkYXkuZGF0ZXRpbWUsIGZhbHNlKSA6IGdldERheU9mV2VlayhkYXkuZGF0ZXRpbWUsIHRydWUpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IG1pbmlXZWF0aGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBtaW5pV2VhdGhlckNvbnRhaW5lci5jbGFzc05hbWUgPSAnbWluaS13ZWF0aGVyLWNvbnRhaW5lcic7XG5cbiAgICAgICAgICAgIGNvbnN0IHdlYXRoZXJJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgd2VhdGhlckltYWdlLnNyYyA9IGltYWdlcy5nZXQoZGF5Lmljb24pO1xuICAgICAgICAgICAgd2VhdGhlckltYWdlLmFsdCA9ICd3ZWF0aGVyLWltYWdlJztcbiAgICAgICAgICAgIHdlYXRoZXJJbWFnZS5jbGFzc05hbWUgPSAnbWluaS13ZWF0aGVyLWljb24nO1xuICAgICAgICAgICAgY29uc3QgdGVtcFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICB0ZW1wVGV4dC50ZXh0Q29udGVudCA9IGAke2RheS50ZW1wTWF4fVxceEIwJHtmb3JtYXRUZW1wVW5pdHMoKX1gO1xuXG4gICAgICAgICAgICBtaW5pV2VhdGhlckNvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWF0aGVySW1hZ2UpO1xuICAgICAgICAgICAgbWluaVdlYXRoZXJDb250YWluZXIuYXBwZW5kQ2hpbGQodGVtcFRleHQpO1xuXG4gICAgICAgICAgICBjb25zdCBtaW5UZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgbWluVGVtcC50ZXh0Q29udGVudCA9IGAke2RheS50ZW1wTWlufVxceEIwJHtmb3JtYXRUZW1wVW5pdHMoKX1gO1xuICAgICAgICAgICAgbWluVGVtcC5jbGFzc05hbWUgPSAnbGlnaHQtZ3JleSc7XG5cbiAgICAgICAgICAgIGNvbnN0IHdpbmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHdpbmRDb250YWluZXIuY2xhc3NOYW1lID0gJ3dpbmQtY29udGFpbmVyJztcblxuICAgICAgICAgICAgY29uc3Qgd2luZEFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICB3aW5kQXJyb3cuc3JjID0gaW1hZ2VzLmdldCgnYXJyb3ctdXAtdGhpbicpO1xuICAgICAgICAgICAgd2luZEFycm93LmFsdCA9ICd3aW5kIGRpcmVjdGlvbic7XG4gICAgICAgICAgICB3aW5kQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZSgke2RheS53aW5kZGlyfWRlZylgO1xuICAgICAgICAgICAgd2luZEFycm93LmNsYXNzTmFtZSA9ICdtaW5pLXdpbmQtYXJyb3cnO1xuXG4gICAgICAgICAgICBjb25zdCB3aW5kU3BlZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICB3aW5kU3BlZWQudGV4dENvbnRlbnQgPSBgJHtkYXkud2luZHNwZWVkfWA7XG5cbiAgICAgICAgICAgIHdpbmRDb250YWluZXIuYXBwZW5kQ2hpbGQod2luZEFycm93KTtcbiAgICAgICAgICAgIHdpbmRDb250YWluZXIuYXBwZW5kQ2hpbGQod2luZFNwZWVkKTtcblxuICAgICAgICAgICAgZGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKGRheU5hbWUpO1xuICAgICAgICAgICAgZGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKG1pbmlXZWF0aGVyQ29udGFpbmVyKTtcbiAgICAgICAgICAgIGRheUNvbnRhaW5lci5hcHBlbmRDaGlsZChtaW5UZW1wKTtcbiAgICAgICAgICAgIGRheUNvbnRhaW5lci5hcHBlbmRDaGlsZCh3aW5kQ29udGFpbmVyKTtcblxuICAgICAgICAgICAgd2Vla2x5LmFwcGVuZENoaWxkKGRheUNvbnRhaW5lcik7XG4gICAgICAgIH1cblxuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHdlZWtseSk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRVdkNvbG91cih1dmluZGV4KSB7XG4gICAgICAgIGlmICh1dmluZGV4ID49IDExKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3Zpb2xldCc7XG4gICAgICAgIH0gZWxzZSBpZiAodXZpbmRleCA+PSA4KSB7XG4gICAgICAgICAgICByZXR1cm4gJ3JlZCc7XG4gICAgICAgIH0gZWxzZSBpZiAodXZpbmRleCA+PSA2KSB7XG4gICAgICAgICAgICByZXR1cm4gJ29yYW5nZSc7XG4gICAgICAgIH0gZWxzZSBpZiAodXZpbmRleCA+PSAzKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2dvbGQnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICdncmVlbic7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXREYXlPZldlZWsoZGF0ZSwgbG9uZykge1xuICAgICAgICBzd2l0Y2ggKGRhdGUuZ2V0RGF5KCkpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gbG9uZyA/ICdTdW5kYXknIDogJ1N1bic7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxvbmcgPyAnTW9uZGF5JyA6ICdNb24nO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHJldHVybiBsb25nID8gJ1R1ZXNkYXknIDogJ1R1ZSc7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxvbmcgPyAnV2VkbmVzZGF5JyA6ICdXZWQnO1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIHJldHVybiBsb25nID8gJ1RodXJzZGF5JyA6ICdUaHUnO1xuICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgIHJldHVybiBsb25nID8gJ0ZyaWRheScgOiAnRnJpJztcbiAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbG9uZyA/ICdTYXR1cmRheScgOiAnU2F0JztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlckNvbnRlbnQoZGF0YSwgdW5pdCkge1xuICAgICAgICB3aGlsZSAoY29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIubGFzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0YS5lcnJvcikge1xuICAgICAgICAgICAgYWxlcnQoZGF0YS5lcnJvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB1bml0cyA9IHVuaXQ7XG4gICAgICAgICAgICByZW5kZXJUb2RheShkYXRhLmRheXNbMF0sIGRhdGEuY3VycmVudFRpbWUsIGRhdGEubG9jYXRpb24sIGRhdGEuZGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgLy8gcmVuZGVySG91cmx5KGRhdGEuZGF5c1swXS5ob3VycywgZGF0YS5kYXlzWzFdLmhvdXJzLCBkYXRhLmN1cnJlbnRUaW1lKTtcbiAgICAgICAgICAgIHJlbmRlcldlZWtseShkYXRhLmRheXMuc3BsaWNlKDEpLCBkYXRhLmRheXMubGVuZ3RoIC0gMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkKCkge1xuICAgICAgICB3aGlsZSAoY29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIubGFzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBsb2FkaW5nV2hlZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGxvYWRpbmdXaGVlbC5jbGFzc05hbWUgPSAnbG9hZGVyJztcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxvYWRpbmdXaGVlbCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVuZGVyQ29udGVudCxcbiAgICAgICAgbG9hZCxcbiAgICB9XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBkb207IiwiaW1wb3J0IGFwaSBmcm9tICcuL2FwaSc7XG5pbXBvcnQgZG9tIGZyb20gJy4vZG9tJztcblxuY29uc3QgaGFuZGxlcnMgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1iYXIgaW5wdXQnKTtcbiAgICBjb25zdCB0b3BOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1uYXYnKTtcbiAgICBsZXQgY3VycmVudExvY2F0aW9uID0gJ0VkaW5idXJnaCc7XG5cbiAgICBhc3luYyBmdW5jdGlvbiBsb2FkKGxhdGl0dWRlLCBsb25naXR1ZGUsIGlucHV0ID0gJ0VkaW5idXJnaCcsIHVuaXRzID0gXCJtZXRyaWNcIikge1xuICAgICAgICBkb20ubG9hZCgpO1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgYXBpLmdldExvY2F0aW9uRGF0YShsYXRpdHVkZSwgbG9uZ2l0dWRlLCBpbnB1dCwgdW5pdHMpO1xuICAgICAgICBjdXJyZW50TG9jYXRpb24gPSBhcGkuZ2V0Q3VycmVudExvY2F0aW9uKCk7XG4gICAgICAgIGRvbS5yZW5kZXJDb250ZW50KGRhdGEsIHVuaXRzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBuYXZIYW5kbGVyKCkge1xuICAgICAgICBsZXQgdW5pdHMgPSAnbWV0cmljJztcbiAgICAgICAgdG9wTmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgc3dpdGNoICh0YXJnZXQuaWQpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdzZWFyY2gnOlxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50TG9jYXRpb24gPSBzZWFyY2hJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoSW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgbG9hZCh1bmRlZmluZWQsIHVuZGVmaW5lZCwgY3VycmVudExvY2F0aW9uLCB1bml0cyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbbmFtZT1cInVuaXRcIl0nKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGFzeW5jIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgdW5pdHMgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgICAgICBhd2FpdCBsb2FkKHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBjdXJyZW50TG9jYXRpb24sIHVuaXRzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBrZXlIYW5kbGVyKCkge1xuICAgICAgICBzZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoJykuY2xpY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVnaXN0ZXJIYW5kbGVycygpIHtcbiAgICAgICAgbmF2SGFuZGxlcigpO1xuICAgICAgICBrZXlIYW5kbGVyKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVnaXN0ZXJIYW5kbGVycyxcbiAgICAgICAgbG9hZCxcbiAgICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcnM7IiwiaW1wb3J0IGNsZWFyRGF5IGZyb20gJy4vaW1hZ2VzL2NsZWFyLWRheS5zdmcnXG5pbXBvcnQgY2xlYXJOaWdodCBmcm9tICcuL2ltYWdlcy9jbGVhci1uaWdodC5zdmcnXG5pbXBvcnQgY2xvdWR5IGZyb20gJy4vaW1hZ2VzL2Nsb3VkeS5zdmcnXG5pbXBvcnQgZm9nIGZyb20gJy4vaW1hZ2VzL2ZvZy5zdmcnXG5pbXBvcnQgYXJyb3dVcFRoaW4gZnJvbSAnLi9pbWFnZXMvYXJyb3ctdXAtdGhpbi5zdmcnXG5pbXBvcnQgcGFydGx5Q2xvdWR5RGF5IGZyb20gJy4vaW1hZ2VzL3BhcnRseS1jbG91ZHktZGF5LnN2ZydcbmltcG9ydCBwYXJ0bHlDbG91ZHlOaWdodCBmcm9tICcuL2ltYWdlcy9wYXJ0bHktY2xvdWR5LW5pZ2h0LnN2ZydcbmltcG9ydCByYWluIGZyb20gJy4vaW1hZ2VzL3JhaW4uc3ZnJ1xuaW1wb3J0IHNub3cgZnJvbSAnLi9pbWFnZXMvc25vdy5zdmcnXG5pbXBvcnQgd2luZCBmcm9tICcuL2ltYWdlcy93aW5kLnN2ZydcblxuY29uc3Qgb2JqID0ge1xuICAgIGNsZWFyRGF5LFxuICAgIGNsZWFyTmlnaHQsXG4gICAgY2xvdWR5LFxuICAgIGZvZyxcbiAgICBhcnJvd1VwVGhpbixcbiAgICBwYXJ0bHlDbG91ZHlEYXksXG4gICAgcGFydGx5Q2xvdWR5TmlnaHQsXG4gICAgcmFpbixcbiAgICBzbm93LFxuICAgIHdpbmQsXG59XG5cbmNvbnN0IGtlYmFiaXplID0gKHN0cikgPT4gc3RyLnJlcGxhY2UoL1tBLVpdKyg/IVthLXpdKXxbQS1aXS9nLCAoJCwgb2ZzKSA9PiAob2ZzID8gXCItXCIgOiBcIlwiKSArICQudG9Mb3dlckNhc2UoKSlcbmNvbnN0IGltYWdlcyA9IG5ldyBNYXAoKTtcblxuZm9yIChsZXQgW2tleSwgdmFsXSBvZiBPYmplY3QuZW50cmllcyhvYmopKSB7XG4gICAgaW1hZ2VzLnNldChrZWJhYml6ZShrZXkpLCB2YWwpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbWFnZXM7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGhhbmRsZXJzIGZyb20gXCIuL2hhbmRsZXJzXCI7XG5cbmhhbmRsZXJzLnJlZ2lzdGVySGFuZGxlcnMoKTtcbm5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oIChwb3NpdGlvbikgPT4ge1xuICAgIGhhbmRsZXJzLmxvYWQoYCR7cG9zaXRpb24uY29vcmRzLmxhdGl0dWRlfWAsIGAke3Bvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGV9YCk7XG59LCAoKSA9PiB7XG4gICAgaGFuZGxlcnMubG9hZCgpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=