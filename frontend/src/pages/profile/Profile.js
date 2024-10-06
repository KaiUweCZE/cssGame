import React, { useEffect, useContext } from "react";
import "./profile-styles.css";

import { UserContext } from "@/contexts/UserContext";
import BoxProfile from "./BoxProfile";

const Profile = () => {
  const context = useContext(UserContext);

  useEffect(() => {
    console.log(context);
  }, [context]);

  return (
    <main className="container-profile">
      <h2>User Profile</h2>
      {context && <BoxProfile user={context.user} />}
    </main>
  );
};

export default Profile;
