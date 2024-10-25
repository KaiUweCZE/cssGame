import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import { navbarImages } from "@/data/ImagesData";
import { UserContext } from "@/contexts/UserContext";
import hatIcon from "@images/icons/hat.svg";
import Logo from "./Logo";
import SubMenu from "./SubMenu";

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
                <NavLink className="menu__item" to="/map">
                  <img src={navbarImages.mapIcon} alt="" />
                  <span>Map</span>
                </NavLink>
                <NavLink className="menu__item" to="/database">
                  <img src={navbarImages.databaseIcon} alt="" />
                  <span>Database</span>
                </NavLink>
                <NavLink className="menu__item" to="/building">
                  <img src={navbarImages.toolsIcon} alt="" />
                  <span>Building</span>
                </NavLink>
                <NavLink className="menu__item" to="/academy">
                  <img src={hatIcon} alt="" />
                  <span>Academy</span>
                </NavLink>
                <NavLink className="menu__item" to="/game">
                  <img src={navbarImages.gameIcon} alt="" />
                  <span>Game</span>
                </NavLink>
                <li
                  className={
                    settingIsActive
                      ? "menu__item settings open"
                      : "menu__item settings"
                  }
                  onClick={handleSubMenu}
                >
                  <img src={navbarImages.settingIcon} alt="" />
                  <span>settings</span>
                </li>
              </>
            ) : (
              <>
                <NavLink className="menu__item" to="/">
                  <img src={navbarImages.homeIcon} alt="" />
                  <span>Home</span>
                </NavLink>

                <NavLink className="menu__item" to="/login">
                  <img src={navbarImages.loginIcon} alt="" />
                  <span>Sign In</span>
                </NavLink>
              </>
            )}
          </ul>
          {settingIsActive && (
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
