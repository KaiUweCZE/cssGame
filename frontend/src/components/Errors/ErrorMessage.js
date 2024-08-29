import React from "react";

// this component will be displayed after reply
const ErrorMessage = ({ text }) => {
  return (
    <div className="error-message">
      <p>{text}</p>
    </div>
  );
};

export default ErrorMessage;
