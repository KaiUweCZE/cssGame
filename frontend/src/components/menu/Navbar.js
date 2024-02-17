import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import { navbarImages } from "../../data/images";
import {UserContext} from '../../contexts/UserContext'


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
                            <img src={navbarImages.mapIcon} alt="" />
                            <span>Map</span>
                        </NavLink>
                        : ""
                    }
                    
                    <NavLink className="menu__item" to="/">
                        <img src={navbarImages.homeIcon} alt="" />
                        <span>Home</span>
                    </NavLink>
                    <NavLink className="menu__item" to="/about">
                        <img src={navbarImages.infoIcon} alt="" />
                        <span>About</span>
                    </NavLink>
                    <NavLink className="menu__item" to="/game">
                        <img src={navbarImages.gameIcon} alt="" />
                        <span>Game</span>
                    </NavLink>
                    {
                        login ?
                        <NavLink className="menu__item logout" onClick={logout}>
                            <img src={navbarImages.leaveIcon} alt="" />
                            <span>Logout</span>    
                        </NavLink>
                        :
                        <NavLink className="menu__item" to="/login">
                            <img src={navbarImages.loginIcon} alt="" />
                            <span>Sign In</span>
                        </NavLink>
                    }

                </ul>
            </nav>
        </header>
        
        
    )
}

export default Navbar