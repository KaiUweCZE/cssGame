import React from "react";
import BuildingFormBridge from "./BuildingFormBridge";
import BuildingFormContainer from "./BuildingFormContainer";

const ResolveLevel = () => {
  return (
    <div className="wrapper-resolver-form">
      <BuildingFormBridge name="bridge" position="building-bridge-form" />
      <BuildingFormContainer name="container" />
    </div>
  );
};

export default ResolveLevel;
