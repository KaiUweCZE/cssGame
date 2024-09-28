import React, { useState } from "react";
import { homeIntro } from "../data";
import Signals from "./Signals";
import next from "@images/icons/nextIcon.svg";
import prev from "@images/icons/prevIcon.svg";

const HomeIntrodaction = () => {
  const [index, setIndex] = useState(0);
  const [prevImage, setPrevImage] = useState();
  const [cssClass, setCssClass] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const timing = 500;
  const data = homeIntro;

  const images = [
    {
      element: (
        <img className={`current-image ${cssClass}`} src={data[0].img} />
      ),
    },
    {
      element: (
        <img className={`current-image ${cssClass}`} src={data[1].img} />
      ),
    },
    {
      element: (
        <img className={`current-image ${cssClass}`} src={data[2].img} />
      ),
    },
    {
      element: (
        <img className={`current-image ${cssClass}`} src={data[3].img} />
      ),
    },
  ];

  const handleNext = () => {
    setIsLoading(true);
    setPrevImage(
      <img className="prev-image" src={data[index].img} width="894px" />
    );
    if (index < 3) {
      setCssClass("next");
      setIndex(() => index + 1);
      setTimeout(() => {
        setCssClass("");
      }, timing);
    } else {
      setCssClass("next");
      setIndex(() => 0);
      setTimeout(() => {
        setCssClass("");
      }, timing);
    }
    setTimeout(() => setIsLoading(false), timing);
  };

  const handlePrev = () => {
    setIsLoading(true);
    setPrevImage(
      <img className="prev-image" src={data[index].img} width="894px" />
    );
    if (index > 0) {
      setCssClass("prev");
      setIndex(() => index - 1);
      setTimeout(() => {
        setCssClass("");
      }, timing);
    } else {
      setCssClass("prev");
      setIndex(() => 3);
      setTimeout(() => {
        setCssClass("");
      }, timing);
    }
    setTimeout(() => setIsLoading(false), timing);
  };
  return (
    <section className="home-intro">
      <div className="home-intro-gallery">
        {images[index].element}
        {prevImage && prevImage}
        <button className="right" onClick={handleNext} disabled={isLoading}>
          <img src={next} alt="" />
        </button>
        <button className="left" onClick={handlePrev} disabled={isLoading}>
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
