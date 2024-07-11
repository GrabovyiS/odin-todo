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
    if (!localStorage.getItem('projects')) {
      this.populateStorage();

      this.createProject('Default project');

      this.projects[0].createTodo(
        new _data_todo__WEBPACK_IMPORTED_MODULE_1__["default"]('default title', 'default desc', '1111-11-11', 'medium')
      );
      this.projects[0].createTodo(
        new _data_todo__WEBPACK_IMPORTED_MODULE_1__["default"]('default 3', 'default desc 2', '2222-11-22', 'important')
      );

      this.projects[0].todos[2].do();
    } else {
      this.retrieveFromStorage();
    }
  }

  createProject(name) {
    const project = new _data_project__WEBPACK_IMPORTED_MODULE_0__["default"](name);
    const placeholderTodo = new _data_todo__WEBPACK_IMPORTED_MODULE_1__["default"](
      'Default todo',
      'Default desc',
      '2222-11-11',
      'light'
    );
    project.createTodo(placeholderTodo);
    this.projects.push(project);
    this.populateStorage();
  }

  deleteProject(projectId) {
    const index = this.projects.findIndex((item) => item.id === projectId);
    this.projects.splice(index, 1);
    this.populateStorage();
  }

  retrieveProject(project) {
    const retrievingProject = new _data_project__WEBPACK_IMPORTED_MODULE_0__["default"](project.name);
    retrievingProject.id = project.id;

    for (const todo of project.todos) {
      const retrievingTodo = new _data_todo__WEBPACK_IMPORTED_MODULE_1__["default"](
        todo.title,
        todo.description,
        todo.dueDate,
        todo.priority
      );
      retrievingTodo.id = todo.id;
      if (todo.done) {
        retrievingTodo.done = true;
      }

      retrievingProject.createTodo(retrievingTodo);
    }

    this.projects.push(retrievingProject);
  }

  populateStorage() {
    localStorage.setItem('projects', JSON.stringify(this.projects));
  }

  retrieveFromStorage() {
    this.projects = [];
    const localProjects = JSON.parse(localStorage.getItem('projects'));

    for (const project in localProjects) {
      this.retrieveProject(localProjects[project]);
    }
  }
}

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

      todo.undo();
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

      todo.do();
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
    this.onDataChange();
  }

  createTodo(todo) {
    this.todos.push(todo);
    this.onDataChange();
  }

  deleteTodo(id) {
    const todo = this.todos.find((todo) => id === todo.id);
    const index = this.todos.findIndex((item) => item === todo);
    this.todos.splice(index, 1);
    this.onDataChange();
  }

  editTodo(id, title, description, dueDate, priority) {
    const todo = this.todos.find((todo) => id === todo.id);
    const index = this.todos.findIndex((item) => item === todo);
    this.todos[index].edit(title, description, dueDate, priority);
    this.onDataChange();
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

  populateStorage() {
    const storage = JSON.parse(localStorage.getItem('projects'));
    const currentProjectIndex = storage.findIndex(
      (project) => project.id === this.id
    );

    storage[currentProjectIndex] = this;
    localStorage.setItem('projects', JSON.stringify(storage));
  }

  onDataChange() {
    this.sortTodos();
    this.populateStorage();
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
    // Data in storage updated inside project.js on todo edit
  }

  do() {
    this.done = true;
    this.populateStorage();
  }

  undo() {
    this.done = false;
    this.populateStorage();
  }

  populateStorage() {
    const storage = JSON.parse(localStorage.getItem('projects'));
    console.log(storage);

    const currentProjectIndex = storage.findIndex((project) =>
      project.todos.find((todo) => todo.id === this.id)
    );

    const currentTodoIndex = storage[currentProjectIndex].todos.findIndex(
      (todo) => this.id === todo.id
    );

    storage[currentProjectIndex].todos[currentTodoIndex] = this;
    localStorage.setItem('projects', JSON.stringify(storage));
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
  _app__WEBPACK_IMPORTED_MODULE_1__["default"].createProject(createProjectInput.value);
  _renderer__WEBPACK_IMPORTED_MODULE_2__["default"].renderProjects();
});

