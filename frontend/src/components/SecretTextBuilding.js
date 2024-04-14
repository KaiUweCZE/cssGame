import React from "react";

const SecretTextBuilding = ({ data }) => {
  console.log(data);
  return (
    <div className="SecretTextBuilding">
      <article>
        <h2>{data.intro.h2}</h2>
        {data.intro.texts.map((paragraph, index) => {
          return <p key={index}>{paragraph}</p>;
        })}
      </article>

      <h2>{data.tips.h2}</h2>
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
    </div>
  );
};

export default SecretTextBuilding;
