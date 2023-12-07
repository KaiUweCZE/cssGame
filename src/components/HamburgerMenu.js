import React, { useState } from "react";

// hamburger menu for small screen
const HamburgerMenu = (props) => {
    //const [isActive, setIsActive] = useState(false)

    // set the opposite value of the props.state
    const clickedOnMenu = () => {
        props.setState(!props.state)
    }
    const spanClass = props.state ? "active" : ""

    return (
        <div className="menu-hamburger" onClick={() => clickedOnMenu()}>
            <span className={`${spanClass}`}></span>
            <span className={`${spanClass}`}></span>
            <span className={`${spanClass}`}></span>
        </div>
    )
}


export default HamburgerMenu