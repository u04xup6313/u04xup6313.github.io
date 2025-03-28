(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[820,651],{

/***/ 9651:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(3227);

var _createClass = __webpack_require__(8361);

var _inherits = __webpack_require__(5971);

var _possibleConstructorReturn = __webpack_require__(2715);

var _getPrototypeOf = __webpack_require__(1193);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _interop_require_default = (__webpack_require__(2648)/* ["default"] */ .Z);

var _react = _interop_require_default(__webpack_require__(7294));

var _head = _interop_require_default(__webpack_require__(2717));

var statusCodes = {
  400: 'Bad Request',
  404: 'This page could not be found',
  405: 'Method Not Allowed',
  500: 'Internal Server Error'
};

function _getInitialProps(_ref) {
  var res = _ref.res,
      err = _ref.err;
  var statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode: statusCode
  };
}

var styles = {
  error: {
    fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
    height: '100vh',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  desc: {
    display: 'inline-block',
    textAlign: 'left',
    lineHeight: '49px',
    height: '49px',
    verticalAlign: 'middle'
  },
  h1: {
    display: 'inline-block',
    margin: 0,
    marginRight: '20px',
    padding: '0 23px 0 0',
    fontSize: '24px',
    fontWeight: 500,
    verticalAlign: 'top',
    lineHeight: '49px'
  },
  h2: {
    fontSize: '14px',
    fontWeight: 'normal',
    lineHeight: '49px',
    margin: 0,
    padding: 0
  }
};

var _Component;

var Error = /*#__PURE__*/function (_Component2) {
  _inherits(Error, _Component2);

  var _super = _createSuper(Error);

  function Error() {
    _classCallCheck(this, Error);

    return _super.apply(this, arguments);
  }

  _createClass(Error, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          statusCode = _this$props.statusCode,
          _this$props$withDarkM = _this$props.withDarkMode,
          withDarkMode = _this$props$withDarkM === void 0 ? true : _this$props$withDarkM;
      var title = this.props.title || statusCodes[statusCode] || 'An unexpected error has occurred';
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: styles.error
      }, /*#__PURE__*/_react["default"].createElement(_head["default"], null, /*#__PURE__*/_react["default"].createElement("title", null, statusCode ? "".concat(statusCode, ": ").concat(title) : 'Application error: a client-side exception has occurred')), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("style", {
        dangerouslySetInnerHTML: {
          __html: "\n                body { margin: 0; color: #000; background: #fff; }\n                .next-error-h1 {\n                  border-right: 1px solid rgba(0, 0, 0, .3);\n                }\n\n                ".concat(withDarkMode ? "@media (prefers-color-scheme: dark) {\n                  body { color: #fff; background: #000; }\n                  .next-error-h1 {\n                    border-right: 1px solid rgba(255, 255, 255, .3);\n                  }\n                }" : '')
        }
      }), statusCode ? /*#__PURE__*/_react["default"].createElement("h1", {
        className: "next-error-h1",
        style: styles.h1
      }, statusCode) : null, /*#__PURE__*/_react["default"].createElement("div", {
        style: styles.desc
      }, /*#__PURE__*/_react["default"].createElement("h2", {
        style: styles.h2
      }, this.props.title || statusCode ? title : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Application error: a client-side exception has occurred (see the browser console for more information)"), "."))));
    }
  }]);

  return Error;
}(_Component = _react["default"].Component);

Error.displayName = 'ErrorPage';
Error.getInitialProps = _getInitialProps;
Error.origGetInitialProps = _getInitialProps;
exports["default"] = Error;

/***/ }),

/***/ 8000:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.AmpStateContext = void 0;

var _interop_require_default = (__webpack_require__(2648)/* ["default"] */ .Z);

var _react = _interop_require_default(__webpack_require__(7294));

var AmpStateContext = _react["default"].createContext({});

exports.AmpStateContext = AmpStateContext;

if (false) {}

/***/ }),

/***/ 9470:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.isInAmpMode = isInAmpMode;

