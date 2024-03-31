import React from "react";
import { texts } from "../data/secretData";
import SecretTextBuilding from "./SecretTextBuilding";
import SecretTextStandard from "./SecretTextStandard";

const SecretText = ({ text, func, background = "" }) => {
  const data = texts.find((e) => e.id === text);

  const renderSecret = () => {
    switch (data.type) {
      case "building":
        return <SecretTextBuilding data={data} />;

      case "academy":
        return <SecretTextStandard data={data} />;

      default:
        return <h2>error</h2>;
    }
  };
  return (
    <div
      className="secretText"
      style={{ backgroundImage: `url(${background})` }}
    >
      {renderSecret()}
      <p className="ButtonEnd" onClick={() => func(false)}>
        konec
      </p>
    </div>
  );
};

export default SecretText;
