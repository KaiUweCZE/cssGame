import React, { useEffect, useState } from "react";
import "./new-styles.css";
import IntroSlide from "./IntroSlide";
import firstImg from "@images/firstScene.webp";
import { slideData } from "./data/slideData";
import Loader from "@components/Loader";

const Intro = () => {
  const [slideId, setSlideId] = useState(1);
  const data = slideData.find((e) => e.id === slideId);

  useEffect(() => {
    console.log(data);
  }, [slideData]);
  return (
    <main className="intro">
      {data ? (
        <IntroSlide
          background={data.image}
          headline={data.headline}
          paragraph={data.paragraph}
          func={setSlideId}
          slideId={slideId}
          position={data.position ? data.position : ""}
        />
      ) : (
        <Loader />
      )}
    </main>
  );
};

export default Intro;
