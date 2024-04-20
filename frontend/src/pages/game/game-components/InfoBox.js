import { LevelContext } from "@contexts/form-contexts/levelContext";
import React, { useContext, useEffect } from "react";

const InfoBox = () => {
  const { level } = useContext(LevelContext);
  useEffect(() => {
    console.log(level.help);
  }, [level]);
  return (
    <div className="info-box">
      <p>{level?.help}</p>
    </div>
  );
};

export default InfoBox;
