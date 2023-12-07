import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
    const [isActive, setIsActive] = useState(false)

    const specialClass = isActive ? "active" : ""

    return(
        <header className="container-menu">
            <nav className="navigation">
                <HamburgerMenu state={isActive} setState={setIsActive}/>
                <ul className={`menu ${specialClass}`}>
                    <NavLink className="menu__item" to="/">Home</NavLink>
                    <NavLink className="menu__item" to="about">About</NavLink>
                    <NavLink className="menu__item" to="game">Game</NavLink>
                </ul>
            </nav>
        </header>
        
        
    )
}

export default Navbar