import React, { useContext, useState } from "react";
import { exercises } from "../data/ExercisesSettings";
import { AcamedyContext } from "../context/AcademyContext";
import ExerciseBox from "./exercise/ExerciseBox";
import ExerciseHelp from "./exercise/ExerciseHelp";

const AcademyExercise = ({ level }) => {
  const { cssValues, setCssValues } = useContext(AcamedyContext);
  const data = exercises.find((e) => e.id === level);
  const { properties, help } = data;
  const [focusedProperty, setFocusedProperty] = useState(null);

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
        <h3>Try Own Setting:</h3>

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
                  onFocus={() => {
                    /* Set the delay compared to onBlur so that focusedProperty
                    is no switched to null */
                    setTimeout(() => setFocusedProperty(property), 20);
                  }}
                  onBlur={() => {
                    setTimeout(() => setFocusedProperty(null), 10);
                  }}
                />
                {focusedProperty === property && help[property] && (
                  <ExerciseHelp
                    property={property}
                    values={help[property]}
                    handleState={handleState}
                    setFocusedProperty={setFocusedProperty}
                  />
                )}
              </div>
            </>
          ))}
        </form>
        <ExerciseBox levelId={level} />
      </div>
    </div>
  );
};

export default AcademyExercise;
