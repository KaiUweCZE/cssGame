import React from "react";
import { rightBracket } from "@/data/imagesData";

const ResolverButton = () => {
  return (
    <div className="resolver-box" role="group">
      <img src={rightBracket} alt="Right bracket symbol" aria-hidden="true" />

      <button
        className="button-resolver"
        type="submit"
        aria-label="Check your solution"
      >
        <span>{`{ Check Solution }`}</span>
      </button>
    </div>
  );
};

export default ResolverButton;
