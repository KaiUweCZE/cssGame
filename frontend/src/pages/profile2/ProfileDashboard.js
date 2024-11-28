import React, { useContext } from "react";
import styles from "./LevelDashboard.module.css";
import BoxProfile2 from "./Boxprofile2";
import { UserContext } from "@/contexts/UserContext";

const ProfileDashboard = () => {
  const context = useContext(UserContext);
  return (
    <main className={styles.container}>
      <BoxProfile2 user={context.user} />
    </main>
  );
};

export default ProfileDashboard;
