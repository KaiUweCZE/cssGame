import React, { useContext } from "react";
import River from "../River";
import StartPoint from "../StartPoint";
import EndPoint from "../EndPoint";
import OneBridgeElement from "../BridgeComponents/OneBridgeElement";
import { barkTexture } from "../../data/ImagesData";
import { BuildingFormContext } from "../../contexts/BuildingContexts";

const BuildingArea = () => {
  const { style } = useContext(BuildingFormContext);
  return (
    <div className="BuildingArea">
      <div className="container-bridge">
        <OneBridgeElement background={barkTexture} style={style} />
      </div>
      <StartPoint />
      <River />
      <EndPoint />
    </div>
  );
};

export default BuildingArea;
