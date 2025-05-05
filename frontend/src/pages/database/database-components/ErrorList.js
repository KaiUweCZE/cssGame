import React from "react";
import closeIcon from "@images/icons/close.webp";

const ErrorList = (props) => {
  return (
    <ul className="error-list">
      <img
        src={closeIcon}
        alt="close icon"
        onClick={props.remove}
        width={10}
        height={10}
      />
      <li className="error-headline">{props.type} </li>
      {props.list.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </ul>
  );
};

export default ErrorList;
