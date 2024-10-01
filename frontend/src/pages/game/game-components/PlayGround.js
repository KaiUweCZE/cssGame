import React from "react";
import StartPoint from "../../../components/StartPoint";
import CrossRoad from "./CrossRoad";
import EndPoint from "@components/EndPoint";
import MainEmoji from "@components/Emojis/MainEmoji";
import MessageResult from "@/components/MessageResult";

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
