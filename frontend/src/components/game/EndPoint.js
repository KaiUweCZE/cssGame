import React, { useContext } from "react";
import { enviromentImages } from "@data/ImagesData";
import { LevelContext } from "@contexts/form-contexts/levelContext";
import EnemyEmoji from "@components/emojis/EnemyEmojis";

// last part of playground component
const EndPoint = ({ mode = "" }) => {
  const { level } = useContext(LevelContext);

  const specificStyle = {
    // main texture of component
    backgroundImage: `url(${enviromentImages.dirt})`,
    ...level?.endPointStyle,
  };
  const lawnStyle = {
    // texture on the top of the component
    backgroundImage: `url(${enviromentImages.lawn})`,
  };

  return (
    <div
      className="end"
      style={
        mode !== "custom"
          ? specificStyle
          : { backgroundImage: `url(${enviromentImages.dirt})` }
      }
    >
      <div className="lawn" style={lawnStyle}></div>
      {level.enemy && mode === "game" ? <EnemyEmoji level={level.id} /> : ""}
      {level && mode !== "custom" && (
        <span className="actual-level">Actual level: {level.id}</span>
      )}
    </div>
  );
};

export default EndPoint;
