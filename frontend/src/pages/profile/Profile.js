import React, { useContext } from "react";
import "./profile-styles.css";
import styles from "./profile-styles.module.css";
import { UserContext } from "@/contexts/UserContext";
import BoxProfile from "./components/BoxProfile";
import { ProfileProvider } from "./context/ProfileContext";

const Profile = () => {
  const context = useContext(UserContext);

  return (
    <ProfileProvider>
      <main className={styles.container}>
        <h2>User Profile</h2>
        {context && <BoxProfile user={context.user} />}
      </main>
    </ProfileProvider>
  );
};

export default Profile;
