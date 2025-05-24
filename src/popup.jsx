import React from "react";
import {styles} from "./popup.module.css"

const Popup = ({ setShow, className, shadow = true, shadowColor = "rgba(0,0,0,0.4)" , children }) => {

  return (
    <div className={styles.popupParent}>
      {shadow && (
        <div
          className={styles.shadow}
          style={{
            backgroundColor: shadowColor
          }}
        ></div>
      )}
      <div className={className} style={{ zIndex: "901" }}>
        {children}
      </div>
    </div>
  );
};

export default Popup;
