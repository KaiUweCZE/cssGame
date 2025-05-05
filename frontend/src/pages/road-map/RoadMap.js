import React, { useContext } from "react";
import "./roadmap-styles.css";
import { mapBG } from "../../data/imagesData";
import { UserContext } from "../../contexts/UserContext";
import RoadmapLevel from "./road-map-components/RoadmapLevel";
import { useSetLevel } from "@utils/useSetLevel";

const ROADMAP_LEVELS = [
  { num: 1, specialClass: "one", module: "module-box-model" },
  { num: 2, specialClass: "two", module: "module-box-model" },
  { num: 3, specialClass: "three", module: "module-box-model" },
  { num: 4, specialClass: "four", module: "module-box-model" },
  { num: 5, specialClass: "five", module: "module-box-model" },
  { num: 6, specialClass: "six", module: "module-position" },
  { num: 7, specialClass: "seven", module: "module-position" },
  { num: 8, specialClass: "eight", module: "module-position" },
  { num: 9, specialClass: "nine", module: "module-position" },
  { num: 10, specialClass: "ten", module: "module-position" },
  { num: 11, specialClass: "eleven", module: "module-position" },
  { num: 12, specialClass: "twelve", module: "module-flex" },
  { num: 13, specialClass: "thirteen", module: "module-flex" },
  { num: 14, specialClass: "fourteen", module: "module-flex" },
  { num: 15, specialClass: "fifteen", module: "module-flex" },
  { num: 16, specialClass: "sixteen", module: "module-flex" },
  { num: 17, specialClass: "seventeen", module: "module-flex" },
  { num: 18, specialClass: "eighteen", module: "module-grid" },
  { num: 19, specialClass: "nineteen", module: "module-grid" },
  { num: 20, specialClass: "twenty", module: "module-grid" },
  { num: 21, specialClass: "twenty-one", module: "module-grid" },
  { num: 22, specialClass: "twenty-two", module: "module-grid" },
  { num: 23, specialClass: "twenty-three", module: "module-grid" },
  { num: 24, specialClass: "twenty-four", module: "module-grid" },
  { num: 25, specialClass: "twenty-five", module: "module-others" },
  { num: 26, specialClass: "twenty-six", module: "module-others" },
  // { num: 27, specialClass: "twenty-seven", module: "module-others" },
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
            module={levelData.module}
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
