import React from "react";

const Popup = ({
  setShow,
  className,
  shadow = true,
  shadowColor = "rgba(0,0,0,0.4)",
  children,
}) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {shadow && (
        <div
          onClick={() => setShow(false)}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 900,
            backgroundColor: shadowColor,
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
