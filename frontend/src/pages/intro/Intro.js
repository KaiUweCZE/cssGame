import React, { useEffect, useState } from "react";
import "./intro-styles.css";
import IntroSlide from "./IntroSlide";
import firstImg from "@images/firstScene.webp";
import { slideData } from "./data/slideData";
import Loader from "@components/Loader";
import useWindowSize from "@utils/hooks/useWindowSize";

const Intro = () => {
  const [slideId, setSlideId] = useState(1);
  const data = slideData.find((e) => e.id === slideId);
  const windowSize = useWindowSize();

  return (
    <main className="intro">
      {data ? (
        <IntroSlide
          background={
            windowSize?.width > windowSize?.height
              ? data.image
              : data?.mobileImage
          }
          headline={data.headline}
          paragraph={data.paragraph}
          func={setSlideId}
          slideId={slideId}
          position={data.position ? data.position : ""}
          classPortrait={
            windowSize?.width > windowSize?.height ? "" : "portrait"
          }
        />
      ) : (
        <Loader />
      )}
    </main>
  );
};

export default Intro;
