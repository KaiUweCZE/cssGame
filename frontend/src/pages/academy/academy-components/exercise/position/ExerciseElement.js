import { exercises } from "@/pages/academy/data/ExercisesSettings";
import React from "react";

const ExerciseElement = ({ values, levelId }) => {
  const data = exercises[levelId - 1];
  const styles = values.reduce((acc, { property, value }) => {
    return {
      ...acc,
      [property]: value,
    };
  }, {});

  return (
    <div
      className={`exercise-element ${data.elementStyle}`}
      style={styles}
    ></div>
  );
};

export default ExerciseElement;
