import React, { useContext } from "react";
import ExerciseElement from "./ExerciseElement";
import { AcamedyContext } from "@/pages/academy/context/AcademyContext";
import { exercises } from "@/pages/academy/data/ExercisesSettings";

const ExerciseBox = ({ levelId }) => {
  const data = exercises[levelId - 1];
  const { cssValues } = useContext(AcamedyContext);
  const { wraperStyle, containerStyle, subWrap, editableIndex } = data;
  // variable count of elemnts
  const elements = Array.from(
    { length: data.numberOfElements || 1 },
    (_, i) => i
  );
  return (
    <div className={`exercise-wrapper ${wraperStyle}`}>
      <div className={`exercise-box ${containerStyle}`}>
        {subWrap ? (
          <div className="subwrap">
            {elements.map((index) => (
              <ExerciseElement
                key={index}
                values={cssValues}
                levelId={levelId}
                editable={index === editableIndex}
              />
            ))}
          </div>
        ) : (
          elements.map((index) => (
            <ExerciseElement
              key={index}
              values={cssValues}
              levelId={levelId}
              editable={index === editableIndex}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ExerciseBox;
