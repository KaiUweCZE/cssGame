import React, { useContext, useEffect, useState } from "react";
import River from "../River";
import StartPoint from "../StartPoint";
import EndPoint from "../EndPoint";
import OneBridgeElement from "../BridgeComponents/OneBridgeElement";
import { barkTexture } from "../../data/ImagesData";
import { BuildingFormContext } from "../../contexts/BuildingContexts";

const BuildingArea = () => {
  const { valuesBridge, propertiesBridge } = useContext(BuildingFormContext);
  const [bridgeStyle, setBridgeStyle] = useState({});

  useEffect(() => {
    const newStyle = propertiesBridge.reduce((acc, property, index) => {
      acc[property] = valuesBridge[index];
      return acc;
    }, {});
    setBridgeStyle(newStyle);
  }, [propertiesBridge, valuesBridge]);
  console.log(bridgeStyle);

  return (
    <div className="BuildingArea">
      <div className="container-bridge">
        <OneBridgeElement background={barkTexture} style={bridgeStyle} />
      </div>
      <StartPoint />
      <River />
      <EndPoint />
    </div>
  );
};

export default BuildingArea;
