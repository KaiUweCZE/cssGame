import React from "react";
import "../styles/AsideStyles.css";

const AsideBox = ({ background, cssClass, children }) => {
  return (
    <aside
      className={cssClass ? `AsideBox ${cssClass}` : "AsideBox"}
      style={{ backgroundImage: `url(${background})` }}
    >
      {children ? children : ""}
    </aside>
  );
};

export default AsideBox;
