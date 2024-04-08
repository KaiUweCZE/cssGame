import { closeIcon } from "@data/ImagesData";
import React from "react";

const CloseForm = (props) => {
  return (
    <img className="class-button" onClick={props.func} src={closeIcon} alt="" />
  );
};

export default CloseForm;
