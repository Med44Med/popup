import React from "react";
import "./style.css";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Popup = ({
  setShow,
  className,
  shadow = true,
  shadowColor = "rgba(0,0,0,0.4)",
  children
}) => {
  return /*#__PURE__*/_jsxs("div", {
    className: "popupParent",
    children: [shadow && /*#__PURE__*/_jsx("div", {
      className: "shadow",
      style: {
        backgroundColor: shadowColor
      }
    }), /*#__PURE__*/_jsx("div", {
      className: className,
      style: {
        zIndex: "901"
      },
      children: children
    })]
  });
};
export default Popup;