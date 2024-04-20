import React from "react";
import BuildingFormBridge from "./BuildingFormBridge";
import BuildingFormContainer from "./BuildingFormContainer";

const ResolveLevel = () => {
  return (
    <div className="wrapper-resolver-form">
      <BuildingFormBridge name="bridge" />
      <BuildingFormContainer name="container" />
    </div>
  );
};

export default ResolveLevel;
