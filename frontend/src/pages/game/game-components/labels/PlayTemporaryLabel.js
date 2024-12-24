import { labelImages } from "@/data/ImagesData";
import React from "react";

const PlayTemporaryLabel = () => {
  return (
    <div className="temporary-play">
      <img src={labelImages.curvedArrow} width={40} />
      <p>Apply your styles</p>
    </div>
  );
};

export default PlayTemporaryLabel;
