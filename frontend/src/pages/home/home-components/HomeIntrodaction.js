import React, { useState } from "react";
import { homeIntro } from "../data";
import Signals from "./Signals";
import next from "@images/icons/nextIcon.svg";
import prev from "@images/icons/prevIcon.svg";

const HomeIntrodaction = () => {
  const [index, setIndex] = useState(0);
  const data = homeIntro;

  const images = {
    0: <img src={data[0]} />,
    1: <img src={data[1]} />,
    2: <img src={data[2]} />,
    3: <img src={data[3]} />,
  };

  const handleNext = () => {
    if (index < 3) {
      setIndex(() => index + 1);
    } else {
      setIndex(() => 0);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex(() => index - 1);
    } else {
      setIndex(() => 3);
    }
  };
  return (
    <section className="home-intro">
      <div className="home-intro-gallery">
        <img src={data[index].img} alt="screen of the section" width="894px" />
        <button className="right" onClick={handleNext}>
          <img src={next} alt="" />
        </button>
        <button className="left" onClick={handlePrev}>
          <img src={prev} alt="" />
        </button>
        <Signals index={index} setIndex={setIndex} />
      </div>
      <article>
        <h3>{data[index].headline}</h3>
        <p>{data[index].description}</p>
      </article>
    </section>
  );
};

export default HomeIntrodaction;
