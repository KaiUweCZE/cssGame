import React, { useRef, useState } from "react";

export const useTextWidth = () => {
  const measureRef = useRef(null);
  const [textWidths, setTextWidths] = useState({});

  const measureText = (text, id) => {
    if (!measureRef.current) return 0;

    measureRef.current.textContent = text;
    const width = measureRef.current.clientWidth;

    setTextWidths((prev) => {
      if (prev[id] !== width) {
        return { ...prev, [id]: width };
      }
      return prev;
    });
    return width;
  };

  const clearWidthEntry = (id) => {
    setTextWidths((prev) => {
      const newWidths = { ...prev };
      delete newWidths[id];
      return newWidths;
    });
  };

  return {
    measureRef,
    textWidths,
    measureText,
    clearWidthEntry,
    MeasuringSpan: () => (
      <span
        ref={measureRef}
        style={{
          position: "absolute",
          visibility: "hidden",
          whiteSpace: "nowrap",

          pointerEvents: "none",
        }}
      />
    ),
  };
};
