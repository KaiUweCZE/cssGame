import { CheckContext } from "@contexts/form-contexts/checkContext";
import { playIcon, playIconAfter, plusIcon } from "@data/ImagesData";
import React, { useContext, useState } from "react";

const CssFormBoxButtons = (props) => {
  const [icon, setIcon] = useState(playIcon);
  const context = useContext(CheckContext);
  const { checkedBoxes, setCheckedBoxes } = context;

  const handleCheck = () => {
    if (!checkedBoxes.includes(props.name)) {
      setCheckedBoxes((prev) => [...prev, props.name]);
    }
    console.log(checkedBoxes);
  };
  return (
    <div className="box-buttons">
      {props.stop ? (
        ""
      ) : (
        <img
          className="icon"
          src={plusIcon}
          alt=""
          onClick={() => {
            props.addInput(), props.addLabel();
          }}
        />
      )}
      <button
        className="play"
        onMouseLeave={() => setIcon(playIcon)}
        onMouseEnter={() => setIcon(playIconAfter)}
        type="submit"
      >
        <input type="checkbox" name="" id="" onChange={handleCheck} />
        <img src={icon} />
      </button>
    </div>
  );
};

export default CssFormBoxButtons;
