import React, { useContext } from "react";
import BuildingFormBridge from "./BuildingFormBridge";
import BuildingFormContainer from "./BuildingFormContainer";
import { CircleX } from "lucide-react";

const ResolveLevel = ({ setStyled }) => {
  return (
    <div 
      className="wrapper-resolver-form" 
      role="dialog" 
      aria-label="Level solution form"
    >
      <CircleX 
        className="resolver-close" 
        onClick={() => setStyled(false)}
        role="button"
        tabIndex="0"
        aria-label="Close solution form"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            setStyled(false);
          }
        }}
      />
      <BuildingFormBridge name="bridge" />
      <BuildingFormContainer name="container" />
    </div>
  );
};

export default ResolveLevel;
