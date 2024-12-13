import React, { useContext } from "react";
import styles from "./LevelDashboard.module.css";
import BoxProfile2 from "./Boxprofile2";
import { UserContext } from "@/contexts/UserContext";
import CreatedLevels from "./LevelesTable/CreatedLevels";
import useGetUsersLevels from "../profile/hooks/useGetUsersLevels";

const ProfileDashboard = () => {
  const context = useContext(UserContext);
  const { user } = context;

  const { levels, loading, error, isEmpty, refetch } = useGetUsersLevels(
    user.name
  );

  return (
    <main className={styles.container}>
      <BoxProfile2 user={user} />
      <CreatedLevels levels={levels} onDelete={refetch} />
    </main>
  );
};

export default ProfileDashboard;
