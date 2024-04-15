import CustomFormBridge from "@pages/database/CustomFormBridge";
import CustomFormContainer from "@pages/database/CustomFormContainer";
import React from "react";
import BuildingFormBridge from "./BuildingFormBridge";

const ResolveLevel = () => {
  return (
    <div className="wrapper-custom-form">
      <BuildingFormBridge name="bridge" position="building-bridge-form" />
    </div>
  );
};

export default ResolveLevel;
