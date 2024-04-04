import React from "react";
import StartPoint from "../../../components/StartPoint";
import CrossRoad from "../../../components/CrossRoad";
import EndPoint from "../../../components/EndPoint";
import MainEmoji from "../../../components/emojis/MainEmoji";
import ResultMessage from "../../../components/ResultMessage";
import GuideEmoji from "../../../components/emojis/GuideEmoji";
import EnemyEmoji from "../../../components/emojis/EnemyEmojis";

const PlayGround = () => {
  return (
    <div className="container-playground">
      <StartPoint />
      <CrossRoad />
      <EndPoint />
      <MainEmoji />
      <ResultMessage />
    </div>
  );
};

export default PlayGround;
