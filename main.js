/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'JetBrains Mono', monospace;
}

:root {
  --border: 7px solid black;
}

input,
textarea,
select {
  display: block;
  width: 100%;
  border: 4px solid black;
  padding: 10px;
  outline: none;
  &:focus {
    border: 5px solid black;
    padding: 9px;
  }
}

select {
  appearance: none;
  cursor: pointer;
}

textarea {
  resize: none;
  line-height: 160%;
}

.select-container {
  position: relative;
}

.select-arrow {
  position: absolute;
  top: 39px;
  right: 18px;
  cursor: pointer;
  pointer-events: none;
}

button {
  outline: none;
  border: var(--border);
  padding: 12px;
  background-color: white;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
}

section {
  border: var(--border);
  padding: 24px;
  flex: 1 0 0;
}

dialog {
  position: fixed;
  top: 10%;
  left: 50%;
  padding: 24px;
  transform: translateX(-50%);
  max-height: 80vh;
  width: max(340px, 30vw);
  border: var(--border);
  overflow-y: auto;

  #dialog-close-button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 36px;
    padding: 0;
    height: 64px;
    width: 64px;
  }

  header {
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    gap: 16px;
    margin-bottom: 24px;
    background-color: white;

    h2 {
      margin-bottom: 0;
      margin-right: auto;
    }
  }
}

.delete-button {
  border-color: rgb(160, 0, 0);
  color: rgb(160, 0, 0);
}

.done-button {
  border-color: green;
  color: green;
}

.dialog-create-button {
  border-color: green;
  color: green;
  display: block;
  margin: 0 auto;
}

#content {
  margin: 24px 22%;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.project {
  padding: 24px;
  border: var(--border);
  display: flex;
  flex-direction: column;
  gap: 24px;
  header {
    display: flex;
    align-items: center;

    .delete-project-button {
      margin-left: auto;
      margin-right: 16px;
    }
  }
  h2 {
    /* margin-bottom: 24px;/ */
  }
}

.todos,
.done-todos {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.todo {
  display: flex;
  gap: 16px;
  align-items: center;
  border: var(--border);
  padding: 8px;
  p {
    margin-left: auto;
  }
  h3 {
    font-size: 24px;
    text-decoration: underline;
  }
}

.completed-heading {
}

.todo.done {
  /* border-color: grey; */
}

label {
  font-size: 20px;
  font-weight: bold;
  display: block;
}

.inputs label {
  margin-bottom: 4px;
}

.inputs {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
}

#done-dialog-button {
  display: block;
  margin: 0 auto;
}

.create-projects-container {
  display: flex;
  margin: 24px 22%;
  align-items: stretch;
  gap: 24px;

  input {
    border: var(--border);
    font-size: 28px;
  }
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,wCAAwC;AAC1C;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;;;EAGE,cAAc;EACd,WAAW;EACX,uBAAuB;EACvB,aAAa;EACb,aAAa;EACb;IACE,uBAAuB;IACvB,YAAY;EACd;AACF;;AAEA;EACE,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,eAAe;EACf,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,qBAAqB;EACrB,aAAa;EACb,uBAAuB;EACvB,eAAe;EACf,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,qBAAqB;EACrB,aAAa;EACb,WAAW;AACb;;AAEA;EACE,eAAe;EACf,QAAQ;EACR,SAAS;EACT,aAAa;EACb,2BAA2B;EAC3B,gBAAgB;EAChB,uBAAuB;EACvB,qBAAqB;EACrB,gBAAgB;;EAEhB;IACE,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,UAAU;IACV,YAAY;IACZ,WAAW;EACb;;EAEA;IACE,aAAa;IACb,oCAAoC;IACpC,mBAAmB;IACnB,SAAS;IACT,mBAAmB;IACnB,uBAAuB;;IAEvB;MACE,gBAAgB;MAChB,kBAAkB;IACpB;EACF;AACF;;AAEA;EACE,4BAA4B;EAC5B,qBAAqB;AACvB;;AAEA;EACE,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,mBAAmB;EACnB,YAAY;EACZ,cAAc;EACd,cAAc;AAChB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,qBAAqB;EACrB,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT;IACE,aAAa;IACb,mBAAmB;;IAEnB;MACE,iBAAiB;MACjB,kBAAkB;IACpB;EACF;EACA;IACE,0BAA0B;EAC5B;AACF;;AAEA;;EAEE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,SAAS;EACT,mBAAmB;EACnB,qBAAqB;EACrB,YAAY;EACZ;IACE,iBAAiB;EACnB;EACA;IACE,eAAe;IACf,0BAA0B;EAC5B;AACF;;AAEA;AACA;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,oBAAoB;EACpB,SAAS;;EAET;IACE,qBAAqB;IACrB,eAAe;EACjB;AACF","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'JetBrains Mono', monospace;\n}\n\n:root {\n  --border: 7px solid black;\n}\n\ninput,\ntextarea,\nselect {\n  display: block;\n  width: 100%;\n  border: 4px solid black;\n  padding: 10px;\n  outline: none;\n  &:focus {\n    border: 5px solid black;\n    padding: 9px;\n  }\n}\n\nselect {\n  appearance: none;\n  cursor: pointer;\n}\n\ntextarea {\n  resize: none;\n  line-height: 160%;\n}\n\n.select-container {\n  position: relative;\n}\n\n.select-arrow {\n  position: absolute;\n  top: 39px;\n  right: 18px;\n  cursor: pointer;\n  pointer-events: none;\n}\n\nbutton {\n  outline: none;\n  border: var(--border);\n  padding: 12px;\n  background-color: white;\n  font-size: 20px;\n  font-weight: bold;\n  cursor: pointer;\n}\n\nsection {\n  border: var(--border);\n  padding: 24px;\n  flex: 1 0 0;\n}\n\ndialog {\n  position: fixed;\n  top: 10%;\n  left: 50%;\n  padding: 24px;\n  transform: translateX(-50%);\n  max-height: 80vh;\n  width: max(340px, 30vw);\n  border: var(--border);\n  overflow-y: auto;\n\n  #dialog-close-button {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 36px;\n    padding: 0;\n    height: 64px;\n    width: 64px;\n  }\n\n  header {\n    display: flex;\n    /* justify-content: space-between; */\n    align-items: center;\n    gap: 16px;\n    margin-bottom: 24px;\n    background-color: white;\n\n    h2 {\n      margin-bottom: 0;\n      margin-right: auto;\n    }\n  }\n}\n\n.delete-button {\n  border-color: rgb(160, 0, 0);\n  color: rgb(160, 0, 0);\n}\n\n.done-button {\n  border-color: green;\n  color: green;\n}\n\n.dialog-create-button {\n  border-color: green;\n  color: green;\n  display: block;\n  margin: 0 auto;\n}\n\n#content {\n  margin: 24px 22%;\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n\n.project {\n  padding: 24px;\n  border: var(--border);\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  header {\n    display: flex;\n    align-items: center;\n\n    .delete-project-button {\n      margin-left: auto;\n      margin-right: 16px;\n    }\n  }\n  h2 {\n    /* margin-bottom: 24px;/ */\n  }\n}\n\n.todos,\n.done-todos {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.todo {\n  display: flex;\n  gap: 16px;\n  align-items: center;\n  border: var(--border);\n  padding: 8px;\n  p {\n    margin-left: auto;\n  }\n  h3 {\n    font-size: 24px;\n    text-decoration: underline;\n  }\n}\n\n.completed-heading {\n}\n\n.todo.done {\n  /* border-color: grey; */\n}\n\nlabel {\n  font-size: 20px;\n  font-weight: bold;\n  display: block;\n}\n\n.inputs label {\n  margin-bottom: 4px;\n}\n\n.inputs {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  margin-bottom: 24px;\n}\n\n#done-dialog-button {\n  display: block;\n  margin: 0 auto;\n}\n\n.create-projects-container {\n  display: flex;\n  margin: 24px 22%;\n  align-items: stretch;\n  gap: 24px;\n\n  input {\n    border: var(--border);\n    font-size: 28px;\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/project */ "./src/data/project.js");
/* harmony import */ var _data_todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/todo */ "./src/data/todo.js");



class App {
  projects = [];

  constructor() {
    this.addProject('Default project');
    this.projects[0].createTodo(
      new _data_todo__WEBPACK_IMPORTED_MODULE_1__["default"]('default title', 'default desc', '1111-11-11', 'medium')
    );
    this.projects[0].createTodo(
      new _data_todo__WEBPACK_IMPORTED_MODULE_1__["default"]('default 3', 'default desc 2', '2222-11-22', 'light')
    );
    this.projects[0].todos[2].done = true;
  }

  addProject(name) {
    const project = new _data_project__WEBPACK_IMPORTED_MODULE_0__["default"](name);
    const placeholderTodo = new _data_todo__WEBPACK_IMPORTED_MODULE_1__["default"](
      'Default todo',
      'Default desc',
      '2222-11-11',
      'light'
    );
    project.createTodo(placeholderTodo);
    this.projects.push(project);
  }

  deleteProject(projectId) {
    const index = this.projects.findIndex((item) => item.id === projectId);
    this.projects.splice(index, 1);
  }
}

// if no state in local storage
const app = new App();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);


/***/ }),

/***/ "./src/components/DoneTodoComponent.js":
/*!*********************************************!*\
  !*** ./src/components/DoneTodoComponent.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../renderer */ "./src/renderer.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app */ "./src/app.js");
/* harmony import */ var _dialogs_DialogEditTodoComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialogs/DialogEditTodoComponent */ "./src/components/dialogs/DialogEditTodoComponent.js");




class DoneTodoComponent {
  constructor(todo) {
    const todoContainer = document.createElement('div');
    todoContainer.classList.add('todo', 'done');

    const todoTitle = document.createElement('h3');
    todoTitle.textContent = todo.title;

    const todoDate = document.createElement('p');
    todoDate.textContent = todo.dueDate;

    const todoDoneButton = document.createElement('button');
    todoDoneButton.classList.add('done-button');
    todoDoneButton.textContent = 'Undo';

    const todoDeleteButton = document.createElement('button');
    todoDeleteButton.classList.add('delete-button');
    todoDeleteButton.textContent = 'Delete';

    todoContainer.appendChild(todoTitle);
    todoContainer.appendChild(todoDate);
    todoContainer.appendChild(todoDoneButton);
    todoContainer.appendChild(todoDeleteButton);
    todoContainer.todoId = todo.id;

    this.setUpEventListeners(todoContainer);
    return todoContainer;
  }

