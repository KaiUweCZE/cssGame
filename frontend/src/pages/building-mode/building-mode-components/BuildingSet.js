import { customCommonContext } from "@contexts/building-contexts/customCommonContext";
import React, { useContext } from "react";

const BuildingSet = () => {
  const { setStyled, setChange } = useContext(customCommonContext);
  const handleSet = (e) => {
    e.preventDefault();
    setStyled(true);
    console.log("Set Style");
  };
  return <input type="submit" value="styler" onClick={(e) => handleSet(e)} />;
};

export default BuildingSet;
