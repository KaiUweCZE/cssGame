import React from "react";

const ErrorBuilding = (props) => {
  const renderMessage = () => {
    switch (props.type) {
      case "no-name":
        return <p>Je potřeba nastavit jméno levelu</p>;
      case "no-styles":
        return (
          <p>
            Musí být vyplněny properties a values alespoň u jednoho elementu
          </p>
        );
      case "not-unique-name":
        return <p>Toto jméno levelu již existuje</p>;
      default:
        break;
    }
  };
  return <div className="error-building">{renderMessage()}</div>;
};

export default ErrorBuilding;
