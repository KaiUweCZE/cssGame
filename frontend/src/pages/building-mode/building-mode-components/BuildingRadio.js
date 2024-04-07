import React, { useState } from "react";

const BuildingRadio = (props) => {
  const [select, setSelect] = useState(4);

  const handleSelect = (e) => {
    const selectedValue = Number(e);
    setSelect(() => selectedValue);
    props.maximumNumber(selectedValue);
  };
  return (
    <div className="radio-container">
      <label htmlFor="">How many inputs the user can use for styling?</label>
      <div className="radio-box">
        <label className={select === 1 ? "active" : ""}>
          <input
            type="radio"
            name="number"
            value="1"
            onClick={(e) => handleSelect(e.target.value)}
          />{" "}
          1
        </label>
        <label className={select === 2 ? "active" : ""}>
          <input
            type="radio"
            name="number"
            value="2"
            onClick={(e) => handleSelect(e.target.value)}
          />{" "}
          2
        </label>
        <label className={select === 3 ? "active" : ""}>
          <input
            type="radio"
            name="number"
            value="3"
            onClick={(e) => handleSelect(e.target.value)}
          />{" "}
          3
        </label>
        <label className={select === 4 ? "active" : ""}>
          <input
            type="radio"
            name="number"
            value="4"
            onClick={(e) => handleSelect(e.target.value)}
          />{" "}
          4
        </label>
      </div>
    </div>
  );
};

export default BuildingRadio;
