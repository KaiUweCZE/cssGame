import React from "react";

const SecretTextBuilding = ({ data }) => {
  return (
    <div className="secret-text-building">
      <article>
        <h2 className="secret-headline">{data.intro.h2}</h2>
        {data.intro.texts.map((paragraph, index) => {
          return <p key={index}>{paragraph}</p>;
        })}
      </article>

      <h2 className="secret-headline">{data.tips.h2}</h2>
      <ul>
        {data.tips.li.map((text, index) => {
          return (
            <li key={index}>
              <span>{data.tips.boldPart[index]} </span>
              {text}
            </li>
          );
        })}
      </ul>
      <article>
        <h3>Additional Example:</h3>
        <p>
          If you want to focus on preventing the use of grid-row while also
          stopping users from simple repositioning using position: absolute,
          etc., consider the following If your goal is to make the user utilize
          grid-area, it would be advisable to also block the transform and
          translate properties, Alternatively, you could opt for an allowed list
          approach and only permit grid-area (thus limiting the user to
          modifying only this style). However, in this case, you must account
          for the fact that the user will need to be informed about this
          limitation.
        </p>
      </article>
      <img src={data.tips.img} alt="" />
    </div>
  );
};

export default SecretTextBuilding;
