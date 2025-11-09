#!/usr/bin/env node
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _react = _interopRequireDefault(require("react"));
var _child_process = require("child_process");
var _ink = require("ink");
var _inkSpinner = _interopRequireDefault(require("ink-spinner"));
var _commander = _interopRequireDefault(require("commander"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var _console = console,
  log = _console.log;
var VERSION = require('../package.json').version;
var JMDictParser = /*#__PURE__*/function (_React$Component) {
  function JMDictParser(props) {
    var _this;
    _classCallCheck(this, JMDictParser);
    _this = _callSuper(this, JMDictParser, [props]);
    _this.state = {
      complete: false,
      started: false,
      outputFilename: ''
    };
    return _this;
  }
  _inherits(JMDictParser, _React$Component);
  return _createClass(JMDictParser, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      _commander["default"].version(VERSION, '-v, --version').arguments('<file>').action(function (file) {
        _this2.setState({
          started: true
        });
        _this2.state.outputFilename = "".concat(file, ".json");
        (0, _child_process.execFile)('node', ["".concat(__dirname, "/parser.js"), file], function (error) {
          if (error) {
            log(error);
            process.exit(1);
          } else {
            _this2.setState({
              complete: true
            });
          }
        });
      });
      _commander["default"].parse(process.argv);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var complete = this.state.complete;
      if (complete) {
        process.exit(0);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
        complete = _this$state.complete,
        outputFilename = _this$state.outputFilename,
        started = _this$state.started;
      return complete ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_ink.Color, {
        green: true,
        bold: true
      }, "Complete!"), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_ink.Color, {
        cyan: true
      }, "Your JSON file is saved at"), outputFilename)) : started && /*#__PURE__*/_react["default"].createElement(_ink.Color, {
        green: true
      }, /*#__PURE__*/_react["default"].createElement(_inkSpinner["default"], {
        green: true
      }), ' ', /*#__PURE__*/_react["default"].createElement(_ink.Color, {
        gray: true,
        bold: true
      }, "Parsing", ' ', /*#__PURE__*/_react["default"].createElement(_inkSpinner["default"], {
        type: "simpleDots"
      })));
    }
  }]);
}(_react["default"].Component);
(0, _ink.render)(/*#__PURE__*/_react["default"].createElement(JMDictParser, null));