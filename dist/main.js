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
    &:focus {
      border: var(--border);
      padding: 10px;
    }
  }
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,wCAAwC;AAC1C;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;;;EAGE,cAAc;EACd,WAAW;EACX,uBAAuB;EACvB,aAAa;EACb,aAAa;EACb;IACE,uBAAuB;IACvB,YAAY;EACd;AACF;;AAEA;EACE,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,eAAe;EACf,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,qBAAqB;EACrB,aAAa;EACb,uBAAuB;EACvB,eAAe;EACf,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,qBAAqB;EACrB,aAAa;EACb,WAAW;AACb;;AAEA;EACE,eAAe;EACf,QAAQ;EACR,SAAS;EACT,aAAa;EACb,2BAA2B;EAC3B,gBAAgB;EAChB,uBAAuB;EACvB,qBAAqB;EACrB,gBAAgB;;EAEhB;IACE,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,UAAU;IACV,YAAY;IACZ,WAAW;EACb;;EAEA;IACE,aAAa;IACb,oCAAoC;IACpC,mBAAmB;IACnB,SAAS;IACT,mBAAmB;IACnB,uBAAuB;;IAEvB;MACE,gBAAgB;MAChB,kBAAkB;IACpB;EACF;AACF;;AAEA;EACE,4BAA4B;EAC5B,qBAAqB;AACvB;;AAEA;EACE,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,mBAAmB;EACnB,YAAY;EACZ,cAAc;EACd,cAAc;AAChB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,qBAAqB;EACrB,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT;IACE,aAAa;IACb,mBAAmB;;IAEnB;MACE,iBAAiB;MACjB,kBAAkB;IACpB;EACF;EACA;IACE,0BAA0B;EAC5B;AACF;;AAEA;;EAEE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,SAAS;EACT,mBAAmB;EACnB,qBAAqB;EACrB,YAAY;EACZ;IACE,iBAAiB;EACnB;EACA;IACE,eAAe;IACf,0BAA0B;EAC5B;AACF;;AAEA;AACA;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,oBAAoB;EACpB,SAAS;;EAET;IACE,qBAAqB;IACrB,eAAe;IACf;MACE,qBAAqB;MACrB,aAAa;IACf;EACF;AACF","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'JetBrains Mono', monospace;\n}\n\n:root {\n  --border: 7px solid black;\n}\n\ninput,\ntextarea,\nselect {\n  display: block;\n  width: 100%;\n  border: 4px solid black;\n  padding: 10px;\n  outline: none;\n  &:focus {\n    border: 5px solid black;\n    padding: 9px;\n  }\n}\n\nselect {\n  appearance: none;\n  cursor: pointer;\n}\n\ntextarea {\n  resize: none;\n  line-height: 160%;\n}\n\n.select-container {\n  position: relative;\n}\n\n.select-arrow {\n  position: absolute;\n  top: 39px;\n  right: 18px;\n  cursor: pointer;\n  pointer-events: none;\n}\n\nbutton {\n  outline: none;\n  border: var(--border);\n  padding: 12px;\n  background-color: white;\n  font-size: 20px;\n  font-weight: bold;\n  cursor: pointer;\n}\n\nsection {\n  border: var(--border);\n  padding: 24px;\n  flex: 1 0 0;\n}\n\ndialog {\n  position: fixed;\n  top: 10%;\n  left: 50%;\n  padding: 24px;\n  transform: translateX(-50%);\n  max-height: 80vh;\n  width: max(340px, 30vw);\n  border: var(--border);\n  overflow-y: auto;\n\n  #dialog-close-button {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 36px;\n    padding: 0;\n    height: 64px;\n    width: 64px;\n  }\n\n  header {\n    display: flex;\n    /* justify-content: space-between; */\n    align-items: center;\n    gap: 16px;\n    margin-bottom: 24px;\n    background-color: white;\n\n    h2 {\n      margin-bottom: 0;\n      margin-right: auto;\n    }\n  }\n}\n\n.delete-button {\n  border-color: rgb(160, 0, 0);\n  color: rgb(160, 0, 0);\n}\n\n.done-button {\n  border-color: green;\n  color: green;\n}\n\n.dialog-create-button {\n  border-color: green;\n  color: green;\n  display: block;\n  margin: 0 auto;\n}\n\n#content {\n  margin: 24px 22%;\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n\n.project {\n  padding: 24px;\n  border: var(--border);\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  header {\n    display: flex;\n    align-items: center;\n\n    .delete-project-button {\n      margin-left: auto;\n      margin-right: 16px;\n    }\n  }\n  h2 {\n    /* margin-bottom: 24px;/ */\n  }\n}\n\n.todos,\n.done-todos {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.todo {\n  display: flex;\n  gap: 16px;\n  align-items: center;\n  border: var(--border);\n  padding: 8px;\n  p {\n    margin-left: auto;\n  }\n  h3 {\n    font-size: 24px;\n    text-decoration: underline;\n  }\n}\n\n.completed-heading {\n}\n\n.todo.done {\n  /* border-color: grey; */\n}\n\nlabel {\n  font-size: 20px;\n  font-weight: bold;\n  display: block;\n}\n\n.inputs label {\n  margin-bottom: 4px;\n}\n\n.inputs {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  margin-bottom: 24px;\n}\n\n#done-dialog-button {\n  display: block;\n  margin: 0 auto;\n}\n\n.create-projects-container {\n  display: flex;\n  margin: 24px 22%;\n  align-items: stretch;\n  gap: 24px;\n\n  input {\n    border: var(--border);\n    font-size: 28px;\n    &:focus {\n      border: var(--border);\n      padding: 10px;\n    }\n  }\n}\n"],"sourceRoot":""}]);
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
      new _data_todo__WEBPACK_IMPORTED_MODULE_1__["default"]('default 3', 'default desc 2', '2222-11-22', 'important')
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
/* harmony import */ var _helpers_selectPriorityOptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/selectPriorityOptions */ "./src/helpers/selectPriorityOptions.js");






class DoneTodoComponent {
  constructor(todo) {
    const todoContainer = document.createElement('div');
    todoContainer.classList.add('todo', 'done');

    const todoTitle = document.createElement('h3');
    todoTitle.textContent = todo.title;

    const todoDate = document.createElement('p');
    todoDate.textContent = todo.dueDate;
    const priorityColor = _helpers_selectPriorityOptions__WEBPACK_IMPORTED_MODULE_3__["default"].find(
      (option) => option.value === todo.priority
    ).color;
    todoDate.style.color = priorityColor;

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

      const dialogEdit = new _dialogs_DialogEditTodoComponent__WEBPACK_IMPORTED_MODULE_2__["default"](todo, projectId);
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
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app */ "./src/app.js");




class DialogEditTodoComponent extends _DialogTodoComponent__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(todo, projectId) {
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
      const project = _app__WEBPACK_IMPORTED_MODULE_2__["default"].projects.find((item) => item.id === projectId);

      const newTodoTitle = titleInput.value;
      const newTodoDueDate = dueDateInput.value;
      const newTodoPriority = priorityInput.value;
      const newTodoDescription = descriptionInput.value;

      project.editTodo(
        todo.id,
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
/* harmony import */ var _helpers_selectPriorityOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/selectPriorityOptions */ "./src/helpers/selectPriorityOptions.js");
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
      _helpers_selectPriorityOptions__WEBPACK_IMPORTED_MODULE_1__["default"]
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
/* harmony import */ var _helpers_selectPriorityOptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/selectPriorityOptions */ "./src/helpers/selectPriorityOptions.js");






class PendingTodoComponent {
  constructor(todo) {
    const todoContainer = document.createElement('div');
    todoContainer.classList.add('todo');

    const todoTitle = document.createElement('h3');
    todoTitle.textContent = todo.title;

    const todoDate = document.createElement('p');
    todoDate.textContent = todo.dueDate;
    const priorityColor = _helpers_selectPriorityOptions__WEBPACK_IMPORTED_MODULE_3__["default"].find(
      (option) => option.value === todo.priority
    ).color;
    todoDate.style.color = priorityColor;

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

      const dialogEdit = new _dialogs_DialogEditTodoComponent__WEBPACK_IMPORTED_MODULE_2__["default"](todo, projectId);
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
    this.sortTodos();
  }

