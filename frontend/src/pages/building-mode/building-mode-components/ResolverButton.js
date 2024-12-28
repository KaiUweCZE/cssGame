import React from "react";
import { rightBracket } from "@data/ImagesData";
import { Braces, Glasses } from "lucide-react";

const ResolverButton = () => {
  return (
    <div className="resolver-box">
      <img src={rightBracket} alt="" />

      <button className="button-resolver" type="submit">
        <span>{`{ Check Solution }`}</span>
      </button>
    </div>
  );
};

export default ResolverButton;
