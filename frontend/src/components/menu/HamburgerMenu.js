import React, { useState } from "react";

// hamburger menu for small screen
const HamburgerMenu = ({ state, setState }) => {
  //const [isActive, setIsActive] = useState(false)

  // set the opposite value of the props.state
  const handleActive = () => {
    setState(!state);
  };
  const spanClass = state ? "active" : "";

  return (
    <div
      aria-controls="hamburger-navigation"
      className="menu-hamburger"
      onClick={handleActive}
    >
      <span className={`hamburger-item top ${spanClass}`}></span>
      <span className={`hamburger-item middle ${spanClass}`}></span>
      <span className={`hamburger-item bottom ${spanClass}`}></span>
    </div>
  );
};

export default HamburgerMenu;