  deleteTodo(id) {
    const todo = this.todos.find((todo) => id === todo.id);
    const index = this.todos.findIndex((item) => item === todo);
    this.todos.splice(index, 1);
    this.sortTodos();
  }

  editTodo(id, title, description, dueDate, priority) {
    const todo = this.todos.find((todo) => id === todo.id);
    const index = this.todos.findIndex((item) => item === todo);
    this.todos[index].edit(title, description, dueDate, priority);
    this.sortTodos();
  }

  sortTodos() {
    this.todos.sort((todo1, todo2) => {
      if (
        (todo1.priority === 'important' &&
          (todo2.priority === 'medium' || todo2.priority === 'light')) ||
        (todo1.priority === 'medium' && todo2.priority === 'light')
      ) {
        return -1;
      } else if (todo1.priority === todo2.priority) {
        return 0;
      } else {
        return 1;
      }
    });
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

/***/ "./src/helpers/selectPriorityOptions.js":
/*!**********************************************!*\
  !*** ./src/helpers/selectPriorityOptions.js ***!
  \**********************************************/
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





const createProjectInput = document.querySelector('#create-project-input');
const createProjectButton = document.querySelector('#create-project-button');

createProjectButton.addEventListener('click', () => {
  _app__WEBPACK_IMPORTED_MODULE_1__["default"].addProject(createProjectInput.value);
  _renderer__WEBPACK_IMPORTED_MODULE_2__["default"].renderProjects();
});

_renderer__WEBPACK_IMPORTED_MODULE_2__["default"].renderProjects();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUI7QUFDekI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxpRkFBaUYsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLE9BQU8sVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLEtBQUssWUFBWSxXQUFXLEtBQUssTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsY0FBYyxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxjQUFjLE1BQU0sWUFBWSxhQUFhLE1BQU0sS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxLQUFLLFVBQVUsYUFBYSxNQUFNLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sTUFBTSxNQUFNLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxNQUFNLEtBQUssTUFBTSxL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QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQsaUVBQWUsbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3BCbkM7QUFDQSxJQUFJLHFEQUFxRDtBQUN6RCxJQUFJLGdEQUFnRDtBQUNwRCxJQUFJLCtDQUErQztBQUNuRDs7QUFFQSxpRUFBZSxlQUFlLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTlA7QUFDcUM7O0FBRTdEO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBCQUEwQiw0Q0FBRztBQUM3QixtQ0FBbUMsb0VBQWdCO0FBQ25EOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGlFQUFlLFFBQVEsRUFBQzs7Ozs7OztVQ25CeEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7OztBQ0FzQjs7QUFFRTtBQUNVOztBQUVsQztBQUNBOztBQUVBO0FBQ0EsRUFBRSw0Q0FBRztBQUNMLEVBQUUsaURBQVE7QUFDVixDQUFDOztBQUVELGlEQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvY29tcG9uZW50cy9Eb25lVG9kb0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvY29tcG9uZW50cy9Qcm9qZWN0Q29tcG9uZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9jb21wb25lbnRzL2RpYWxvZ3MvRGlhbG9nQ3JlYXRlVG9kb0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvY29tcG9uZW50cy9kaWFsb2dzL0RpYWxvZ0VkaXRUb2RvQ29tcG9uZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9jb21wb25lbnRzL2RpYWxvZ3MvRGlhbG9nVG9kb0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvY29tcG9uZW50cy9pbnB1dHMvRGF0ZUlucHV0Q29tcG9uZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9jb21wb25lbnRzL2lucHV0cy9JbnB1dENvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvY29tcG9uZW50cy9pbnB1dHMvU2VsZWN0Q29tcG9uZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9jb21wb25lbnRzL2lucHV0cy9UZXh0QXJlYUNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvY29tcG9uZW50cy9wZW5kaW5nVG9kb0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvZGF0YS9wcm9qZWN0LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9kYXRhL3RvZG8uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2hlbHBlcnMvZGVjb2RlLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9oZWxwZXJzL3NlbGVjdFByaW9yaXR5T3B0aW9ucy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvcmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LWZhbWlseTogJ0pldEJyYWlucyBNb25vJywgbW9ub3NwYWNlO1xufVxuXG46cm9vdCB7XG4gIC0tYm9yZGVyOiA3cHggc29saWQgYmxhY2s7XG59XG5cbmlucHV0LFxudGV4dGFyZWEsXG5zZWxlY3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogNHB4IHNvbGlkIGJsYWNrO1xuICBwYWRkaW5nOiAxMHB4O1xuICBvdXRsaW5lOiBub25lO1xuICAmOmZvY3VzIHtcbiAgICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcbiAgICBwYWRkaW5nOiA5cHg7XG4gIH1cbn1cblxuc2VsZWN0IHtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG50ZXh0YXJlYSB7XG4gIHJlc2l6ZTogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDE2MCU7XG59XG5cbi5zZWxlY3QtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc2VsZWN0LWFycm93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDM5cHg7XG4gIHJpZ2h0OiAxOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG5idXR0b24ge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IHZhcigtLWJvcmRlcik7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbnNlY3Rpb24ge1xuICBib3JkZXI6IHZhcigtLWJvcmRlcik7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIGZsZXg6IDEgMCAwO1xufVxuXG5kaWFsb2cge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMTAlO1xuICBsZWZ0OiA1MCU7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgbWF4LWhlaWdodDogODB2aDtcbiAgd2lkdGg6IG1heCgzNDBweCwgMzB2dyk7XG4gIGJvcmRlcjogdmFyKC0tYm9yZGVyKTtcbiAgb3ZlcmZsb3cteTogYXV0bztcblxuICAjZGlhbG9nLWNsb3NlLWJ1dHRvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGhlaWdodDogNjRweDtcbiAgICB3aWR0aDogNjRweDtcbiAgfVxuXG4gIGhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47ICovXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDE2cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblxuICAgIGgyIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgfVxuICB9XG59XG5cbi5kZWxldGUtYnV0dG9uIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMTYwLCAwLCAwKTtcbiAgY29sb3I6IHJnYigxNjAsIDAsIDApO1xufVxuXG4uZG9uZS1idXR0b24ge1xuICBib3JkZXItY29sb3I6IGdyZWVuO1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5kaWFsb2ctY3JlYXRlLWJ1dHRvbiB7XG4gIGJvcmRlci1jb2xvcjogZ3JlZW47XG4gIGNvbG9yOiBncmVlbjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4jY29udGVudCB7XG4gIG1hcmdpbjogMjRweCAyMiU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjRweDtcbn1cblxuLnByb2plY3Qge1xuICBwYWRkaW5nOiAyNHB4O1xuICBib3JkZXI6IHZhcigtLWJvcmRlcik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjRweDtcbiAgaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAuZGVsZXRlLXByb2plY3QtYnV0dG9uIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgIH1cbiAgfVxuICBoMiB7XG4gICAgLyogbWFyZ2luLWJvdHRvbTogMjRweDsvICovXG4gIH1cbn1cblxuLnRvZG9zLFxuLmRvbmUtdG9kb3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDE2cHg7XG59XG5cbi50b2RvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxNnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXI6IHZhcigtLWJvcmRlcik7XG4gIHBhZGRpbmc6IDhweDtcbiAgcCB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIH1cbiAgaDMge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgfVxufVxuXG4uY29tcGxldGVkLWhlYWRpbmcge1xufVxuXG4udG9kby5kb25lIHtcbiAgLyogYm9yZGVyLWNvbG9yOiBncmV5OyAqL1xufVxuXG5sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uaW5wdXRzIGxhYmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuXG4uaW5wdXRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuXG4jZG9uZS1kaWFsb2ctYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uY3JlYXRlLXByb2plY3RzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMjRweCAyMiU7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBnYXA6IDI0cHg7XG5cbiAgaW5wdXQge1xuICAgIGJvcmRlcjogdmFyKC0tYm9yZGVyKTtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgJjpmb2N1cyB7XG4gICAgICBib3JkZXI6IHZhcigtLWJvcmRlcik7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgIH1cbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTs7O0VBR0UsY0FBYztFQUNkLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGFBQWE7RUFDYjtJQUNFLHVCQUF1QjtJQUN2QixZQUFZO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLGVBQWU7RUFDZixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsUUFBUTtFQUNSLFNBQVM7RUFDVCxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLGdCQUFnQjs7RUFFaEI7SUFDRSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsVUFBVTtJQUNWLFlBQVk7SUFDWixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLHVCQUF1Qjs7SUFFdkI7TUFDRSxnQkFBZ0I7TUFDaEIsa0JBQWtCO0lBQ3BCO0VBQ0Y7QUFDRjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixjQUFjO0VBQ2QsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1Q7SUFDRSxhQUFhO0lBQ2IsbUJBQW1COztJQUVuQjtNQUNFLGlCQUFpQjtNQUNqQixrQkFBa0I7SUFDcEI7RUFDRjtFQUNBO0lBQ0UsMEJBQTBCO0VBQzVCO0FBQ0Y7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsWUFBWTtFQUNaO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsMEJBQTBCO0VBQzVCO0FBQ0Y7O0FBRUE7QUFDQTs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsU0FBUzs7RUFFVDtJQUNFLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2Y7TUFDRSxxQkFBcUI7TUFDckIsYUFBYTtJQUNmO0VBQ0Y7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6ICdKZXRCcmFpbnMgTW9ubycsIG1vbm9zcGFjZTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1ib3JkZXI6IDdweCBzb2xpZCBibGFjaztcXG59XFxuXFxuaW5wdXQsXFxudGV4dGFyZWEsXFxuc2VsZWN0IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IDRweCBzb2xpZCBibGFjaztcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgJjpmb2N1cyB7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xcbiAgICBwYWRkaW5nOiA5cHg7XFxuICB9XFxufVxcblxcbnNlbGVjdCB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IG5vbmU7XFxuICBsaW5lLWhlaWdodDogMTYwJTtcXG59XFxuXFxuLnNlbGVjdC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uc2VsZWN0LWFycm93IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMzlweDtcXG4gIHJpZ2h0OiAxOHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiB2YXIoLS1ib3JkZXIpO1xcbiAgcGFkZGluZzogMTJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbnNlY3Rpb24ge1xcbiAgYm9yZGVyOiB2YXIoLS1ib3JkZXIpO1xcbiAgcGFkZGluZzogMjRweDtcXG4gIGZsZXg6IDEgMCAwO1xcbn1cXG5cXG5kaWFsb2cge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAxMCU7XFxuICBsZWZ0OiA1MCU7XFxuICBwYWRkaW5nOiAyNHB4O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgbWF4LWhlaWdodDogODB2aDtcXG4gIHdpZHRoOiBtYXgoMzQwcHgsIDMwdncpO1xcbiAgYm9yZGVyOiB2YXIoLS1ib3JkZXIpO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG5cXG4gICNkaWFsb2ctY2xvc2UtYnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMzZweDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgaGVpZ2h0OiA2NHB4O1xcbiAgICB3aWR0aDogNjRweDtcXG4gIH1cXG5cXG4gIGhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC8qIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgKi9cXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxNnB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5cXG4gICAgaDIge1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICB9XFxuICB9XFxufVxcblxcbi5kZWxldGUtYnV0dG9uIHtcXG4gIGJvcmRlci1jb2xvcjogcmdiKDE2MCwgMCwgMCk7XFxuICBjb2xvcjogcmdiKDE2MCwgMCwgMCk7XFxufVxcblxcbi5kb25lLWJ1dHRvbiB7XFxuICBib3JkZXItY29sb3I6IGdyZWVuO1xcbiAgY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4uZGlhbG9nLWNyZWF0ZS1idXR0b24ge1xcbiAgYm9yZGVyLWNvbG9yOiBncmVlbjtcXG4gIGNvbG9yOiBncmVlbjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbiNjb250ZW50IHtcXG4gIG1hcmdpbjogMjRweCAyMiU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjRweDtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgcGFkZGluZzogMjRweDtcXG4gIGJvcmRlcjogdmFyKC0tYm9yZGVyKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyNHB4O1xcbiAgaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgLmRlbGV0ZS1wcm9qZWN0LWJ1dHRvbiB7XFxuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xcbiAgICB9XFxuICB9XFxuICBoMiB7XFxuICAgIC8qIG1hcmdpbi1ib3R0b206IDI0cHg7LyAqL1xcbiAgfVxcbn1cXG5cXG4udG9kb3MsXFxuLmRvbmUtdG9kb3Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDE2cHg7XFxufVxcblxcbi50b2RvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDE2cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyOiB2YXIoLS1ib3JkZXIpO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgcCB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgfVxcbiAgaDMge1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgfVxcbn1cXG5cXG4uY29tcGxldGVkLWhlYWRpbmcge1xcbn1cXG5cXG4udG9kby5kb25lIHtcXG4gIC8qIGJvcmRlci1jb2xvcjogZ3JleTsgKi9cXG59XFxuXFxubGFiZWwge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmlucHV0cyBsYWJlbCB7XFxuICBtYXJnaW4tYm90dG9tOiA0cHg7XFxufVxcblxcbi5pbnB1dHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDE2cHg7XFxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xcbn1cXG5cXG4jZG9uZS1kaWFsb2ctYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5jcmVhdGUtcHJvamVjdHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW46IDI0cHggMjIlO1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICBnYXA6IDI0cHg7XFxuXFxuICBpbnB1dCB7XFxuICAgIGJvcmRlcjogdmFyKC0tYm9yZGVyKTtcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbiAgICAmOmZvY3VzIHtcXG4gICAgICBib3JkZXI6IHZhcigtLWJvcmRlcik7XFxuICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgfVxcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFByb2plY3QgZnJvbSAnLi9kYXRhL3Byb2plY3QnO1xuaW1wb3J0IFRvZG8gZnJvbSAnLi9kYXRhL3RvZG8nO1xuXG5jbGFzcyBBcHAge1xuICBwcm9qZWN0cyA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYWRkUHJvamVjdCgnRGVmYXVsdCBwcm9qZWN0Jyk7XG4gICAgdGhpcy5wcm9qZWN0c1swXS5jcmVhdGVUb2RvKFxuICAgICAgbmV3IFRvZG8oJ2RlZmF1bHQgdGl0bGUnLCAnZGVmYXVsdCBkZXNjJywgJzExMTEtMTEtMTEnLCAnbWVkaXVtJylcbiAgICApO1xuICAgIHRoaXMucHJvamVjdHNbMF0uY3JlYXRlVG9kbyhcbiAgICAgIG5ldyBUb2RvKCdkZWZhdWx0IDMnLCAnZGVmYXVsdCBkZXNjIDInLCAnMjIyMi0xMS0yMicsICdpbXBvcnRhbnQnKVxuICAgICk7XG4gICAgdGhpcy5wcm9qZWN0c1swXS50b2Rvc1syXS5kb25lID0gdHJ1ZTtcbiAgfVxuXG4gIGFkZFByb2plY3QobmFtZSkge1xuICAgIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdChuYW1lKTtcbiAgICBjb25zdCBwbGFjZWhvbGRlclRvZG8gPSBuZXcgVG9kbyhcbiAgICAgICdEZWZhdWx0IHRvZG8nLFxuICAgICAgJ0RlZmF1bHQgZGVzYycsXG4gICAgICAnMjIyMi0xMS0xMScsXG4gICAgICAnbGlnaHQnXG4gICAgKTtcbiAgICBwcm9qZWN0LmNyZWF0ZVRvZG8ocGxhY2Vob2xkZXJUb2RvKTtcbiAgICB0aGlzLnByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gIH1cblxuICBkZWxldGVQcm9qZWN0KHByb2plY3RJZCkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5wcm9qZWN0cy5maW5kSW5kZXgoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IHByb2plY3RJZCk7XG4gICAgdGhpcy5wcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG59XG5cbi8vIGlmIG5vIHN0YXRlIGluIGxvY2FsIHN0b3JhZ2VcbmNvbnN0IGFwcCA9IG5ldyBBcHAoKTtcblxuZXhwb3J0IGRlZmF1bHQgYXBwO1xuIiwiaW1wb3J0IHJlbmRlcmVyIGZyb20gJy4uL3JlbmRlcmVyJztcbmltcG9ydCBhcHAgZnJvbSAnLi4vYXBwJztcbmltcG9ydCBEaWFsb2dFZGl0VG9kb0NvbXBvbmVudCBmcm9tICcuL2RpYWxvZ3MvRGlhbG9nRWRpdFRvZG9Db21wb25lbnQnO1xuXG5pbXBvcnQgcHJpb3JpdHlPcHRpb25zIGZyb20gJy4uL2hlbHBlcnMvc2VsZWN0UHJpb3JpdHlPcHRpb25zJztcblxuY2xhc3MgRG9uZVRvZG9Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcih0b2RvKSB7XG4gICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kbycsICdkb25lJyk7XG5cbiAgICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHRvZG9UaXRsZS50ZXh0Q29udGVudCA9IHRvZG8udGl0bGU7XG5cbiAgICBjb25zdCB0b2RvRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0b2RvRGF0ZS50ZXh0Q29udGVudCA9IHRvZG8uZHVlRGF0ZTtcbiAgICBjb25zdCBwcmlvcml0eUNvbG9yID0gcHJpb3JpdHlPcHRpb25zLmZpbmQoXG4gICAgICAob3B0aW9uKSA9PiBvcHRpb24udmFsdWUgPT09IHRvZG8ucHJpb3JpdHlcbiAgICApLmNvbG9yO1xuICAgIHRvZG9EYXRlLnN0eWxlLmNvbG9yID0gcHJpb3JpdHlDb2xvcjtcblxuICAgIGNvbnN0IHRvZG9Eb25lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdG9kb0RvbmVCdXR0b24uY2xhc3NMaXN0LmFkZCgnZG9uZS1idXR0b24nKTtcbiAgICB0b2RvRG9uZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdVbmRvJztcblxuICAgIGNvbnN0IHRvZG9EZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0b2RvRGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1idXR0b24nKTtcbiAgICB0b2RvRGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XG5cbiAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9UaXRsZSk7XG4gICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvRGF0ZSk7XG4gICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvRG9uZUJ1dHRvbik7XG4gICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvRGVsZXRlQnV0dG9uKTtcbiAgICB0b2RvQ29udGFpbmVyLnRvZG9JZCA9IHRvZG8uaWQ7XG5cbiAgICB0aGlzLnNldFVwRXZlbnRMaXN0ZW5lcnModG9kb0NvbnRhaW5lcik7XG4gICAgcmV0dXJuIHRvZG9Db250YWluZXI7XG4gIH1cblxuICBzZXRVcEV2ZW50TGlzdGVuZXJzKHRvZG9Db250YWluZXIpIHtcbiAgICBjb25zdCB0b2RvVGl0bGUgPSB0b2RvQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2gzJyk7XG4gICAgdG9kb1RpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3RJZCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5wcm9qZWN0JykucHJvamVjdElkO1xuICAgICAgY29uc3QgcHJvamVjdCA9IGFwcC5wcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBwcm9qZWN0SWQpO1xuICAgICAgY29uc3QgdG9kb0lkID0gZS50YXJnZXQuY2xvc2VzdCgnLnRvZG8nKS50b2RvSWQ7XG4gICAgICBjb25zdCB0b2RvID0gcHJvamVjdC50b2Rvcy5maW5kKCh0b2RvKSA9PiB0b2RvLmlkID09PSB0b2RvSWQpO1xuXG4gICAgICBjb25zdCBkaWFsb2dFZGl0ID0gbmV3IERpYWxvZ0VkaXRUb2RvQ29tcG9uZW50KHRvZG8sIHByb2plY3RJZCk7XG4gICAgICBkaWFsb2dFZGl0LnNob3dNb2RhbCgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgdW5kb0J1dHRvbiA9IHRvZG9Db250YWluZXIucXVlcnlTZWxlY3RvcignLmRvbmUtYnV0dG9uJyk7XG4gICAgdW5kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBjb25zdCB1bmRvQnV0dG9uID0gZS50YXJnZXQ7XG5cbiAgICAgIGNvbnN0IHByb2plY3RJZCA9IHVuZG9CdXR0b24uY2xvc2VzdCgnLnByb2plY3QnKS5wcm9qZWN0SWQ7XG4gICAgICBjb25zdCBwcm9qZWN0ID0gYXBwLnByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IHByb2plY3RJZCk7XG4gICAgICBjb25zdCB0b2RvSWQgPSB1bmRvQnV0dG9uLmNsb3Nlc3QoJy50b2RvJykudG9kb0lkO1xuICAgICAgY29uc3QgdG9kbyA9IHByb2plY3QudG9kb3MuZmluZCgodG9kbykgPT4gdG9kby5pZCA9PT0gdG9kb0lkKTtcblxuICAgICAgdG9kby5kb25lID0gZmFsc2U7XG4gICAgICByZW5kZXJlci5yZW5kZXJQcm9qZWN0cyhhcHApO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gdG9kb0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlLWJ1dHRvbicpO1xuICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBlLnRhcmdldDtcblxuICAgICAgY29uc3QgcHJvamVjdElkID0gZGVsZXRlQnV0dG9uLmNsb3Nlc3QoJy5wcm9qZWN0JykucHJvamVjdElkO1xuICAgICAgY29uc3QgcHJvamVjdCA9IGFwcC5wcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBwcm9qZWN0SWQpO1xuICAgICAgY29uc3QgdG9kb0lkID0gZGVsZXRlQnV0dG9uLmNsb3Nlc3QoJy50b2RvJykudG9kb0lkO1xuXG4gICAgICBwcm9qZWN0LmRlbGV0ZVRvZG8odG9kb0lkKTtcbiAgICAgIHJlbmRlcmVyLnJlbmRlclByb2plY3RzKGFwcCk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRG9uZVRvZG9Db21wb25lbnQ7XG4iLCJpbXBvcnQgUGVuZGluZ1RvZG9Db21wb25lbnQgZnJvbSAnLi9wZW5kaW5nVG9kb0NvbXBvbmVudCc7XG5pbXBvcnQgRG9uZVRvZG9Db21wb25lbnQgZnJvbSAnLi9Eb25lVG9kb0NvbXBvbmVudCc7XG5pbXBvcnQgRGlhbG9nQ3JlYXRlVG9kb0NvbXBvbmVudCBmcm9tICcuL2RpYWxvZ3MvRGlhbG9nQ3JlYXRlVG9kb0NvbXBvbmVudCc7XG5pbXBvcnQgYXBwIGZyb20gJy4uL2FwcCc7XG5pbXBvcnQgcmVuZGVyZXIgZnJvbSAnLi4vcmVuZGVyZXInO1xuXG5jbGFzcyBQcm9qZWN0Q29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvamVjdCkge1xuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcblxuICAgIGNvbnN0IHByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcblxuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcblxuICAgIGNvbnN0IHByb2plY3REZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBwcm9qZWN0RGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1idXR0b24nLCAnZGVsZXRlLXByb2plY3QtYnV0dG9uJyk7XG4gICAgcHJvamVjdERlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdEZWxldGUgUHJvamVjdCc7XG5cbiAgICBjb25zdCB0b2RvQ3JlYXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdG9kb0NyZWF0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjcmVhdGUtYnV0dG9uJyk7XG4gICAgdG9kb0NyZWF0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdOZXcgVG9kbyc7XG5cbiAgICBwcm9qZWN0SGVhZGVyLmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcbiAgICBwcm9qZWN0SGVhZGVyLmFwcGVuZENoaWxkKHByb2plY3REZWxldGVCdXR0b24pO1xuICAgIHByb2plY3RIZWFkZXIuYXBwZW5kQ2hpbGQodG9kb0NyZWF0ZUJ1dHRvbik7XG5cbiAgICBjb25zdCB0b2Rvc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvZG9zJyk7XG5cbiAgICBjb25zdCBkb25lVG9kb3NIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBkb25lVG9kb3NIZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZC1oZWFkaW5nJyk7XG4gICAgZG9uZVRvZG9zSGVhZGluZy50ZXh0Q29udGVudCA9ICdDb21wbGV0ZWQnO1xuXG4gICAgY29uc3QgZG9uZVRvZG9zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZG9uZVRvZG9zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2RvbmUtdG9kb3MnKTtcblxuICAgIGZvciAoY29uc3QgdG9kbyBvZiBwcm9qZWN0LnRvZG9zKSB7XG4gICAgICBsZXQgdG9kb0NvbXBvbmVudDtcbiAgICAgIGlmICghdG9kby5kb25lKSB7XG4gICAgICAgIHRvZG9Db21wb25lbnQgPSBuZXcgUGVuZGluZ1RvZG9Db21wb25lbnQodG9kbyk7XG4gICAgICAgIHRvZG9zQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9Db21wb25lbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG9kb0NvbXBvbmVudCA9IG5ldyBEb25lVG9kb0NvbXBvbmVudCh0b2RvKTtcbiAgICAgICAgZG9uZVRvZG9zQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9Db21wb25lbnQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEhlYWRlcik7XG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2Rvc0NvbnRhaW5lcik7XG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChkb25lVG9kb3NIZWFkaW5nKTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRvbmVUb2Rvc0NvbnRhaW5lcik7XG5cbiAgICBwcm9qZWN0Q29udGFpbmVyLnByb2plY3RJZCA9IHByb2plY3QuaWQ7XG5cbiAgICB0aGlzLnNldFVwRXZlbnRMaXN0ZW5lcnMocHJvamVjdENvbnRhaW5lcik7XG4gICAgcmV0dXJuIHByb2plY3RDb250YWluZXI7XG4gIH1cblxuICBzZXRVcEV2ZW50TGlzdGVuZXJzKHByb2plY3RDb250YWluZXIpIHtcbiAgICBjb25zdCB0b2RvQ3JlYXRlQnV0dG9uID0gcHJvamVjdENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlLWJ1dHRvbicpO1xuXG4gICAgdG9kb0NyZWF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0SWQgPSBlLnRhcmdldC5jbG9zZXN0KCcucHJvamVjdCcpLnByb2plY3RJZDtcbiAgICAgIGNvbnN0IGRpYWxvZyA9IG5ldyBEaWFsb2dDcmVhdGVUb2RvQ29tcG9uZW50KHByb2plY3RJZCk7XG4gICAgICBkaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBwcm9qZWN0RGVsZXRlQnV0dG9uID0gcHJvamVjdENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxuICAgICAgJy5kZWxldGUtcHJvamVjdC1idXR0b24nXG4gICAgKTtcblxuICAgIHByb2plY3REZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdElkID0gZS50YXJnZXQuY2xvc2VzdCgnLnByb2plY3QnKS5wcm9qZWN0SWQ7XG4gICAgICBhcHAuZGVsZXRlUHJvamVjdChwcm9qZWN0SWQpO1xuICAgICAgcmVuZGVyZXIucmVuZGVyUHJvamVjdHMoKTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0Q29tcG9uZW50O1xuIiwiaW1wb3J0IERpYWxvZ1RvZG9Db21wb25lbnQgZnJvbSAnLi9EaWFsb2dUb2RvQ29tcG9uZW50JztcbmltcG9ydCByZW5kZXJlciBmcm9tICcuLi8uLi9yZW5kZXJlcic7XG5pbXBvcnQgYXBwIGZyb20gJy4uLy4uL2FwcCc7XG5pbXBvcnQgVG9kbyBmcm9tICcuLi8uLi9kYXRhL3RvZG8nO1xuXG5jbGFzcyBEaWFsb2dDcmVhdGVUb2RvQ29tcG9uZW50IGV4dGVuZHMgRGlhbG9nVG9kb0NvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb2plY3RJZCkge1xuICAgIHN1cGVyKCk7XG4gICAgc3VwZXIuY2hhbmdlVGl0bGUoJ05ldyBUb2RvJyk7XG5cbiAgICBjb25zdCBjcmVhdGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjcmVhdGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGlhbG9nLWNyZWF0ZS1idXR0b24nKTtcbiAgICBjcmVhdGVCdXR0b24udGV4dENvbnRlbnQgPSAnQ3JlYXRlIFRvZG8nO1xuICAgIHRoaXMuYXBwZW5kQ2hpbGQoY3JlYXRlQnV0dG9uKTtcblxuICAgIGNyZWF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3QgPSBhcHAucHJvamVjdHMuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gcHJvamVjdElkKTtcblxuICAgICAgY29uc3QgbmV3VG9kb1RpdGxlID0gdGhpcy5xdWVyeVNlbGVjdG9yKCdpbnB1dCN0aXRsZScpLnZhbHVlO1xuICAgICAgY29uc3QgbmV3VG9kb0R1ZURhdGUgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0I2R1ZURhdGUnKS52YWx1ZTtcbiAgICAgIGNvbnN0IG5ld1RvZG9Qcmlvcml0eSA9IHRoaXMucXVlcnlTZWxlY3Rvcignc2VsZWN0I3ByaW9yaXR5JykudmFsdWU7XG4gICAgICBjb25zdCBuZXdUb2RvRGVzY3JpcHRpb24gPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICd0ZXh0YXJlYSNkZXNjcmlwdGlvbidcbiAgICAgICkudmFsdWU7XG5cbiAgICAgIGNvbnN0IG5ld1RvZG8gPSBuZXcgVG9kbyhcbiAgICAgICAgbmV3VG9kb1RpdGxlLFxuICAgICAgICBuZXdUb2RvRGVzY3JpcHRpb24sXG4gICAgICAgIG5ld1RvZG9EdWVEYXRlLFxuICAgICAgICBuZXdUb2RvUHJpb3JpdHlcbiAgICAgICk7XG4gICAgICBwcm9qZWN0LmNyZWF0ZVRvZG8obmV3VG9kbyk7XG5cbiAgICAgIHJlbmRlcmVyLnJlbmRlclByb2plY3RzKCk7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGlhbG9nQ3JlYXRlVG9kb0NvbXBvbmVudDtcbiIsImltcG9ydCBEaWFsb2dUb2RvQ29tcG9uZW50IGZyb20gJy4vRGlhbG9nVG9kb0NvbXBvbmVudCc7XG5pbXBvcnQgcmVuZGVyZXIgZnJvbSAnLi4vLi4vcmVuZGVyZXInO1xuaW1wb3J0IGFwcCBmcm9tICcuLi8uLi9hcHAnO1xuXG5jbGFzcyBEaWFsb2dFZGl0VG9kb0NvbXBvbmVudCBleHRlbmRzIERpYWxvZ1RvZG9Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcih0b2RvLCBwcm9qZWN0SWQpIHtcbiAgICBzdXBlcigpO1xuICAgIHN1cGVyLmNoYW5nZVRpdGxlKHRvZG8udGl0bGUpO1xuXG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IHRoaXMucXVlcnlTZWxlY3RvcignaW5wdXQjdGl0bGUnKTtcbiAgICBjb25zdCBkdWVEYXRlSW5wdXQgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0I2R1ZURhdGUnKTtcbiAgICBjb25zdCBwcmlvcml0eUlucHV0ID0gdGhpcy5xdWVyeVNlbGVjdG9yKCdzZWxlY3QjcHJpb3JpdHknKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gdGhpcy5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYSNkZXNjcmlwdGlvbicpO1xuXG4gICAgdGl0bGVJbnB1dC52YWx1ZSA9IHRvZG8udGl0bGU7XG4gICAgZHVlRGF0ZUlucHV0LnZhbHVlID0gdG9kby5kdWVEYXRlO1xuICAgIHByaW9yaXR5SW5wdXQudmFsdWUgPSB0b2RvLnByaW9yaXR5O1xuICAgIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSB0b2RvLmRlc2NyaXB0aW9uO1xuXG4gICAgY29uc3QgZG9uZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGRvbmVCdXR0b24uaWQgPSAnZG9uZS1kaWFsb2ctYnV0dG9uJztcbiAgICBkb25lQnV0dG9uLnRleHRDb250ZW50ID0gJ0RvbmUnO1xuICAgIHRoaXMuYXBwZW5kQ2hpbGQoZG9uZUJ1dHRvbik7XG5cbiAgICBkb25lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdCA9IGFwcC5wcm9qZWN0cy5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBwcm9qZWN0SWQpO1xuXG4gICAgICBjb25zdCBuZXdUb2RvVGl0bGUgPSB0aXRsZUlucHV0LnZhbHVlO1xuICAgICAgY29uc3QgbmV3VG9kb0R1ZURhdGUgPSBkdWVEYXRlSW5wdXQudmFsdWU7XG4gICAgICBjb25zdCBuZXdUb2RvUHJpb3JpdHkgPSBwcmlvcml0eUlucHV0LnZhbHVlO1xuICAgICAgY29uc3QgbmV3VG9kb0Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25JbnB1dC52YWx1ZTtcblxuICAgICAgcHJvamVjdC5lZGl0VG9kbyhcbiAgICAgICAgdG9kby5pZCxcbiAgICAgICAgbmV3VG9kb1RpdGxlLFxuICAgICAgICBuZXdUb2RvRGVzY3JpcHRpb24sXG4gICAgICAgIG5ld1RvZG9EdWVEYXRlLFxuICAgICAgICBuZXdUb2RvUHJpb3JpdHlcbiAgICAgICk7XG5cbiAgICAgIHJlbmRlcmVyLnJlbmRlclByb2plY3RzKCk7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGlhbG9nRWRpdFRvZG9Db21wb25lbnQ7XG4iLCJpbXBvcnQgZGVjb2RlSHRtbENoYXJDb2RlcyBmcm9tICcuLi8uLi9oZWxwZXJzL2RlY29kZSc7XG5pbXBvcnQgcHJpb3JpdHlPcHRpb25zIGZyb20gJy4uLy4uL2hlbHBlcnMvc2VsZWN0UHJpb3JpdHlPcHRpb25zJztcblxuaW1wb3J0IElucHV0Q29tcG9uZW50IGZyb20gJy4uL2lucHV0cy9JbnB1dENvbXBvbmVudCc7XG5pbXBvcnQgRGF0ZUlucHV0Q29tcG9uZW50IGZyb20gJy4uL2lucHV0cy9EYXRlSW5wdXRDb21wb25lbnQnO1xuaW1wb3J0IFNlbGVjdENvbXBvbmVudCBmcm9tICcuLi9pbnB1dHMvU2VsZWN0Q29tcG9uZW50JztcbmltcG9ydCBUZXh0QXJlYUNvbXBvbmVudCBmcm9tICcuLi9pbnB1dHMvVGV4dEFyZWFDb21wb25lbnQnO1xuXG5jbGFzcyBEaWFsb2dUb2RvQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgZGlhbG9nQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RpYWxvZycpO1xuICAgIGRpYWxvZ0NvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG5cbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNsb3NlQnV0dG9uLnRleHRDb250ZW50ID0gZGVjb2RlSHRtbENoYXJDb2RlcygnJiMxMDAwNjsnKTtcbiAgICBjbG9zZUJ1dHRvbi5pZCA9ICdkaWFsb2ctY2xvc2UtYnV0dG9uJztcblxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pO1xuXG4gICAgY29uc3QgaW5wdXRzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5wdXRzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2lucHV0cycpO1xuXG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IG5ldyBJbnB1dENvbXBvbmVudCgnVGl0bGU6JywgJ3RpdGxlJyk7XG4gICAgY29uc3QgZHVlRGF0ZUlucHV0ID0gbmV3IERhdGVJbnB1dENvbXBvbmVudCgnRHVlIGRhdGU6JywgJ2R1ZURhdGUnKTtcbiAgICBjb25zdCBwcmlvcml0eUlucHV0ID0gbmV3IFNlbGVjdENvbXBvbmVudChcbiAgICAgICdQcmlvcml0eTonLFxuICAgICAgJ3ByaW9yaXR5JyxcbiAgICAgIHByaW9yaXR5T3B0aW9uc1xuICAgICk7XG4gICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IG5ldyBUZXh0QXJlYUNvbXBvbmVudChcbiAgICAgICdEZXNjcmlwdGlvbjonLFxuICAgICAgJ2Rlc2NyaXB0aW9uJ1xuICAgICk7XG5cbiAgICBpbnB1dHNDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG4gICAgaW5wdXRzQ29udGFpbmVyLmFwcGVuZENoaWxkKGR1ZURhdGVJbnB1dCk7XG4gICAgaW5wdXRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5SW5wdXQpO1xuICAgIGlucHV0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KTtcblxuICAgIGRpYWxvZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGRpYWxvZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dHNDb250YWluZXIpO1xuXG4gICAgdGhpcy5zZXRVcEV2ZW50TGlzdGVuZXJzKGRpYWxvZ0NvbnRhaW5lcik7XG4gICAgcmV0dXJuIGRpYWxvZ0NvbnRhaW5lcjtcbiAgfVxuXG4gIGNoYW5nZVRpdGxlKHRpdGxlKSB7XG4gICAgdGhpcy5xdWVyeVNlbGVjdG9yKCdoMicpLnRleHRDb250ZW50ID0gdGl0bGU7XG4gIH1cblxuICBzZXRVcEV2ZW50TGlzdGVuZXJzKGRpYWxvZ0NvbnRhaW5lcikge1xuICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gZGlhbG9nQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJyNkaWFsb2ctY2xvc2UtYnV0dG9uJyk7XG4gICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBkaWFsb2dDb250YWluZXIuY2xvc2UoKTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEaWFsb2dUb2RvQ29tcG9uZW50O1xuIiwiaW1wb3J0IElucHV0Q29tcG9uZW50IGZyb20gJy4vSW5wdXRDb21wb25lbnQnO1xuXG5jbGFzcyBEYXRlSW5wdXRDb21wb25lbnQgZXh0ZW5kcyBJbnB1dENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGxhYmVsLCBuYW1lKSB7XG4gICAgc3VwZXIobGFiZWwsIG5hbWUpO1xuICAgIHRoaXMucXVlcnlTZWxlY3RvcignaW5wdXQnKS50eXBlID0gJ2RhdGUnO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERhdGVJbnB1dENvbXBvbmVudDtcbiIsImNsYXNzIElucHV0Q29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IobGFiZWwsIG5hbWUpIHtcbiAgICBjb25zdCBmb3JtQ29udHJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1Db250cm9sLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpO1xuXG4gICAgY29uc3QgbGFiZWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBsYWJlbEVsZW1lbnQudGV4dENvbnRlbnQgPSBsYWJlbDtcbiAgICBsYWJlbEVsZW1lbnQuZm9yID0gbmFtZTtcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dC5pZCA9IG5hbWU7XG4gICAgaW5wdXQubmFtZSA9IG5hbWU7XG5cbiAgICBmb3JtQ29udHJvbC5hcHBlbmRDaGlsZChsYWJlbEVsZW1lbnQpO1xuICAgIGZvcm1Db250cm9sLmFwcGVuZENoaWxkKGlucHV0KTtcblxuICAgIHJldHVybiBmb3JtQ29udHJvbDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnB1dENvbXBvbmVudDtcbiIsImltcG9ydCBkZWNvZGVIdG1sQ2hhckNvZGVzIGZyb20gJy4uLy4uL2hlbHBlcnMvZGVjb2RlJztcblxuY2xhc3MgU2VsZWN0Q29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IobGFiZWwsIG5hbWUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBmb3JtQ29udHJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1Db250cm9sLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcsICdzZWxlY3QtY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBsYWJlbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGxhYmVsRWxlbWVudC50ZXh0Q29udGVudCA9IGxhYmVsO1xuICAgIGxhYmVsRWxlbWVudC5mb3IgPSBuYW1lO1xuXG4gICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgc2VsZWN0LmlkID0gbmFtZTtcbiAgICBzZWxlY3QubmFtZSA9IG5hbWU7XG5cbiAgICBmb3IgKGNvbnN0IG9wdGlvbiBvZiBvcHRpb25zKSB7XG4gICAgICBjb25zdCBvcHRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICBvcHRpb25FbGVtZW50LnZhbHVlID0gb3B0aW9uLnZhbHVlO1xuICAgICAgb3B0aW9uRWxlbWVudC50ZXh0Q29udGVudCA9IG9wdGlvbi50ZXh0O1xuXG4gICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uRWxlbWVudCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2VsZWN0QXJyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzZWxlY3RBcnJvdy50ZXh0Q29udGVudCA9IGRlY29kZUh0bWxDaGFyQ29kZXMoJyYjeDI1QkM7Jyk7XG4gICAgc2VsZWN0QXJyb3cuY2xhc3NMaXN0LmFkZCgnc2VsZWN0LWFycm93Jyk7XG5cbiAgICBmb3JtQ29udHJvbC5hcHBlbmRDaGlsZChsYWJlbEVsZW1lbnQpO1xuICAgIGZvcm1Db250cm9sLmFwcGVuZENoaWxkKHNlbGVjdCk7XG4gICAgZm9ybUNvbnRyb2wuYXBwZW5kQ2hpbGQoc2VsZWN0QXJyb3cpO1xuXG4gICAgcmV0dXJuIGZvcm1Db250cm9sO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdENvbXBvbmVudDtcbiIsImNsYXNzIFRleHRBcmVhQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IobGFiZWwsIG5hbWUpIHtcbiAgICBjb25zdCBmb3JtQ29udHJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1Db250cm9sLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpO1xuXG4gICAgY29uc3QgbGFiZWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBsYWJlbEVsZW1lbnQudGV4dENvbnRlbnQgPSBsYWJlbDtcbiAgICBsYWJlbEVsZW1lbnQuZm9yID0gbmFtZTtcblxuICAgIGNvbnN0IHRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICB0ZXh0YXJlYS5pZCA9IG5hbWU7XG4gICAgdGV4dGFyZWEubmFtZSA9IG5hbWU7XG4gICAgdGV4dGFyZWEucm93cyA9IDM7XG5cbiAgICBmb3JtQ29udHJvbC5hcHBlbmRDaGlsZChsYWJlbEVsZW1lbnQpO1xuICAgIGZvcm1Db250cm9sLmFwcGVuZENoaWxkKHRleHRhcmVhKTtcblxuICAgIHJldHVybiBmb3JtQ29udHJvbDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUZXh0QXJlYUNvbXBvbmVudDtcbiIsImltcG9ydCByZW5kZXJlciBmcm9tICcuLi9yZW5kZXJlcic7XG5pbXBvcnQgYXBwIGZyb20gJy4uL2FwcCc7XG5pbXBvcnQgRGlhbG9nRWRpdFRvZG9Db21wb25lbnQgZnJvbSAnLi9kaWFsb2dzL0RpYWxvZ0VkaXRUb2RvQ29tcG9uZW50JztcblxuaW1wb3J0IHByaW9yaXR5T3B0aW9ucyBmcm9tICcuLi9oZWxwZXJzL3NlbGVjdFByaW9yaXR5T3B0aW9ucyc7XG5cbmNsYXNzIFBlbmRpbmdUb2RvQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IodG9kbykge1xuICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvZG8nKTtcblxuICAgIGNvbnN0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgdG9kb1RpdGxlLnRleHRDb250ZW50ID0gdG9kby50aXRsZTtcblxuICAgIGNvbnN0IHRvZG9EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRvZG9EYXRlLnRleHRDb250ZW50ID0gdG9kby5kdWVEYXRlO1xuICAgIGNvbnN0IHByaW9yaXR5Q29sb3IgPSBwcmlvcml0eU9wdGlvbnMuZmluZChcbiAgICAgIChvcHRpb24pID0+IG9wdGlvbi52YWx1ZSA9PT0gdG9kby5wcmlvcml0eVxuICAgICkuY29sb3I7XG4gICAgdG9kb0RhdGUuc3R5bGUuY29sb3IgPSBwcmlvcml0eUNvbG9yO1xuXG4gICAgY29uc3QgdG9kb0RvbmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0b2RvRG9uZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkb25lLWJ1dHRvbicpO1xuICAgIHRvZG9Eb25lQnV0dG9uLnRleHRDb250ZW50ID0gJ0RvbmUnO1xuXG4gICAgY29uc3QgdG9kb0RlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRvZG9EZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLWJ1dHRvbicpO1xuICAgIHRvZG9EZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSAnRGVsZXRlJztcblxuICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb1RpdGxlKTtcbiAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9EYXRlKTtcbiAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9Eb25lQnV0dG9uKTtcbiAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9EZWxldGVCdXR0b24pO1xuICAgIHRvZG9Db250YWluZXIudG9kb0lkID0gdG9kby5pZDtcblxuICAgIHRoaXMuc2V0VXBFdmVudExpc3RlbmVycyh0b2RvQ29udGFpbmVyKTtcbiAgICByZXR1cm4gdG9kb0NvbnRhaW5lcjtcbiAgfVxuXG4gIHNldFVwRXZlbnRMaXN0ZW5lcnModG9kb0NvbnRhaW5lcikge1xuICAgIGNvbnN0IHRvZG9UaXRsZSA9IHRvZG9Db250YWluZXIucXVlcnlTZWxlY3RvcignaDMnKTtcbiAgICB0b2RvVGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdElkID0gZS50YXJnZXQuY2xvc2VzdCgnLnByb2plY3QnKS5wcm9qZWN0SWQ7XG4gICAgICBjb25zdCBwcm9qZWN0ID0gYXBwLnByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IHByb2plY3RJZCk7XG4gICAgICBjb25zdCB0b2RvSWQgPSBlLnRhcmdldC5jbG9zZXN0KCcudG9kbycpLnRvZG9JZDtcbiAgICAgIGNvbnN0IHRvZG8gPSBwcm9qZWN0LnRvZG9zLmZpbmQoKHRvZG8pID0+IHRvZG8uaWQgPT09IHRvZG9JZCk7XG5cbiAgICAgIGNvbnN0IGRpYWxvZ0VkaXQgPSBuZXcgRGlhbG9nRWRpdFRvZG9Db21wb25lbnQodG9kbywgcHJvamVjdElkKTtcbiAgICAgIGRpYWxvZ0VkaXQuc2hvd01vZGFsKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBkb25lQnV0dG9uID0gdG9kb0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuZG9uZS1idXR0b24nKTtcbiAgICBkb25lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdElkID0gZG9uZUJ1dHRvbi5jbG9zZXN0KCcucHJvamVjdCcpLnByb2plY3RJZDtcbiAgICAgIGNvbnN0IHByb2plY3QgPSBhcHAucHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gcHJvamVjdElkKTtcbiAgICAgIGNvbnN0IHRvZG9JZCA9IGRvbmVCdXR0b24uY2xvc2VzdCgnLnRvZG8nKS50b2RvSWQ7XG4gICAgICBjb25zdCB0b2RvID0gcHJvamVjdC50b2Rvcy5maW5kKCh0b2RvKSA9PiB0b2RvLmlkID09PSB0b2RvSWQpO1xuXG4gICAgICB0b2RvLmRvbmUgPSB0cnVlO1xuICAgICAgcmVuZGVyZXIucmVuZGVyUHJvamVjdHMoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IHRvZG9Db250YWluZXIucXVlcnlTZWxlY3RvcignLmRlbGV0ZS1idXR0b24nKTtcbiAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZS50YXJnZXQ7XG5cbiAgICAgIGNvbnN0IHByb2plY3RJZCA9IGRlbGV0ZUJ1dHRvbi5jbG9zZXN0KCcucHJvamVjdCcpLnByb2plY3RJZDtcbiAgICAgIGNvbnN0IHByb2plY3QgPSBhcHAucHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gcHJvamVjdElkKTtcbiAgICAgIGNvbnN0IHRvZG9JZCA9IGRlbGV0ZUJ1dHRvbi5jbG9zZXN0KCcudG9kbycpLnRvZG9JZDtcblxuICAgICAgcHJvamVjdC5kZWxldGVUb2RvKHRvZG9JZCk7XG4gICAgICByZW5kZXJlci5yZW5kZXJQcm9qZWN0cygpO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBlbmRpbmdUb2RvQ29tcG9uZW50O1xuIiwiY2xhc3MgUHJvamVjdCB7XG4gIHN0YXRpYyAjaWRDb3VudGVyID0gMDtcbiAgdG9kb3MgPSBbXTtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5pZCA9IFByb2plY3QuI2lkQ291bnRlcjtcbiAgICBQcm9qZWN0LiNpZENvdW50ZXIrKztcbiAgfVxuXG4gIGNoYW5nZU5hbWUobmV3TmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5ld05hbWU7XG4gIH1cblxuICBjcmVhdGVUb2RvKHRvZG8pIHtcbiAgICB0aGlzLnRvZG9zLnB1c2godG9kbyk7XG4gICAgdGhpcy5zb3J0VG9kb3MoKTtcbiAgfVxuXG4gIGRlbGV0ZVRvZG8oaWQpIHtcbiAgICBjb25zdCB0b2RvID0gdGhpcy50b2Rvcy5maW5kKCh0b2RvKSA9PiBpZCA9PT0gdG9kby5pZCk7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnRvZG9zLmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbSA9PT0gdG9kbyk7XG4gICAgdGhpcy50b2Rvcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHRoaXMuc29ydFRvZG9zKCk7XG4gIH1cblxuICBlZGl0VG9kbyhpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIGNvbnN0IHRvZG8gPSB0aGlzLnRvZG9zLmZpbmQoKHRvZG8pID0+IGlkID09PSB0b2RvLmlkKTtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMudG9kb3MuZmluZEluZGV4KChpdGVtKSA9PiBpdGVtID09PSB0b2RvKTtcbiAgICB0aGlzLnRvZG9zW2luZGV4XS5lZGl0KHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xuICAgIHRoaXMuc29ydFRvZG9zKCk7XG4gIH1cblxuICBzb3J0VG9kb3MoKSB7XG4gICAgdGhpcy50b2Rvcy5zb3J0KCh0b2RvMSwgdG9kbzIpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgKHRvZG8xLnByaW9yaXR5ID09PSAnaW1wb3J0YW50JyAmJlxuICAgICAgICAgICh0b2RvMi5wcmlvcml0eSA9PT0gJ21lZGl1bScgfHwgdG9kbzIucHJpb3JpdHkgPT09ICdsaWdodCcpKSB8fFxuICAgICAgICAodG9kbzEucHJpb3JpdHkgPT09ICdtZWRpdW0nICYmIHRvZG8yLnByaW9yaXR5ID09PSAnbGlnaHQnKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH0gZWxzZSBpZiAodG9kbzEucHJpb3JpdHkgPT09IHRvZG8yLnByaW9yaXR5KSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDtcbiIsImNsYXNzIFRvZG8ge1xuICBzdGF0aWMgI2lkQ291bnRlciA9IDA7XG4gIGRvbmUgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgdGhpcy5pZCA9IFRvZG8uI2lkQ291bnRlcjtcbiAgICBUb2RvLiNpZENvdW50ZXIrKztcblxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIH1cblxuICBlZGl0KHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG87XG4iLCJjb25zdCBkZWNvZGVIdG1sQ2hhckNvZGVzID0gKGZ1bmN0aW9uICgpIHtcbiAgLy8gdGhpcyBwcmV2ZW50cyBhbnkgb3ZlcmhlYWQgZnJvbSBjcmVhdGluZyB0aGUgb2JqZWN0IGVhY2ggdGltZVxuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGZ1bmN0aW9uIGRlY29kZUhUTUxFbnRpdGllcyhzdHIpIHtcbiAgICBpZiAoc3RyICYmIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBzdHJpcCBzY3JpcHQvaHRtbCB0YWdzXG4gICAgICBzdHIgPSBzdHIucmVwbGFjZSgvPHNjcmlwdFtePl0qPihbXFxTXFxzXSo/KTxcXC9zY3JpcHQ+L2dpbSwgJycpO1xuICAgICAgc3RyID0gc3RyLnJlcGxhY2UoLzxcXC8/XFx3KD86W15cIic+XXxcIlteXCJdKlwifCdbXiddKicpKj4vZ2ltLCAnJyk7XG4gICAgICBlbGVtZW50LmlubmVySFRNTCA9IHN0cjtcbiAgICAgIHN0ciA9IGVsZW1lbnQudGV4dENvbnRlbnQ7XG4gICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gJyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cjtcbiAgfVxuXG4gIHJldHVybiBkZWNvZGVIVE1MRW50aXRpZXM7XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBkZWNvZGVIdG1sQ2hhckNvZGVzO1xuIiwiY29uc3QgcHJpb3JpdHlPcHRpb25zID0gW1xuICB7IHRleHQ6ICdJbXBvcnRhbnQnLCB2YWx1ZTogJ2ltcG9ydGFudCcsIGNvbG9yOiAncmVkJyB9LFxuICB7IHRleHQ6ICdNZWRpdW0nLCB2YWx1ZTogJ21lZGl1bScsIGNvbG9yOiAnYmx1ZScgfSxcbiAgeyB0ZXh0OiAnTGlnaHQnLCB2YWx1ZTogJ2xpZ2h0JywgY29sb3I6ICdncmVlbicgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IHByaW9yaXR5T3B0aW9ucztcbiIsImltcG9ydCBhcHAgZnJvbSAnLi9hcHAnO1xuaW1wb3J0IFByb2plY3RDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL1Byb2plY3RDb21wb25lbnQnO1xuXG5jbGFzcyBSZW5kZXJlciB7XG4gIHJlbmRlclByb2plY3RzKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgY29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XG5cbiAgICBmb3IgKGNvbnN0IHByb2plY3Qgb2YgYXBwLnByb2plY3RzKSB7XG4gICAgICBjb25zdCBwcm9qZWN0Q29tcG9uZW50ID0gbmV3IFByb2plY3RDb21wb25lbnQocHJvamVjdCk7XG4gICAgICBwcm9qZWN0Q29tcG9uZW50LnByb2plY3RJZCA9IHByb2plY3QuaWQ7XG5cbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0Q29tcG9uZW50KTtcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgcmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyZXI7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5cbmltcG9ydCBhcHAgZnJvbSAnLi9hcHAnO1xuaW1wb3J0IHJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuXG5jb25zdCBjcmVhdGVQcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlLXByb2plY3QtaW5wdXQnKTtcbmNvbnN0IGNyZWF0ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlLXByb2plY3QtYnV0dG9uJyk7XG5cbmNyZWF0ZVByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGFwcC5hZGRQcm9qZWN0KGNyZWF0ZVByb2plY3RJbnB1dC52YWx1ZSk7XG4gIHJlbmRlcmVyLnJlbmRlclByb2plY3RzKCk7XG59KTtcblxucmVuZGVyZXIucmVuZGVyUHJvamVjdHMoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==