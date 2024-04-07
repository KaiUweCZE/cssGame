import { minusIcon } from "@data/ImagesData";
import React from "react";

const RemoveInput = (props) => {
  return (
    <>
      {props.index > 0 ? (
        <img
          className="icon"
          onClick={() => {
            props.removeInput(props.index), props.removeLabel(props.index);
          }}
          src={minusIcon}
          alt=""
        />
      ) : (
        ""
      )}
    </>
  );
};

export default RemoveInput;
