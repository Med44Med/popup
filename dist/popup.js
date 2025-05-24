import React from "react";
import styles from "./popup.module.css";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Popup = ({
  setShow,
  className,
  shadow = true,
  shadowColor = "rgba(0,0,0,0.4)",
  children
}) => {
  return /*#__PURE__*/_jsxs("div", {
    className: styles.popupParent,
    children: [shadow && /*#__PURE__*/_jsx("div", {
      className: styles.shadow,
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