import React, { useContext } from "react";
import { BuildingFormContext } from "@contexts/building-contexts/buildingForm";
import CustomBridge from "@components/CustomBridge";
import useSetStyle from "@utils/hooks/useSetStyle";

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
    <div className="BuildingArea">
      <CustomBridge containerStyle={containerStyle} bridgeStyle={bridgeStyle} />
    </div>
  );
};

export default BuildingArea;
