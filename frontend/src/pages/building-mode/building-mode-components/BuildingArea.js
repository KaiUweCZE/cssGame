import React, { useContext } from "react";
import { BuildingFormContext } from "@contexts/building-contexts/buildingForm";
import CustomBridge from "@components/CustomBridge";
import useSetStyle from "@/hooks/useSetStyle";

const BuildingArea = () => {
  const {
    valuesBridge,
    propertiesBridge,
    valuesContainer,
    propertiesContainer,
  } = useContext(BuildingFormContext);
  const bridgeStyle = propertiesBridge
    ? useSetStyle(propertiesBridge, valuesBridge)
    : "";
  const containerStyle = propertiesContainer
    ? useSetStyle(propertiesContainer, valuesContainer)
    : "";

  return (
    <div 
      className="building-area" 
      role="region" 
      aria-label="Interactive building preview area"
    >
      <CustomBridge containerStyle={containerStyle} bridgeStyle={bridgeStyle} />
    </div>
  );
};

export default BuildingArea;
