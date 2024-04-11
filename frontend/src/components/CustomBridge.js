import { barkTexture } from "@data/ImagesData";
import React, { useRef, useEffect, useContext } from "react";
import OneBridgeElement from "./bridge-components/OneBridgeElement";
import StartPoint from "./StartPoint";
import River from "./River";
import EndPoint from "./EndPoint";
import CheckPoint from "./bridge-components/CheckPoint";
import { customCommonContext } from "@contexts/building-contexts/customCommonContext";

const CustomBridge = (props) => {
  const checkRef = useRef(null);
  const bridgeRef = useRef(null);
  const { change, setResult } = useContext(customCommonContext);

  useEffect(() => {
    if (change > 0) {
      if (checkRef.current && bridgeRef.current) {
        console.log("Checkpoint: ", checkRef.current.getBoundingClientRect());
        console.log("Bridge: ", bridgeRef.current.getBoundingClientRect());
      }
      const checkPosition = () => {
        const tolerance = 2;
        const bridgeRect = bridgeRef.current.getBoundingClientRect();
        const checkRect = checkRef.current.getBoundingClientRect();
        const isLeftCorrect =
          Math.abs(bridgeRect.left - checkRect.left) < tolerance;
        const isRightCorrect =
          Math.abs(bridgeRect.right - checkRect.right) < tolerance;
        const isTopCorrect =
          Math.abs(bridgeRect.top - checkRect.top) < tolerance;
        if (isLeftCorrect && isRightCorrect && isTopCorrect) {
          console.log("Yes");
          setResult(true);
        } else {
          console.log("no");
          setResult(false);
        }
      };
      checkPosition();
    }
  }, [change]);

  return (
    <>
      <div className="container-bridge" style={props?.containerStyle}>
        <OneBridgeElement
          add={bridgeRef}
          background={barkTexture}
          style={props?.bridgeStyle}
        />
      </div>
      <StartPoint />
      <CheckPoint addRef={checkRef} parts={1} custom={true} />
      <River />
      <EndPoint mode="custom" />
    </>
  );
};

export default CustomBridge;
