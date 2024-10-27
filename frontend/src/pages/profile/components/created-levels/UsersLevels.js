import React, { Suspense, useContext, useState } from "react";
import { ProfileContext } from "../../context/ProfileContext";
import styles from "../../profile-styles.module.css";
import SkeletonLoader from "../SkeletonProfileBox";
import UserLevelNav from "../UserLevelNav";
import UserLevelHeader from "./UserLevelHeader";
import CurrentLevels from "./CurrentLevels";
import useNavigateToPage from "../../hooks/useNavigateToPage";

const UsersLevels = ({ levels }) => {
  const {
    isShowed,
    setIsShowed,
    currentPage,
    setCurrentPage,
    goToNextPage,
    goToPrevPage,
    levelsPerPage,
    currentLevels,
    totalPages,
  } = useNavigateToPage(levels);
  const context = useContext(ProfileContext);

  return (
    <div className={styles.wrapper}>
      <h2>Created Levels</h2>
      <section className={styles.containerLevels}>
        <ul className={styles.pageList}>
          <UserLevelHeader />
          <CurrentLevels
            isShowed={isShowed}
            setIsShowed={setIsShowed}
            levels={currentLevels}
            pagination={currentPage * levelsPerPage - 5}
          />
        </ul>
        <UserLevelNav
          goToNextPage={goToNextPage}
          goToPrevPage={goToPrevPage}
          totalPages={totalPages}
          currentPage={currentPage}
        />
      </section>
    </div>
  );
};

export default UsersLevels;
