module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Author/index.js":
/*!************************************!*\
  !*** ./components/Author/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/divider */ "antd/lib/divider");
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/avatar */ "antd/lib/avatar");
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_style_components_author_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/style/components/author.css */ "./public/style/components/author.css");
/* harmony import */ var _public_style_components_author_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_style_components_author_css__WEBPACK_IMPORTED_MODULE_4__);



var _jsxFileName = "/home/zhaokh/Project/blog/font_end/components/Author/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

/*
 * @Descripttion: 侧边栏 
 * @Author: zhaokh
 * @Date: 2020-02-02 21:43:25
 */



const Author = () => __jsx("div", {
  className: "author-div common-box",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, __jsx(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1___default.a, {
  size: 100,
  icon: __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_2___default.a, {
    type: "user",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
})), __jsx("div", {
  className: "author-introduction",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, "\u6B64\u5730\u7EF4\u6743\u65E0\u95E8\uFF0C\u6B64\u65F6\u65E0\u80FD\u4E3A\u529B\uFF0C\u6B64\u5FC3\u968F\u6CE2\u9010\u6D41\u3002", __jsx(antd_lib_divider__WEBPACK_IMPORTED_MODULE_0___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, "\u793E\u4EA4\u8D26\u53F7"), __jsx(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1___default.a, {
  size: 28,
  icon: "github",
  className: "account",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}), __jsx(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1___default.a, {
  size: 28,
  icon: "qq",
  className: "account",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}), __jsx(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1___default.a, {
  size: 28,
  icon: "wechat",
  className: "account",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
})));

/* harmony default export */ __webpack_exports__["default"] = (Author);

/***/ }),

/***/ "./components/Footer/index.js":
/*!************************************!*\
  !*** ./components/Footer/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_style_components_footer_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../public/style/components/footer.css */ "./public/style/components/footer.css");
/* harmony import */ var _public_style_components_footer_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_style_components_footer_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/zhaokh/Project/blog/font_end/components/Footer/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/*
 * @Descripttion: 页脚
 * @Author: zhaokh
 * @Date: 2020-02-03 11:46:34
 */


const Footer = () => __jsx("div", {
  className: "footer-div",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, "\u7CFB\u7EDF\u7531 React Hooks+Node+Ant Desgin\u9A71\u52A8 "), __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, "zhaokh.com"));

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Header/index.js":
/*!************************************!*\
  !*** ./components/Header/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/menu */ "antd/lib/menu");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_style_components_header_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/style/components/header.css */ "./public/style/components/header.css");
/* harmony import */ var _public_style_components_header_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_style_components_header_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _constant_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../constant/api */ "./constant/api.js");




var _jsxFileName = "/home/zhaokh/Project/blog/font_end/components/Header/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

/*
 * @Descripttion:
 * @Author: zhaokh
 * @Date: 2020-01-29 15:25:29
 */