  setUpEventListeners(todoContainer) {
    const todoTitle = todoContainer.querySelector('h3');
    todoTitle.addEventListener('click', (e) => {
      const projectId = e.target.closest('.project').projectId;
      const project = _app__WEBPACK_IMPORTED_MODULE_1__["default"].projects.find((project) => project.id === projectId);
      const todoId = e.target.closest('.todo').todoId;
      const todo = project.todos.find((todo) => todo.id === todoId);

      const dialogEdit = new _dialogs_DialogEditTodoComponent__WEBPACK_IMPORTED_MODULE_2__["default"](todo);
      dialogEdit.showModal();
    });

    const undoButton = todoContainer.querySelector('.done-button');
    undoButton.addEventListener('click', (e) => {
      const undoButton = e.target;

      const projectId = undoButton.closest('.project').projectId;
      const project = _app__WEBPACK_IMPORTED_MODULE_1__["default"].projects.find((project) => project.id === projectId);
      const todoId = undoButton.closest('.todo').todoId;
      const todo = project.todos.find((todo) => todo.id === todoId);

      todo.done = false;
      _renderer__WEBPACK_IMPORTED_MODULE_0__["default"].renderProjects(_app__WEBPACK_IMPORTED_MODULE_1__["default"]);
    });

    const deleteButton = todoContainer.querySelector('.delete-button');
    deleteButton.addEventListener('click', (e) => {
      const deleteButton = e.target;

      const projectId = deleteButton.closest('.project').projectId;
      const project = _app__WEBPACK_IMPORTED_MODULE_1__["default"].projects.find((project) => project.id === projectId);
      const todoId = deleteButton.closest('.todo').todoId;

      project.deleteTodo(todoId);
      _renderer__WEBPACK_IMPORTED_MODULE_0__["default"].renderProjects(_app__WEBPACK_IMPORTED_MODULE_1__["default"]);
    });
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DoneTodoComponent);


/***/ }),

/***/ "./src/components/ProjectComponent.js":
/*!********************************************!*\
  !*** ./src/components/ProjectComponent.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pendingTodoComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pendingTodoComponent */ "./src/components/pendingTodoComponent.js");
/* harmony import */ var _DoneTodoComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DoneTodoComponent */ "./src/components/DoneTodoComponent.js");
/* harmony import */ var _dialogs_DialogCreateTodoComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialogs/DialogCreateTodoComponent */ "./src/components/dialogs/DialogCreateTodoComponent.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app */ "./src/app.js");
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../renderer */ "./src/renderer.js");






class ProjectComponent {
  constructor(project) {
    const projectContainer = document.createElement('div');
    projectContainer.classList.add('project');

    const projectHeader = document.createElement('header');

    const projectName = document.createElement('h2');
    projectName.textContent = project.name;

    const projectDeleteButton = document.createElement('button');
    projectDeleteButton.classList.add('delete-button', 'delete-project-button');
    projectDeleteButton.textContent = 'Delete Project';

    const todoCreateButton = document.createElement('button');
    todoCreateButton.classList.add('create-button');
    todoCreateButton.textContent = 'New Todo';

    projectHeader.appendChild(projectName);
    projectHeader.appendChild(projectDeleteButton);
    projectHeader.appendChild(todoCreateButton);

    const todosContainer = document.createElement('div');
    todosContainer.classList.add('todos');

    const doneTodosHeading = document.createElement('h2');
    doneTodosHeading.classList.add('completed-heading');
    doneTodosHeading.textContent = 'Completed';

    const doneTodosContainer = document.createElement('div');
    doneTodosContainer.classList.add('done-todos');

    for (const todo of project.todos) {
      let todoComponent;
      if (!todo.done) {
        todoComponent = new _pendingTodoComponent__WEBPACK_IMPORTED_MODULE_0__["default"](todo);
        todosContainer.appendChild(todoComponent);
      } else {
        todoComponent = new _DoneTodoComponent__WEBPACK_IMPORTED_MODULE_1__["default"](todo);
        doneTodosContainer.appendChild(todoComponent);
      }
    }

    projectContainer.appendChild(projectHeader);
    projectContainer.appendChild(todosContainer);
    projectContainer.appendChild(doneTodosHeading);
    projectContainer.appendChild(doneTodosContainer);

    projectContainer.projectId = project.id;

    this.setUpEventListeners(projectContainer);
    return projectContainer;
  }

  setUpEventListeners(projectContainer) {
    const todoCreateButton = projectContainer.querySelector('.create-button');

    todoCreateButton.addEventListener('click', (e) => {
      const projectId = e.target.closest('.project').projectId;
      const dialog = new _dialogs_DialogCreateTodoComponent__WEBPACK_IMPORTED_MODULE_2__["default"](projectId);
      dialog.showModal();
    });

    const projectDeleteButton = projectContainer.querySelector(
      '.delete-project-button'
    );

    projectDeleteButton.addEventListener('click', (e) => {
      const projectId = e.target.closest('.project').projectId;
      _app__WEBPACK_IMPORTED_MODULE_3__["default"].deleteProject(projectId);
      _renderer__WEBPACK_IMPORTED_MODULE_4__["default"].renderProjects();
    });
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectComponent);


/***/ }),

/***/ "./src/components/dialogs/DialogCreateTodoComponent.js":
/*!*************************************************************!*\
  !*** ./src/components/dialogs/DialogCreateTodoComponent.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DialogTodoComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DialogTodoComponent */ "./src/components/dialogs/DialogTodoComponent.js");
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../renderer */ "./src/renderer.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app */ "./src/app.js");
/* harmony import */ var _data_todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/todo */ "./src/data/todo.js");





class DialogCreateTodoComponent extends _DialogTodoComponent__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(projectId) {
    super();
    super.changeTitle('New Todo');

    const createButton = document.createElement('button');
    createButton.classList.add('dialog-create-button');
    createButton.textContent = 'Create Todo';
    this.appendChild(createButton);

    createButton.addEventListener('click', () => {
      const project = _app__WEBPACK_IMPORTED_MODULE_2__["default"].projects.find((item) => item.id === projectId);

      const newTodoTitle = this.querySelector('input#title').value;
      const newTodoDueDate = this.querySelector('input#dueDate').value;
      const newTodoPriority = this.querySelector('select#priority').value;
      const newTodoDescription = this.querySelector(
        'textarea#description'
      ).value;

      const newTodo = new _data_todo__WEBPACK_IMPORTED_MODULE_3__["default"](
        newTodoTitle,
        newTodoDescription,
        newTodoDueDate,
        newTodoPriority
      );
      project.createTodo(newTodo);

      _renderer__WEBPACK_IMPORTED_MODULE_1__["default"].renderProjects();
      this.close();
    });
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DialogCreateTodoComponent);


/***/ }),

/***/ "./src/components/dialogs/DialogEditTodoComponent.js":
/*!***********************************************************!*\
  !*** ./src/components/dialogs/DialogEditTodoComponent.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DialogTodoComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DialogTodoComponent */ "./src/components/dialogs/DialogTodoComponent.js");
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../renderer */ "./src/renderer.js");



class DialogEditTodoComponent extends _DialogTodoComponent__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(todo) {
    super();
    super.changeTitle(todo.title);

    const titleInput = this.querySelector('input#title');
    const dueDateInput = this.querySelector('input#dueDate');
    const priorityInput = this.querySelector('select#priority');
    const descriptionInput = this.querySelector('textarea#description');

    titleInput.value = todo.title;
    dueDateInput.value = todo.dueDate;
    priorityInput.value = todo.priority;
    descriptionInput.value = todo.description;

    const doneButton = document.createElement('button');
    doneButton.id = 'done-dialog-button';
    doneButton.textContent = 'Done';
    this.appendChild(doneButton);

    doneButton.addEventListener('click', () => {
      const newTodoTitle = titleInput.value;
      const newTodoDueDate = dueDateInput.value;
      const newTodoPriority = priorityInput.value;
      const newTodoDescription = descriptionInput.value;

      todo.edit(
        newTodoTitle,
        newTodoDescription,
        newTodoDueDate,
        newTodoPriority
      );

      _renderer__WEBPACK_IMPORTED_MODULE_1__["default"].renderProjects();
      this.close();
    });
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DialogEditTodoComponent);


/***/ }),

/***/ "./src/components/dialogs/DialogTodoComponent.js":
/*!*******************************************************!*\
  !*** ./src/components/dialogs/DialogTodoComponent.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/decode */ "./src/helpers/decode.js");
/* harmony import */ var _inputs_SelectPriorityOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../inputs/SelectPriorityOptions */ "./src/components/inputs/SelectPriorityOptions.js");
/* harmony import */ var _inputs_InputComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../inputs/InputComponent */ "./src/components/inputs/InputComponent.js");
/* harmony import */ var _inputs_DateInputComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../inputs/DateInputComponent */ "./src/components/inputs/DateInputComponent.js");
/* harmony import */ var _inputs_SelectComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../inputs/SelectComponent */ "./src/components/inputs/SelectComponent.js");
/* harmony import */ var _inputs_TextAreaComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../inputs/TextAreaComponent */ "./src/components/inputs/TextAreaComponent.js");








