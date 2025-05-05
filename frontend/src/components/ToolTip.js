import { X } from "lucide-react";
import React, { useId } from "react";

const ToolTip = ({ property, onDismiss, anchor }) => {
  const tooltipId = useId();

  return (
    <div className="tool-tip" style={{ positionAnchor: anchor }}>
      <div className="tool-tip-arrow"></div>
      <p>
        Don't forget to use quotes (" ") around values for{" "}
        <code>{property}</code>
      </p>
      <button
        onClick={onDismiss}
        className="tool-tip-close"
        aria-label="Dismiss tip"
      >
        <X color="white" />
      </button>
    </div>
  );
};

export default ToolTip;
