import React from "react";

const ExerciseHelp = ({
  property,
  values,
  handleState,
  setFocusedProperty,
}) => {
  const handleSuggestionClick = (property, value) => {
    handleState(property, value);
    setFocusedProperty(null);
  };
  return (
    <ul className="exercise-help">
      {values.map((value) => (
        <li
          key={value}
          onMouseDown={() => handleSuggestionClick(value, property)}
        >
          {value}
        </li>
      ))}
    </ul>
  );
};

export default ExerciseHelp;
