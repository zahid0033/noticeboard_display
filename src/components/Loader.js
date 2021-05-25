import React from "react";
import "./loader.scss";
const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div class="lds-ripple">
        <div></div>
        <div></div>
      </div>
      <h1 style={{ color: "#1b2845ff", fontSize: "5vh" }}>Loading</h1>
    </div>
  );
};

export default Loader;
