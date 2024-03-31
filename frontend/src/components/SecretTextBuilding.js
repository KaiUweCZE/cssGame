import React from "react";

const SecretTextBuilding = ({ data }) => {
  console.log(data);
  return (
    <div className="SecretTextBuilding">
      <h2>{data.intro.h2}</h2>
      <p>{data.intro.text}</p>

      <h2>{data.tips.h2}</h2>
      <ul>
        {data.tips.li.map((text, index) => {
          return <li key={index}>{text}</li>;
        })}
      </ul>
    </div>
  );
};

export default SecretTextBuilding;
