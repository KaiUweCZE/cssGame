import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "@components/menu/Navbar";
import BugMessage from "@components/BugMessage";

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
