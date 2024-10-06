import React from "react";
import profileIcon from "@/assets/images/icons/user.webp";
import emailIcon from "@/assets/images/icons/email.webp";
import keyIcon from "@/assets/images/icons/passkey.webp";

const BoxProfile = ({ user }) => {
  return (
    <section className="box-profile">
      <div className="profile-item">
        <img src={profileIcon} alt="user icon" width="24" />
        <div className="profile-item-info">
          <span>Username</span>
          <span className="bold">{user.name}</span>
        </div>
      </div>
      <div className="profile-item">
        <img src={emailIcon} alt="user icon" width="24" />
        <div className="profile-item-info">
          <span>Email</span>
          <span className="bold">{user.email}</span>
        </div>
      </div>
      <div className="profile-item">
        <img src={keyIcon} alt="key icon" width="24" />

        <button className="primary-button">Change Password</button>
      </div>
    </section>
  );
};

export default BoxProfile;
