import React, { useEffect, useState } from "react";
import "@styles/clouds.css";
import cloud1 from "@images/clouds/cloud1.webp";
import cloud2 from "@images/clouds/cloud2.webp";
import cloud3 from "@images/clouds/cloud3.webp";
import cloud4 from "@images/clouds/cloud4.webp";
import cloud5 from "@images/clouds/cloud5.webp";

const Clouds = () => {
  const [position, setPosition] = useState({
    cloud1: { top: 0, left: 5, width: 32 },
    cloud2: { top: 0, left: 5, width: 32 },
    cloud3: { top: 0, left: 5, width: 32 },
    cloud4: { top: 0, left: 5, width: 32 },
    cloud5: { top: 0, left: 5, width: 32 },
  });

  const clouds = [cloud1, cloud2, cloud3, cloud4, cloud5];
  const time = 50000;

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prevPosition) => ({
        cloud1: {
          top: Math.ceil(Math.random() * 7) + Math.random(),
          left: Math.ceil(Math.random() * 10),
          width: Math.ceil(Math.random() * 7) + 30,
        },
        cloud2: {
          top: Math.ceil(Math.random() * 7) + Math.random(),
          left: Math.ceil(Math.random() * 10),
          width: Math.ceil(Math.random() * 7) + 30,
        },
        cloud3: {
          top: Math.ceil(Math.random() * 7) + Math.random(),
          left: Math.ceil(Math.random() * 10),
          width: Math.ceil(Math.random() * 7) + 30,
        },
        cloud4: {
          top: Math.ceil(Math.random() * 7) + Math.random(),
          left: Math.ceil(Math.random() * 10),
          width: Math.ceil(Math.random() * 7) + 30,
        },
        cloud5: {
          top: Math.ceil(Math.random() * 7) + Math.random(),
          left: Math.ceil(Math.random() * 10),
          width: Math.ceil(Math.random() * 7) + 30,
        },
      }));
      console.log(position);
    }, time);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <>
      <div className="background-clouds">
        <img
          src={clouds[0]}
          alt="cloud in the background"
          style={{
            top: `${position.cloud1.top}rem`,
            left: `${position.cloud1.left}rem`,
            width: `${position.cloud1.width}vw`,
          }}
        />
        <img
          src={clouds[1]}
          alt="cloud in the background"
          style={{
            top: `${position.cloud2.top}rem`,
            left: `${position.cloud2.left}rem`,
            width: `${position.cloud2.width}vw`,
          }}
        />
        <img
          src={clouds[2]}
          alt="cloud in the background"
          style={{
            top: `${position.cloud3.top}rem`,
            left: `${position.cloud3.left}rem`,
            width: `${position.cloud3.width}vw`,
          }}
        />
      </div>
      <div className="background-clouds-second">
        <img
          src={clouds[1]}
          alt="cloud in the background"
          style={{
            top: `${position.cloud2.top}rem`,
            left: `${position.cloud4.left}rem`,
            width: `${position.cloud4.width}vw`,
          }}
        />
        <img
          src={clouds[0]}
          alt="cloud in the background"
          style={{
            top: `${position.cloud4.top}rem`,
            left: `${position.cloud5.left}rem`,
            width: `${position.cloud5.width}vw`,
          }}
        />
        <img
          src={clouds[4]}
          alt="cloud in the background"
          style={{
            top: `${position.cloud5.top}rem`,
            left: `${position.cloud4.left}rem`,
            width: `${position.cloud3.width}vw`,
          }}
        />
      </div>
    </>
  );
};

export default Clouds;
