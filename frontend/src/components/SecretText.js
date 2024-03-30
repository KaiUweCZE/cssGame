import React from "react";
import { texts } from "../data/secretData";

const SecretText = ({ text, func, background = "" }) => {
  const data = texts.find((e) => e.id === text);
  console.log(data);
  return (
    <div
      className="secretText"
      style={{ backgroundImage: `url(${background})` }}
    >
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
