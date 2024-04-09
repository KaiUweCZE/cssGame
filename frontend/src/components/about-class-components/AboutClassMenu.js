import { CheckContext } from "@contexts/form-contexts/checkContext";
import React, { useContext, useState } from "react";

const AboutClassMenu = (props) => {
  const [focused, setFocused] = useState(false);
  const { setAboutClass } = useContext(CheckContext);

  const handleSetClass = (e) => {
    //props.setActive(!props.active)
    props.setActive(true);
    setFocused(e);
    setAboutClass(e);
  };

  return (
    <ul className="about-class__menu">
      <li
        onClick={(e) => handleSetClass(e.target.innerText)}
        className={focused === "bridge" ? "active" : ""}
      >
        bridge
      </li>
      <li
        onClick={(e) => handleSetClass(e.target.innerText)}
        className={focused === "container" ? "active" : ""}
      >
        container
      </li>
    </ul>
  );
};

export default AboutClassMenu;
