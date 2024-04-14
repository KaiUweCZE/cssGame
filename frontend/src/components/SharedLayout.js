import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./menu/Navbar";
import BugMessage from "./BugMessage";

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <BugMessage />
    </>
  );
};

export default SharedLayout;