const Header = () => {
  const {
    0: navArray,
    1: setNavArray
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])();
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(() => {
    const fetchData = async () => {
      const {
        data
      } = await axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(_constant_api__WEBPACK_IMPORTED_MODULE_8__["default"].getNav);
      setNavArray(data);
    };

    fetchData();
  }, []);

  const linkTo = event => {
    const type = event.item.props.children[1];
    const id = event.key;

    switch (type) {
      case "视频":
        next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push(`/list?id=${id}`);
        break;

      case "首页":
        next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push("/");
    }
  };

  return __jsx("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default.a, {
    type: "flex",
    justify: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    xs: 24,
    sm: 24,
    md: 10,
    lg: 15,
    xl: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, __jsx("span", {
    className: "header-logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, "\u76AE\u76AE\u2740"), __jsx("span", {
    className: "header-txt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, "\u4E00\u4E2A\u61A8\u61A8\u7A0B\u5E8F\u5458")), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    xs: 0,
    sm: 0,
    md: 14,
    lg: 8,
    xl: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a, {
    mode: "horizontal",
    onClick: linkTo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, navArray && navArray.map(item => __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
    key: item._id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_2___default.a, {
    type: item.icon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }), item.name))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/TOC/tocify.tsx":
/*!***********************************!*\
  !*** ./components/TOC/tocify.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tocify; });
/* harmony import */ var antd_lib_anchor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/anchor */ "antd/lib/anchor");
/* harmony import */ var antd_lib_anchor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_anchor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/home/zhaokh/Project/blog/font_end/components/TOC/tocify.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const {
  Link
} = antd_lib_anchor__WEBPACK_IMPORTED_MODULE_0___default.a;
// TOC目录树结构
class Tocify {
  constructor() {
    _defineProperty(this, "tocItems", []);

    _defineProperty(this, "index", 0);

    _defineProperty(this, "reset", () => {
      this.tocItems = [];
      this.index = 0;
    });

    this.tocItems = [];
    this.index = 0;
  }

  add(text, level) {
    const anchor = `toc${level}${++this.index}`;
    const item = {
      anchor,
      level,
      text
    };
    const items = this.tocItems;

    if (items.length === 0) {
      // 第一个 item 直接 push
      items.push(item);
    } else {
      let lastItem = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["last"])(items); // 最后一个 item

      if (item.level > lastItem.level) {
        // item 是 lastItem 的 children
        for (let i = lastItem.level + 1; i <= 2; i++) {
          const {
            children
          } = lastItem;

          if (!children) {
            // 如果 children 不存在
            lastItem.children = [item];
            break;
          }

          lastItem = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["last"])(children); // 重置 lastItem 为 children 的最后一个 item

          if (item.level <= lastItem.level) {
            // item level 小于或等于 lastItem level 都视为与 children 同级
            children.push(item);
            break;
          }
        }
      } else {
        // 置于最顶级
        items.push(item);
      }
    }

    return anchor;
  }

  renderToc(items) {
    // 递归 render
    return items.map(item => __jsx(Link, {
      key: item.anchor,
      href: `#${item.anchor}`,
      title: item.text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, item.children && this.renderToc(item.children)));
  }

  render() {
    return __jsx(antd_lib_anchor__WEBPACK_IMPORTED_MODULE_0___default.a, {
      affix: true,
      showInkInFixed: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, this.renderToc(this.tocItems));
  }

}

/***/ }),

/***/ "./constant/api.js":
/*!*************************!*\
  !*** ./constant/api.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * @Descripttion:API URL常量
 * @Author: zhaokh
 * @Date: 2020-02-13 23:25:22
 */
const BASIC_API = "http://localhost:7001/fontend/";
/* harmony default export */ __webpack_exports__["default"] = ({
  getDetail: `${BASIC_API}article/`,
  getArticles: `${BASIC_API}articles`,
  getNav: `${BASIC_API}nav`,
  getList: `${BASIC_API}list/`
});

/***/ }),

/***/ "./node_modules/highlight.js/styles/monokai-sublime.css":
/*!**************************************************************!*\
  !*** ./node_modules/highlight.js/styles/monokai-sublime.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/markdown-navbar/dist/navbar.css":
/*!******************************************************!*\
  !*** ./node_modules/markdown-navbar/dist/navbar.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/detail.js":
/*!*************************!*\
  !*** ./pages/detail.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_affix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/affix */ "antd/lib/affix");
/* harmony import */ var antd_lib_affix__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_affix__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/breadcrumb */ "antd/lib/breadcrumb");
/* harmony import */ var antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var markdown_navbar_dist_navbar_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! markdown-navbar/dist/navbar.css */ "./node_modules/markdown-navbar/dist/navbar.css");
/* harmony import */ var markdown_navbar_dist_navbar_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(markdown_navbar_dist_navbar_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! marked */ "marked");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! highlight.js */ "highlight.js");
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(highlight_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var highlight_js_lib_languages_javascript__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! highlight.js/lib/languages/javascript */ "highlight.js/lib/languages/javascript");
/* harmony import */ var highlight_js_lib_languages_javascript__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_javascript__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var highlight_js_styles_monokai_sublime_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! highlight.js/styles/monokai-sublime.css */ "./node_modules/highlight.js/styles/monokai-sublime.css");
/* harmony import */ var highlight_js_styles_monokai_sublime_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(highlight_js_styles_monokai_sublime_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Header */ "./components/Header/index.js");
/* harmony import */ var _components_Author__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Author */ "./components/Author/index.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer/index.js");
/* harmony import */ var _components_TOC_tocify_tsx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/TOC/tocify.tsx */ "./components/TOC/tocify.tsx");
/* harmony import */ var _constant_api__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../constant/api */ "./constant/api.js");
/* harmony import */ var _public_style_pages_detail_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../public/style/pages/detail.css */ "./public/style/pages/detail.css");
/* harmony import */ var _public_style_pages_detail_css__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_public_style_pages_detail_css__WEBPACK_IMPORTED_MODULE_18__);





