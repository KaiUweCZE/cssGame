import React from "react";
import { stoneImg } from "@/data/imagesData";

const Obstacle = ({ obstacleStyle }) => {
  return (
    <img
      className={obstacleStyle}
      src={stoneImg}
      alt="Stone obstacle in the game"
    />
  );
};

export default Obstacle;
