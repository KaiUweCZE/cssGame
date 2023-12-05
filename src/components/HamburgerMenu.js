import React, { useState } from "react";


const HamburgerMenu = (props) => {
    //const [isActive, setIsActive] = useState(false)

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