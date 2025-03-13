import React from "react";

const AboutClassInfo = ({ info }) => {
  if (!info || Object.keys(info).length === 0) {
    console.log("no information", info);

    return (
      <article className="about-class-info">
        <li>nothing to see</li>
      </article>
    );
  }

  return (
    <article className="about-class-info">
      <ul>
        {Object.entries(info).map(
          ([key, value]) =>
            key && (
              <li key={key}>
                <span className="css-key">{key}</span>:{" "}
                <span className="css-value">{value}</span>;
              </li>
            )
        )}
      </ul>
    </article>
  );
};

export default AboutClassInfo;