class DialogTodoComponent {
  constructor() {
    const dialogContainer = document.querySelector('#dialog');
    dialogContainer.textContent = '';

    const header = document.createElement('header');

    const heading = document.createElement('h2');
    const closeButton = document.createElement('button');
    closeButton.textContent = (0,_helpers_decode__WEBPACK_IMPORTED_MODULE_0__["default"])('&#10006;');
    closeButton.id = 'dialog-close-button';

    header.appendChild(heading);
    header.appendChild(closeButton);

    const inputsContainer = document.createElement('div');
    inputsContainer.classList.add('inputs');

    const titleInput = new _inputs_InputComponent__WEBPACK_IMPORTED_MODULE_2__["default"]('Title:', 'title');
    const dueDateInput = new _inputs_DateInputComponent__WEBPACK_IMPORTED_MODULE_3__["default"]('Due date:', 'dueDate');
    const priorityInput = new _inputs_SelectComponent__WEBPACK_IMPORTED_MODULE_4__["default"](
      'Priority:',
      'priority',
      _inputs_SelectPriorityOptions__WEBPACK_IMPORTED_MODULE_1__["default"]
    );
    const descriptionInput = new _inputs_TextAreaComponent__WEBPACK_IMPORTED_MODULE_5__["default"](
      'Description:',
      'description'
    );

    inputsContainer.appendChild(titleInput);
    inputsContainer.appendChild(dueDateInput);
    inputsContainer.appendChild(priorityInput);
    inputsContainer.appendChild(descriptionInput);

    dialogContainer.appendChild(header);
    dialogContainer.appendChild(inputsContainer);

    this.setUpEventListeners(dialogContainer);
    return dialogContainer;
  }

  changeTitle(title) {
    this.querySelector('h2').textContent = title;
  }

  setUpEventListeners(dialogContainer) {
    const closeButton = dialogContainer.querySelector('#dialog-close-button');
    closeButton.addEventListener('click', () => {
      dialogContainer.close();
    });
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DialogTodoComponent);


/***/ }),

/***/ "./src/components/inputs/DateInputComponent.js":
/*!*****************************************************!*\
  !*** ./src/components/inputs/DateInputComponent.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _InputComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputComponent */ "./src/components/inputs/InputComponent.js");


class DateInputComponent extends _InputComponent__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(label, name) {
    super(label, name);
    this.querySelector('input').type = 'date';
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DateInputComponent);


/***/ }),

/***/ "./src/components/inputs/InputComponent.js":
/*!*************************************************!*\
  !*** ./src/components/inputs/InputComponent.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class InputComponent {
  constructor(label, name) {
    const formControl = document.createElement('div');
    formControl.classList.add('form-control');

    const labelElement = document.createElement('label');
    labelElement.textContent = label;
    labelElement.for = name;

    const input = document.createElement('input');
    input.id = name;
    input.name = name;

    formControl.appendChild(labelElement);
    formControl.appendChild(input);

    return formControl;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputComponent);


/***/ }),

/***/ "./src/components/inputs/SelectComponent.js":
/*!**************************************************!*\
  !*** ./src/components/inputs/SelectComponent.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/decode */ "./src/helpers/decode.js");


class SelectComponent {
  constructor(label, name, options) {
    const formControl = document.createElement('div');
    formControl.classList.add('form-control', 'select-container');

    const labelElement = document.createElement('label');
    labelElement.textContent = label;
    labelElement.for = name;

    const select = document.createElement('select');
    select.id = name;
    select.name = name;

    for (const option of options) {
      const optionElement = document.createElement('option');
      optionElement.value = option.value;
      optionElement.textContent = option.text;

      select.appendChild(optionElement);
    }

    const selectArrow = document.createElement('div');
    selectArrow.textContent = (0,_helpers_decode__WEBPACK_IMPORTED_MODULE_0__["default"])('&#x25BC;');
    selectArrow.classList.add('select-arrow');

    formControl.appendChild(labelElement);
    formControl.appendChild(select);
    formControl.appendChild(selectArrow);

    return formControl;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectComponent);


/***/ }),

/***/ "./src/components/inputs/SelectPriorityOptions.js":
/*!********************************************************!*\
  !*** ./src/components/inputs/SelectPriorityOptions.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const priorityOptions = [
  { text: 'Important', value: 'important', color: 'red' },
  { text: 'Medium', value: 'medium', color: 'blue' },
  { text: 'Light', value: 'light', color: 'green' },
];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (priorityOptions);


/***/ }),

/***/ "./src/components/inputs/TextAreaComponent.js":
/*!****************************************************!*\
  !*** ./src/components/inputs/TextAreaComponent.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class TextAreaComponent {
  constructor(label, name) {
    const formControl = document.createElement('div');
    formControl.classList.add('form-control');

    const labelElement = document.createElement('label');
    labelElement.textContent = label;
    labelElement.for = name;

    const textarea = document.createElement('textarea');
    textarea.id = name;
    textarea.name = name;
    textarea.rows = 3;

    formControl.appendChild(labelElement);
    formControl.appendChild(textarea);

    return formControl;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextAreaComponent);


/***/ }),

/***/ "./src/components/pendingTodoComponent.js":
/*!************************************************!*\
  !*** ./src/components/pendingTodoComponent.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../renderer */ "./src/renderer.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app */ "./src/app.js");
/* harmony import */ var _dialogs_DialogEditTodoComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialogs/DialogEditTodoComponent */ "./src/components/dialogs/DialogEditTodoComponent.js");




class PendingTodoComponent {
  constructor(todo) {
    const todoContainer = document.createElement('div');
    todoContainer.classList.add('todo');

    const todoTitle = document.createElement('h3');
    todoTitle.textContent = todo.title;

    const todoDate = document.createElement('p');
    todoDate.textContent = todo.dueDate;

    const todoDoneButton = document.createElement('button');
    todoDoneButton.classList.add('done-button');
    todoDoneButton.textContent = 'Done';

    const todoDeleteButton = document.createElement('button');
    todoDeleteButton.classList.add('delete-button');
    todoDeleteButton.textContent = 'Delete';

    todoContainer.appendChild(todoTitle);
    todoContainer.appendChild(todoDate);
    todoContainer.appendChild(todoDoneButton);
    todoContainer.appendChild(todoDeleteButton);
    todoContainer.todoId = todo.id;

    this.setUpEventListeners(todoContainer);
    return todoContainer;
  }

  setUpEventListeners(todoContainer) {
    const todoTitle = todoContainer.querySelector('h3');
    todoTitle.addEventListener('click', (e) => {
      const projectId = e.target.closest('.project').projectId;
      const project = _app__WEBPACK_IMPORTED_MODULE_1__["default"].projects.find((project) => project.id === projectId);
      const todoId = e.target.closest('.todo').todoId;
      const todo = project.todos.find((todo) => todo.id === todoId);

      const dialogEdit = new _dialogs_DialogEditTodoComponent__WEBPACK_IMPORTED_MODULE_2__["default"](todo);
      dialogEdit.showModal();
    });

    const doneButton = todoContainer.querySelector('.done-button');
    doneButton.addEventListener('click', () => {
      const projectId = doneButton.closest('.project').projectId;
      const project = _app__WEBPACK_IMPORTED_MODULE_1__["default"].projects.find((project) => project.id === projectId);
      const todoId = doneButton.closest('.todo').todoId;
      const todo = project.todos.find((todo) => todo.id === todoId);

      todo.done = true;
      _renderer__WEBPACK_IMPORTED_MODULE_0__["default"].renderProjects();
    });

    const deleteButton = todoContainer.querySelector('.delete-button');
    deleteButton.addEventListener('click', (e) => {
      const deleteButton = e.target;

      const projectId = deleteButton.closest('.project').projectId;
      const project = _app__WEBPACK_IMPORTED_MODULE_1__["default"].projects.find((project) => project.id === projectId);
      const todoId = deleteButton.closest('.todo').todoId;

      project.deleteTodo(todoId);
      _renderer__WEBPACK_IMPORTED_MODULE_0__["default"].renderProjects();
    });
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PendingTodoComponent);


/***/ }),

/***/ "./src/data/project.js":
/*!*****************************!*\
  !*** ./src/data/project.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Project {
  static #idCounter = 0;
  todos = [];
  constructor(name) {
    this.name = name;
    this.id = Project.#idCounter;
    Project.#idCounter++;
  }

  changeName(newName) {
    this.name = newName;
  }

  createTodo(todo) {
    this.todos.push(todo);
  }

  deleteTodo(id) {
    const todo = this.todos.find((todo) => id === todo.id);
    const index = this.todos.findIndex((item) => item === todo);
    this.todos.splice(index, 1);
  }

  editTodo(id, title, description, dueDate, priority) {
    const todo = this.todos.find((todo) => id === todo.id);
    const index = this.todos.findIndex(todo);
    this.todos[index].edit(title, description, dueDate, priority);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);


/***/ }),

/***/ "./src/data/todo.js":
/*!**************************!*\
  !*** ./src/data/todo.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Todo {
  static #idCounter = 0;
  done = false;

  constructor(title, description, dueDate, priority) {
    this.id = Todo.#idCounter;
    Todo.#idCounter++;

    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  edit(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);


/***/ }),

/***/ "./src/helpers/decode.js":
/*!*******************************!*\
  !*** ./src/helpers/decode.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const decodeHtmlCharCodes = (function () {
  // this prevents any overhead from creating the object each time
  var element = document.createElement('div');

  function decodeHTMLEntities(str) {
    if (str && typeof str === 'string') {
      // strip script/html tags
      str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gim, '');
      str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gim, '');
      element.innerHTML = str;
      str = element.textContent;
      element.textContent = '';
    }

    return str;
  }

  return decodeHTMLEntities;
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (decodeHtmlCharCodes);


/***/ }),

/***/ "./src/renderer.js":
/*!*************************!*\
  !*** ./src/renderer.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/app.js");
/* harmony import */ var _components_ProjectComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ProjectComponent */ "./src/components/ProjectComponent.js");



class Renderer {
  renderProjects() {
    const container = document.querySelector('#content');
    container.textContent = '';

    for (const project of _app__WEBPACK_IMPORTED_MODULE_0__["default"].projects) {
      const projectComponent = new _components_ProjectComponent__WEBPACK_IMPORTED_MODULE_1__["default"](project);
      projectComponent.projectId = project.id;

      container.appendChild(projectComponent);
    }
  }
}

