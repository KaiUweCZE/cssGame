import React from "react";

const ErrorList = (props) => {
  return (
    <ul className="error-list">
      <li className="error-headline">{props.type}: </li>
      {props.list.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </ul>
  );
};

export default ErrorList;