function isInAmpMode() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$ampFirst = _ref.ampFirst,
      ampFirst = _ref$ampFirst === void 0 ? false : _ref$ampFirst,
      _ref$hybrid = _ref.hybrid,
      hybrid = _ref$hybrid === void 0 ? false : _ref$hybrid,
      _ref$hasQuery = _ref.hasQuery,
      hasQuery = _ref$hasQuery === void 0 ? false : _ref$hasQuery;

  return ampFirst || hybrid && hasQuery;
}

/***/ }),

/***/ 2717:
/***/ (function(module, exports, __webpack_require__) {

"client";
"use strict";

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.defaultHead = defaultHead;
exports["default"] = void 0;

var _extends = (__webpack_require__(6495)/* ["default"] */ .Z);

var _interop_require_default = (__webpack_require__(2648)/* ["default"] */ .Z);

var _interop_require_wildcard = (__webpack_require__(1598)/* ["default"] */ .Z);

var _react = _interop_require_wildcard(__webpack_require__(7294));

var _sideEffect = _interop_require_default(__webpack_require__(1585));

var _ampContext = __webpack_require__(8000);

var _headManagerContext = __webpack_require__(5850);

var _ampMode = __webpack_require__(9470);

var _utils = __webpack_require__(9475);

'client';

function defaultHead() {
  var inAmpMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var head = [/*#__PURE__*/_react["default"].createElement("meta", {
    charSet: "utf-8"
  })];

  if (!inAmpMode) {
    head.push( /*#__PURE__*/_react["default"].createElement("meta", {
      name: "viewport",
      content: "width=device-width"
    }));
  }

  return head;
}

function onlyReactElement(list, child) {
  // React children can be "string" or "number" in this case we ignore them for backwards compat
  if (typeof child === 'string' || typeof child === 'number') {
    return list;
  } // Adds support for React.Fragment


  if (child.type === _react["default"].Fragment) {
    return list.concat(_react["default"].Children.toArray(child.props.children).reduce(function (fragmentList, fragmentChild) {
      if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
        return fragmentList;
      }

      return fragmentList.concat(fragmentChild);
    }, []));
  }

  return list.concat(child);
}

var METATYPES = ['name', 'httpEquiv', 'charSet', 'itemProp'];
/*
 returns a function for filtering head child elements
 which shouldn't be duplicated, like <title/>
 Also adds support for deduplicated `key` properties
*/

function unique() {
  var keys = new Set();
  var tags = new Set();
  var metaTypes = new Set();
  var metaCategories = {};
  return function (h) {
    var isUnique = true;
    var hasKey = false;

    if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
      hasKey = true;
      var key = h.key.slice(h.key.indexOf('$') + 1);

      if (keys.has(key)) {
        isUnique = false;
      } else {
        keys.add(key);
      }
    } // eslint-disable-next-line default-case


    switch (h.type) {
      case 'title':
      case 'base':
        if (tags.has(h.type)) {
          isUnique = false;
        } else {
          tags.add(h.type);
        }

        break;

      case 'meta':
        for (var i = 0, len = METATYPES.length; i < len; i++) {
          var metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === 'charSet') {
            if (metaTypes.has(metatype)) {
              isUnique = false;
            } else {
              metaTypes.add(metatype);
            }
          } else {
            var category = h.props[metatype];
            var categories = metaCategories[metatype] || new Set();

            if ((metatype !== 'name' || !hasKey) && categories.has(category)) {
              isUnique = false;
            } else {
              categories.add(category);
              metaCategories[metatype] = categories;
            }
          }
        }

        break;
    }

    return isUnique;
  };
}
/**
 *
 * @param headChildrenElements List of children of <Head>
 */


