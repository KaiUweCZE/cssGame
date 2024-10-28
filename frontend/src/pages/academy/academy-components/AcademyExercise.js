import React, { useContext, useState } from "react";
import { exercises } from "../data/ExercisesSettings";
import { AcamedyContext } from "../context/AcademyContext";
import ExerciseBox from "./exercise/position/ExerciseBox";

const AcademyExercise = ({ level }) => {
  const { cssValues, setCssValues } = useContext(AcamedyContext);
  const data = exercises.find((e) => e.id === level);
  const { properties, help } = data;

  const handleState = (value, property) => {
    const newValue = { property, value };

    setCssValues((prev) => {
      const existingValueIndex = prev.findIndex(
        (item) => item.property === property
      );
      if (existingValueIndex !== -1) {
        const newValues = [...prev];
        newValues[existingValueIndex] = newValue;
        return newValues;
      } else {
        return [...prev, newValue];
      }
    });
  };

  const getValue = (property) => {
    const input = cssValues.find((value) => value.property === property);
    return input ? input.value : "";
  };

  return (
    <div className="level-exercise">
      <div className="editable-box">
        <h2>setting this:</h2>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="academy-level-form"
        >
          {properties.map((property) => (
            <>
              <div key={property} className="input-box">
                <label htmlFor={`input-${property}`}>{property}: </label>{" "}
                <input
                  type="text"
                  value={getValue(property)}
                  id={`input-${property}`}
                  onChange={(e) => handleState(e.target.value, property)}
                  list={`suggestions-${property}`}
                />
              </div>
              {/* <ul className="hidden">
                {help[property]?.map((suggestion) => (
                  <li key={suggestion} value={suggestion}>
                    {suggestion}
                  </li>
                ))}
              </ul>*/}
            </>
          ))}
        </form>
        <ExerciseBox levelId={level} />
      </div>
    </div>
  );
};

export default AcademyExercise;
