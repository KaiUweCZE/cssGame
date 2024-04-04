import React from "react";
import Mission from "./Mission";
import "@styles/game-styles.css";
import AsideBox from "../../../components/AsideBox";
import heroBackground from "@images/waterfalls.webp";

const Background = () => {
  return (
    <div className="container-background">
      <Mission />
      <AsideBox background={heroBackground}></AsideBox>
    </div>
  );
};

export default Background;
