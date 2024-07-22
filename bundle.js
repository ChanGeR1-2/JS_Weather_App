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
    grid-template: 2fr 10fr 1fr / 1fr 6fr 1fr;
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



`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --large-heading-text: 2rem;\n    --blue: #184f77;\n    --light-blue: #178bad;\n    --dark-blue: #0e2d44;\n    --white: #ffffff;\n    --transparent-white: rgba(255, 255, 255, 0.5);\n    --white-svg-filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(82deg) brightness(105%) contrast(105%);\n    --button-shadow: 0 0 0 2px var(--white);\n    --shadow-transition: all 0.3s ease-in-out;\n}\n*, *::before, *::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n.loader {\n    width: 48px;\n    height: 48px;\n    border-radius: 50%;\n    position: absolute;\n    animation: rotate 1s linear infinite\n}\n.loader::before {\n    content: \"\";\n    box-sizing: border-box;\n    position: absolute;\n    inset: 0;\n    border-radius: 50%;\n    border: 5px solid #FFF;\n    animation: prixClipFix 2s linear infinite ;\n}\n\n@keyframes rotate {\n    100%   {transform: rotate(360deg)}\n}\n\n@keyframes prixClipFix {\n    0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}\n    25%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}\n    50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}\n    75%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%)}\n    100% {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0)}\n}\n\nimg {\n    filter: var(--white-svg-filter);\n}\n\nbody {\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n.body-wrapper {\n    display: grid;\n    grid-template: 2fr 10fr 1fr / 1fr 6fr 1fr;\n    grid-template-areas:\n            \". header .\"\n    \". main-content .\"\n    \". . .\";\n    background-image: linear-gradient(to bottom, var(--light-blue), var(--blue) 60%, var(--dark-blue) 90%);\n    background-repeat: no-repeat;\n    color: var(--white);\n    min-height: 100vh;\n}\n\nheader {\n    grid-area: header;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 50px;\n}\n\n.main-nav {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    justify-content: center;\n    align-items: center;\n}\n\n.search-bar-wrapper {\n    display: flex;\n    width: 300px;\n    height: 35px;\n    background-color: var(--dark-blue);\n    border-radius: 9999px;\n    padding: 4px 16px;\n    transition: var(--shadow-transition);\n}\n.search-bar-wrapper:has(input:focus-visible) {\n    box-shadow: var(--button-shadow);\n}\n\n.search-button {\n    width: 25px;\n    height: 25px;\n    appearance: none;\n    outline: none;\n    background: transparent;\n    border: none;\n    cursor: pointer;\n}\n\n.search-bar {\n    flex: 1;\n}\n\n.search-bar input {\n    appearance: none;\n    outline: none;\n    border: none;\n    background: none;\n    color: var(--white);\n    height: 100%;\n    width: 100%;\n}\n\n.unit-buttons {\n    font-size: 0.65rem;\n    font-weight: bold;\n    display: flex;\n    align-items: center;\n    gap: 10px;\n}\n\n.unit-buttons input {\n    appearance: none;\n    outline: none;\n}\n\n.unit-buttons label {\n    width: max-content;\n    height: max-content;\n    background-color: var(--dark-blue);\n    padding: 10px;\n    border-radius: 9999px;\n    transition: var(--shadow-transition);\n    cursor: pointer;\n}\n.unit-buttons label:hover {\n    box-shadow: var(--button-shadow);\n}\n\n.unit-buttons label:has(input:checked) {\n    box-shadow: var(--button-shadow);\n}\n\n.main-content {\n    grid-area: main-content;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 2rem;\n    text-align: center;\n}\n\n.large-weather-img {\n    width: 75px;\n    height: 75px;\n}\n\n.large-temp-text {\n    font-size: 5rem;\n}\n\n.main-content h1 {\n    font-size: var(--large-heading-text);\n}\n\n.weather-div {\n    display: flex;\n    gap: 24px;\n}\n\n.flex-column {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n}\n.main-content .light-grey {\n    color: var(--transparent-white);\n}\n\n.stats-grid {\n    display: grid;\n    grid-template: 1fr 1fr 1fr / 1fr 1fr 1fr;\n    gap: 5%;\n    text-align: center;\n}\n\n.stats-grid > * {\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n}\n\n.stats-grid .info-box-wrapper {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.mini-weather-container {\n    display: flex;\n}\n\n.stats-grid .info-box {\n    width: max-content;\n    height: max-content;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.medium-text {\n    font-size: 1.5rem;\n}\n.small-text {\n    font-size: 1.175rem;\n}\n\n.wind-arrow {\n    width: 30px;\n    height: 30px;\n}\n\n.mini-wind-arrow {\n    width: 25px;\n    height: 25px;\n}\n\n.mini-weather-container {\n    gap: 10px;\n}\n.bottom-wrapper h1 {\n    margin-bottom: 25px;\n    text-align: center;\n}\n\n.weekly {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    font-size: 1.25rem;\n}\n\n.weekly > div {\n    display: grid;\n    grid-template-columns: 2fr 1fr 1fr 1fr;\n    gap: 20px;\n    padding: 10px;\n}\n\n@media (max-width: 600px) {\n    .weekly > div {\n        grid-template-columns: 1fr 2fr 1fr 1fr;\n        gap: 5px;\n    }\n    .weather-div {\n        gap: 0;\n        flex-direction: column;\n    }\n    .body-wrapper {\n       display: block;\n    }\n    .stats-grid {\n        grid-template: 1fr 1fr 1fr 1fr / 1fr 1fr;\n    }\n}\n\n.weekly > div:not(:last-child) {\n    border-bottom: 2px solid var(--transparent-white);\n}\n\n\n.day > div:first-child {\n    font-weight: bold;\n}\n\n.mini-weather-icon {\n    width: 25px;\n    height: 25px;\n}\n\n.circle {\n    border-radius: 100%;\n}\n\n\n\n"],"sourceRoot":""}]);
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
            }
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
        }
        return {
            currentTime,
            location,
            description,
            days,
        };
    }

    return {
        getLocationData,
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

    async function load(latitude, longitude, input, units = "metric") {
        _dom__WEBPACK_IMPORTED_MODULE_1__["default"].load();
        const data = await _api__WEBPACK_IMPORTED_MODULE_0__["default"].getLocationData(latitude, longitude, input, units);
        _dom__WEBPACK_IMPORTED_MODULE_1__["default"].renderContent(data, units);
    }

    function navHandler() {
        let input = 'London';
        let units = 'metric';
        topNav.addEventListener('click', async (e) => {
            const target = e.target;
            switch (target.id) {
                case 'search':
                    input = searchInput.value;
                    searchInput.value = '';
                    await load(undefined, undefined, input, units);
                    break;
            }
        });
        document.querySelectorAll('input[name="unit"]').forEach((element) => {
            element.addEventListener('change', async (e) => {
                units = e.target.value;
                await load(undefined, undefined, input, units);
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
    _handlers__WEBPACK_IMPORTED_MODULE_1__["default"].load(`${position.coords.latitude}`, `${position.coords.longitude}`, undefined);
}, () => {
    _handlers__WEBPACK_IMPORTED_MODULE_1__["default"].load();
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksUUFBUSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUs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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7QUNBcUI7QUFDYTs7QUFFbEMsaURBQVE7QUFDUjtBQUNBLElBQUksaURBQVEsU0FBUyx5QkFBeUIsTUFBTSwwQkFBMEI7QUFDOUUsQ0FBQztBQUNELElBQUksaURBQVE7QUFDWixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNfd2VhdGhlcl9hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2pzX3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9qc193ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2pzX3dlYXRoZXJfYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2pzX3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2pzX3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9qc193ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9qc193ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9qc193ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2pzX3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vanNfd2VhdGhlcl9hcHAvLi9zcmMvYXBpLmpzIiwid2VicGFjazovL2pzX3dlYXRoZXJfYXBwLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly9qc193ZWF0aGVyX2FwcC8uL3NyYy9oYW5kbGVycy5qcyIsIndlYnBhY2s6Ly9qc193ZWF0aGVyX2FwcC8uL3NyYy9pbWFnZXMuanMiLCJ3ZWJwYWNrOi8vanNfd2VhdGhlcl9hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vanNfd2VhdGhlcl9hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vanNfd2VhdGhlcl9hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pzX3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vanNfd2VhdGhlcl9hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qc193ZWF0aGVyX2FwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pzX3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2pzX3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9qc193ZWF0aGVyX2FwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAgIC0tbGFyZ2UtaGVhZGluZy10ZXh0OiAycmVtO1xuICAgIC0tYmx1ZTogIzE4NGY3NztcbiAgICAtLWxpZ2h0LWJsdWU6ICMxNzhiYWQ7XG4gICAgLS1kYXJrLWJsdWU6ICMwZTJkNDQ7XG4gICAgLS13aGl0ZTogI2ZmZmZmZjtcbiAgICAtLXRyYW5zcGFyZW50LXdoaXRlOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gICAgLS13aGl0ZS1zdmctZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDAlKSBodWUtcm90YXRlKDgyZGVnKSBicmlnaHRuZXNzKDEwNSUpIGNvbnRyYXN0KDEwNSUpO1xuICAgIC0tYnV0dG9uLXNoYWRvdzogMCAwIDAgMnB4IHZhcigtLXdoaXRlKTtcbiAgICAtLXNoYWRvdy10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbi5sb2FkZXIge1xuICAgIHdpZHRoOiA0OHB4O1xuICAgIGhlaWdodDogNDhweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGFuaW1hdGlvbjogcm90YXRlIDFzIGxpbmVhciBpbmZpbml0ZVxufVxuLmxvYWRlcjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGluc2V0OiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjRkZGO1xuICAgIGFuaW1hdGlvbjogcHJpeENsaXBGaXggMnMgbGluZWFyIGluZmluaXRlIDtcbn1cblxuQGtleWZyYW1lcyByb3RhdGUge1xuICAgIDEwMCUgICB7dHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKX1cbn1cblxuQGtleWZyYW1lcyBwcml4Q2xpcEZpeCB7XG4gICAgMCUgICB7Y2xpcC1wYXRoOnBvbHlnb24oNTAlIDUwJSwwIDAsMCAwLDAgMCwwIDAsMCAwKX1cbiAgICAyNSUgIHtjbGlwLXBhdGg6cG9seWdvbig1MCUgNTAlLDAgMCwxMDAlIDAsMTAwJSAwLDEwMCUgMCwxMDAlIDApfVxuICAgIDUwJSAge2NsaXAtcGF0aDpwb2x5Z29uKDUwJSA1MCUsMCAwLDEwMCUgMCwxMDAlIDEwMCUsMTAwJSAxMDAlLDEwMCUgMTAwJSl9XG4gICAgNzUlICB7Y2xpcC1wYXRoOnBvbHlnb24oNTAlIDUwJSwwIDAsMTAwJSAwLDEwMCUgMTAwJSwwIDEwMCUsMCAxMDAlKX1cbiAgICAxMDAlIHtjbGlwLXBhdGg6cG9seWdvbig1MCUgNTAlLDAgMCwxMDAlIDAsMTAwJSAxMDAlLDAgMTAwJSwwIDApfVxufVxuXG5pbWcge1xuICAgIGZpbHRlcjogdmFyKC0td2hpdGUtc3ZnLWZpbHRlcik7XG59XG5cbmJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG4uYm9keS13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGU6IDJmciAxMGZyIDFmciAvIDFmciA2ZnIgMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICAgICAgICBcIi4gaGVhZGVyIC5cIlxuICAgIFwiLiBtYWluLWNvbnRlbnQgLlwiXG4gICAgXCIuIC4gLlwiO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHZhcigtLWxpZ2h0LWJsdWUpLCB2YXIoLS1ibHVlKSA2MCUsIHZhcigtLWRhcmstYmx1ZSkgOTAlKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbmhlYWRlciB7XG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogNTBweDtcbn1cblxuLm1haW4tbmF2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAyMHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zZWFyY2gtYmFyLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcbiAgICBwYWRkaW5nOiA0cHggMTZweDtcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS1zaGFkb3ctdHJhbnNpdGlvbik7XG59XG4uc2VhcmNoLWJhci13cmFwcGVyOmhhcyhpbnB1dDpmb2N1cy12aXNpYmxlKSB7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tYnV0dG9uLXNoYWRvdyk7XG59XG5cbi5zZWFyY2gtYnV0dG9uIHtcbiAgICB3aWR0aDogMjVweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zZWFyY2gtYmFyIHtcbiAgICBmbGV4OiAxO1xufVxuXG4uc2VhcmNoLWJhciBpbnB1dCB7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4udW5pdC1idXR0b25zIHtcbiAgICBmb250LXNpemU6IDAuNjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbn1cblxuLnVuaXQtYnV0dG9ucyBpbnB1dCB7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4udW5pdC1idXR0b25zIGxhYmVsIHtcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xuICAgIHRyYW5zaXRpb246IHZhcigtLXNoYWRvdy10cmFuc2l0aW9uKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4udW5pdC1idXR0b25zIGxhYmVsOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1idXR0b24tc2hhZG93KTtcbn1cblxuLnVuaXQtYnV0dG9ucyBsYWJlbDpoYXMoaW5wdXQ6Y2hlY2tlZCkge1xuICAgIGJveC1zaGFkb3c6IHZhcigtLWJ1dHRvbi1zaGFkb3cpO1xufVxuXG4ubWFpbi1jb250ZW50IHtcbiAgICBncmlkLWFyZWE6IG1haW4tY29udGVudDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDJyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubGFyZ2Utd2VhdGhlci1pbWcge1xuICAgIHdpZHRoOiA3NXB4O1xuICAgIGhlaWdodDogNzVweDtcbn1cblxuLmxhcmdlLXRlbXAtdGV4dCB7XG4gICAgZm9udC1zaXplOiA1cmVtO1xufVxuXG4ubWFpbi1jb250ZW50IGgxIHtcbiAgICBmb250LXNpemU6IHZhcigtLWxhcmdlLWhlYWRpbmctdGV4dCk7XG59XG5cbi53ZWF0aGVyLWRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDI0cHg7XG59XG5cbi5mbGV4LWNvbHVtbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogOHB4O1xufVxuLm1haW4tY29udGVudCAubGlnaHQtZ3JleSB7XG4gICAgY29sb3I6IHZhcigtLXRyYW5zcGFyZW50LXdoaXRlKTtcbn1cblxuLnN0YXRzLWdyaWQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIDFmciAxZnIgLyAxZnIgMWZyIDFmcjtcbiAgICBnYXA6IDUlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnN0YXRzLWdyaWQgPiAqIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiA0cHg7XG59XG5cbi5zdGF0cy1ncmlkIC5pbmZvLWJveC13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5taW5pLXdlYXRoZXItY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uc3RhdHMtZ3JpZCAuaW5mby1ib3gge1xuICAgIHdpZHRoOiBtYXgtY29udGVudDtcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1lZGl1bS10ZXh0IHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbn1cbi5zbWFsbC10ZXh0IHtcbiAgICBmb250LXNpemU6IDEuMTc1cmVtO1xufVxuXG4ud2luZC1hcnJvdyB7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xufVxuXG4ubWluaS13aW5kLWFycm93IHtcbiAgICB3aWR0aDogMjVweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG59XG5cbi5taW5pLXdlYXRoZXItY29udGFpbmVyIHtcbiAgICBnYXA6IDEwcHg7XG59XG4uYm90dG9tLXdyYXBwZXIgaDEge1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ud2Vla2x5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbn1cblxuLndlZWtseSA+IGRpdiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnIgMWZyIDFmcjtcbiAgICBnYXA6IDIwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgLndlZWtseSA+IGRpdiB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmciAxZnIgMWZyO1xuICAgICAgICBnYXA6IDVweDtcbiAgICB9XG4gICAgLndlYXRoZXItZGl2IHtcbiAgICAgICAgZ2FwOiAwO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbiAgICAuYm9keS13cmFwcGVyIHtcbiAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgLnN0YXRzLWdyaWQge1xuICAgICAgICBncmlkLXRlbXBsYXRlOiAxZnIgMWZyIDFmciAxZnIgLyAxZnIgMWZyO1xuICAgIH1cbn1cblxuLndlZWtseSA+IGRpdjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tdHJhbnNwYXJlbnQtd2hpdGUpO1xufVxuXG5cbi5kYXkgPiBkaXY6Zmlyc3QtY2hpbGQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubWluaS13ZWF0aGVyLWljb24ge1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGhlaWdodDogMjVweDtcbn1cblxuLmNpcmNsZSB7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbn1cblxuXG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsNkNBQTZDO0lBQzdDLHlHQUF5RztJQUN6Ryx1Q0FBdUM7SUFDdkMseUNBQXlDO0FBQzdDO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQjtBQUNKO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1Isa0JBQWtCO0lBQ2xCLHNC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O0FBRUE7SUFDSTtRQUNJLHNDQUFzQztRQUN0QyxRQUFRO0lBQ1o7SUFDQTtRQUNJLE1BQU07UUFDTixzQkFBc0I7SUFDMUI7SUFDQTtPQUNHLGNBQWM7SUFDakI7SUFDQTtRQUNJLHdDQUF3QztJQUM1QztBQUNKOztBQUVBO0lBQ0ksaURBQWlEO0FBQ3JEOzs7QUFHQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1sYXJnZS1oZWFkaW5nLXRleHQ6IDJyZW07XFxuICAgIC0tYmx1ZTogIzE4NGY3NztcXG4gICAgLS1saWdodC1ibHVlOiAjMTc4YmFkO1xcbiAgICAtLWRhcmstYmx1ZTogIzBlMmQ0NDtcXG4gICAgLS13aGl0ZTogI2ZmZmZmZjtcXG4gICAgLS10cmFuc3BhcmVudC13aGl0ZTogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbiAgICAtLXdoaXRlLXN2Zy1maWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoMCUpIGh1ZS1yb3RhdGUoODJkZWcpIGJyaWdodG5lc3MoMTA1JSkgY29udHJhc3QoMTA1JSk7XFxuICAgIC0tYnV0dG9uLXNoYWRvdzogMCAwIDAgMnB4IHZhcigtLXdoaXRlKTtcXG4gICAgLS1zaGFkb3ctdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi5sb2FkZXIge1xcbiAgICB3aWR0aDogNDhweDtcXG4gICAgaGVpZ2h0OiA0OHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYW5pbWF0aW9uOiByb3RhdGUgMXMgbGluZWFyIGluZmluaXRlXFxufVxcbi5sb2FkZXI6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGluc2V0OiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkICNGRkY7XFxuICAgIGFuaW1hdGlvbjogcHJpeENsaXBGaXggMnMgbGluZWFyIGluZmluaXRlIDtcXG59XFxuXFxuQGtleWZyYW1lcyByb3RhdGUge1xcbiAgICAxMDAlICAge3RyYW5zZm9ybTogcm90YXRlKDM2MGRlZyl9XFxufVxcblxcbkBrZXlmcmFtZXMgcHJpeENsaXBGaXgge1xcbiAgICAwJSAgIHtjbGlwLXBhdGg6cG9seWdvbig1MCUgNTAlLDAgMCwwIDAsMCAwLDAgMCwwIDApfVxcbiAgICAyNSUgIHtjbGlwLXBhdGg6cG9seWdvbig1MCUgNTAlLDAgMCwxMDAlIDAsMTAwJSAwLDEwMCUgMCwxMDAlIDApfVxcbiAgICA1MCUgIHtjbGlwLXBhdGg6cG9seWdvbig1MCUgNTAlLDAgMCwxMDAlIDAsMTAwJSAxMDAlLDEwMCUgMTAwJSwxMDAlIDEwMCUpfVxcbiAgICA3NSUgIHtjbGlwLXBhdGg6cG9seWdvbig1MCUgNTAlLDAgMCwxMDAlIDAsMTAwJSAxMDAlLDAgMTAwJSwwIDEwMCUpfVxcbiAgICAxMDAlIHtjbGlwLXBhdGg6cG9seWdvbig1MCUgNTAlLDAgMCwxMDAlIDAsMTAwJSAxMDAlLDAgMTAwJSwwIDApfVxcbn1cXG5cXG5pbWcge1xcbiAgICBmaWx0ZXI6IHZhcigtLXdoaXRlLXN2Zy1maWx0ZXIpO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5ib2R5LXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiAyZnIgMTBmciAxZnIgLyAxZnIgNmZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgICAgICBcXFwiLiBoZWFkZXIgLlxcXCJcXG4gICAgXFxcIi4gbWFpbi1jb250ZW50IC5cXFwiXFxuICAgIFxcXCIuIC4gLlxcXCI7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHZhcigtLWxpZ2h0LWJsdWUpLCB2YXIoLS1ibHVlKSA2MCUsIHZhcigtLWRhcmstYmx1ZSkgOTAlKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogNTBweDtcXG59XFxuXFxuLm1haW4tbmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNlYXJjaC1iYXItd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xcbiAgICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XFxuICAgIHBhZGRpbmc6IDRweCAxNnB4O1xcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS1zaGFkb3ctdHJhbnNpdGlvbik7XFxufVxcbi5zZWFyY2gtYmFyLXdyYXBwZXI6aGFzKGlucHV0OmZvY3VzLXZpc2libGUpIHtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYnV0dG9uLXNoYWRvdyk7XFxufVxcblxcbi5zZWFyY2gtYnV0dG9uIHtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2VhcmNoLWJhciB7XFxuICAgIGZsZXg6IDE7XFxufVxcblxcbi5zZWFyY2gtYmFyIGlucHV0IHtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udW5pdC1idXR0b25zIHtcXG4gICAgZm9udC1zaXplOiAwLjY1cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4udW5pdC1idXR0b25zIGlucHV0IHtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnVuaXQtYnV0dG9ucyBsYWJlbCB7XFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS1zaGFkb3ctdHJhbnNpdGlvbik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnVuaXQtYnV0dG9ucyBsYWJlbDpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWJ1dHRvbi1zaGFkb3cpO1xcbn1cXG5cXG4udW5pdC1idXR0b25zIGxhYmVsOmhhcyhpbnB1dDpjaGVja2VkKSB7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWJ1dHRvbi1zaGFkb3cpO1xcbn1cXG5cXG4ubWFpbi1jb250ZW50IHtcXG4gICAgZ3JpZC1hcmVhOiBtYWluLWNvbnRlbnQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMnJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubGFyZ2Utd2VhdGhlci1pbWcge1xcbiAgICB3aWR0aDogNzVweDtcXG4gICAgaGVpZ2h0OiA3NXB4O1xcbn1cXG5cXG4ubGFyZ2UtdGVtcC10ZXh0IHtcXG4gICAgZm9udC1zaXplOiA1cmVtO1xcbn1cXG5cXG4ubWFpbi1jb250ZW50IGgxIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1sYXJnZS1oZWFkaW5nLXRleHQpO1xcbn1cXG5cXG4ud2VhdGhlci1kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDI0cHg7XFxufVxcblxcbi5mbGV4LWNvbHVtbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogOHB4O1xcbn1cXG4ubWFpbi1jb250ZW50IC5saWdodC1ncmV5IHtcXG4gICAgY29sb3I6IHZhcigtLXRyYW5zcGFyZW50LXdoaXRlKTtcXG59XFxuXFxuLnN0YXRzLWdyaWQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgMWZyIDFmciAvIDFmciAxZnIgMWZyO1xcbiAgICBnYXA6IDUlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5zdGF0cy1ncmlkID4gKiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNHB4O1xcbn1cXG5cXG4uc3RhdHMtZ3JpZCAuaW5mby1ib3gtd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWluaS13ZWF0aGVyLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5zdGF0cy1ncmlkIC5pbmZvLWJveCB7XFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tZWRpdW0tdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG4uc21hbGwtdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMS4xNzVyZW07XFxufVxcblxcbi53aW5kLWFycm93IHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG59XFxuXFxuLm1pbmktd2luZC1hcnJvdyB7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxufVxcblxcbi5taW5pLXdlYXRoZXItY29udGFpbmVyIHtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG4uYm90dG9tLXdyYXBwZXIgaDEge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi53ZWVrbHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG59XFxuXFxuLndlZWtseSA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmciAxZnIgMWZyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICAud2Vla2x5ID4gZGl2IHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmciAxZnIgMWZyO1xcbiAgICAgICAgZ2FwOiA1cHg7XFxuICAgIH1cXG4gICAgLndlYXRoZXItZGl2IHtcXG4gICAgICAgIGdhcDogMDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG4gICAgLmJvZHktd3JhcHBlciB7XFxuICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB9XFxuICAgIC5zdGF0cy1ncmlkIHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGU6IDFmciAxZnIgMWZyIDFmciAvIDFmciAxZnI7XFxuICAgIH1cXG59XFxuXFxuLndlZWtseSA+IGRpdjpub3QoOmxhc3QtY2hpbGQpIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXRyYW5zcGFyZW50LXdoaXRlKTtcXG59XFxuXFxuXFxuLmRheSA+IGRpdjpmaXJzdC1jaGlsZCB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubWluaS13ZWF0aGVyLWljb24ge1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbn1cXG5cXG4uY2lyY2xlIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG59XFxuXFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBhcGkgPSAobG9jYWxlcyA9PiB7XG4gICAgY29uc3QgYXBpS2V5ID0gJ0pTTjgzU1dXNzc5ODlTNlpFNDNTRVNNWDInO1xuXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0TG9jYXRpb25EYXRhKGxhdGl0dWRlLCBsb25naXR1ZGUsIGxvY2F0aW9uLCB1bml0ID0gJ21ldHJpYycpIHtcbiAgICAgICAgaWYgKGxhdGl0dWRlICYmIGxvbmdpdHVkZSkge1xuICAgICAgICAgICAgY29uc3QgbG9jYXRpb25SZXF1ZXN0ID0gbmV3IFJlcXVlc3QoYGh0dHBzOi8vYXBpLmJpZ2RhdGFjbG91ZC5uZXQvZGF0YS9yZXZlcnNlLWdlb2NvZGUtY2xpZW50P2xhdGl0dWRlPSR7bGF0aXR1ZGV9JmxvbmdpdHVkZT0ke2xvbmdpdHVkZX0mbG9jYWxpdHlMYW5ndWFnZT1lbmApO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhdGlvblJlc3BvbnNlID0gYXdhaXQgZmV0Y2gobG9jYXRpb25SZXF1ZXN0KTtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhdGlvbkRhdGEgPSBhd2FpdCBsb2NhdGlvblJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgICBsb2NhdGlvbiA9IGAke2xvY2F0aW9uRGF0YS5jaXR5fSwgJHtsb2NhdGlvbkRhdGEuY291bnRyeUNvZGV9YDtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtjb2RlOiBlcnJvci5uYW1lLCBtZXNzYWdlOiBlcnJvci5tZXNzYWdlfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoYGh0dHBzOi8vd2VhdGhlci52aXN1YWxjcm9zc2luZy5jb20vVmlzdWFsQ3Jvc3NpbmdXZWJTZXJ2aWNlcy9yZXN0L3NlcnZpY2VzL3RpbWVsaW5lLyR7bG9jYXRpb259P3VuaXRHcm91cD0ke3VuaXR9JmtleT0ke2FwaUtleX0mY29udGVudFR5cGU9anNvbiZsYW5nPWVuYCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHt9LFxuICAgICAgICB9KTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocmVxdWVzdCk7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID49IDQwMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IHRleHRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb2Nlc3NEYXRhKGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIHtjb2RlOiBlcnJvci5uYW1lLCBtZXNzYWdlOiBlcnJvci5tZXNzYWdlfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByb2Nlc3NEYXRhKGRhdGEpIHtcbiAgICAgICAgY29uc3QgY3VycmVudFRpbWUgPSBuZXcgRGF0ZShuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIiwge3RpbWVab25lOiBgJHtkYXRhLnRpbWV6b25lfWB9KSk7XG4gICAgICAgIGNvbnN0IGxvY2F0aW9uID0gZGF0YS5yZXNvbHZlZEFkZHJlc3M7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZGF0YS5kZXNjcmlwdGlvbjtcblxuICAgICAgICBjb25zdCBkYXlzRGF0YSA9IGRhdGEuZGF5cztcblxuICAgICAgICBjb25zdCBkYXlzID0gW107XG5cbiAgICAgICAgY29uc3QgdG9kYXlEYXRhID0gZGF5c0RhdGFbMF07XG4gICAgICAgIGRheXNbMF0gPSB7XG4gICAgICAgICAgICBjb25kaXRpb25zOiB0b2RheURhdGEuY29uZGl0aW9ucyxcbiAgICAgICAgICAgIHRlbXA6IE1hdGgucm91bmQodG9kYXlEYXRhLnRlbXApLFxuICAgICAgICAgICAgd2luZGRpcjogTWF0aC5yb3VuZCh0b2RheURhdGEud2luZGRpciksXG4gICAgICAgICAgICBmZWVsc2xpa2U6IE1hdGgucm91bmQodG9kYXlEYXRhLmZlZWxzbGlrZSksXG4gICAgICAgICAgICBpY29uOiB0b2RheURhdGEuaWNvbixcbiAgICAgICAgICAgIHN0YXRzOiB7XG4gICAgICAgICAgICAgICAgd2luZHNwZWVkOiBNYXRoLnJvdW5kKHRvZGF5RGF0YS53aW5kc3BlZWQpLFxuICAgICAgICAgICAgICAgIGh1bWlkaXR5OiBNYXRoLnJvdW5kKHRvZGF5RGF0YS5odW1pZGl0eSksXG4gICAgICAgICAgICAgICAgdXZpbmRleDogdG9kYXlEYXRhLnV2aW5kZXgsXG4gICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogTWF0aC5yb3VuZCh0b2RheURhdGEudmlzaWJpbGl0eSksXG4gICAgICAgICAgICAgICAgY2xvdWRjb3ZlcjogTWF0aC5yb3VuZCh0b2RheURhdGEuY2xvdWRjb3ZlciksXG4gICAgICAgICAgICAgICAgcHJlY2lwcHJvYjogTWF0aC5yb3VuZCh0b2RheURhdGEucHJlY2lwcHJvYiksXG4gICAgICAgICAgICAgICAgc3VucmlzZTogdG9kYXlEYXRhLnN1bnJpc2Uuc2xpY2UoMCwgLTMpLFxuICAgICAgICAgICAgICAgIHN1bnNldDogdG9kYXlEYXRhLnN1bnNldC5zbGljZSgwLCAtMyksXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNzsgaSsrKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGRheURhdGEgPSBkYXlzRGF0YVtpXTtcbiAgICAgICAgICAgIGRheXNbaV0gPSB7XG4gICAgICAgICAgICAgICAgZGF0ZXRpbWU6IG5ldyBEYXRlKGRheURhdGEuZGF0ZXRpbWUpLFxuICAgICAgICAgICAgICAgIGljb246IGRheURhdGEuaWNvbixcbiAgICAgICAgICAgICAgICB0ZW1wTWluOiBNYXRoLnJvdW5kKGRheURhdGEudGVtcG1pbiksXG4gICAgICAgICAgICAgICAgdGVtcE1heDogTWF0aC5yb3VuZChkYXlEYXRhLnRlbXBtYXgpLFxuICAgICAgICAgICAgICAgIHdpbmRzcGVlZDogTWF0aC5yb3VuZChkYXlEYXRhLndpbmRzcGVlZCksXG4gICAgICAgICAgICAgICAgd2luZGRpcjogTWF0aC5yb3VuZChkYXlEYXRhLndpbmRkaXIpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY3VycmVudFRpbWUsXG4gICAgICAgICAgICBsb2NhdGlvbixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgZGF5cyxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRMb2NhdGlvbkRhdGEsXG4gICAgfVxufSkoKTtcblxuXG5leHBvcnQgZGVmYXVsdCBhcGkiLCJpbXBvcnQgaW1hZ2VzIGZyb20gJy4vaW1hZ2VzJ1xuXG5jb25zdCBkb20gPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRlbnQnKTtcbiAgICBsZXQgdW5pdHM7XG5cbiAgICBmdW5jdGlvbiByZW5kZXJUb2RheSh0b2RheSwgY3VycmVudFRpbWUsIGxvY2F0aW9uLCBkZXNjcmlwdGlvbikge1xuICAgICAgICBjb25zdCBoZWFkaW5nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gbG9jYXRpb247XG4gICAgICAgIGNvbnN0IGRhdGVIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgZGF0ZUhlYWRpbmcuY2xhc3NOYW1lID0gJ2xpZ2h0LWdyZXkgc21hbGwtdGV4dCc7XG4gICAgICAgIGRhdGVIZWFkaW5nLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFRpbWUudG9EYXRlU3RyaW5nKCl9IHwgJHtjdXJyZW50VGltZS5nZXRIb3VycygpIDwgMTAgPyAnMCcgKyBjdXJyZW50VGltZS5nZXRIb3VycygpIDogY3VycmVudFRpbWUuZ2V0SG91cnMoKX06JHtjdXJyZW50VGltZS5nZXRNaW51dGVzKCkgPCAxMCA/ICcwJyArIGN1cnJlbnRUaW1lLmdldE1pbnV0ZXMoKSA6IGN1cnJlbnRUaW1lLmdldE1pbnV0ZXMoKX1gO1xuICAgICAgICBoZWFkaW5nRGl2LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgICAgICBoZWFkaW5nRGl2LmFwcGVuZENoaWxkKGRhdGVIZWFkaW5nKTtcblxuICAgICAgICBjb25zdCB3ZWF0aGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgd2VhdGhlckRpdi5jbGFzc05hbWUgPSAnd2VhdGhlci1kaXYnO1xuICAgICAgICBjb25zdCB0ZW1wQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHdlYXRoZXJJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB3ZWF0aGVySW1hZ2Uuc3JjID0gaW1hZ2VzLmdldCh0b2RheS5pY29uKTtcbiAgICAgICAgd2VhdGhlckltYWdlLmFsdCA9IHRvZGF5Lmljb247XG4gICAgICAgIHdlYXRoZXJJbWFnZS5jbGFzc05hbWUgPSAnbGFyZ2Utd2VhdGhlci1pbWcnO1xuICAgICAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICB0ZXh0LmNsYXNzTmFtZSA9ICdsYXJnZS10ZW1wLXRleHQnO1xuICAgICAgICB0ZXh0LnRleHRDb250ZW50ID0gYCR7dG9kYXkudGVtcH1cXHhCMCR7Zm9ybWF0VGVtcFVuaXRzKCl9YDtcbiAgICAgICAgdGVtcENvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWF0aGVySW1hZ2UpO1xuICAgICAgICB0ZW1wQ29udGFpbmVyLmFwcGVuZENoaWxkKHRleHQpO1xuXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRlc2NyaXB0aW9uRGl2LmNsYXNzTmFtZSA9ICdmbGV4LWNvbHVtbic7XG4gICAgICAgIGNvbnN0IHNtYWxsSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgc21hbGxIZWFkZXIuY2xhc3NOYW1lID0gJ21lZGl1bS10ZXh0JztcbiAgICAgICAgc21hbGxIZWFkZXIudGV4dENvbnRlbnQgPSBgJHt0b2RheS5jb25kaXRpb25zfWA7XG4gICAgICAgIGNvbnN0IGZlZWxzTGlrZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGZlZWxzTGlrZVRleHQuY2xhc3NOYW1lID0gJ2xpZ2h0LWdyZXkgc21hbGwtdGV4dCc7XG4gICAgICAgIGZlZWxzTGlrZVRleHQudGV4dENvbnRlbnQgPSBgRmVlbHMgbGlrZSAke3RvZGF5LmZlZWxzbGlrZX1cXHhCMCR7Zm9ybWF0VGVtcFVuaXRzKCl9YDtcbiAgICAgICAgZGVzY3JpcHRpb25EaXYuYXBwZW5kQ2hpbGQoc21hbGxIZWFkZXIpO1xuICAgICAgICBkZXNjcmlwdGlvbkRpdi5hcHBlbmRDaGlsZChmZWVsc0xpa2VUZXh0KTtcblxuICAgICAgICB3ZWF0aGVyRGl2LmFwcGVuZENoaWxkKHRlbXBDb250YWluZXIpO1xuICAgICAgICB3ZWF0aGVyRGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRGl2KTtcblxuICAgICAgICBjb25zdCBzdGF0c0dyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc3RhdHNHcmlkLmNsYXNzTmFtZSA9ICdzdGF0cy1ncmlkJztcblxuICAgICAgICBmb3IgKGxldCBba2V5LCB2YWxdIG9mIE9iamVjdC5lbnRyaWVzKHRvZGF5LnN0YXRzKSkge1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGZvcm1hdERhdGFOYW1lKGtleSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgICAgICAgICBjb25zdCBuYW1lVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgbmFtZVRhZy5jbGFzc05hbWUgPSAnbGlnaHQtZ3JleSBzbWFsbC10ZXh0JztcbiAgICAgICAgICAgIG5hbWVUYWcudGV4dENvbnRlbnQgPSBuYW1lO1xuXG4gICAgICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKG5hbWVUYWcpO1xuXG4gICAgICAgICAgICBjb25zdCBpbmZvQm94V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgaW5mb0JveFdyYXBwZXIuY2xhc3NOYW1lID0gJ2luZm8tYm94LXdyYXBwZXInO1xuXG4gICAgICAgICAgICBjb25zdCBpbmZvQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgaW5mb0JveC5jbGFzc05hbWUgPSAnbWVkaXVtLXRleHQgaW5mby1ib3gnO1xuICAgICAgICAgICAgaW5mb0JveC50ZXh0Q29udGVudCA9IGAke3ZhbH0ke2dldFVuaXRzKGtleSkgPyBnZXRVbml0cyhrZXkpIDogJyd9YDtcblxuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ3V2aW5kZXgnKSB7XG4gICAgICAgICAgICAgICAgaW5mb0JveC5jbGFzc0xpc3QuYWRkKCdjaXJjbGUnKTtcbiAgICAgICAgICAgICAgICBpbmZvQm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGAke2dldFV2Q29sb3VyKHZhbCl9YDtcbiAgICAgICAgICAgICAgICBpbmZvQm94LnN0eWxlLndpZHRoID0gJzM1cHgnO1xuICAgICAgICAgICAgICAgIGluZm9Cb3guc3R5bGUuaGVpZ2h0ID0gJzM1cHgnO1xuICAgICAgICAgICAgICAgIGluZm9Cb3guc3R5bGUuZm9udFdlaWdodCA9ICdib2xkJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ3dpbmRzcGVlZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB3aW5kQXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgICAgICB3aW5kQXJyb3cuc3JjID0gaW1hZ2VzLmdldCgnYXJyb3ctdXAtdGhpbicpO1xuICAgICAgICAgICAgICAgIHdpbmRBcnJvdy5hbHQgPSAnd2luZCBkaXJlY3Rpb24nO1xuICAgICAgICAgICAgICAgIHdpbmRBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlKCR7dG9kYXkud2luZGRpcn1kZWcpYDtcbiAgICAgICAgICAgICAgICB3aW5kQXJyb3cuY2xhc3NOYW1lID0gJ3dpbmQtYXJyb3cnO1xuXG4gICAgICAgICAgICAgICAgaW5mb0JveFdyYXBwZXIuYXBwZW5kQ2hpbGQod2luZEFycm93KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW5mb0JveFdyYXBwZXIuYXBwZW5kQ2hpbGQoaW5mb0JveCk7XG4gICAgICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGluZm9Cb3hXcmFwcGVyKTtcblxuICAgICAgICAgICAgc3RhdHNHcmlkLmFwcGVuZENoaWxkKHdyYXBwZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRpbmdEaXYpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQod2VhdGhlckRpdik7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzdGF0c0dyaWQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZvcm1hdFRlbXBVbml0cygpIHtcbiAgICAgICAgc3dpdGNoICh1bml0cykge1xuICAgICAgICAgICAgY2FzZSAnbWV0cmljJzpcbiAgICAgICAgICAgIGNhc2UgJ3VrJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0MnO1xuICAgICAgICAgICAgY2FzZSAndXMnOlxuICAgICAgICAgICAgICAgIHJldHVybiAnRic7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRVbml0cyhuYW1lKSB7XG4gICAgICAgIGxldCByZXN1bHQ7XG4gICAgICAgIHN3aXRjaCAobmFtZSkge1xuICAgICAgICAgICAgY2FzZSAnd2luZHNwZWVkJzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB1bml0cyA9PT0gJ21ldHJpYycgPyAna20vaCcgOiAnbXBoJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2h1bWlkaXR5JzpcbiAgICAgICAgICAgIGNhc2UgJ2Nsb3VkY292ZXInOlxuICAgICAgICAgICAgY2FzZSAncHJlY2lwcHJvYic6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gJyUnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndmlzaWJpbGl0eSc6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdW5pdHMgPT09ICdtZXRyaWMnID8gJ2ttJyA6ICdtaSc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmb3JtYXREYXRhTmFtZShuYW1lKSB7XG4gICAgICAgIGxldCByZXN1bHQ7XG4gICAgICAgIHN3aXRjaCAobmFtZSkge1xuICAgICAgICAgICAgY2FzZSAnd2luZHNwZWVkJzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSAnV2luZCc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdodW1pZGl0eSc6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gJ0h1bWlkaXR5JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3V2aW5kZXgnOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9ICdVViBJbmRleCc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd2aXNpYmlsaXR5JzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSAnVmlzaWJpbGl0eSc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjbG91ZGNvdmVyJzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSAnQ2xvdWRjb3Zlcic7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdwcmVjaXBwcm9iJzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSAnQ2hhbmNlIG9mIHJhaW4nO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc3VucmlzZSc6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gJ1N1bnJpc2UnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc3Vuc2V0JzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSAnU3Vuc2V0JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlcldlZWtseShkYXlzKSB7XG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgd3JhcHBlci5jbGFzc05hbWUgPSAnYm90dG9tLXdyYXBwZXInO1xuICAgICAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgaGVhZGluZy50ZXh0Q29udGVudCA9ICdXZWVrbHkgRm9yZWNhc3QnO1xuXG4gICAgICAgIGNvbnN0IHdlZWtseSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB3ZWVrbHkuY2xhc3NOYW1lID0gJ3dlZWtseSc7XG5cbiAgICAgICAgZm9yIChjb25zdCBkYXkgb2YgZGF5cykge1xuICAgICAgICAgICAgY29uc3QgZGF5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkYXlDb250YWluZXIuY2xhc3NOYW1lID0gJ2RheSc7XG5cbiAgICAgICAgICAgIGNvbnN0IGRheU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgbGV0IG1lZGlhUXVlcnlMaXN0ID0gd2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiA2MDBweClcIik7XG5cbiAgICAgICAgICAgIGlmIChtZWRpYVF1ZXJ5TGlzdC5tYXRjaGVzKSB7XG4gICAgICAgICAgICAgICAgZGF5TmFtZS50ZXh0Q29udGVudCA9IGdldERheU9mV2VlayhkYXkuZGF0ZXRpbWUsIGZhbHNlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGF5TmFtZS50ZXh0Q29udGVudCA9IGdldERheU9mV2VlayhkYXkuZGF0ZXRpbWUsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtZWRpYVF1ZXJ5TGlzdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZGF5TmFtZS50ZXh0Q29udGVudCA9IGRheU5hbWUudGV4dENvbnRlbnQubGVuZ3RoID4gMyA/IGdldERheU9mV2VlayhkYXkuZGF0ZXRpbWUsIGZhbHNlKSA6IGdldERheU9mV2VlayhkYXkuZGF0ZXRpbWUsIHRydWUpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IG1pbmlXZWF0aGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBtaW5pV2VhdGhlckNvbnRhaW5lci5jbGFzc05hbWUgPSAnbWluaS13ZWF0aGVyLWNvbnRhaW5lcic7XG5cbiAgICAgICAgICAgIGNvbnN0IHdlYXRoZXJJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgd2VhdGhlckltYWdlLnNyYyA9IGltYWdlcy5nZXQoZGF5Lmljb24pO1xuICAgICAgICAgICAgd2VhdGhlckltYWdlLmFsdCA9ICd3ZWF0aGVyLWltYWdlJztcbiAgICAgICAgICAgIHdlYXRoZXJJbWFnZS5jbGFzc05hbWUgPSAnbWluaS13ZWF0aGVyLWljb24nO1xuICAgICAgICAgICAgY29uc3QgdGVtcFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICB0ZW1wVGV4dC50ZXh0Q29udGVudCA9IGAke2RheS50ZW1wTWF4fVxceEIwJHtmb3JtYXRUZW1wVW5pdHMoKX1gO1xuXG4gICAgICAgICAgICBtaW5pV2VhdGhlckNvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWF0aGVySW1hZ2UpO1xuICAgICAgICAgICAgbWluaVdlYXRoZXJDb250YWluZXIuYXBwZW5kQ2hpbGQodGVtcFRleHQpO1xuXG4gICAgICAgICAgICBjb25zdCBtaW5UZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgbWluVGVtcC50ZXh0Q29udGVudCA9IGAke2RheS50ZW1wTWlufVxceEIwJHtmb3JtYXRUZW1wVW5pdHMoKX1gO1xuICAgICAgICAgICAgbWluVGVtcC5jbGFzc05hbWUgPSAnbGlnaHQtZ3JleSc7XG5cbiAgICAgICAgICAgIGNvbnN0IHdpbmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHdpbmRDb250YWluZXIuY2xhc3NOYW1lID0gJ3dpbmQtY29udGFpbmVyJztcblxuICAgICAgICAgICAgY29uc3Qgd2luZEFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICB3aW5kQXJyb3cuc3JjID0gaW1hZ2VzLmdldCgnYXJyb3ctdXAtdGhpbicpO1xuICAgICAgICAgICAgd2luZEFycm93LmFsdCA9ICd3aW5kIGRpcmVjdGlvbic7XG4gICAgICAgICAgICB3aW5kQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZSgke2RheS53aW5kZGlyfWRlZylgO1xuICAgICAgICAgICAgd2luZEFycm93LmNsYXNzTmFtZSA9ICdtaW5pLXdpbmQtYXJyb3cnO1xuXG4gICAgICAgICAgICBjb25zdCB3aW5kU3BlZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICB3aW5kU3BlZWQudGV4dENvbnRlbnQgPSBgJHtkYXkud2luZHNwZWVkfWA7XG5cbiAgICAgICAgICAgIHdpbmRDb250YWluZXIuYXBwZW5kQ2hpbGQod2luZEFycm93KTtcbiAgICAgICAgICAgIHdpbmRDb250YWluZXIuYXBwZW5kQ2hpbGQod2luZFNwZWVkKTtcblxuICAgICAgICAgICAgZGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKGRheU5hbWUpO1xuICAgICAgICAgICAgZGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKG1pbmlXZWF0aGVyQ29udGFpbmVyKTtcbiAgICAgICAgICAgIGRheUNvbnRhaW5lci5hcHBlbmRDaGlsZChtaW5UZW1wKTtcbiAgICAgICAgICAgIGRheUNvbnRhaW5lci5hcHBlbmRDaGlsZCh3aW5kQ29udGFpbmVyKTtcblxuICAgICAgICAgICAgd2Vla2x5LmFwcGVuZENoaWxkKGRheUNvbnRhaW5lcik7XG4gICAgICAgIH1cblxuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHdlZWtseSk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRVdkNvbG91cih1dmluZGV4KSB7XG4gICAgICAgIGlmICh1dmluZGV4ID49IDExKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3Zpb2xldCc7XG4gICAgICAgIH0gZWxzZSBpZiAodXZpbmRleCA+PSA4KSB7XG4gICAgICAgICAgICByZXR1cm4gJ3JlZCc7XG4gICAgICAgIH0gZWxzZSBpZiAodXZpbmRleCA+PSA2KSB7XG4gICAgICAgICAgICByZXR1cm4gJ29yYW5nZSc7XG4gICAgICAgIH0gZWxzZSBpZiAodXZpbmRleCA+PSAzKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2dvbGQnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICdncmVlbic7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXREYXlPZldlZWsoZGF0ZSwgbG9uZykge1xuICAgICAgICBzd2l0Y2ggKGRhdGUuZ2V0RGF5KCkpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gbG9uZyA/ICdTdW5kYXknIDogJ1N1bic7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxvbmcgPyAnTW9uZGF5JyA6ICdNb24nO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHJldHVybiBsb25nID8gJ1R1ZXNkYXknIDogJ1R1ZSc7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxvbmcgPyAnV2VkbmVzZGF5JyA6ICdXZWQnO1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIHJldHVybiBsb25nID8gJ1RodXJzZGF5JyA6ICdUaHUnO1xuICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgIHJldHVybiBsb25nID8gJ0ZyaWRheScgOiAnRnJpJztcbiAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbG9uZyA/ICdTYXR1cmRheScgOiAnU2F0JztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlckNvbnRlbnQoZGF0YSwgdW5pdCkge1xuICAgICAgICB3aGlsZSAoY29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIubGFzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0YS5lcnJvcikge1xuICAgICAgICAgICAgYWxlcnQoZGF0YS5lcnJvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB1bml0cyA9IHVuaXQ7XG4gICAgICAgICAgICByZW5kZXJUb2RheShkYXRhLmRheXNbMF0sIGRhdGEuY3VycmVudFRpbWUsIGRhdGEubG9jYXRpb24sIGRhdGEuZGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgcmVuZGVyV2Vla2x5KGRhdGEuZGF5cy5zcGxpY2UoMSksIGRhdGEuZGF5cy5sZW5ndGggLSAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWQoKSB7XG4gICAgICAgIHdoaWxlIChjb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5sYXN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGxvYWRpbmdXaGVlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgbG9hZGluZ1doZWVsLmNsYXNzTmFtZSA9ICdsb2FkZXInO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobG9hZGluZ1doZWVsKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICByZW5kZXJDb250ZW50LFxuICAgICAgICBsb2FkLFxuICAgIH1cbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbTsiLCJpbXBvcnQgYXBpIGZyb20gJy4vYXBpJztcbmltcG9ydCBkb20gZnJvbSAnLi9kb20nO1xuXG5jb25zdCBoYW5kbGVycyA9ICgoKSA9PiB7XG4gICAgY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWJhciBpbnB1dCcpO1xuICAgIGNvbnN0IHRvcE5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLW5hdicpO1xuXG4gICAgYXN5bmMgZnVuY3Rpb24gbG9hZChsYXRpdHVkZSwgbG9uZ2l0dWRlLCBpbnB1dCwgdW5pdHMgPSBcIm1ldHJpY1wiKSB7XG4gICAgICAgIGRvbS5sb2FkKCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBhcGkuZ2V0TG9jYXRpb25EYXRhKGxhdGl0dWRlLCBsb25naXR1ZGUsIGlucHV0LCB1bml0cyk7XG4gICAgICAgIGRvbS5yZW5kZXJDb250ZW50KGRhdGEsIHVuaXRzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBuYXZIYW5kbGVyKCkge1xuICAgICAgICBsZXQgaW5wdXQgPSAnTG9uZG9uJztcbiAgICAgICAgbGV0IHVuaXRzID0gJ21ldHJpYyc7XG4gICAgICAgIHRvcE5hdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgICAgIHN3aXRjaCAodGFyZ2V0LmlkKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnc2VhcmNoJzpcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQgPSBzZWFyY2hJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoSW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgbG9hZCh1bmRlZmluZWQsIHVuZGVmaW5lZCwgaW5wdXQsIHVuaXRzKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFtuYW1lPVwidW5pdFwiXScpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgYXN5bmMgKGUpID0+IHtcbiAgICAgICAgICAgICAgICB1bml0cyA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgICAgIGF3YWl0IGxvYWQodW5kZWZpbmVkLCB1bmRlZmluZWQsIGlucHV0LCB1bml0cyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24ga2V5SGFuZGxlcigpIHtcbiAgICAgICAgc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaCcpLmNsaWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlZ2lzdGVySGFuZGxlcnMoKSB7XG4gICAgICAgIG5hdkhhbmRsZXIoKTtcbiAgICAgICAga2V5SGFuZGxlcigpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHJlZ2lzdGVySGFuZGxlcnMsXG4gICAgICAgIGxvYWQsXG4gICAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJzOyIsImltcG9ydCBjbGVhckRheSBmcm9tICcuL2ltYWdlcy9jbGVhci1kYXkuc3ZnJ1xuaW1wb3J0IGNsZWFyTmlnaHQgZnJvbSAnLi9pbWFnZXMvY2xlYXItbmlnaHQuc3ZnJ1xuaW1wb3J0IGNsb3VkeSBmcm9tICcuL2ltYWdlcy9jbG91ZHkuc3ZnJ1xuaW1wb3J0IGZvZyBmcm9tICcuL2ltYWdlcy9mb2cuc3ZnJ1xuaW1wb3J0IGFycm93VXBUaGluIGZyb20gJy4vaW1hZ2VzL2Fycm93LXVwLXRoaW4uc3ZnJ1xuaW1wb3J0IHBhcnRseUNsb3VkeURheSBmcm9tICcuL2ltYWdlcy9wYXJ0bHktY2xvdWR5LWRheS5zdmcnXG5pbXBvcnQgcGFydGx5Q2xvdWR5TmlnaHQgZnJvbSAnLi9pbWFnZXMvcGFydGx5LWNsb3VkeS1uaWdodC5zdmcnXG5pbXBvcnQgcmFpbiBmcm9tICcuL2ltYWdlcy9yYWluLnN2ZydcbmltcG9ydCBzbm93IGZyb20gJy4vaW1hZ2VzL3Nub3cuc3ZnJ1xuaW1wb3J0IHdpbmQgZnJvbSAnLi9pbWFnZXMvd2luZC5zdmcnXG5cbmNvbnN0IG9iaiA9IHtcbiAgICBjbGVhckRheSxcbiAgICBjbGVhck5pZ2h0LFxuICAgIGNsb3VkeSxcbiAgICBmb2csXG4gICAgYXJyb3dVcFRoaW4sXG4gICAgcGFydGx5Q2xvdWR5RGF5LFxuICAgIHBhcnRseUNsb3VkeU5pZ2h0LFxuICAgIHJhaW4sXG4gICAgc25vdyxcbiAgICB3aW5kLFxufVxuXG5jb25zdCBrZWJhYml6ZSA9IChzdHIpID0+IHN0ci5yZXBsYWNlKC9bQS1aXSsoPyFbYS16XSl8W0EtWl0vZywgKCQsIG9mcykgPT4gKG9mcyA/IFwiLVwiIDogXCJcIikgKyAkLnRvTG93ZXJDYXNlKCkpXG5jb25zdCBpbWFnZXMgPSBuZXcgTWFwKCk7XG5cbmZvciAobGV0IFtrZXksIHZhbF0gb2YgT2JqZWN0LmVudHJpZXMob2JqKSkge1xuICAgIGltYWdlcy5zZXQoa2ViYWJpemUoa2V5KSwgdmFsKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW1hZ2VzOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBoYW5kbGVycyBmcm9tIFwiLi9oYW5kbGVyc1wiO1xuXG5oYW5kbGVycy5yZWdpc3RlckhhbmRsZXJzKCk7XG5uYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKCAocG9zaXRpb24pID0+IHtcbiAgICBoYW5kbGVycy5sb2FkKGAke3Bvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZX1gLCBgJHtwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlfWAsIHVuZGVmaW5lZCk7XG59LCAoKSA9PiB7XG4gICAgaGFuZGxlcnMubG9hZCgpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=