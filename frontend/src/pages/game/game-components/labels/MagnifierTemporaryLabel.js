import React, { useState } from "react";
import { labelImages } from "../../../../data/ImagesData";
import { BookMarked, Check, X } from "lucide-react";

const MagnifierTemporaryLabel = ({ option }) => {
  const [active, setActive] = useState(true);
  return (
    <div
      className={active && !option ? `temporary__box active` : `temporary__box`}
    >
      <Check className="label__close" onClick={() => setActive(!active)} />
      <img className="label__circle" src={labelImages.circleIcon} alt="" />
      <img className="label__arrow" src={labelImages.curvedArrow} alt="" />
      <p className="label__text">View default CSS styles</p>
    </div>
  );
};

export default MagnifierTemporaryLabel;