_renderer__WEBPACK_IMPORTED_MODULE_2__["default"].renderProjects();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUI7QUFDekI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxpRkFBaUYsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLE9BQU8sVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLEtBQUssWUFBWSxXQUFXLEtBQUssTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsY0FBYyxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxjQUFjLE1BQU0sWUFBWSxhQUFhLE1BQU0sS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxLQUFLLFVBQVUsYUFBYSxNQUFNLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sTUFBTSxNQUFNLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxNQUFNLEtBQUssTUFBTSxL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Q0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7QUNBc0I7O0FBRUU7QUFDVTs7QUFFbEM7QUFDQTs7QUFFQTtBQUNBLEVBQUUsNENBQUc7QUFDTCxFQUFFLGlEQUFRO0FBQ1YsQ0FBQzs7QUFFRCxpREFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2NvbXBvbmVudHMvRG9uZVRvZG9Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdENvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvY29tcG9uZW50cy9kaWFsb2dzL0RpYWxvZ0NyZWF0ZVRvZG9Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2NvbXBvbmVudHMvZGlhbG9ncy9EaWFsb2dFZGl0VG9kb0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvY29tcG9uZW50cy9kaWFsb2dzL0RpYWxvZ1RvZG9Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2NvbXBvbmVudHMvaW5wdXRzL0RhdGVJbnB1dENvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvY29tcG9uZW50cy9pbnB1dHMvSW5wdXRDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2NvbXBvbmVudHMvaW5wdXRzL1NlbGVjdENvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvY29tcG9uZW50cy9pbnB1dHMvVGV4dEFyZWFDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2NvbXBvbmVudHMvcGVuZGluZ1RvZG9Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2RhdGEvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvZGF0YS90b2RvLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9oZWxwZXJzL2RlY29kZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvaGVscGVycy9zZWxlY3RQcmlvcml0eU9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3JlbmRlcmVyLmpzIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1mYW1pbHk6ICdKZXRCcmFpbnMgTW9ubycsIG1vbm9zcGFjZTtcbn1cblxuOnJvb3Qge1xuICAtLWJvcmRlcjogN3B4IHNvbGlkIGJsYWNrO1xufVxuXG5pbnB1dCxcbnRleHRhcmVhLFxuc2VsZWN0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDRweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogMTBweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgJjpmb2N1cyB7XG4gICAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XG4gICAgcGFkZGluZzogOXB4O1xuICB9XG59XG5cbnNlbGVjdCB7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxudGV4dGFyZWEge1xuICByZXNpemU6IG5vbmU7XG4gIGxpbmUtaGVpZ2h0OiAxNjAlO1xufVxuXG4uc2VsZWN0LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNlbGVjdC1hcnJvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzOXB4O1xuICByaWdodDogMThweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuYnV0dG9uIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiB2YXIoLS1ib3JkZXIpO1xuICBwYWRkaW5nOiAxMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5zZWN0aW9uIHtcbiAgYm9yZGVyOiB2YXIoLS1ib3JkZXIpO1xuICBwYWRkaW5nOiAyNHB4O1xuICBmbGV4OiAxIDAgMDtcbn1cblxuZGlhbG9nIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDEwJTtcbiAgbGVmdDogNTAlO1xuICBwYWRkaW5nOiAyNHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIG1heC1oZWlnaHQ6IDgwdmg7XG4gIHdpZHRoOiBtYXgoMzQwcHgsIDMwdncpO1xuICBib3JkZXI6IHZhcigtLWJvcmRlcik7XG4gIG92ZXJmbG93LXk6IGF1dG87XG5cbiAgI2RpYWxvZy1jbG9zZS1idXR0b24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDM2cHg7XG4gICAgcGFkZGluZzogMDtcbiAgICBoZWlnaHQ6IDY0cHg7XG4gICAgd2lkdGg6IDY0cHg7XG4gIH1cblxuICBoZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLyoganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAqL1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cbiAgICBoMiB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIH1cbiAgfVxufVxuXG4uZGVsZXRlLWJ1dHRvbiB7XG4gIGJvcmRlci1jb2xvcjogcmdiKDE2MCwgMCwgMCk7XG4gIGNvbG9yOiByZ2IoMTYwLCAwLCAwKTtcbn1cblxuLmRvbmUtYnV0dG9uIHtcbiAgYm9yZGVyLWNvbG9yOiBncmVlbjtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4uZGlhbG9nLWNyZWF0ZS1idXR0b24ge1xuICBib3JkZXItY29sb3I6IGdyZWVuO1xuICBjb2xvcjogZ3JlZW47XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuI2NvbnRlbnQge1xuICBtYXJnaW46IDI0cHggMjIlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDI0cHg7XG59XG5cbi5wcm9qZWN0IHtcbiAgcGFkZGluZzogMjRweDtcbiAgYm9yZGVyOiB2YXIoLS1ib3JkZXIpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDI0cHg7XG4gIGhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgLmRlbGV0ZS1wcm9qZWN0LWJ1dHRvbiB7XG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICB9XG4gIH1cbiAgaDIge1xuICAgIC8qIG1hcmdpbi1ib3R0b206IDI0cHg7LyAqL1xuICB9XG59XG5cbi50b2Rvcyxcbi5kb25lLXRvZG9zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxNnB4O1xufVxuXG4udG9kbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTZweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyOiB2YXIoLS1ib3JkZXIpO1xuICBwYWRkaW5nOiA4cHg7XG4gIHAge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICB9XG4gIGgzIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIH1cbn1cblxuLmNvbXBsZXRlZC1oZWFkaW5nIHtcbn1cblxuLnRvZG8uZG9uZSB7XG4gIC8qIGJvcmRlci1jb2xvcjogZ3JleTsgKi9cbn1cblxubGFiZWwge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmlucHV0cyBsYWJlbCB7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbn1cblxuLmlucHV0cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cblxuI2RvbmUtZGlhbG9nLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmNyZWF0ZS1wcm9qZWN0cy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDI0cHggMjIlO1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgZ2FwOiAyNHB4O1xuXG4gIGlucHV0IHtcbiAgICBib3JkZXI6IHZhcigtLWJvcmRlcik7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgICY6Zm9jdXMge1xuICAgICAgYm9yZGVyOiB2YXIoLS1ib3JkZXIpO1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICB9XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0Qix3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7OztFQUdFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixhQUFhO0VBQ2I7SUFDRSx1QkFBdUI7SUFDdkIsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxlQUFlO0VBQ2Ysb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFFBQVE7RUFDUixTQUFTO0VBQ1QsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixnQkFBZ0I7O0VBRWhCO0lBQ0UsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFVBQVU7SUFDVixZQUFZO0lBQ1osV0FBVztFQUNiOztFQUVBO0lBQ0UsYUFBYTtJQUNiLG9DQUFvQztJQUNwQyxtQkFBbUI7SUFDbkIsU0FBUztJQUNULG1CQUFtQjtJQUNuQix1QkFBdUI7O0lBRXZCO01BQ0UsZ0JBQWdCO01BQ2hCLGtCQUFrQjtJQUNwQjtFQUNGO0FBQ0Y7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osY0FBYztFQUNkLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNUO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjs7SUFFbkI7TUFDRSxpQkFBaUI7TUFDakIsa0JBQWtCO0lBQ3BCO0VBQ0Y7RUFDQTtJQUNFLDBCQUEwQjtFQUM1QjtBQUNGOztBQUVBOztFQUVFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWjtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLDBCQUEwQjtFQUM1QjtBQUNGOztBQUVBO0FBQ0E7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLFNBQVM7O0VBRVQ7SUFDRSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmO01BQ0UscUJBQXFCO01BQ3JCLGFBQWE7SUFDZjtFQUNGO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiAnSmV0QnJhaW5zIE1vbm8nLCBtb25vc3BhY2U7XFxufVxcblxcbjpyb290IHtcXG4gIC0tYm9yZGVyOiA3cHggc29saWQgYmxhY2s7XFxufVxcblxcbmlucHV0LFxcbnRleHRhcmVhLFxcbnNlbGVjdCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyOiA0cHggc29saWQgYmxhY2s7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gICY6Zm9jdXMge1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcXG4gICAgcGFkZGluZzogOXB4O1xcbiAgfVxcbn1cXG5cXG5zZWxlY3Qge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbiAgbGluZS1oZWlnaHQ6IDE2MCU7XFxufVxcblxcbi5zZWxlY3QtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnNlbGVjdC1hcnJvdyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDM5cHg7XFxuICByaWdodDogMThweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogdmFyKC0tYm9yZGVyKTtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5zZWN0aW9uIHtcXG4gIGJvcmRlcjogdmFyKC0tYm9yZGVyKTtcXG4gIHBhZGRpbmc6IDI0cHg7XFxuICBmbGV4OiAxIDAgMDtcXG59XFxuXFxuZGlhbG9nIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgcGFkZGluZzogMjRweDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIG1heC1oZWlnaHQ6IDgwdmg7XFxuICB3aWR0aDogbWF4KDM0MHB4LCAzMHZ3KTtcXG4gIGJvcmRlcjogdmFyKC0tYm9yZGVyKTtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuXFxuICAjZGlhbG9nLWNsb3NlLWJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDM2cHg7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGhlaWdodDogNjRweDtcXG4gICAgd2lkdGg6IDY0cHg7XFxuICB9XFxuXFxuICBoZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47ICovXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTZweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuXFxuICAgIGgyIHtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4uZGVsZXRlLWJ1dHRvbiB7XFxuICBib3JkZXItY29sb3I6IHJnYigxNjAsIDAsIDApO1xcbiAgY29sb3I6IHJnYigxNjAsIDAsIDApO1xcbn1cXG5cXG4uZG9uZS1idXR0b24ge1xcbiAgYm9yZGVyLWNvbG9yOiBncmVlbjtcXG4gIGNvbG9yOiBncmVlbjtcXG59XFxuXFxuLmRpYWxvZy1jcmVhdGUtYnV0dG9uIHtcXG4gIGJvcmRlci1jb2xvcjogZ3JlZW47XFxuICBjb2xvcjogZ3JlZW47XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBtYXJnaW46IDI0cHggMjIlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDI0cHg7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gIHBhZGRpbmc6IDI0cHg7XFxuICBib3JkZXI6IHZhcigtLWJvcmRlcik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjRweDtcXG4gIGhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIC5kZWxldGUtcHJvamVjdC1idXR0b24ge1xcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcXG4gICAgfVxcbiAgfVxcbiAgaDIge1xcbiAgICAvKiBtYXJnaW4tYm90dG9tOiAyNHB4Oy8gKi9cXG4gIH1cXG59XFxuXFxuLnRvZG9zLFxcbi5kb25lLXRvZG9zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxNnB4O1xcbn1cXG5cXG4udG9kbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxNnB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlcjogdmFyKC0tYm9yZGVyKTtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIHAge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIH1cXG4gIGgzIHtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIH1cXG59XFxuXFxuLmNvbXBsZXRlZC1oZWFkaW5nIHtcXG59XFxuXFxuLnRvZG8uZG9uZSB7XFxuICAvKiBib3JkZXItY29sb3I6IGdyZXk7ICovXFxufVxcblxcbmxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5pbnB1dHMgbGFiZWwge1xcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xcbn1cXG5cXG4uaW5wdXRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxNnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcXG59XFxuXFxuI2RvbmUtZGlhbG9nLWJ1dHRvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4uY3JlYXRlLXByb2plY3RzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luOiAyNHB4IDIyJTtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgZ2FwOiAyNHB4O1xcblxcbiAgaW5wdXQge1xcbiAgICBib3JkZXI6IHZhcigtLWJvcmRlcik7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgJjpmb2N1cyB7XFxuICAgICAgYm9yZGVyOiB2YXIoLS1ib3JkZXIpO1xcbiAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIH1cXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBQcm9qZWN0IGZyb20gJy4vZGF0YS9wcm9qZWN0JztcbmltcG9ydCBUb2RvIGZyb20gJy4vZGF0YS90b2RvJztcblxuY2xhc3MgQXBwIHtcbiAgcHJvamVjdHMgPSBbXTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKSB7XG4gICAgICB0aGlzLnBvcHVsYXRlU3RvcmFnZSgpO1xuXG4gICAgICB0aGlzLmNyZWF0ZVByb2plY3QoJ0RlZmF1bHQgcHJvamVjdCcpO1xuXG4gICAgICB0aGlzLnByb2plY3RzWzBdLmNyZWF0ZVRvZG8oXG4gICAgICAgIG5ldyBUb2RvKCdkZWZhdWx0IHRpdGxlJywgJ2RlZmF1bHQgZGVzYycsICcxMTExLTExLTExJywgJ21lZGl1bScpXG4gICAgICApO1xuICAgICAgdGhpcy5wcm9qZWN0c1swXS5jcmVhdGVUb2RvKFxuICAgICAgICBuZXcgVG9kbygnZGVmYXVsdCAzJywgJ2RlZmF1bHQgZGVzYyAyJywgJzIyMjItMTEtMjInLCAnaW1wb3J0YW50JylcbiAgICAgICk7XG5cbiAgICAgIHRoaXMucHJvamVjdHNbMF0udG9kb3NbMl0uZG8oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZXRyaWV2ZUZyb21TdG9yYWdlKCk7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlUHJvamVjdChuYW1lKSB7XG4gICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KG5hbWUpO1xuICAgIGNvbnN0IHBsYWNlaG9sZGVyVG9kbyA9IG5ldyBUb2RvKFxuICAgICAgJ0RlZmF1bHQgdG9kbycsXG4gICAgICAnRGVmYXVsdCBkZXNjJyxcbiAgICAgICcyMjIyLTExLTExJyxcbiAgICAgICdsaWdodCdcbiAgICApO1xuICAgIHByb2plY3QuY3JlYXRlVG9kbyhwbGFjZWhvbGRlclRvZG8pO1xuICAgIHRoaXMucHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgICB0aGlzLnBvcHVsYXRlU3RvcmFnZSgpO1xuICB9XG5cbiAgZGVsZXRlUHJvamVjdChwcm9qZWN0SWQpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMucHJvamVjdHMuZmluZEluZGV4KChpdGVtKSA9PiBpdGVtLmlkID09PSBwcm9qZWN0SWQpO1xuICAgIHRoaXMucHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB0aGlzLnBvcHVsYXRlU3RvcmFnZSgpO1xuICB9XG5cbiAgcmV0cmlldmVQcm9qZWN0KHByb2plY3QpIHtcbiAgICBjb25zdCByZXRyaWV2aW5nUHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2plY3QubmFtZSk7XG4gICAgcmV0cmlldmluZ1Byb2plY3QuaWQgPSBwcm9qZWN0LmlkO1xuXG4gICAgZm9yIChjb25zdCB0b2RvIG9mIHByb2plY3QudG9kb3MpIHtcbiAgICAgIGNvbnN0IHJldHJpZXZpbmdUb2RvID0gbmV3IFRvZG8oXG4gICAgICAgIHRvZG8udGl0bGUsXG4gICAgICAgIHRvZG8uZGVzY3JpcHRpb24sXG4gICAgICAgIHRvZG8uZHVlRGF0ZSxcbiAgICAgICAgdG9kby5wcmlvcml0eVxuICAgICAgKTtcbiAgICAgIHJldHJpZXZpbmdUb2RvLmlkID0gdG9kby5pZDtcbiAgICAgIGlmICh0b2RvLmRvbmUpIHtcbiAgICAgICAgcmV0cmlldmluZ1RvZG8uZG9uZSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHJpZXZpbmdQcm9qZWN0LmNyZWF0ZVRvZG8ocmV0cmlldmluZ1RvZG8pO1xuICAgIH1cblxuICAgIHRoaXMucHJvamVjdHMucHVzaChyZXRyaWV2aW5nUHJvamVjdCk7XG4gIH1cblxuICBwb3B1bGF0ZVN0b3JhZ2UoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9qZWN0cykpO1xuICB9XG5cbiAgcmV0cmlldmVGcm9tU3RvcmFnZSgpIHtcbiAgICB0aGlzLnByb2plY3RzID0gW107XG4gICAgY29uc3QgbG9jYWxQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpO1xuXG4gICAgZm9yIChjb25zdCBwcm9qZWN0IGluIGxvY2FsUHJvamVjdHMpIHtcbiAgICAgIHRoaXMucmV0cmlldmVQcm9qZWN0KGxvY2FsUHJvamVjdHNbcHJvamVjdF0pO1xuICAgIH1cbiAgfVxufVxuXG5jb25zdCBhcHAgPSBuZXcgQXBwKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGFwcDtcbiIsImltcG9ydCByZW5kZXJlciBmcm9tICcuLi9yZW5kZXJlcic7XG5pbXBvcnQgYXBwIGZyb20gJy4uL2FwcCc7XG5pbXBvcnQgRGlhbG9nRWRpdFRvZG9Db21wb25lbnQgZnJvbSAnLi9kaWFsb2dzL0RpYWxvZ0VkaXRUb2RvQ29tcG9uZW50JztcblxuaW1wb3J0IHByaW9yaXR5T3B0aW9ucyBmcm9tICcuLi9oZWxwZXJzL3NlbGVjdFByaW9yaXR5T3B0aW9ucyc7XG5cbmNsYXNzIERvbmVUb2RvQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IodG9kbykge1xuICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvZG8nLCAnZG9uZScpO1xuXG4gICAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICB0b2RvVGl0bGUudGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlO1xuXG4gICAgY29uc3QgdG9kb0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdG9kb0RhdGUudGV4dENvbnRlbnQgPSB0b2RvLmR1ZURhdGU7XG4gICAgY29uc3QgcHJpb3JpdHlDb2xvciA9IHByaW9yaXR5T3B0aW9ucy5maW5kKFxuICAgICAgKG9wdGlvbikgPT4gb3B0aW9uLnZhbHVlID09PSB0b2RvLnByaW9yaXR5XG4gICAgKS5jb2xvcjtcbiAgICB0b2RvRGF0ZS5zdHlsZS5jb2xvciA9IHByaW9yaXR5Q29sb3I7XG5cbiAgICBjb25zdCB0b2RvRG9uZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRvZG9Eb25lQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RvbmUtYnV0dG9uJyk7XG4gICAgdG9kb0RvbmVCdXR0b24udGV4dENvbnRlbnQgPSAnVW5kbyc7XG5cbiAgICBjb25zdCB0b2RvRGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdG9kb0RlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtYnV0dG9uJyk7XG4gICAgdG9kb0RlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xuXG4gICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvVGl0bGUpO1xuICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0RhdGUpO1xuICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0RvbmVCdXR0b24pO1xuICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0RlbGV0ZUJ1dHRvbik7XG4gICAgdG9kb0NvbnRhaW5lci50b2RvSWQgPSB0b2RvLmlkO1xuXG4gICAgdGhpcy5zZXRVcEV2ZW50TGlzdGVuZXJzKHRvZG9Db250YWluZXIpO1xuICAgIHJldHVybiB0b2RvQ29udGFpbmVyO1xuICB9XG5cbiAgc2V0VXBFdmVudExpc3RlbmVycyh0b2RvQ29udGFpbmVyKSB7XG4gICAgY29uc3QgdG9kb1RpdGxlID0gdG9kb0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdoMycpO1xuICAgIHRvZG9UaXRsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0SWQgPSBlLnRhcmdldC5jbG9zZXN0KCcucHJvamVjdCcpLnByb2plY3RJZDtcbiAgICAgIGNvbnN0IHByb2plY3QgPSBhcHAucHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gcHJvamVjdElkKTtcbiAgICAgIGNvbnN0IHRvZG9JZCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy50b2RvJykudG9kb0lkO1xuICAgICAgY29uc3QgdG9kbyA9IHByb2plY3QudG9kb3MuZmluZCgodG9kbykgPT4gdG9kby5pZCA9PT0gdG9kb0lkKTtcblxuICAgICAgY29uc3QgZGlhbG9nRWRpdCA9IG5ldyBEaWFsb2dFZGl0VG9kb0NvbXBvbmVudCh0b2RvLCBwcm9qZWN0SWQpO1xuICAgICAgZGlhbG9nRWRpdC5zaG93TW9kYWwoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHVuZG9CdXR0b24gPSB0b2RvQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5kb25lLWJ1dHRvbicpO1xuICAgIHVuZG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgY29uc3QgdW5kb0J1dHRvbiA9IGUudGFyZ2V0O1xuXG4gICAgICBjb25zdCBwcm9qZWN0SWQgPSB1bmRvQnV0dG9uLmNsb3Nlc3QoJy5wcm9qZWN0JykucHJvamVjdElkO1xuICAgICAgY29uc3QgcHJvamVjdCA9IGFwcC5wcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBwcm9qZWN0SWQpO1xuICAgICAgY29uc3QgdG9kb0lkID0gdW5kb0J1dHRvbi5jbG9zZXN0KCcudG9kbycpLnRvZG9JZDtcbiAgICAgIGNvbnN0IHRvZG8gPSBwcm9qZWN0LnRvZG9zLmZpbmQoKHRvZG8pID0+IHRvZG8uaWQgPT09IHRvZG9JZCk7XG5cbiAgICAgIHRvZG8udW5kbygpO1xuICAgICAgcmVuZGVyZXIucmVuZGVyUHJvamVjdHMoYXBwKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IHRvZG9Db250YWluZXIucXVlcnlTZWxlY3RvcignLmRlbGV0ZS1idXR0b24nKTtcbiAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZS50YXJnZXQ7XG5cbiAgICAgIGNvbnN0IHByb2plY3RJZCA9IGRlbGV0ZUJ1dHRvbi5jbG9zZXN0KCcucHJvamVjdCcpLnByb2plY3RJZDtcbiAgICAgIGNvbnN0IHByb2plY3QgPSBhcHAucHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gcHJvamVjdElkKTtcbiAgICAgIGNvbnN0IHRvZG9JZCA9IGRlbGV0ZUJ1dHRvbi5jbG9zZXN0KCcudG9kbycpLnRvZG9JZDtcblxuICAgICAgcHJvamVjdC5kZWxldGVUb2RvKHRvZG9JZCk7XG4gICAgICByZW5kZXJlci5yZW5kZXJQcm9qZWN0cyhhcHApO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERvbmVUb2RvQ29tcG9uZW50O1xuIiwiaW1wb3J0IFBlbmRpbmdUb2RvQ29tcG9uZW50IGZyb20gJy4vcGVuZGluZ1RvZG9Db21wb25lbnQnO1xuaW1wb3J0IERvbmVUb2RvQ29tcG9uZW50IGZyb20gJy4vRG9uZVRvZG9Db21wb25lbnQnO1xuaW1wb3J0IERpYWxvZ0NyZWF0ZVRvZG9Db21wb25lbnQgZnJvbSAnLi9kaWFsb2dzL0RpYWxvZ0NyZWF0ZVRvZG9Db21wb25lbnQnO1xuaW1wb3J0IGFwcCBmcm9tICcuLi9hcHAnO1xuaW1wb3J0IHJlbmRlcmVyIGZyb20gJy4uL3JlbmRlcmVyJztcblxuY2xhc3MgUHJvamVjdENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb2plY3QpIHtcbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XG5cbiAgICBjb25zdCBwcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG5cbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG5cbiAgICBjb25zdCBwcm9qZWN0RGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcHJvamVjdERlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtYnV0dG9uJywgJ2RlbGV0ZS1wcm9qZWN0LWJ1dHRvbicpO1xuICAgIHByb2plY3REZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSAnRGVsZXRlIFByb2plY3QnO1xuXG4gICAgY29uc3QgdG9kb0NyZWF0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRvZG9DcmVhdGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnY3JlYXRlLWJ1dHRvbicpO1xuICAgIHRvZG9DcmVhdGVCdXR0b24udGV4dENvbnRlbnQgPSAnTmV3IFRvZG8nO1xuXG4gICAgcHJvamVjdEhlYWRlci5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG4gICAgcHJvamVjdEhlYWRlci5hcHBlbmRDaGlsZChwcm9qZWN0RGVsZXRlQnV0dG9uKTtcbiAgICBwcm9qZWN0SGVhZGVyLmFwcGVuZENoaWxkKHRvZG9DcmVhdGVCdXR0b24pO1xuXG4gICAgY29uc3QgdG9kb3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2Rvc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2RvcycpO1xuXG4gICAgY29uc3QgZG9uZVRvZG9zSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgZG9uZVRvZG9zSGVhZGluZy5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQtaGVhZGluZycpO1xuICAgIGRvbmVUb2Rvc0hlYWRpbmcudGV4dENvbnRlbnQgPSAnQ29tcGxldGVkJztcblxuICAgIGNvbnN0IGRvbmVUb2Rvc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRvbmVUb2Rvc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkb25lLXRvZG9zJyk7XG5cbiAgICBmb3IgKGNvbnN0IHRvZG8gb2YgcHJvamVjdC50b2Rvcykge1xuICAgICAgbGV0IHRvZG9Db21wb25lbnQ7XG4gICAgICBpZiAoIXRvZG8uZG9uZSkge1xuICAgICAgICB0b2RvQ29tcG9uZW50ID0gbmV3IFBlbmRpbmdUb2RvQ29tcG9uZW50KHRvZG8pO1xuICAgICAgICB0b2Rvc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvQ29tcG9uZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRvZG9Db21wb25lbnQgPSBuZXcgRG9uZVRvZG9Db21wb25lbnQodG9kbyk7XG4gICAgICAgIGRvbmVUb2Rvc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvQ29tcG9uZW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RIZWFkZXIpO1xuICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb3NDb250YWluZXIpO1xuICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZG9uZVRvZG9zSGVhZGluZyk7XG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChkb25lVG9kb3NDb250YWluZXIpO1xuXG4gICAgcHJvamVjdENvbnRhaW5lci5wcm9qZWN0SWQgPSBwcm9qZWN0LmlkO1xuXG4gICAgdGhpcy5zZXRVcEV2ZW50TGlzdGVuZXJzKHByb2plY3RDb250YWluZXIpO1xuICAgIHJldHVybiBwcm9qZWN0Q29udGFpbmVyO1xuICB9XG5cbiAgc2V0VXBFdmVudExpc3RlbmVycyhwcm9qZWN0Q29udGFpbmVyKSB7XG4gICAgY29uc3QgdG9kb0NyZWF0ZUJ1dHRvbiA9IHByb2plY3RDb250YWluZXIucXVlcnlTZWxlY3RvcignLmNyZWF0ZS1idXR0b24nKTtcblxuICAgIHRvZG9DcmVhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdElkID0gZS50YXJnZXQuY2xvc2VzdCgnLnByb2plY3QnKS5wcm9qZWN0SWQ7XG4gICAgICBjb25zdCBkaWFsb2cgPSBuZXcgRGlhbG9nQ3JlYXRlVG9kb0NvbXBvbmVudChwcm9qZWN0SWQpO1xuICAgICAgZGlhbG9nLnNob3dNb2RhbCgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcHJvamVjdERlbGV0ZUJ1dHRvbiA9IHByb2plY3RDb250YWluZXIucXVlcnlTZWxlY3RvcihcbiAgICAgICcuZGVsZXRlLXByb2plY3QtYnV0dG9uJ1xuICAgICk7XG5cbiAgICBwcm9qZWN0RGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3RJZCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5wcm9qZWN0JykucHJvamVjdElkO1xuICAgICAgYXBwLmRlbGV0ZVByb2plY3QocHJvamVjdElkKTtcbiAgICAgIHJlbmRlcmVyLnJlbmRlclByb2plY3RzKCk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdENvbXBvbmVudDtcbiIsImltcG9ydCBEaWFsb2dUb2RvQ29tcG9uZW50IGZyb20gJy4vRGlhbG9nVG9kb0NvbXBvbmVudCc7XG5pbXBvcnQgcmVuZGVyZXIgZnJvbSAnLi4vLi4vcmVuZGVyZXInO1xuaW1wb3J0IGFwcCBmcm9tICcuLi8uLi9hcHAnO1xuaW1wb3J0IFRvZG8gZnJvbSAnLi4vLi4vZGF0YS90b2RvJztcblxuY2xhc3MgRGlhbG9nQ3JlYXRlVG9kb0NvbXBvbmVudCBleHRlbmRzIERpYWxvZ1RvZG9Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9qZWN0SWQpIHtcbiAgICBzdXBlcigpO1xuICAgIHN1cGVyLmNoYW5nZVRpdGxlKCdOZXcgVG9kbycpO1xuXG4gICAgY29uc3QgY3JlYXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY3JlYXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RpYWxvZy1jcmVhdGUtYnV0dG9uJyk7XG4gICAgY3JlYXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ0NyZWF0ZSBUb2RvJztcbiAgICB0aGlzLmFwcGVuZENoaWxkKGNyZWF0ZUJ1dHRvbik7XG5cbiAgICBjcmVhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0ID0gYXBwLnByb2plY3RzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IHByb2plY3RJZCk7XG5cbiAgICAgIGNvbnN0IG5ld1RvZG9UaXRsZSA9IHRoaXMucXVlcnlTZWxlY3RvcignaW5wdXQjdGl0bGUnKS52YWx1ZTtcbiAgICAgIGNvbnN0IG5ld1RvZG9EdWVEYXRlID0gdGhpcy5xdWVyeVNlbGVjdG9yKCdpbnB1dCNkdWVEYXRlJykudmFsdWU7XG4gICAgICBjb25zdCBuZXdUb2RvUHJpb3JpdHkgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCNwcmlvcml0eScpLnZhbHVlO1xuICAgICAgY29uc3QgbmV3VG9kb0Rlc2NyaXB0aW9uID0gdGhpcy5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAndGV4dGFyZWEjZGVzY3JpcHRpb24nXG4gICAgICApLnZhbHVlO1xuXG4gICAgICBjb25zdCBuZXdUb2RvID0gbmV3IFRvZG8oXG4gICAgICAgIG5ld1RvZG9UaXRsZSxcbiAgICAgICAgbmV3VG9kb0Rlc2NyaXB0aW9uLFxuICAgICAgICBuZXdUb2RvRHVlRGF0ZSxcbiAgICAgICAgbmV3VG9kb1ByaW9yaXR5XG4gICAgICApO1xuICAgICAgcHJvamVjdC5jcmVhdGVUb2RvKG5ld1RvZG8pO1xuXG4gICAgICByZW5kZXJlci5yZW5kZXJQcm9qZWN0cygpO1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERpYWxvZ0NyZWF0ZVRvZG9Db21wb25lbnQ7XG4iLCJpbXBvcnQgRGlhbG9nVG9kb0NvbXBvbmVudCBmcm9tICcuL0RpYWxvZ1RvZG9Db21wb25lbnQnO1xuaW1wb3J0IHJlbmRlcmVyIGZyb20gJy4uLy4uL3JlbmRlcmVyJztcbmltcG9ydCBhcHAgZnJvbSAnLi4vLi4vYXBwJztcblxuY2xhc3MgRGlhbG9nRWRpdFRvZG9Db21wb25lbnQgZXh0ZW5kcyBEaWFsb2dUb2RvQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IodG9kbywgcHJvamVjdElkKSB7XG4gICAgc3VwZXIoKTtcbiAgICBzdXBlci5jaGFuZ2VUaXRsZSh0b2RvLnRpdGxlKTtcblxuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0I3RpdGxlJyk7XG4gICAgY29uc3QgZHVlRGF0ZUlucHV0ID0gdGhpcy5xdWVyeVNlbGVjdG9yKCdpbnB1dCNkdWVEYXRlJyk7XG4gICAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IHRoaXMucXVlcnlTZWxlY3Rvcignc2VsZWN0I3ByaW9yaXR5Jyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IHRoaXMucXVlcnlTZWxlY3RvcigndGV4dGFyZWEjZGVzY3JpcHRpb24nKTtcblxuICAgIHRpdGxlSW5wdXQudmFsdWUgPSB0b2RvLnRpdGxlO1xuICAgIGR1ZURhdGVJbnB1dC52YWx1ZSA9IHRvZG8uZHVlRGF0ZTtcbiAgICBwcmlvcml0eUlucHV0LnZhbHVlID0gdG9kby5wcmlvcml0eTtcbiAgICBkZXNjcmlwdGlvbklucHV0LnZhbHVlID0gdG9kby5kZXNjcmlwdGlvbjtcblxuICAgIGNvbnN0IGRvbmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkb25lQnV0dG9uLmlkID0gJ2RvbmUtZGlhbG9nLWJ1dHRvbic7XG4gICAgZG9uZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdEb25lJztcbiAgICB0aGlzLmFwcGVuZENoaWxkKGRvbmVCdXR0b24pO1xuXG4gICAgZG9uZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3QgPSBhcHAucHJvamVjdHMuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gcHJvamVjdElkKTtcblxuICAgICAgY29uc3QgbmV3VG9kb1RpdGxlID0gdGl0bGVJbnB1dC52YWx1ZTtcbiAgICAgIGNvbnN0IG5ld1RvZG9EdWVEYXRlID0gZHVlRGF0ZUlucHV0LnZhbHVlO1xuICAgICAgY29uc3QgbmV3VG9kb1ByaW9yaXR5ID0gcHJpb3JpdHlJbnB1dC52YWx1ZTtcbiAgICAgIGNvbnN0IG5ld1RvZG9EZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uSW5wdXQudmFsdWU7XG5cbiAgICAgIHByb2plY3QuZWRpdFRvZG8oXG4gICAgICAgIHRvZG8uaWQsXG4gICAgICAgIG5ld1RvZG9UaXRsZSxcbiAgICAgICAgbmV3VG9kb0Rlc2NyaXB0aW9uLFxuICAgICAgICBuZXdUb2RvRHVlRGF0ZSxcbiAgICAgICAgbmV3VG9kb1ByaW9yaXR5XG4gICAgICApO1xuXG4gICAgICByZW5kZXJlci5yZW5kZXJQcm9qZWN0cygpO1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERpYWxvZ0VkaXRUb2RvQ29tcG9uZW50O1xuIiwiaW1wb3J0IGRlY29kZUh0bWxDaGFyQ29kZXMgZnJvbSAnLi4vLi4vaGVscGVycy9kZWNvZGUnO1xuaW1wb3J0IHByaW9yaXR5T3B0aW9ucyBmcm9tICcuLi8uLi9oZWxwZXJzL3NlbGVjdFByaW9yaXR5T3B0aW9ucyc7XG5cbmltcG9ydCBJbnB1dENvbXBvbmVudCBmcm9tICcuLi9pbnB1dHMvSW5wdXRDb21wb25lbnQnO1xuaW1wb3J0IERhdGVJbnB1dENvbXBvbmVudCBmcm9tICcuLi9pbnB1dHMvRGF0ZUlucHV0Q29tcG9uZW50JztcbmltcG9ydCBTZWxlY3RDb21wb25lbnQgZnJvbSAnLi4vaW5wdXRzL1NlbGVjdENvbXBvbmVudCc7XG5pbXBvcnQgVGV4dEFyZWFDb21wb25lbnQgZnJvbSAnLi4vaW5wdXRzL1RleHRBcmVhQ29tcG9uZW50JztcblxuY2xhc3MgRGlhbG9nVG9kb0NvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IGRpYWxvZ0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkaWFsb2cnKTtcbiAgICBkaWFsb2dDb250YWluZXIudGV4dENvbnRlbnQgPSAnJztcblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuXG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjbG9zZUJ1dHRvbi50ZXh0Q29udGVudCA9IGRlY29kZUh0bWxDaGFyQ29kZXMoJyYjMTAwMDY7Jyk7XG4gICAgY2xvc2VCdXR0b24uaWQgPSAnZGlhbG9nLWNsb3NlLWJ1dHRvbic7XG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uKTtcblxuICAgIGNvbnN0IGlucHV0c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGlucHV0c0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpbnB1dHMnKTtcblxuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBuZXcgSW5wdXRDb21wb25lbnQoJ1RpdGxlOicsICd0aXRsZScpO1xuICAgIGNvbnN0IGR1ZURhdGVJbnB1dCA9IG5ldyBEYXRlSW5wdXRDb21wb25lbnQoJ0R1ZSBkYXRlOicsICdkdWVEYXRlJyk7XG4gICAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IG5ldyBTZWxlY3RDb21wb25lbnQoXG4gICAgICAnUHJpb3JpdHk6JyxcbiAgICAgICdwcmlvcml0eScsXG4gICAgICBwcmlvcml0eU9wdGlvbnNcbiAgICApO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBuZXcgVGV4dEFyZWFDb21wb25lbnQoXG4gICAgICAnRGVzY3JpcHRpb246JyxcbiAgICAgICdkZXNjcmlwdGlvbidcbiAgICApO1xuXG4gICAgaW5wdXRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuICAgIGlucHV0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChkdWVEYXRlSW5wdXQpO1xuICAgIGlucHV0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eUlucHV0KTtcbiAgICBpbnB1dHNDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7XG5cbiAgICBkaWFsb2dDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBkaWFsb2dDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXRzQ29udGFpbmVyKTtcblxuICAgIHRoaXMuc2V0VXBFdmVudExpc3RlbmVycyhkaWFsb2dDb250YWluZXIpO1xuICAgIHJldHVybiBkaWFsb2dDb250YWluZXI7XG4gIH1cblxuICBjaGFuZ2VUaXRsZSh0aXRsZSkge1xuICAgIHRoaXMucXVlcnlTZWxlY3RvcignaDInKS50ZXh0Q29udGVudCA9IHRpdGxlO1xuICB9XG5cbiAgc2V0VXBFdmVudExpc3RlbmVycyhkaWFsb2dDb250YWluZXIpIHtcbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRpYWxvZ0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcjZGlhbG9nLWNsb3NlLWJ1dHRvbicpO1xuICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZGlhbG9nQ29udGFpbmVyLmNsb3NlKCk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGlhbG9nVG9kb0NvbXBvbmVudDtcbiIsImltcG9ydCBJbnB1dENvbXBvbmVudCBmcm9tICcuL0lucHV0Q29tcG9uZW50JztcblxuY2xhc3MgRGF0ZUlucHV0Q29tcG9uZW50IGV4dGVuZHMgSW5wdXRDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihsYWJlbCwgbmFtZSkge1xuICAgIHN1cGVyKGxhYmVsLCBuYW1lKTtcbiAgICB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykudHlwZSA9ICdkYXRlJztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXRlSW5wdXRDb21wb25lbnQ7XG4iLCJjbGFzcyBJbnB1dENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGxhYmVsLCBuYW1lKSB7XG4gICAgY29uc3QgZm9ybUNvbnRyb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtQ29udHJvbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKTtcblxuICAgIGNvbnN0IGxhYmVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbGFiZWxFbGVtZW50LnRleHRDb250ZW50ID0gbGFiZWw7XG4gICAgbGFiZWxFbGVtZW50LmZvciA9IG5hbWU7XG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQuaWQgPSBuYW1lO1xuICAgIGlucHV0Lm5hbWUgPSBuYW1lO1xuXG4gICAgZm9ybUNvbnRyb2wuYXBwZW5kQ2hpbGQobGFiZWxFbGVtZW50KTtcbiAgICBmb3JtQ29udHJvbC5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgICByZXR1cm4gZm9ybUNvbnRyb2w7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5wdXRDb21wb25lbnQ7XG4iLCJpbXBvcnQgZGVjb2RlSHRtbENoYXJDb2RlcyBmcm9tICcuLi8uLi9oZWxwZXJzL2RlY29kZSc7XG5cbmNsYXNzIFNlbGVjdENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGxhYmVsLCBuYW1lLCBvcHRpb25zKSB7XG4gICAgY29uc3QgZm9ybUNvbnRyb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtQ29udHJvbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnLCAnc2VsZWN0LWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgbGFiZWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBsYWJlbEVsZW1lbnQudGV4dENvbnRlbnQgPSBsYWJlbDtcbiAgICBsYWJlbEVsZW1lbnQuZm9yID0gbmFtZTtcblxuICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIHNlbGVjdC5pZCA9IG5hbWU7XG4gICAgc2VsZWN0Lm5hbWUgPSBuYW1lO1xuXG4gICAgZm9yIChjb25zdCBvcHRpb24gb2Ygb3B0aW9ucykge1xuICAgICAgY29uc3Qgb3B0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgb3B0aW9uRWxlbWVudC52YWx1ZSA9IG9wdGlvbi52YWx1ZTtcbiAgICAgIG9wdGlvbkVsZW1lbnQudGV4dENvbnRlbnQgPSBvcHRpb24udGV4dDtcblxuICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbkVsZW1lbnQpO1xuICAgIH1cblxuICAgIGNvbnN0IHNlbGVjdEFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2VsZWN0QXJyb3cudGV4dENvbnRlbnQgPSBkZWNvZGVIdG1sQ2hhckNvZGVzKCcmI3gyNUJDOycpO1xuICAgIHNlbGVjdEFycm93LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdC1hcnJvdycpO1xuXG4gICAgZm9ybUNvbnRyb2wuYXBwZW5kQ2hpbGQobGFiZWxFbGVtZW50KTtcbiAgICBmb3JtQ29udHJvbC5hcHBlbmRDaGlsZChzZWxlY3QpO1xuICAgIGZvcm1Db250cm9sLmFwcGVuZENoaWxkKHNlbGVjdEFycm93KTtcblxuICAgIHJldHVybiBmb3JtQ29udHJvbDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RDb21wb25lbnQ7XG4iLCJjbGFzcyBUZXh0QXJlYUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGxhYmVsLCBuYW1lKSB7XG4gICAgY29uc3QgZm9ybUNvbnRyb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtQ29udHJvbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKTtcblxuICAgIGNvbnN0IGxhYmVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbGFiZWxFbGVtZW50LnRleHRDb250ZW50ID0gbGFiZWw7XG4gICAgbGFiZWxFbGVtZW50LmZvciA9IG5hbWU7XG5cbiAgICBjb25zdCB0ZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgdGV4dGFyZWEuaWQgPSBuYW1lO1xuICAgIHRleHRhcmVhLm5hbWUgPSBuYW1lO1xuICAgIHRleHRhcmVhLnJvd3MgPSAzO1xuXG4gICAgZm9ybUNvbnRyb2wuYXBwZW5kQ2hpbGQobGFiZWxFbGVtZW50KTtcbiAgICBmb3JtQ29udHJvbC5hcHBlbmRDaGlsZCh0ZXh0YXJlYSk7XG5cbiAgICByZXR1cm4gZm9ybUNvbnRyb2w7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGV4dEFyZWFDb21wb25lbnQ7XG4iLCJpbXBvcnQgcmVuZGVyZXIgZnJvbSAnLi4vcmVuZGVyZXInO1xuaW1wb3J0IGFwcCBmcm9tICcuLi9hcHAnO1xuaW1wb3J0IERpYWxvZ0VkaXRUb2RvQ29tcG9uZW50IGZyb20gJy4vZGlhbG9ncy9EaWFsb2dFZGl0VG9kb0NvbXBvbmVudCc7XG5cbmltcG9ydCBwcmlvcml0eU9wdGlvbnMgZnJvbSAnLi4vaGVscGVycy9zZWxlY3RQcmlvcml0eU9wdGlvbnMnO1xuXG5jbGFzcyBQZW5kaW5nVG9kb0NvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHRvZG8pIHtcbiAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2RvJyk7XG5cbiAgICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHRvZG9UaXRsZS50ZXh0Q29udGVudCA9IHRvZG8udGl0bGU7XG5cbiAgICBjb25zdCB0b2RvRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0b2RvRGF0ZS50ZXh0Q29udGVudCA9IHRvZG8uZHVlRGF0ZTtcbiAgICBjb25zdCBwcmlvcml0eUNvbG9yID0gcHJpb3JpdHlPcHRpb25zLmZpbmQoXG4gICAgICAob3B0aW9uKSA9PiBvcHRpb24udmFsdWUgPT09IHRvZG8ucHJpb3JpdHlcbiAgICApLmNvbG9yO1xuICAgIHRvZG9EYXRlLnN0eWxlLmNvbG9yID0gcHJpb3JpdHlDb2xvcjtcblxuICAgIGNvbnN0IHRvZG9Eb25lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdG9kb0RvbmVCdXR0b24uY2xhc3NMaXN0LmFkZCgnZG9uZS1idXR0b24nKTtcbiAgICB0b2RvRG9uZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdEb25lJztcblxuICAgIGNvbnN0IHRvZG9EZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0b2RvRGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1idXR0b24nKTtcbiAgICB0b2RvRGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XG5cbiAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9UaXRsZSk7XG4gICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvRGF0ZSk7XG4gICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvRG9uZUJ1dHRvbik7XG4gICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvRGVsZXRlQnV0dG9uKTtcbiAgICB0b2RvQ29udGFpbmVyLnRvZG9JZCA9IHRvZG8uaWQ7XG5cbiAgICB0aGlzLnNldFVwRXZlbnRMaXN0ZW5lcnModG9kb0NvbnRhaW5lcik7XG4gICAgcmV0dXJuIHRvZG9Db250YWluZXI7XG4gIH1cblxuICBzZXRVcEV2ZW50TGlzdGVuZXJzKHRvZG9Db250YWluZXIpIHtcbiAgICBjb25zdCB0b2RvVGl0bGUgPSB0b2RvQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2gzJyk7XG4gICAgdG9kb1RpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3RJZCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5wcm9qZWN0JykucHJvamVjdElkO1xuICAgICAgY29uc3QgcHJvamVjdCA9IGFwcC5wcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBwcm9qZWN0SWQpO1xuICAgICAgY29uc3QgdG9kb0lkID0gZS50YXJnZXQuY2xvc2VzdCgnLnRvZG8nKS50b2RvSWQ7XG4gICAgICBjb25zdCB0b2RvID0gcHJvamVjdC50b2Rvcy5maW5kKCh0b2RvKSA9PiB0b2RvLmlkID09PSB0b2RvSWQpO1xuXG4gICAgICBjb25zdCBkaWFsb2dFZGl0ID0gbmV3IERpYWxvZ0VkaXRUb2RvQ29tcG9uZW50KHRvZG8sIHByb2plY3RJZCk7XG4gICAgICBkaWFsb2dFZGl0LnNob3dNb2RhbCgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZG9uZUJ1dHRvbiA9IHRvZG9Db250YWluZXIucXVlcnlTZWxlY3RvcignLmRvbmUtYnV0dG9uJyk7XG4gICAgZG9uZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3RJZCA9IGRvbmVCdXR0b24uY2xvc2VzdCgnLnByb2plY3QnKS5wcm9qZWN0SWQ7XG4gICAgICBjb25zdCBwcm9qZWN0ID0gYXBwLnByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IHByb2plY3RJZCk7XG4gICAgICBjb25zdCB0b2RvSWQgPSBkb25lQnV0dG9uLmNsb3Nlc3QoJy50b2RvJykudG9kb0lkO1xuICAgICAgY29uc3QgdG9kbyA9IHByb2plY3QudG9kb3MuZmluZCgodG9kbykgPT4gdG9kby5pZCA9PT0gdG9kb0lkKTtcblxuICAgICAgdG9kby5kbygpO1xuICAgICAgcmVuZGVyZXIucmVuZGVyUHJvamVjdHMoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IHRvZG9Db250YWluZXIucXVlcnlTZWxlY3RvcignLmRlbGV0ZS1idXR0b24nKTtcbiAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZS50YXJnZXQ7XG5cbiAgICAgIGNvbnN0IHByb2plY3RJZCA9IGRlbGV0ZUJ1dHRvbi5jbG9zZXN0KCcucHJvamVjdCcpLnByb2plY3RJZDtcbiAgICAgIGNvbnN0IHByb2plY3QgPSBhcHAucHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gcHJvamVjdElkKTtcbiAgICAgIGNvbnN0IHRvZG9JZCA9IGRlbGV0ZUJ1dHRvbi5jbG9zZXN0KCcudG9kbycpLnRvZG9JZDtcblxuICAgICAgcHJvamVjdC5kZWxldGVUb2RvKHRvZG9JZCk7XG4gICAgICByZW5kZXJlci5yZW5kZXJQcm9qZWN0cygpO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBlbmRpbmdUb2RvQ29tcG9uZW50O1xuIiwiY2xhc3MgUHJvamVjdCB7XG4gIHN0YXRpYyAjaWRDb3VudGVyID0gMDtcbiAgdG9kb3MgPSBbXTtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5pZCA9IFByb2plY3QuI2lkQ291bnRlcjtcbiAgICBQcm9qZWN0LiNpZENvdW50ZXIrKztcbiAgfVxuXG4gIGNoYW5nZU5hbWUobmV3TmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5ld05hbWU7XG4gICAgdGhpcy5vbkRhdGFDaGFuZ2UoKTtcbiAgfVxuXG4gIGNyZWF0ZVRvZG8odG9kbykge1xuICAgIHRoaXMudG9kb3MucHVzaCh0b2RvKTtcbiAgICB0aGlzLm9uRGF0YUNoYW5nZSgpO1xuICB9XG5cbiAgZGVsZXRlVG9kbyhpZCkge1xuICAgIGNvbnN0IHRvZG8gPSB0aGlzLnRvZG9zLmZpbmQoKHRvZG8pID0+IGlkID09PSB0b2RvLmlkKTtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMudG9kb3MuZmluZEluZGV4KChpdGVtKSA9PiBpdGVtID09PSB0b2RvKTtcbiAgICB0aGlzLnRvZG9zLnNwbGljZShpbmRleCwgMSk7XG4gICAgdGhpcy5vbkRhdGFDaGFuZ2UoKTtcbiAgfVxuXG4gIGVkaXRUb2RvKGlkLCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgY29uc3QgdG9kbyA9IHRoaXMudG9kb3MuZmluZCgodG9kbykgPT4gaWQgPT09IHRvZG8uaWQpO1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy50b2Rvcy5maW5kSW5kZXgoKGl0ZW0pID0+IGl0ZW0gPT09IHRvZG8pO1xuICAgIHRoaXMudG9kb3NbaW5kZXhdLmVkaXQodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSk7XG4gICAgdGhpcy5vbkRhdGFDaGFuZ2UoKTtcbiAgfVxuXG4gIHNvcnRUb2RvcygpIHtcbiAgICB0aGlzLnRvZG9zLnNvcnQoKHRvZG8xLCB0b2RvMikgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICAodG9kbzEucHJpb3JpdHkgPT09ICdpbXBvcnRhbnQnICYmXG4gICAgICAgICAgKHRvZG8yLnByaW9yaXR5ID09PSAnbWVkaXVtJyB8fCB0b2RvMi5wcmlvcml0eSA9PT0gJ2xpZ2h0JykpIHx8XG4gICAgICAgICh0b2RvMS5wcmlvcml0eSA9PT0gJ21lZGl1bScgJiYgdG9kbzIucHJpb3JpdHkgPT09ICdsaWdodCcpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfSBlbHNlIGlmICh0b2RvMS5wcmlvcml0eSA9PT0gdG9kbzIucHJpb3JpdHkpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHBvcHVsYXRlU3RvcmFnZSgpIHtcbiAgICBjb25zdCBzdG9yYWdlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSk7XG4gICAgY29uc3QgY3VycmVudFByb2plY3RJbmRleCA9IHN0b3JhZ2UuZmluZEluZGV4KFxuICAgICAgKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IHRoaXMuaWRcbiAgICApO1xuXG4gICAgc3RvcmFnZVtjdXJyZW50UHJvamVjdEluZGV4XSA9IHRoaXM7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkoc3RvcmFnZSkpO1xuICB9XG5cbiAgb25EYXRhQ2hhbmdlKCkge1xuICAgIHRoaXMuc29ydFRvZG9zKCk7XG4gICAgdGhpcy5wb3B1bGF0ZVN0b3JhZ2UoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0O1xuIiwiY2xhc3MgVG9kbyB7XG4gIHN0YXRpYyAjaWRDb3VudGVyID0gMDtcbiAgZG9uZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICB0aGlzLmlkID0gVG9kby4jaWRDb3VudGVyO1xuICAgIFRvZG8uI2lkQ291bnRlcisrO1xuXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgfVxuXG4gIGVkaXQodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgLy8gRGF0YSBpbiBzdG9yYWdlIHVwZGF0ZWQgaW5zaWRlIHByb2plY3QuanMgb24gdG9kbyBlZGl0XG4gIH1cblxuICBkbygpIHtcbiAgICB0aGlzLmRvbmUgPSB0cnVlO1xuICAgIHRoaXMucG9wdWxhdGVTdG9yYWdlKCk7XG4gIH1cblxuICB1bmRvKCkge1xuICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgIHRoaXMucG9wdWxhdGVTdG9yYWdlKCk7XG4gIH1cblxuICBwb3B1bGF0ZVN0b3JhZ2UoKSB7XG4gICAgY29uc3Qgc3RvcmFnZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpO1xuICAgIGNvbnNvbGUubG9nKHN0b3JhZ2UpO1xuXG4gICAgY29uc3QgY3VycmVudFByb2plY3RJbmRleCA9IHN0b3JhZ2UuZmluZEluZGV4KChwcm9qZWN0KSA9PlxuICAgICAgcHJvamVjdC50b2Rvcy5maW5kKCh0b2RvKSA9PiB0b2RvLmlkID09PSB0aGlzLmlkKVxuICAgICk7XG5cbiAgICBjb25zdCBjdXJyZW50VG9kb0luZGV4ID0gc3RvcmFnZVtjdXJyZW50UHJvamVjdEluZGV4XS50b2Rvcy5maW5kSW5kZXgoXG4gICAgICAodG9kbykgPT4gdGhpcy5pZCA9PT0gdG9kby5pZFxuICAgICk7XG5cbiAgICBzdG9yYWdlW2N1cnJlbnRQcm9qZWN0SW5kZXhdLnRvZG9zW2N1cnJlbnRUb2RvSW5kZXhdID0gdGhpcztcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShzdG9yYWdlKSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9kbztcbiIsImNvbnN0IGRlY29kZUh0bWxDaGFyQ29kZXMgPSAoZnVuY3Rpb24gKCkge1xuICAvLyB0aGlzIHByZXZlbnRzIGFueSBvdmVyaGVhZCBmcm9tIGNyZWF0aW5nIHRoZSBvYmplY3QgZWFjaCB0aW1lXG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgZnVuY3Rpb24gZGVjb2RlSFRNTEVudGl0aWVzKHN0cikge1xuICAgIGlmIChzdHIgJiYgdHlwZW9mIHN0ciA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIHN0cmlwIHNjcmlwdC9odG1sIHRhZ3NcbiAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKC88c2NyaXB0W14+XSo+KFtcXFNcXHNdKj8pPFxcL3NjcmlwdD4vZ2ltLCAnJyk7XG4gICAgICBzdHIgPSBzdHIucmVwbGFjZSgvPFxcLz9cXHcoPzpbXlwiJz5dfFwiW15cIl0qXCJ8J1teJ10qJykqPi9naW0sICcnKTtcbiAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gc3RyO1xuICAgICAgc3RyID0gZWxlbWVudC50ZXh0Q29udGVudDtcbiAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSAnJztcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyO1xuICB9XG5cbiAgcmV0dXJuIGRlY29kZUhUTUxFbnRpdGllcztcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGRlY29kZUh0bWxDaGFyQ29kZXM7XG4iLCJjb25zdCBwcmlvcml0eU9wdGlvbnMgPSBbXG4gIHsgdGV4dDogJ0ltcG9ydGFudCcsIHZhbHVlOiAnaW1wb3J0YW50JywgY29sb3I6ICdyZWQnIH0sXG4gIHsgdGV4dDogJ01lZGl1bScsIHZhbHVlOiAnbWVkaXVtJywgY29sb3I6ICdibHVlJyB9LFxuICB7IHRleHQ6ICdMaWdodCcsIHZhbHVlOiAnbGlnaHQnLCBjb2xvcjogJ2dyZWVuJyB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgcHJpb3JpdHlPcHRpb25zO1xuIiwiaW1wb3J0IGFwcCBmcm9tICcuL2FwcCc7XG5pbXBvcnQgUHJvamVjdENvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvUHJvamVjdENvbXBvbmVudCc7XG5cbmNsYXNzIFJlbmRlcmVyIHtcbiAgcmVuZGVyUHJvamVjdHMoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICBjb250YWluZXIudGV4dENvbnRlbnQgPSAnJztcblxuICAgIGZvciAoY29uc3QgcHJvamVjdCBvZiBhcHAucHJvamVjdHMpIHtcbiAgICAgIGNvbnN0IHByb2plY3RDb21wb25lbnQgPSBuZXcgUHJvamVjdENvbXBvbmVudChwcm9qZWN0KTtcbiAgICAgIHByb2plY3RDb21wb25lbnQucHJvamVjdElkID0gcHJvamVjdC5pZDtcblxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RDb21wb25lbnQpO1xuICAgIH1cbiAgfVxufVxuXG5jb25zdCByZW5kZXJlciA9IG5ldyBSZW5kZXJlcigpO1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJlcjtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcblxuaW1wb3J0IGFwcCBmcm9tICcuL2FwcCc7XG5pbXBvcnQgcmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5cbmNvbnN0IGNyZWF0ZVByb2plY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGUtcHJvamVjdC1pbnB1dCcpO1xuY29uc3QgY3JlYXRlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGUtcHJvamVjdC1idXR0b24nKTtcblxuY3JlYXRlUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgYXBwLmNyZWF0ZVByb2plY3QoY3JlYXRlUHJvamVjdElucHV0LnZhbHVlKTtcbiAgcmVuZGVyZXIucmVuZGVyUHJvamVjdHMoKTtcbn0pO1xuXG5yZW5kZXJlci5yZW5kZXJQcm9qZWN0cygpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9