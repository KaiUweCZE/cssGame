import React, { useState } from "react";
import Mission from "./Mission";
import "@styles/game-styles.css";
import AsideBox from "@components/AsideBox";
import heroBackground from "@images/game-aside.webp";
import InfoBox from "./InfoBox";

const Background = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="container-background">
      <Mission />
      <AsideBox background={heroBackground}>
        <div
          className="emoji-master emojiOne"
          onClick={() => setActive(!active)}
        >
          <span>help</span>
        </div>
        {active ? <InfoBox /> : null}
      </AsideBox>
    </div>
  );
};

export default Background;
