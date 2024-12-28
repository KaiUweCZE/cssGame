import React, { useState } from "react";
import { lockIcon } from "../../../data/ImagesData";

const RoadmapLevel = ({ locked, specialClass, onClick, num, current, completed }) => {
  const [active, setActive] = useState(false);

  const handleActiveClass = () => {
    setActive(true);
    setTimeout(() => {
      setActive(false);
    }, 1000);
  };

  const getAriaLabel = () => {
    if (locked) return `Level ${num} - Locked. Complete previous level to unlock`;
    if (current) return `Level ${num} - Current level`;
    if (completed) return `Level ${num} - Completed`;
    return `Level ${num} - Available to play`;
  };

  return (
    <>
      {locked ? (
        <div
          className={
            active
              ? `roadmap__item locked active ${specialClass}`
              : `roadmap__item locked ${specialClass}`
          }
          onClick={() => handleActiveClass()}
          role="button"
          aria-label={getAriaLabel()}
          aria-disabled="true"
          tabIndex={0}
        >
          <img src={lockIcon} alt="" aria-hidden="true" />
        </div>
      ) : (
        <div
          className={`roadmap__item ${specialClass}`}
          onClick={onClick}
          role="button"
          aria-label={getAriaLabel()}
          tabIndex={0}
        >
          <span aria-hidden="true">{num}</span>
        </div>
      )}
    </>
  );
};

export default RoadmapLevel;
