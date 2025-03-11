import { CheckContext } from "@contexts/form-contexts/checkContext";
import { playIcon, playIconAfter, plusIcon } from "@/data/imagesData";
import React, { useContext, useState } from "react";
import pinIcon from "@/assets/images/icons/pin.webp";
import pinFillIcon from "@/assets/images/icons/pin-fill.webp";
import { PlusCircle, PlusCircleIcon } from "lucide-react";

const CssFormBoxButtons = (props) => {
  const [icon, setIcon] = useState(playIcon);
  const context = useContext(CheckContext);
  const { checkedBoxes, setCheckedBoxes } = context;
  const [active, setActive] = useState(false);

  const handleCheck = () => {
    if (!checkedBoxes.includes(props.name)) {
      setCheckedBoxes((prev) => [...prev, props.name]);
    }
  };
  return (
    <div className="box-buttons">
      {!props.stop && (
        <PlusCircle
          className="plus-icon"
          width={20}
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
        <img className="play-icon" src={icon} />
      </button>
      <div className={active ? "checkbox active" : "checkbox"}>
        <input
          type="checkbox"
          onChange={handleCheck}
          onClick={() => setActive(!active)}
        />
        <span className="checkmark"></span>
        {active ? (
          <img
            className="pin active"
            src={pinFillIcon}
            alt="pin icon"
            height="16px"
            width="16px"
          />
        ) : (
          <img
            className="pin"
            src={pinIcon}
            alt="pin icon"
            height="16px"
            width="16px"
          />
        )}
        <span className="checkbox-label">always include</span>
      </div>
    </div>
  );
};

export default CssFormBoxButtons;
