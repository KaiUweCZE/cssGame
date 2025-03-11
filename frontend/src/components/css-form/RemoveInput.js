import { minusIcon } from "@/data/imagesData";
import { MinusCircle } from "lucide-react";
import React from "react";

const RemoveInput = (props) => {
  return (
    <>
      {props.index > 0 && (
        <MinusCircle
          className="icon"
          width={20}
          onClick={() => {
            props.removeInput(props.index), props.removeLabel(props.index);
          }}
        />
      )}
    </>
  );
};

export default RemoveInput;
