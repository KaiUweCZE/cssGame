import React from "react";
import StartPoint from "../../../components/StartPoint";
import CrossRoad from "./CrossRoad";
import EndPoint from "@components/EndPoint";
import MainEmoji from "@components/Emojis/MainEmoji";
import ResultMessage from "../../../components/ResultMessage";

const PlayGround = () => {
  return (
    <div className="container-playground">
      <StartPoint />
      <CrossRoad />
      <EndPoint mode="game" />
      <MainEmoji />
      <ResultMessage />
    </div>
  );
};

export default PlayGround;
