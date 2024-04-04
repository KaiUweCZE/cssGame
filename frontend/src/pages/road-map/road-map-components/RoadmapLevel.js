import React, { useState } from "react";
import { lockIcon } from "../../../data/ImagesData";

const RoadmapLevel = (props) => {
  const [active, setActive] = useState(false);

  const handleActiveClass = () => {
    setActive(true);
    setTimeout(() => {
      setActive(false);
    }, 1000);
  };
  return (
    <>
      {props.locked ? (
        <figcaption
          className={
            active
              ? `roadmap__item locked active ${props.specialClass}`
              : `roadmap__item locked ${props.specialClass}`
          }
          onClick={() => handleActiveClass()}
        >
          <img src={lockIcon} alt="" />
        </figcaption>
      ) : (
        <div
          className={`roadmap__item ${props.specialClass}`}
          onClick={props.onClick}
        >
          <span>{props.num}</span>
        </div>
      )}
    </>
  );
};

export default RoadmapLevel;
