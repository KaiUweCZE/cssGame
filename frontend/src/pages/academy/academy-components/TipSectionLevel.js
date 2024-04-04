import React from "react";

const TipSectionLevel = ({ data }) => {
  return (
    <section className="tip__section">
      <article>
        <h3>Tip na závěr</h3>
        {data.fullData.tipsSection?.p.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        <div
          className="article__card"
          onClick={() => {
            window.location.href = data.fullData?.tipsSection.src;
          }}
        >
          <h2>{data.fullData.tipsSection?.h2}</h2>
          <img
            src={data.fullData.tipsSection?.img}
            className={
              data.fullData.tipsSection?.specialClass
                ? `${data.fullData.tipsSection.specialClass}`
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
