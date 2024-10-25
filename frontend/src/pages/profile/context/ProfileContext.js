import React, { createContext, useState } from "react";

export const ProfileContext = createContext({});

export const ProfileProvider = ({ children }) => {
  const [data, setData] = useState("");
  const checkAccesibility = "toto";

  const contextValues = {
    data,
    setData,
    checkAccesibility,
  };

  return (
    <ProfileContext.Provider value={contextValues}>
      {children}
    </ProfileContext.Provider>
  );
};
