import React from "react";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Popup = ({
  setShow,
  className,
  shadow = true,
  shadowColor = "rgba(0,0,0,0.4)",
  children
}) => {
  return /*#__PURE__*/_jsxs("div", {
    style: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    children: [shadow && /*#__PURE__*/_jsx("div", {
      onClick: () => setShow(false),
      style: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 900,
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