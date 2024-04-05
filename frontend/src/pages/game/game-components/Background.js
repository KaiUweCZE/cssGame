import React from "react";
import Mission from "./Mission";
import "@styles/game-styles.css";
import AsideBox from "../../../components/AsideBox";
import heroBackground from "@images/game-aside2.webp";
import emojiImg from "@images/emoji-item.webp";

const Background = () => {
  return (
    <div className="container-background">
      <Mission />
      <AsideBox background={heroBackground}>
        <div
          className="emoji-master emojiOne"
          style={{ backgroundImage: `url(${emojiImg})` }}
        ></div>
      </AsideBox>
    </div>
  );
};

export default Background;
