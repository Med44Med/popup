import React from "react";
import "./style.css";

const Popup = ({ setShow, className, shadow = true, shadowColor = "rgba(0,0,0,0.4)" , children }) => {

  return (
    <div className="popupParent">
      {shadow && (
        <div
          className="shadow"
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
