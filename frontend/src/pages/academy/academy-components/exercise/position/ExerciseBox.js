import React, { useContext } from "react";
import ExerciseElement from "./ExerciseElement";
import { AcamedyContext } from "@/pages/academy/context/AcademyContext";
import { exercises } from "@/pages/academy/data/ExercisesSettings";

const ExerciseBox = ({ levelId }) => {
  const data = exercises[levelId - 1];
  const { cssValues } = useContext(AcamedyContext);
  return (
    <div className={`exercise-box ${data.containerStyle}`}>
      <ExerciseElement values={cssValues} levelId={levelId} />
      <ExerciseElement values={cssValues} levelId={levelId} />
    </div>
  );
};

export default ExerciseBox;
