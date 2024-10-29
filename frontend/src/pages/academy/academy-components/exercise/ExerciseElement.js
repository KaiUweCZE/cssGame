import { exercises } from "@/pages/academy/data/ExercisesSettings";
import React from "react";

const ExerciseElement = ({ values, levelId, editable }) => {
  const data = exercises[levelId - 1];
  const styles = editable
    ? values.reduce((acc, { property, value }) => {
        return {
          ...acc,
          [property]: value,
        };
      }, {})
    : {};

  const elementClass = editable
    ? `exercise-element ${data.elementStyle} editable-element`
    : `exercise-element ${data.elementStyle}`;
  return <div className={elementClass} style={styles}></div>;
};

export default ExerciseElement;
