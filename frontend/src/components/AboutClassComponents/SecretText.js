import React from "react";
import { texts } from "../../data/secretData";
import paperBg from "../../styles/images/paper.webp";

const SecretText = ({ text, func }) => {
  const data = texts.find((e) => e.id === text);
  console.log(data);
  return (
    <div className="secretText" style={{ backgroundImage: `url(${paperBg})` }}>
      {data?.content.map((paragraph, index) => {
        return <p key={index}>{paragraph}</p>;
      })}
      {data?.img ? (
        <img
          className={data?.imgClass ? `${data.imgClass}` : ""}
          src={data.img}
          alt="simple painting of monster and two citizens"
        />
      ) : (
        ""
      )}
      <p className="ButtonEnd" onClick={() => func(false)}>
        konec
      </p>
    </div>
  );
};

export default SecretText;
