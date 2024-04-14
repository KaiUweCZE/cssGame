import React from "react";
import useScrollPosition from "@utils/hooks/useScrollPosition";
import background from "@images/edit/animation-background.webp";
import emojiImg from "@images/main-character.webp";
import trunkImg from "@images/plank.webp";

const AnimationBox = () => {
  const { scrollY } = useScrollPosition();
  return (
    <div
      className="animation"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className={scrollY > 600 ? "catchphrase active" : "catchphrase"}>
        <p>
          {".bridge {"} <br /> transform: rotate(90deg); <br /> {"}"}
        </p>
      </div>
      <img
        className={scrollY > 600 ? "emoji come-in" : "emoji"}
        src={emojiImg}
        alt="emoji character"
      />
      <img
        className={scrollY > 600 ? "trunk active" : "trunk"}
        src={trunkImg}
        alt="a trunk as a bridge"
      />
    </div>
  );
};

export default AnimationBox;
