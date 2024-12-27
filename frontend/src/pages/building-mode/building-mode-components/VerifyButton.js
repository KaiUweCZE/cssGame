import { customCommonContext } from "@contexts/building-contexts/customCommonContext";
import React, { useContext } from "react";
import correctIcon from "@images/icons/correct.svg";
import wrongIcon from "@images/icons/wrong.svg";
import { CircleX, Play, PlayIcon, Verified, WormIcon } from "lucide-react";

const VerifyButton = () => {
  const { setStyled, styled, result } = useContext(customCommonContext);
  const handleSet = (e) => {
    e.preventDefault();
    setStyled(!styled);
  };
  return (
    <button className="building-button" onClick={(e) => handleSet(e)}>
      {result ? <Verified color="#69c972" /> : <CircleX color="#eb3f50" />}
      <span>Solve Level</span>
    </button>
  );
};

export default VerifyButton;
