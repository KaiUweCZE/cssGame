import React from "react";
import alertIcon from "@/assets/images/icons/alert-circle.png";

const InvalidToken = () => {
  return (
    <div className="invalid-token">
      <div className="flex">
        <img src={alertIcon} alt="alert circle icon" width="32" />
        <h3>Invalid Token</h3>
      </div>

      <p>Unfortunately, your token is invalid. Here are possible reasons:</p>
      <ul>
        <li>Your token has been used</li>
        <li>Your token has expired</li>
        <li>You didn't choose email verification</li>
        <li>You entered an incorrect token</li>
      </ul>
    </div>
  );
};

export default InvalidToken;
