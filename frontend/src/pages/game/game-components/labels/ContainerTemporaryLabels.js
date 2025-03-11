import React, { useState } from "react";

import pinIcon from "@/assets/images/icons/pin.webp";
import { labelImages, playIcon } from "@/data/imagesData";
import { Braces, X } from "lucide-react";

const ContainerTemporaryLabels = ({ level, containerClass }) => {
  const [active, setActive] = useState(true);
  return (
    <>
      {active && (
        <>
          {level === 1 && (
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
          {active && level === 2 && !containerClass && (
            <div className="temporary-container second-level">
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
                <p>
                  {" "}
                  Edit styles of .container element (wrapper containing .bridge)
                </p>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default ContainerTemporaryLabels;
