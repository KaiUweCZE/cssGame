import React, { createContext, useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";

const GET_USER = gql`
  query user($id: ID!) {
    user(id: $id) {
      id
      name
      email
      level
    }
  }
`;

export const UserContext = createContext({
  login: false,
  token: null,
  user: "",
  setUser: () => {},
  level: 0,
  setLogin: () => {},
  setToken: () => {},
});

export const UserContextProvider = ({ children }) => {
  const [login, setLogin] = useState(false);
  const [token, setToken] = useState(null);
  const [user, setUser] = useState({});

  const updateUser = (newUserData) => {
    setUser(newUserData);
    localStorage.setItem("user", JSON.stringify(newUserData));
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    const storedUser = localStorage.getItem("user");
    if (storedToken) {
      //setUser(JSON.parse(storedUser));
      updateUser(JSON.parse(storedUser));
      setToken(storedToken);
      setLogin(true);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    setUser({});
    setToken(null);
    setLogin(false);
  };

  const contextValue = {
    login,
    token,
    user,
    setUser,
    updateUser,
    setLogin,
    setToken,
    logout,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
