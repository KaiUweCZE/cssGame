import React from "react";

const ErrorBuilding = (props) => {
  const renderMessage = () => {
    switch (props.type) {
      case "no-name":
        return <p>Name of the level is required</p>;
      case "no-styles":
        return (
          <p>
            Properties and values must be filled in for at least one element
          </p>
        );
      case "not-unique-name":
        return <p>This level name exists</p>;

      case "result-false":
        return <p>You must prove that the level is solvable</p>;

      case "invalid":
        return <p>Invalid css properties</p>;
      default:
        break;
    }
  };
  return <div className="error-building">{renderMessage()}</div>;
};

export default ErrorBuilding;
