import React from "react";
import StartPoint from "@components/game/StartPoint";
import CrossRoad from "./CrossRoad";
import EndPoint from "@components/game/EndPoint";
import MainEmoji from "@components/emojis/MainEmoji";

const PlayGround = () => {
  return (
    <div className="container-playground">
      <StartPoint />
      <CrossRoad />
      <EndPoint mode="game" />
      <MainEmoji />
    </div>
  );
};

export default PlayGround;
