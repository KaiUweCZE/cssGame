import React, { useState } from "react";
import styles from "../profile-styles.module.css";
import EditableContent from "./EditableContent";
import DeleteLevel from "./DeleteLevel";

const CurrentLevels = ({ levels, pagination, isShowed, setIsShowed }) => {
  const [activeDeleteBox, setActiveDeleteBox] = useState({
    active: false,
    index: 0,
  });
  const showContent = (index) => {
    if (isShowed.index === index) {
      setIsShowed((prev) => {
        return { index: index, active: !prev.active };
      });
    } else {
      setIsShowed((prev) => {
        return {
          index: index,
          active: true,
        };
      });
    }
    styles.deleteBox;
  };

  const handleDeleteBox = (index) => {
    setActiveDeleteBox((prev) => {
      if (prev.index === index) {
        return {
          active: !prev.active,
          index: index,
        };
      } else {
        return {
          active: true,
          index: index,
        };
      }
    });
  };

  return (
    <>
      {levels.map((level, index) => (
        <li key={level.name} className={styles.levelWrap}>
          <span className={styles.firstSpan}>
            {pagination + (index + 1)}. {level.name}
          </span>
          <div className={styles.levelStats}>
            <span>{level.likeCount}</span>
            <span>
              {level.finish}/{level.usersCount}
            </span>
            <div className={styles.buttons}>
              <button onClick={() => showContent(index + 1)}>
                <span>
                  {isShowed.index === index + 1 && isShowed.active
                    ? "hide"
                    : "more"}
                </span>
              </button>
              <button onClick={() => handleDeleteBox(index + 1)}>
                <span>delete</span>
              </button>
              <DeleteLevel
                levelId={level.id}
                active={activeDeleteBox}
                levelName={level.name}
                setActive={setActiveDeleteBox}
                specialClass={
                  activeDeleteBox.active && activeDeleteBox.index === index + 1
                }
              />
            </div>
          </div>
          <EditableContent
            description={level.description}
            isShowed={isShowed}
            index={index}
            levelId={level.id}
          />
        </li>
      ))}
    </>
  );
};

export default CurrentLevels;
