import React from "react";

const ErrorMessage = ({ text }) => {
  return (
    <div className="error-message">
      <p>{text}</p>
    </div>
  );
};

export default ErrorMessage;
