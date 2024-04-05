import { useTypingEffect } from "@utils/useTypingEffect";
import React from "react";

const IntroSlide = (props) => {
  const resultText = useTypingEffect(props.paragraph, 5);

  const handleId = () => {
    if (props.slideId >= 4) {
      window.location = "map";
    } else {
      props.func((prev) => prev + 1);
    }
  };
  return (
    <section
      className="intro-background"
      style={{ backgroundImage: `url(${props.background})` }}
    >
      <article className={props.position !== "" ? props.position : ""}>
        <h2>{props.headline}</h2>
        <p>{resultText}</p>
        <button className="button-next" onClick={() => handleId()}>
          next
        </button>
      </article>
    </section>
  );
};

export default IntroSlide;