var _jsxFileName = "/home/zhaokh/Project/blog/font_end/pages/detail.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

/*
 * @Descripttion: 详情页
 * @Author: zhaokh
 * @Date: 2020-02-02 17:11:39
 */


// import ReactMarkDown from "react-markdown";
// import MarkdownNav from "markdown-navbar";





highlight_js__WEBPACK_IMPORTED_MODULE_10___default.a.registerLanguage("javascript", highlight_js_lib_languages_javascript__WEBPACK_IMPORTED_MODULE_11___default.a);








const Detailed = value => {
  const {
    article = {}
  } = value; // const { content = "" } = article;

  let markdown = "# P01:课程介绍和环境搭建\n" + "[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n" + "> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n" + "**这是加粗的文字**\n\n" + "*这是倾斜的文字*`\n\n" + "***这是斜体加粗的文字***\n\n" + "~~这是加删除线的文字~~ \n\n" + "`console.log(111)` \n\n" + "# p02:来个Hello World 初始Vue3.0\n" + "> aaaaaaaaa\n" + ">> bbbbbbbbb\n" + ">>> cccccccccc\n" + "***\n\n\n" + "# p03:Vue3.0基础知识讲解\n" + "> aaaaaaaaa\n" + ">> bbbbbbbbb\n" + ">>> cccccccccc\n\n" + "# p04:Vue3.0基础知识讲解\n" + "> aaaaaaaaa\n" + ">> bbbbbbbbb\n" + ">>> cccccccccc\n\n" + "#5 p05:Vue3.0基础知识讲解\n" + "> aaaaaaaaa\n" + ">> bbbbbbbbb\n" + ">>> cccccccccc\n\n" + "# p06:Vue3.0基础知识讲解\n" + "> aaaaaaaaa\n" + ">> bbbbbbbbb\n" + ">>> cccccccccc\n\n" + "# p07:Vue3.0基础知识讲解\n" + "> aaaaaaaaa\n" + ">> bbbbbbbbb\n" + ">>> cccccccccc\n\n" + "``` var a=11; ```";
  const renderer = new marked__WEBPACK_IMPORTED_MODULE_9___default.a.Renderer();
  marked__WEBPACK_IMPORTED_MODULE_9___default.a.setOptions({
    renderer,
    // 这个是必须填写的，你可以通过自定义的Renderer渲染出自定义的格式
    gfm: true,
    // 启动类似Github样式的Markdown,填写true或者false
    pedantic: false,
    // 只解析符合Markdown定义的，不修正Markdown的错误。填写true或者false
    sanitize: false,
    // 原始输出，忽略HTML标签，这个作为一个开发人员，一定要写flase
    tables: true,
    // 支持Github形式的表格，必须打开gfm选项
    breaks: false,
    // 支持Github换行符，必须打开gfm选项，填写true或者false
    smartLists: true,
    // 优化列表输出，这个填写ture之后，你的样式会好看很多，所以建议设置成ture
    smartypants: false,
    // 高亮显示规则 ，这里我们将使用highlight.js来完成
    highlight: function (code) {
      // 添加code高亮显示
      return highlight_js__WEBPACK_IMPORTED_MODULE_10___default.a.highlightAuto(code).value;
    }
  });
  const tocify = new _components_TOC_tocify_tsx__WEBPACK_IMPORTED_MODULE_16__["default"]();

  renderer.heading = function (text, level, raw) {
    const anchor = tocify.add(text, level);
    return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>`;
  };

  const contentHTML = marked__WEBPACK_IMPORTED_MODULE_9___default()(markdown);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, "Detailed")), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }), __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default.a, {
    className: "common-main",
    type: "flex",
    justify: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: "common-left",
    xs: 24,
    sm: 24,
    md: 16,
    lg: 18,
    xl: 14,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }, __jsx(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: "bread-div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }, __jsx(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: undefined
  }, __jsx("a", {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }, "\u9996\u9875")), __jsx(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }, __jsx("a", {
    href: "/list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }, "\u5217\u8868\u9875")), __jsx(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }, article.title)), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: undefined
  }, __jsx("div", {
    className: "detail-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  }, article.title), __jsx("div", {
    className: "list-icon center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: undefined
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: undefined
  }, __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
    type: "calendar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }), " ", article.browseTimes), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: undefined
  }, __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
    type: "folder",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: undefined
  }), " ", article.intruduction), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: undefined
  }, __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
    type: "fire",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: undefined
  }), " ", `${article.browseTimes}人`)), __jsx("div", {
    className: "detail-content",
    dangerouslySetInnerHTML: {
      __html: contentHTML
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  }))), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: "common-right",
    xs: 0,
    sm: 0,
    md: 7,
    lg: 5,
    xl: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: undefined
  }, __jsx(_components_Author__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: undefined
  }), markdown && __jsx(antd_lib_affix__WEBPACK_IMPORTED_MODULE_1___default.a, {
    offsetTop: 7,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: undefined
  }, __jsx("div", {
    className: "detail-nav common-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: undefined
  }, __jsx("div", {
    className: "nav-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: undefined
  }, "\u6587\u7AE0\u76EE\u5F55"), __jsx("div", {
    className: "toc-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: undefined
  }, tocify && tocify.render()))))), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: undefined
  }));
};

Detailed.getInitialProps = async props => {
  const {
    query: {
      id = ""
    }
  } = props;
  const {
    data: article = {}
  } = await axios__WEBPACK_IMPORTED_MODULE_8___default.a.get(`${_constant_api__WEBPACK_IMPORTED_MODULE_17__["default"].getDetail}${id}`);
  return {
    article
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Detailed);

/***/ }),

/***/ "./public/style/components/author.css":
/*!********************************************!*\
  !*** ./public/style/components/author.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/style/components/footer.css":
/*!********************************************!*\
  !*** ./public/style/components/footer.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/style/components/header.css":
/*!********************************************!*\
  !*** ./public/style/components/header.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/style/pages/detail.css":
/*!***************************************!*\
  !*** ./public/style/pages/detail.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 5:
/*!*******************************!*\
  !*** multi ./pages/detail.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/zhaokh/Project/blog/font_end/pages/detail.js */"./pages/detail.js");


/***/ }),

/***/ "antd/lib/affix":
/*!*********************************!*\
  !*** external "antd/lib/affix" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/affix");

/***/ }),

/***/ "antd/lib/anchor":
/*!**********************************!*\
  !*** external "antd/lib/anchor" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/anchor");

/***/ }),

/***/ "antd/lib/avatar":
/*!**********************************!*\
  !*** external "antd/lib/avatar" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/avatar");

/***/ }),

/***/ "antd/lib/breadcrumb":
/*!**************************************!*\
  !*** external "antd/lib/breadcrumb" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/breadcrumb");

/***/ }),

/***/ "antd/lib/col":
/*!*******************************!*\
  !*** external "antd/lib/col" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ }),

/***/ "antd/lib/divider":
/*!***********************************!*\
  !*** external "antd/lib/divider" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/divider");

/***/ }),

/***/ "antd/lib/icon":
/*!********************************!*\
  !*** external "antd/lib/icon" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon");

/***/ }),

/***/ "antd/lib/menu":
/*!********************************!*\
  !*** external "antd/lib/menu" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu");

/***/ }),

/***/ "antd/lib/row":
/*!*******************************!*\
  !*** external "antd/lib/row" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/row");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "highlight.js":
/*!*******************************!*\
  !*** external "highlight.js" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("highlight.js");

/***/ }),

/***/ "highlight.js/lib/languages/javascript":
/*!********************************************************!*\
  !*** external "highlight.js/lib/languages/javascript" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("highlight.js/lib/languages/javascript");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "marked":
/*!*************************!*\
  !*** external "marked" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("marked");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=detail.js.map