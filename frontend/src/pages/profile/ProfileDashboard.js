import React, { useContext } from "react";
import styles from "./LevelDashboard.module.css";
import BoxProfile from "./Boxprofile";
import { UserContext } from "@/contexts/UserContext";
import CreatedLevels from "./LevelesTable/CreatedLevels";
import useGetUsersLevels from "./hooks/useGetUsersLevels";
import PlayedLevels from "./LevelesTable/PlayedLevels";

const ProfileDashboard = () => {
  const context = useContext(UserContext);
  const { user } = context;

  const { levels, loading, error, isEmpty, refetch } = useGetUsersLevels(
    user.name
  );

  return (
    <main className={styles.container}>
      <BoxProfile user={user} />
      <section>
        <h2>Created Levels</h2>
        <CreatedLevels levels={levels} onDelete={refetch} loading={loading} />
      </section>
      <section>
        <h2>Played Levels</h2>
        <PlayedLevels userId={user.id} completedLevels={user.completedLevels} />
      </section>
    </main>
  );
};

export default ProfileDashboard;
