import React from "react";
import { plusIcon } from "../data/imagesData";

const EmptyBox = (props) => {
  const handleClick = () => {
    props.func(!props.state);
  };

  return (
    <div className="empty-box">
      <img src={plusIcon} alt="" onClick={handleClick} />
    </div>
  );
};

export default EmptyBox;
