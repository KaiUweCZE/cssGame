import { customCommonContext } from "@contexts/building-contexts/customCommonContext";
import React, { useContext } from "react";
import correctIcon from "@images/icons/correct.svg";
import wrongIcon from "@images/icons/wrong.svg";

const ResolverButton = () => {
  const { setStyled, styled, result } = useContext(customCommonContext);
  const handleSet = (e) => {
    e.preventDefault();
    setStyled(!styled);
  };
  return (
    <div className="button-resolver">
      <input type="submit" value="resolver" onClick={(e) => handleSet(e)} />
      {result ? <img src={correctIcon} alt="" /> : <img src={wrongIcon} />}
    </div>
  );
};

export default ResolverButton;
