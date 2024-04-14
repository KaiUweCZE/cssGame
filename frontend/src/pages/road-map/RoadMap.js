import React, { useState, useContext } from "react";
import "./roadmap-styles.css";
import { mapBG } from "../../data/ImagesData";
import { UserContext } from "../../contexts/UserContext";
import RoadmapLevel from "./road-map-components/RoadmapLevel";
import { useSetLevel } from "@utils/useSetLevel";

const RoadMap = () => {
  const { user } = useContext(UserContext);
  const level = user.level;

  const { nextLevel } = useSetLevel();

  return (
    <div
      className="roadmap__background"
      style={{ backgroundImage: `url(${mapBG})` }}
    >
      <div className="roadmap">
        <RoadmapLevel
          onClick={() => nextLevel(1)}
          specialClass="one"
          num={1}
          level={level}
          locked={level < 0 ? true : false}
        />
        <RoadmapLevel
          onClick={() => nextLevel(2)}
          specialClass="two"
          num={2}
          level={level}
          locked={level < 1 ? true : false}
        />
        <RoadmapLevel
          onClick={() => nextLevel(3)}
          specialClass="three"
          num={3}
          level={level}
          locked={level < 2 ? true : false}
        />
        <RoadmapLevel
          onClick={() => nextLevel(4)}
          specialClass="four"
          num={4}
          level={level}
          locked={level < 3 ? true : false}
        />
        <RoadmapLevel
          onClick={() => nextLevel(5)}
          specialClass="five"
          num={5}
          level={level}
          locked={level < 4 ? true : false}
        />
        <RoadmapLevel
          onClick={() => nextLevel(6)}
          specialClass="six"
          num={6}
          level={level}
          locked={level < 5 ? true : false}
        />
        <RoadmapLevel
          onClick={() => nextLevel(7)}
          specialClass="seven"
          num={7}
          level={level}
          locked={level < 6 ? true : false}
        />
        <RoadmapLevel
          onClick={() => nextLevel(8)}
          specialClass="eight"
          num={8}
          level={level}
          locked={level < 7 ? true : false}
        />
        <RoadmapLevel
          onClick={() => nextLevel(9)}
          specialClass="nine"
          num={9}
          level={level}
          locked={level < 8 ? true : false}
        />
        <RoadmapLevel
          onClick={() => nextLevel(10)}
          specialClass="ten"
          num={10}
          level={level}
          locked={level < 9 ? true : false}
        />
        <RoadmapLevel
          onClick={() => nextLevel(11)}
          specialClass="eleven"
          num={11}
          level={level}
          locked={level < 10 ? true : false}
        />
        <RoadmapLevel
          onClick={() => nextLevel(12)}
          specialClass="twelve"
          num={12}
          level={level}
          locked={level < 11 ? true : false}
        />
        <RoadmapLevel
          onClick={() => nextLevel(13)}
          specialClass="thirteen"
          num={13}
          level={level}
          locked={level < 12 ? true : false}
        />
        <RoadmapLevel
          onClick={() => nextLevel(14)}
          specialClass="fourteen"
          num={14}
          level={level}
          locked={level < 13 ? true : false}
        />
        <RoadmapLevel
          onClick={() => nextLevel(15)}
          specialClass="fifteen"
          num={15}
          level={level}
          locked={level < 14 ? true : false}
        />
        <RoadmapLevel
          onClick={() => nextLevel(16)}
          specialClass="sixteen"
          num={16}
          level={level}
          locked={level < 15 ? true : false}
        />
        <RoadmapLevel
          onClick={() => nextLevel(17)}
          specialClass="seventeen"
          num={17}
          level={level}
          locked={level < 16 ? true : false}
        />
        <RoadmapLevel
          onClick={() => nextLevel(18)}
          specialClass="eighteen"
          num={18}
          level={level}
          locked={level < 17 ? true : false}
        />
        <RoadmapLevel
          onClick={() => nextLevel(19)}
          specialClass="nineteen"
          num={19}
          level={level}
          locked={level < 18 ? true : false}
        />
        <RoadmapLevel
          onClick={() => nextLevel(20)}
          specialClass="twenty"
          num={20}
          level={level}
          locked={level < 19 ? true : false}
        />
        <RoadmapLevel
          onClick={() => nextLevel(21)}
          specialClass="twenty-one"
          num={21}
          level={level}
          locked={level < 20 ? true : false}
        />
      </div>
    </div>
  );
};

export default RoadMap;
