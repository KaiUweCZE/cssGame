import React from "react";

const TipSectionLevel = ({ data }) => {
  return (
    <section className="level-section tip-section">
      <article>
        <h3>Tip na závěr</h3>
        {data.tipsSection?.p.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        <div
          className="article-card"
          onClick={() => {
            window.location.href = data.tipsSection?.src;
          }}
        >
          <h2>{data.tipsSection?.h2}</h2>
          <img
            src={data.tipsSection?.img}
            className={
              data.tipsSection?.specialClass
                ? `${data.tipsSection.specialClass}`
                : ""
            }
            alt=""
          />
          <p>Přejít na web</p>
        </div>
      </article>
    </section>
  );
};

export default TipSectionLevel;
