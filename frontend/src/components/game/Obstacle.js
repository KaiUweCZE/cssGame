import React from "react";
import { stoneImg } from "@/data/imagesData";

const Obstacle = () => {
  return (
    <img className="obstacle" src={stoneImg} alt="Stone obstacle in the game" />
  );
};

export default Obstacle;
