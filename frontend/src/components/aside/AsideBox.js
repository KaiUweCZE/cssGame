import React from "react";
import "@styles/aside-styles.css";

const AsideBox = ({ background, cssClass = "", children }) => {
  return (
    <aside
      className={cssClass ? `aside-box ${cssClass}` : "aside-box"}
      style={{ backgroundImage: `url(${background})` }}
    >
      {children ? children : ""}
    </aside>
  );
};

export default AsideBox;
