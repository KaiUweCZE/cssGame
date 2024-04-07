import { playIcon, playIconAfter, plusIcon } from "@data/ImagesData";
import React, { useState } from "react";

const CssFormBoxButtons = (props) => {
  const [icon, setIcon] = useState(playIcon);

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
        <img src={icon} />
      </button>
    </div>
  );
};

export default CssFormBoxButtons;
