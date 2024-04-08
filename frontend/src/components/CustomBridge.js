import { barkTexture } from "@data/ImagesData";
import React from "react";
import OneBridgeElement from "./bridge-components/OneBridgeElement";
import StartPoint from "./StartPoint";
import River from "./River";
import EndPoint from "./EndPoint";
import CheckPoint from "./bridge-components/CheckPoint";

const CustomBridge = (props) => {
  return (
    <>
      <div className="container-bridge" style={props?.containerStyle}>
        <OneBridgeElement background={barkTexture} style={props?.bridgeStyle} />
      </div>
      <StartPoint />
      <CheckPoint parts={1} custom={true} />
      <River />
      <EndPoint mode="custom" />
    </>
  );
};

export default CustomBridge;
