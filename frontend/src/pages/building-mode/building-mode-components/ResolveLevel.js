import React, { useContext } from "react";
import BuildingFormBridge from "./BuildingFormBridge";
import BuildingFormContainer from "./BuildingFormContainer";
import { CircleX } from "lucide-react";

const ResolveLevel = ({ setStyled }) => {
  return (
    <div className="wrapper-resolver-form">
      <CircleX className="resolver-close" onClick={() => setStyled(false)} />
      <BuildingFormBridge name="bridge" />
      <BuildingFormContainer name="container" />
    </div>
  );
};

export default ResolveLevel;
