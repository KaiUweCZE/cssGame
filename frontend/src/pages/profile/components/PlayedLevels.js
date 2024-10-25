import React from "react";

const PlayedLevels = ({ playedLevels = [] }) => {
  return (
    <section>
      <h2>You played</h2>
      <ul>
        {playedLevels?.map((level) => (
          <li key={level.id}>{level.name}</li>
        ))}
      </ul>
    </section>
  );
};

export default PlayedLevels;
