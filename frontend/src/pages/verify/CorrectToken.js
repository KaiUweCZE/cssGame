import React from "react";
import correctIcon from "@/assets/images/icons/checked-circle.png";

const CorrectToken = () => {
  return (
    <div className="correct-token">
      <div className="flex">
        <img src={correctIcon} alt="checked mark icon" width="32" />
        <h3>Your email is verified</h3>
      </div>
    </div>
  );
};

export default CorrectToken;
