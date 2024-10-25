import React, { Suspense, useContext, useState } from "react";
import { ProfileContext } from "../context/ProfileContext";
import styles from "../profile-styles.module.css";
import SkeletonLoader from "./SkeletonLoader";
import UserLevelNav from "./UserLevelNav";
import UserLevelHeader from "./UserLevelHeader";
import CurrentLevels from "./CurrentLevels";

const UsersLevels = ({ levels }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isShowed, setIsShowed] = useState({ index: 0, active: false });
  const levelsPerPage = 5;
  const context = useContext(ProfileContext);
  const indexOfLastLevel = currentPage * levelsPerPage;
  const indexOfFirstLevel = indexOfLastLevel - levelsPerPage;
  const currentLevels = levels.slice(indexOfFirstLevel, indexOfLastLevel);

  const totalPages = Math.ceil(levels.length / levelsPerPage);

  const goToNextPage = () => {
    setIsShowed({ index: 0, active: false });
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const goToPrevPage = () => {
    setIsShowed({ index: 0, active: false });
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div>
      <h2>Your levels</h2>
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
