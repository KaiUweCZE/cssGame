import React from "react";
import { NavLink } from "react-router-dom";
import { navbarImages } from "@/data/imagesData";

const SubMenu = ({ specialClass, logout, setState }) => {
  const handleLogout = () => {
    setState((prev) => !prev);
    logout();
  };
  return (
    <nav className={`sub-nav ${specialClass}`}>
      <ul className="sub-menu">
        <li>
          <NavLink className="sub-menu-item" to="/profile">
            <img src={navbarImages.profileIcon} alt="profile icon" width={24} />
            <span>Profile</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="sub-menu-item" to="/" onClick={handleLogout}>
            <img src={navbarImages.leaveIcon} alt="logout icon" width={24} />
            <span>Logout</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default SubMenu;
