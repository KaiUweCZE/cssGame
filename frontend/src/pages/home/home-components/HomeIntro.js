import React, { useEffect, useState } from "react";
import { homeIntro } from "../data";
import Signals from "./Signals";
import next from "@images/icons/nextIcon.svg";
import prev from "@images/icons/prevIcon.svg";

const HomeIntro = () => {
  const [index, setIndex] = useState(0);
  const [prevImage, setPrevImage] = useState();
  const [cssClass, setCssClass] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const timing = 500;
  const imgWidth = 810;
  const imgHeight = 460;

  const data = homeIntro;

  useEffect(() => {
    data.forEach((item) => {
      const img = new Image();
      img.src = item.img;
    });
  }, []);

  const images = [
    {
      element: (
        <img
          className={`current-image ${cssClass}`}
          src={data[0].img}
          alt={data[0].headline}
          width={imgWidth}
          height={imgHeight}
          style={{ aspectRatio: "894/444" }}
        />
      ),
    },
    {
      element: (
        <img
          className={`current-image ${cssClass}`}
          src={data[1].img}
          alt={data[1].headline}
          width={imgWidth}
          height={imgHeight}
          style={{ aspectRatio: "810/460" }}
        />
      ),
    },
    {
      element: (
        <img
          className={`current-image ${cssClass}`}
          src={data[2].img}
          alt={data[2].headline}
          width={imgWidth}
          height={imgHeight}
          style={{ aspectRatio: "810/460" }}
        />
      ),
    },
    {
      element: (
        <img
          className={`current-image ${cssClass}`}
          src={data[3].img}
          alt={data[3].headline}
          width={imgWidth}
          height={imgHeight}
          style={{ aspectRatio: "810/460" }}
        />
      ),
    },
  ];

  const handleNext = () => {
    setIsLoading(true);
    setPrevImage(
      <img
        className="prev-image"
        src={data[index].img}
        width={imgWidth}
        height={imgHeight}
      />
    );
    setCssClass("next");
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
    setTimeout(() => {
      setCssClass("");
      setIsLoading(false);
    }, timing);
  };

  const handlePrev = () => {
    setIsLoading(true);
    setPrevImage(
      <img
        className="prev-image"
        src={data[index].img}
        width={imgWidth}
        height={imgHeight}
      />
    );
    setCssClass("prev");
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);

    setTimeout(() => {
      setCssClass("");
      setIsLoading(false);
    }, timing);
  };
  return (
    <section className="home-intro" aria-label="Introduction slideshow">
      <div className="home-intro-gallery">
        {images[index].element}
        {prevImage && prevImage}

        <button
          className="intro-arrow"
          onClick={handleNext}
          disabled={isLoading}
          aria-label="Next slide"
        >
          <img className="right-arrow" src={next} alt="arrow to the right" />
        </button>
        <button
          className="intro-arrow"
          onClick={handlePrev}
          disabled={isLoading}
          aria-label="Previous slide"
        >
          <img className="left-arrow" src={prev} alt="arrow to the left" />
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

export default HomeIntro;
