import React, { useContext, useEffect, useState } from "react";
import River from "../River";
import StartPoint from "../StartPoint";
import EndPoint from "../EndPoint";
import OneBridgeElement from "../BridgeComponents/OneBridgeElement";
import { barkTexture } from "../../data/ImagesData";
import { BuildingFormContext } from "@contexts/building-contexts/buildingForm";

const BuildingArea = () => {
  const {
    valuesBridge,
    propertiesBridge,
    valuesContainer,
    propertiesContainer,
  } = useContext(BuildingFormContext);
  const [bridgeStyle, setBridgeStyle] = useState({});
  const [containerStyle, setContainerStyle] = useState({});

  useEffect(() => {
    const newBridgeStyle = propertiesBridge.reduce((acc, property, index) => {
      acc[property] = valuesBridge[index];
      return acc;
    }, {});
    setBridgeStyle(newBridgeStyle);
  }, [propertiesBridge, valuesBridge]);

  useEffect(() => {
    const newContainerStyle = propertiesContainer.reduce(
      (acc, property, index) => {
        acc[property] = valuesContainer[index];
        return acc;
      },
      {}
    );
    setContainerStyle(newContainerStyle);
  }, [propertiesContainer, valuesContainer]);

  return (
    <div className="BuildingArea">
      <div className="container-bridge" style={containerStyle}>
        <OneBridgeElement background={barkTexture} style={bridgeStyle} />
      </div>
      <StartPoint />
      <River />
      <EndPoint />
    </div>
  );
};

export default BuildingArea;
