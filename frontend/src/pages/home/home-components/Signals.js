import React from "react";

const Signals = ({ index, setIndex }) => {
  return (
    <div className="box-signals">
      <div
        className={index === 0 ? "active" : ""}
        onClick={() => setIndex(0)}
      ></div>
      <div
        className={index === 1 ? "active" : ""}
        onClick={() => setIndex(1)}
      ></div>
      <div
        className={index === 2 ? "active" : ""}
        onClick={() => setIndex(2)}
      ></div>
      <div
        className={index === 3 ? "active" : ""}
        onClick={() => setIndex(3)}
      ></div>
    </div>
  );
};

export default Signals;
