import React from "react";
import styles from "../profile-styles.module.css";

const ProfileLabel = ({ icon, element, label }) => {
  return (
    <div className={styles.item}>
      <img src={icon} alt="user icon" width="24" />
      <fieldset className={styles.itemInfo}>
        <span>{label}</span>
        <span className={styles.bold}>{element}</span>
      </fieldset>
    </div>
  );
};

export default ProfileLabel;
