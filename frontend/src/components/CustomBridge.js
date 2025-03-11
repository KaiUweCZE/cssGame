import { barkTexture } from "@/data/imagesData";
import React, { useRef, useEffect, useContext } from "react";
import OneBridgeElement from "./bridge-components/OneBridgeElement";
import StartPoint from "./game/StartPoint";
import River from "./game/River";
import EndPoint from "./game/EndPoint";
import CheckPoint from "./bridge-components/CheckPoint";
import { customCommonContext } from "@contexts/building-contexts/customCommonContext";
import useCompletedLevel from "@utils/queries/useCompletedLevel";
import { UserContext } from "@contexts/UserContext";

const CustomBridge = (props) => {
  const checkRef = useRef(null);
  const bridgeRef = useRef(null);
  const { change, setResult, levelId } = useContext(customCommonContext);
  const { user } = useContext(UserContext);
  const { completeLevel, error, loading } = useCompletedLevel();

  useEffect(() => {
    if (change > 0) {
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
          setResult(true);
          completeLevel(user.id, levelId);
        } else {
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
