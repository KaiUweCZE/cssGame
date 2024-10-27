import React from "react";
import styles from "./styles.module.css";
import checkIcon from "@images/icons/checkmark.webp";
import notIcon from "@images/icons/not.webp";

const PlayedLevelsList = ({ currentPage, levels, completedLeveles }) => {
  return (
    <ul className={styles.levelList}>
      {levels.map((level, index) => (
        <li key={level.id} className={styles.item}>
          <span>
            {currentPage * 5 - 5 + index + 1}. {level.name}
          </span>
          <div className={styles.centered}>
            <span>{level.author}</span>
            {completedLeveles.includes(level.id) ? (
              <div className={styles.status}>
                <img
                  src={checkIcon}
                  alt="check mark icon"
                  width={16}
                  height={16}
                />
                <span>Completed</span>
              </div>
            ) : (
              <div className={styles.status}>
                <img
                  src={notIcon}
                  alt="check mark icon"
                  width={16}
                  height={16}
                />
                <span>In progress...</span>
              </div>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PlayedLevelsList;
