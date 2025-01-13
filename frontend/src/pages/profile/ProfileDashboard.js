import React, { useContext } from "react";
import styles from "./LevelDashboard.module.css";
import BoxProfile from "./components/Boxprofile";
import { UserContext } from "@/contexts/UserContext";
import CreatedLevels from "./components/tables/CreatedLevels";
import useGetUsersLevels from "./hooks/useGetUsersLevels";
import PlayedLevels from "./components/tables/PlayedLevels";

const ProfileDashboard = () => {
  const context = useContext(UserContext);
  const { user } = context;

  const { levels, loading, error, isEmpty, refetch } = useGetUsersLevels(
    user.name
  );

  return (
    <main className={styles.container} role="main" aria-label="User Profile Dashboard">
      <BoxProfile user={user} />
      <section aria-labelledby="created-levels-heading">
        <h2 id="created-levels-heading">Created Levels</h2>
        <CreatedLevels 
          levels={levels} 
          onDelete={refetch} 
          loading={loading} 
          aria-busy={loading}
        />
      </section>
      <section aria-labelledby="played-levels-heading">
        <h2 id="played-levels-heading">Played Levels</h2>
        <PlayedLevels 
          userId={user.id} 
          completedLevels={user.completedLevels} 
        />
      </section>
    </main>
  );
};

export default ProfileDashboard;
