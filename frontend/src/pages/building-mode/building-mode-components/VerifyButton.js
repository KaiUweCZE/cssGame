import { customCommonContext } from "@contexts/building-contexts/customCommonContext";
import React, { useContext } from "react";

import { CircleX, Play, PlayIcon, Verified, WormIcon } from "lucide-react";

const VerifyButton = () => {
  const { setStyled, styled, result } = useContext(customCommonContext);
  const handleSet = (e) => {
    e.preventDefault();
    setStyled(!styled);
  };
  return (
    <button 
      className="building-button" 
      onClick={(e) => handleSet(e)}
      aria-label={result ? "Level solved successfully" : "Try to solve level"}
      aria-pressed={styled}
    >
      {result ? (
        <Verified color="#69c972" aria-hidden="true" />
      ) : (
        <CircleX color="#eb3f50" aria-hidden="true" />
      )}
      <span>Solve Level</span>
    </button>
  );
};

export default VerifyButton;
