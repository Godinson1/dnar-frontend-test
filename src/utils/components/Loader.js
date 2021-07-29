import React from "react";
import "./util.scss";

const Loader = () => {
  return (
    <div className="load">
      <div className="lds-grid">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
