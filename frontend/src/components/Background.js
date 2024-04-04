import React from "react";
import Mission from "./Mission";
import "@styles/gameStyles.css";
import AsideBox from "./AsideBox";
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
