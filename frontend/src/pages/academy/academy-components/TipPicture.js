import React from "react";

const TipPicture = ({ altText, imgSrc, text, href }) => {
  return (
    <picture className="tip-picture" onClick={() => window.location === href}>
      <img src={imgSrc} alt={altText} />
      <span className="text-out">{text}</span>
      <span className="text-in">To the Web</span>
    </picture>
  );
};

export default TipPicture;
