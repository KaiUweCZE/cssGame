import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import homeIcon from "../styles/images/icons/home.webp";
import loginIcon from "../styles/images/icons/login.webp";
import gameIcon from "../styles/images/icons/gamepad.webp";
import infoIcon from "../styles/images/icons/info.webp"

const Navbar = () => {
    const [isActive, setIsActive] = useState(false)

    const specialClass = isActive ? "active" : ""

    return(
        <header className="container-menu">
            <nav className="navigation">
                <HamburgerMenu state={isActive} setState={setIsActive}/>
                <ul className={`menu ${specialClass}`}>
                    <NavLink className="menu__item" to="/">
                        <img src={homeIcon} alt="" />
                        <span>Home</span>
                    </NavLink>
                    <NavLink className="menu__item" to="/about">
                        <img src={infoIcon} alt="" />
                        <span>About</span>
                    </NavLink>
                    <NavLink className="menu__item" to="/game">
                        <img src={gameIcon} alt="" />
                        <span>Game</span>
                    </NavLink>
                    <NavLink className="menu__item" to="/registration">
                        <img src={loginIcon} alt="" />
                        <span>Sign In</span>
                    </NavLink> 
                </ul>
            </nav>
        </header>
        
        
    )
}

export default Navbar