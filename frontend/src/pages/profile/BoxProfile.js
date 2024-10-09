import React from "react";
import profileIcon from "@/assets/images/icons/user.webp";
import emailIcon from "@/assets/images/icons/email.webp";

import ChangePassword from "./ChangePassword";
import ProfileLabel from "./ProfileLabel";
import CreateEmail from "./CreateEmail";

const BoxProfile = ({ user }) => {
  return (
    <section className="box-profile">
      <ProfileLabel icon={profileIcon} label="Username" element={user.name} />
      {user.email ? (
        <ProfileLabel icon={emailIcon} label="Email" element={user.email} />
      ) : (
        <CreateEmail icon={emailIcon} userId={user.id} />
      )}
      <ChangePassword userId={user.id} />
    </section>
  );
};

export default BoxProfile;
