import React from "react";
import { useNavigate } from "react-router-dom";
import lockIcon from "@images/icons/padlock.webp";

const UnauthorizedAccess = () => {
  const navigate = useNavigate();
  return (
    <div className="unauthorized-access ">
      <img src={lockIcon} alt="padlock" width={32} height={32} />
      <h2>Restricted Accsess</h2>
      <p>Please sign in to access this section</p>
      <button className="primary-button" onClick={() => navigate("/login")}>
        Login
      </button>
    </div>
  );
};

export default UnauthorizedAccess;
