import React from "react";
import ReactDOM from "react-dom";

export const Portals = () => {
  return ReactDOM.createPortal(
    <h1>This Will Show In Portal Id Div</h1>,
    document.getElementById("portal")
  );
};
