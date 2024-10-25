import { LevelContext } from "@contexts/form-contexts/levelContext";
import React, { useContext } from "react";

const InfoBox = ({ active }) => {
  const { level } = useContext(LevelContext);

  return (
    <div className={active ? "info-box active" : "info-box "}>
      <p>{level?.help}</p>
    </div>
  );
};

export default InfoBox;