function reduceComponents(headChildrenElements, props) {
  var inAmpMode = props.inAmpMode;
  return headChildrenElements.reduce(onlyReactElement, []).reverse().concat(defaultHead(inAmpMode).reverse()).filter(unique()).reverse().map(function (c, i) {
    var key = c.key || i;

    if ( true && !inAmpMode) {
      if (c.type === 'link' && c.props['href'] && // TODO(prateekbh@): Replace this with const from `constants` when the tree shaking works.
      ['https://fonts.googleapis.com/css', 'https://use.typekit.net/'].some(function (url) {
        return c.props['href'].startsWith(url);
      })) {
        var newProps = _extends({}, c.props || {});

        newProps['data-href'] = newProps['href'];
        newProps['href'] = undefined; // Add this attribute to make it easy to identify optimized tags

        newProps['data-optimized-fonts'] = true;
        return /*#__PURE__*/_react["default"].cloneElement(c, newProps);
      }
    }

    if (false) { var srcMessage; }

    return /*#__PURE__*/_react["default"].cloneElement(c, {
      key: key
    });
  });
}
/**
 * This component injects elements to `<head>` of your page.
 * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
 */


function Head(_ref) {
  var children = _ref.children;
  var ampState = (0, _react).useContext(_ampContext.AmpStateContext);
  var headManager = (0, _react).useContext(_headManagerContext.HeadManagerContext);
  return /*#__PURE__*/_react["default"].createElement(_sideEffect["default"], {
    reduceComponentsToState: reduceComponents,
    headManager: headManager,
    inAmpMode: (0, _ampMode).isInAmpMode(ampState)
  }, children);
}

var _default = Head;
exports["default"] = _default;

if ((typeof exports["default"] === 'function' || typeof exports["default"] === 'object' && exports["default"] !== null) && typeof exports["default"].__esModule === 'undefined') {
  Object.defineProperty(exports["default"], '__esModule', {
    value: true
  });
  Object.assign(exports["default"], exports);
  module.exports = exports["default"];
}

/***/ }),

/***/ 1585:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = SideEffect;

var _interop_require_wildcard = (__webpack_require__(1598)/* ["default"] */ .Z);

var _react = _interop_require_wildcard(__webpack_require__(7294));

function SideEffect(props) {
  var headManager = props.headManager,
      reduceComponentsToState = props.reduceComponentsToState;

  function emitChange() {
    if (headManager && headManager.mountedInstances) {
      var headElements = _react.Children.toArray(Array.from(headManager.mountedInstances).filter(Boolean));

      headManager.updateHead(reduceComponentsToState(headElements, props));
    }
  }

  if (isServer) {
    var ref;
    headManager == null ? void 0 : (ref = headManager.mountedInstances) == null ? void 0 : ref.add(props.children);
    emitChange();
  }

  useClientOnlyLayoutEffect(function () {
    var ref1;
    headManager == null ? void 0 : (ref1 = headManager.mountedInstances) == null ? void 0 : ref1.add(props.children);
    return function () {
      var ref;
      headManager == null ? void 0 : (ref = headManager.mountedInstances) == null ? void 0 : ref["delete"](props.children);
    };
  }); // We need to call `updateHead` method whenever the `SideEffect` is trigger in all
  // life-cycles: mount, update, unmount. However, if there are multiple `SideEffect`s
  // being rendered, we only trigger the method from the last one.
  // This is ensured by keeping the last unflushed `updateHead` in the `_pendingUpdate`
  // singleton in the layout effect pass, and actually trigger it in the effect pass.

  useClientOnlyLayoutEffect(function () {
    if (headManager) {
      headManager._pendingUpdate = emitChange;
    }

    return function () {
      if (headManager) {
        headManager._pendingUpdate = emitChange;
      }
    };
  });
  useClientOnlyEffect(function () {
    if (headManager && headManager._pendingUpdate) {
      headManager._pendingUpdate();

      headManager._pendingUpdate = null;
    }

    return function () {
      if (headManager && headManager._pendingUpdate) {
        headManager._pendingUpdate();

        headManager._pendingUpdate = null;
      }
    };
  });
  return null;
}

var isServer = false;
var useClientOnlyLayoutEffect = isServer ? function () {} : _react.useLayoutEffect;
var useClientOnlyEffect = isServer ? function () {} : _react.useEffect;

/***/ }),

/***/ 1981:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/_error",
      function () {
        return __webpack_require__(9651);
      }
    ]);
    if(false) {}
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [888], function() { return __webpack_exec__(1981); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);