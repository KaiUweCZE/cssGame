import React from "react";
import styles from "./styles.module.css";

const PlayedLevelsHeader = () => {
  return (
    <header className={styles.header}>
      <ul>
        <li>Levels</li>
        <div className={styles.centered}>
          <li>Authors</li>
          <li>Status</li>
        </div>
      </ul>
    </header>
  );
};

export default PlayedLevelsHeader;
