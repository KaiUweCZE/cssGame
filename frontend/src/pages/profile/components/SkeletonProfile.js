import React from "react";
import SkeletonProfileBox from "./SkeletonProfileBox";
import profileIcon from "@/assets/images/icons/user.webp";
import emailIcon from "@/assets/images/icons/email.webp";
import ProfileLabel from "./ProfileLabel";
import ChangePassword from "./ChangePassword";
import styles from "../profile-styles.module.css";

const SkeletonProfile = () => {
  return (
    <div className={styles.box}>
      <ProfileLabel icon={profileIcon} label="Username" element="username" />

      <ProfileLabel
        icon={emailIcon}
        label="Email"
        element="example@gamil.com"
      />

      <ChangePassword userId="202020" />
      <section>
        <h2>Created Levels</h2>
        <SkeletonProfileBox />
      </section>
    </div>
  );
};

export default SkeletonProfile;
