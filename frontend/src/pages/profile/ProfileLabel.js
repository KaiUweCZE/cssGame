import React from "react";

const ProfileLabel = ({ icon, element, label }) => {
  return (
    <div className="profile-item">
      <img src={icon} alt="user icon" width="24" />
      <div className="profile-item-info">
        <span>{label}</span>
        <span className="bold">{element}</span>
      </div>
    </div>
  );
};

export default ProfileLabel;
