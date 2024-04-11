import React from "react";
import { closeIcon } from "@data/ImagesData";

const ErrorList = (props) => {
  return (
    <ul className="error-list">
      <img src={closeIcon} alt="close icon" onClick={props.remove} />
      <li className="error-headline">{props.type}: </li>
      {props.list.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </ul>
  );
};

export default ErrorList;
