import React from "react";
import HomeGallery from "./HomeGallery";

const HomeSection = ({ data, load }) => {
  return (
    <section className="home-section">
      <h2>{data.headline}</h2>
      <article className={load ? "active" : null}>
        {data.texts.map((text, index) => {
          return <p key={index}>{text}</p>;
        })}
      </article>
      {/*data?.images ? <HomeGallery images={data.images} /> : ""*/}
    </section>
  );
};

export default HomeSection;
