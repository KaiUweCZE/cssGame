import { LevelContext } from "@contexts/form-contexts/levelContext";
import React, { useContext } from "react";

const InfoBox = () => {
  const { level } = useContext(LevelContext);

  return (
    <div className="info-box">
      <p>{level?.help}</p>
    </div>
  );
};

export default InfoBox;
