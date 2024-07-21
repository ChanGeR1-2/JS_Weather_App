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
}
*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

img {
    filter: var(--white-svg-filter);
}

body {
    font-family: Arial, Helvetica, sans-serif;
    display: grid;
    grid-template: 1fr 8fr 1fr / 1fr 6fr 1fr;
    grid-template-areas:
            ". header ."
    ". main-content ."
    ". . .";
    background-image: linear-gradient(to bottom, var(--light-blue), var(--blue) 60%, var(--dark-blue) 90%);
    color: var(--white);
}

header {
    grid-area: header;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px;
}

.main-nav > .search-bar-wrapper {
    display: flex;
    background-color: var(--dark-blue);
    border-radius: 9999px;
    padding: 4px 16px;
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

.search-bar input {
    appearance: none;
    outline: none;
    border: none;
    background: none;
    color: var(--white);
    height: 100%;
}

.main-content {
    grid-area: main-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
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

.flex {
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
    gap: 24px;
    text-align: center;
}

.stats-grid > * {
    display: flex;
    flex-direction: column;
    gap: 4px;
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
.wind-container,
.mini-weather-container {
    display: flex;
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



`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,0BAA0B;IAC1B,eAAe;IACf,qBAAqB;IACrB,oBAAoB;IACpB,gBAAgB;IAChB,6CAA6C;IAC7C,yGAAyG;AAC7G;AACA;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,yCAAyC;IACzC,aAAa;IACb,wCAAwC;IACxC;;;WAGO;IACP,sGAAsG;IACtG,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,kCAAkC;IAClC,qBAAqB;IACrB,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,aAAa;IACb,uBAAuB;IACvB,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,YAAY;IACZ,gBAAgB;IAChB,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,uBAAuB;IACvB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,SAAS;AACb;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,aAAa;IACb,wCAAwC;IACxC,SAAS;IACT,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;;AAEA;IACI,iBAAiB;AACrB;AACA;IACI,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;AACA;;IAEI,aAAa;AACjB;;AAEA;IACI,SAAS;AACb;AACA;IACI,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sCAAsC;IACtC,SAAS;IACT,aAAa;AACjB;;AAEA;IACI,iDAAiD;AACrD;;;AAGA;IACI,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB","sourcesContent":[":root {\n    --large-heading-text: 2rem;\n    --blue: #184f77;\n    --light-blue: #178bad;\n    --dark-blue: #0e2d44;\n    --white: #ffffff;\n    --transparent-white: rgba(255, 255, 255, 0.5);\n    --white-svg-filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(82deg) brightness(105%) contrast(105%);\n}\n*, *::before, *::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nimg {\n    filter: var(--white-svg-filter);\n}\n\nbody {\n    font-family: Arial, Helvetica, sans-serif;\n    display: grid;\n    grid-template: 1fr 8fr 1fr / 1fr 6fr 1fr;\n    grid-template-areas:\n            \". header .\"\n    \". main-content .\"\n    \". . .\";\n    background-image: linear-gradient(to bottom, var(--light-blue), var(--blue) 60%, var(--dark-blue) 90%);\n    color: var(--white);\n}\n\nheader {\n    grid-area: header;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 50px;\n}\n\n.main-nav > .search-bar-wrapper {\n    display: flex;\n    background-color: var(--dark-blue);\n    border-radius: 9999px;\n    padding: 4px 16px;\n}\n\n.search-button {\n    width: 25px;\n    height: 25px;\n    appearance: none;\n    outline: none;\n    background: transparent;\n    border: none;\n    cursor: pointer;\n}\n\n.search-bar input {\n    appearance: none;\n    outline: none;\n    border: none;\n    background: none;\n    color: var(--white);\n    height: 100%;\n}\n\n.main-content {\n    grid-area: main-content;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 2rem;\n}\n\n.large-weather-img {\n    width: 75px;\n    height: 75px;\n}\n\n.large-temp-text {\n    font-size: 5rem;\n}\n\n.main-content h1 {\n    font-size: var(--large-heading-text);\n}\n\n.flex {\n    display: flex;\n    gap: 24px;\n}\n.flex-column {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n}\n\n.main-content .light-grey {\n    color: var(--transparent-white);\n}\n\n.stats-grid {\n    display: grid;\n    grid-template: 1fr 1fr 1fr / 1fr 1fr 1fr;\n    gap: 24px;\n    text-align: center;\n}\n\n.stats-grid > * {\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n}\n\n.medium-text {\n    font-size: 1.5rem;\n}\n.small-text {\n    font-size: 1.175rem;\n}\n\n.wind-arrow {\n    width: 30px;\n    height: 30px;\n}\n\n.mini-wind-arrow {\n    width: 25px;\n    height: 25px;\n}\n.wind-container,\n.mini-weather-container {\n    display: flex;\n}\n\n.mini-weather-container {\n    gap: 10px;\n}\n.bottom-wrapper h1 {\n    margin-bottom: 25px;\n    text-align: center;\n}\n\n.weekly {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    font-size: 1.25rem;\n}\n\n.weekly > div {\n    display: grid;\n    grid-template-columns: 2fr 1fr 1fr 1fr;\n    gap: 20px;\n    padding: 10px;\n}\n\n.weekly > div:not(:last-child) {\n    border-bottom: 2px solid var(--transparent-white);\n}\n\n\n.day > div:first-child {\n    font-weight: bold;\n}\n\n.mini-weather-icon {\n    width: 25px;\n    height: 25px;\n}\n\n\n\n"],"sourceRoot":""}]);
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

    async function getLocationData(location, unit = 'metric') {
        const request = new Request(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=${unit}&key=${apiKey}&contentType=json`, {
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

    async function processData(data) {
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

        weatherDiv.className = 'flex';
        const tempContainer = document.createElement('div');
        const weatherImage = new Image();
        weatherImage.src = _images__WEBPACK_IMPORTED_MODULE_0__["default"].get(today.icon);
        weatherImage.alt = today.icon;
        weatherImage.className = 'large-weather-img';
        const text = document.createElement('span');
        text.className = 'large-temp-text';
        text.textContent = `${today.temp}\xB0C`;
        tempContainer.appendChild(weatherImage);
        tempContainer.appendChild(text);

        const descriptionDiv = document.createElement('div');
        descriptionDiv.className = 'flex-column';
        const smallHeader = document.createElement('h3');
        smallHeader.className = 'medium-text';
        smallHeader.textContent = `${today.conditions}`;
        const feelsLikeText = document.createElement('span');
        feelsLikeText.className = 'light-grey small-text';
        feelsLikeText.textContent = `Feels like ${today.feelslike}\xB0C`;
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

            const infoBox = document.createElement('span');
            infoBox.className = 'medium-text';
            infoBox.textContent = `${val}${getUnits(key) ? getUnits(key) : ''}`;
            if (key === 'windspeed') {
                const windContainer = document.createElement('div');
                windContainer.className = 'wind-container';
                const windArrow = new Image();
                windArrow.src = _images__WEBPACK_IMPORTED_MODULE_0__["default"].get('arrow-up-thin');
                windArrow.alt = 'wind direction';
                windArrow.style.transform = `rotate(${today.winddir}deg)`;
                windArrow.className = 'wind-arrow';

                windContainer.appendChild(windArrow);
                windContainer.appendChild(infoBox);

                wrapper.appendChild(windContainer);
            } else {
                wrapper.appendChild(infoBox);
            }
            statsGrid.appendChild(wrapper);
        }

        container.appendChild(headingDiv);
        container.appendChild(weatherDiv);
        container.appendChild(statsGrid);
    }

    function getUnits(name) {
        let result;
        switch (name) {
            case 'windspeed':
                result = 'km/h';
                break;
            case 'humidity':
            case 'cloudcover':
            case 'precipprob':
                result = '%';
                break;
            case 'visibility':
                result = 'km';
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
            dayName.textContent = getDayOfWeek(day.datetime);

            const miniWeatherContainer = document.createElement('div');
            miniWeatherContainer.className = 'mini-weather-container';

            const weatherImage = new Image();
            weatherImage.src = _images__WEBPACK_IMPORTED_MODULE_0__["default"].get(day.icon);
            weatherImage.alt = 'weather-image';
            weatherImage.className = 'mini-weather-icon';
            const tempText = document.createElement('span');
            tempText.textContent = `${day.tempMax}\xB0C`;

            miniWeatherContainer.appendChild(weatherImage);
            miniWeatherContainer.appendChild(tempText);

            const minTemp = document.createElement('span');
            minTemp.textContent = `${day.tempMin}\xB0C`;
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

    function getDayOfWeek(date) {
        switch (date.getDay()) {
            case 0:
                return 'Sunday';
            case 1:
                return 'Monday';
            case 2:
                return 'Tuesday';
            case 3:
                return 'Wednesday';
            case 4:
                return 'Thursday';
            case 5:
                return 'Friday';
            case 6:
                return 'Saturday';
        }
    }

    function renderContent(data) {
        if (data.error) {
            alert(data.error);
        } else {
            while (container.firstChild) {
                container.removeChild(container.lastChild);
            }
            renderToday(data.days[0], data.currentTime, data.location, data.description);
            renderWeekly(data.days.splice(1), data.days.length - 1);
        }
    }

    return {
        renderContent,
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

    async function load(input = "London", units = "metric") {
        const data = await _api__WEBPACK_IMPORTED_MODULE_0__["default"].getLocationData(input, units);
        _dom__WEBPACK_IMPORTED_MODULE_1__["default"].renderContent(data)
    }

    function clickHandler() {
        let input;
        let units = 'uk';
        topNav.addEventListener('click', async (e) => {
            const target = e.target;
            switch (target.id) {
                case 'search':
                    input = searchInput.value;
                    searchInput.value = '';
                    await load(input, units);
                    break;
            }
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
        clickHandler();
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
_handlers__WEBPACK_IMPORTED_MODULE_1__["default"].load();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7QUNBcUI7QUFDYTs7QUFFbEMsaURBQVE7QUFDUixpREFBUSxRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNfd2VhdGhlcl9hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2pzX3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9qc193ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2pzX3dlYXRoZXJfYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2pzX3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2pzX3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9qc193ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9qc193ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9qc193ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2pzX3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vanNfd2VhdGhlcl9hcHAvLi9zcmMvYXBpLmpzIiwid2VicGFjazovL2pzX3dlYXRoZXJfYXBwLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly9qc193ZWF0aGVyX2FwcC8uL3NyYy9oYW5kbGVycy5qcyIsIndlYnBhY2s6Ly9qc193ZWF0aGVyX2FwcC8uL3NyYy9pbWFnZXMuanMiLCJ3ZWJwYWNrOi8vanNfd2VhdGhlcl9hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vanNfd2VhdGhlcl9hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vanNfd2VhdGhlcl9hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pzX3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vanNfd2VhdGhlcl9hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qc193ZWF0aGVyX2FwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pzX3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2pzX3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9qc193ZWF0aGVyX2FwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAgIC0tbGFyZ2UtaGVhZGluZy10ZXh0OiAycmVtO1xuICAgIC0tYmx1ZTogIzE4NGY3NztcbiAgICAtLWxpZ2h0LWJsdWU6ICMxNzhiYWQ7XG4gICAgLS1kYXJrLWJsdWU6ICMwZTJkNDQ7XG4gICAgLS13aGl0ZTogI2ZmZmZmZjtcbiAgICAtLXRyYW5zcGFyZW50LXdoaXRlOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gICAgLS13aGl0ZS1zdmctZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDAlKSBodWUtcm90YXRlKDgyZGVnKSBicmlnaHRuZXNzKDEwNSUpIGNvbnRyYXN0KDEwNSUpO1xufVxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuaW1nIHtcbiAgICBmaWx0ZXI6IHZhcigtLXdoaXRlLXN2Zy1maWx0ZXIpO1xufVxuXG5ib2R5IHtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGU6IDFmciA4ZnIgMWZyIC8gMWZyIDZmciAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgICAgICAgIFwiLiBoZWFkZXIgLlwiXG4gICAgXCIuIG1haW4tY29udGVudCAuXCJcbiAgICBcIi4gLiAuXCI7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgdmFyKC0tbGlnaHQtYmx1ZSksIHZhcigtLWJsdWUpIDYwJSwgdmFyKC0tZGFyay1ibHVlKSA5MCUpO1xuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG59XG5cbmhlYWRlciB7XG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDUwcHg7XG59XG5cbi5tYWluLW5hdiA+IC5zZWFyY2gtYmFyLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcbiAgICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG4gICAgcGFkZGluZzogNHB4IDE2cHg7XG59XG5cbi5zZWFyY2gtYnV0dG9uIHtcbiAgICB3aWR0aDogMjVweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zZWFyY2gtYmFyIGlucHV0IHtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5tYWluLWNvbnRlbnQge1xuICAgIGdyaWQtYXJlYTogbWFpbi1jb250ZW50O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMnJlbTtcbn1cblxuLmxhcmdlLXdlYXRoZXItaW1nIHtcbiAgICB3aWR0aDogNzVweDtcbiAgICBoZWlnaHQ6IDc1cHg7XG59XG5cbi5sYXJnZS10ZW1wLXRleHQge1xuICAgIGZvbnQtc2l6ZTogNXJlbTtcbn1cblxuLm1haW4tY29udGVudCBoMSB7XG4gICAgZm9udC1zaXplOiB2YXIoLS1sYXJnZS1oZWFkaW5nLXRleHQpO1xufVxuXG4uZmxleCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDI0cHg7XG59XG4uZmxleC1jb2x1bW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDhweDtcbn1cblxuLm1haW4tY29udGVudCAubGlnaHQtZ3JleSB7XG4gICAgY29sb3I6IHZhcigtLXRyYW5zcGFyZW50LXdoaXRlKTtcbn1cblxuLnN0YXRzLWdyaWQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIDFmciAxZnIgLyAxZnIgMWZyIDFmcjtcbiAgICBnYXA6IDI0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc3RhdHMtZ3JpZCA+ICoge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDRweDtcbn1cblxuLm1lZGl1bS10ZXh0IHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbn1cbi5zbWFsbC10ZXh0IHtcbiAgICBmb250LXNpemU6IDEuMTc1cmVtO1xufVxuXG4ud2luZC1hcnJvdyB7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xufVxuXG4ubWluaS13aW5kLWFycm93IHtcbiAgICB3aWR0aDogMjVweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG59XG4ud2luZC1jb250YWluZXIsXG4ubWluaS13ZWF0aGVyLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLm1pbmktd2VhdGhlci1jb250YWluZXIge1xuICAgIGdhcDogMTBweDtcbn1cbi5ib3R0b20td3JhcHBlciBoMSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi53ZWVrbHkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDIwcHg7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xufVxuXG4ud2Vla2x5ID4gZGl2IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmciAxZnIgMWZyO1xuICAgIGdhcDogMjBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ud2Vla2x5ID4gZGl2Om5vdCg6bGFzdC1jaGlsZCkge1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS10cmFuc3BhcmVudC13aGl0ZSk7XG59XG5cblxuLmRheSA+IGRpdjpmaXJzdC1jaGlsZCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5taW5pLXdlYXRoZXItaWNvbiB7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xufVxuXG5cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksMEJBQTBCO0lBQzFCLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQiw2Q0FBNkM7SUFDN0MseUdBQXlHO0FBQzdHO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLHlDQUF5QztJQUN6QyxhQUFhO0lBQ2Isd0NBQXdDO0lBQ3hDOzs7V0FHTztJQUNQLHNHQUFzRztJQUN0RyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMscUJBQXFCO0lBQ3JCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7QUFDYjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixRQUFRO0FBQ1o7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isd0NBQXdDO0lBQ3hDLFNBQVM7SUFDVCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBOztJQUVJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLFNBQVM7SUFDVCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksaURBQWlEO0FBQ3JEOzs7QUFHQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1sYXJnZS1oZWFkaW5nLXRleHQ6IDJyZW07XFxuICAgIC0tYmx1ZTogIzE4NGY3NztcXG4gICAgLS1saWdodC1ibHVlOiAjMTc4YmFkO1xcbiAgICAtLWRhcmstYmx1ZTogIzBlMmQ0NDtcXG4gICAgLS13aGl0ZTogI2ZmZmZmZjtcXG4gICAgLS10cmFuc3BhcmVudC13aGl0ZTogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbiAgICAtLXdoaXRlLXN2Zy1maWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoMCUpIGh1ZS1yb3RhdGUoODJkZWcpIGJyaWdodG5lc3MoMTA1JSkgY29udHJhc3QoMTA1JSk7XFxufVxcbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbmltZyB7XFxuICAgIGZpbHRlcjogdmFyKC0td2hpdGUtc3ZnLWZpbHRlcik7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIDhmciAxZnIgLyAxZnIgNmZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgICAgICBcXFwiLiBoZWFkZXIgLlxcXCJcXG4gICAgXFxcIi4gbWFpbi1jb250ZW50IC5cXFwiXFxuICAgIFxcXCIuIC4gLlxcXCI7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHZhcigtLWxpZ2h0LWJsdWUpLCB2YXIoLS1ibHVlKSA2MCUsIHZhcigtLWRhcmstYmx1ZSkgOTAlKTtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA1MHB4O1xcbn1cXG5cXG4ubWFpbi1uYXYgPiAuc2VhcmNoLWJhci13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xcbiAgICBwYWRkaW5nOiA0cHggMTZweDtcXG59XFxuXFxuLnNlYXJjaC1idXR0b24ge1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zZWFyY2gtYmFyIGlucHV0IHtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5tYWluLWNvbnRlbnQge1xcbiAgICBncmlkLWFyZWE6IG1haW4tY29udGVudDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAycmVtO1xcbn1cXG5cXG4ubGFyZ2Utd2VhdGhlci1pbWcge1xcbiAgICB3aWR0aDogNzVweDtcXG4gICAgaGVpZ2h0OiA3NXB4O1xcbn1cXG5cXG4ubGFyZ2UtdGVtcC10ZXh0IHtcXG4gICAgZm9udC1zaXplOiA1cmVtO1xcbn1cXG5cXG4ubWFpbi1jb250ZW50IGgxIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1sYXJnZS1oZWFkaW5nLXRleHQpO1xcbn1cXG5cXG4uZmxleCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjRweDtcXG59XFxuLmZsZXgtY29sdW1uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA4cHg7XFxufVxcblxcbi5tYWluLWNvbnRlbnQgLmxpZ2h0LWdyZXkge1xcbiAgICBjb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQtd2hpdGUpO1xcbn1cXG5cXG4uc3RhdHMtZ3JpZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmciAxZnIgMWZyIC8gMWZyIDFmciAxZnI7XFxuICAgIGdhcDogMjRweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uc3RhdHMtZ3JpZCA+ICoge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDRweDtcXG59XFxuXFxuLm1lZGl1bS10ZXh0IHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcbi5zbWFsbC10ZXh0IHtcXG4gICAgZm9udC1zaXplOiAxLjE3NXJlbTtcXG59XFxuXFxuLndpbmQtYXJyb3cge1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4ubWluaS13aW5kLWFycm93IHtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGhlaWdodDogMjVweDtcXG59XFxuLndpbmQtY29udGFpbmVyLFxcbi5taW5pLXdlYXRoZXItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLm1pbmktd2VhdGhlci1jb250YWluZXIge1xcbiAgICBnYXA6IDEwcHg7XFxufVxcbi5ib3R0b20td3JhcHBlciBoMSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLndlZWtseSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG5cXG4ud2Vla2x5ID4gZGl2IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyIDFmciAxZnI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLndlZWtseSA+IGRpdjpub3QoOmxhc3QtY2hpbGQpIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXRyYW5zcGFyZW50LXdoaXRlKTtcXG59XFxuXFxuXFxuLmRheSA+IGRpdjpmaXJzdC1jaGlsZCB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubWluaS13ZWF0aGVyLWljb24ge1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbn1cXG5cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGFwaSA9IChsb2NhbGVzID0+IHtcbiAgICBjb25zdCBhcGlLZXkgPSAnSlNOODNTV1c3Nzk4OVM2WkU0M1NFU01YMic7XG5cbiAgICBhc3luYyBmdW5jdGlvbiBnZXRMb2NhdGlvbkRhdGEobG9jYXRpb24sIHVuaXQgPSAnbWV0cmljJykge1xuICAgICAgICBjb25zdCByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoYGh0dHBzOi8vd2VhdGhlci52aXN1YWxjcm9zc2luZy5jb20vVmlzdWFsQ3Jvc3NpbmdXZWJTZXJ2aWNlcy9yZXN0L3NlcnZpY2VzL3RpbWVsaW5lLyR7bG9jYXRpb259P3VuaXRHcm91cD0ke3VuaXR9JmtleT0ke2FwaUtleX0mY29udGVudFR5cGU9anNvbmAsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7fSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHJlcXVlc3QpO1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA+PSA0MDApIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiB0ZXh0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9jZXNzRGF0YShkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiB7Y29kZTogZXJyb3IubmFtZSwgbWVzc2FnZTogZXJyb3IubWVzc2FnZX07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBwcm9jZXNzRGF0YShkYXRhKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUobmV3IERhdGUoKS50b0xvY2FsZVN0cmluZyhcImVuLVVTXCIsIHt0aW1lWm9uZTogYCR7ZGF0YS50aW1lem9uZX1gfSkpO1xuICAgICAgICBjb25zdCBsb2NhdGlvbiA9IGRhdGEucmVzb2x2ZWRBZGRyZXNzO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRhdGEuZGVzY3JpcHRpb247XG5cbiAgICAgICAgY29uc3QgZGF5c0RhdGEgPSBkYXRhLmRheXM7XG5cbiAgICAgICAgY29uc3QgZGF5cyA9IFtdO1xuXG4gICAgICAgIGNvbnN0IHRvZGF5RGF0YSA9IGRheXNEYXRhWzBdO1xuICAgICAgICBkYXlzWzBdID0ge1xuICAgICAgICAgICAgY29uZGl0aW9uczogdG9kYXlEYXRhLmNvbmRpdGlvbnMsXG4gICAgICAgICAgICB0ZW1wOiBNYXRoLnJvdW5kKHRvZGF5RGF0YS50ZW1wKSxcbiAgICAgICAgICAgIHdpbmRkaXI6IE1hdGgucm91bmQodG9kYXlEYXRhLndpbmRkaXIpLFxuICAgICAgICAgICAgZmVlbHNsaWtlOiBNYXRoLnJvdW5kKHRvZGF5RGF0YS5mZWVsc2xpa2UpLFxuICAgICAgICAgICAgaWNvbjogdG9kYXlEYXRhLmljb24sXG4gICAgICAgICAgICBzdGF0czoge1xuICAgICAgICAgICAgICAgIHdpbmRzcGVlZDogTWF0aC5yb3VuZCh0b2RheURhdGEud2luZHNwZWVkKSxcbiAgICAgICAgICAgICAgICBodW1pZGl0eTogTWF0aC5yb3VuZCh0b2RheURhdGEuaHVtaWRpdHkpLFxuICAgICAgICAgICAgICAgIHV2aW5kZXg6IHRvZGF5RGF0YS51dmluZGV4LFxuICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IE1hdGgucm91bmQodG9kYXlEYXRhLnZpc2liaWxpdHkpLFxuICAgICAgICAgICAgICAgIGNsb3VkY292ZXI6IE1hdGgucm91bmQodG9kYXlEYXRhLmNsb3VkY292ZXIpLFxuICAgICAgICAgICAgICAgIHByZWNpcHByb2I6IE1hdGgucm91bmQodG9kYXlEYXRhLnByZWNpcHByb2IpLFxuICAgICAgICAgICAgICAgIHN1bnJpc2U6IHRvZGF5RGF0YS5zdW5yaXNlLnNsaWNlKDAsIC0zKSxcbiAgICAgICAgICAgICAgICBzdW5zZXQ6IHRvZGF5RGF0YS5zdW5zZXQuc2xpY2UoMCwgLTMpLFxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDc7IGkrKykge1xuXG4gICAgICAgICAgICBjb25zdCBkYXlEYXRhID0gZGF5c0RhdGFbaV07XG4gICAgICAgICAgICBkYXlzW2ldID0ge1xuICAgICAgICAgICAgICAgIGRhdGV0aW1lOiBuZXcgRGF0ZShkYXlEYXRhLmRhdGV0aW1lKSxcbiAgICAgICAgICAgICAgICBpY29uOiBkYXlEYXRhLmljb24sXG4gICAgICAgICAgICAgICAgdGVtcE1pbjogTWF0aC5yb3VuZChkYXlEYXRhLnRlbXBtaW4pLFxuICAgICAgICAgICAgICAgIHRlbXBNYXg6IE1hdGgucm91bmQoZGF5RGF0YS50ZW1wbWF4KSxcbiAgICAgICAgICAgICAgICB3aW5kc3BlZWQ6IE1hdGgucm91bmQoZGF5RGF0YS53aW5kc3BlZWQpLFxuICAgICAgICAgICAgICAgIHdpbmRkaXI6IE1hdGgucm91bmQoZGF5RGF0YS53aW5kZGlyKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGN1cnJlbnRUaW1lLFxuICAgICAgICAgICAgbG9jYXRpb24sXG4gICAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGRheXMsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0TG9jYXRpb25EYXRhLFxuICAgIH1cbn0pKCk7XG5cblxuZXhwb3J0IGRlZmF1bHQgYXBpIiwiaW1wb3J0IGltYWdlcyBmcm9tICcuL2ltYWdlcydcblxuY29uc3QgZG9tID0gKCgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250ZW50Jyk7XG5cbiAgICBmdW5jdGlvbiByZW5kZXJUb2RheSh0b2RheSwgY3VycmVudFRpbWUsIGxvY2F0aW9uLCBkZXNjcmlwdGlvbikge1xuICAgICAgICBjb25zdCBoZWFkaW5nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gbG9jYXRpb247XG4gICAgICAgIGNvbnN0IGRhdGVIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgZGF0ZUhlYWRpbmcuY2xhc3NOYW1lID0gJ2xpZ2h0LWdyZXkgc21hbGwtdGV4dCc7XG4gICAgICAgIGRhdGVIZWFkaW5nLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFRpbWUudG9EYXRlU3RyaW5nKCl9IHwgJHtjdXJyZW50VGltZS5nZXRIb3VycygpIDwgMTAgPyAnMCcgKyBjdXJyZW50VGltZS5nZXRIb3VycygpIDogY3VycmVudFRpbWUuZ2V0SG91cnMoKX06JHtjdXJyZW50VGltZS5nZXRNaW51dGVzKCkgPCAxMCA/ICcwJyArIGN1cnJlbnRUaW1lLmdldE1pbnV0ZXMoKSA6IGN1cnJlbnRUaW1lLmdldE1pbnV0ZXMoKX1gO1xuICAgICAgICBoZWFkaW5nRGl2LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgICAgICBoZWFkaW5nRGl2LmFwcGVuZENoaWxkKGRhdGVIZWFkaW5nKTtcblxuICAgICAgICBjb25zdCB3ZWF0aGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgd2VhdGhlckRpdi5jbGFzc05hbWUgPSAnZmxleCc7XG4gICAgICAgIGNvbnN0IHRlbXBDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3Qgd2VhdGhlckltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHdlYXRoZXJJbWFnZS5zcmMgPSBpbWFnZXMuZ2V0KHRvZGF5Lmljb24pO1xuICAgICAgICB3ZWF0aGVySW1hZ2UuYWx0ID0gdG9kYXkuaWNvbjtcbiAgICAgICAgd2VhdGhlckltYWdlLmNsYXNzTmFtZSA9ICdsYXJnZS13ZWF0aGVyLWltZyc7XG4gICAgICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIHRleHQuY2xhc3NOYW1lID0gJ2xhcmdlLXRlbXAtdGV4dCc7XG4gICAgICAgIHRleHQudGV4dENvbnRlbnQgPSBgJHt0b2RheS50ZW1wfVxceEIwQ2A7XG4gICAgICAgIHRlbXBDb250YWluZXIuYXBwZW5kQ2hpbGQod2VhdGhlckltYWdlKTtcbiAgICAgICAgdGVtcENvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0KTtcblxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkZXNjcmlwdGlvbkRpdi5jbGFzc05hbWUgPSAnZmxleC1jb2x1bW4nO1xuICAgICAgICBjb25zdCBzbWFsbEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIHNtYWxsSGVhZGVyLmNsYXNzTmFtZSA9ICdtZWRpdW0tdGV4dCc7XG4gICAgICAgIHNtYWxsSGVhZGVyLnRleHRDb250ZW50ID0gYCR7dG9kYXkuY29uZGl0aW9uc31gO1xuICAgICAgICBjb25zdCBmZWVsc0xpa2VUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBmZWVsc0xpa2VUZXh0LmNsYXNzTmFtZSA9ICdsaWdodC1ncmV5IHNtYWxsLXRleHQnO1xuICAgICAgICBmZWVsc0xpa2VUZXh0LnRleHRDb250ZW50ID0gYEZlZWxzIGxpa2UgJHt0b2RheS5mZWVsc2xpa2V9XFx4QjBDYDtcbiAgICAgICAgZGVzY3JpcHRpb25EaXYuYXBwZW5kQ2hpbGQoc21hbGxIZWFkZXIpO1xuICAgICAgICBkZXNjcmlwdGlvbkRpdi5hcHBlbmRDaGlsZChmZWVsc0xpa2VUZXh0KTtcblxuICAgICAgICB3ZWF0aGVyRGl2LmFwcGVuZENoaWxkKHRlbXBDb250YWluZXIpO1xuICAgICAgICB3ZWF0aGVyRGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRGl2KTtcblxuICAgICAgICBjb25zdCBzdGF0c0dyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc3RhdHNHcmlkLmNsYXNzTmFtZSA9ICdzdGF0cy1ncmlkJztcblxuICAgICAgICBmb3IgKGxldCBba2V5LCB2YWxdIG9mIE9iamVjdC5lbnRyaWVzKHRvZGF5LnN0YXRzKSkge1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGZvcm1hdERhdGFOYW1lKGtleSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgICAgICAgICBjb25zdCBuYW1lVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgbmFtZVRhZy5jbGFzc05hbWUgPSAnbGlnaHQtZ3JleSBzbWFsbC10ZXh0JztcbiAgICAgICAgICAgIG5hbWVUYWcudGV4dENvbnRlbnQgPSBuYW1lO1xuXG4gICAgICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKG5hbWVUYWcpO1xuXG4gICAgICAgICAgICBjb25zdCBpbmZvQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgaW5mb0JveC5jbGFzc05hbWUgPSAnbWVkaXVtLXRleHQnO1xuICAgICAgICAgICAgaW5mb0JveC50ZXh0Q29udGVudCA9IGAke3ZhbH0ke2dldFVuaXRzKGtleSkgPyBnZXRVbml0cyhrZXkpIDogJyd9YDtcbiAgICAgICAgICAgIGlmIChrZXkgPT09ICd3aW5kc3BlZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgd2luZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHdpbmRDb250YWluZXIuY2xhc3NOYW1lID0gJ3dpbmQtY29udGFpbmVyJztcbiAgICAgICAgICAgICAgICBjb25zdCB3aW5kQXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgICAgICB3aW5kQXJyb3cuc3JjID0gaW1hZ2VzLmdldCgnYXJyb3ctdXAtdGhpbicpO1xuICAgICAgICAgICAgICAgIHdpbmRBcnJvdy5hbHQgPSAnd2luZCBkaXJlY3Rpb24nO1xuICAgICAgICAgICAgICAgIHdpbmRBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlKCR7dG9kYXkud2luZGRpcn1kZWcpYDtcbiAgICAgICAgICAgICAgICB3aW5kQXJyb3cuY2xhc3NOYW1lID0gJ3dpbmQtYXJyb3cnO1xuXG4gICAgICAgICAgICAgICAgd2luZENvbnRhaW5lci5hcHBlbmRDaGlsZCh3aW5kQXJyb3cpO1xuICAgICAgICAgICAgICAgIHdpbmRDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5mb0JveCk7XG5cbiAgICAgICAgICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHdpbmRDb250YWluZXIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGluZm9Cb3gpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RhdHNHcmlkLmFwcGVuZENoaWxkKHdyYXBwZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRpbmdEaXYpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQod2VhdGhlckRpdik7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzdGF0c0dyaWQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFVuaXRzKG5hbWUpIHtcbiAgICAgICAgbGV0IHJlc3VsdDtcbiAgICAgICAgc3dpdGNoIChuYW1lKSB7XG4gICAgICAgICAgICBjYXNlICd3aW5kc3BlZWQnOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9ICdrbS9oJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2h1bWlkaXR5JzpcbiAgICAgICAgICAgIGNhc2UgJ2Nsb3VkY292ZXInOlxuICAgICAgICAgICAgY2FzZSAncHJlY2lwcHJvYic6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gJyUnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndmlzaWJpbGl0eSc6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gJ2ttJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZvcm1hdERhdGFOYW1lKG5hbWUpIHtcbiAgICAgICAgbGV0IHJlc3VsdDtcbiAgICAgICAgc3dpdGNoIChuYW1lKSB7XG4gICAgICAgICAgICBjYXNlICd3aW5kc3BlZWQnOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9ICdXaW5kJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2h1bWlkaXR5JzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSAnSHVtaWRpdHknO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndXZpbmRleCc6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gJ1VWIEluZGV4JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3Zpc2liaWxpdHknOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9ICdWaXNpYmlsaXR5JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2Nsb3VkY292ZXInOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9ICdDbG91ZGNvdmVyJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3ByZWNpcHByb2InOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9ICdDaGFuY2Ugb2YgcmFpbic7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzdW5yaXNlJzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSAnU3VucmlzZSc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzdW5zZXQnOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9ICdTdW5zZXQnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyV2Vla2x5KGRheXMpIHtcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB3cmFwcGVyLmNsYXNzTmFtZSA9ICdib3R0b20td3JhcHBlcic7XG4gICAgICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gJ1dlZWtseSBGb3JlY2FzdCc7XG5cbiAgICAgICAgY29uc3Qgd2Vla2x5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHdlZWtseS5jbGFzc05hbWUgPSAnd2Vla2x5JztcblxuICAgICAgICBmb3IgKGNvbnN0IGRheSBvZiBkYXlzKSB7XG4gICAgICAgICAgICBjb25zdCBkYXlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGRheUNvbnRhaW5lci5jbGFzc05hbWUgPSAnZGF5JztcblxuICAgICAgICAgICAgY29uc3QgZGF5TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGF5TmFtZS50ZXh0Q29udGVudCA9IGdldERheU9mV2VlayhkYXkuZGF0ZXRpbWUpO1xuXG4gICAgICAgICAgICBjb25zdCBtaW5pV2VhdGhlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbWluaVdlYXRoZXJDb250YWluZXIuY2xhc3NOYW1lID0gJ21pbmktd2VhdGhlci1jb250YWluZXInO1xuXG4gICAgICAgICAgICBjb25zdCB3ZWF0aGVySW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIHdlYXRoZXJJbWFnZS5zcmMgPSBpbWFnZXMuZ2V0KGRheS5pY29uKTtcbiAgICAgICAgICAgIHdlYXRoZXJJbWFnZS5hbHQgPSAnd2VhdGhlci1pbWFnZSc7XG4gICAgICAgICAgICB3ZWF0aGVySW1hZ2UuY2xhc3NOYW1lID0gJ21pbmktd2VhdGhlci1pY29uJztcbiAgICAgICAgICAgIGNvbnN0IHRlbXBUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgdGVtcFRleHQudGV4dENvbnRlbnQgPSBgJHtkYXkudGVtcE1heH1cXHhCMENgO1xuXG4gICAgICAgICAgICBtaW5pV2VhdGhlckNvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWF0aGVySW1hZ2UpO1xuICAgICAgICAgICAgbWluaVdlYXRoZXJDb250YWluZXIuYXBwZW5kQ2hpbGQodGVtcFRleHQpO1xuXG4gICAgICAgICAgICBjb25zdCBtaW5UZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgbWluVGVtcC50ZXh0Q29udGVudCA9IGAke2RheS50ZW1wTWlufVxceEIwQ2A7XG4gICAgICAgICAgICBtaW5UZW1wLmNsYXNzTmFtZSA9ICdsaWdodC1ncmV5JztcblxuICAgICAgICAgICAgY29uc3Qgd2luZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgd2luZENvbnRhaW5lci5jbGFzc05hbWUgPSAnd2luZC1jb250YWluZXInO1xuXG4gICAgICAgICAgICBjb25zdCB3aW5kQXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIHdpbmRBcnJvdy5zcmMgPSBpbWFnZXMuZ2V0KCdhcnJvdy11cC10aGluJyk7XG4gICAgICAgICAgICB3aW5kQXJyb3cuYWx0ID0gJ3dpbmQgZGlyZWN0aW9uJztcbiAgICAgICAgICAgIHdpbmRBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlKCR7ZGF5LndpbmRkaXJ9ZGVnKWA7XG4gICAgICAgICAgICB3aW5kQXJyb3cuY2xhc3NOYW1lID0gJ21pbmktd2luZC1hcnJvdyc7XG5cbiAgICAgICAgICAgIGNvbnN0IHdpbmRTcGVlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIHdpbmRTcGVlZC50ZXh0Q29udGVudCA9IGAke2RheS53aW5kc3BlZWR9YDtcblxuICAgICAgICAgICAgd2luZENvbnRhaW5lci5hcHBlbmRDaGlsZCh3aW5kQXJyb3cpO1xuICAgICAgICAgICAgd2luZENvbnRhaW5lci5hcHBlbmRDaGlsZCh3aW5kU3BlZWQpO1xuXG4gICAgICAgICAgICBkYXlDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF5TmFtZSk7XG4gICAgICAgICAgICBkYXlDb250YWluZXIuYXBwZW5kQ2hpbGQobWluaVdlYXRoZXJDb250YWluZXIpO1xuICAgICAgICAgICAgZGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKG1pblRlbXApO1xuICAgICAgICAgICAgZGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKHdpbmRDb250YWluZXIpO1xuXG4gICAgICAgICAgICB3ZWVrbHkuYXBwZW5kQ2hpbGQoZGF5Q29udGFpbmVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQod2Vla2x5KTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHdyYXBwZXIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldERheU9mV2VlayhkYXRlKSB7XG4gICAgICAgIHN3aXRjaCAoZGF0ZS5nZXREYXkoKSkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIHJldHVybiAnU3VuZGF5JztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ01vbmRheSc7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdUdWVzZGF5JztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ1dlZG5lc2RheSc7XG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdUaHVyc2RheSc7XG4gICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdGcmlkYXknO1xuICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgIHJldHVybiAnU2F0dXJkYXknO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyQ29udGVudChkYXRhKSB7XG4gICAgICAgIGlmIChkYXRhLmVycm9yKSB7XG4gICAgICAgICAgICBhbGVydChkYXRhLmVycm9yKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdoaWxlIChjb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIubGFzdENoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbmRlclRvZGF5KGRhdGEuZGF5c1swXSwgZGF0YS5jdXJyZW50VGltZSwgZGF0YS5sb2NhdGlvbiwgZGF0YS5kZXNjcmlwdGlvbik7XG4gICAgICAgICAgICByZW5kZXJXZWVrbHkoZGF0YS5kYXlzLnNwbGljZSgxKSwgZGF0YS5kYXlzLmxlbmd0aCAtIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVuZGVyQ29udGVudCxcbiAgICB9XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBkb207IiwiaW1wb3J0IGFwaSBmcm9tICcuL2FwaSc7XG5pbXBvcnQgZG9tIGZyb20gJy4vZG9tJztcblxuY29uc3QgaGFuZGxlcnMgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1iYXIgaW5wdXQnKTtcbiAgICBjb25zdCB0b3BOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1uYXYnKTtcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGxvYWQoaW5wdXQgPSBcIkxvbmRvblwiLCB1bml0cyA9IFwibWV0cmljXCIpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGFwaS5nZXRMb2NhdGlvbkRhdGEoaW5wdXQsIHVuaXRzKTtcbiAgICAgICAgZG9tLnJlbmRlckNvbnRlbnQoZGF0YSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGlja0hhbmRsZXIoKSB7XG4gICAgICAgIGxldCBpbnB1dDtcbiAgICAgICAgbGV0IHVuaXRzID0gJ3VrJztcbiAgICAgICAgdG9wTmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgc3dpdGNoICh0YXJnZXQuaWQpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdzZWFyY2gnOlxuICAgICAgICAgICAgICAgICAgICBpbnB1dCA9IHNlYXJjaElucHV0LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBzZWFyY2hJbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBsb2FkKGlucHV0LCB1bml0cyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBrZXlIYW5kbGVyKCkge1xuICAgICAgICBzZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoJykuY2xpY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVnaXN0ZXJIYW5kbGVycygpIHtcbiAgICAgICAgY2xpY2tIYW5kbGVyKCk7XG4gICAgICAgIGtleUhhbmRsZXIoKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICByZWdpc3RlckhhbmRsZXJzLFxuICAgICAgICBsb2FkLFxuICAgIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyczsiLCJpbXBvcnQgY2xlYXJEYXkgZnJvbSAnLi9pbWFnZXMvY2xlYXItZGF5LnN2ZydcbmltcG9ydCBjbGVhck5pZ2h0IGZyb20gJy4vaW1hZ2VzL2NsZWFyLW5pZ2h0LnN2ZydcbmltcG9ydCBjbG91ZHkgZnJvbSAnLi9pbWFnZXMvY2xvdWR5LnN2ZydcbmltcG9ydCBmb2cgZnJvbSAnLi9pbWFnZXMvZm9nLnN2ZydcbmltcG9ydCBhcnJvd1VwVGhpbiBmcm9tICcuL2ltYWdlcy9hcnJvdy11cC10aGluLnN2ZydcbmltcG9ydCBwYXJ0bHlDbG91ZHlEYXkgZnJvbSAnLi9pbWFnZXMvcGFydGx5LWNsb3VkeS1kYXkuc3ZnJ1xuaW1wb3J0IHBhcnRseUNsb3VkeU5pZ2h0IGZyb20gJy4vaW1hZ2VzL3BhcnRseS1jbG91ZHktbmlnaHQuc3ZnJ1xuaW1wb3J0IHJhaW4gZnJvbSAnLi9pbWFnZXMvcmFpbi5zdmcnXG5pbXBvcnQgc25vdyBmcm9tICcuL2ltYWdlcy9zbm93LnN2ZydcbmltcG9ydCB3aW5kIGZyb20gJy4vaW1hZ2VzL3dpbmQuc3ZnJ1xuXG5jb25zdCBvYmogPSB7XG4gICAgY2xlYXJEYXksXG4gICAgY2xlYXJOaWdodCxcbiAgICBjbG91ZHksXG4gICAgZm9nLFxuICAgIGFycm93VXBUaGluLFxuICAgIHBhcnRseUNsb3VkeURheSxcbiAgICBwYXJ0bHlDbG91ZHlOaWdodCxcbiAgICByYWluLFxuICAgIHNub3csXG4gICAgd2luZCxcbn1cblxuY29uc3Qga2ViYWJpemUgPSAoc3RyKSA9PiBzdHIucmVwbGFjZSgvW0EtWl0rKD8hW2Etel0pfFtBLVpdL2csICgkLCBvZnMpID0+IChvZnMgPyBcIi1cIiA6IFwiXCIpICsgJC50b0xvd2VyQ2FzZSgpKVxuY29uc3QgaW1hZ2VzID0gbmV3IE1hcCgpO1xuXG5mb3IgKGxldCBba2V5LCB2YWxdIG9mIE9iamVjdC5lbnRyaWVzKG9iaikpIHtcbiAgICBpbWFnZXMuc2V0KGtlYmFiaXplKGtleSksIHZhbCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGltYWdlczsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgaGFuZGxlcnMgZnJvbSBcIi4vaGFuZGxlcnNcIjtcblxuaGFuZGxlcnMucmVnaXN0ZXJIYW5kbGVycygpO1xuaGFuZGxlcnMubG9hZCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==