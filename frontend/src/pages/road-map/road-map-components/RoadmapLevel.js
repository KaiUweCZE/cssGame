import React from "react";
import { lockIcon } from "../../../data/imagesData";

const RoadmapLevel = ({
  locked,
  specialClass,
  onClick,
  num,
  current,
  completed,
  module,
}) => {
  const getAriaLabel = () => {
    if (locked)
      return `Level ${num} - Locked. Complete previous level to unlock`;
    if (current) return `Level ${num} - Current level`;
    if (completed) return `Level ${num} - Completed`;
    return `Level ${num} - Available to play`;
  };

  return (
    <>
      {locked ? (
        <button
          className={`roadmap__item locked ${specialClass}`}
          disabled={locked}
          aria-label={getAriaLabel()}
          tabIndex={0}
        >
          <img src={lockIcon} alt="" aria-hidden="true" />
        </button>
      ) : (
        <button
          className={`roadmap__item ${module} ${specialClass}`}
          onClick={onClick}
          aria-label={getAriaLabel()}
          tabIndex={0}
        >
          <span aria-hidden="true">{num}</span>
        </button>
      )}
    </>
  );
};

export default RoadmapLevel;
