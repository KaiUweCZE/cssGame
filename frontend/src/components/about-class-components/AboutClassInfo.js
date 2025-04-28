import React from "react";

const renderStyleItem = (key, value) => (
  <li key={key}>
    <span className="css-key">{key}</span>:{" "}
    <span className="css-value">{value}</span>;
  </li>
);

const AboutClassInfo = ({ info, name }) => {
  if (!info || Object.keys(info).length === 0) {
    return (
      <article className="about-class-info">
        <li>nothing to see</li>
      </article>
    );
  }

  if (name === "parts") {
    return (
      <article className="about-class-info">
        {/* Main style section */}
        {info.mainStyle && info.mainStyle.length > 0 && <div className="style-section">
          <h3>Common styles</h3>
          <ul>
            {Object.entries(info.mainStyle || {}).map(
              ([key, value]) => key && renderStyleItem(key, value)
            )}
          </ul>
        </div>}

        {/* Children styles section */}
        {info.childrenStyle && Object.keys(info.childrenStyle).length > 0 && (
          <div className="style-section children-styles">
            {Object.entries(info.childrenStyle).map(([childKey, childValue]) => {
              // Skip if not a valid element object
              if (Object.keys(childValue).length === 0) return null;
              
              // Convert numeric keys to numbered elements
              const elementNum = isNaN(Number(childKey)) ? childKey : Number(childKey) + 1;
              
              return (
                <div key={childKey} className="element-style">
                  <h4>{elementNum}. element {"{"}</h4>
                  <ul>
                    {Object.entries(childValue).map(
                      ([styleKey, styleValue]) => 
                        styleKey && renderStyleItem(styleKey, styleValue)
                    )}
                  </ul>
                  <h4>{"}"}</h4>
                </div>
              );
            })}
          </div>
        )}
      </article>
    );
  }

  return (
    <article className="about-class-info">
      <ul className="about-class-info-list">
        {Object.entries(info).map(
          ([key, value]) => key && renderStyleItem(key, value)
        )}
      </ul>
    </article>
  );
};

export default AboutClassInfo;
