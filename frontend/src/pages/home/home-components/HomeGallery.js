import React from "react";

const HomeGallery = ({ images }) => {
  return (
    <div className="home-gallery">
      {images.map((image, index) => {
        return <img key={index} src={image} alt="screen from the game" />;
      })}
    </div>
  );
};

export default HomeGallery;
