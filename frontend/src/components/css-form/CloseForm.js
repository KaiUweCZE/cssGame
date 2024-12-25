import { XCircle } from "lucide-react";
import React from "react";

const CloseForm = (props) => {
  return <XCircle className="class-button" onClick={props.func} />;
};

export default CloseForm;
