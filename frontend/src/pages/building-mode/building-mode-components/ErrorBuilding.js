import React from "react";

const errorMessages = {
  "no-name": "Name of the level is required",
  "no-styles":
    "Properties and values must be filled in for at least one element",
  "not-unique-name": "This level name exists",
  "result-false": "You must prove that the level is solvable",
  invalid: "Invalid css properties",
  "duplicate-properties": (duplicate) =>
    `Your setup is very similar with this level: ${duplicate}`,
};

const ErrorBuilding = ({ type, duplicate }) => {
  const message =
    typeof errorMessages[type] === "function"
      ? errorMessages[type](duplicate)
      : errorMessages[type];

  if (!message) return null;

  return (
    <div
      className="error-building"
      role="alert"
      aria-live="polite"
      aria-atomic="true"
    >
      <p>{message}</p>
    </div>
  );
};

export default ErrorBuilding;
