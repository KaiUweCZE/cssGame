import React, { useContext } from "react";
import "./roadmap-styles.css";
import { mapBG } from "../../data/imagesData";
import { UserContext } from "../../contexts/UserContext";
import RoadmapLevel from "./road-map-components/RoadmapLevel";
import { useSetLevel } from "@utils/useSetLevel";

const ROADMAP_LEVELS = [
  { num: 1, specialClass: "one" },
  { num: 2, specialClass: "two" },
  { num: 3, specialClass: "three" },
  { num: 4, specialClass: "four" },
  { num: 5, specialClass: "five" },
  { num: 6, specialClass: "six" },
  { num: 7, specialClass: "seven" },
  { num: 8, specialClass: "eight" },
  { num: 9, specialClass: "nine" },
  { num: 10, specialClass: "ten" },
  { num: 11, specialClass: "eleven" },
  { num: 12, specialClass: "twelve" },
  { num: 13, specialClass: "thirteen" },
  { num: 14, specialClass: "fourteen" },
  { num: 15, specialClass: "fifteen" },
  { num: 16, specialClass: "sixteen" },
  { num: 17, specialClass: "seventeen" },
  { num: 18, specialClass: "eighteen" },
  { num: 19, specialClass: "nineteen" },
  { num: 20, specialClass: "twenty" },
  { num: 21, specialClass: "twenty-one" },
];

const RoadMap = () => {
  const { user } = useContext(UserContext);
  const level = user.level;
  const { toLevel } = useSetLevel();

  return (
    <div
      className="roadmap-background"
      role="main"
      aria-label="Game level selection map"
    >
      <img src={mapBG} alt="roadmap" className="roadmap-background-img" />
      <div className="roadmap" role="navigation" aria-label="Level selection">
        {ROADMAP_LEVELS.map((levelData) => (
          <RoadmapLevel
            key={levelData.num}
            onClick={() => toLevel(levelData.num)}
            specialClass={levelData.specialClass}
            num={levelData.num}
            level={level}
            locked={level < levelData.num - 1}
            current={level === levelData.num}
            completed={level > levelData.num}
          />
        ))}
      </div>
    </div>
  );
};

export default RoadMap;
