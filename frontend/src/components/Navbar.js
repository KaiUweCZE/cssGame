import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import homeIcon from "../styles/images/icons/home.webp";
import loginIcon from "../styles/images/icons/login.webp";
import gameIcon from "../styles/images/icons/gamepad.webp";
import infoIcon from "../styles/images/icons/info.webp"
import leaveIcon from "../styles/images/icons/leave.svg"
import mapIcon from "../styles/images/icons/map.webp"
import { UserContext } from "../contexts/UserContext";



const Navbar = () => {
    const [isActive, setIsActive] = useState(false)
    const specialClass = isActive ? "active" : ""
    const {login, setLogin, logout} = useContext(UserContext)


    return(
        <header className="container-menu">
            <nav className="navigation">
                <HamburgerMenu state={isActive} setState={setIsActive}/>
                <ul className={`menu ${specialClass}`}>
                    {
                        login ?
                        <NavLink className="menu__item" to='/map'>
                            <img src={mapIcon} alt="" />
                            <span>Map</span>
                        </NavLink>
                        : ""
                    }
                    
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
                    {
                        login ?
                        <NavLink className="menu__item logout" onClick={logout}>
                            <img src={leaveIcon} alt="" />
                            <span>Logout</span>    
                        </NavLink>
                        :
                        <NavLink className="menu__item" to="/login">
                            <img src={loginIcon} alt="" />
                            <span>Sign In</span>
                        </NavLink>
                    }

                </ul>
            </nav>
        </header>
        
        
    )
}

export default Navbar