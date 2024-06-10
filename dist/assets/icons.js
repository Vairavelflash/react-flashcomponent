"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RightTurnIcon = exports.ExpandMoreIcon = exports.CustomColorIcon = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ExpandMoreIcon = () => {
  return /*#__PURE__*/_react.default.createElement("svg", {
    width: "8",
    height: "6",
    viewBox: "0 0 8 6",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M3.99871 5.22481L0.229492 1.45561L0.848709 0.836395L3.99871 3.9864L7.14871 0.836395L7.76792 1.45561L3.99871 5.22481Z",
    fill: "#1C1B1F"
  }));
};
exports.ExpandMoreIcon = ExpandMoreIcon;
const CustomColorIcon = () => {
  return /*#__PURE__*/_react.default.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("rect", {
    x: "1",
    y: "1",
    width: "16",
    height: "16",
    rx: "4",
    fill: "url(#paint0_angular_1238_62518)"
  }), /*#__PURE__*/_react.default.createElement("rect", {
    x: "1",
    y: "1",
    width: "16",
    height: "16",
    rx: "4",
    stroke: "#F5F5F5"
  }), /*#__PURE__*/_react.default.createElement("defs", null, /*#__PURE__*/_react.default.createElement("radialGradient", {
    id: "paint0_angular_1238_62518",
    cx: "0",
    cy: "0",
    r: "1",
    gradientUnits: "userSpaceOnUse",
    gradientTransform: "translate(9 9) rotate(46.0051) scale(20.1556)"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    "stop-color": "#FF0000"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: "0.24",
    "stop-color": "#FFFF00"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: "0.5",
    "stop-color": "#00FFFF"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: "0.755",
    "stop-color": "#8000FF"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: "1",
    "stop-color": "#FF0000"
  }))));
};
exports.CustomColorIcon = CustomColorIcon;
const RightTurnIcon = () => {
  return /*#__PURE__*/_react.default.createElement("svg", {
    width: "9",
    height: "9",
    viewBox: "0 0 9 9",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M0.136719 0.333425V5.68984C0.136719 6.0848 0.26708 6.41302 0.527803 6.67451C0.788536 6.93601 1.11584 7.06676 1.50972 7.06676H6.60594L5.50595 8.16676L6.1944 8.85522L8.4662 6.58342L6.1944 4.31163L5.50595 5.00009L6.60594 6.10009H1.50972C1.39006 6.10009 1.29177 6.06163 1.21485 5.98471C1.13793 5.90779 1.09947 5.8095 1.09947 5.68984V0.333425H0.136719Z",
    fill: "#1C1B1F"
  }));
};
exports.RightTurnIcon = RightTurnIcon;