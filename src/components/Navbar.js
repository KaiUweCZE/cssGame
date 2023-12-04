import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

    return(
        <header className="container-menu">
            <nav className="navigation">
                <ul className="menu">
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/game">Game</NavLink>
                </ul>
            </nav>
        </header>
        
        
    )
}

export default Navbar