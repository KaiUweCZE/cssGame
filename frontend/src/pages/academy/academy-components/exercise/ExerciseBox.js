import React, { useContext, useEffect, useState } from "react";
import ExerciseElement from "./ExerciseElement";
import { AcademyContext } from "@/pages/academy/context/AcademyContext";
import { exercises } from "@/pages/academy/data/exercises-settings";

const ExerciseBox = ({ levelId }) => {
  const data = exercises[levelId - 1];
  const { cssValues, editablePart, amountOfElements } =
    useContext(AcademyContext);
  const { wraperStyle, containerStyle, subWrap, editableIndex } = data;

  console.log("actual data: ", data.editablePart);

  const styles =
    editablePart === "box"
      ? cssValues.reduce((acc, { property, value }) => {
          return {
            ...acc,
            [property]: value,
          };
        }, {})
      : {};

  // variable count of elemnts
  const elements = Array.from(
    { length: amountOfElements || data.numberOfElements },
    (_, i) => i
  );

  useEffect(() => {
    console.log("cssValues: ", cssValues);
  }, [cssValues]);
  return (
    <div className={`exercise-wrapper ${wraperStyle}`}>
      <div
        className={`exercise-box ${containerStyle}`}
        style={editablePart === "box" ? styles : {}}
      >
        {subWrap ? (
          <div className="subwrap">
            {elements.map((index) => (
              <ExerciseElement
                key={index}
                values={cssValues}
                levelId={levelId}
                editable={editablePart === "element" && index === editableIndex}
              />
            ))}
          </div>
        ) : (
          elements.map((index) => (
            <ExerciseElement
              key={index}
              values={cssValues}
              levelId={levelId}
              editable={editablePart === "element" && index === editableIndex}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ExerciseBox;
