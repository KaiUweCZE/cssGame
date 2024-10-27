import React from "react";
import styles from "../../profile-styles.module.css";

const UserLevelHeader = () => {
  return (
    <li className={styles.header}>
      <span className={styles.firstSpan}>Levels</span>{" "}
      <div className={styles.levelStats}>
        <span>Likes</span> <span>Finished/Played</span>
      </div>
    </li>
  );
};

export default UserLevelHeader;
