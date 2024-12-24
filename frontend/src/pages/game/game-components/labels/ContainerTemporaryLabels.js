import React, { useState } from "react";

import pinIcon from "@/assets/images/icons/pin.webp";
import { labelImages, playIcon } from "@/data/ImagesData";
import { Braces, X } from "lucide-react";

const ContainerTemporaryLabels = () => {
  const [active, setActive] = useState(true);
  return (
    <>
      {active && (
        <div className="temporary-container">
          <X
            className="close-icon"
            height={16}
            width={16}
            strokeWidth={3}
            onClick={() => setActive(!active)}
          />
          <img
            src={labelImages.curvedArrow}
            width={140}
            className="temporary-arrow"
          />
          <div className="temporary-box">
            <Braces width={16} height={16} />
            <p> There you can edit styles of bridge </p>
          </div>
          <div className="temporary-box">
            <img src={playIcon} width={16} height={16} />
            <p> Click on play button to apply your styles</p>{" "}
          </div>

          <div className="temporary-box">
            <img src={pinIcon} width={16} height={16} />
            <p> Pins form to run together</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ContainerTemporaryLabels;
