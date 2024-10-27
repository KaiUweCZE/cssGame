import React from "react";
import profileIcon from "@/assets/images/icons/user.webp";
import emailIcon from "@/assets/images/icons/email.webp";
import ChangePassword from "./ChangePassword";
import ProfileLabel from "./ProfileLabel";
import CreateEmail from "./CreateEmail";
import styles from "../profile-styles.module.css";
import UsersLevels from "./created-levels/UsersLevels";
import useGetUsersLevels from "../hooks/useGetUsersLevels";
import PlayedLevels from "./played-levels/PlayedLevels";
import SkeletonProfileBox from "./SkeletonProfileBox";
import SkeletonProfile from "./SkeletonProfile";

const BoxProfile = ({ user }) => {
  const { levels, loading, error, isEmpty, refetch } = useGetUsersLevels(
    user.name
  );

  if (error)
    return (
      <div>
        Chyba: {error.message}
        <button onClick={() => refetch()}>refetch</button>
      </div>
    );
  return (
    <section className={styles.box}>
      {loading ? (
        <SkeletonProfile />
      ) : (
        <>
          <ProfileLabel
            icon={profileIcon}
            label="Username"
            element={user.name}
          />
          {user.email ? (
            <ProfileLabel icon={emailIcon} label="Email" element={user.email} />
          ) : (
            <CreateEmail icon={emailIcon} userId={user.id} />
          )}
          <ChangePassword userId={user.id} />
          <UsersLevels levels={levels} />{" "}
        </>
      )}
      {user.completedLevels ? (
        <PlayedLevels userId={user.id} completedLevels={user.completedLevels} />
      ) : (
        <SkeletonProfileBox />
      )}
    </section>
  );
};

export default BoxProfile;
