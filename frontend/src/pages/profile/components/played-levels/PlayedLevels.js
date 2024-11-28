import React, { Suspense } from "react";
import useGetPlayedLevels from "../../hooks/useGetPlayedLevels";
import styles from "./styles.module.css";
import PlayedLevelsHeader from "./PlayedLevelsHeader";
import UserLevelNav from "../UserLevelNav";
import useNavigateToPage from "../../hooks/useNavigateToPage";
import PlayedLevelsList from "./PlayedLevelsList";
import SkeletonProfileBox from "../SkeletonProfileBox";

const PlayedLevels = ({ userId, completedLevels }) => {
  const { user, levels, loading } = useGetPlayedLevels(userId);
  const {
    currentPage,

    goToNextPage,
    goToPrevPage,

    currentLevels,
    totalPages,
  } = useNavigateToPage(levels);

  if (loading)
    return (
      <section>
        <h2>Played Levels</h2>
        <SkeletonProfileBox />
      </section>
    );

  return (
    <section className={styles.wrapper}>
      <h2>Played Levels</h2>
      <div className={styles.container}>
        <PlayedLevelsHeader />

        <PlayedLevelsList
          levels={currentLevels}
          completedLeveles={completedLevels}
          currentPage={currentPage}
        />
        <UserLevelNav
          goToNextPage={goToNextPage}
          goToPrevPage={goToPrevPage}
          totalPages={totalPages}
          currentPage={currentPage}
        />
      </div>
    </section>
  );
};

export default PlayedLevels;
