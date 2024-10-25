import React from "react";
import styles from "../profile-styles.module.css";

const UserLevelNav = ({
  goToNextPage,
  goToPrevPage,
  currentPage,
  totalPages,
}) => {
  return (
    <nav className={styles.navigation}>
      <div className={styles.buttonBox}>
        <button className={styles.buttonPage} onClick={goToPrevPage}>
          <span>prev</span>
        </button>
        <span
          className={styles.actualPage}
        >{`${currentPage} / ${totalPages}`}</span>
        <button className={styles.buttonPage} onClick={goToNextPage}>
          <span>next</span>
        </button>
      </div>
    </nav>
  );
};

export default UserLevelNav;
