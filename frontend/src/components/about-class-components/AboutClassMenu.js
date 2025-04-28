import { CheckContext } from "@contexts/form-contexts/checkContext";
import React, { useContext, useState } from "react";

const AboutClassMenu = ({ parts }) => {
  const [focused, setFocused] = useState(false);
  const { setActive, setAboutClass } = useContext(CheckContext);

  const handleSetClass = (e) => {
    setActive(true);
    setFocused(e);
    setAboutClass(e);
    console.log("parts exist?", parts);
    
  };

  return (
    <ul className="about-class-menu">
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
      {
        parts && (
          <li
            onClick={(e) => handleSetClass(e.target.innerText)}
            className={focused === "parts" ? "active" : ""}
          >
            parts
          </li>
        )
      }
    </ul>
  );
};

export default AboutClassMenu;
