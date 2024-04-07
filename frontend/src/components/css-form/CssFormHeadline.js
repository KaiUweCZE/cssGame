import React from "react";
import { leftBracket } from "@data/ImagesData";

const CssFormHeadline = (props) => {
  return (
    <div className="headline">
      <span className="element-class">.{props.name}</span>
      <img className="left-bracket" src={leftBracket} alt="" />
    </div>
  );
};

export default CssFormHeadline;
