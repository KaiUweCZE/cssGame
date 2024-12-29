import { customCommonContext } from "@contexts/building-contexts/customCommonContext";
import React, { useContext, useState } from "react";

const BuildingRadio = (props) => {
  const [select, setSelect] = useState(4);
  const { setResult } = useContext(customCommonContext);
  const handleSelect = (e) => {
    setResult(false);
    const selectedValue = Number(e);
    setSelect(() => selectedValue);
    props.maximumNumber(selectedValue);
  };
  return (
    <div 
      className="radio-container" 
      role="group" 
      aria-labelledby="input-count-label"
    >
      <label id="input-count-label">How many inputs the user can use for styling?</label>
      <div className="radio-box">
        <label className={select === 1 ? "active" : ""}>
          <input
            type="radio"
            name="number"
            value="1"
            onClick={(e) => handleSelect(e.target.value)}
            checked={select === 1}
            aria-label="1 input"
          />{" "}
          1
        </label>
        <label className={select === 2 ? "active" : ""}>
          <input
            type="radio"
            name="number"
            value="2"
            onClick={(e) => handleSelect(e.target.value)}
            checked={select === 2}
            aria-label="2 inputs"
          />{" "}
          2
        </label>
        <label className={select === 3 ? "active" : ""}>
          <input
            type="radio"
            name="number"
            value="3"
            onClick={(e) => handleSelect(e.target.value)}
            checked={select === 3}
            aria-label="3 inputs"
          />{" "}
          3
        </label>
        <label className={select === 4 ? "active" : ""}>
          <input
            type="radio"
            name="number"
            value="4"
            onClick={(e) => handleSelect(e.target.value)}
            checked={select === 4}
            aria-label="4 inputs"
          />{" "}
          4
        </label>
      </div>
    </div>
  );
};

export default BuildingRadio;
