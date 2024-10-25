import React from "react";
import profileIcon from "@/assets/images/icons/user.webp";
import emailIcon from "@/assets/images/icons/email.webp";
import ChangePassword from "./ChangePassword";
import ProfileLabel from "./ProfileLabel";
import CreateEmail from "./CreateEmail";
import styles from "../profile-styles.module.css";
import UsersLevels from "./UsersLevels";
import useGetUsersLevels from "../hooks/useGetUsersLevels";
import PlayedLevels from "./PlayedLevels";

const BoxProfile = ({ user }) => {
  const { levels, loading, error, isEmpty, refetch } = useGetUsersLevels(
    user.name
  );
  if (loading) return <div>Načítání...</div>;
  if (error)
    return (
      <div>
        Chyba: {error.message}
        <button onClick={() => refetch()}>refetch</button>
      </div>
    );
  return (
    <section className={styles.box}>
      <ProfileLabel icon={profileIcon} label="Username" element={user.name} />
      {user.email ? (
        <ProfileLabel icon={emailIcon} label="Email" element={user.email} />
      ) : (
        <CreateEmail icon={emailIcon} userId={user.id} />
      )}
      <ChangePassword userId={user.id} />
      <UsersLevels levels={levels} />
      <PlayedLevels />
    </section>
  );
};

export default BoxProfile;
