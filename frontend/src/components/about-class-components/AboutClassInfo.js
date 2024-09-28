import React from "react";

const AboutClassInfo = ({ information }) => {
  if (!information || Object.keys(information).length === 0) {
    return (
      <article className="about-class__article">
        <li>nothing to see</li>
      </article>
    );
  }

  return (
    <article className="about-class__article">
      <ul>
        {Object.entries(information).map(
          ([key, value]) =>
            key && (
              <li key={key}>
                {key}: {value}
              </li>
            )
        )}
      </ul>
    </article>
  );
};

export default AboutClassInfo;
