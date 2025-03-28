import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import { UserContext } from "@/contexts/UserContext";
import Logo from "./Logo";
import SubMenu from "./SubMenu";
import {
  Gamepad2,
  PencilRuler,
  Archive,
  Settings,
  Map,
  GraduationCap,
  Home,
  LogIn,
  Info,
} from "lucide-react";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [settingIsActive, setSettingIsActive] = useState(false);
  const [subSpecialClass, setSubSpecialClass] = useState("");
  const { login, setLogin, logout } = useContext(UserContext);
  const specialClass = isActive ? "active" : "";

  const handleSubMenu = () => {
    if (settingIsActive) {
      setSubSpecialClass("closed");
      setTimeout(() => {
        setSettingIsActive(false);
      }, 400);
    } else {
      setSubSpecialClass("");
      setSettingIsActive(true);
    }
  };

  useEffect(() => {
    if (!isActive) {
      setSettingIsActive(false);
    }
  }, [isActive]);

  return (
    <header className="container-menu">
      <div className="header-wrapper">
        <Logo />
        <nav className="navigation" id="hamburger-navigation">
          <HamburgerMenu state={isActive} setState={setIsActive} />
          <ul className={`menu ${specialClass}`}>
            {login ? (
              <>
                <NavLink className="menu-item" to="/guide">
                  <Info className="menu-item-icon" color="#fff" />
                  <span>Guide</span>
                </NavLink>
                <NavLink className="menu-item" to="/map">
                  <Map className="menu-item-icon" color="#fff" />
                  <span>Map</span>
                </NavLink>
                <NavLink className="menu-item" to="/database">
                  <Archive className="menu-item-icon" color="#fff" />
                  <span>Database</span>
                </NavLink>
                <NavLink className="menu-item" to="/building">
                  <PencilRuler className="menu-item-icon" color="#fff" />
                  <span>Building</span>
                </NavLink>
                <NavLink className="menu-item" to="/academy">
                  <GraduationCap className="menu-item-icon" color="#fff" />
                  <span>Academy</span>
                </NavLink>
                <NavLink className="menu-item" to="/game">
                  <Gamepad2 className="menu-item-icon" color="#fff" />
                  <span>Game</span>
                </NavLink>
                <NavLink
                  className={
                    settingIsActive
                      ? "menu-item settings open"
                      : "menu-item settings"
                  }
                  onClick={handleSubMenu}
                >
                  <Settings className="menu-item-icon" color="#fff" />
                  <span>Settings</span>
                </NavLink>
              </>
            ) : (
              <>
                <NavLink className="menu-item" to="/">
                  <Home className="menu-item-icon" color="#fff" />
                  <span>Home</span>
                </NavLink>
                <NavLink className="menu-item" to="/guide">
                  <Info className="menu-item-icon" color="#fff" />
                  <span>Guide</span>
                </NavLink>

                <NavLink className="menu-item" to="/login">
                  <LogIn className="menu-item-icon" color="#fff" />
                  <span>Sign In</span>
                </NavLink>
              </>
            )}
          </ul>
          {login && settingIsActive && (
            <SubMenu
              specialClass={subSpecialClass}
              logout={logout}
              setState={setSettingIsActive}
            />
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