const renderer = new Renderer();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderer);


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
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ "./src/app.js");
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderer */ "./src/renderer.js");
/* harmony import */ var _data_project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/project */ "./src/data/project.js");
/* harmony import */ var _data_todo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data/todo */ "./src/data/todo.js");







const createProjectInput = document.querySelector('#create-project-input');
const createProjectButton = document.querySelector('#create-project-button');

createProjectButton.addEventListener('click', () => {
  _app__WEBPACK_IMPORTED_MODULE_1__["default"].addProject(createProjectInput.value);
  _renderer__WEBPACK_IMPORTED_MODULE_2__["default"].renderProjects();
});

_renderer__WEBPACK_IMPORTED_MODULE_2__["default"].renderProjects();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUI7QUFDekI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8saUZBQWlGLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxPQUFPLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxLQUFLLFlBQVksV0FBVyxLQUFLLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGNBQWMsTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksY0FBYyxNQUFNLFlBQVksYUFBYSxNQUFNLEtBQUssTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsS0FBSyxVQUFVLGFBQWEsTUFBTSxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLE1BQU0sTUFBTSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sTUFBTSxLQUFLLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxV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O0FBRUE7O0FBRUEsaUVBQWUsUUFBUSxFQUFDOzs7Ozs7O1VDbkJ4QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNBc0I7O0FBRUU7QUFDVTtBQUNHO0FBQ047O0FBRS9CO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLDRDQUFHO0FBQ0wsRUFBRSxpREFBUTtBQUNWLENBQUM7O0FBRUQsaURBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvYXBwLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9jb21wb25lbnRzL0RvbmVUb2RvQ29tcG9uZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9jb21wb25lbnRzL1Byb2plY3RDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2NvbXBvbmVudHMvZGlhbG9ncy9EaWFsb2dDcmVhdGVUb2RvQ29tcG9uZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9jb21wb25lbnRzL2RpYWxvZ3MvRGlhbG9nRWRpdFRvZG9Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2NvbXBvbmVudHMvZGlhbG9ncy9EaWFsb2dUb2RvQ29tcG9uZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9jb21wb25lbnRzL2lucHV0cy9EYXRlSW5wdXRDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2NvbXBvbmVudHMvaW5wdXRzL0lucHV0Q29tcG9uZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9jb21wb25lbnRzL2lucHV0cy9TZWxlY3RDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2NvbXBvbmVudHMvaW5wdXRzL1NlbGVjdFByaW9yaXR5T3B0aW9ucy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvY29tcG9uZW50cy9pbnB1dHMvVGV4dEFyZWFDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2NvbXBvbmVudHMvcGVuZGluZ1RvZG9Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2RhdGEvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvZGF0YS90b2RvLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9oZWxwZXJzL2RlY29kZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvcmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LWZhbWlseTogJ0pldEJyYWlucyBNb25vJywgbW9ub3NwYWNlO1xufVxuXG46cm9vdCB7XG4gIC0tYm9yZGVyOiA3cHggc29saWQgYmxhY2s7XG59XG5cbmlucHV0LFxudGV4dGFyZWEsXG5zZWxlY3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogNHB4IHNvbGlkIGJsYWNrO1xuICBwYWRkaW5nOiAxMHB4O1xuICBvdXRsaW5lOiBub25lO1xuICAmOmZvY3VzIHtcbiAgICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcbiAgICBwYWRkaW5nOiA5cHg7XG4gIH1cbn1cblxuc2VsZWN0IHtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG50ZXh0YXJlYSB7XG4gIHJlc2l6ZTogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDE2MCU7XG59XG5cbi5zZWxlY3QtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc2VsZWN0LWFycm93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDM5cHg7XG4gIHJpZ2h0OiAxOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG5idXR0b24ge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IHZhcigtLWJvcmRlcik7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbnNlY3Rpb24ge1xuICBib3JkZXI6IHZhcigtLWJvcmRlcik7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIGZsZXg6IDEgMCAwO1xufVxuXG5kaWFsb2cge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMTAlO1xuICBsZWZ0OiA1MCU7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgbWF4LWhlaWdodDogODB2aDtcbiAgd2lkdGg6IG1heCgzNDBweCwgMzB2dyk7XG4gIGJvcmRlcjogdmFyKC0tYm9yZGVyKTtcbiAgb3ZlcmZsb3cteTogYXV0bztcblxuICAjZGlhbG9nLWNsb3NlLWJ1dHRvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGhlaWdodDogNjRweDtcbiAgICB3aWR0aDogNjRweDtcbiAgfVxuXG4gIGhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47ICovXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDE2cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblxuICAgIGgyIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgfVxuICB9XG59XG5cbi5kZWxldGUtYnV0dG9uIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMTYwLCAwLCAwKTtcbiAgY29sb3I6IHJnYigxNjAsIDAsIDApO1xufVxuXG4uZG9uZS1idXR0b24ge1xuICBib3JkZXItY29sb3I6IGdyZWVuO1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5kaWFsb2ctY3JlYXRlLWJ1dHRvbiB7XG4gIGJvcmRlci1jb2xvcjogZ3JlZW47XG4gIGNvbG9yOiBncmVlbjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4jY29udGVudCB7XG4gIG1hcmdpbjogMjRweCAyMiU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjRweDtcbn1cblxuLnByb2plY3Qge1xuICBwYWRkaW5nOiAyNHB4O1xuICBib3JkZXI6IHZhcigtLWJvcmRlcik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjRweDtcbiAgaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAuZGVsZXRlLXByb2plY3QtYnV0dG9uIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgIH1cbiAgfVxuICBoMiB7XG4gICAgLyogbWFyZ2luLWJvdHRvbTogMjRweDsvICovXG4gIH1cbn1cblxuLnRvZG9zLFxuLmRvbmUtdG9kb3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDE2cHg7XG59XG5cbi50b2RvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxNnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXI6IHZhcigtLWJvcmRlcik7XG4gIHBhZGRpbmc6IDhweDtcbiAgcCB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIH1cbiAgaDMge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgfVxufVxuXG4uY29tcGxldGVkLWhlYWRpbmcge1xufVxuXG4udG9kby5kb25lIHtcbiAgLyogYm9yZGVyLWNvbG9yOiBncmV5OyAqL1xufVxuXG5sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uaW5wdXRzIGxhYmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuXG4uaW5wdXRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuXG4jZG9uZS1kaWFsb2ctYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uY3JlYXRlLXByb2plY3RzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMjRweCAyMiU7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBnYXA6IDI0cHg7XG5cbiAgaW5wdXQge1xuICAgIGJvcmRlcjogdmFyKC0tYm9yZGVyKTtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0Qix3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7OztFQUdFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixhQUFhO0VBQ2I7SUFDRSx1QkFBdUI7SUFDdkIsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxlQUFlO0VBQ2Ysb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFFBQVE7RUFDUixTQUFTO0VBQ1QsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixnQkFBZ0I7O0VBRWhCO0lBQ0UsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFVBQVU7SUFDVixZQUFZO0lBQ1osV0FBVztFQUNiOztFQUVBO0lBQ0UsYUFBYTtJQUNiLG9DQUFvQztJQUNwQyxtQkFBbUI7SUFDbkIsU0FBUztJQUNULG1CQUFtQjtJQUNuQix1QkFBdUI7O0lBRXZCO01BQ0UsZ0JBQWdCO01BQ2hCLGtCQUFrQjtJQUNwQjtFQUNGO0FBQ0Y7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osY0FBYztFQUNkLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNUO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjs7SUFFbkI7TUFDRSxpQkFBaUI7TUFDakIsa0JBQWtCO0lBQ3BCO0VBQ0Y7RUFDQTtJQUNFLDBCQUEwQjtFQUM1QjtBQUNGOztBQUVBOztFQUVFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWjtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLDBCQUEwQjtFQUM1QjtBQUNGOztBQUVBO0FBQ0E7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLFNBQVM7O0VBRVQ7SUFDRSxxQkFBcUI7SUFDckIsZUFBZTtFQUNqQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogJ0pldEJyYWlucyBNb25vJywgbW9ub3NwYWNlO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWJvcmRlcjogN3B4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSxcXG5zZWxlY3Qge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogNHB4IHNvbGlkIGJsYWNrO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICAmOmZvY3VzIHtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XFxuICAgIHBhZGRpbmc6IDlweDtcXG4gIH1cXG59XFxuXFxuc2VsZWN0IHtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIGxpbmUtaGVpZ2h0OiAxNjAlO1xcbn1cXG5cXG4uc2VsZWN0LWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5zZWxlY3QtYXJyb3cge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAzOXB4O1xcbiAgcmlnaHQ6IDE4cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IHZhcigtLWJvcmRlcik7XFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuc2VjdGlvbiB7XFxuICBib3JkZXI6IHZhcigtLWJvcmRlcik7XFxuICBwYWRkaW5nOiAyNHB4O1xcbiAgZmxleDogMSAwIDA7XFxufVxcblxcbmRpYWxvZyB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDEwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHBhZGRpbmc6IDI0cHg7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICBtYXgtaGVpZ2h0OiA4MHZoO1xcbiAgd2lkdGg6IG1heCgzNDBweCwgMzB2dyk7XFxuICBib3JkZXI6IHZhcigtLWJvcmRlcik7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcblxcbiAgI2RpYWxvZy1jbG9zZS1idXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBoZWlnaHQ6IDY0cHg7XFxuICAgIHdpZHRoOiA2NHB4O1xcbiAgfVxcblxcbiAgaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAqL1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDE2cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcblxcbiAgICBoMiB7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLmRlbGV0ZS1idXR0b24ge1xcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMTYwLCAwLCAwKTtcXG4gIGNvbG9yOiByZ2IoMTYwLCAwLCAwKTtcXG59XFxuXFxuLmRvbmUtYnV0dG9uIHtcXG4gIGJvcmRlci1jb2xvcjogZ3JlZW47XFxuICBjb2xvcjogZ3JlZW47XFxufVxcblxcbi5kaWFsb2ctY3JlYXRlLWJ1dHRvbiB7XFxuICBib3JkZXItY29sb3I6IGdyZWVuO1xcbiAgY29sb3I6IGdyZWVuO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgbWFyZ2luOiAyNHB4IDIyJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyNHB4O1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICBwYWRkaW5nOiAyNHB4O1xcbiAgYm9yZGVyOiB2YXIoLS1ib3JkZXIpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDI0cHg7XFxuICBoZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICAuZGVsZXRlLXByb2plY3QtYnV0dG9uIHtcXG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XFxuICAgIH1cXG4gIH1cXG4gIGgyIHtcXG4gICAgLyogbWFyZ2luLWJvdHRvbTogMjRweDsvICovXFxuICB9XFxufVxcblxcbi50b2RvcyxcXG4uZG9uZS10b2RvcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTZweDtcXG59XFxuXFxuLnRvZG8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTZweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXI6IHZhcigtLWJvcmRlcik7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBwIHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICB9XFxuICBoMyB7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICB9XFxufVxcblxcbi5jb21wbGV0ZWQtaGVhZGluZyB7XFxufVxcblxcbi50b2RvLmRvbmUge1xcbiAgLyogYm9yZGVyLWNvbG9yOiBncmV5OyAqL1xcbn1cXG5cXG5sYWJlbCB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uaW5wdXRzIGxhYmVsIHtcXG4gIG1hcmdpbi1ib3R0b206IDRweDtcXG59XFxuXFxuLmlucHV0cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTZweDtcXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XFxufVxcblxcbiNkb25lLWRpYWxvZy1idXR0b24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLmNyZWF0ZS1wcm9qZWN0cy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbjogMjRweCAyMiU7XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIGdhcDogMjRweDtcXG5cXG4gIGlucHV0IHtcXG4gICAgYm9yZGVyOiB2YXIoLS1ib3JkZXIpO1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgUHJvamVjdCBmcm9tICcuL2RhdGEvcHJvamVjdCc7XG5pbXBvcnQgVG9kbyBmcm9tICcuL2RhdGEvdG9kbyc7XG5cbmNsYXNzIEFwcCB7XG4gIHByb2plY3RzID0gW107XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5hZGRQcm9qZWN0KCdEZWZhdWx0IHByb2plY3QnKTtcbiAgICB0aGlzLnByb2plY3RzWzBdLmNyZWF0ZVRvZG8oXG4gICAgICBuZXcgVG9kbygnZGVmYXVsdCB0aXRsZScsICdkZWZhdWx0IGRlc2MnLCAnMTExMS0xMS0xMScsICdtZWRpdW0nKVxuICAgICk7XG4gICAgdGhpcy5wcm9qZWN0c1swXS5jcmVhdGVUb2RvKFxuICAgICAgbmV3IFRvZG8oJ2RlZmF1bHQgMycsICdkZWZhdWx0IGRlc2MgMicsICcyMjIyLTExLTIyJywgJ2xpZ2h0JylcbiAgICApO1xuICAgIHRoaXMucHJvamVjdHNbMF0udG9kb3NbMl0uZG9uZSA9IHRydWU7XG4gIH1cblxuICBhZGRQcm9qZWN0KG5hbWUpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QobmFtZSk7XG4gICAgY29uc3QgcGxhY2Vob2xkZXJUb2RvID0gbmV3IFRvZG8oXG4gICAgICAnRGVmYXVsdCB0b2RvJyxcbiAgICAgICdEZWZhdWx0IGRlc2MnLFxuICAgICAgJzIyMjItMTEtMTEnLFxuICAgICAgJ2xpZ2h0J1xuICAgICk7XG4gICAgcHJvamVjdC5jcmVhdGVUb2RvKHBsYWNlaG9sZGVyVG9kbyk7XG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICB9XG5cbiAgZGVsZXRlUHJvamVjdChwcm9qZWN0SWQpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMucHJvamVjdHMuZmluZEluZGV4KChpdGVtKSA9PiBpdGVtLmlkID09PSBwcm9qZWN0SWQpO1xuICAgIHRoaXMucHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxufVxuXG4vLyBpZiBubyBzdGF0ZSBpbiBsb2NhbCBzdG9yYWdlXG5jb25zdCBhcHAgPSBuZXcgQXBwKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGFwcDtcbiIsImltcG9ydCByZW5kZXJlciBmcm9tICcuLi9yZW5kZXJlcic7XG5pbXBvcnQgYXBwIGZyb20gJy4uL2FwcCc7XG5pbXBvcnQgRGlhbG9nRWRpdFRvZG9Db21wb25lbnQgZnJvbSAnLi9kaWFsb2dzL0RpYWxvZ0VkaXRUb2RvQ29tcG9uZW50JztcblxuY2xhc3MgRG9uZVRvZG9Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcih0b2RvKSB7XG4gICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kbycsICdkb25lJyk7XG5cbiAgICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHRvZG9UaXRsZS50ZXh0Q29udGVudCA9IHRvZG8udGl0bGU7XG5cbiAgICBjb25zdCB0b2RvRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0b2RvRGF0ZS50ZXh0Q29udGVudCA9IHRvZG8uZHVlRGF0ZTtcblxuICAgIGNvbnN0IHRvZG9Eb25lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdG9kb0RvbmVCdXR0b24uY2xhc3NMaXN0LmFkZCgnZG9uZS1idXR0b24nKTtcbiAgICB0b2RvRG9uZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdVbmRvJztcblxuICAgIGNvbnN0IHRvZG9EZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0b2RvRGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1idXR0b24nKTtcbiAgICB0b2RvRGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XG5cbiAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9UaXRsZSk7XG4gICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvRGF0ZSk7XG4gICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvRG9uZUJ1dHRvbik7XG4gICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvRGVsZXRlQnV0dG9uKTtcbiAgICB0b2RvQ29udGFpbmVyLnRvZG9JZCA9IHRvZG8uaWQ7XG5cbiAgICB0aGlzLnNldFVwRXZlbnRMaXN0ZW5lcnModG9kb0NvbnRhaW5lcik7XG4gICAgcmV0dXJuIHRvZG9Db250YWluZXI7XG4gIH1cblxuICBzZXRVcEV2ZW50TGlzdGVuZXJzKHRvZG9Db250YWluZXIpIHtcbiAgICBjb25zdCB0b2RvVGl0bGUgPSB0b2RvQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2gzJyk7XG4gICAgdG9kb1RpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3RJZCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5wcm9qZWN0JykucHJvamVjdElkO1xuICAgICAgY29uc3QgcHJvamVjdCA9IGFwcC5wcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBwcm9qZWN0SWQpO1xuICAgICAgY29uc3QgdG9kb0lkID0gZS50YXJnZXQuY2xvc2VzdCgnLnRvZG8nKS50b2RvSWQ7XG4gICAgICBjb25zdCB0b2RvID0gcHJvamVjdC50b2Rvcy5maW5kKCh0b2RvKSA9PiB0b2RvLmlkID09PSB0b2RvSWQpO1xuXG4gICAgICBjb25zdCBkaWFsb2dFZGl0ID0gbmV3IERpYWxvZ0VkaXRUb2RvQ29tcG9uZW50KHRvZG8pO1xuICAgICAgZGlhbG9nRWRpdC5zaG93TW9kYWwoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHVuZG9CdXR0b24gPSB0b2RvQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5kb25lLWJ1dHRvbicpO1xuICAgIHVuZG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgY29uc3QgdW5kb0J1dHRvbiA9IGUudGFyZ2V0O1xuXG4gICAgICBjb25zdCBwcm9qZWN0SWQgPSB1bmRvQnV0dG9uLmNsb3Nlc3QoJy5wcm9qZWN0JykucHJvamVjdElkO1xuICAgICAgY29uc3QgcHJvamVjdCA9IGFwcC5wcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBwcm9qZWN0SWQpO1xuICAgICAgY29uc3QgdG9kb0lkID0gdW5kb0J1dHRvbi5jbG9zZXN0KCcudG9kbycpLnRvZG9JZDtcbiAgICAgIGNvbnN0IHRvZG8gPSBwcm9qZWN0LnRvZG9zLmZpbmQoKHRvZG8pID0+IHRvZG8uaWQgPT09IHRvZG9JZCk7XG5cbiAgICAgIHRvZG8uZG9uZSA9IGZhbHNlO1xuICAgICAgcmVuZGVyZXIucmVuZGVyUHJvamVjdHMoYXBwKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IHRvZG9Db250YWluZXIucXVlcnlTZWxlY3RvcignLmRlbGV0ZS1idXR0b24nKTtcbiAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZS50YXJnZXQ7XG5cbiAgICAgIGNvbnN0IHByb2plY3RJZCA9IGRlbGV0ZUJ1dHRvbi5jbG9zZXN0KCcucHJvamVjdCcpLnByb2plY3RJZDtcbiAgICAgIGNvbnN0IHByb2plY3QgPSBhcHAucHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gcHJvamVjdElkKTtcbiAgICAgIGNvbnN0IHRvZG9JZCA9IGRlbGV0ZUJ1dHRvbi5jbG9zZXN0KCcudG9kbycpLnRvZG9JZDtcblxuICAgICAgcHJvamVjdC5kZWxldGVUb2RvKHRvZG9JZCk7XG4gICAgICByZW5kZXJlci5yZW5kZXJQcm9qZWN0cyhhcHApO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERvbmVUb2RvQ29tcG9uZW50O1xuIiwiaW1wb3J0IFBlbmRpbmdUb2RvQ29tcG9uZW50IGZyb20gJy4vcGVuZGluZ1RvZG9Db21wb25lbnQnO1xuaW1wb3J0IERvbmVUb2RvQ29tcG9uZW50IGZyb20gJy4vRG9uZVRvZG9Db21wb25lbnQnO1xuaW1wb3J0IERpYWxvZ0NyZWF0ZVRvZG9Db21wb25lbnQgZnJvbSAnLi9kaWFsb2dzL0RpYWxvZ0NyZWF0ZVRvZG9Db21wb25lbnQnO1xuaW1wb3J0IGFwcCBmcm9tICcuLi9hcHAnO1xuaW1wb3J0IHJlbmRlcmVyIGZyb20gJy4uL3JlbmRlcmVyJztcblxuY2xhc3MgUHJvamVjdENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb2plY3QpIHtcbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XG5cbiAgICBjb25zdCBwcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG5cbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG5cbiAgICBjb25zdCBwcm9qZWN0RGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcHJvamVjdERlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtYnV0dG9uJywgJ2RlbGV0ZS1wcm9qZWN0LWJ1dHRvbicpO1xuICAgIHByb2plY3REZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSAnRGVsZXRlIFByb2plY3QnO1xuXG4gICAgY29uc3QgdG9kb0NyZWF0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRvZG9DcmVhdGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnY3JlYXRlLWJ1dHRvbicpO1xuICAgIHRvZG9DcmVhdGVCdXR0b24udGV4dENvbnRlbnQgPSAnTmV3IFRvZG8nO1xuXG4gICAgcHJvamVjdEhlYWRlci5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG4gICAgcHJvamVjdEhlYWRlci5hcHBlbmRDaGlsZChwcm9qZWN0RGVsZXRlQnV0dG9uKTtcbiAgICBwcm9qZWN0SGVhZGVyLmFwcGVuZENoaWxkKHRvZG9DcmVhdGVCdXR0b24pO1xuXG4gICAgY29uc3QgdG9kb3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2Rvc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2RvcycpO1xuXG4gICAgY29uc3QgZG9uZVRvZG9zSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgZG9uZVRvZG9zSGVhZGluZy5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQtaGVhZGluZycpO1xuICAgIGRvbmVUb2Rvc0hlYWRpbmcudGV4dENvbnRlbnQgPSAnQ29tcGxldGVkJztcblxuICAgIGNvbnN0IGRvbmVUb2Rvc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRvbmVUb2Rvc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkb25lLXRvZG9zJyk7XG5cbiAgICBmb3IgKGNvbnN0IHRvZG8gb2YgcHJvamVjdC50b2Rvcykge1xuICAgICAgbGV0IHRvZG9Db21wb25lbnQ7XG4gICAgICBpZiAoIXRvZG8uZG9uZSkge1xuICAgICAgICB0b2RvQ29tcG9uZW50ID0gbmV3IFBlbmRpbmdUb2RvQ29tcG9uZW50KHRvZG8pO1xuICAgICAgICB0b2Rvc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvQ29tcG9uZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRvZG9Db21wb25lbnQgPSBuZXcgRG9uZVRvZG9Db21wb25lbnQodG9kbyk7XG4gICAgICAgIGRvbmVUb2Rvc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvQ29tcG9uZW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RIZWFkZXIpO1xuICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb3NDb250YWluZXIpO1xuICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZG9uZVRvZG9zSGVhZGluZyk7XG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChkb25lVG9kb3NDb250YWluZXIpO1xuXG4gICAgcHJvamVjdENvbnRhaW5lci5wcm9qZWN0SWQgPSBwcm9qZWN0LmlkO1xuXG4gICAgdGhpcy5zZXRVcEV2ZW50TGlzdGVuZXJzKHByb2plY3RDb250YWluZXIpO1xuICAgIHJldHVybiBwcm9qZWN0Q29udGFpbmVyO1xuICB9XG5cbiAgc2V0VXBFdmVudExpc3RlbmVycyhwcm9qZWN0Q29udGFpbmVyKSB7XG4gICAgY29uc3QgdG9kb0NyZWF0ZUJ1dHRvbiA9IHByb2plY3RDb250YWluZXIucXVlcnlTZWxlY3RvcignLmNyZWF0ZS1idXR0b24nKTtcblxuICAgIHRvZG9DcmVhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdElkID0gZS50YXJnZXQuY2xvc2VzdCgnLnByb2plY3QnKS5wcm9qZWN0SWQ7XG4gICAgICBjb25zdCBkaWFsb2cgPSBuZXcgRGlhbG9nQ3JlYXRlVG9kb0NvbXBvbmVudChwcm9qZWN0SWQpO1xuICAgICAgZGlhbG9nLnNob3dNb2RhbCgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcHJvamVjdERlbGV0ZUJ1dHRvbiA9IHByb2plY3RDb250YWluZXIucXVlcnlTZWxlY3RvcihcbiAgICAgICcuZGVsZXRlLXByb2plY3QtYnV0dG9uJ1xuICAgICk7XG5cbiAgICBwcm9qZWN0RGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3RJZCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5wcm9qZWN0JykucHJvamVjdElkO1xuICAgICAgYXBwLmRlbGV0ZVByb2plY3QocHJvamVjdElkKTtcbiAgICAgIHJlbmRlcmVyLnJlbmRlclByb2plY3RzKCk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdENvbXBvbmVudDtcbiIsImltcG9ydCBEaWFsb2dUb2RvQ29tcG9uZW50IGZyb20gJy4vRGlhbG9nVG9kb0NvbXBvbmVudCc7XG5pbXBvcnQgcmVuZGVyZXIgZnJvbSAnLi4vLi4vcmVuZGVyZXInO1xuaW1wb3J0IGFwcCBmcm9tICcuLi8uLi9hcHAnO1xuaW1wb3J0IFRvZG8gZnJvbSAnLi4vLi4vZGF0YS90b2RvJztcblxuY2xhc3MgRGlhbG9nQ3JlYXRlVG9kb0NvbXBvbmVudCBleHRlbmRzIERpYWxvZ1RvZG9Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9qZWN0SWQpIHtcbiAgICBzdXBlcigpO1xuICAgIHN1cGVyLmNoYW5nZVRpdGxlKCdOZXcgVG9kbycpO1xuXG4gICAgY29uc3QgY3JlYXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY3JlYXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RpYWxvZy1jcmVhdGUtYnV0dG9uJyk7XG4gICAgY3JlYXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ0NyZWF0ZSBUb2RvJztcbiAgICB0aGlzLmFwcGVuZENoaWxkKGNyZWF0ZUJ1dHRvbik7XG5cbiAgICBjcmVhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0ID0gYXBwLnByb2plY3RzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IHByb2plY3RJZCk7XG5cbiAgICAgIGNvbnN0IG5ld1RvZG9UaXRsZSA9IHRoaXMucXVlcnlTZWxlY3RvcignaW5wdXQjdGl0bGUnKS52YWx1ZTtcbiAgICAgIGNvbnN0IG5ld1RvZG9EdWVEYXRlID0gdGhpcy5xdWVyeVNlbGVjdG9yKCdpbnB1dCNkdWVEYXRlJykudmFsdWU7XG4gICAgICBjb25zdCBuZXdUb2RvUHJpb3JpdHkgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCNwcmlvcml0eScpLnZhbHVlO1xuICAgICAgY29uc3QgbmV3VG9kb0Rlc2NyaXB0aW9uID0gdGhpcy5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAndGV4dGFyZWEjZGVzY3JpcHRpb24nXG4gICAgICApLnZhbHVlO1xuXG4gICAgICBjb25zdCBuZXdUb2RvID0gbmV3IFRvZG8oXG4gICAgICAgIG5ld1RvZG9UaXRsZSxcbiAgICAgICAgbmV3VG9kb0Rlc2NyaXB0aW9uLFxuICAgICAgICBuZXdUb2RvRHVlRGF0ZSxcbiAgICAgICAgbmV3VG9kb1ByaW9yaXR5XG4gICAgICApO1xuICAgICAgcHJvamVjdC5jcmVhdGVUb2RvKG5ld1RvZG8pO1xuXG4gICAgICByZW5kZXJlci5yZW5kZXJQcm9qZWN0cygpO1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERpYWxvZ0NyZWF0ZVRvZG9Db21wb25lbnQ7XG4iLCJpbXBvcnQgRGlhbG9nVG9kb0NvbXBvbmVudCBmcm9tICcuL0RpYWxvZ1RvZG9Db21wb25lbnQnO1xuaW1wb3J0IHJlbmRlcmVyIGZyb20gJy4uLy4uL3JlbmRlcmVyJztcblxuY2xhc3MgRGlhbG9nRWRpdFRvZG9Db21wb25lbnQgZXh0ZW5kcyBEaWFsb2dUb2RvQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IodG9kbykge1xuICAgIHN1cGVyKCk7XG4gICAgc3VwZXIuY2hhbmdlVGl0bGUodG9kby50aXRsZSk7XG5cbiAgICBjb25zdCB0aXRsZUlucHV0ID0gdGhpcy5xdWVyeVNlbGVjdG9yKCdpbnB1dCN0aXRsZScpO1xuICAgIGNvbnN0IGR1ZURhdGVJbnB1dCA9IHRoaXMucXVlcnlTZWxlY3RvcignaW5wdXQjZHVlRGF0ZScpO1xuICAgIGNvbnN0IHByaW9yaXR5SW5wdXQgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCNwcmlvcml0eScpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhI2Rlc2NyaXB0aW9uJyk7XG5cbiAgICB0aXRsZUlucHV0LnZhbHVlID0gdG9kby50aXRsZTtcbiAgICBkdWVEYXRlSW5wdXQudmFsdWUgPSB0b2RvLmR1ZURhdGU7XG4gICAgcHJpb3JpdHlJbnB1dC52YWx1ZSA9IHRvZG8ucHJpb3JpdHk7XG4gICAgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IHRvZG8uZGVzY3JpcHRpb247XG5cbiAgICBjb25zdCBkb25lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZG9uZUJ1dHRvbi5pZCA9ICdkb25lLWRpYWxvZy1idXR0b24nO1xuICAgIGRvbmVCdXR0b24udGV4dENvbnRlbnQgPSAnRG9uZSc7XG4gICAgdGhpcy5hcHBlbmRDaGlsZChkb25lQnV0dG9uKTtcblxuICAgIGRvbmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBuZXdUb2RvVGl0bGUgPSB0aXRsZUlucHV0LnZhbHVlO1xuICAgICAgY29uc3QgbmV3VG9kb0R1ZURhdGUgPSBkdWVEYXRlSW5wdXQudmFsdWU7XG4gICAgICBjb25zdCBuZXdUb2RvUHJpb3JpdHkgPSBwcmlvcml0eUlucHV0LnZhbHVlO1xuICAgICAgY29uc3QgbmV3VG9kb0Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25JbnB1dC52YWx1ZTtcblxuICAgICAgdG9kby5lZGl0KFxuICAgICAgICBuZXdUb2RvVGl0bGUsXG4gICAgICAgIG5ld1RvZG9EZXNjcmlwdGlvbixcbiAgICAgICAgbmV3VG9kb0R1ZURhdGUsXG4gICAgICAgIG5ld1RvZG9Qcmlvcml0eVxuICAgICAgKTtcblxuICAgICAgcmVuZGVyZXIucmVuZGVyUHJvamVjdHMoKTtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEaWFsb2dFZGl0VG9kb0NvbXBvbmVudDtcbiIsImltcG9ydCBkZWNvZGVIdG1sQ2hhckNvZGVzIGZyb20gJy4uLy4uL2hlbHBlcnMvZGVjb2RlJztcbmltcG9ydCBwcmlvcml0eU9wdGlvbnMgZnJvbSAnLi4vaW5wdXRzL1NlbGVjdFByaW9yaXR5T3B0aW9ucyc7XG5cbmltcG9ydCBJbnB1dENvbXBvbmVudCBmcm9tICcuLi9pbnB1dHMvSW5wdXRDb21wb25lbnQnO1xuaW1wb3J0IERhdGVJbnB1dENvbXBvbmVudCBmcm9tICcuLi9pbnB1dHMvRGF0ZUlucHV0Q29tcG9uZW50JztcbmltcG9ydCBTZWxlY3RDb21wb25lbnQgZnJvbSAnLi4vaW5wdXRzL1NlbGVjdENvbXBvbmVudCc7XG5pbXBvcnQgVGV4dEFyZWFDb21wb25lbnQgZnJvbSAnLi4vaW5wdXRzL1RleHRBcmVhQ29tcG9uZW50JztcblxuY2xhc3MgRGlhbG9nVG9kb0NvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IGRpYWxvZ0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkaWFsb2cnKTtcbiAgICBkaWFsb2dDb250YWluZXIudGV4dENvbnRlbnQgPSAnJztcblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuXG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjbG9zZUJ1dHRvbi50ZXh0Q29udGVudCA9IGRlY29kZUh0bWxDaGFyQ29kZXMoJyYjMTAwMDY7Jyk7XG4gICAgY2xvc2VCdXR0b24uaWQgPSAnZGlhbG9nLWNsb3NlLWJ1dHRvbic7XG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uKTtcblxuICAgIGNvbnN0IGlucHV0c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGlucHV0c0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpbnB1dHMnKTtcblxuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBuZXcgSW5wdXRDb21wb25lbnQoJ1RpdGxlOicsICd0aXRsZScpO1xuICAgIGNvbnN0IGR1ZURhdGVJbnB1dCA9IG5ldyBEYXRlSW5wdXRDb21wb25lbnQoJ0R1ZSBkYXRlOicsICdkdWVEYXRlJyk7XG4gICAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IG5ldyBTZWxlY3RDb21wb25lbnQoXG4gICAgICAnUHJpb3JpdHk6JyxcbiAgICAgICdwcmlvcml0eScsXG4gICAgICBwcmlvcml0eU9wdGlvbnNcbiAgICApO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBuZXcgVGV4dEFyZWFDb21wb25lbnQoXG4gICAgICAnRGVzY3JpcHRpb246JyxcbiAgICAgICdkZXNjcmlwdGlvbidcbiAgICApO1xuXG4gICAgaW5wdXRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuICAgIGlucHV0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChkdWVEYXRlSW5wdXQpO1xuICAgIGlucHV0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eUlucHV0KTtcbiAgICBpbnB1dHNDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7XG5cbiAgICBkaWFsb2dDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBkaWFsb2dDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXRzQ29udGFpbmVyKTtcblxuICAgIHRoaXMuc2V0VXBFdmVudExpc3RlbmVycyhkaWFsb2dDb250YWluZXIpO1xuICAgIHJldHVybiBkaWFsb2dDb250YWluZXI7XG4gIH1cblxuICBjaGFuZ2VUaXRsZSh0aXRsZSkge1xuICAgIHRoaXMucXVlcnlTZWxlY3RvcignaDInKS50ZXh0Q29udGVudCA9IHRpdGxlO1xuICB9XG5cbiAgc2V0VXBFdmVudExpc3RlbmVycyhkaWFsb2dDb250YWluZXIpIHtcbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRpYWxvZ0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcjZGlhbG9nLWNsb3NlLWJ1dHRvbicpO1xuICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZGlhbG9nQ29udGFpbmVyLmNsb3NlKCk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGlhbG9nVG9kb0NvbXBvbmVudDtcbiIsImltcG9ydCBJbnB1dENvbXBvbmVudCBmcm9tICcuL0lucHV0Q29tcG9uZW50JztcblxuY2xhc3MgRGF0ZUlucHV0Q29tcG9uZW50IGV4dGVuZHMgSW5wdXRDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihsYWJlbCwgbmFtZSkge1xuICAgIHN1cGVyKGxhYmVsLCBuYW1lKTtcbiAgICB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykudHlwZSA9ICdkYXRlJztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXRlSW5wdXRDb21wb25lbnQ7XG4iLCJjbGFzcyBJbnB1dENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGxhYmVsLCBuYW1lKSB7XG4gICAgY29uc3QgZm9ybUNvbnRyb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtQ29udHJvbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKTtcblxuICAgIGNvbnN0IGxhYmVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbGFiZWxFbGVtZW50LnRleHRDb250ZW50ID0gbGFiZWw7XG4gICAgbGFiZWxFbGVtZW50LmZvciA9IG5hbWU7XG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQuaWQgPSBuYW1lO1xuICAgIGlucHV0Lm5hbWUgPSBuYW1lO1xuXG4gICAgZm9ybUNvbnRyb2wuYXBwZW5kQ2hpbGQobGFiZWxFbGVtZW50KTtcbiAgICBmb3JtQ29udHJvbC5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgICByZXR1cm4gZm9ybUNvbnRyb2w7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5wdXRDb21wb25lbnQ7XG4iLCJpbXBvcnQgZGVjb2RlSHRtbENoYXJDb2RlcyBmcm9tICcuLi8uLi9oZWxwZXJzL2RlY29kZSc7XG5cbmNsYXNzIFNlbGVjdENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGxhYmVsLCBuYW1lLCBvcHRpb25zKSB7XG4gICAgY29uc3QgZm9ybUNvbnRyb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtQ29udHJvbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnLCAnc2VsZWN0LWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgbGFiZWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBsYWJlbEVsZW1lbnQudGV4dENvbnRlbnQgPSBsYWJlbDtcbiAgICBsYWJlbEVsZW1lbnQuZm9yID0gbmFtZTtcblxuICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIHNlbGVjdC5pZCA9IG5hbWU7XG4gICAgc2VsZWN0Lm5hbWUgPSBuYW1lO1xuXG4gICAgZm9yIChjb25zdCBvcHRpb24gb2Ygb3B0aW9ucykge1xuICAgICAgY29uc3Qgb3B0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgb3B0aW9uRWxlbWVudC52YWx1ZSA9IG9wdGlvbi52YWx1ZTtcbiAgICAgIG9wdGlvbkVsZW1lbnQudGV4dENvbnRlbnQgPSBvcHRpb24udGV4dDtcblxuICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbkVsZW1lbnQpO1xuICAgIH1cblxuICAgIGNvbnN0IHNlbGVjdEFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2VsZWN0QXJyb3cudGV4dENvbnRlbnQgPSBkZWNvZGVIdG1sQ2hhckNvZGVzKCcmI3gyNUJDOycpO1xuICAgIHNlbGVjdEFycm93LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdC1hcnJvdycpO1xuXG4gICAgZm9ybUNvbnRyb2wuYXBwZW5kQ2hpbGQobGFiZWxFbGVtZW50KTtcbiAgICBmb3JtQ29udHJvbC5hcHBlbmRDaGlsZChzZWxlY3QpO1xuICAgIGZvcm1Db250cm9sLmFwcGVuZENoaWxkKHNlbGVjdEFycm93KTtcblxuICAgIHJldHVybiBmb3JtQ29udHJvbDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RDb21wb25lbnQ7XG4iLCJjb25zdCBwcmlvcml0eU9wdGlvbnMgPSBbXG4gIHsgdGV4dDogJ0ltcG9ydGFudCcsIHZhbHVlOiAnaW1wb3J0YW50JywgY29sb3I6ICdyZWQnIH0sXG4gIHsgdGV4dDogJ01lZGl1bScsIHZhbHVlOiAnbWVkaXVtJywgY29sb3I6ICdibHVlJyB9LFxuICB7IHRleHQ6ICdMaWdodCcsIHZhbHVlOiAnbGlnaHQnLCBjb2xvcjogJ2dyZWVuJyB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgcHJpb3JpdHlPcHRpb25zO1xuIiwiY2xhc3MgVGV4dEFyZWFDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihsYWJlbCwgbmFtZSkge1xuICAgIGNvbnN0IGZvcm1Db250cm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9ybUNvbnRyb2wuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJyk7XG5cbiAgICBjb25zdCBsYWJlbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGxhYmVsRWxlbWVudC50ZXh0Q29udGVudCA9IGxhYmVsO1xuICAgIGxhYmVsRWxlbWVudC5mb3IgPSBuYW1lO1xuXG4gICAgY29uc3QgdGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIHRleHRhcmVhLmlkID0gbmFtZTtcbiAgICB0ZXh0YXJlYS5uYW1lID0gbmFtZTtcbiAgICB0ZXh0YXJlYS5yb3dzID0gMztcblxuICAgIGZvcm1Db250cm9sLmFwcGVuZENoaWxkKGxhYmVsRWxlbWVudCk7XG4gICAgZm9ybUNvbnRyb2wuYXBwZW5kQ2hpbGQodGV4dGFyZWEpO1xuXG4gICAgcmV0dXJuIGZvcm1Db250cm9sO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRleHRBcmVhQ29tcG9uZW50O1xuIiwiaW1wb3J0IHJlbmRlcmVyIGZyb20gJy4uL3JlbmRlcmVyJztcbmltcG9ydCBhcHAgZnJvbSAnLi4vYXBwJztcbmltcG9ydCBEaWFsb2dFZGl0VG9kb0NvbXBvbmVudCBmcm9tICcuL2RpYWxvZ3MvRGlhbG9nRWRpdFRvZG9Db21wb25lbnQnO1xuXG5jbGFzcyBQZW5kaW5nVG9kb0NvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHRvZG8pIHtcbiAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2RvJyk7XG5cbiAgICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHRvZG9UaXRsZS50ZXh0Q29udGVudCA9IHRvZG8udGl0bGU7XG5cbiAgICBjb25zdCB0b2RvRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0b2RvRGF0ZS50ZXh0Q29udGVudCA9IHRvZG8uZHVlRGF0ZTtcblxuICAgIGNvbnN0IHRvZG9Eb25lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdG9kb0RvbmVCdXR0b24uY2xhc3NMaXN0LmFkZCgnZG9uZS1idXR0b24nKTtcbiAgICB0b2RvRG9uZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdEb25lJztcblxuICAgIGNvbnN0IHRvZG9EZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0b2RvRGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1idXR0b24nKTtcbiAgICB0b2RvRGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XG5cbiAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9UaXRsZSk7XG4gICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvRGF0ZSk7XG4gICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvRG9uZUJ1dHRvbik7XG4gICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvRGVsZXRlQnV0dG9uKTtcbiAgICB0b2RvQ29udGFpbmVyLnRvZG9JZCA9IHRvZG8uaWQ7XG5cbiAgICB0aGlzLnNldFVwRXZlbnRMaXN0ZW5lcnModG9kb0NvbnRhaW5lcik7XG4gICAgcmV0dXJuIHRvZG9Db250YWluZXI7XG4gIH1cblxuICBzZXRVcEV2ZW50TGlzdGVuZXJzKHRvZG9Db250YWluZXIpIHtcbiAgICBjb25zdCB0b2RvVGl0bGUgPSB0b2RvQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2gzJyk7XG4gICAgdG9kb1RpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3RJZCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5wcm9qZWN0JykucHJvamVjdElkO1xuICAgICAgY29uc3QgcHJvamVjdCA9IGFwcC5wcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBwcm9qZWN0SWQpO1xuICAgICAgY29uc3QgdG9kb0lkID0gZS50YXJnZXQuY2xvc2VzdCgnLnRvZG8nKS50b2RvSWQ7XG4gICAgICBjb25zdCB0b2RvID0gcHJvamVjdC50b2Rvcy5maW5kKCh0b2RvKSA9PiB0b2RvLmlkID09PSB0b2RvSWQpO1xuXG4gICAgICBjb25zdCBkaWFsb2dFZGl0ID0gbmV3IERpYWxvZ0VkaXRUb2RvQ29tcG9uZW50KHRvZG8pO1xuICAgICAgZGlhbG9nRWRpdC5zaG93TW9kYWwoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGRvbmVCdXR0b24gPSB0b2RvQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5kb25lLWJ1dHRvbicpO1xuICAgIGRvbmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0SWQgPSBkb25lQnV0dG9uLmNsb3Nlc3QoJy5wcm9qZWN0JykucHJvamVjdElkO1xuICAgICAgY29uc3QgcHJvamVjdCA9IGFwcC5wcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBwcm9qZWN0SWQpO1xuICAgICAgY29uc3QgdG9kb0lkID0gZG9uZUJ1dHRvbi5jbG9zZXN0KCcudG9kbycpLnRvZG9JZDtcbiAgICAgIGNvbnN0IHRvZG8gPSBwcm9qZWN0LnRvZG9zLmZpbmQoKHRvZG8pID0+IHRvZG8uaWQgPT09IHRvZG9JZCk7XG5cbiAgICAgIHRvZG8uZG9uZSA9IHRydWU7XG4gICAgICByZW5kZXJlci5yZW5kZXJQcm9qZWN0cygpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gdG9kb0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlLWJ1dHRvbicpO1xuICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBlLnRhcmdldDtcblxuICAgICAgY29uc3QgcHJvamVjdElkID0gZGVsZXRlQnV0dG9uLmNsb3Nlc3QoJy5wcm9qZWN0JykucHJvamVjdElkO1xuICAgICAgY29uc3QgcHJvamVjdCA9IGFwcC5wcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBwcm9qZWN0SWQpO1xuICAgICAgY29uc3QgdG9kb0lkID0gZGVsZXRlQnV0dG9uLmNsb3Nlc3QoJy50b2RvJykudG9kb0lkO1xuXG4gICAgICBwcm9qZWN0LmRlbGV0ZVRvZG8odG9kb0lkKTtcbiAgICAgIHJlbmRlcmVyLnJlbmRlclByb2plY3RzKCk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGVuZGluZ1RvZG9Db21wb25lbnQ7XG4iLCJjbGFzcyBQcm9qZWN0IHtcbiAgc3RhdGljICNpZENvdW50ZXIgPSAwO1xuICB0b2RvcyA9IFtdO1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmlkID0gUHJvamVjdC4jaWRDb3VudGVyO1xuICAgIFByb2plY3QuI2lkQ291bnRlcisrO1xuICB9XG5cbiAgY2hhbmdlTmFtZShuZXdOYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmV3TmFtZTtcbiAgfVxuXG4gIGNyZWF0ZVRvZG8odG9kbykge1xuICAgIHRoaXMudG9kb3MucHVzaCh0b2RvKTtcbiAgfVxuXG4gIGRlbGV0ZVRvZG8oaWQpIHtcbiAgICBjb25zdCB0b2RvID0gdGhpcy50b2Rvcy5maW5kKCh0b2RvKSA9PiBpZCA9PT0gdG9kby5pZCk7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnRvZG9zLmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbSA9PT0gdG9kbyk7XG4gICAgdGhpcy50b2Rvcy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG5cbiAgZWRpdFRvZG8oaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICBjb25zdCB0b2RvID0gdGhpcy50b2Rvcy5maW5kKCh0b2RvKSA9PiBpZCA9PT0gdG9kby5pZCk7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnRvZG9zLmZpbmRJbmRleCh0b2RvKTtcbiAgICB0aGlzLnRvZG9zW2luZGV4XS5lZGl0KHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7XG4iLCJjbGFzcyBUb2RvIHtcbiAgc3RhdGljICNpZENvdW50ZXIgPSAwO1xuICBkb25lID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIHRoaXMuaWQgPSBUb2RvLiNpZENvdW50ZXI7XG4gICAgVG9kby4jaWRDb3VudGVyKys7XG5cbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICB9XG5cbiAgZWRpdCh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb2RvO1xuIiwiY29uc3QgZGVjb2RlSHRtbENoYXJDb2RlcyA9IChmdW5jdGlvbiAoKSB7XG4gIC8vIHRoaXMgcHJldmVudHMgYW55IG92ZXJoZWFkIGZyb20gY3JlYXRpbmcgdGhlIG9iamVjdCBlYWNoIHRpbWVcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBmdW5jdGlvbiBkZWNvZGVIVE1MRW50aXRpZXMoc3RyKSB7XG4gICAgaWYgKHN0ciAmJiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gc3RyaXAgc2NyaXB0L2h0bWwgdGFnc1xuICAgICAgc3RyID0gc3RyLnJlcGxhY2UoLzxzY3JpcHRbXj5dKj4oW1xcU1xcc10qPyk8XFwvc2NyaXB0Pi9naW0sICcnKTtcbiAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKC88XFwvP1xcdyg/OlteXCInPl18XCJbXlwiXSpcInwnW14nXSonKSo+L2dpbSwgJycpO1xuICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBzdHI7XG4gICAgICBzdHIgPSBlbGVtZW50LnRleHRDb250ZW50O1xuICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9ICcnO1xuICAgIH1cblxuICAgIHJldHVybiBzdHI7XG4gIH1cblxuICByZXR1cm4gZGVjb2RlSFRNTEVudGl0aWVzO1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZGVjb2RlSHRtbENoYXJDb2RlcztcbiIsImltcG9ydCBhcHAgZnJvbSAnLi9hcHAnO1xuaW1wb3J0IFByb2plY3RDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL1Byb2plY3RDb21wb25lbnQnO1xuXG5jbGFzcyBSZW5kZXJlciB7XG4gIHJlbmRlclByb2plY3RzKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgY29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XG5cbiAgICBmb3IgKGNvbnN0IHByb2plY3Qgb2YgYXBwLnByb2plY3RzKSB7XG4gICAgICBjb25zdCBwcm9qZWN0Q29tcG9uZW50ID0gbmV3IFByb2plY3RDb21wb25lbnQocHJvamVjdCk7XG4gICAgICBwcm9qZWN0Q29tcG9uZW50LnByb2plY3RJZCA9IHByb2plY3QuaWQ7XG5cbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0Q29tcG9uZW50KTtcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgcmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyZXI7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5cbmltcG9ydCBhcHAgZnJvbSAnLi9hcHAnO1xuaW1wb3J0IHJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9kYXRhL3Byb2plY3QnO1xuaW1wb3J0IFRvZG8gZnJvbSAnLi9kYXRhL3RvZG8nO1xuXG5jb25zdCBjcmVhdGVQcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlLXByb2plY3QtaW5wdXQnKTtcbmNvbnN0IGNyZWF0ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlLXByb2plY3QtYnV0dG9uJyk7XG5cbmNyZWF0ZVByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGFwcC5hZGRQcm9qZWN0KGNyZWF0ZVByb2plY3RJbnB1dC52YWx1ZSk7XG4gIHJlbmRlcmVyLnJlbmRlclByb2plY3RzKCk7XG59KTtcblxucmVuZGVyZXIucmVuZGVyUHJvamVjdHMoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==