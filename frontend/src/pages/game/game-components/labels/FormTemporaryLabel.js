import React, { useState } from "react";
import { labelImages } from "@/data/imagesData";
import { Check } from "lucide-react";

const FormTemporaryLabel = () => {
  const [active, setActive] = useState(true);
  return (
    <>
      {active && (
        <div className="temporary-label">
          <img
            className="temporary-arrow"
            src={labelImages.curvedArrow}
            alt="arrow icon"
            width={100}
          />
          <div className="temporary-text">
            <p>There you can edit styles of bridge </p>
            <Check onClick={() => setActive(!active)} />
          </div>
        </div>
      )}
    </>
  );
};

export default FormTemporaryLabel;
