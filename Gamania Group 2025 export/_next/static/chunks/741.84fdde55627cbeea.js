"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[741],{

/***/ 2741:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var _classCallCheck = __webpack_require__(3227);

var _createClass = __webpack_require__(8361);

var _inherits = __webpack_require__(5971);

var _possibleConstructorReturn = __webpack_require__(2715);

var _getPrototypeOf = __webpack_require__(1193);

var _regeneratorRuntime = __webpack_require__(7794);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "AppInitialProps", ({
  enumerable: true,
  get: function get() {
    return _utils.AppInitialProps;
  }
}));
Object.defineProperty(exports, "NextWebVitalsMetric", ({
  enumerable: true,
  get: function get() {
    return _utils.NextWebVitalsMetric;
  }
}));
Object.defineProperty(exports, "AppType", ({
  enumerable: true,
  get: function get() {
    return _utils.AppType;
  }
}));
exports["default"] = void 0;

var _async_to_generator = (__webpack_require__(932)/* ["default"] */ .Z);

var _interop_require_default = (__webpack_require__(2648)/* ["default"] */ .Z);

var _react = _interop_require_default(__webpack_require__(7294));

var _utils = __webpack_require__(9475);

function appGetInitialProps(_) {
  return _appGetInitialProps.apply(this, arguments);
}

function _appGetInitialProps() {
  _appGetInitialProps =
  /**
  * `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
  * This allows for keeping state between navigation, custom error handling, injecting additional data.
  */
  _async_to_generator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(_ref) {
    var Component, ctx, pageProps;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            Component = _ref.Component, ctx = _ref.ctx;
            _context.next = 3;
            return (0, _utils).loadGetInitialProps(Component, ctx);

          case 3:
            pageProps = _context.sent;
            return _context.abrupt("return", {
              pageProps: pageProps
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _appGetInitialProps.apply(this, arguments);
}

var _Component;

var App = /*#__PURE__*/function (_Component2) {
  _inherits(App, _Component2);

  var _super = _createSuper(App);

  function App() {
    _classCallCheck(this, App);

    return _super.apply(this, arguments);
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      return /*#__PURE__*/_react["default"].createElement(Component, Object.assign({}, pageProps));
    }
  }]);

  return App;
}(_Component = _react["default"].Component);

App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
exports["default"] = App;

/***/ })

}]);