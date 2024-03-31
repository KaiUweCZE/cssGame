import React from "react";

const SecretTextStandard = ({ data }) => {
  return (
    <div>
      {data.content.map((paragraph, index) => {
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
    </div>
  );
};

export default SecretTextStandard;
